import { useEffect, useRef, useState } from 'preact/hooks';
import { navStructure } from '../scripts/topics.js';
import { loadExamBank } from '../scripts/problems.js';
import { EXAM_DURATION, EXAM_STORAGE_KEY, buildExam, scoreExam, remainingTime, validSession } from '../scripts/exam.js';
import { RichText } from '../scripts/components/RichText.jsx';
import { CHOICE_LETTERS } from '../scripts/components/PracticeProblems.jsx';
import { resources } from '../scripts/syllabus.js';
function readSession() {
  try { const value=JSON.parse(localStorage.getItem(EXAM_STORAGE_KEY)); return validSession(value) ? value : null; } catch { return null; }
}
function formatTime(seconds) {
  return [Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(n=>String(n).padStart(2,'0')).join(':');
}
export function MockExam() {
  const [session,setSession]=useState(readSession);
  const index=session?.position ?? 0;
  const sessionRef=useRef(session);
  function commitSession(update) {
    const current=sessionRef.current;
    const next=current && !current.submitted && current.deadline<=Date.now()
      ? {...current,submitted:true}
      : typeof update === "function" ? update(current) : update;
    sessionRef.current=next;
    try { localStorage.setItem(EXAM_STORAGE_KEY,JSON.stringify(next)); } catch { /* Session remains usable in memory. */ }
    setSession(next);
  }
  function setIndex(position) { commitSession(current=>({...current,position})); }
  const [now,setNow]=useState(Date.now());
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  const [confirmSubmit,setConfirmSubmit]=useState(false);
  const [filter,setFilter]=useState('all');
  const questionRef=useRef(null);
  const confirmationRef=useRef(null);
  const mounted=useRef(true);
  useEffect(()=>()=>{mounted.current=false;},[]);
  useEffect(()=>{
    if (!session || session.submitted) return;
    const tick=()=>{
      const time=Date.now();setNow(time);
      if (remainingTime(session.deadline,time)===0) commitSession(current=>({...current,submitted:true}));
    };
    tick();
    const interval=setInterval(tick,1000);
    window.addEventListener('focus',tick);
    return ()=>{ clearInterval(interval);window.removeEventListener('focus',tick); };
  },[session?.deadline,session?.submitted]);
  useEffect(()=>{
    if (!session || session.submitted) return;
    const handler=event=>{event.preventDefault();event.returnValue='';};
    window.addEventListener('beforeunload',handler);
    return ()=>window.removeEventListener('beforeunload',handler);
  },[Boolean(session),session?.submitted]);
  useEffect(()=>{questionRef.current?.focus({preventScroll:true});},[index,session?.submitted]);
  useEffect(()=>{ if(confirmSubmit) confirmationRef.current?.focus(); },[confirmSubmit]);
  async function start() {
    setLoading(true);setError('');
    try {
      const bank = await loadExamBank();
      if (!mounted.current) return;
      commitSession({version:1,bankVersion:2,position:0,questions:buildExam(bank),answers:Array(30).fill(null),flags:[],deadline:Date.now()+EXAM_DURATION,submitted:false});
      setNow(Date.now());setIndex(0);setConfirmSubmit(false);setFilter('all');
    } catch { if(mounted.current) setError('The question bank could not be loaded. Check your connection and try again.'); }
    finally { if(mounted.current) setLoading(false); }
  }
  if (!session) return <>
    <h1 class="page-title">Practice under exam conditions</h1><p class="page-subtitle">30 questions · Three hours · Five answer choices</p>
    <p class="intro">Work through a randomized paper, flag questions to revisit, and see your solutions after submitting. Answers and the deadline are saved in this browser when storage is available.</p>
    <div class="exam-brief"><h2>Your practice paper</h2><ul class="concept-list"><li>8 general probability, 14 univariate, and 8 multivariate questions.</li><li>All questions are scored. Unanswered questions count as incorrect.</li><li>The timer continues when you navigate away or close the tab.</li><li>Use the official normal table and practice recalling formulas.</li></ul></div>
    <p class="lesson-paragraph">Each paper draws from 116 original questions kept separate from chapter practice. They combine syllabus skills and require you to choose a method. Later papers can repeat questions from earlier papers. The bank has not been statistically calibrated to the real exam; its score is not a pass/fail prediction.</p>
    <a href={resources[1][1]} target="_blank" rel="noreferrer">Open official normal table</a>
    <div class="problem-actions"><button class="home-cta" disabled={loading} onClick={start}>{loading?'Preparing questions…':'Start three-hour practice exam'}</button></div>{error && <p role="alert">{error}</p>}
  </>;
  const answered=session.answers.filter(a=>a!==null).length;
  if (session.submitted) {
    const score=scoreExam(session.questions,session.answers);
    const visible=session.questions.map((question,i)=>({question,i})).filter(({question,i})=>filter==='all'||filter==='incorrect'&&session.answers[i]!==question.answer||filter==='flagged'&&session.flags.includes(i));
    return <>
      <h1 class="page-title">Practice exam review</h1><p class="page-subtitle">{score} of 30 correct · {30-answered} unanswered</p>
      <p class="intro">Use the solutions to identify what to revisit. This practice score does not estimate an official passing result.</p>
      <div class="exam-breakdown">{navStructure.map(category=>{
        const items=session.questions.map((q,i)=>({q,i})).filter(({q})=>q.categoryId===category.id);
        return <p key={category.id}><strong>{category.title}</strong><span>{items.filter(({q,i})=>session.answers[i]===q.answer).length}/{items.length} correct</span></p>;
      })}</div>
      <div class="review-toolbar"><label>Review <select value={filter} onChange={event=>setFilter(event.target.value)}><option value="all">All questions</option><option value="incorrect">Incorrect & unanswered</option><option value="flagged">Flagged questions</option></select></label><button class="problem-action" disabled={loading} onClick={start}>{loading?'Preparing…':'Start a new exam'}</button></div>
      {error && <p role="alert">{error}</p>}
      {!visible.length && <p>No questions match this review filter.</p>}
      {visible.map(({question,i})=><article class="problem" key={question.id}>
        <h2 class="problem-heading">Question {i+1}</h2><p class="problem-question"><RichText text={question.question}/></p>
        <p class={`problem-feedback ${session.answers[i]===question.answer?'correct':'incorrect'}`}>Your answer: {session.answers[i]===null?'Unanswered':CHOICE_LETTERS[session.answers[i]]}. Correct answer: {CHOICE_LETTERS[question.answer]}.</p>
        <div class="choice-list review-choices">{question.choices.map((choice,j)=><div key={j} class={`choice ${j===question.answer?'correct':''} ${j===session.answers[i]&&j!==question.answer?'incorrect':''}`}><span class="choice-letter">{CHOICE_LETTERS[j]}</span><span class="choice-text"><RichText text={choice}/></span>{j===question.answer&&<span class="choice-mark" aria-label="Correct answer">✓</span>}{j===session.answers[i]&&j!==question.answer&&<span class="choice-mark" aria-label="Your incorrect answer">×</span>}</div>)}</div>
        <details class="review-solution"><summary>Worked solution</summary><div class="problem-solution">{question.solution.map((step,j)=><p key={j}><RichText text={step}/></p>)}</div></details>
        <a href={`#/${question.topicId}`}>Review this lesson</a>
      </article>)}
    </>;
  }
  const question=session.questions[index];
  const seconds=remainingTime(session.deadline,now);
  const flagged=session.flags.includes(index);
  return <>
    <h1 class="page-title">Practice exam</h1>
    {session.bankVersion !== 2 && <p class="understanding-note">Your saved exam uses the earlier chapter question bank. Finish it to keep your answers; the next exam will use the separate question bank.</p>}
    <div class="exam-status"><strong>{answered}/30 answered</strong><span class={seconds<600?'timer urgent':'timer'} aria-label="Time remaining">{formatTime(seconds)}</span><a href={resources[1][1]} target="_blank" rel="noreferrer">Normal table ↗</a></div>
    <div class="exam-workspace">
      <div class="exam-question"><h2 ref={questionRef} tabIndex={-1} class="question-title">Question {index+1} of 30</h2><p class="problem-question"><RichText text={question.question}/></p>
        <div class="choice-list" role="group" aria-label={`Answer choices for question ${index+1}`}>{question.choices.map((choice,i)=><button type="button" key={i} class={`choice ${session.answers[index]===i?'selected':''}`} aria-pressed={session.answers[index]===i} onClick={()=>commitSession(current=>({...current,answers:current.answers.map((a,j)=>j===index?i:a)}))}><span class="choice-letter">{CHOICE_LETTERS[i]}</span><span class="choice-text"><RichText text={choice}/></span></button>)}</div>
        <div class="problem-actions"><button class="problem-action" aria-pressed={flagged} onClick={()=>commitSession(current=>({...current,flags:flagged?current.flags.filter(i=>i!==index):[...current.flags,index]}))}>{flagged?'Flagged for review':'Flag for review'}</button><button class="problem-action" disabled={session.answers[index]===null} onClick={()=>commitSession(current=>({...current,answers:current.answers.map((a,j)=>j===index?null:a)}))}>Clear answer</button></div>
        <div class="exam-pager"><button class="problem-action" disabled={index===0} onClick={()=>setIndex(index-1)}>Previous</button><button class="problem-action primary-action" disabled={index===29} onClick={()=>setIndex(index+1)}>Next question</button></div>
      </div>
      <aside class="question-navigator"><h2>Question navigator</h2><p>Filled = answered<br/>◆ = flagged for review</p><div class="question-grid">{session.questions.map((q,i)=><button key={q.id} type="button" aria-label={`Question ${i+1}, ${session.answers[i]===null?'unanswered':'answered'}${session.flags.includes(i)?', flagged':''}`} aria-current={i===index?'step':undefined} class={`question-number ${session.answers[i]!==null?'answered':''} ${i===index?'current':''}`} onClick={()=>setIndex(i)}>{i+1}{session.flags.includes(i)&&<span class="flag-marker" aria-hidden="true">◆</span>}</button>)}</div>
        <button class="problem-action submit-exam" onClick={()=>setConfirmSubmit(true)}>Finish exam</button>
      </aside>
    </div>
    {confirmSubmit && <div ref={confirmationRef} tabIndex={-1} class="submit-confirmation" role="region" aria-label="Finish exam confirmation"><h2>Submit your answers?</h2><p>{30-answered} questions are unanswered. Submitting ends this paper and reveals the solutions.</p><div class="problem-actions"><button class="problem-action primary-action" onClick={()=>{commitSession(current=>({...current,submitted:true}));setConfirmSubmit(false);window.scrollTo(0,0);}}>Submit and review</button><button class="problem-action" onClick={()=>setConfirmSubmit(false)}>Keep working</button></div></div>}
  </>;
}

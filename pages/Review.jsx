import { useEffect, useState } from 'preact/hooks';
import { availableTopics, getTopic } from '../scripts/topics.js';
import { loadProblems } from '../scripts/problems.js';
import { generateVariant } from '../scripts/variants.js';
import { selectReview, summarizeLearning, currentLearning } from '../scripts/learning.js';
import { markSupport } from '../scripts/support.js';
import { useLearning } from '../scripts/use-learning.js';
import { shuffle } from '../scripts/exam.js';
import { Problem } from '../scripts/components/PracticeProblems.jsx';
import { DifficultyBadge } from '../scripts/components/DifficultyBadge.jsx';
import { ReasoningCheck } from '../scripts/components/LessonOpening.jsx';
import { RichText } from '../scripts/components/RichText.jsx';
import { methodDrills } from '../scripts/content/method-drills.js';
import teaching from '../scripts/content/teaching.js';
const SESSION_KEY = 'exam-p-review-session-v1';
function readSession() {
  try {
    const v = JSON.parse(localStorage.getItem(SESSION_KEY));
    return v?.version === 1 && Array.isArray(v.questions) && v.questions.length === 8 && v.questions.every(q => getTopic(q.topicId) && typeof q.id === 'string' && typeof q.question === 'string' && q.choices?.length === 5 && q.choices.every(c=>typeof c==='string') && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 5 && Array.isArray(q.solution) && q.solution.every(s=>typeof s==='string')) && Array.isArray(v.answers) && v.answers.length === 8 && v.answers.every(a => a === null || Number.isInteger(a) && a >= 0 && a < 5) && Number.isInteger(v.position) && v.position >= 0 && v.position < 8 ? v : null;
  } catch { return null; }
}
export function Review() {
  const learning = useLearning(), stats = summarizeLearning(learning);
  const [bank, setBank] = useState([]), [error, setError] = useState(false), [session, setSession] = useState(readSession);
  const [drills, setDrills] = useState(() => shuffle(methodDrills).slice(0, 4)), [drillVersion, setDrillVersion] = useState(0), [filter, setFilter] = useState('needs-review');
  useEffect(() => {
    let cancelled = false;
    Promise.all(availableTopics.filter(t => !t.enrichment).map(async t => (await loadProblems(t.id)).map(q => ({ ...q, categoryId: t.categoryId })))).then(groups => { if (!cancelled) setBank(groups.flat()); }, () => { if (!cancelled) setError(true); });
    return () => { cancelled = true; };
  }, []);
  function persist(next) { setSession(next); try { localStorage.setItem(SESSION_KEY, JSON.stringify(next)); } catch { /* Session works in memory. */ } }
  function start() {
    const state = currentLearning();
    const selected = shuffle(selectReview(bank, state)).map(q => {
      const evidence = state.questions[q.id] ?? state.questions[`variant:${q.topicId}`];
      // Keep review scheduling tied to the original concept while changing its values.
      // Preserve multistep challenges rather than replacing them with a foundation drill.
      return evidence && q.level !== 'challenge' ? { ...generateVariant(q.topicId, Math.floor(Math.random() * 1000000)), learningId: state.questions[q.id] ? q.id : `variant:${q.topicId}`, categoryId: q.categoryId } : q;
    });
    persist({ version: 1, questions: selected, answers: Array(8).fill(null), position: 0 });
  }
  const entries = Object.entries(learning.questions);
  const due = entries.filter(([, q]) => q.due <= Date.now()).length;
  const weak = availableTopics.filter(t => !t.enrichment).map(t => {
    const records = entries.filter(([, q]) => q.topicId === t.id);
    const recentMisses = records.filter(([, q]) => !q.attempts.at(-1)?.correct || q.attempts.at(-1)?.assisted).length;
    return { ...t, records, recentMisses };
  }).filter(t => t.recentMisses > 0).sort((a,b) => b.recentMisses-a.recentMisses).slice(0,3);
  const mistakes = entries.filter(([, q]) => q.attempts.some(a => !a.correct)).filter(([, q]) => filter === 'all' || !q.attempts.at(-1).correct || q.attempts.at(-1).assisted).sort((a,b) => b[1].attempts.at(-1).at-a[1].attempts.at(-1).at);
  const completed = session?.answers.every(a => a !== null);
  return <>
    <h1 class="page-title">Review what you understand</h1><p class="page-subtitle">Mixed practice, spaced review, and a record of your mistakes</p>
    <p class="intro">Choose a method without a chapter label giving it away. Review sessions mix all three syllabus areas and prioritize due questions and ideas recently solved with difficulty.</p>
    <dl class="learning-stats"><div><dt>First attempts without help</dt><dd>{stats.independentCorrect}/{stats.independent} correct</dd></div><div><dt>First attempts with support</dt><dd>{stats.assisted}</dd></div><div><dt>High-confidence mistakes</dt><dd>{stats.highConfidenceMisses}</dd></div><div><dt>Due for review</dt><dd>{due}</dd></div></dl>
    <p>Hints and revealed solutions count as support. First attempts remain in your record after retries. Average time to first check: {stats.questions ? Math.round(stats.seconds/stats.questions) : '—'} seconds after first seeing the question on that visit, including pauses. Older saved answers from before this feature are not treated as new learning evidence.</p>
    {weak.length > 0 && <section class="next-review"><h2>Useful next lessons</h2><ul>{weak.map(t => <li key={t.id}><a href={`#/${t.id}`}>{t.label}</a><span>{t.recentMisses} question records currently need another independent attempt.</span></li>)}</ul></section>}
    <section class="mixed-review"><h2>Your next eight questions</h2><p>Success without help schedules review after 1, 3, 7, 14, then 30 days. A miss or supported answer brings the next review back to one day. Only a successful attempt after the scheduled review is due advances to the next interval. You can practice earlier at any time.</p>
      {error && <p role="alert">The question bank could not load. <button class="problem-action" onClick={()=>window.location.reload()}>Reload</button></p>}
      {!session && <button class="problem-action primary-action" disabled={!bank.length} onClick={start}>{bank.length ? 'Start mixed review' : 'Loading question bank…'}</button>}
      {session && <>
        <div class="review-navigation"><p>{session.answers.filter(a=>a!==null).length}/8 checked · current question {session.position+1}</p><div class="problem-actions"><button class="problem-action" disabled={session.position===0} onClick={()=>persist({...session,position:session.position-1})}>Previous question</button><button class="problem-action" disabled={session.position===7} onClick={()=>persist({...session,position:session.position+1})}>Next question</button></div></div>
        <Problem key={session.questions[session.position].id} problem={session.questions[session.position]} number={session.position+1} initialAnswer={session.answers[session.position]} hideTopic onAnswer={answer => {const answers=[...session.answers]; answers[session.position]=answer;persist({...session,answers});}} />
        {completed && <p role="status">Session complete: {session.questions.filter((q,i)=>q.answer===session.answers[i]).length}/8 correct in your checked answers. Your learning record separately tracks first attempts and support.</p>}
        <details class="new-session"><summary>{completed ? 'Start another session' : 'Replace this review session'}</summary><p>{completed?'Choose eight more questions from your current review needs.':'Starting a new session replaces these eight questions. Your recorded attempts remain saved.'}</p><button class="problem-action" disabled={!bank.length} onClick={start}>Start new mixed review</button></details>
      </>}
      <p class="understanding-note">Sessions and learning records are saved in this browser when storage is available. Foundation exercises can return with different numbers. Challenges retain their full reasoning and original question; retries after checking an answer count as supported practice.</p>
    </section>
    <section class="method-drills"><h2>Choose the tool before doing arithmetic</h2><p>These short drills focus on the assumptions and stopping rules that distinguish methods.</p>{drills.map((check,i)=><ReasoningCheck key={`${drillVersion}:${i}`} check={check} title={`Method decision ${i+1}`} />)}<button class="problem-action" onClick={()=>{setDrills(shuffle(methodDrills).slice(0,4));setDrillVersion(drillVersion+1);}}>New method decisions</button></section>
    <section class="mistake-notebook"><h2>Your mistake notebook</h2><label>Show<select value={filter} onChange={e=>setFilter(e.currentTarget.value)}><option value="needs-review">Still needs review</option><option value="all">All recorded mistakes</option></select></label>
      {!mistakes.length && <p>{filter==='all'?'No mistakes recorded yet. Checked answers will build this notebook.':'No unresolved mistakes in this view. Use mixed review to test what you retain.'}</p>}
      {mistakes.map(([id,q])=>{
        const original=bank.find(p=>p.id===id);
        const last=q.attempts.at(-1), lastMiss=q.attempts.findLast(a=>!a.correct), topic=getTopic(q.topicId);
        const recovered=last.correct&&!last.assisted;
        const source=lastMiss?.source ?? original;
        return <article class="mistake-entry" key={id}>
          <h3><a href={`#/${q.topicId}`}>{topic?.label??q.topicId}</a>{source && <DifficultyBadge problem={{ ...original, ...source, topicId: q.topicId }} />}</h3>
          {source&&<p><RichText text={source.question}/></p>}
          {lastMiss?.source&&<p>Your answer: <RichText text={source.selectedChoice}/> · Correct answer: <RichText text={source.correctChoice}/></p>}
          <p>{q.attempts.filter(a=>!a.correct).length} missed attempts · {recovered?'Later solved a question in this lesson independently':'Needs an independent answer'} · review {new Date(q.due).toLocaleDateString()}</p>
          <p><strong>Check:</strong> {teaching[q.topicId]?.trap}</p>
          {lastMiss?.confidence==='high'&&<p>You were highly confident on a missed attempt. Explain the method before calculating again.</p>}
          <details onToggle={e=>{if(e.currentTarget.open&&source?.id)markSupport(source.id);}}>
            <summary>Recall the key idea and solution</summary>
            <p>{teaching[q.topicId]?.method}</p>
            {source?.solution&&<ol>{source.solution.map((step,index)=><li key={index}><RichText text={step}/></li>)}</ol>}
          </details>
        </article>;
      })}
    </section>
  </>;
}

import { useEffect, useRef, useState } from 'preact/hooks';
import { RichText } from './RichText.jsx';
import { ReasoningCheck } from './LessonOpening.jsx';
import { loadProblems } from '../problems.js';
import { hasSupport, markSupport } from '../support.js';
import { saveAttempt, summarizeLearning } from '../learning.js';
import { useLearning } from '../use-learning.js';

export const CHOICE_LETTERS = ['A', 'B', 'C', 'D', 'E'];
export function Problem({ problem, number, initialAnswer = null, onAnswer = () => {}, guided = false, hideTopic = false }) {
  const [selected, setSelected] = useState(initialAnswer), [checked, setChecked] = useState(initialAnswer !== null);
  const [hintCount, setHintCount] = useState(0), [steps, setSteps] = useState(0), [confidence, setConfidence] = useState('');
  const [showFollowup, setShowFollowup] = useState(false), [assisted, setAssisted] = useState(guided || hasSupport(problem.id));
  const feedbackRef = useRef(null), firstChoiceRef = useRef(null), refocus = useRef(false), started = useRef(null), articleRef = useRef(null);
  const restored = useRef(initialAnswer !== null);
  const correct = selected === problem.answer;
  const revealSupport = () => { setAssisted(true); markSupport(problem.id); };
  useEffect(() => {
    if (checked) feedbackRef.current?.focus({ preventScroll: true });
    else if (refocus.current) { refocus.current = false; firstChoiceRef.current?.focus(); }
  }, [checked]);
  useEffect(() => {
    if (!globalThis.IntersectionObserver) { started.current = Date.now(); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        started.current ??= Date.now(); observer.disconnect();
      }
    }, { threshold: .1 });
    if(articleRef.current) observer.observe(articleRef.current);
    return () => observer.disconnect();
  }, []);
  function checkAnswer() {
    setChecked(true);
    if (problem.topicId) saveAttempt(problem.learningId ?? problem.id, problem.topicId, {
      at: Date.now(), correct, assisted, confidence, selected,
      seconds: Math.max(0, Math.round((Date.now() - (started.current ?? Date.now())) / 1000)), hints: hintCount,
      ...(!correct ? { source: { id: problem.id, question: problem.question, selectedChoice: problem.choices[selected],
        correctChoice: problem.choices[problem.answer], feedback: problem.feedback?.[selected] || problem.trap,
        solution: problem.solution } } : {}),
    });
    markSupport(problem.id); onAnswer(selected);
  }
  function retry() {
    refocus.current = true; setSelected(null); setChecked(false); setSteps(0); setHintCount(0); setConfidence(''); setShowFollowup(false);
    // Once this answer has been revealed, a retry cannot be counted as independent.
    revealSupport(); restored.current = false; started.current = Date.now(); onAnswer(null);
  }
  return <article class="problem" ref={articleRef}>
    <h3 class="problem-heading">{guided ? 'Your turn' : `Question ${number}`}{problem.variant && <span class="variant-label">New numbers</span>}</h3>
    <p class="problem-question"><RichText text={problem.question} /></p>
    <div class="choice-list" role="group" aria-label={`Answer choices for ${guided ? 'guided practice' : `question ${number}`}`}>
      {problem.choices.map((choice, index) => <button type="button" key={index} ref={index === 0 ? firstChoiceRef : undefined}
        class={`choice ${selected === index ? 'selected' : ''} ${checked && index === problem.answer ? 'correct' : ''} ${checked && index === selected && !correct ? 'incorrect' : ''}`}
        aria-pressed={selected === index} disabled={checked} onClick={() => setSelected(index)}>
        <span class="choice-letter">{CHOICE_LETTERS[index]}</span><span class="choice-text"><RichText text={choice} /></span>
        {checked && index === problem.answer && <span class="choice-mark" aria-label="Correct answer">✓</span>}
        {checked && index === selected && !correct && <span class="choice-mark" aria-label="Your incorrect answer">×</span>}
      </button>)}
    </div>
    {!checked && <label class="confidence-label">Before checking, how confident are you?<select value={confidence} onChange={e => setConfidence(e.currentTarget.value)}><option value="">Choose (optional)</option><option value="low">Low: I guessed or feel unsure</option><option value="medium">Medium: I have a method</option><option value="high">High: I can explain my answer</option></select></label>}
    {checked && <div ref={feedbackRef} tabIndex={-1} class={`problem-feedback ${correct ? 'correct' : 'incorrect'}`} role="status">
      <p>{correct ? 'Correct.' : `Your choice was ${CHOICE_LETTERS[selected]}; the correct answer is ${CHOICE_LETTERS[problem.answer]}.`}</p>
      {!correct && <p><RichText text={problem.feedback?.[selected] || `Check this part of your reasoning: ${problem.trap ?? 'Match the requested event to the calculation in the solution.'}`} /></p>}
      {correct && <p>{restored.current ? 'Saved checked answer. Your learning record tracks first attempts separately.' : assisted ? 'Solved with support. Try a fresh question later without hints.' : 'Solved without revealing a hint or solution.'}</p>}
      {!correct && problem.checkpoint && <button type="button" class="problem-action" aria-expanded={showFollowup} onClick={() => setShowFollowup(!showFollowup)}>Check the underlying idea</button>}
    </div>}
    {showFollowup && <ReasoningCheck check={problem.checkpoint} title="Repair the reasoning" />}
    <div class="problem-actions">
      {!checked && <button type="button" class="problem-action primary-action" disabled={selected === null} onClick={checkAnswer}>Check answer</button>}
      {!checked && hintCount < (problem.hints?.length ?? 0) && <button type="button" class="problem-action" onClick={() => { setHintCount(hintCount + 1); revealSupport(); }}>{hintCount === 0 ? 'Hint: choose a method' : 'Hint: set up the calculation'}</button>}
      {steps < problem.solution.length && <button type="button" class="problem-action" onClick={() => { setSteps(steps + 1); revealSupport(); }}>{steps === 0 ? 'Show first solution step' : 'Show next solution step'}</button>}
      {steps < problem.solution.length && <button type="button" class="problem-action" onClick={() => { setSteps(problem.solution.length); revealSupport(); }}>Show full solution</button>}
      {steps > 0 && <button type="button" class="problem-action" onClick={() => setSteps(0)}>Hide solution</button>}
      {checked && <button type="button" class="problem-action" onClick={retry}>Try again</button>}
    </div>
    {hintCount > 0 && <aside class="problem-hints" aria-live="polite">{problem.hints.slice(0, hintCount).map((hint, index) => <p key={index}><strong>{index === 0 ? 'Method' : 'Setup'}:</strong> <RichText text={hint} /></p>)}</aside>}
    {steps > 0 && <div class="problem-solution" aria-live="polite"><h4>Solution · {steps} of {problem.solution.length} steps</h4>{problem.solution.slice(0, steps).map((step,index) => <p key={index}><RichText text={step} /></p>)}</div>}
    {hideTopic && checked && <p><a href={`#/${problem.topicId}`}>Review this lesson</a></p>}
  </article>;
}
function readAnswers(topicId) {
  try {
    const stored = JSON.parse(localStorage.getItem(`exam-p-practice-${topicId}`));
    return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
  } catch { return {}; }
}
export function UnderstandingSummary({ topicId }) {
  const state = useLearning(), stats = summarizeLearning(state, topicId);
  if (!stats.questions) return <p class="understanding-note">Your first-attempt accuracy and hint use will appear after you check a question. Lesson completion is tracked separately.</p>;
  return <div class="understanding-summary" aria-live="polite"><p><strong>{stats.independentCorrect}/{stats.independent}</strong> first attempts correct without help · <strong>{stats.assisted}</strong> first attempts with support · <strong>{stats.highConfidenceMisses}</strong> high-confidence mistakes</p><p>First attempts stay in your record when you retry. Time runs from the question first appearing on screen to its first check on that visit, including pauses. <a href="#/review">Review your learning record</a>.</p></div>;
}
export function PracticeProblems({ topicId }) {
  const [problems,setProblems] = useState([]), [error,setError] = useState(false), [answers,setAnswers] = useState(() => readAnswers(topicId));
  useEffect(() => {
    let cancelled = false;
    loadProblems(topicId).then(loaded => { if (!cancelled) setProblems(loaded); }, () => { if (!cancelled) setError(true); });
    return () => { cancelled = true; };
  }, [topicId]);
  const validAnswer = problem => Number.isInteger(answers[problem.question]) && answers[problem.question] >= 0 && answers[problem.question] < 5 ? answers[problem.question] : null;
  function record(problem,answer) {
    const next = {...answers, [problem.question]: answer}; setAnswers(next);
    try { localStorage.setItem(`exam-p-practice-${topicId}`,JSON.stringify(next)); } catch { /* Answers still work without storage. */ }
  }
  return <section class="practice-problems" id="practice">
    <div class="practice-header"><h2>Practice independently</h2><span class="weight-label">{problems.length || '…'} questions</span></div>
    <p class="practice-intro">Choose a method before calculating. Aim for about six minutes per question. Use a hint when stuck, then revisit the idea with a fresh question. These are original study exercises in the five-choice format, not released SOA questions.</p>
    <UnderstandingSummary topicId={topicId} />
    {error ? <p role="alert">Practice could not be loaded. <button class="problem-action" onClick={() => window.location.reload()}>Reload</button></p> : !problems.length ? <p role="status">Loading questions…</p> : problems.map((problem,index) => <Problem key={problem.question} problem={problem} number={index+1} initialAnswer={validAnswer(problem)} onAnswer={answer => record(problem,answer)} />)}
  </section>;
}

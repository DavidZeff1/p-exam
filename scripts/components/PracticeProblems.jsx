import { useEffect, useRef, useState } from 'preact/hooks';
import { RichText } from './RichText.jsx';
import { loadProblems } from '../problems.js';

export const CHOICE_LETTERS = ['A', 'B', 'C', 'D', 'E'];
export function Problem({ problem, number, initialAnswer = null, onAnswer = () => {} }) {
  const [selected, setSelected] = useState(initialAnswer);
  const [checked, setChecked] = useState(initialAnswer !== null);
  const [showSolution, setShowSolution] = useState(false);
  const feedbackRef = useRef(null);
  const firstChoiceRef = useRef(null);
  const refocus = useRef(false);
  const correct = selected === problem.answer;
  useEffect(() => {
    if (checked) feedbackRef.current?.focus({ preventScroll: true });
    else if (refocus.current) { refocus.current = false; firstChoiceRef.current?.focus(); }
  }, [checked]);
  return <article class="problem">
    <h3 class="problem-heading">Question {number}</h3>
    <p class="problem-question"><RichText text={problem.question} /></p>
    <div class="choice-list" role="group" aria-label={`Answer choices for question ${number}`}>
      {problem.choices.map((choice, index) => <button type="button" key={index} ref={index === 0 ? firstChoiceRef : undefined}
        class={`choice ${selected === index ? 'selected' : ''} ${checked && index === problem.answer ? 'correct' : ''} ${checked && index === selected && !correct ? 'incorrect' : ''}`}
        aria-pressed={selected === index} disabled={checked} onClick={() => setSelected(index)}>
        <span class="choice-letter">{CHOICE_LETTERS[index]}</span><span class="choice-text"><RichText text={choice} /></span>
        {checked && index === problem.answer && <span class="choice-mark" aria-label="Correct answer">✓</span>}
        {checked && index === selected && !correct && <span class="choice-mark" aria-label="Your incorrect answer">×</span>}
      </button>)}
    </div>
    {checked && <p ref={feedbackRef} tabIndex={-1} class={`problem-feedback ${correct ? 'correct' : 'incorrect'}`} role="status">
      {correct ? 'Correct.' : `The correct answer is ${CHOICE_LETTERS[problem.answer]}. Review the solution, then try again.`}
    </p>}
    <div class="problem-actions">
      {!checked && <button type="button" class="problem-action primary-action" disabled={selected === null} onClick={() => {
        setChecked(true); onAnswer(selected);
      }}>Check answer</button>}
      <button type="button" class="problem-action" aria-expanded={showSolution} onClick={() => setShowSolution(!showSolution)}>{showSolution ? 'Hide solution' : 'Show solution'}</button>
      {checked && <button type="button" class="problem-action" onClick={() => {
        refocus.current = true; setSelected(null); setChecked(false); setShowSolution(false); onAnswer(null);
      }}>Try again</button>}
    </div>
    {showSolution && <div class="problem-solution">{problem.solution.map((step,index) => <p key={index}><RichText text={step} /></p>)}</div>}
  </article>;
}
function readAnswers(topicId) {
  try {
    const stored = JSON.parse(localStorage.getItem(`exam-p-practice-${topicId}`));
    return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
  } catch { return {}; }
}
export function PracticeProblems({ topicId }) {
  const [problems,setProblems] = useState([]);
  const [error,setError] = useState(false);
  const [answers,setAnswers] = useState(() => readAnswers(topicId));
  useEffect(() => {
    let cancelled = false;
    loadProblems(topicId).then(loaded => { if (!cancelled) setProblems(loaded); }, () => { if (!cancelled) setError(true); });
    return () => { cancelled = true; };
  }, [topicId]);
  const validAnswer = problem => Number.isInteger(answers[problem.question]) && answers[problem.question] >= 0 && answers[problem.question] < 5 ? answers[problem.question] : null;
  const answered = problems.filter(problem => validAnswer(problem) !== null).length;
  const correct = problems.filter(problem => validAnswer(problem) === problem.answer).length;
  function record(problem,answer) {
    const next = {...answers, [problem.question]: answer};
    setAnswers(next);
    try { localStorage.setItem(`exam-p-practice-${topicId}`,JSON.stringify(next)); } catch { /* Answers still work without storage. */ }
  }
  return <section class="practice-problems" id="practice">
    <div class="practice-header"><h2>Chapter practice</h2><span class="weight-label">{problems.length || '…'} questions</span></div>
    <p class="practice-intro">Original questions in the five-choice Exam P format, with worked solutions. Aim for about six minutes per question. These are study exercises, not released SOA exam questions.</p>
    {error ? <p role="alert">Practice could not be loaded. <button class="problem-action" onClick={() => window.location.reload()}>Reload</button></p> : !problems.length ? <p role="status">Loading questions…</p> : <>
      <p class="practice-score" aria-live="polite">{answered} of {problems.length} checked · {correct} correct in your saved answers <span>Saved in this browser when storage is available.</span></p>
      {problems.map((problem,index) => <Problem key={problem.question} problem={problem} number={index+1} initialAnswer={validAnswer(problem)} onAnswer={answer => record(problem,answer)} />)}
    </>}
  </section>;
}

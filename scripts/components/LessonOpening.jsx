import { useState } from 'preact/hooks';
import teaching from '../content/teaching.js';
import { LearningLab } from './LearningLabs.jsx';
export function ReasoningCheck({ check, title = 'Check your reasoning' }) {
  const [selected, setSelected] = useState(null), [checked, setChecked] = useState(false);
  return <section class="reasoning-check"><h3>{title}</h3><p>{check.question}</p><div class="micro-choices">{check.choices.map((choice, index) => <button type="button" class={`problem-action ${checked && index === check.answer ? 'micro-correct' : ''}`} aria-pressed={selected === index} onClick={() => { setSelected(index); setChecked(false); }}>{choice}</button>)}</div><button type="button" class="problem-action" disabled={selected === null} onClick={() => setChecked(true)}>Check reasoning</button>{checked && <p role="status">{selected === check.answer ? 'Correct. ' : 'Try this reasoning: '}{check.explanation}</p>}</section>;
}
export function LessonOpening({ topicId }) {
  const entry = teaching[topicId];
  return <><section class="lesson-opening" data-topic={topicId}><h2>Start with a question</h2><p class="lesson-scenario">{entry.scenario}</p><p>{entry.intuition}</p><div class="method-note"><h3>When would I use this?</h3><p>{entry.method}</p><p><strong>Watch for:</strong> {entry.trap}</p></div><ReasoningCheck check={entry.check} /></section><LearningLab topicId={topicId} /><p class="lesson-reference-intro">Now connect that reasoning to the definitions, formulas, and examples below.</p></>;
}

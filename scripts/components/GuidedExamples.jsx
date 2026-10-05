import { useMemo, useState } from 'preact/hooks';
import { generateVariant } from '../variants.js';
import teaching from '../content/teaching.js';
import { RichText } from './RichText.jsx';
import { ReasoningCheck } from './LessonOpening.jsx';
import { Problem } from './PracticeProblems.jsx';
export function GuidedExamples({ topicId }) {
  const [version, setVersion] = useState(0);
  const seed = [...topicId].reduce((total, char) => total + char.charCodeAt(0), 0) + version * 71;
  const worked = useMemo(() => generateVariant(topicId, seed), [topicId, seed]);
  const guided = useMemo(() => generateVariant(topicId, seed + 137), [topicId, seed]);
  return <section class="guided-examples"><h2>From a worked example to your own solution</h2><div class="worked-example"><h3>Read one complete example</h3><p><RichText text={worked.question} /></p><ol>{worked.solution.map((step,index) => <li key={index}><RichText text={step} /></li>)}</ol><p><strong>Why this method?</strong> {teaching[topicId].method}</p></div><h3>Build the next solution</h3><p>First check the key decision. Then use the same reasoning with another set of values; reveal only the support you need.</p><ReasoningCheck key={`${topicId}:${version}`} check={teaching[topicId].check} title="Choose the reasoning before calculating" /><Problem key={guided.id} problem={guided} guided /><button type="button" class="problem-action" onClick={() => setVersion(version + 1)}>Another guided example</button><p>The chapter questions below let you apply the method independently.</p></section>;
}

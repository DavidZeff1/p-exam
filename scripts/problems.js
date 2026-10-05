import teaching from './content/teaching.js';
import { distractors } from './content/distractors.js';
const modules = import.meta.glob('../problems/*.js');
export async function loadProblems(topicId) {
  const load = modules[`../problems/${topicId}.js`];
  if (!load) throw new Error(`No practice set for ${topicId}`);
  return (await load()).default.map((problem, index) => ({ ...problem,
    id: `${topicId}:${index}`, topicId,
    hints: [teaching[topicId].method, teaching[topicId].setup],
    feedback: Object.fromEntries(problem.choices.map((choice, choiceIndex) => [choiceIndex,
      distractors[`${topicId}:${index}`]?.[choiceIndex] ?? `Your selected value is ${choice}. Check the requested quantity: ${teaching[topicId].trap} The worked calculation concludes: ${problem.solution.at(-1)}`])),
    checkpoint: teaching[topicId].check,
    trap: teaching[topicId].trap,
  }));
}

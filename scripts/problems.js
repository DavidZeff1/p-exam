import teaching from './content/teaching.js';
import { distractors } from './content/distractors.js';
import { getTopic } from './topics.js';
const modules = import.meta.glob('../problems/*.js');
// Authoring/audit metadata is not needed in saved browser sessions.
function studyQuestion({ verification, designBasis, ...problem }) { return problem; }
export async function loadProblems(topicId) {
  const load = modules[`../problems/${topicId}.js`];
  if (!load) throw new Error(`No practice set for ${topicId}`);
  const [foundation, challenges] = await Promise.all([load(), import('./content/challenges.js')]);
  const basics = foundation.default.map((problem, index) => ({ ...problem,
    id: `${topicId}:${index}`, topicId,
    hints: [teaching[topicId].method, teaching[topicId].setup],
    feedback: Object.fromEntries(problem.choices.map((choice, choiceIndex) => [choiceIndex,
      distractors[`${topicId}:${index}`]?.[choiceIndex] ?? `Your selected value is ${choice}. Check the requested quantity: ${teaching[topicId].trap} The worked calculation concludes: ${problem.solution.at(-1)}`])),
    checkpoint: teaching[topicId].check,
    trap: teaching[topicId].trap,
  }));
  return [...basics, ...challenges.default[topicId].map(studyQuestion)];
}

export async function loadExamBank() {
  const { default: bank } = await import('./content/exam-bank.js');
  return Object.entries(bank).flatMap(([topicId, problems]) => {
    const topic = getTopic(topicId);
    return problems.map(problem => ({ ...studyQuestion(problem), categoryId: topic.categoryId,
      sectionTitle: topic.sectionTitle, enrichment: topic.enrichment }));
  });
}

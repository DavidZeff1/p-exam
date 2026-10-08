import { getTopic, getAdjacentTopics } from './topics.js';
import { getTopicSection, sectionQuestionsPath } from './sections.js';

export const questionsPath = id => `${id}/questions`;

export function getStudyRoute(path) {
  const questions = path.endsWith('/questions');
  const topic = getTopic(questions ? path.slice(0, -'/questions'.length) : path);
  return { topic, questions: Boolean(topic && questions) };
}

// Read a chapter, answer its questions, then continue to the next chapter.
export function getStudyPager(topic, questions = false) {
  const { prev, next } = getAdjacentTopics(topic.id);
  const section = getTopicSection(topic.id);
  const previousSection = prev && getTopicSection(prev.id);
  const lastInSection = section.items.at(-1).id === topic.id;
  const firstInSection = section.items[0].id === topic.id;
  return {
    prev: questions
      ? { path: topic.id, label: topic.label }
      : prev && (firstInSection
        ? { path: sectionQuestionsPath(previousSection.id), label: `Mixed questions · All ${previousSection.letter}` }
        : { path: questionsPath(prev.id), label: `Questions · ${prev.label}` }),
    next: questions
      ? lastInSection
        ? { path: sectionQuestionsPath(section.id), label: `Mixed questions · All ${section.letter}` }
        : next && { path: next.id, label: next.label }
      : { path: questionsPath(topic.id), label: `Questions · ${topic.label}` },
  };
}

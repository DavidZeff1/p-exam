import { getTopic, getAdjacentTopics } from './topics.js';

export const questionsPath = id => `${id}/questions`;

export function getStudyRoute(path) {
  const questions = path.endsWith('/questions');
  const topic = getTopic(questions ? path.slice(0, -'/questions'.length) : path);
  return { topic, questions: Boolean(topic && questions) };
}

// Read a chapter, answer its questions, then continue to the next chapter.
export function getStudyPager(topic, questions = false) {
  const { prev, next } = getAdjacentTopics(topic.id);
  return {
    prev: questions
      ? { path: topic.id, label: topic.label }
      : prev && { path: questionsPath(prev.id), label: `Questions · ${prev.label}` },
    next: questions
      ? next && { path: next.id, label: next.label }
      : { path: questionsPath(topic.id), label: `Questions · ${topic.label}` },
  };
}

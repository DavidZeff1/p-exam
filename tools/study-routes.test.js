import test from 'node:test';
import assert from 'node:assert/strict';
import { availableTopics } from '../scripts/topics.js';
import { getStudyRoute, getStudyPager, questionsPath } from '../scripts/study-routes.js';
import challenges from '../scripts/content/challenges.js';

test('Every chapter has a direct questions route with five distinct multistep exercises', () => {
  for (const topic of availableTopics) {
    assert.deepEqual(getStudyRoute(topic.id), { topic, questions: false });
    assert.deepEqual(getStudyRoute(questionsPath(topic.id)), { topic, questions: true });
    const bank = challenges[topic.id];
    assert.equal(bank.length, 5, topic.id);
    assert.equal(new Set(bank.map(q => q.family)).size, 5, topic.id);
    for (const q of bank) {
      assert.equal(q.topicId, topic.id);
      assert.ok(q.id.startsWith('chapter:')); // Never expose the separate timed-exam bank.
      assert.equal(q.choices.length, 5);
      assert.ok(q.solution.length >= 2);
    }
  }
});

test('Navigation alternates lesson and questions without skipping chapters', () => {
  availableTopics.forEach((topic, index) => {
    const lesson = getStudyPager(topic);
    const questions = getStudyPager(topic, true);
    assert.equal(lesson.next.path, questionsPath(topic.id));
    assert.equal(questions.prev.path, topic.id);
    assert.equal(lesson.prev?.path, index ? questionsPath(availableTopics[index - 1].id) : undefined);
    assert.equal(questions.next?.path, availableTopics[index + 1]?.id);
  });
});

test('Unknown, malformed, and prototype routes are not accepted as questions pages', () => {
  for (const path of ['no-such-topic/questions', 'constructor/questions', '__proto__/questions', 'a1-set-functions/questions/extra', 'a1-set-functions/questions/questions']) {
    assert.deepEqual(getStudyRoute(path), { topic: undefined, questions: false });
  }
});

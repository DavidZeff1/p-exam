import test from 'node:test';
import assert from 'node:assert/strict';
import { availableTopics } from '../scripts/topics.js';
import challenges from '../scripts/content/challenges.js';
import examBank from '../scripts/content/exam-bank.js';
import { generateVariant } from '../scripts/variants.js';
import { getDifficulty, familyDifficulty, foundationDifficulty, variantDifficulty } from '../scripts/difficulty.js';
const valid = score => Number.isInteger(score) && score >= 1 && score <= 10;

test('All 622 fixed questions have authored difficulty estimates', async () => {
  let count = 0;
  const families = new Set();
  for (const topic of availableTopics) {
    const basics = (await import(`../problems/${topic.id}.js`)).default;
    assert.equal(foundationDifficulty[topic.id]?.length, basics.length, topic.id);
    basics.forEach((q, i) => {
      assert.ok(valid(foundationDifficulty[topic.id][i]));
      assert.equal(getDifficulty({ ...q, id: `${topic.id}:${i}`, topicId: topic.id }), foundationDifficulty[topic.id][i]);
      count++;
    });
    for (const q of [...challenges[topic.id], ...(examBank[topic.id] ?? [])]) {
      assert.ok(Object.hasOwn(familyDifficulty, q.family), q.family);
      assert.ok(valid(getDifficulty(q)), q.id);
      assert.equal(getDifficulty(q), familyDifficulty[q.family]);
      families.add(q.family); count++;
    }
  }
  assert.equal(count, 622);
  assert.equal(families.size, Object.keys(familyDifficulty).length);
});

test('Numerical variants retain a stable estimate across all 59 chapters', () => {
  for (const topic of availableTopics) {
    assert.ok(valid(variantDifficulty[topic.id]));
    for (const seed of [1, 73, 997]) assert.equal(getDifficulty(generateVariant(topic.id, seed)), variantDifficulty[topic.id]);
  }
});

test('Saved questions retain ratings without adding a required field to older sessions', () => {
  for (const bank of [challenges, examBank]) for (const qs of Object.values(bank)) for (const q of qs) {
    assert.equal(getDifficulty(JSON.parse(JSON.stringify(q))), getDifficulty(q));
  }
  assert.equal(getDifficulty({ ...generateVariant('a1-set-functions', 1), difficulty: 8 }), 8);
  for (const difficulty of [0, 11, NaN, '8', 2.5]) assert.equal(getDifficulty({ family: 'clt-payment-tail', difficulty }), 8);
  for (const topicId of ['constructor', '__proto__', 'unknown']) assert.ok(valid(getDifficulty({ variant: true, topicId })));
});

test('Estimates distinguish direct calculations from combined payment and CLT reasoning', () => {
  assert.ok(getDifficulty(generateVariant('a1-set-functions', 1)) < getDifficulty({ family: 'region-conditional' }));
  assert.ok(getDifficulty({ family: 'clt-uniform-average' }) < getDifficulty({ family: 'clt-payment-tail' }));
});

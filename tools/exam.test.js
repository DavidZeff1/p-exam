import test from 'node:test';
import assert from 'node:assert/strict';
import { availableTopics, getTopic, getAdjacentTopics } from '../scripts/topics.js';
import { EXAM_DURATION, buildExam, scoreExam, remainingTime, validSession } from '../scripts/exam.js';
import examBank from '../scripts/content/exam-bank.js';
const bank=Object.entries(examBank).flatMap(([topicId,questions])=>questions.map(q=>({...q,categoryId:getTopic(topicId).categoryId,sectionTitle:getTopic(topicId).sectionTitle,enrichment:getTopic(topicId).enrichment})));
test('Timed papers draw from the separate core challenge bank',()=>{
  assert.equal(bank.length,116);
  assert.ok(bank.every(q=>q.id.startsWith('exam:')&&q.level==='challenge'));
});
const seeded=seed=>()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32;};
test('Randomized exams have 30 unique core questions, follow weights, and span every section',()=>{
  for(let seed=0;seed<100;seed++) {
    const exam=buildExam(bank,seeded(seed));
    assert.equal(exam.length,30);
    assert.equal(new Set(exam.map(q=>q.id)).size,30);
    assert.ok(exam.every(q=>!q.enrichment));
    for(const [id,count] of [['general-probability',8],['univariate-random-variables',14],['multivariate-random-variables',8]]) {
      const selected=exam.filter(q=>q.categoryId===id);
      assert.equal(selected.length,count);
      assert.deepEqual(new Set(selected.map(q=>q.sectionTitle)),new Set(bank.filter(q=>q.categoryId===id&&!q.enrichment).map(q=>q.sectionTitle)));
    }
  }
});
test('Seeded selection is deterministic, varied, and does not mutate the bank',()=>{
  const ids=bank.map(q=>q.id);
  const first=buildExam(bank,seeded(1)).map(q=>q.id);
  assert.deepEqual(first,buildExam(bank,seeded(1)).map(q=>q.id));
  assert.notDeepEqual(first,buildExam(bank,seeded(2)).map(q=>q.id));
  assert.deepEqual(bank.map(q=>q.id),ids);
});
test('Score treats unanswered and incorrect answers as zero',()=>{
  const exam=buildExam(bank,seeded(2));
  assert.equal(scoreExam(exam,Array(30).fill(null)),0);
  assert.equal(scoreExam(exam,exam.map(q=>q.answer)),30);
  const mixed=exam.map((q,i)=>i<10?q.answer:i<20?(q.answer+1)%5:null);
  assert.equal(scoreExam(exam,mixed),10);
});
test('Deadline survives inactivity and reaches zero without going negative',()=>{
  const start=1000,deadline=start+EXAM_DURATION;
  assert.equal(remainingTime(deadline,start),10800);
  assert.equal(remainingTime(deadline,start+EXAM_DURATION-1),1);
  assert.equal(remainingTime(deadline,start+EXAM_DURATION),0);
  assert.equal(remainingTime(deadline,start+EXAM_DURATION+900000),0);
});
test('Persisted exam validation rejects malformed or incomplete state',()=>{
  const valid={version:1,questions:buildExam(bank,seeded(5)),answers:Array(30).fill(null),flags:[0,29],deadline:100000,submitted:false};
  assert.ok(validSession(valid));
  for(const bad of [null,{}, {...valid,version:2},{...valid,questions:[]},{...valid,answers:[0]},{...valid,answers:Array(30).fill(5)},{...valid,flags:[30]},{...valid,deadline:'tomorrow'}]) assert.ok(!validSession(bad));
});
test('Topic lookup and chapter navigation handle unknown ids',()=>{
  assert.equal(getTopic('constructor'),undefined);
  assert.equal(getTopic('__proto__'),undefined);
  assert.equal(getAdjacentTopics(availableTopics[0].id).prev,undefined);
  assert.equal(getAdjacentTopics(availableTopics.at(-1).id).next,undefined);
});

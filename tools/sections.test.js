import test from 'node:test';
import assert from 'node:assert/strict';
import { availableTopics } from '../scripts/topics.js';
import { sections, getSection, getSectionForRoute, sectionQuestionsPath, getSectionPager, getTopicSection } from '../scripts/sections.js';
import { getDifficulty } from '../scripts/difficulty.js';
import { getStudyPager } from '../scripts/study-routes.js';
import challenges from '../scripts/content/challenges.js';
import examBank from '../scripts/content/exam-bank.js';

test('Every lettered section has 40 new questions covering every core chapter', async () => {
 assert.equal(sections.length,20);
 const previous=[...Object.values(challenges).flat(),...Object.values(examBank).flat(),...(await Promise.all(availableTopics.map(async t=>(await import(`../problems/${t.id}.js`)).default))).flat()];
 const ids=new Set(previous.map(q=>q.id)),stems=new Set(previous.map(q=>q.question));let count=0;
 for(const section of sections) {
  const bank=(await import(`../scripts/content/section-questions/${section.id}.js`)).default;
  assert.equal(bank.length,40,section.id);
  const core=new Set(section.coreItems.map(t=>t.id));
  for(const topicId of core)assert.ok(bank.some(q=>q.topicId===topicId),`${section.id} must cover ${topicId}`);
  assert.ok(new Set(bank.map(q=>q.family)).size>=6);
  assert.equal(bank.filter(q=>q.cumulative).length,8);
  for(let set=0;set<4;set++)assert.equal(bank.slice(set*10,set*10+10).filter(q=>q.cumulative).length,2);
  for(const q of bank) {
   assert.ok(!ids.has(q.id),q.id);assert.ok(!stems.has(q.question),q.id);
   ids.add(q.id);stems.add(q.question);count++;
   assert.ok(core.has(q.topicId),q.id);
   assert.ok(q.relatedTopicIds.every(id=>core.has(id)));
   assert.ok(Number.isInteger(q.difficulty)&&q.difficulty>=1&&q.difficulty<=10);
   assert.equal(getDifficulty(q),q.difficulty);
   assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<5);
   assert.equal(q.choices.length,5);assert.equal(new Set(q.choices).size,5);
   assert.ok(q.solution.length>=3&&q.skills.length>=2);
  }
 }
 assert.equal(count,800);
});

test('Mixed pages connect the end of each section with the next section lesson', () => {
 sections.forEach((section,index)=>{
  const path=sectionQuestionsPath(section.id);
  assert.equal(getSectionForRoute(path),section);assert.equal(getSection(section.id),section);
  const last=availableTopics.find(t=>t.id===section.items.at(-1).id);
  assert.equal(getStudyPager(last,true).next.path,path);
  const pager=getSectionPager(section);
  assert.equal(pager.prev.path,`${last.id}/questions`);
  assert.equal(pager.next?.path,sections[index+1]?.items[0].id);
  for(const item of section.items)assert.equal(getTopicSection(item.id),section);
  if(index){const first=availableTopics.find(t=>t.id===section.items[0].id);assert.equal(getStudyPager(first).prev.path,sectionQuestionsPath(sections[index-1].id));}
 });
});

test('Lettered sections from different syllabus areas have distinct safe routes', () => {
 assert.equal(new Set(sections.map(s=>s.id)).size,20);
 for(const path of ['sections/constructor/questions','sections/__proto__/questions','sections/general-probability-a/questions/extra','sections/general-probability-a','sections/missing/questions'])assert.equal(getSectionForRoute(path),undefined);
});

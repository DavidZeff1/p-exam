import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import katex from 'katex';
import { topics, navStructure } from '../scripts/topics.js';
import { outcomes } from '../scripts/syllabus.js';
import { tokenizeMath } from '../scripts/math-text.js';
const lessons = JSON.parse(readFileSync(new URL('../scripts/content/lessons.json',import.meta.url),'utf8'));
assert.equal(new Set(topics.map(t=>t.id)).size,topics.length,'Topic ids must be unique');
assert.equal(outcomes.length,22,'The May syllabus has 22 learning outcomes');
assert.equal(new Set(outcomes.map(o=>o.code)).size,22,'Outcome codes must be unique');
const errors=[];
function math(latex,where) {
  try { katex.renderToString(latex,{throwOnError:true,strict:'error'}); } catch(error) { errors.push(`${where}: ${error.message}`); }
}
function rich(text,where) {
  for(const segment of tokenizeMath(text)) {
    if(segment.type==='inline'||segment.type==='display') math(segment.value,where);
    if(segment.type==='text'&&segment.value.includes('$')) errors.push(`${where}: unmatched dollar sign`);
  }
}
for(const outcome of outcomes) {
  assert.ok(navStructure.some(category=>category.id===outcome.category));
  assert.ok(outcome.topics.length>0,`${outcome.code} needs instruction`);
  for(const id of outcome.topics) assert.ok(topics.some(topic=>topic.id===id&&!topic.enrichment),`${outcome.code}: missing syllabus lesson ${id}`);
}
for(const topic of topics) {
  assert.ok(topic.page,`${topic.id} is still a placeholder`);
  const path=new URL(`../pages/${topic.page}.jsx`,import.meta.url);
  assert.ok(existsSync(path),`${topic.id} has no component`);
  assert.ok(existsSync(new URL(`../problems/${topic.id}.js`,import.meta.url)),`${topic.id} has no chapter practice`);
  if(!topic.enrichment) assert.ok(outcomes.some(outcome=>outcome.topics.includes(topic.id)),`${topic.id} is not mapped to an outcome`);
  if(['StudyLesson','JointDistributions','ConditionalDistributions'].includes(topic.page)) {
    const lesson=lessons[topic.id];
    assert.ok(lesson?.objectives.length>=2&&lesson.sections.length>=3&&lesson.tip,`${topic.id} has incomplete instruction`);
    for(const section of lesson.sections) for(const text of section.paragraphs) rich(text,`${topic.id}: ${section.title}`);
    rich(lesson.tip,`${topic.id}: exam checkpoint`);
  } else {
    const source=readFileSync(path,'utf8');
    for(const match of source.matchAll(/data-latex="([^"]*)"/g)) math(match[1].replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&amp;','&'),topic.id);
  }
}
if(errors.length) { console.error(errors.join('\n'));process.exit(1); }
console.log(`${topics.length} complete lessons with chapter practice; all 22 outcomes mapped; lesson LaTeX valid.`);

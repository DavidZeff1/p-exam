export const EXAM_DURATION = 3 * 60 * 60 * 1000;
export const EXAM_STORAGE_KEY = 'exam-p-mock-v1';
export const blueprint = [
  ['general-probability', 8],
  ['univariate-random-variables', 14],
  ['multivariate-random-variables', 8],
];
export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) {
    const j=Math.floor(random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}
// Include each section at least once, then fill from unused questions.
export function buildExam(bank, random = Math.random) {
  const selected=[];
  for (const [category,count] of blueprint) {
    const pool=bank.filter(item=>item.categoryId===category && !item.enrichment);
    const sections=[...new Set(pool.map(item=>item.sectionTitle))];
    const seeds=shuffle(sections,random).slice(0,count).map(section=>shuffle(pool.filter(item=>item.sectionTitle===section),random)[0]);
    const used=new Set(seeds.map(item=>item.id));
    const remaining=shuffle(pool.filter(item=>!used.has(item.id)),random).slice(0,count-seeds.length);
    if (seeds.length+remaining.length!==count) throw new Error(`Not enough questions for ${category}`);
    selected.push(...seeds,...remaining);
  }
  return shuffle(selected,random);
}
export function scoreExam(questions,answers) {
  return questions.filter((question,index)=>answers[index]===question.answer).length;
}
export function remainingTime(deadline,now=Date.now()) { return Math.max(0,Math.ceil((deadline-now)/1000)); }
export function validSession(value) {
  return value?.version===1 && Array.isArray(value.questions) && value.questions.length===30 && value.questions.every(q => typeof q.question==='string' && Array.isArray(q.choices) && q.choices.length===5 && q.choices.every(c=>typeof c==='string') && Number.isInteger(q.answer) && q.answer>=0 && q.answer<5 && Array.isArray(q.solution) && q.solution.length>0 && q.solution.every(step=>typeof step==='string') && typeof q.topicId==='string' && typeof q.categoryId==='string') && Array.isArray(value.answers) && value.answers.length===30 && value.answers.every(a=>a===null || (Number.isInteger(a)&&a>=0&&a<5)) && Array.isArray(value.flags) && value.flags.every(i=>Number.isInteger(i)&&i>=0&&i<30) && (value.position===undefined || Number.isInteger(value.position)&&value.position>=0&&value.position<30) && Number.isFinite(value.deadline) && typeof value.submitted==='boolean';
}

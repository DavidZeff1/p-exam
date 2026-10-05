import test from 'node:test';
import assert from 'node:assert/strict';
import teaching from '../scripts/content/teaching.js';
import katex from 'katex';
import { availableTopics } from '../scripts/topics.js';
import { generateVariant } from '../scripts/variants.js';
import { tokenizeMath } from '../scripts/math-text.js';
import { emptyLearning, recordAttempt, summarizeLearning, selectReview, readLearning } from '../scripts/learning.js';
import { bayesCounts, triangularCDF, uniformPaymentMoments, insurancePayment, exponentialSampleMeans } from '../scripts/lab-math.js';
const DAY=86400000;
const attempt=(at,correct=true,assisted=false)=>({at,correct,assisted,confidence:'high',seconds:60,hints:assisted?1:0});
const close=(actual,expected,tolerance=1e-8)=>assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} differs from ${expected}`);
function rich(text) { for(const segment of tokenizeMath(text)) if(['inline','display'].includes(segment.type)) katex.renderToString(segment.value,{throwOnError:true,strict:'error'}); }

test('Every chapter has an authored starting question, method cue, and valid reasoning check',()=>{
  assert.equal(Object.keys(teaching).length,availableTopics.length);
  for(const topic of availableTopics) {
    const t=teaching[topic.id];
    for(const field of ['scenario','intuition','method','trap','setup']) assert.ok(t[field]?.length>15,`${topic.id}: ${field}`);
    assert.equal(new Set(t.check.choices).size,3); assert.ok(t.check.answer>=0&&t.check.answer<3); assert.ok(t.check.explanation.length>20);
  }
});
test('Generated exercises cover all 59 chapters with unique choices and valid math',()=>{
  for(const topic of availableTopics) for(const seed of [1,137,5741,92367,481537,999991]) {
    const q=generateVariant(topic.id,seed);
    assert.equal(q.choices.length,5); assert.equal(new Set(q.choices).size,5,topic.id);
    close(Number(q.choices[q.answer].replaceAll('$','')),q.numericAnswer,.000051);
    assert.ok(q.solution.length>=2); assert.ok(q.hints.length===2); assert.equal(q.topicId,topic.id);
    for(const text of [q.question,...q.choices,...q.solution,...q.hints]) rich(text);
    for(let i=0;i<5;i++) if(i!==q.answer) assert.ok(q.feedback[i].length>=10);
    assert.deepEqual(q,generateVariant(topic.id,seed));
  }
});
test('Independent numerical oracles verify variant answers across generated parameters',()=>{
  const integral=(f,a,b)=>{let sum=0;const count=10000;for(let i=0;i<count;i++)sum+=f(a+(i+.5)*(b-a)/count);return sum*(b-a)/count;};
  for(const seed of [2,8435,36731,294573,840152]) {
    for(const id of ['urv-a2-pdf','urv-b2-binomial','urv-b3-geometric','urv-b4-negative-binomial','urv-b5-hypergeometric','f2-bayes-theorem','urv-h3-moments-loss-payment','mrv-c1-covariance','mrv-b2-conditional-variance','mrv-d1-order-statistics']) {
      const q=generateVariant(id,seed),text=q.question;let expected;
      if(id==='urv-a2-pdf') {const x=Number(text.match(/X<=(\d+(?:\.\d+)?)/)[1]);expected=integral(t=>2*t,0,x);}
      if(id==='urv-b2-binomial') {const n=Number(text.match(/Exactly (\d+)/)[1]),p=Number(text.match(/probability (\d+(?:\.\d+)?)/)[1]);let sum=0;for(let mask=0;mask<2**n;mask++){const successes=mask.toString(2).replaceAll('0','').length;if(successes===1)sum+=p*(1-p)**(n-1);}expected=sum;}
      if(id==='urv-b3-geometric') {const n=Number(text.match(/T=(\d+)/)[1]),p=Number(text.match(/probability (\d+(?:\.\d+)?)/)[1]);let value=p;for(let i=1;i<n;i++)value*=1-p;expected=value;}
      if(id==='urv-b4-negative-binomial') {const n=Number(text.match(/T=(\d+)/)[1]),p=Number(text.match(/probability (\d+(?:\.\d+)?)/)[1]);let sum=0;for(let mask=0;mask<2**(n-1);mask++)if(mask.toString(2).replaceAll('0','').length===1)sum+=p*p*(1-p)**(n-2);expected=sum;}
      if(id==='urv-b5-hypergeometric') {const n=Number(text.match(/from (\d+) files/)[1]);let total=0,good=0;for(let a=0;a<n;a++)for(let b=a+1;b<n;b++){total++;if((a<2)!==(b<2))good++;}expected=good/total;}
      if(id==='f2-bayes-theorem') {const p=Number(text.match(/proportion (\d+(?:\.\d+)?)/)[1]);const fraud=p*100000,legitimate=100000-fraud;expected=.8*fraud/(.8*fraud+.1*legitimate);}
      if(id==='urv-h3-moments-loss-payment') {const max=Number(text.match(/\(0,(\d+)\)/)[1]),d=Number(text.match(/X-(\d+)/)[1]);expected=integral(x=>Math.max(x-d,0)/max,0,max);}
      if(id==='mrv-c1-covariance'||id==='mrv-b2-conditional-variance') {const weights=text.match(/are (\d+(?:\.\d+)?), (\d+(?:\.\d+)?), (\d+(?:\.\d+)?), (\d+(?:\.\d+)?)/).slice(1).map(Number);const cells=[[0,0],[0,1],[1,0],[1,1]];if(id==='mrv-c1-covariance'){const meanX=weights[2]+weights[3],meanY=weights[1]+weights[3];expected=cells.reduce((s,[x,y],i)=>s+(x-meanX)*(y-meanY)*weights[i],0);}else{const retained=weights[1]+weights[3],mean=weights[3]/retained;expected=mean**2*weights[1]/retained+(1-mean)**2*weights[3]/retained;}}
      if(id==='mrv-d1-order-statistics') {const n=Number(text.match(/^(\d+)/)[1]),p=Number(text.match(/at most (\d+(?:\.\d+)?)/)[1]);expected=1;for(let i=0;i<n;i++)expected*=p;}
      close(q.numericAnswer,expected,1e-6);
    }
  }
});
test('Bayes count model includes both sources of flags and responds to prevalence',()=>{
  const c=bayesCounts(.05,.84,.08);close(c.trueFlags,420);close(c.falseFlags,760);close(c.posterior,420/1180);
  assert.ok(bayesCounts(.01,.84,.08).posterior<c.posterior);
});
test('Density CDF and payment lab moments agree with numerical integration',()=>{
  for(const L of [.5,1,5]){close(triangularCDF(-1,L),0);close(triangularCDF(L+1,L),1);close(triangularCDF(.8*L,L)-triangularCDF(.2*L,L),.6);}
  for(const [d,share,cap,inflation] of [[1000,.8,3000,1],[0,1,10000,1],[10000,.8,3000,1],[10000,.8,3000,1.5],[1000,0,3000,1],[500,.6,1800,1.25]]) {
    const m=uniformPaymentMoments(10000,d,share,cap,inflation);let first=0,second=0;const steps=40000;
    for(let i=0;i<steps;i++){const payment=insurancePayment((i+.5)*10000/steps,d,share,cap,inflation);first+=payment/steps;second+=payment**2/steps;}
    close(m.mean,first,.01);close(m.variance,second-first**2,1);assert.ok(m.massZero+m.massCap<=1.000001);
  }
});
test('CLT simulation is reproducible and sample means have the expected spread',()=>{
  assert.deepEqual(exponentialSampleMeans(10,10,87),exponentialSampleMeans(10,10,87));
  for(const n of [1,25,100]) {const samples=exponentialSampleMeans(n,8000,321);const mean=samples.reduce((s,x)=>s+x,0)/samples.length;const variance=samples.reduce((s,x)=>s+(x-mean)**2,0)/samples.length;close(mean,1,.03);close(variance,1/n,.07/n);}
});
test('Learning records preserve first attempts and schedule supported answers sooner',()=>{
  let state=recordAttempt(emptyLearning(),'q','topic',attempt(0,false));
  state=recordAttempt(state,'q','topic',attempt(1000,true,true));
  let stats=summarizeLearning(state);assert.equal(stats.firstCorrect,0);assert.equal(stats.independentCorrect,0);assert.equal(stats.highConfidenceMisses,1);assert.equal(state.questions.q.due,DAY+1000);
  state=recordAttempt(state,'q','topic',attempt(2*DAY));assert.equal(state.questions.q.streak,1);assert.equal(state.questions.q.due,3*DAY);
  state=recordAttempt(state,'q','topic',attempt(2*DAY+1000));assert.equal(state.questions.q.streak,1,'same-day repeats do not lengthen review interval');
  state=recordAttempt(state,'q','topic',attempt(4*DAY));assert.equal(state.questions.q.streak,2);assert.equal(state.questions.q.due,7*DAY);
  assert.equal(summarizeLearning(state).questions,1);
});
test('Review balances syllabus areas, prioritizes due misses, and leaves the bank untouched',()=>{
  const bank=Array.from({length:30},(_,i)=>({id:`q${i}`,topicId:`t${i}`,categoryId:['general','univariate','multivariate'][i%3]}));
  const state=recordAttempt(emptyLearning(),'q27','t27',attempt(0,false));
  const selected=selectReview(bank,state,8,2*DAY,()=>.5);assert.equal(selected.length,8);assert.equal(new Set(selected.map(q=>q.id)).size,8);assert.ok(selected.some(q=>q.id==='q27'));assert.equal(new Set(selected.map(q=>q.categoryId)).size,3);assert.equal(bank.length,30);
});
test('Malformed learning storage is ignored and blocked storage is supported',()=>{
  assert.deepEqual(readLearning({getItem(){throw new Error('blocked');}}),emptyLearning());
  assert.deepEqual(readLearning({getItem(){return '{bad';}}),emptyLearning());
  assert.deepEqual(readLearning({getItem(){return JSON.stringify({version:1,questions:{bad:{topicId:'x',attempts:[],due:1,streak:0}}});}}),emptyLearning());
});

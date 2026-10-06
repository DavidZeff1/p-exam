// Independent answer audit: enumerate outcomes, integrate the underlying densities,
// and reconstruct conditional distributions. Does not import the authoring generator.
import assert from 'node:assert/strict';
import katex from 'katex';
import challenges from '../scripts/content/challenges.js';
import examBank from '../scripts/content/exam-bank.js';
import { availableTopics } from '../scripts/topics.js';
import { tokenizeMath } from '../scripts/math-text.js';
import { additionalExpected } from './verify-soa-families.js';
const fact=n=>{let value=1;for(let i=2;i<=n;i++)value*=i;return value;};
const choose=(n,k)=>k<0||k>n?0:fact(n)/(fact(k)*fact(n-k));
const normalDensity=x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
const nodes=[-.9602898564975363,-.7966664774136267,-.525532409916329,-.1834346424956498,.1834346424956498,.525532409916329,.7966664774136267,.9602898564975363];
const weights=[.1012285362903763,.2223810344533745,.3137066458778873,.362683783378362,.362683783378362,.3137066458778873,.2223810344533745,.1012285362903763];
function integral(fn,a,b,segments=32) {
 if(a===b)return 0;let total=0;
 for(let i=0;i<segments;i++){const left=a+(b-a)*i/segments,right=a+(b-a)*(i+1)/segments,center=(left+right)/2,half=(right-left)/2;for(let j=0;j<8;j++)total+=half*weights[j]*fn(center+half*nodes[j]);}
 return total;
}
const Phi=z=>z>=12?1:z<=-12?0:integral(normalDensity,-12,z);
const poisson=(n,lambda)=>Math.exp(-lambda)*lambda**n/fact(n);
const binomial=(n,p)=>Array.from({length:n+1},(_,k)=>choose(n,k)*p**k*(1-p)**(n-k));
const moments=(values,probs)=>{const mean=values.reduce((s,x,i)=>s+x*probs[i],0);const second=values.reduce((s,x,i)=>s+x*x*probs[i],0);return{mean,second,variance:second-mean*mean};};
function permutations(n,visit) {
 const used=new Set(),arr=[];
 function step(){if(arr.length===n){visit(arr);return;}for(let i=0;i<n;i++)if(!used.has(i)){used.add(i);arr.push(i);step();arr.pop();used.delete(i);}}
 step();
}
function uniformPayment(s) {
 const max=s.B*s.inflation,fn=x=>Math.min(s.share*Math.max(x-s.d,0),s.cap);
 const breaks=[0,Math.min(max,s.d),Math.min(max,s.d+s.cap/s.share),max].sort((a,b)=>a-b);
 let mean=0,second=0;for(let i=1;i<breaks.length;i++){mean+=integral(x=>fn(x)/max,breaks[i-1],breaks[i]);second+=integral(x=>fn(x)**2/max,breaks[i-1],breaks[i]);}
 const variance=second-mean*mean;
 return s.target==='mean'?mean:s.target==='sd'?Math.sqrt(variance):s.target==='cv'?Math.sqrt(variance)/mean:variance;
}
function expected(s) {
 switch(s.kind) {
 case 'atoms': {const total=s.weights.reduce((a,b)=>a+b,0);const den=s.weights.filter((_,i)=>!(i&1)).reduce((a,b)=>a+b,0);return s.weights[0]/den;}
 case 'four-atoms':return(s.k+1)/(1+2+s.k+s.k+1);
 case 'two-events':return(s.a-s.joint)/s.a;
 case 'independent':return 1-s.p-s.ratio*s.p+s.ratio*s.p*s.p;
 case 'partition':return s.weights[3]/(s.weights[0]+s.weights[1]+s.weights[3]);
 case 'mixture': {const contributions=[s.weight*s.rates[0],(1-s.weight)*s.rates[1]];return contributions[0]/contributions.reduce((a,b)=>a+b,0);}
 case 'weighted-discrete': {let num=0,den=0;s.values.forEach((x,i)=>{if(x>=s.threshold)den+=s.weights[i];if(x>s.threshold)num+=s.weights[i];});return num/den;}
 case 'draw-sequence': {let population=s.N,successes=s.K,result=1;for(const outcome of s.pattern){result*=outcome?successes/population:(population-successes)/population;if(outcome)successes--;population--;}return result;}
 case 'hypergeom': {const probabilities=Array.from({length:s.n+1},(_,k)=>choose(s.K,k)*choose(s.N-s.K,s.n-k)/choose(s.N,s.n));if(s.target==='two-given-positive')return probabilities[2]/(1-probabilities[0]);return probabilities.reduce((sum,p,k)=>sum+p*s.B*Math.max(k-1,0),0);}
 case 'restricted-code': {let count=0;for(let a=0;a<s.n;a++)for(let b=0;b<s.n;b++)for(let c=0;c<s.n;c++)for(let d=0;d<s.n;d++){const arr=[a,b,c,d];if(new Set(arr).size===4&&!(arr.includes(0)&&arr.includes(1)))count++;}return count;}
 case 'committee-roles': {let seniorPairs=0,juniorPairs=0;for(let i=0;i<s.S;i++)for(let j=i+1;j<s.S;j++)seniorPairs++;for(let i=0;i<s.J;i++)for(let j=i+1;j<s.J;j++)juniorPairs++;return seniorPairs*juniorPairs*4;}
 case 'adjacency': {let count=0;permutations(s.n,arr=>{const a=arr.indexOf(0),b=arr.indexOf(1),c=arr.indexOf(2);if(Math.abs(a-b)===1&&Math.abs(a-c)!==1&&Math.abs(b-c)!==1)count++;});return count;}
 case 'latent-history': {let num=0,den=0;for(let i=0;i<2;i++){const p=s.rates[i],prior=i===0?s.w:1-s.w;const likelihood=s.history.reduce((prod,outcome)=>prod*(outcome?p:1-p),1);den+=prior*likelihood;num+=prior*likelihood*p;}return num/den;}
 case 'binomial-indicators': {let num=0,den=0;for(let mask=0;mask<2**s.n;mask++){const arr=Array.from({length:s.n},(_,i)=>(mask>>i)&1);const count=arr.reduce((a,b)=>a+b,0);const mass=s.p**count*(1-s.p)**(s.n-count);if(count>0)den+=mass;if(arr[0]&&count>=2)num+=mass;}return num/den;}
 case 'screen': {const posterior=s.prior*s.sensitivity/(s.prior*s.sensitivity+(1-s.prior)*s.falsePositive);const allFlags=s.prior*s.sensitivity/posterior;return(allFlags-s.prior*s.sensitivity)/(1-s.prior);}
 case 'poisson-mixture': {const contributions=[s.w*(poisson(0,s.rates[0])**s.n),(1-s.w)*(poisson(0,s.rates[1])**s.n)];return contributions[0]/contributions.reduce((a,b)=>a+b,0);}
 case 'binomial': {const probs=binomial(s.n,s.p);if(s.target==='atleast2-given-positive')return probs.slice(2).reduce((a,b)=>a+b,0)/(1-probs[0]);if(s.target==='capped-payment')return probs.reduce((total,p,k)=>total+s.B*Math.min(Math.max(k-1,0),2)*p,0);const retained=probs.slice(1).map(p=>p/(1-probs[0]));const m=moments(retained.map((_,i)=>i+1),retained);return s.target==='positive-mean'?m.mean:m.variance;}
 case 'geometric-benefit': {const probs=Array.from({length:s.horizon-1},(_,i)=>s.p*(1-s.p)**i);const pay=probs.map((_,i)=>s.B*(s.horizon-i-1));probs.push((1-s.p)**(s.horizon-1));pay.push(0);return moments(pay,probs).variance;}
 case 'geometric-interval': {let num=0,den=0;for(let t=1;t<=s.limit;t++){const mass=s.p*(1-s.p)**(t-1);den+=mass;if(t>s.a&&t<=s.b)num+=mass;}return num/den;}
 case 'negative-binomial': {let denominator=0,numerator=0;for(let length=2;length<=s.t;length++){let probability=0;for(let mask=0;mask<2**(length-1);mask++){const count=mask.toString(2).replaceAll('0','').length;if(count===1)probability+=s.p*s.p*(1-s.p)**(length-2);}denominator+=probability;if(length===s.t)numerator=probability;}return numerator/denominator;}
 case 'success-positions': {let num=0,den=0;for(let first=1;first<s.t;first++){const mass=s.p*s.p*(1-s.p)**(s.t-2);den+=mass;if(first<=s.k)num+=mass;}return num/den;}
 case 'hypergeom-mixture': {const likelihoods=s.K.map(K=>choose(K,s.k)*choose(s.N-K,s.n-s.k)/choose(s.N,s.n));return s.w*likelihoods[0]/(s.w*likelihoods[0]+(1-s.w)*likelihoods[1]);}
 case 'poisson': {let mean=0;for(let n=0;n<100;n++)mean+=s.B*Math.max(n-1,0)*poisson(n,s.lam);return mean;}
 case 'poisson-split': {let num=0,den=0;for(let x=0;x<=s.n;x++){const p=poisson(x,s.a)*poisson(s.n-x,s.b);den+=p;if(x>=2)num+=p;}return num/den;}
 case 'uniform-deductible': {let low=0,high=s.B;for(let step=0;step<70;step++){const d=(low+high)/2;const mean=integral(x=>(x-d)/s.B,d,s.B);if(mean>s.ratio*s.B/2)low=d;else high=d;}return(low+high)/2;}
 case 'uniform-payment':return uniformPayment(s);
 case 'exponential': {const density=x=>Math.exp(-x/s.mu)/s.mu;return integral(density,s.threshold,80*s.mu);}
 case 'exponential-benefit': {const density=x=>Math.exp(-x/s.mu)/s.mu;const coefficient=integral(density,0,s.t1)+s.fraction*integral(density,s.t1,s.t2);return s.meanPay/coefficient;}
 case 'gamma': {const density=x=>x**(s.shape-1)*Math.exp(-x/s.scale)/(s.scale**s.shape*fact(s.shape-1));if(s.target==='tail-from-moments')return integral(density,s.t,100*s.scale);return integral(density,s.b,100*s.scale)/integral(density,s.a,100*s.scale);}
 case 'beta': {const constant=fact(s.a+s.b-1)/(fact(s.a-1)*fact(s.b-1));const density=x=>constant*x**(s.a-1)*(1-x)**(s.b-1);return s.target==='second-moment'?integral(x=>x*x*density(x),0,1):integral(density,s.hi,1)/integral(density,s.lo,1);}
 case 'normal':return s.target==='tail-from-quantile'?1-Phi((s.t-s.mu)/s.sd):Phi((s.hi-s.mu)/s.sd)-Phi((s.lo-s.mu)/s.sd);
 case 'lognormal':return s.target==='tail'?1-Phi((Math.log(s.threshold)-s.mu)/s.sigma):s.mean/Math.sqrt(1+s.cv*s.cv);
 case 'linear-density':return integral(x=>s.A+s.B*x,s.u,s.L)/integral(x=>s.A+s.B*x,s.t,s.L);
 case 'mixed-cdf':return s.p1/(s.p1+(1-s.p0-s.p1)*integral(()=>1,s.cut,1));
 case 'discrete-uniform-payment': {const vals=Array.from({length:s.n},(_,i)=>s.B*Math.min(Math.max(i+1-s.d,0),s.cap));return moments(vals,Array(s.n).fill(1/s.n)).variance;}
 case 'power-density': {const density=x=>(s.power+1)*x**s.power/s.L**(s.power+1);if(s.target==='conditional-mean')return integral(x=>x*density(x),s.lower,s.L)/integral(density,s.lower,s.L);const quantile=u=>{let low=0,high=s.L;for(let i=0;i<60;i++){const mid=(low+high)/2;if(integral(density,0,mid)<u)low=mid;else high=mid;}return(low+high)/2;};return quantile(s.high)-quantile(s.low);}
 case 'power-transform': {const density=x=>(s.power+1)*x**s.power/s.L**(s.power+1);const mean=integral(x=>(s.a*x*x+s.b)*density(x),0,s.L);const second=integral(x=>(s.a*x*x+s.b)**2*density(x),0,s.L);return second-mean*mean;}
 case 'policy-mixture': {const mean=s.p*integral(x=>Math.max(x-s.d,0)/s.B,s.d,s.B);const second=s.p*integral(x=>Math.max(x-s.d,0)**2/s.B,s.d,s.B);const variance=second-mean*mean;return s.target==='payment-sd'?Math.sqrt(variance):variance;}
 case 'affine-cv':return s.a*s.sd/s.targetCV-s.a*s.mean;
 case 'uniform-cap-infer':return s.share*(s.B*(1-s.mass)-s.d);
 case 'exp-payment': {const density=x=>Math.exp(-x/s.mu)/s.mu,fn=x=>Math.min(s.share*Math.max(x-s.d,0),s.cap);const limit=s.d+s.cap/s.share;const mean=integral(x=>fn(x)*density(x),s.d,limit)+s.cap*integral(density,limit,80*s.mu);if(s.target==='positive-mean')return mean/integral(density,s.d,80*s.mu);const second=integral(x=>fn(x)**2*density(x),s.d,limit)+s.cap**2*integral(density,limit,80*s.mu);return second-mean*mean;}
 case 'inflated-exp-tail': {const lower=s.d/s.inflation,upper=(s.d+s.threshold/s.share)/s.inflation,density=x=>Math.exp(-x/s.mu)/s.mu;return integral(density,upper,80*s.mu)/integral(density,lower,80*s.mu);}
 case 'joint-grid': {const cells=[];for(let x=0;x<3;x++)for(let y=0;y<3;y++)cells.push({x,y,w:x+2*y+s.c});const total=cells.reduce((a,i)=>a+i.w,0);if(s.target==='event'){const slice=cells.filter(i=>i.x+i.y>=2);return slice.filter(i=>i.x>i.y).reduce((a,i)=>a+i.w,0)/slice.reduce((a,i)=>a+i.w,0);}if(s.target==='conditional-variance'){const slice=cells.filter(i=>i.y===s.y),Z=slice.reduce((a,i)=>a+i.w,0);return moments(slice.map(i=>i.x),slice.map(i=>i.w/Z)).variance;}if(s.target==='linear-variance')return moments(cells.map(i=>s.a*i.x+s.b*i.y),cells.map(i=>i.w/total)).variance;const EX=cells.reduce((a,i)=>a+i.x*i.w/total,0),EY=cells.reduce((a,i)=>a+i.y*i.w/total,0);const VX=cells.reduce((a,i)=>a+(i.x-EX)**2*i.w/total,0),VY=cells.reduce((a,i)=>a+(i.y-EY)**2*i.w/total,0);const cov=cells.reduce((a,i)=>a+(i.x-EX)*(i.y-EY)*i.w/total,0);return cov/Math.sqrt(VX*VY);}
 case 'conditional-hypergeom': {const N=s.groups.reduce((a,b)=>a+b,0),[A,B,C]=s.groups;const probs=[];const vals=[];let Z=0;for(let y=0;y<=s.n-s.x;y++){const w=choose(A,s.x)*choose(B,y)*choose(C,s.n-s.x-y);Z+=w;vals.push(y);probs.push(w);}return moments(vals,probs.map(p=>p/Z)).variance;}
 case 'poisson-class': {const rates=s.rates,priors=[s.w,1-s.w];if(s.target==='covariance'){const mean=priors.reduce((a,p,i)=>a+p*rates[i],0);const product=priors.reduce((a,p,i)=>a+p*rates[i]**2,0);return product-mean*mean;}const probs=Array.from({length:100},(_,n)=>priors.reduce((a,p,i)=>a+p*poisson(n,rates[i]),0));return moments(probs.map((_,n)=>n),probs).variance;}
 case 'order-uniform': {if(s.target==='range'){const density=r=>s.n*(s.n-1)*r**(s.n-2)*(s.B-r)/s.B**s.n;return integral(density,0,s.r);}const p=(s.b-s.a)/(1-s.a);return binomial(s.n,p).slice(s.rank).reduce((a,b)=>a+b,0);}
 case 'normal-combination': {const mean=s.a*s.muX+s.b*s.muY,sd=Math.hypot(s.a*s.sdX,s.b*s.sdY);return 1-Phi((s.t-mean)/sd);}
 case 'poisson-weighted': {let sum=0;for(let x=0;x<=s.limit;x++)for(let y=0;y<=s.limit;y++)if(2*x+y<=s.limit)sum+=poisson(x,s.a)*poisson(y,s.b);return sum;}
 case 'linear-moments': {const mean=s.a*s.mx+s.b*s.my+s.shift;return s.a*s.a*s.vx+s.b*s.b*s.vy+mean*mean;}
 case 'sample-shift':return s.sigma*s.sigma/s.n+s.varC;
 case 'clt-payment': {const mean=s.p*integral(x=>Math.max(x-s.d,0)/s.B,s.d,s.B);const second=s.p*integral(x=>Math.max(x-s.d,0)**2/s.B,s.d,s.B);const variance=second-mean*mean;return 1-Phi((s.threshold-s.n*mean)/Math.sqrt(s.n*variance));}
 case 'clt-binomial':return 1-Phi((s.k-.5-s.n*s.p)/Math.sqrt(s.n*s.p*(1-s.p)));
 case 'uniform-pairs': {const pairs=[];for(let x=1;x<=s.n;x++)for(let y=1;y<=s.n;y++)if(x+y>=s.threshold)pairs.push([x,y]);return pairs.filter(([x,y])=>x===y).length/pairs.length;}
 default:return additionalExpected(s,{choose,fact,integral,Phi,poisson,binomial,moments});
 }
}
const all=[...Object.values(challenges).flat(),...Object.values(examBank).flat()];
const foundations=(await Promise.all(availableTopics.map(async t=>(await import(`../problems/${t.id}.js`)).default))).flat();
const foundationStems=new Set(foundations.map(q=>q.question));
assert.ok(all.every(q=>!foundationStems.has(q.question)), 'New questions must not duplicate foundation stems');
assert.equal(Object.keys(challenges).length,59);
assert.equal(Object.keys(examBank).length,58);
assert.equal(new Set(all.map(q=>q.id)).size,all.length);
assert.equal(new Set(all.map(q=>q.question)).size,all.length,'Chapter challenges and timed exam stems must be disjoint');
let verified=0;
for(const topic of availableTopics){assert.equal(challenges[topic.id]?.length,5,`${topic.id} needs five chapter challenges`);assert.equal(new Set(challenges[topic.id].map(q=>q.family)).size,5,`${topic.id} needs distinct exercise families`);if(!topic.enrichment)assert.equal(examBank[topic.id]?.length,2);}
for(const q of all) {
 assert.ok(q.solution.length>=3,`${q.id}: requires worked reasoning`);
 assert.ok(q.skills.length>=2,`${q.id}: requires multiple reasoning steps`);
 assert.equal(q.choices.length,5);assert.equal(new Set(q.choices).size,5);
 assert.equal(Object.keys(q.feedback).length,4,`${q.id}: all distractors need feedback`);
 assert.ok(Object.entries(q.feedback).every(([index,text])=>Number(index)!==q.answer&&typeof text==='string'&&text.trim()),`${q.id}: feedback must describe wrong choices`);
 const computed=expected(q.verification),value=choice=>Number(choice.replaceAll('$',''));
 const tolerance=.5*10**-(q.verification.precision??4)+.000001;
 assert.ok(Number.isFinite(computed),`${q.id}: nonfinite audit result`);assert.ok(Math.abs(value(q.choices[q.answer])-computed)<=tolerance,`${q.id} (${q.family}): chosen ${value(q.choices[q.answer])}, independently computed ${computed}`);
 assert.equal(q.choices.filter(choice=>Math.abs(value(choice)-computed)<=tolerance).length,1,`${q.id}: needs one correct rounded choice`);
 if(q.verification.probability)assert.ok(q.choices.every(choice=>value(choice)>=0&&value(choice)<=1),`${q.id}: probability choices must lie in [0,1]`);
 for(const text of [q.question,...q.choices,...q.solution,...q.hints,...Object.values(q.feedback)])for(const segment of tokenizeMath(text)){
  if(segment.type==='text')assert.ok(!segment.value.includes('$'),`${q.id}: unmatched dollar`);
  if(['inline','display'].includes(segment.type))katex.renderToString(segment.value,{throwOnError:true,strict:'error'});
 }
 verified++;
}
console.log(`${verified} challenge/exam answers independently verified; 59 chapters covered; timed and chapter stems disjoint.`);

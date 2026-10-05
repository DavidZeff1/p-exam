// Recompute the new exercises using numerical integration, event enumeration,
// and distribution identities rather than trusting their answer indices.
import assert from 'node:assert/strict';
const integral=(f,a,b,n=20000)=>{ let sum=0;for(let i=0;i<n;i++)sum+=f(a+(i+.5)*(b-a)/n);return sum*(b-a)/n; };
const moments=(values,probabilities)=>{
  const mean=values.reduce((s,x,i)=>s+x*probabilities[i],0);
  const second=values.reduce((s,x,i)=>s+x*x*probabilities[i],0);
  return {mean,second,variance:second-mean*mean};
};
const phi=z=>integral(x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI),-10,z);
const choose=(n,k)=>{let x=1;for(let i=1;i<=k;i++)x=x*(n-i+1)/i;return x;};
const ordinary=(x,d)=>Math.max(x-d,0);
const uniformMoment=(g,k,a,b)=>integral(x=>g(x)**k/(b-a),a,b);
function value(choice) {
  let s=choice.replaceAll('$','');
  if(s.startsWith('\\sqrt{')) return Math.sqrt(Number(s.slice(6,-1)));
  if(s.startsWith('e^')) return Math.exp(Number(s.slice(2).replace(/[{}]/g,'')));
  if(s==='e') return Math.E;
  if(s.includes('/')) {const [a,b]=s.split('/').map(Number);return a/b;}
  return Number(s);
}
const simpleVariance=moments([0,100,400],[.6,.3,.1]).variance;
const table=[{x:0,y:1,p:.2},{x:1,y:0,p:.3},{x:2,y:2,p:.5}];
const jointMean=g=>table.reduce((s,item)=>s+g(item)*item.p,0);
const uniformPayment=x=>ordinary(x,4);
const uniformVar=uniformMoment(uniformPayment,2,0,10)-uniformMoment(uniformPayment,1,0,10)**2;
const checks={
 'urv-d2-conditional-continuous':[(1-.8**3)/(1-.5**3),2000,integral(x=>x*x/6,4,10)],
 'urv-e1-expected-value':[moments([0,100,500],[.5,.3,.2]).mean,integral(x=>(x*x/100)*(2*x/10000),0,100),100*.03*5000],
 'urv-e2-moments':[integral(x=>x*x*3*x*x,0,1)-integral(x=>x*3*x*x,0,1)**2,9*20-12*4+4,integral(x=>x**4*Math.exp(-x/10)/10,0,1000)-integral(x=>x*x*Math.exp(-x/10)/10,0,1000)**2],
 'urv-e3-mode-median-percentiles':[10*Math.cbrt(.8),1/3,2],
 'urv-f1-variance':[simpleVariance,(-3)**2*25,moments([0,1000],[.8,.2]).variance],
 'urv-f2-standard-deviation':[Math.sqrt(12500-100**2),120/Math.sqrt(64),Math.sqrt(2**2*3**2+4**2)],
 'urv-f3-coefficient-variation':[600*.5**2,1.2*40/(1.2*100+60),2/Math.sqrt(25)],
 'urv-g1-deductibles':[integral(x=>ordinary(x,500)*Math.exp(-x/1000)/1000,0,40000),integral(x=>x/2000,500,2000),350/1000],
 'urv-g2-coinsurance':[.8*ordinary(2500,500),.6*Math.sqrt(40000),Math.min(.8*ordinary(5000,1000),3000)],
 'urv-g3-benefit-limits':[(1000-700)/1000,uniformMoment(x=>Math.min(ordinary(x,200),500),1,0,1000),integral(x=>Math.exp(-x/1000),0,2000)],
 'urv-g4-inflation':[.8*ordinary(1.1*2000,500),integral(x=>ordinary(x,600)*Math.exp(-x/1200)/1200,0,48000),(1000-750/1.25)/1000],
 'urv-h1-loss-variable':[.2*(10000+500**2)-(.2*500)**2,.1*uniformMoment(x=>ordinary(x,200),1,0,1000),1000-650],
 'urv-h2-payment-variable':[uniformMoment(x=>ordinary(x,200),1,0,1000)/.8,.2,2/1000],
 'urv-h3-moments-loss-payment':[uniformVar,uniformMoment(x=>Math.min(x,5),2,0,10),100],
 'mrv-a1-joint-distributions':[.1+.2,[0,1,2].reduce((s,y)=>s+(2+y)/18,0),.4*.3+.6*.7],
 'mrv-a2-conditional-distributions':[3/(1+2+3),.3/(.1+.3),choose(4,1)*.4*.6**3],
 'mrv-b1-joint-moments':[jointMean(i=>i.x*i.y),.6*(2+2**2)+.4*(5+5**2),.6*1+.4*4+moments([2,5],[.6,.4]).variance],
 'mrv-b2-conditional-variance':[moments([0,2],[.4,.6]).variance,Math.sqrt(moments([0,1,2],[.25,.5,.25]).variance),moments([0,4],[.5,.5]).variance],
 'mrv-c1-covariance':[jointMean(i=>i.x*i.y)-jointMean(i=>i.x)*jointMean(i=>i.y),9+16-2*.5*3*4,0],
 'mrv-d1-order-statistics':[choose(5,4)*.8**4*.2+.8**5,(.7-.2)**3,4*3*(.7-.2)**2],
 'mrv-e1-linear-combinations':[Math.exp(-3)*3**2/2,phi((100-80)/Math.sqrt(400+225)),1-.3],
 'mrv-e2-linear-moments':[2**2*4+(-3)**2*9+(2*10-3*20+5)**2,100/25+8**2,(1+4+1)*4],
 'mrv-f1-central-limit-theorem':[1-phi((5400-100*50)/(20*Math.sqrt(100))),phi((11-10)/(5/Math.sqrt(100))),phi((55.5-50)/5)-phi((44.5-50)/5)],
 'urv-d1-conditional-discrete':[choose(4,2)/16/(1-1/16),2/(1-Math.exp(-2)),.8**2],
 'urv-c6-lognormal':[Math.exp(2),1-phi(1),Math.exp(1+2/2)],
};
let count=0;
for(const [id,expected] of Object.entries(checks)) {
 const problems=(await import(`../problems/${id}.js`)).default;
 assert.equal(problems.length,expected.length);
 for(let i=0;i<expected.length;i++) {
  const answer=value(problems[i].choices[problems[i].answer]);
  // Allow the stated rounding, and a small error for numerical quadrature.
  const digits=(problems[i].choices[problems[i].answer].match(/\.(\d+)/)||[])[1]?.length;
  const tolerance=digits ? 0.51*10**-digits : Math.max(1e-5,Math.abs(expected[i])*1e-6);
  assert.ok(Number.isFinite(answer)&&Math.abs(answer-expected[i])<=tolerance,`${id} question ${i+1}: selected ${answer}, recomputed ${expected[i]}`);
  const matching=problems[i].choices.filter(choice=>Math.abs(value(choice)-expected[i])<=tolerance);
  assert.equal(matching.length,1,`${id} question ${i+1} must have exactly one correct choice`);
  count++;
 }
}
console.log(`${count} new question answers independently recomputed; each has one matching choice.`);

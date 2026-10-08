// Independent reconstruction from support cells or numerical density integrals.
export function sectionExpected(s, { integral, Phi, binomial, poisson, moments }) {
 const sum = xs => xs.reduce((a,b)=>a+b,0);
 const average = cells => moments(cells.map(c=>c[0]),cells.map(c=>c[1]/sum(cells.map(c=>c[1]))));
 const densityMoments = (density,lo,hi) => {
  const mass=integral(density,lo,hi), mean=integral(x=>x*density(x),lo,hi)/mass;
  return {mean,second:integral(x=>x*x*density(x),lo,hi)/mass,variance:integral(x=>(x-mean)**2*density(x),lo,hi)/mass};
 };
 switch(s.kind) {
 case 'section-venn': return sum(s.weights.filter((_,i)=>s.target==='two'?[3,5,6].includes(i):i===(s.target==='a-only'?1:0)))/sum(s.weights);
 case 'section-committee': {
  let valid=0,total=0;const n=s.S+s.J;
  for(let a=0;a<n;a++)for(let b=a+1;b<n;b++)for(let c=b+1;c<n;c++)for(let d=c+1;d<n;d++) {
   const panel=[a,b,c,d],two=panel.filter(x=>x<s.S).length===2;
   for(const chair of panel)for(const secretary of panel)if(chair!==secretary){total++;if(two&&chair<s.S&&secretary>=s.S)valid++;}
  }return s.target==='count'?valid:valid/total;
 }
 case 'section-reliability': {
  let den=0,num=0;for(let mask=0;mask<16;mask++) {
   const bits=s.ps.map((_,i)=>(mask>>i)&1),count=sum(bits),mass=s.ps.reduce((p,r,i)=>p*(bits[i]?r:1-r),1);
   if(count>=3){den+=mass;num+=mass*(s.target==='first'?bits[0]:s.target==='exact-three'?Number(count===3):count);}
  }return num/den;
 }
 case 'section-partition': {
  const cells=s.weights.flatMap((w,i)=>[{i,event:true,m:w*s.rates[i]},{i,event:false,m:w*(1-s.rates[i])}]);
  const retained=cells.filter(c=>c.event===(s.target!=='posterior-no')),den=sum(retained.map(c=>c.m));
  return s.target==='claim'?den:sum(retained.filter(c=>c.i===s.group).map(c=>c.m))/den;
 }
 case 'section-audit': {
  const mass=s.K.map(K=>{let both=0,some=0;for(let a=0;a<s.N;a++)for(let b=0;b<s.N;b++)if(a!==b){if(a<K&&b<K)both++;if(a<K||b<K)some++;}return {both:both/(s.N*(s.N-1)),some:some/(s.N*(s.N-1))};});
  const den=s.w*mass[0].both+(1-s.w)*mass[1].both;
  return s.target==='both'?den:s.target==='some'?s.w*mass[0].some+(1-s.w)*mass[1].some:s.w*mass[0].both/den;
 }
 case 'section-screens': {
  const cells=[];for(let fraud=0;fraud<2;fraud++)for(let mask=0;mask<8;mask++) {
   const rate=fraud?s.s:s.t,bits=[0,1,2].map(i=>(mask>>i)&1);
   cells.push({fraud,bits,m:(fraud?s.p:1-s.p)*bits.reduce((p,b)=>p*(b?rate:1-rate),1)});
  }
  const first=cells.filter(c=>c.bits[0]),history=first.filter(c=>!c.bits[1]),den=sum(history.map(c=>c.m));
  return s.target==='second-negative'?den/sum(first.map(c=>c.m)):sum(history.filter(c=>s.target==='posterior'?c.fraud:c.bits[2]).map(c=>c.m))/den;
 }
 case 'section-rv': {
  const cells=Array.from({length:s.n+1},(_,k)=>[s.B*Math.max(k-s.d,0),k+1]),Z=sum(cells.map(c=>c[1]));
  return s.target==='mean'?sum(cells.map(([x,w])=>x*w))/Z:s.target==='zero'?sum(cells.filter(c=>c[0]===0).map(c=>c[1]))/Z:sum(cells.filter(c=>c[0]>2*s.B).map(c=>c[1]))/sum(cells.filter(c=>c[0]>0).map(c=>c[1]));
 }
 case 'section-counts': {
  const cells=binomial(s.n,s.p).flatMap((p,x)=>Array.from({length:65},(_,y)=>({x,y,z:x+2*y,p:p*poisson(y,s.lam)})));
  return s.target==='second'?sum(cells.map(c=>c.z*c.z*c.p)):s.target==='tail'?sum(cells.filter(c=>c.z>s.limit).map(c=>c.p)):sum(cells.filter(c=>c.z<=s.limit&&c.y>0).map(c=>c.p))/sum(cells.filter(c=>c.y>0).map(c=>c.p));
 }
 case 'section-continuous': {
  const exp=x=>Math.exp(-x/s.mu)/s.mu,uniform=()=>1/s.B;
  const tail=x=>s.w*integral(exp,x,60*s.mu,128)+(1-s.w)*integral(uniform,x,s.B);
  return s.target==='posterior'?s.w*integral(exp,s.d,60*s.mu,128)/tail(s.d):s.target==='tail'?tail(s.a)/tail(s.d):s.w*integral(x=>(x-s.d)*exp(x),s.d,60*s.mu,128)+(1-s.w)*integral(x=>(x-s.d)/s.B,s.d,s.B);
 }
 case 'section-truncated': {
  const density=x=>2*x/s.B**2,m=densityMoments(density,s.d,s.B);
  return s.target==='tail'?integral(density,s.a,s.B)/integral(density,s.d,s.B):m[s.target];
 }
 case 'section-moments': {
  const raw=x=>x**(s.k-1)*(1-x),norm=integral(raw,0,1),density=x=>raw(x)/norm,m=densityMoments(density,0,1);
  if(s.target==='second')return m.second;if(s.target==='benefit')return integral(x=>(s.A*x*x+s.C*x)*density(x),0,1);
  let lo=0,hi=1;for(let step=0;step<90;step++) {
   if(s.target==='percentile'){const mid=(lo+hi)/2;if(integral(density,0,mid)<.75)lo=mid;else hi=mid;}
   else {const left=lo+(hi-lo)/3,right=hi-(hi-lo)/3;if(raw(left)<raw(right))lo=left;else hi=right;}
  }return (lo+hi)/2;
 }
 case 'section-variability': {
  const mean=s.w*integral(x=>(s.b+s.a*x)/s.B,0,s.B)+(1-s.w)*integral(x=>(s.b+s.a*x)/(2*s.B),0,2*s.B);
  const variance=s.w*integral(x=>(s.b+s.a*x-mean)**2/s.B,0,s.B)+(1-s.w)*integral(x=>(s.b+s.a*x-mean)**2/(2*s.B),0,2*s.B);
  return s.target==='variance'?variance:s.target==='sd'?Math.sqrt(variance):Math.sqrt(variance)/mean;
 }
 case 'section-insurance': case 'section-loss-payment': {
  const uniform=s.kind==='section-insurance',upper=uniform?s.B*s.inflation:60*s.mu;
  const density=uniform?()=>1/upper:x=>Math.exp(-x/s.mu)/s.mu;
  const pay=x=>Math.min(s.share*Math.max(x-s.d,0),s.cap),limit=s.d+s.cap/s.share;
  const breaks=[0,s.d,Math.min(upper,limit),upper].sort((a,b)=>a-b);
  let mean=0,second=0;for(let i=1;i<breaks.length;i++){mean+=integral(x=>pay(x)*density(x),breaks[i-1],breaks[i],128);second+=integral(x=>pay(x)**2*density(x),breaks[i-1],breaks[i],128);}
  if(uniform)return s.target==='cap'?integral(density,limit,upper):s.target==='mean'?mean:second-mean*mean;
  return s.target==='per-payment'?mean/integral(density,s.d,upper,128):s.target==='retained'?s.p*integral(x=>(x-pay(x))*density(x),0,s.d)+s.p*integral(x=>(x-pay(x))*density(x),s.d,limit)+s.p*integral(x=>(x-pay(x))*density(x),limit,upper,128):Math.sqrt(s.p*second-(s.p*mean)**2);
 }
 case 'section-joint': {
  const cells=[];for(let x=0;x<=s.n;x++)for(let y=0;y<=s.n;y++)cells.push({x,y,w:x+s.k*y+1});
  const retained=cells.filter(c=>s.target==='cdf'?c.x+c.y>0:s.target==='conditional'?c.y===s.n:true);
  return sum(retained.filter(c=>s.target==='cdf'?c.x<=1&&c.y<=1:s.target==='conditional'?c.x>=1:c.x>=s.n-1).map(c=>c.w))/sum(retained.map(c=>c.w));
 }
 case 'section-joint-moments': {
  const cells=s.ps.flatMap((p,i)=>binomial(s.n,p).map((mass,x)=>[x,mass*(i?1-s.w:s.w)])),retained=s.target==='variance'?cells:cells.filter(c=>c[0]>=2),m=average(retained);
  return s.target==='conditional-mean'?m.mean:m.variance;
 }
 case 'section-covariance': {
  let ex=0,ey=0,ex2=0,ey2=0,exy=0,ez=0,ez2=0;
  for(let x=0;x<50;x++)for(let y=0;y<50;y++) {
   const p=s.rates.reduce((a,r,i)=>a+(i?1-s.w:s.w)*poisson(x,r)*poisson(y,r),0),z=2*x-y;
   ex+=x*p;ey+=y*p;ex2+=x*x*p;ey2+=y*y*p;exy+=x*y*p;ez+=z*p;ez2+=z*z*p;
  }return s.target==='covariance'?exy-ex*ey:s.target==='correlation'?(exy-ex*ey)/Math.sqrt((ex2-ex*ex)*(ey2-ey*ey)):ez2-ez*ez;
 }
 case 'section-order': {
  const p=integral(()=>1/(s.B-s.a),s.a,s.b),counts=binomial(s.n,p);
  return s.target==='maximum'?counts[s.n]:s.target==='second'?counts[0]+counts[1]:integral(x=>x*s.n*(x-s.a)**(s.n-1)/(s.B-s.a)**s.n,s.a,s.B)-integral(x=>x*s.n*(s.B-x)**(s.n-1)/(s.B-s.a)**s.n,s.a,s.B);
 }
 case 'section-linear': {
  const base=2*s.mx-3*s.my,variance=4*s.vx+9*s.vy,shifts=[[0,1-s.p],[s.C,s.p]],mean=sum(shifts.map(([r,p])=>(base+r)*p));
  return s.target==='tail'?sum(shifts.map(([r,p])=>p*(1-Phi((s.threshold-base-r)/Math.sqrt(variance))))):s.target==='variance'?sum(shifts.map(([r,p])=>p*(variance+(base+r-mean)**2))):sum(shifts.map(([r,p])=>p*(variance+(base+r)**2)));
 }
 case 'section-clt': {
  const xs=[0,s.share*Math.max(s.B-s.d,0),s.share*Math.max(2*s.B-s.d,0)],ps=[1-s.p,.6*s.p,.4*s.p],mean=sum(xs.map((x,i)=>x*ps[i])),variance=sum(xs.map((x,i)=>(x-mean)**2*ps[i]));
  return s.target==='tail'?1-Phi((s.threshold-s.n*mean)/Math.sqrt(s.n*variance)):s.target==='reserve'?s.n*mean+1.645*Math.sqrt(s.n*variance):Math.ceil(variance*(1.96/s.tol)**2);
 }
 default: throw new Error(`Unknown section audit model: ${s.kind}`);
 }
}

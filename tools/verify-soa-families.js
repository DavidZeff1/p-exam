// Independent distribution reconstruction for the additional chapter questions.
// This file does not import the Python authoring formulas.
export function additionalExpected(s, { choose, fact, integral, Phi, poisson, binomial, moments }) {
  const weightedMoments = (values, weights) => {
    const total = weights.reduce((a,b) => a+b,0);
    return moments(values, weights.map(w => w/total));
  };
  const transformMoment = (m,target) => target==='sd' ? Math.sqrt(m.variance) : target==='cv' ? Math.sqrt(m.variance)/m.mean : m.variance;
  const gammaDensity = (x,shape,scale) => x**(shape-1)*Math.exp(-x/scale)/(fact(shape-1)*scale**shape);
  const gammaTail = (threshold,shape,scale) => integral(x => gammaDensity(x,shape,scale),threshold,100*scale,96);
  function lattice(B) {
    const cells=[];
    for(let x=0;x<=B;x++)for(let y=0;y<=B-x;y++)cells.push({x,y});
    return cells;
  }
  switch(s.kind) {
    case 'symmetric-difference': {
      const masses=[1-s.a-s.b+s.both,s.a-s.both,s.b-s.both,s.both];
      return (masses[1]+masses[2])/(1-masses[0]);
    }
    case 'three-exact': return s.weights.reduce((sum,w,i)=>sum+([1,2,4].includes(i)?w:0),0)/s.weights.reduce((a,b)=>a+b,0);
    case 'ordered-condition': {
      let both=0,second=0;
      for(let first=0;first<s.N;first++)for(let last=0;last<s.N;last++)if(first!==last && last<s.K){second++;if(first<s.K)both++;}
      return both/second;
    }
    case 'digit-codes': {
      let count=0;const used=new Set();
      function visit(position) {
        if(position===s.length){count++;return;}
        for(let digit=0;digit<s.n;digit++){
          if(used.has(digit)||(position===0&&digit===0)||(position===s.length-1&&![1,3,5].includes(digit)))continue;
          used.add(digit);visit(position+1);used.delete(digit);
        }
      }
      visit(0);return count;
    }
    case 'multiset-separation': {
      let redPlacements=0;
      for(let i=0;i<s.n+2;i++)for(let j=i+1;j<s.n+2;j++)if(j-i>1)redPlacements++;
      return redPlacements*fact(s.n);
    }
    case 'committee-condition': {
      let allowed=0,favorable=0;
      // Fix employee zero as the known senior and enumerate the other three.
      for(let a=1;a<s.S+s.J;a++)for(let b=a+1;b<s.S+s.J;b++)for(let c=b+1;c<s.S+s.J;c++){
        allowed++;if([a,b,c].filter(x=>x<s.S).length===1)favorable++;
      }
      return favorable/allowed;
    }
    case 'reliability-condition': {
      let numerator=0,denominator=0;
      for(let mask=0;mask<8;mask++){
        const bits=s.rates.map((_,i)=>(mask>>i)&1);
        const weight=s.rates.reduce((p,rate,i)=>p*(bits[i]?rate:1-rate),1);
        if(bits.reduce((a,b)=>a+b,0)>=2){denominator+=weight;if(bits[0])numerator+=weight;}
      }
      return numerator/denominator;
    }
    case 'class-survival': {
      const masses=s.weights.map((w,i)=>w*(1-s.rates[i]));
      return masses[1]/masses.reduce((a,b)=>a+b,0);
    }
    case 'bayes-binomial': {
      const weights=s.rates.map((p,i)=>binomial(s.n,p)[s.k]*(i===0?s.w:1-s.w));
      return weights[0]/(weights[0]+weights[1]);
    }
    case 'renewal-mixture': return (s.a-s.both)*s.rates[0]+(s.b-s.both)*s.rates[1]+s.both*s.rates[2];
    case 'finite-payment': {
      const counts=Array.from({length:s.n},(_,k)=>k);
      return weightedMoments(counts.map(k=>s.scale*Math.max(k-s.d,0)),counts.map(k=>k+1)).mean;
    }
    case 'triangular-tail': {
      const norm=integral(x=>s.B-x,0,s.B);
      const density=x=>(s.B-x)/norm;
      return integral(density,s.u,s.B)/integral(density,s.t,s.B);
    }
    case 'mixed-power': {
      const density=x=>(1-s.p)*s.power*x**(s.power-1)/s.B**s.power;
      const mean=integral(x=>x*density(x),0,s.B);
      const second=integral(x=>x*x*density(x),0,s.B);
      return s.target==='cv'?Math.sqrt(second-mean*mean)/mean:mean;
    }
    case 'uniform-lattice': {
      const retained=Array.from({length:s.n},(_,i)=>i+1).filter(x=>x>=s.lower);
      return retained.filter(x=>x%2===0).length/retained.length;
    }
    case 'uniform-support-infer': {
      let n=1;
      while((n*n-1)/12<s.variance-1e-10)n++;
      const retained=Array.from({length:n},(_,i)=>i+1).filter(x=>x>=s.threshold);
      return retained.reduce((a,b)=>a+b,0)/retained.length;
    }
    case 'uniform-square': return Array.from({length:s.n},(_,i)=>s.scale*(i+1)**2+s.shift).reduce((a,b)=>a+b,0)/s.n;
    case 'binomial-odds': {
      const p=2*s.ratio/(s.n-1+2*s.ratio);
      return binomial(s.n,p).slice(3).reduce((a,b)=>a+b,0);
    }
    case 'geometric-cap': {
      const values=Array.from({length:s.horizon},(_,i)=>i+1);
      const probabilities=values.map(k=>k<s.horizon?s.p*(1-s.p)**(k-1):(1-s.p)**(s.horizon-1));
      return moments(values,probabilities).mean;
    }
    case 'geometric-tail-infer': {
      const q=s.tail**(1/s.elapsed);
      let numerator=0;
      for(let k=s.elapsed+1;k<=s.elapsed+s.remaining;k++)numerator+=(1-q)*q**(k-1);
      return numerator/s.tail;
    }
    case 'geometric-late': {
      let numerator=0;
      for(let k=s.elapsed+1;k<500;k++)numerator+=k*s.p*(1-s.p)**(k-1);
      return numerator/(1-s.p)**s.elapsed;
    }
    case 'negative-first-failure': {
      let total=0;
      // The final trial is forced to succeed, the first to fail.
      for(let mask=0;mask<2**(s.t-2);mask++){
        const successes=mask.toString(2).replaceAll('0','').length;
        if(successes===s.r-1)total+=s.p**s.r*(1-s.p)**(s.t-s.r-1);
      }
      return total;
    }
    case 'negative-progress': {
      const remaining=s.r-s.completed;let mean=0;
      for(let t=remaining;t<400;t++){
        let positions=1;for(let k=1;k<remaining;k++)positions*=((t-k)/k);
        mean+=(t+s.elapsed)*positions*s.p**remaining*(1-s.p)**(t-remaining);
      }
      return mean;
    }
    case 'negative-interval': {
      let denominator=0,numerator=0;
      for(let t=s.a+1;t<400;t++){
        let positions=1;for(let k=1;k<s.r;k++)positions*=(t-k)/k;
        const mass=positions*s.p**s.r*(1-s.p)**(t-s.r);
        denominator+=mass;if(t<=s.b)numerator+=mass;
      }
      return numerator/denominator;
    }
    case 'hyper-followup': {
      const available=Array.from({length:s.N-s.removed},(_,i)=>i<s.K?1:0);
      let total=0,favorable=0;
      for(let a=0;a<available.length;a++)for(let b=a+1;b<available.length;b++)for(let c=b+1;c<available.length;c++){
        total++;if(available[a]+available[b]+available[c]===1)favorable++;
      }
      return favorable/total;
    }
    case 'poisson-aggregate': {
      let distribution=[1,...Array(s.count).fill(0)];
      for(let week=0;week<s.periods;week++)distribution=distribution.map((_,n)=>{
        let weight=0;for(let k=0;k<=n;k++)weight+=distribution[n-k]*poisson(k,s.lam);return weight;
      });
      return distribution[s.count];
    }
    case 'uniform-payment-quantile': {
      let low=0,high=s.share*(s.B-s.d);
      for(let i=0;i<70;i++){
        const y=(low+high)/2;
        const mass=integral(()=>1/s.B,0,Math.min(s.B,s.d+y/s.share));
        if(mass<s.u)low=y;else high=y;
      }
      return (low+high)/2;
    }
    case 'exponential-minimum': {
      const survival=t=>s.means.reduce((p,mu)=>p*integral(x=>Math.exp(-x/mu)/mu,t,80*mu,96),1);
      return survival(2*s.t)/survival(s.t);
    }
    case 'gamma-truncated-mean': {
      const density=x=>gammaDensity(x,s.shape,s.scale);
      return integral(x=>x*density(x),s.threshold,100*s.scale,96)/gammaTail(s.threshold,s.shape,s.scale);
    }
    case 'gamma-aggregate': return gammaTail(s.threshold,s.shape*s.count,s.scale);
    case 'gamma-cv': {
      const density=x=>gammaDensity(x,s.shape,s.scale);
      const mean=integral(x=>x*density(x),0,100*s.scale,96);
      return integral(x=>x*x*density(x),0,100*s.scale,96)-mean*mean;
    }
    case 'beta-mode-infer': {
      const normalization=integral(x=>x**(s.a-1)*(1-x)**(s.b-1),0,1);
      const density=x=>x**(s.a-1)*(1-x)**(s.b-1)/normalization;
      const mean=integral(x=>x*density(x),0,1);
      return integral(x=>x*x*density(x),0,1)-mean*mean;
    }
    case 'normal-two-quantiles': {
      const sd=(s.upper-s.lower)/3,mu=s.lower+sd;
      return 1-Phi((s.threshold-mu)/sd);
    }
    case 'poisson-truncated': {
      const vals=Array.from({length:s.upper+1},(_,n)=>n);
      const result=weightedMoments(vals,vals.map(n=>poisson(n,s.lam)));
      return s.target==='variance'?result.variance:result.mean;
    }
    case 'predictive-variance': {
      const likelihood=[s.w*poisson(0,s.rates[0]),(1-s.w)*poisson(0,s.rates[1])];
      const posterior=likelihood.map(w=>w/(likelihood[0]+likelihood[1]));
      const vals=Array.from({length:100},(_,i)=>i);
      return moments(vals,vals.map(n=>posterior.reduce((sum,w,i)=>sum+w*poisson(n,s.rates[i]),0))).variance;
    }
    case 'triangular-variance': {
      const density=x=>s.B-x;
      const den=integral(density,s.lower,s.B);
      const mean=integral(x=>x*density(x),s.lower,s.B)/den;
      const variance=integral(x=>x*x*density(x),s.lower,s.B)/den-mean*mean;
      return s.target==='sd'?Math.sqrt(variance):variance;
    }
    case 'power-expectation': return integral(x=>(s.a*x*x+s.shift)*s.power*x**(s.power-1)/s.B**s.power,0,s.B);
    case 'loss-mixture-variance': {
      const probs=[s.w,1-s.w];
      const mean=probs.reduce((sum,p,i)=>sum+p*s.means[i],0);
      const second=probs.reduce((sum,p,i)=>sum+p*(s.sds[i]**2+s.means[i]**2),0);
      return transformMoment({mean,variance:second-mean*mean},s.target);
    }
    case 'deductible-ratio': {
      const density=x=>Math.exp(-x/s.mu)/s.mu;
      const payment=d=>integral(x=>(x-d)*density(x),d,80*s.mu,96);
      return payment(s.d+s.delta)/payment(s.d);
    }
    case 'franchise-exponential': return integral(x=>s.share*x*Math.exp(-x/s.mu)/s.mu,s.d,80*s.mu,96);
    case 'limited-exponential': {
      const boundary=s.cap/s.share,density=x=>Math.exp(-x/s.mu)/s.mu;
      return integral(x=>s.share*x*density(x),0,boundary)+s.cap*integral(density,boundary,80*s.mu,96);
    }
    case 'inflation-franchise': return integral(x=>s.share*s.factor*x/s.B,s.d/s.factor,s.B);
    case 'payment-interior': return integral(x=>Math.exp(-x/s.mu)/s.mu,s.d,s.d+s.cap/s.share);
    case 'joint-discrete-triangle': {
      const cells=lattice(s.B);
      return cells.filter(({x,y})=>x-y>s.threshold).length/cells.length;
    }
    case 'joint-discrete-triangle-mean':
    case 'joint-discrete-triangle-variance': {
      const row=lattice(s.B).filter(({y})=>y===s.y);
      const m=weightedMoments(row.map(({x})=>x),row.map(()=>1));
      return s.kind.endsWith('variance')?m.variance:m.mean;
    }
    case 'shared-discrete-cov': {
      const cells=[];
      for(let u=1;u<=s.B;u++)for(const e of [-Math.sqrt(s.noise),Math.sqrt(s.noise)])for(const f of [-Math.sqrt(s.noise),Math.sqrt(s.noise)])cells.push({x:u+e,y:s.a*(s.B-u)+f});
      const meanX=cells.reduce((sum,c)=>sum+c.x,0)/cells.length;
      const meanY=cells.reduce((sum,c)=>sum+c.y,0)/cells.length;
      return cells.reduce((sum,c)=>sum+(c.x-meanX)*(c.y-meanY),0)/cells.length;
    }
    case 'order-exponential': {
      const survival=integral(x=>Math.exp(-x/s.mu)/s.mu,s.threshold,80*s.mu,96);
      const probs=binomial(s.n,1-survival);
      return probs.slice(2).reduce((a,b)=>a+b,0);
    }
    case 'order-uniform-mean': {
      const density=x=>fact(s.n)/(fact(s.rank-1)*fact(s.n-s.rank))*(x/s.B)**(s.rank-1)*(1-x/s.B)**(s.n-s.rank)/s.B;
      return integral(x=>x*density(x),0,s.B);
    }
    case 'correlated-linear': {
      const variance=s.a*s.a*s.sx*s.sx+s.b*s.b*s.sy*s.sy+2*s.a*s.b*s.rho*s.sx*s.sy;
      return s.target==='sd'?Math.sqrt(variance):variance;
    }
    case 'clt-size': {
      let n=1;
      while(s.tolerance*Math.sqrt(n)/s.sd<s.z)n++;
      return n;
    }
    case 'weighted-binomial': {
      const xProbs=binomial(s.n,s.p),yProbs=binomial(s.m,s.q);
      const sum=Array(2*s.n+s.m+1).fill(0);
      xProbs.forEach((p,x)=>yProbs.forEach((q,y)=>{sum[2*x+y]+=p*q;}));
      return sum.slice(0,s.limit+1).reduce((a,b)=>a+b,0);
    }
    case 'independent-linear-raw': {
      let second=0;
      for(let x=1;x<=s.n;x++)for(let y=0;y<2;y++)second+=(2*x-3*y+s.shift)**2/s.n*(y?s.p:1-s.p);
      return second;
    }
    case 'clt-uniform': {
      const mean=integral(x=>x/s.B,0,s.B),second=integral(x=>x*x/s.B,0,s.B);
      return 1-Phi((s.threshold-mean)/Math.sqrt((second-mean*mean)/s.n));
    }
    case 'clt-exponential': {
      const density=x=>Math.exp(-x/s.mu)/s.mu;
      const mean=integral(x=>x*density(x),0,80*s.mu,96);
      const second=integral(x=>x*x*density(x),0,80*s.mu,96);
      return 1-Phi((s.reserve-s.n*mean)/Math.sqrt(s.n*(second-mean*mean)));
    }
    case 'normal-independent-difference': return integral(z=>(1-Phi((s.mx-s.margin-s.my-s.sy*z)/s.sx))*Math.exp(-z*z/2)/Math.sqrt(2*Math.PI),-12,12,96);
    case 'independent-average-sd': return Math.sqrt(s.scale*s.scale*s.sd*s.sd/s.n+s.shiftSD*s.shiftSD);
    case 'poisson-linear-variance': {
      const vals=Array.from({length:100},(_,i)=>i);
      const mx=moments(vals,vals.map(n=>poisson(n,s.a))),my=moments(vals,vals.map(n=>poisson(n,s.b)));
      return 4*mx.variance+9*my.variance;
    }
    case 'lognormal-conditional': return (1-Phi((Math.log(s.upper)-s.mu)/s.sigma))/(1-Phi((Math.log(s.lower)-s.mu)/s.sigma));
    case 'lognormal-square': return integral(z=>s.share*s.share*Math.exp(2*(s.mu+s.sigma*z))*Math.exp(-z*z/2)/Math.sqrt(2*Math.PI),-12,12,96);
    case 'lognormal-limited': {
      const threshold=(Math.log(s.cap)-s.mu)/s.sigma;
      const normal=z=>Math.exp(-z*z/2)/Math.sqrt(2*Math.PI);
      return integral(z=>Math.exp(s.mu+s.sigma*z)*normal(z),-12,threshold,96)+s.cap*integral(normal,threshold,12,96);
    }
    default: throw new Error(`Missing independent oracle for ${s.kind}`);
  }
}

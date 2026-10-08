"""Original cumulative scenarios. Numerical answers are audited in JavaScript.
The models combine section skills; the generator retains their inputs for audit.
"""
import math
from math import comb, exp, sqrt

def register(families, Q, W, f, phi):
    added = {}
    def family(key):
        def decorate(fn):
            name = 'cumulative-' + key
            added[name] = fn
            return fn
        return decorate
    def make(text, answer, steps, spec, skills, score=5, probability=False, integer=False):
        spec = dict(spec, probability=probability)
        if probability:
            wrong = [1-answer, answer/2, (1+answer)/2, min(.99, answer+.12), max(.001, answer-.12)]
        else:
            wrong = [answer/2, answer*2, answer*.8, answer*1.2, answer+1, answer-1]
        q = Q(text, answer, steps, spec,
              W(wrong, 'Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.'), skills, [])
        if integer:
            q['question'] = text
            spec['precision'] = 0
            q['choices'] = [f'${float(choice.strip("$")):.0f}$' for choice in q['choices']]
        assert len(set(q['choices'])) == 5
        q['estimatedDifficulty'] = score
        return q
    def pmf(n,p): return [comb(n,k)*p**k*(1-p)**(n-k) for k in range(n+1)]
    def moments(xs, ps):
        m = sum(x*p for x,p in zip(xs,ps)); s = sum(x*x*p for x,p in zip(xs,ps))
        return m, s, s-m*m
    def uniform_payment(B,d,s,cap):
        h = min(max(B-d,0),cap/s)
        m = s*h*h/(2*B)+cap*max(B-d-h,0)/B
        sec = s*s*h**3/(3*B)+cap*cap*max(B-d-h,0)/B
        return m, sec
    def exponential_payment(mu,d,s,cap):
        z = cap/(s*mu); positive=exp(-d/mu)
        m = positive*s*mu*(1-exp(-z))
        sec = positive*2*(s*mu)**2*(1-(1+z)*exp(-z))
        return m,sec,positive

    @family('general-probability-a')
    def sets(v):
        w=[9+v,4+v%3,6+v%5,3+v%4,5+v%7,2+v%3,4+v%2,1+v%3];total=sum(w)
        marginal=[sum(w[i] for i in range(8) if i&(1<<j)) for j in range(3)]
        pair=[w[3]+w[7],w[5]+w[7],w[6]+w[7]];target=['two','a-only','none'][v%3]
        numerator=sum(w[i] for i in [3,5,6]) if target=='two' else w[1] if target=='a-only' else w[0]
        ans=numerator/total
        request={'two':'exactly two of the three endorsements','a-only':'endorsement A but neither B nor C','none':'none of the three endorsements'}[target]
        return make(f'A homeowners portfolio offers endorsements A, B, and C. Their probabilities are {marginal[0]}/{total}, {marginal[1]}/{total}, and {marginal[2]}/{total}. The probabilities of A∩B, A∩C, and B∩C are {pair[0]}/{total}, {pair[1]}/{total}, and {pair[2]}/{total}; all three occur with probability {w[7]}/{total}. Calculate the probability that a randomly selected customer has {request}.',ans,
            ['Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.',f'The A-only region has mass {w[1]}/{total}; the exactly-two regions have total mass {w[3]+w[5]+w[6]}/{total}. Inclusion–exclusion gives the none region {w[0]}/{total}.',f'The requested region or disjoint union of regions has probability {numerator}/{total}={f(ans)}.'],
            dict(kind='section-venn',weights=w,target=target),['set operations','Venn regions','probability axioms'],4,True)

    @family('general-probability-b')
    def committees(v):
        S=5+v%5;J=6+(v//3)%5;n=4;target=['count','probability'][v%2]
        count=comb(S,2)*comb(J,2)*4;den=comb(S+J,n)*n*(n-1);ans=count if target=='count' else count/den
        request='number of permitted panel-and-role assignments' if target=='count' else 'probability that the panel has exactly two actuaries, with an actuary as chair and an underwriter as secretary'
        stem=f'A review panel of four is selected from {S} actuaries and {J} underwriters. The chair and secretary are distinct panel members, and their roles are labeled. '
        stem+= 'Exactly two panel members must be actuaries; the chair must be an actuary and the secretary an underwriter. ' if target=='count' else 'Every panel and every assignment of the two roles within it are equally likely. '
        return make(stem+f'Calculate the {request}.',ans,
            [f'Choose two members from each profession: choose({S},2)×choose({J},2).','For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.',f'The permitted count is {count}. The unrestricted count is choose({S+J},4)×4×3={den}; the requested result is {f(ans)}.'],
            dict(kind='section-committee',S=S,J=J,target=target),['combinations','labeled permutations','combinatorial probability'],5,target=='probability',target=='count')

    @family('general-probability-c')
    def reliability(v):
        ps=[.55+.01*(v%11),.65+.01*((v//2)%9),.75+.01*((v//3)%8),.8+.005*(v%12)]
        cells=[]
        for mask in range(16):
            count=mask.bit_count();mass=math.prod(p if mask&(1<<i) else 1-p for i,p in enumerate(ps))
            cells.append((mask,count,mass))
        den=sum(p for _,c,p in cells if c>=3);target=['first','exact-three','mean'][v%3]
        num=sum(p*((mask&1)>0 if target=='first' else c==3 if target=='exact-three' else c) for mask,c,p in cells if c>=3);ans=num/den
        request={'first':'probability that component 1 operates','exact-three':'probability that exactly three components operate','mean':'expected number of operating components'}[target]
        return make(f'Four components operate mutually independently with probabilities {", ".join(f(p) for p in ps)}, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the {request}.',ans,
            ['Use independence to multiply success and failure probabilities for each possible component pattern.',f'Add the four exactly-three patterns and the all-four pattern. The system operating probability is {f(den)}.',f'Within these operating patterns, the requested numerator is {f(num)}. Divide by {f(den)} to obtain {f(ans)}.'],
            dict(kind='section-reliability',ps=ps,target=target),['independent trials','addition of disjoint patterns','conditioning'],5,target!='mean')

    @family('general-probability-d')
    def partition(v):
        w=[.2,.3,.5];rates=[.04+.001*(v%15),.12+.002*(v%10),.28+.002*(v%12)];group=v%3;claim=sum(a*b for a,b in zip(w,rates));target=['claim','posterior-no','posterior-claim'][v%3]
        ans=claim if target=='claim' else w[group]*(1-rates[group])/(1-claim) if target=='posterior-no' else w[group]*rates[group]/claim
        request='annual claim probability' if target=='claim' else f'probability that a policy is in class {group+1}, given that it had '+('no claim' if target=='posterior-no' else 'a claim')
        return make(f'Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are {", ".join(f(p) for p in rates)}, respectively. Calculate the {request}.',ans,
            ['The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.',f'The total claim probability is {f(claim)}, and the no-claim probability is {f(1-claim)}.',f'For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is {f(ans)}.'],dict(kind='section-partition',weights=w,rates=rates,group=group,target=target),['mutually exclusive classes','partition','total probability'],4,True)

    @family('general-probability-e')
    def audit(v):
        N=12+v%8;K=[3+v%3,1+v%2];w=.35+.01*(v%15);lik=[k*(k-1)/(N*(N-1)) for k in K];union=[1-(N-k)*(N-k-1)/(N*(N-1)) for k in K];both=w*lik[0]+(1-w)*lik[1];target=['both','some','posterior'][v%3]
        ans=both if target=='both' else w*union[0]+(1-w)*union[1] if target=='some' else w*lik[0]/both
        request={'both':'probability that both sampled files have errors','some':'probability that at least one sampled file has an error','posterior':'probability that office H supplied the batch, given that both sampled files have errors'}[target]
        return make(f'A batch comes from office H with probability {f(w)}, otherwise from office L. Each batch has {N} files. H batches contain exactly {K[0]} error files; L batches contain exactly {K[1]}. Two files are sampled in order without replacement. Calculate the {request}.',ans,
            [f'Within each office, use conditional multiplication without replacement. The probabilities of two errors are {f(lik[0])} and {f(lik[1])}.',f'For at least one error, complement the two-sound event. The office-specific probabilities are {f(union[0])} and {f(union[1])}.',f'Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass {f(both)}. The requested value is {f(ans)}.'],dict(kind='section-audit',N=N,K=K,w=w,target=target),['multiplication without replacement','complements','addition over classes'],5,True)

    @family('general-probability-f')
    def screens(v):
        p=.02+.001*(v%25);s=.75+.005*(v%20);t=.08+.002*(v%15);den=p*s*(1-s)+(1-p)*t*(1-t);posterior=p*s*(1-s)/den;target=['posterior','next','second-negative'][v%3]
        ans=posterior if target=='posterior' else posterior*s+(1-posterior)*t if target=='next' else den/(p*s+(1-p)*t)
        request={'posterior':'probability the claim is fraudulent, given that test 1 flags it and test 2 does not','next':'probability test 3 flags the claim, given that test 1 flags it and test 2 does not','second-negative':'probability test 2 does not flag the claim, given that test 1 flags it'}[target]
        return make(f'A claim is fraudulent with probability {f(p)}. A screening test flags a fraudulent claim with probability {f(s)} and a legitimate claim with probability {f(t)}. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the {request}.',ans,
            ['Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.',f'The total positive-then-negative probability is {f(den)}. Bayes gives fraud probability {f(posterior)} after that history.',f'For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is {f(ans)}.'],dict(kind='section-screens',p=p,s=s,t=t,target=target),['conditional probability','Bayes','posterior total probability'],6,True)

    @family('univariate-random-variables-a')
    def rv(v):
        n=4+v%6;d=1+v%2;B=100+10*(v%13);xs=list(range(n+1));weights=[k+1 for k in xs];ps=[w/sum(weights) for w in weights];ys=[B*max(k-d,0) for k in xs];target=['zero','tail','mean'][v%3];threshold=2*B
        positive=sum(p for y,p in zip(ys,ps) if y>0)
        ans=sum(p for y,p in zip(ys,ps) if y==0) if target=='zero' else sum(p for y,p in zip(ys,ps) if y>threshold)/positive if target=='tail' else sum(y*p for y,p in zip(ys,ps))
        request='P(Y=0)' if target=='zero' else f'P(Y>{threshold} given Y>0)' if target=='tail' else 'E[Y]'
        return make(f'A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,{n}, and zero otherwise. The constant c is unknown. A benefit is Y={B} max(N-{d},0). Calculate {request}.',ans,
            [f'Normalize the mass function: c=1/(1+2+…+{n+1})=1/{sum(weights)}.',f'Transform each count to its benefit. Counts through {d} give the CDF jump at zero; a positive benefit has probability {f(positive)}.',f'Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is {f(ans)}.'],dict(kind='section-rv',n=n,d=d,B=B,target=target),['PMF normalization','random-variable transformation','CDF and event probabilities'],5,target!='mean')

    @family('univariate-random-variables-b')
    def counts(v):
        n=4+v%7;p=.15+.01*(v%20);lam=.4+.05*(v%15);limit=4+v%5;bx=pmf(n,p);target=['tail','conditional','second'][v%3]
        low=sum(px*exp(-lam)*lam**y/math.factorial(y) for x,px in enumerate(bx) for y in range(20) if x+2*y<=limit)
        conditional=sum(px*exp(-lam)*lam**y/math.factorial(y) for x,px in enumerate(bx) for y in range(1,20) if x+2*y<=limit)/(1-exp(-lam))
        mean=n*p+2*lam;var=n*p*(1-p)+4*lam;ans=1-low if target=='tail' else conditional if target=='conditional' else var+mean*mean
        request=f'P(S>{limit})' if target=='tail' else f'P(S≤{limit} given Y>0)' if target=='conditional' else 'E[S²]'
        return make(f'An insurer covers {n} independent small risks, each with claim probability {f(p)}; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean {f(lam)}. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate {request}.',ans,
            [f'X is binomial with parameters {n},{f(p)} and Y is Poisson with mean {f(lam)}. Their joint mass factors by independence.',f'For the count event, sum the joint masses satisfying x+2y≤{limit}. For Y>0 exclude its zero row and divide by 1-exp(-{f(lam)}).',f'E[S]={f(mean)} and Var(S)={f(var)}. Use E[S²]=Var(S)+E[S]² when requested; the result is {f(ans)}.'],dict(kind='section-counts',n=n,p=p,lam=lam,limit=limit,target=target),['discrete distribution selection','weighted counts','conditional summation'],6,target!='second')

    @family('univariate-random-variables-c')
    def continuous(v):
        B=2000+50*v;mu=700+10*v;w=.3+.01*(v%20);d=.25*B;a=.6*B;target=['posterior','tail','mean'][v%3]
        survival=(1-w)*(B-d)/B+w*exp(-d/mu)
        ans=w*exp(-d/mu)/survival if target=='posterior' else ((1-w)*(B-a)/B+w*exp(-a/mu))/survival if target=='tail' else (1-w)*(B-d)**2/(2*B)+w*mu*exp(-d/mu)
        request='probability the loss came from the exponential class, given X>d' if target=='posterior' else f'P(X>{f(a)} given X>d)' if target=='tail' else 'expected payment (X-d)₊ per loss'
        return make(f'A loss is from an exponential class with probability {f(w)} and a uniform class otherwise. Within the classes, X is exponential with mean {mu}, or uniform on (0,{B}), respectively. The ordinary deductible d is {f(d)}. Calculate the {request}.',ans,
            [f'Use class-specific survival functions: exp(-x/{mu}) and 1-x/{B} on the uniform support.',f'The mixture survival probability at the deductible is {f(survival)}. A conditional probability divides its appropriate joint or tail mass by this number.',f'For expected excess, integrate each survival function above d and weight by class. The requested result is {f(ans)}.'],dict(kind='section-continuous',B=B,mu=mu,w=w,d=d,a=a,target=target),['continuous distribution selection','mixture survival','deductible and conditioning'],6,target!='mean')

    @family('univariate-random-variables-d')
    def truncated(v):
        B=100+v;p=.55+.005*(v%30);d=B*(.2+.01*(v%20));a=.8*B;target=['mean','variance','tail'][v%3]
        survival=1-(d/B)**2;m=2*(B**3-d**3)/(3*B*B*survival);sec=(B**4-d**4)/(2*B*B*survival);ans=m if target=='mean' else sec-m*m if target=='variance' else (1-(a/B)**2)/survival
        request='E[X given X>d]' if target=='mean' else 'Var(X given X>d)' if target=='variance' else f'P(X>{f(a)} given X>d)'
        return make(f'An annual loss X equals zero with probability {f(1-p)}. Otherwise it has conditional density 2x/{B}² on (0,{B}). A reported loss exceeds d={f(d)}. Calculate {request}.',ans,
            [f'Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/{B}² over ({f(d)},{B}).',f'The severity tail at d is {f(survival)}. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.',f'The conditional first and second moments are {f(m)} and {f(sec)}. Subtract the squared mean for variance. The requested value is {f(ans)}.'],dict(kind='section-truncated',B=B,p=p,d=d,a=a,target=target),['discrete-continuous mixture','conditional density','truncated moments'],6,target=='tail')

    @family('univariate-random-variables-e')
    def moments_family(v):
        k=2+v%5;A=500+10*v;C=100+v;target=['mode','second','benefit','percentile'][v%4];mean=k/(k+2);sec=k*(k+1)/((k+2)*(k+3))
        lo=0;hi=1
        for _ in range(70):
            mid=(lo+hi)/2;cdf=(k+1)*mid**k-k*mid**(k+1)
            if cdf<.75:lo=mid
            else:hi=mid
        quantile=(lo+hi)/2;ans=(k-1)/k if target=='mode' else sec if target=='second' else A*sec+C*mean if target=='benefit' else quantile
        request={'mode':'mode of X','second':'second raw moment of X','benefit':f'expected benefit {A}X²+{C}X','percentile':'75th percentile of X'}[target]
        return make(f'A loss proportion X has density c x^{k-1}(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the {request}.',ans,
            [f'Integrating x^{k-1}(1-x) gives 1/({k}×{k+1}), so c={k*(k+1)} and F(x)={k+1}x^{k}-{k}x^{k+1}.',f'Integration gives E[X]={f(mean)} and E[X²]={f(sec)}; differentiation places the density maximum at {f((k-1)/k)}.',f'For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is {f(ans)}.'],dict(kind='section-moments',k=k,A=A,C=C,target=target),['normalize a density','moments and transformed expectation','mode and percentile'],5,target!='benefit')

    @family('univariate-random-variables-f')
    def variability(v):
        B=400+10*v;w=.2+.005*(v%40);a=.6+.005*(v%30);b=100+v;mean=w*B/2+(1-w)*B;second=w*B*B/3+(1-w)*4*B*B/3;var=second-mean*mean;my=b+a*mean;vy=a*a*var;target=['variance','sd','cv'][v%3];ans=vy if target=='variance' else sqrt(vy) if target=='sd' else sqrt(vy)/my
        request={'variance':'variance','sd':'standard deviation','cv':'coefficient of variation'}[target]
        return make(f'A loss X is uniform on (0,{B}) for class 1 and uniform on (0,{2*B}) for class 2. The probability of class 1 is {f(w)}. The total cost is Y={b}+{f(a)}X. Calculate the {request} of Y.',ans,
            [f'Weight the class-specific raw moments, giving E[X]={f(mean)} and E[X²]={f(second)}.','Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.',f'E[Y]={f(my)} and Var(Y)={f(vy)}. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is {f(ans)}.'],dict(kind='section-variability',B=B,w=w,a=a,b=b,target=target),['mixture moments','affine mean and variance','SD and coefficient of variation'],5)

    @family('univariate-random-variables-g')
    def insurance(v):
        B=3000+20*v;inflation=1.1+.005*(v%30);d=500+5*v;share=.65+.005*(v%30);cap=700+3*v;upper=B*inflation;mean,sec=uniform_payment(upper,d,share,cap);target=['mean','variance','cap'][v%3]
        mass=max(upper-d-cap/share,0)/upper;ans=mean if target=='mean' else sec-mean*mean if target=='variance' else mass
        request={'mean':'expected payment per loss','variance':'payment variance per loss','cap':'probability that the insurer pays exactly the benefit limit'}[target]
        return make(f'Before inflation, a property loss X is uniform on (0,{B}). Losses increase by {f(100*(inflation-1))}%. The policy’s fixed ordinary deductible is {d}; the insurer then pays {f(100*share)}% of the excess, subject to a final payment limit of {cap}. Calculate the {request}.',ans,
            [f'Inflate the loss support to (0,{f(upper)}) while retaining the fixed deductible and final payment cap.',f'The payment is min({f(share)} max({f(inflation)}X-{d},0),{cap}). The loss at which the cap is reached is {f(d+cap/share)} after inflation.',f'Integrate the linear payment region and add the cap atom: E[Y]={f(mean)}, E[Y²]={f(sec)}, and P(Y=cap)={f(mass)}. The requested result is {f(ans)}.'],dict(kind='section-insurance',B=B,inflation=inflation,d=d,share=share,cap=cap,target=target),['inflation','deductible and coinsurance','benefit cap and payment moments'],7,target=='cap')

    @family('univariate-random-variables-h')
    def loss_payment(v):
        p=.1+.002*(v%45);mu=800+20*v;d=300+3*v;s=.7+.002*(v%30);cap=900+5*v;m,sec,pos=exponential_payment(mu,d,s,cap);mean=p*m;second=p*sec;target=['sd','per-payment','retained'][v%3]
        ans=sqrt(second-mean*mean) if target=='sd' else m/pos if target=='per-payment' else p*mu-mean
        request={'sd':'annual insurer payment standard deviation per policy','per-payment':'expected insurer payment given that a positive insurer payment occurs','retained':'expected annual loss retained by the policyholder'}[target]
        return make(f'A policy has one loss with probability {f(p)}, and no loss otherwise. Given a loss, its size is exponential with mean {mu}. The insurer pays {f(100*s)}% of the excess above deductible {d}, subject to a final payment cap of {cap}. Calculate the {request}.',ans,
            [f'Given a loss, integrate the payment survival function. Its first moment is {f(m)} and second moment is {f(sec)}.',f'Include the no-loss atom: annual E[Y]={f(mean)}, E[Y²]={f(second)}. A positive payment occurs with probability {f(p*pos)}.',f'For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation {f(p*mu)}-E[Y]. The requested result is {f(ans)}.'],dict(kind='section-loss-payment',p=p,mu=mu,d=d,share=s,cap=cap,target=target),['loss occurrence mixture','payment transformation','per-loss and per-payment moments'],7)

    @family('multivariate-random-variables-a')
    def joint(v):
        n=2+v%4;k=1+v%3;cells=[(x,y,x+k*y+1) for x in range(n+1) for y in range(n+1)];norm=sum(w for _,_,w in cells);target=['cdf','conditional','marginal'][v%3]
        den=norm-1 if target=='cdf' else sum(w for x,y,w in cells if y==n) if target=='conditional' else norm
        num=sum(w for x,y,w in cells if x<=1 and y<=1 and x+y>0) if target=='cdf' else sum(w for x,y,w in cells if y==n and x>=1) if target=='conditional' else sum(w for x,y,w in cells if x>=n-1)
        ans=num/den;request='P(X≤1,Y≤1 given X+Y>0)' if target=='cdf' else f'P(X≥1 given Y={n})' if target=='conditional' else f'P(X≥{n-1})'
        return make(f'Two claim counts X,Y have joint mass p(x,y)=c(x+{k}y+1) for integers 0≤x≤{n}, 0≤y≤{n}; it is zero elsewhere. The constant c is unknown. Calculate {request}.',ans,
            [f'Sum the joint weights over the {(n+1)**2} support cells, giving c=1/{norm}.','For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.',f'The numerator and denominator weights are {num} and {den}. Their common normalizing factor cancels, giving {f(ans)}.'],dict(kind='section-joint',n=n,k=k,target=target),['joint PMF normalization','joint CDF and marginals','conditional distributions'],5,True)

    @family('multivariate-random-variables-b')
    def joint_moments(v):
        n=5+v%5;w=.3+.005*(v%40);ps=[.1+.002*(v%30),.35+.002*(v%30)];mix=[w*a+(1-w)*b for a,b in zip(pmf(n,ps[0]),pmf(n,ps[1]))];target=['variance','conditional-mean','conditional-variance'][v%3];cut=2
        xs=list(range(n+1));weights=mix if target=='variance' else [p if x>=cut else 0 for x,p in zip(xs,mix)];norm=sum(weights);weights=[p/norm for p in weights];m,sec,var=moments(xs,weights);ans=m if target=='conditional-mean' else var
        request='Var(X)' if target=='variance' else 'E[X given X≥2]' if target=='conditional-mean' else 'Var(X given X≥2)'
        return make(f'A policy’s fixed class Y is 1 with probability {f(w)}, otherwise 2. Given class 1 or 2, X is binomial with {n} trials and success probability {f(ps[0])} or {f(ps[1])}, respectively. Calculate {request}.',ans,
            ['First obtain the marginal mass function by weighting the two conditional binomial mass functions.',f'For conditioning, retain counts at least 2 and renormalize by their total probability {f(norm)}.','Compute first and second raw moments from the retained masses: '+f'E[X]={f(m)}, E[X²]={f(sec)}. Subtract the squared mean for variance; the requested value is {f(ans)}.'],dict(kind='section-joint-moments',n=n,w=w,ps=ps,target=target),['conditional and marginal PMFs','conditional moments','total and conditional variance'],6)

    @family('multivariate-random-variables-c')
    def covariance(v):
        w=.2+.005*(v%50);rates=[.4+.01*(v%20),1.5+.01*(v%30)];mean=w*rates[0]+(1-w)*rates[1];latent=w*(1-w)*(rates[1]-rates[0])**2;var=mean+latent;target=['covariance','correlation','linear-variance'][v%3];ans=latent if target=='covariance' else latent/var if target=='correlation' else 5*var-4*latent
        request='Cov(X,Y)' if target=='covariance' else 'Corr(X,Y)' if target=='correlation' else 'Var(2X-Y)'
        return make(f'Two insured risks share a fixed latent class: class H with probability {f(w)}, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean {f(rates[0])} in H or {f(rates[1])} in L. Calculate {request}.',ans,
            ['Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.',f'E[X]=E[Y]={f(mean)}; Var(X)=Var(Y)={f(var)}. E[XY]-E[X]E[Y]={f(latent)}.',f'Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is {f(ans)}.'],dict(kind='section-covariance',w=w,rates=rates,target=target),['conditional independence','discrete mixed moments','covariance and linear variance'],6)

    @family('multivariate-random-variables-d')
    def order(v):
        n=4+v%7;B=100+v;a=.2*B;b=(.5+.01*(v%20))*B;r=(b-a)/(B-a);target=['maximum','second','range'][v%3];ans=r**n if target=='maximum' else (1-r)**n+n*r*(1-r)**(n-1) if target=='second' else (B-a)*(n-1)/(n+1)
        request=f'P(V<{f(b)} given U>{f(a)})' if target=='maximum' else f'P(W>{f(b)} given U>{f(a)})' if target=='second' else f'E[V-U given U>{f(a)}]'
        return make(f'{n} independent losses are each uniform on (0,{B}). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate {request}.',ans,
            [f'Given U>{f(a)}, every loss lies in ({f(a)},{B}); independence is retained under this product event.',f'The conditional chance a loss is below {f(b)} is r={f(r)}. The maximum event requires all {n} losses below it; the second-smallest event allows at most one below it.',f'The expected conditional range is ({B}-{f(a)})({n}-1)/({n}+1). Evaluate the appropriate order-statistic quantity to obtain {f(ans)}.'],dict(kind='section-order',n=n,B=B,a=a,b=b,target=target),['joint ranks','conditional support','rank-to-count conversion'],6,target!='range')

    @family('multivariate-random-variables-e')
    def linear(v):
        mx=100+v;my=50+v;vx=100+2*v;vy=64+v;p=.2+.005*(v%40);C=40+v;target=['tail','variance','second'][v%3];base=2*mx-3*my;var0=4*vx+9*vy;threshold=base+30;mean=base+p*C;var=var0+C*C*p*(1-p);ans=(1-p)*(1-phi((threshold-base)/sqrt(var0)))+p*(1-phi((threshold-base-C)/sqrt(var0))) if target=='tail' else var if target=='variance' else var+mean*mean
        request=f'P(Z>{threshold})' if target=='tail' else 'Var(Z)' if target=='variance' else 'E[Z²]'
        return make(f'Independent amounts X,Y are normal with means {mx},{my} and variances {vx},{vy}, respectively. Independently, a surcharge R is {C} with probability {f(p)} and zero otherwise. Let Z=2X-3Y+R. Calculate {request}. Use a standard normal table when needed.',ans,
            [f'2X-3Y is exactly normal with mean {base} and variance {var0}; signed coefficients are squared in the variance.',f'Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-{f(p)} and {f(p)}.',f'E[Z]={f(mean)}, Var(Z)={f(var)}; E[Z²]=Var(Z)+E[Z]². The requested value is {f(ans)}.'],dict(kind='section-linear',mx=mx,my=my,vx=vx,vy=vy,p=p,C=C,threshold=threshold,target=target),['independent normal combination','discrete independent surcharge','linear moments and probabilities'],6,target=='tail')

    @family('multivariate-random-variables-f')
    def clt(v):
        p=.2+.002*(v%40);B=500+5*v;d=100+v;s=.75;n=150+v%100;values=[0,s*max(B-d,0),s*max(2*B-d,0)];weights=[1-p,.6*p,.4*p];mean,sec,var=moments(values,weights);target=['tail','reserve','size'][v%3];z=.9+.01*(v%30);threshold=round(n*mean+z*sqrt(n*var),2);tol=10+v%20
        ans=1-phi((threshold-n*mean)/sqrt(n*var)) if target=='tail' else n*mean+1.645*sqrt(n*var) if target=='reserve' else math.ceil(1.96**2*var/tol**2)
        request=f'probability aggregate annual payment exceeds {threshold}' if target=='tail' else f'approximately 95th-percentile reserve for {n} policies, using z=1.645' if target=='reserve' else f'smallest integer number of policies for which the average payment is within {tol} of its mean with approximately 95% probability, using z=1.96'
        return make(f'Independent identical policies have no loss with probability {f(1-p)}. Given a loss, severity is {B} with probability 0.60 or {2*B} with probability 0.40. The insurer pays 75% of the loss above ordinary deductible {d}. {'For '+str(n)+' policies, ' if target!='size' else ''}use the central limit theorem to calculate the {request}.',ans,
            [f'The per-policy payment takes values {", ".join(f(x) for x in values)} with probabilities {", ".join(f(x) for x in weights)}. Include the no-loss mass.',f'The per-policy mean is {f(mean)} and variance {f(var)}. An aggregate of n policies has mean n times the mean and variance n times the variance.',f'Use the normal approximation with SD sqrt(n×{f(var)}); for an average use SD sqrt({f(var)}/n) and round the required sample size upward. The requested result is {f(ans)}.'],dict(kind='section-clt',p=p,B=B,d=d,share=s,n=n,threshold=threshold,tol=tol,target=target),['loss and payment moments','independent aggregate','CLT and inverse planning'],7,target=='tail',target=='size')

    return added

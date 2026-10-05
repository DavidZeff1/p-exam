"""Build original multistep challenge sets and a separate timed-exam bank.
All arithmetic answers are checked independently by verify-advanced.js.
"""
import json,math
from pathlib import Path
from math import comb,exp,log,sqrt
# Topic ordering is supplied by the app so no chapter is omitted.
import subprocess
TOPICS=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {topics} from './scripts/topics.js';console.log(JSON.stringify(topics))"],text=True))
FAMILIES={}
def family(name):
 def add(f):FAMILIES[name]=f;return f
 return add
f=lambda x: f'{x:.6f}'.rstrip('0').rstrip('.') if abs(x)<1e10 else str(x)
phi=lambda z:(1+math.erf(z/sqrt(2)))/2

def Q(text,answer,steps,spec,wrong,skills,refs):
 digits=4
 fmt=lambda x:f'{x:.{digits}f}'
 probability_kinds={'four-atoms','atoms','two-events','draw-sequence','uniform-pairs','binomial-indicators','partition','weighted-discrete','independent','hypergeom-mixture','latent-history','mixture','poisson-mixture','screen','linear-density','mixed-cdf','geometric-interval','negative-binomial','success-positions','poisson-split','exponential','gamma','beta','normal','order-uniform','normal-combination','poisson-weighted','inflated-exp-tail','clt-payment','clt-binomial'}
 is_probability=spec['kind'] in probability_kinds or (spec['kind'],spec.get('target')) in {('binomial','atleast2-given-positive'),('hypergeom','two-given-positive'),('lognormal','tail'),('joint-grid','event')}
 options=[(answer,'')]
 for val,why in wrong:
  if is_probability and not 0<=val<=1:continue
  if math.isfinite(val) and fmt(val) not in [fmt(x[0]) for x in options]:options.append((val,why))
 bump=1
 while len(options)<5:
  value=answer+(abs(answer)*.17+.027)*bump;bump+=1
  if is_probability:value=value%1
  if fmt(value) not in [fmt(x[0]) for x in options]:options.append((value,'Recheck the setup and the requested quantity before evaluating the formula.'))
 options=sorted(options[:5],key=lambda x:x[0])
 return dict(question=text+' Round your answer to four decimal places.',choices=[f'${fmt(x[0])}$' for x in options],answer=next(i for i,o in enumerate(options) if o[0]==answer),solution=steps,feedback={str(i):why for i,(_,why) in enumerate(options) if why},skills=skills,designBasis='Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles',hints=['Break the solution into: '+', '.join(skills)+'.',steps[0]],verification=spec,level='challenge')

def W(values,message):return [(value,message) for value in values]

@family('region-conditional')
def region(v):
 # Atom probabilities for three events; all specified data are derived from a valid model.
 raw=[2+v%3,3+(v//2)%3,4+(v//3)%3,5,2,3,2,1+(v//4)%2];total=sum(raw);p=[x/total for x in raw]
 # index uses A bit0, B bit1, C bit2.
 A=sum(p[i] for i in range(8) if i&1);B=sum(p[i] for i in range(8) if i&2);C=sum(p[i] for i in range(8) if i&4)
 AB=p[3]+p[7];AC=p[5]+p[7];BC=p[6]+p[7];ABC=p[7]
 answer=p[0]/(1-A)
 text=f'For coverage events A, B, C, P(A)={f(A)}, P(B)={f(B)}, P(C)={f(C)}, P(A∩B)={f(AB)}, P(A∩C)={f(AC)}, and P(B∩C)={f(BC)}. These probabilities are specified as exact ratios with common denominator {total}: the numerators are {sum(raw[i] for i in range(8) if i&1)}, {sum(raw[i] for i in range(8) if i&2)}, {sum(raw[i] for i in range(8) if i&4)}, {raw[3]+raw[7]}, {raw[5]+raw[7]}, {raw[6]+raw[7]}. Also P(C given A∩B)={raw[7]}/{raw[3]+raw[7]}. Calculate the probability of none of these coverages, given that A does not occur.'
 # Use only exact ratios in the question; no rounded inconsistent probability information.
 text=f'Three coverage events A, B, C satisfy P(A)={sum(raw[i] for i in range(8) if i&1)}/{total}, P(B)={sum(raw[i] for i in range(8) if i&2)}/{total}, P(C)={sum(raw[i] for i in range(8) if i&4)}/{total}, P(A∩B)={raw[3]+raw[7]}/{total}, P(A∩C)={raw[5]+raw[7]}/{total}, and P(B∩C)={raw[6]+raw[7]}/{total}. Also P(C given A∩B)={raw[7]}/{raw[3]+raw[7]}. Calculate the probability that none occurs, given that A does not occur.'
 return Q(text,answer,[f'First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)={raw[7]}/{total}.','Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.',f'The probability of none is {raw[0]}/{total}. The probability of not A is {sum(raw[i] for i in range(8) if not i&1)}/{total}.',f'None is contained in not A, so the requested conditional probability is {f(answer)}.'],dict(kind='atoms',weights=raw,target='none-given-notA'),[(p[0],'This is the probability of none before conditioning; divide by P(not A).'),(1-A,'This is the condition probability, not the conditional numerator divided by it.'),(p[0]/A,'The condition is not A, so use its probability in the denominator.'),(p[0]+ABC,'The triple intersection must be included once with the correct sign in inclusion–exclusion.')],['recover an intersection','inclusion–exclusion','conditional probability'],[1,12])

@family('atoms-normalize')
def atoms(v):
 # Unknown c weights and a conditional ratio determine k.
 k=2+v%9; weights=[1,2,k,k+1];norm=sum(weights);answer=(k+1)/norm
 return Q(f'A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({{ω3}} given {{ω2,ω3}})={k}/{k+2}, calculate P({{ω4}}).',answer,[f'The conditional ratio is k/(2+k)={k}/{k+2}; solving gives k={k}.',f'Normalize the four masses: c(1+2+k+k+1)=1, so c=1/{norm}.',f'P({{ω4}})=(k+1)c={k+1}/{norm}={f(answer)}.'],dict(kind='four-atoms',k=k,target='last'),W([1/norm,k/norm,(k+1)/(norm-1),(k+1)/(norm+2)],'First solve the conditional ratio, then normalize all four outcome masses.'),['conditional ratio','normalization'],[3,13])

@family('two-events-infer')
def infer(v):
 a=.2+.05*(v%3);b=.35+.05*((v//3)%3);joint=.1+.025*(v%2);neither=1-a-b+joint;gap=b-a;answer=(a-joint)/a
 return Q(f'For two policy features A and B, P(neither)={f(neither)}, P(A∩B)={f(joint)}, and P(B)-P(A)={f(gap)}. Calculate P(not B given A).',answer,[f'The union probability is 1-{f(neither)}={f(1-neither)}. Thus P(A)+P(B)={f(1-neither+joint)}.',f'Combine this sum with the difference {f(gap)} to get P(A)={f(a)} and P(B)={f(b)}.',f'The A-only probability is {f(a-joint)}. Divide by P(A): {f(a-joint)}/{f(a)}={f(answer)}.'],dict(kind='two-events',a=a,b=b,joint=joint,target='notB-given-A'),[(a-joint,'This is a joint event; normalize by the probability of A.'),(1-b,'This ignores the condition A.'),(joint/a,'This gives B rather than not B conditional on A.'),(joint/b,'This reverses the condition and omits the complement.')],['solve marginal probabilities','conditional complement'],[8,11])

@family('independent-infer')
def independent(v):
 p=.2+.05*(v%4);ratio=2;both=ratio*p*p;answer=(1-p)*(1-ratio*p)
 return Q(f'Events A and B are independent. P(A)=2P(B), and P(A∩B)={f(both)}. Calculate the probability that neither event occurs.',answer,[f'Let p=P(B). Independence gives 2p²={f(both)}, so p={f(p)} and P(A)={f(2*p)}.',f'The complement events are also independent. Multiply their probabilities: (1-{f(2*p)})(1-{f(p)}).',f'The probability of neither is {f(answer)}.'],dict(kind='independent',p=p,ratio=ratio,target='neither'),W([1-3*p,1-both,both,(1-p)**2],'Recover both marginal probabilities from the independence equation before taking the complement of their union.'),['recover a probability parameter','independence','complements'],[10])

@family('disjoint-infer')
def disjoint(v):
 a=.2+.02*(v%4);b=.15+.01*((v//3)%4);c=.1+.01*((v//5)%4);d=1-a-b-c;r=a/(a+b);answer=d/(1-c)
 return Q(f'Events A, B, C, D form a partition. P(A∪B)={f(a+b)}, P(A given A∪B)={f(r)} is specified exactly as {f(a)}/{f(a+b)}, and P(C)={f(c)}. Calculate P(D given not C).',answer,[f'The A and B union already accounts for {f(a+b)} of the total probability.',f'The remaining D probability is 1-P(A∪B)-P(C)={f(d)}.',f'D is contained in not C. Divide by 1-P(C): {f(d)}/{f(1-c)}={f(answer)}.'],dict(kind='partition',weights=[a,b,c,d],target='D-given-notC'),[(d,'This is the unconditional D probability.'),(1-c,'This is the conditioning probability.'),(d/c,'Divide by P(not C)=1-P(C), rather than P(C).'),(a/(a+b),'This answers the supplied conditional question about A instead of the requested question about D.')],['partition','conditional normalization'],[14,370])

@family('partition-rate')
def partition(v):
 w=.25+.05*(v%3);high=.3+.05*((v//2)%3);low=.08+.01*((v//4)%3);overall=w*high+(1-w)*low;answer=w*high/overall
 return Q(f'An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is {f(w)}. The overall annual claim probability is {f(overall)} and the ordinary-risk claim probability is {f(low)}. Given that a selected insured made a claim, calculate the probability the insured is high risk.',answer,[f'Let h be the high-risk claim rate. Total probability gives {f(overall)}={f(w)}h+{f(1-w)}({f(low)}).',f'This gives h={f(high)} and joint probability P(high risk and claim)={f(w*high)}.',f'Bayes gives {f(w*high)}/{f(overall)}={f(answer)}.'],dict(kind='mixture',weight=w,rates=[high,low],target='posterior'),[(w,'This is the class share before observing a claim.'),(high,'This is the conditional claim rate within the class, reversing the requested condition.'),(w*high,'This is the joint probability; divide by the overall claim probability.'),(overall,'This is the denominator of the Bayes calculation.')],['infer a missing class rate','total probability','Bayes'],[7,370])

@family('weighted-outcomes')
def weighted(v):
 n=4+v%3;weights=list(range(1,n+1));c=1/sum(weights);threshold=n-2;ans=sum(weights[i-1] for i in range(threshold+1,n+1))/sum(weights[i-1] for i in range(threshold,n+1))
 return Q(f'A severity category X takes values 1 through {n}. Its probability set function assigns P(X=k)=ck, where c is unknown. A file is known to have X≥{threshold}. Calculate P(X>{threshold} given this information).',ans,[f'Normalize: c(1+2+…+{n})=1, so c={f(c)}.',f'The conditioning category weights total {sum(range(threshold,n+1))}; the strictly larger category weights total {sum(range(threshold+1,n+1))}.',f'The factor c cancels in the conditional ratio, giving {f(ans)}.'],dict(kind='weighted-discrete',values=list(range(1,n+1)),weights=weights,threshold=threshold,target='conditional-tail'),W([sum(range(threshold+1,n+1))*c,sum(range(threshold,n+1))*c,(n-threshold)/(n-threshold+1),1-c*threshold],'Use probability weights and the correct strict endpoint; the categories are not equally likely.'),['normalize a PMF','distinguish event endpoints','conditional probability'],[13,42])

@family('replacement-pattern')
def pattern(v):
 n=6+v%3;k=2+v%2;draw=3;answer=k*(n-k)*(n-k-1)/(n*(n-1)*(n-2))
 return Q(f'A box contains {k} damaged and {n-k} sound components. Three are inspected in order without replacement. Calculate the probability the first is damaged and the other two are sound.',answer,[f'The first-stage damaged probability is {k}/{n}.',f'After removing a damaged component there are {n-k} sound components out of {n-1}; after removing a sound component there are {n-k-1} out of {n-2}.',f'Multiply conditional stage probabilities: ({k}/{n})({n-k}/{n-1})({n-k-1}/{n-2})={f(answer)}.'],dict(kind='draw-sequence',N=n,K=k,pattern=[1,0,0]),[(k/n*((n-k)/n)**2,'This treats changing without-replacement probabilities as constant.'),(3*answer,'This allows the damaged component in any position, but the order is specified.'),(k/n,'This only accounts for the first inspection.'),((n-k)/n*(n-k-1)/(n-1)*k/(n-2),'This computes sound, sound, damaged, not the specified order.')],['conditional multiplication','without replacement','ordered outcomes'],[4,366])

@family('conditional-sample')
def conditional_sample(v):
 N=10+v%3;K=4+v%2;n=4;den=comb(N,n)-comb(N-K,n);num=comb(K,2)*comb(N-K,2);ans=num/den
 return Q(f'Four files are sampled uniformly without replacement from {N} files, of which {K} are high severity. Given that the sample contains at least one high-severity file, calculate the probability it contains exactly two.',ans,[f'The total number of samples satisfying the condition is choose({N},4)-choose({N-K},4)={den}.',f'Exactly-two samples can be chosen in choose({K},2)choose({N-K},2)={num} ways.',f'The conditional probability is {num}/{den}={f(ans)}.'],dict(kind='hypergeom',N=N,K=K,n=n,target='two-given-positive'),[(num/comb(N,n),'This is the unconditional probability of exactly two.'),(den/comb(N,n),'This is the condition probability, not the ratio requested.'),(num/(comb(N,n)-comb(K,n)),'This removes all-success samples rather than no-success samples.'),(comb(K,2)/comb(N,2),'This samples only two files instead of four.')],['combinatorial probability','conditioning on a sample event'],[366,376])

@family('restricted-code')
def code(v):
 n=6+v%7;r=4;total=math.perm(n,r);ans=total-12*(n-2)*(n-3)
 return Q(f'A security code is an ordered sequence of four distinct symbols chosen from {n} symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes.',ans,[f'Without the restriction there are {n}!/({n}-4)!={total} codes.',f'Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from {n-2} symbols, giving 12({n-2})({n-3}).',f'Subtract forbidden codes: {total}-{12*(n-2)*(n-3)}={total-12*(n-2)*(n-3)}.'],dict(kind='restricted-code',n=n,r=r),W([comb(n,4),n**4,total,math.perm(n-2,4)],'Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.'),['ordered counting','restrictions','complement counting'],[4,376])

@family('committee-roles')
def committee(v):
 S=4+v%3;J=5+(v//3)%3;n=4;ans=comb(S,2)*comb(J,2)*2*2
 return Q(f'A committee consists of exactly two senior and two junior employees selected from {S} seniors and {J} juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments.',ans,[f'Choose the committee in choose({S},2)choose({J},2) ways.', 'Choose its chair from the two selected seniors and secretary from the two selected juniors.',f'The total is choose({S},2)choose({J},2)×2×2={ans}.'],dict(kind='committee-roles',S=S,J=J),W([comb(S,2)*comb(J,2),comb(S+J,4)*4,math.perm(S,2)*math.perm(J,2)*4,comb(S+J,4)],'Separate unordered membership selection from the labeled roles; impose the senior/junior composition.'),['combinations','labeled roles','group restrictions'],[376])

@family('adjacent-permutation')
def adjacent(v):
 n=5+v%3;ans=2*math.factorial(n-1)-4*math.factorial(n-2)
 return Q(f'{n} distinct claim files are arranged in a line. Files A and B must be adjacent, but file C may not be adjacent to either A or B. Calculate the number of permitted arrangements.',ans,[f'Treat A,B as a block, with two internal orders: 2({n-1})! arrangements.',f'Forbidden arrangements have C immediately before or after that block. There are four internal orders for the three-file block and ({n-2})! block arrangements.',f'Subtract: 2({n-1})!-4({n-2})!={ans}.'],dict(kind='adjacency',n=n),W([2*math.factorial(n-1),math.factorial(n-2),math.factorial(n)-4*math.factorial(n-2),2*math.factorial(n-2)],'Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block.'),['permutations with adjacency','subtract forbidden arrangements'],[376])

@family('latent-two-years')
def latent(v):
 w=.25+.05*(v%3);a=.45+.05*((v//3)%2);b=.1+.025*((v//5)%3);den=w*a*(1-a)+(1-w)*b*(1-b);num=w*a*a*(1-a)+(1-w)*b*b*(1-b);ans=num/den
 return Q(f'A portfolio has a fraction {f(w)} of type H and the remainder type L. Annual claim probabilities are {f(a)} for H and {f(b)} for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3.',ans,[f'The observed history likelihoods are {f(a*(1-a))} for H and {f(b*(1-b))} for L.',f'Weight these by the prior shares; the total history probability is {f(den)}.',f'Weight the next-year claim rates by those posterior shares: [{f(w*a*(1-a))}({f(a)})+{f((1-w)*b*(1-b))}({f(b)})]/{f(den)}={f(ans)}.'],dict(kind='latent-history',w=w,rates=[a,b],history=[1,0],target='next'),W([w*a+(1-w)*b,a,b,w*a/(w*a+(1-w)*b)],'The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.'),['conditional independence','Bayes over a history','posterior prediction'],[370,377])

@family('conditional-independent')
def conditional_independent(v):
 p=.15+.05*(v%4);n=4+v%3;den=1-(1-p)**n;num=p*(1-(1-p)**(n-1));ans=num/den
 return Q(f'{n} policies have mutually independent claim indicators, each with claim probability {f(p)}. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim.',ans,[f'The condition has probability 1-(1-{f(p)})^{n}={f(den)}.',f'The numerator requires a claim on policy 1 and at least one among the remaining {n-1}: {f(p)}[1-(1-{f(p)})^{n-1}]={f(num)}.',f'Divide numerator by condition probability: {f(ans)}.'],dict(kind='binomial-indicators',n=n,p=p,target='first-and-other-given-any'),W([num,p/den,1-(1-p)**(n-1),n*p], 'The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.'),['independence','complements','conditional joint event'],[9,369])

@family('screen-infer')
def screen(v):
 prior=.05+.025*(v%3);sens=.75+.05*((v//3)%3);fp=.05+.01*((v//5)%3);posterior=prior*sens/(prior*sens+(1-prior)*fp);ans=fp
 return Q(f'A fraud screen flags a fraction {f(sens)} of fraudulent claims. Fraud prevalence is {f(prior)}. Of flagged claims, the fraud fraction is specified exactly as {f(prior*sens)}/({f(prior*sens)}+{f((1-prior)*fp)}). Calculate the flag probability for a legitimate claim.',ans,[f'The joint fraud-and-flag probability is {f(prior*sens)}.',f'Use the supplied posterior fraction to recover total flag probability {f(prior*sens+(1-prior)*fp)}.',f'Subtract the fraud contribution and divide by P(legitimate): {f((1-prior)*fp)}/{f(1-prior)}={f(fp)}.'],dict(kind='screen',prior=prior,sensitivity=sens,falsePositive=fp,target='infer-fp'),W([(1-prior)*fp,prior*sens,posterior,prior*sens+(1-prior)*fp],'Distinguish joint flag masses, posterior fraud probability, and a flag probability conditional on legitimacy.'),['reverse a Bayes equation','total probability','conditional normalization'],[370,377])

@family('mixture-no-claim')
def mixture_no(v):
 w=.3+.1*(v%3);rates=[1+v%2,.2+.1*((v//3)%3)];n=2;den=w*exp(-n*rates[0])+(1-w)*exp(-n*rates[1]);ans=w*exp(-n*rates[0])/den
 return Q(f'An insured belongs permanently to class H with probability {f(w)}, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means {f(rates[0])} and {f(rates[1])}, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H.',ans,[f'No claims in both years has probability exp(-2λ), giving {f(exp(-2*rates[0]))} for H and {f(exp(-2*rates[1]))} for L.',f'The overall likelihood is {f(den)} after weighting by the prior class shares.',f'The H posterior is {f(w*exp(-2*rates[0]))}/{f(den)}={f(ans)}.'],dict(kind='poisson-mixture',w=w,rates=rates,n=n,target='posterior-zero'),W([w,w*exp(-2*rates[0]),exp(-2*rates[0]),w*exp(-rates[0])/(w*exp(-rates[0])+(1-w)*exp(-rates[1]))],'Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.'),['Poisson likelihood','conditional independence','Bayes'],[370,377])
@family('binomial-infer')
def binomial_infer(v):
 n=5+v%4;p=.15+.05*((v//3)%4);zero=(1-p)**n;one=n*p*(1-p)**(n-1);ans=(1-zero-one)/(1-zero)
 return Q(f'A portfolio contains {n} independent policies with a common unknown claim probability p. The probability no policy has a claim is {zero:.8f}. Given at least one claim, calculate the probability at least two policies have claims.',ans,[f'From (1-p)^{n}={zero:.8f}, take the nth root to obtain p={f(p)}.',f'The zero and exactly-one probabilities are {f(zero)} and {f(one)}. Thus P(N≥2)={f(1-zero-one)}.',f'Condition on N≥1 by dividing by {f(1-zero)}; the answer is {f(ans)}.'],dict(kind='binomial',n=n,p=p,target='atleast2-given-positive'),W([1-zero-one,1-zero,one/(1-zero),p],'Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.'),['infer a Bernoulli parameter','binomial complement','truncation'],[13,15])

@family('capped-binomial-payment')
def capped_binomial(v):
 n=5+v%3;p=.2+.05*((v//3)%3);B=200+50*(v%4);probs=[comb(n,k)*p**k*(1-p)**(n-k) for k in range(n+1)];values=[B*min(max(k-1,0),2) for k in range(n+1)];ans=sum(x*z for x,z in zip(values,probs))
 return Q(f'{n} independent devices each fail with probability {f(p)} during a year. A contract pays nothing for the first failed device and {B} for each additional failed device, subject to a total payment cap of {2*B}. Calculate expected annual payment.',ans,[f'The failure count N is binomial with n={n}, p={f(p)}. The payment is {B}min((N-1)₊,2).',f'Use tail sums: expected payment = {B}[P(N≥2)+P(N≥3)]. These two tail probabilities are {f(sum(probs[2:]))} and {f(sum(probs[3:]))}.',f'The expected payment is {f(ans)}. This includes years with zero payment.'],dict(kind='binomial',n=n,p=p,B=B,target='capped-payment'),W([B*max(n*p-1,0),B*(n*p-1+(1-p)**n),2*B,B*(1-(1-p)**n)],'Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count.'),['identify binomial','transform a count','tail-sum expectation'],[42,47])

@family('geometric-benefit')
def geometric_benefit(v):
 p=.2+.05*(v%3);B=100+50*((v//3)%3);maxT=4;probs=[p*(1-p)**(t-1) for t in range(1,maxT)];pay=[B*(maxT-t) for t in range(1,maxT)];mean=sum(x*z for x,z in zip(pay,probs));second=sum(x*x*z for x,z in zip(pay,probs));ans=second-mean*mean
 return Q(f'A device independently survives each year with probability {f(1-p)}, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays {B}(4-t); after year 3 it pays zero. Calculate the variance of the payment.',ans,[f'The first-failure year T is geometric: P(T=t)={f(p)}({f(1-p)})^(t-1).',f'Payment is {pay[0]}, {pay[1]}, {pay[2]} in the first three years; all later outcomes have payment zero.',f'Weighted moments are E[Y]={f(mean)} and E[Y²]={f(second)}.',f'Var(Y)=E[Y²]-(E[Y])²={f(ans)}.'],dict(kind='geometric-benefit',p=p,B=B,horizon=4,target='variance'),W([second,mean,sqrt(ans),B*B*p*(1-p)],'Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.'),['geometric first occurrence','piecewise benefit','payment variance'],[46,57])

@family('geometric-conditioned')
def geometric_condition(v):
 p=.2+.05*(v%4);a=2+v%2;b=a+3;limit=7;num=(1-p)**a-(1-p)**b;den=1-(1-p)**limit;ans=num/den
 return Q(f'The trial number T of a first success includes the successful trial. Independent trials have success probability {f(p)}. Given that a success occurs within {limit} trials, calculate P({a}<T≤{b}) under this condition.',ans,[f'For the trial-count convention P(T>k)=(1-p)^k.',f'The requested interval has probability ({f(1-p)})^{a}-({f(1-p)})^{b}={f(num)}.',f'It is contained in T≤{limit}, whose probability is {f(den)}. The conditional result is {f(ans)}.'],dict(kind='geometric-interval',p=p,a=a,b=b,limit=limit),W([num,(1-p)**(b-a),1-(1-p)**(b-a),num/(1-(1-p)**b)],'This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator.'),['waiting-time endpoints','conditional interval probability'],[13,381])

@family('negative-binomial-joint')
def neg_joint(v):
 p=.25+.05*(v%3);t=5+v%3;num=(t-1)*p**2*(1-p)**(t-2);den=sum((s-1)*p**2*(1-p)**(s-2) for s in range(2,t+1));ans=num/den
 return Q(f'Independent inspections each find a defect with probability {f(p)}. Let T be the inspection number at which the second defect is found. Given that the second defect is found by inspection {t}, calculate P(T={t}).',ans,[f'To have T=s, the last inspection is defective and exactly one of the first s-1 is defective: P(T=s)=(s-1)p²(1-p)^(s-2).',f'The numerator at s={t} is {f(num)}. Sum these masses from s=2 through {t} for denominator {f(den)}.',f'The conditional probability is {f(ans)}.'],dict(kind='negative-binomial',p=p,r=2,t=t,target='at-t-given-by-t'),W([num,comb(t,2)*p*p*(1-p)**(t-2)/den,p**2/den,den],'The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition.'),['stopping-time PMF','truncated negative binomial'],[15])

@family('first-success-given-second')
def first_second(v):
 p=.2+.05*(v%4);t=6+v%3;k=2+v%2;ans=k/(t-1)
 return Q(f'Independent trials have success probability {f(p)}. T1 and T2 are the trial numbers of the first and second successes. Given T2={t}, calculate P(T1≤{k}).',ans,[f'Given T2={t}, exactly one success occurred among trials 1 through {t-1}, and trial {t} is a success.', 'Every permitted first-success position has the same joint probability p²(1-p)^(T2-2). Thus those positions are conditionally equally likely.',f'There are {k} qualifying positions out of {t-1}, giving {f(ans)}.'],dict(kind='success-positions',p=p,t=t,k=k),W([1-(1-p)**k,k/t,p*k,p],'Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials.'),['joint stopping events','conditional symmetry'],[15])

@family('hypergeom-bayes')
def hyper_bayes(v):
 N=9+v%3;K1=4;K2=2;w=.4+.1*((v//3)%2);n=3;k=2;h=lambda K:comb(K,k)*comb(N-K,n-k)/comb(N,n);a=h(K1);b=h(K2);ans=w*a/(w*a+(1-w)*b)
 return Q(f'A container is type H with probability {f(w)}, otherwise type L. Both types hold {N} components; type H contains {K1} defective components and type L contains {K2}. Three are sampled without replacement and exactly two defects are observed. Calculate the posterior probability the container is type H.',ans,[f'The observation likelihood is choose({K1},2)choose({N-K1},1)/choose({N},3)={f(a)} for H and {f(b)} for L.',f'The total observation probability is {f(w*a+(1-w)*b)}.',f'Weight the H likelihood by its prior and divide by the total: {f(ans)}.'],dict(kind='hypergeom-mixture',N=N,K=[K1,K2],n=n,k=k,w=w),W([w,a,a/(a+b),w*a],'Use without-replacement likelihoods and both prior class weights before reversing the condition.'),['hypergeometric likelihood','Bayesian class inference'],[366,370])

@family('hypergeom-payment')
def hyper_pay(v):
 N=10+v%3;K=4+v%2;n=4;B=100+50*((v//3)%3);probs=[comb(K,k)*comb(N-K,n-k)/comb(N,n) for k in range(n+1)];pay=[B*max(k-1,0) for k in range(n+1)];ans=sum(x*p for x,p in zip(pay,probs))
 return Q(f'A sample of four devices is selected uniformly without replacement from {N} devices, {K} of which are damaged. A warranty pays {B} per damaged device in the sample after the first damaged device. Calculate expected payment.',ans,[f'The sampled damaged count X is hypergeometric, so E[X]=4({K}/{N}).', 'The payment is B(X-1)₊. Since (X-1)₊=X-1+1{X=0}, expectation can be found from the mean and the zero probability.',f'P(X=0)=choose({N-K},4)/choose({N},4)={f(probs[0])}; expected payment is {B}[{f(n*K/N)}-1+{f(probs[0])}]={f(ans)}.'],dict(kind='hypergeom',N=N,K=K,n=n,B=B,target='excess-payment'),W([B*max(n*K/N-1,0),B*n*K/N,B*(n*K/N-1),B*(1-probs[0])],'The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.'),['hypergeometric mean','count deductible','zero mass'],[47,366])

@family('poisson-deductible')
def poisson_pay(v):
 lam=.8+.2*(v%4);B=300+100*((v//3)%3);ans=B*(lam-1+exp(-lam))
 return Q(f'The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-{f(lam)}). A policy pays {B} for every breakdown after the first breakdown of the year. Calculate expected annual payment.',ans,[f'P(N=0)=exp(-λ) identifies λ={f(lam)}.',f'Payment is {B}(N-1)₊. Use (N-1)₊=N-1+1{{N=0}}.',f'E[Y]={B}[λ-1+exp(-λ)]={f(ans)}.'],dict(kind='poisson',lam=lam,B=B,target='excess-payment'),W([B*max(lam-1,0),B*lam,B*(lam-1),B*(1-exp(-lam))],'A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.'),['infer a Poisson mean','tail/indicator expectation','aggregate insurance'],[47])

@family('poisson-split-condition')
def poisson_split(v):
 a=1.2+.3*(v%3);b=.6+.2*((v//3)%3);n=4+v%3;k=2;theta=a/(a+b);ans=sum(comb(n,j)*theta**j*(1-theta)**(n-j) for j in range(k,n+1))
 return Q(f'Independent claim counts X and Y from two branches are Poisson with means {f(a)} and {f(b)}. Given X+Y={n}, calculate P(X≥2).',ans,[f'For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)={f(theta)}.',f'The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n={n}.',f'Evaluate 1-(1-p)^{n}-{n}p(1-p)^{n-1}={f(ans)}.'],dict(kind='poisson-split',a=a,b=b,n=n,target='atleast2'),W([1-exp(-a)*(1+a),theta,theta**n,1-(1-theta)**n],'Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.'),['independent Poisson totals','conditional binomial','tail probability'],[15])

@family('uniform-infer-deductible')
def uniform_d(v):
 B=1200+200*(v%4);ratio=.16 if v%2 else .36;d=B*(1-sqrt(ratio));ans=d
 return Q(f'A loss X is uniform on (0,{B}). A policy pays the positive excess above an ordinary deductible d, with no other limits. Expected payment is {f(ratio)} times the mean loss. Calculate d.',ans,[f'E[X]={B}/2. Integrating the deductible payment gives E[(X-d)₊]=({B}-d)²/(2×{B}).',f'Set the ratio to {f(ratio)}: (({B}-d)/{B})²={f(ratio)}.',f'The admissible deductible lies between 0 and {B}: d={B}(1-√{f(ratio)})={f(ans)}.'],dict(kind='uniform-deductible',B=B,ratio=ratio,target='deductible'),W([B*(1-ratio),B*ratio,B*sqrt(ratio),B/2],'The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.'),['uniform integration','inverse insurance parameter'],[53])

@family('uniform-payment-variance')
def uniform_var(v):
 B=1200+300*(v%4);d=.2*B;cap=.5*B;s=.75;top=min(B-d,cap/s);mass=(B-d-top)/B;mean=s*top*top/(2*B)+cap*mass;second=s*s*top**3/(3*B)+cap*cap*mass;ans=second-mean*mean
 return Q(f'X is uniform on (0,{B}). Insurer payment is Y=min(0.75 max(X-{f(d)},0),{f(cap)}). Calculate Var(Y) per loss.',ans,[f'Payment is zero through {f(d)}, grows at rate 0.75 until loss {f(d+cap/s)}, and then stays at the cap.',f'Integrating the linear region and including the cap mass gives E[Y]={f(mean)} and E[Y²]={f(second)}.',f'The cap has probability {f(mass)}; it must contribute to both moments. Var(Y)={f(ans)}.'],dict(kind='uniform-payment',B=B,d=d,share=s,cap=cap,inflation=1,target='variance'),W([second,mean*mean,sqrt(ans),s*s*B*B/12],'Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss.'),['piecewise payment','cap mass','variance'],[57,59])

@family('exponential-infer')
def exp_infer(v):
 mu=600+200*(v%4);d=200+100*((v//3)%3);ratio=exp(-d/mu);threshold=2*d;ans=exp(-threshold/mu)
 return Q(f'A positive loss X is exponential with an unknown mean. The ratio of E[(X-{d})₊] to E[X] is {ratio:.8f}, rounded to eight decimal places. Calculate P(X>{threshold}).',ans,[ 'For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.',f'The positive mean is μ={mu}; survival beyond {threshold} is exp(-{threshold}/{mu}).',f'The probability is {f(ans)}.'],dict(kind='exponential',mu=mu,d=d,threshold=threshold,target='tail-from-deductible'),W([ratio,1-ans,exp(-threshold/d),ratio*mu],'Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.'),['inverse moment parameter','exponential survival'],[44,45])

@family('exponential-benefit')
def exp_benefit(v):
 mu=3+v%4;t1=1+(v//3)%2;t2=t1+2;fraction=.4+.1*((v//5)%3);meanPay=500+100*(v%4);coefficient=1-exp(-t1/mu)+fraction*(exp(-t1/mu)-exp(-t2/mu));ans=meanPay/coefficient
 return Q(f'A device lifetime is exponential with mean {mu} years. A contract pays benefit B for failure by year {t1}, pays {f(fraction)}B for failure after year {t1} but by year {t2}, and otherwise pays zero. Its expected payment is {meanPay}. Calculate B.',ans,[f'The two covered interval probabilities are {f(1-exp(-t1/mu))} and {f(exp(-t1/mu)-exp(-t2/mu))}.',f'E[benefit]=B[{f(1-exp(-t1/mu))}+{f(fraction)}({f(exp(-t1/mu)-exp(-t2/mu))})]={f(coefficient)}B.',f'Solve B={meanPay}/{f(coefficient)}={f(ans)}.'],dict(kind='exponential-benefit',mu=mu,t1=t1,t2=t2,fraction=fraction,meanPay=meanPay),W([meanPay/(1-exp(-t2/mu)),meanPay/(1-exp(-t1/mu)),meanPay*coefficient,meanPay/fraction],'Weight each time interval by its own benefit fraction before solving for the benefit amount.'),['continuous interval probabilities','piecewise benefit','inverse expectation'],[45])

@family('gamma-parameter-tail')
def gamma_tail(v):
 shape=2+v%3;scale=2+(v//3)%3;mean=shape*scale;variance=shape*scale*scale;t=mean;z=t/scale;tail=exp(-z)*sum(z**j/math.factorial(j) for j in range(shape))
 return Q(f'A gamma waiting time T has mean {mean} and variance {variance}. Calculate P(T>{t}).',tail,[f'Using mean αθ and variance αθ², infer scale θ={variance}/{mean}={scale} and shape α={shape}.',f'The inferred shape is an integer, so gamma survival equals a Poisson lower tail: exp(-t/θ) times the sum of (t/θ)^j/j! for j=0,…,α-1.',f'At t={t}, t/θ={z}. The probability is {f(tail)}.'],dict(kind='gamma',shape=shape,scale=scale,t=t,target='tail-from-moments'),W([1-tail,exp(-z),exp(-t*scale),mean/variance],'Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms.'),['infer gamma parameters','integer-shape waiting-time probability'],[44,45])

@family('gamma-sum-condition')
def gamma_sum(v):
 rate=.4+.1*(v%3);shape=3+v%3;a=2+v%2;b=a+3;S=lambda t:exp(-rate*t)*sum((rate*t)**j/math.factorial(j) for j in range(shape));ans=S(b)/S(a)
 return Q(f'A Poisson process has rate {f(rate)} per hour. Let T be the time of the {shape}th arrival. Given no {shape}th arrival by hour {a}, calculate the probability it is still absent at hour {b}.',ans,[f'T is gamma with shape {shape} and rate {f(rate)}. Its survival is P(N(t)≤{shape-1}), not a single exponential waiting-time tail.',f'The survival probabilities at the two times are {f(S(a))} and {f(S(b))}.',f'The conditional tail ratio is {f(S(b))}/{f(S(a))}={f(ans)}. Gamma with shape greater than one is not memoryless.'],dict(kind='gamma',shape=shape,scale=1/rate,a=a,b=b,target='conditional-tail'),W([S(b),exp(-rate*(b-a)),1-ans,S(a)/S(b)],'Condition using gamma survival probabilities. Only the one-arrival exponential waiting time has the memoryless simplification.'),['gamma/Poisson relation','conditional continuous tail'],[375,381])

@family('beta-infer')
def beta_infer(v):
 a=2+v%2;b=3+(v//3)%2;mean=a/(a+b);variance=a*b/((a+b)**2*(a+b+1));E2=variance+mean*mean;ans=E2
 return Q(f'A proportion X has a beta distribution. Its mean is specified exactly as {a}/({a}+{b}) and its variance as ({a}×{b})/[({a}+{b})²({a}+{b}+1)]. Four risks share the same X; conditional on X=x each risk independently has a claim with probability x. Calculate the unconditional probability that the first two risks both claim, irrespective of the other two.',ans,[ 'Given X=x, the first-two joint claim probability is x². The unconditional probability is therefore E[X²].','Use the moment identity E[X²]=Var(X)+(E[X])². Conditional independence given X does not imply unconditional independence.',f'The result is {f(variance)}+({a}/{a+b})²={f(ans)}.'],dict(kind='beta',a=a,b=b,target='second-moment'),W([mean*mean,mean,variance,1-mean*mean],'The shared random probability creates dependence after averaging; use the second raw moment, not the square of the mean.'),['beta moments','conditional independence','mixture expectation'],[373])

@family('beta-conditional')
def beta_condition(v):
 a=2+v%2;b=2;lo=.2+.1*((v//3)%2);hi=.7+.1*((v//5)%2)
 # For beta(a,2), F(x)=(a+1)x^a-a x^(a+1).
 F=lambda x:(a+1)*x**a-a*x**(a+1);ans=(1-F(hi))/(1-F(lo))
 return Q(f'A random damage fraction X has density f(x)={a*(a+1)}x^{a-1}(1-x) for 0<x<1, and zero elsewhere. Given X>{f(lo)}, calculate P(X>{f(hi)}).',ans,[f'This is a beta({a},2) density. Integrating gives F(x)={a+1}x^{a}-{a}x^{a+1}.',f'The two required survival probabilities are {f(1-F(lo))} and {f(1-F(hi))}.',f'The higher-threshold tail is contained in the condition; divide the two tail probabilities to obtain {f(ans)}.'],dict(kind='beta',a=a,b=b,lo=lo,hi=hi,target='conditional-tail'),W([1-F(hi),F(hi)-F(lo),1-F(hi-lo),F(lo)/F(hi)],'Integrate the density to obtain each tail and normalize by the condition; a beta variable is not memoryless.'),['recognize a beta density','integrate polynomial density','conditional tail'],[375])

@family('normal-quantile-infer')
def normal_infer(v):
 mu=80+20*(v%4);sd=10+5*((v//3)%3);z=.8416212335729143;q=mu+z*sd;t=mu+1.5*sd;ans=1-phi(1.5)
 return Q(f'Loss X is normal with mean {mu}. Its 80th percentile is {q:.8f}, rounded to eight decimal places. Calculate P(X>{t}). You may use Φ(0.8416212335729143)=0.80.',ans,[f'For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ={sd}.',f'The threshold has z=({t}-{mu})/{sd}=1.5.',f'Use the upper tail 1-Φ(1.5)={f(ans)}.'],dict(kind='normal',mu=mu,sd=sd,t=t,target='tail-from-quantile'),W([phi(1.5),1-phi((t-mu)/(sd*sd)),.2,1-phi((t-q)/sd)],'Infer SD from the percentile first, then standardize around the mean rather than around the percentile.'),['infer normal scale','standardize','select tail'],[378])

@family('normal-quadratic')
def normal_quadratic(v):
 mu=10+v%4;sd=2+(v//3)%2;center=mu-1;radius=3+v%2;lo=center-radius;hi=center+radius;ans=phi((hi-mu)/sd)-phi((lo-mu)/sd)
 return Q(f'X is normal with mean {mu} and variance {sd*sd}. Calculate P((X-{center})²<{radius*radius}).',ans,[f'Solve the quadratic event: {lo}<X<{hi}. Both endpoints contribute to the probability.',f'The standard normal endpoints are {f((lo-mu)/sd)} and {f((hi-mu)/sd)} because SD is {sd}.',f'Take the CDF difference: Φ({f((hi-mu)/sd)})-Φ({f((lo-mu)/sd)})={f(ans)}.'],dict(kind='normal',mu=mu,sd=sd,lo=lo,hi=hi,target='quadratic-interval'),W([phi((hi-mu)/sd),1-ans,phi((hi-mu)/(sd*sd))-phi((lo-mu)/(sd*sd)),phi(radius/sd)-phi(-radius/sd)],'Solve the event for both bounds and use the actual mean and square-root variance in standardization.'),['transform a nonlinear event','normal interval probability'],[371])

@family('lognormal-payment-tail')
def lognormal_tail(v):
 mu=3+.1*(v%4);sigma=.5+.1*((v//3)%2);d=10+5*(v%3);y=25+5*((v//5)%3);share=.8;lo=d+y/share;ans=1-phi((log(lo)-mu)/sigma)
 return Q(f'Optional enrichment: log X is normal with mean {f(mu)} and SD {f(sigma)}. Payment is Y=0.8 max(X-{d},0). Calculate P(Y>{y}).',ans,[f'The payment event is X>{d}+{y}/0.8={f(lo)}.',f'Take logs and standardize log X: z=(log({f(lo)})-{f(mu)})/{f(sigma)}={f((log(lo)-mu)/sigma)}.',f'The upper normal tail gives {f(ans)}.'],dict(kind='lognormal',mu=mu,sigma=sigma,threshold=lo,target='tail'),W([1-phi((lo-mu)/sigma),1-phi((log(y)-mu)/sigma),phi((log(lo)-mu)/sigma),1-phi((log(d+y)-mu)/sigma)],'Apply the payment transformation first, then standardize the logarithm of the loss threshold.'),['insurance threshold','log transformation','normal tail'],[371])

@family('lognormal-moment-infer')
def lognormal_infer(v):
 mean=100+20*(v%3);cv=.5+.1*((v//3)%3);sigma2=log(1+cv*cv);mu=log(mean)-sigma2/2;ans=exp(mu)
 return Q(f'Optional enrichment: X is lognormal with mean {mean} and coefficient of variation {f(cv)}. Calculate its median.',ans,[f'For a lognormal variable CV²=exp(σ²)-1, so σ²=log(1+{f(cv*cv)}).',f'E[X]=exp(μ+σ²/2), so the median exp(μ)=E[X]exp(-σ²/2).',f'The median is {mean}/√(1+{f(cv*cv)})={f(ans)}.'],dict(kind='lognormal',mean=mean,cv=cv,target='median-from-moments'),W([mean,mean/(1+cv*cv),mean*sqrt(1+cv*cv),cv*mean],'Recover log variance from CV and separate median from mean; the mean includes the half-variance correction.'),['infer distribution parameters','distinguish mean and median'],[378])
@family('density-infer-conditional')
def density_infer(v):
 L=3+v%3;a=.5+.25*((v//3)%3);# density a+bx, normalized; use b chosen positive then scale a
 b=.2+.1*(v%3);norm=a*L+b*L*L/2;A=a/norm;B=b/norm;t=L/2;u=.8*L
 F=lambda x:A*x+B*x*x/2;given=1-F(t);ans=(1-F(u))/given
 return Q(f'X has density f(x)=a+bx on (0,{L}) and zero elsewhere. The unknown constants satisfy a:b={f(a)}:{f(b)}. Given X>{f(t)}, calculate P(X>{f(u)}).',ans,[f'Write a={f(a)}c and b={f(b)}c. Normalizing the density gives c=1/{f(norm)}.',f'The CDF on the support is F(x)={f(A)}x+({f(B)}/2)x².',f'Divide the tail above {f(u)} by the tail above {f(t)}: {f(1-F(u))}/{f(given)}={f(ans)}.'],dict(kind='linear-density',L=L,A=A,B=B,t=t,u=u,target='conditional-tail'),W([1-F(u),F(u)-F(t),1-u/L,(1-F(t))/(1-F(u))],'Normalize the nonuniform density, integrate the relevant tails, then divide by the condition probability.'),['density normalization','nonuniform integration','conditioning'],[43,52,375])

@family('cdf-atom-conditional')
def cdf_atom(v):
 p0=.1+.05*(v%3);p1=.2+.05*((v//3)%3);rest=1-p0-p1;cut=.4+.1*((v//5)%3);# 0mass, 1mass, uniformcontinuous on0,1
 ans=p1/(p1+rest*(1-cut))
 return Q(f'A loss fraction X has probability {f(p0)} at 0 and {f(p1)} at 1. The remaining probability is spread uniformly over (0,1). Given X>{f(cut)}, calculate the probability X=1.',ans,[f'The continuous component has weight {f(rest)}, so its mass above {f(cut)} is {f(rest*(1-cut))}.',f'The conditioning event also includes the atom at 1; its total probability is {f(p1+rest*(1-cut))}.',f'Divide the atom mass by that total: {f(p1)}/{f(p1+rest*(1-cut))}={f(ans)}.'],dict(kind='mixed-cdf',p0=p0,p1=p1,cut=cut,target='atom-conditional'),W([p1,0,rest*(1-cut),p1/(1-p0)],'The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous.'),['CDF jumps','mixed distribution','conditional atom'],[56,57])

@family('discrete-uniform-capped')
def discrete_uniform(v):
 n=6+v%3;d=2+v%2;cap=3;B=100+50*((v//3)%3);vals=[B*min(max(k-d,0),cap) for k in range(1,n+1)];mean=sum(vals)/n;sec=sum(x*x for x in vals)/n;ans=sec-mean*mean
 return Q(f'X is equally likely to be each integer from 1 through {n}. A contract pays Y={B} min(max(X-{d},0),3). Calculate Var(Y).',ans,[f'List the payment at each supported X value: '+', '.join(map(str,vals))+'.',f'The equal-weight moments are E[Y]={f(mean)} and E[Y²]={f(sec)}.',f'Subtract the squared mean: Var(Y)={f(ans)}.'],dict(kind='discrete-uniform-payment',n=n,d=d,cap=cap,B=B,target='variance'),W([sec,mean*mean,sqrt(ans),B*B*(n*n-1)/12],'A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.'),['discrete support','nonlinear transformation','variance'],[42,57])

@family('conditional-binomial-mean')
def cond_bin_mean(v):
 n=5+v%3;p=.2+.05*((v//3)%3);den=1-(1-p)**n;ans=n*p/den
 return Q(f'{n} independent insureds each have claim probability {f(p)}. Let N count insureds with a claim. Given N>0, calculate E[N].',ans,[f'N is binomial with mean {f(n*p)} and zero probability {f((1-p)**n)}.', 'The N=0 outcome contributes zero to the unconditional first moment, so the positive-count moment numerator remains E[N].',f'Renormalize by P(N>0): {f(n*p)}/{f(den)}={f(ans)}.'],dict(kind='binomial',n=n,p=p,target='positive-mean'),W([n*p,n*p*den,1/den,n*p/(1-p)],'Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).'),['binomial mean','zero truncation','conditional expectation'],[13])

@family('conditional-binomial-variance')
def cond_bin_var(v):
 n=5+v%3;p=.15+.05*((v//3)%3);den=1-(1-p)**n;mean=n*p;sec=n*p*(1-p)+mean*mean;ans=sec/den-(mean/den)**2
 return Q(f'{n} independent policies each have claim probability {f(p)}. N is their claim count. Given that at least one claim occurred, calculate Var(N).',ans,[f'Unconditionally E[N]={f(mean)} and E[N²]=np(1-p)+(np)²={f(sec)}.',f'The condition probability is {f(den)}. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.',f'Conditional variance is {f(sec)}/{f(den)}-({f(mean)}/{f(den)})²={f(ans)}.'],dict(kind='binomial',n=n,p=p,target='positive-variance'),W([n*p*(1-p),sec/den,n*p*(1-p)/den,sec/den-mean*mean],'Renormalize both raw moments and square the conditional mean; conditional variance is not simply unconditional variance divided by the condition probability.'),['zero-truncated distribution','first and second moments','conditional variance'],[373,382])

@family('continuous-conditional-mean')
def cond_cont_mean(v):
 L=4+v%3;a=1+v%2;# increasing triangular f2x/L²
 den=1-(a/L)**2;num=2*(L**3-a**3)/(3*L*L);ans=num/den
 return Q(f'Loss X has density f(x)=2x/{L*L} on (0,{L}) and zero elsewhere. A claim is recorded only when X>{a}. Calculate the mean loss among recorded claims.',ans,[f'The recording probability is 1-({a}/{L})²={f(den)}.',f'The restricted first-moment integral is the integral of x(2x/{L*L}) from {a} to {L}, equal to {f(num)}.',f'Normalize to the recorded population: {f(num)}/{f(den)}={f(ans)}.'],dict(kind='power-density',L=L,power=1,lower=a,target='conditional-mean'),W([num,2*L/3,(a+L)/2,num*den],'Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed.'),['conditional density','truncated first moment'],[43,375])

@family('quadratic-moment')
def quadratic_moment(v):
 L=2+v%3;a=1+v%2;b=2+(v//3)%3;meanX=2*L/3;EX2=L*L/2;EX4=L**4/3;ans=a*a*(EX4-EX2*EX2)
 return Q(f'X has density 2x/{L*L} on (0,{L}). A benefit is Y={a}X²+{b}. Calculate Var(Y).',ans,[f'Variance ignores the additive constant, so Var(Y)={a*a}Var(X²).',f'Integrating the density gives E[X²]={f(EX2)} and E[X⁴]={f(EX4)}.',f'Var(Y)={a*a}(E[X⁴]-(E[X²])²)={f(ans)}.'],dict(kind='power-transform',L=L,power=1,a=a,b=b,target='variance-square'),W([a*a*(EX2-meanX*meanX),a*a*EX4,a*(EX4-EX2*EX2),ans+b*b],'The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.'),['transformed moments','fourth moment','variance scaling'],[56,57])

@family('power-quantile-difference')
def quantile_difference(v):
 L=5+v%7;k=2+v%3;low=.2;high=.8;ans=L*(high**(1/k)-low**(1/k))
 return Q(f'X has density proportional to x^{k-1} on (0,{L}) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles.',ans,[f'Normalize the density: f(x)={k}x^{k-1}/{L**k}, so F(x)=(x/{L})^{k}.',f'Solve F(q)=u to get q(u)={L}u^(1/{k}).',f'The requested difference is {L}[0.8^(1/{k})-0.2^(1/{k})]={f(ans)}.'],dict(kind='power-density',L=L,power=k-1,low=low,high=high,target='quantile-difference'),W([L*.6,L*(.8-.2)**(1/k),L*.8**(1/k),L*.2**(1/k)],'Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter.'),['normalize a density','invert CDF','quantile comparison'],[54,379])

@family('mixture-variance')
def mix_var(v):
 p=.15+.05*(v%4);B=1200+200*((v//3)%3);d=.25*B;meanPos=(B-d)**2/(2*B);secPos=(B-d)**3/(3*B);mean=p*meanPos;sec=p*secPos;ans=sec-mean*mean
 return Q(f'A policy has no claim with probability {f(1-p)} and exactly one claim otherwise. Conditional claim severity is uniform on (0,{B}). The insurer pays the positive excess over a deductible of {f(d)}. Calculate the annual payment variance per policy.',ans,[f'Conditional on a claim, the deductible payment has first moment ({B}-{f(d)})²/(2×{B})={f(meanPos)} and second moment ({B}-{f(d)})³/(3×{B})={f(secPos)}.',f'Include no-claim policies by multiplying each raw moment by claim probability {f(p)}: E[Y]={f(mean)}, E[Y²]={f(sec)}.',f'The per-policy variance is {f(sec)}-({f(mean)})²={f(ans)}.'],dict(kind='policy-mixture',p=p,B=B,d=d,target='payment-variance'),W([secPos-meanPos**2,p*(secPos-meanPos**2),sec,sqrt(ans)],'The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation.'),['claim occurrence mixture','deductible integration','total variability'],[49,51,59])

@family('affine-cv-infer')
def affine_cv(v):
 mean=40+10*(v%3);sd=15+5*((v//3)%3);a=1.2;target=.25;shift=a*sd/target-a*mean;ans=shift
 return Q(f'Positive loss X has mean {mean} and standard deviation {sd}. Adjusted cost is Y=1.2X+b. If Y has coefficient of variation 0.25 and positive mean, calculate b.',ans,[f'Linear scaling gives SD(Y)=1.2({sd})={f(a*sd)}; a constant adds no variance.',f'CV(Y)=SD(Y)/E[Y] implies E[Y]={f(a*sd)}/0.25={f(a*sd/target)}.',f'Solve 1.2({mean})+b={f(a*sd/target)}, giving b={f(shift)}.'],dict(kind='affine-cv',mean=mean,sd=sd,a=a,targetCV=target),W([sd/target-mean,shift/a,a*sd/target,a*mean],'Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance.'),['SD scaling','CV','inverse affine parameter'],[55])

@family('coinsurance-infer')
def coins_infer(v):
 B=1200+200*(v%4);d=.2*B;s=.65+.05*((v//3)%3);mean=s*(B-d)**2/(2*B);ans=s*s*((B-d)**3/(3*B)-((B-d)**2/(2*B))**2)
 return Q(f'Loss X is uniform on (0,{B}). Payment is Y=c max(X-{f(d)},0), where the insurer share c is unknown. Mean payment per loss is {f(mean)}. Calculate Var(Y).',ans,[f'Before coinsurance, the deductible payment mean is ({B}-{f(d)})²/(2×{B})={f((B-d)**2/(2*B))}.',f'The given mean identifies c={f(s)}. The deductible-payment second moment is ({B}-{f(d)})³/(3×{B}).',f'Variance is c² times the deductible-payment variance, giving {f(ans)}.'],dict(kind='uniform-payment',B=B,d=d,share=s,cap=100*B,inflation=1,target='variance'),W([s*((B-d)**3/(3*B)-((B-d)**2/(2*B))**2),s*s*B*B/12,mean*mean,s*(B-d)**3/(3*B)],'Recover the insurer share from the mean, then square that share when scaling the deductible-payment variance.'),['infer coinsurance','payment moments','variance scaling'],[53,55,59])

@family('cap-infer')
def cap_infer(v):
 B=1600+200*(v%4);d=.25*B;s=.8;cap=.3*B;threshold=d+cap/s;mass=1-threshold/B;ans=cap
 return Q(f'X is uniform on (0,{B}). Payment is Y=min(0.8 max(X-{f(d)},0),L). The probability of a payment exactly equal to the positive cap L is {f(mass)}. Calculate L.',ans,[f'The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/{B}.',f'Set this probability to {f(mass)} and solve the loss threshold as {B}(1-{f(mass)})={f(threshold)}.',f'L=0.8({f(threshold)}-{f(d)})={f(cap)}.'],dict(kind='uniform-cap-infer',B=B,d=d,share=s,mass=mass),W([threshold-d,threshold,.8*(B-d)*mass,cap/.8],'Use the mass at the final payment cap to identify the loss threshold, then apply coinsurance to its excess above the deductible.'),['payment atom','inverse cap','coinsurance order'],[57])

@family('inflation-payment-mean')
def inflation_mean(v):
 B=1000+200*(v%4);inflation=1.25;d=.3*B;cap=.5*B;s=.8;upper=(d+cap/s)/inflation;lower=d/inflation;first=s/inflation*(inflation*upper-d)**2/(2*B);# simplify integrate in inflatedloss space
 inflatedB=B*inflation;covered=inflatedB-d;u=min(covered,cap/s);mass=(covered-u)/inflatedB;ans=s*u*u/(2*inflatedB)+cap*mass
 return Q(f'Original loss X is uniform on (0,{B}). Losses rise by 25%, while an ordinary deductible of {f(d)} and a final payment cap of {f(cap)} stay fixed. The insurer pays 80% of the inflated excess above the deductible, subject to that cap. Calculate expected payment per original loss.',ans,[f'Inflated loss is uniform on (0,{f(inflatedB)}). The zero-payment boundary is {f(d)} and the cap is reached at inflated loss {f(d+cap/s)}.',f'Integrate 0.8(x-d) over the intermediate region with density 1/{f(inflatedB)}, then add cap times its survival probability {f(mass)}.',f'The resulting expected payment is {f(ans)}. Policy terms were not inflated.'],dict(kind='uniform-payment',B=B,d=d,share=s,cap=cap,inflation=inflation,target='mean'),W([inflation*(s*min(B-d,cap/s)**2/(2*B)+cap*max(0,(B-d-cap/s)/B)),s*max(inflation*B/2-d,0),s*(inflatedB-d)**2/(2*inflatedB),cap],'Inflate the loss distribution first. Fixed deductible and cap must then be applied inside the expectation, with a cap-mass contribution.'),['inflation','fixed policy terms','piecewise expected payment'],[51,53,55])

@family('payment-per-payment')
def per_payment(v):
 mu=800+200*(v%4);d=300+100*((v//3)%3);cap=500+100*((v//5)%3);s=.75;survive=exp(-d/mu);mean=s*mu*(exp(-d/mu)-exp(-(d+cap/s)/mu));ans=mean/survive
 return Q(f'Loss X is exponential with mean {mu}. Payment is Y=min(0.75 max(X-{d},0),{cap}). Calculate E[Y given Y>0].',ans,[f'Positive payment occurs exactly when X>{d}, with probability exp(-{d}/{mu})={f(survive)}.',f'Using survival integration up to the final payment cap gives E[Y]=0.75({mu})[exp(-{d}/{mu})-exp(-({d}+{cap}/0.75)/{mu})]={f(mean)}.',f'The per-payment mean is E[Y]/P(Y>0)={f(ans)}.'],dict(kind='exp-payment',mu=mu,d=d,share=s,cap=cap,target='positive-mean'),W([mean,s*mu,cap,s*mu*survive],'Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.'),['exponential loss','capped payment','per-loss versus per-payment'],[44,45,50])

@family('exponential-payment-variance')
def exp_payment_var(v):
 mu=800+200*(v%4);d=200+100*((v//3)%3);s=.8;cap=400+100*((v//5)%3);mass0=1-exp(-d/mu);mean=s*mu*exp(-d/mu)*(1-exp(-cap/(s*mu)));second=2*exp(-d/mu)*(s*mu)**2*(1-(1+cap/(s*mu))*exp(-cap/(s*mu)));ans=second-mean*mean
 return Q(f'A loss has exponential mean {mu}. The insurer pays Y=min(0.8 max(X-{d},0),{cap}). Calculate the variance of payment per loss.',ans,[f'For 0<y<{cap}, P(Y>y)=exp(-({d}+y/0.8)/{mu}). There is zero mass {f(mass0)} and a cap mass exp(-({d}+{cap}/0.8)/{mu}).',f'Use E[Y]=the integral of P(Y>y), and E[Y²]=the integral of 2yP(Y>y), each over (0,{cap}). These give {f(mean)} and {f(second)}.',f'Subtract squared mean: Var(Y)={f(ans)}.'],dict(kind='exp-payment',mu=mu,d=d,share=s,cap=cap,target='variance'),W([second,s*s*mu*mu,sqrt(ans),mean*mean],'Include the deductible and payment cap in both payment moments; scaling the original exponential variance omits these transformations.'),['survival moments','deductible and cap masses','payment variance'],[50,59])
@family('joint-table-event')
def joint_event(v):
 c=1+v%7;weights=[[x+2*y+c for y in range(3)] for x in range(3)];total=sum(map(sum,weights));den=sum(weights[x][y] for x in range(3) for y in range(3) if x+y>=2);num=sum(weights[x][y] for x in range(3) for y in range(3) if x+y>=2 and x>y);ans=num/den
 return Q(f'For x,y in {{0,1,2}}, the joint PMF is p(x,y)=k(x+2y+{c}), and it is zero elsewhere. Given X+Y≥2, calculate P(X>Y).',ans,[f'Normalizing all nine cells gives k=1/{total}.',f'The conditioning region consists of the cells with x+y≥2; their unnormalized weights total {den}. Within that region, cells satisfying x>y have total weight {num}.',f'The normalization constant cancels, so the conditional probability is {num}/{den}={f(ans)}.'],dict(kind='joint-grid',c=c,target='event'),W([num/total,den/total,sum(weights[x][y] for x in range(3) for y in range(3) if x>y)/total,num/(total-den)],'Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.'),['joint normalization','nonrectangular event','conditioning'],[373])

@family('joint-table-conditional-moment')
def joint_cond_moment(v):
 c=1+v%7;y=1+v%2;weights=[x+2*y+c for x in range(3)];total=sum(weights);mean=sum(x*w for x,w in enumerate(weights))/total;second=sum(x*x*w for x,w in enumerate(weights))/total;ans=second-mean*mean
 return Q(f'For x,y in {{0,1,2}}, p(x,y)=k(x+2y+{c}), with k determined by normalization. Calculate Var(X given Y={y}).',ans,[f'On the Y={y} slice, the X weights are {weights[0]}, {weights[1]}, {weights[2]}. Divide by their sum {total} to get the conditional PMF.',f'The conditional first and second moments are {f(mean)} and {f(second)}.',f'Conditional variance is {f(second)}-({f(mean)})²={f(ans)}.'],dict(kind='joint-grid',c=c,y=y,target='conditional-variance'),W([second,second-mean,mean,second/9-mean*mean],'Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.'),['conditional PMF','conditional moments','variance'],[373,382])

@family('joint-covariance')
def joint_cov(v):
 c=1+v%7;w=[[x+2*y+c for y in range(3)] for x in range(3)];Z=sum(map(sum,w));EX=sum(x*w[x][y] for x in range(3) for y in range(3))/Z;EY=sum(y*w[x][y] for x in range(3) for y in range(3))/Z;EXY=sum(x*y*w[x][y] for x in range(3) for y in range(3))/Z;VX=sum(x*x*w[x][y] for x in range(3) for y in range(3))/Z-EX*EX;VY=sum(y*y*w[x][y] for x in range(3) for y in range(3))/Z-EY*EY;cov=EXY-EX*EY;ans=cov/sqrt(VX*VY)
 return Q(f'X and Y have joint PMF p(x,y)=k(x+2y+{c}) for x,y in {{0,1,2}}. Calculate their correlation coefficient.',ans,[f'Normalize the nine weights: k=1/{Z}. Joint summation gives E[X]={f(EX)}, E[Y]={f(EY)}, E[XY]={f(EXY)}.',f'The marginal variances are {f(VX)} and {f(VY)}, and covariance is E[XY]-E[X]E[Y]={f(cov)}.',f'Correlation is covariance divided by √(Var(X)Var(Y)), giving {f(ans)}.'],dict(kind='joint-grid',c=c,target='correlation'),W([cov,0,abs(ans),cov/(VX*VY)],'Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.'),['joint mixed moment','marginal variances','correlation'],[373])

@family('joint-linear-variance')
def joint_linear(v):
 c=1+v%7;a=2;b=-1-v%2;w=[[x+2*y+c for y in range(3)] for x in range(3)];Z=sum(map(sum,w));mean=sum((a*x+b*y)*w[x][y] for x in range(3) for y in range(3))/Z;sec=sum((a*x+b*y)**2*w[x][y] for x in range(3) for y in range(3))/Z;ans=sec-mean*mean;EX=sum(x*w[x][y] for x in range(3) for y in range(3))/Z;EY=sum(y*w[x][y] for x in range(3) for y in range(3))/Z;VX=sum(x*x*w[x][y] for x in range(3) for y in range(3))/Z-EX*EX;VY=sum(y*y*w[x][y] for x in range(3) for y in range(3))/Z-EY*EY
 return Q(f'p(x,y)=k(x+2y+{c}) for x,y in {{0,1,2}}. Calculate Var(2X-{abs(b)}Y). Independence is not assumed.',ans,[f'Normalize with k=1/{Z}. Let T=2X-{abs(b)}Y and evaluate T in each joint cell.',f'Weighting those values gives E[T]={f(mean)} and E[T²]={f(sec)}.',f'Var(T)=E[T²]-(E[T])²={f(ans)}. Equivalently, include the signed covariance term in the linear-combination formula.'],dict(kind='joint-grid',c=c,a=a,b=b,target='linear-variance'),W([a*a*VX+b*b*VY,sec,a*VX+b*VY,mean*mean],'The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.'),['joint transformation','variance with covariance'],[373])

@family('conditional-hypergeom-variance')
def cond_hyper_var(v):
 A=4+v%3;B=6+(v//3)%3;C=5+(v//5)%3;n=5;x=2;N=B+C;remaining=n-x;p=B/N;ans=remaining*p*(1-p)*(N-remaining)/(N-1)
 return Q(f'A collection contains {A} class-A, {B} class-B, and {C} class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y).',ans,[f'Conditioning on X=2 leaves three sampled files drawn from the {B+C} non-A files, of which {B} are B.',f'The conditional Y distribution is hypergeometric with population {N}, success count {B}, and sample size 3.',f'Its variance is 3({B}/{N})(1-{B}/{N})({N}-3)/({N}-1)={f(ans)}.'],dict(kind='conditional-hypergeom',groups=[A,B,C],n=n,x=x,target='variance'),W([remaining*p*(1-p),n*p*(1-p)*(N-n)/(N-1),remaining*p,ans*p],'Change the sample size and population after conditioning, and retain the finite-population correction.'),['condition a multivariate sample','hypergeometric variance'],[382])

@family('total-variance-mixture')
def total_var(v):
 w=.3+.1*(v%3);mu1=2+v%2;mu2=5+(v//3)%3;mean=w*mu1+(1-w)*mu2;ans=mean+w*(1-w)*(mu1-mu2)**2
 return Q(f'An insured belongs permanently to class A with probability {f(w)} and class B otherwise. Conditional on class, annual claim count N is Poisson with mean {mu1} for A or {mu2} for B. Calculate Var(N) for a randomly selected insured.',ans,[f'Within-class variances equal their Poisson means, so E[Var(N given class)]={f(mean)}.',f'The conditional means themselves vary: Var(E[N given class])={f(w*(1-w)*(mu1-mu2)**2)}.',f'Total variance adds these two components, giving {f(ans)}. The unconditional mixture is not Poisson.'],dict(kind='poisson-class',w=w,rates=[mu1,mu2],target='variance'),W([mean,w*mu1*mu1+(1-w)*mu2*mu2,mean*mean,w*(1-w)*(mu1-mu2)**2],'Average within-class variance alone misses the variation between class means; apply total variance.'),['conditional moments','total variance','Poisson mixture'],[373])

@family('shared-class-covariance')
def shared_cov(v):
 w=.3+.1*(v%3);rates=[1+v%2,4+(v//3)%3];ans=w*(1-w)*(rates[0]-rates[1])**2
 return Q(f'An insured is type A with probability {f(w)}, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean {rates[0]} for A or {rates[1]} for B. Calculate Cov(X,Y) without conditioning on type.',ans,[ 'Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.',f'E[XY]={f(w*rates[0]**2+(1-w)*rates[1]**2)} and E[X]=E[Y]={f(w*rates[0]+(1-w)*rates[1])}.',f'Cov(X,Y)=E[XY]-E[X]E[Y]={f(ans)}.'],dict(kind='poisson-class',w=w,rates=rates,target='covariance'),W([0,w*rates[0]+(1-w)*rates[1],w*rates[0]**2+(1-w)*rates[1]**2,-ans],'The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.'),['conditional independence','mixed moment','latent covariance'],[370,373])

@family('order-range')
def order_range(v):
 n=4+v%3;B=10+v%4;r=3+v%2;t=r/B;ans=n*t**(n-1)-(n-1)*t**n
 return Q(f'{n} independent observations are uniform on (0,{B}). Let U and V be their minimum and maximum. Calculate P(V-U<{r}).',ans,[f'The joint min–max density is n(n-1)(v-u)^(n-2)/{B}^{n} on 0<u<v<{B}.',f'Integrate over the band v-u<{r}. Equivalently, integrate the range density n(n-1)r^(n-2)({B}-r)/{B}^{n} from 0 to {r}.',f'The result is n({r}/{B})^(n-1)-(n-1)({r}/{B})^n={f(ans)}.'],dict(kind='order-uniform',n=n,B=B,r=r,target='range'),W([t**n,1-ans,t**(n-1),n*t**(n-1)],'A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.'),['joint order statistics','integration over a band'],[373])

@family('order-rank-conditional')
def order_rank(v):
 n=5+v%3;rank=3;a=.2;b=.6+.05*((v//3)%3);p=(b-a)/(1-a);ans=sum(comb(n,j)*p**j*(1-p)**(n-j) for j in range(rank,n+1))
 return Q(f'{n} independent observations are uniform on (0,1). Their minimum is known to exceed {f(a)}. Calculate the probability that their third-smallest observation is at most {f(b)}.',ans,[f'Given all observations exceed {f(a)}, they remain independent uniform variables on ({f(a)},1). Each is at most {f(b)} with conditional probability ({f(b)}-{f(a)})/(1-{f(a)})={f(p)}.', 'The third-smallest is below the threshold exactly when at least three of the observations are below it.',f'Sum the binomial probabilities from 3 through {n}; the result is {f(ans)}.'],dict(kind='order-uniform',n=n,rank=rank,a=a,b=b,target='conditional-rank'),W([sum(comb(n,j)*b**j*(1-b)**(n-j) for j in range(rank,n+1)),p**n,1-(1-p)**n,p],'First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.'),['condition order statistics','rank-to-count conversion','binomial tail'],[366,375])

@family('normal-combination-infer')
def normal_combo(v):
 muX=100+10*(v%3);muY=30+5*((v//3)%3);sdX=8+v%3;sdY=4+(v//5)%3;mu=muX-2*muY;sd=sqrt(sdX*sdX+4*sdY*sdY);z=.8+.2*(v%5);t=mu+z*sd;ans=1-phi(z)
 return Q(f'Independent normal X and Y have means {muX} and {muY}. SD(X)={sdX}. The variance of X+Y is {sdX*sdX+sdY*sdY}. Calculate P(X-2Y>{t:.8f}).',ans,[f'Independence gives Var(Y)=Var(X+Y)-Var(X)={sdX*sdX+sdY*sdY}-{sdX*sdX}={sdY*sdY}.',f'X-2Y is exactly normal with mean {mu} and SD √({sdX*sdX}+4×{sdY*sdY})={f(sd)}.',f'The standardized threshold is {f(z)}, so the upper-tail probability is 1-Φ({f(z)})={f(ans)}.'],dict(kind='normal-combination',muX=muX,muY=muY,sdX=sdX,sdY=sdY,a=1,b=-2,t=t,target='tail'),W([phi(z),1-phi(z*sd/(sdX*sdX+4*sdY*sdY)),1-phi((t-(muX+2*muY))/sd),1-phi((t-mu)/(sdX-2*sdY) if sdX!=2*sdY else 0)],'Use signed coefficients in the mean and squared coefficients in the independent variance, then standardize with SD.'),['infer a component variance','exact normal linear combination','tail'],[380])

@family('poisson-weighted-sum')
def poisson_weighted(v):
 a=.6+.2*(v%3);b=1+.25*((v//3)%3);limit=4+v%3;ans=sum(exp(-a)*a**x/math.factorial(x)*exp(-b)*b**y/math.factorial(y) for x in range(limit//2+1) for y in range(limit-2*x+1))
 return Q(f'Independent claim counts X and Y are Poisson with means {f(a)} and {f(b)}. A branch statistic is T=2X+Y. Calculate P(T≤{limit}).',ans,[f'Independence gives joint masses exp(-({f(a)}+{f(b)})){f(a)}^x {f(b)}^y/(x!y!). The weighted statistic is not generally Poisson.',f'Enumerate x=0 through {limit//2}; for each x sum y=0 through {limit}-2x.',f'The sum of all qualifying joint masses is {f(ans)}.'],dict(kind='poisson-weighted',a=a,b=b,limit=limit),W([sum(exp(-(2*a+b))*(2*a+b)**k/math.factorial(k) for k in range(limit+1)),sum(exp(-(a+b))*(a+b)**k/math.factorial(k) for k in range(limit+1)),1-ans,exp(-a-b)],'The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.'),['discrete convolution','weighted support','independence'],[15])

@family('linear-second-moment')
def linear_second(v):
 mx=10+v%4;my=15+(v//3)%3;vx=4+v%3;vy=9+(v//5)%3;a=2;b=-3;shift=5;mean=a*mx+b*my+shift;variance=a*a*vx+b*b*vy;ans=variance+mean*mean
 return Q(f'Independent X,Y have means {mx},{my} and variances {vx},{vy}, respectively. For T=2X-3Y+5, calculate E[T²].',ans,[f'Linearity gives E[T]=2({mx})-3({my})+5={mean}.',f'Independence gives Var(T)=4({vx})+9({vy})={variance}; the constant contributes zero variance.',f'E[T²]=Var(T)+(E[T])²={variance}+{mean*mean}={ans}.'],dict(kind='linear-moments',mx=mx,my=my,vx=vx,vy=vy,a=a,b=b,shift=shift,target='second'),W([variance,mean*mean,2*vx-3*vy+mean*mean,variance+shift*shift],'The second raw moment includes both variance and squared mean; use squared coefficients only for variance.'),['linear expectation','independent variance','raw second moment'],[55,380])

@family('sample-mean-random-shift')
def sample_shift(v):
 n=16+4*(v%3);mu=30+5*((v//3)%3);sigma=12;varC=4+v%3;ans=sigma*sigma/n+varC
 return Q(f'X1,…,X{n} are independent with common mean {mu} and SD {sigma}. An independent random surcharge C has variance {varC}. Define Y as their sample mean plus the same single surcharge C. Calculate Var(Y).',ans,[f'The sample mean variance is {sigma*sigma}/{n}.',f'The independent surcharge is added once, so its full variance {varC} is added; it is not averaged over {n} observations.',f'The total variance is {sigma*sigma}/{n}+{varC}={f(ans)}.'],dict(kind='sample-shift',n=n,sigma=sigma,varC=varC),W([(sigma*sigma+varC)/n,sigma*sigma/n+varC/n**2,sigma*sigma+varC,sqrt(ans)],'Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.'),['sample mean','independent random shift','variance'],[380])

@family('clt-payment-tail')
def clt_payment(v):
 n=100+25*(v%3);p=.2+.05*((v//3)%3);B=1000;d=200;meanC=(B-d)**2/(2*B);secC=(B-d)**3/(3*B);mu=p*meanC;var=p*secC-mu*mu;z=1.5;threshold=n*mu+z*sqrt(n*var);ans=1-phi(z)
 return Q(f'Each of {n} independent identical policies has no claim with probability {f(1-p)} and one claim otherwise. Conditional severity is uniform on (0,{B}). Payment is the positive excess over {d}. Using the CLT, approximate the probability total payment exceeds {threshold:.8f}.',ans,[f'Compute per-policy moments before approximating: mean μ={f(mu)} and variance σ²={f(var)}, including no-claim policies.',f'The total has mean {f(n*mu)} and SD √({n}×{f(var)})={f(sqrt(n*var))}.',f'The standardized threshold is about {z}, so the approximate upper tail is {f(ans)}. This is a continuous-payment model, so no unit-lattice continuity correction is used.'],dict(kind='clt-payment',n=n,p=p,B=B,d=d,threshold=threshold),W([phi(z),1-phi((threshold-n*mu)/sqrt(var)),1-phi((threshold-n*mu)/(n*sqrt(var))),p*(1-phi(z))],'First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.'),['insurance mixture moments','CLT for an aggregate','standardization'],[49,59])

@family('clt-binomial-correction')
def clt_bin(v):
 n=120+20*(v%3);p=.3+.05*((v//3)%3);mu=n*p;sd=sqrt(n*p*(1-p));k=math.floor(mu+1.4*sd);ans=1-phi((k-.5-mu)/sd)
 return Q(f'{n} independent policies each have probability {f(p)} of a claim. Use a normal approximation with continuity correction to calculate the probability at least {k} policies have a claim.',ans,[f'The count mean is {f(mu)} and SD is √({n}×{f(p)}×{f(1-p)})={f(sd)}.',f'At least {k} for an integer count becomes the normal event above {k-0.5}. The standardized boundary is {f((k-.5-mu)/sd)}.',f'The approximate probability is 1-Φ(z)={f(ans)}.'],dict(kind='clt-binomial',n=n,p=p,k=k),W([1-phi((k-mu)/sd),1-phi((k+.5-mu)/sd),phi((k-.5-mu)/sd),1-phi((k-.5-mu)/(n*p*(1-p)))],'Use the lower half-unit boundary for an at-least tail and standardize using SD rather than variance.'),['binomial normal approximation','continuity correction','tail'],[380])
@family('discrete-uniform-sum')
def discrete_uniform_sum(v):
 n=5+v%7;threshold=n+2;allowed=[(x,y) for x in range(1,n+1) for y in range(1,n+1) if x+y>=threshold];equal=[(x,y) for x,y in allowed if x==y];ans=len(equal)/len(allowed)
 return Q(f'Independent X,Y are each uniform on the integers 1 through {n}. Given X+Y≥{threshold}, calculate P(X=Y).',ans,[f'All {n*n} ordered pairs are equally likely before conditioning.',f'The condition allows {len(allowed)} ordered pairs. Exactly {len(equal)} of these lie on the diagonal x=y.',f'The conditional ratio is {len(equal)}/{len(allowed)}={f(ans)}.'],dict(kind='uniform-pairs',n=n,threshold=threshold,target='equal-given-tail'),W([1/n,len(equal)/(n*n),len(allowed)/(n*n),len(equal)/comb(n,2)],'Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution.'),['discrete uniform pairs','sample-space counting','conditioning'],[15,373])

@family('uniform-payment-sd')
def uniform_sd(v):
 base=uniform_var(v);spec=base['verification'];B=spec['B'];d=spec['d'];s=spec['share'];cap=spec['cap'];upper=min(B-d,cap/s);mass=(B-d-upper)/B;mean=s*upper*upper/(2*B)+cap*mass;sec=s*s*upper**3/(3*B)+cap*cap*mass;var=sec-mean*mean;spec['target']='sd'
 return Q(base['question'].split('Calculate Var(Y)')[0]+'Calculate the standard deviation of Y per loss.',sqrt(var),base['solution']+[f'Take the square root of the variance to get SD(Y)={f(sqrt(var))}.'],spec,W([var,sqrt(sec),s*B/sqrt(12),mean],'Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.'),['piecewise moments','cap mass','standard deviation'],[57,59])

@family('mixture-payment-sd')
def mixture_sd(v):
 base=mix_var(v);spec=base['verification'];p=spec['p'];B=spec['B'];d=spec['d'];m=(B-d)**2/(2*B);sec=(B-d)**3/(3*B);var=p*sec-(p*m)**2;spec['target']='payment-sd'
 return Q(base['question'].split('Calculate the annual payment variance')[0]+'Calculate the annual payment standard deviation per policy.',sqrt(var),base['solution']+[f'The square root of the per-policy variance is {f(sqrt(var))}.'],spec,W([var,sqrt(p)*sqrt(sec-m*m),sqrt(sec-m*m),p*m],'Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.'),['occurrence/severity mixture','payment variance','SD'],[49,51,59])

@family('uniform-payment-cv')
def uniform_cv(v):
 base=uniform_var(v);spec=base['verification'];B=spec['B'];d=spec['d'];s=spec['share'];cap=spec['cap'];upper=min(B-d,cap/s);mass=(B-d-upper)/B;mean=s*upper*upper/(2*B)+cap*mass;sec=s*s*upper**3/(3*B)+cap*cap*mass;sd=sqrt(sec-mean*mean);spec['target']='cv'
 return Q(base['question'].split('Calculate Var(Y)')[0]+'Calculate the coefficient of variation of Y per loss.',sd/mean,base['solution']+[f'CV(Y)=SD(Y)/E[Y]={f(sd)}/{f(mean)}={f(sd/mean)}.'],spec,W([(sec-mean*mean)/mean,1/sqrt(3),sd/(B/2),mean/sd],'Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.'),['transformed moments','SD','relative variability'],[55,57,59])

@family('inflation-tail')
def inflation_tail(v):
 mu=800+200*(v%4);inflation=1.2;d=250+50*((v//3)%3);s=.8;cap=900;threshold=400+50*((v//5)%3);lossThreshold=(d+threshold/s)/inflation;ans=exp(-threshold/(s*inflation*mu))
 return Q(f'Original loss X is exponential with mean {mu}. Payment after 20% loss inflation is Y=min(0.8 max(1.2X-{d},0),{cap}). Given a positive payment, calculate P(Y>{threshold}).',ans,[f'Since {threshold} is below the final cap, Y>{threshold} is equivalent to X>({d}+{threshold}/0.8)/1.2={f(lossThreshold)}.',f'Positive payment requires X>{d}/1.2. Use the ratio of the corresponding exponential survival probabilities.',f'The ratio simplifies to exp(-{threshold}/(0.8×1.2×{mu}))={f(ans)}. The deductible cancels only because of exponential memorylessness.'],dict(kind='inflated-exp-tail',mu=mu,inflation=inflation,d=d,share=s,cap=cap,threshold=threshold),W([exp(-lossThreshold/mu),exp(-threshold/(s*mu)),1-ans,exp(-threshold/mu)],'Transform the threshold using inflation and coinsurance, then condition on positive payment. Do not inflate fixed policy terms.'),['inflation and policy order','payment event inversion','conditional exponential tail'],[375,381])

MAPPING={
'a1-set-functions':['atoms-normalize','region-conditional'],
'a2-venn-diagrams':['region-conditional','two-events-infer'],
'a3-sample-space':['replacement-pattern','discrete-uniform-sum'],
'a4-events':['two-events-infer','conditional-independent'],
'a5-probability-set-function':['atoms-normalize','disjoint-infer'],
'a6-axioms-probability':['weighted-outcomes','independent-infer'],
'b1-counting-principles':['restricted-code','committee-roles'],
'b2-permutations':['adjacent-permutation','restricted-code'],
'b3-combinations':['committee-roles','conditional-sample'],
'b4-combinatorial-probability':['conditional-sample','hypergeom-bayes'],
'c1-independent-events':['independent-infer','latent-two-years'],
'c2-independent-trials':['conditional-independent','latent-two-years'],
'd1-mutually-exclusive':['disjoint-infer','two-events-infer'],
'd2-partitions':['partition-rate','mixture-no-claim'],
'e1-addition-rule':['region-conditional','two-events-infer'],
'e2-multiplication-rule':['replacement-pattern','latent-two-years'],
'e3-combined-problems':['mixture-no-claim','hypergeom-bayes'],
'f1-conditional-probability':['region-conditional','conditional-independent'],
'f2-bayes-theorem':['screen-infer','latent-two-years'],
'f3-law-total-probability':['partition-rate','mixture-no-claim'],
'urv-a1-random-variables':['discrete-uniform-capped','geometric-benefit'],
'urv-a2-pdf':['density-infer-conditional','power-quantile-difference'],
'urv-a3-cdf':['cdf-atom-conditional','continuous-conditional-mean'],
'urv-b1-discrete-uniform':['discrete-uniform-capped','discrete-uniform-sum'],
'urv-b2-binomial':['binomial-infer','capped-binomial-payment'],
'urv-b3-geometric':['geometric-benefit','geometric-conditioned'],
'urv-b4-negative-binomial':['negative-binomial-joint','first-success-given-second'],
'urv-b5-hypergeometric':['hypergeom-bayes','hypergeom-payment'],
'urv-b6-poisson':['poisson-deductible','poisson-split-condition'],
'urv-c1-continuous-uniform':['uniform-infer-deductible','uniform-payment-variance'],
'urv-c2-exponential':['exponential-infer','exponential-benefit'],
'urv-c3-gamma':['gamma-parameter-tail','gamma-sum-condition'],
'urv-c4-beta':['beta-infer','beta-conditional'],
'urv-c5-normal':['normal-quantile-infer','normal-quadratic'],
'urv-c6-lognormal':['lognormal-payment-tail','lognormal-moment-infer'],
'urv-d1-conditional-discrete':['conditional-binomial-mean','conditional-binomial-variance'],
'urv-d2-conditional-continuous':['continuous-conditional-mean','density-infer-conditional'],
'urv-e1-expected-value':['poisson-deductible','exponential-benefit'],
'urv-e2-moments':['quadratic-moment','linear-second-moment'],
'urv-e3-mode-median-percentiles':['power-quantile-difference','normal-quantile-infer'],
'urv-f1-variance':['mixture-variance','quadratic-moment'],
'urv-f2-standard-deviation':['uniform-payment-sd','mixture-payment-sd'],
'urv-f3-coefficient-variation':['affine-cv-infer','uniform-payment-cv'],
'urv-g1-deductibles':['uniform-infer-deductible','exponential-infer'],
'urv-g2-coinsurance':['coinsurance-infer','cap-infer'],
'urv-g3-benefit-limits':['cap-infer','payment-per-payment'],
'urv-g4-inflation':['inflation-payment-mean','inflation-tail'],
'urv-h1-loss-variable':['mixture-variance','total-variance-mixture'],
'urv-h2-payment-variable':['payment-per-payment','cdf-atom-conditional'],
'urv-h3-moments-loss-payment':['exponential-payment-variance','uniform-payment-variance'],
'mrv-a1-joint-distributions':['joint-table-event','joint-linear-variance'],
'mrv-a2-conditional-distributions':['conditional-hypergeom-variance','joint-table-conditional-moment'],
'mrv-b1-joint-moments':['total-variance-mixture','shared-class-covariance'],
'mrv-b2-conditional-variance':['joint-table-conditional-moment','conditional-hypergeom-variance'],
'mrv-c1-covariance':['joint-covariance','joint-linear-variance'],
'mrv-d1-order-statistics':['order-range','order-rank-conditional'],
'mrv-e1-linear-combinations':['normal-combination-infer','poisson-weighted-sum'],
'mrv-e2-linear-moments':['linear-second-moment','sample-mean-random-shift'],
'mrv-f1-central-limit-theorem':['clt-payment-tail','clt-binomial-correction'],
}

def build():
 chapter={};exam={};seen=set()
 for index,t in enumerate(TOPICS):
  id=t['id'];assert id in MAPPING;chapter[id]=[];exam[id]=[]
  for mode in ['chapter','exam']:
   if mode=='exam' and t.get('enrichment'):continue
   for slot,name in enumerate(MAPPING[id]):
    # Search for a distinct numeric/context instance across the complete bank.
    v=index*137+slot*19+(0 if mode=='chapter' else 7919)
    for attempt in range(200):
     question=FAMILIES[name](v+attempt*31)
     if question['question'] not in seen:break
    else:raise RuntimeError('Exhausted distinct questions '+id+' '+name)
    seen.add(question['question']);question['id']=f'{mode}:{id}:{slot}';question['topicId']=id;question['family']=name
    (chapter if mode=='chapter' else exam)[id].append(question)
  if not exam[id]:del exam[id]
 Path('scripts/content/challenges.js').write_text('export default '+json.dumps(chapter,indent=2,ensure_ascii=False)+';\n')
 Path('scripts/content/exam-bank.js').write_text('export default '+json.dumps(exam,indent=2,ensure_ascii=False)+';\n')
 print(f'{sum(map(len,chapter.values()))} chapter challenges across {len(chapter)} chapters; {sum(map(len,exam.values()))} separate exam questions; {len(FAMILIES)} exercise families.')
if __name__=='__main__':build()

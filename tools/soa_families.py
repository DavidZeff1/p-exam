"""Additional original chapter exercises, informed by SOA Exam P sample styles.

Stems require model selection, endpoint interpretation, or parameter recovery.
The independent JavaScript audit reconstructs each distribution from its inputs.
"""
import math
from math import comb, exp, log, sqrt


def register(family, Q, W, f, phi):
    def S(text, answer, steps, spec, wrong, skills, probability=False, integer=False):
        spec = dict(spec, probability=probability)
        question = Q(text, answer, steps, spec, wrong, skills, [])
        if any(message == 'Recheck the setup and the requested quantity before evaluating the formula.' for message in question['feedback'].values()):
            raise ValueError('Choose parameters with four distinct diagnostic distractors')
        # Count questions use whole-number choices, as on an actual exam.
        if integer:
            spec['precision'] = 0
            question['choices'] = [f'${float(x.strip("$")):.0f}$' for x in question['choices']]
            question['question'] = text
            assert len(set(question['choices'])) == 5
        return question

    @family('symmetric-difference-infer')
    def symmetric(v):
        a = .35 + .025 * (v % 5)
        b = .4 + .025 * ((v // 5) % 4)
        both = .15 + .025 * ((v // 20) % 4)
        union = a + b - both
        ans = (a + b - 2 * both) / union
        return S(f'A claim may involve property damage A, bodily injury B, both, or neither. P(A)={f(a)}, P(B)={f(b)}, and P(neither)={f(1-union)}. Given that at least one of A and B occurs, calculate the probability that exactly one occurs.', ans,
                 [f'The union has probability {f(union)}. The addition rule gives P(A∩B)={f(a)}+{f(b)}-{f(union)}={f(both)}.', f'Exactly one has probability P(A)+P(B)-2P(A∩B)={f(a+b-2*both)}.', f'Divide by the union probability to obtain {f(ans)}.'],
                 dict(kind='symmetric-difference', a=a, b=b, both=both),
                 [(a+b-2*both, 'This is the probability of exactly one before restricting to the union.'), (both/union, 'This gives both events conditional on the union.'), (a/union, 'This includes the intersection as well as the A-only region.'), (b/union, 'This includes the intersection as well as the B-only region.'), (union, 'This gives the probability of the condition.')],
                 ['recover an intersection', 'exactly-one event', 'conditional normalization'], True)

    @family('three-events-exactly-one')
    def three(v):
        w = [8+v%5, 5+(v//5)%4, 7+(v//20)%4, 3+(v//80)%3, 6+(v//240)%3, 4, 2, 1]
        total = sum(w)
        a = sum(w[i] for i in range(8) if i & 1)
        b = sum(w[i] for i in range(8) if i & 2)
        c = sum(w[i] for i in range(8) if i & 4)
        ab, ac, bc = w[3]+w[7], w[5]+w[7], w[6]+w[7]
        one = w[1]+w[2]+w[4]
        ans = one/total
        return S(f'Three diagnostic flags A, B, C have probabilities {a}/{total}, {b}/{total}, {c}/{total}. Their pairwise intersections A∩B, A∩C, B∩C have probabilities {ab}/{total}, {ac}/{total}, {bc}/{total}, and all three occur with probability 1/{total}. Calculate the probability that exactly one flag occurs.', ans,
                 ['Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.', 'Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.', f'The result is [{a}+{b}+{c}-2({ab}+{ac}+{bc})+3]/{total}={one}/{total}={f(ans)}.'],
                 dict(kind='three-exact', weights=w),
                 [(1-w[0]/total, 'This is at least one, including overlaps.'), ((a+b+c-ab-ac-bc)/total, 'This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.'), ((ab+ac+bc-2)/total, 'This gives at least two flags.'), (one/(total-w[0]), 'This conditions on at least one flag, which was not requested.'), ((one+1)/total, 'The triple intersection is not an exactly-one outcome.')],
                 ['Venn-region multiplicities', 'inclusion–exclusion'], True)

    @family('ordered-draw-condition')
    def ordered(v):
        n = 7+v%6
        k = 2+(v//6)%3
        ans = (k-1)/(n-1)
        return S(f'An urn contains {k} red balls and {n-k} blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red.', ans,
                 [f'P(first red and second red)=({k}/{n})({k-1}/{n-1}).', f'By symmetry, the second draw is red with probability {k}/{n}.', f'Dividing the joint probability by the condition probability gives ({k-1})/({n-1})={f(ans)}. Conditioning on a later draw still changes the earlier draw distribution.'],
                 dict(kind='ordered-condition', N=n, K=k),
                 [(k/n, 'This is the first-draw probability before observing the second draw.'), (k*(k-1)/(n*(n-1)), 'This is the joint probability; it needs a conditional denominator.'), (k/(n-1), 'The observed red ball must be removed from the red count as well as the population count.'), ((n-k)/(n-1), 'This gives the probability that the first ball was blue.'), ((k-1)/n, 'The conditional population has one fewer ball.')],
                 ['ordered sample space', 'reverse conditioning', 'without replacement'], True)

    @family('digit-code-restrictions')
    def digits(v):
        n = 7+v%4
        length = 4+(v//4)%2
        # Symbols 0,...,n-1; first nonzero, last one of 1,3,5.
        ans = 3*(n-2)*math.perm(n-2, length-2)
        return S(f'A {length}-digit identifier uses distinct digits chosen from 0 through {n-1}. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.', ans,
                 ['Choose the last digit first: there are three possibilities, each nonzero.', f'After fixing the last digit, the first digit has {n-2} nonzero choices.', f'Fill the {length-2} labeled middle positions from the remaining {n-2} digits without replacement. The count is 3×{n-2}×{math.perm(n-2,length-2)}={ans}.'],
                 dict(kind='digit-codes', n=n, length=length),
                 W([3*(n-1)*math.perm(n-2,length-2), 3*(n-2)**(length-1), 3*comb(n-1,length-1), math.perm(n,length), 3*math.perm(n-1,length-1)], 'Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.'),
                 ['constrained positions', 'multiplication principle', 'permutations'], integer=True)

    @family('multiset-separation')
    def multiset(v):
        n = 4+v%5
        ans = math.factorial(n)*comb(n+1,2)
        return S(f'A row contains two identical red folders and {n} distinct numbered folders. All folders are used. Calculate the number of distinct rows in which the red folders are not adjacent.', ans,
                 [f'Arrange the numbered folders in {n}! ways.', f'The numbered row creates {n+1} gaps, including the two ends. Choose two different gaps for the identical red folders.', f'The count is {n}!×choose({n+1},2)={ans}. No factor of 2 is needed for identical red folders.'],
                 dict(kind='multiset-separation', n=n),
                 W([2*ans, math.factorial(n+2)//2, math.factorial(n+1), math.factorial(n)*comb(n-1,2), math.factorial(n)*comb(n+2,2)], 'Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.'),
                 ['identical objects', 'gap method', 'nonadjacency'], integer=True)

    @family('committee-conditioned-membership')
    def committee(v):
        s = 4+v%4
        j = 4+(v//4)%4
        ans = comb(s-1,1)*comb(j,2)/comb(s+j-1,3)
        return S(f'A committee of four is selected uniformly from {s} senior and {j} junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees.', ans,
                 [f'After including the specified senior, choose three people from the remaining {s+j-1}.', f'Exactly two seniors overall means one additional senior and two juniors: choose({s-1},1)choose({j},2).', f'Divide by choose({s+j-1},3) to obtain {f(ans)}.'],
                 dict(kind='committee-condition', S=s, J=j),
                 [(comb(s,2)*comb(j,2)/comb(s+j,4), 'This is the unconditional probability before learning that a specific senior is included.'), (comb(s-1,2)*j/comb(s+j-1,3), 'This adds two more seniors, giving three seniors overall.'), ((s-1)/(s+j-1), 'This considers only one additional member and omits the other two selections.'), (comb(j,3)/comb(s+j-1,3), 'This gives exactly one senior overall.'), (1-comb(s-1,1)*comb(j,2)/comb(s+j-1,3), 'This gives the complement of the required composition.')],
                 ['conditional sample space', 'combinations', 'fixed membership'], True)

    @family('unequal-reliability')
    def reliability(v):
        p = [.6+.025*(v%5), .7+.025*((v//5)%4), .8+.025*((v//20)%4)]
        den = sum(math.prod(p[i] if mask>>i&1 else 1-p[i] for i in range(3)) for mask in range(8) if mask.bit_count()>=2)
        num = p[0]*(1-(1-p[1])*(1-p[2]))
        ans = num/den
        return S(f'Three components operate independently, with operating probabilities {f(p[0])}, {f(p[1])}, and {f(p[2])}. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates.', ans,
                 [f'System operation includes exactly two operating components and all three. Its probability is {f(den)}.', f'Component 1 and the system both operate if component 1 operates and at least one of the other two does: {f(p[0])}[1-(1-{f(p[1])})(1-{f(p[2])})]={f(num)}.', f'The requested ratio is {f(num)}/{f(den)}={f(ans)}.'],
                 dict(kind='reliability-condition', rates=p),
                 [(p[0], 'Component independence does not mean component 1 is independent of system operation.'), (num, 'This is the joint probability before conditioning.'), (p[0]*p[1]*p[2]/den, 'This unnecessarily requires all three components to operate.'), (1-ans, 'This gives component 1 failure conditional on system operation.'), (den, 'This gives the probability that the system operates.')],
                 ['independent unequal trials', 'at-least-two event', 'conditional reliability'], True)

    @family('three-class-survival')
    def classes(v):
        w = [.2+.025*(v%5), .3+.025*((v//5)%4)]
        w.append(1-sum(w))
        rates = [.1+.02*((v//20)%3), .2+.02*((v//60)%3), .4]
        den = sum(a*(1-b) for a,b in zip(w,rates))
        ans = w[1]*(1-rates[1])/den
        return S(f'A portfolio consists of classes A, B, C in proportions {f(w[0])}, {f(w[1])}, {f(w[2])}. Their annual claim probabilities are {f(rates[0])}, {f(rates[1])}, {f(rates[2])}, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B.', ans,
                 ['Use no-claim probabilities within each class, the complements of the supplied claim probabilities.', f'Total no-claim probability is {f(w[0])}({f(1-rates[0])})+{f(w[1])}({f(1-rates[1])})+{f(w[2])}({f(1-rates[2])})={f(den)}.', f'The class-B and no-claim joint probability is {f(w[1]*(1-rates[1]))}; its ratio to {f(den)} is {f(ans)}.'],
                 dict(kind='class-survival', weights=w, rates=rates),
                 [(w[1], 'This is the prior class share.'), (w[1]*(1-rates[1]), 'This is a joint probability; normalize by total no-claim probability.'), (1-rates[1], 'This reverses the direction of the condition.'), (w[1]*rates[1]/sum(a*b for a,b in zip(w,rates)), 'This conditions on a claim rather than on no claim.'), (1-ans, 'This combines classes A and C instead of class B.')],
                 ['exhaustive partition', 'total probability', 'Bayes with a complement'], True)

    @family('bayes-sample-count')
    def bayes_sample(v):
        w = .2+.05*(v%5)
        p = [.35+.05*((v//5)%3), .1+.025*((v//15)%3)]
        n = 5+(v//45)%3
        k = 2
        likelihood = [comb(n,k)*x**k*(1-x)**(n-k) for x in p]
        ans = w*likelihood[0]/(w*likelihood[0]+(1-w)*likelihood[1])
        return S(f'A supplier shipment comes from plant A with probability {f(w)}, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are {f(p[0])} at A and {f(p[1])} at B. Exactly two of {n} inspected items are defective. Calculate the probability the shipment came from plant A.', ans,
                 [f'The likelihoods of exactly two defects are choose({n},2)p²(1-p)^({n-2}), giving {f(likelihood[0])} for A and {f(likelihood[1])} for B.', f'Weight the likelihoods by plant shares {f(w)} and {f(1-w)}.', f'Bayes gives {f(w*likelihood[0])}/({f(w*likelihood[0])}+{f((1-w)*likelihood[1])})={f(ans)}.'],
                 dict(kind='bayes-binomial', w=w, rates=p, n=n, k=k),
                 [(w, 'This is the prior before observing the sample.'), (w*likelihood[0], 'This omits the total likelihood in the denominator.'), (w*p[0]/(w*p[0]+(1-w)*p[1]), 'This updates using one defective item rather than the entire sample.'), (w*p[0]**2/(w*p[0]**2+(1-w)*p[1]**2), 'This omits the observed nondefective items.'), (1-ans, 'This is the posterior probability of plant B.')],
                 ['conditional binomial likelihood', 'Bayes over sample evidence'], True)

    @family('coverage-renewal-mixture')
    def renewal(v):
        a = .5+.025*(v%5)
        b = .4+.025*((v//5)%4)
        both = .2+.025*((v//20)%4)
        r = [.55, .7, .9]
        ans = (a-both)*r[0]+(b-both)*r[1]+both*r[2]
        return S(f'An insurer records P(auto coverage)={f(a)}, P(home coverage)={f(b)}, and P(both)={f(both)}. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage.', ans,
                 [f'The disjoint class shares are auto-only {f(a-both)}, home-only {f(b-both)}, both {f(both)}, and neither {f(1-a-b+both)}.', 'Multiply each class share by its corresponding renewal probability. The neither class contributes zero.', f'Total probability gives {f(a-both)}(0.55)+{f(b-both)}(0.70)+{f(both)}(0.90)={f(ans)}.'],
                 dict(kind='renewal-mixture', a=a, b=b, both=both, rates=r),
                 [(a*r[0]+b*r[1], 'This double counts customers with both and applies the wrong renewal rate to them.'), ((a-both)*r[0]+(b-both)*r[1], 'This omits customers with both coverages.'), (ans/(a+b-both), 'This conditions on having coverage; the question samples from all customers.'), (both*r[2], 'This includes only the both-coverage class.'), ((a-both)*r[0]+(b-both)*r[1]+both*r[0]*r[1], 'A renewal rate for the both class is supplied; independence between its renewals was not given.')],
                 ['overlapping coverages to partition', 'total probability'], True)

    @family('finite-payment-moments')
    def finite(v):
        n = 4+v%4
        scale = 50+25*((v//4)%5)
        d = 1+(v//20)%2
        probs = [(k+1)/(n*(n+1)/2) for k in range(n)]
        vals = [scale*max(k-d,0) for k in range(n)]
        mean = sum(p*y for p,y in zip(probs,vals))
        second = sum(p*y*y for p,y in zip(probs,vals))
        ans = mean
        return S(f'The claim count N takes values 0 through {n-1}, with P(N=k)=c(k+1). A contract pays {scale} for each claim in excess of the first {d} claims. Calculate expected payment per contract.', ans,
                 [f'Normalize the probabilities: c[1+2+⋯+{n}]=1, giving c=2/({n}×{n+1}).', f'The payment at count k is {scale} max(k-{d},0). Its possible values are '+', '.join(map(str,vals))+'.', f'Weight each payment by c(k+1); the expected payment is {f(mean)}.'],
                 dict(kind='finite-payment', n=n, scale=scale, d=d),
                 [(sum(vals)/n, 'The supported counts are not equally likely.'), (scale*max(sum(k*p for k,p in enumerate(probs))-d,0), 'A positive-part function cannot be moved outside an expectation.'), (scale*sum(k*p for k,p in enumerate(probs)), 'This ignores the count deductible.'), (second, 'This is the second raw moment rather than the mean.'), (mean/sum(p for k,p in enumerate(probs) if k>d), 'This conditions on a positive payment, whereas the question is per contract.')],
                 ['PMF normalization', 'discrete payment transformation', 'expectation'])

    @family('triangular-tail-infer')
    def triangular(v):
        b = 8+2*(v%6)
        t = b/4
        u = b*.75
        ans = ((b-u)/(b-t))**2
        return S(f'A loss X has density c({b}-x) for 0<x<{b}, and zero otherwise. The constant c is unknown. A loss has already exceeded {f(t)}. Calculate the probability that it exceeds {f(u)}.', ans,
                 [f'Normalization gives c=2/{b*b}, since the integral of {b}-x over the support is {b*b}/2.', f'The survival function is P(X>x)=(({b}-x)/{b})².', f'Divide survival at {f(u)} by survival at {f(t)}: [({b}-{f(u)})/({b}-{f(t)})]²={f(ans)}.'],
                 dict(kind='triangular-tail', B=b, t=t, u=u),
                 [(((b-u)/b)**2, 'This is the unconditional tail at the higher threshold.'), ((b-u)/(b-t), 'This uses a uniform density instead of the supplied decreasing density.'), (1-ans, 'This is the probability of not exceeding the higher threshold, conditional on exceeding the lower one.'), (((b-t)/b)**2, 'This is only the probability of the condition.'), ((u*u-t*t)/(b*b), 'This integrates an increasing triangular density over an interval instead of the required tail ratio.')],
                 ['density normalization', 'survival integration', 'conditional tail'], True)

    @family('mixed-cdf-mean')
    def mixed_mean(v, target='mean'):
        p = .1+.025*(v%7)
        b = 4+(v//7)%6
        power = 2+(v//42)%3
        mean = (1-p)*b*power/(power+1)
        if target == 'cv':
            second = (1-p)*b*b*power/(power+2)
            sd = sqrt(second-mean*mean)
            return S(f'A loss X is zero with probability {f(p)}. Conditional on a positive loss, its CDF is (x/{b})^{power} on (0,{b}). Calculate the coefficient of variation of X, including zero losses.', sd/mean,
                     [f'Include the positive-loss probability in both raw moments: E[X]={f(mean)} and E[X²]={f(second)}.', f'Then SD(X)=√(E[X²]-(E[X])²)={f(sd)}.', f'CV(X)=SD(X)/E[X]={f(sd/mean)}.'],
                     dict(kind='mixed-power', p=p, B=b, power=power, target='cv'),
                     W([sqrt(power/(power+2)-(power/(power+1))**2)/(power/(power+1)), sd/mean**2, (second-mean*mean)/mean, mean/sd, sd], 'Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.'),
                     ['mixed raw moments', 'standard deviation', 'coefficient of variation'])
        return S(f'A nonnegative loss X has CDF F(x)=0 for x<0, F(x)={f(p)}+(1-{f(p)})(x/{b})^{power} for 0≤x<{b}, and F(x)=1 for x≥{b}. Calculate E[X].', mean,
                 [f'The jump at zero is {f(p)}. It contributes zero to E[X].', f'On (0,{b}), the density is (1-{f(p)}){power}x^{power-1}/{b}^{power}.', f'Integrating x times this density gives (1-{f(p)}){b}×{power}/({power}+1)={f(mean)}.'],
                 dict(kind='mixed-power', p=p, B=b, power=power),
                 [(b*power/(power+1), 'This is the mean conditional on X>0.'), ((1-p)*b/2, 'This replaces the power CDF with a uniform distribution.'), ((1-p)*b**2*power/(power+2), 'This is the second raw moment.'), (p*b+(1-p)*b*power/(power+1), 'The point mass is at zero, not at the upper endpoint.'), ((1-p)*b/(power+1), 'This confuses the power-distribution mean with its complementary fraction of the endpoint.')],
                 ['CDF jump', 'continuous component', 'mixed expectation'])

    @family('mixed-power-cv')
    def mixed_cv(v):
        return mixed_mean(v, 'cv')

    @family('uniform-lattice-condition')
    def lattice(v):
        n = 8+v%8
        lo = 2+(v//8)%4
        values = list(range(lo,n+1))
        even = [x for x in values if x%2==0]
        ans = len(even)/len(values)
        return S(f'An integer-valued random variable X is uniform on 1 through {n}. Given that X≥{lo}, calculate the probability that X is even.', ans,
                 [f'The condition retains the integers {lo}, {lo+1}, …, {n}: {len(values)} equally likely values.', f'Exactly {len(even)} retained integers are even. The endpoints must be counted, not approximated by half the interval.', f'The conditional probability is {len(even)}/{len(values)}={f(ans)}.'],
                 dict(kind='uniform-lattice', n=n, lower=lo),
                 [(len(even)/n, 'This is the joint probability and has not been renormalized.'), ((n//2)/n, 'This is the unconditional even probability.'), (.5, 'Half is not guaranteed when a finite retained set has odd size.'), ((len(values)-len(even))/len(values), 'This counts the odd integers.'), (len(even)/(n-lo), 'The inclusive lower endpoint contributes one more retained integer.')],
                 ['discrete endpoints', 'conditional uniform support'], True)

    @family('binomial-odds-infer')
    def binomial_odds(v):
        n = 6+v%5
        p = .15+.025*((v//5)%7)
        ratio = (n-1)*p/(2*(1-p))
        ans = 1-sum(comb(n,k)*p**k*(1-p)**(n-k) for k in range(3))
        return S(f'N is the number of claims among {n} independent policies with the same unknown claim probability p. The ratio P(N=2)/P(N=1) is specified exactly as {n-1}×{f(p)}/[2×{f(1-p)}]. Calculate P(N≥3).', ans,
                 [f'The binomial ratio simplifies to ({n-1}/2)p/(1-p). Equating it to the supplied ratio gives p={f(p)}.', 'At least three is the complement of zero, one, and two claims.', f'Use 1-Σ from k=0 to 2 of choose({n},k)p^k(1-p)^({n}-k), giving {f(ans)}.'],
                 dict(kind='binomial-odds', n=n, p=p, ratio=ratio),
                 [(1-(1-p)**n-n*p*(1-p)**(n-1), 'This removes only zero and one, giving at least two.'), (comb(n,3)*p**3*(1-p)**(n-3), 'This gives exactly three, not at least three.'), (1-(1-p)**n, 'This gives at least one.'), (p**3, 'This requires three particular policies to claim and does not count the other possible outcomes.'), (1-ans, 'This gives at most two.')],
                 ['infer a binomial parameter', 'complement of a count tail'], True)

    @family('uniform-infer-support')
    def uniform_support(v):
        n = 7+v%9
        var = (n*n-1)/12
        threshold = 3+(v//9)%3
        ans = (n+threshold)/2
        return S(f'X is uniform on the integers 1 through an unknown n. Its variance is specified exactly as {n*n-1}/12. Calculate E[X given X≥{threshold}].', ans,
                 [f'For this distribution Var(X)=(n²-1)/12, so n²={n*n} and n={n}.', f'The conditional distribution is uniform on the integers {threshold} through {n}.', f'Its mean is the midpoint ({threshold}+{n})/2={f(ans)}.'],
                 dict(kind='uniform-support-infer', n=n, threshold=threshold, variance=var),
                 W([(n+1)/2, (n+threshold-1)/2, n-threshold+1, (n-threshold)/2, (n+threshold)/2*(n-threshold+1)/n], 'Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean.'),
                 ['discrete-uniform variance', 'infer support size', 'conditional mean'])

    @family('uniform-lattice-square-moment')
    def uniform_square(v):
        n = 5+v%8
        scale = 2+(v//8)%5
        shift = 3+(v//40)%5
        ans = scale*(n+1)*(2*n+1)/6+shift
        return S(f'X is uniform on the integers 1 through {n}. A cost is Y={scale}X²+{shift}. Calculate E[Y].', ans,
                 [f'Each of the {n} values has probability 1/{n}.', f'E[X²]=(1²+2²+⋯+{n}²)/{n}=({n}+1)(2×{n}+1)/6.', f'E[Y]={scale}E[X²]+{shift}={f(ans)}.'],
                 dict(kind='uniform-square', n=n, scale=scale, shift=shift),
                 W([scale*((n+1)/2)**2+shift, scale*(n+1)*(2*n+1)/6, scale*(n*n-1)/12+shift, scale*(n+1)/2+shift, scale*n*(n+1)*(2*n+1)/6+shift], 'Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean.'),
                 ['discrete-uniform support', 'second moment', 'nonlinear cost'])

    @family('geometric-capped-count')
    def geom_cap(v):
        p = .2+.025*(v%7)
        h = 4+(v//7)%5
        ans = (1-(1-p)**h)/p
        return S(f'Independent daily inspections detect a defect with probability {f(p)}. Inspections stop on the first detection or after {h} inspections, whichever occurs first. Calculate the expected number of inspections performed.', ans,
                 ['Let T be the first successful inspection, so the number performed is min(T,h).', f'Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,{h})]=Σ from j=1 to {h} of (1-{f(p)})^(j-1).', f'The finite geometric sum is [1-(1-{f(p)})^{h}]/{f(p)}={f(ans)}.'],
                 dict(kind='geometric-cap', p=p, horizon=h),
                 [(1/p, 'This is the uncapped waiting-time mean.'), (ans-1, 'This counts only inspections after the first one.'), (h*(1-p)**h, 'This counts only the all-failure outcome and misses earlier stops.'), (sum(k*p*(1-p)**(k-1) for k in range(1,h+1)), 'This omits the censored outcome where no detection occurs by the limit.'), (h, 'This treats every inspection as performed regardless of earlier detection.')],
                 ['geometric waiting time', 'censoring', 'tail-sum expectation'])

    @family('negative-binomial-first-failure')
    def neg_failure(v):
        r = 3+(v%2)
        t = r+3+(v//2)%4
        p = .3+.025*((v//8)%6)
        ans = comb(t-2,r-1)*p**r*(1-p)**(t-r-1)
        return S(f'Independent trials succeed with probability {f(p)}. T is the trial number of the {r}th success. Given that trial 1 failed, calculate P(T={t}).', ans,
                 [f'Trial {t} must succeed, and among trials 2 through {t-1} there must be exactly {r-1} successes.', f'The first failure is given, so it contributes no probability factor after conditioning. There are choose({t-2},{r-1}) admissible success-position sets.', f'The conditional probability is choose({t-2},{r-1})({f(p)})^{r}({f(1-p)})^{t-r-1}={f(ans)}.'],
                 dict(kind='negative-first-failure', r=r, t=t, p=p),
                 [(comb(t-1,r-1)*p**r*(1-p)**(t-r), 'This is the unconditional negative-binomial probability.'), (ans*(1-p), 'This retains the factor for the first failure even though that failure is already given.'), (comb(t-2,r)*p**r*(1-p)**(t-r-2), 'This allows all required successes before the final trial.'), (comb(t-2,r-1)*p**(r-1)*(1-p)**(t-r-1), 'This omits the required success on the final trial.'), (p**r*(1-p)**(t-r-1), 'This counts only one success-position arrangement.')],
                 ['negative-binomial event', 'conditional first trial', 'success positions'], True)

    @family('geometric-tail-infer')
    def geom_infer(v):
        p = .2+.025*(v%8)
        a = 3+(v//8)%4
        remaining = 2+(v//32)%4
        tail = (1-p)**a
        ans = 1-(1-p)**remaining
        return S(f'Independent daily trials succeed with probability p. T is the day of the first success. You are given P(T>{a})=({f(1-p)})^{a}. Given no success on the first {a} days, calculate the probability that the first success occurs during the next {remaining} days.', ans,
                 [f'P(T>{a})=(1-p)^{a}; its positive root gives 1-p={f(1-p)} and p={f(p)}.', 'After the known failures, the remaining trials still have the same success probability.', f'The probability of at least one success in the next {remaining} trials is 1-(1-{f(p)})^{remaining}={f(ans)}.'],
                 dict(kind='geometric-tail-infer', p=p, elapsed=a, remaining=remaining, tail=tail),
                 [((1-p)**a*ans, 'This is the joint probability before conditioning on the known failures.'), ((1-p)**remaining, 'This gives no success during the next interval.'), (p, 'This considers only the next single trial.'), (p*(1-p)**(remaining-1), 'This gives the first success exactly on the last day of the new interval.'), (1-(1-p)**(a+remaining), 'This includes successes in the elapsed days, contrary to the given history.')],
                 ['infer a geometric parameter', 'memorylessness', 'interval complement'], True)

    @family('negative-binomial-progress-mean')
    def neg_progress(v):
        p = .25+.025*(v%8)
        r = 4+(v//8)%4
        elapsed = 5+(v//32)%4
        completed = 2
        ans = elapsed+(r-completed)/p
        return S(f'Independent trials succeed with probability {f(p)}. Trials stop at the {r}th success. Exactly two successes have occurred in the first {elapsed} trials. Calculate the expected total number of trials until stopping, conditional on this information.', ans,
                 [f'The known history leaves {r-2} successes still required.', f'The future waiting time is negative binomial with mean ({r}-2)/{f(p)}={f((r-2)/p)}.', f'Add the already completed trials: {elapsed}+{f((r-2)/p)}={f(ans)}.'],
                 dict(kind='negative-progress', p=p, r=r, elapsed=elapsed, completed=completed),
                 W([r/p, (r-2)/p, elapsed+r/p, elapsed+(r-2)*(1-p)/p, elapsed+(r-2)], 'Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials.'),
                 ['conditional progress', 'negative-binomial mean', 'total versus remaining trials'])

    @family('geometric-late-mean')
    def geom_late(v):
        p = .2+.025*(v%8)
        elapsed = 4+(v//8)%6
        ans = elapsed+1/p
        return S(f'Independent inspections find a fault with probability {f(p)}. T is the inspection number of the first fault. Given no fault in the first {elapsed} inspections, calculate E[T].', ans,
                 ['Future inspections retain their independent success probabilities.', f'The remaining waiting time is geometric with mean 1/{f(p)}={f(1/p)}.', f'Include the known inspections: E[T given T>{elapsed}]={elapsed}+{f(1/p)}={f(ans)}.'],
                 dict(kind='geometric-late', p=p, elapsed=elapsed),
                 W([1/p, elapsed+(1-p)/p, elapsed+1, (elapsed+1)/p, (1/p)/(1-p)**elapsed], 'Use memorylessness for future trials, count the successful trial, and add the elapsed trials.'),
                 ['conditional geometric waiting time', 'total versus remaining count'])

    @family('gamma-aggregate-tail')
    def gamma_aggregate(v):
        shape = 2+v%2
        scale = 2+(v//2)%4
        count = 2+(v//8)%2
        t = scale*(shape*count+1)
        alpha = shape*count
        ans = exp(-t/scale)*sum((t/scale)**k/math.factorial(k) for k in range(alpha))
        return S(f'{count} independent waiting times each have a gamma distribution with shape {shape} and scale {scale}. Calculate the probability that their sum exceeds {t}.', ans,
                 [f'Independent gamma variables with the same scale add their shapes. The total has shape {alpha} and scale {scale}.', f'For this integer shape, survival at {t} is exp(-{t}/{scale}) times Σ from k=0 to {alpha-1} of ({t}/{scale})^k/k!.', f'The probability is {f(ans)}.'],
                 dict(kind='gamma-aggregate', shape=shape, scale=scale, count=count, threshold=t),
                 [(exp(-t/scale), 'This treats the multistage sum as a single exponential.'), (1-ans, 'This is the lower tail of the sum.'), (exp(-t/(count*scale))*sum((t/(count*scale))**k/math.factorial(k) for k in range(shape)), 'For independent sums with equal scales, add the shapes rather than the scales.'), (exp(-t/scale)*sum((t/scale)**k/math.factorial(k) for k in range(shape)), 'This uses the shape of one waiting time only.'), (exp(-t/scale)*sum((t/scale)**k/math.factorial(k) for k in range(alpha-1)), 'The final term for the integer-shape survival is omitted.')],
                 ['independent gamma sum', 'shape and scale', 'integer-shape tail'], True)

    @family('gamma-cv-infer')
    def gamma_cv(v):
        shape = 2+v%6
        scale = 2+(v//6)%6
        ans = shape*scale*scale
        return S(f'A gamma loss has mean {shape*scale} and squared coefficient of variation 1/{shape}. Calculate its variance.', ans,
                 ['For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV.', f'The mean αθ={shape*scale} gives α={shape} and θ={scale}.', f'Var(X)=αθ²={shape}×{scale}²={ans}. Equivalently, Var(X)=CV²(E[X])².'],
                 dict(kind='gamma-cv', shape=shape, scale=scale),
                 W([(shape*scale)**2, scale*scale, shape*scale, sqrt(ans), ans/shape], 'Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter.'),
                 ['gamma moments', 'coefficient of variation', 'parameter inference'])

    @family('hypergeometric-followup')
    def hyper_followup(v):
        n = 13+v%6
        k = 4+(v//6)%4
        removed = 2
        ans = comb(k,1)*comb(n-k-removed,2)/comb(n-removed,3)
        return S(f'A lot contains {n} parts, of which {k} are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective.', ans,
                 [f'The remaining lot has {n-2} parts: {k} defective and {n-k-2} sound.', f'Choose one defective and two sound parts in choose({k},1)choose({n-k-2},2) ways.', f'Divide by choose({n-2},3) to obtain {f(ans)}.'],
                 dict(kind='hyper-followup', N=n, K=k, removed=removed, sample=3),
                 [(comb(k,1)*comb(n-k,2)/comb(n,3), 'This samples from the original lot and ignores the observed removals.'), (3*(k/(n-2))*((n-k-2)/(n-2))**2, 'This treats the follow-up sample as sampling with replacement.'), (k/(n-2), 'This is the probability for only one new part.'), (comb(k,2)*(n-k-2)/comb(n-2,3), 'This gives exactly two defective parts.'), (1-comb(n-k-2,3)/comb(n-2,3), 'This gives at least one, not exactly one.')],
                 ['update a finite population', 'hypergeometric sample'], True)

    @family('poisson-ratio-aggregate')
    def poisson_aggregate(v):
        lam = .4+.1*(v%9)
        periods = 2+(v//9)%3
        count = 3+(v//27)%3
        rate = lam*periods
        ans = exp(-rate)*rate**count/math.factorial(count)
        return S(f'Weekly claim counts are independent and identically Poisson distributed. For one week, P(N=1)={f(lam)}P(N=0). Calculate the probability of exactly {count} claims over {periods} weeks.', ans,
                 [f'For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is {f(lam)}.', f'The independent {periods}-week total is Poisson with mean {f(rate)}.', f'Its probability at {count} is exp(-{f(rate)})({f(rate)})^{count}/{count}!={f(ans)}.'],
                 dict(kind='poisson-aggregate', lam=lam, periods=periods, count=count),
                 [(exp(-lam)*lam**count/math.factorial(count), 'This uses a one-week mean.'), ((exp(-lam)*lam**count/math.factorial(count))**periods, 'This requires that count in every week, rather than in the entire period.'), (exp(-rate), 'This gives zero claims.'), (1-sum(exp(-rate)*rate**k/math.factorial(k) for k in range(count)), 'This gives at least the requested count.'), (exp(-rate)*rate**(count-1)/math.factorial(count-1), 'This evaluates the total at one fewer claim.')],
                 ['infer a Poisson mean', 'independent sums', 'exact count'], True)

    @family('uniform-payment-quantile')
    def payment_quantile(v):
        b = 1600+200*(v%6)
        d = b*(.2+.05*((v//6)%4))
        share = .6+.05*((v//24)%4)
        u = .75
        ans = share*(u*b-d)
        return S(f'Loss X is uniform on (0,{b}). The insurer pays Y={f(share)}max(X-{f(d)},0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments.', ans,
                 [f'Payment has mass {f(d/b)} at zero. Since this is below 0.75, the requested percentile is positive.', f'For positive y, P(Y≤y)=({f(d)}+y/{f(share)})/{b}.', f'Set this to 0.75 and solve y={f(share)}(0.75×{b}-{f(d)})={f(ans)}.'],
                 dict(kind='uniform-payment-quantile', B=b, d=d, share=share, u=u),
                 [(share*.75*(b-d), 'This gives the percentile conditional on positive payment.'), (.75*b-d, 'This omits the insurer share.'), (share*.75*b, 'This omits the deductible.'), (share*((b-d)/2), 'This is the positive-payment mean rather than the per-loss 75th percentile.'), (share*(.75*b)-d, 'This applies coinsurance to the loss before subtracting the full deductible.')],
                 ['zero-payment mass', 'payment CDF', 'percentile inversion'])

    @family('exponential-minimum-lifetime')
    def exp_min(v):
        means = [3+v%5, 5+(v//5)%5]
        t = 2+(v//25)%4
        ans = exp(-t*(1/means[0]+1/means[1]))
        return S(f'Two independent components have exponential lifetimes with means {means[0]} and {means[1]} years. A device fails when either component fails. Given that the device has survived {t} years, calculate the probability it survives at least another {t} years.', ans,
                 ['For independent lifetimes, device survival is the product of both component survival functions.', f'The minimum lifetime is exponential with rate 1/{means[0]}+1/{means[1]}. It is memoryless.', f'Conditional survival for another {t} years is exp[-{t}(1/{means[0]}+1/{means[1]})]={f(ans)}.'],
                 dict(kind='exponential-minimum', means=means, t=t),
                 [(ans**2, 'This is unconditional survival for twice the elapsed interval.'), (exp(-t/(means[0]+means[1])), 'Means do not add for a minimum lifetime; failure rates add.'), (1-ans, 'This gives failure during the additional interval.'), (exp(-t/means[0]), 'Both components must survive, not just component 1.'), (exp(-t/means[1]), 'Both components must survive, not just component 2.')],
                 ['minimum of independent lifetimes', 'rate versus mean', 'memorylessness'], True)

    @family('gamma-truncated-mean')
    def gamma_mean(v):
        shape = 2+v%3
        scale = 2+(v//3)%4
        t = scale*(1+(v//12)%4)
        survival = lambda a: exp(-t/scale)*sum((t/scale)**j/math.factorial(j) for j in range(a))
        ans = shape*scale*survival(shape+1)/survival(shape)
        return S(f'T is the sum of {shape} independent exponential lifetimes, each with mean {scale}. A lifetime is recorded only if T>{t}. Calculate the mean of T among recorded lifetimes.', ans,
                 [f'T has a gamma density with shape {shape} and scale {scale}. Its recording probability is {f(survival(shape))}.', f'Multiplying its density by t gives {shape*scale} times the gamma density with shape {shape+1} and the same scale. Thus the restricted first moment is {f(shape*scale*survival(shape+1))}.', f'Divide by the recording probability to obtain {f(ans)}. A multistage lifetime does not have exponential memorylessness.'],
                 dict(kind='gamma-truncated-mean', shape=shape, scale=scale, threshold=t),
                 [(shape*scale, 'This is the unconditional mean.'), (t+shape*scale, 'This applies exponential memorylessness to a gamma variable with shape greater than one.'), (shape*scale*survival(shape+1), 'This is a restricted first moment before conditioning.'), (shape*scale/survival(shape), 'The discarded lower region contributes a nonzero first moment; the numerator must be restricted too.'), (t+scale, 'This treats the entire multistage lifetime as one remaining exponential stage.')],
                 ['gamma from exponential sums', 'truncated moment', 'conditional normalization'])

    @family('beta-mode-mean-infer')
    def beta_mode(v):
        a = 2+v%4
        b = a+2+(v//4)%3
        variance = a*b/((a+b)**2*(a+b+1))
        return S(f'A damage fraction X follows a beta distribution with both shape parameters greater than 1. Its mean is {a}/{a+b}, and its mode is {a-1}/{a+b-2}. Calculate Var(X).', variance,
                 [f'Write s=α+β. The mean gives α=({a}/{a+b})s, while the mode gives (α-1)/(s-2)=({a-1}/{a+b-2}).', f'Solving these two equations yields α={a} and β={b}.', f'Beta variance is αβ/[s²(s+1)]={f(variance)}.'],
                 dict(kind='beta-mode-infer', a=a, b=b),
                 [(a*b/(a+b)**2, 'This omits the concentration factor s+1 in the variance.'), (a*(a+1)/((a+b)*(a+b+1)), 'This is the second raw moment.'), (sqrt(variance), 'This is the standard deviation.'), ((a/(a+b))**2, 'This is the squared mean.'), (variance*(a+b)/(a+b-2), 'The mode denominator s-2 does not replace the variance concentration s+1.')],
                 ['infer beta parameters', 'mode versus mean', 'variance'])

    @family('normal-two-quantiles')
    def normal_two(v):
        mu = 100+10*(v%6)
        sd = 10+5*((v//6)%5)
        lower, upper = mu-sd, mu+2*sd
        threshold = mu+sd
        ans = 1-phi(1)
        return S(f'A measurement X is normally distributed. Its 15.8655th percentile is {lower} and its 97.7250th percentile is {upper}. Use standard-normal percentile values -1 and 2, respectively. Calculate P(X>{threshold}).', ans,
                 [f'The percentile equations are μ-σ={lower} and μ+2σ={upper}. Subtract them to get 3σ={upper-lower}, so σ={sd}.', f'Then μ={mu}, and the requested threshold standardizes to ({threshold}-{mu})/{sd}=1.', f'The upper standard-normal tail at 1 is {f(ans)}.'],
                 dict(kind='normal-two-quantiles', mu=mu, sd=sd, lower=lower, upper=upper, threshold=threshold),
                 [(phi(1), 'This is the lower tail at the threshold.'), (1-phi((threshold-mu)/(sd*sd)), 'Standardize using SD, not variance.'), (1-phi((threshold-(lower+upper)/2)/sd), 'The midpoint of asymmetrically placed percentiles is not the mean.'), (1-phi((threshold-mu)/(upper-lower)), 'The percentile separation is three SDs, not one.'), (1-phi(2), 'This uses the supplied upper percentile instead of the requested threshold.')],
                 ['solve normal location and scale', 'standardization', 'upper tail'], True)

    @family('poisson-truncated-mean')
    def poisson_truncated(v, target='mean'):
        lam = 1+.25*(v%8)
        k = 3+(v//8)%4
        masses = [exp(-lam)*lam**n/math.factorial(n) for n in range(k+1)]
        den = sum(masses)
        num = sum(n*p for n,p in enumerate(masses))
        ans = num/den
        if target == 'variance':
            second = sum(n*n*p for n,p in enumerate(masses))/den
            variance = second-ans*ans
            return S(f'N is Poisson with mean {f(lam)}. Only policies with N≤{k} are retained. Calculate the conditional variance of N among retained policies.', variance,
                     [f'The retained probability is {f(den)}. Divide the restricted first and second raw-moment sums by this probability.', f'The conditional moments are E[N]={f(ans)} and E[N²]={f(second)}.', f'The conditional variance is {f(second)}-({f(ans)})²={f(variance)}.'],
                     dict(kind='poisson-truncated', lam=lam, upper=k, target='variance'),
                     W([lam, second, lam/den, variance*den, sqrt(variance)], 'Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.'),
                     ['truncated Poisson PMF', 'conditional raw moments', 'conditional variance'])
        return S(f'N is Poisson with mean {f(lam)}. Only policies with at most {k} claims are retained in a study. Calculate the mean claim count among retained policies.', ans,
                 [f'The retained probability is Σ from n=0 to {k} of exp(-{f(lam)})({f(lam)})^n/n!={f(den)}.', f'The retained first-moment sum is Σ nP(N=n) over those same counts, equal to {f(num)}.', f'Normalize to the study population: E[N given N≤{k}]={f(num)}/{f(den)}={f(ans)}.'],
                 dict(kind='poisson-truncated', lam=lam, upper=k),
                 [(lam, 'This is the mean of all policies before truncation.'), (num, 'This is the restricted first moment before normalization.'), (lam/den, 'The excluded high-count outcomes contribute to the mean and must be removed from the numerator.'), (k/2, 'The retained counts are not uniformly distributed.'), (num/(den-masses[0]), 'This also excludes zero-claim policies, which the study retains.')],
                 ['truncated Poisson support', 'conditional first moment'])

    @family('poisson-truncated-variance')
    def poisson_truncated_var(v):
        return poisson_truncated(v, 'variance')

    @family('bayes-predictive-variance')
    def predictive_var(v):
        w = .25+.05*(v%5)
        rates = [1.5+.25*((v//5)%5), .25+.05*((v//25)%5)]
        posterior = w*exp(-rates[0])/(w*exp(-rates[0])+(1-w)*exp(-rates[1]))
        mean = posterior*rates[0]+(1-posterior)*rates[1]
        between = posterior*(1-posterior)*(rates[0]-rates[1])**2
        variance = mean+between
        return S(f'A policy has a permanent class H with probability {f(w)}, otherwise class L. Conditional on class, annual counts are independent Poisson variables with means {f(rates[0])} and {f(rates[1])}, respectively. Given no claims in year 1, calculate the conditional variance of the year-2 count.', variance,
                 [f'No-claim likelihoods update the H share to {f(posterior)} by Bayes.', f'The posterior mean count, also the mean within-class Poisson variance, is {f(mean)}.', f'Add posterior variance of the class rates {f(between)}: Var(N₂ given N₁=0)={f(variance)}.'],
                 dict(kind='predictive-variance', w=w, rates=rates),
                 W([mean, between, w*rates[0]+(1-w)*rates[1]+w*(1-w)*(rates[0]-rates[1])**2, variance+mean*mean, sqrt(variance)], 'Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.'),
                 ['Bayes from a count observation', 'conditional independence', 'conditional total variance'])

    @family('triangular-conditional-variance')
    def triangular_var(v, target='variance'):
        b = 6+2*(v%6)
        t = b*(.25+.05*((v//6)%5))
        # X | X>t is t plus a decreasing triangular variable on (0,b-t).
        mean = t+(b-t)/3
        ans = (b-t)**2/18
        if target == 'sd':
            return S(f'X has density 2({b}-x)/{b*b} on (0,{b}), and zero elsewhere. Given X>{f(t)}, calculate its conditional standard deviation.', sqrt(ans),
                     [f'Normalize the density on ({f(t)},{b}). After subtracting {f(t)}, the conditional variable is decreasing triangular on (0,{f(b-t)}).', f'Its conditional variance is ({f(b-t)})²/18={f(ans)}.', f'Take the square root: SD(X given X>{f(t)})={f(sqrt(ans))}.'],
                     dict(kind='triangular-variance', B=b, lower=t, target='sd'),
                     W([ans, b/sqrt(18), (b-t)/sqrt(12), (b-t)/sqrt(6), (b-t)/3], 'Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.'),
                     ['conditional density', 'conditional variance', 'standard deviation'])
        return S(f'X has density 2({b}-x)/{b*b} for 0<x<{b}, and zero otherwise. Given X>{f(t)}, calculate Var(X).', ans,
                 [f'The condition probability is (({b}-{f(t)})/{b})². Divide the original density by this probability on ({f(t)},{b}).', f'For Z=X-{f(t)}, the conditional density is 2({f(b-t)}-z)/({f(b-t)})² on (0,{f(b-t)}). Its first two moments are {f((b-t)/3)} and {f((b-t)**2/6)}.', f'The shift contributes no variance, so Var(X given X>{f(t)})=({f(b-t)})²/18={f(ans)}. The conditional mean is {f(mean)}.'],
                 dict(kind='triangular-variance', B=b, lower=t),
                 [(b*b/18, 'This is the unconditional variance.'), ((b-t)**2/12, 'This uses a conditional uniform distribution instead of the triangular density.'), ((b-t)**2/6, 'This is the second raw moment of the shifted variable.'), (sqrt(ans), 'This is the conditional SD.'), (b*b/18/((b-t)/b)**2, 'Dividing unconditional variance by the condition probability does not produce conditional variance.')],
                 ['conditional density', 'shifted support', 'two moments'])

    @family('triangular-conditional-sd')
    def triangular_sd(v):
        return triangular_var(v, 'sd')

    @family('power-transformed-expectation')
    def power_mean(v):
        b = 3+v%6
        power = 2+(v//6)%4
        a = 2+(v//24)%4
        shift = 5+(v//96)%5
        ans = a*b*b*power/(power+2)+shift
        return S(f'X has CDF F(x)=(x/{b})^{power} for 0<x<{b}, with F(x)=0 below the support and 1 above it. A benefit is Y={a}X²+{shift}. Calculate E[Y].', ans,
                 [f'Differentiating the CDF gives density {power}x^{power-1}/{b}^{power}.', f'The second raw moment is E[X²]={power}×{b}²/({power}+2)={f(b*b*power/(power+2))}.', f'Linearity gives E[Y]={a}E[X²]+{shift}={f(ans)}. Squaring the mean would not give E[X²].'],
                 dict(kind='power-expectation', B=b, power=power, a=a, shift=shift),
                 [(a*(b*power/(power+1))**2+shift, 'This replaces E[X²] by (E[X])².'), (a*b*power/(power+1)+shift, 'This treats the squared transformation as linear in X.'), (a*b*b*power/(power+2), 'This omits the additive benefit.'), (a*a*b*b*power/(power+2)+shift, 'The multiplier is squared in a variance, not in an expectation.'), (a*b*b/(power+2)+shift, 'This omits the density normalization factor.')],
                 ['CDF to density', 'second raw moment', 'transformed expectation'])

    @family('two-class-loss-variance')
    def loss_variance(v, target='variance'):
        w = .25+.05*(v%5)
        means = [100+20*((v//5)%5), 300+40*((v//25)%5)]
        sds = [40, 80]
        mean = w*means[0]+(1-w)*means[1]
        within = w*sds[0]**2+(1-w)*sds[1]**2
        between = w*(1-w)*(means[0]-means[1])**2
        ans = within+between
        if target in ['sd', 'cv']:
            sd = sqrt(ans)
            value = sd if target == 'sd' else sd/mean
            name = 'standard deviation' if target == 'sd' else 'coefficient of variation'
            wrong = [ans, w*sds[0]+(1-w)*sds[1], sqrt(within), sqrt(between), mean] if target == 'sd' else [ans/mean, mean/sd, sqrt(within)/mean, sqrt(between)/mean, (w*sds[0]+(1-w)*sds[1])/mean]
            return S(f'A loss belongs to class A with probability {f(w)} and otherwise to class B. Conditional means are {means[0]} and {means[1]}, and conditional SDs are 40 and 80, respectively. Calculate the unconditional loss {name}.', value,
                     [f'The unconditional mean is {f(mean)}. Total variance combines mean within-class variance {f(within)} and variance of class means {f(between)}.', f'Thus Var(X)={f(ans)} and SD(X)={f(sd)}.', f'The requested {name} is {f(value)}'+(' after dividing SD by the unconditional mean.' if target == 'cv' else '.')],
                     dict(kind='loss-mixture-variance', w=w, means=means, sds=sds, target=target),
                     W(wrong, 'Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.'),
                     ['total variance', 'mixture mean', name])
        return S(f'A randomly selected loss belongs to class A with probability {f(w)} and to class B otherwise. Conditional loss means are {means[0]} and {means[1]}, and conditional standard deviations are {sds[0]} and {sds[1]}, respectively. Calculate the unconditional loss variance.', ans,
                 [f'The mean is {f(w)}({means[0]})+{f(1-w)}({means[1]})={f(mean)}.', f'The mean conditional variance is {f(within)}. The variance of the class means is {f(w)}({f(1-w)})({means[0]}-{means[1]})²={f(between)}.', f'Total variance is the sum {f(within)}+{f(between)}={f(ans)}.'],
                 dict(kind='loss-mixture-variance', w=w, means=means, sds=sds),
                 [(within, 'This omits variation between class means.'), (between, 'This omits variation within classes.'), (sqrt(ans), 'This is the unconditional SD.'), (w*sds[0]+(1-w)*sds[1], 'This averages SDs rather than using total variance.'), (ans+mean*mean, 'This is the second raw moment.')],
                 ['mixture first moment', 'within-class and between-class variance'])

    @family('loss-mixture-sd')
    def loss_sd(v):
        return loss_variance(v, 'sd')

    @family('loss-mixture-cv')
    def loss_cv(v):
        return loss_variance(v, 'cv')

    @family('deductible-change-ratio')
    def deductible_change(v):
        mu = 600+100*(v%8)
        delta = 100+50*((v//8)%5)
        d = 200+50*((v//40)%5)
        # Ask ratio of *per-loss* payment moments, including the atom at zero.
        ans = exp(-delta/mu)
        return S(f'An exponential loss has mean {mu}. A policy originally has an ordinary deductible of {d}. The deductible is increased to {d+delta}, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss.', ans,
                 [f'For an ordinary deductible d, E[(X-d)₊]={mu} exp(-d/{mu}).', f'The new-to-old ratio is exp(-({d+delta})/{mu})/exp(-{d}/{mu}).', f'The original deductible cancels, leaving exp(-{delta}/{mu})={f(ans)}. The ratio is per loss, so zero payments are included.'],
                 dict(kind='deductible-ratio', mu=mu, d=d, delta=delta),
                 [(exp(-(d+delta)/mu), 'This is the new positive-payment probability, rather than its ratio to the old one.'), (1-ans, 'This is the fractional reduction, not the retained fraction.'), (1, 'Per-payment means stay constant for this exponential model, but the question asks per loss.'), (exp(-d/mu), 'This is the old positive-payment probability.'), (max(0,1-delta/mu), 'This treats the payment reduction as linear in the deductible increment.')],
                 ['ordinary deductible mean', 'compare policy terms', 'per-loss basis'], True)

    @family('franchise-payment-mean')
    def franchise(v):
        mu = 500+100*(v%8)
        d = 200+50*((v//8)%6)
        share = .6+.05*((v//48)%5)
        ans = share*(d+mu)*exp(-d/mu)
        return S(f'A loss X is exponential with mean {mu}. A policy has a franchise deductible {d}: it pays nothing when X≤{d}, and pays {f(share)}X when X>{d}. Calculate expected payment per loss.', ans,
                 [f'The covered probability is exp(-{d}/{mu})={f(exp(-d/mu))}.', f'Memorylessness gives E[X given X>{d}]={d}+{mu}. A franchise deductible retains the full loss after crossing the threshold.', f'Multiply covered probability, conditional full-loss mean, and insurer share: {f(share)}({d}+{mu})exp(-{d}/{mu})={f(ans)}.'],
                 dict(kind='franchise-exponential', mu=mu, d=d, share=share),
                 [(share*mu*exp(-d/mu), 'This subtracts the deductible from a covered loss, giving an ordinary-deductible payment.'), (share*(d+mu), 'This gives the conditional mean among covered losses only.'), ((d+mu)*exp(-d/mu), 'This omits coinsurance.'), (share*mu, 'This ignores the franchise threshold.'), (share*d*exp(-d/mu), 'This pays only the threshold amount rather than the full covered loss.')],
                 ['franchise versus ordinary deductible', 'conditional exponential mean', 'coinsurance'])

    @family('limited-exponential-infer')
    def limited_exp(v):
        mu = 600+100*(v%8)
        cap = 300+100*((v//8)%6)
        share = .6+.05*((v//48)%5)
        ans = share*mu*(1-exp(-cap/(share*mu)))
        return S(f'A loss X is exponential with mean {mu}. There is no deductible. The insurer pays {f(share)}X, subject to a maximum insurer payment of {cap}. Calculate expected payment per loss.', ans,
                 [f'The final cap is reached at loss {f(cap/share)}, since coinsurance is applied before the payment cap.', f'For 0≤y<{cap}, P(Y>y)=exp[-y/({f(share)}×{mu})].', f'Integrate this survival function from 0 to {cap}: E[Y]={f(share)}×{mu}[1-exp(-{cap}/({f(share)}×{mu}))]={f(ans)}.'],
                 dict(kind='limited-exponential', mu=mu, cap=cap, share=share),
                 [(share*mu*(1-exp(-cap/mu)), 'This caps the loss before coinsurance instead of capping insurer payment.'), (share*mu, 'This omits the payment limit.'), (cap*(1-exp(-cap/(share*mu))), 'This pays the cap at every uncapped covered outcome.'), (ans-cap*exp(-cap/(share*mu)), 'This omits the point mass at the payment cap.'), (share*min(mu,cap), 'The minimum of the mean and cap is not the mean of the limited payment.')],
                 ['final payment cap', 'coinsurance order', 'survival integration'])

    @family('inflation-franchise-mean')
    def inflated_franchise(v):
        b = 1200+200*(v%6)
        factor = 1.1+.05*((v//6)%5)
        d = 300+50*((v//30)%6)
        share = .7
        ans = share*((factor*b)**2-d*d)/(2*factor*b)
        old = share*(b*b-d*d)/(2*b)
        return S(f'An original loss X is uniform on (0,{b}). Losses increase by {f(100*(factor-1))}%. A fixed franchise deductible of {d} applies to the inflated loss: the insurer pays nothing at or below the threshold and 70% of the full inflated loss above it. Calculate expected payment per original loss.', ans,
                 [f'The inflated loss Z is uniform on (0,{f(factor*b)}). Its density is 1/{f(factor*b)}.', f'The payment is 0.7Z for Z>{d}, so integrate 0.7z/{f(factor*b)} from {d} to {f(factor*b)}.', f'The result is 0.7[({f(factor*b)})²-{d}²]/(2×{f(factor*b)})={f(ans)}.'],
                 dict(kind='inflation-franchise', B=b, factor=factor, d=d, share=share),
                 [(factor*old, 'This inflates the original mean payment and effectively inflates the franchise threshold too.'), (share*(factor*b-d)**2/(2*factor*b), 'This uses an ordinary deductible rather than the stated franchise deductible.'), (share*factor*b/2, 'This ignores the threshold.'), (ans/share, 'This omits the insurer share.'), (old, 'This ignores loss inflation.')],
                 ['inflate the loss support', 'fixed franchise threshold', 'payment integration'])

    @family('payment-zero-and-cap')
    def payment_mass(v):
        mu = 700+100*(v%7)
        d = 200+50*((v//7)%5)
        cap = 300+50*((v//35)%5)
        share = .75
        ans = exp(-d/mu)-exp(-(d+cap/share)/mu)
        return S(f'Loss X is exponential with mean {mu}. The payment is Y=min(0.75max(X-{d},0),{cap}). Calculate the probability that payment is strictly between zero and the cap.', ans,
                 [f'The payment is positive when X>{d}, and reaches its cap when X≥{f(d+cap/share)}.', f'The event 0<Y<{cap} corresponds to {d}<X<{f(d+cap/share)}. Both the zero atom and the cap atom are excluded.', f'Subtract the two exponential survival probabilities: exp(-{d}/{mu})-exp(-({d}+{cap}/0.75)/{mu})={f(ans)}.'],
                 dict(kind='payment-interior', mu=mu, d=d, cap=cap, share=share),
                 [(exp(-d/mu), 'This includes the atom at the payment cap.'), (1-exp(-(d+cap/share)/mu), 'This includes zero payments.'), (exp(-(d+cap/share)/mu), 'This gives payment exactly at the cap.'), (1-exp(-d/mu), 'This gives zero payment.'), (1-exp(-cap/(share*mu)), 'This conditions on a positive payment; the question is unconditional.')],
                 ['invert a payment event', 'zero and cap atoms', 'strict endpoints'], True)

    @family('joint-discrete-triangle-event')
    def joint_triangle(v):
        b = 5+v%6
        t = 1+(v//6)%3
        points = [(x,y) for x in range(b+1) for y in range(b+1-x)]
        event = [(x,y) for x,y in points if x-y>t]
        ans = len(event)/len(points)
        return S(f'Integer-valued X and Y have joint PMF P(X=x,Y=y)=c for nonnegative integers satisfying x+y≤{b}, and zero otherwise. Calculate P(X-Y>{t}).', ans,
                 [f'The triangular lattice contains ({b}+1)({b}+2)/2={len(points)} points, so c=1/{len(points)}.', f'There are {len(event)} support points with x>y+{t}. The inequality is strict.', f'The event probability is {len(event)}/{len(points)}={f(ans)}.'],
                 dict(kind='joint-discrete-triangle', B=b, threshold=t),
                 [(len(event)/(b+1)**2, 'This uses the full square rather than the triangular support.'), (.5, 'A positive threshold and excluded equality outcomes prevent a simple one-half answer.'), (1-ans, 'This gives the complementary event.'), (len([(x,y) for x,y in points if x-y>=t])/len(points), 'This includes the boundary x-y=t.'), (len([(x,y) for x,y in points if x>t])/len(points), 'This ignores Y in the difference event.')],
                 ['joint discrete support', 'PMF normalization', 'strict difference event'], True)

    @family('joint-discrete-triangle-mean')
    def joint_mean(v):
        b = 5+v%8
        y = 1+(v//8)%3
        ans = (b-y)/2
        return S(f'X and Y have equal joint probability at every pair of nonnegative integers with x+y≤{b}, and zero probability elsewhere. Calculate E[X given Y={y}].', ans,
                 [f'At Y={y}, the allowable X values are 0,1,…,{b-y}.', f'The joint PMF is constant at these {b-y+1} points, so the conditional PMF is 1/{b-y+1} at each value.', f'The conditional mean is ({b}-{y})/2={f(ans)}.'],
                 dict(kind='joint-discrete-triangle-mean', B=b, y=y),
                 W([b/3, b/2, b-y, (b+y)/2, (b-y)/3], 'Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.'),
                 ['joint support row', 'conditional PMF', 'conditional first moment'])

    @family('joint-discrete-triangle-variance')
    def joint_var(v):
        b = 5+v%8
        y = 1+(v//8)%3
        m = b-y
        ans = m*(m+2)/12
        return S(f'X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤{b}, and zero elsewhere. Calculate Var(X given Y={y}).', ans,
                 [f'Given Y={y}, X is discrete uniform on the {m+1} integers 0 through {m}.', f'The conditional first moment is {f(m/2)}, and second moment is {f(m*(2*m+1)/6)}.', f'Subtract the squared conditional mean: Var(X given Y={y})={m}({m}+2)/12={f(ans)}.'],
                 dict(kind='joint-discrete-triangle-variance', B=b, y=y),
                 W([m*m/12, m*(2*m+1)/6, sqrt(ans), m*m/4, ((b+1)**2-1)/12], 'Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.'),
                 ['conditional discrete support', 'conditional raw moments', 'conditional variance'])

    @family('shared-discrete-covariance')
    def shared_uniform(v):
        b = 3+v%6
        a = 1+(v//6)%4
        noise = 1+(v//24)%4
        ans = -a*(b*b-1)/12
        return S(f'U is uniform on the integers 1 through {b}. Errors E and F each take values ±√{noise} with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y={a}({b}-U)+F. Calculate Cov(X,Y).', ans,
                 ['Expand the covariance using bilinearity. Cross terms involving independent errors vanish.', f'The constant term {a*b} contributes zero covariance, leaving Cov(U,-{a}U)=-{a}Var(U).', f'For this discrete uniform U, Var(U)=({b*b}-1)/12. Thus Cov(X,Y)={f(ans)}.'],
                 dict(kind='shared-discrete-cov', B=b, a=a, noise=noise),
                 W([0, -ans, -a*((b*b-1)/12+noise), -a*(b+1)*(2*b+1)/6, -a*(b+1)/2], 'The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].'),
                 ['shared discrete variable', 'covariance bilinearity', 'sign of dependence'])

    @family('order-second-exponential')
    def order_exp(v):
        n = 4+v%5
        mu = 3+(v//5)%6
        t = 2+(v//30)%5
        p = 1-exp(-t/mu)
        ans = 1-(1-p)**n-n*p*(1-p)**(n-1)
        return S(f'{n} independent component lifetimes are exponential with mean {mu}. T is the time of the second failure. Calculate P(T≤{t}).', ans,
                 [f'Each component fails by time {t} with probability 1-exp(-{t}/{mu})={f(p)}.', f'The number of failures by time {t} is binomial with n={n} and p={f(p)}. The second failure has occurred exactly when this count is at least two.', f'Remove zero and one failures: 1-(1-p)^{n}-{n}p(1-p)^{n-1}={f(ans)}.'],
                 dict(kind='order-exponential', n=n, mu=mu, threshold=t),
                 [(1-(1-p)**n, 'This is the time of the first failure.'), (comb(n,2)*p*p*(1-p)**(n-2), 'This counts exactly two failures and excludes three or more.'), (p*p, 'This requires two specified components to fail rather than the second order statistic.'), (1-ans, 'This is the probability the second failure is still in the future.'), (p**n, 'This requires all components to fail by the threshold.')],
                 ['order-statistic event', 'binomial count representation'], True)

    @family('order-uniform-middle-mean')
    def order_mean(v):
        n = 5+v%6
        rank = 2+(v//6)%3
        b = 10+(v//18)%8
        ans = b*rank/(n+1)
        return S(f'{n} independent values are uniform on (0,{b}). Let X_({rank}) be the {rank}th smallest value. Calculate E[X_({rank})].', ans,
                 [f'For Z=X_({rank})/{b}, the order-statistic density is proportional to z^{rank-1}(1-z)^{n-rank} on (0,1).', f'This is beta({rank},{n+1-rank}), with mean {rank}/({n}+1).', f'Rescale: E[X_({rank})]={b}×{rank}/{n+1}={f(ans)}.'],
                 dict(kind='order-uniform-mean', n=n, rank=rank, B=b),
                 W([b*rank/n, b/2, b/(n+1), b*(n+1-rank)/(n+1), b*rank/(n+2)], 'Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.'),
                 ['order-statistic density', 'beta first moment', 'rescaling'])

    @family('correlated-linear-variance')
    def correlated(v, target='variance'):
        sx = 4+v%5
        sy = 3+(v//5)%5
        rho = .25+.05*((v//25)%5)
        a,b = 2,3
        cov = rho*sx*sy
        ans = a*a*sx*sx+b*b*sy*sy-2*a*b*cov
        if target == 'sd':
            return S(f'X and Y have standard deviations {sx} and {sy} and correlation {f(rho)}. Calculate the standard deviation of 2X-3Y.', sqrt(ans),
                     [f'First Cov(X,Y)={f(rho)}×{sx}×{sy}={f(cov)}.', f'Then Var(2X-3Y)=4×{sx}²+9×{sy}²-12×{f(cov)}={f(ans)}.', f'Take the square root to get the SD {f(sqrt(ans))}.'],
                     dict(kind='correlated-linear', sx=sx, sy=sy, rho=rho, a=a, b=-b, target='sd'),
                     W([ans, sqrt(a*a*sx*sx+b*b*sy*sy), sqrt(a*a*sx*sx+b*b*sy*sy+2*a*b*cov), abs(a*sx-b*sy), a*sx+b*sy], 'Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.'),
                     ['correlation to covariance', 'linear variance', 'standard deviation'])
        return S(f'X and Y have standard deviations {sx} and {sy}, and correlation {f(rho)}. Calculate Var(2X-3Y).', ans,
                 [f'Cov(X,Y)=ρ SD(X) SD(Y)={f(cov)}.', 'For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.', f'Var(2X-3Y)=4({sx})²+9({sy})²-12({f(cov)})={f(ans)}.'],
                 dict(kind='correlated-linear', sx=sx, sy=sy, rho=rho, a=a, b=-b),
                 W([a*a*sx*sx+b*b*sy*sy, a*a*sx*sx+b*b*sy*sy+2*a*b*cov, a*sx*sx+b*sy*sy-2*a*b*cov, sqrt(ans), a*a*sx*sx+b*b*sy*sy-2*a*b*rho*sx*sx*sy*sy], 'Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.'),
                 ['correlation to covariance', 'signed linear combination', 'variance'])

    @family('correlated-linear-sd')
    def correlated_sd(v):
        return correlated(v, 'sd')

    @family('clt-sample-size')
    def clt_size(v):
        sd = 12+2*(v%7)
        tolerance = 2+(v//7)%4
        z = 1.96
        ans = math.ceil((z*sd/tolerance)**2)
        return S(f'Independent and identically distributed observations have standard deviation {sd} and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤{tolerance}) is approximately at least 0.95.', ans,
                 [f'The sample mean has standard deviation {sd}/√n.', f'The required central-normal half-width is 1.96×{sd}/√n≤{tolerance}, so n≥(1.96×{sd}/{tolerance})²={f((z*sd/tolerance)**2)}.', f'Round upward, since n is an integer and must meet the bound: n={ans}.'],
                 dict(kind='clt-size', sd=sd, tolerance=tolerance, z=z),
                 W([math.floor((z*sd/tolerance)**2), math.ceil(z*sd/tolerance), math.ceil((1.645*sd/tolerance)**2), math.ceil((sd/tolerance)**2), math.ceil((z*sd/tolerance)**2)+1], 'Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.'),
                 ['CLT for a sample mean', 'two-sided probability', 'inverse sample size'], integer=True)

    @family('independent-weighted-binomial')
    def weighted_bin(v):
        n = 3+v%3
        m = 4+(v//3)%3
        p = .2+.05*((v//9)%4)
        q = .3+.05*((v//36)%4)
        limit = 3+(v//144)%3
        px = [comb(n,x)*p**x*(1-p)**(n-x) for x in range(n+1)]
        py = [comb(m,y)*q**y*(1-q)**(m-y) for y in range(m+1)]
        prob = lambda a,b: sum(px[x]*py[y] for x in range(n+1) for y in range(m+1) if a*x+b*y<=limit)
        ans = prob(2,1)
        return S(f'Independent counts X and Y are binomial with parameters ({n},{f(p)}) and ({m},{f(q)}), respectively. Each X claim costs two units and each Y claim costs one unit. Calculate P(2X+Y≤{limit}).', ans,
                 [f'For a fixed X=x, the permitted Y values satisfy Y≤{limit}-2x. Values with 2x>{limit} contribute zero.', f'By independence, sum P(X=x)P(Y≤{limit}-2x) over x=0,…,{min(n,limit//2)}.', f'This weighted discrete sum equals {f(ans)}; the weighted count is not an ordinary binomial variable.'],
                 dict(kind='weighted-binomial', n=n, m=m, p=p, q=q, limit=limit),
                 [(prob(1,1), 'This treats both claim types as having the same cost.'), (prob(1,2), 'This reverses the two costs.'), (1-ans, 'This gives the probability the cost exceeds the limit.'), (sum(px[x]*py[y] for x in range(n+1) for y in range(m+1) if 2*x+y==limit), 'This gives equality only.'), (sum(px[:min(n,limit//2)+1]), 'This limits the X cost but ignores the Y cost.')],
                 ['independent discrete sums', 'weighted support', 'conditional summation'], True)

    @family('independent-linear-second-moment')
    def linear_raw(v):
        n = 4+v%7
        p = .2+.05*((v//7)%5)
        shift = 3+(v//35)%6
        mean = 2*(n+1)/2-3*p+shift
        variance = 4*(n*n-1)/12+9*p*(1-p)
        ans = variance+mean*mean
        return S(f'Independent X and Y are uniform on the integers 1 through {n} and Bernoulli with success probability {f(p)}, respectively. Let Z=2X-3Y+{shift}. Calculate E[Z²].', ans,
                 [f'E[Z]=2({n+1}/2)-3({f(p)})+{shift}={f(mean)}.', f'Independence gives Var(Z)=4({n*n-1}/12)+9({f(p)})({f(1-p)})={f(variance)}. The shift adds no variance.', f'E[Z²]=Var(Z)+(E[Z])²={f(ans)}.'],
                 dict(kind='independent-linear-raw', n=n, p=p, shift=shift),
                 W([variance, mean*mean, variance+(mean-shift)**2, variance+shift*shift, 2*(n*n-1)/12+3*p*(1-p)+mean*mean], 'Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.'),
                 ['moments of independent variables', 'signed coefficients', 'second raw moment'])

    @family('clt-uniform-average')
    def clt_uniform(v):
        b = 12+2*(v%6)
        n = 40+10*((v//6)%5)
        offset = .5+.1*((v//30)%5)
        threshold = b/2+offset
        z = offset*sqrt(12*n)/b
        ans = 1-phi(z)
        return S(f'{n} independent service times are each uniform on (0,{b}) minutes. Use the central limit theorem to approximate the probability that their average exceeds {f(threshold)} minutes.', ans,
                 [f'One service time has mean {b}/2 and variance {b*b}/12.', f'The average has variance {b*b}/(12×{n}), so z=({f(threshold)}-{b}/2)/√({b*b}/(12×{n}))={f(z)}.', f'The upper normal tail is approximately {f(ans)}.'],
                 dict(kind='clt-uniform', B=b, n=n, threshold=threshold),
                 [(phi(z), 'This is the lower normal tail.'), (1-phi(offset*sqrt(12)/b), 'This uses the SD of one observation rather than the average.'), (1-phi(offset*n*sqrt(12)/b), 'The SD decreases by √n, not n.'), (1-phi(offset*12*n/(b*b)), 'This standardizes using the average variance rather than its SD.'), ((b-threshold)/b, 'This is the exact tail for a single observation, not the average.')],
                 ['CLT for a uniform average', 'variance divided by sample size', 'normal tail'], True)

    @family('independent-average-sd')
    def average_sd(v):
        sd = 12+2*(v%6)
        n = 4+(v//6)%7
        shift_sd = 2+(v//42)%5
        scale = 1.2
        variance = scale*scale*sd*sd/n+shift_sd*shift_sd
        ans = sqrt(variance)
        return S(f'{n} independent measurements each have mean 100 and SD {sd}. Let M be their average. A cost is Z=1.2M+C, where C is independent of all measurements and has mean 5 and SD {shift_sd}. Calculate SD(Z).', ans,
                 [f'Var(M)={sd}²/{n}={f(sd*sd/n)}.', f'Independence gives Var(Z)=1.2²Var(M)+Var(C)={f(variance)}. The means do not affect this variance.', f'Take the square root: SD(Z)={f(ans)}.'],
                 dict(kind='independent-average-sd', sd=sd, n=n, shiftSD=shift_sd, scale=scale),
                 W([variance, scale*sd/sqrt(n)+shift_sd, sqrt(scale*scale*sd*sd+shift_sd*shift_sd), sqrt(scale*sd*sd/n+shift_sd*shift_sd), scale*sd/sqrt(n)], 'Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.'),
                 ['moments of an independent average', 'independent random surcharge', 'SD of a linear combination'])

    @family('normal-independent-difference')
    def normal_difference(v):
        mx = 60+5*(v%7)
        my = 50+5*((v//7)%7)
        sx = 5+(v//49)%5
        sy = 7+(v//245)%4
        margin = 10
        variance = sx*sx+sy*sy
        ans = phi((margin-mx+my)/sqrt(variance))
        return S(f'Independent measurements X and Y are normal with means {mx} and {my} and SDs {sx} and {sy}, respectively. Calculate P(X<Y+{margin}).', ans,
                 [f'D=X-Y is normal with mean {mx}-{my}={mx-my}.', f'Independence gives Var(D)={sx}²+{sy}²={variance}; the negative coefficient does not subtract variance.', f'Standardize D<{margin}: Φ[({margin}-{mx-my})/√{variance}]={f(ans)}.'],
                 dict(kind='normal-independent-difference', mx=mx, my=my, sx=sx, sy=sy, margin=margin),
                 [(1-ans, 'This is the upper rather than lower difference tail.'), (phi((margin-mx+my)/variance), 'This standardizes using variance instead of SD.'), (phi((margin-mx+my)/(sx+sy)), 'Independent SDs do not add directly.'), (phi((margin-mx+my)/sx), 'This ignores the variation in Y.'), (phi((margin-mx-my)/sqrt(variance)), 'The mean of X-Y subtracts the Y mean.')],
                 ['independent normal difference', 'mean and variance of a linear combination', 'tail probability'], True)

    @family('clt-exponential-total')
    def clt_exp(v):
        n = 50+10*(v%6)
        mu = 100+20*((v//6)%6)
        reserve = n*mu+(500+100*((v//36)%5))
        z = (reserve-n*mu)/(mu*sqrt(n))
        ans = 1-phi(z)
        return S(f'{n} independent claim amounts each have an exponential distribution with mean {mu}. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds {reserve}.', ans,
                 [f'An exponential claim has variance {mu}². The aggregate has mean {n*mu} and variance {n}×{mu}².', f'The standardized reserve is ({reserve}-{n*mu})/({mu}√{n})={f(z)}.', f'The approximate upper normal tail is {f(ans)}.'],
                 dict(kind='clt-exponential', n=n, mu=mu, reserve=reserve),
                 [(phi(z), 'This is the lower tail.'), (1-phi((reserve-n*mu)/mu), 'This uses one claim SD for the entire sum.'), (1-phi((reserve-n*mu)/(n*mu)), 'The sum SD grows with √n, not n.'), (exp(-reserve/(n*mu)), 'An aggregate of exponential variables is not a single exponential with the aggregate mean.'), (1-phi((reserve-n*mu)/(mu*sqrt(mu*n))), 'An exponential variance is the squared mean, not a Poisson-style variance.')],
                 ['exponential moments', 'CLT for an aggregate', 'reserve exceedance'], True)

    @family('negative-binomial-interval')
    def neg_interval(v):
        r = 3+v%3
        p = .25+.025*((v//3)%7)
        a = r+1+(v//21)%3
        b = a+3
        tail = lambda n: sum(comb(n,k)*p**k*(1-p)**(n-k) for k in range(r))
        ans = 1-tail(b)/tail(a)
        return S(f'Independent trials succeed with probability {f(p)}. T is the trial number of the {r}th success. Given T>{a}, calculate P(T≤{b}).', ans,
                 [f'T>n means fewer than {r} successes among the first n trials, so P(T>n)=Σ from k=0 to {r-1} of choose(n,k)p^k(1-p)^(n-k).', f'The survival probabilities at {a} and {b} are {f(tail(a))} and {f(tail(b))}.', f'The conditional interval probability is 1-P(T>{b})/P(T>{a})={f(ans)}. For more than one required success, geometric memorylessness does not apply.'],
                 dict(kind='negative-interval', r=r, p=p, a=a, b=b),
                 [(tail(a)-tail(b), 'This is the interval probability before conditioning.'), (1-tail(b), 'This includes stopping times before the given lower bound.'), (tail(b)/tail(a), 'This is survival beyond the upper bound, conditional on the lower bound.'), (1-(1-p)**(b-a), 'This uses a first-success geometric event for a later-success stopping time.'), (comb(b-1,r-1)*p**r*(1-p)**(b-r)/tail(a), 'This includes only stopping exactly at the upper bound.')],
                 ['negative-binomial to binomial counts', 'conditional interval', 'nonmemoryless waiting time'], True)

    @family('independent-poisson-linear-variance')
    def poisson_linear_var(v):
        a = .6+.1*(v%8)
        b = 1+.2*((v//8)%6)
        ans = 4*a+9*b
        return S(f'Independent counts X and Y are Poisson. Their zero-count probabilities are exp(-{f(a)}) and exp(-{f(b)}), respectively. Calculate Var(2X-3Y).', ans,
                 [f'The identity P(N=0)=exp(-λ) gives means {f(a)} and {f(b)}. Poisson variances equal those means.', 'Independence gives zero covariance. Both the positive and negative coefficients must be squared in the variance.', f'Var(2X-3Y)=4×{f(a)}+9×{f(b)}={f(ans)}.'],
                 dict(kind='poisson-linear-variance', a=a, b=b),
                 W([2*a-3*b, 4*a-9*b, 2*a+3*b, sqrt(ans), ans+(2*a-3*b)**2], 'Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.'),
                 ['infer Poisson parameters', 'independent linear variance', 'signed coefficients'])

    @family('lognormal-conditional-tail')
    def log_cond(v):
        mu = 3+.1*(v%7)
        sigma = .4+.05*((v//7)%6)
        lo,hi = exp(mu), exp(mu+sigma)
        ans = 2*(1-phi(1))
        return S(f'Optional enrichment: ln X is normal with mean {f(mu)} and SD {f(sigma)}. Given X>exp({f(mu)}), calculate P(X>exp({f(mu+sigma)})).', ans,
                 ['Taking logs preserves the inequality because the logarithm is increasing.', 'The condition is Z>0 and the higher threshold is Z>1 for a standard normal Z.', f'The conditional tail is [1-Φ(1)]/[1-Φ(0)]={f(ans)}.'],
                 dict(kind='lognormal-conditional', mu=mu, sigma=sigma, lower=lo, upper=hi),
                 [(1-phi(1), 'This is the unconditional upper tail.'), (phi(1), 'This is the lower tail before conditioning.'), (.5, 'This is the probability of the conditioning event.'), (1-ans, 'This is the conditional probability of being at or below the higher threshold.'), ((1-phi(1))/phi(1), 'The conditioning denominator is survival at the lower threshold, not the CDF at the higher one.')],
                 ['monotone log transformation', 'conditional normal tail'], True)

    @family('lognormal-square-moment')
    def log_square(v):
        mu = 2+.1*(v%7)
        sigma = .3+.05*((v//7)%6)
        share = .6+.05*((v//42)%5)
        ans = share*share*exp(2*mu+2*sigma*sigma)
        return S(f'Optional enrichment: ln X is normal with mean {f(mu)} and variance {f(sigma*sigma)}. A payment is Y={f(share)}X. Calculate E[Y²].', ans,
                 ['For a lognormal variable, E[X^r]=exp(rμ+r²σ²/2).', f'At r=2, E[X²]=exp(2×{f(mu)}+2×{f(sigma*sigma)}).', f'The payment multiplier is squared: E[Y²]=({f(share)})²E[X²]={f(ans)}.'],
                 dict(kind='lognormal-square', mu=mu, sigma=sigma, share=share),
                 W([share*exp(2*mu+2*sigma*sigma), share*share*exp(2*mu+sigma*sigma), share*share*(exp(sigma*sigma)-1)*exp(2*mu+sigma*sigma), share*exp(mu+sigma*sigma/2), exp(2*mu+2*sigma*sigma)], 'Use the second raw moment, square the payment multiplier, and distinguish the supplied log variance from log SD.'),
                 ['lognormal raw moment', 'scaled payment', 'second moment'])

    @family('lognormal-limited-mean')
    def log_limit(v):
        mu = 3+.1*(v%7)
        sigma = .4+.05*((v//7)%5)
        cap = exp(mu)
        ans = exp(mu+sigma*sigma/2)*phi(-sigma)+cap*.5
        return S(f'Optional enrichment: ln X is normal with mean {f(mu)} and SD {f(sigma)}. Payment is Y=min(X,exp({f(mu)})). Calculate E[Y].', ans,
                 ['Split payment into the uncapped first moment below the cap and cap times its upper-tail probability.', f'For lognormal X, E[X I(X≤c)]=exp(μ+σ²/2)Φ((ln c-μ-σ²)/σ). Here c=exp(μ), so the normal argument is -{f(sigma)} and cap probability is 0.5.', f'E[Y]=exp({f(mu)}+{f(sigma*sigma/2)})Φ(-{f(sigma)})+0.5exp({f(mu)})={f(ans)}.'],
                 dict(kind='lognormal-limited', mu=mu, sigma=sigma, cap=cap),
                 W([exp(mu+sigma*sigma/2), exp(mu+sigma*sigma/2)*phi(-sigma), cap, cap/2, cap*phi(-sigma)+cap/2], 'A limited expectation includes the truncated raw moment and the positive mass at the cap; the unconditional mean or a probability times the mean is insufficient.'),
                 ['truncated lognormal moment', 'cap mass', 'limited expectation'])

    return EXTRA_MAPPING


# Each addition uses a different family from the chapter's existing two challenges.
EXTRA_MAPPING = {
    'a1-set-functions': ['symmetric-difference-infer', 'three-events-exactly-one', 'coverage-renewal-mixture'],
    'a2-venn-diagrams': ['three-events-exactly-one', 'symmetric-difference-infer', 'coverage-renewal-mixture'],
    'a3-sample-space': ['ordered-draw-condition', 'uniform-lattice-condition', 'committee-conditioned-membership'],
    'a4-events': ['three-events-exactly-one', 'symmetric-difference-infer', 'ordered-draw-condition'],
    'a5-probability-set-function': ['three-events-exactly-one', 'symmetric-difference-infer', 'finite-payment-moments'],
    'a6-axioms-probability': ['symmetric-difference-infer', 'three-events-exactly-one', 'three-class-survival'],
    'b1-counting-principles': ['digit-code-restrictions', 'multiset-separation', 'committee-conditioned-membership'],
    'b2-permutations': ['multiset-separation', 'digit-code-restrictions', 'committee-roles'],
    'b3-combinations': ['committee-conditioned-membership', 'hypergeometric-followup', 'multiset-separation'],
    'b4-combinatorial-probability': ['committee-conditioned-membership', 'hypergeometric-followup', 'negative-binomial-first-failure'],
    'c1-independent-events': ['unequal-reliability', 'exponential-minimum-lifetime', 'conditional-independent'],
    'c2-independent-trials': ['unequal-reliability', 'bayes-sample-count', 'negative-binomial-first-failure'],
    'd1-mutually-exclusive': ['three-events-exactly-one', 'coverage-renewal-mixture', 'three-class-survival'],
    'd2-partitions': ['three-class-survival', 'coverage-renewal-mixture', 'bayes-sample-count'],
    'e1-addition-rule': ['three-events-exactly-one', 'symmetric-difference-infer', 'unequal-reliability'],
    'e2-multiplication-rule': ['ordered-draw-condition', 'unequal-reliability', 'bayes-sample-count'],
    'e3-combined-problems': ['bayes-sample-count', 'coverage-renewal-mixture', 'unequal-reliability'],
    'f1-conditional-probability': ['ordered-draw-condition', 'symmetric-difference-infer', 'unequal-reliability'],
    'f2-bayes-theorem': ['bayes-sample-count', 'three-class-survival', 'mixture-no-claim'],
    'f3-law-total-probability': ['coverage-renewal-mixture', 'three-class-survival', 'bayes-sample-count'],
    'urv-a1-random-variables': ['finite-payment-moments', 'mixed-cdf-mean', 'power-transformed-expectation'],
    'urv-a2-pdf': ['triangular-tail-infer', 'mixed-cdf-mean', 'triangular-conditional-variance'],
    'urv-a3-cdf': ['mixed-cdf-mean', 'uniform-payment-quantile', 'payment-zero-and-cap'],
    'urv-b1-discrete-uniform': ['uniform-lattice-condition', 'uniform-infer-support', 'uniform-lattice-square-moment'],
    'urv-b2-binomial': ['binomial-odds-infer', 'bayes-sample-count', 'conditional-binomial-variance'],
    'urv-b3-geometric': ['geometric-capped-count', 'geometric-tail-infer', 'geometric-late-mean'],
    'urv-b4-negative-binomial': ['negative-binomial-first-failure', 'negative-binomial-progress-mean', 'negative-binomial-interval'],
    'urv-b5-hypergeometric': ['hypergeometric-followup', 'committee-conditioned-membership', 'conditional-hypergeom-variance'],
    'urv-b6-poisson': ['poisson-ratio-aggregate', 'poisson-truncated-mean', 'mixture-no-claim'],
    'urv-c1-continuous-uniform': ['uniform-payment-quantile', 'inflation-franchise-mean', 'order-uniform-middle-mean'],
    'urv-c2-exponential': ['exponential-minimum-lifetime', 'deductible-change-ratio', 'limited-exponential-infer'],
    'urv-c3-gamma': ['gamma-truncated-mean', 'gamma-aggregate-tail', 'gamma-cv-infer'],
    'urv-c4-beta': ['beta-mode-mean-infer', 'order-uniform-middle-mean', 'power-transformed-expectation'],
    'urv-c5-normal': ['normal-two-quantiles', 'normal-combination-infer', 'clt-binomial-correction'],
    'urv-c6-lognormal': ['lognormal-conditional-tail', 'lognormal-square-moment', 'lognormal-limited-mean'],
    'urv-d1-conditional-discrete': ['poisson-truncated-mean', 'hypergeometric-followup', 'uniform-lattice-condition'],
    'urv-d2-conditional-continuous': ['triangular-conditional-variance', 'gamma-truncated-mean', 'triangular-tail-infer'],
    'urv-e1-expected-value': ['finite-payment-moments', 'geometric-capped-count', 'power-transformed-expectation'],
    'urv-e2-moments': ['power-transformed-expectation', 'mixed-cdf-mean', 'two-class-loss-variance'],
    'urv-e3-mode-median-percentiles': ['beta-mode-mean-infer', 'uniform-payment-quantile', 'normal-two-quantiles'],
    'urv-f1-variance': ['two-class-loss-variance', 'triangular-conditional-variance', 'conditional-binomial-variance'],
    'urv-f2-standard-deviation': ['loss-mixture-sd', 'correlated-linear-sd', 'triangular-conditional-sd'],
    'urv-f3-coefficient-variation': ['loss-mixture-cv', 'mixed-power-cv', 'gamma-cv-infer'],
    'urv-g1-deductibles': ['deductible-change-ratio', 'franchise-payment-mean', 'uniform-payment-quantile'],
    'urv-g2-coinsurance': ['franchise-payment-mean', 'limited-exponential-infer', 'uniform-payment-quantile'],
    'urv-g3-benefit-limits': ['limited-exponential-infer', 'payment-zero-and-cap', 'geometric-capped-count'],
    'urv-g4-inflation': ['inflation-franchise-mean', 'uniform-payment-quantile', 'deductible-change-ratio'],
    'urv-h1-loss-variable': ['two-class-loss-variance', 'mixed-cdf-mean', 'gamma-truncated-mean'],
    'urv-h2-payment-variable': ['payment-zero-and-cap', 'franchise-payment-mean', 'uniform-payment-quantile'],
    'urv-h3-moments-loss-payment': ['limited-exponential-infer', 'franchise-payment-mean', 'finite-payment-moments'],
    'mrv-a1-joint-distributions': ['joint-discrete-triangle-event', 'joint-discrete-triangle-mean', 'shared-discrete-covariance'],
    'mrv-a2-conditional-distributions': ['joint-discrete-triangle-mean', 'joint-discrete-triangle-variance', 'poisson-split-condition'],
    'mrv-b1-joint-moments': ['shared-discrete-covariance', 'correlated-linear-variance', 'joint-discrete-triangle-mean'],
    'mrv-b2-conditional-variance': ['joint-discrete-triangle-variance', 'poisson-truncated-variance', 'bayes-predictive-variance'],
    'mrv-c1-covariance': ['shared-discrete-covariance', 'correlated-linear-variance', 'shared-class-covariance'],
    'mrv-d1-order-statistics': ['order-second-exponential', 'order-uniform-middle-mean', 'exponential-minimum-lifetime'],
    'mrv-e1-linear-combinations': ['independent-weighted-binomial', 'poisson-ratio-aggregate', 'normal-independent-difference'],
    'mrv-e2-linear-moments': ['independent-linear-second-moment', 'independent-average-sd', 'independent-poisson-linear-variance'],
    'mrv-f1-central-limit-theorem': ['clt-sample-size', 'clt-uniform-average', 'clt-exponential-total'],
}

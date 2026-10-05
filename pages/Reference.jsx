import { RichText } from '../scripts/components/RichText.jsx';
import { resources } from '../scripts/syllabus.js';
const distributions = [
  ['Discrete uniform on integers a,…,b', '$1/(b-a+1)$', '$(a+b)/2$', '$((b-a+1)^2-1)/12$'],
  ['Binomial(n,p)', '$\\binom nx p^x(1-p)^{n-x}$', '$np$', '$np(1-p)$'],
  ['Geometric(p), trials to first success', '$p(1-p)^{x-1}$', '$1/p$', '$(1-p)/p^2$'],
  ['Negative binomial(r,p), trials to rth success', '$\\binom{x-1}{r-1}p^r(1-p)^{x-r}$', '$r/p$', '$r(1-p)/p^2$'],
  ['Hypergeometric(N,K,n)', '$\\binom Kx\\binom{N-K}{n-x}/\\binom Nn$', '$nK/N$', '$n(K/N)(1-K/N)(N-n)/(N-1)$'],
  ['Poisson(λ)', '$e^{-\\lambda}\\lambda^x/x!$', '$\\lambda$', '$\\lambda$'],
  ['Continuous uniform(a,b)', '$1/(b-a)$', '$(a+b)/2$', '$(b-a)^2/12$'],
  ['Exponential, rate λ', '$\\lambda e^{-\\lambda x}$', '$1/\\lambda$', '$1/\\lambda^2$'],
  ['Gamma, shape α and scale θ', '$x^{\\alpha-1}e^{-x/\\theta}/(\\Gamma(\\alpha)\\theta^\\alpha)$', '$\\alpha\\theta$', '$\\alpha\\theta^2$'],
  ['Beta(α,β)', '$x^{\\alpha-1}(1-x)^{\\beta-1}/B(\\alpha,\\beta)$', '$\\alpha/(\\alpha+\\beta)$', '$\\alpha\\beta/((\\alpha+\\beta)^2(\\alpha+\\beta+1))$'],
  ['Normal(μ,σ²)', '$e^{-(x-\\mu)^2/(2\\sigma^2)}/(\\sigma\\sqrt{2\\pi})$', '$\\mu$', '$\\sigma^2$'],
];
export function Reference() {
  return <>
    <h1 class="page-title">Formulas & prerequisites</h1><p class="page-subtitle">A quick reference for your chapter practice</p>
    <p class="intro">Use this sheet during study, then practice recalling the formulas. The official normal table is the reference provided on the exam.</p>
    <section class="definition-block"><h2>Distribution reference</h2><p class="lesson-paragraph">Support: geometric starts at 1; negative binomial starts at r; binomial runs from 0 to n; Poisson starts at 0; gamma and exponential are positive; beta lies in (0,1). The hypergeometric variance formula assumes N &gt; 1. The density or PMF is zero outside its support.</p>
      <div class="table-scroll" tabIndex={0} role="region" aria-label="Distribution formulas, scroll horizontally"><table class="reference-table"><caption>Core distributions in the May 2026 syllabus</caption><thead><tr>{['Distribution','PMF or PDF','Mean','Variance'].map(label => <th key={label}>{label}</th>)}</tr></thead><tbody>{distributions.map(row => <tr key={row[0]}>{row.map((text,index) => index === 0 ? <th scope="row">{text}</th> : <td><RichText text={text} /></td>)}</tr>)}</tbody></table></div>
      <p class="lesson-paragraph">If a geometric or negative binomial variable counts failures rather than trials, subtract 1 or r respectively from its mean; variance is unchanged. Gamma rate λ equals 1/θ. Normal notation here uses variance as the second parameter.</p>
    </section>
    <section class="definition-block"><h2>Probability and moments</h2>{[
      '$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$',
      '$P(A\\mid B)=P(A\\cap B)/P(B)$ for $P(B)>0$.',
      '$P(A)=\\sum_i P(A\\mid B_i)P(B_i)$ for a partition with positive probabilities.',
      '$P(B_j\\mid A)=P(A\\mid B_j)P(B_j)/\\sum_iP(A\\mid B_i)P(B_i)$, when $P(A)>0$.',
      '$\\operatorname{Var}(X)=E[X^2]-(E[X])^2$; $\\operatorname{SD}(X)=\\sqrt{\\operatorname{Var}(X)}$; $\\operatorname{CV}(X)=\\operatorname{SD}(X)/E[X]$ for a positive mean.',
      '$\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$; $\\rho=\\operatorname{Cov}(X,Y)/(\\sigma_X\\sigma_Y)$.',
      '$E[aX+b]=aE[X]+b$ and $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$.',
      'For independent variables, $\\operatorname{Var}(\\sum_i a_iX_i)=\\sum_i a_i^2\\operatorname{Var}(X_i)$.',
    ].map(text => <p class="lesson-paragraph" key={text}><RichText text={text} /></p>)}</section>
    <section class="definition-block"><h2>Policy payment checklist</h2><p class="lesson-paragraph"><RichText text={'For a fixed deductible d, insurer share c, inflation multiplier k, and final payment cap u: $Y=\\min(c(kX-d)_+,u)$. Translate the wording before calculating. Payment per loss includes zero; payment per payment conditions on $Y>0$.'} /></p><p><a href="#/urv-g1-deductibles">Review insurance chapters</a></p></section>
    <section class="definition-block"><h2>Calculus refresher</h2>{[
      '$\\int x^r\\,dx=x^{r+1}/(r+1)+C$ for $r\\ne-1$; $\\int e^{ax}\\,dx=e^{ax}/a+C$ for $a\\ne0$.',
      'Integration by parts: $\\int u\\,dv=uv-\\int v\\,du$. Use it for loss moments with exponential densities.',
      'For $|r|<1$, $\\sum_{k=0}^\\infty r^k=1/(1-r)$ and $\\sum_{k=1}^\\infty kr^{k-1}=1/(1-r)^2$.',
      'A density integrates to one. On smooth parts of a continuous distribution, $F\\prime(x)=f(x)$, and $F(x)=\\int_{-\\infty}^x f(t)\\,dt$.',
      'For monotone differentiable $Y=g(X)$, $f_Y(y)=f_X(g^{-1}(y))|d g^{-1}(y)/dy|$. A policy with flat payment regions also creates point masses.',
    ].map(text => <p class="lesson-paragraph" key={text}><RichText text={text} /></p>)}</section>
    <section class="definition-block"><h2>Risk and Insurance refresher</h2>
      <p class="lesson-paragraph">Insurance exchanges a known premium for a benefit triggered by a covered loss. Frequency describes how often losses occur; severity describes their amounts. A peril causes loss; a hazard increases its likelihood or size. Policy exclusions specify losses that are not covered.</p>
      <p class="lesson-paragraph">Pooling independent risks reduces variation relative to the expected total. It does not eliminate the underlying losses. Dependence between risks can weaken pooling benefits. Deductibles retain an initial portion of loss, coinsurance shares covered costs, and benefit limits cap payments. Premiums may cover expected benefits plus expenses and a margin; a premium is not automatically the expected loss.</p>
      <a href={resources[5][1]} target="_blank" rel="noreferrer">Read the full SOA Risk and Insurance note</a>
    </section>
    <section class="definition-block"><h2>Normal table</h2><p class="lesson-paragraph"><RichText text={'Standardize with $z=(x-\\mu)/\\sigma$. The table gives $\\Phi(z)=P(Z\\le z)$. Use $\\Phi(-z)=1-\\Phi(z)$ and $P(a<Z<b)=\\Phi(b)-\\Phi(a)$. Read the row for the units and tenths of z, then the column for its hundredths.'} /></p><a class="home-cta" href={resources[1][1]} target="_blank" rel="noreferrer">Open official normal table</a></section>
  </>;
}

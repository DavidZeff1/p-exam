import { useMemo, useState } from 'preact/hooks';
import { bayesCounts, triangularCDF, insurancePayment, uniformPaymentMoments, exponentialSampleMeans, histogram } from '../lab-math.js';
const percent = value => `${(100 * value).toFixed(1)}%`;
const money = value => value.toLocaleString('en-US', { maximumFractionDigits: 0 });
function Slider({ label, value, min, max, step = 1, onChange, display = value }) {
  return <label class="lab-slider"><span>{label}<strong>{display}</strong></span><input type="range" min={min} max={max} step={step} value={value} onInput={event => onChange(Number(event.currentTarget.value))} /></label>;
}
function Prediction({ question, choices, answer, explanation }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  return <div class="lab-prediction"><h3>Predict before you experiment</h3><p>{question}</p><div class="micro-choices">{choices.map((choice, index) => <button class="problem-action" type="button" aria-pressed={selected === index} onClick={() => { setSelected(index); setChecked(false); }}>{choice}</button>)}</div><button type="button" class="problem-action" disabled={selected === null} onClick={() => setChecked(true)}>Check prediction</button>{checked && <p role="status">{selected === answer ? 'Yes. ' : 'Reconsider the mechanism. '}{explanation}</p>}</div>;
}
function Chart({ title, maxX, maxY, curve, shade, labels = ['Value', 'Density'], children }) {
  const points = Array.from({ length: 121 }, (_, i) => { const x = maxX * i / 120; return [50 + 440 * x / maxX, 205 - 160 * Math.min(maxY, curve(x)) / maxY]; });
  const area = shade && Array.from({ length: 61 }, (_, i) => { const x = shade[0] + (shade[1] - shade[0]) * i / 60; return `${50 + 440 * x / maxX},${205 - 160 * Math.min(maxY, curve(x)) / maxY}`; }).join(' ');
  return <figure class="lab-chart"><figcaption>{title}</figcaption><svg viewBox="0 0 520 255" role="img" aria-label={`${title}. ${labels[0]} ranges from 0 to ${maxX.toFixed(2)}; ${labels[1]} ranges from 0 to ${maxY.toFixed(2)}.`}>
    <path d="M50 35V205H490" class="lab-axis" />
    {shade && <polygon points={`${50 + 440 * shade[0] / maxX},205 ${area} ${50 + 440 * shade[1] / maxX},205`} class="lab-area" />}
    {children}
    <polyline points={points.map(p => p.join(',')).join(' ')} class="lab-curve" />
    <text x="45" y="225">0</text><text x="462" y="225">{Number(maxX.toFixed(2))}</text><text x="3" y="48">{Number(maxY.toFixed(2))}</text><text x="250" y="249" textAnchor="middle">{labels[0]}</text><text x="54" y="25">{labels[1]}</text>
  </svg></figure>;
}
export function BayesLab() {
  const [prior, setPrior] = useState(5), [sensitivity, setSensitivity] = useState(84), [falsePositive, setFalsePositive] = useState(8);
  const c = bayesCounts(prior / 100, sensitivity / 100, falsePositive / 100);
  return <section class="learning-lab"><h2>See Bayes as people, not just symbols</h2><p>Imagine 10,000 claims. Among those flagged, how many are fraudulent? Counts below are expected counts under the model.</p>
    <Prediction question="If fraud becomes rarer and the screen stays the same, what happens to the fraud fraction among flagged claims?" choices={['It rises', 'It falls', 'It stays fixed']} answer={1} explanation="The legitimate population grows relative to the fraud population, contributing a greater share of false flags." />
    <div class="lab-controls"><Slider label="Fraud prevalence" value={prior} min={1} max={50} onChange={setPrior} display={`${prior}%`} /><Slider label="Fraud flagged (sensitivity)" value={sensitivity} min={1} max={100} onChange={setSensitivity} display={`${sensitivity}%`} /><Slider label="Legitimate claims flagged" value={falsePositive} min={1} max={50} onChange={setFalsePositive} display={`${falsePositive}%`} /></div>
    <div class="count-tree" aria-label="Screening count tree"><div>10,000 claims</div><div class="lab-tree-branches"><div><strong>{money(c.fraud)} fraudulent</strong><p>{money(c.trueFlags)} flagged<br/>{money(c.fraud - c.trueFlags)} unflagged</p></div><div><strong>{money(c.legitimate)} legitimate</strong><p>{money(c.falseFlags)} flagged<br/>{money(c.legitimate - c.falseFlags)} unflagged</p></div></div></div>
    <p class="lab-result" aria-live="polite">Fraud among flags: <strong>{money(c.trueFlags)} / ({money(c.trueFlags)} + {money(c.falseFlags)}) = {percent(c.posterior)}</strong></p><p>The denominator includes flags from both groups. Sensitivity is {sensitivity}%; the fraud probability after a flag is {percent(c.posterior)}.</p>
  </section>;
}
export function DensityLab({ conditional = false }) {
  const [L, setL] = useState(1), [low, setLow] = useState(.2), [high, setHigh] = useState(.8);
  const lower = low * L, upper = high * L;
  const probability = triangularCDF(upper, L) - triangularCDF(lower, L);
  return <section class="learning-lab"><h2>Connect density, area, and cumulative probability</h2><p>For this increasing triangular model, f(x)=2x/L² on (0,L), and F(x)=(x/L)² on that support.</p>
    <Prediction question="Halving the support length L makes the density taller. What happens to the total probability?" choices={['It doubles', 'It stays 1', 'It halves']} answer={1} explanation="The density grows taller as its support gets narrower. The total area remains one." />
    <div class="lab-controls"><Slider label="Support endpoint L" value={L} min={.5} max={5} step={.1} onChange={setL} /><Slider label="Lower endpoint as % of L" value={Math.round(low * 100)} min={0} max={Math.round(high * 100)} onChange={v => setLow(v / 100)} display={lower.toFixed(2)} /><Slider label="Upper endpoint as % of L" value={Math.round(high * 100)} min={Math.round(low * 100)} max={100} onChange={v => setHigh(v / 100)} display={upper.toFixed(2)} /></div>
    <div class="lab-chart-pair"><Chart title="PDF: shaded area is probability" maxX={L} maxY={2 / L} curve={x => 2 * x / L ** 2} shade={[lower, upper]} /><Chart title="CDF: subtract accumulated probabilities" maxX={L} maxY={1} curve={x => triangularCDF(x, L)} labels={['Value', 'Cumulative probability']}><line class="lab-guide" x1={50 + 440 * low} x2={50 + 440 * low} y1="205" y2={205 - 160 * low ** 2} /><line class="lab-guide" x1={50 + 440 * high} x2={50 + 440 * high} y1="205" y2={205 - 160 * high ** 2} /></Chart></div>
    {conditional && <div class="lab-result" aria-live="polite"><h3>Now restrict the population</h3><p>Given X &gt; {lower.toFixed(2)}, the remaining probability is {(1-low**2).toFixed(4)}. Within that population, the fraction above {upper.toFixed(2)} is</p><p><strong>P(X &gt; {upper.toFixed(2)} | X &gt; {lower.toFixed(2)}) = {low < 1 ? ((1-high**2)/(1-low**2)).toFixed(4) : 'undefined: the condition has probability zero'}</strong></p><p>The denominator is the probability of the condition. This triangular distribution is not memoryless.</p></div>}
    <p class="lab-result" aria-live="polite">P({lower.toFixed(2)} &lt; X &lt; {upper.toFixed(2)}) = F({upper.toFixed(2)}) − F({lower.toFixed(2)}) = <strong>{probability.toFixed(4)}</strong></p><p>Density height can exceed 1. A single point still has probability zero; only area contributes probability.</p>
  </section>;
}
export function PaymentLab() {
  const [d, setD] = useState(1000), [share, setShare] = useState(80), [cap, setCap] = useState(3000), [inflation, setInflation] = useState(0), [loss, setLoss] = useState(5000);
  const factor = 1 + inflation / 100;
  const pay = x => insurancePayment(x, d, share / 100, cap, factor);
  const m = uniformPaymentMoments(10000, d, share / 100, cap, factor);
  return <section class="learning-lab"><h2>Build the loss-to-payment rule</h2><p>This contract inflates the original loss, subtracts a fixed ordinary deductible, applies the insurer share, then caps the final payment.</p><p class="lab-formula">Payment = min(insurer share × max(inflated loss − deductible, 0), payment cap)</p>
    <Prediction question="If the deductible rises while other terms stay fixed, can the payment for a fixed loss rise?" choices={['Yes', 'No']} answer={1} explanation="A larger deductible leaves less covered loss. The cap can keep payment unchanged, but it cannot make payment rise." />
    <div class="lab-controls"><Slider label="Ordinary deductible" value={d} min={0} max={10000} step={100} onChange={setD} display={`$${money(d)}`} /><Slider label="Insurer share" value={share} min={0} max={100} onChange={setShare} display={`${share}%`} /><Slider label="Final payment cap" value={cap} min={500} max={10000} step={100} onChange={setCap} display={`$${money(cap)}`} /><Slider label="Loss inflation" value={inflation} min={0} max={50} onChange={setInflation} display={`${inflation}%`} /><Slider label="Original loss to test" value={loss} min={0} max={10000} step={100} onChange={setLoss} display={`$${money(loss)}`} /></div>
    <Chart title="Fixed deductible and cap; changing loss" maxX={10000} maxY={10000} curve={pay} labels={['Original loss ($)', 'Insurer payment ($)']}><circle cx={50 + 440 * loss / 10000} cy={205 - 160 * pay(loss) / 10000} r="5" class="lab-dot" /></Chart>
    <p class="lab-result" aria-live="polite">Inflated loss ${money(loss * factor)} → insurer pays <strong>${money(pay(loss))}</strong></p>
    <h3>What happens to the payment distribution?</h3><p>Assume original loss is uniform from $0 to $10,000. Whole ranges of losses collapse to zero or to the cap.</p>
    <dl class="lab-statistics"><div><dt>Probability of zero payment</dt><dd>{percent(m.massZero)}</dd></div><div><dt>Probability at the payment cap</dt><dd>{percent(m.massCap)}</dd></div><div><dt>Mean payment per loss</dt><dd>${money(m.mean)}</dd></div><div><dt>Payment SD</dt><dd>${money(Math.sqrt(m.variance))}</dd></div></dl><p>A cap on covered loss before coinsurance would define a different contract. The displayed formula specifies the order here.</p>
  </section>;
}
export function CLTLab() {
  const [n, setN] = useState(1), [seed, setSeed] = useState(12345), [view, setView] = useState('mean');
  const values = useMemo(() => exponentialSampleMeans(n, 1200, seed), [n, seed]);
  const bins = histogram(values);
  const factor = view === 'total' ? n : 1;
  const maxY = Math.max(1, ...bins) * 1.1 / factor;
  const normal = x => Math.sqrt(n / (2 * Math.PI)) * Math.exp(-n * (x / factor - 1) ** 2 / 2) / factor;
  return <section class="learning-lab"><h2>Watch averages settle as sample size grows</h2><p>Each individual loss is exponential with mean 1 and SD 1. Draw 1,200 independent samples of n losses and compare their means or totals with a normal approximation.</p>
    <Prediction question="As n increases, does each individual loss become normally distributed?" choices={['Yes', 'No']} answer={1} explanation="Only the distribution of the standardized sum or mean approaches normal. Individual losses remain exponential." />
    <div class="lab-controls"><Slider label="Losses per sample n" value={n} min={1} max={100} onChange={setN} /><label>Display<select aria-label="Display" value={view} onChange={e => setView(e.currentTarget.value)}><option value="mean">Sample means</option><option value="total">Sample totals</option></select></label><button type="button" class="problem-action" onClick={() => setSeed(seed + 1)}>Draw new samples</button></div>
    <div class="lab-chart-pair"><Chart title="Individual losses stay exponential" maxX={4} maxY={1.1} curve={x => Math.exp(-x)} /><Chart title={`Simulated ${view === 'mean' ? 'means' : 'totals'} and normal curve`} maxX={4 * factor} maxY={maxY} curve={normal} labels={[view === 'mean' ? 'Sample mean' : 'Sample total', 'Density']}>{bins.map((height, i) => <rect key={i} x={50 + i * 11} width="10" y={205 - 160 * height / factor / maxY} height={160 * height / factor / maxY} class="lab-bar" />)}</Chart></div>
    <p class="lab-result">Theoretical {view === 'mean' ? 'mean = 1; SD = 1/√n' : 'mean = n; SD = √n'}: <strong>mean {view === 'mean' ? 1 : n}, SD {(view === 'mean' ? 1 / Math.sqrt(n) : Math.sqrt(n)).toFixed(3)}</strong></p><p>The bars are a simulation; the line is an approximation. The chart shows values up to {4 * factor}; observations beyond that range are omitted without rescaling the density. The two vertical scales adapt separately. This example satisfies independence, identical distributions, and finite variance; a sample size of 30 is not a universal guarantee.</p>
  </section>;
}
export function LearningLab({ topicId }) {
  if (topicId === 'f2-bayes-theorem') return <BayesLab />;
  if (['urv-a2-pdf', 'urv-a3-cdf', 'urv-c1-continuous-uniform', 'urv-d2-conditional-continuous'].includes(topicId)) return <DensityLab conditional={topicId === 'urv-d2-conditional-continuous'} />;
  if (/^urv-[gh]/.test(topicId)) return <PaymentLab />;
  if (topicId === 'mrv-f1-central-limit-theorem') return <CLTLab />;
  return null;
}

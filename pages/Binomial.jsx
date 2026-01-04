export function Binomial() {
  return (
    <>
      <h1 class="page-title">B.2 Binomial Distribution</h1>
      <p class="page-subtitle">Discrete Distributions</p>

      <section class="intro">
        <p>
          The binomial distribution models the number of successes in a fixed
          number of independent trials, each with the same probability of success.
          It's one of the most important distributions in probability.
        </p>
      </section>

      <section class="definition-block">
        <h2>Setup</h2>
        <div class="definition">
          <p>
            <strong>Binomial experiment requirements:</strong>
          </p>
          <ul class="concept-list">
            <li>Fixed number of trials: n</li>
            <li>Each trial is independent</li>
            <li>Each trial has exactly two outcomes: success or failure</li>
            <li>Same probability of success p on each trial</li>
          </ul>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ Bin(n, p)</span>
            <span class="notation-meaning">X is binomial with n trials, success prob p</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">n</span>
            <span class="notation-meaning">Number of trials</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">p</span>
            <span class="notation-meaning">Probability of success on each trial</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">q = 1 − p</span>
            <span class="notation-meaning">Probability of failure</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF</h2>
        <div class="definition">
          <p>
            <strong>Probability Mass Function:</strong>
          </p>
          <div class="formula" data-latex="P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} = \binom{n}{k} p^k q^{n-k}"></div>
          <p>for k = 0, 1, 2, ..., n</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Three parts multiplied together:
          </p>
          <div class="visual">
            <div class="binom-breakdown">
              <div class="binom-part">
                <span class="binom-formula">C(n,k)</span>
                <span class="binom-meaning">Ways to choose which k trials succeed</span>
              </div>
              <div class="binom-times">×</div>
              <div class="binom-part">
                <span class="binom-formula">p^k</span>
                <span class="binom-meaning">Prob of k successes</span>
              </div>
              <div class="binom-times">×</div>
              <div class="binom-part">
                <span class="binom-formula">(1−p)^(n−k)</span>
                <span class="binom-meaning">Prob of n−k failures</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Flip a fair coin 5 times. P(exactly 3 heads)?
          </p>
          <div class="formula" data-latex="P(X = 3) = \binom{5}{3} (0.5)^3 (0.5)^2 = 10 \times 0.125 \times 0.25 = 0.3125"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>Cumulative Distribution Function:</strong>
          </p>
          <div class="formula" data-latex="F(x) = P(X \leq x) = \sum_{k=0}^{\lfloor x \rfloor} \binom{n}{k} p^k (1-p)^{n-k}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Sum PMF from 0 up to x. No closed form — 
            use tables, calculator, or software for exact values.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = np"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> On average, if you do n trials with success
            probability p, you expect np successes. 100 trials × 30% success = 30 expected.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die 60 times. Expected number of 6s?
          </p>
          <div class="formula" data-latex="E[X] = 60 \times \frac{1}{6} = 10"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance and Standard Deviation:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = np(1-p) = npq"></div>
          <div class="formula" data-latex="\sigma = \sqrt{npq}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Variance is maximized when p = 0.5 (most
            uncertainty). It shrinks as p approaches 0 or 1 (more certainty).
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 60 die rolls, counting 6s:
          </p>
          <div class="formula" data-latex="Var(X) = 60 \times \frac{1}{6} \times \frac{5}{6} = \frac{50}{6} \approx 8.33"></div>
          <div class="formula" data-latex="\sigma = \sqrt{8.33} \approx 2.89"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">{'{0, 1, 2, ..., n}'}</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameters</span>
              <span class="dist-prop-val">n (trials), p (prob)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">np</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">np(1−p)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">⌊(n+1)p⌋</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">MGF</span>
              <span class="dist-prop-val">(1−p+pe^t)^n</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>MGF</h2>
        <div class="definition">
          <p>
            <strong>Moment Generating Function:</strong>
          </p>
          <div class="formula" data-latex="M_X(t) = E[e^{tX}] = (1 - p + pe^t)^n = (q + pe^t)^n"></div>
        </div>
        <div class="example">
          <p>
            <strong>Derivation of mean from MGF:</strong>
          </p>
          <div class="formula" data-latex="M'_X(t) = n(q + pe^t)^{n-1} \cdot pe^t"></div>
          <div class="formula" data-latex="E[X] = M'_X(0) = n(q + p)^{n-1} \cdot p = np"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Shape of Distribution</h2>
        <div class="visual">
          <div class="shape-cases">
            <div class="shape-case">
              <span class="shape-title">p &lt; 0.5</span>
              <span class="shape-desc">Right-skewed</span>
              <div class="shape-bar-group skew-right">
                <div class="shape-bar" style={{ height: '90%' }}></div>
                <div class="shape-bar" style={{ height: '70%' }}></div>
                <div class="shape-bar" style={{ height: '45%' }}></div>
                <div class="shape-bar" style={{ height: '20%' }}></div>
                <div class="shape-bar" style={{ height: '8%' }}></div>
              </div>
            </div>
            <div class="shape-case">
              <span class="shape-title">p = 0.5</span>
              <span class="shape-desc">Symmetric</span>
              <div class="shape-bar-group symmetric">
                <div class="shape-bar" style={{ height: '30%' }}></div>
                <div class="shape-bar" style={{ height: '70%' }}></div>
                <div class="shape-bar" style={{ height: '100%' }}></div>
                <div class="shape-bar" style={{ height: '70%' }}></div>
                <div class="shape-bar" style={{ height: '30%' }}></div>
              </div>
            </div>
            <div class="shape-case">
              <span class="shape-title">p &gt; 0.5</span>
              <span class="shape-desc">Left-skewed</span>
              <div class="shape-bar-group skew-left">
                <div class="shape-bar" style={{ height: '8%' }}></div>
                <div class="shape-bar" style={{ height: '20%' }}></div>
                <div class="shape-bar" style={{ height: '45%' }}></div>
                <div class="shape-bar" style={{ height: '70%' }}></div>
                <div class="shape-bar" style={{ height: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Binomials</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X ~ Bin(n₁, p) and Y ~ Bin(n₂, p) are
            independent with the same p, then:
          </p>
          <div class="formula" data-latex="X + Y \sim \text{Bin}(n_1 + n_2, p)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Combining two sets of independent trials
            (same success probability) gives more trials with the same probability.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Relationship to Bernoulli</h2>
        <div class="definition">
          <p>
            <strong>Connection:</strong> A Bernoulli(p) random variable is Bin(1, p).
            If X₁, X₂, ..., Xₙ are i.i.d. Bernoulli(p), then:
          </p>
          <div class="formula" data-latex="\sum_{i=1}^{n} X_i \sim \text{Bin}(n, p)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> A binomial is the sum of n independent
            Bernoulli trials. Each Xᵢ is 1 (success) or 0 (failure).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Normal Approximation</h2>
        <div class="definition">
          <p>
            <strong>Rule of thumb:</strong> When np ≥ 10 and n(1−p) ≥ 10:
          </p>
          <div class="formula" data-latex="X \approx N(np, np(1-p))"></div>
          <p>
            <strong>With continuity correction:</strong>
          </p>
          <div class="formula" data-latex="P(X \leq k) \approx \Phi\left(\frac{k + 0.5 - np}{\sqrt{npq}}\right)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> For large n, the binomial looks like a bell
            curve. The +0.5 correction accounts for discrete → continuous.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Poisson Approximation</h2>
        <div class="definition">
          <p>
            <strong>Rule of thumb:</strong> When n is large and p is small (np ≤ 10):
          </p>
          <div class="formula" data-latex="\text{Bin}(n, p) \approx \text{Poisson}(\lambda = np)"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 1000 trials, p = 0.003. P(exactly 2 successes)?
          </p>
          <p>λ = np = 1000 × 0.003 = 3</p>
          <div class="formula" data-latex="P(X = 2) \approx \frac{e^{-3} \cdot 3^2}{2!} = \frac{0.0498 \times 9}{2} \approx 0.224"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Quality Control</span>
            <p>Defective items in a sample</p>
          </div>
          <div class="app-item">
            <span class="app-title">Medicine</span>
            <p>Patients responding to treatment</p>
          </div>
          <div class="app-item">
            <span class="app-title">Insurance</span>
            <p>Number of claims filed</p>
          </div>
          <div class="app-item">
            <span class="app-title">Polling</span>
            <p>Voters supporting a candidate</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Verify binomial conditions: fixed n, independent, same p</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">"At least k" → use complement: 1 − P(X ≤ k−1)</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Remember: Var = npq, not np</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">For approximations, check conditions first</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Binomial Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PMF</h3>
            <div class="formula" data-latex="\binom{n}{k}p^k(1-p)^{n-k}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = np"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = np(1-p)"></div>
          </div>
          <div class="property">
            <h3>MGF</h3>
            <div class="formula" data-latex="(q + pe^t)^n"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Exponential() {
  return (
    <>
      <h1 class="page-title">C.2 Exponential Distribution</h1>
      <p class="page-subtitle">Continuous Distributions</p>

      <section class="intro">
        <p>
          The exponential distribution models the time until an event occurs in
          a Poisson process. It's the continuous analog of the geometric
          distribution and is fundamental to survival analysis and queuing theory.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Events occur according to a Poisson process
            with rate λ. X = waiting time until the first event.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ Exp(λ)</span>
            <span class="notation-meaning">X is exponential with rate λ</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">λ (lambda)</span>
            <span class="notation-meaning">Rate parameter (events per unit time)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">θ = 1/λ</span>
            <span class="notation-meaning">Scale parameter (mean time between events)</span>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Two parameterizations:</strong> Some texts use rate λ, others
            use mean θ = 1/λ. Always check which one is being used!
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF</h2>
        <div class="definition">
          <p>
            <strong>Probability Density Function (rate form):</strong>
          </p>
          <div class="formula" data-latex="f(x) = \lambda e^{-\lambda x} \quad \text{for } x \geq 0"></div>
          <p>
            <strong>Mean form:</strong>
          </p>
          <div class="formula" data-latex="f(x) = \frac{1}{\theta} e^{-x/\theta} \quad \text{for } x \geq 0"></div>
        </div>
        <div class="visual">
          <div class="exp-pdf-visual">
            <div class="exp-curve">
              <div class="exp-line"></div>
            </div>
            <div class="exp-axis">
              <span>0</span>
              <span>x</span>
            </div>
            <span class="exp-label">f(x) = λe^(−λx)</span>
          </div>
          <p class="visual-caption">PDF: Decreasing exponential curve starting at λ</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Calls arrive at rate λ = 3 per hour.
            Find P(wait &lt; 20 minutes = 1/3 hour).
          </p>
          <div class="formula" data-latex="P(X < 1/3) = \int_0^{1/3} 3e^{-3x} dx = 1 - e^{-1} \approx 0.632"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>Cumulative Distribution Function:</strong>
          </p>
          <div class="formula" data-latex="F(x) = P(X \leq x) = 1 - e^{-\lambda x} \quad \text{for } x \geq 0"></div>
          <p>
            <strong>Mean form:</strong>
          </p>
          <div class="formula" data-latex="F(x) = 1 - e^{-x/\theta} \quad \text{for } x \geq 0"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Key insight:</strong> The CDF has a simple closed form — no
            tables needed! This makes exponential calculations straightforward.
          </p>
        </div>
        <div class="visual">
          <div class="exp-cdf-visual">
            <div class="exp-cdf-curve"></div>
            <div class="exp-cdf-axis">
              <span>0</span>
              <span>x</span>
            </div>
            <div class="exp-cdf-labels">
              <span>1</span>
              <span>0</span>
            </div>
          </div>
          <p class="visual-caption">CDF: Rises from 0, approaches 1 asymptotically</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Survival Function</h2>
        <div class="definition">
          <p>
            <strong>Probability of surviving past time x:</strong>
          </p>
          <div class="formula" data-latex="S(x) = P(X > x) = 1 - F(x) = e^{-\lambda x}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The survival function is even simpler than
            the CDF — just e^(−λx). This is widely used in reliability engineering.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> A light bulb has mean lifetime θ = 1000 hours.
            P(lasts more than 1500 hours)?
          </p>
          <div class="formula" data-latex="P(X > 1500) = e^{-1500/1000} = e^{-1.5} \approx 0.223"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = \frac{1}{\lambda} = \theta"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If events occur at rate λ per unit time,
            you wait on average 1/λ time units between events.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Buses arrive at rate 4 per hour. Expected
            wait time?
          </p>
          <div class="formula" data-latex="E[X] = \frac{1}{4} \text{ hour} = 15 \text{ minutes}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance and Standard Deviation:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = \frac{1}{\lambda^2} = \theta^2"></div>
          <div class="formula" data-latex="\sigma = \frac{1}{\lambda} = \theta"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Key property:</strong> For exponential, mean = standard
            deviation = 1/λ. This is a defining characteristic!
          </p>
        </div>
        <div class="visual">
          <div class="highlight-box">
            <span class="highlight-title">Exponential Signature</span>
            <div class="formula" data-latex="E[X] = \sigma = \frac{1}{\lambda}"></div>
            <span class="highlight-note">Mean equals standard deviation!</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">[0, ∞)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameter</span>
              <span class="dist-prop-val">λ &gt; 0 (rate) or θ &gt; 0 (mean)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">1/λ = θ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">1/λ² = θ²</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Median</span>
              <span class="dist-prop-val">ln(2)/λ ≈ 0.693/λ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">0</span>
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
          <div class="formula" data-latex="M_X(t) = \frac{\lambda}{\lambda - t} = \frac{1}{1 - \theta t} \quad \text{for } t < \lambda"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Memoryless Property</h2>
        <div class="definition">
          <p>
            <strong>The defining property:</strong>
          </p>
          <div class="formula" data-latex="P(X > s + t \,|\, X > s) = P(X > t)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Given that you've already waited s time
            units, the probability of waiting at least t more is the same as
            starting fresh. The past doesn't matter!
          </p>
        </div>
        <div class="visual">
          <div class="memoryless-visual">
            <div class="mem-past">
              <span class="mem-label">Already waited s</span>
              <div class="mem-bar waited"></div>
            </div>
            <div class="mem-arrow">→</div>
            <div class="mem-future">
              <span class="mem-label">Wait t more?</span>
              <div class="mem-bar future"></div>
            </div>
          </div>
          <p class="visual-caption">Past waiting time is "forgotten"</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> A component has exponential lifetime with
            mean 5 years. Given it's survived 3 years, expected remaining life?
          </p>
          <p>
            <strong>Answer:</strong> Still 5 years! By memorylessness, it's as
            good as new.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Memoryless Uniqueness</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> The exponential is the ONLY continuous
            distribution with the memoryless property.
          </p>
          <p>
            (The geometric is the only discrete distribution with this property.)
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Implication:</strong> If a problem states a continuous
            "memoryless" or "constant hazard rate" distribution, it must be
            exponential.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Relationship to Poisson</h2>
        <div class="definition">
          <p>
            <strong>Key connection:</strong> Poisson and exponential are two
            sides of the same coin:
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">Poisson(λt)</span>
              <p class="compare-desc">Number of events in time t</p>
              <p class="compare-vals">Discrete: 0, 1, 2, ...</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">Exponential(λ)</span>
              <p class="compare-desc">Time until next event</p>
              <p class="compare-vals">Continuous: [0, ∞)</p>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Useful identity:</strong> P(no events in time t) connects them:
          </p>
          <div class="formula" data-latex="P(X > t) = e^{-\lambda t} = P(N(t) = 0)"></div>
          <p>where N(t) ~ Poisson(λt) counts events in [0, t].</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Exponentials</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X₁, X₂, ..., Xₙ are independent Exp(λ),
            then their sum is Gamma:
          </p>
          <div class="formula" data-latex="\sum_{i=1}^{n} X_i \sim \text{Gamma}(n, \lambda)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The sum represents time until the nth
            event in a Poisson process (called Erlang distribution when n is
            an integer).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Minimum of Exponentials</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X₁ ~ Exp(λ₁), X₂ ~ Exp(λ₂), ...,
            Xₙ ~ Exp(λₙ) are independent:
          </p>
          <div class="formula" data-latex="\min(X_1, X_2, \ldots, X_n) \sim \text{Exp}(\lambda_1 + \lambda_2 + \cdots + \lambda_n)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The minimum represents time until the
            first of several competing events occurs. Rates add!
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Machine A fails at rate 0.1/year, B at
            rate 0.2/year. P(at least one fails within 2 years)?
          </p>
          <p>min(A, B) ~ Exp(0.3)</p>
          <div class="formula" data-latex="P(\min < 2) = 1 - e^{-0.3 \times 2} = 1 - e^{-0.6} \approx 0.451"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Probabilities</h2>
        <div class="definition">
          <p>
            <strong>Common calculations:</strong>
          </p>
          <div class="formula" data-latex="P(X \leq x) = 1 - e^{-\lambda x}"></div>
          <div class="formula" data-latex="P(X > x) = e^{-\lambda x}"></div>
          <div class="formula" data-latex="P(a < X < b) = e^{-\lambda a} - e^{-\lambda b}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Exp(λ = 0.5). Find P(1 &lt; X &lt; 3):
          </p>
          <div class="formula" data-latex="P(1 < X < 3) = e^{-0.5(1)} - e^{-0.5(3)} = e^{-0.5} - e^{-1.5}"></div>
          <div class="formula" data-latex="= 0.6065 - 0.2231 = 0.3834"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Percentiles</h2>
        <div class="definition">
          <p>
            <strong>Formula:</strong> The pth percentile is:
          </p>
          <div class="formula" data-latex="x_p = -\frac{\ln(1-p)}{\lambda} = -\theta \ln(1-p)"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Exp(λ = 2). Find the median (p = 0.5):
          </p>
          <div class="formula" data-latex="x_{0.5} = -\frac{\ln(0.5)}{2} = \frac{0.693}{2} = 0.347"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Reliability</span>
            <p>Time until component failure</p>
          </div>
          <div class="app-item">
            <span class="app-title">Queuing</span>
            <p>Time between customer arrivals</p>
          </div>
          <div class="app-item">
            <span class="app-title">Insurance</span>
            <p>Time until next claim</p>
          </div>
          <div class="app-item">
            <span class="app-title">Radioactive Decay</span>
            <p>Time until particle emission</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Check parameterization: rate λ or mean θ = 1/λ</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">P(X &gt; x) = e^(−λx) — simple and powerful</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Memoryless: past waiting doesn't affect future</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Mean = SD = 1/λ (exponential signature)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Exponential Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PDF</h3>
            <div class="formula" data-latex="f(x) = \lambda e^{-\lambda x}"></div>
          </div>
          <div class="property">
            <h3>CDF</h3>
            <div class="formula" data-latex="F(x) = 1 - e^{-\lambda x}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{1}{\lambda}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \frac{1}{\lambda^2}"></div>
          </div>
        </div>
      </section>
    </>
  );
}

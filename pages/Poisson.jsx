export function Poisson() {
  return (
    <>
      <h1 class="page-title">B.6 Poisson Distribution</h1>
      <p class="page-subtitle">Discrete Distributions</p>

      <section class="intro">
        <p>
          The Poisson distribution models the number of events occurring in a
          fixed interval of time or space, when events happen independently at
          a constant average rate. It's essential for modeling rare events.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Events occur randomly and independently at an
            average rate of λ per unit time (or space). X = number of events in
            one unit.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ Poisson(λ)</span>
            <span class="notation-meaning">X is Poisson with rate λ</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">λ (lambda)</span>
            <span class="notation-meaning">Average rate (events per unit)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">λ &gt; 0</span>
            <span class="notation-meaning">Rate must be positive</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Poisson Process Assumptions</h2>
        <div class="definition">
          <p>
            <strong>Requirements for a Poisson process:</strong>
          </p>
          <ul class="concept-list">
            <li>Events occur one at a time (no simultaneous events)</li>
            <li>Events are independent of each other</li>
            <li>The rate λ is constant over time</li>
            <li>The probability of an event in a small interval is proportional to interval length</li>
          </ul>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Think of random arrivals — customers at a
            store, emails received, accidents on a highway. Each event is
            independent and happens at a steady average rate.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF</h2>
        <div class="definition">
          <p>
            <strong>Probability Mass Function:</strong>
          </p>
          <div class="formula" data-latex="P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}"></div>
          <p>for k = 0, 1, 2, 3, ...</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Components:</strong>
          </p>
          <div class="visual">
            <div class="binom-breakdown">
              <div class="binom-part">
                <span class="binom-formula">e^(−λ)</span>
                <span class="binom-meaning">Probability of "no events" baseline</span>
              </div>
              <div class="binom-times">×</div>
              <div class="binom-part">
                <span class="binom-formula">λ^k</span>
                <span class="binom-meaning">Rate raised to event count</span>
              </div>
              <div class="binom-times">÷</div>
              <div class="binom-part">
                <span class="binom-formula">k!</span>
                <span class="binom-meaning">Account for ordering</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> A call center receives 4 calls per hour on
            average. P(exactly 6 calls in an hour)?
          </p>
          <div class="formula" data-latex="P(X = 6) = \frac{e^{-4} \cdot 4^6}{6!} = \frac{0.0183 \times 4096}{720} \approx 0.104"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>Cumulative Distribution Function:</strong>
          </p>
          <div class="formula" data-latex="F(x) = P(X \leq x) = \sum_{k=0}^{\lfloor x \rfloor} \frac{e^{-\lambda} \lambda^k}{k!}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Note:</strong> No closed form — must sum terms or use tables/calculator.
            Can also be expressed using the incomplete gamma function.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = \lambda"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The parameter λ IS the expected value.
            If events happen at rate 4 per hour, you expect 4 events per hour.
            Beautifully simple!
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = \lambda"></div>
          <div class="formula" data-latex="\sigma = \sqrt{\lambda}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Key property:</strong> For Poisson, mean = variance = λ. This
            is a defining characteristic and useful for identifying Poisson data.
          </p>
        </div>
        <div class="visual">
          <div class="highlight-box">
            <span class="highlight-title">Poisson Signature</span>
            <div class="formula" data-latex="E[X] = Var(X) = \lambda"></div>
            <span class="highlight-note">Mean equals variance!</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">{'{0, 1, 2, 3, ...}'}</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameter</span>
              <span class="dist-prop-val">λ &gt; 0 (rate)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">λ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">λ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">⌊λ⌋ or ⌊λ⌋−1</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">MGF</span>
              <span class="dist-prop-val">e^(λ(e^t − 1))</span>
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
          <div class="formula" data-latex="M_X(t) = E[e^{tX}] = e^{\lambda(e^t - 1)}"></div>
          <p>for all t</p>
        </div>
        <div class="example">
          <p>
            <strong>Deriving mean from MGF:</strong>
          </p>
          <div class="formula" data-latex="M'_X(t) = \lambda e^t \cdot e^{\lambda(e^t - 1)}"></div>
          <div class="formula" data-latex="E[X] = M'_X(0) = \lambda \cdot 1 \cdot e^0 = \lambda"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Shape of Distribution</h2>
        <div class="visual">
          <div class="shape-cases">
            <div class="shape-case">
              <span class="shape-title">λ &lt; 1</span>
              <span class="shape-desc">Mode at 0, right-skewed</span>
              <div class="shape-bar-group">
                <div class="shape-bar" style={{ height: '100%' }}></div>
                <div class="shape-bar" style={{ height: '50%' }}></div>
                <div class="shape-bar" style={{ height: '20%' }}></div>
                <div class="shape-bar" style={{ height: '5%' }}></div>
                <div class="shape-bar" style={{ height: '1%' }}></div>
              </div>
            </div>
            <div class="shape-case">
              <span class="shape-title">λ ≈ 3</span>
              <span class="shape-desc">Slightly right-skewed</span>
              <div class="shape-bar-group">
                <div class="shape-bar" style={{ height: '25%' }}></div>
                <div class="shape-bar" style={{ height: '60%' }}></div>
                <div class="shape-bar" style={{ height: '90%' }}></div>
                <div class="shape-bar" style={{ height: '100%' }}></div>
                <div class="shape-bar" style={{ height: '75%' }}></div>
              </div>
            </div>
            <div class="shape-case">
              <span class="shape-title">λ large</span>
              <span class="shape-desc">Nearly symmetric</span>
              <div class="shape-bar-group">
                <div class="shape-bar" style={{ height: '40%' }}></div>
                <div class="shape-bar" style={{ height: '75%' }}></div>
                <div class="shape-bar" style={{ height: '100%' }}></div>
                <div class="shape-bar" style={{ height: '75%' }}></div>
                <div class="shape-bar" style={{ height: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Scaling Property</h2>
        <div class="definition">
          <p>
            <strong>Different time intervals:</strong> If X ~ Poisson(λ) for one
            unit of time, then for t units:
          </p>
          <div class="formula" data-latex="X_t \sim \text{Poisson}(\lambda t)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Double the time, double the expected events.
            The rate λ scales linearly with the interval length.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> If 4 calls/hour, then in 30 minutes (t = 0.5):
          </p>
          <div class="formula" data-latex="X_{0.5} \sim \text{Poisson}(4 \times 0.5) = \text{Poisson}(2)"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Poissons</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X ~ Poisson(λ₁) and Y ~ Poisson(λ₂) are
            independent, then:
          </p>
          <div class="formula" data-latex="X + Y \sim \text{Poisson}(\lambda_1 + \lambda_2)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Combining two independent Poisson processes
            gives another Poisson process with the rates added.
          </p>
        </div>
        <div class="visual">
          <div class="sum-visual">
            <div class="sum-term">
              <span class="sum-label">Process 1</span>
              <span class="sum-dist">Poisson(λ₁)</span>
            </div>
            <div class="sum-plus">+</div>
            <div class="sum-term">
              <span class="sum-label">Process 2</span>
              <span class="sum-dist">Poisson(λ₂)</span>
            </div>
            <div class="sum-equals">=</div>
            <div class="sum-result">
              <span class="sum-label">Combined</span>
              <span class="sum-dist">Poisson(λ₁+λ₂)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Binomial Approximation</h2>
        <div class="definition">
          <p>
            <strong>Poisson as limit of Binomial:</strong> When n is large and p
            is small with np = λ moderate:
          </p>
          <div class="formula" data-latex="\text{Binomial}(n, p) \approx \text{Poisson}(\lambda = np)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Rule of thumb:</strong> Use Poisson approximation when n ≥ 20
            and p ≤ 0.05 (or np ≤ 10).
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 1000 items, each has 0.2% defect rate. P(3 defects)?
          </p>
          <p>Exact: Binomial(1000, 0.002), but easier with Poisson(λ = 2):</p>
          <div class="formula" data-latex="P(X = 3) \approx \frac{e^{-2} \cdot 2^3}{3!} = \frac{0.135 \times 8}{6} \approx 0.180"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Normal Approximation</h2>
        <div class="definition">
          <p>
            <strong>For large λ:</strong> When λ ≥ 10:
          </p>
          <div class="formula" data-latex="\text{Poisson}(\lambda) \approx N(\lambda, \lambda)"></div>
          <p>
            <strong>With continuity correction:</strong>
          </p>
          <div class="formula" data-latex="P(X \leq k) \approx \Phi\left(\frac{k + 0.5 - \lambda}{\sqrt{\lambda}}\right)"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Relationship to Exponential</h2>
        <div class="definition">
          <p>
            <strong>Key connection:</strong> If events follow a Poisson process
            with rate λ, then the time between events is Exponential(λ).
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">Poisson(λ)</span>
              <p class="compare-desc">Number of events in time t</p>
              <p class="compare-vals">Discrete: 0, 1, 2, ...</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">Exponential(λ)</span>
              <p class="compare-desc">Time between events</p>
              <p class="compare-vals">Continuous: [0, ∞)</p>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Call Centers</span>
            <p>Calls received per hour</p>
          </div>
          <div class="app-item">
            <span class="app-title">Insurance</span>
            <p>Claims filed per month</p>
          </div>
          <div class="app-item">
            <span class="app-title">Traffic</span>
            <p>Cars passing a point per minute</p>
          </div>
          <div class="app-item">
            <span class="app-title">Biology</span>
            <p>Mutations per DNA strand</p>
          </div>
          <div class="app-item">
            <span class="app-title">Manufacturing</span>
            <p>Defects per unit area</p>
          </div>
          <div class="app-item">
            <span class="app-title">Astronomy</span>
            <p>Meteorites hitting Earth per year</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Recursive Formula</h2>
        <div class="definition">
          <p>
            <strong>Useful for calculation:</strong>
          </p>
          <div class="formula" data-latex="P(X = k+1) = \frac{\lambda}{k+1} P(X = k)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Start with P(X = 0) = e^(−λ), then
            multiply by λ/1, λ/2, λ/3, ... to get successive probabilities.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> λ = 3
          </p>
          <p>P(X = 0) = e^(−3) ≈ 0.0498</p>
          <p>P(X = 1) = (3/1) × 0.0498 ≈ 0.1494</p>
          <p>P(X = 2) = (3/2) × 0.1494 ≈ 0.2240</p>
          <p>P(X = 3) = (3/3) × 0.2240 ≈ 0.2240</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Remember: Mean = Variance = λ (Poisson signature)</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Scale λ for different time intervals: λt for t units</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Use recursive formula for consecutive probabilities</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">P(X = 0) = e^(−λ) is often the starting point</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Poisson Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PMF</h3>
            <div class="formula" data-latex="P(X=k) = \frac{e^{-\lambda}\lambda^k}{k!}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \lambda"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \lambda"></div>
          </div>
          <div class="property">
            <h3>MGF</h3>
            <div class="formula" data-latex="e^{\lambda(e^t - 1)}"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Lognormal() {
  return (
    <>
      <h1 class="page-title">C.6 Lognormal Distribution</h1>
      <p class="page-subtitle">Continuous Distributions</p>

      <section class="intro">
        <p>
          The lognormal distribution arises when the logarithm of a random
          variable is normally distributed. It's always positive and right-skewed,
          making it ideal for modeling quantities that can't be negative, such as
          prices, incomes, and lifetimes.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> X has a lognormal distribution if
            ln(X) is normally distributed:
          </p>
          <div class="formula" data-latex="X \sim \text{Lognormal}(\mu, \sigma^2) \iff \ln(X) \sim N(\mu, \sigma^2)"></div>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ Lognormal(μ, σ²)</span>
            <span class="notation-meaning">X is lognormal</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">μ</span>
            <span class="notation-meaning">Mean of ln(X), NOT mean of X</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">σ²</span>
            <span class="notation-meaning">Variance of ln(X), NOT variance of X</span>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Critical warning:</strong> The parameters μ and σ² are the
            mean and variance of the LOG of X, not of X itself!
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Construction</h2>
        <div class="definition">
          <p>
            <strong>Two equivalent views:</strong>
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">If Z ~ N(μ, σ²)</span>
              <p class="compare-desc">then X = e^Z is lognormal</p>
              <p class="compare-vals">Normal → Lognormal</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">If X ~ Lognormal</span>
              <p class="compare-desc">then Z = ln(X) ~ N(μ, σ²)</p>
              <p class="compare-vals">Lognormal → Normal</p>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Exponentiating a normal gives lognormal.
            Taking log of lognormal gives normal.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF</h2>
        <div class="definition">
          <p>
            <strong>Probability Density Function:</strong>
          </p>
          <div class="formula" data-latex="f(x) = \frac{1}{x\sigma\sqrt{2\pi}} e^{-\frac{(\ln x - \mu)^2}{2\sigma^2}} \quad \text{for } x > 0"></div>
        </div>
        <div class="visual">
          <div class="lognormal-visual">
            <div class="lognormal-curve"></div>
            <div class="lognormal-axis">
              <span>0</span>
              <span>x</span>
            </div>
          </div>
          <p class="visual-caption">Right-skewed, always positive, long right tail</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Key features:</strong>
          </p>
          <ul class="concept-list">
            <li>Support: x &gt; 0 only (always positive)</li>
            <li>Right-skewed with long tail</li>
            <li>Mode &lt; Median &lt; Mean</li>
          </ul>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>Using the normal CDF:</strong>
          </p>
          <div class="formula" data-latex="F(x) = P(X \leq x) = \Phi\left(\frac{\ln x - \mu}{\sigma}\right)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Strategy:</strong> Transform to normal, then use standard
            normal tables.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Lognormal(2, 0.25). Find P(X &lt; 10):
          </p>
          <div class="formula" data-latex="P(X < 10) = \Phi\left(\frac{\ln 10 - 2}{0.5}\right) = \Phi\left(\frac{2.303 - 2}{0.5}\right) = \Phi(0.606) \approx 0.728"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean of X:</strong>
          </p>
          <div class="formula" data-latex="E[X] = e^{\mu + \sigma^2/2}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Warning:</strong> The mean of X is NOT e^μ! The extra σ²/2
            term accounts for the asymmetry.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Lognormal(2, 0.25):
          </p>
          <div class="formula" data-latex="E[X] = e^{2 + 0.25/2} = e^{2.125} \approx 8.37"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance of X:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = e^{2\mu + \sigma^2}(e^{\sigma^2} - 1)"></div>
          <p>Or equivalently:</p>
          <div class="formula" data-latex="Var(X) = (E[X])^2(e^{\sigma^2} - 1)"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Lognormal(2, 0.25):
          </p>
          <div class="formula" data-latex="Var(X) = e^{4 + 0.25}(e^{0.25} - 1) = e^{4.25}(1.284 - 1) \approx 70.1 \times 0.284 \approx 19.9"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">(0, ∞)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameters</span>
              <span class="dist-prop-val">μ ∈ ℝ, σ² &gt; 0</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">e^(μ + σ²/2)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">e^(2μ+σ²)(e^(σ²)−1)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Median</span>
              <span class="dist-prop-val">e^μ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">e^(μ−σ²)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Median and Mode</h2>
        <div class="definition">
          <p>
            <strong>Median:</strong>
          </p>
          <div class="formula" data-latex="\text{Median}(X) = e^{\mu}"></div>
          <p>
            <strong>Mode:</strong>
          </p>
          <div class="formula" data-latex="\text{Mode}(X) = e^{\mu - \sigma^2}"></div>
        </div>
        <div class="visual">
          <div class="highlight-box">
            <span class="highlight-title">Order of Centers</span>
            <p>Mode &lt; Median &lt; Mean</p>
            <span class="highlight-note">Due to right skewness</span>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The median is simply e^μ — the "natural"
            center. The mode is smaller, mean is larger due to the long right tail.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Moments</h2>
        <div class="definition">
          <p>
            <strong>kth moment:</strong>
          </p>
          <div class="formula" data-latex="E[X^k] = e^{k\mu + k^2\sigma^2/2}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Note:</strong> The MGF does not exist for lognormal (moments
            grow too fast), but all individual moments do exist.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Second moment:</strong>
          </p>
          <div class="formula" data-latex="E[X^2] = e^{2\mu + 2\sigma^2}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Product of Lognormals</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X₁ ~ Lognormal(μ₁, σ₁²) and
            X₂ ~ Lognormal(μ₂, σ₂²) are independent:
          </p>
          <div class="formula" data-latex="X_1 \cdot X_2 \sim \text{Lognormal}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Why:</strong> ln(X₁X₂) = ln(X₁) + ln(X₂), and sum of normals
            is normal. Parameters add because log-parameters add.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Powers of Lognormal</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X ~ Lognormal(μ, σ²), then:
          </p>
          <div class="formula" data-latex="X^c \sim \text{Lognormal}(c\mu, c^2\sigma^2)"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> If X ~ Lognormal(2, 1), find distribution of X²:
          </p>
          <div class="formula" data-latex="X^2 \sim \text{Lognormal}(4, 4)"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Probabilities</h2>
        <div class="definition">
          <p>
            <strong>General method:</strong> Convert to normal using logs:
          </p>
          <div class="formula" data-latex="P(a < X < b) = P(\ln a < \ln X < \ln b) = \Phi\left(\frac{\ln b - \mu}{\sigma}\right) - \Phi\left(\frac{\ln a - \mu}{\sigma}\right)"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Lognormal(3, 0.5²). Find P(15 &lt; X &lt; 30):
          </p>
          <div class="formula" data-latex="P(15 < X < 30) = \Phi\left(\frac{\ln 30 - 3}{0.5}\right) - \Phi\left(\frac{\ln 15 - 3}{0.5}\right)"></div>
          <div class="formula" data-latex="= \Phi\left(\frac{3.401 - 3}{0.5}\right) - \Phi\left(\frac{2.708 - 3}{0.5}\right)"></div>
          <div class="formula" data-latex="= \Phi(0.802) - \Phi(-0.584) \approx 0.789 - 0.280 = 0.509"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Percentiles</h2>
        <div class="definition">
          <p>
            <strong>Formula:</strong> The pth percentile is:
          </p>
          <div class="formula" data-latex="x_p = e^{\mu + z_p\sigma}"></div>
          <p>where z_p = Φ⁻¹(p) is the pth percentile of N(0, 1).</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Lognormal(3, 0.5²). Find 95th percentile:
          </p>
          <p>z₀.₉₅ = 1.645</p>
          <div class="formula" data-latex="x_{0.95} = e^{3 + 1.645(0.5)} = e^{3.8225} \approx 45.7"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Finding Parameters from Mean and Variance</h2>
        <div class="definition">
          <p>
            <strong>Given E[X] and Var(X), find μ and σ²:</strong>
          </p>
          <div class="formula" data-latex="\sigma^2 = \ln\left(1 + \frac{Var(X)}{(E[X])^2}\right)"></div>
          <div class="formula" data-latex="\mu = \ln(E[X]) - \frac{\sigma^2}{2}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> E[X] = 10, Var(X) = 25. Find μ, σ²:
          </p>
          <div class="formula" data-latex="\sigma^2 = \ln\left(1 + \frac{25}{100}\right) = \ln(1.25) \approx 0.223"></div>
          <div class="formula" data-latex="\mu = \ln(10) - \frac{0.223}{2} = 2.303 - 0.111 \approx 2.19"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Coefficient of Variation</h2>
        <div class="definition">
          <p>
            <strong>CV depends only on σ:</strong>
          </p>
          <div class="formula" data-latex="CV = \frac{\sigma_X}{E[X]} = \sqrt{e^{\sigma^2} - 1}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Note:</strong> The CV is independent of μ! Changing μ scales
            the distribution but doesn't change its relative spread.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Finance</span>
            <p>Stock prices, asset values</p>
          </div>
          <div class="app-item">
            <span class="app-title">Insurance</span>
            <p>Claim sizes, loss amounts</p>
          </div>
          <div class="app-item">
            <span class="app-title">Income</span>
            <p>Salary distributions</p>
          </div>
          <div class="app-item">
            <span class="app-title">Reliability</span>
            <p>Failure times, lifetimes</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Normal vs Lognormal Comparison</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>Normal</span>
              <span>Lognormal</span>
            </div>
            <div class="summary-row">
              <span>Support</span>
              <span>(−∞, ∞)</span>
              <span>(0, ∞)</span>
            </div>
            <div class="summary-row">
              <span>Shape</span>
              <span>Symmetric</span>
              <span>Right-skewed</span>
            </div>
            <div class="summary-row">
              <span>Centers</span>
              <span>Mean = Median = Mode</span>
              <span>Mode &lt; Median &lt; Mean</span>
            </div>
            <div class="summary-row">
              <span>Sum of i.i.d.</span>
              <span>Normal</span>
              <span>Not lognormal</span>
            </div>
            <div class="summary-row">
              <span>Product of i.i.d.</span>
              <span>Not normal</span>
              <span>Lognormal</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">μ, σ² are parameters of ln(X), not X</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Mean E[X] = e^(μ + σ²/2), not e^μ</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Median = e^μ (simple!)</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Convert to normal for CDF calculations</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Lognormal Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Definition</h3>
            <div class="formula" data-latex="\ln(X) \sim N(\mu, \sigma^2)"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = e^{\mu + \sigma^2/2}"></div>
          </div>
          <div class="property">
            <h3>Median</h3>
            <div class="formula" data-latex="e^{\mu}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="e^{2\mu+\sigma^2}(e^{\sigma^2}-1)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

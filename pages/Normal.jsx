export function Normal() {
  return (
    <>
      <h1 class="page-title">C.5 Normal Distribution</h1>
      <p class="page-subtitle">Continuous Distributions</p>

      <section class="intro">
        <p>
          The normal (Gaussian) distribution is the most important distribution
          in probability and statistics. It arises naturally from the Central
          Limit Theorem and describes countless phenomena in nature, finance,
          and science.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> X has a normal distribution with mean μ and
            variance σ².
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ N(μ, σ²)</span>
            <span class="notation-meaning">Normal with mean μ, variance σ²</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">μ (mu)</span>
            <span class="notation-meaning">Mean (location parameter)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">σ² (sigma squared)</span>
            <span class="notation-meaning">Variance (spread parameter)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">σ</span>
            <span class="notation-meaning">Standard deviation</span>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Warning:</strong> Some texts write N(μ, σ) using standard
            deviation. Always check which parameterization is used!
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF</h2>
        <div class="definition">
          <p>
            <strong>Probability Density Function:</strong>
          </p>
          <div class="formula" data-latex="f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}} \quad \text{for } -\infty < x < \infty"></div>
        </div>
        <div class="visual">
          <div class="normal-visual">
            <div class="normal-curve">
              <div class="normal-bell"></div>
            </div>
            <div class="normal-axis">
              <span>μ−3σ</span>
              <span>μ−2σ</span>
              <span>μ−σ</span>
              <span>μ</span>
              <span>μ+σ</span>
              <span>μ+2σ</span>
              <span>μ+3σ</span>
            </div>
          </div>
          <p class="visual-caption">The famous bell curve, symmetric around μ</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Key features:</strong>
          </p>
          <ul class="concept-list">
            <li>Symmetric about μ</li>
            <li>Maximum at x = μ (mode = median = mean)</li>
            <li>Inflection points at μ ± σ</li>
            <li>Tails extend to ±∞ but decay rapidly</li>
          </ul>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>No closed form.</strong> Defined using the standard normal CDF:
          </p>
          <div class="formula" data-latex="F(x) = P(X \leq x) = \Phi\left(\frac{x - \mu}{\sigma}\right)"></div>
          <p>where Φ is the standard normal CDF (tabulated).</p>
        </div>
        <div class="intuition">
          <p>
            <strong>In practice:</strong> Standardize to Z, then use tables or
            calculator.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Standard Normal Z ~ N(0, 1)</h2>
        <div class="definition">
          <p>
            <strong>The standard normal:</strong> μ = 0, σ = 1
          </p>
          <div class="formula" data-latex="\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}"></div>
          <div class="formula" data-latex="\Phi(z) = P(Z \leq z) = \int_{-\infty}^{z} \phi(t) \, dt"></div>
        </div>
        <div class="visual">
          <div class="highlight-box">
            <span class="highlight-title">Standardization</span>
            <div class="formula" data-latex="Z = \frac{X - \mu}{\sigma}"></div>
            <span class="highlight-note">Converts any normal to N(0, 1)</span>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ N(100, 225), so σ = 15. Find P(X &lt; 130):
          </p>
          <div class="formula" data-latex="Z = \frac{130 - 100}{15} = 2"></div>
          <div class="formula" data-latex="P(X < 130) = \Phi(2) \approx 0.9772"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">(−∞, ∞)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameters</span>
              <span class="dist-prop-val">μ ∈ ℝ, σ² &gt; 0</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">μ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">σ²</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Median</span>
              <span class="dist-prop-val">μ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">μ</span>
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
          <div class="formula" data-latex="M_X(t) = e^{\mu t + \frac{\sigma^2 t^2}{2}}"></div>
        </div>
        <div class="example">
          <p>
            <strong>For standard normal Z ~ N(0, 1):</strong>
          </p>
          <div class="formula" data-latex="M_Z(t) = e^{t^2/2}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Empirical Rule (68-95-99.7)</h2>
        <div class="definition">
          <p>
            <strong>Approximate probabilities within σ-intervals:</strong>
          </p>
        </div>
        <div class="visual">
          <div class="empirical-rule">
            <div class="emp-row">
              <span class="emp-interval">μ ± 1σ</span>
              <span class="emp-prob">≈ 68%</span>
              <div class="emp-bar" style={{ width: '68%' }}></div>
            </div>
            <div class="emp-row">
              <span class="emp-interval">μ ± 2σ</span>
              <span class="emp-prob">≈ 95%</span>
              <div class="emp-bar" style={{ width: '95%' }}></div>
            </div>
            <div class="emp-row">
              <span class="emp-interval">μ ± 3σ</span>
              <span class="emp-prob">≈ 99.7%</span>
              <div class="emp-bar" style={{ width: '99.7%' }}></div>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Useful approximations:</strong> About 2/3 within 1σ,
            about 95% within 2σ, nearly all within 3σ.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Symmetry Properties</h2>
        <div class="definition">
          <p>
            <strong>For Z ~ N(0, 1):</strong>
          </p>
          <div class="formula" data-latex="\Phi(-z) = 1 - \Phi(z)"></div>
          <div class="formula" data-latex="P(Z > z) = P(Z < -z) = 1 - \Phi(z)"></div>
          <div class="formula" data-latex="P(|Z| < z) = 2\Phi(z) - 1"></div>
        </div>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Expression</span>
              <span>Equivalent</span>
            </div>
            <div class="summary-row">
              <span>P(Z &gt; z)</span>
              <span>1 − Φ(z)</span>
            </div>
            <div class="summary-row">
              <span>P(Z &lt; −z)</span>
              <span>1 − Φ(z)</span>
            </div>
            <div class="summary-row">
              <span>P(a &lt; Z &lt; b)</span>
              <span>Φ(b) − Φ(a)</span>
            </div>
            <div class="summary-row">
              <span>P(|Z| &lt; z)</span>
              <span>2Φ(z) − 1</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Φ Values</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>z</span>
              <span>Φ(z)</span>
              <span>P(Z &gt; z)</span>
            </div>
            <div class="summary-row">
              <span>0</span>
              <span>0.5000</span>
              <span>0.5000</span>
            </div>
            <div class="summary-row">
              <span>1</span>
              <span>0.8413</span>
              <span>0.1587</span>
            </div>
            <div class="summary-row">
              <span>1.645</span>
              <span>0.9500</span>
              <span>0.0500</span>
            </div>
            <div class="summary-row">
              <span>1.96</span>
              <span>0.9750</span>
              <span>0.0250</span>
            </div>
            <div class="summary-row">
              <span>2</span>
              <span>0.9772</span>
              <span>0.0228</span>
            </div>
            <div class="summary-row">
              <span>2.326</span>
              <span>0.9900</span>
              <span>0.0100</span>
            </div>
            <div class="summary-row">
              <span>2.576</span>
              <span>0.9950</span>
              <span>0.0050</span>
            </div>
            <div class="summary-row">
              <span>3</span>
              <span>0.9987</span>
              <span>0.0013</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Linear Combinations</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X ~ N(μ, σ²), then for constants a, b:
          </p>
          <div class="formula" data-latex="aX + b \sim N(a\mu + b, a^2\sigma^2)"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ N(10, 4). Find distribution of Y = 3X − 5:
          </p>
          <div class="formula" data-latex="Y \sim N(3(10) - 5, 3^2(4)) = N(25, 36)"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Normals</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X₁ ~ N(μ₁, σ₁²) and X₂ ~ N(μ₂, σ₂²) are
            independent:
          </p>
          <div class="formula" data-latex="X_1 + X_2 \sim N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)"></div>
        </div>
        <div class="visual">
          <div class="sum-visual">
            <div class="sum-term">
              <span class="sum-label">X₁</span>
              <span class="sum-dist">N(μ₁, σ₁²)</span>
            </div>
            <div class="sum-plus">+</div>
            <div class="sum-term">
              <span class="sum-label">X₂</span>
              <span class="sum-dist">N(μ₂, σ₂²)</span>
            </div>
            <div class="sum-equals">=</div>
            <div class="sum-result">
              <span class="sum-label">Sum</span>
              <span class="sum-dist">N(μ₁+μ₂, σ₁²+σ₂²)</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Key insight:</strong> Means add, variances add. The sum of
            independent normals is normal!
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sample Mean Distribution</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X₁, ..., Xₙ are i.i.d. N(μ, σ²):
          </p>
          <div class="formula" data-latex="\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i \sim N\left(\mu, \frac{\sigma^2}{n}\right)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Interpretation:</strong> Sample mean has same center but
            smaller variance — averaging reduces variability by factor n.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Central Limit Theorem</h2>
        <div class="definition">
          <p>
            <strong>CLT:</strong> For large n, the sum (or average) of i.i.d.
            random variables is approximately normal, regardless of the original
            distribution:
          </p>
          <div class="formula" data-latex="\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1)"></div>
        </div>
        <div class="visual">
          <div class="highlight-box">
            <span class="highlight-title">CLT Rule of Thumb</span>
            <p>n ≥ 30 usually sufficient</p>
            <span class="highlight-note">Unless distribution is very skewed</span>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Why normal is everywhere:</strong> Many real-world quantities
            are sums of many small effects, hence approximately normal.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Normal Approximation to Binomial</h2>
        <div class="definition">
          <p>
            <strong>Approximation:</strong> For large n, Binomial(n, p) ≈ Normal:
          </p>
          <div class="formula" data-latex="\text{Binomial}(n, p) \approx N(np, np(1-p))"></div>
          <p>
            <strong>Rule of thumb:</strong> np ≥ 10 and n(1−p) ≥ 10
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Flip fair coin 100 times. P(45 ≤ X ≤ 55)?
          </p>
          <p>X ~ Bin(100, 0.5). Use N(50, 25):</p>
          <div class="formula" data-latex="P(44.5 < X < 55.5) \approx P\left(\frac{44.5-50}{5} < Z < \frac{55.5-50}{5}\right)"></div>
          <div class="formula" data-latex="= P(-1.1 < Z < 1.1) = 2\Phi(1.1) - 1 \approx 0.729"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Continuity Correction</h2>
        <div class="definition">
          <p>
            <strong>When approximating discrete with continuous:</strong>
          </p>
        </div>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Discrete</span>
              <span>Continuous</span>
            </div>
            <div class="summary-row">
              <span>P(X = k)</span>
              <span>P(k−0.5 &lt; Y &lt; k+0.5)</span>
            </div>
            <div class="summary-row">
              <span>P(X ≤ k)</span>
              <span>P(Y &lt; k+0.5)</span>
            </div>
            <div class="summary-row">
              <span>P(X &lt; k)</span>
              <span>P(Y &lt; k−0.5)</span>
            </div>
            <div class="summary-row">
              <span>P(X ≥ k)</span>
              <span>P(Y &gt; k−0.5)</span>
            </div>
            <div class="summary-row">
              <span>P(X &gt; k)</span>
              <span>P(Y &gt; k+0.5)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Percentiles</h2>
        <div class="definition">
          <p>
            <strong>Formula:</strong> The pth percentile of N(μ, σ²) is:
          </p>
          <div class="formula" data-latex="x_p = \mu + z_p \sigma"></div>
          <p>where z_p = Φ⁻¹(p) is the pth percentile of N(0, 1).</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ N(100, 225). Find 90th percentile:
          </p>
          <p>z₀.₉₀ = 1.282, so:</p>
          <div class="formula" data-latex="x_{0.90} = 100 + 1.282(15) = 119.23"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Measurement Error</span>
            <p>Errors in scientific measurements</p>
          </div>
          <div class="app-item">
            <span class="app-title">Heights/Weights</span>
            <p>Human physical characteristics</p>
          </div>
          <div class="app-item">
            <span class="app-title">Test Scores</span>
            <p>IQ, standardized tests</p>
          </div>
          <div class="app-item">
            <span class="app-title">Finance</span>
            <p>Stock returns (approximately)</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Always standardize: Z = (X − μ)/σ</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Use symmetry: Φ(−z) = 1 − Φ(z)</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Sum of normals is normal (variances add)</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Continuity correction for discrete approximations</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Normal Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PDF</h3>
            <div class="formula" data-latex="f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \mu"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \sigma^2"></div>
          </div>
          <div class="property">
            <h3>MGF</h3>
            <div class="formula" data-latex="e^{\mu t + \sigma^2 t^2/2}"></div>
          </div>
        </div>
      </section>
    </>
  );
}

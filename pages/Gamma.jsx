export function Gamma() {
  return (
    <>
      <h1 class="page-title">C.3 Gamma Distribution</h1>
      <p class="page-subtitle">Continuous Distributions</p>

      <section class="intro">
        <p>
          The gamma distribution is a flexible two-parameter family that
          generalizes the exponential. It models waiting times for multiple
          events and appears throughout statistics, insurance, and reliability.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> X represents the waiting time until α events
            occur in a Poisson process with rate λ.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ Gamma(α, λ)</span>
            <span class="notation-meaning">Shape α, rate λ parameterization</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">X ~ Gamma(α, θ)</span>
            <span class="notation-meaning">Shape α, scale θ = 1/λ parameterization</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">α (alpha)</span>
            <span class="notation-meaning">Shape parameter (α &gt; 0)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">λ or θ</span>
            <span class="notation-meaning">Rate (λ) or scale (θ = 1/λ)</span>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Warning:</strong> Two parameterizations exist! Always check
            whether the problem uses rate λ or scale θ = 1/λ.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>The Gamma Function</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The gamma function Γ(α) generalizes
            factorials to non-integers:
          </p>
          <div class="formula" data-latex="\Gamma(\alpha) = \int_0^{\infty} t^{\alpha-1} e^{-t} dt"></div>
        </div>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>Formula</span>
            </div>
            <div class="summary-row">
              <span>Factorial relation</span>
              <span>Γ(n) = (n−1)! for positive integers</span>
            </div>
            <div class="summary-row">
              <span>Recursion</span>
              <span>Γ(α+1) = αΓ(α)</span>
            </div>
            <div class="summary-row">
              <span>Γ(1)</span>
              <span>1</span>
            </div>
            <div class="summary-row">
              <span>Γ(1/2)</span>
              <span>√π</span>
            </div>
            <div class="summary-row">
              <span>Γ(3/2)</span>
              <span>√π / 2</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Examples:</strong>
          </p>
          <p>Γ(4) = 3! = 6</p>
          <p>Γ(5) = 4! = 24</p>
          <p>Γ(5/2) = (3/2)Γ(3/2) = (3/2)(1/2)√π = (3/4)√π</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF</h2>
        <div class="definition">
          <p>
            <strong>Rate parameterization (λ):</strong>
          </p>
          <div class="formula" data-latex="f(x) = \frac{\lambda^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\lambda x} \quad \text{for } x > 0"></div>
          <p>
            <strong>Scale parameterization (θ):</strong>
          </p>
          <div class="formula" data-latex="f(x) = \frac{1}{\Gamma(\alpha) \theta^\alpha} x^{\alpha-1} e^{-x/\theta} \quad \text{for } x > 0"></div>
        </div>
        <div class="visual">
          <div class="gamma-shapes-visual">
            <div class="gamma-shape">
              <span class="shape-title">α &lt; 1</span>
              <div class="gamma-curve decreasing"></div>
              <span class="shape-desc">J-shaped, mode at 0</span>
            </div>
            <div class="gamma-shape">
              <span class="shape-title">α = 1</span>
              <div class="gamma-curve exponential"></div>
              <span class="shape-desc">Exponential</span>
            </div>
            <div class="gamma-shape">
              <span class="shape-title">α &gt; 1</span>
              <div class="gamma-curve bell"></div>
              <span class="shape-desc">Bell-shaped, mode &gt; 0</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>No closed form in general.</strong> Expressed using the
            incomplete gamma function:
          </p>
          <div class="formula" data-latex="F(x) = \frac{\gamma(\alpha, \lambda x)}{\Gamma(\alpha)}"></div>
          <p>where γ(α, x) is the lower incomplete gamma function.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>In practice:</strong> Use tables, calculators, or software.
            For integer α, can sum Poisson probabilities (see below).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = \frac{\alpha}{\lambda} = \alpha\theta"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If each event takes 1/λ time on average,
            waiting for α events takes α/λ time.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Gamma(3, 2) with rate λ = 2:
          </p>
          <div class="formula" data-latex="E[X] = \frac{3}{2} = 1.5"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = \frac{\alpha}{\lambda^2} = \alpha\theta^2"></div>
          <div class="formula" data-latex="\sigma = \frac{\sqrt{\alpha}}{\lambda} = \sqrt{\alpha}\theta"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Gamma(3, 2) with rate λ = 2:
          </p>
          <div class="formula" data-latex="Var(X) = \frac{3}{4} = 0.75"></div>
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
              <span class="dist-prop-val">α &gt; 0 (shape), λ &gt; 0 (rate)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">α/λ</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">α/λ²</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">(α−1)/λ for α ≥ 1</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">MGF</span>
              <span class="dist-prop-val">(λ/(λ−t))^α for t &lt; λ</span>
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
          <div class="formula" data-latex="M_X(t) = \left(\frac{\lambda}{\lambda - t}\right)^\alpha = \left(\frac{1}{1 - \theta t}\right)^\alpha \quad \text{for } t < \lambda"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Note:</strong> This is the exponential MGF raised to power α,
            reflecting that gamma is a sum of exponentials.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Special Cases</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Distribution</span>
              <span>Gamma Parameters</span>
            </div>
            <div class="summary-row">
              <span>Exponential(λ)</span>
              <span>Gamma(1, λ)</span>
            </div>
            <div class="summary-row">
              <span>Erlang(n, λ)</span>
              <span>Gamma(n, λ), n integer</span>
            </div>
            <div class="summary-row">
              <span>Chi-squared(ν)</span>
              <span>Gamma(ν/2, 1/2)</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Exponential:</strong> α = 1 gives the exponential — waiting
            for just one event.
          </p>
          <p>
            <strong>Erlang:</strong> When α is a positive integer, used in
            queuing theory.
          </p>
          <p>
            <strong>Chi-squared:</strong> Important in statistical inference,
            is a special gamma.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Gammas</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X₁ ~ Gamma(α₁, λ) and X₂ ~ Gamma(α₂, λ)
            are independent (same rate!):
          </p>
          <div class="formula" data-latex="X_1 + X_2 \sim \text{Gamma}(\alpha_1 + \alpha_2, \lambda)"></div>
        </div>
        <div class="visual">
          <div class="sum-visual">
            <div class="sum-term">
              <span class="sum-label">X₁</span>
              <span class="sum-dist">Gamma(α₁, λ)</span>
            </div>
            <div class="sum-plus">+</div>
            <div class="sum-term">
              <span class="sum-label">X₂</span>
              <span class="sum-dist">Gamma(α₂, λ)</span>
            </div>
            <div class="sum-equals">=</div>
            <div class="sum-result">
              <span class="sum-label">Sum</span>
              <span class="sum-dist">Gamma(α₁+α₂, λ)</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Waiting for α₁ events plus α₂ more events
            is the same as waiting for α₁ + α₂ events total.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Exponentials</h2>
        <div class="definition">
          <p>
            <strong>Key result:</strong> If X₁, X₂, ..., Xₙ are i.i.d. Exp(λ):
          </p>
          <div class="formula" data-latex="\sum_{i=1}^{n} X_i \sim \text{Gamma}(n, \lambda)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Each Xᵢ is Gamma(1, λ). Sum of n
            independent exponentials = Gamma(n, λ).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Poisson-Gamma Connection</h2>
        <div class="definition">
          <p>
            <strong>For integer α = n:</strong> If X ~ Gamma(n, λ), then:
          </p>
          <div class="formula" data-latex="P(X > t) = P(N(t) < n)"></div>
          <p>where N(t) ~ Poisson(λt) counts events in [0, t].</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Translation:</strong> "Waiting time for n events exceeds t"
            equals "fewer than n events occur by time t."
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Time until 3rd arrival ~ Gamma(3, 2).
            P(wait &gt; 2)?
          </p>
          <div class="formula" data-latex="P(X > 2) = P(N(2) < 3) = P(N(2) \leq 2)"></div>
          <p>where N(2) ~ Poisson(4). Sum P(0) + P(1) + P(2):</p>
          <div class="formula" data-latex="= e^{-4}\left(1 + 4 + \frac{16}{2}\right) = e^{-4}(13) \approx 0.238"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Scaling Property</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X ~ Gamma(α, λ), then for c &gt; 0:
          </p>
          <div class="formula" data-latex="cX \sim \text{Gamma}(\alpha, \lambda/c)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Equivalently:</strong> In scale parameterization, cX ~ Gamma(α, cθ).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Method of Moments</h2>
        <div class="definition">
          <p>
            <strong>Estimating parameters:</strong> From sample mean x̄ and
            variance s²:
          </p>
          <div class="formula" data-latex="\hat{\alpha} = \frac{\bar{x}^2}{s^2}, \quad \hat{\lambda} = \frac{\bar{x}}{s^2}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Derivation:</strong> Solve E[X] = α/λ = x̄ and Var(X) = α/λ² = s².
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Insurance</span>
            <p>Aggregate claims modeling</p>
          </div>
          <div class="app-item">
            <span class="app-title">Reliability</span>
            <p>Time until nth failure</p>
          </div>
          <div class="app-item">
            <span class="app-title">Bayesian</span>
            <p>Conjugate prior for Poisson</p>
          </div>
          <div class="app-item">
            <span class="app-title">Queuing</span>
            <p>Service times, Erlang distribution</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Check parameterization: rate λ vs scale θ = 1/λ</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Mean = α/λ, Variance = α/λ² (rate form)</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Gamma(1, λ) = Exponential(λ)</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Use Poisson connection for integer α calculations</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Gamma Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PDF</h3>
            <div class="formula" data-latex="f(x) = \frac{\lambda^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\lambda x}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{\alpha}{\lambda}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \frac{\alpha}{\lambda^2}"></div>
          </div>
          <div class="property">
            <h3>MGF</h3>
            <div class="formula" data-latex="\left(\frac{\lambda}{\lambda - t}\right)^\alpha"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Beta() {
  return (
    <>
      <h1 class="page-title">C.4 Beta Distribution</h1>
      <p class="page-subtitle">Continuous Distributions</p>

      <section class="intro">
        <p>
          The beta distribution is defined on [0, 1] and is extremely flexible,
          able to take many shapes. It's ideal for modeling probabilities,
          proportions, and percentages, and serves as the conjugate prior for
          binomial parameters in Bayesian statistics.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> X represents a random proportion or probability
            bounded between 0 and 1.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ Beta(α, β)</span>
            <span class="notation-meaning">X has beta distribution</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">α (alpha)</span>
            <span class="notation-meaning">First shape parameter (α &gt; 0)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">β (beta)</span>
            <span class="notation-meaning">Second shape parameter (β &gt; 0)</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>The Beta Function</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The beta function B(α, β) is the
            normalizing constant:
          </p>
          <div class="formula" data-latex="B(\alpha, \beta) = \int_0^1 x^{\alpha-1}(1-x)^{\beta-1} dx"></div>
          <p>
            <strong>Relation to Gamma:</strong>
          </p>
          <div class="formula" data-latex="B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> B(3, 2):
          </p>
          <div class="formula" data-latex="B(3, 2) = \frac{\Gamma(3)\Gamma(2)}{\Gamma(5)} = \frac{2! \cdot 1!}{4!} = \frac{2 \cdot 1}{24} = \frac{1}{12}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF</h2>
        <div class="definition">
          <p>
            <strong>Probability Density Function:</strong>
          </p>
          <div class="formula" data-latex="f(x) = \frac{1}{B(\alpha, \beta)} x^{\alpha-1}(1-x)^{\beta-1} \quad \text{for } 0 < x < 1"></div>
          <p>Or equivalently:</p>
          <div class="formula" data-latex="f(x) = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1}(1-x)^{\beta-1}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Components:</strong>
          </p>
          <ul class="concept-list">
            <li>x^(α−1): Behavior near 0 (α controls left side)</li>
            <li>(1−x)^(β−1): Behavior near 1 (β controls right side)</li>
            <li>1/B(α,β): Normalizing constant</li>
          </ul>
        </div>
      </section>

      <section class="definition-block">
        <h2>Shape Variety</h2>
        <div class="visual">
          <div class="beta-shapes-visual">
            <div class="beta-shape">
              <span class="shape-title">α = β = 1</span>
              <div class="beta-curve uniform"></div>
              <span class="shape-desc">Uniform</span>
            </div>
            <div class="beta-shape">
              <span class="shape-title">α = β = 2</span>
              <div class="beta-curve symmetric"></div>
              <span class="shape-desc">Symmetric bell</span>
            </div>
            <div class="beta-shape">
              <span class="shape-title">α &lt; β</span>
              <div class="beta-curve left-skew"></div>
              <span class="shape-desc">Left-skewed</span>
            </div>
            <div class="beta-shape">
              <span class="shape-title">α &gt; β</span>
              <div class="beta-curve right-skew"></div>
              <span class="shape-desc">Right-skewed</span>
            </div>
            <div class="beta-shape">
              <span class="shape-title">α, β &lt; 1</span>
              <div class="beta-curve u-shaped"></div>
              <span class="shape-desc">U-shaped</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Shape rules:</strong>
          </p>
          <ul class="concept-list">
            <li>α = β: Symmetric around 0.5</li>
            <li>α &lt; β: Skewed toward 0</li>
            <li>α &gt; β: Skewed toward 1</li>
            <li>Both &gt; 1: Unimodal (one peak)</li>
            <li>Both &lt; 1: U-shaped (peaks at edges)</li>
          </ul>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>No closed form in general.</strong> Expressed using the
            incomplete beta function:
          </p>
          <div class="formula" data-latex="F(x) = I_x(\alpha, \beta) = \frac{B(x; \alpha, \beta)}{B(\alpha, \beta)}"></div>
          <p>where B(x; α, β) is the incomplete beta function.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>In practice:</strong> Use tables, calculators, or software
            for CDF values.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = \frac{\alpha}{\alpha + \beta}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The mean is α's "share" of the total
            α + β. Think of α successes out of α + β trials.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Beta(3, 2):
          </p>
          <div class="formula" data-latex="E[X] = \frac{3}{3+2} = \frac{3}{5} = 0.6"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Larger α + β means more "data" and less
            variance. The distribution becomes more concentrated.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Beta(3, 2):
          </p>
          <div class="formula" data-latex="Var(X) = \frac{3 \times 2}{5^2 \times 6} = \frac{6}{150} = 0.04"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">(0, 1)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameters</span>
              <span class="dist-prop-val">α &gt; 0, β &gt; 0</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">α / (α + β)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">αβ / [(α+β)²(α+β+1)]</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">(α−1) / (α+β−2) for α,β &gt; 1</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Special Cases</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Parameters</span>
              <span>Distribution</span>
            </div>
            <div class="summary-row">
              <span>Beta(1, 1)</span>
              <span>Uniform(0, 1)</span>
            </div>
            <div class="summary-row">
              <span>Beta(1, β)</span>
              <span>Power function (decreasing)</span>
            </div>
            <div class="summary-row">
              <span>Beta(α, 1)</span>
              <span>Power function (increasing)</span>
            </div>
            <div class="summary-row">
              <span>Beta(1/2, 1/2)</span>
              <span>Arcsine distribution</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Beta(1, 1):</strong> When α = β = 1:
          </p>
          <div class="formula" data-latex="f(x) = \frac{\Gamma(2)}{\Gamma(1)\Gamma(1)} x^0(1-x)^0 = 1"></div>
          <p>This is the Uniform(0, 1) distribution!</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Symmetry Property</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X ~ Beta(α, β), then:
          </p>
          <div class="formula" data-latex="1 - X \sim \text{Beta}(\beta, \alpha)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Swapping α and β mirrors the distribution
            around 0.5. The complement has swapped parameters.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Order Statistics Connection</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If U₁, U₂, ..., Uₙ are i.i.d. Uniform(0, 1),
            the kth order statistic has:
          </p>
          <div class="formula" data-latex="U_{(k)} \sim \text{Beta}(k, n-k+1)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Special cases:</strong>
          </p>
          <ul class="concept-list">
            <li>Minimum U₍₁₎ ~ Beta(1, n)</li>
            <li>Maximum U₍ₙ₎ ~ Beta(n, 1)</li>
            <li>Median (n odd) ~ Beta((n+1)/2, (n+1)/2)</li>
          </ul>
        </div>
      </section>

      <section class="definition-block">
        <h2>Moments</h2>
        <div class="definition">
          <p>
            <strong>General moments:</strong>
          </p>
          <div class="formula" data-latex="E[X^k] = \frac{B(\alpha+k, \beta)}{B(\alpha, \beta)} = \prod_{i=0}^{k-1} \frac{\alpha+i}{\alpha+\beta+i}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Second moment for Beta(α, β):</strong>
          </p>
          <div class="formula" data-latex="E[X^2] = \frac{\alpha(\alpha+1)}{(\alpha+\beta)(\alpha+\beta+1)}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Bayesian Connection</h2>
        <div class="definition">
          <p>
            <strong>Conjugate prior:</strong> Beta is the conjugate prior for
            the binomial proportion parameter p.
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Bayesian updating:</strong>
          </p>
          <ul class="concept-list">
            <li>Prior: p ~ Beta(α, β)</li>
            <li>Data: k successes in n trials</li>
            <li>Posterior: p | data ~ Beta(α + k, β + n − k)</li>
          </ul>
        </div>
        <div class="visual">
          <div class="bayes-visual">
            <div class="bayes-box prior">
              <span class="bayes-label">Prior</span>
              <span class="bayes-dist">Beta(α, β)</span>
            </div>
            <div class="bayes-arrow">+ data →</div>
            <div class="bayes-box posterior">
              <span class="bayes-label">Posterior</span>
              <span class="bayes-dist">Beta(α+k, β+n−k)</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Prior Beta(2, 2), observe 7 successes in
            10 trials. Posterior?
          </p>
          <div class="formula" data-latex="\text{Posterior} \sim \text{Beta}(2+7, 2+3) = \text{Beta}(9, 5)"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Relationship to Other Distributions</h2>
        <div class="definition">
          <p>
            <strong>From Gamma:</strong> If X ~ Gamma(α, λ) and Y ~ Gamma(β, λ)
            are independent, then:
          </p>
          <div class="formula" data-latex="\frac{X}{X+Y} \sim \text{Beta}(\alpha, \beta)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The beta represents a "proportion" of
            two gamma random variables.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Bayesian Statistics</span>
            <p>Prior for probabilities</p>
          </div>
          <div class="app-item">
            <span class="app-title">Project Management</span>
            <p>PERT estimates</p>
          </div>
          <div class="app-item">
            <span class="app-title">Quality Control</span>
            <p>Proportion defective</p>
          </div>
          <div class="app-item">
            <span class="app-title">Genetics</span>
            <p>Allele frequencies</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Probabilities</h2>
        <div class="definition">
          <p>
            <strong>For simple cases:</strong> When α and β are positive integers,
            integrate directly:
          </p>
          <div class="formula" data-latex="P(X < c) = \int_0^c \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1}(1-x)^{\beta-1} dx"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Beta(2, 1). Find P(X &lt; 0.5):
          </p>
          <div class="formula" data-latex="f(x) = \frac{\Gamma(3)}{\Gamma(2)\Gamma(1)} x^1(1-x)^0 = 2x"></div>
          <div class="formula" data-latex="P(X < 0.5) = \int_0^{0.5} 2x \, dx = x^2 \Big|_0^{0.5} = 0.25"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Mean = α/(α+β) — "α's share"</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Beta(1,1) = Uniform(0,1)</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">B(α,β) = Γ(α)Γ(β)/Γ(α+β) for normalizing</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">1−X swaps parameters: Beta(β, α)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Beta Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PDF</h3>
            <div class="formula" data-latex="f(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{\alpha}{\alpha+\beta}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}"></div>
          </div>
          <div class="property">
            <h3>Support</h3>
            <p>(0, 1)</p>
          </div>
        </div>
      </section>
    </>
  );
}

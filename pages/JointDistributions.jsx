export function JointDistributions() {
  return (
    <>
      <h1 class="page-title">D.1 Joint Distributions</h1>
      <p class="page-subtitle">Multivariate Distributions</p>

      <section class="intro">
        <p>
          When working with two or more random variables, we need joint
          distributions to describe their combined behavior. Joint distributions
          capture both individual behavior and relationships between variables.
        </p>
      </section>

      <section class="definition-block">
        <h2>Joint PMF (Discrete)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> For discrete random variables X and Y,
            the joint PMF is:
          </p>
          <div class="formula" data-latex="p_{X,Y}(x, y) = P(X = x, Y = y)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Properties:</strong>
          </p>
          <ul class="concept-list">
            <li>p(x, y) ≥ 0 for all x, y</li>
            <li>ΣₓΣᵧ p(x, y) = 1</li>
          </ul>
        </div>
        <div class="visual">
          <div class="joint-table">
            <div class="joint-header">
              <span></span>
              <span>Y = 0</span>
              <span>Y = 1</span>
              <span>Y = 2</span>
            </div>
            <div class="joint-row">
              <span class="row-label">X = 0</span>
              <span>0.10</span>
              <span>0.15</span>
              <span>0.05</span>
            </div>
            <div class="joint-row">
              <span class="row-label">X = 1</span>
              <span>0.20</span>
              <span>0.25</span>
              <span>0.10</span>
            </div>
            <div class="joint-row">
              <span class="row-label">X = 2</span>
              <span>0.05</span>
              <span>0.05</span>
              <span>0.05</span>
            </div>
          </div>
          <p class="visual-caption">Example joint PMF table (all entries sum to 1)</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Joint PDF (Continuous)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> For continuous random variables X and Y,
            the joint PDF f(x, y) satisfies:
          </p>
          <div class="formula" data-latex="P((X, Y) \in A) = \iint_A f(x, y) \, dx \, dy"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Properties:</strong>
          </p>
          <ul class="concept-list">
            <li>f(x, y) ≥ 0 for all x, y</li>
            <li>∫∫ f(x, y) dx dy = 1 (over entire support)</li>
            <li>f(x, y) is a density, not a probability</li>
          </ul>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> f(x, y) = 6xy for 0 &lt; x &lt; 1, 0 &lt; y &lt; 1, x + y &lt; 1
          </p>
          <p>This is a valid PDF if it integrates to 1 over its support region.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Marginal Distributions</h2>
        <div class="definition">
          <p>
            <strong>Discrete:</strong> Sum out the other variable:
          </p>
          <div class="formula" data-latex="p_X(x) = \sum_y p_{X,Y}(x, y) \quad \text{and} \quad p_Y(y) = \sum_x p_{X,Y}(x, y)"></div>
          <p>
            <strong>Continuous:</strong> Integrate out the other variable:
          </p>
          <div class="formula" data-latex="f_X(x) = \int_{-\infty}^{\infty} f(x, y) \, dy \quad \text{and} \quad f_Y(y) = \int_{-\infty}^{\infty} f(x, y) \, dx"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> "Marginalize out" or "collapse" one
            variable to get the distribution of the other alone.
          </p>
        </div>
        <div class="visual">
          <div class="marginal-visual">
            <div class="marginal-box joint">
              <span class="marginal-label">Joint f(x,y)</span>
            </div>
            <div class="marginal-arrows">
              <div class="marginal-arrow">
                <span>∫ dy</span>
                <span>→</span>
              </div>
              <div class="marginal-arrow">
                <span>∫ dx</span>
                <span>↓</span>
              </div>
            </div>
            <div class="marginal-results">
              <div class="marginal-box marginal-x">
                <span class="marginal-label">fₓ(x)</span>
              </div>
              <div class="marginal-box marginal-y">
                <span class="marginal-label">f_Y(y)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Marginals: Discrete Example</h2>
        <div class="example">
          <p>
            <strong>From the joint table above:</strong>
          </p>
          <div class="visual">
            <div class="joint-table with-marginals">
              <div class="joint-header">
                <span></span>
                <span>Y = 0</span>
                <span>Y = 1</span>
                <span>Y = 2</span>
                <span class="marginal-col">pₓ(x)</span>
              </div>
              <div class="joint-row">
                <span class="row-label">X = 0</span>
                <span>0.10</span>
                <span>0.15</span>
                <span>0.05</span>
                <span class="marginal-col">0.30</span>
              </div>
              <div class="joint-row">
                <span class="row-label">X = 1</span>
                <span>0.20</span>
                <span>0.25</span>
                <span>0.10</span>
                <span class="marginal-col">0.55</span>
              </div>
              <div class="joint-row">
                <span class="row-label">X = 2</span>
                <span>0.05</span>
                <span>0.05</span>
                <span>0.05</span>
                <span class="marginal-col">0.15</span>
              </div>
              <div class="joint-row marginal-row">
                <span class="row-label">p_Y(y)</span>
                <span>0.35</span>
                <span>0.45</span>
                <span>0.20</span>
                <span class="marginal-col">1.00</span>
              </div>
            </div>
          </div>
          <p>Row sums give pₓ(x), column sums give p_Y(y).</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Marginals: Continuous Example</h2>
        <div class="example">
          <p>
            <strong>Given:</strong> f(x, y) = 2 for 0 &lt; x &lt; y &lt; 1
          </p>
          <p>
            <strong>Find fₓ(x):</strong> For fixed x, y ranges from x to 1:
          </p>
          <div class="formula" data-latex="f_X(x) = \int_x^1 2 \, dy = 2(1-x) \quad \text{for } 0 < x < 1"></div>
          <p>
            <strong>Find f_Y(y):</strong> For fixed y, x ranges from 0 to y:
          </p>
          <div class="formula" data-latex="f_Y(y) = \int_0^y 2 \, dx = 2y \quad \text{for } 0 < y < 1"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Joint CDF</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong>
          </p>
          <div class="formula" data-latex="F(x, y) = P(X \leq x, Y \leq y)"></div>
          <p>
            <strong>From PDF:</strong>
          </p>
          <div class="formula" data-latex="F(x, y) = \int_{-\infty}^{x} \int_{-\infty}^{y} f(s, t) \, dt \, ds"></div>
          <p>
            <strong>PDF from CDF:</strong>
          </p>
          <div class="formula" data-latex="f(x, y) = \frac{\partial^2 F}{\partial x \, \partial y}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Independence</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> X and Y are independent if and only if:
          </p>
          <div class="formula" data-latex="f(x, y) = f_X(x) \cdot f_Y(y) \quad \text{for all } x, y"></div>
          <p>Or equivalently for discrete:</p>
          <div class="formula" data-latex="p(x, y) = p_X(x) \cdot p_Y(y) \quad \text{for all } x, y"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Testing independence:</strong>
          </p>
          <ul class="concept-list">
            <li>Joint = product of marginals everywhere</li>
            <li>If ANY cell fails this, NOT independent</li>
            <li>Support must be a rectangle (no constraints linking x and y)</li>
          </ul>
        </div>
        <div class="visual">
          <div class="highlight-box">
            <span class="highlight-title">Quick Independence Check</span>
            <p>If support is NOT rectangular</p>
            <p>(like x + y &lt; 1 or 0 &lt; x &lt; y)</p>
            <span class="highlight-note">→ NOT independent!</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Independence Test: Discrete Example</h2>
        <div class="example">
          <p>
            <strong>Check if X and Y from our table are independent:</strong>
          </p>
          <p>If independent: p(0, 0) = pₓ(0) · p_Y(0) = 0.30 × 0.35 = 0.105</p>
          <p>Actual: p(0, 0) = 0.10 ≠ 0.105</p>
          <p>
            <strong>Conclusion:</strong> X and Y are NOT independent.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Independence Test: Continuous Example</h2>
        <div class="example">
          <p>
            <strong>Is f(x, y) = 2 for 0 &lt; x &lt; y &lt; 1 independent?</strong>
          </p>
          <p>The support {'{(x,y): 0 < x < y < 1}'} is a triangle, not a rectangle.</p>
          <p>
            <strong>Conclusion:</strong> NOT independent (support isn't rectangular).
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Is f(x, y) = 4xy for 0 &lt; x &lt; 1, 0 &lt; y &lt; 1 independent?</strong>
          </p>
          <p>Support is a rectangle ✓. Check factorization:</p>
          <p>fₓ(x) = ∫₀¹ 4xy dy = 4x · [y²/2]₀¹ = 2x</p>
          <p>f_Y(y) = ∫₀¹ 4xy dx = 4y · [x²/2]₀¹ = 2y</p>
          <p>fₓ(x) · f_Y(y) = 2x · 2y = 4xy = f(x, y) ✓</p>
          <p>
            <strong>Conclusion:</strong> Independent!
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Probabilities</h2>
        <div class="definition">
          <p>
            <strong>General formula:</strong>
          </p>
          <div class="formula" data-latex="P((X, Y) \in A) = \iint_A f(x, y) \, dx \, dy"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> f(x, y) = 2 for 0 &lt; x &lt; y &lt; 1.
            Find P(Y &gt; 2X):
          </p>
          <p>Region: y &gt; 2x AND 0 &lt; x &lt; y &lt; 1</p>
          <p>For y &gt; 2x with x &lt; y &lt; 1: x ranges 0 to 1/2, y ranges 2x to 1:</p>
          <div class="formula" data-latex="P(Y > 2X) = \int_0^{1/2} \int_{2x}^1 2 \, dy \, dx = \int_0^{1/2} 2(1 - 2x) \, dx"></div>
          <div class="formula" data-latex="= 2\left[x - x^2\right]_0^{1/2} = 2\left(\frac{1}{2} - \frac{1}{4}\right) = 2 \cdot \frac{1}{4} = \frac{1}{2}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value of Functions</h2>
        <div class="definition">
          <p>
            <strong>For a function g(X, Y):</strong>
          </p>
          <div class="formula" data-latex="E[g(X, Y)] = \iint g(x, y) f(x, y) \, dx \, dy"></div>
          <p>
            <strong>Discrete version:</strong>
          </p>
          <div class="formula" data-latex="E[g(X, Y)] = \sum_x \sum_y g(x, y) p(x, y)"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> f(x, y) = 2 for 0 &lt; x &lt; y &lt; 1.
            Find E[XY]:
          </p>
          <div class="formula" data-latex="E[XY] = \int_0^1 \int_0^y xy \cdot 2 \, dx \, dy = \int_0^1 2y \left[\frac{x^2}{2}\right]_0^y dy"></div>
          <div class="formula" data-latex="= \int_0^1 y \cdot y^2 \, dy = \int_0^1 y^3 \, dy = \frac{1}{4}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Formulas Summary</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Quantity</span>
              <span>Discrete</span>
              <span>Continuous</span>
            </div>
            <div class="summary-row">
              <span>Marginal of X</span>
              <span>Σᵧ p(x,y)</span>
              <span>∫ f(x,y) dy</span>
            </div>
            <div class="summary-row">
              <span>Independence</span>
              <span>p(x,y) = pₓ(x)p_Y(y)</span>
              <span>f(x,y) = fₓ(x)f_Y(y)</span>
            </div>
            <div class="summary-row">
              <span>E[g(X,Y)]</span>
              <span>ΣₓΣᵧ g(x,y)p(x,y)</span>
              <span>∫∫ g(x,y)f(x,y) dxdy</span>
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
              <span class="check-text">Draw the support region for integration limits</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Non-rectangular support → NOT independent</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Marginals: integrate/sum out the other variable</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">For E[g(X,Y)], integrate g·f over support</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Joint Distributions Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Marginal</h3>
            <div class="formula" data-latex="f_X(x) = \int f(x,y) \, dy"></div>
          </div>
          <div class="property">
            <h3>Independence</h3>
            <div class="formula" data-latex="f(x,y) = f_X(x) f_Y(y)"></div>
          </div>
          <div class="property">
            <h3>Expectation</h3>
            <div class="formula" data-latex="E[g] = \iint g \cdot f \, dxdy"></div>
          </div>
          <div class="property">
            <h3>Probability</h3>
            <div class="formula" data-latex="P(A) = \iint_A f \, dxdy"></div>
          </div>
        </div>
      </section>
    </>
  );
}

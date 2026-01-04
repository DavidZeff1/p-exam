export function ConditionalDiscrete() {
  return (
    <>
      <h1 class="page-title">D.1 Conditional Distributions: Discrete</h1>
      <p class="page-subtitle">Conditional Probabilities</p>

      <section class="intro">
        <p>
          For discrete random variables, conditional distributions describe how
          the probability mass of one variable changes when we have information
          about another. This extends conditional probability to full distributions.
        </p>
      </section>

      <section class="definition-block">
        <h2>Conditional PMF</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The conditional PMF of Y given X = x is:
          </p>
          <div class="formula" data-latex="p_{Y|X}(y|x) = P(Y = y | X = x) = \frac{P(X = x, Y = y)}{P(X = x)} = \frac{p_{X,Y}(x,y)}{p_X(x)}"></div>
          <p>provided P(X = x) &gt; 0.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Focus on the row (or column) where X = x,
            then renormalize so probabilities sum to 1.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Properties of Conditional PMF</h2>
        <div class="definition">
          <p>
            <strong>Valid PMF:</strong> For each fixed x, the conditional PMF satisfies:
          </p>
          <ul class="concept-list">
            <li>p(y|x) ≥ 0 for all y</li>
            <li>Σᵧ p(y|x) = 1</li>
          </ul>
        </div>
        <div class="intuition">
          <p>
            <strong>Key insight:</strong> A conditional PMF is a proper PMF —
            it's a complete probability distribution for Y, just computed using
            only the information that X = x.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Reading from Joint Tables</h2>
        <div class="example">
          <p>
            <strong>Joint PMF table:</strong>
          </p>
          <div class="visual">
            <div class="joint-table with-marginals">
              <div class="joint-header">
                <span></span>
                <span>Y = 0</span>
                <span>Y = 1</span>
                <span>Y = 2</span>
                <span class="marginal-col">p_X(x)</span>
              </div>
              <div class="joint-row">
                <span class="row-label">X = 0</span>
                <span>0.10</span>
                <span>0.20</span>
                <span>0.10</span>
                <span class="marginal-col">0.40</span>
              </div>
              <div class="joint-row">
                <span class="row-label">X = 1</span>
                <span>0.15</span>
                <span>0.30</span>
                <span>0.15</span>
                <span class="marginal-col">0.60</span>
              </div>
              <div class="joint-row marginal-row">
                <span class="row-label">p_Y(y)</span>
                <span>0.25</span>
                <span>0.50</span>
                <span>0.25</span>
                <span class="marginal-col">1.00</span>
              </div>
            </div>
          </div>
          <p>
            <strong>Find conditional distribution of Y | X = 1:</strong>
          </p>
          <p>Divide each entry in X = 1 row by p_X(1) = 0.60:</p>
          <div class="visual">
            <div class="cond-table">
              <div class="cond-header">
                <span>y</span>
                <span>0</span>
                <span>1</span>
                <span>2</span>
              </div>
              <div class="cond-row">
                <span class="row-label">p(y|X=1)</span>
                <span>0.15/0.60 = 1/4</span>
                <span>0.30/0.60 = 1/2</span>
                <span>0.15/0.60 = 1/4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Expectation</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The conditional expected value of Y given X = x:
          </p>
          <div class="formula" data-latex="E[Y | X = x] = \sum_y y \cdot p_{Y|X}(y|x)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Interpretation:</strong> The average value of Y when we know X = x.
            Computed like any expectation, but using the conditional PMF.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>From the example above, E[Y | X = 1]:</strong>
          </p>
          <div class="formula" data-latex="E[Y | X = 1] = 0 \cdot \frac{1}{4} + 1 \cdot \frac{1}{2} + 2 \cdot \frac{1}{4} = 0 + \frac{1}{2} + \frac{1}{2} = 1"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Variance</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong>
          </p>
          <div class="formula" data-latex="Var(Y | X = x) = E[Y^2 | X = x] - (E[Y | X = x])^2"></div>
          <p>Or equivalently:</p>
          <div class="formula" data-latex="Var(Y | X = x) = \sum_y (y - E[Y|X=x])^2 \cdot p_{Y|X}(y|x)"></div>
        </div>
        <div class="example">
          <p>
            <strong>From the example, Var(Y | X = 1):</strong>
          </p>
          <div class="formula" data-latex="E[Y^2 | X = 1] = 0^2 \cdot \frac{1}{4} + 1^2 \cdot \frac{1}{2} + 2^2 \cdot \frac{1}{4} = 0 + \frac{1}{2} + 1 = \frac{3}{2}"></div>
          <div class="formula" data-latex="Var(Y | X = 1) = \frac{3}{2} - 1^2 = \frac{1}{2}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Distribution as Random Variable</h2>
        <div class="definition">
          <p>
            <strong>E[Y | X] as a function of X:</strong>
          </p>
          <p>
            When we write E[Y | X] (without specifying x), we mean a random
            variable — a function of X.
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">E[Y | X = x]</span>
              <p class="compare-desc">A number</p>
              <p class="compare-vals">Fixed value for specific x</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">E[Y | X]</span>
              <p class="compare-desc">A random variable</p>
              <p class="compare-vals">Function g(X)</p>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>From the example:</strong>
          </p>
          <p>E[Y | X = 0] = 0(0.25) + 1(0.50) + 2(0.25) = 1 (from X=0 row)</p>
          <p>E[Y | X = 1] = 1 (computed above)</p>
          <p>So E[Y | X] = 1 for both values — it happens to be constant here!</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Law of Total Expectation</h2>
        <div class="definition">
          <p>
            <strong>Tower Property (Discrete):</strong>
          </p>
          <div class="formula" data-latex="E[Y] = E[E[Y|X]] = \sum_x E[Y|X=x] \cdot p_X(x)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The overall average is a weighted average
            of conditional averages, weighted by how likely each condition is.
          </p>
        </div>
        <div class="visual">
          <div class="tower-visual">
            <div class="tower-outer">
              <span class="tower-label">E[Y]</span>
            </div>
            <div class="tower-equals">=</div>
            <div class="tower-sum">
              <span class="tower-sigma">Σₓ</span>
              <div class="tower-inner">
                <span class="tower-label">E[Y|X=x]</span>
              </div>
              <span class="tower-times">×</span>
              <div class="tower-weight">
                <span class="tower-label">P(X=x)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Verify with our example:</strong>
          </p>
          <div class="formula" data-latex="E[Y] = E[Y|X=0] \cdot P(X=0) + E[Y|X=1] \cdot P(X=1)"></div>
          <div class="formula" data-latex="= 1 \cdot 0.40 + 1 \cdot 0.60 = 1"></div>
          <p>
            <strong>Direct check:</strong> E[Y] = 0(0.25) + 1(0.50) + 2(0.25) = 1 ✓
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Law of Total Variance</h2>
        <div class="definition">
          <p>
            <strong>Eve's Law:</strong>
          </p>
          <div class="formula" data-latex="Var(Y) = E[Var(Y|X)] + Var(E[Y|X])"></div>
        </div>
        <div class="visual">
          <div class="variance-decomp">
            <div class="var-box total">
              <span class="var-label">Var(Y)</span>
              <span class="var-desc">Total</span>
            </div>
            <div class="var-equals">=</div>
            <div class="var-box within">
              <span class="var-label">E[Var(Y|X)]</span>
              <span class="var-desc">Within groups</span>
            </div>
            <div class="var-plus">+</div>
            <div class="var-box between">
              <span class="var-label">Var(E[Y|X])</span>
              <span class="var-desc">Between groups</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Apply to our example:</strong>
          </p>
          <p>Var(Y|X=0) = 1/2, Var(Y|X=1) = 1/2 (both same)</p>
          <p>E[Var(Y|X)] = (1/2)(0.40) + (1/2)(0.60) = 1/2</p>
          <p>E[Y|X] = 1 always, so Var(E[Y|X]) = 0</p>
          <p>Total: Var(Y) = 1/2 + 0 = 1/2</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Bayes' Theorem for Distributions</h2>
        <div class="definition">
          <p>
            <strong>Updating distributions:</strong>
          </p>
          <div class="formula" data-latex="p_{X|Y}(x|y) = \frac{p_{Y|X}(y|x) \cdot p_X(x)}{p_Y(y)}"></div>
          <p>where:</p>
          <div class="formula" data-latex="p_Y(y) = \sum_x p_{Y|X}(y|x) \cdot p_X(x)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Interpretation:</strong>
          </p>
          <ul class="concept-list">
            <li>p_X(x): Prior distribution of X</li>
            <li>p(y|x): Likelihood of observing Y = y given X</li>
            <li>p(x|y): Posterior distribution of X given data Y</li>
          </ul>
        </div>
      </section>

      <section class="definition-block">
        <h2>Bayes Example</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> A factory has 2 machines. Machine A (60% of
            production) has 5% defect rate. Machine B (40%) has 10% defect rate.
            Given a defective item, P(from Machine A)?
          </p>
          <p>Let X = machine (A or B), Y = quality (good or defective)</p>
          <p>Prior: P(A) = 0.60, P(B) = 0.40</p>
          <p>Likelihood: P(def|A) = 0.05, P(def|B) = 0.10</p>
          <p>
            <strong>Marginal P(defective):</strong>
          </p>
          <div class="formula" data-latex="P(def) = P(def|A)P(A) + P(def|B)P(B) = 0.05(0.60) + 0.10(0.40) = 0.07"></div>
          <p>
            <strong>Posterior:</strong>
          </p>
          <div class="formula" data-latex="P(A|def) = \frac{P(def|A)P(A)}{P(def)} = \frac{0.05 \times 0.60}{0.07} = \frac{0.03}{0.07} \approx 0.429"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Independence Check</h2>
        <div class="definition">
          <p>
            <strong>X and Y are independent if and only if:</strong>
          </p>
          <div class="formula" data-latex="p_{Y|X}(y|x) = p_Y(y) \quad \text{for all } x, y"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Interpretation:</strong> Knowing X doesn't change the distribution
            of Y. The conditional distribution equals the marginal.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Quick check from our table:</strong>
          </p>
          <p>p(Y=0|X=0) = 0.10/0.40 = 0.25 = p_Y(0) ✓</p>
          <p>p(Y=1|X=0) = 0.20/0.40 = 0.50 = p_Y(1) ✓</p>
          <p>p(Y=2|X=0) = 0.10/0.40 = 0.25 = p_Y(2) ✓</p>
          <p>All match marginals → X and Y are independent!</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Conditional Distributions</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Setup</span>
              <span>Conditional Distribution</span>
            </div>
            <div class="summary-row">
              <span>X|N ~ Bin(N, p)</span>
              <span>Given N, X is binomial</span>
            </div>
            <div class="summary-row">
              <span>N|X ~ varies</span>
              <span>Depends on prior for N</span>
            </div>
            <div class="summary-row">
              <span>X|(X+Y=n)</span>
              <span>Often hypergeometric</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example: Binomial Given Total</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> X ~ Poisson(λ₁), Y ~ Poisson(λ₂), independent.
            Find distribution of X | X + Y = n.
          </p>
          <p>
            <strong>Solution:</strong> X + Y ~ Poisson(λ₁ + λ₂)
          </p>
          <div class="formula" data-latex="P(X = k | X + Y = n) = \frac{P(X = k, Y = n-k)}{P(X + Y = n)}"></div>
          <div class="formula" data-latex="= \frac{P(X=k)P(Y=n-k)}{P(X+Y=n)}"></div>
          <p>This simplifies to:</p>
          <div class="formula" data-latex="X | (X + Y = n) \sim \text{Binomial}\left(n, \frac{\lambda_1}{\lambda_1 + \lambda_2}\right)"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">p(y|x) = p(x,y)/p_X(x) — divide joint by marginal</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Conditional PMF must sum to 1 over y</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">E[Y] = Σₓ E[Y|X=x]P(X=x) (tower law)</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Independence: conditional = marginal</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Discrete Conditional Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Conditional PMF</h3>
            <div class="formula" data-latex="p(y|x) = \frac{p(x,y)}{p_X(x)}"></div>
          </div>
          <div class="property">
            <h3>Conditional Mean</h3>
            <div class="formula" data-latex="E[Y|X=x] = \sum_y y \cdot p(y|x)"></div>
          </div>
          <div class="property">
            <h3>Tower Property</h3>
            <div class="formula" data-latex="E[Y] = \sum_x E[Y|X=x] p_X(x)"></div>
          </div>
          <div class="property">
            <h3>Bayes</h3>
            <div class="formula" data-latex="p(x|y) = \frac{p(y|x)p_X(x)}{p_Y(y)}"></div>
          </div>
        </div>
      </section>
    </>
  );
}

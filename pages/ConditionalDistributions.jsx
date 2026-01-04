export function ConditionalDistributions() {
  return (
    <>
      <h1 class="page-title">D.2 Conditional Distributions</h1>
      <p class="page-subtitle">Multivariate Distributions</p>

      <section class="intro">
        <p>
          Conditional distributions describe the behavior of one random variable
          given information about another. They're essential for understanding
          how knowledge of one variable affects our beliefs about another.
        </p>
      </section>

      <section class="definition-block">
        <h2>Conditional PMF (Discrete)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The conditional PMF of Y given X = x is:
          </p>
          <div class="formula" data-latex="p_{Y|X}(y|x) = P(Y = y | X = x) = \frac{p_{X,Y}(x, y)}{p_X(x)}"></div>
          <p>provided p_X(x) &gt; 0.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Given that X = x, what's the probability
            distribution of Y? We restrict to the "slice" where X = x and renormalize.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional PDF (Continuous)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The conditional PDF of Y given X = x is:
          </p>
          <div class="formula" data-latex="f_{Y|X}(y|x) = \frac{f_{X,Y}(x, y)}{f_X(x)}"></div>
          <p>provided f_X(x) &gt; 0.</p>
        </div>
        <div class="visual">
          <div class="cond-visual">
            <div class="cond-formula">
              <div class="cond-num">
                <span>Joint f(x, y)</span>
              </div>
              <div class="cond-line"></div>
              <div class="cond-den">
                <span>Marginal f_X(x)</span>
              </div>
            </div>
            <div class="cond-equals">=</div>
            <div class="cond-result">
              <span>Conditional f(y|x)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Discrete Example</h2>
        <div class="example">
          <p>
            <strong>Using the joint PMF table:</strong>
          </p>
          <div class="visual">
            <div class="joint-table">
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
            </div>
          </div>
          <p>
            <strong>Find P(Y = 1 | X = 1):</strong>
          </p>
          <div class="formula" data-latex="P(Y = 1 | X = 1) = \frac{P(X=1, Y=1)}{P(X=1)} = \frac{0.25}{0.55} = \frac{5}{11} \approx 0.455"></div>
          <p>
            <strong>Full conditional distribution of Y | X = 1:</strong>
          </p>
          <p>P(Y = 0 | X = 1) = 0.20/0.55 = 4/11</p>
          <p>P(Y = 1 | X = 1) = 0.25/0.55 = 5/11</p>
          <p>P(Y = 2 | X = 1) = 0.10/0.55 = 2/11</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Continuous Example</h2>
        <div class="example">
          <p>
            <strong>Given:</strong> f(x, y) = 2 for 0 &lt; x &lt; y &lt; 1
          </p>
          <p>
            <strong>Step 1:</strong> Find marginal f_X(x):
          </p>
          <div class="formula" data-latex="f_X(x) = \int_x^1 2 \, dy = 2(1-x) \quad \text{for } 0 < x < 1"></div>
          <p>
            <strong>Step 2:</strong> Compute conditional f(y|x):
          </p>
          <div class="formula" data-latex="f_{Y|X}(y|x) = \frac{2}{2(1-x)} = \frac{1}{1-x} \quad \text{for } x < y < 1"></div>
          <p>
            <strong>Interpretation:</strong> Given X = x, Y is uniform on (x, 1).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Expectation</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The conditional expectation of Y given X = x:
          </p>
          <div class="formula" data-latex="E[Y | X = x] = \int y \cdot f_{Y|X}(y|x) \, dy"></div>
          <p>
            <strong>Discrete:</strong>
          </p>
          <div class="formula" data-latex="E[Y | X = x] = \sum_y y \cdot p_{Y|X}(y|x)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The expected value of Y computed using
            the conditional distribution, treating x as fixed.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Expectation Example</h2>
        <div class="example">
          <p>
            <strong>From the continuous example:</strong> f(y|x) = 1/(1−x) for x &lt; y &lt; 1
          </p>
          <p>This is Uniform(x, 1), so:</p>
          <div class="formula" data-latex="E[Y | X = x] = \frac{x + 1}{2}"></div>
          <p>
            <strong>Verify by integration:</strong>
          </p>
          <div class="formula" data-latex="E[Y | X = x] = \int_x^1 y \cdot \frac{1}{1-x} \, dy = \frac{1}{1-x} \cdot \frac{y^2}{2} \Big|_x^1"></div>
          <div class="formula" data-latex="= \frac{1}{1-x} \cdot \frac{1 - x^2}{2} = \frac{(1-x)(1+x)}{2(1-x)} = \frac{1+x}{2}"></div>
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
          <div class="formula" data-latex="Var(Y | X = x) = E[(Y - E[Y|X=x])^2 | X = x]"></div>
        </div>
        <div class="example">
          <p>
            <strong>From our example:</strong> Y | X = x ~ Uniform(x, 1)
          </p>
          <div class="formula" data-latex="Var(Y | X = x) = \frac{(1-x)^2}{12}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>E[Y|X] as a Random Variable</h2>
        <div class="definition">
          <p>
            <strong>Key concept:</strong> E[Y | X] is a function of X, hence a
            random variable itself:
          </p>
          <div class="formula" data-latex="g(X) = E[Y | X]"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Notation:</strong>
          </p>
          <ul class="concept-list">
            <li>E[Y | X = x]: A number (fixed x)</li>
            <li>E[Y | X]: A random variable (function of X)</li>
          </ul>
        </div>
        <div class="example">
          <p>
            <strong>From our example:</strong>
          </p>
          <div class="formula" data-latex="E[Y | X] = \frac{1 + X}{2}"></div>
          <p>This is a random variable that depends on X.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Law of Total Expectation</h2>
        <div class="definition">
          <p>
            <strong>Tower property / Adam's Law:</strong>
          </p>
          <div class="formula" data-latex="E[Y] = E[E[Y | X]]"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The overall average of Y equals the
            average of the conditional averages. "Average of averages."
          </p>
        </div>
        <div class="visual">
          <div class="highlight-box">
            <span class="highlight-title">Tower Property</span>
            <div class="formula" data-latex="E[Y] = E_X[E[Y|X]]"></div>
            <span class="highlight-note">Outer E is over X</span>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Verify with our example:</strong>
          </p>
          <p>E[Y | X] = (1 + X)/2, and f_X(x) = 2(1−x) for 0 &lt; x &lt; 1</p>
          <div class="formula" data-latex="E[E[Y|X]] = \int_0^1 \frac{1+x}{2} \cdot 2(1-x) \, dx = \int_0^1 (1+x)(1-x) \, dx"></div>
          <div class="formula" data-latex="= \int_0^1 (1 - x^2) \, dx = 1 - \frac{1}{3} = \frac{2}{3}"></div>
          <p>
            <strong>Direct calculation:</strong>
          </p>
          <div class="formula" data-latex="E[Y] = \int_0^1 y \cdot 2y \, dy = \frac{2y^3}{3} \Big|_0^1 = \frac{2}{3} \quad \checkmark"></div>
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
        <div class="intuition">
          <p>
            <strong>Interpretation:</strong>
          </p>
          <ul class="concept-list">
            <li>E[Var(Y|X)]: Average variance within groups (unexplained)</li>
            <li>Var(E[Y|X]): Variance between group means (explained by X)</li>
          </ul>
        </div>
        <div class="visual">
          <div class="variance-decomp">
            <div class="var-box total">
              <span class="var-label">Total Var(Y)</span>
            </div>
            <div class="var-equals">=</div>
            <div class="var-box within">
              <span class="var-label">E[Var(Y|X)]</span>
              <span class="var-desc">Within-group</span>
            </div>
            <div class="var-plus">+</div>
            <div class="var-box between">
              <span class="var-label">Var(E[Y|X])</span>
              <span class="var-desc">Between-group</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Total Variance Example</h2>
        <div class="example">
          <p>
            <strong>From our running example:</strong>
          </p>
          <p>E[Y|X] = (1+X)/2, Var(Y|X) = (1−X)²/12</p>
          <p>
            <strong>E[Var(Y|X)]:</strong>
          </p>
          <div class="formula" data-latex="E\left[\frac{(1-X)^2}{12}\right] = \frac{1}{12} E[(1-X)^2] = \frac{1}{12} \cdot \frac{1}{6} = \frac{1}{72}"></div>
          <p>
            <strong>Var(E[Y|X]):</strong>
          </p>
          <div class="formula" data-latex="Var\left(\frac{1+X}{2}\right) = \frac{1}{4} Var(X) = \frac{1}{4} \cdot \frac{1}{18} = \frac{1}{72}"></div>
          <p>
            <strong>Total:</strong>
          </p>
          <div class="formula" data-latex="Var(Y) = \frac{1}{72} + \frac{1}{72} = \frac{1}{36}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional on Events</h2>
        <div class="definition">
          <p>
            <strong>Conditioning on an event A:</strong>
          </p>
          <div class="formula" data-latex="E[Y | A] = \frac{E[Y \cdot \mathbf{1}_A]}{P(A)}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ Exp(λ). Find E[X | X &gt; t]:
          </p>
          <p>By memorylessness:</p>
          <div class="formula" data-latex="E[X | X > t] = t + E[X] = t + \frac{1}{\lambda}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Independence and Conditioning</h2>
        <div class="definition">
          <p>
            <strong>If X and Y are independent:</strong>
          </p>
          <div class="formula" data-latex="f_{Y|X}(y|x) = f_Y(y)"></div>
          <div class="formula" data-latex="E[Y | X] = E[Y]"></div>
          <div class="formula" data-latex="Var(Y | X) = Var(Y)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If X and Y are independent, knowing X
            tells us nothing about Y. The conditional distribution equals the
            marginal.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Expectation Properties</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>Formula</span>
            </div>
            <div class="summary-row">
              <span>Linearity</span>
              <span>E[aY + bZ | X] = aE[Y|X] + bE[Z|X]</span>
            </div>
            <div class="summary-row">
              <span>Taking out known</span>
              <span>E[g(X)Y | X] = g(X)E[Y|X]</span>
            </div>
            <div class="summary-row">
              <span>Tower property</span>
              <span>E[E[Y|X]] = E[Y]</span>
            </div>
            <div class="summary-row">
              <span>Independence</span>
              <span>E[Y|X] = E[Y] if indep.</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Strategy</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Find marginal f_X(x) or p_X(x)</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Compute f(y|x) = f(x,y) / f_X(x)</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Identify the conditional distribution (often standard)</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Use known formulas for that distribution</span>
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
              <span class="check-text">f(y|x) = f(x,y)/f_X(x) — must find marginal first</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">E[Y] = E[E[Y|X]] — tower property is powerful</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Var(Y) = E[Var(Y|X)] + Var(E[Y|X])</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Recognize standard distributions in conditional form</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Conditional Distributions Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Conditional PDF</h3>
            <div class="formula" data-latex="f(y|x) = \frac{f(x,y)}{f_X(x)}"></div>
          </div>
          <div class="property">
            <h3>Tower Property</h3>
            <div class="formula" data-latex="E[Y] = E[E[Y|X]]"></div>
          </div>
          <div class="property">
            <h3>Total Variance</h3>
            <div class="formula" data-latex="Var(Y) = E[Var(Y|X)] + Var(E[Y|X])"></div>
          </div>
          <div class="property">
            <h3>Conditional Mean</h3>
            <div class="formula" data-latex="E[Y|X=x] = \int y f(y|x) dy"></div>
          </div>
        </div>
      </section>
    </>
  );
}

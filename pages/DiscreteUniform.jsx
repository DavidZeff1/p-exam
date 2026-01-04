export function DiscreteUniform() {
  return (
    <>
      <h1 class="page-title">B.1 Discrete Uniform Distribution</h1>
      <p class="page-subtitle">Discrete Distributions</p>

      <section class="intro">
        <p>
          The discrete uniform distribution assigns equal probability to each
          outcome in a finite set. It's the simplest discrete distribution —
          every value is equally likely.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> X has a discrete uniform distribution on
            {'{a, a+1, ..., b}'} if each value has equal probability:
          </p>
          <div class="formula" data-latex="P(X = k) = \frac{1}{n} \quad \text{for } k = a, a+1, \ldots, b"></div>
          <p>where n = b − a + 1 is the number of possible values.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Like a fair die or picking a random number —
            no outcome is favored over any other.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ DU(a, b)</span>
            <span class="notation-meaning">X is discrete uniform from a to b</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">n = b − a + 1</span>
            <span class="notation-meaning">Number of possible values</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF</h2>
        <div class="definition">
          <p>
            <strong>Probability Mass Function:</strong>
          </p>
          <div class="formula" data-latex="p(k) = P(X = k) = \frac{1}{b - a + 1} = \frac{1}{n}"></div>
          <p>for k ∈ {'{a, a+1, ..., b}'}, and 0 otherwise.</p>
        </div>
        <div class="visual">
          <div class="pmf-visual">
            <div class="pmf-bar" style={{ height: '80px' }}><span>1/6</span></div>
            <div class="pmf-bar" style={{ height: '80px' }}><span>1/6</span></div>
            <div class="pmf-bar" style={{ height: '80px' }}><span>1/6</span></div>
            <div class="pmf-bar" style={{ height: '80px' }}><span>1/6</span></div>
            <div class="pmf-bar" style={{ height: '80px' }}><span>1/6</span></div>
            <div class="pmf-bar" style={{ height: '80px' }}><span>1/6</span></div>
            <div class="pmf-labels">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
            </div>
          </div>
          <p class="visual-caption">PMF of a fair die: All bars equal height</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>Cumulative Distribution Function:</strong>
          </p>
          <div class="formula" data-latex="F(x) = P(X \leq x) = \frac{\lfloor x \rfloor - a + 1}{n} \quad \text{for } a \leq x \leq b"></div>
        </div>
        <div class="example">
          <p>
            <strong>Complete CDF:</strong>
          </p>
          <div class="formula" data-latex="F(x) = \begin{cases} 0 & x < a \\ \frac{\lfloor x \rfloor - a + 1}{n} & a \leq x < b \\ 1 & x \geq b \end{cases}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> For a fair die (a=1, b=6, n=6):
          </p>
          <div class="formula" data-latex="F(3.5) = \frac{3 - 1 + 1}{6} = \frac{3}{6} = 0.5"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = \frac{a + b}{2}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The expected value is simply the midpoint
            of the range. By symmetry, the average is in the middle.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Fair die: E[X] = (1 + 6)/2 = 3.5
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = \frac{(b - a + 1)^2 - 1}{12} = \frac{n^2 - 1}{12}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Wider range means more spread, hence larger
            variance. The formula comes from the variance of equally-spaced values.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Fair die: Var(X) = (6² − 1)/12 = 35/12 ≈ 2.917
          </p>
          <div class="formula" data-latex="\sigma = \sqrt{35/12} \approx 1.708"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">{'{a, a+1, ..., b}'}</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameters</span>
              <span class="dist-prop-val">a (min), b (max)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">(a + b) / 2</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">(n² − 1) / 12</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">All values (no unique mode)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Median</span>
              <span class="dist-prop-val">(a + b) / 2</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Special Case: Die Roll</h2>
        <div class="definition">
          <p>
            <strong>Fair die:</strong> X ~ DU(1, 6)
          </p>
        </div>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>Formula</span>
              <span>Value</span>
            </div>
            <div class="summary-row">
              <span>PMF</span>
              <span>1/n</span>
              <span>1/6 ≈ 0.167</span>
            </div>
            <div class="summary-row">
              <span>Mean</span>
              <span>(1+6)/2</span>
              <span>3.5</span>
            </div>
            <div class="summary-row">
              <span>Variance</span>
              <span>(36−1)/12</span>
              <span>35/12 ≈ 2.917</span>
            </div>
            <div class="summary-row">
              <span>Std Dev</span>
              <span>√(35/12)</span>
              <span>≈ 1.708</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Dice & Games</span>
            <p>Fair dice, spinners, random selection</p>
          </div>
          <div class="app-item">
            <span class="app-title">Random Sampling</span>
            <p>Selecting items from numbered list</p>
          </div>
          <div class="app-item">
            <span class="app-title">Lottery</span>
            <p>Each ticket equally likely to win</p>
          </div>
          <div class="app-item">
            <span class="app-title">Rounding</span>
            <p>Random digit in measurements</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Probabilities</h2>
        <div class="definition">
          <p>
            <strong>Interval probability:</strong> For a ≤ c ≤ d ≤ b:
          </p>
          <div class="formula" data-latex="P(c \leq X \leq d) = \frac{d - c + 1}{n}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Count how many integers are in [c, d],
            divide by total number of values.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Die roll, P(2 ≤ X ≤ 5):
          </p>
          <div class="formula" data-latex="P(2 \leq X \leq 5) = \frac{5 - 2 + 1}{6} = \frac{4}{6} = \frac{2}{3}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>MGF and Moments</h2>
        <div class="definition">
          <p>
            <strong>Moment Generating Function:</strong>
          </p>
          <div class="formula" data-latex="M_X(t) = E[e^{tX}] = \frac{e^{ta}(1 - e^{tn})}{n(1 - e^t)} \quad \text{for } t \neq 0"></div>
          <p>
            <strong>Second moment:</strong>
          </p>
          <div class="formula" data-latex="E[X^2] = \frac{(a+b)(2a+2b+1)}{6} - \frac{ab}{1}"></div>
          <p>Or equivalently:</p>
          <div class="formula" data-latex="E[X^2] = Var(X) + (E[X])^2"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Count n = b − a + 1 correctly (include both endpoints)</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Mean is always the midpoint (a + b)/2</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">For interval probability, count integers in range</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">Variance formula: (n² − 1)/12</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Discrete Uniform Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PMF</h3>
            <div class="formula" data-latex="p(k) = \frac{1}{n}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{a+b}{2}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \frac{n^2-1}{12}"></div>
          </div>
          <div class="property">
            <h3>Support</h3>
            <p>{'{a, a+1, ..., b}'}</p>
          </div>
        </div>
      </section>
    </>
  );
}

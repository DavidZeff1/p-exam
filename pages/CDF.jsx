export function CDF() {
  return (
    <>
      <h1 class="page-title">A.3 Cumulative Distribution Functions</h1>
      <p class="page-subtitle">Univariate Random Variables</p>

      <section class="intro">
        <p>
          The cumulative distribution function (CDF) gives the probability that a
          random variable is less than or equal to a value. It works for both
          discrete and continuous random variables with the same definition.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The CDF of a random variable X is:
          </p>
          <div class="formula" data-latex="F(x) = P(X \leq x)"></div>
          <p>This is defined for all real numbers x, regardless of whether X is discrete or continuous.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> F(x) answers "what's the probability of
            getting x or less?" It accumulates probability from −∞ up to x.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> For a die roll, F(3.5) = P(X ≤ 3.5) = P(X ∈ {'{1,2,3}'}) = 3/6 = 0.5
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF Properties</h2>
        <div class="definition">
          <p>
            <strong>Every CDF must satisfy:</strong>
          </p>
          <div class="formula" data-latex="1. \quad 0 \leq F(x) \leq 1 \text{ for all } x"></div>
          <div class="formula" data-latex="2. \quad F(x) \text{ is non-decreasing}"></div>
          <div class="formula" data-latex="3. \quad \lim_{x \to -\infty} F(x) = 0"></div>
          <div class="formula" data-latex="4. \quad \lim_{x \to \infty} F(x) = 1"></div>
          <div class="formula" data-latex="5. \quad F(x) \text{ is right-continuous}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The CDF starts at 0 (nothing accumulated yet),
            increases as we move right (accumulating more probability), and ends at 1
            (all probability accumulated).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF for Discrete Variables</h2>
        <div class="definition">
          <p>
            <strong>Formula:</strong> Sum the PMF up to x:
          </p>
          <div class="formula" data-latex="F(x) = \sum_{k \leq x} p(k) = \sum_{k \leq x} P(X = k)"></div>
        </div>
        <div class="visual">
          <div class="cdf-discrete-visual">
            <div class="cdf-step-graph">
              <div class="cdf-step" style={{ left: '10%', bottom: '0%', height: '20%' }}></div>
              <div class="cdf-step" style={{ left: '30%', bottom: '0%', height: '45%' }}></div>
              <div class="cdf-step" style={{ left: '50%', bottom: '0%', height: '70%' }}></div>
              <div class="cdf-step" style={{ left: '70%', bottom: '0%', height: '100%' }}></div>
            </div>
            <div class="cdf-labels">
              <span>x₁</span>
              <span>x₂</span>
              <span>x₃</span>
              <span>x₄</span>
            </div>
          </div>
          <p class="visual-caption">Discrete CDF: Step function with jumps at each value</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Die roll CDF:
          </p>
          <div class="cdf-table">
            <div class="cdf-table-row header">
              <span>x</span>
              <span>F(x) = P(X ≤ x)</span>
            </div>
            <div class="cdf-table-row">
              <span>x &lt; 1</span>
              <span>0</span>
            </div>
            <div class="cdf-table-row">
              <span>1 ≤ x &lt; 2</span>
              <span>1/6</span>
            </div>
            <div class="cdf-table-row">
              <span>2 ≤ x &lt; 3</span>
              <span>2/6</span>
            </div>
            <div class="cdf-table-row">
              <span>3 ≤ x &lt; 4</span>
              <span>3/6</span>
            </div>
            <div class="cdf-table-row">
              <span>4 ≤ x &lt; 5</span>
              <span>4/6</span>
            </div>
            <div class="cdf-table-row">
              <span>5 ≤ x &lt; 6</span>
              <span>5/6</span>
            </div>
            <div class="cdf-table-row">
              <span>x ≥ 6</span>
              <span>1</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF for Continuous Variables</h2>
        <div class="definition">
          <p>
            <strong>Formula:</strong> Integrate the PDF from −∞ to x:
          </p>
          <div class="formula" data-latex="F(x) = \int_{-\infty}^{x} f(t) \, dt"></div>
        </div>
        <div class="visual">
          <div class="cdf-continuous-visual">
            <div class="cdf-smooth-graph">
              <div class="cdf-curve-line"></div>
            </div>
          </div>
          <p class="visual-caption">Continuous CDF: Smooth, non-decreasing curve from 0 to 1</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> If f(x) = 2x for 0 ≤ x ≤ 1, find F(x):
          </p>
          <div class="formula" data-latex="F(x) = \int_0^x 2t \, dt = t^2 \Big|_0^x = x^2 \text{ for } 0 \leq x \leq 1"></div>
          <p>Complete CDF:</p>
          <div class="formula" data-latex="F(x) = \begin{cases} 0 & x < 0 \\ x^2 & 0 \leq x \leq 1 \\ 1 & x > 1 \end{cases}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF from CDF</h2>
        <div class="definition">
          <p>
            <strong>Relationship:</strong> The PDF is the derivative of the CDF:
          </p>
          <div class="formula" data-latex="f(x) = \frac{d}{dx} F(x) = F'(x)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Integration and differentiation are inverses.
            The CDF accumulates the PDF; the PDF is the rate of accumulation.
          </p>
        </div>
        <div class="visual">
          <div class="relationship-visual">
            <div class="rel-box">
              <span class="rel-label">PDF f(x)</span>
            </div>
            <div class="rel-arrows">
              <div class="rel-arrow-down">
                <span>∫ integrate</span>
                <span class="arrow">→</span>
              </div>
              <div class="rel-arrow-up">
                <span class="arrow">←</span>
                <span>d/dx differentiate</span>
              </div>
            </div>
            <div class="rel-box">
              <span class="rel-label">CDF F(x)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Probabilities with CDF</h2>
        <div class="definition">
          <p>
            <strong>Key formulas:</strong> The CDF makes probability calculations easy:
          </p>
          <div class="formula" data-latex="P(X \leq a) = F(a)"></div>
          <div class="formula" data-latex="P(X > a) = 1 - F(a)"></div>
          <div class="formula" data-latex="P(a < X \leq b) = F(b) - F(a)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Subtract CDFs to find probability in an interval.
            It's like finding distance on a number line by subtracting positions.
          </p>
        </div>
        <div class="visual">
          <div class="cdf-interval-visual">
            <div class="cdf-line">
              <div class="cdf-segment left">
                <span>F(a)</span>
              </div>
              <div class="cdf-segment middle">
                <span>F(b) − F(a)</span>
              </div>
              <div class="cdf-segment right">
                <span>1 − F(b)</span>
              </div>
            </div>
            <div class="cdf-line-labels">
              <span>−∞</span>
              <span>a</span>
              <span>b</span>
              <span>∞</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> If F(x) = x² for 0 ≤ x ≤ 1, find P(0.3 &lt; X ≤ 0.7):
          </p>
          <div class="formula" data-latex="P(0.3 < X \leq 0.7) = F(0.7) - F(0.3) = 0.49 - 0.09 = 0.40"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Discrete CDF: Jump Sizes</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> For discrete X, the jump in F(x) at point x equals p(x):
          </p>
          <div class="formula" data-latex="P(X = x) = F(x) - F(x^-) = \text{jump at } x"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Each possible value creates a "step" in the CDF.
            The step height is the probability mass at that point.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> For a die, the jump at x = 3 is:
          </p>
          <div class="formula" data-latex="F(3) - F(3^-) = \frac{3}{6} - \frac{2}{6} = \frac{1}{6} = P(X = 3)"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Survival Function</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The survival function (or reliability function) is:
          </p>
          <div class="formula" data-latex="S(x) = P(X > x) = 1 - F(x)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> S(x) is the probability of "surviving" past x.
            Common in reliability engineering and actuarial science.
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">CDF F(x)</span>
              <p class="compare-desc">P(X ≤ x)</p>
              <p class="compare-vals">Starts at 0, ends at 1</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">Survival S(x)</span>
              <p class="compare-desc">P(X &gt; x)</p>
              <p class="compare-vals">Starts at 1, ends at 0</p>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Quantile Function (Inverse CDF)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The quantile function F⁻¹(p) gives the value x
            such that F(x) = p:
          </p>
          <div class="formula" data-latex="F^{-1}(p) = \inf\{x : F(x) \geq p\}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Given a probability p, the quantile function
            tells you what value x has that much probability below it.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> If F(x) = x² for 0 ≤ x ≤ 1, find the median (50th percentile):
          </p>
          <div class="formula" data-latex="F(x) = 0.5 \Rightarrow x^2 = 0.5 \Rightarrow x = \sqrt{0.5} \approx 0.707"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common CDF Examples</h2>
        <div class="visual">
          <div class="rv-examples-grid">
            <div class="rv-example">
              <span class="rv-name">Uniform(0,1)</span>
              <span class="rv-support">F(x) = x</span>
              <span class="rv-desc">Linear from 0 to 1</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Exponential(λ)</span>
              <span class="rv-support">F(x) = 1 − e^(−λx)</span>
              <span class="rv-desc">Approaches 1 asymptotically</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Normal(0,1)</span>
              <span class="rv-support">F(x) = Φ(x)</span>
              <span class="rv-desc">S-shaped (sigmoid)</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Bernoulli(p)</span>
              <span class="rv-support">Step at 0 and 1</span>
              <span class="rv-desc">Two jumps only</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>CDF Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Definition</h3>
            <div class="formula" data-latex="F(x) = P(X \leq x)"></div>
          </div>
          <div class="property">
            <h3>From PDF</h3>
            <div class="formula" data-latex="F(x) = \int_{-\infty}^{x} f(t)dt"></div>
          </div>
          <div class="property">
            <h3>Interval</h3>
            <div class="formula" data-latex="P(a < X \leq b) = F(b) - F(a)"></div>
          </div>
          <div class="property">
            <h3>Survival</h3>
            <div class="formula" data-latex="S(x) = 1 - F(x)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

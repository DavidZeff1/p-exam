export function ContinuousUniform() {
  return (
    <>
      <h1 class="page-title">C.1 Continuous Uniform Distribution</h1>
      <p class="page-subtitle">Continuous Distributions</p>

      <section class="intro">
        <p>
          The continuous uniform distribution assigns equal probability density
          to all values in an interval [a, b]. It's the continuous analog of
          the discrete uniform — every point is equally likely.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> X has a continuous uniform distribution
            on [a, b] if its probability is spread evenly across the interval.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ U(a, b)</span>
            <span class="notation-meaning">X is uniform on [a, b]</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">a</span>
            <span class="notation-meaning">Lower bound (minimum)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">b</span>
            <span class="notation-meaning">Upper bound (maximum)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">b − a</span>
            <span class="notation-meaning">Length of interval</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF</h2>
        <div class="definition">
          <p>
            <strong>Probability Density Function:</strong>
          </p>
          <div class="formula" data-latex="f(x) = \begin{cases} \frac{1}{b-a} & a \leq x \leq b \\ 0 & \text{otherwise} \end{cases}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The density is constant (flat) across the
            interval. The height 1/(b−a) ensures the total area equals 1.
          </p>
        </div>
        <div class="visual">
          <div class="uniform-pdf-visual">
            <div class="uniform-rect">
              <span class="uniform-height">1/(b−a)</span>
            </div>
            <div class="uniform-axis">
              <span>a</span>
              <span>b</span>
            </div>
          </div>
          <p class="visual-caption">PDF: Flat rectangle with area = 1</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ U(2, 8). Find f(x):
          </p>
          <div class="formula" data-latex="f(x) = \frac{1}{8-2} = \frac{1}{6} \approx 0.167 \text{ for } 2 \leq x \leq 8"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>Cumulative Distribution Function:</strong>
          </p>
          <div class="formula" data-latex="F(x) = \begin{cases} 0 & x < a \\ \frac{x-a}{b-a} & a \leq x \leq b \\ 1 & x > b \end{cases}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The CDF increases linearly from 0 to 1
            across the interval. It measures what fraction of the interval
            lies below x.
          </p>
        </div>
        <div class="visual">
          <div class="uniform-cdf-visual">
            <div class="uniform-cdf-line"></div>
            <div class="uniform-cdf-axis">
              <span>a</span>
              <span>b</span>
            </div>
            <div class="uniform-cdf-labels">
              <span>0</span>
              <span>1</span>
            </div>
          </div>
          <p class="visual-caption">CDF: Linear from 0 to 1</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ U(2, 8). Find F(5):
          </p>
          <div class="formula" data-latex="F(5) = \frac{5-2}{8-2} = \frac{3}{6} = 0.5"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Computing Probabilities</h2>
        <div class="definition">
          <p>
            <strong>Key formula:</strong> For a ≤ c &lt; d ≤ b:
          </p>
          <div class="formula" data-latex="P(c < X < d) = \frac{d - c}{b - a}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Probability equals the ratio of lengths.
            What fraction of the total interval [a,b] does [c,d] occupy?
          </p>
        </div>
        <div class="visual">
          <div class="interval-visual">
            <div class="interval-bar">
              <div class="interval-full">
                <span>b − a</span>
              </div>
              <div class="interval-part">
                <span>d − c</span>
              </div>
            </div>
            <div class="interval-labels">
              <span>a</span>
              <span>c</span>
              <span>d</span>
              <span>b</span>
            </div>
          </div>
          <p class="visual-caption">P(c &lt; X &lt; d) = (d−c) / (b−a)</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ U(2, 8). Find P(3 &lt; X &lt; 7):
          </p>
          <div class="formula" data-latex="P(3 < X < 7) = \frac{7-3}{8-2} = \frac{4}{6} = \frac{2}{3}"></div>
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
            <strong>Intuition:</strong> The mean is the midpoint of the interval.
            By symmetry, the "center of mass" is right in the middle.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ U(2, 8):
          </p>
          <div class="formula" data-latex="E[X] = \frac{2 + 8}{2} = 5"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance and Standard Deviation:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = \frac{(b-a)^2}{12}"></div>
          <div class="formula" data-latex="\sigma = \frac{b-a}{\sqrt{12}} = \frac{b-a}{2\sqrt{3}}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Variance depends only on the interval
            width (b−a). Wider interval means more spread.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ U(2, 8):
          </p>
          <div class="formula" data-latex="Var(X) = \frac{(8-2)^2}{12} = \frac{36}{12} = 3"></div>
          <div class="formula" data-latex="\sigma = \sqrt{3} \approx 1.732"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">[a, b]</span>
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
              <span class="dist-prop-val">(b − a)² / 12</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Median</span>
              <span class="dist-prop-val">(a + b) / 2</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">Any value in [a, b]</span>
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
          <div class="formula" data-latex="M_X(t) = \frac{e^{tb} - e^{ta}}{t(b-a)} \quad \text{for } t \neq 0"></div>
          <div class="formula" data-latex="M_X(0) = 1"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Standard Uniform U(0, 1)</h2>
        <div class="definition">
          <p>
            <strong>Special case:</strong> The standard uniform has a = 0, b = 1:
          </p>
          <div class="formula" data-latex="f(x) = 1 \quad \text{for } 0 \leq x \leq 1"></div>
          <div class="formula" data-latex="F(x) = x \quad \text{for } 0 \leq x \leq 1"></div>
        </div>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>U(0, 1)</span>
            </div>
            <div class="summary-row">
              <span>PDF</span>
              <span>f(x) = 1</span>
            </div>
            <div class="summary-row">
              <span>CDF</span>
              <span>F(x) = x</span>
            </div>
            <div class="summary-row">
              <span>Mean</span>
              <span>1/2</span>
            </div>
            <div class="summary-row">
              <span>Variance</span>
              <span>1/12</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Importance:</strong> U(0, 1) is fundamental for random number
            generation. All other distributions can be generated from it.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Percentiles and Quantiles</h2>
        <div class="definition">
          <p>
            <strong>Formula:</strong> The pth percentile (0 &lt; p &lt; 1) is:
          </p>
          <div class="formula" data-latex="x_p = a + p(b - a)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Linear interpolation between a and b.
            The median (p = 0.5) is the midpoint.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> X ~ U(2, 8). Find the 75th percentile:
          </p>
          <div class="formula" data-latex="x_{0.75} = 2 + 0.75(8-2) = 2 + 4.5 = 6.5"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Linear Transformation</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X ~ U(0, 1), then Y = a + (b−a)X ~ U(a, b)
          </p>
          <p>
            <strong>Conversely:</strong> If X ~ U(a, b), then Z = (X−a)/(b−a) ~ U(0, 1)
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Any uniform can be standardized to U(0, 1)
            or vice versa through linear scaling.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Order Statistics</h2>
        <div class="definition">
          <p>
            <strong>For n samples from U(0, 1):</strong> The kth smallest value X₍ₖ₎ has:
          </p>
          <div class="formula" data-latex="E[X_{(k)}] = \frac{k}{n+1}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If you draw n values uniformly, they
            divide [0, 1] into n+1 roughly equal parts on average.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Random Number Generation</span>
            <p>Base for simulating other distributions</p>
          </div>
          <div class="app-item">
            <span class="app-title">Rounding Errors</span>
            <p>Error from rounding to nearest integer</p>
          </div>
          <div class="app-item">
            <span class="app-title">Arrival Times</span>
            <p>When an event occurs within a window</p>
          </div>
          <div class="app-item">
            <span class="app-title">Monte Carlo</span>
            <p>Sampling for simulation studies</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Comparison: Discrete vs Continuous Uniform</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>Discrete U(a, b)</span>
              <span>Continuous U(a, b)</span>
            </div>
            <div class="summary-row">
              <span>Support</span>
              <span>{'{a, a+1, ..., b}'}</span>
              <span>[a, b]</span>
            </div>
            <div class="summary-row">
              <span>PMF/PDF</span>
              <span>1/n</span>
              <span>1/(b−a)</span>
            </div>
            <div class="summary-row">
              <span>Mean</span>
              <span>(a+b)/2</span>
              <span>(a+b)/2</span>
            </div>
            <div class="summary-row">
              <span>Variance</span>
              <span>(n²−1)/12</span>
              <span>(b−a)²/12</span>
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
              <span class="check-text">Probability = length ratio: (d−c)/(b−a)</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Mean = midpoint = (a+b)/2 (always)</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Variance formula: (b−a)²/12</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">CDF is linear: F(x) = (x−a)/(b−a)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Continuous Uniform Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PDF</h3>
            <div class="formula" data-latex="f(x) = \frac{1}{b-a}"></div>
          </div>
          <div class="property">
            <h3>CDF</h3>
            <div class="formula" data-latex="F(x) = \frac{x-a}{b-a}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{a+b}{2}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \frac{(b-a)^2}{12}"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PDF() {
  return (
    <>
      <h1 class="page-title">A.2 Probability Density Functions</h1>
      <p class="page-subtitle">Univariate Random Variables</p>

      <section class="intro">
        <p>
          A probability density function (PDF) describes how probability is
          distributed across values of a continuous random variable. For discrete
          variables, we use the probability mass function (PMF) instead.
        </p>
      </section>

      <section class="definition-block">
        <h2>Probability Mass Function (Discrete)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> For a discrete random variable X, the PMF
            gives the probability of each value:
          </p>
          <div class="formula" data-latex="p(x) = P(X = x)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The PMF tells you the probability of landing
            exactly on each value. Think of it as probability "mass" concentrated
            at specific points.
          </p>
        </div>
        <div class="visual">
          <div class="pmf-visual">
            <div class="pmf-bars">
              <div class="pmf-bar" style={{ height: '60px' }}><span>0.3</span></div>
              <div class="pmf-bar" style={{ height: '100px' }}><span>0.5</span></div>
              <div class="pmf-bar" style={{ height: '40px' }}><span>0.2</span></div>
            </div>
            <div class="pmf-labels">
              <span>x=1</span>
              <span>x=2</span>
              <span>x=3</span>
            </div>
          </div>
          <p class="visual-caption">PMF: Probability concentrated at discrete points</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF Properties</h2>
        <div class="definition">
          <p>
            <strong>Requirements:</strong> A valid PMF must satisfy:
          </p>
          <div class="formula" data-latex="1. \quad p(x) \geq 0 \text{ for all } x"></div>
          <div class="formula" data-latex="2. \quad \sum_{\text{all } x} p(x) = 1"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Probabilities can't be negative, and all
            probabilities must sum to 1 (something has to happen).
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Die roll PMF:
          </p>
          <div class="formula" data-latex="p(x) = \frac{1}{6} \text{ for } x \in \{1,2,3,4,5,6\}"></div>
          <div class="formula" data-latex="\sum_{x=1}^{6} p(x) = 6 \times \frac{1}{6} = 1 \checkmark"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Probability Density Function (Continuous)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> For a continuous random variable X, the PDF
            f(x) satisfies:
          </p>
          <div class="formula" data-latex="P(a \leq X \leq b) = \int_a^b f(x) \, dx"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The PDF gives probability "density," not
            probability itself. Probability is the area under the curve between
            two points. The height f(x) tells you how concentrated probability is
            near x.
          </p>
        </div>
        <div class="visual">
          <div class="pdf-visual">
            <div class="pdf-curve">
              <div class="pdf-area"></div>
              <div class="pdf-line"></div>
            </div>
            <div class="pdf-axis">
              <span>a</span>
              <span class="pdf-axis-label">Area = P(a ≤ X ≤ b)</span>
              <span>b</span>
            </div>
          </div>
          <p class="visual-caption">PDF: Probability is area under the curve</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PDF Properties</h2>
        <div class="definition">
          <p>
            <strong>Requirements:</strong> A valid PDF must satisfy:
          </p>
          <div class="formula" data-latex="1. \quad f(x) \geq 0 \text{ for all } x"></div>
          <div class="formula" data-latex="2. \quad \int_{-\infty}^{\infty} f(x) \, dx = 1"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Density can't be negative, and total area
            under the curve must equal 1.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Note:</strong> f(x) can be greater than 1! It's density, not
            probability. Only the area (integral) must be ≤ 1.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Difference: P(X = x) for Continuous</h2>
        <div class="definition">
          <p>
            <strong>Critical point:</strong> For continuous random variables:
          </p>
          <div class="formula" data-latex="P(X = x) = 0 \text{ for any specific } x"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The probability of hitting exactly one point
            in a continuous range is zero — like the probability of a dart landing
            on exactly π inches from the center. The area of a single line is zero.
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">Discrete</span>
              <p class="compare-desc">P(X = 3) can be positive</p>
              <p class="compare-vals">P(X = 3) = 0.25</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">Continuous</span>
              <p class="compare-desc">P(X = 3) is always zero</p>
              <p class="compare-vals">P(X = 3) = 0</p>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Consequence:</strong> For continuous X:
          </p>
          <div class="formula" data-latex="P(a < X < b) = P(a \leq X \leq b) = P(a \leq X < b) = P(a < X \leq b)"></div>
          <p>Endpoints don't matter for continuous distributions!</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Finding Probabilities from PDF</h2>
        <div class="definition">
          <p>
            <strong>Method:</strong> Integrate the PDF over the desired range:
          </p>
          <div class="formula" data-latex="P(X > a) = \int_a^{\infty} f(x) \, dx"></div>
          <div class="formula" data-latex="P(X < b) = \int_{-\infty}^{b} f(x) \, dx"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Let f(x) = 2x for 0 ≤ x ≤ 1. Find P(X &gt; 0.5):
          </p>
          <div class="formula" data-latex="P(X > 0.5) = \int_{0.5}^{1} 2x \, dx = [x^2]_{0.5}^{1} = 1 - 0.25 = 0.75"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Verifying a Valid PDF</h2>
        <div class="definition">
          <p>
            <strong>Checklist:</strong> To verify f(x) is a valid PDF:
          </p>
        </div>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Check f(x) ≥ 0 for all x in support</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Check f(x) = 0 outside support</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Verify ∫f(x)dx = 1 over the support</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Is f(x) = 3x² for 0 ≤ x ≤ 1 a valid PDF?
          </p>
          <p>✓ f(x) = 3x² ≥ 0 for all x in [0,1]</p>
          <div class="formula" data-latex="\int_0^1 3x^2 \, dx = [x^3]_0^1 = 1 - 0 = 1 \checkmark"></div>
          <p>Yes, it's a valid PDF.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Finding the Normalizing Constant</h2>
        <div class="definition">
          <p>
            <strong>Problem:</strong> Given f(x) = cx² for 0 ≤ x ≤ 2, find c.
          </p>
          <p>
            <strong>Method:</strong> Set the integral equal to 1 and solve for c:
          </p>
          <div class="formula" data-latex="\int_0^2 cx^2 \, dx = 1"></div>
          <div class="formula" data-latex="c \cdot \frac{x^3}{3} \Big|_0^2 = 1 \Rightarrow c \cdot \frac{8}{3} = 1 \Rightarrow c = \frac{3}{8}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The constant c "normalizes" the function so
            the total area equals 1.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common PDF Shapes</h2>
        <div class="visual">
          <div class="rv-examples-grid">
            <div class="rv-example">
              <span class="rv-name">Uniform</span>
              <span class="rv-support">Flat/constant</span>
              <span class="rv-desc">f(x) = 1/(b−a)</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Exponential</span>
              <span class="rv-support">Decreasing</span>
              <span class="rv-desc">f(x) = λe^(−λx)</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Normal</span>
              <span class="rv-support">Bell curve</span>
              <span class="rv-desc">Symmetric around μ</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Gamma</span>
              <span class="rv-support">Right-skewed</span>
              <span class="rv-desc">Flexible shape</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF vs PDF Summary</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>PMF (Discrete)</span>
              <span>PDF (Continuous)</span>
            </div>
            <div class="summary-row">
              <span>Notation</span>
              <span>p(x) or P(X=x)</span>
              <span>f(x)</span>
            </div>
            <div class="summary-row">
              <span>Gives</span>
              <span>Actual probability</span>
              <span>Probability density</span>
            </div>
            <div class="summary-row">
              <span>P(X = x)</span>
              <span>= p(x)</span>
              <span>= 0 always</span>
            </div>
            <div class="summary-row">
              <span>Sum/Integrate to</span>
              <span>Σp(x) = 1</span>
              <span>∫f(x)dx = 1</span>
            </div>
            <div class="summary-row">
              <span>Can exceed 1?</span>
              <span>No</span>
              <span>Yes (density)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>PDF/PMF Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PMF</h3>
            <div class="formula" data-latex="p(x) = P(X = x)"></div>
          </div>
          <div class="property">
            <h3>PDF</h3>
            <div class="formula" data-latex="P(a \leq X \leq b) = \int_a^b f(x)dx"></div>
          </div>
          <div class="property">
            <h3>Normalization</h3>
            <div class="formula" data-latex="\sum p(x) = 1, \int f(x)dx = 1"></div>
          </div>
          <div class="property">
            <h3>Non-negative</h3>
            <div class="formula" data-latex="p(x) \geq 0, f(x) \geq 0"></div>
          </div>
        </div>
      </section>
    </>
  );
}

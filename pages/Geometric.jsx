export function Geometric() {
  return (
    <>
      <h1 class="page-title">B.3 Geometric Distribution</h1>
      <p class="page-subtitle">Discrete Distributions</p>

      <section class="intro">
        <p>
          The geometric distribution models the number of trials needed to get
          the first success in a sequence of independent Bernoulli trials. It
          answers "how long until something happens?"
        </p>
      </section>

      <section class="definition-block">
        <h2>Two Conventions</h2>
        <div class="definition">
          <p>
            <strong>Warning:</strong> There are two common definitions. Know which one your exam uses!
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">Version 1</span>
              <p class="compare-desc">X = trials until first success</p>
              <p class="compare-vals">Support: {'{1, 2, 3, ...}'}</p>
              <p class="compare-method">Includes the success trial</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">Version 2</span>
              <p class="compare-desc">X = failures before first success</p>
              <p class="compare-vals">Support: {'{0, 1, 2, ...}'}</p>
              <p class="compare-method">Doesn't include success</p>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Note:</strong> SOA Exam P typically uses Version 1 (trials until success).
            We'll use Version 1 throughout this page.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Definition (Version 1)</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Repeat independent Bernoulli(p) trials until
            the first success. X = number of trials needed.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ Geom(p)</span>
            <span class="notation-meaning">X is geometric with success prob p</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">p</span>
            <span class="notation-meaning">Probability of success on each trial</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">q = 1 − p</span>
            <span class="notation-meaning">Probability of failure</span>
          </div>
        </div>
        <div class="visual">
          <div class="geom-sequence">
            <span class="geom-fail">F</span>
            <span class="geom-fail">F</span>
            <span class="geom-fail">F</span>
            <span class="geom-dots">⋯</span>
            <span class="geom-fail">F</span>
            <span class="geom-success">S</span>
          </div>
          <p class="visual-caption">k−1 failures, then 1 success = k trials total</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF</h2>
        <div class="definition">
          <p>
            <strong>Probability Mass Function (Version 1):</strong>
          </p>
          <div class="formula" data-latex="P(X = k) = (1-p)^{k-1} p = q^{k-1} p"></div>
          <p>for k = 1, 2, 3, ...</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Fail k−1 times (each with probability q),
            then succeed once (probability p). Multiply them together.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die until you get a 6. P(first 6 on 4th roll)?
          </p>
          <div class="formula" data-latex="P(X = 4) = \left(\frac{5}{6}\right)^3 \times \frac{1}{6} = \frac{125}{1296} \approx 0.0965"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>CDF</h2>
        <div class="definition">
          <p>
            <strong>Cumulative Distribution Function:</strong>
          </p>
          <div class="formula" data-latex="F(k) = P(X \leq k) = 1 - (1-p)^k = 1 - q^k"></div>
          <p>for k = 1, 2, 3, ...</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> P(success within k trials) = 1 − P(all k fail).
            The complement approach is simpler here.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(get a 6 within first 3 rolls)?
          </p>
          <div class="formula" data-latex="P(X \leq 3) = 1 - \left(\frac{5}{6}\right)^3 = 1 - \frac{125}{216} = \frac{91}{216} \approx 0.421"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Survival Function</h2>
        <div class="definition">
          <p>
            <strong>P(X &gt; k):</strong> Probability of needing more than k trials:
          </p>
          <div class="formula" data-latex="P(X > k) = (1-p)^k = q^k"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> To need more than k trials means failing
            all of the first k trials.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = \frac{1}{p}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If p = 1/6, you expect to wait 6 trials on
            average. Lower success probability means longer expected wait.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Expected rolls until first 6?
          </p>
          <div class="formula" data-latex="E[X] = \frac{1}{1/6} = 6 \text{ rolls}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance and Standard Deviation:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = \frac{1-p}{p^2} = \frac{q}{p^2}"></div>
          <div class="formula" data-latex="\sigma = \frac{\sqrt{1-p}}{p} = \frac{\sqrt{q}}{p}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Rolling until first 6:
          </p>
          <div class="formula" data-latex="Var(X) = \frac{5/6}{(1/6)^2} = \frac{5/6}{1/36} = 30"></div>
          <div class="formula" data-latex="\sigma = \sqrt{30} \approx 5.48"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">{'{1, 2, 3, ...}'}</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameter</span>
              <span class="dist-prop-val">p (success prob)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">1/p</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">(1−p)/p²</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">1 (always)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">MGF</span>
              <span class="dist-prop-val">pe^t / (1−qe^t)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Memoryless Property</h2>
        <div class="definition">
          <p>
            <strong>Key property:</strong> The geometric distribution is memoryless:
          </p>
          <div class="formula" data-latex="P(X > m + n \,|\, X > m) = P(X > n)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If you've already failed m times, the
            probability of needing n more trials is the same as starting fresh.
            Past failures don't affect future chances — "the coin has no memory."
          </p>
        </div>
        <div class="visual">
          <div class="memoryless-visual">
            <div class="mem-past">
              <span class="mem-label">Already failed</span>
              <span class="mem-trials">F F F F F</span>
            </div>
            <div class="mem-arrow">→</div>
            <div class="mem-future">
              <span class="mem-label">Same as starting over</span>
              <span class="mem-trials">? ? ? ...</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Gambler's Fallacy:</strong> "I've lost 10 times, so I'm due
            for a win!" is WRONG. Each trial is independent — past outcomes don't
            influence future probabilities.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>MGF</h2>
        <div class="definition">
          <p>
            <strong>Moment Generating Function:</strong>
          </p>
          <div class="formula" data-latex="M_X(t) = \frac{pe^t}{1 - (1-p)e^t} = \frac{pe^t}{1 - qe^t}"></div>
          <p>for t &lt; −ln(1−p)</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Version 2 Formulas</h2>
        <div class="definition">
          <p>
            <strong>If X = failures before first success:</strong>
          </p>
        </div>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>Version 1 (trials)</span>
              <span>Version 2 (failures)</span>
            </div>
            <div class="summary-row">
              <span>Support</span>
              <span>{'{1, 2, 3, ...}'}</span>
              <span>{'{0, 1, 2, ...}'}</span>
            </div>
            <div class="summary-row">
              <span>PMF</span>
              <span>q^(k−1)p</span>
              <span>q^k · p</span>
            </div>
            <div class="summary-row">
              <span>Mean</span>
              <span>1/p</span>
              <span>(1−p)/p</span>
            </div>
            <div class="summary-row">
              <span>Variance</span>
              <span>(1−p)/p²</span>
              <span>(1−p)/p²</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Relationship to Other Distributions</h2>
        <div class="definition">
          <p>
            <strong>Connections:</strong>
          </p>
          <ul class="concept-list">
            <li>Geometric is Negative Binomial with r = 1</li>
            <li>Sum of n i.i.d. Geometric(p) is Negative Binomial(n, p)</li>
            <li>Geometric is the discrete analog of Exponential</li>
          </ul>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Quality Control</span>
            <p>Items inspected until first defect</p>
          </div>
          <div class="app-item">
            <span class="app-title">Games</span>
            <p>Rolls until first 6, attempts until win</p>
          </div>
          <div class="app-item">
            <span class="app-title">Reliability</span>
            <p>Tests until first failure</p>
          </div>
          <div class="app-item">
            <span class="app-title">Sales</span>
            <p>Calls until first sale</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Check which version the problem uses (trials vs failures)</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Use complement for P(X ≤ k): easier than summing PMF</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Memoryless property can simplify conditional problems</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">E[X] = 1/p is intuitive: rare events → longer wait</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Geometric Summary (Version 1)</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PMF</h3>
            <div class="formula" data-latex="P(X=k) = q^{k-1}p"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{1}{p}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \frac{1-p}{p^2}"></div>
          </div>
          <div class="property">
            <h3>Memoryless</h3>
            <div class="formula" data-latex="P(X > m+n | X > m) = P(X > n)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

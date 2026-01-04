export function NegativeBinomial() {
  return (
    <>
      <h1 class="page-title">B.4 Negative Binomial Distribution</h1>
      <p class="page-subtitle">Discrete Distributions</p>

      <section class="intro">
        <p>
          The negative binomial distribution models the number of trials needed
          to achieve a fixed number of successes. It generalizes the geometric
          distribution from "first success" to "rth success."
        </p>
      </section>

      <section class="definition-block">
        <h2>Two Conventions</h2>
        <div class="definition">
          <p>
            <strong>Warning:</strong> Like geometric, there are two common definitions:
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">Version 1</span>
              <p class="compare-desc">X = trials until rth success</p>
              <p class="compare-vals">Support: {'{r, r+1, r+2, ...}'}</p>
              <p class="compare-method">Includes success trials</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">Version 2</span>
              <p class="compare-desc">X = failures before rth success</p>
              <p class="compare-vals">Support: {'{0, 1, 2, ...}'}</p>
              <p class="compare-method">Only counts failures</p>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Note:</strong> We'll use Version 1 (trials until rth success),
            which is common on Exam P. Always check your source's convention.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Definition (Version 1)</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Repeat independent Bernoulli(p) trials until
            the rth success. X = total number of trials needed.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">X ~ NB(r, p)</span>
            <span class="notation-meaning">Negative binomial: r successes, prob p</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">r</span>
            <span class="notation-meaning">Number of successes needed</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">p</span>
            <span class="notation-meaning">Probability of success per trial</span>
          </div>
        </div>
        <div class="visual">
          <div class="nb-sequence">
            <div class="nb-trials">
              <span class="nb-trial fail">F</span>
              <span class="nb-trial success">S</span>
              <span class="nb-trial fail">F</span>
              <span class="nb-trial fail">F</span>
              <span class="nb-trial success">S</span>
              <span class="nb-trial fail">F</span>
              <span class="nb-trial success">S</span>
            </div>
            <p class="visual-caption">Example: 3rd success on 7th trial (r=3, k=7)</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF (Version 1)</h2>
        <div class="definition">
          <p>
            <strong>Probability Mass Function:</strong>
          </p>
          <div class="formula" data-latex="P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}"></div>
          <p>for k = r, r+1, r+2, ...</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The kth trial must be a success (the rth one).
            Before that, we need exactly r−1 successes in k−1 trials:
          </p>
          <div class="visual">
            <div class="binom-breakdown">
              <div class="binom-part">
                <span class="binom-formula">C(k−1, r−1)</span>
                <span class="binom-meaning">Ways to place r−1 successes in first k−1 trials</span>
              </div>
              <div class="binom-times">×</div>
              <div class="binom-part">
                <span class="binom-formula">p^r</span>
                <span class="binom-meaning">r total successes</span>
              </div>
              <div class="binom-times">×</div>
              <div class="binom-part">
                <span class="binom-formula">(1−p)^(k−r)</span>
                <span class="binom-meaning">k−r failures</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(3rd head on 5th coin flip)?
          </p>
          <p>r = 3, k = 5, p = 0.5</p>
          <div class="formula" data-latex="P(X = 5) = \binom{4}{2} (0.5)^3 (0.5)^2 = 6 \times 0.125 \times 0.25 = 0.1875"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF (Version 2)</h2>
        <div class="definition">
          <p>
            <strong>If Y = failures before rth success:</strong>
          </p>
          <div class="formula" data-latex="P(Y = k) = \binom{k+r-1}{k} p^r (1-p)^k = \binom{k+r-1}{r-1} p^r (1-p)^k"></div>
          <p>for k = 0, 1, 2, ...</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Note:</strong> Version 2 is sometimes written using the
            "negative binomial coefficient" notation, hence the name.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean (Version 1 — trials):</strong>
          </p>
          <div class="formula" data-latex="E[X] = \frac{r}{p}"></div>
          <p>
            <strong>Mean (Version 2 — failures):</strong>
          </p>
          <div class="formula" data-latex="E[Y] = \frac{r(1-p)}{p} = \frac{rq}{p}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If one success takes 1/p trials on average,
            then r successes take r/p trials. Makes sense!
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Expected flips until 3rd head (p = 0.5)?
          </p>
          <div class="formula" data-latex="E[X] = \frac{3}{0.5} = 6 \text{ flips}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance (both versions):</strong>
          </p>
          <div class="formula" data-latex="Var(X) = Var(Y) = \frac{r(1-p)}{p^2} = \frac{rq}{p^2}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> This is r times the variance of a single
            geometric, since negative binomial is a sum of r geometrics.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Variance for 3rd head (p = 0.5)?
          </p>
          <div class="formula" data-latex="Var(X) = \frac{3 \times 0.5}{0.25} = \frac{1.5}{0.25} = 6"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support (V1)</span>
              <span class="dist-prop-val">{'{r, r+1, r+2, ...}'}</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameters</span>
              <span class="dist-prop-val">r (successes), p (prob)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean (V1)</span>
              <span class="dist-prop-val">r/p</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">r(1−p)/p²</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mode</span>
              <span class="dist-prop-val">⌊(r−1)/p⌋ + 1</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Special Case</span>
              <span class="dist-prop-val">r=1 is Geometric</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>MGF</h2>
        <div class="definition">
          <p>
            <strong>Moment Generating Function (Version 1):</strong>
          </p>
          <div class="formula" data-latex="M_X(t) = \left(\frac{pe^t}{1 - (1-p)e^t}\right)^r = \left(\frac{pe^t}{1 - qe^t}\right)^r"></div>
          <p>for t &lt; −ln(1−p)</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> This is the geometric MGF raised to the rth
            power, since NB is a sum of r independent geometrics.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Geometrics</h2>
        <div class="definition">
          <p>
            <strong>Key relationship:</strong> If X₁, X₂, ..., Xᵣ are i.i.d. Geometric(p), then:
          </p>
          <div class="formula" data-latex="\sum_{i=1}^{r} X_i \sim \text{NB}(r, p)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Waiting for the rth success = waiting for
            1st success + waiting for 2nd + ... + waiting for rth. Each wait is geometric.
          </p>
        </div>
        <div class="visual">
          <div class="sum-visual">
            <div class="sum-term">
              <span class="sum-label">Wait for 1st</span>
              <span class="sum-dist">Geom(p)</span>
            </div>
            <div class="sum-plus">+</div>
            <div class="sum-term">
              <span class="sum-label">Wait for 2nd</span>
              <span class="sum-dist">Geom(p)</span>
            </div>
            <div class="sum-plus">+ ⋯ +</div>
            <div class="sum-term">
              <span class="sum-label">Wait for rth</span>
              <span class="sum-dist">Geom(p)</span>
            </div>
            <div class="sum-equals">=</div>
            <div class="sum-result">
              <span class="sum-label">Total wait</span>
              <span class="sum-dist">NB(r, p)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Relationship to Binomial</h2>
        <div class="definition">
          <p>
            <strong>Connection:</strong> Binomial and Negative Binomial are related:
          </p>
          <ul class="concept-list">
            <li>Binomial: Fixed n trials, random number of successes</li>
            <li>Negative Binomial: Fixed r successes, random number of trials</li>
          </ul>
          <p>
            <strong>Useful identity:</strong>
          </p>
          <div class="formula" data-latex="P(X \leq n) = P(Y \geq r)"></div>
          <p>where X ~ NB(r, p) and Y ~ Bin(n, p)</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> "rth success by trial n" is the same event
            as "at least r successes in n trials."
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Quality Control</span>
            <p>Trials until finding r defects</p>
          </div>
          <div class="app-item">
            <span class="app-title">Sports</span>
            <p>Games until team wins r times</p>
          </div>
          <div class="app-item">
            <span class="app-title">Insurance</span>
            <p>Time until rth claim</p>
          </div>
          <div class="app-item">
            <span class="app-title">Epidemiology</span>
            <p>Cases until r infections</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> A basketball player makes free throws with
            probability 0.8. Find the probability that they make their 5th free
            throw on their 7th attempt.
          </p>
          <p>
            <strong>Solution:</strong> X ~ NB(r=5, p=0.8), find P(X = 7)
          </p>
          <p>Need: 4 successes in first 6 attempts, then success on 7th</p>
          <div class="formula" data-latex="P(X = 7) = \binom{6}{4} (0.8)^5 (0.2)^2"></div>
          <div class="formula" data-latex="= 15 \times 0.32768 \times 0.04 = 0.19661"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Identify which version: trials (V1) or failures (V2)</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Last trial must be a success — this constrains the binomial coefficient</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">E[X] = r/p is intuitive: r successes × (1/p trials per success)</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">When r = 1, formulas reduce to geometric</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Negative Binomial Summary (Version 1)</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PMF</h3>
            <div class="formula" data-latex="\binom{k-1}{r-1}p^r(1-p)^{k-r}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{r}{p}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="Var(X) = \frac{r(1-p)}{p^2}"></div>
          </div>
          <div class="property">
            <h3>As Sum</h3>
            <div class="formula" data-latex="\sum_{i=1}^{r} \text{Geom}(p)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

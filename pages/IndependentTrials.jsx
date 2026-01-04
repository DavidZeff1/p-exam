export function IndependentTrials() {
  return (
    <>
      <h1 class="page-title">C.2 Independent Trials</h1>
      <p class="page-subtitle">Independence</p>

      <section class="intro">
        <p>
          Independent trials are repeated experiments where the outcome of each
          trial doesn't affect the others. This framework underlies many
          probability distributions and real-world applications.
        </p>
      </section>

      <section class="definition-block">
        <h2>Bernoulli Trial</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> A single experiment with exactly two
            outcomes: success (probability p) or failure (probability 1−p).
          </p>
          <div class="formula" data-latex="P(\text{success}) = p, \quad P(\text{failure}) = 1 - p = q"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Any yes/no question is a Bernoulli trial.
            Coin flip (heads/tails), exam (pass/fail), product (defective/good).
          </p>
        </div>
        <div class="visual">
          <div class="bernoulli-visual">
            <div class="bern-outcome success">
              <span class="bern-label">Success</span>
              <span class="bern-prob">p</span>
            </div>
            <div class="bern-or">or</div>
            <div class="bern-outcome failure">
              <span class="bern-label">Failure</span>
              <span class="bern-prob">1 − p</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Binomial Distribution</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Perform n independent Bernoulli trials, each
            with success probability p. Let X = number of successes.
          </p>
          <div class="formula" data-latex="P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}"></div>
          <p>for k = 0, 1, 2, ..., n</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Choose which k trials are successes: C(n,k).
            Those k succeed: p^k. The other n−k fail: (1−p)^(n−k). Multiply together.
          </p>
        </div>
        <div class="visual">
          <div class="binom-breakdown">
            <div class="binom-part">
              <span class="binom-formula">C(n,k)</span>
              <span class="binom-meaning">which trials succeed</span>
            </div>
            <div class="binom-times">×</div>
            <div class="binom-part">
              <span class="binom-formula">p^k</span>
              <span class="binom-meaning">k successes</span>
            </div>
            <div class="binom-times">×</div>
            <div class="binom-part">
              <span class="binom-formula">(1−p)^(n−k)</span>
              <span class="binom-meaning">n−k failures</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Flip a fair coin 5 times. P(exactly 3 heads)?
          </p>
          <div class="formula" data-latex="P(X = 3) = \binom{5}{3} \left(\frac{1}{2}\right)^3 \left(\frac{1}{2}\right)^2 = 10 \times \frac{1}{32} = \frac{10}{32} = 0.3125"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Binomial Mean and Variance</h2>
        <div class="definition">
          <p>
            <strong>For X ~ Binomial(n, p):</strong>
          </p>
          <div class="formula" data-latex="E[X] = np"></div>
          <div class="formula" data-latex="Var(X) = np(1-p)"></div>
          <div class="formula" data-latex="\sigma = \sqrt{np(1-p)}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> On average, you expect np successes. Variance
            is maximized when p = 0.5 (most uncertainty) and zero when p = 0 or 1.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die 60 times. Expected number of 6s?
          </p>
          <div class="formula" data-latex="E[X] = 60 \times \frac{1}{6} = 10"></div>
          <div class="formula" data-latex="Var(X) = 60 \times \frac{1}{6} \times \frac{5}{6} = \frac{50}{6} \approx 8.33"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Geometric Distribution</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Repeat independent Bernoulli trials until the
            first success. Let X = number of trials needed.
          </p>
          <div class="formula" data-latex="P(X = k) = (1-p)^{k-1} p"></div>
          <p>for k = 1, 2, 3, ...</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Fail k−1 times, then succeed once. Each
            failure has probability (1−p), final success has probability p.
          </p>
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
          <p class="visual-caption">(1−p)^(k−1) × p</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(first 6 on 4th die roll)?
          </p>
          <div class="formula" data-latex="P(X = 4) = \left(\frac{5}{6}\right)^3 \times \frac{1}{6} = \frac{125}{1296} \approx 0.0965"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Geometric Mean and Variance</h2>
        <div class="definition">
          <p>
            <strong>For X ~ Geometric(p):</strong>
          </p>
          <div class="formula" data-latex="E[X] = \frac{1}{p}"></div>
          <div class="formula" data-latex="Var(X) = \frac{1-p}{p^2}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If success probability is 1/6, you expect
            to wait 6 trials on average. Lower p means longer expected wait.
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
        <h2>Negative Binomial Distribution</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Repeat trials until you get r successes. Let
            X = total number of trials needed.
          </p>
          <div class="formula" data-latex="P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}"></div>
          <p>for k = r, r+1, r+2, ...</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The kth trial must be a success (that's the
            rth success). Before that, you need r−1 successes in k−1 trials.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(3rd head on 5th coin flip)?
          </p>
          <div class="formula" data-latex="P(X = 5) = \binom{4}{2} \left(\frac{1}{2}\right)^3 \left(\frac{1}{2}\right)^2 = 6 \times \frac{1}{32} = \frac{6}{32} = 0.1875"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Memoryless Property</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> For the geometric distribution:
          </p>
          <div class="formula" data-latex="P(X > m + n \,|\, X > m) = P(X > n)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Past failures don't affect future probability.
            If you've failed 10 times, the probability of needing 5 more trials is
            the same as at the start. "The coin has no memory."
          </p>
        </div>
        <div class="visual">
          <div class="memoryless-visual">
            <div class="mem-past">
              <span class="mem-label">Already happened</span>
              <span class="mem-trials">F F F F F</span>
            </div>
            <div class="mem-arrow">→</div>
            <div class="mem-future">
              <span class="mem-label">Future looks same as start</span>
              <span class="mem-trials">? ? ? ...</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Gambler's Fallacy:</strong> "I've lost 10 times, so I'm due for
            a win!" is WRONG. Each trial is independent — past outcomes don't
            influence future probabilities.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Multinomial Distribution</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> n independent trials, each with k possible
            outcomes with probabilities p₁, p₂, ..., pₖ.
          </p>
          <div class="formula" data-latex="P(X_1 = n_1, ..., X_k = n_k) = \frac{n!}{n_1! n_2! \cdots n_k!} p_1^{n_1} p_2^{n_2} \cdots p_k^{n_k}"></div>
          <p>where n₁ + n₂ + ... + nₖ = n</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Generalization of binomial to more than 2
            outcomes. Like rolling a die: 6 possible outcomes per trial.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die 6 times. P(each face appears exactly once)?
          </p>
          <div class="formula" data-latex="P = \frac{6!}{1!1!1!1!1!1!} \times \left(\frac{1}{6}\right)^6 = \frac{720}{46656} = \frac{5}{324} \approx 0.0154"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Poisson Approximation to Binomial</h2>
        <div class="definition">
          <p>
            <strong>When:</strong> n is large, p is small, and λ = np is moderate.
          </p>
          <div class="formula" data-latex="\binom{n}{k} p^k (1-p)^{n-k} \approx \frac{\lambda^k e^{-\lambda}}{k!}"></div>
          <p>where λ = np</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Rare events in many trials behave like a
            Poisson process. Easier to compute when n is huge.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 1000 trials, p = 0.002. P(exactly 3 successes)?
          </p>
          <p>λ = 1000 × 0.002 = 2</p>
          <div class="formula" data-latex="P(X = 3) \approx \frac{2^3 e^{-2}}{3!} = \frac{8 \times 0.1353}{6} \approx 0.180"></div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Distribution Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Binomial</h3>
            <p>X = # successes in n trials</p>
            <div class="formula" data-latex="E[X] = np"></div>
          </div>
          <div class="property">
            <h3>Geometric</h3>
            <p>X = trials until 1st success</p>
            <div class="formula" data-latex="E[X] = \frac{1}{p}"></div>
          </div>
          <div class="property">
            <h3>Negative Binomial</h3>
            <p>X = trials until rth success</p>
            <div class="formula" data-latex="E[X] = \frac{r}{p}"></div>
          </div>
          <div class="property">
            <h3>Poisson</h3>
            <p>X = rare events in interval</p>
            <div class="formula" data-latex="E[X] = \lambda"></div>
          </div>
        </div>
      </section>
    </>
  );
}

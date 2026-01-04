export function Hypergeometric() {
  return (
    <>
      <h1 class="page-title">B.5 Hypergeometric Distribution</h1>
      <p class="page-subtitle">Discrete Distributions</p>

      <section class="intro">
        <p>
          The hypergeometric distribution models sampling without replacement
          from a finite population. Unlike the binomial, the probability changes
          with each draw because items are not returned.
        </p>
      </section>

      <section class="definition-block">
        <h2>Setup</h2>
        <div class="definition">
          <p>
            <strong>Scenario:</strong> A population of N items contains K "successes"
            and N−K "failures." Draw n items without replacement. X = number of
            successes drawn.
          </p>
        </div>
        <div class="notation-table">
          <div class="notation-row">
            <span class="notation-symbol">N</span>
            <span class="notation-meaning">Total population size</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">K</span>
            <span class="notation-meaning">Number of successes in population</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">n</span>
            <span class="notation-meaning">Number of draws (sample size)</span>
          </div>
          <div class="notation-row">
            <span class="notation-symbol">X</span>
            <span class="notation-meaning">Number of successes in sample</span>
          </div>
        </div>
        <div class="visual">
          <div class="hyper-visual">
            <div class="hyper-population">
              <span class="hyper-label">Population (N)</span>
              <div class="hyper-items">
                <span class="hyper-item success">●</span>
                <span class="hyper-item success">●</span>
                <span class="hyper-item success">●</span>
                <span class="hyper-item fail">○</span>
                <span class="hyper-item fail">○</span>
                <span class="hyper-item fail">○</span>
                <span class="hyper-item fail">○</span>
              </div>
              <span class="hyper-counts">K=3 successes, N−K=4 failures</span>
            </div>
            <div class="hyper-arrow">↓ draw n without replacement</div>
            <div class="hyper-sample">
              <span class="hyper-label">Sample (n)</span>
              <div class="hyper-items">
                <span class="hyper-item success">●</span>
                <span class="hyper-item fail">○</span>
                <span class="hyper-item fail">○</span>
              </div>
              <span class="hyper-counts">X = ? successes</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>PMF</h2>
        <div class="definition">
          <p>
            <strong>Probability Mass Function:</strong>
          </p>
          <div class="formula" data-latex="P(X = k) = \frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}"></div>
          <p>for k = max(0, n−(N−K)), ..., min(n, K)</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Count favorable outcomes over total outcomes:
          </p>
          <div class="visual">
            <div class="binom-breakdown">
              <div class="binom-part">
                <span class="binom-formula">C(K, k)</span>
                <span class="binom-meaning">Ways to choose k successes from K</span>
              </div>
              <div class="binom-times">×</div>
              <div class="binom-part">
                <span class="binom-formula">C(N−K, n−k)</span>
                <span class="binom-meaning">Ways to choose n−k failures from N−K</span>
              </div>
              <div class="binom-times">÷</div>
              <div class="binom-part">
                <span class="binom-formula">C(N, n)</span>
                <span class="binom-meaning">Total ways to choose n from N</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> A deck has 52 cards, 4 aces. Draw 5 cards.
            P(exactly 2 aces)?
          </p>
          <p>N = 52, K = 4, n = 5, k = 2</p>
          <div class="formula" data-latex="P(X = 2) = \frac{\binom{4}{2} \binom{48}{3}}{\binom{52}{5}} = \frac{6 \times 17296}{2598960} = \frac{103776}{2598960} \approx 0.0399"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Support</h2>
        <div class="definition">
          <p>
            <strong>Valid values of X:</strong>
          </p>
          <div class="formula" data-latex="\max(0, n - (N-K)) \leq X \leq \min(n, K)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong>
          </p>
          <ul class="concept-list">
            <li>Can't get more successes than K (total available)</li>
            <li>Can't get more successes than n (sample size)</li>
            <li>Must get at least n−(N−K) successes if there aren't enough failures</li>
          </ul>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> N = 10, K = 7, n = 5
          </p>
          <p>min(5, 7) = 5, max(0, 5−3) = 2</p>
          <p>So X ∈ {'{2, 3, 4, 5}'} — must draw at least 2 successes!</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Expected Value</h2>
        <div class="definition">
          <p>
            <strong>Mean:</strong>
          </p>
          <div class="formula" data-latex="E[X] = n \cdot \frac{K}{N}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Same as binomial with p = K/N. On average,
            the proportion of successes in the sample equals the proportion in
            the population.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw 5 cards from a deck. Expected number of aces?
          </p>
          <div class="formula" data-latex="E[X] = 5 \times \frac{4}{52} = \frac{20}{52} \approx 0.385"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Variance</h2>
        <div class="definition">
          <p>
            <strong>Variance:</strong>
          </p>
          <div class="formula" data-latex="Var(X) = n \cdot \frac{K}{N} \cdot \frac{N-K}{N} \cdot \frac{N-n}{N-1}"></div>
          <p>Or equivalently:</p>
          <div class="formula" data-latex="Var(X) = npq \cdot \frac{N-n}{N-1}"></div>
          <p>where p = K/N and q = 1 − p</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> It's like binomial variance npq, multiplied
            by the "finite population correction" factor (N−n)/(N−1). This factor
            is always ≤ 1, so hypergeometric has less variance than binomial.
          </p>
        </div>
        <div class="visual">
          <div class="fpc-visual">
            <div class="fpc-box">
              <span class="fpc-label">Finite Population Correction</span>
              <div class="formula" data-latex="\frac{N-n}{N-1}"></div>
              <span class="fpc-note">Always ≤ 1, reduces variance</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Key Properties</h2>
        <div class="visual">
          <div class="dist-properties">
            <div class="dist-prop">
              <span class="dist-prop-name">Support</span>
              <span class="dist-prop-val">max(0, n−(N−K)) to min(n, K)</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Parameters</span>
              <span class="dist-prop-val">N, K, n</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Mean</span>
              <span class="dist-prop-val">nK/N</span>
            </div>
            <div class="dist-prop">
              <span class="dist-prop-name">Variance</span>
              <span class="dist-prop-val">npq · (N−n)/(N−1)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Hypergeometric vs Binomial</h2>
        <div class="visual">
          <div class="summary-table">
            <div class="summary-row header">
              <span>Property</span>
              <span>Hypergeometric</span>
              <span>Binomial</span>
            </div>
            <div class="summary-row">
              <span>Sampling</span>
              <span>Without replacement</span>
              <span>With replacement</span>
            </div>
            <div class="summary-row">
              <span>Population</span>
              <span>Finite (N items)</span>
              <span>Infinite (or with replacement)</span>
            </div>
            <div class="summary-row">
              <span>Trials</span>
              <span>Dependent</span>
              <span>Independent</span>
            </div>
            <div class="summary-row">
              <span>Mean</span>
              <span>nK/N = np</span>
              <span>np</span>
            </div>
            <div class="summary-row">
              <span>Variance</span>
              <span>npq · (N−n)/(N−1)</span>
              <span>npq</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Key insight:</strong> Hypergeometric has smaller variance because
            sampling without replacement reduces variability — once you draw
            successes, fewer remain.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Binomial Approximation</h2>
        <div class="definition">
          <p>
            <strong>Rule of thumb:</strong> When n/N &lt; 0.05 (sample is less than
            5% of population), hypergeometric ≈ binomial:
          </p>
          <div class="formula" data-latex="\text{Hypergeometric}(N, K, n) \approx \text{Binomial}\left(n, \frac{K}{N}\right)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> When the population is much larger than the
            sample, removing items barely changes the probabilities — it's almost
            like sampling with replacement.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Survey 100 people from a city of 100,000.
            n/N = 0.001 &lt; 0.05, so binomial approximation is excellent.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Symmetry Property</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> The hypergeometric distribution is symmetric
            in certain parameters:
          </p>
          <div class="formula" data-latex="P(X = k | N, K, n) = P(X = k | N, n, K)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Drawing n items and counting K-type is the
            same as marking K items and counting how many are in the n drawn.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Quality Control</span>
            <p>Defectives in a batch sample</p>
          </div>
          <div class="app-item">
            <span class="app-title">Card Games</span>
            <p>Specific cards in a hand</p>
          </div>
          <div class="app-item">
            <span class="app-title">Ecology</span>
            <p>Capture-recapture estimation</p>
          </div>
          <div class="app-item">
            <span class="app-title">Auditing</span>
            <p>Errors in sampled records</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example: Lottery</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> A lottery has 49 numbers, 6 are drawn as winners.
            You pick 6 numbers. P(matching exactly 3)?
          </p>
          <p>N = 49, K = 6 (winning numbers), n = 6 (your picks), k = 3</p>
          <div class="formula" data-latex="P(X = 3) = \frac{\binom{6}{3} \binom{43}{3}}{\binom{49}{6}}"></div>
          <div class="formula" data-latex="= \frac{20 \times 12341}{13983816} = \frac{246820}{13983816} \approx 0.0177"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example: Committee</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> A club has 15 members: 9 women and 6 men.
            A committee of 5 is chosen randomly. P(at least 3 women)?
          </p>
          <p>N = 15, K = 9 (women), n = 5, find P(X ≥ 3)</p>
          <div class="formula" data-latex="P(X \geq 3) = P(X=3) + P(X=4) + P(X=5)"></div>
          <div class="formula" data-latex="= \frac{\binom{9}{3}\binom{6}{2} + \binom{9}{4}\binom{6}{1} + \binom{9}{5}\binom{6}{0}}{\binom{15}{5}}"></div>
          <div class="formula" data-latex="= \frac{84 \times 15 + 126 \times 6 + 126 \times 1}{3003} = \frac{1260 + 756 + 126}{3003} = \frac{2142}{3003} \approx 0.713"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exam Tips</h2>
        <div class="visual">
          <div class="checklist">
            <div class="check-item">
              <span class="check-num">1</span>
              <span class="check-text">Identify "without replacement" — key signal for hypergeometric</span>
            </div>
            <div class="check-item">
              <span class="check-num">2</span>
              <span class="check-text">Check support bounds: max(0, n−(N−K)) to min(n, K)</span>
            </div>
            <div class="check-item">
              <span class="check-num">3</span>
              <span class="check-text">Mean nK/N is same as binomial — easy to remember</span>
            </div>
            <div class="check-item">
              <span class="check-num">4</span>
              <span class="check-text">If n/N &lt; 0.05, consider binomial approximation</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Hypergeometric Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>PMF</h3>
            <div class="formula" data-latex="\frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}"></div>
          </div>
          <div class="property">
            <h3>Mean</h3>
            <div class="formula" data-latex="E[X] = \frac{nK}{N}"></div>
          </div>
          <div class="property">
            <h3>Variance</h3>
            <div class="formula" data-latex="npq \cdot \frac{N-n}{N-1}"></div>
          </div>
          <div class="property">
            <h3>Key Feature</h3>
            <p>Without replacement</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function RandomVariables() {
  return (
    <>
      <h1 class="page-title">A.1 Random Variables</h1>
      <p class="page-subtitle">Univariate Random Variables</p>

      <section class="intro">
        <p>
          A random variable is a function that assigns a numerical value to each
          outcome in a sample space. It's the bridge between abstract probability
          events and concrete numbers we can calculate with.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> A random variable X is a function from
            the sample space S to the real numbers:
          </p>
          <div class="formula" data-latex="X: S \rightarrow \mathbb{R}"></div>
          <p>
            For each outcome ω ∈ S, X(ω) is a real number.
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> A random variable converts outcomes like
            "heads" or "rolled a 4" into numbers we can do math with. Instead of
            asking P(heads), we ask P(X = 1).
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Flip a coin. Define X = 1 if heads, X = 0
            if tails. Now X is a random variable that maps {'{H, T}'} → {'{0, 1}'}.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Discrete vs Continuous</h2>
        <div class="definition">
          <p>
            <strong>Two types of random variables:</strong>
          </p>
        </div>
        <div class="visual">
          <div class="compare-boxes">
            <div class="compare-box discrete">
              <span class="compare-title">Discrete</span>
              <p class="compare-desc">Countable values (finite or infinite)</p>
              <p class="compare-vals">0, 1, 2, 3, ...</p>
              <p class="compare-method">Use: PMF, Σ summation</p>
            </div>
            <div class="compare-box continuous">
              <span class="compare-title">Continuous</span>
              <p class="compare-desc">Uncountable values (intervals)</p>
              <p class="compare-vals">[0, ∞) or (a, b)</p>
              <p class="compare-method">Use: PDF, ∫ integration</p>
            </div>
          </div>
        </div>
        <div class="example">
          <p><strong>Discrete:</strong> Number of claims, coin flips, dice rolls, policy count</p>
          <p><strong>Continuous:</strong> Claim amount, time until failure, height, weight</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Notation Conventions</h2>
        <div class="definition">
          <div class="notation-table">
            <div class="notation-row">
              <span class="notation-symbol">X, Y, Z</span>
              <span class="notation-meaning">Random variables (capital letters)</span>
            </div>
            <div class="notation-row">
              <span class="notation-symbol">x, y, z</span>
              <span class="notation-meaning">Specific values (lowercase)</span>
            </div>
            <div class="notation-row">
              <span class="notation-symbol">P(X = x)</span>
              <span class="notation-meaning">Probability X takes value x</span>
            </div>
            <div class="notation-row">
              <span class="notation-symbol">P(X ≤ x)</span>
              <span class="notation-meaning">Probability X is at most x</span>
            </div>
            <div class="notation-row">
              <span class="notation-symbol">P(a &lt; X ≤ b)</span>
              <span class="notation-meaning">Probability X is in (a, b]</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> If X = number on a die roll:
          </p>
          <div class="formula" data-latex="P(X = 3) = \frac{1}{6}"></div>
          <div class="formula" data-latex="P(X \leq 2) = P(X=1) + P(X=2) = \frac{2}{6} = \frac{1}{3}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Support (Range)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The support of X is the set of all values
            X can take with positive probability:
          </p>
          <div class="formula" data-latex="\text{Support}(X) = \{x : P(X = x) > 0\} \quad \text{(discrete)}"></div>
          <div class="formula" data-latex="\text{Support}(X) = \{x : f(x) > 0\} \quad \text{(continuous)}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The support tells you which values are
            "possible." Values outside the support have zero probability.
          </p>
        </div>
        <div class="visual">
          <div class="support-examples">
            <div class="support-item">
              <span class="support-name">Die roll</span>
              <span class="support-set">{'{1, 2, 3, 4, 5, 6}'}</span>
            </div>
            <div class="support-item">
              <span class="support-name">Heads in 3 flips</span>
              <span class="support-set">{'{0, 1, 2, 3}'}</span>
            </div>
            <div class="support-item">
              <span class="support-name">Exponential(λ)</span>
              <span class="support-set">[0, ∞)</span>
            </div>
            <div class="support-item">
              <span class="support-name">Normal(μ, σ²)</span>
              <span class="support-set">(−∞, ∞)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Indicator Random Variables</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> An indicator variable I_A equals 1 if event
            A occurs, 0 otherwise:
          </p>
          <div class="formula" data-latex="I_A = \begin{cases} 1 & \text{if } A \text{ occurs} \\ 0 & \text{if } A \text{ does not occur} \end{cases}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Indicator variables are the simplest random
            variables — just yes/no converted to 1/0. Very useful for counting.
          </p>
        </div>
        <div class="visual">
          <div class="indicator-visual">
            <div class="ind-case yes">
              <span class="ind-val">1</span>
              <span class="ind-label">A occurs</span>
            </div>
            <div class="ind-or">or</div>
            <div class="ind-case no">
              <span class="ind-val">0</span>
              <span class="ind-label">A doesn't occur</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Key property:</strong>
          </p>
          <div class="formula" data-latex="E[I_A] = P(A)"></div>
          <p>
            The expected value of an indicator equals the probability of the event.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Functions of Random Variables</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If X is a random variable and g is a function,
            then Y = g(X) is also a random variable.
          </p>
          <div class="formula" data-latex="Y = g(X) \Rightarrow Y \text{ is a random variable}"></div>
        </div>
        <div class="example">
          <p><strong>Common transformations:</strong></p>
          <ul class="transform-list">
            <li>Y = X² (squared)</li>
            <li>Y = eˣ (exponential)</li>
            <li>Y = ln(X) (logarithm)</li>
            <li>Y = aX + b (linear)</li>
          </ul>
          <p>
            <strong>Example:</strong> If X is claim size, then Y = min(X, 1000) is
            the payment with a $1000 benefit limit.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Discrete Random Variable Examples</h2>
        <div class="visual">
          <div class="rv-examples-grid">
            <div class="rv-example">
              <span class="rv-name">Bernoulli(p)</span>
              <span class="rv-support">Support: {'{0, 1}'}</span>
              <span class="rv-desc">Single success/failure trial</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Binomial(n, p)</span>
              <span class="rv-support">Support: {'{0, 1, ..., n}'}</span>
              <span class="rv-desc">Successes in n trials</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Poisson(λ)</span>
              <span class="rv-support">Support: {'{0, 1, 2, ...}'}</span>
              <span class="rv-desc">Events in fixed interval</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Geometric(p)</span>
              <span class="rv-support">Support: {'{1, 2, 3, ...}'}</span>
              <span class="rv-desc">Trials until first success</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Continuous Random Variable Examples</h2>
        <div class="visual">
          <div class="rv-examples-grid">
            <div class="rv-example">
              <span class="rv-name">Uniform(a, b)</span>
              <span class="rv-support">Support: [a, b]</span>
              <span class="rv-desc">Equal likelihood on interval</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Exponential(λ)</span>
              <span class="rv-support">Support: [0, ∞)</span>
              <span class="rv-desc">Time until event</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Normal(μ, σ²)</span>
              <span class="rv-support">Support: (−∞, ∞)</span>
              <span class="rv-desc">Bell curve distribution</span>
            </div>
            <div class="rv-example">
              <span class="rv-name">Gamma(α, β)</span>
              <span class="rv-support">Support: [0, ∞)</span>
              <span class="rv-desc">Sum of exponentials</span>
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Random Variable Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Definition</h3>
            <div class="formula" data-latex="X: S \rightarrow \mathbb{R}"></div>
          </div>
          <div class="property">
            <h3>Discrete</h3>
            <p>Countable values, use PMF</p>
          </div>
          <div class="property">
            <h3>Continuous</h3>
            <p>Interval values, use PDF</p>
          </div>
          <div class="property">
            <h3>Indicator</h3>
            <div class="formula" data-latex="E[I_A] = P(A)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

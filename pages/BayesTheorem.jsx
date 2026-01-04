export function BayesTheorem() {
  return (
    <>
      <h1 class="page-title">F.2 Bayes' Theorem</h1>
      <p class="page-subtitle">Conditional Probability</p>

      <section class="intro">
        <p>
          Bayes' theorem lets us "reverse" conditional probabilities. Given P(B|A),
          we can find P(A|B). This is essential for updating beliefs when we
          receive new evidence.
        </p>
      </section>

      <section class="definition-block">
        <h2>Bayes' Theorem (Two Events)</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> For events A and B with P(B) &gt; 0:
          </p>
          <div class="formula" data-latex="P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> We know how likely B is given A. But we
            observed B and want to know about A. Bayes flips the conditioning
            by accounting for how likely A was initially.
          </p>
        </div>
        <div class="visual">
          <div class="bayes-visual">
            <div class="bv-known">
              <span class="bv-label">What we know</span>
              <span class="bv-prob">P(B|A)</span>
              <span class="bv-desc">Likelihood</span>
            </div>
            <div class="bv-arrow">⟹</div>
            <div class="bv-want">
              <span class="bv-label">What we want</span>
              <span class="bv-prob">P(A|B)</span>
              <span class="bv-desc">Posterior</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Bayes' Theorem Components</h2>
        <div class="definition">
          <div class="formula" data-latex="P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}"></div>
        </div>
        <div class="visual">
          <div class="bayes-components">
            <div class="bc-item posterior">
              <span class="bc-term">P(A|B)</span>
              <span class="bc-name">Posterior</span>
              <span class="bc-desc">Updated belief about A after seeing B</span>
            </div>
            <div class="bc-item likelihood">
              <span class="bc-term">P(B|A)</span>
              <span class="bc-name">Likelihood</span>
              <span class="bc-desc">How likely B is if A is true</span>
            </div>
            <div class="bc-item prior">
              <span class="bc-term">P(A)</span>
              <span class="bc-name">Prior</span>
              <span class="bc-desc">Initial belief about A</span>
            </div>
            <div class="bc-item evidence">
              <span class="bc-term">P(B)</span>
              <span class="bc-name">Evidence</span>
              <span class="bc-desc">Total probability of observing B</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Bayes' Theorem with Total Probability</h2>
        <div class="definition">
          <p>
            <strong>Expanded form:</strong> Using the law of total probability for P(B):
          </p>
          <div class="formula" data-latex="P(A|B) = \frac{P(B|A) \times P(A)}{P(B|A)P(A) + P(B|A')P(A')}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The denominator splits B into two paths:
            B happening via A, and B happening via not-A. This is often easier
            to compute than P(B) directly.
          </p>
        </div>
        <div class="visual">
          <div class="bayes-expanded">
            <div class="be-num">
              <span class="be-label">Numerator</span>
              <span class="be-content">P(B|A) × P(A)</span>
              <span class="be-desc">Path through A</span>
            </div>
            <div class="be-line"></div>
            <div class="be-denom">
              <span class="be-label">Denominator</span>
              <span class="be-content">P(B|A)P(A) + P(B|A')P(A')</span>
              <span class="be-desc">All paths to B</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>General Bayes' Theorem (Multiple Hypotheses)</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> If A₁, A₂, ..., Aₙ partition the sample space:
          </p>
          <div class="formula" data-latex="P(A_i|B) = \frac{P(B|A_i) P(A_i)}{\sum_{j=1}^{n} P(B|A_j) P(A_j)}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Given evidence B, how do we update our beliefs
            about which hypothesis Aᵢ is true? Each hypothesis is weighted by how
            well it explains B.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Classic Example: Medical Testing</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> A disease affects 1% of the population. A test
            is 95% accurate (95% true positive rate, 95% true negative rate).
            If you test positive, what's the probability you have the disease?
          </p>
          <div class="test-setup">
            <div class="ts-item">
              <span class="ts-label">P(Disease)</span>
              <span class="ts-val">0.01</span>
            </div>
            <div class="ts-item">
              <span class="ts-label">P(+|Disease)</span>
              <span class="ts-val">0.95</span>
            </div>
            <div class="ts-item">
              <span class="ts-label">P(−|No Disease)</span>
              <span class="ts-val">0.95</span>
            </div>
          </div>
          <p><strong>Solution:</strong></p>
          <div class="formula" data-latex="P(D|+) = \frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D')P(D')}"></div>
          <div class="formula" data-latex="= \frac{0.95 \times 0.01}{0.95 \times 0.01 + 0.05 \times 0.99}"></div>
          <div class="formula" data-latex="= \frac{0.0095}{0.0095 + 0.0495} = \frac{0.0095}{0.059} \approx 0.161"></div>
          <p class="result-highlight">
            Only about 16% chance of having the disease despite a positive test!
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Why the Surprising Result?</h2>
        <div class="definition">
          <p>
            <strong>Base rate matters!</strong> When the disease is rare, most
            positive tests come from the large healthy population.
          </p>
        </div>
        <div class="visual">
          <div class="base-rate-visual">
            <div class="brv-population">
              <span class="brv-title">In 10,000 people:</span>
              <div class="brv-groups">
                <div class="brv-group sick">
                  <span class="brv-count">100 sick</span>
                  <span class="brv-test">95 test +</span>
                  <span class="brv-test dim">5 test −</span>
                </div>
                <div class="brv-group healthy">
                  <span class="brv-count">9,900 healthy</span>
                  <span class="brv-test">495 test +</span>
                  <span class="brv-test dim">9,405 test −</span>
                </div>
              </div>
              <div class="brv-total">
                <span>Total positive: 95 + 495 = 590</span>
                <span>True positives: 95/590 ≈ 16%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Tree Diagram for Bayes</h2>
        <div class="visual">
          <div class="bayes-tree">
            <div class="bt-level1">
              <div class="bt-branch">
                <span class="bt-prob">P(A)</span>
                <div class="bt-node a">A</div>
                <div class="bt-level2">
                  <div class="bt-leaf">
                    <span class="bt-prob">P(B|A)</span>
                    <span class="bt-outcome yes">B</span>
                  </div>
                  <div class="bt-leaf">
                    <span class="bt-prob">P(B'|A)</span>
                    <span class="bt-outcome no">B'</span>
                  </div>
                </div>
              </div>
              <div class="bt-branch">
                <span class="bt-prob">P(A')</span>
                <div class="bt-node aprime">A'</div>
                <div class="bt-level2">
                  <div class="bt-leaf">
                    <span class="bt-prob">P(B|A')</span>
                    <span class="bt-outcome yes">B</span>
                  </div>
                  <div class="bt-leaf">
                    <span class="bt-prob">P(B'|A')</span>
                    <span class="bt-outcome no">B'</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="visual-caption">P(A|B) = top B path / (sum of both B paths)</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Odds Form of Bayes' Theorem</h2>
        <div class="definition">
          <p>
            <strong>Alternative form:</strong> Using odds instead of probabilities:
          </p>
          <div class="formula" data-latex="\frac{P(A|B)}{P(A'|B)} = \frac{P(B|A)}{P(B|A')} \times \frac{P(A)}{P(A')}"></div>
          <p>Or in words:</p>
          <p class="odds-words">Posterior odds = Likelihood ratio × Prior odds</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> The likelihood ratio tells us how much
            more likely B is under A than under A'. This multiplies our prior odds
            to give updated odds.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sequential Updating</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> Bayes can be applied repeatedly as new
            evidence arrives. Today's posterior becomes tomorrow's prior.
          </p>
          <div class="formula" data-latex="P(A|B_1, B_2) \propto P(B_2|A, B_1) \times P(A|B_1)"></div>
        </div>
        <div class="visual">
          <div class="sequential-visual">
            <div class="seq-step">
              <span class="seq-label">Prior</span>
              <span class="seq-prob">P(A)</span>
            </div>
            <div class="seq-arrow">
              <span class="seq-evidence">+ Evidence B₁</span>
              →
            </div>
            <div class="seq-step">
              <span class="seq-label">Posterior 1</span>
              <span class="seq-prob">P(A|B₁)</span>
            </div>
            <div class="seq-arrow">
              <span class="seq-evidence">+ Evidence B₂</span>
              →
            </div>
            <div class="seq-step">
              <span class="seq-label">Posterior 2</span>
              <span class="seq-prob">P(A|B₁,B₂)</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Example: Quality Control</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> Factory has 3 machines. Machine A makes 50%
            of items (2% defective), Machine B makes 30% (3% defective), Machine C
            makes 20% (5% defective). A defective item is found. Which machine
            most likely made it?
          </p>
          <p><strong>Solution:</strong> Apply Bayes for each machine:</p>
          <div class="formula" data-latex="P(A|D) = \frac{0.02 \times 0.50}{0.02(0.50) + 0.03(0.30) + 0.05(0.20)} = \frac{0.010}{0.029} \approx 0.345"></div>
          <div class="formula" data-latex="P(B|D) = \frac{0.03 \times 0.30}{0.029} = \frac{0.009}{0.029} \approx 0.310"></div>
          <div class="formula" data-latex="P(C|D) = \frac{0.05 \times 0.20}{0.029} = \frac{0.010}{0.029} \approx 0.345"></div>
          <p>Machines A and C are equally likely (≈34.5% each), B is 31%.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Medical Diagnosis</span>
            <p>P(disease | symptoms)</p>
          </div>
          <div class="app-item">
            <span class="app-title">Spam Filtering</span>
            <p>P(spam | words in email)</p>
          </div>
          <div class="app-item">
            <span class="app-title">Machine Learning</span>
            <p>Naive Bayes classifiers</p>
          </div>
          <div class="app-item">
            <span class="app-title">Legal Evidence</span>
            <p>P(guilt | evidence)</p>
          </div>
          <div class="app-item">
            <span class="app-title">Insurance</span>
            <p>P(risk category | claim)</p>
          </div>
          <div class="app-item">
            <span class="app-title">Search Engines</span>
            <p>P(relevant | query)</p>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Bayes' Theorem Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Basic Form</h3>
            <div class="formula" data-latex="P(A|B) = \frac{P(B|A)P(A)}{P(B)}"></div>
          </div>
          <div class="property">
            <h3>Expanded Form</h3>
            <div class="formula" data-latex="\frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|A')P(A')}"></div>
          </div>
          <div class="property">
            <h3>Odds Form</h3>
            <div class="formula" data-latex="\text{Post odds} = LR \times \text{Prior odds}"></div>
          </div>
          <div class="property">
            <h3>Key Insight</h3>
            <p>Base rates matter!</p>
          </div>
        </div>
      </section>
    </>
  );
}

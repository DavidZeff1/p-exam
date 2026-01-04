export function LawTotalProbability() {
  return (
    <>
      <h1 class="page-title">F.3 Law of Total Probability</h1>
      <p class="page-subtitle">Conditional Probability</p>

      <section class="intro">
        <p>
          The Law of Total Probability lets us compute P(A) by breaking it down
          into cases. When we don't know P(A) directly but know P(A|Bᵢ) for
          various scenarios Bᵢ, we can piece together the total probability.
        </p>
      </section>

      <section class="definition-block">
        <h2>Law of Total Probability</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> If B₁, B₂, ..., Bₙ form a partition of S
            (mutually exclusive and exhaustive), then:
          </p>
          <div class="formula" data-latex="P(A) = \sum_{i=1}^{n} P(A|B_i) P(B_i)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Event A can happen through different
            "pathways" (B₁, B₂, ...). Add up the probability of A happening via
            each pathway, weighted by how likely each pathway is.
          </p>
        </div>
        <div class="visual">
          <div class="total-prob-paths">
            <div class="tpp-a">
              <span class="tpp-label">P(A) = ?</span>
            </div>
            <div class="tpp-equals">=</div>
            <div class="tpp-sum">
              <div class="tpp-path">
                <span class="tpp-via">via B₁</span>
                <span class="tpp-formula">P(A|B₁)·P(B₁)</span>
              </div>
              <div class="tpp-plus">+</div>
              <div class="tpp-path">
                <span class="tpp-via">via B₂</span>
                <span class="tpp-formula">P(A|B₂)·P(B₂)</span>
              </div>
              <div class="tpp-plus">+</div>
              <div class="tpp-path">
                <span class="tpp-via">via B₃</span>
                <span class="tpp-formula">P(A|B₃)·P(B₃)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Binary Case (Two Scenarios)</h2>
        <div class="definition">
          <p>
            <strong>Simplest form:</strong> When there are only two possibilities, B and B':
          </p>
          <div class="formula" data-latex="P(A) = P(A|B)P(B) + P(A|B')P(B')"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Either B happens or it doesn't. Find P(A)
            in each scenario, weight by how likely each scenario is, and add.
          </p>
        </div>
        <div class="visual">
          <div class="binary-total">
            <div class="bt-case">
              <span class="bt-scenario">Scenario: B</span>
              <span class="bt-formula">P(A|B) × P(B)</span>
            </div>
            <div class="bt-plus">+</div>
            <div class="bt-case">
              <span class="bt-scenario">Scenario: B'</span>
              <span class="bt-formula">P(A|B') × P(B')</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 40% of days are rainy. P(traffic jam) is 70%
            on rainy days, 20% on dry days. What's P(traffic jam)?
          </p>
          <div class="formula" data-latex="P(T) = P(T|R)P(R) + P(T|R')P(R')"></div>
          <div class="formula" data-latex="= 0.70 \times 0.40 + 0.20 \times 0.60 = 0.28 + 0.12 = 0.40"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Visualization: Weighted Average</h2>
        <div class="definition">
          <p>
            <strong>Interpretation:</strong> P(A) is a weighted average of conditional
            probabilities, with weights being the scenario probabilities.
          </p>
        </div>
        <div class="visual">
          <div class="weighted-avg-bars">
            <div class="wab-item">
              <div class="wab-bar" style={{ width: '70%' }}>
                <span class="wab-val">P(A|B₁) = 0.7</span>
              </div>
              <span class="wab-weight">Weight: P(B₁) = 0.3</span>
            </div>
            <div class="wab-item">
              <div class="wab-bar" style={{ width: '40%' }}>
                <span class="wab-val">P(A|B₂) = 0.4</span>
              </div>
              <span class="wab-weight">Weight: P(B₂) = 0.5</span>
            </div>
            <div class="wab-item">
              <div class="wab-bar" style={{ width: '20%' }}>
                <span class="wab-val">P(A|B₃) = 0.2</span>
              </div>
              <span class="wab-weight">Weight: P(B₃) = 0.2</span>
            </div>
            <div class="wab-result">
              <span>P(A) = 0.7(0.3) + 0.4(0.5) + 0.2(0.2) = 0.21 + 0.20 + 0.04 = 0.45</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Tree Diagram Approach</h2>
        <div class="definition">
          <p>
            <strong>Method:</strong> Draw branches for each Bᵢ, then branches for A
            and A' within each. Multiply along paths, add paths ending in A.
          </p>
        </div>
        <div class="visual">
          <div class="ltp-tree">
            <div class="ltp-start">Start</div>
            <div class="ltp-branches">
              <div class="ltp-branch">
                <div class="ltp-edge">
                  <span class="ltp-prob">P(B₁)</span>
                </div>
                <div class="ltp-node b1">B₁</div>
                <div class="ltp-leaves">
                  <div class="ltp-leaf a">
                    <span class="ltp-prob">P(A|B₁)</span>
                    <span class="ltp-end">A</span>
                  </div>
                  <div class="ltp-leaf nota">
                    <span class="ltp-prob">P(A'|B₁)</span>
                    <span class="ltp-end dim">A'</span>
                  </div>
                </div>
              </div>
              <div class="ltp-branch">
                <div class="ltp-edge">
                  <span class="ltp-prob">P(B₂)</span>
                </div>
                <div class="ltp-node b2">B₂</div>
                <div class="ltp-leaves">
                  <div class="ltp-leaf a">
                    <span class="ltp-prob">P(A|B₂)</span>
                    <span class="ltp-end">A</span>
                  </div>
                  <div class="ltp-leaf nota">
                    <span class="ltp-prob">P(A'|B₂)</span>
                    <span class="ltp-end dim">A'</span>
                  </div>
                </div>
              </div>
              <div class="ltp-branch">
                <div class="ltp-edge">
                  <span class="ltp-prob">P(B₃)</span>
                </div>
                <div class="ltp-node b3">B₃</div>
                <div class="ltp-leaves">
                  <div class="ltp-leaf a">
                    <span class="ltp-prob">P(A|B₃)</span>
                    <span class="ltp-end">A</span>
                  </div>
                  <div class="ltp-leaf nota">
                    <span class="ltp-prob">P(A'|B₃)</span>
                    <span class="ltp-end dim">A'</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="visual-caption">P(A) = sum of all paths leading to A</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Example: Manufacturing</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> A company has 3 factories:
          </p>
          <div class="factory-table">
            <div class="ft-row header">
              <span>Factory</span>
              <span>% of Production</span>
              <span>Defect Rate</span>
            </div>
            <div class="ft-row">
              <span>A</span>
              <span>50%</span>
              <span>2%</span>
            </div>
            <div class="ft-row">
              <span>B</span>
              <span>30%</span>
              <span>3%</span>
            </div>
            <div class="ft-row">
              <span>C</span>
              <span>20%</span>
              <span>5%</span>
            </div>
          </div>
          <p>What is the overall defect rate?</p>
          <div class="formula" data-latex="P(D) = P(D|A)P(A) + P(D|B)P(B) + P(D|C)P(C)"></div>
          <div class="formula" data-latex="= 0.02(0.50) + 0.03(0.30) + 0.05(0.20)"></div>
          <div class="formula" data-latex="= 0.010 + 0.009 + 0.010 = 0.029 = 2.9\%"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Example: Two-Stage Selection</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> Urn 1 has 4 red, 6 blue balls. Urn 2 has 7 red,
            3 blue balls. Roll a die: if 1 or 2, pick from Urn 1; otherwise pick from
            Urn 2. What's P(red ball)?
          </p>
          <p>P(Urn 1) = 2/6 = 1/3, P(Urn 2) = 4/6 = 2/3</p>
          <div class="formula" data-latex="P(R) = P(R|U_1)P(U_1) + P(R|U_2)P(U_2)"></div>
          <div class="formula" data-latex="= \frac{4}{10} \times \frac{1}{3} + \frac{7}{10} \times \frac{2}{3}"></div>
          <div class="formula" data-latex="= \frac{4}{30} + \frac{14}{30} = \frac{18}{30} = \frac{3}{5} = 0.6"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Connection to Bayes' Theorem</h2>
        <div class="definition">
          <p>
            <strong>Key relationship:</strong> The Law of Total Probability provides
            the denominator in Bayes' theorem:
          </p>
          <div class="formula" data-latex="P(B_i|A) = \frac{P(A|B_i)P(B_i)}{P(A)} = \frac{P(A|B_i)P(B_i)}{\sum_j P(A|B_j)P(B_j)}"></div>
        </div>
        <div class="visual">
          <div class="ltp-bayes-connection">
            <div class="lbc-ltp">
              <span class="lbc-title">Law of Total Probability</span>
              <span class="lbc-gives">gives P(A)</span>
            </div>
            <div class="lbc-arrow">→</div>
            <div class="lbc-bayes">
              <span class="lbc-title">Bayes' Theorem</span>
              <span class="lbc-gives">uses P(A) as denominator</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Total probability tells us the overall chance
            of evidence A. Bayes then asks: given we saw A, which scenario Bᵢ
            was most likely responsible?
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Example: Insurance Claims</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> Insurance company classifies drivers:
          </p>
          <ul class="driver-list">
            <li>Low risk (60%): 1% claim probability</li>
            <li>Medium risk (30%): 5% claim probability</li>
            <li>High risk (10%): 15% claim probability</li>
          </ul>
          <p>What percentage of policyholders file a claim?</p>
          <div class="formula" data-latex="P(C) = 0.01(0.60) + 0.05(0.30) + 0.15(0.10)"></div>
          <div class="formula" data-latex="= 0.006 + 0.015 + 0.015 = 0.036 = 3.6\%"></div>
          <p><strong>Follow-up (Bayes):</strong> Given someone filed a claim, P(high risk)?</p>
          <div class="formula" data-latex="P(H|C) = \frac{P(C|H)P(H)}{P(C)} = \frac{0.15 \times 0.10}{0.036} = \frac{0.015}{0.036} \approx 0.417"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Recursive Application</h2>
        <div class="definition">
          <p>
            <strong>Multi-stage problems:</strong> For sequential processes, apply
            total probability at each stage.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Stage 1: Choose Box A (60%) or Box B (40%).
            Stage 2: If Box A, draw from {'{3 red, 2 blue}'}; if Box B, draw from {'{1 red, 4 blue}'}.
            Stage 3: If red ball, flip a fair coin; if blue ball, flip a biased coin (70% heads).
            What's P(heads)?
          </p>
          <p><strong>Step 1:</strong> Find P(Red)</p>
          <div class="formula" data-latex="P(R) = P(R|A)P(A) + P(R|B)P(B) = \frac{3}{5}(0.6) + \frac{1}{5}(0.4) = 0.36 + 0.08 = 0.44"></div>
          <p><strong>Step 2:</strong> Find P(Heads)</p>
          <div class="formula" data-latex="P(H) = P(H|R)P(R) + P(H|R')P(R') = 0.5(0.44) + 0.7(0.56) = 0.22 + 0.392 = 0.612"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>When to Use Total Probability</h2>
        <div class="when-grid">
          <div class="when-item">
            <span class="when-keyword">Unknown P(A)</span>
            <p>But P(A|Bᵢ) are known</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Multiple sources</span>
            <p>Different machines, suppliers, populations</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Two-stage process</span>
            <p>First choose category, then outcome</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Bayes denominator</span>
            <p>Need P(evidence) for Bayes</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Checklist for Total Probability</h2>
        <div class="checklist">
          <div class="check-item">
            <span class="check-num">1</span>
            <span class="check-text">Identify the event A whose probability you need</span>
          </div>
          <div class="check-item">
            <span class="check-num">2</span>
            <span class="check-text">Find a partition B₁, B₂, ... (mutually exclusive, exhaustive)</span>
          </div>
          <div class="check-item">
            <span class="check-num">3</span>
            <span class="check-text">Determine P(Bᵢ) for each scenario</span>
          </div>
          <div class="check-item">
            <span class="check-num">4</span>
            <span class="check-text">Determine P(A|Bᵢ) for each scenario</span>
          </div>
          <div class="check-item">
            <span class="check-num">5</span>
            <span class="check-text">Compute: P(A) = Σ P(A|Bᵢ)P(Bᵢ)</span>
          </div>
          <div class="check-item">
            <span class="check-num">6</span>
            <span class="check-text">Verify: sum of P(Bᵢ) should equal 1</span>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Law of Total Probability Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>General Form</h3>
            <div class="formula" data-latex="P(A) = \sum_i P(A|B_i)P(B_i)"></div>
          </div>
          <div class="property">
            <h3>Binary Form</h3>
            <div class="formula" data-latex="P(A|B)P(B) + P(A|B')P(B')"></div>
          </div>
          <div class="property">
            <h3>Requirement</h3>
            <p>B₁, B₂, ... must partition S</p>
          </div>
          <div class="property">
            <h3>Key Use</h3>
            <p>Denominator in Bayes' theorem</p>
          </div>
        </div>
      </section>
    </>
  );
}

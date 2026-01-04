export function MultiplicationRule() {
  return (
    <>
      <h1 class="page-title">E.2 Multiplication Rule</h1>
      <p class="page-subtitle">Addition & Multiplication Rules</p>

      <section class="intro">
        <p>
          The multiplication rule calculates the probability that multiple events
          all occur together. The formula depends on whether events are independent
          or dependent — this determines if we need conditional probabilities.
        </p>
      </section>

      <section class="definition-block">
        <h2>General Multiplication Rule</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For any two events A and B:
          </p>
          <div class="formula" data-latex="P(A \cap B) = P(A) \times P(B | A) = P(B) \times P(A | B)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> "A and B" means A happens, then given A
            happened, B also happens. Multiply the probability of the first by
            the conditional probability of the second.
          </p>
        </div>
        <div class="visual">
          <div class="mult-rule-visual">
            <div class="mrv-step">
              <span class="mrv-label">First A occurs</span>
              <div class="mrv-prob">P(A)</div>
            </div>
            <div class="mrv-then">then</div>
            <div class="mrv-step">
              <span class="mrv-label">Then B given A</span>
              <div class="mrv-prob">P(B|A)</div>
            </div>
            <div class="mrv-equals">=</div>
            <div class="mrv-step result">
              <span class="mrv-label">Both occur</span>
              <div class="mrv-prob">P(A ∩ B)</div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw 2 cards without replacement. P(both aces)?
          </p>
          <div class="formula" data-latex="P(A_1 \cap A_2) = P(A_1) \times P(A_2 | A_1) = \frac{4}{52} \times \frac{3}{51} = \frac{12}{2652} = \frac{1}{221}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Special Case: Independent Events</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> When A and B are independent, P(B|A) = P(B), so:
          </p>
          <div class="formula" data-latex="P(A \cap B) = P(A) \times P(B)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Independence means knowing A doesn't change
            B's probability. Just multiply the individual probabilities directly.
          </p>
        </div>
        <div class="visual">
          <div class="ind-mult-visual">
            <div class="imv-event">
              <span class="imv-icon">🎲</span>
              <span class="imv-prob">P(A)</span>
            </div>
            <div class="imv-times">×</div>
            <div class="imv-event">
              <span class="imv-icon">🎲</span>
              <span class="imv-prob">P(B)</span>
            </div>
            <div class="imv-equals">=</div>
            <div class="imv-result">P(A ∩ B)</div>
          </div>
          <p class="visual-caption">Independent: no conditional needed</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Flip a coin and roll a die. P(heads AND 6)?
          </p>
          <div class="formula" data-latex="P(H \cap 6) = P(H) \times P(6) = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Chain Rule (Multiple Events)</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For n events:
          </p>
          <div class="formula" data-latex="P(A_1 \cap A_2 \cap \cdots \cap A_n) = P(A_1) \times P(A_2|A_1) \times P(A_3|A_1 \cap A_2) \times \cdots"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Build up event by event. Each new event's
            probability is conditioned on all previous events having occurred.
          </p>
        </div>
        <div class="visual">
          <div class="chain-visual">
            <div class="chain-link">
              <span class="chain-num">1st</span>
              <span class="chain-prob">P(A₁)</span>
            </div>
            <div class="chain-arrow">→</div>
            <div class="chain-link">
              <span class="chain-num">2nd</span>
              <span class="chain-prob">P(A₂|A₁)</span>
            </div>
            <div class="chain-arrow">→</div>
            <div class="chain-link">
              <span class="chain-num">3rd</span>
              <span class="chain-prob">P(A₃|A₁∩A₂)</span>
            </div>
            <div class="chain-arrow">→</div>
            <div class="chain-dots">⋯</div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw 3 cards without replacement. P(all hearts)?
          </p>
          <div class="formula" data-latex="P(H_1 \cap H_2 \cap H_3) = \frac{13}{52} \times \frac{12}{51} \times \frac{11}{50} = \frac{1716}{132600} = \frac{11}{850}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Chain Rule for Independent Events</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For n independent events:
          </p>
          <div class="formula" data-latex="P(A_1 \cap A_2 \cap \cdots \cap A_n) = P(A_1) \times P(A_2) \times \cdots \times P(A_n)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Each event stands alone. Multiply all
            individual probabilities without conditioning.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die 4 times. P(all 6s)?
          </p>
          <div class="formula" data-latex="P(\text{four 6s}) = \left(\frac{1}{6}\right)^4 = \frac{1}{1296}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sampling With vs Without Replacement</h2>
        <div class="definition">
          <p>
            <strong>Key distinction:</strong> Replacement determines independence.
          </p>
        </div>
        <div class="visual">
          <div class="sampling-compare">
            <div class="samp-case">
              <span class="samp-title">With Replacement</span>
              <div class="samp-desc">
                <p>Items returned after each draw</p>
                <p>Draws are <strong>independent</strong></p>
                <p>Use: P(A) × P(B)</p>
              </div>
              <div class="samp-example">
                <span>P(two aces) =</span>
                <span class="samp-formula">(4/52) × (4/52)</span>
              </div>
            </div>
            <div class="samp-vs">vs</div>
            <div class="samp-case">
              <span class="samp-title">Without Replacement</span>
              <div class="samp-desc">
                <p>Items not returned</p>
                <p>Draws are <strong>dependent</strong></p>
                <p>Use: P(A) × P(B|A)</p>
              </div>
              <div class="samp-example">
                <span>P(two aces) =</span>
                <span class="samp-formula">(4/52) × (3/51)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Tree Diagrams for Multiplication</h2>
        <div class="definition">
          <p>
            <strong>Method:</strong> Each branch represents a conditional probability.
            Multiply along any path to get that outcome's probability.
          </p>
        </div>
        <div class="visual">
          <div class="mult-tree">
            <div class="mt-root">Start</div>
            <div class="mt-level1">
              <div class="mt-branch">
                <div class="mt-edge">
                  <span class="mt-prob">P(A)</span>
                </div>
                <div class="mt-node a">A</div>
                <div class="mt-level2">
                  <div class="mt-leaf">
                    <span class="mt-prob">P(B|A)</span>
                    <span class="mt-outcome">A∩B</span>
                    <span class="mt-total">P(A)·P(B|A)</span>
                  </div>
                  <div class="mt-leaf">
                    <span class="mt-prob">P(B'|A)</span>
                    <span class="mt-outcome">A∩B'</span>
                    <span class="mt-total">P(A)·P(B'|A)</span>
                  </div>
                </div>
              </div>
              <div class="mt-branch">
                <div class="mt-edge">
                  <span class="mt-prob">P(A')</span>
                </div>
                <div class="mt-node aprime">A'</div>
                <div class="mt-level2">
                  <div class="mt-leaf">
                    <span class="mt-prob">P(B|A')</span>
                    <span class="mt-outcome">A'∩B</span>
                    <span class="mt-total">P(A')·P(B|A')</span>
                  </div>
                  <div class="mt-leaf">
                    <span class="mt-prob">P(B'|A')</span>
                    <span class="mt-outcome">A'∩B'</span>
                    <span class="mt-total">P(A')·P(B'|A')</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>"At Least One" Using Multiplication</h2>
        <div class="definition">
          <p>
            <strong>Strategy:</strong> For independent events, compute the complement:
          </p>
          <div class="formula" data-latex="P(\text{at least one success}) = 1 - P(\text{all failures})"></div>
          <div class="formula" data-latex="= 1 - (1-p)^n"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Multiply failure probabilities for "none succeed,"
            then subtract from 1. Much easier than adding all the success cases.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 5 independent tries, each with 30% success rate.
            P(at least one success)?
          </p>
          <div class="formula" data-latex="P(\geq 1) = 1 - (0.7)^5 = 1 - 0.168 = 0.832"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>System Reliability</h2>
        <div class="definition">
          <p>
            <strong>Series system:</strong> All components must work (AND):
          </p>
          <div class="formula" data-latex="P(\text{system works}) = P(A) \times P(B) \times P(C) \times \cdots"></div>
          <p>
            <strong>Parallel system:</strong> At least one must work (OR):
          </p>
          <div class="formula" data-latex="P(\text{system works}) = 1 - P(\text{all fail}) = 1 - (1-p_A)(1-p_B)(1-p_C)\cdots"></div>
        </div>
        <div class="visual">
          <div class="reliability-visual">
            <div class="rel-system series">
              <span class="rel-title">Series (AND)</span>
              <div class="rel-components">
                <span class="rel-comp">A</span>
                <span class="rel-arrow">→</span>
                <span class="rel-comp">B</span>
                <span class="rel-arrow">→</span>
                <span class="rel-comp">C</span>
              </div>
              <span class="rel-formula">All must work</span>
            </div>
            <div class="rel-system parallel">
              <span class="rel-title">Parallel (OR)</span>
              <div class="rel-components stacked">
                <span class="rel-comp">A</span>
                <span class="rel-comp">B</span>
                <span class="rel-comp">C</span>
              </div>
              <span class="rel-formula">Any one works</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Three components, each 90% reliable.
          </p>
          <p>Series: P(works) = 0.9³ = 0.729</p>
          <p>Parallel: P(works) = 1 − 0.1³ = 1 − 0.001 = 0.999</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>When to Use Multiplication Rule</h2>
        <div class="when-grid">
          <div class="when-item">
            <span class="when-keyword">AND</span>
            <p>"A and B both happen"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Both</span>
            <p>"Both events occur"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">All</span>
            <p>"All n events happen"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Intersection</span>
            <p>"A ∩ B"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Sequential</span>
            <p>"First A, then B"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Consecutive</span>
            <p>"In a row"</p>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Multiplication Rule Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>General</h3>
            <div class="formula" data-latex="P(A \cap B) = P(A) \cdot P(B|A)"></div>
          </div>
          <div class="property">
            <h3>Independent</h3>
            <div class="formula" data-latex="P(A \cap B) = P(A) \cdot P(B)"></div>
          </div>
          <div class="property">
            <h3>Chain Rule</h3>
            <div class="formula" data-latex="\prod P(A_i | A_1 \cap \cdots \cap A_{i-1})"></div>
          </div>
          <div class="property">
            <h3>At Least One</h3>
            <div class="formula" data-latex="1 - (1-p)^n"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export function MutuallyExclusive() {
  return (
    <>
      <h1 class="page-title">D.1 Mutually Exclusive Events</h1>
      <p class="page-subtitle">Mutually Exclusive Events</p>

      <section class="intro">
        <p>
          Mutually exclusive events cannot occur at the same time. If one happens,
          the other is impossible. This property dramatically simplifies probability
          calculations for unions of events.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> Events A and B are mutually exclusive
            (or disjoint) if they cannot both occur:
          </p>
          <div class="formula" data-latex="A \cap B = \emptyset"></div>
          <div class="formula" data-latex="P(A \cap B) = 0"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Like choosing a single door — you can't
            walk through door A AND door B at the same time. One excludes the other.
          </p>
        </div>
        <div class="visual">
          <div class="disjoint-visual">
            <div class="disj-event a">
              <span>A</span>
            </div>
            <div class="disj-gap"></div>
            <div class="disj-event b">
              <span>B</span>
            </div>
          </div>
          <p class="visual-caption">No overlap — can't happen together</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Addition Rule for Mutually Exclusive Events</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> When events are mutually exclusive, "or" means add:
          </p>
          <div class="formula" data-latex="P(A \cup B) = P(A) + P(B)"></div>
          <p>For n mutually exclusive events:</p>
          <div class="formula" data-latex="P(A_1 \cup A_2 \cup \cdots \cup A_n) = P(A_1) + P(A_2) + \cdots + P(A_n)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> No overlap means no double-counting. The
            probability of "A or B" is simply the sum because they share no outcomes.
          </p>
        </div>
        <div class="visual">
          <div class="add-me-visual">
            <div class="add-me-box a">
              <span class="add-me-label">P(A)</span>
              <span class="add-me-val">0.3</span>
            </div>
            <div class="add-me-plus">+</div>
            <div class="add-me-box b">
              <span class="add-me-label">P(B)</span>
              <span class="add-me-val">0.2</span>
            </div>
            <div class="add-me-equals">=</div>
            <div class="add-me-box result">
              <span class="add-me-label">P(A∪B)</span>
              <span class="add-me-val">0.5</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die. P(1 or 6)?
          </p>
          <p>Events "roll 1" and "roll 6" are mutually exclusive.</p>
          <div class="formula" data-latex="P(1 \cup 6) = P(1) + P(6) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Identifying Mutually Exclusive Events</h2>
        <div class="definition">
          <p>
            <strong>Test:</strong> Ask "Can both events occur simultaneously?"
          </p>
          <ul class="me-list">
            <li><span class="me-yes">✓ Mutually Exclusive:</span> Cannot happen together</li>
            <li><span class="me-no">✗ Not Mutually Exclusive:</span> Can happen together</li>
          </ul>
        </div>
        <div class="visual">
          <div class="me-examples-grid">
            <div class="me-ex yes">
              <span class="me-ex-icon">✓</span>
              <span class="me-ex-title">Mutually Exclusive</span>
              <ul>
                <li>Heads vs Tails (one coin)</li>
                <li>Roll 2 vs Roll 5 (one die)</li>
                <li>Pass vs Fail (one exam)</li>
                <li>Rain vs No rain (same time)</li>
              </ul>
            </div>
            <div class="me-ex no">
              <span class="me-ex-icon">✗</span>
              <span class="me-ex-title">NOT Mutually Exclusive</span>
              <ul>
                <li>Even vs Greater than 3</li>
                <li>Red card vs King</li>
                <li>Rainy vs Cold</li>
                <li>Tall vs Athletic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Mistake: General Addition Rule</h2>
        <div class="definition">
          <p>
            <strong>Warning:</strong> For NON-mutually exclusive events, you must
            subtract the overlap:
          </p>
          <div class="formula" data-latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)"></div>
          <p>Only when P(A ∩ B) = 0 does this simplify to P(A) + P(B).</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If events can overlap, adding them counts
            the intersection twice. You must subtract it once to correct.
          </p>
        </div>
        <div class="visual">
          <div class="overlap-compare">
            <div class="oc-case">
              <span class="oc-title">Mutually Exclusive</span>
              <div class="oc-circles me">
                <div class="oc-circle a">A</div>
                <div class="oc-circle b">B</div>
              </div>
              <span class="oc-formula">P(A∪B) = P(A) + P(B)</span>
            </div>
            <div class="oc-case">
              <span class="oc-title">Overlapping</span>
              <div class="oc-circles overlap">
                <div class="oc-circle a">A</div>
                <div class="oc-circle b">B</div>
              </div>
              <span class="oc-formula">P(A∪B) = P(A) + P(B) − P(A∩B)</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw a card. P(red OR king)?
          </p>
          <p>Not mutually exclusive — king of hearts and king of diamonds are both red AND kings.</p>
          <div class="formula" data-latex="P(R \cup K) = \frac{26}{52} + \frac{4}{52} - \frac{2}{52} = \frac{28}{52} = \frac{7}{13}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Mutually Exclusive vs Independent</h2>
        <div class="definition">
          <p>
            <strong>Key Point:</strong> These are OPPOSITE concepts, not synonyms!
          </p>
          <div class="compare-table">
            <div class="cmp-row header">
              <span>Concept</span>
              <span>Mutually Exclusive</span>
              <span>Independent</span>
            </div>
            <div class="cmp-row">
              <span>Meaning</span>
              <span>Can't both happen</span>
              <span>Don't influence each other</span>
            </div>
            <div class="cmp-row">
              <span>P(A ∩ B)</span>
              <span>= 0</span>
              <span>= P(A)·P(B)</span>
            </div>
            <div class="cmp-row">
              <span>P(A | B)</span>
              <span>= 0</span>
              <span>= P(A)</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If A and B are mutually exclusive with
            P(A), P(B) &gt; 0, they CANNOT be independent. Knowing B happened tells
            you A definitely didn't — that's information!
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die. Let A = {'{1, 2}'}, B = {'{3, 4}'}.
          </p>
          <p>These are mutually exclusive (no overlap).</p>
          <p>But NOT independent: P(A|B) = 0 ≠ P(A) = 1/3</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Pairwise vs Mutually Exclusive</h2>
        <div class="definition">
          <p>
            <strong>Pairwise mutually exclusive:</strong> Every pair of events
            has empty intersection.
          </p>
          <div class="formula" data-latex="A_i \cap A_j = \emptyset \text{ for all } i \neq j"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> No two events can happen together. This is
            the standard meaning when we say events are "mutually exclusive."
          </p>
        </div>
        <div class="visual">
          <div class="pairwise-visual">
            <div class="pw-event">A₁</div>
            <div class="pw-event">A₂</div>
            <div class="pw-event">A₃</div>
            <div class="pw-event">A₄</div>
          </div>
          <p class="visual-caption">No overlaps between any pair</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Complementary Events</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> A and A′ are always mutually exclusive
            and exhaustive:
          </p>
          <div class="formula" data-latex="A \cap A' = \emptyset"></div>
          <div class="formula" data-latex="A \cup A' = S"></div>
          <div class="formula" data-latex="P(A) + P(A') = 1"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Something either happens or it doesn't.
            These two possibilities are mutually exclusive and cover everything.
          </p>
        </div>
        <div class="visual">
          <div class="complement-me-visual">
            <div class="cme-event a">A</div>
            <div class="cme-event aprime">A′</div>
          </div>
          <p class="visual-caption">Together they fill the entire sample space</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Applications</h2>
        <div class="app-grid">
          <div class="app-item">
            <span class="app-title">Dice outcomes</span>
            <p>Rolling 1, 2, 3, 4, 5, 6 are mutually exclusive</p>
          </div>
          <div class="app-item">
            <span class="app-title">Categories</span>
            <p>Age groups (0-17, 18-30, 31-50, 51+) are mutually exclusive</p>
          </div>
          <div class="app-item">
            <span class="app-title">Rankings</span>
            <p>Finishing 1st, 2nd, 3rd are mutually exclusive</p>
          </div>
          <div class="app-item">
            <span class="app-title">Single choice</span>
            <p>Multiple choice A, B, C, D are mutually exclusive</p>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Mutually Exclusive Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Definition</h3>
            <div class="formula" data-latex="A \cap B = \emptyset"></div>
          </div>
          <div class="property">
            <h3>Probability</h3>
            <div class="formula" data-latex="P(A \cap B) = 0"></div>
          </div>
          <div class="property">
            <h3>Addition Rule</h3>
            <div class="formula" data-latex="P(A \cup B) = P(A) + P(B)"></div>
          </div>
          <div class="property">
            <h3>NOT Independent</h3>
            <div class="formula" data-latex="P(A|B) = 0 \neq P(A)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

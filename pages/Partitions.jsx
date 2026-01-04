export function Partitions() {
  return (
    <>
      <h1 class="page-title">D.2 Partitions & Total Probability</h1>
      <p class="page-subtitle">Mutually Exclusive Events</p>

      <section class="intro">
        <p>
          A partition divides the sample space into non-overlapping pieces that
          together cover everything. This structure enables the powerful Law of
          Total Probability, which breaks complex problems into simpler cases.
        </p>
      </section>

      <section class="definition-block">
        <h2>Partition Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> Events B₁, B₂, ..., Bₙ form a partition
            of sample space S if:
          </p>
          <div class="formula" data-latex="1. \quad B_i \cap B_j = \emptyset \text{ for } i \neq j \quad \text{(mutually exclusive)}"></div>
          <div class="formula" data-latex="2. \quad B_1 \cup B_2 \cup \cdots \cup B_n = S \quad \text{(exhaustive)}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Like slicing a pie — every piece is
            separate, and together they make the whole pie. Every outcome belongs
            to exactly one slice.
          </p>
        </div>
        <div class="visual">
          <div class="partition-visual">
            <div class="part-slice" style={{ background: '#90caf9' }}>B₁</div>
            <div class="part-slice" style={{ background: '#a5d6a7' }}>B₂</div>
            <div class="part-slice" style={{ background: '#fff59d' }}>B₃</div>
            <div class="part-slice" style={{ background: '#ffcc80' }}>B₄</div>
          </div>
          <p class="visual-caption">No gaps, no overlaps — covers entire S</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Partitions</h2>
        <div class="definition">
          <p>
            <strong>Examples of natural partitions:</strong>
          </p>
        </div>
        <div class="visual">
          <div class="partition-examples">
            <div class="part-ex">
              <span class="part-ex-title">Binary</span>
              <div class="part-ex-items">
                <span>A</span>
                <span>A′</span>
              </div>
            </div>
            <div class="part-ex">
              <span class="part-ex-title">Die Roll</span>
              <div class="part-ex-items">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </div>
            </div>
            <div class="part-ex">
              <span class="part-ex-title">Card Suits</span>
              <div class="part-ex-items">
                <span>♠</span>
                <span>♥</span>
                <span>♦</span>
                <span>♣</span>
              </div>
            </div>
            <div class="part-ex">
              <span class="part-ex-title">Age Groups</span>
              <div class="part-ex-items">
                <span>0-17</span>
                <span>18-64</span>
                <span>65+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Law of Total Probability</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> If B₁, B₂, ..., Bₙ partition S, then for any event A:
          </p>
          <div class="formula" data-latex="P(A) = \sum_{i=1}^{n} P(A \cap B_i) = \sum_{i=1}^{n} P(A | B_i) P(B_i)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Break A into pieces based on which Bᵢ
            occurred. Each piece A ∩ Bᵢ is disjoint, so add them up. It's like
            asking "What's P(A)?" by considering each scenario separately.
          </p>
        </div>
        <div class="visual">
          <div class="total-prob-visual">
            <div class="tp-sample-space">
              <div class="tp-partition b1">
                <span class="tp-label">B₁</span>
                <div class="tp-intersection">A∩B₁</div>
              </div>
              <div class="tp-partition b2">
                <span class="tp-label">B₂</span>
                <div class="tp-intersection">A∩B₂</div>
              </div>
              <div class="tp-partition b3">
                <span class="tp-label">B₃</span>
                <div class="tp-intersection">A∩B₃</div>
              </div>
            </div>
            <p class="visual-caption">P(A) = P(A∩B₁) + P(A∩B₂) + P(A∩B₃)</p>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> A factory has 3 machines. Machine 1 makes
            30% of items (2% defective), Machine 2 makes 45% (3% defective),
            Machine 3 makes 25% (4% defective). What's P(defective)?
          </p>
          <div class="formula" data-latex="P(D) = P(D|M_1)P(M_1) + P(D|M_2)P(M_2) + P(D|M_3)P(M_3)"></div>
          <div class="formula" data-latex="= (0.02)(0.30) + (0.03)(0.45) + (0.04)(0.25)"></div>
          <div class="formula" data-latex="= 0.006 + 0.0135 + 0.01 = 0.0295 = 2.95\%"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Binary Partition (Special Case)</h2>
        <div class="definition">
          <p>
            <strong>Simplest partition:</strong> B and B′
          </p>
          <div class="formula" data-latex="P(A) = P(A|B)P(B) + P(A|B')P(B')"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Either B happens or it doesn't. Find P(A)
            in each case, weight by how likely each case is.
          </p>
        </div>
        <div class="visual">
          <div class="binary-partition-visual">
            <div class="bp-case">
              <span class="bp-label">If B occurs</span>
              <span class="bp-prob">P(A|B) × P(B)</span>
            </div>
            <div class="bp-plus">+</div>
            <div class="bp-case">
              <span class="bp-label">If B doesn't occur</span>
              <span class="bp-prob">P(A|B′) × P(B′)</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 60% of days are sunny. P(late to work) is
            5% on sunny days, 20% on non-sunny days. What's P(late)?
          </p>
          <div class="formula" data-latex="P(L) = P(L|S)P(S) + P(L|S')P(S')"></div>
          <div class="formula" data-latex="= (0.05)(0.60) + (0.20)(0.40) = 0.03 + 0.08 = 0.11 = 11\%"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Tree Diagrams</h2>
        <div class="definition">
          <p>
            <strong>Method:</strong> Visualize sequential events with branches.
            Multiply along branches, add across final outcomes.
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Each path through the tree is a scenario.
            The probability of a path is the product of its branches. Total
            probability sums all paths that lead to your event.
          </p>
        </div>
        <div class="visual">
          <div class="tree-diagram">
            <div class="tree-root">Start</div>
            <div class="tree-level-1">
              <div class="tree-branch">
                <span class="branch-prob">P(B₁)</span>
                <div class="tree-node">B₁</div>
                <div class="tree-level-2">
                  <div class="tree-leaf">
                    <span class="branch-prob">P(A|B₁)</span>
                    <span class="leaf-label">A</span>
                  </div>
                  <div class="tree-leaf">
                    <span class="branch-prob">P(A′|B₁)</span>
                    <span class="leaf-label">A′</span>
                  </div>
                </div>
              </div>
              <div class="tree-branch">
                <span class="branch-prob">P(B₂)</span>
                <div class="tree-node">B₂</div>
                <div class="tree-level-2">
                  <div class="tree-leaf">
                    <span class="branch-prob">P(A|B₂)</span>
                    <span class="leaf-label">A</span>
                  </div>
                  <div class="tree-leaf">
                    <span class="branch-prob">P(A′|B₂)</span>
                    <span class="leaf-label">A′</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Reading the tree:</strong> P(B₁ and A) = P(B₁) × P(A|B₁)
          </p>
          <p>P(A) = P(B₁)P(A|B₁) + P(B₂)P(A|B₂)</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Weighted Average Interpretation</h2>
        <div class="definition">
          <p>
            <strong>View:</strong> P(A) is a weighted average of conditional
            probabilities, weighted by how likely each condition is.
          </p>
          <div class="formula" data-latex="P(A) = \sum_{i} P(A|B_i) \cdot P(B_i)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Like computing a course grade: each
            assignment has a score (conditional probability) and a weight
            (probability of that scenario). The final grade is the weighted sum.
          </p>
        </div>
        <div class="visual">
          <div class="weighted-avg-visual">
            <div class="wa-term">
              <span class="wa-weight">Weight: P(B₁)</span>
              <span class="wa-value">Value: P(A|B₁)</span>
            </div>
            <div class="wa-plus">+</div>
            <div class="wa-term">
              <span class="wa-weight">Weight: P(B₂)</span>
              <span class="wa-value">Value: P(A|B₂)</span>
            </div>
            <div class="wa-plus">+ ⋯</div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Connection to Bayes' Theorem</h2>
        <div class="definition">
          <p>
            <strong>Preview:</strong> The Law of Total Probability provides the
            denominator in Bayes' Theorem:
          </p>
          <div class="formula" data-latex="P(B_i | A) = \frac{P(A | B_i) P(B_i)}{P(A)} = \frac{P(A | B_i) P(B_i)}{\sum_j P(A | B_j) P(B_j)}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Total Probability tells you P(A). Bayes
            then "inverts" to find P(Bᵢ|A) — given A happened, which Bᵢ was
            responsible?
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Multi-Stage Problems</h2>
        <div class="definition">
          <p>
            <strong>Strategy:</strong> For complex scenarios with multiple stages,
            partition at each stage and apply total probability iteratively.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Urn 1 has 3 red, 2 blue. Urn 2 has 1 red,
            4 blue. Flip a fair coin: heads → draw from Urn 1, tails → draw from
            Urn 2. What's P(red)?
          </p>
          <div class="formula" data-latex="P(R) = P(R|U_1)P(U_1) + P(R|U_2)P(U_2)"></div>
          <div class="formula" data-latex="= \frac{3}{5} \times \frac{1}{2} + \frac{1}{5} \times \frac{1}{2} = \frac{3}{10} + \frac{1}{10} = \frac{4}{10} = 0.4"></div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Key Formulas</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Partition</h3>
            <p>Mutually exclusive + exhaustive</p>
            <div class="formula" data-latex="\cup B_i = S"></div>
          </div>
          <div class="property">
            <h3>Total Probability</h3>
            <div class="formula" data-latex="P(A) = \sum P(A|B_i)P(B_i)"></div>
          </div>
          <div class="property">
            <h3>Binary Case</h3>
            <div class="formula" data-latex="P(A) = P(A|B)P(B) + P(A|B')P(B')"></div>
          </div>
          <div class="property">
            <h3>Tree Diagram</h3>
            <p>Multiply along, add across</p>
          </div>
        </div>
      </section>
    </>
  );
}

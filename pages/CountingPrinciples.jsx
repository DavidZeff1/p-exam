export function CountingPrinciples() {
  return (
    <>
      <h1 class="page-title">B.1 Counting Principles</h1>
      <p class="page-subtitle">Combinatorics</p>

      <section class="intro">
        <p>
          Counting principles are the foundation of combinatorics. They give us
          systematic ways to count the number of outcomes in a sample space —
          essential for calculating probabilities.
        </p>
      </section>

      <section class="definition-block">
        <h2>Multiplication Principle</h2>
        <div class="definition">
          <p>
            <strong>Principle:</strong> If a task consists of k steps, where
            step 1 can be done in n₁ ways, step 2 in n₂ ways, ..., and step k in
            nₖ ways, then the total number of ways is:
          </p>
          <div
            class="formula"
            data-latex="n_1 \times n_2 \times \cdots \times n_k"
          ></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Each choice multiplies the
            possibilities. If you have 3 shirts and 4 pants, you have 3 × 4 = 12
            outfits. Each shirt can pair with each pant independently.
          </p>
        </div>
        <div class="visual">
          <div class="tree-visual">
            <div class="tree-level">
              <span class="level-label">Shirts (3)</span>
              <div class="tree-nodes">
                <span class="node">🔴</span>
                <span class="node">🔵</span>
                <span class="node">🟢</span>
              </div>
            </div>
            <div class="tree-branches"></div>
            <div class="tree-level">
              <span class="level-label">Pants (4 each)</span>
              <div class="tree-nodes expanded">
                <span class="node-group">A B C D</span>
                <span class="node-group">A B C D</span>
                <span class="node-group">A B C D</span>
              </div>
            </div>
            <div class="tree-result">Total: 3 × 4 = 12 outfits</div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> A license plate has 3 letters followed by
            3 digits. How many plates are possible?
          </p>
          <div
            class="formula"
            data-latex="26 \times 26 \times 26 \times 10 \times 10 \times 10 = 17,576,000"
          ></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Addition Principle</h2>
        <div class="definition">
          <p>
            <strong>Principle:</strong> If a task can be done in one of k
            mutually exclusive ways, where way 1 can be done in n₁ ways, way 2
            in n₂ ways, etc., then the total number of ways is:
          </p>
          <div class="formula" data-latex="n_1 + n_2 + \cdots + n_k"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> "Or" means add. If you can take bus A (5
            routes) OR bus B (3 routes) to work, you have 5 + 3 = 8 options.
            You're choosing one category, then counting within it.
          </p>
        </div>
        <div class="visual">
          <div class="addition-visual">
            <div class="add-group">
              <span class="group-label">Option A</span>
              <div class="group-items">
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>
              <span class="group-count">5 ways</span>
            </div>
            <div class="add-or">OR</div>
            <div class="add-group">
              <span class="group-label">Option B</span>
              <div class="group-items">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>
              <span class="group-count">3 ways</span>
            </div>
            <div class="add-equals">=</div>
            <div class="add-total">8 ways</div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Choose a president from 10 seniors OR 8
            juniors. How many choices?
          </p>
          <div class="formula" data-latex="10 + 8 = 18 \text{ choices}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Subtraction Principle (Complement Counting)</h2>
        <div class="definition">
          <p>
            <strong>Principle:</strong> To count elements with a property,
            subtract those without it from the total:
          </p>
          <div class="formula" data-latex="|A| = |U| - |A'|"></div>
          <p>Often easier when "at least one" appears in the problem.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Sometimes it's easier to count what you
            DON'T want. To count passwords with at least one digit, count all
            passwords minus those with no digits.
          </p>
        </div>
        <div class="visual">
          <div class="subtraction-visual">
            <div class="sub-total">
              <span class="sub-label">Total (U)</span>
              <div class="sub-box total"></div>
            </div>
            <div class="sub-minus">−</div>
            <div class="sub-complement">
              <span class="sub-label">Without property (A')</span>
              <div class="sub-box complement"></div>
            </div>
            <div class="sub-equals">=</div>
            <div class="sub-result">
              <span class="sub-label">With property (A)</span>
              <div class="sub-box result"></div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 4-digit PINs (0000–9999) with at least one
            7:
          </p>
          <div
            class="formula"
            data-latex="\text{Total} - \text{No 7s} = 10^4 - 9^4 = 10000 - 6561 = 3439"
          ></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Division Principle (Overcounting Correction)</h2>
        <div class="definition">
          <p>
            <strong>Principle:</strong> If a counting method counts each
            distinct outcome exactly k times, divide by k to get the true count:
          </p>
          <div
            class="formula"
            data-latex="\text{Actual count} = \frac{\text{Overcounted total}}{k}"
          ></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If you're counting committees but your
            method counts {'{Alice, Bob}'} and {'{Bob, Alice}'} as different, you've double-counted. Divide by 2 to correct.
          </p>
        </div>
        <div class="visual">
          <div class="division-visual">
            <div class="div-overcounted">
              <span class="div-label">Overcounted</span>
              <div class="div-items">
                <span>{'{A, B}'}</span>
                <span>{'{B, A}'}</span>
                <span>{'{A, C}'}</span>
                <span>{'{C, A}'}</span>
                <span>{'{B, C}'}</span>
                <span>{'{C, B}'}</span>
              </div>
              <span class="div-count">6 arrangements</span>
            </div>
            <div class="div-arrow">÷ 2</div>
            <div class="div-actual">
              <span class="div-label">Actual committees</span>
              <div class="div-items">
                <span>{'{A, B}'}</span>
                <span>{'{A, C}'}</span>
                <span>{'{B, C}'}</span>
              </div>
              <span class="div-count">3 committees</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Handshakes among 10 people. Each pair
            shakes once:
          </p>
          <div
            class="formula"
            data-latex="\frac{10 \times 9}{2} = 45 \text{ handshakes}"
          ></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Inclusion-Exclusion Principle</h2>
        <div class="definition">
          <p>
            <strong>Principle:</strong> For two sets:
          </p>
          <div
            class="formula"
            data-latex="|A \cup B| = |A| + |B| - |A \cap B|"
          ></div>
          <p>For three sets:</p>
          <div
            class="formula"
            data-latex="|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|"
          ></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> When sets overlap, adding them
            double-counts the intersection. Subtract it once to correct. With
            three sets, you subtract too much, so add the triple intersection
            back.
          </p>
        </div>
        <div class="visual">
          <div class="venn-two">
            <div class="circle circle-a">A</div>
            <div class="circle circle-b">B</div>
            <div class="overlap-label">−1×</div>
          </div>
          <p class="visual-caption">
            Subtract overlap to avoid double-counting
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> In a class of 30: 18 take Math, 15 take
            Physics, 10 take both. How many take at least one?
          </p>
          <div
            class="formula"
            data-latex="|M \cup P| = 18 + 15 - 10 = 23"
          ></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Pigeonhole Principle</h2>
        <div class="definition">
          <p>
            <strong>Principle:</strong> If n items are placed into k containers
            and n &gt; k, then at least one container has more than one item.
          </p>
          <p>Generalized: At least one container has at least ⌈n/k⌉ items.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If you have 13 pigeons and 12 holes, at
            least one hole has 2+ pigeons. Useful for proving something MUST
            exist without finding it explicitly.
          </p>
        </div>
        <div class="visual">
          <div class="pigeonhole-visual">
            <div class="holes">
              <div class="hole">
                <span>🐦</span>
                <span>🐦</span>
              </div>
              <div class="hole">
                <span>🐦</span>
              </div>
              <div class="hole">
                <span>🐦</span>
              </div>
              <div class="hole">
                <span>🐦</span>
              </div>
            </div>
            <p class="visual-caption">
              5 pigeons, 4 holes → at least one hole has 2+
            </p>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> In any group of 13 people, at least 2
            share a birth month.
          </p>
          <div
            class="formula"
            data-latex="13 \text{ people} > 12 \text{ months} \implies \text{at least one repeat}"
          ></div>
        </div>
      </section>

      <section class="key-properties">
        <h2>When to Use Each Principle</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Multiplication</h3>
            <p>"AND" / sequential steps</p>
            <p>Do step 1 AND step 2 AND...</p>
          </div>
          <div class="property">
            <h3>Addition</h3>
            <p>"OR" / mutually exclusive</p>
            <p>Do option A OR option B OR...</p>
          </div>
          <div class="property">
            <h3>Subtraction</h3>
            <p>"At least one" / complements</p>
            <p>Total minus unwanted</p>
          </div>
          <div class="property">
            <h3>Division</h3>
            <p>Order doesn't matter</p>
            <p>Correct for overcounting</p>
          </div>
        </div>
      </section>
    </>
  );
}

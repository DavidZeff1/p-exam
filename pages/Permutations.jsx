export function Permutations() {
  return (
    <>
      <h1 class="page-title">B.2 Permutations</h1>
      <p class="page-subtitle">Combinatorics</p>

      <section class="intro">
        <p>
          A permutation is an arrangement of objects where order matters.
          Choosing a president, then vice president, then treasurer from a group
          is a permutation problem — the same three people in different positions
          count as different outcomes.
        </p>
      </section>

      <section class="definition-block">
        <h2>Factorial</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The factorial of n, written n!, is the
            product of all positive integers from 1 to n.
          </p>
          <div class="formula" data-latex="n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1"></div>
          <p>By convention: 0! = 1</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> n! counts the ways to arrange n distinct
            objects in a line. For the first position you have n choices, then
            n−1 for the second, and so on.
          </p>
        </div>
        <div class="visual">
          <div class="factorial-table">
            <div class="fact-row"><span class="fact-n">0!</span><span class="fact-eq">=</span><span class="fact-val">1</span></div>
            <div class="fact-row"><span class="fact-n">1!</span><span class="fact-eq">=</span><span class="fact-val">1</span></div>
            <div class="fact-row"><span class="fact-n">2!</span><span class="fact-eq">=</span><span class="fact-val">2</span></div>
            <div class="fact-row"><span class="fact-n">3!</span><span class="fact-eq">=</span><span class="fact-val">6</span></div>
            <div class="fact-row"><span class="fact-n">4!</span><span class="fact-eq">=</span><span class="fact-val">24</span></div>
            <div class="fact-row"><span class="fact-n">5!</span><span class="fact-eq">=</span><span class="fact-val">120</span></div>
            <div class="fact-row"><span class="fact-n">6!</span><span class="fact-eq">=</span><span class="fact-val">720</span></div>
            <div class="fact-row"><span class="fact-n">7!</span><span class="fact-eq">=</span><span class="fact-val">5,040</span></div>
            <div class="fact-row"><span class="fact-n">10!</span><span class="fact-eq">=</span><span class="fact-val">3,628,800</span></div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> How many ways can 5 people stand in a line?
          </p>
          <div class="formula" data-latex="5! = 5 \times 4 \times 3 \times 2 \times 1 = 120"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Permutation of n objects taken r at a time</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> P(n,r) or nPr counts the number of ways
            to arrange r objects chosen from n distinct objects.
          </p>
          <div class="formula" data-latex="P(n,r) = \frac{n!}{(n-r)!} = n \times (n-1) \times \cdots \times (n-r+1)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> You have n choices for the first spot,
            n−1 for the second, continuing for r spots. You stop after r factors
            instead of going all the way to 1.
          </p>
        </div>
        <div class="visual">
          <div class="perm-visual">
            <div class="perm-slots">
              <div class="perm-slot">
                <span class="slot-label">1st</span>
                <span class="slot-choices">n</span>
              </div>
              <div class="perm-times">×</div>
              <div class="perm-slot">
                <span class="slot-label">2nd</span>
                <span class="slot-choices">n−1</span>
              </div>
              <div class="perm-times">×</div>
              <div class="perm-slot">
                <span class="slot-label">3rd</span>
                <span class="slot-choices">n−2</span>
              </div>
              <div class="perm-times">× ⋯ ×</div>
              <div class="perm-slot">
                <span class="slot-label">rth</span>
                <span class="slot-choices">n−r+1</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Choose a president, VP, and secretary from
            10 candidates. How many ways?
          </p>
          <div class="formula" data-latex="P(10,3) = 10 \times 9 \times 8 = 720"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Permutations with Repetition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> When arranging n objects where some are
            identical, divide by the factorial of each group of repeats.
          </p>
          <div class="formula" data-latex="\frac{n!}{n_1! \times n_2! \times \cdots \times n_k!}"></div>
          <p>where n₁, n₂, ..., nₖ are the counts of each repeated type.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If you have 3 identical red balls, swapping
            them doesn't create a new arrangement. Divide by 3! to remove those
            "phantom" duplicates.
          </p>
        </div>
        <div class="visual">
          <div class="repeat-visual">
            <div class="repeat-example">
              <span class="repeat-word">MISSISSIPPI</span>
              <div class="repeat-breakdown">
                <span>M: 1</span>
                <span>I: 4</span>
                <span>S: 4</span>
                <span>P: 2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> How many ways to arrange the letters in MISSISSIPPI?
          </p>
          <div class="formula" data-latex="\frac{11!}{1! \times 4! \times 4! \times 2!} = \frac{39916800}{1 \times 24 \times 24 \times 2} = 34650"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Circular Permutations</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> Arrangements in a circle where only
            relative position matters (rotations are equivalent).
          </p>
          <div class="formula" data-latex="(n-1)!"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Fix one person's position to break the
            rotational symmetry, then arrange the remaining n−1 people. This avoids
            counting the same circular arrangement n times.
          </p>
        </div>
        <div class="visual">
          <div class="circular-visual">
            <div class="circle-arrangement">
              <span class="circle-person" style={{ top: '0', left: '50%' }}>A</span>
              <span class="circle-person" style={{ top: '35%', left: '93%' }}>B</span>
              <span class="circle-person" style={{ top: '90%', left: '75%' }}>C</span>
              <span class="circle-person" style={{ top: '90%', left: '25%' }}>D</span>
              <span class="circle-person" style={{ top: '35%', left: '7%' }}>E</span>
            </div>
            <p class="visual-caption">Fix A, arrange B,C,D,E: (5−1)! = 24 ways</p>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Seat 6 people around a round table.
          </p>
          <div class="formula" data-latex="(6-1)! = 5! = 120 \text{ arrangements}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Permutations with Restrictions</h2>
        <div class="definition">
          <p>
            <strong>Approach 1:</strong> Direct counting — place restricted items
            first, then fill remaining spots.
          </p>
          <p>
            <strong>Approach 2:</strong> Complement — total permutations minus
            those violating the restriction.
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Handle constraints by either building
            valid arrangements step-by-step, or counting everything and
            subtracting the bad ones.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Arrange 5 people in a row where A and B must
            be adjacent.
          </p>
          <p><strong>Solution:</strong> Treat AB as one unit → 4 units to arrange = 4!
          But A and B can swap within their unit → 2!</p>
          <div class="formula" data-latex="4! \times 2! = 24 \times 2 = 48"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Arrange 5 people where A and B must NOT be adjacent.
          </p>
          <p><strong>Solution:</strong> Total minus adjacent cases.</p>
          <div class="formula" data-latex="5! - 48 = 120 - 48 = 72"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Derangements</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> A derangement is a permutation where no
            element appears in its original position. The count is denoted D(n) or !n.
          </p>
          <div class="formula" data-latex="D(n) = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!} = n! \left(1 - 1 + \frac{1}{2!} - \frac{1}{3!} + \cdots \right)"></div>
          <p>Approximation: D(n) ≈ n!/e</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Like a secret Santa where nobody draws
            their own name. Uses inclusion-exclusion: start with all arrangements,
            subtract those where at least one person is in place, add back
            overcorrections, etc.
          </p>
        </div>
        <div class="visual">
          <div class="derangement-table">
            <div class="der-row"><span class="der-n">D(1)</span><span class="der-eq">=</span><span class="der-val">0</span></div>
            <div class="der-row"><span class="der-n">D(2)</span><span class="der-eq">=</span><span class="der-val">1</span></div>
            <div class="der-row"><span class="der-n">D(3)</span><span class="der-eq">=</span><span class="der-val">2</span></div>
            <div class="der-row"><span class="der-n">D(4)</span><span class="der-eq">=</span><span class="der-val">9</span></div>
            <div class="der-row"><span class="der-n">D(5)</span><span class="der-eq">=</span><span class="der-val">44</span></div>
            <div class="der-row"><span class="der-n">D(6)</span><span class="der-eq">=</span><span class="der-val">265</span></div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 4 people put hats in a pile. How many ways
            can they each grab a hat that isn't theirs?
          </p>
          <div class="formula" data-latex="D(4) = 4! \left(1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24}\right) = 24 \times \frac{9}{24} = 9"></div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Permutation Formulas Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>All n objects</h3>
            <div class="formula" data-latex="n!"></div>
          </div>
          <div class="property">
            <h3>r from n objects</h3>
            <div class="formula" data-latex="P(n,r) = \frac{n!}{(n-r)!}"></div>
          </div>
          <div class="property">
            <h3>With repeats</h3>
            <div class="formula" data-latex="\frac{n!}{n_1! n_2! \cdots}"></div>
          </div>
          <div class="property">
            <h3>Circular</h3>
            <div class="formula" data-latex="(n-1)!"></div>
          </div>
        </div>
      </section>
    </>
  );
}

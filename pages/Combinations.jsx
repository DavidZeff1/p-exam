export function Combinations() {
  return (
    <>
      <h1 class="page-title">B.3 Combinations</h1>
      <p class="page-subtitle">Combinatorics</p>

      <section class="intro">
        <p>
          A combination is a selection of objects where order does NOT matter.
          Choosing 3 people for a committee is a combination problem — the same
          three people form the same committee regardless of selection order.
        </p>
      </section>

      <section class="definition-block">
        <h2>Combination Formula</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> C(n,r), nCr, or "n choose r" counts the
            number of ways to select r objects from n distinct objects without
            regard to order.
          </p>
          <div class="formula" data-latex="\binom{n}{r} = C(n,r) = \frac{n!}{r!(n-r)!}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Start with permutations P(n,r), then
            divide by r! because the r! arrangements of the same r objects all
            count as one combination.
          </p>
        </div>
        <div class="visual">
          <div class="comb-derivation">
            <div class="comb-step">
              <span class="step-label">Permutations</span>
              <span class="step-formula">P(n,r) = n!/(n-r)!</span>
            </div>
            <div class="comb-arrow">÷ r!</div>
            <div class="comb-step">
              <span class="step-label">Combinations</span>
              <span class="step-formula">C(n,r) = n!/[r!(n-r)!]</span>
            </div>
          </div>
          <p class="visual-caption">Remove ordering by dividing out r!</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Choose 3 people from 10 for a committee.
          </p>
          <div class="formula" data-latex="\binom{10}{3} = \frac{10!}{3! \times 7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Permutation vs Combination</h2>
        <div class="definition">
          <p>
            <strong>Key Question:</strong> Does the order of selection matter?
          </p>
          <div class="comparison-table">
            <div class="compare-row header">
              <span>Order Matters?</span>
              <span>Formula</span>
              <span>Example</span>
            </div>
            <div class="compare-row">
              <span class="yes">YES → Permutation</span>
              <span>P(n,r)</span>
              <span>President, VP, Secretary</span>
            </div>
            <div class="compare-row">
              <span class="no">NO → Combination</span>
              <span>C(n,r)</span>
              <span>Committee of 3</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Ask yourself: if I swap two selected items,
            is it a different outcome? If yes → permutation. If no → combination.
          </p>
        </div>
        <div class="visual">
          <div class="perm-vs-comb">
            <div class="pvc-box perm">
              <span class="pvc-title">Permutation</span>
              <div class="pvc-items">
                <span>ABC</span>
                <span>ACB</span>
                <span>BAC</span>
                <span>BCA</span>
                <span>CAB</span>
                <span>CBA</span>
              </div>
              <span class="pvc-count">6 different</span>
            </div>
            <div class="pvc-vs">vs</div>
            <div class="pvc-box comb">
              <span class="pvc-title">Combination</span>
              <div class="pvc-items">
                <span>{'{A,B,C}'}</span>
              </div>
              <span class="pvc-count">1 group</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Symmetry Property</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> Choosing r objects to include is the same
            as choosing n−r objects to exclude.
          </p>
          <div class="formula" data-latex="\binom{n}{r} = \binom{n}{n-r}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Picking 3 people for a team of 10 is the
            same as picking 7 people to leave out. Every "in" group defines a
            unique "out" group.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Verify the symmetry:
          </p>
          <div class="formula" data-latex="\binom{10}{3} = \binom{10}{7} = 120"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Pascal's Triangle</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> Each entry is the sum of the two entries
            directly above it.
          </p>
          <div class="formula" data-latex="\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> To choose r from n: either include the
            nth item (then choose r−1 from the rest) or exclude it (choose all r
            from the rest). Add both cases.
          </p>
        </div>
        <div class="visual">
          <div class="pascal-triangle">
            <div class="pascal-row"><span>1</span></div>
            <div class="pascal-row"><span>1</span><span>1</span></div>
            <div class="pascal-row"><span>1</span><span>2</span><span>1</span></div>
            <div class="pascal-row"><span>1</span><span>3</span><span>3</span><span>1</span></div>
            <div class="pascal-row"><span>1</span><span>4</span><span>6</span><span>4</span><span>1</span></div>
            <div class="pascal-row"><span>1</span><span>5</span><span>10</span><span>10</span><span>5</span><span>1</span></div>
          </div>
          <p class="visual-caption">Row n contains C(n,0), C(n,1), ..., C(n,n)</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Combinations with Repetition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> When selecting r items from n types
            where repetition is allowed (and order doesn't matter):
          </p>
          <div class="formula" data-latex="\binom{n+r-1}{r} = \binom{n+r-1}{n-1}"></div>
          <p>Also called "stars and bars" or "multiset coefficient."</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Imagine distributing r identical balls into
            n distinct bins. Use r stars (balls) and n−1 bars (dividers). Arrange
            these r + n − 1 symbols, choosing where to place the n−1 bars.
          </p>
        </div>
        <div class="visual">
          <div class="stars-bars">
            <span class="sb-label">3 fruits from {'{apple, banana, cherry}'}</span>
            <div class="sb-example">
              <span>★★★ | | </span>
              <span class="sb-meaning">→ 3 apples</span>
            </div>
            <div class="sb-example">
              <span>★ | ★ | ★</span>
              <span class="sb-meaning">→ 1 of each</span>
            </div>
            <div class="sb-example">
              <span>| ★★ | ★</span>
              <span class="sb-meaning">→ 2 bananas, 1 cherry</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Buy 5 donuts from 4 flavors. How many
            selections?
          </p>
          <div class="formula" data-latex="\binom{4+5-1}{5} = \binom{8}{5} = 56"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Binomial Theorem</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> The expansion of (x + y)ⁿ uses binomial
            coefficients:
          </p>
          <div class="formula" data-latex="(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> When expanding (x+y)ⁿ, each term comes
            from choosing x from some factors and y from the rest. C(n,k) counts
            how many ways to get exactly k y's.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Expand (x + y)⁴:
          </p>
          <div class="formula" data-latex="x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4"></div>
          <p class="visual-caption">Coefficients: 1, 4, 6, 4, 1 (row 4 of Pascal's triangle)</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sum of Binomial Coefficients</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> The sum of all entries in row n of
            Pascal's triangle:
          </p>
          <div class="formula" data-latex="\sum_{k=0}^{n} \binom{n}{k} = 2^n"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Each of n items is either in or out of a
            subset — 2 choices per item gives 2ⁿ total subsets. This equals the
            sum of subsets of each size.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Verify for n = 4:
          </p>
          <div class="formula" data-latex="1 + 4 + 6 + 4 + 1 = 16 = 2^4"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Vandermonde's Identity</h2>
        <div class="definition">
          <p>
            <strong>Identity:</strong> Choosing r items from two groups of sizes
            m and n:
          </p>
          <div class="formula" data-latex="\binom{m+n}{r} = \sum_{k=0}^{r} \binom{m}{k} \binom{n}{r-k}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> To choose r from m+n people, pick k from
            the first group and r−k from the second. Sum over all valid k values.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Choose 3 from 5 men and 4 women:
          </p>
          <div class="formula" data-latex="\binom{9}{3} = \binom{5}{0}\binom{4}{3} + \binom{5}{1}\binom{4}{2} + \binom{5}{2}\binom{4}{1} + \binom{5}{3}\binom{4}{0}"></div>
          <div class="formula" data-latex="84 = 4 + 30 + 40 + 10 = 84 \checkmark"></div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Combination Formulas Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Basic</h3>
            <div class="formula" data-latex="\binom{n}{r} = \frac{n!}{r!(n-r)!}"></div>
          </div>
          <div class="property">
            <h3>Symmetry</h3>
            <div class="formula" data-latex="\binom{n}{r} = \binom{n}{n-r}"></div>
          </div>
          <div class="property">
            <h3>Pascal's Rule</h3>
            <div class="formula" data-latex="\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}"></div>
          </div>
          <div class="property">
            <h3>With Repetition</h3>
            <div class="formula" data-latex="\binom{n+r-1}{r}"></div>
          </div>
        </div>
      </section>
    </>
  );
}

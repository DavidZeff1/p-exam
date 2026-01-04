export function CombinedProblems() {
  return (
    <>
      <h1 class="page-title">E.3 Combined Problems</h1>
      <p class="page-subtitle">Addition & Multiplication Rules</p>

      <section class="intro">
        <p>
          Real probability problems often require both addition and multiplication
          rules working together. The key is recognizing when to add (OR) and when
          to multiply (AND), and breaking complex problems into manageable pieces.
        </p>
      </section>

      <section class="definition-block">
        <h2>Decision Framework</h2>
        <div class="definition">
          <p>
            <strong>Key question:</strong> What operation connects the events?
          </p>
        </div>
        <div class="visual">
          <div class="decision-framework">
            <div class="df-option">
              <span class="df-keyword">OR / Either / At least one</span>
              <span class="df-arrow">→</span>
              <span class="df-action">ADDITION RULE</span>
              <span class="df-formula">P(A ∪ B)</span>
            </div>
            <div class="df-option">
              <span class="df-keyword">AND / Both / All</span>
              <span class="df-arrow">→</span>
              <span class="df-action">MULTIPLICATION RULE</span>
              <span class="df-formula">P(A ∩ B)</span>
            </div>
            <div class="df-option">
              <span class="df-keyword">Given / If / Knowing</span>
              <span class="df-arrow">→</span>
              <span class="df-action">CONDITIONAL PROBABILITY</span>
              <span class="df-formula">P(A | B)</span>
            </div>
            <div class="df-option">
              <span class="df-keyword">NOT / Complement / At least one</span>
              <span class="df-arrow">→</span>
              <span class="df-action">COMPLEMENT RULE</span>
              <span class="df-formula">1 − P(A')</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Pattern: OR of ANDs</h2>
        <div class="definition">
          <p>
            <strong>Structure:</strong> "Event X happens" where X can occur through
            multiple mutually exclusive paths.
          </p>
          <div class="formula" data-latex="P(X) = P(\text{path 1}) + P(\text{path 2}) + \cdots"></div>
          <p>Each path is an AND (multiplication), paths are combined with OR (addition).</p>
        </div>
        <div class="visual">
          <div class="or-of-ands">
            <div class="ooa-path">
              <span class="ooa-label">Path 1</span>
              <div class="ooa-events">
                <span>A₁</span>
                <span class="ooa-and">∩</span>
                <span>B₁</span>
              </div>
            </div>
            <div class="ooa-or">∪</div>
            <div class="ooa-path">
              <span class="ooa-label">Path 2</span>
              <div class="ooa-events">
                <span>A₂</span>
                <span class="ooa-and">∩</span>
                <span>B₂</span>
              </div>
            </div>
            <div class="ooa-or">∪</div>
            <div class="ooa-path">
              <span class="ooa-label">Path 3</span>
              <div class="ooa-events">
                <span>A₃</span>
                <span class="ooa-and">∩</span>
                <span>B₃</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Bag has 3 red, 2 blue balls. Draw 2 without
            replacement. P(one of each color)?
          </p>
          <p>Path 1: Red first, then Blue</p>
          <p>Path 2: Blue first, then Red</p>
          <div class="formula" data-latex="P(\text{one each}) = P(R_1)P(B_2|R_1) + P(B_1)P(R_2|B_1)"></div>
          <div class="formula" data-latex="= \frac{3}{5} \times \frac{2}{4} + \frac{2}{5} \times \frac{3}{4} = \frac{6}{20} + \frac{6}{20} = \frac{12}{20} = \frac{3}{5}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Pattern: At Least One (Complement)</h2>
        <div class="definition">
          <p>
            <strong>Structure:</strong> "At least one success" is easier via complement.
          </p>
          <div class="formula" data-latex="P(\text{at least one}) = 1 - P(\text{none})"></div>
          <p>P(none) often uses multiplication (all must fail).</p>
        </div>
        <div class="visual">
          <div class="at-least-one-visual">
            <div class="alo-wanted">
              <span class="alo-label">Want: At least 1 success</span>
              <div class="alo-cases">≥1 success out of n trials</div>
            </div>
            <div class="alo-equals">=</div>
            <div class="alo-one">1</div>
            <div class="alo-minus">−</div>
            <div class="alo-complement">
              <span class="alo-label">Easier: All failures</span>
              <div class="alo-cases">(1−p)ⁿ</div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die 5 times. P(at least one 6)?
          </p>
          <div class="formula" data-latex="P(\geq 1 \text{ six}) = 1 - P(\text{no sixes}) = 1 - \left(\frac{5}{6}\right)^5 = 1 - 0.402 = 0.598"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Pattern: Exactly k Successes</h2>
        <div class="definition">
          <p>
            <strong>Structure:</strong> Use binomial when counting specific number of successes.
          </p>
          <div class="formula" data-latex="P(\text{exactly } k) = \binom{n}{k} p^k (1-p)^{n-k}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Flip coin 4 times. P(exactly 2 heads)?
          </p>
          <div class="formula" data-latex="P(X=2) = \binom{4}{2} \left(\frac{1}{2}\right)^2 \left(\frac{1}{2}\right)^2 = 6 \times \frac{1}{16} = \frac{6}{16} = \frac{3}{8}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Pattern: Conditional + Total Probability</h2>
        <div class="definition">
          <p>
            <strong>Structure:</strong> When the probability depends on an unknown condition,
            partition by that condition.
          </p>
          <div class="formula" data-latex="P(A) = P(A|B)P(B) + P(A|B')P(B')"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Box 1 has 4 red, 6 blue. Box 2 has 7 red, 3 blue.
            Pick a random box (50-50), then draw a ball. P(red)?
          </p>
          <div class="formula" data-latex="P(R) = P(R|B_1)P(B_1) + P(R|B_2)P(B_2)"></div>
          <div class="formula" data-latex="= \frac{4}{10} \times \frac{1}{2} + \frac{7}{10} \times \frac{1}{2} = \frac{4}{20} + \frac{7}{20} = \frac{11}{20}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example: Cards</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> Draw 2 cards without replacement. P(at least one ace)?
          </p>
          <p><strong>Method 1: Complement</strong></p>
          <div class="formula" data-latex="P(\geq 1 \text{ ace}) = 1 - P(\text{no aces})"></div>
          <div class="formula" data-latex="= 1 - \frac{48}{52} \times \frac{47}{51} = 1 - \frac{2256}{2652} = \frac{396}{2652} = \frac{33}{221}"></div>
          <p><strong>Method 2: Direct (OR of ANDs)</strong></p>
          <p>P(ace 1st only) + P(ace 2nd only) + P(both aces)</p>
          <div class="formula" data-latex="= \frac{4}{52} \times \frac{48}{51} + \frac{48}{52} \times \frac{4}{51} + \frac{4}{52} \times \frac{3}{51}"></div>
          <div class="formula" data-latex="= \frac{192 + 192 + 12}{2652} = \frac{396}{2652} = \frac{33}{221}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example: Dice</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> Roll 2 dice. P(sum is 7 OR at least one die shows 6)?
          </p>
          <p>Let A = "sum is 7", B = "at least one 6"</p>
          <p>A = {'{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}'} → P(A) = 6/36</p>
          <p>B: Count pairs with at least one 6 → P(B) = 11/36</p>
          <p>A ∩ B = {'{(1,6), (6,1)}'} → P(A ∩ B) = 2/36</p>
          <div class="formula" data-latex="P(A \cup B) = \frac{6}{36} + \frac{11}{36} - \frac{2}{36} = \frac{15}{36} = \frac{5}{12}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example: System Reliability</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> A system has two parallel components (either works = system works).
            Each component has two parts in series (both must work). Part reliabilities:
            Component 1: 0.9 and 0.8. Component 2: 0.95 and 0.85. P(system works)?
          </p>
          <p><strong>Step 1:</strong> Component reliabilities (series = multiply)</p>
          <div class="formula" data-latex="P(C_1) = 0.9 \times 0.8 = 0.72"></div>
          <div class="formula" data-latex="P(C_2) = 0.95 \times 0.85 = 0.8075"></div>
          <p><strong>Step 2:</strong> System reliability (parallel = at least one)</p>
          <div class="formula" data-latex="P(\text{system}) = 1 - P(\text{both fail}) = 1 - (1-0.72)(1-0.8075)"></div>
          <div class="formula" data-latex="= 1 - (0.28)(0.1925) = 1 - 0.0539 = 0.9461"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Worked Example: Genetics</h2>
        <div class="example">
          <p>
            <strong>Problem:</strong> Both parents carry a recessive gene (Aa). 
            P(at least one of their 3 children shows the trait)?
          </p>
          <p>P(child shows trait) = P(aa) = 1/4</p>
          <p>P(child doesn't show trait) = 3/4</p>
          <div class="formula" data-latex="P(\geq 1 \text{ affected}) = 1 - P(\text{none affected})"></div>
          <div class="formula" data-latex="= 1 - \left(\frac{3}{4}\right)^3 = 1 - \frac{27}{64} = \frac{37}{64} \approx 0.578"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Problem-Solving Checklist</h2>
        <div class="checklist">
          <div class="check-item">
            <span class="check-num">1</span>
            <span class="check-text">Identify what you're finding: P(A), P(A∪B), P(A∩B)?</span>
          </div>
          <div class="check-item">
            <span class="check-num">2</span>
            <span class="check-text">Check independence: Are events independent or dependent?</span>
          </div>
          <div class="check-item">
            <span class="check-num">3</span>
            <span class="check-text">Check mutual exclusivity: Can events occur together?</span>
          </div>
          <div class="check-item">
            <span class="check-num">4</span>
            <span class="check-text">Consider complement: Would P(not A) be easier?</span>
          </div>
          <div class="check-item">
            <span class="check-num">5</span>
            <span class="check-text">Break into paths: Can you partition into disjoint cases?</span>
          </div>
          <div class="check-item">
            <span class="check-num">6</span>
            <span class="check-text">Draw a tree: For sequential events, visualize the branches.</span>
          </div>
          <div class="check-item">
            <span class="check-num">7</span>
            <span class="check-text">Verify: Do probabilities sum correctly? Is answer in [0,1]?</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Combined Formulas</h2>
        <div class="formula-grid">
          <div class="fg-item">
            <span class="fg-name">At least one (indep.)</span>
            <div class="formula" data-latex="1 - (1-p)^n"></div>
          </div>
          <div class="fg-item">
            <span class="fg-name">Exactly k of n (indep.)</span>
            <div class="formula" data-latex="\binom{n}{k}p^k(1-p)^{n-k}"></div>
          </div>
          <div class="fg-item">
            <span class="fg-name">One of each (2 draws)</span>
            <div class="formula" data-latex="2 \times P(A_1)P(B_2|A_1)"></div>
          </div>
          <div class="fg-item">
            <span class="fg-name">Series system</span>
            <div class="formula" data-latex="\prod P(A_i)"></div>
          </div>
          <div class="fg-item">
            <span class="fg-name">Parallel system</span>
            <div class="formula" data-latex="1 - \prod(1-P(A_i))"></div>
          </div>
          <div class="fg-item">
            <span class="fg-name">Total probability</span>
            <div class="formula" data-latex="\sum P(A|B_i)P(B_i)"></div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Quick Reference</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>OR (Union)</h3>
            <div class="formula" data-latex="P(A) + P(B) - P(A \cap B)"></div>
          </div>
          <div class="property">
            <h3>AND (Intersection)</h3>
            <div class="formula" data-latex="P(A) \times P(B|A)"></div>
          </div>
          <div class="property">
            <h3>Complement</h3>
            <div class="formula" data-latex="1 - P(A')"></div>
          </div>
          <div class="property">
            <h3>Partition</h3>
            <div class="formula" data-latex="\sum P(A|B_i)P(B_i)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

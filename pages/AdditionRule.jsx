export function AdditionRule() {
  return (
    <>
      <h1 class="page-title">E.1 Addition Rule</h1>
      <p class="page-subtitle">Addition & Multiplication Rules</p>

      <section class="intro">
        <p>
          The addition rule calculates the probability that at least one of
          several events occurs. The formula depends on whether events can
          overlap — if they can, we must correct for double-counting.
        </p>
      </section>

      <section class="definition-block">
        <h2>General Addition Rule (Two Events)</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For any two events A and B:
          </p>
          <div class="formula" data-latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Adding P(A) and P(B) counts the overlap
            twice. Subtract P(A ∩ B) once to correct. Think of it as removing
            the duplicate.
          </p>
        </div>
        <div class="visual">
          <div class="addition-rule-visual">
            <div class="arv-equation">
              <div class="arv-term">
                <div class="arv-venn a-only">
                  <div class="arv-circle a full"></div>
                  <div class="arv-circle b empty"></div>
                </div>
                <span>P(A)</span>
              </div>
              <div class="arv-op">+</div>
              <div class="arv-term">
                <div class="arv-venn b-only">
                  <div class="arv-circle a empty"></div>
                  <div class="arv-circle b full"></div>
                </div>
                <span>P(B)</span>
              </div>
              <div class="arv-op">−</div>
              <div class="arv-term">
                <div class="arv-venn intersection">
                  <div class="arv-circle a empty"></div>
                  <div class="arv-circle b empty"></div>
                  <div class="arv-overlap"></div>
                </div>
                <span>P(A∩B)</span>
              </div>
              <div class="arv-op">=</div>
              <div class="arv-term">
                <div class="arv-venn union">
                  <div class="arv-circle a full"></div>
                  <div class="arv-circle b full"></div>
                </div>
                <span>P(A∪B)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw a card. P(red OR face card)?
          </p>
          <p>P(red) = 26/52, P(face) = 12/52, P(red AND face) = 6/52</p>
          <div class="formula" data-latex="P(R \cup F) = \frac{26}{52} + \frac{12}{52} - \frac{6}{52} = \frac{32}{52} = \frac{8}{13}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Special Case: Mutually Exclusive Events</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> When A and B cannot both occur (A ∩ B = ∅):
          </p>
          <div class="formula" data-latex="P(A \cup B) = P(A) + P(B)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> No overlap means no double-counting.
            Just add the probabilities directly.
          </p>
        </div>
        <div class="visual">
          <div class="me-addition-visual">
            <div class="mea-circle a">P(A)</div>
            <div class="mea-plus">+</div>
            <div class="mea-circle b">P(B)</div>
            <div class="mea-equals">=</div>
            <div class="mea-result">P(A∪B)</div>
          </div>
          <p class="visual-caption">No overlap → simple addition</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die. P(rolling 1 OR rolling 6)?
          </p>
          <div class="formula" data-latex="P(1 \cup 6) = P(1) + P(6) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Addition Rule for Three Events</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For three events A, B, and C:
          </p>
          <div class="formula" data-latex="P(A \cup B \cup C) = P(A) + P(B) + P(C)"></div>
          <div class="formula" data-latex="- P(A \cap B) - P(A \cap C) - P(B \cap C)"></div>
          <div class="formula" data-latex="+ P(A \cap B \cap C)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Add individuals, subtract pairs (overcounted),
            add back triple (subtracted too many times). Inclusion-exclusion alternates
            signs.
          </p>
        </div>
        <div class="visual">
          <div class="three-event-visual">
            <div class="tev-venn">
              <div class="tev-circle a">A</div>
              <div class="tev-circle b">B</div>
              <div class="tev-circle c">C</div>
            </div>
            <div class="tev-legend">
              <span class="tev-item add">+ Singles</span>
              <span class="tev-item sub">− Pairs</span>
              <span class="tev-item add">+ Triple</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(A) = 0.4, P(B) = 0.3, P(C) = 0.2,
            P(A∩B) = 0.1, P(A∩C) = 0.05, P(B∩C) = 0.05, P(A∩B∩C) = 0.02
          </p>
          <div class="formula" data-latex="P(A \cup B \cup C) = 0.4 + 0.3 + 0.2 - 0.1 - 0.05 - 0.05 + 0.02 = 0.72"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Inclusion-Exclusion (General Form)</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For n events:
          </p>
          <div class="formula" data-latex="P\left(\bigcup_{i=1}^{n} A_i\right) = \sum_{i} P(A_i) - \sum_{i < j} P(A_i \cap A_j) + \sum_{i < j < k} P(A_i \cap A_j \cap A_k) - \cdots"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Alternate adding and subtracting:
            singles, pairs, triples, quadruples, etc. Each term corrects the
            overcounting from the previous.
          </p>
        </div>
        <div class="visual">
          <div class="ie-pattern">
            <div class="ie-step">
              <span class="ie-sign">+</span>
              <span class="ie-desc">Add all singles</span>
            </div>
            <div class="ie-step">
              <span class="ie-sign">−</span>
              <span class="ie-desc">Subtract all pairs</span>
            </div>
            <div class="ie-step">
              <span class="ie-sign">+</span>
              <span class="ie-desc">Add all triples</span>
            </div>
            <div class="ie-step">
              <span class="ie-sign">−</span>
              <span class="ie-desc">Subtract all quadruples</span>
            </div>
            <div class="ie-step">
              <span class="ie-sign">⋯</span>
              <span class="ie-desc">Continue alternating</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Complement Approach</h2>
        <div class="definition">
          <p>
            <strong>Alternative:</strong> Sometimes it's easier to compute:
          </p>
          <div class="formula" data-latex="P(A \cup B) = 1 - P(A' \cap B') = 1 - P(\text{neither})"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> "At least one of A or B" is the opposite
            of "neither A nor B." When computing "neither" is simpler, use the
            complement.
          </p>
        </div>
        <div class="visual">
          <div class="complement-approach">
            <div class="ca-box union">
              <span class="ca-label">P(A ∪ B)</span>
              <span class="ca-desc">"At least one"</span>
            </div>
            <div class="ca-equals">=</div>
            <div class="ca-box one">
              <span class="ca-label">1</span>
            </div>
            <div class="ca-minus">−</div>
            <div class="ca-box neither">
              <span class="ca-label">P(A′ ∩ B′)</span>
              <span class="ca-desc">"Neither"</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(at least one head in 3 flips)?
          </p>
          <div class="formula" data-latex="P(\text{at least one H}) = 1 - P(\text{no heads}) = 1 - \left(\frac{1}{2}\right)^3 = 1 - \frac{1}{8} = \frac{7}{8}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Boole's Inequality (Union Bound)</h2>
        <div class="definition">
          <p>
            <strong>Inequality:</strong> For any events (not necessarily disjoint):
          </p>
          <div class="formula" data-latex="P\left(\bigcup_{i=1}^{n} A_i\right) \leq \sum_{i=1}^{n} P(A_i)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Adding probabilities overcounts overlaps,
            so the sum is an upper bound. Useful when exact calculation is hard
            but you need a bound.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(A) = 0.3, P(B) = 0.4, P(C) = 0.2
          </p>
          <div class="formula" data-latex="P(A \cup B \cup C) \leq 0.3 + 0.4 + 0.2 = 0.9"></div>
          <p>The actual probability could be anywhere from max(0.4) to 0.9.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Mistakes</h2>
        <div class="mistakes-grid">
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Forgetting to subtract overlap</span>
            <p>P(A ∪ B) ≠ P(A) + P(B) unless mutually exclusive</p>
          </div>
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Assuming mutual exclusivity</span>
            <p>Don't assume events can't overlap — verify!</p>
          </div>
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Confusing ∪ and ∩</span>
            <p>∪ is "or" (addition rule), ∩ is "and" (multiplication rule)</p>
          </div>
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Wrong sign in inclusion-exclusion</span>
            <p>Remember: +singles, −pairs, +triples, −quads, ...</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>When to Use Addition Rule</h2>
        <div class="when-grid">
          <div class="when-item">
            <span class="when-keyword">OR</span>
            <p>"A or B happens"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">At least one</span>
            <p>"At least one event occurs"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Either</span>
            <p>"Either A or B"</p>
          </div>
          <div class="when-item">
            <span class="when-keyword">Union</span>
            <p>"A ∪ B"</p>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Addition Rule Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>General (2 events)</h3>
            <div class="formula" data-latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)"></div>
          </div>
          <div class="property">
            <h3>Mutually Exclusive</h3>
            <div class="formula" data-latex="P(A \cup B) = P(A) + P(B)"></div>
          </div>
          <div class="property">
            <h3>Complement Form</h3>
            <div class="formula" data-latex="P(A \cup B) = 1 - P(A' \cap B')"></div>
          </div>
          <div class="property">
            <h3>Union Bound</h3>
            <div class="formula" data-latex="P(\cup A_i) \leq \sum P(A_i)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

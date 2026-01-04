export function ConditionalProbability() {
  return (
    <>
      <h1 class="page-title">F.1 Conditional Probability</h1>
      <p class="page-subtitle">Conditional Probability</p>

      <section class="intro">
        <p>
          Conditional probability measures the probability of an event given that
          another event has occurred. It's how we update our beliefs when we
          receive new information.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> The conditional probability of A given B is:
          </p>
          <div class="formula" data-latex="P(A|B) = \frac{P(A \cap B)}{P(B)} \quad \text{where } P(B) > 0"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Once B has occurred, B becomes our new
            "universe." We're asking: of all the ways B can happen, what fraction
            also has A happening?
          </p>
        </div>
        <div class="visual">
          <div class="cond-prob-visual">
            <div class="cpv-full">
              <span class="cpv-label">Full sample space S</span>
              <div class="cpv-venn">
                <div class="cpv-circle a">A</div>
                <div class="cpv-circle b">B</div>
                <div class="cpv-intersection"></div>
              </div>
            </div>
            <div class="cpv-arrow">→ Given B →</div>
            <div class="cpv-reduced">
              <span class="cpv-label">New universe: B</span>
              <div class="cpv-b-only">
                <div class="cpv-b-circle">
                  <div class="cpv-a-in-b">A∩B</div>
                  <span class="cpv-b-label">B</span>
                </div>
              </div>
            </div>
          </div>
          <p class="visual-caption">P(A|B) = (A∩B portion) / (all of B)</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die. Given the roll is even, P(greater than 3)?
          </p>
          <p>B = {'{2, 4, 6}'} (even), A = {'{4, 5, 6}'} (greater than 3)</p>
          <p>A ∩ B = {'{4, 6}'}</p>
          <div class="formula" data-latex="P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{2/6}{3/6} = \frac{2}{3}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Multiplication Rule (Rearranged)</h2>
        <div class="definition">
          <p>
            <strong>From the definition:</strong> We can solve for the intersection:
          </p>
          <div class="formula" data-latex="P(A \cap B) = P(A|B) \times P(B) = P(B|A) \times P(A)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> "A and B" = "B happens" × "A happens given B already did."
            This is the multiplication rule from conditional probability's perspective.
          </p>
        </div>
        <div class="visual">
          <div class="mult-rearrange">
            <div class="mr-box">
              <span class="mr-top">P(A ∩ B)</span>
              <span class="mr-line"></span>
              <span class="mr-bottom">P(B)</span>
            </div>
            <div class="mr-equals">= P(A|B)</div>
            <div class="mr-rearrange">⟹</div>
            <div class="mr-result">P(A ∩ B) = P(A|B) × P(B)</div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Independence Revisited</h2>
        <div class="definition">
          <p>
            <strong>Connection:</strong> A and B are independent if and only if:
          </p>
          <div class="formula" data-latex="P(A|B) = P(A) \quad \text{and} \quad P(B|A) = P(B)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Independence means conditioning doesn't change
            anything. Knowing B happened doesn't affect your belief about A.
          </p>
        </div>
        <div class="visual">
          <div class="ind-vs-dep">
            <div class="ivd-case">
              <span class="ivd-title">Independent</span>
              <div class="ivd-eq">P(A|B) = P(A)</div>
              <span class="ivd-meaning">B gives no information about A</span>
            </div>
            <div class="ivd-vs">vs</div>
            <div class="ivd-case dep">
              <span class="ivd-title">Dependent</span>
              <div class="ivd-eq">P(A|B) ≠ P(A)</div>
              <span class="ivd-meaning">B changes probability of A</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Chain Rule for Conditional Probability</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For multiple events:
          </p>
          <div class="formula" data-latex="P(A \cap B \cap C) = P(A) \times P(B|A) \times P(C|A \cap B)"></div>
          <p>General form:</p>
          <div class="formula" data-latex="P(A_1 \cap \cdots \cap A_n) = P(A_1) \prod_{i=2}^{n} P(A_i | A_1 \cap \cdots \cap A_{i-1})"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Build up the probability step by step,
            conditioning each new event on everything that came before.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw 3 cards without replacement. P(all spades)?
          </p>
          <div class="formula" data-latex="P(S_1 \cap S_2 \cap S_3) = \frac{13}{52} \times \frac{12}{51} \times \frac{11}{50} = \frac{1716}{132600} \approx 0.013"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Probability Tables</h2>
        <div class="definition">
          <p>
            <strong>Method:</strong> Use two-way tables to organize joint and marginal
            probabilities, then compute conditionals.
          </p>
        </div>
        <div class="visual">
          <div class="prob-table">
            <div class="pt-row header">
              <span></span>
              <span>B</span>
              <span>B'</span>
              <span>Total</span>
            </div>
            <div class="pt-row">
              <span class="pt-label">A</span>
              <span>P(A∩B)</span>
              <span>P(A∩B')</span>
              <span class="pt-marginal">P(A)</span>
            </div>
            <div class="pt-row">
              <span class="pt-label">A'</span>
              <span>P(A'∩B)</span>
              <span>P(A'∩B')</span>
              <span class="pt-marginal">P(A')</span>
            </div>
            <div class="pt-row footer">
              <span class="pt-label">Total</span>
              <span class="pt-marginal">P(B)</span>
              <span class="pt-marginal">P(B')</span>
              <span class="pt-total">1</span>
            </div>
          </div>
          <p class="visual-caption">P(A|B) = P(A∩B) / P(B) — cell divided by column total</p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Survey data shows:
          </p>
          <div class="prob-table small">
            <div class="pt-row header">
              <span></span>
              <span>Smoker</span>
              <span>Non-smoker</span>
              <span>Total</span>
            </div>
            <div class="pt-row">
              <span class="pt-label">Disease</span>
              <span>0.12</span>
              <span>0.08</span>
              <span class="pt-marginal">0.20</span>
            </div>
            <div class="pt-row">
              <span class="pt-label">No Disease</span>
              <span>0.18</span>
              <span>0.62</span>
              <span class="pt-marginal">0.80</span>
            </div>
            <div class="pt-row footer">
              <span class="pt-label">Total</span>
              <span class="pt-marginal">0.30</span>
              <span class="pt-marginal">0.70</span>
              <span class="pt-total">1</span>
            </div>
          </div>
          <div class="formula" data-latex="P(\text{Disease}|\text{Smoker}) = \frac{0.12}{0.30} = 0.40 = 40\%"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Conditional Probability Mistakes</h2>
        <div class="mistakes-grid">
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Confusing P(A|B) with P(B|A)</span>
            <p>P(disease|positive test) ≠ P(positive test|disease)</p>
          </div>
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Ignoring base rates</span>
            <p>A 99% accurate test can still give mostly false positives for rare diseases</p>
          </div>
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Assuming P(A|B) = P(A)</span>
            <p>Only true for independent events — verify first!</p>
          </div>
          <div class="mistake">
            <span class="mistake-icon">❌</span>
            <span class="mistake-title">Forgetting P(B) > 0</span>
            <p>Can't condition on impossible events</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Prosecutor's Fallacy</h2>
        <div class="definition">
          <p>
            <strong>Fallacy:</strong> Confusing P(evidence|innocent) with P(innocent|evidence).
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Example:</strong> "The probability of this DNA match if innocent is
            1 in a million" does NOT mean "The probability of innocence is 1 in a million."
            In a city of 10 million, about 10 innocent people would match!
          </p>
        </div>
        <div class="visual">
          <div class="fallacy-visual">
            <div class="fv-wrong">
              <span class="fv-label">WRONG</span>
              <span class="fv-eq">P(innocent|match) = P(match|innocent)</span>
            </div>
            <div class="fv-right">
              <span class="fv-label">RIGHT</span>
              <span class="fv-eq">Use Bayes' theorem with base rates</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Probability Properties</h2>
        <div class="definition">
          <p>
            <strong>P(·|B) is a valid probability measure:</strong>
          </p>
          <ul class="cond-properties">
            <li>P(A|B) ≥ 0 for all A</li>
            <li>P(B|B) = 1</li>
            <li>P(S|B) = 1</li>
            <li>If A₁, A₂, ... are disjoint: P(∪Aᵢ|B) = ΣP(Aᵢ|B)</li>
          </ul>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Conditioning on B creates a new probability
            space where B is certain. All the axioms still hold within this new space.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sequential Conditioning</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> Conditioning can be done in stages:
          </p>
          <div class="formula" data-latex="P(A|B \cap C) = \frac{P(A \cap B \cap C)}{P(B \cap C)}"></div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Given a card is red AND a face card, P(it's a king)?
          </p>
          <p>Red face cards: {'{K♥, Q♥, J♥, K♦, Q♦, J♦}'} — 6 cards</p>
          <p>Red kings: {'{K♥, K♦}'} — 2 cards</p>
          <div class="formula" data-latex="P(K|R \cap F) = \frac{2}{6} = \frac{1}{3}"></div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Conditional Probability Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Definition</h3>
            <div class="formula" data-latex="P(A|B) = \frac{P(A \cap B)}{P(B)}"></div>
          </div>
          <div class="property">
            <h3>Multiplication</h3>
            <div class="formula" data-latex="P(A \cap B) = P(A|B)P(B)"></div>
          </div>
          <div class="property">
            <h3>Independence</h3>
            <div class="formula" data-latex="P(A|B) = P(A)"></div>
          </div>
          <div class="property">
            <h3>Chain Rule</h3>
            <div class="formula" data-latex="P(A)P(B|A)P(C|A \cap B)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

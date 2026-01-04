export function IndependentEvents() {
  return (
    <>
      <h1 class="page-title">C.1 Independent Events</h1>
      <p class="page-subtitle">Independence</p>

      <section class="intro">
        <p>
          Two events are independent if knowing one occurred gives no information
          about whether the other occurred. Independence is a fundamental concept
          that simplifies probability calculations dramatically.
        </p>
      </section>

      <section class="definition-block">
        <h2>Definition of Independence</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> Events A and B are independent if and
            only if:
          </p>
          <div class="formula" data-latex="P(A \cap B) = P(A) \times P(B)"></div>
          <p>Equivalently, if P(B) &gt; 0:</p>
          <div class="formula" data-latex="P(A | B) = P(A)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Learning that B happened doesn't change
            your belief about A. Flipping heads on coin 1 tells you nothing about
            coin 2 — they're independent.
          </p>
        </div>
        <div class="visual">
          <div class="independence-visual">
            <div class="ind-scenario">
              <span class="ind-label">Independent</span>
              <div class="ind-coins">
                <span class="coin">🪙</span>
                <span class="coin-gap"></span>
                <span class="coin">🪙</span>
              </div>
              <span class="ind-desc">Coin 1 doesn't affect Coin 2</span>
            </div>
            <div class="ind-vs">vs</div>
            <div class="ind-scenario dependent">
              <span class="ind-label">Dependent</span>
              <div class="ind-coins">
                <span class="coin">🎴</span>
                <span class="coin-arrow">→</span>
                <span class="coin">🎴</span>
              </div>
              <span class="ind-desc">Card 1 affects Card 2 options</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Testing for Independence</h2>
        <div class="definition">
          <p>
            <strong>Method:</strong> Check if the multiplication rule holds:
          </p>
          <div class="formula" data-latex="P(A \cap B) \stackrel{?}{=} P(A) \times P(B)"></div>
          <p>If equal → independent. If not equal → dependent.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Independence is a precise mathematical
            condition, not a vague notion. You must verify it with numbers, not
            assume it from context.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a fair die. Let A = {'{even}'} and B = {'{greater than 3}'}.
          </p>
          <p>P(A) = 3/6 = 1/2, P(B) = 3/6 = 1/2</p>
          <p>A ∩ B = {'{4, 6}'}, so P(A ∩ B) = 2/6 = 1/3</p>
          <p>P(A) × P(B) = 1/2 × 1/2 = 1/4 ≠ 1/3</p>
          <div class="formula" data-latex="\text{Not independent!}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Independence vs Mutual Exclusivity</h2>
        <div class="definition">
          <p>
            <strong>Key distinction:</strong> These are opposite concepts!
          </p>
          <div class="compare-table">
            <div class="cmp-row header">
              <span>Property</span>
              <span>Independent</span>
              <span>Mutually Exclusive</span>
            </div>
            <div class="cmp-row">
              <span>Meaning</span>
              <span>No influence</span>
              <span>Can't both happen</span>
            </div>
            <div class="cmp-row">
              <span>P(A ∩ B)</span>
              <span>= P(A)P(B)</span>
              <span>= 0</span>
            </div>
            <div class="cmp-row">
              <span>Can coexist?</span>
              <span>Yes</span>
              <span>No</span>
            </div>
          </div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If A and B are mutually exclusive with
            nonzero probabilities, they CAN'T be independent. Knowing A happened
            tells you B definitely didn't — that's information!
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Rolling a 1 and rolling a 6 on one die are
            mutually exclusive (can't happen together) but NOT independent
            (knowing you rolled 1 guarantees you didn't roll 6).
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Multiplication Rule for Independent Events</h2>
        <div class="definition">
          <p>
            <strong>Rule:</strong> For independent events, "and" means multiply:
          </p>
          <div class="formula" data-latex="P(A \cap B) = P(A) \times P(B)"></div>
          <p>For n independent events:</p>
          <div class="formula" data-latex="P(A_1 \cap A_2 \cap \cdots \cap A_n) = P(A_1) \times P(A_2) \times \cdots \times P(A_n)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Each event's probability "survives"
            independently. Getting heads AND heads AND heads = 1/2 × 1/2 × 1/2.
          </p>
        </div>
        <div class="visual">
          <div class="mult-chain">
            <div class="mult-event">
              <span class="mult-label">P(A)</span>
              <span class="mult-val">0.3</span>
            </div>
            <div class="mult-times">×</div>
            <div class="mult-event">
              <span class="mult-label">P(B)</span>
              <span class="mult-val">0.5</span>
            </div>
            <div class="mult-times">×</div>
            <div class="mult-event">
              <span class="mult-label">P(C)</span>
              <span class="mult-val">0.8</span>
            </div>
            <div class="mult-equals">=</div>
            <div class="mult-result">
              <span class="mult-label">P(A∩B∩C)</span>
              <span class="mult-val">0.12</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Flip 3 fair coins. P(all heads)?
          </p>
          <div class="formula" data-latex="P(HHH) = \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Complement of Independent Events</h2>
        <div class="definition">
          <p>
            <strong>Property:</strong> If A and B are independent, so are:
          </p>
          <ul class="property-list">
            <li>A and B′</li>
            <li>A′ and B</li>
            <li>A′ and B′</li>
          </ul>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If knowing B tells you nothing about A,
            then knowing B didn't happen also tells you nothing about A.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> P(A) = 0.3, P(B) = 0.4, independent. Find P(A′ ∩ B′):
          </p>
          <div class="formula" data-latex="P(A' \cap B') = P(A') \times P(B') = 0.7 \times 0.6 = 0.42"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>"At Least One" Problems</h2>
        <div class="definition">
          <p>
            <strong>Strategy:</strong> Use the complement rule:
          </p>
          <div class="formula" data-latex="P(\text{at least one}) = 1 - P(\text{none})"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> "At least one success" is the opposite of
            "all failures." Often much easier to compute the failure case.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die 4 times. P(at least one 6)?
          </p>
          <div class="formula" data-latex="P(\text{at least one 6}) = 1 - P(\text{no 6s}) = 1 - \left(\frac{5}{6}\right)^4"></div>
          <div class="formula" data-latex="= 1 - \frac{625}{1296} = \frac{671}{1296} \approx 0.518"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Mutual Independence (3+ Events)</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> Events A, B, C are mutually independent if:
          </p>
          <div class="formula" data-latex="P(A \cap B) = P(A)P(B)"></div>
          <div class="formula" data-latex="P(A \cap C) = P(A)P(C)"></div>
          <div class="formula" data-latex="P(B \cap C) = P(B)P(C)"></div>
          <div class="formula" data-latex="P(A \cap B \cap C) = P(A)P(B)P(C)"></div>
          <p>All four conditions must hold!</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Pairwise independence isn't enough. You
            need every subset to satisfy the multiplication rule, including the
            triple intersection.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Counterexample:</strong> It's possible for events to be pairwise
            independent but NOT mutually independent. All pairs multiply correctly,
            but the triple product fails.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Conditional Independence</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> A and B are conditionally independent
            given C if:
          </p>
          <div class="formula" data-latex="P(A \cap B | C) = P(A | C) \times P(B | C)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Once you know C happened, A and B become
            independent. The information in C "explains away" any dependence.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Two students' test scores may be correlated
            (both depend on teaching quality). But given the teacher's skill level,
            their individual performances are independent.
          </p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Independence Scenarios</h2>
        <div class="scenarios-grid">
          <div class="scenario">
            <span class="scenario-icon">🎲</span>
            <span class="scenario-title">Dice Rolls</span>
            <span class="scenario-desc">Each roll independent</span>
          </div>
          <div class="scenario">
            <span class="scenario-icon">🪙</span>
            <span class="scenario-title">Coin Flips</span>
            <span class="scenario-desc">Each flip independent</span>
          </div>
          <div class="scenario">
            <span class="scenario-icon">🎰</span>
            <span class="scenario-title">Slot Machine</span>
            <span class="scenario-desc">Each spin independent</span>
          </div>
          <div class="scenario">
            <span class="scenario-icon">�icing</span>
            <span class="scenario-title">Manufacturing</span>
            <span class="scenario-desc">Defects often independent</span>
          </div>
        </div>
        <div class="scenarios-grid">
          <div class="scenario not-ind">
            <span class="scenario-icon">🎴</span>
            <span class="scenario-title">Cards (no replace)</span>
            <span class="scenario-desc">NOT independent</span>
          </div>
          <div class="scenario not-ind">
            <span class="scenario-icon">🧬</span>
            <span class="scenario-title">Genetics</span>
            <span class="scenario-desc">Often NOT independent</span>
          </div>
          <div class="scenario not-ind">
            <span class="scenario-icon">📈</span>
            <span class="scenario-title">Stock Prices</span>
            <span class="scenario-desc">Often NOT independent</span>
          </div>
          <div class="scenario not-ind">
            <span class="scenario-icon">🌧️</span>
            <span class="scenario-title">Weather Days</span>
            <span class="scenario-desc">Often NOT independent</span>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Independence Summary</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Definition</h3>
            <div class="formula" data-latex="P(A \cap B) = P(A)P(B)"></div>
          </div>
          <div class="property">
            <h3>Equivalent</h3>
            <div class="formula" data-latex="P(A|B) = P(A)"></div>
          </div>
          <div class="property">
            <h3>At Least One</h3>
            <div class="formula" data-latex="1 - P(\text{all fail})"></div>
          </div>
          <div class="property">
            <h3>n Events</h3>
            <div class="formula" data-latex="\prod_{i=1}^{n} P(A_i)"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export function AxiomsOfProbability() {
  return (
    <>
      <h1 class="page-title">A.6 Axioms of Probability</h1>
      <p class="page-subtitle">Probability Fundamentals</p>

      <section class="intro">
        <p>
          The axioms of probability, established by Andrey Kolmogorov in 1933,
          are the foundation of all probability theory. Every rule and formula
          in probability can be derived from just three simple axioms.
        </p>
      </section>

      <section class="definition-block">
        <h2>Axiom 1: Non-negativity</h2>
        <div class="definition">
          <p>
            <strong>Axiom:</strong> The probability of any event is
            non-negative.
          </p>
          <div
            class="formula"
            data-latex="P(A) \geq 0 \text{ for all events } A"
          ></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> You can't have negative chance. The
            "worst" an event can be is impossible (probability 0), but it can
            never be "less than impossible."
          </p>
        </div>
        <div class="visual">
          <div class="number-line">
            <div class="line"></div>
            <div class="point forbidden" style={{ left: "10%" }}>
              <span class="label">−0.3</span>
              <span class="mark">✗</span>
            </div>
            <div class="point zero" style={{ left: "30%" }}>
              <span class="label">0</span>
              <span class="mark">✓</span>
            </div>
            <div class="point allowed" style={{ left: "55%" }}>
              <span class="label">0.5</span>
              <span class="mark">✓</span>
            </div>
            <div class="point allowed" style={{ left: "80%" }}>
              <span class="label">1</span>
              <span class="mark">✓</span>
            </div>
            <div class="valid-region"></div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Axiom 2: Normalization</h2>
        <div class="definition">
          <p>
            <strong>Axiom:</strong> The probability of the entire sample space
            is 1.
          </p>
          <div class="formula" data-latex="P(S) = 1"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Something must happen. When you roll a
            die, you're 100% certain to get some outcome. This anchors our
            probability scale — total certainty equals 1.
          </p>
        </div>
        <div class="visual">
          <div class="sample-space-box">
            <span class="label">S = entire sample space</span>
            <span class="prob">P(S) = 1</span>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Axiom 3: Countable Additivity</h2>
        <div class="definition">
          <p>
            <strong>Axiom:</strong> For any countable sequence of mutually
            exclusive events:
          </p>
          <div
            class="formula"
            data-latex="P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)"
          ></div>
          <p>
            where{" "}
            <span
              class="inline-formula"
              data-latex="A_i \cap A_j = \emptyset"
            ></span>{" "}
            for all <span class="inline-formula" data-latex="i \neq j"></span>
          </p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If events can't overlap, you can just
            add their probabilities. The chance of "A or B or C" is the sum of
            each individual chance — but only when they're mutually exclusive.
          </p>
        </div>
        <div class="visual">
          <div class="disjoint-events">
            <div class="event e1">
              <span>A₁</span>
              <span class="prob">0.2</span>
            </div>
            <div class="event e2">
              <span>A₂</span>
              <span class="prob">0.3</span>
            </div>
            <div class="event e3">
              <span>A₃</span>
              <span class="prob">0.1</span>
            </div>
            <div class="equals">=</div>
            <div class="event union">
              <span>A₁∪A₂∪A₃</span>
              <span class="prob">0.6</span>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Derived: Probability of Empty Set</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> The impossible event has probability zero.
          </p>
          <div class="formula" data-latex="P(\emptyset) = 0"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> If nothing is in the event, there's no
            chance of it happening.
          </p>
        </div>
        <div class="proof-sketch">
          <p>
            <strong>Proof sketch:</strong> Since{" "}
            <span
              class="inline-formula"
              data-latex="S = S \cup \emptyset"
            ></span>{" "}
            and they're disjoint:
          </p>
          <div
            class="formula"
            data-latex="P(S) = P(S) + P(\emptyset) \implies P(\emptyset) = 0"
          ></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Derived: Complement Rule</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> The probability of "not A" is one minus
            the probability of A.
          </p>
          <div class="formula" data-latex="P(A') = 1 - P(A)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> A and "not A" together cover everything.
            If there's a 70% chance of rain, there's a 30% chance of no rain.
          </p>
        </div>
        <div class="visual">
          <div class="complement-visual">
            <div class="event-a">
              A<span class="prob">P(A)</span>
            </div>
            <div class="event-a-complement">
              A'<span class="prob">1 − P(A)</span>
            </div>
          </div>
        </div>
        <div class="proof-sketch">
          <p>
            <strong>Proof sketch:</strong>{" "}
            <span class="inline-formula" data-latex="S = A \cup A'"></span> and
            they're disjoint, so:
          </p>
          <div class="formula" data-latex="1 = P(S) = P(A) + P(A')"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Derived: Addition Rule</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> For any two events:
          </p>
          <div
            class="formula"
            data-latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)"
          ></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> When you add P(A) and P(B), you count
            the overlap twice. Subtract it once to get the correct total.
          </p>
        </div>
        <div class="visual">
          <div class="venn-two">
            <div class="circle circle-a">A</div>
            <div class="circle circle-b">B</div>
            <div class="overlap-label">A∩B</div>
          </div>
          <p class="visual-caption">Overlap counted twice → subtract once</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Derived: Inclusion-Exclusion (3 events)</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> For three events:
          </p>
          <div
            class="formula"
            data-latex="P(A \cup B \cup C) = P(A) + P(B) + P(C)"
          ></div>
          <div
            class="formula"
            data-latex="- P(A \cap B) - P(A \cap C) - P(B \cap C)"
          ></div>
          <div class="formula" data-latex="+ P(A \cap B \cap C)"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Add individuals, subtract pairs
            (overcounted), add back the triple (subtracted too many times). The
            pattern alternates: add, subtract, add...
          </p>
        </div>
        <div class="visual">
          <div class="venn-three">
            <div class="circle circle-a">A</div>
            <div class="circle circle-b">B</div>
            <div class="circle circle-c">C</div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Derived: Monotonicity</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> If A is a subset of B, then A is no more
            likely than B.
          </p>
          <div
            class="formula"
            data-latex="A \subseteq B \implies P(A) \leq P(B)"
          ></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> A smaller target is harder to hit. If
            every outcome in A is also in B, then B has "at least as much
            probability" as A.
          </p>
        </div>
        <div class="visual">
          <div class="subset-visual">
            <div class="outer-set">
              B<div class="inner-set">A</div>
            </div>
          </div>
          <p class="visual-caption">A ⊆ B → P(A) ≤ P(B)</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Derived: Boole's Inequality</h2>
        <div class="definition">
          <p>
            <strong>Theorem:</strong> The probability of a union is at most the
            sum of probabilities.
          </p>
          <div
            class="formula"
            data-latex="P\left(\bigcup_{i=1}^{n} A_i\right) \leq \sum_{i=1}^{n} P(A_i)"
          ></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Adding probabilities might double-count
            overlaps, so the true union probability is at most the sum. Equality
            holds only when events are mutually exclusive.
          </p>
        </div>
      </section>

      <section class="key-properties">
        <h2>Summary: The Three Axioms</h2>
        <div class="properties-grid">
          <div class="property axiom">
            <h3>Axiom 1</h3>
            <div class="formula" data-latex="P(A) \geq 0"></div>
            <p>Non-negativity</p>
          </div>
          <div class="property axiom">
            <h3>Axiom 2</h3>
            <div class="formula" data-latex="P(S) = 1"></div>
            <p>Normalization</p>
          </div>
          <div class="property axiom">
            <h3>Axiom 3</h3>
            <div class="formula" data-latex="P(\cup A_i) = \sum P(A_i)"></div>
            <p>Additivity (disjoint)</p>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Key Derived Results</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Empty Set</h3>
            <div class="formula" data-latex="P(\emptyset) = 0"></div>
          </div>
          <div class="property">
            <h3>Complement</h3>
            <div class="formula" data-latex="P(A') = 1 - P(A)"></div>
          </div>
          <div class="property">
            <h3>Addition</h3>
            <div
              class="formula"
              data-latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)"
            ></div>
          </div>
          <div class="property">
            <h3>Bounds</h3>
            <div class="formula" data-latex="0 \leq P(A) \leq 1"></div>
          </div>
        </div>
      </section>
    </>
  );
}

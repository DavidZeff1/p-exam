export function SetFunctions() {
  return (
    <>
      <h1 class="page-title">A.1 Set Functions</h1>
      <p class="page-subtitle">Probability Fundamentals</p>

      <section class="intro">
        <p>
          Set functions are operations that take one or more sets as input and produce a set as output.
          Understanding these operations is fundamental to probability theory, where events are modeled as sets.
        </p>
      </section>

      <section class="definition-block">
        <h2>Universal Set (U or S)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The set of all possible elements under consideration.</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Think of it as the "universe" or "world" in which we're working.
          In probability, this is often the sample space — all possible outcomes of an experiment.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="10" y="10" width="180" height="130" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <text x="100" y="80" text-anchor="middle" class="set-label">U (Universal Set)</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Union (A ∪ B)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The set of all elements that are in A <em>or</em> B (or both).</p>
          <p class="formula">A ∪ B = {'{'}x : x ∈ A or x ∈ B{'}'}</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> "Either/or" — if you're invited to a party for people who like cats OR dogs,
          anyone who likes at least one of them gets in. The union is inclusive.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <circle cx="75" cy="75" r="50" fill="#bbdefb" stroke="#1976d2" stroke-width="2" opacity="0.7"/>
            <circle cx="125" cy="75" r="50" fill="#bbdefb" stroke="#1976d2" stroke-width="2" opacity="0.7"/>
            <text x="55" y="75" text-anchor="middle" class="set-label-small">A</text>
            <text x="145" y="75" text-anchor="middle" class="set-label-small">B</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">A ∪ B (shaded region)</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Intersection (A ∩ B)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The set of all elements that are in <em>both</em> A and B.</p>
          <p class="formula">A ∩ B = {'{'}x : x ∈ A and x ∈ B{'}'}</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> "Both/and" — if you need BOTH a ticket AND an ID to enter,
          only people with both get in. The intersection is restrictive.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <circle cx="75" cy="75" r="50" fill="none" stroke="#1976d2" stroke-width="2"/>
            <circle cx="125" cy="75" r="50" fill="none" stroke="#1976d2" stroke-width="2"/>
            <clipPath id="clipA">
              <circle cx="75" cy="75" r="50"/>
            </clipPath>
            <circle cx="125" cy="75" r="50" fill="#4caf50" opacity="0.6" clip-path="url(#clipA)"/>
            <text x="55" y="55" text-anchor="middle" class="set-label-small">A</text>
            <text x="145" y="55" text-anchor="middle" class="set-label-small">B</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">A ∩ B (green region)</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Complement (A′ or Aᶜ)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The set of all elements in the universal set that are NOT in A.</p>
          <p class="formula">A′ = {'{'}x ∈ U : x ∉ A{'}'}</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> "Everything except" — if A is the set of rainy days,
          then A′ is all the non-rainy days. The complement is the "opposite" within our universe.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#ffcdd2" stroke="#c62828" stroke-width="1" rx="3"/>
            <circle cx="100" cy="75" r="45" fill="#fafafa" stroke="#1976d2" stroke-width="2"/>
            <text x="100" y="80" text-anchor="middle" class="set-label-small">A</text>
            <text x="30" y="30" text-anchor="middle" class="set-label-small">A′</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">A′ (red region)</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Set Difference (A \ B or A − B)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The set of elements in A that are NOT in B.</p>
          <p class="formula">A \ B = {'{'}x : x ∈ A and x ∉ B{'}'} = A ∩ B′</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> "A but not B" — students enrolled in Math but not in Physics.
          You take away the overlap.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <clipPath id="clipB">
              <circle cx="125" cy="75" r="50"/>
            </clipPath>
            <circle cx="75" cy="75" r="50" fill="#ff9800" stroke="#e65100" stroke-width="2" opacity="0.6"/>
            <circle cx="125" cy="75" r="50" fill="#fafafa" stroke="#1976d2" stroke-width="2"/>
            <circle cx="75" cy="75" r="50" fill="none" stroke="#e65100" stroke-width="2"/>
            <text x="50" y="75" text-anchor="middle" class="set-label-small">A\B</text>
            <text x="145" y="75" text-anchor="middle" class="set-label-small">B</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">A \ B (orange region)</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Symmetric Difference (A △ B)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The set of elements in either A or B, but NOT in both.</p>
          <p class="formula">A △ B = (A \ B) ∪ (B \ A) = (A ∪ B) \ (A ∩ B)</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> "Exclusive or (XOR)" — like choosing between tea OR coffee at a café
          where you can only pick one. Elements that belong to exactly one set.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <circle cx="75" cy="75" r="50" fill="#ce93d8" stroke="#7b1fa2" stroke-width="2" opacity="0.6"/>
            <circle cx="125" cy="75" r="50" fill="#ce93d8" stroke="#7b1fa2" stroke-width="2" opacity="0.6"/>
            <clipPath id="clipAA">
              <circle cx="75" cy="75" r="50"/>
            </clipPath>
            <circle cx="125" cy="75" r="50" fill="#fafafa" clip-path="url(#clipAA)"/>
            <text x="50" y="75" text-anchor="middle" class="set-label-small">A</text>
            <text x="150" y="75" text-anchor="middle" class="set-label-small">B</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">A △ B (purple regions)</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Empty Set (∅)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The set containing no elements.</p>
          <p class="formula">∅ = {'{'}{'}'}</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> An empty box — it's still a box, just with nothing in it.
          In probability, this represents an impossible event.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Disjoint / Mutually Exclusive Sets</h2>
        <div class="definition">
          <p><strong>Definition:</strong> Sets A and B are disjoint if they have no elements in common.</p>
          <p class="formula">A ∩ B = ∅</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Like oil and water — they don't mix. Rolling an even number
          and rolling an odd number on a die are disjoint events.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <circle cx="55" cy="75" r="40" fill="#a5d6a7" stroke="#388e3c" stroke-width="2" opacity="0.7"/>
            <circle cx="145" cy="75" r="40" fill="#90caf9" stroke="#1976d2" stroke-width="2" opacity="0.7"/>
            <text x="55" y="80" text-anchor="middle" class="set-label-small">A</text>
            <text x="145" y="80" text-anchor="middle" class="set-label-small">B</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Disjoint sets (no overlap)</text>
          </svg>
        </div>
      </section>

      <section class="key-properties">
        <h2>Key Properties</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Commutative</h3>
            <p>A ∪ B = B ∪ A</p>
            <p>A ∩ B = B ∩ A</p>
          </div>
          <div class="property">
            <h3>Associative</h3>
            <p>(A ∪ B) ∪ C = A ∪ (B ∪ C)</p>
            <p>(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
          </div>
          <div class="property">
            <h3>Distributive</h3>
            <p>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
            <p>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</p>
          </div>
          <div class="property">
            <h3>De Morgan's Laws</h3>
            <p>(A ∪ B)′ = A′ ∩ B′</p>
            <p>(A ∩ B)′ = A′ ∪ B′</p>
          </div>
        </div>
      </section>
    </>
  )
}

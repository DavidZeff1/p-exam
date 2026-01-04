export function Events() {
  return (
    <>
      <h1 class="page-title">A.4 Events</h1>
      <p class="page-subtitle">Probability Fundamentals</p>

      <section class="intro">
        <p>
          In probability theory, an event is any subset of the sample space. Events are what we assign probabilities to — 
          they represent outcomes or collections of outcomes that we care about.
        </p>
      </section>

      <section class="definition-block">
        <h2>Event</h2>
        <div class="definition">
          <p><strong>Definition:</strong> An event is any subset E of the sample space S.</p>
          <p class="formula">E ⊆ S</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> An event is a question you can ask about an experiment's outcome that has a yes/no answer.
          "Did I roll an even number?" defines the event {'{'}2, 4, 6{'}'}.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <ellipse cx="100" cy="75" rx="60" ry="40" fill="#4caf50" stroke="#2e7d32" stroke-width="2" opacity="0.6"/>
            <text x="170" y="25" text-anchor="middle" class="set-label-small">S</text>
            <text x="100" y="80" text-anchor="middle" class="set-label-small">E</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Event E within sample space S</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Simple Event (Elementary Outcome)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> A simple event is an event consisting of exactly one outcome from the sample space.</p>
          <p class="formula">E = {'{'}ω{'}'} where ω ∈ S</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> The most specific thing that can happen — like "I rolled exactly a 3" rather than 
          "I rolled an odd number." It's a single point in the sample space.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <circle cx="60" cy="50" r="8" fill="#ccc" stroke="#666" stroke-width="1"/>
            <circle cx="100" cy="40" r="8" fill="#ccc" stroke="#666" stroke-width="1"/>
            <circle cx="140" cy="55" r="8" fill="#ccc" stroke="#666" stroke-width="1"/>
            <circle cx="75" cy="90" r="8" fill="#ccc" stroke="#666" stroke-width="1"/>
            <circle cx="120" cy="85" r="8" fill="#ff5722" stroke="#d84315" stroke-width="2"/>
            <circle cx="155" cy="100" r="8" fill="#ccc" stroke="#666" stroke-width="1"/>
            <text x="120" y="110" text-anchor="middle" class="set-label-small">ω</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Simple event: single outcome</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Compound Event</h2>
        <div class="definition">
          <p><strong>Definition:</strong> A compound event consists of two or more simple events.</p>
          <p class="formula">E = {'{'}ω₁, ω₂, ..., ωₖ{'}'} where k ≥ 2</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Multiple outcomes grouped together by some shared property — like "rolling an even number" 
          groups {'{'}2, 4, 6{'}'}. The event occurs if ANY of its outcomes occur.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <ellipse cx="100" cy="70" rx="55" ry="35" fill="#fff9c4" stroke="#f9a825" stroke-width="2" opacity="0.8"/>
            <circle cx="70" cy="60" r="8" fill="#ff9800" stroke="#e65100" stroke-width="2"/>
            <circle cx="100" cy="75" r="8" fill="#ff9800" stroke="#e65100" stroke-width="2"/>
            <circle cx="130" cy="65" r="8" fill="#ff9800" stroke="#e65100" stroke-width="2"/>
            <circle cx="160" cy="40" r="8" fill="#ccc" stroke="#666" stroke-width="1"/>
            <circle cx="45" cy="100" r="8" fill="#ccc" stroke="#666" stroke-width="1"/>
            <text x="100" y="105" text-anchor="middle" class="set-label-small">E</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Compound event: multiple outcomes</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Certain Event</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The certain event is the entire sample space S. It always occurs.</p>
          <p class="formula">P(S) = 1</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> "Something will happen" — when you roll a die, you're certain to get some number 
          between 1 and 6. The certain event contains every possible outcome.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#a5d6a7" stroke="#388e3c" stroke-width="3" rx="5"/>
            <text x="100" y="75" text-anchor="middle" class="set-label">S = Certain Event</text>
            <text x="100" y="95" text-anchor="middle" class="set-label-small">P(S) = 1</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Entire sample space</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Impossible Event</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The impossible event is the empty set ∅. It never occurs.</p>
          <p class="formula">P(∅) = 0</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> "Nothing matches" — rolling a 7 on a standard die is impossible. 
          The impossible event has no outcomes in it.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <ellipse cx="100" cy="70" rx="40" ry="30" fill="none" stroke="#ef5350" stroke-width="2" stroke-dasharray="5,3"/>
            <text x="100" y="75" text-anchor="middle" class="set-label-small">∅</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Empty set: P(∅) = 0</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Complementary Event</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The complement of event E, denoted E′ or Eᶜ, contains all outcomes NOT in E.</p>
          <p class="formula">P(E′) = 1 − P(E)</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> The "opposite" of an event. If E is "passing the exam," then E′ is "failing the exam." 
          Exactly one of them must happen.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#ffcdd2" stroke="#c62828" stroke-width="1" rx="3"/>
            <circle cx="100" cy="70" r="40" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
            <text x="100" y="75" text-anchor="middle" class="set-label-small">E</text>
            <text x="30" y="30" text-anchor="middle" class="set-label-small">E′</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">E and E′ partition S</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Mutually Exclusive Events</h2>
        <div class="definition">
          <p><strong>Definition:</strong> Events E₁ and E₂ are mutually exclusive if they cannot both occur.</p>
          <p class="formula">E₁ ∩ E₂ = ∅</p>
          <p class="formula">P(E₁ ∪ E₂) = P(E₁) + P(E₂)</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> If one happens, the other can't — like "heads" and "tails" on a single coin flip. 
          There's no overlap, so you can simply add their probabilities.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <circle cx="55" cy="70" r="35" fill="#a5d6a7" stroke="#388e3c" stroke-width="2" opacity="0.7"/>
            <circle cx="145" cy="70" r="35" fill="#90caf9" stroke="#1565c0" stroke-width="2" opacity="0.7"/>
            <text x="55" y="75" text-anchor="middle" class="set-label-small">E₁</text>
            <text x="145" y="75" text-anchor="middle" class="set-label-small">E₂</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">No overlap: E₁ ∩ E₂ = ∅</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Exhaustive Events</h2>
        <div class="definition">
          <p><strong>Definition:</strong> A collection of events is exhaustive if their union equals the sample space.</p>
          <p class="formula">E₁ ∪ E₂ ∪ ... ∪ Eₙ = S</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> The events "cover everything" — at least one of them must occur. 
          Like categorizing die rolls as "low" (1-2), "medium" (3-4), or "high" (5-6).</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="5" y="5" width="190" height="140" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <rect x="10" y="20" width="55" height="100" fill="#ffcc80" stroke="#e65100" stroke-width="1" opacity="0.7"/>
            <rect x="70" y="20" width="55" height="100" fill="#a5d6a7" stroke="#388e3c" stroke-width="1" opacity="0.7"/>
            <rect x="130" y="20" width="55" height="100" fill="#90caf9" stroke="#1565c0" stroke-width="1" opacity="0.7"/>
            <text x="37" y="75" text-anchor="middle" class="set-label-small">E₁</text>
            <text x="97" y="75" text-anchor="middle" class="set-label-small">E₂</text>
            <text x="157" y="75" text-anchor="middle" class="set-label-small">E₃</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Exhaustive: covers all of S</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Partition</h2>
        <div class="definition">
          <p><strong>Definition:</strong> Events form a partition of S if they are both mutually exclusive AND exhaustive.</p>
          <p class="formula">Eᵢ ∩ Eⱼ = ∅ for i ≠ j, and ⋃Eᵢ = S</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> A perfect division — every outcome belongs to exactly one event, no gaps, no overlaps.
          Like sorting students into exactly one grade level.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 200 150" class="set-diagram">
            <rect x="10" y="20" width="45" height="100" fill="#ef9a9a" stroke="#c62828" stroke-width="2" rx="3"/>
            <rect x="55" y="20" width="45" height="100" fill="#fff59d" stroke="#f9a825" stroke-width="2" rx="3"/>
            <rect x="100" y="20" width="45" height="100" fill="#a5d6a7" stroke="#388e3c" stroke-width="2" rx="3"/>
            <rect x="145" y="20" width="45" height="100" fill="#90caf9" stroke="#1565c0" stroke-width="2" rx="3"/>
            <text x="32" y="75" text-anchor="middle" class="set-label-small">E₁</text>
            <text x="77" y="75" text-anchor="middle" class="set-label-small">E₂</text>
            <text x="122" y="75" text-anchor="middle" class="set-label-small">E₃</text>
            <text x="167" y="75" text-anchor="middle" class="set-label-small">E₄</text>
            <text x="100" y="140" text-anchor="middle" class="set-caption">Partition: mutually exclusive + exhaustive</text>
          </svg>
        </div>
      </section>

      <section class="key-properties">
        <h2>Key Relationships</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Event & Complement</h3>
            <p>E ∪ E′ = S</p>
            <p>E ∩ E′ = ∅</p>
            <p>P(E) + P(E′) = 1</p>
          </div>
          <div class="property">
            <h3>Union of Events</h3>
            <p>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</p>
            <p>If disjoint: P(A ∪ B) = P(A) + P(B)</p>
          </div>
          <div class="property">
            <h3>Bounds</h3>
            <p>0 ≤ P(E) ≤ 1</p>
            <p>P(∅) = 0</p>
            <p>P(S) = 1</p>
          </div>
          <div class="property">
            <h3>Subset Rule</h3>
            <p>If A ⊆ B, then P(A) ≤ P(B)</p>
            <p>P(B \ A) = P(B) − P(A)</p>
          </div>
        </div>
      </section>
    </>
  )
}

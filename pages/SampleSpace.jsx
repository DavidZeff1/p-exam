export function SampleSpace() {
  return (
    <>
      <h1 class="page-title">A.3 Sample Space</h1>
      <p class="page-subtitle">Probability Fundamentals</p>

      <section class="intro">
        <p>
          The sample space is the foundation of probability theory. Before we can talk about
          the probability of anything, we must first define what outcomes are possible.
        </p>
      </section>

      <section class="definition-block">
        <h2>Sample Space (S or Ω)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The sample space is the set of all possible outcomes
          of a random experiment.</p>
          <p class="formula">S = {'{'}all possible outcomes{'}'}</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Before rolling a die, flipping a coin, or drawing a card,
          ask yourself: "What could possibly happen?" The complete answer is your sample space.
          It's the "universe" from set theory, applied to probability.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Outcome vs Event</h2>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h3>Outcome (ω)</h3>
            <p>A single possible result of an experiment</p>
            <p class="example">Rolling a 4 on a die</p>
            <p class="note">An element of S</p>
          </div>
          <div class="comparison-card">
            <h3>Event (E)</h3>
            <p>A collection of outcomes (a subset of S)</p>
            <p class="example">Rolling an even number</p>
            <p class="note">A subset of S: E ⊆ S</p>
          </div>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> An outcome is a single "thing that could happen."
          An event is a "category" or "description" that may include multiple outcomes.
          "Rolling a 4" is an outcome. "Rolling an even number" is an event containing outcomes {'{'}2, 4, 6{'}'}.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Common Sample Spaces</h2>

        <div class="example-block">
          <h3>Coin Flip</h3>
          <div class="example-content">
            <div class="example-formula">S = {'{'}H, T{'}'}</div>
            <div class="example-visual">
              <svg viewBox="0 0 200 80" class="inline-diagram">
                <circle cx="50" cy="40" r="30" fill="#ffd700" stroke="#b8860b" stroke-width="2"/>
                <text x="50" y="45" text-anchor="middle" class="coin-text">H</text>
                <circle cx="130" cy="40" r="30" fill="#c0c0c0" stroke="#808080" stroke-width="2"/>
                <text x="130" y="45" text-anchor="middle" class="coin-text">T</text>
              </svg>
            </div>
            <p class="example-note">|S| = 2 outcomes</p>
          </div>
        </div>

        <div class="example-block">
          <h3>Two Coin Flips</h3>
          <div class="example-content">
            <div class="example-formula">S = {'{'}HH, HT, TH, TT{'}'}</div>
            <div class="example-visual">
              <svg viewBox="0 0 280 120" class="inline-diagram">
                <g transform="translate(20, 20)">
                  <circle cx="20" cy="20" r="15" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>
                  <circle cx="50" cy="20" r="15" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>
                  <text x="35" y="55" text-anchor="middle" class="outcome-label">HH</text>
                </g>
                <g transform="translate(90, 20)">
                  <circle cx="20" cy="20" r="15" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>
                  <circle cx="50" cy="20" r="15" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
                  <text x="35" y="55" text-anchor="middle" class="outcome-label">HT</text>
                </g>
                <g transform="translate(160, 20)">
                  <circle cx="20" cy="20" r="15" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
                  <circle cx="50" cy="20" r="15" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>
                  <text x="35" y="55" text-anchor="middle" class="outcome-label">TH</text>
                </g>
                <g transform="translate(230, 20)">
                  <circle cx="20" cy="20" r="15" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
                  <circle cx="50" cy="20" r="15" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
                  <text x="35" y="55" text-anchor="middle" class="outcome-label">TT</text>
                </g>
              </svg>
            </div>
            <p class="example-note">|S| = 2² = 4 outcomes (order matters: HT ≠ TH)</p>
          </div>
        </div>

        <div class="example-block">
          <h3>Single Die Roll</h3>
          <div class="example-content">
            <div class="example-formula">S = {'{'}1, 2, 3, 4, 5, 6{'}'}</div>
            <div class="example-visual">
              <svg viewBox="0 0 320 60" class="inline-diagram">
                {[1,2,3,4,5,6].map((n, i) => (
                  <g transform={`translate(${i * 50 + 20}, 10)`} key={n}>
                    <rect x="0" y="0" width="40" height="40" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
                    <text x="20" y="28" text-anchor="middle" class="die-number">{n}</text>
                  </g>
                ))}
              </svg>
            </div>
            <p class="example-note">|S| = 6 outcomes</p>
          </div>
        </div>

        <div class="example-block">
          <h3>Two Dice (Sum)</h3>
          <div class="example-content">
            <div class="example-formula">S = {'{'}2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12{'}'}</div>
            <p class="example-note">|S| = 11 possible sums, but NOT equally likely!</p>
            <p class="warning-note">⚠️ Common trap: The sample space of sums has 11 values,
            but there are 36 equally likely (die1, die2) pairs. Sum of 7 can happen 6 ways; sum of 2 only 1 way.</p>
          </div>
        </div>

        <div class="example-block">
          <h3>Standard Deck of Cards</h3>
          <div class="example-content">
            <div class="example-formula">S = {'{'}A♠, 2♠, ..., K♠, A♥, ..., K♦{'}'}</div>
            <p class="example-note">|S| = 52 cards (13 ranks × 4 suits)</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Types of Sample Spaces</h2>
        <div class="type-cards">
          <div class="type-card">
            <h3>Finite</h3>
            <div class="type-content">
              <p>Contains a countable, limited number of outcomes</p>
              <p class="type-example">Coin flip: |S| = 2</p>
              <p class="type-example">Die roll: |S| = 6</p>
              <p class="type-example">Deck of cards: |S| = 52</p>
            </div>
          </div>
          <div class="type-card">
            <h3>Countably Infinite</h3>
            <div class="type-content">
              <p>Infinite outcomes that can be listed (mapped to natural numbers)</p>
              <p class="type-example">Flips until first head: S = {'{'}H, TH, TTH, TTTH, ...{'}'}</p>
              <p class="type-example">Number of claims: S = {'{'}0, 1, 2, 3, ...{'}'}</p>
            </div>
          </div>
          <div class="type-card">
            <h3>Uncountable (Continuous)</h3>
            <div class="type-content">
              <p>Infinite outcomes that cannot be listed (like real numbers)</p>
              <p class="type-example">Time until failure: S = [0, ∞)</p>
              <p class="type-example">Spinner angle: S = [0°, 360°)</p>
            </div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Discrete vs Continuous</h2>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h3>Discrete</h3>
            <p>Finite or countably infinite outcomes</p>
            <p>Can assign probability to each outcome</p>
            <p class="formula-small">P(ω) for each ω ∈ S</p>
            <p class="example">Dice, coins, cards, counts</p>
          </div>
          <div class="comparison-card">
            <h3>Continuous</h3>
            <p>Uncountably infinite outcomes</p>
            <p>Probability of exact outcome = 0</p>
            <p class="formula-small">P(a ≤ X ≤ b) via integration</p>
            <p class="example">Time, distance, temperature</p>
          </div>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> If you can list outcomes (even infinitely), it's discrete.
          If outcomes form a continuum (like all points on a line segment), it's continuous.
          For continuous spaces, we ask "what's the probability of landing in this range?" not "at this exact point."</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Describing Sample Spaces</h2>
        <div class="method-list">
          <div class="method-item">
            <h3>Roster Method (List)</h3>
            <p>Explicitly list all outcomes</p>
            <p class="formula">S = {'{'}1, 2, 3, 4, 5, 6{'}'}</p>
            <p class="method-note">Best for small, finite sample spaces</p>
          </div>
          <div class="method-item">
            <h3>Set-Builder Notation</h3>
            <p>Describe the rule for membership</p>
            <p class="formula">S = {'{'}x ∈ ℝ : 0 ≤ x ≤ 1{'}'}</p>
            <p class="method-note">Best for continuous or rule-based spaces</p>
          </div>
          <div class="method-item">
            <h3>Tree Diagram</h3>
            <p>Visual branching for sequential experiments</p>
            <p class="method-note">Best for multi-stage experiments</p>
          </div>
        </div>
        <div class="visual">
          <svg viewBox="0 0 300 160" class="set-diagram diagram-wide">
            <text x="150" y="15" text-anchor="middle" class="tree-title">Tree: Two Coin Flips</text>

            <circle cx="150" cy="40" r="8" fill="#1976d2"/>
            <text x="150" y="43" text-anchor="middle" fill="white" font-size="8">S</text>

            <line x1="150" y1="48" x2="80" y2="80" stroke="#333" stroke-width="1"/>
            <line x1="150" y1="48" x2="220" y2="80" stroke="#333" stroke-width="1"/>

            <circle cx="80" cy="85" r="8" fill="#4caf50"/>
            <text x="80" y="88" text-anchor="middle" fill="white" font-size="8">H</text>
            <circle cx="220" cy="85" r="8" fill="#f44336"/>
            <text x="220" y="88" text-anchor="middle" fill="white" font-size="8">T</text>

            <line x1="80" y1="93" x2="50" y2="125" stroke="#333" stroke-width="1"/>
            <line x1="80" y1="93" x2="110" y2="125" stroke="#333" stroke-width="1"/>
            <line x1="220" y1="93" x2="190" y2="125" stroke="#333" stroke-width="1"/>
            <line x1="220" y1="93" x2="250" y2="125" stroke="#333" stroke-width="1"/>

            <rect x="35" y="125" width="30" height="20" rx="3" fill="#e8f5e9" stroke="#4caf50"/>
            <text x="50" y="139" text-anchor="middle" font-size="10">HH</text>

            <rect x="95" y="125" width="30" height="20" rx="3" fill="#fff3e0" stroke="#ff9800"/>
            <text x="110" y="139" text-anchor="middle" font-size="10">HT</text>

            <rect x="175" y="125" width="30" height="20" rx="3" fill="#fff3e0" stroke="#ff9800"/>
            <text x="190" y="139" text-anchor="middle" font-size="10">TH</text>

            <rect x="235" y="125" width="30" height="20" rx="3" fill="#ffebee" stroke="#f44336"/>
            <text x="250" y="139" text-anchor="middle" font-size="10">TT</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Counting Outcomes</h2>
        <div class="counting-rules">
          <div class="rule-card">
            <h3>Multiplication Principle</h3>
            <p>If experiment 1 has m outcomes and experiment 2 has n outcomes:</p>
            <p class="formula">|S| = m × n</p>
            <p class="example">2 coins: 2 × 2 = 4 outcomes</p>
            <p class="example">2 dice: 6 × 6 = 36 outcomes</p>
          </div>
          <div class="rule-card">
            <h3>n Coin Flips</h3>
            <p class="formula">|S| = 2ⁿ</p>
            <p class="example">3 coins: 2³ = 8 outcomes</p>
            <p class="example">10 coins: 2¹⁰ = 1024 outcomes</p>
          </div>
          <div class="rule-card">
            <h3>n Die Rolls</h3>
            <p class="formula">|S| = 6ⁿ</p>
            <p class="example">2 dice: 6² = 36 outcomes</p>
            <p class="example">3 dice: 6³ = 216 outcomes</p>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Exam P Tips</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Equally Likely?</h3>
            <p>Always check if outcomes are equally likely before using |E|/|S|</p>
          </div>
          <div class="property">
            <h3>Order Matters?</h3>
            <p>HT and TH are different outcomes if order matters</p>
          </div>
          <div class="property">
            <h3>With Replacement?</h3>
            <p>Affects whether outcomes are independent</p>
          </div>
          <div class="property">
            <h3>Right Granularity</h3>
            <p>Choose S that makes outcomes equally likely when possible</p>
          </div>
        </div>
      </section>
    </>
  )
}

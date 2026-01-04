export function ProbabilitySetFunction() {
  return (
    <>
      <h1 class="page-title">A.5 Probability as a Set Function</h1>
      <p class="page-subtitle">Probability Fundamentals</p>

      <section class="intro">
        <p>
          Probability is a function that assigns a number to each event in a sample space. 
          This function must satisfy certain rules to behave in ways that match our intuition about chance and uncertainty.
        </p>
      </section>

      <section class="definition-block">
        <h2>Probability Function</h2>
        <div class="definition">
          <p><strong>Definition:</strong> A probability function P is a set function that maps events to real numbers.</p>
          <p class="formula">P: ℱ → [0, 1]</p>
          <p>where ℱ is the collection of all events (subsets of S).</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Think of P as a "measuring device" for uncertainty. Just like a ruler measures length, 
          P measures how likely an event is. It takes an event (a set) as input and outputs a number between 0 and 1.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 150" class="set-diagram">
            <rect x="5" y="20" width="80" height="110" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <text x="45" y="50" text-anchor="middle" class="set-label-small">Events</text>
            <ellipse cx="45" cy="80" rx="25" ry="15" fill="#90caf9" stroke="#1565c0" stroke-width="1"/>
            <text x="45" y="85" text-anchor="middle" font-size="10">E</text>
            <text x="45" y="120" text-anchor="middle" font-size="9">ℱ (event space)</text>
            <line x1="95" y1="75" x2="175" y2="75" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="135" y="65" text-anchor="middle" class="set-label-small">P</text>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
              </marker>
            </defs>
            <rect x="185" y="20" width="90" height="110" fill="#fff9c4" stroke="#f9a825" stroke-width="2" rx="5"/>
            <text x="230" y="50" text-anchor="middle" class="set-label-small">Numbers</text>
            <line x1="195" y1="100" x2="265" y2="100" stroke="#333" stroke-width="1"/>
            <line x1="195" y1="100" x2="195" y2="70" stroke="#333" stroke-width="1"/>
            <text x="195" y="115" text-anchor="middle" font-size="9">0</text>
            <text x="265" y="115" text-anchor="middle" font-size="9">1</text>
            <circle cx="235" cy="100" r="4" fill="#4caf50"/>
            <text x="235" y="90" text-anchor="middle" font-size="9">P(E)</text>
            <text x="140" y="145" text-anchor="middle" class="set-caption">P maps events to probabilities</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Domain: The Event Space (σ-algebra)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The event space ℱ is a collection of subsets of S that is closed under complementation and countable unions.</p>
          <p class="formula">1. S ∈ ℱ</p>
          <p class="formula">2. If A ∈ ℱ, then A′ ∈ ℱ</p>
          <p class="formula">3. If A₁, A₂, ... ∈ ℱ, then ⋃Aᵢ ∈ ℱ</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> The event space is the "menu" of events we're allowed to assign probabilities to. 
          It must be complete enough that if we can ask about event A, we can also ask about "not A" and combinations of events.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Codomain: The Unit Interval</h2>
        <div class="definition">
          <p><strong>Definition:</strong> The output of P is always a real number in [0, 1].</p>
          <p class="formula">0 ≤ P(E) ≤ 1 for all events E</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Probabilities are percentages (as decimals). 0 means impossible, 1 means certain, 
          and everything else falls in between. You can't have -30% chance or 150% chance of something.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 100" class="set-diagram">
            <rect x="5" y="5" width="270" height="90" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <line x1="30" y1="50" x2="250" y2="50" stroke="#333" stroke-width="3"/>
            <circle cx="30" cy="50" r="6" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
            <circle cx="250" cy="50" r="6" fill="#4caf50" stroke="#388e3c" stroke-width="2"/>
            <text x="30" y="75" text-anchor="middle" class="set-label-small">0</text>
            <text x="250" y="75" text-anchor="middle" class="set-label-small">1</text>
            <text x="30" y="35" text-anchor="middle" font-size="9">Impossible</text>
            <text x="250" y="35" text-anchor="middle" font-size="9">Certain</text>
            <text x="140" y="35" text-anchor="middle" font-size="9">Possible</text>
            <circle cx="90" cy="50" r="4" fill="#ff9800"/>
            <text x="90" y="70" text-anchor="middle" font-size="8">0.27</text>
            <circle cx="180" cy="50" r="4" fill="#2196f3"/>
            <text x="180" y="70" text-anchor="middle" font-size="8">0.68</text>
            <text x="140" y="95" text-anchor="middle" class="set-caption">All probabilities live on [0, 1]</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Probability Measure</h2>
        <div class="definition">
          <p><strong>Definition:</strong> A probability measure is the triple (S, ℱ, P) where S is the sample space, 
          ℱ is the event space, and P is the probability function satisfying the axioms.</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> This triple completely describes a probabilistic experiment: what can happen (S), 
          what questions we can ask (ℱ), and how likely each answer is (P).</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 150" class="set-diagram">
            <rect x="5" y="5" width="270" height="140" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <rect x="20" y="25" width="75" height="60" fill="#bbdefb" stroke="#1976d2" stroke-width="2" rx="5"/>
            <text x="57" y="50" text-anchor="middle" font-weight="bold" font-size="11">S</text>
            <text x="57" y="70" text-anchor="middle" font-size="9">Sample</text>
            <text x="57" y="80" text-anchor="middle" font-size="9">Space</text>
            <rect x="105" y="25" width="75" height="60" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" rx="5"/>
            <text x="142" y="50" text-anchor="middle" font-weight="bold" font-size="11">ℱ</text>
            <text x="142" y="70" text-anchor="middle" font-size="9">Event</text>
            <text x="142" y="80" text-anchor="middle" font-size="9">Space</text>
            <rect x="190" y="25" width="75" height="60" fill="#fff9c4" stroke="#f9a825" stroke-width="2" rx="5"/>
            <text x="227" y="50" text-anchor="middle" font-weight="bold" font-size="11">P</text>
            <text x="227" y="70" text-anchor="middle" font-size="9">Probability</text>
            <text x="227" y="80" text-anchor="middle" font-size="9">Function</text>
            <text x="142" y="110" text-anchor="middle" font-size="12">(S, ℱ, P)</text>
            <text x="142" y="140" text-anchor="middle" class="set-caption">Probability Space (Measure)</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Discrete vs Continuous</h2>
        <div class="definition">
          <p><strong>Discrete:</strong> S is finite or countably infinite. P assigns probability to each outcome.</p>
          <p class="formula">P(E) = ∑ P({'{'}ω{'}'}) for all ω ∈ E</p>
          <p><strong>Continuous:</strong> S is uncountably infinite. P is defined via density functions.</p>
          <p class="formula">P(E) = ∫ₑ f(x) dx</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Discrete is like counting coins — each outcome has a specific probability you can list. 
          Continuous is like measuring water — you can't list probabilities for every point, so you use areas under curves instead.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 130" class="set-diagram">
            <rect x="5" y="5" width="130" height="120" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
            <text x="70" y="25" text-anchor="middle" font-weight="bold" font-size="11">Discrete</text>
            <circle cx="30" cy="60" r="12" fill="#2196f3" opacity="0.8"/>
            <circle cx="55" cy="60" r="8" fill="#2196f3" opacity="0.6"/>
            <circle cx="80" cy="60" r="15" fill="#2196f3" opacity="0.9"/>
            <circle cx="110" cy="60" r="6" fill="#2196f3" opacity="0.5"/>
            <text x="30" y="85" text-anchor="middle" font-size="8">0.3</text>
            <text x="55" y="85" text-anchor="middle" font-size="8">0.15</text>
            <text x="80" y="85" text-anchor="middle" font-size="8">0.4</text>
            <text x="110" y="85" text-anchor="middle" font-size="8">0.15</text>
            <text x="70" y="115" text-anchor="middle" font-size="9">Individual masses</text>
            <rect x="145" y="5" width="130" height="120" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="5"/>
            <text x="210" y="25" text-anchor="middle" font-weight="bold" font-size="11">Continuous</text>
            <path d="M155 90 Q180 40 210 70 Q240 100 265 50" fill="none" stroke="#ff9800" stroke-width="2"/>
            <path d="M180 90 L180 58 Q195 45 210 70 L210 90 Z" fill="#ff9800" opacity="0.4"/>
            <line x1="155" y1="90" x2="265" y2="90" stroke="#333" stroke-width="1"/>
            <text x="195" y="105" text-anchor="middle" font-size="8">P(a≤X≤b)</text>
            <text x="210" y="115" text-anchor="middle" font-size="9">Area under curve</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Probability Mass Function (PMF)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> For discrete random variables, the PMF gives the probability of each outcome.</p>
          <p class="formula">p(x) = P(X = x)</p>
          <p class="formula">∑ p(x) = 1 over all x</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> A PMF is like a bar chart where each bar's height is the probability of that outcome. 
          All the bars must add up to 1 (100% of probability is distributed somewhere).</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 130" class="set-diagram">
            <rect x="5" y="5" width="270" height="120" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <line x1="40" y1="100" x2="260" y2="100" stroke="#333" stroke-width="1"/>
            <line x1="40" y1="100" x2="40" y2="20" stroke="#333" stroke-width="1"/>
            <rect x="55" y="70" width="25" height="30" fill="#42a5f5" stroke="#1565c0" stroke-width="1"/>
            <rect x="95" y="40" width="25" height="60" fill="#42a5f5" stroke="#1565c0" stroke-width="1"/>
            <rect x="135" y="55" width="25" height="45" fill="#42a5f5" stroke="#1565c0" stroke-width="1"/>
            <rect x="175" y="80" width="25" height="20" fill="#42a5f5" stroke="#1565c0" stroke-width="1"/>
            <rect x="215" y="85" width="25" height="15" fill="#42a5f5" stroke="#1565c0" stroke-width="1"/>
            <text x="67" y="112" text-anchor="middle" font-size="9">1</text>
            <text x="107" y="112" text-anchor="middle" font-size="9">2</text>
            <text x="147" y="112" text-anchor="middle" font-size="9">3</text>
            <text x="187" y="112" text-anchor="middle" font-size="9">4</text>
            <text x="227" y="112" text-anchor="middle" font-size="9">5</text>
            <text x="25" y="75" text-anchor="middle" font-size="8" transform="rotate(-90, 25, 75)">P(X=x)</text>
            <text x="150" y="15" text-anchor="middle" font-size="10">PMF: bars sum to 1</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Probability Density Function (PDF)</h2>
        <div class="definition">
          <p><strong>Definition:</strong> For continuous random variables, the PDF f(x) satisfies:</p>
          <p class="formula">P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx</p>
          <p class="formula">∫₋∞^∞ f(x) dx = 1</p>
          <p class="formula">f(x) ≥ 0 for all x</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> The PDF is like a "probability landscape" — the height at each point isn't the probability itself, 
          but the area under the curve gives you probability. Higher regions mean more likely ranges.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 130" class="set-diagram">
            <rect x="5" y="5" width="270" height="120" fill="#fafafa" stroke="#ccc" stroke-width="1" rx="3"/>
            <line x1="30" y1="100" x2="260" y2="100" stroke="#333" stroke-width="1"/>
            <line x1="30" y1="100" x2="30" y2="20" stroke="#333" stroke-width="1"/>
            <path d="M30 100 Q80 100 120 40 Q160 100 200 60 Q240 80 260 100" fill="#ffcc80" fill-opacity="0.5" stroke="#ff9800" stroke-width="2"/>
            <path d="M120 100 L120 40 Q140 70 160 100 Z" fill="#ff5722" opacity="0.5"/>
            <text x="140" y="85" text-anchor="middle" font-size="8">Area = P</text>
            <text x="145" y="15" text-anchor="middle" font-size="10">PDF: total area = 1</text>
            <text x="15" y="60" text-anchor="middle" font-size="8" transform="rotate(-90, 15, 60)">f(x)</text>
            <text x="145" y="112" text-anchor="middle" font-size="9">x</text>
          </svg>
        </div>
      </section>

      <section class="key-properties">
        <h2>Key Properties of Set Functions</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Monotonicity</h3>
            <p>If A ⊆ B, then P(A) ≤ P(B)</p>
            <p>Larger events have larger (or equal) probability</p>
          </div>
          <div class="property">
            <h3>Subadditivity</h3>
            <p>P(A ∪ B) ≤ P(A) + P(B)</p>
            <p>Union is at most the sum (equality when disjoint)</p>
          </div>
          <div class="property">
            <h3>Continuity</h3>
            <p>If Aₙ ↑ A, then P(Aₙ) → P(A)</p>
            <p>If Aₙ ↓ A, then P(Aₙ) → P(A)</p>
          </div>
          <div class="property">
            <h3>Inclusion-Exclusion</h3>
            <p>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</p>
            <p>Subtract overlap to avoid double-counting</p>
          </div>
        </div>
      </section>
    </>
  )
}

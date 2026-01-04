export function VennDiagrams() {
  return (
    <>
      <h1 class="page-title">A.2 Venn Diagrams</h1>
      <p class="page-subtitle">Probability Fundamentals</p>

      <section class="intro">
        <p>
          Venn diagrams are visual tools for representing sets and their relationships.
          They make abstract set operations concrete and are invaluable for solving probability problems
          involving multiple events.
        </p>
      </section>

      <section class="definition-block">
        <h2>What is a Venn Diagram?</h2>
        <div class="definition">
          <p><strong>Definition:</strong> A Venn diagram uses overlapping circles (or other shapes)
          within a rectangle to show logical relationships between sets.</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> Think of each circle as a "container" for elements.
          The rectangle is the universal set — everything we care about. Where circles overlap,
          elements belong to multiple sets simultaneously.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 180" class="set-diagram diagram-wide">
            <rect x="5" y="5" width="270" height="170" fill="#fafafa" stroke="#333" stroke-width="2" rx="3"/>
            <text x="260" y="20" text-anchor="end" class="set-label-small">U</text>
            <circle cx="100" cy="95" r="55" fill="#bbdefb" stroke="#1976d2" stroke-width="2" opacity="0.6"/>
            <circle cx="180" cy="95" r="55" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" opacity="0.6"/>
            <text x="70" y="95" text-anchor="middle" class="set-label">A</text>
            <text x="210" y="95" text-anchor="middle" class="set-label">B</text>
            <text x="140" y="95" text-anchor="middle" class="set-label-small">A∩B</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Regions in a Two-Set Diagram</h2>
        <div class="definition">
          <p><strong>Definition:</strong> A two-set Venn diagram divides the universal set into exactly 4 regions:</p>
        </div>
        <div class="regions-list">
          <div class="region-item">
            <span class="region-label">Region 1:</span> A only (A ∩ B′) — in A but not in B
          </div>
          <div class="region-item">
            <span class="region-label">Region 2:</span> A ∩ B — in both A and B
          </div>
          <div class="region-item">
            <span class="region-label">Region 3:</span> B only (A′ ∩ B) — in B but not in A
          </div>
          <div class="region-item">
            <span class="region-label">Region 4:</span> (A ∪ B)′ — in neither A nor B
          </div>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 180" class="set-diagram diagram-wide">
            <rect x="5" y="5" width="270" height="170" fill="#ffebee" stroke="#333" stroke-width="2" rx="3"/>
            <text x="30" y="30" class="region-number">4</text>

            <circle cx="100" cy="95" r="55" fill="#bbdefb" stroke="#1976d2" stroke-width="2"/>
            <circle cx="180" cy="95" r="55" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>

            <clipPath id="clipA2">
              <circle cx="100" cy="95" r="55"/>
            </clipPath>
            <circle cx="180" cy="95" r="55" fill="#fff59d" clip-path="url(#clipA2)"/>

            <text x="65" y="95" text-anchor="middle" class="region-number">1</text>
            <text x="140" y="95" text-anchor="middle" class="region-number">2</text>
            <text x="215" y="95" text-anchor="middle" class="region-number">3</text>

            <text x="140" y="175" text-anchor="middle" class="set-caption">Four distinct regions</text>
          </svg>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> These 4 regions are mutually exclusive and exhaustive —
          every element in U belongs to exactly one region. This is key for counting problems!</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Three-Set Venn Diagram</h2>
        <div class="definition">
          <p><strong>Definition:</strong> Three overlapping circles create 8 distinct regions,
          representing all possible combinations of membership in sets A, B, and C.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 300 260" class="set-diagram diagram-tall">
            <rect x="5" y="5" width="290" height="250" fill="#fafafa" stroke="#333" stroke-width="2" rx="3"/>
            <text x="280" y="22" text-anchor="end" class="set-label-small">U</text>

            <circle cx="120" cy="100" r="60" fill="#bbdefb" stroke="#1976d2" stroke-width="2" opacity="0.5"/>
            <circle cx="180" cy="100" r="60" fill="#c8e6c9" stroke="#388e3c" stroke-width="2" opacity="0.5"/>
            <circle cx="150" cy="160" r="60" fill="#ffe0b2" stroke="#e65100" stroke-width="2" opacity="0.5"/>

            <text x="85" y="75" text-anchor="middle" class="set-label">A</text>
            <text x="215" y="75" text-anchor="middle" class="set-label">B</text>
            <text x="150" y="210" text-anchor="middle" class="set-label">C</text>

            <text x="150" y="95" text-anchor="middle" class="set-label-tiny">A∩B</text>
            <text x="110" y="145" text-anchor="middle" class="set-label-tiny">A∩C</text>
            <text x="190" y="145" text-anchor="middle" class="set-label-tiny">B∩C</text>
            <text x="150" y="130" text-anchor="middle" class="set-label-tiny">A∩B∩C</text>
          </svg>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> With 3 sets, each element has 3 yes/no choices (in A? in B? in C?),
          giving 2³ = 8 possible combinations. The center region where all three circles overlap
          contains elements in ALL three sets.</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>The Eight Regions</h2>
        <div class="regions-grid">
          <div class="region-card">
            <div class="region-formula">A ∩ B′ ∩ C′</div>
            <div class="region-desc">Only A</div>
          </div>
          <div class="region-card">
            <div class="region-formula">A′ ∩ B ∩ C′</div>
            <div class="region-desc">Only B</div>
          </div>
          <div class="region-card">
            <div class="region-formula">A′ ∩ B′ ∩ C</div>
            <div class="region-desc">Only C</div>
          </div>
          <div class="region-card">
            <div class="region-formula">A ∩ B ∩ C′</div>
            <div class="region-desc">A and B only</div>
          </div>
          <div class="region-card">
            <div class="region-formula">A ∩ B′ ∩ C</div>
            <div class="region-desc">A and C only</div>
          </div>
          <div class="region-card">
            <div class="region-formula">A′ ∩ B ∩ C</div>
            <div class="region-desc">B and C only</div>
          </div>
          <div class="region-card">
            <div class="region-formula">A ∩ B ∩ C</div>
            <div class="region-desc">All three</div>
          </div>
          <div class="region-card">
            <div class="region-formula">(A ∪ B ∪ C)′</div>
            <div class="region-desc">None</div>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Using Venn Diagrams for Counting</h2>
        <div class="definition">
          <p><strong>Inclusion-Exclusion Principle (2 sets):</strong></p>
          <p class="formula">|A ∪ B| = |A| + |B| − |A ∩ B|</p>
        </div>
        <div class="definition">
          <p><strong>Inclusion-Exclusion Principle (3 sets):</strong></p>
          <p class="formula">|A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|</p>
        </div>
        <div class="intuition">
          <p><strong>Intuition:</strong> When you add |A| + |B|, you count the overlap twice,
          so you subtract it once. With three sets, after adding and subtracting pairwise overlaps,
          the center (A ∩ B ∩ C) has been subtracted too many times, so add it back.</p>
        </div>
        <div class="visual">
          <svg viewBox="0 0 280 180" class="set-diagram diagram-wide">
            <rect x="5" y="5" width="270" height="170" fill="#fafafa" stroke="#333" stroke-width="1" rx="3"/>

            <circle cx="100" cy="95" r="55" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
            <circle cx="180" cy="95" r="55" fill="#e8f5e9" stroke="#388e3c" stroke-width="2"/>

            <clipPath id="clipCount">
              <circle cx="100" cy="95" r="55"/>
            </clipPath>
            <circle cx="180" cy="95" r="55" fill="#fff9c4" clip-path="url(#clipCount)"/>

            <text x="65" y="85" text-anchor="middle" class="count-label">a</text>
            <text x="140" y="85" text-anchor="middle" class="count-label">b</text>
            <text x="215" y="85" text-anchor="middle" class="count-label">c</text>

            <text x="65" y="105" text-anchor="middle" class="set-label-tiny">(A only)</text>
            <text x="140" y="105" text-anchor="middle" class="set-label-tiny">(both)</text>
            <text x="215" y="105" text-anchor="middle" class="set-label-tiny">(B only)</text>

            <text x="140" y="170" text-anchor="middle" class="set-caption">|A| = a + b, |B| = b + c, |A ∪ B| = a + b + c</text>
          </svg>
        </div>
      </section>

      <section class="definition-block">
        <h2>Shading Conventions</h2>
        <div class="intuition">
          <p><strong>Key Skill:</strong> Being able to shade or identify regions is essential for Exam P.
          Practice translating set expressions into shaded regions and vice versa.</p>
        </div>
        <div class="shading-examples">
          <div class="shading-example">
            <svg viewBox="0 0 150 120" class="set-diagram-small">
              <rect x="3" y="3" width="144" height="114" fill="#fafafa" stroke="#333" stroke-width="1" rx="2"/>
              <circle cx="55" cy="60" r="35" fill="#1976d2" stroke="#1976d2" stroke-width="1" opacity="0.4"/>
              <circle cx="95" cy="60" r="35" fill="none" stroke="#388e3c" stroke-width="1"/>
              <clipPath id="shadeUnion">
                <circle cx="55" cy="60" r="35"/>
              </clipPath>
              <circle cx="95" cy="60" r="35" fill="#1976d2" opacity="0.4"/>
            </svg>
            <p class="shading-label">A ∪ B</p>
          </div>
          <div class="shading-example">
            <svg viewBox="0 0 150 120" class="set-diagram-small">
              <rect x="3" y="3" width="144" height="114" fill="#fafafa" stroke="#333" stroke-width="1" rx="2"/>
              <circle cx="55" cy="60" r="35" fill="none" stroke="#1976d2" stroke-width="1"/>
              <circle cx="95" cy="60" r="35" fill="none" stroke="#388e3c" stroke-width="1"/>
              <clipPath id="shadeInt">
                <circle cx="55" cy="60" r="35"/>
              </clipPath>
              <circle cx="95" cy="60" r="35" fill="#4caf50" opacity="0.5" clip-path="url(#shadeInt)"/>
            </svg>
            <p class="shading-label">A ∩ B</p>
          </div>
          <div class="shading-example">
            <svg viewBox="0 0 150 120" class="set-diagram-small">
              <rect x="3" y="3" width="144" height="114" fill="#ef5350" stroke="#333" stroke-width="1" rx="2" opacity="0.3"/>
              <circle cx="55" cy="60" r="35" fill="none" stroke="#1976d2" stroke-width="1"/>
              <circle cx="95" cy="60" r="35" fill="#fafafa" stroke="#388e3c" stroke-width="1"/>
              <clipPath id="shadeCompUnion">
                <circle cx="55" cy="60" r="35"/>
              </clipPath>
              <circle cx="95" cy="60" r="35" fill="#fafafa" clip-path="url(#shadeCompUnion)"/>
              <circle cx="55" cy="60" r="35" fill="#fafafa"/>
            </svg>
            <p class="shading-label">(A ∪ B)′</p>
          </div>
          <div class="shading-example">
            <svg viewBox="0 0 150 120" class="set-diagram-small">
              <rect x="3" y="3" width="144" height="114" fill="#fafafa" stroke="#333" stroke-width="1" rx="2"/>
              <circle cx="55" cy="60" r="35" fill="#ff9800" stroke="#e65100" stroke-width="1" opacity="0.4"/>
              <circle cx="95" cy="60" r="35" fill="#fafafa" stroke="#388e3c" stroke-width="1"/>
            </svg>
            <p class="shading-label">A \ B (A − B)</p>
          </div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Problem-Solving Strategy</h2>
        <div class="strategy-steps">
          <div class="strategy-step">
            <span class="step-number">1</span>
            <div class="step-content">
              <strong>Draw the diagram</strong> — Start with the rectangle (U) and draw circles for each set mentioned.
            </div>
          </div>
          <div class="strategy-step">
            <span class="step-number">2</span>
            <div class="step-content">
              <strong>Fill from the inside out</strong> — Start with the innermost region (intersection of all sets)
              and work outward. This prevents double-counting.
            </div>
          </div>
          <div class="strategy-step">
            <span class="step-number">3</span>
            <div class="step-content">
              <strong>Use the complement</strong> — If given |U| and asked for a region, sometimes it's easier
              to find what you DON'T want and subtract.
            </div>
          </div>
          <div class="strategy-step">
            <span class="step-number">4</span>
            <div class="step-content">
              <strong>Check your work</strong> — All regions should sum to |U|. If they don't, recheck your arithmetic.
            </div>
          </div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Common Exam P Scenarios</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Survey Problems</h3>
            <p>"Of 100 people, 60 like A, 50 like B, 20 like both..."</p>
          </div>
          <div class="property">
            <h3>Insurance Events</h3>
            <p>"P(claim A or B) given individual probabilities and overlap"</p>
          </div>
          <div class="property">
            <h3>"At least one"</h3>
            <p>P(A ∪ B) = 1 − P(A′ ∩ B′)</p>
          </div>
          <div class="property">
            <h3>"Exactly one"</h3>
            <p>P(A △ B) = P(A) + P(B) − 2P(A ∩ B)</p>
          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from "preact/hooks";

const navStructure = [
  {
    id: "general-probability",
    title: "General Probability",
    sections: [
      {
        title: "A. Probability Fundamentals",
        items: [
          { id: "a1-set-functions", label: "A.1 Set Functions" },
          { id: "a2-venn-diagrams", label: "A.2 Venn Diagrams" },
          { id: "a3-sample-space", label: "A.3 Sample Space" },
          { id: "a4-events", label: "A.4 Events" },
          {
            id: "a5-probability-set-function",
            label: "A.5 Probability as a Set Function",
          },
          { id: "a6-axioms-probability", label: "A.6 Axioms of Probability" },
        ],
      },
      {
        title: "B. Combinatorics",
        items: [
          { id: "b1-counting-principles", label: "B.1 Counting Principles" },
          { id: "b2-permutations", label: "B.2 Permutations" },
          { id: "b3-combinations", label: "B.3 Combinations" },
          {
            id: "b4-combinatorial-probability",
            label: "B.4 Combinatorial Probability",
          },
        ],
      },
    ],
  },
];

export function Sidebar({ currentPage }) {
  const [openSections, setOpenSections] = useState(["general-probability"]);

  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <nav class="sidebar">
      <div class="sidebar-header">
        <h1>Exam P</h1>
      </div>
      <ul class="nav-list">
        {navStructure.map((category) => (
          <li
            class={`nav-section ${
              openSections.includes(category.id) ? "open" : ""
            }`}
            key={category.id}
          >
            <button
              class="nav-section-toggle"
              onClick={() => toggleSection(category.id)}
            >
              <span class="toggle-icon">▶</span>
              {category.title}
            </button>
            <ul class="nav-subsection">
              {category.sections.map((section) => (
                <li key={section.title}>
                  <div class="nav-subsection-header">
                    <span>{section.title}</span>
                  </div>
                  {section.items.map((item) => (
                    <a
                      href={`#/${item.id}`}
                      class={`nav-link ${
                        currentPage === item.id ? "active" : ""
                      }`}
                      key={item.id}
                    >
                      {item.label}
                    </a>
                  ))}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

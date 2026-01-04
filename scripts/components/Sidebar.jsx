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
      {
        title: "C. Independence",
        items: [
          { id: "c1-independent-events", label: "C.1 Independent Events" },
          { id: "c2-independent-trials", label: "C.2 Independent Trials" },
        ],
      },
      {
        title: "D. Mutually Exclusive Events",
        items: [
          {
            id: "d1-mutually-exclusive",
            label: "D.1 Mutually Exclusive Events",
          },
          { id: "d2-partitions", label: "D.2 Partitions & Total Probability" },
        ],
      },
      {
        title: "E. Addition & Multiplication Rules",
        items: [
          { id: "e1-addition-rule", label: "E.1 Addition Rule" },
          { id: "e2-multiplication-rule", label: "E.2 Multiplication Rule" },
          { id: "e3-combined-problems", label: "E.3 Combined Problems" },
        ],
      },
      {
        title: "F. Conditional Probability",
        items: [
          {
            id: "f1-conditional-probability",
            label: "F.1 Conditional Probability",
          },
          { id: "f2-bayes-theorem", label: "F.2 Bayes' Theorem" },
          {
            id: "f3-law-total-probability",
            label: "F.3 Law of Total Probability",
          },
        ],
      },
    ],
  },
  {
    id: "univariate-random-variables",
    title: "Univariate Random Variables",
    sections: [
      {
        title: "A. Random Variables, PDFs & CDFs",
        items: [
          { id: "urv-a1-random-variables", label: "A.1 Random Variables" },
          { id: "urv-a2-pdf", label: "A.2 Probability Density Functions" },
          { id: "urv-a3-cdf", label: "A.3 Cumulative Distribution Functions" },
        ],
      },
      {
        title: "B. Discrete Distributions",
        items: [
          { id: "urv-b1-discrete-uniform", label: "B.1 Discrete Uniform" },
          { id: "urv-b2-binomial", label: "B.2 Binomial" },
          { id: "urv-b3-geometric", label: "B.3 Geometric" },
          { id: "urv-b4-negative-binomial", label: "B.4 Negative Binomial" },
          { id: "urv-b5-hypergeometric", label: "B.5 Hypergeometric" },
          { id: "urv-b6-poisson", label: "B.6 Poisson" },
        ],
      },
      {
        title: "C. Continuous Distributions",
        items: [
          { id: "urv-c1-continuous-uniform", label: "C.1 Continuous Uniform" },
          { id: "urv-c2-exponential", label: "C.2 Exponential" },
          { id: "urv-c3-gamma", label: "C.3 Gamma" },
          { id: "urv-c4-beta", label: "C.4 Beta" },
          { id: "urv-c5-normal", label: "C.5 Normal" },
          { id: "urv-c6-lognormal", label: "C.6 Lognormal" },
        ],
      },
      {
        title: "D. Conditional Probabilities",
        items: [
          {
            id: "urv-d1-conditional-discrete",
            label: "D.1 Conditional: Discrete",
          },
          {
            id: "urv-d2-conditional-continuous",
            label: "D.2 Conditional: Continuous",
          },
        ],
      },
      {
        title: "E. Expected Value & Moments",
        items: [
          { id: "urv-e1-expected-value", label: "E.1 Expected Value" },
          { id: "urv-e2-moments", label: "E.2 Moments" },
          {
            id: "urv-e3-mode-median-percentiles",
            label: "E.3 Mode, Median & Percentiles",
          },
        ],
      },
      {
        title: "F. Variance & Standard Deviation",
        items: [
          { id: "urv-f1-variance", label: "F.1 Variance" },
          { id: "urv-f2-standard-deviation", label: "F.2 Standard Deviation" },
          {
            id: "urv-f3-coefficient-variation",
            label: "F.3 Coefficient of Variation",
          },
        ],
      },
      {
        title: "G. Insurance Payments",
        items: [
          { id: "urv-g1-deductibles", label: "G.1 Deductibles" },
          { id: "urv-g2-coinsurance", label: "G.2 Coinsurance" },
          { id: "urv-g3-benefit-limits", label: "G.3 Benefit Limits" },
          { id: "urv-g4-inflation", label: "G.4 Inflation Adjustments" },
        ],
      },
      {
        title: "H. Loss & Payment Variables",
        items: [
          { id: "urv-h1-loss-variable", label: "H.1 Loss Random Variable" },
          {
            id: "urv-h2-payment-variable",
            label: "H.2 Payment Random Variable",
          },
          {
            id: "urv-h3-moments-loss-payment",
            label: "H.3 Moments of Loss & Payment",
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

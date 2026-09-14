// Single source of truth for the sidebar, routing, prev/next links, and the home page.
// Items with a `page` render pages/<page>.jsx; items without one show "coming soon".
// Kept free of Vite-only APIs so Node tooling (tools/check-problems.js) can import it.
export const navStructure = [
  {
    id: "general-probability",
    title: "General Probability",
    sections: [
      {
        title: "A. Probability Fundamentals",
        items: [
          { id: "a1-set-functions", label: "A.1 Set Functions", page: "SetFunctions" },
          { id: "a2-venn-diagrams", label: "A.2 Venn Diagrams", page: "VennDiagrams" },
          { id: "a3-sample-space", label: "A.3 Sample Space", page: "SampleSpace" },
          { id: "a4-events", label: "A.4 Events", page: "Events" },
          {
            id: "a5-probability-set-function",
            label: "A.5 Probability as a Set Function",
            page: "ProbabilitySetFunction",
          },
          {
            id: "a6-axioms-probability",
            label: "A.6 Axioms of Probability",
            page: "AxiomsOfProbability",
          },
        ],
      },
      {
        title: "B. Combinatorics",
        items: [
          {
            id: "b1-counting-principles",
            label: "B.1 Counting Principles",
            page: "CountingPrinciples",
          },
          { id: "b2-permutations", label: "B.2 Permutations", page: "Permutations" },
          { id: "b3-combinations", label: "B.3 Combinations", page: "Combinations" },
          {
            id: "b4-combinatorial-probability",
            label: "B.4 Combinatorial Probability",
            page: "CombinatorialProbability",
          },
        ],
      },
      {
        title: "C. Independence",
        items: [
          {
            id: "c1-independent-events",
            label: "C.1 Independent Events",
            page: "IndependentEvents",
          },
          {
            id: "c2-independent-trials",
            label: "C.2 Independent Trials",
            page: "IndependentTrials",
          },
        ],
      },
      {
        title: "D. Mutually Exclusive Events",
        items: [
          {
            id: "d1-mutually-exclusive",
            label: "D.1 Mutually Exclusive Events",
            page: "MutuallyExclusive",
          },
          {
            id: "d2-partitions",
            label: "D.2 Partitions & Total Probability",
            page: "Partitions",
          },
        ],
      },
      {
        title: "E. Addition & Multiplication Rules",
        items: [
          { id: "e1-addition-rule", label: "E.1 Addition Rule", page: "AdditionRule" },
          {
            id: "e2-multiplication-rule",
            label: "E.2 Multiplication Rule",
            page: "MultiplicationRule",
          },
          {
            id: "e3-combined-problems",
            label: "E.3 Combined Problems",
            page: "CombinedProblems",
          },
        ],
      },
      {
        title: "F. Conditional Probability",
        items: [
          {
            id: "f1-conditional-probability",
            label: "F.1 Conditional Probability",
            page: "ConditionalProbability",
          },
          { id: "f2-bayes-theorem", label: "F.2 Bayes' Theorem", page: "BayesTheorem" },
          {
            id: "f3-law-total-probability",
            label: "F.3 Law of Total Probability",
            page: "LawTotalProbability",
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
          {
            id: "urv-a1-random-variables",
            label: "A.1 Random Variables",
            page: "RandomVariables",
          },
          { id: "urv-a2-pdf", label: "A.2 Probability Density Functions", page: "PDF" },
          { id: "urv-a3-cdf", label: "A.3 Cumulative Distribution Functions", page: "CDF" },
        ],
      },
      {
        title: "B. Discrete Distributions",
        items: [
          {
            id: "urv-b1-discrete-uniform",
            label: "B.1 Discrete Uniform",
            page: "DiscreteUniform",
          },
          { id: "urv-b2-binomial", label: "B.2 Binomial", page: "Binomial" },
          { id: "urv-b3-geometric", label: "B.3 Geometric", page: "Geometric" },
          {
            id: "urv-b4-negative-binomial",
            label: "B.4 Negative Binomial",
            page: "NegativeBinomial",
          },
          { id: "urv-b5-hypergeometric", label: "B.5 Hypergeometric", page: "Hypergeometric" },
          { id: "urv-b6-poisson", label: "B.6 Poisson", page: "Poisson" },
        ],
      },
      {
        title: "C. Continuous Distributions",
        items: [
          {
            id: "urv-c1-continuous-uniform",
            label: "C.1 Continuous Uniform",
            page: "ContinuousUniform",
          },
          { id: "urv-c2-exponential", label: "C.2 Exponential", page: "Exponential" },
          { id: "urv-c3-gamma", label: "C.3 Gamma", page: "Gamma" },
          { id: "urv-c4-beta", label: "C.4 Beta", page: "Beta" },
          { id: "urv-c5-normal", label: "C.5 Normal", page: "Normal" },
          { id: "urv-c6-lognormal", label: "C.6 Lognormal", page: "Lognormal" },
        ],
      },
      {
        title: "D. Conditional Probabilities",
        items: [
          {
            id: "urv-d1-conditional-discrete",
            label: "D.1 Conditional: Discrete",
            page: "ConditionalDiscrete",
          },
          { id: "urv-d2-conditional-continuous", label: "D.2 Conditional: Continuous" },
        ],
      },
      {
        title: "E. Expected Value & Moments",
        items: [
          { id: "urv-e1-expected-value", label: "E.1 Expected Value" },
          { id: "urv-e2-moments", label: "E.2 Moments" },
          { id: "urv-e3-mode-median-percentiles", label: "E.3 Mode, Median & Percentiles" },
        ],
      },
      {
        title: "F. Variance & Standard Deviation",
        items: [
          { id: "urv-f1-variance", label: "F.1 Variance" },
          { id: "urv-f2-standard-deviation", label: "F.2 Standard Deviation" },
          { id: "urv-f3-coefficient-variation", label: "F.3 Coefficient of Variation" },
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
          { id: "urv-h2-payment-variable", label: "H.2 Payment Random Variable" },
          { id: "urv-h3-moments-loss-payment", label: "H.3 Moments of Loss & Payment" },
        ],
      },
    ],
  },
  {
    id: "multivariate-random-variables",
    title: "Multivariate Random Variables",
    sections: [
      {
        title: "A. Joint & Conditional Distributions",
        items: [
          {
            id: "mrv-a1-joint-distributions",
            label: "A.1 Joint Distributions",
            page: "JointDistributions",
          },
          {
            id: "mrv-a2-conditional-distributions",
            label: "A.2 Conditional Distributions",
            page: "ConditionalDistributions",
          },
        ],
      },
    ],
  },
];

export const topics = navStructure.flatMap((category) =>
  category.sections.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      categoryId: category.id,
      sectionTitle: section.title,
    }))
  )
);

export const topicById = Object.fromEntries(topics.map((topic) => [topic.id, topic]));

export const availableTopics = topics.filter((topic) => topic.page);

// Nearest topics with content on either side, skipping "coming soon" entries.
export function getAdjacentTopics(id) {
  const index = topics.findIndex((topic) => topic.id === id);
  return {
    prev: topics.slice(0, index).findLast((topic) => topic.page),
    next: topics.slice(index + 1).find((topic) => topic.page),
  };
}

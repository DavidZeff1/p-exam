export default [
  {
    question: "An insurance agency has $500$ clients. Of these, $290$ hold an auto policy with the agency, $170$ hold a renters policy with the agency, and $120$ hold neither policy. Calculate the probability that a randomly selected client holds an auto policy but not a renters policy.",
    choices: ["$0.16$", "$0.18$", "$0.24$", "$0.42$", "$0.58$"],
    answer: 3,
    solution: [
      "Let $A$ and $R$ be the sets of clients holding auto and renters policies. The neither region is $(A \\cup R)'$, so $|A \\cup R| = 500 - 120 = 380$.",
      "By inclusion-exclusion, $|A \\cap R| = |A| + |R| - |A \\cup R| = 290 + 170 - 380 = 80$.",
      "The auto-only region is $A \\cap R'$, so $|A \\cap R'| = |A| - |A \\cap R| = 290 - 80 = 210$.",
      "$$P(A \\cap R') = \\frac{210}{500} = 0.42$$",
    ],
  },
  {
    question: "For a randomly selected driver insured by a company, let $A$ be the event that the driver files a collision claim during the year and $B$ be the event that the driver files a liability claim during the year. The probability that the driver files at least one of these two types of claims is $0.36$. The probability that the driver files a collision claim or does not file a liability claim is $0.88$. Calculate $P(A)$.",
    choices: ["$0.12$", "$0.24$", "$0.48$", "$0.52$", "$0.64$"],
    answer: 1,
    solution: [
      "The event $A \\cup B'$ covers every region of the diagram except the $B$-only region $A' \\cap B$, so $P(A' \\cap B) = 1 - P(A \\cup B') = 1 - 0.88 = 0.12$.",
      "The union $A \\cup B$ splits into the disjoint pieces $A$ and $A' \\cap B$, so $P(A) = P(A \\cup B) - P(A' \\cap B)$.",
      "$$P(A) = 0.36 - 0.12 = 0.24$$",
    ],
  },
  {
    question: "An insurer offers three optional endorsements on its commercial policies: cyber liability, equipment breakdown, and employment practices liability. For a randomly selected policyholder, the probabilities of purchasing the cyber, equipment breakdown, and employment practices endorsements are $0.40$, $0.35$, and $0.25$, respectively. The probability of purchasing both cyber and equipment breakdown is $0.15$, both cyber and employment practices is $0.10$, and both equipment breakdown and employment practices is $0.08$. The probability of purchasing all three endorsements is $0.04$. Calculate the probability that a randomly selected policyholder purchases exactly one of the three endorsements.",
    choices: ["$0.25$", "$0.29$", "$0.34$", "$0.38$", "$0.46$"],
    answer: 4,
    solution: [
      "Let $C$, $E$, and $L$ be the three endorsements. Fill the diagram from the inside out: $P(C \\cap E \\cap L) = 0.04$.",
      "The two-only regions are $0.15 - 0.04 = 0.11$ for $C$ and $E$, $0.10 - 0.04 = 0.06$ for $C$ and $L$, and $0.08 - 0.04 = 0.04$ for $E$ and $L$.",
      "The one-only regions are $C$: $0.40 - 0.11 - 0.06 - 0.04 = 0.19$; $E$: $0.35 - 0.11 - 0.04 - 0.04 = 0.16$; $L$: $0.25 - 0.06 - 0.04 - 0.04 = 0.11$.",
      "Exactly one is $0.19 + 0.16 + 0.11 = 0.46$. As a check, $1.00 - 2(0.33) + 3(0.04) = 0.46$.",
      "$$P(\\text{exactly one}) = 0.46$$",
    ],
  },
  {
    question: "An employer offers three supplementary coverages: dental, vision, and hearing. The coverages are sold only in bundles, so each employee chooses exactly two of the three coverages, all three coverages, or none. For a randomly selected employee, the probabilities of having dental, vision, and hearing coverage are $0.50$, $0.40$, and $0.30$, respectively, and the probability of having all three coverages is $0.08$. Calculate the probability that a randomly selected employee has none of the three coverages.",
    choices: ["$0.36$", "$0.40$", "$0.44$", "$0.48$", "$0.52$"],
    answer: 2,
    solution: [
      "Let $e_2$ and $e_3$ be the probabilities of having exactly two and all three coverages. No employee is in a one-only region, so those three regions have probability $0$.",
      "Adding the three coverage probabilities counts each two-only region twice and the center three times: $0.50 + 0.40 + 0.30 = 2e_2 + 3e_3$.",
      "$$1.20 = 2e_2 + 3(0.08) \\implies e_2 = \\frac{1.20 - 0.24}{2} = 0.48$$",
      "Every region is the none region, a two-only region, or the center, so $P(\\text{none}) = 1 - e_2 - e_3$.",
      "$$P(\\text{none}) = 1 - 0.48 - 0.08 = 0.44$$",
    ],
  },
];

export default [
  {
    question: "An auto insurer has $1{,}000$ policies in force. Of these, $620$ include collision coverage, $410$ include comprehensive coverage, and $250$ include both. Calculate the probability that a randomly selected policy includes exactly one of these two coverages.",
    choices: ["$0.22$", "$0.25$", "$0.53$", "$0.75$", "$0.78$"],
    answer: 2,
    solution: [
      "Let $C$ be collision and $M$ be comprehensive. Fill the diagram from the inside out: $|C \\cap M| = 250$.",
      "Collision only: $|C \\cap M'| = 620 - 250 = 370$. Comprehensive only: $|C' \\cap M| = 410 - 250 = 160$.",
      "Exactly one is the sum of the two single-set regions: $370 + 160 = 530$, which matches $|C| + |M| - 2|C \\cap M| = 620 + 410 - 500$.",
      "$$P(\\text{exactly one}) = \\frac{530}{1{,}000} = 0.53$$",
    ],
  },
  {
    question: "An employer offers three voluntary benefits: dental, vision, and supplemental life insurance. Of its $200$ employees, $110$ are enrolled in dental, $80$ in vision, $70$ in life, $45$ in both dental and vision, $30$ in both dental and life, $25$ in both vision and life, and $25$ are enrolled in none of the three. Calculate the probability that a randomly selected employee is enrolled in exactly two of the three benefits.",
    choices: ["$0.075$", "$0.275$", "$0.350$", "$0.425$", "$0.500$"],
    answer: 1,
    solution: [
      "Enrolled in at least one: $|D \\cup V \\cup L| = 200 - 25 = 175$.",
      "By inclusion-exclusion, $175 = 110 + 80 + 70 - 45 - 30 - 25 + |D \\cap V \\cap L|$, so $|D \\cap V \\cap L| = 175 - 160 = 15$.",
      "Each pairwise count includes the center, so the two-only regions are $45 - 15 = 30$, $30 - 15 = 15$, and $25 - 15 = 10$.",
      "Exactly two: $30 + 15 + 10 = 55$.",
      "$$P(\\text{exactly two}) = \\frac{55}{200} = 0.275$$",
    ],
  },
  {
    question: "For a randomly selected household, the probability of having an auto policy with a particular insurer is $0.60$, and the probability of having a homeowners policy with that insurer is $0.35$. The probability that the household has exactly one of these two policies with the insurer is $0.45$. Calculate the probability that the household has neither policy with the insurer.",
    choices: ["$0.05$", "$0.25$", "$0.30$", "$0.55$", "$0.70$"],
    answer: 2,
    solution: [
      "Let $A$ be auto and $H$ be homeowners. Exactly one is $P(A) + P(H) - 2P(A \\cap H)$.",
      "$$0.45 = 0.60 + 0.35 - 2P(A \\cap H) \\implies P(A \\cap H) = 0.25$$",
      "$P(A \\cup H) = 0.60 + 0.35 - 0.25 = 0.70$.",
      "$$P(A' \\cap H') = 1 - P(A \\cup H) = 1 - 0.70 = 0.30$$",
    ],
  },
  {
    question: "A health insurer tracks three chronic conditions among its members: hypertension, diabetes, and obesity. For a randomly selected member, the probability of having hypertension is $0.30$, of having diabetes is $0.20$, and of having obesity is $0.35$. The probability of having exactly two of the three conditions is $0.14$, and the probability of having all three is $0.04$. Calculate the probability that a randomly selected member has none of the three conditions.",
    choices: ["$0.25$", "$0.29$", "$0.33$", "$0.37$", "$0.41$"],
    answer: 3,
    solution: [
      "Let $e_1$, $e_2$, $e_3$ be the probabilities of exactly one, exactly two, and all three conditions. Summing the three single-condition probabilities counts each exactly-two region twice and the center three times.",
      "$$0.30 + 0.20 + 0.35 = e_1 + 2e_2 + 3e_3 = e_1 + 0.28 + 0.12 \\implies e_1 = 0.45$$",
      "The at-least-one region is the union of the exactly-one, exactly-two, and all-three regions: $e_1 + e_2 + e_3 = 0.45 + 0.14 + 0.04 = 0.63$.",
      "Check with inclusion-exclusion: the pairwise intersections sum to $e_2 + 3e_3 = 0.26$, and $0.85 - 0.26 + 0.04 = 0.63$.",
      "$$P(\\text{none}) = 1 - 0.63 = 0.37$$",
    ],
  },
];

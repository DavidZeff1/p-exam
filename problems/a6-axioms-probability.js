export default [
  {
    question: "For a randomly selected auto policyholder, the probability of filing a collision claim during the year is $0.12$, the probability of filing a comprehensive claim during the year is $0.08$, and the probability of filing both a collision claim and a comprehensive claim during the year is $0.03$. Calculate the probability that the policyholder files neither a collision claim nor a comprehensive claim during the year.",
    choices: ["$0.17$", "$0.20$", "$0.77$", "$0.80$", "$0.83$"],
    answer: 4,
    solution: [
      "Let $C$ be the event of a collision claim and $M$ the event of a comprehensive claim. Filing neither is the event $C' \\cap M' = (C \\cup M)'$.",
      "By the addition rule, the overlap is counted twice in $P(C) + P(M)$ and must be subtracted once: $$P(C \\cup M) = 0.12 + 0.08 - 0.03 = 0.17$$",
      "By the complement rule, $$P(C' \\cap M') = 1 - P(C \\cup M) = 1 - 0.17 = 0.83$$",
    ],
  },
  {
    question: "For a randomly selected member of a health plan, during a year the probability of visiting a dentist is $0.55$, the probability of visiting an optometrist is $0.30$, and the probability of visiting a physical therapist is $0.15$. The probability of visiting a dentist or an optometrist is $0.70$, the probability of visiting a dentist or a physical therapist is $0.62$, and the probability of visiting an optometrist or a physical therapist is $0.40$. The probability of visiting all three is $0.03$. Calculate the probability that the member visits none of the three during the year.",
    choices: ["$0.15$", "$0.25$", "$0.28$", "$0.31$", "$0.75$"],
    answer: 1,
    solution: [
      "Let $D$, $O$, and $T$ be the events of visiting a dentist, an optometrist, and a physical therapist. Rearranging the addition rule, $P(X \\cap Y) = P(X) + P(Y) - P(X \\cup Y)$.",
      "$P(D \\cap O) = 0.55 + 0.30 - 0.70 = 0.15$, $P(D \\cap T) = 0.55 + 0.15 - 0.62 = 0.08$, and $P(O \\cap T) = 0.30 + 0.15 - 0.40 = 0.05$.",
      "By inclusion-exclusion for three events, $$P(D \\cup O \\cup T) = 1.00 - (0.15 + 0.08 + 0.05) + 0.03 = 0.75$$",
      "By the complement rule, $$P(\\text{none}) = 1 - P(D \\cup O \\cup T) = 1 - 0.75 = 0.25$$",
    ],
  },
  {
    question: "An auto insurer classifies each policyholder by age as exactly one of young (under $25$), middle-aged ($25$ to $65$), or senior (over $65$). For a randomly selected policyholder, the probability of being young is $0.20$ and the probability of being senior is $0.25$. The probability that the policyholder has filed at least one claim in the past five years is $0.40$, and the probability that the policyholder is young and has filed at least one claim in the past five years is $0.12$. No other information about these events is available. Calculate the largest possible value of the probability that the policyholder is middle-aged and has filed no claims in the past five years.",
    choices: ["$0.27$", "$0.40$", "$0.52$", "$0.55$", "$0.60$"],
    answer: 2,
    solution: [
      "Let $Y$, $M$, and $O$ be the age classes and $K$ the event of at least one claim. The age classes partition $S$, so $M \\subseteq Y'$ and therefore $M \\cap K' \\subseteq Y' \\cap K'$.",
      "By the addition rule, $P(Y \\cup K) = 0.20 + 0.40 - 0.12 = 0.48$, so $P(Y' \\cap K') = 1 - 0.48 = 0.52$.",
      "By monotonicity, $P(M \\cap K') \\le P(Y' \\cap K') = 0.52$. This bound is smaller than the bounds $P(M) = 1 - 0.20 - 0.25 = 0.55$ and $P(K') = 0.60$.",
      "The bound is attained if every senior has filed a claim, which is possible because $P(O) = 0.25 \\le P(Y' \\cap K) = 0.40 - 0.12 = 0.28$. Then $P(M \\cap K) = 0.28 - 0.25 = 0.03$ and $P(M \\cap K') = 0.55 - 0.03 = 0.52$.",
      "$$\\max P(M \\cap K') = 0.52$$",
    ],
  },
  {
    question: "A homeowners insurer offers three optional coverages: water backup, equipment breakdown, and identity theft. For a randomly selected policyholder, the probabilities of purchasing these coverages are $0.45$, $0.35$, and $0.30$, respectively. The probability of purchasing none of the three coverages is $0.24$, and the probability of purchasing all three coverages is $0.06$. Calculate the probability that a randomly selected policyholder purchases exactly two of the three coverages.",
    choices: ["$0.22$", "$0.28$", "$0.34$", "$0.40$", "$0.74$"],
    answer: 0,
    solution: [
      "Let $W$, $E$, and $I$ be the three purchase events. By the complement rule, $P(W \\cup E \\cup I) = 1 - 0.24 = 0.76$.",
      "By inclusion-exclusion, $0.76 = 0.45 + 0.35 + 0.30 - \\left[P(W \\cap E) + P(W \\cap I) + P(E \\cap I)\\right] + 0.06$, so the sum of the pairwise intersections is $1.10 + 0.06 - 0.76 = 0.40$.",
      "Each pairwise intersection is the disjoint union of an exactly-two region and the all-three region $W \\cap E \\cap I$. By additivity, the sum of the three pairwise intersections counts each exactly-two region once and the all-three region three times: $$0.40 = P(\\text{exactly two}) + 3(0.06)$$",
      "$$P(\\text{exactly two}) = 0.40 - 0.18 = 0.22$$",
    ],
  },
];

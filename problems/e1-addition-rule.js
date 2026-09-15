export default [
  {
    question: "An employer offers a dental plan and a vision plan. Of its employees, $55\\%$ enroll in the dental plan, $40\\%$ enroll in the vision plan, and $25\\%$ enroll in both plans. Calculate the probability that a randomly selected employee enrolls in at least one of the two plans.",
    choices: ["$0.22$", "$0.25$", "$0.30$", "$0.45$", "$0.70$"],
    answer: 4,
    solution: [
      "Let $D$ be enrollment in the dental plan and $V$ enrollment in the vision plan. The plans overlap, so the intersection must be subtracted once.",
      "$$P(D \\cup V) = P(D) + P(V) - P(D \\cap V)$$",
      "$$P(D \\cup V) = 0.55 + 0.40 - 0.25 = 0.70$$",
    ],
  },
  {
    question: "A homeowners insurer offers three optional riders: jewelry ($J$), flood ($F$), and earthquake ($E$). For a randomly selected policy, $P(J) = 0.30$, $P(F) = 0.25$, $P(E) = 0.20$, $P(J \\cap F) = 0.10$, $P(J \\cap E) = 0.08$, and $P(F \\cap E) = 0.06$. The probability that a policy has none of the three riders is $0.45$. Calculate the probability that a randomly selected policy has all three riders.",
    choices: ["$0.04$", "$0.06$", "$0.08$", "$0.10$", "$0.12$"],
    answer: 0,
    solution: [
      "By the complement, $P(J \\cup F \\cup E) = 1 - 0.45 = 0.55$.",
      "By inclusion-exclusion, $P(J \\cup F \\cup E) = P(J) + P(F) + P(E) - P(J \\cap F) - P(J \\cap E) - P(F \\cap E) + P(J \\cap F \\cap E)$.",
      "$$0.55 = 0.75 - 0.24 + P(J \\cap F \\cap E) = 0.51 + P(J \\cap F \\cap E)$$",
      "$$P(J \\cap F \\cap E) = 0.55 - 0.51 = 0.04$$",
    ],
  },
  {
    question: "For a policyholder who has both auto and homeowners coverage, let $A$ be the event of an auto claim during the year and $H$ the event of a homeowners claim during the year. The probability of at least one of the two types of claim is $0.35$, the probability of not filing both types of claim is $0.90$, and $P(A)$ exceeds $P(H)$ by $0.05$. Calculate $P(A)$.",
    choices: ["$0.10$", "$0.15$", "$0.20$", "$0.25$", "$0.30$"],
    answer: 3,
    solution: [
      "Not filing both is $A' \\cup H'$, the complement of $A \\cap H$, so $P(A \\cap H) = 1 - 0.90 = 0.10$.",
      "By the addition rule, $P(A) + P(H) = P(A \\cup H) + P(A \\cap H) = 0.35 + 0.10 = 0.45$.",
      "Combine with $P(A) - P(H) = 0.05$: $2P(A) = 0.50$.",
      "$$P(A) = 0.25$$",
    ],
  },
  {
    question: "A claims office has three adjusters. Each of $5$ incoming claims is assigned to exactly one adjuster: to the first adjuster with probability $0.5$, to the second with probability $0.3$, and to the third with probability $0.2$. Assignments of different claims are independent. Calculate the probability that at least one adjuster is assigned none of the $5$ claims.",
    choices: ["$0.459$", "$0.493$", "$0.507$", "$0.527$", "$0.561$"],
    answer: 1,
    solution: [
      "Let $N_i$ be the event that adjuster $i$ receives no claims. Then $P(N_1) = 0.5^5$, $P(N_2) = 0.7^5$, $P(N_3) = 0.8^5$, and the singles sum to $0.03125 + 0.16807 + 0.32768 = 0.52700$.",
      "$N_1 \\cap N_2$ means every claim goes to adjuster 3, so $P(N_1 \\cap N_2) = 0.2^5$; similarly $P(N_1 \\cap N_3) = 0.3^5$ and $P(N_2 \\cap N_3) = 0.5^5$. The pairs sum to $0.00032 + 0.00243 + 0.03125 = 0.03400$.",
      "$N_1 \\cap N_2 \\cap N_3 = \\emptyset$, since every claim goes to some adjuster.",
      "$$P(N_1 \\cup N_2 \\cup N_3) = 0.52700 - 0.03400 + 0 = 0.493$$",
    ],
  },
];

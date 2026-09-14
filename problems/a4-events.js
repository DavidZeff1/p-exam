export default [
  {
    question: "An auto insurer records the number of claims filed by each policyholder during a year, classified as $0$, $1$, $2$, or $3$ or more claims. For a randomly selected policyholder, the probability of filing $0$ claims is $0.55$, the probability of filing exactly $1$ claim is $0.25$, and the probability of filing exactly $2$ claims is $0.12$. Calculate the probability that a randomly selected policyholder files at least $2$ claims during the year.",
    choices: ["$0.08$", "$0.20$", "$0.37$", "$0.45$", "$0.80$"],
    answer: 1,
    solution: [
      "The events $\\{0\\}$, $\\{1\\}$, $\\{2\\}$, and $\\{3 \\text{ or more}\\}$ are mutually exclusive and exhaustive, so they form a partition of $S$.",
      "The event of at least $2$ claims is the complement of the event $E = \\{0\\} \\cup \\{1\\}$, and since $\\{0\\}$ and $\\{1\\}$ are mutually exclusive, $P(E) = 0.55 + 0.25 = 0.80$.",
      "$$P(E') = 1 - P(E) = 1 - 0.80 = 0.20$$",
    ],
  },
  {
    question: "For a randomly selected customer of an insurance agency, let $A$ be the event that the customer has an auto policy and $B$ the event that the customer has a homeowners policy. The probability that the customer has an auto policy or a homeowners policy (or both) is $0.76$. The probability that the customer has an auto policy or does not have a homeowners policy (or both) is $0.84$. Calculate $P(A)$.",
    choices: ["$0.08$", "$0.16$", "$0.24$", "$0.40$", "$0.60$"],
    answer: 4,
    solution: [
      "We are given $P(A \\cup B) = 0.76$ and $P(A \\cup B') = 0.84$.",
      "By the complement rule, $P(A' \\cap B') = 1 - P(A \\cup B) = 0.24$ and $P(A' \\cap B) = 1 - P(A \\cup B') = 0.16$.",
      "The events $A' \\cap B$ and $A' \\cap B'$ are mutually exclusive and their union is $A'$, so $P(A') = 0.16 + 0.24 = 0.40$.",
      "$$P(A) = 1 - P(A') = 1 - 0.40 = 0.60$$",
    ],
  },
  {
    question: "An auto insurer sends every claim for more than \\$25,000 for an independent appraisal; claims for \\$25,000 or less may or may not be sent. For a randomly selected claim, the probability that it is sent for appraisal is $0.30$, the probability that it is for \\$25,000 or less is $0.88$, the probability that it is a glass-only claim is $0.40$, and the probability that it is a glass-only claim that is sent for appraisal is $0.05$. Calculate the probability that a randomly selected claim is not sent for appraisal, is for \\$25,000 or less, and is not a glass-only claim.",
    choices: ["$0.18$", "$0.23$", "$0.30$", "$0.35$", "$0.65$"],
    answer: 3,
    solution: [
      "Let $A$ be the event that the claim is sent for appraisal, $L$ the event that it is for more than \\$25,000, and $G$ the event that it is glass-only. Every large claim is appraised, so $L \\subseteq A$.",
      "The requested event is $A' \\cap L' \\cap G'$, the complement of $A \\cup L \\cup G$. Because $L \\subseteq A$, $A \\cup L \\cup G = A \\cup G$, so $P(L) = 0.12$ is not needed.",
      "$$P(A \\cup G) = P(A) + P(G) - P(A \\cap G) = 0.30 + 0.40 - 0.05 = 0.65$$",
      "$$P(A' \\cap L' \\cap G') = 1 - 0.65 = 0.35$$",
    ],
  },
  {
    question: "Each employee of a company elects at least one of three coverages: medical, dental, and vision. Every employee who elects vision also elects dental. Of the employees, $80\\%$ elect medical, $50\\%$ elect dental, $35\\%$ elect vision, and $20\\%$ elect both medical and vision. Calculate the probability that a randomly selected employee elects exactly one of the three coverages.",
    choices: ["$0.45$", "$0.50$", "$0.55$", "$0.65$", "$0.70$"],
    answer: 2,
    solution: [
      "Let $M$, $D$, and $V$ be the events that the employee elects medical, dental, and vision. The events are exhaustive, so $P(M \\cup D \\cup V) = 1$, and $V \\subseteq D$ gives $M \\cup D \\cup V = M \\cup D$.",
      "$$1 = P(M) + P(D) - P(M \\cap D) = 0.80 + 0.50 - P(M \\cap D) \\implies P(M \\cap D) = 0.30$$",
      "Medical only: $P(M) - P(M \\cap D) = 0.80 - 0.30 = 0.50$. Vision only is impossible because $V \\subseteq D$.",
      "Dental together with another coverage is $(D \\cap M) \\cup V$, with probability $0.30 + 0.35 - P(M \\cap V) = 0.30 + 0.35 - 0.20 = 0.45$, so dental only has probability $0.50 - 0.45 = 0.05$.",
      "$$P(\\text{exactly one}) = 0.50 + 0.05 + 0 = 0.55$$",
    ],
  },
];

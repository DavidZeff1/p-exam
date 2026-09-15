export default [
  {
    question: "A travel insurer sells trip cancellation coverage and emergency medical coverage. Of its customers, $60\\%$ buy trip cancellation coverage, $45\\%$ buy emergency medical coverage, and $30\\%$ buy both. Calculate the probability that a randomly selected customer buys exactly one of the two coverages.",
    choices: ["$0.15$", "$0.25$", "$0.30$", "$0.45$", "$0.75$"],
    answer: 3,
    solution: [
      "Let $C$ and $M$ be the events that the customer buys trip cancellation and emergency medical coverage. Buying exactly one is the symmetric difference $C \\triangle M = (C \\cup M) \\setminus (C \\cap M)$.",
      "$$P(C \\cup M) = P(C) + P(M) - P(C \\cap M) = 0.60 + 0.45 - 0.30 = 0.75$$",
      "Since $C \\cap M \\subseteq C \\cup M$, removing it subtracts its probability:",
      "$$P(C \\triangle M) = 0.75 - 0.30 = 0.45$$",
    ],
  },
  {
    question: "An insurer classifies each auto claim according to whether it includes a bodily injury component and whether it includes a property damage component. For a randomly selected claim, the probability that it includes at most one of the two components is $0.80$, the probability that it includes neither component is $0.15$, and the probability that it includes a bodily injury component is $0.50$. Calculate the probability that a randomly selected claim includes a property damage component.",
    choices: ["$0.15$", "$0.20$", "$0.30$", "$0.35$", "$0.55$"],
    answer: 4,
    solution: [
      "Let $I$ and $D$ be the events that the claim includes a bodily injury component and a property damage component.",
      "Including at most one component is the complement $(I \\cap D)' = I' \\cup D'$, so $P(I \\cap D) = 1 - 0.80 = 0.20$.",
      "By De Morgan's law, including neither is $I' \\cap D' = (I \\cup D)'$, so $P(I \\cup D) = 1 - 0.15 = 0.85$.",
      "From the addition rule $P(I \\cup D) = P(I) + P(D) - P(I \\cap D)$:",
      "$$P(D) = 0.85 - 0.50 + 0.20 = 0.55$$",
    ],
  },
  {
    question: "An insurance agency sells auto, homeowners, and life policies. Of its customers, $64\\%$ have an auto policy, $30\\%$ have both an auto policy and a homeowners policy, $22\\%$ have both an auto policy and a life policy, and $10\\%$ have all three types of policies. Calculate the probability that a randomly selected customer has an auto policy but has neither a homeowners policy nor a life policy.",
    choices: ["$0.02$", "$0.12$", "$0.22$", "$0.32$", "$0.42$"],
    answer: 2,
    solution: [
      "Let $A$, $H$, and $L$ be the events that the customer has an auto, homeowners, and life policy. By the distributive law, $A \\cap (H \\cup L) = (A \\cap H) \\cup (A \\cap L)$, and the overlap of these two events is $A \\cap H \\cap L$.",
      "$$P(A \\cap (H \\cup L)) = 0.30 + 0.22 - 0.10 = 0.42$$",
      "By De Morgan's law, having neither a homeowners nor a life policy is $H' \\cap L' = (H \\cup L)'$, so the requested event is $A \\cap (H \\cup L)' = A \\setminus \\big(A \\cap (H \\cup L)\\big)$.",
      "$$P(A \\cap H' \\cap L') = 0.64 - 0.42 = 0.22$$",
    ],
  },
  {
    question: "A homeowners insurer offers three optional endorsements: flood, earthquake, and identity theft. For a randomly selected policyholder, the probability of having neither the flood nor the earthquake endorsement is $0.30$, the probability of having neither the flood nor the identity theft endorsement is $0.20$, the probability of having neither the earthquake nor the identity theft endorsement is $0.40$, the probability of having none of the three endorsements is $0.15$, and the probability of having all three endorsements is $0.10$. Calculate the probability that a randomly selected policyholder has exactly two of the three endorsements.",
    choices: ["$0.20$", "$0.30$", "$0.40$", "$0.45$", "$0.55$"],
    answer: 1,
    solution: [
      "Let $F$, $E$, and $T$ be the events of having the flood, earthquake, and identity theft endorsements. Having the flood endorsement only is $F \\cap E' \\cap T' = (E' \\cap T') \\setminus (F' \\cap E' \\cap T')$, so its probability is $0.40 - 0.15 = 0.25$.",
      "In the same way, earthquake only has probability $0.20 - 0.15 = 0.05$ and identity theft only has probability $0.30 - 0.15 = 0.15$, so $P(\\text{exactly one}) = 0.25 + 0.05 + 0.15 = 0.45$.",
      "By De Morgan's law, having at least one endorsement is $F \\cup E \\cup T = (F' \\cap E' \\cap T')'$, with probability $1 - 0.15 = 0.85$.",
      "The event $F \\cup E \\cup T$ is the disjoint union of having exactly one, exactly two, and all three endorsements:",
      "$$P(\\text{exactly two}) = 0.85 - 0.45 - 0.10 = 0.30$$",
    ],
  },
];

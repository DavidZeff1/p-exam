export default [
  {
    question: "An auto insurer classifies each policyholder into exactly one of three risk classes: low, medium, or high. For a randomly selected policyholder, the probability of being in the low risk class is $0.64$, and the probability of being in the medium risk class is twice the probability of being in the high risk class. Calculate the probability that a randomly selected policyholder is in the high risk class.",
    choices: ["$0.12$", "$0.18$", "$0.24$", "$0.32$", "$0.36$"],
    answer: 0,
    solution: [
      "Let $L$, $M$, and $H$ be the three classes. They are mutually exclusive and $L \\cup M \\cup H = S$, so by additivity and normalization, $P(L) + P(M) + P(H) = P(S) = 1$.",
      "Substituting $P(M) = 2P(H)$ gives $0.64 + 2P(H) + P(H) = 1$, so $3P(H) = 0.36$.",
      "$$P(H) = \\frac{0.36}{3} = 0.12$$",
    ],
  },
  {
    question: "The number of claims $N$ that a policyholder files in a year takes values $0, 1, 2, \\ldots$ with $P(N = 0) = 0.50$ and $P(N = n) = c(0.2)^n$ for $n = 1, 2, 3, \\ldots$, where $c$ is a constant. Calculate the probability that the policyholder files at least $2$ claims in the year.",
    choices: ["$0.02$", "$0.08$", "$0.10$", "$0.20$", "$0.40$"],
    answer: 2,
    solution: [
      "The events $\\{N = n\\}$ are mutually exclusive and their union is $S$, so by countable additivity their probabilities sum to $1$.",
      "$$0.50 + \\sum_{n=1}^{\\infty} c(0.2)^n = 0.50 + c \\cdot \\frac{0.2}{1 - 0.2} = 0.50 + \\frac{c}{4} = 1 \\implies c = 2$$",
      "Then $P(N = 1) = 2(0.2) = 0.40$.",
      "By the complement rule, $P(N \\ge 2) = 1 - P(N = 0) - P(N = 1) = 1 - 0.50 - 0.40 = 0.10$.",
    ],
  },
  {
    question: "For a randomly selected employee of a company, the probability of being enrolled in the company health plan is $0.75$, and the probability of being enrolled in the company retirement plan is $0.45$. No other information about enrollment is available. Calculate the largest possible value of the probability that the employee is enrolled in exactly one of the two plans.",
    choices: ["$0.20$", "$0.30$", "$0.55$", "$0.80$", "$1.00$"],
    answer: 3,
    solution: [
      "Let $H$ and $R$ be the two enrollment events. Exactly one plan has probability $P(H) + P(R) - 2P(H \\cap R) = 1.20 - 2P(H \\cap R)$, so it is largest when $P(H \\cap R)$ is smallest.",
      "By the addition rule and $P(H \\cup R) \\le 1$: $P(H \\cap R) = P(H) + P(R) - P(H \\cup R) \\ge 0.75 + 0.45 - 1 = 0.20$.",
      "The value $0.20$ is attainable: health only $0.55$, retirement only $0.25$, both $0.20$, neither $0$.",
      "$$\\max P(\\text{exactly one}) = 1.20 - 2(0.20) = 0.80$$",
    ],
  },
  {
    question: "An insurance agency sells auto, homeowners, and life policies. For a randomly selected customer of the agency, the probability of having neither an auto nor a homeowners policy is $0.28$, the probability of having neither an auto nor a life policy is $0.34$, the probability of having neither a homeowners nor a life policy is $0.45$, and the probability of having none of the three policies is $0.18$. The probability of having all three policies is $0.07$. Calculate the probability that a randomly selected customer has exactly two of the three types of policies.",
    choices: ["$0.15$", "$0.22$", "$0.29$", "$0.36$", "$0.53$"],
    answer: 1,
    solution: [
      "Let $A$, $H$, and $L$ be the three events. By the complement rule, $P(A \\cup H) = 0.72$, $P(A \\cup L) = 0.66$, $P(H \\cup L) = 0.55$, and $P(A \\cup H \\cup L) = 0.82$.",
      "Since $A \\cup H \\cup L$ is the disjoint union of $A \\cap H' \\cap L'$ and $H \\cup L$, auto only has probability $0.82 - 0.55 = 0.27$. Similarly, homeowners only is $0.82 - 0.66 = 0.16$ and life only is $0.82 - 0.72 = 0.10$.",
      "Exactly one: $0.27 + 0.16 + 0.10 = 0.53$, so at least two: $0.82 - 0.53 = 0.29$.",
      "$$P(\\text{exactly two}) = P(\\text{at least two}) - P(A \\cap H \\cap L) = 0.29 - 0.07 = 0.22$$",
    ],
  },
];

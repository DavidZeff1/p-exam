export default [
  {
    question: "A claims drawer contains $10$ files: $6$ auto claims and $4$ homeowners claims. An auditor selects $2$ files at random without replacement. Calculate the probability, rounded to three decimal places, that the auditor selects exactly one auto claim and exactly one homeowners claim.",
    choices: ["$0.133$", "$0.267$", "$0.333$", "$0.480$", "$0.533$"],
    answer: 4,
    solution: [
      "The event occurs through two mutually exclusive paths: auto then homeowners, or homeowners then auto. Each path is an AND, so multiply; the paths are combined with OR, so add.",
      "$$P(A_1)P(H_2 \\mid A_1) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} \\qquad P(H_1)P(A_2 \\mid H_1) = \\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90}$$",
      "$$P(\\text{one of each}) = \\frac{24}{90} + \\frac{24}{90} = \\frac{48}{90} = \\frac{8}{15} \\approx 0.533$$",
    ],
  },
  {
    question: "An insurer's claims-processing server must be operating for claims to be processed, and it operates with probability $0.98$. The server also needs electrical power, which is available if the main grid is working (probability $0.95$) or if the backup system is working. The backup system works only if both its generator (probability $0.90$) and its fuel pump (probability $0.80$) work. All components operate independently. Calculate the probability, rounded to three decimal places, that claims can be processed.",
    choices: ["$0.670$", "$0.931$", "$0.966$", "$0.979$", "$0.986$"],
    answer: 2,
    solution: [
      "The backup is a series system, so $P(\\text{backup works}) = 0.90 \\times 0.80 = 0.72$.",
      "Power is a parallel system of the grid and the backup, so $P(\\text{power}) = 1 - (1 - 0.95)(1 - 0.72) = 1 - (0.05)(0.28) = 0.986$.",
      "The server and power are in series, so multiply:",
      "$$P(\\text{processed}) = 0.98 \\times 0.986 = 0.96628 \\approx 0.966$$",
    ],
  },
  {
    question: "An insurer classifies $30\\%$ of its policyholders as high risk and $70\\%$ as low risk. Each year, a high-risk policyholder files a claim with probability $0.25$ and a low-risk policyholder files a claim with probability $0.10$. Given a policyholder's risk class, claim occurrences in different years are independent. A policyholder is selected at random. Calculate the probability, rounded to three decimal places, that this policyholder files at least one claim during the next $3$ years.",
    choices: ["$0.297$", "$0.363$", "$0.375$", "$0.425$", "$0.435$"],
    answer: 1,
    solution: [
      "Partition by risk class and use the complement within each class: $P(\\ge 1 \\text{ claim} \\mid \\text{class}) = 1 - (1-p)^3$.",
      "$$P(\\ge 1 \\mid H) = 1 - (0.75)^3 = 0.578125 \\qquad P(\\ge 1 \\mid L) = 1 - (0.90)^3 = 0.271$$",
      "By total probability, $P(\\ge 1) = P(\\ge 1 \\mid H)P(H) + P(\\ge 1 \\mid L)P(L)$.",
      "$$P(\\ge 1) = 0.30(0.578125) + 0.70(0.271) = 0.1734375 + 0.1897 = 0.3631375 \\approx 0.363$$",
      "Averaging the claim probabilities first, $1 - (0.855)^3 \\approx 0.375$, is incorrect because years are not independent unconditionally.",
    ],
  },
  {
    question: "Of $12$ pending claims, $3$ are fraudulent. An investigator selects $4$ of the $12$ claims at random without replacement for review. Each fraudulent claim that is reviewed is detected with probability $0.80$, independently of the other reviewed claims. Non-fraudulent claims are never flagged. Calculate the probability, rounded to three decimal places, that at least one fraudulent claim is detected.",
    choices: ["$0.479$", "$0.590$", "$0.596$", "$0.635$", "$0.745$"],
    answer: 3,
    solution: [
      "Let $K$ be the number of fraudulent claims selected. There are $\\binom{12}{4} = 495$ equally likely selections, and $P(K = k) = \\binom{3}{k}\\binom{9}{4-k}/495$, giving $126$, $252$, $108$, $9$ selections for $k = 0, 1, 2, 3$.",
      "Given $K = k$, at least one is detected with probability $1 - (0.20)^k$: $0$, $0.80$, $0.96$, $0.992$.",
      "By total probability,",
      "$$P = \\frac{252(0.80) + 108(0.96) + 9(0.992)}{495} = \\frac{201.6 + 103.68 + 8.928}{495} = \\frac{314.208}{495} = 0.634764 \\approx 0.635$$",
    ],
  },
];

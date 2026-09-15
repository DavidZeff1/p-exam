export default [
  {
    question: "At a large company, $35\\%$ of employees enroll in the dental plan. Of the employees who enroll in the dental plan, $60\\%$ also enroll in the vision plan. Of the employees who do not enroll in the dental plan, $20\\%$ enroll in the vision plan. An employee is selected at random. Calculate the probability that the employee enrolls in the vision plan but not the dental plan.",
    choices: ["$0.07$", "$0.13$", "$0.20$", "$0.21$", "$0.34$"],
    answer: 1,
    solution: [
      "Let $D$ be the event of enrolling in the dental plan and $V$ the event of enrolling in the vision plan. Then $P(D') = 1 - 0.35 = 0.65$ and $P(V \\mid D') = 0.20$.",
      "By the general multiplication rule, $$P(V \\cap D') = P(D') \\times P(V \\mid D') = 0.65 \\times 0.20 = 0.13$$",
    ],
  },
  {
    question: "An underwriter has a stack of $12$ applications, $4$ of which contain errors. The underwriter reviews the applications one at a time in random order, without replacement. Calculate the probability, rounded to three decimal places, that the first application found to contain an error is the third one reviewed.",
    choices: ["$0.130$", "$0.148$", "$0.170$", "$0.400$", "$0.424$"],
    answer: 2,
    solution: [
      "Let $C_i$ be the event that the $i$th application reviewed is error-free and $E_3$ the event that the third contains an error. We need $P(C_1 \\cap C_2 \\cap E_3)$.",
      "By the chain rule, $P(C_1) = \\frac{8}{12}$, $P(C_2 \\mid C_1) = \\frac{7}{11}$, and $P(E_3 \\mid C_1 \\cap C_2) = \\frac{4}{10}$.",
      "$$P(C_1 \\cap C_2 \\cap E_3) = \\frac{8}{12} \\times \\frac{7}{11} \\times \\frac{4}{10} = \\frac{224}{1320} = \\frac{28}{165} \\approx 0.170$$",
    ],
  },
  {
    question: "An insurance agent contacts prospective clients. Each prospect agrees to a meeting with probability $0.40$. Given that a meeting occurs, the prospect requests a quote with probability $0.50$. Given that a quote is requested, the prospect purchases a policy with probability $0.30$. The agent contacts $5$ prospects, whose outcomes are mutually independent. Calculate the probability, rounded to three decimal places, that at least one of the $5$ prospects purchases a policy.",
    choices: ["$0.266$", "$0.300$", "$0.672$", "$0.734$", "$0.922$"],
    answer: 0,
    solution: [
      "A purchase requires a meeting, then a quote, then a sale, so by the chain rule $p = 0.40 \\times 0.50 \\times 0.30 = 0.06$ for each prospect.",
      "Since the prospects are independent, $P(\\text{no purchases}) = (1 - 0.06)^5 = 0.94^5 \\approx 0.7339$.",
      "$$P(\\text{at least one purchase}) = 1 - 0.94^5 \\approx 0.266$$",
    ],
  },
  {
    question: "Each year, a driver either has an accident or does not. In year $1$, the driver has an accident with probability $0.10$. In each later year, the driver has an accident with probability $0.25$ if the driver had an accident in the previous year, and with probability $0.08$ if the driver did not. Given the outcome of the previous year, the outcome in a year does not depend on any earlier years. Calculate the probability, rounded to three decimal places, that the driver has exactly one accident during years $1$, $2$, and $3$.",
    choices: ["$0.069$", "$0.176$", "$0.189$", "$0.217$", "$0.243$"],
    answer: 2,
    solution: [
      "Let $A_i$ be the event of an accident in year $i$. Exactly one accident occurs along three mutually exclusive paths; multiply along each path using the chain rule.",
      "$$P(A_1 \\cap A_2' \\cap A_3') = 0.10 \\times 0.75 \\times 0.92 = 0.0690$$",
      "$$P(A_1' \\cap A_2 \\cap A_3') = 0.90 \\times 0.08 \\times 0.75 = 0.0540$$",
      "$$P(A_1' \\cap A_2' \\cap A_3) = 0.90 \\times 0.92 \\times 0.08 = 0.06624$$",
      "$$P(\\text{exactly one}) = 0.0690 + 0.0540 + 0.06624 = 0.18924 \\approx 0.189$$",
    ],
  },
];

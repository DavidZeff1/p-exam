export default [
  {
    question: "An auto insurer finds that $30\\%$ of its policyholders are under age 25, $20\\%$ of its policyholders filed a claim last year, and $41\\%$ of its policyholders are under age 25 or filed a claim last year. A policyholder is selected at random from those who filed a claim last year. Calculate the probability that this policyholder is under age 25.",
    choices: ["$0.09$", "$0.30$", "$0.45$", "$0.55$", "$0.70$"],
    answer: 2,
    solution: [
      "Let $Y$ be the event that the policyholder is under age 25 and $C$ the event that the policyholder filed a claim.",
      "By the addition rule, $P(Y \\cap C) = P(Y) + P(C) - P(Y \\cup C) = 0.30 + 0.20 - 0.41 = 0.09$.",
      "$$P(Y \\mid C) = \\frac{P(Y \\cap C)}{P(C)} = \\frac{0.09}{0.20} = 0.45$$",
    ],
  },
  {
    question: "A claims file contains $20$ claims, of which $6$ are fraudulent. An auditor selects claims from the file one at a time, at random and without replacement. Calculate the probability that the third claim selected is the first fraudulent claim selected. Round your answer to three decimal places.",
    choices: ["$0.147$", "$0.160$", "$0.300$", "$0.333$", "$0.479$"],
    answer: 1,
    solution: [
      "Let $N_i$ be the event that the $i$th claim is not fraudulent and $F_3$ the event that the third claim is fraudulent. By the chain rule,",
      "$$P(N_1 \\cap N_2 \\cap F_3) = P(N_1)\\,P(N_2 \\mid N_1)\\,P(F_3 \\mid N_1 \\cap N_2)$$",
      "After each non-fraudulent claim is removed, the file has one fewer claim and one fewer non-fraudulent claim:",
      "$$\\frac{14}{20} \\times \\frac{13}{19} \\times \\frac{6}{18} = \\frac{91}{570} \\approx 0.160$$",
    ],
  },
  {
    question: "Of an insurer's customers, $55\\%$ have an auto policy, $40\\%$ have a homeowners policy, and $30\\%$ have neither an auto policy nor a homeowners policy. A customer who has at least one of these two policies is selected at random. Calculate the probability that this customer has exactly one of the two policies. Round your answer to three decimal places.",
    choices: ["$0.300$", "$0.357$", "$0.450$", "$0.474$", "$0.643$"],
    answer: 4,
    solution: [
      "Let $A$ and $H$ be the events that the customer has an auto policy and a homeowners policy. Then $P(A \\cup H) = 1 - 0.30 = 0.70$.",
      "By the addition rule, $P(A \\cap H) = 0.55 + 0.40 - 0.70 = 0.25$, so $P(\\text{exactly one}) = 0.70 - 0.25 = 0.45$.",
      "Exactly one of the policies is a subset of $A \\cup H$, so its intersection with $A \\cup H$ is itself:",
      "$$P(\\text{exactly one} \\mid A \\cup H) = \\frac{0.45}{0.70} = \\frac{9}{14} \\approx 0.643$$",
    ],
  },
  {
    question: "An insurance agency sells auto, homeowners, and life policies. For a randomly selected customer, the probability of having an auto policy is $0.60$. Given that a customer has an auto policy, the probability of also having a homeowners policy is $0.50$. Given that a customer has both an auto policy and a homeowners policy, the probability of also having a life policy is $0.40$. The probability that a customer has both an auto policy and a life policy is $0.20$. A customer who has an auto policy is selected at random. Calculate the probability that this customer has neither a homeowners policy nor a life policy. Round your answer to three decimal places.",
    choices: ["$0.167$", "$0.220$", "$0.333$", "$0.367$", "$0.633$"],
    answer: 3,
    solution: [
      "Let $A$, $H$, and $L$ be the events that the customer has an auto, homeowners, and life policy.",
      "By the multiplication rule and the chain rule, $P(A \\cap H) = 0.60(0.50) = 0.30$ and $P(A \\cap H \\cap L) = 0.60(0.50)(0.40) = 0.12$.",
      "$$P(A \\cap (H \\cup L)) = P(A \\cap H) + P(A \\cap L) - P(A \\cap H \\cap L) = 0.30 + 0.20 - 0.12 = 0.38$$",
      "So $P(A \\cap H' \\cap L') = 0.60 - 0.38 = 0.22$.",
      "$$P(H' \\cap L' \\mid A) = \\frac{0.22}{0.60} = \\frac{11}{30} \\approx 0.367$$",
    ],
  },
];

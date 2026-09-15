export default [
  {
    question: "A homeowners insurer attributes each claim to exactly one of four causes: wind, water, fire, or theft. For a randomly selected claim, the probability that it is caused by wind is $0.35$ and the probability that it is caused by water is $0.45$. A claim is three times as likely to be caused by fire as by theft. Calculate the probability that a randomly selected claim is caused by theft.",
    choices: ["$0.040$", "$0.050$", "$0.067$", "$0.150$", "$0.200$"],
    answer: 1,
    solution: [
      "Let $W$, $R$, $F$, and $T$ be the events that the claim is caused by wind, water, fire, and theft. Each claim has exactly one cause, so these events are mutually exclusive and exhaustive: they form a partition of $S$.",
      "Therefore $P(W) + P(R) + P(F) + P(T) = P(S) = 1$, so $P(F) + P(T) = 1 - 0.35 - 0.45 = 0.20$.",
      "With $P(F) = 3P(T)$, this gives $3P(T) + P(T) = 4P(T) = 0.20$.",
      "$$P(T) = \\frac{0.20}{4} = 0.050$$",
    ],
  },
  {
    question: "A dental plan covers routine cleanings and fillings. For a randomly selected plan member during a year, the probability of receiving at least one cleaning is $0.70$, the probability of receiving at least one filling is $0.25$, and the probability of receiving neither a cleaning nor a filling is $0.20$. Calculate the probability that the member receives exactly one of these two services during the year.",
    choices: ["$0.10$", "$0.15$", "$0.55$", "$0.65$", "$0.80$"],
    answer: 3,
    solution: [
      "Let $C$ be the event of at least one cleaning and $F$ the event of at least one filling. The event of receiving neither is $C' \\cap F' = (C \\cup F)'$, so $P(C \\cup F) = 1 - 0.20 = 0.80$.",
      "By the union rule, $0.80 = 0.70 + 0.25 - P(C \\cap F)$, so $P(C \\cap F) = 0.15$.",
      "Exactly one service is $C \\cup F$ with $C \\cap F$ removed. Since $C \\cap F \\subseteq C \\cup F$, the subset rule gives",
      "$$P(\\text{exactly one}) = P(C \\cup F) - P(C \\cap F) = 0.80 - 0.15 = 0.65$$",
    ],
  },
  {
    question: "For a randomly selected customer of an insurer, the probability of having an auto policy is $0.65$ and the probability of having a homeowners policy is $0.50$. The probability that the customer has exactly one of these two policies is at least $0.45$. Calculate the largest possible value of the probability that the customer has neither policy.",
    choices: ["$0.20$", "$0.35$", "$0.40$", "$0.55$", "$0.65$"],
    answer: 0,
    solution: [
      "Let $A$ be auto and $H$ be homeowners, and let $x = P(A \\cap H)$. Then $P(\\text{neither}) = 1 - P(A \\cup H) = 1 - (0.65 + 0.50 - x) = x - 0.15$.",
      "Exactly one policy has probability $P(A) + P(H) - 2x = 1.15 - 2x$, so $1.15 - 2x \\ge 0.45$ requires $x \\le 0.35$.",
      "The bounds and subset rule also require $x - 0.15 \\ge 0$ and $x \\le P(H) = 0.50$, so $0.15 \\le x \\le 0.35$.",
      "The largest value occurs at $x = 0.35$, which is attainable: auto only $0.30$, homeowners only $0.15$, both $0.35$, neither $0.20$.",
      "$$\\max P(\\text{neither}) = 0.35 - 0.15 = 0.20$$",
    ],
  },
  {
    question: "An auto insurer classifies each policyholder as exactly one of low risk, moderate risk, or high risk. For a randomly selected policyholder, the probability of being low risk is $0.50$ and the probability of being moderate risk is $0.30$. The probability that the policyholder is high risk or files at least one claim during the year is $0.34$. The probability that the policyholder is low risk and files no claims during the year is $0.46$. The probability that the policyholder is moderate risk or files no claims during the year is $0.90$. Calculate the probability that the policyholder files at least one claim during the year.",
    choices: ["$0.06$", "$0.10$", "$0.14$", "$0.16$", "$0.20$"],
    answer: 4,
    solution: [
      "Let $L$, $M$, $H$ be the risk classes and $C$ the event of at least one claim. The classes form a partition, so $P(H) = 1 - 0.50 - 0.30 = 0.20$ and $P(C) = P(L \\cap C) + P(M \\cap C) + P(H \\cap C)$.",
      "Since $L = (L \\cap C) \\cup (L \\cap C')$ with the two pieces mutually exclusive, $P(L \\cap C) = 0.50 - 0.46 = 0.04$.",
      "$H \\cup C$ is the disjoint union of $H$ and $H' \\cap C$, so $P(H' \\cap C) = 0.34 - 0.20 = 0.14$. Then $P(M \\cap C) = 0.14 - P(L \\cap C) = 0.10$.",
      "The complement of $M \\cup C'$ is $M' \\cap C = (L \\cap C) \\cup (H \\cap C)$, with probability $1 - 0.90 = 0.10$, so $P(H \\cap C) = 0.10 - 0.04 = 0.06$.",
      "$$P(C) = 0.04 + 0.10 + 0.06 = 0.20$$",
    ],
  },
];

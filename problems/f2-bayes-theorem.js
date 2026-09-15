export default [
  {
    question: "An auto insurer classifies $25\\%$ of its policyholders as high risk and the rest as low risk. The probability that a high-risk policyholder files a claim during the year is $0.40$, and the probability that a low-risk policyholder files a claim during the year is $0.10$. A randomly selected policyholder files a claim during the year. Calculate the probability that this policyholder is high risk. Round your answer to three decimal places.",
    choices: ["$0.175$", "$0.250$", "$0.400$", "$0.571$", "$0.800$"],
    answer: 3,
    solution: [
      "Let $H$ be the event that the policyholder is high risk and $C$ the event that a claim is filed. By total probability,",
      "$$P(C) = P(C \\mid H)P(H) + P(C \\mid H')P(H') = 0.40(0.25) + 0.10(0.75) = 0.175$$",
      "By Bayes' theorem,",
      "$$P(H \\mid C) = \\frac{P(C \\mid H)P(H)}{P(C)} = \\frac{0.10}{0.175} = \\frac{4}{7} \\approx 0.571$$",
    ],
  },
  {
    question: "A life insurer classifies each insured as standard, preferred, or substandard. Of its insureds, $60\\%$ are standard, $30\\%$ are preferred, and $10\\%$ are substandard. The probability of dying within the next year is $0.012$ for a standard insured, $0.005$ for a preferred insured, and $0.030$ for a substandard insured. A randomly selected insured dies within the next year. Calculate the probability that this insured was classified as substandard. Round your answer to three decimal places.",
    choices: ["$0.100$", "$0.128$", "$0.256$", "$0.615$", "$0.638$"],
    answer: 2,
    solution: [
      "Let $S$, $P$, and $U$ be the standard, preferred, and substandard classes, which partition the insureds, and let $D$ be the event of death within the year.",
      "$$P(D) = 0.012(0.60) + 0.005(0.30) + 0.030(0.10) = 0.0072 + 0.0015 + 0.0030 = 0.0117$$",
      "By Bayes' theorem for a partition,",
      "$$P(U \\mid D) = \\frac{P(D \\mid U)P(U)}{P(D)} = \\frac{0.0030}{0.0117} = \\frac{10}{39} \\approx 0.256$$",
    ],
  },
  {
    question: "Of the claims submitted to an insurer, $5\\%$ are fraudulent. A screening system flags $84\\%$ of fraudulent claims and flags some fixed proportion of legitimate claims. Among all flagged claims, $35\\%$ are fraudulent. Calculate the probability that a legitimate claim is flagged. Round your answer to three decimal places.",
    choices: ["$0.078$", "$0.082$", "$0.120$", "$0.126$", "$0.160$"],
    answer: 1,
    solution: [
      "Let $F$ be the event that a claim is fraudulent and $G$ the event that it is flagged. Then $P(G \\mid F)P(F) = 0.84(0.05) = 0.042$.",
      "By Bayes' theorem, $P(F \\mid G) = \\dfrac{P(G \\mid F)P(F)}{P(G)}$, so $P(G) = \\dfrac{0.042}{0.35} = 0.12$.",
      "By total probability, $P(G \\mid F')P(F') = P(G) - P(G \\mid F)P(F) = 0.12 - 0.042 = 0.078$.",
      "$$P(G \\mid F') = \\frac{0.078}{0.95} = \\frac{39}{475} \\approx 0.082$$",
    ],
  },
  {
    question: "An auto insurer divides drivers into three classes. Of its drivers, $50\\%$ are good, $35\\%$ are average, and $15\\%$ are bad. In any year, the probability that a driver has a claim is $0.05$ for a good driver, $0.15$ for an average driver, and $0.40$ for a bad driver. Given a driver's class, whether the driver has a claim is independent from year to year. A randomly selected driver has a claim in Year 1 and no claim in Year 2. Calculate the probability that this driver has a claim in Year 3. Round your answer to three decimal places.",
    choices: ["$0.121$", "$0.138$", "$0.213$", "$0.241$", "$0.327$"],
    answer: 2,
    solution: [
      "Let $E$ be the observed history (a claim in Year 1, no claim in Year 2). Given the class with annual claim probability $p$, independence gives $P(E \\mid \\text{class}) = p(1-p)$.",
      "Paths to $E$: good $0.50(0.05)(0.95) = 0.02375$, average $0.35(0.15)(0.85) = 0.044625$, bad $0.15(0.40)(0.60) = 0.036$, for a total of $P(E) = 0.104375$.",
      "By Bayes' theorem, the posterior class probabilities are $\\dfrac{0.02375}{0.104375}$, $\\dfrac{0.044625}{0.104375}$, and $\\dfrac{0.036}{0.104375}$.",
      "Weighting each class's Year 3 claim probability by its posterior probability:",
      "$$P(\\text{claim in Year 3} \\mid E) = \\frac{0.02375(0.05) + 0.044625(0.15) + 0.036(0.40)}{0.104375} = \\frac{713}{3340} \\approx 0.213$$",
    ],
  },
];

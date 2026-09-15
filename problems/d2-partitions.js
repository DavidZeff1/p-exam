export default [
  {
    question: "An auto insurer classifies each policyholder as standard, preferred, or high-risk; every policyholder is in exactly one class. Of its policyholders, $50\\%$ are standard, $30\\%$ are preferred, and $20\\%$ are high-risk. The probability that a policyholder files a claim during the year is $0.06$ for a standard policyholder, $0.03$ for a preferred policyholder, and $0.12$ for a high-risk policyholder. Calculate the probability that a randomly selected policyholder files a claim during the year.",
    choices: ["$0.039$", "$0.063$", "$0.070$", "$0.084$", "$0.210$"],
    answer: 1,
    solution: [
      "The three classes $S$, $P$, $H$ form a partition, so by the law of total probability $P(C) = P(C \\mid S)P(S) + P(C \\mid P)P(P) + P(C \\mid H)P(H)$.",
      "$$P(C) = (0.06)(0.50) + (0.03)(0.30) + (0.12)(0.20) = 0.030 + 0.009 + 0.024 = 0.063$$",
      "Note that the simple average $(0.06 + 0.03 + 0.12)/3 = 0.070$ is wrong because the classes are not equally likely.",
    ],
  },
  {
    question: "A health plan divides its members into three age groups: $40\\%$ are under age $30$, $45\\%$ are ages $30$ to $59$, and $15\\%$ are age $60$ or older. The probability that a member is hospitalized during the year is $0.03$ for members under $30$ and $0.06$ for members ages $30$ to $59$. For a randomly selected member, the probability of hospitalization during the year is $0.06$. Calculate the probability, rounded to three decimal places, that a member age $60$ or older is hospitalized during the year.",
    choices: ["$0.021$", "$0.025$", "$0.090$", "$0.140$", "$0.400$"],
    answer: 3,
    solution: [
      "Let $x = P(H \\mid \\text{60+})$. The age groups partition the members, so $P(H) = (0.03)(0.40) + (0.06)(0.45) + x(0.15)$.",
      "$$0.06 = 0.012 + 0.027 + 0.15x$$",
      "$$0.15x = 0.021 \\quad\\Rightarrow\\quad x = \\frac{0.021}{0.15} = 0.140$$",
    ],
  },
  {
    question: "The number of accidents $N$ that a fleet vehicle has in a month satisfies $P(N = 0) = 0.50$, $P(N = 1) = 0.30$, $P(N = 2) = 0.15$, and $P(N = 3) = 0.05$. Given the number of accidents, each accident independently results in an injury claim with probability $0.20$. Calculate the probability that the vehicle generates at least one injury claim in the month.",
    choices: ["$0.1272$", "$0.1384$", "$0.1500$", "$0.2000$", "$0.2768$"],
    answer: 1,
    solution: [
      "Partition on the value of $N$. Given $N = n$, the probability of at least one injury claim is $1 - (0.80)^n$.",
      "$$P(I \\mid N=0) = 0, \\quad P(I \\mid N=1) = 0.20, \\quad P(I \\mid N=2) = 1 - 0.64 = 0.36, \\quad P(I \\mid N=3) = 1 - 0.512 = 0.488$$",
      "By the law of total probability, $P(I) = \\sum_n P(I \\mid N=n)P(N=n)$.",
      "$$P(I) = 0 + (0.20)(0.30) + (0.36)(0.15) + (0.488)(0.05) = 0.06 + 0.054 + 0.0244 = 0.1384$$",
    ],
  },
  {
    question: "An insurer's drivers are $60\\%$ low-risk and $40\\%$ high-risk. A low-risk driver has an accident in any given year with probability $0.10$, and a high-risk driver has an accident in any given year with probability $0.30$. Given a driver's risk class, the occurrence of accidents in different years is independent. A driver is selected at random and has an accident in the first year. Calculate the probability, rounded to three decimal places, that this driver has an accident in the second year.",
    choices: ["$0.042$", "$0.180$", "$0.233$", "$0.300$", "$0.667$"],
    answer: 2,
    solution: [
      "Let $A_1$ and $A_2$ be accidents in years $1$ and $2$, and partition on the risk class $L$ or $H$. We need $P(A_2 \\mid A_1) = P(A_1 \\cap A_2)/P(A_1)$.",
      "$$P(A_1) = (0.10)(0.60) + (0.30)(0.40) = 0.06 + 0.12 = 0.18$$",
      "Within each class the years are independent, so $P(A_1 \\cap A_2 \\mid L) = (0.10)^2$ and $P(A_1 \\cap A_2 \\mid H) = (0.30)^2$.",
      "$$P(A_1 \\cap A_2) = (0.01)(0.60) + (0.09)(0.40) = 0.006 + 0.036 = 0.042$$",
      "$$P(A_2 \\mid A_1) = \\frac{0.042}{0.18} = 0.2333 \\approx 0.233$$",
      "The accidents are not unconditionally independent, so $0.18$ is incorrect: an accident in year $1$ makes the high-risk class more likely.",
    ],
  },
];

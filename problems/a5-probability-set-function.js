export default [
  {
    question: "A six-sided die is weighted so that, on a single roll, the probability of the face showing $k$ is proportional to $k$, for $k = 1, 2, \\ldots, 6$. The die is rolled once. Calculate the probability that the number rolled is even or greater than $3$.",
    choices: ["$\\frac{1}{3}$", "$\\frac{4}{7}$", "$\\frac{2}{3}$", "$\\frac{5}{7}$", "$\\frac{17}{21}$"],
    answer: 4,
    solution: [
      "Write $P(\\{k\\}) = ck$. The outcome probabilities must sum to $P(S) = 1$: $$c(1 + 2 + 3 + 4 + 5 + 6) = 21c = 1 \\implies c = \\frac{1}{21}$$",
      "The event is $E = \\{2, 4, 6\\} \\cup \\{4, 5, 6\\} = \\{2, 4, 5, 6\\}$. Each outcome is counted once, even though $4$ and $6$ belong to both sets.",
      "For a discrete sample space, $P(E)$ is the sum of the probabilities of the outcomes in $E$. The outcomes are not equally likely, so $\\frac{4}{6}$ is wrong: $$P(E) = \\frac{2 + 4 + 5 + 6}{21} = \\frac{17}{21}$$",
    ],
  },
  {
    question: "The time $T$, in years, from policy issue until a policyholder's first claim is a continuous random variable with density function $f(t) = \\dfrac{c}{(1+t)^3}$ for $t > 0$, where $c$ is a constant. Calculate the probability that the first claim occurs more than $1$ year but less than $3$ years after policy issue.",
    choices: ["$\\frac{1}{16}$", "$\\frac{3}{32}$", "$\\frac{3}{16}$", "$\\frac{7}{32}$", "$\\frac{1}{4}$"],
    answer: 2,
    solution: [
      "A density must integrate to $1$ over the whole sample space: $$\\int_0^\\infty \\frac{c}{(1+t)^3}\\,dt = c\\left[-\\frac{1}{2(1+t)^2}\\right]_0^\\infty = \\frac{c}{2} = 1 \\implies c = 2$$",
      "The probability is the area under the density over the interval, not the height of the density: $$P(1 < T < 3) = \\int_1^3 \\frac{2}{(1+t)^3}\\,dt = \\left[-\\frac{1}{(1+t)^2}\\right]_1^3$$",
      "$$P(1 < T < 3) = \\frac{1}{4} - \\frac{1}{16} = \\frac{3}{16}$$",
    ],
  },
  {
    question: "A claim file is complete if and only if it contains all three of the following documents: a police report, medical records, and a repair estimate. For a randomly selected claim file, the probability that it contains a police report is $0.85$, the probability that it contains medical records is $0.80$, and the probability that it contains a repair estimate is $0.90$. Nothing else is known about how these events are related. Calculate the smallest possible value of the probability that a randomly selected claim file is complete.",
    choices: ["$0.450$", "$0.550$", "$0.612$", "$0.650$", "$0.800$"],
    answer: 1,
    solution: [
      "Let $A$, $B$, and $C$ be the events that the file contains the police report, the medical records, and the repair estimate. By De Morgan's law, the file is incomplete on $(A \\cap B \\cap C)' = A' \\cup B' \\cup C'$.",
      "By subadditivity, $$P(A' \\cup B' \\cup C') \\le P(A') + P(B') + P(C') = 0.15 + 0.20 + 0.10 = 0.45$$",
      "Therefore $P(A \\cap B \\cap C) = 1 - P(A' \\cup B' \\cup C') \\ge 1 - 0.45 = 0.55$.",
      "The bound is attained when $A'$, $B'$, and $C'$ are mutually exclusive, which is possible because $0.45 \\le 1$. The smallest possible value is $0.55$.",
    ],
  },
  {
    question: "The number of days $N$ that a hospitalized policyholder stays in the hospital has probability function $P(N = n) = \\dfrac{c}{n(n+1)(n+2)}$ for $n = 1, 2, 3, \\ldots$, where $c$ is a constant. Calculate the probability that the hospital stay lasts at least $4$ days.",
    choices: ["$\\frac{1}{40}$", "$\\frac{1}{20}$", "$\\frac{1}{15}$", "$\\frac{1}{10}$", "$\\frac{1}{6}$"],
    answer: 3,
    solution: [
      "Partial fractions give $$\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2}\\left[\\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)}\\right]$$",
      "The sum telescopes: $\\sum_{n=k}^{\\infty} \\frac{1}{n(n+1)(n+2)} = \\frac{1}{2k(k+1)}$. With $k = 1$ the total is $\\frac{1}{4}$, and the probabilities must sum to $1$, so $c = 4$.",
      "The event $\\{N \\ge 4\\}$ is made up of the outcomes $n = 4, 5, 6, \\ldots$, so $$P(N \\ge 4) = 4 \\cdot \\frac{1}{2 \\cdot 4 \\cdot 5} = \\frac{1}{10}$$",
      "Check with the complement: $P(N \\le 3) = 4\\left(\\frac{1}{6} + \\frac{1}{24} + \\frac{1}{60}\\right) = \\frac{9}{10}$, and $1 - \\frac{9}{10} = \\frac{1}{10}$.",
    ],
  },
];

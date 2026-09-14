export default [
  {
    question: "An auto insurer classifies each policy year into exactly one of five outcomes: no claim, a minor claim, a moderate claim, a major claim, or a total loss. For a randomly selected policy year, the probabilities of no claim, a major claim, and a total loss are $0.68$, $0.05$, and $0.03$, respectively, and a minor claim is three times as likely as a moderate claim. Calculate the probability that the policy year results in a moderate claim, a major claim, or a total loss.",
    choices: ["$0.06$", "$0.08$", "$0.11$", "$0.14$", "$0.26$"],
    answer: 3,
    solution: [
      "The five outcomes are mutually exclusive and together make up $S$, so their probabilities must sum to $P(S) = 1$.",
      "Let $m$ be the probability of a moderate claim, so a minor claim has probability $3m$: $$0.68 + 3m + m + 0.05 + 0.03 = 1 \\implies 4m = 0.24 \\implies m = 0.06$$",
      "The event is made up of three outcomes, so its probability is the sum of their probabilities: $$P(E) = 0.06 + 0.05 + 0.03 = 0.14$$",
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
    question: "A claim file is complete only if it contains a police report, medical records, and a repair estimate. For a randomly selected claim file, the probability that it contains a police report is $0.85$, the probability that it contains medical records is $0.80$, and the probability that it contains a repair estimate is $0.90$. Nothing else is known about how these events are related. Calculate the smallest possible value of the probability that a randomly selected claim file is complete.",
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

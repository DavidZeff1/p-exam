export default [
  {
    question: "An auto insurer assigns each claim to exactly one of four categories: collision, comprehensive, liability, or other. For a randomly selected claim, the probability of collision is $0.35$, the probability of comprehensive is $0.20$, and the probability of liability is $0.30$. Calculate the probability that a randomly selected claim is either a collision claim or a liability claim.",
    choices: ["$0.105$", "$0.150$", "$0.545$", "$0.650$", "$0.850$"],
    answer: 3,
    solution: [
      "Each claim is in exactly one category, so the events collision ($C$) and liability ($L$) are mutually exclusive: $P(C \\cap L) = 0$.",
      "By the addition rule for mutually exclusive events, $P(C \\cup L) = P(C) + P(L)$.",
      "$$P(C \\cup L) = 0.35 + 0.30 = 0.65$$",
    ],
  },
  {
    question: "For events $A$ and $B$, $P(A) = 0.40$ and $P(A \\cup B) = 0.70$. Let $p$ be the value of $P(B)$ if $A$ and $B$ are mutually exclusive, and let $q$ be the value of $P(B)$ if $A$ and $B$ are independent. Calculate $q - p$.",
    choices: ["$0.00$", "$0.10$", "$0.20$", "$0.30$", "$0.45$"],
    answer: 2,
    solution: [
      "Mutually exclusive: $P(A \\cap B) = 0$, so $0.70 = 0.40 + p$ and $p = 0.30$.",
      "Independent: $P(A \\cap B) = P(A)P(B)$, so $0.70 = 0.40 + q - 0.40q = 0.40 + 0.60q$.",
      "$$q = \\frac{0.30}{0.60} = 0.50$$",
      "$$q - p = 0.50 - 0.30 = 0.20$$",
    ],
  },
  {
    question: "Let $N$ be the number of claims filed by a randomly selected policyholder during a year. The probability that $N \\le 1$ is $0.75$, the probability that $N \\ge 1$ is $0.40$, and the probability that $N \\ge 3$ is $0.07$. Calculate the probability that $N = 2$.",
    choices: ["$0.15$", "$0.18$", "$0.25$", "$0.33$", "$0.40$"],
    answer: 1,
    solution: [
      "The events $\\{N = 0\\}$, $\\{N = 1\\}$, $\\{N = 2\\}$, and $\\{N \\ge 3\\}$ are mutually exclusive and exhaustive.",
      "The events $\\{N \\le 1\\}$ and $\\{N \\ge 2\\}$ are complements, so $P(N \\ge 2) = 1 - 0.75 = 0.25$.",
      "Since $\\{N \\ge 2\\} = \\{N = 2\\} \\cup \\{N \\ge 3\\}$ is a union of mutually exclusive events, $P(N \\ge 2) = P(N = 2) + P(N \\ge 3)$.",
      "$$P(N = 2) = 0.25 - 0.07 = 0.18$$",
    ],
  },
  {
    question: "An insurer has three policies. During a year, each policy results in exactly one of the following outcomes: no claim with probability $0.80$, a minor claim with probability $0.15$, or a major claim with probability $0.05$. Outcomes for different policies are independent. Calculate the probability that exactly two of the three policies have the same outcome.",
    choices: ["$0.4485$", "$0.4785$", "$0.4845$", "$0.4880$", "$0.9640$"],
    answer: 0,
    solution: [
      "Split the event by which outcome is shared by exactly two policies. These three cases are mutually exclusive, so their probabilities add.",
      "For an outcome with probability $p$, exactly two of three policies have it with probability $3p^2(1 - p)$ (choose which policy differs).",
      "$$3(0.80)^2(0.20) = 0.3840, \\quad 3(0.15)^2(0.85) = 0.057375, \\quad 3(0.05)^2(0.95) = 0.007125$$",
      "$$P = 0.3840 + 0.057375 + 0.007125 = 0.4485$$",
      "Check: $P(\\text{all same}) = 0.80^3 + 0.15^3 + 0.05^3 = 0.5155$ and $P(\\text{all different}) = 3!(0.80)(0.15)(0.05) = 0.036$, so $1 - 0.5155 - 0.036 = 0.4485$.",
    ],
  },
];

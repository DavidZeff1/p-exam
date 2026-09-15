export default [
  {
    question: "The number of hail damage claims filed with an insurer in a month has a Poisson distribution with standard deviation $\\sqrt{2}$. Calculate the probability that at least $2$ hail damage claims are filed in a month.",
    choices: ["$0.2707$", "$0.3233$", "$0.4060$", "$0.4131$", "$0.5940$"],
    answer: 4,
    solution: [
      "For a Poisson distribution, $\\operatorname{Var}(X) = \\lambda$, so $\\lambda = (\\sqrt{2})^2 = 2$.",
      "$P(X = 0) = e^{-2}$ and $P(X = 1) = 2e^{-2}$.",
      "$$P(X \\ge 2) = 1 - e^{-2} - 2e^{-2} = 1 - 3e^{-2} = 0.5940$$",
    ],
  },
  {
    question: "An insurer receives auto claims at a Poisson rate of $1.2$ per week and homeowners claims at a Poisson rate of $0.8$ per week. The two claim counts are independent. Calculate the probability that the insurer receives exactly $3$ claims in total over a two-week period.",
    choices: ["$0.1465$", "$0.1954$", "$0.2090$", "$0.4335$", "$0.7619$"],
    answer: 1,
    solution: [
      "By the sum property, the total weekly count is Poisson with rate $1.2 + 0.8 = 2$ per week.",
      "By the scaling property, the total over two weeks is $\\text{Poisson}(2 \\times 2) = \\text{Poisson}(4)$.",
      "$$P(X = 3) = \\frac{e^{-4} \\cdot 4^3}{3!} = \\frac{64e^{-4}}{6} = 0.1954$$",
    ],
  },
  {
    question: "The number of claims, $N$, on a policy in a year has a Poisson distribution with $P(N = 2) = 2P(N = 3)$. Calculate the probability that the policy has at least $2$ claims in a year, given that it has at least $1$ claim.",
    choices: ["$0.4308$", "$0.4422$", "$0.5692$", "$0.6653$", "$0.7769$"],
    answer: 2,
    solution: [
      "From the PMF, $\\frac{e^{-\\lambda}\\lambda^2}{2} = 2 \\cdot \\frac{e^{-\\lambda}\\lambda^3}{6}$, which gives $\\frac{1}{2} = \\frac{\\lambda}{3}$, so $\\lambda = 1.5$.",
      "$P(N \\ge 1) = 1 - e^{-1.5} = 0.7769$ and $P(N \\ge 2) = 1 - e^{-1.5} - 1.5e^{-1.5} = 1 - 2.5e^{-1.5} = 0.4422$.",
      "Since the event $N \\ge 2$ is contained in the event $N \\ge 1$:",
      "$$P(N \\ge 2 \\mid N \\ge 1) = \\frac{1 - 2.5e^{-1.5}}{1 - e^{-1.5}} = \\frac{0.4422}{0.7769} = 0.5692$$",
    ],
  },
  {
    question: "The number of workplace injury claims reported to an insurer each week has a Poisson distribution with mean $1.2$, and the counts in different weeks are independent. Over a three-week period, exactly $4$ claims are reported. Calculate the probability that at least one of these claims was reported in the first week.",
    choices: ["$0.1975$", "$0.3951$", "$0.6988$", "$0.8025$", "$0.9877$"],
    answer: 3,
    solution: [
      "Let $X_1, X_2, X_3$ be the weekly counts. By the sum and scaling properties, $X_2 + X_3 \\sim \\text{Poisson}(2.4)$ and $X_1 + X_2 + X_3 \\sim \\text{Poisson}(3.6)$.",
      "$$P(X_1 = 0 \\mid X_1 + X_2 + X_3 = 4) = \\frac{P(X_1 = 0)\\,P(X_2 + X_3 = 4)}{P(X_1 + X_2 + X_3 = 4)} = \\frac{e^{-1.2} \\cdot \\frac{e^{-2.4}(2.4)^4}{4!}}{\\frac{e^{-3.6}(3.6)^4}{4!}}$$",
      "The exponentials and factorials cancel, leaving $\\left(\\frac{2.4}{3.6}\\right)^4 = \\left(\\frac{2}{3}\\right)^4 = \\frac{16}{81}$.",
      "$$P(X_1 \\ge 1 \\mid X_1 + X_2 + X_3 = 4) = 1 - \\frac{16}{81} = \\frac{65}{81} = 0.8025$$",
    ],
  },
];

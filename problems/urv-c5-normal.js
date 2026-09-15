export default [
  {
    question: "The amount of a single homeowners claim, $X$, is normally distributed with mean $1{,}000$ and variance $40{,}000$. You are given $\\Phi(1) = 0.8413$ and $\\Phi(2) = 0.9772$. Calculate the probability that a claim is between $600$ and $1{,}200$.",
    choices: ["$0.1359$", "$0.1587$", "$0.6826$", "$0.8185$", "$0.9544$"],
    answer: 3,
    solution: [
      "The standard deviation is $\\sigma = \\sqrt{40{,}000} = 200$, so standardize with $Z = \\frac{X - 1{,}000}{200}$.",
      "$$P(600 < X < 1{,}200) = P\\left(\\frac{600 - 1{,}000}{200} < Z < \\frac{1{,}200 - 1{,}000}{200}\\right) = P(-2 < Z < 1)$$",
      "By symmetry, $\\Phi(-2) = 1 - \\Phi(2) = 0.0228$.",
      "$$P(-2 < Z < 1) = \\Phi(1) - \\Phi(-2) = 0.8413 - 0.0228 = 0.8185$$",
    ],
  },
  {
    question: "An insurer covers two independent lines of business. Annual losses on the first line are normally distributed with mean $3{,}000$ and standard deviation $240$, and annual losses on the second line are normally distributed with mean $2{,}000$ and standard deviation $320$. The insurer sets its reserve equal to the 95th percentile of total annual losses. Using $\\Phi(1.645) = 0.95$, calculate the reserve.",
    choices: ["$5{,}512.8$", "$5{,}658.0$", "$5{,}784.0$", "$5{,}921.2$", "$6{,}097.6$"],
    answer: 1,
    solution: [
      "For independent normals, means add and variances add: $T = X_1 + X_2 \\sim N(5{,}000,\\ 240^2 + 320^2)$.",
      "$$\\operatorname{Var}(T) = 57{,}600 + 102{,}400 = 160{,}000, \\quad \\sigma_T = 400$$",
      "The 95th percentile is $x_{0.95} = \\mu + z_{0.95}\\sigma$ with $z_{0.95} = 1.645$.",
      "$$x_{0.95} = 5{,}000 + 1.645(400) = 5{,}658.0$$",
    ],
  },
  {
    question: "An insurer issues $225$ auto policies. Each policy independently has probability $0.1$ of producing a claim this year. Using the normal approximation with a continuity correction, and given $\\Phi(2.00) = 0.9772$, $\\Phi(2.11) = 0.9826$, and $\\Phi(2.22) = 0.9868$, calculate the probability that at least $32$ policies produce a claim.",
    choices: ["$0.0132$", "$0.0174$", "$0.0228$", "$0.0456$", "$0.9772$"],
    answer: 2,
    solution: [
      "The number of claims is $X \\sim \\text{Binomial}(225, 0.1)$, with $np = 22.5$ and $np(1-p) = 20.25$, so $\\sigma = 4.5$.",
      "With a continuity correction, $P(X \\ge 32) \\approx P(Y > 31.5)$ where $Y \\sim N(22.5, 20.25)$.",
      "$$z = \\frac{31.5 - 22.5}{4.5} = 2$$",
      "$$P(Y > 31.5) = 1 - \\Phi(2) = 1 - 0.9772 = 0.0228$$",
    ],
  },
  {
    question: "Individual property losses are normally distributed. Exactly $2.5\\%$ of losses exceed $1{,}392$, and exactly $5\\%$ of losses are less than $671$. Nine losses are selected, and they are mutually independent. Using $\\Phi(1.645) = 0.95$, $\\Phi(1.96) = 0.975$, and $\\Phi(3) = 0.9987$, calculate the probability that the average of the nine losses exceeds $1{,}200$.",
    choices: ["$0.0013$", "$0.0026$", "$0.0030$", "$0.0105$", "$0.1587$"],
    answer: 0,
    solution: [
      "The 97.5th percentile gives $\\mu + 1.96\\sigma = 1{,}392$, and the 5th percentile gives $\\mu - 1.645\\sigma = 671$.",
      "Subtracting, $3.605\\sigma = 721$, so $\\sigma = 200$ and $\\mu = 1{,}392 - 1.96(200) = 1{,}000$.",
      "The sample mean satisfies $\\bar{X} \\sim N\\left(1{,}000, \\frac{200^2}{9}\\right)$, so its standard deviation is $\\frac{200}{3}$.",
      "$$P(\\bar{X} > 1{,}200) = 1 - \\Phi\\left(\\frac{1{,}200 - 1{,}000}{200/3}\\right) = 1 - \\Phi(3) = 1 - 0.9987 = 0.0013$$",
    ],
  },
];

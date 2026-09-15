export default [
  {
    question: "The lifetime, in years, of a home water heater is exponentially distributed with mean $\\theta = 5$. Calculate the probability that the water heater fails after its 2nd year but before its 8th year, rounded to four decimal places.",
    choices: ["$0.2019$", "$0.4684$", "$0.5488$", "$0.6988$", "$0.7981$"],
    answer: 1,
    solution: [
      "Let $X \\sim \\text{Exp}$ with mean $\\theta = 5$, so $S(x) = P(X > x) = e^{-x/5}$.",
      "$$P(2 < X < 8) = S(2) - S(8) = e^{-2/5} - e^{-8/5}$$",
      "$$= 0.6703 - 0.2019 = 0.4684$$",
    ],
  },
  {
    question: "The time, in years, until a newly issued policy produces its first claim is exponentially distributed. The median of this time is $3$ years. Given that a policy has had no claim during its first $2$ years, calculate the probability that its first claim occurs within the next $4$ years, rounded to four decimal places.",
    choices: ["$0.3800$", "$0.3969$", "$0.6031$", "$0.7364$", "$0.7500$"],
    answer: 2,
    solution: [
      "The median of $\\text{Exp}(\\lambda)$ is $\\frac{\\ln 2}{\\lambda}$, so $\\frac{\\ln 2}{\\lambda} = 3$ and $\\lambda = \\frac{\\ln 2}{3}$.",
      "By the memoryless property, $P(X \\le 6 \\mid X > 2) = P(X \\le 4)$.",
      "$$P(X \\le 4) = 1 - e^{-4\\lambda} = 1 - e^{-\\frac{4}{3}\\ln 2} = 1 - 2^{-4/3} = 1 - 0.3969 = 0.6031$$",
    ],
  },
  {
    question: "An office has three printers whose times until failure are mutually independent and exponentially distributed with means $2$, $3$, and $6$ years. Calculate the probability that at least one of the printers fails within the first $6$ months, rounded to four decimal places.",
    choices: ["$0.0444$", "$0.1275$", "$0.2212$", "$0.3935$", "$0.4547$"],
    answer: 3,
    solution: [
      "The failure rates are $\\lambda_1 = \\frac{1}{2}$, $\\lambda_2 = \\frac{1}{3}$, and $\\lambda_3 = \\frac{1}{6}$ per year.",
      "The time until the first failure is $M = \\min(X_1, X_2, X_3) \\sim \\text{Exp}(\\lambda_1 + \\lambda_2 + \\lambda_3)$, and $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 1$ per year.",
      "$$P(M \\le 0.5) = 1 - e^{-1(0.5)} = 1 - 0.6065 = 0.3935$$",
    ],
  },
  {
    question: "An insurer receives auto claims and home claims. The times between successive auto claims are independent and exponentially distributed with mean $3$ days, and the times between successive home claims are independent and exponentially distributed with mean $6$ days, so each claim type arrives according to a Poisson process. The two claim types occur independently of each other. Starting at time $0$, calculate the probability that the third claim of either type occurs within the first $4$ days, rounded to four decimal places.",
    choices: ["$0.1506$", "$0.3233$", "$0.4866$", "$0.5940$", "$0.6767$"],
    answer: 1,
    solution: [
      "Auto claims arrive at rate $\\frac{1}{3}$ per day and home claims at rate $\\frac{1}{6}$ per day. Since competing exponential rates add, all claims together form a Poisson process with rate $\\lambda = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$ per day.",
      "The third claim occurs within $4$ days exactly when at least $3$ claims occur in $[0, 4]$. The count is $N(4) \\sim \\text{Poisson}(\\lambda t) = \\text{Poisson}(2)$.",
      "$$P(N(4) \\ge 3) = 1 - e^{-2}\\left(1 + 2 + \\frac{2^2}{2!}\\right) = 1 - 5e^{-2}$$",
      "$$= 1 - 0.6767 = 0.3233$$",
    ],
  },
];

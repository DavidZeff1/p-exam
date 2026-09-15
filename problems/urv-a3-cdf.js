export default [
  {
    question: "The number of claims, $X$, filed in a year by a randomly selected auto policyholder has cumulative distribution function $F(x) = 0$ for $x < 0$, $F(x) = 0.25$ for $0 \\le x < 1$, $F(x) = 0.55$ for $1 \\le x < 2$, $F(x) = 0.80$ for $2 \\le x < 3$, and $F(x) = 1$ for $x \\ge 3$. Calculate the probability that the policyholder files at least $1$ but no more than $2$ claims.",
    choices: ["$0.25$", "$0.30$", "$0.45$", "$0.55$", "$0.80$"],
    answer: 3,
    solution: [
      "$X$ is discrete with values $0, 1, 2, 3$, so $P(1 \\le X \\le 2) = P(X \\le 2) - P(X \\le 0) = F(2) - F(0)$.",
      "Using $F(2) - F(1)$ would drop the jump at $x = 1$, which is $P(X = 1) = 0.55 - 0.25 = 0.30$.",
      "$$P(1 \\le X \\le 2) = 0.80 - 0.25 = 0.55$$",
    ],
  },
  {
    question: "The lifetime of a water heater, $X$, in years, has cumulative distribution function $F(x) = 1 - \\left(\\frac{2}{2 + x}\\right)^3$ for $x \\ge 0$ and $F(x) = 0$ for $x < 0$. Calculate the probability that the water heater fails after $1$ year but no later than $3$ years, rounded to four decimal places.",
    choices: ["$0.0640$", "$0.2323$", "$0.2963$", "$0.7037$", "$0.9360$"],
    answer: 1,
    solution: [
      "$P(1 < X \\le 3) = F(3) - F(1)$.",
      "$F(3) = 1 - \\left(\\frac{2}{5}\\right)^3 = 1 - \\frac{8}{125} = 0.9360$ and $F(1) = 1 - \\left(\\frac{2}{3}\\right)^3 = 1 - \\frac{8}{27} \\approx 0.7037$.",
      "$$P(1 < X \\le 3) = \\frac{8}{27} - \\frac{8}{125} = \\frac{784}{3375} \\approx 0.2323$$",
    ],
  },
  {
    question: "The size of a property loss, $X$, in thousands, has cumulative distribution function $F(x) = 1 - e^{-(x/10)^2}$ for $x \\ge 0$ and $F(x) = 0$ for $x < 0$. Calculate the $90$th percentile of $X$, in thousands, rounded to two decimal places.",
    choices: ["$3.25$", "$4.80$", "$8.33$", "$9.49$", "$15.17$"],
    answer: 4,
    solution: [
      "The $90$th percentile $x$ satisfies $F(x) = 0.90$, so $e^{-(x/10)^2} = 0.10$.",
      "Taking logarithms: $\\left(\\frac{x}{10}\\right)^2 = -\\ln 0.10 = \\ln 10 \\approx 2.302585$.",
      "$$x = 10\\sqrt{\\ln 10} \\approx 15.17$$",
    ],
  },
  {
    question: "The payment, $X$, in thousands, on a claim under a policy with a limit of $8$ thousand has cumulative distribution function $F(x) = 0$ for $x < 0$, $F(x) = 0.2 + 0.1x$ for $0 \\le x < 4$, $F(x) = 1 - 0.4e^{-(x - 4)/2}$ for $4 \\le x < 8$, and $F(x) = 1$ for $x \\ge 8$. Calculate the probability that the payment is at least $2$ thousand and less than $8$ thousand, given that the payment is positive. Round to four decimal places.",
    choices: ["$0.5459$", "$0.6000$", "$0.6823$", "$0.7500$", "$0.9323$"],
    answer: 2,
    solution: [
      "$F$ jumps by $0.2$ at $x = 0$, so $P(X = 0) = 0.2$ and $P(X > 0) = 1 - F(0) = 0.8$. It also jumps at $x = 8$, so the probability of a payment less than $8$ uses the left limit $F(8^-) = 1 - 0.4e^{-2} \\approx 0.945866$.",
      "$F$ is continuous at $x = 2$, so $P(X < 2) = F(2) = 0.2 + 0.2 = 0.4$.",
      "$P(2 \\le X < 8) = F(8^-) - F(2) \\approx 0.945866 - 0.4 = 0.545866$, and this event lies inside $X > 0$.",
      "$$P(2 \\le X < 8 \\mid X > 0) = \\frac{0.545866}{0.8} \\approx 0.6823$$",
    ],
  },
];

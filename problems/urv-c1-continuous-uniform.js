export default [
  {
    question: "The waiting time, in minutes, for a roadside assistance truck to arrive after a policyholder calls is uniformly distributed on $[15, 75]$. Calculate the probability that the waiting time exceeds its expected value by more than $10$ minutes.",
    choices: ["$\\frac{1}{6}$", "$\\frac{4}{15}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$"],
    answer: 2,
    solution: [
      "Let $X \\sim U(15, 75)$. The mean is the midpoint: $E[X] = \\frac{15 + 75}{2} = 45$.",
      "We need $P(X > 55)$, which is the length of $[55, 75]$ divided by the length of $[15, 75]$.",
      "$$P(X > 55) = \\frac{75 - 55}{75 - 15} = \\frac{20}{60} = \\frac{1}{3}$$",
    ],
  },
  {
    question: "The cost of repairing a damaged vehicle, $X$, is uniformly distributed on an interval $[a, b]$. The expected repair cost is $\\$1{,}200$ and the variance of the repair cost is $30{,}000$. Calculate the 90th percentile of $X$, rounded to the nearest dollar.",
    choices: ["$\\$1{,}339$", "$\\$1{,}370$", "$\\$1{,}422$", "$\\$1{,}440$", "$\\$1{,}680$"],
    answer: 3,
    solution: [
      "From the variance, $\\frac{(b - a)^2}{12} = 30{,}000$, so $(b - a)^2 = 360{,}000$ and $b - a = 600$.",
      "From the mean, $\\frac{a + b}{2} = 1{,}200$, so the interval is centered at $1{,}200$: $a = 900$ and $b = 1{,}500$.",
      "$$x_{0.90} = a + 0.90(b - a) = 900 + 0.90(600) = 1{,}440$$",
    ],
  },
  {
    question: "The amount of a storm damage loss is uniformly distributed on $[0, 4{,}000]$. An insurance policy pays the amount of the loss in excess of a deductible of \\$1,000. Given that the policy makes a positive payment, calculate the probability that the payment exceeds \\$1,800.",
    choices: ["$\\frac{3}{10}$", "$\\frac{2}{5}$", "$\\frac{11}{20}$", "$\\frac{3}{5}$", "$\\frac{11}{15}$"],
    answer: 1,
    solution: [
      "Let $X \\sim U(0, 4{,}000)$ be the loss. A positive payment means $X > 1{,}000$, and a payment above $1{,}800$ means $X > 2{,}800$.",
      "Since $\\{X > 2{,}800\\} \\subset \\{X > 1{,}000\\}$, $P(X > 2{,}800 \\mid X > 1{,}000) = \\frac{P(X > 2{,}800)}{P(X > 1{,}000)}$.",
      "$$\\frac{(4{,}000 - 2{,}800)/4{,}000}{(4{,}000 - 1{,}000)/4{,}000} = \\frac{1{,}200}{3{,}000} = \\frac{2}{5}$$",
    ],
  },
  {
    question: "The time, in minutes, that a claims adjuster needs to complete a property inspection is uniformly distributed on an interval $[a, b]$, with mean $50$ and variance $75$. The adjuster completes $5$ inspections, and their times are mutually independent. Calculate the probability that at least $2$ of the $5$ inspections take longer than $60$ minutes, rounded to four decimal places.",
    choices: ["$0.1608$", "$0.1962$", "$0.5177$", "$0.5981$", "$0.8038$"],
    answer: 1,
    solution: [
      "From $\\frac{(b - a)^2}{12} = 75$, $b - a = \\sqrt{900} = 30$. With midpoint $50$, $a = 35$ and $b = 65$.",
      "For one inspection, $p = P(X > 60) = \\frac{65 - 60}{30} = \\frac{1}{6}$.",
      "The number $N$ of inspections longer than $60$ minutes is binomial with $n = 5$ and $p = \\frac{1}{6}$.",
      "$$P(N \\ge 2) = 1 - \\left(\\frac{5}{6}\\right)^5 - 5\\left(\\frac{1}{6}\\right)\\left(\\frac{5}{6}\\right)^4 = 1 - \\frac{3{,}125}{7{,}776} - \\frac{3{,}125}{7{,}776} = \\frac{1{,}526}{7{,}776} \\approx 0.1962$$",
    ],
  },
];

export default [
  {
    question: "The time, in months, until a newly installed water heater develops a leak is a random variable $X$ with density function $f(x) = c\\,x^2 e^{-x/4}$ for $x > 0$, where $c$ is a constant. Calculate $\\operatorname{Var}(X)$.",
    choices: ["$12$", "$32$", "$48$", "$64$", "$144$"],
    answer: 2,
    solution: [
      "Compare with the scale form $f(x) = \\frac{1}{\\Gamma(\\alpha)\\theta^\\alpha} x^{\\alpha-1} e^{-x/\\theta}$: the factor $x^2$ gives $\\alpha - 1 = 2$, so $\\alpha = 3$, and $e^{-x/4}$ gives $\\theta = 4$.",
      "So $X \\sim \\text{Gamma}(\\alpha = 3, \\theta = 4)$, and the constant is $c = \\frac{1}{\\Gamma(3) \\cdot 4^3} = \\frac{1}{128}$.",
      "$$\\operatorname{Var}(X) = \\alpha\\theta^2 = 3(4^2) = 48$$",
    ],
  },
  {
    question: "Claims arrive at a regional office according to a Poisson process with a rate of $2$ claims per day. Let $T$ be the time, in days, from the start of the day until the $5$th claim arrives. Calculate $P(T > 1.5)$.",
    choices: ["$0.1847$", "$0.3528$", "$0.6472$", "$0.8153$", "$0.9161$"],
    answer: 3,
    solution: [
      "$T \\sim \\text{Gamma}(5, \\lambda = 2)$. The waiting time for the $5$th claim exceeds $1.5$ days exactly when fewer than $5$ claims arrive by time $1.5$.",
      "The count by time $1.5$ is $N(1.5) \\sim \\text{Poisson}(2 \\times 1.5) = \\text{Poisson}(3)$.",
      "$$P(T > 1.5) = P(N(1.5) \\le 4) = e^{-3}\\left(1 + 3 + \\frac{9}{2} + \\frac{27}{6} + \\frac{81}{24}\\right)$$",
      "$$= 16.375\\,e^{-3} = 0.8153$$",
    ],
  },
  {
    question: "An insurer's annual losses from two independent lines of business are $X$ and $Y$, with moment generating functions $M_X(t) = (1 - 400t)^{-2}$ and $M_Y(t) = (1 - 400t)^{-4}$ for $t < \\frac{1}{400}$. Next year, all losses on both lines increase by $25\\%$ due to inflation. Calculate the standard deviation of the insurer's total losses next year, rounded to the nearest integer.",
    choices: ["$980$", "$1{,}225$", "$1{,}531$", "$1{,}707$", "$3{,}000$"],
    answer: 1,
    solution: [
      "The MGF $(1 - \\theta t)^{-\\alpha}$ identifies $X \\sim \\text{Gamma}(2, \\theta = 400)$ and $Y \\sim \\text{Gamma}(4, \\theta = 400)$.",
      "Same scale and independent, so $X + Y \\sim \\text{Gamma}(6, \\theta = 400)$.",
      "By the scaling property, $1.25(X + Y) \\sim \\text{Gamma}(6, \\theta = 500)$.",
      "$$\\sigma = \\sqrt{\\alpha}\\,\\theta = \\sqrt{6}(500) = 1{,}225$$",
    ],
  },
  {
    question: "A backup power system uses $3$ identical batteries one after another: when the battery in use fails, the next one is switched on immediately. Battery lifetimes are mutually independent, and each is exponentially distributed with mean $2$ years. The system fails when the third battery fails. Given that the system is still operating after $2$ years, calculate the probability that it fails between $4$ and $6$ years after installation.",
    choices: ["$0.0556$", "$0.2140$", "$0.2430$", "$0.2535$", "$0.2756$"],
    answer: 4,
    solution: [
      "The system lifetime is a sum of $3$ independent exponentials with rate $\\lambda = \\frac{1}{2}$, so $T \\sim \\text{Gamma}(3, \\lambda = \\frac{1}{2})$.",
      "By the Poisson connection, $P(T > t) = P(N(t) \\le 2)$ with $N(t) \\sim \\text{Poisson}(t/2)$, so $P(T > t) = e^{-t/2}\\left(1 + \\frac{t}{2} + \\frac{t^2}{8}\\right)$.",
      "$P(T > 2) = 2.5e^{-1}$, $P(T > 4) = 5e^{-2}$, and $P(T > 6) = 8.5e^{-3}$.",
      "$$P(4 < T < 6 \\mid T > 2) = \\frac{P(T > 4) - P(T > 6)}{P(T > 2)} = \\frac{5e^{-2} - 8.5e^{-3}}{2.5e^{-1}}$$",
      "$$= 2e^{-1} - 3.4e^{-2} = 0.2756$$",
    ],
  },
];

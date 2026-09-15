export default [
  {
    question: "The loss ratio $X$ for a small commercial auto portfolio, expressed as a proportion of earned premium, has density function $f(x) = c\\,x^2(1 - x)$ for $0 < x < 1$ and $f(x) = 0$ otherwise. Calculate $P\\left(X < \\frac{1}{2}\\right)$.",
    choices: ["$\\frac{5}{32}$", "$\\frac{1}{4}$", "$\\frac{5}{16}$", "$\\frac{1}{2}$", "$\\frac{11}{16}$"],
    answer: 2,
    solution: [
      "The density has the form $x^{\\alpha-1}(1-x)^{\\beta-1}$ with $\\alpha = 3$ and $\\beta = 2$, so $X \\sim \\text{Beta}(3, 2)$.",
      "$$c = \\frac{1}{B(3, 2)} = \\frac{\\Gamma(5)}{\\Gamma(3)\\Gamma(2)} = \\frac{24}{2 \\cdot 1} = 12$$",
      "$$P\\left(X < \\tfrac{1}{2}\\right) = \\int_0^{1/2} 12(x^2 - x^3)\\,dx = 12\\left[\\frac{x^3}{3} - \\frac{x^4}{4}\\right]_0^{1/2} = 12\\left(\\frac{1}{24} - \\frac{1}{64}\\right)$$",
      "$$= 12 \\cdot \\frac{5}{192} = \\frac{5}{16}$$",
    ],
  },
  {
    question: "The proportion $X$ of claims submitted to an insurer in a given month that require manual review follows a beta distribution with mean $0.40$ and variance $0.04$. Calculate the probability that $X$ exceeds $0.40$.",
    choices: ["$0.1792$", "$0.4752$", "$0.5000$", "$0.5248$", "$0.8208$"],
    answer: 1,
    solution: [
      "Let $X \\sim \\text{Beta}(\\alpha, \\beta)$ and $s = \\alpha + \\beta$. Then $E[X] = \\frac{\\alpha}{s} = 0.40$ and $\\operatorname{Var}(X) = \\frac{E[X](1 - E[X])}{s + 1}$.",
      "$$\\frac{0.40(0.60)}{s + 1} = 0.04 \\implies s + 1 = 6 \\implies s = 5, \\quad \\alpha = 2, \\; \\beta = 3$$",
      "The density is $f(x) = \\frac{\\Gamma(5)}{\\Gamma(2)\\Gamma(3)}\\,x(1-x)^2 = 12x(1-x)^2$, so $F(x) = \\int_0^x 12(t - 2t^2 + t^3)\\,dt = 6x^2 - 8x^3 + 3x^4$.",
      "$$F(0.40) = 6(0.16) - 8(0.064) + 3(0.0256) = 0.96 - 0.512 + 0.0768 = 0.5248$$",
      "$$P(X > 0.40) = 1 - 0.5248 = 0.4752$$",
    ],
  },
  {
    question: "An insurer models the probability $p$ that a newly issued policy produces a claim in its first year as a random variable with a $\\text{Beta}(2, 8)$ distribution. Given $p$, policies produce claims independently, each with probability $p$. Of $20$ policies observed, exactly $3$ produce a claim in their first year. Two additional policies are then issued; given $p$, they are independent of each other and of the first $20$. Using the posterior distribution of $p$, calculate the probability that both new policies produce a claim in their first year, rounded to four decimal places.",
    choices: ["$0.0225$", "$0.0267$", "$0.0278$", "$0.0323$", "$0.0545$"],
    answer: 3,
    solution: [
      "With $k = 3$ claims in $n = 20$ trials, the posterior is $p \\mid \\text{data} \\sim \\text{Beta}(2 + 3, \\, 8 + 17) = \\text{Beta}(5, 25)$.",
      "Given $p$, the probability that both new policies produce a claim is $p^2$, so the required probability is the posterior second moment $E[p^2]$.",
      "$$E[p^2] = \\frac{\\alpha(\\alpha + 1)}{(\\alpha + \\beta)(\\alpha + \\beta + 1)} = \\frac{5 \\cdot 6}{30 \\cdot 31} = \\frac{1}{31}$$",
      "$$\\frac{1}{31} \\approx 0.0323$$",
    ],
  },
  {
    question: "A reinsurer receives $5$ independent losses, each uniformly distributed on $(0, 6{,}000)$. Let $Y$ be the second-largest of the $5$ losses. Calculate the probability that $Y$ exceeds its expected value by more than $500$, rounded to four decimal places.",
    choices: ["$0.3088$", "$0.3528$", "$0.3672$", "$0.3912$", "$0.6328$"],
    answer: 2,
    solution: [
      "Write $Y = 6{,}000\\,U_{(4)}$, where $U_{(4)}$ is the $4$th order statistic of $5$ independent $\\text{Uniform}(0, 1)$ variables. Then $U_{(4)} \\sim \\text{Beta}(4, 5 - 4 + 1) = \\text{Beta}(4, 2)$.",
      "$$E[Y] = 6{,}000 \\cdot \\frac{4}{4 + 2} = 4{,}000, \\quad \\text{so we need } P(Y > 4{,}500) = P(U_{(4)} > 0.75)$$",
      "The density of $U_{(4)}$ is $\\frac{\\Gamma(6)}{\\Gamma(4)\\Gamma(2)}\\,x^3(1 - x) = 20(x^3 - x^4)$, so $F(x) = 5x^4 - 4x^5$.",
      "$$F(0.75) = 5\\left(\\frac{81}{256}\\right) - 4\\left(\\frac{243}{1024}\\right) = \\frac{405 - 243}{256} = \\frac{162}{256} = \\frac{81}{128}$$",
      "$$P(Y > 4{,}500) = 1 - \\frac{81}{128} = \\frac{47}{128} \\approx 0.3672$$",
    ],
  },
];

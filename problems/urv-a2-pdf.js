export default [
  {
    question: "The size of a hail damage claim, $X$, in thousands, has probability density function $f(x) = c(4 - x)$ for $0 \\le x \\le 4$ and $f(x) = 0$ otherwise, where $c$ is a constant. Calculate the probability that a claim is at most $1$ thousand.",
    choices: ["$0.2500$", "$0.3750$", "$0.4375$", "$0.5625$", "$0.8750$"],
    answer: 2,
    solution: [
      "The total area under the density must be $1$: $\\int_0^4 c(4 - x)\\,dx = c\\left[4x - \\frac{x^2}{2}\\right]_0^4 = 8c = 1$, so $c = \\frac{1}{8}$.",
      "$$P(X \\le 1) = \\int_0^1 \\frac{4 - x}{8}\\,dx = \\frac{1}{8}\\left[4x - \\frac{x^2}{2}\\right]_0^1 = \\frac{1}{8}\\left(4 - \\frac{1}{2}\\right) = \\frac{7}{16} = 0.4375$$",
    ],
  },
  {
    question: "The time, in years, from the issue of a warranty until the first repair claim, $X$, has probability density function $f(x) = \\frac{c}{(1 + x)^4}$ for $x > 0$ and $f(x) = 0$ otherwise, where $c$ is a constant. Calculate the probability that the first claim occurs after year $3$, given that no claim has occurred by the end of year $1$.",
    choices: ["$0.0156$", "$0.1250$", "$0.2500$", "$0.5000$", "$0.8750$"],
    answer: 1,
    solution: [
      "Normalize: $\\int_0^{\\infty} c(1 + x)^{-4}\\,dx = c\\left[-\\frac{(1 + x)^{-3}}{3}\\right]_0^{\\infty} = \\frac{c}{3} = 1$, so $c = 3$.",
      "For $t > 0$, $P(X > t) = \\int_t^{\\infty} 3(1 + x)^{-4}\\,dx = (1 + t)^{-3}$, so $P(X > 1) = \\frac{1}{8}$ and $P(X > 3) = \\frac{1}{64}$.",
      "Since the event $X > 3$ is contained in the event $X > 1$:",
      "$$P(X > 3 \\mid X > 1) = \\frac{P(X > 3)}{P(X > 1)} = \\frac{1/64}{1/8} = \\frac{1}{8} = 0.1250$$",
    ],
  },
  {
    question: "The proportion of a building damaged in a fire, $X$, has probability density function $f(x) = a + bx$ for $0 \\le x \\le 1$ and $f(x) = 0$ otherwise, where $a$ and $b$ are constants. It is known that $P(X > 0.5) = \\frac{5}{8}$. Calculate $P(X > 0.25)$, rounded to four decimal places.",
    choices: ["$0.1563$", "$0.7500$", "$0.8125$", "$0.8438$", "$0.9063$"],
    answer: 3,
    solution: [
      "Total area equals $1$: $\\int_0^1 (a + bx)\\,dx = a + \\frac{b}{2} = 1$.",
      "Given probability: $\\int_{0.5}^1 (a + bx)\\,dx = \\frac{a}{2} + \\frac{b}{2}\\left(1 - \\frac{1}{4}\\right) = \\frac{a}{2} + \\frac{3b}{8} = \\frac{5}{8}$.",
      "Substituting $a = 1 - \\frac{b}{2}$ gives $\\frac{1}{2} + \\frac{b}{8} = \\frac{5}{8}$, so $b = 1$ and $a = \\frac{1}{2}$.",
      "$$P(X > 0.25) = 1 - \\int_0^{0.25}\\left(\\frac{1}{2} + x\\right)dx = 1 - \\left(\\frac{1}{8} + \\frac{1}{32}\\right) = \\frac{27}{32} = 0.84375 \\approx 0.8438$$",
    ],
  },
  {
    question: "For each of three independent policies, the time until the first claim, $T$, in years, has probability density function $f(t) = c\\,t\\,e^{-t/2}$ for $t > 0$ and $f(t) = 0$ otherwise, where $c$ is a constant. Calculate the probability, rounded to four decimal places, that at most one of the three policies has its first claim within $2$ years.",
    choices: ["$0.3064$", "$0.3983$", "$0.4291$", "$0.6017$", "$0.8274$"],
    answer: 4,
    solution: [
      "Normalize using integration by parts: $\\int_0^{\\infty} t\\,e^{-t/2}\\,dt = \\left[-2t\\,e^{-t/2} - 4e^{-t/2}\\right]_0^{\\infty} = 4$, so $c = \\frac{1}{4}$.",
      "$$p = P(T \\le 2) = \\frac{1}{4}\\left[-2t\\,e^{-t/2} - 4e^{-t/2}\\right]_0^{2} = \\frac{1}{4}\\left(4 - 8e^{-1}\\right) = 1 - 2e^{-1} = 0.264241$$",
      "The number of the three policies with a claim within $2$ years is binomial with $n = 3$ and $p = 0.264241$, so $1 - p = 0.735759$.",
      "$$P(\\text{at most one}) = (0.735759)^3 + 3(0.264241)(0.735759)^2 = 0.398297 + 0.429134 = 0.827430 \\approx 0.8274$$",
    ],
  },
];

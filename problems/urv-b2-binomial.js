export default [
  {
    question: "An insurer covers $8$ independent homes. Each home has probability $0.15$ of filing a water damage claim during the year. Calculate the probability that exactly $2$ of the homes file a claim during the year.",
    choices: ["$0.0085$", "$0.0225$", "$0.1717$", "$0.2376$", "$0.3428$"],
    answer: 3,
    solution: [
      "The number of homes filing a claim is $X \\sim \\text{Bin}(8, 0.15)$, so $q = 0.85$.",
      "$$P(X = 2) = \\binom{8}{2}(0.15)^2(0.85)^6 = 28(0.0225)(0.377150) = 0.2376$$",
    ],
  },
  {
    question: "The number of policies in a small portfolio that result in a claim, $X$, follows a binomial distribution with $E[X] = 4$ and $\\operatorname{Var}(X) = 3.2$. Calculate the probability that at least $2$ policies result in a claim.",
    choices: ["$0.7939$", "$0.9308$", "$0.9424$", "$0.9885$", "$0.9933$"],
    answer: 1,
    solution: [
      "From $np = 4$ and $npq = 3.2$: $q = \\frac{3.2}{4} = 0.8$, so $p = 0.2$ and $n = \\frac{4}{0.2} = 20$.",
      "Use the complement: $P(X \\ge 2) = 1 - P(X = 0) - P(X = 1)$.",
      "$P(X = 0) = (0.8)^{20} = 0.011529$ and $P(X = 1) = 20(0.2)(0.8)^{19} = 0.057646$.",
      "$$P(X \\ge 2) = 1 - 0.011529 - 0.057646 = 0.9308$$",
    ],
  },
  {
    question: "An insurer has $625$ independent auto policies, each with probability $0.2$ of producing a claim this year. Using the normal approximation with continuity correction, calculate the approximate probability that at least $140$ policies produce a claim. Use $\\Phi(1.40) = 0.9192$, $\\Phi(1.45) = 0.9265$, $\\Phi(1.50) = 0.9332$, and $\\Phi(1.55) = 0.9394$.",
    choices: ["$0.0606$", "$0.0668$", "$0.0735$", "$0.0808$", "$0.9265$"],
    answer: 2,
    solution: [
      "$X \\sim \\text{Bin}(625, 0.2)$ has $np = 125$ and $npq = 625(0.2)(0.8) = 100$, so $\\sigma = 10$.",
      "With continuity correction, $P(X \\ge 140) = P(X > 139.5)$.",
      "$$z = \\frac{139.5 - 125}{10} = 1.45$$",
      "$$P(X \\ge 140) \\approx 1 - \\Phi(1.45) = 1 - 0.9265 = 0.0735$$",
    ],
  },
  {
    question: "A company insures $5$ buildings in Region 1 and $10$ buildings in Region 2. Each building, independently of all others, has probability $0.2$ of suffering storm damage this season. At the end of the season, exactly $4$ buildings in total have suffered storm damage. Calculate the probability that exactly $1$ of the damaged buildings is in Region 1.",
    choices: ["$0.0825$", "$0.0879$", "$0.3951$", "$0.4096$", "$0.4396$"],
    answer: 4,
    solution: [
      "Let $X \\sim \\text{Bin}(5, 0.2)$ and $Y \\sim \\text{Bin}(10, 0.2)$ be the damaged counts in the two regions. They are independent with the same $p$, so $X + Y \\sim \\text{Bin}(15, 0.2)$.",
      "$$P(X = 1 \\mid X + Y = 4) = \\frac{P(X = 1)\\,P(Y = 3)}{P(X + Y = 4)}$$",
      "$$= \\frac{\\binom{5}{1}(0.2)(0.8)^4 \\cdot \\binom{10}{3}(0.2)^3(0.8)^7}{\\binom{15}{4}(0.2)^4(0.8)^{11}} = \\frac{\\binom{5}{1}\\binom{10}{3}}{\\binom{15}{4}}$$",
      "$$= \\frac{5 \\cdot 120}{1365} = \\frac{40}{91} = 0.4396$$",
    ],
  },
];

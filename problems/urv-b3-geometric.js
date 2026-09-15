export default [
  {
    question: "A telemarketer calls prospective policyholders one at a time. Each call, independently of all other calls, results in a sale with probability $0.2$. Calculate the probability that the first sale occurs on the fourth call.",
    choices: ["$0.1024$", "$0.4096$", "$0.4880$", "$0.5120$", "$0.5904$"],
    answer: 0,
    solution: [
      "Let $X$ be the number of calls up to and including the first sale, so $X \\sim \\text{Geom}(p)$ with $p = 0.2$ and $q = 0.8$.",
      "The first sale on call $4$ requires $3$ failures followed by $1$ success: $P(X = k) = q^{k-1}p$.",
      "$$P(X = 4) = (0.8)^3(0.2) = 0.512 \\times 0.2 = 0.1024$$",
    ],
  },
  {
    question: "Each year, independently of all other years, a homeowners policy has a claim with probability $p$. The expected number of claim-free years before the first claim is $4$. Let $X$ be the number of years up to and including the year of the first claim. Calculate $\\operatorname{Var}(X)$.",
    choices: ["$4.47$", "$16.00$", "$20.00$", "$25.00$", "$45.00$"],
    answer: 2,
    solution: [
      "The number of claim-free years before the first claim is $X - 1$, with mean $E[X] - 1 = \\frac{1}{p} - 1 = \\frac{1-p}{p}$.",
      "Setting $\\frac{1-p}{p} = 4$ gives $1 - p = 4p$, so $p = 0.2$.",
      "$$\\operatorname{Var}(X) = \\frac{1-p}{p^2} = \\frac{0.8}{0.04} = 20.00$$",
    ],
  },
  {
    question: "A fraud investigator reviews claims one at a time. Each claim, independently of all others, is fraudulent with probability $0.05$. Given that none of the first $10$ claims reviewed is fraudulent, calculate the expected total number of claims reviewed up to and including the first fraudulent claim.",
    choices: ["$19$", "$20$", "$29$", "$30$", "$31$"],
    answer: 3,
    solution: [
      "Let $X \\sim \\text{Geom}(0.05)$ be the number of claims reviewed up to and including the first fraudulent one, so $E[X] = \\frac{1}{0.05} = 20$.",
      "By the memoryless property, given $X > 10$, the number of additional claims reviewed after the tenth, $X - 10$, has the same distribution as $X$.",
      "$$E[X \\mid X > 10] = 10 + E[X] = 10 + 20 = 30$$",
    ],
  },
  {
    question: "An insurer covers two independent risks. Each year, risk A has a claim with probability $0.1$ and risk B has a claim with probability $0.2$, independently of each other and of all other years. Let $X$ and $Y$ be the years in which risks A and B, respectively, first have a claim. Calculate the probability that risk A has its first claim in a strictly earlier year than risk B, rounded to four decimal places.",
    choices: ["$0.0714$", "$0.2857$", "$0.3333$", "$0.3571$", "$0.6429$"],
    answer: 1,
    solution: [
      "$X \\sim \\text{Geom}(0.1)$ and $Y \\sim \\text{Geom}(0.2)$ are independent, with $P(Y > k) = (0.8)^k$.",
      "Condition on $X$: $P(X < Y) = \\sum_{k=1}^{\\infty} P(X = k)P(Y > k) = \\sum_{k=1}^{\\infty} (0.9)^{k-1}(0.1)(0.8)^k$.",
      "This is a geometric series: $(0.1)(0.8)\\sum_{k=1}^{\\infty} (0.72)^{k-1} = \\frac{0.08}{1 - 0.72}$.",
      "$$P(X < Y) = \\frac{0.08}{0.28} = \\frac{2}{7} \\approx 0.2857$$",
    ],
  },
];

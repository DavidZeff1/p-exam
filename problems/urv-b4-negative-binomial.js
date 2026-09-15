export default [
  {
    question: "An underwriter reviews life insurance applications one at a time. Each application, independently of all others, is approved with probability $0.6$. Calculate the probability that the third approved application is the sixth application reviewed.",
    choices: ["$0.0138$", "$0.1382$", "$0.2074$", "$0.2304$", "$0.2765$"],
    answer: 1,
    solution: [
      "Let $X$ be the number of applications reviewed up to and including the third approval, so $X \\sim \\text{NB}(r = 3, p = 0.6)$ counting trials.",
      "The sixth application must be approved, and exactly $2$ of the first $5$ must be approved: $P(X = k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}$.",
      "$$P(X = 6) = \\binom{5}{2}(0.6)^3(0.4)^3 = 10 \\times 0.216 \\times 0.064 = 0.1382$$",
    ],
  },
  {
    question: "An auditor examines claim files one at a time. Each file, independently of all others, contains a coding error with probability $p$. The expected number of error-free files examined before the fourth file with a coding error is found is $6$. Let $X$ be the total number of files examined up to and including the fourth file with a coding error. Calculate $\\operatorname{Var}(X)$.",
    choices: ["$3.00$", "$3.75$", "$3.87$", "$6.00$", "$15.00$"],
    answer: 4,
    solution: [
      "The number of error-free files before the fourth error has mean $\\frac{r(1-p)}{p}$ with $r = 4$.",
      "Setting $\\frac{4(1-p)}{p} = 6$ gives $4 - 4p = 6p$, so $p = 0.4$.",
      "$$\\operatorname{Var}(X) = \\frac{r(1-p)}{p^2} = \\frac{4(0.6)}{0.16} = 15.00$$",
    ],
  },
  {
    question: "Each day, independently of all other days, a commercial property portfolio experiences a large loss with probability $0.2$. Calculate the probability that the third day with a large loss occurs after day $10$, rounded to four decimal places.",
    choices: ["$0.3222$", "$0.3758$", "$0.6174$", "$0.6778$", "$0.8791$"],
    answer: 3,
    solution: [
      "Let $X \\sim \\text{NB}(3, 0.2)$ be the day of the third large loss and $Y \\sim \\text{Bin}(10, 0.2)$ the number of large-loss days among the first $10$.",
      "The third large loss occurs after day $10$ exactly when there are at most $2$ large-loss days in the first $10$: $P(X > 10) = P(Y \\le 2)$.",
      "$$P(Y \\le 2) = (0.8)^{10} + \\binom{10}{1}(0.2)(0.8)^9 + \\binom{10}{2}(0.2)^2(0.8)^8$$",
      "$$= 0.107374 + 0.268435 + 0.301990 = 0.6778$$",
    ],
  },
  {
    question: "Two teams play a championship series that ends as soon as one team has won $4$ games. Team A wins each game with probability $0.6$, independently of all other games, and no game ends in a tie. Given that the series lasts at least $6$ games, calculate the probability that Team A wins the series, rounded to three decimal places.",
    choices: ["$0.373$", "$0.600$", "$0.648$", "$0.692$", "$0.710$"],
    answer: 2,
    solution: [
      "A team wins the series in game $k$ when its fourth win occurs on game $k$, a negative binomial probability $\\binom{k-1}{3}p^4(1-p)^{k-4}$.",
      "Team A: $P(\\text{A in } 6) = \\binom{5}{3}(0.6)^4(0.4)^2 = 0.20736$ and $P(\\text{A in } 7) = \\binom{6}{3}(0.6)^4(0.4)^3 = 0.165888$.",
      "Team B: $P(\\text{B in } 6) = \\binom{5}{3}(0.4)^4(0.6)^2 = 0.09216$ and $P(\\text{B in } 7) = \\binom{6}{3}(0.4)^4(0.6)^3 = 0.110592$.",
      "$P(\\text{at least } 6 \\text{ games}) = 0.20736 + 0.165888 + 0.09216 + 0.110592 = 0.576$.",
      "$$P(\\text{A wins} \\mid \\text{at least } 6 \\text{ games}) = \\frac{0.373248}{0.576} = 0.648$$",
    ],
  },
];

export default [
  {
    question: "The number of days, $X$, until an adjuster inspects a newly reported auto claim is uniformly distributed on the integers $\\{3, 4, \\ldots, 14\\}$. Calculate $P(5 \\le X \\le 9)$, rounded to four decimal places.",
    choices: ["$0.2500$", "$0.3333$", "$0.3636$", "$0.4167$", "$0.4545$"],
    answer: 3,
    solution: [
      "$X \\sim DU(3, 14)$, so the number of possible values is $n = 14 - 3 + 1 = 12$, each with probability $\\frac{1}{12}$.",
      "The integers from $5$ to $9$ inclusive number $9 - 5 + 1 = 5$.",
      "$$P(5 \\le X \\le 9) = \\frac{5}{12} \\approx 0.4167$$",
    ],
  },
  {
    question: "The number of days, $X$, that a rental car reimbursement claim remains open is uniformly distributed on the consecutive integers $\\{a, a+1, \\ldots, b\\}$. It is known that $E[X] = 20$ and $\\operatorname{Var}(X) = 14$. Calculate the probability that a claim remains open more than $22$ days, rounded to four decimal places.",
    choices: ["$0.2308$", "$0.2857$", "$0.3077$", "$0.3333$", "$0.3846$"],
    answer: 2,
    solution: [
      "From $\\operatorname{Var}(X) = \\frac{n^2 - 1}{12} = 14$, we get $n^2 = 169$, so $n = 13$.",
      "From $E[X] = \\frac{a + b}{2} = 20$, $a + b = 40$; from $n = b - a + 1 = 13$, $b - a = 12$. Hence $a = 14$ and $b = 26$.",
      "The values exceeding $22$ are $23, 24, 25, 26$, which is $4$ values.",
      "$$P(X > 22) = \\frac{4}{13} \\approx 0.3077$$",
    ],
  },
  {
    question: "A property loss, $X$, in thousands, is uniformly distributed on the integers $\\{1, 2, \\ldots, 20\\}$. An insurance policy pays the amount of the loss in excess of a deductible of $4$, subject to a maximum payment of $12$ (both in thousands). Calculate the expected payment, in thousands.",
    choices: ["$6.0$", "$6.3$", "$6.5$", "$6.8$", "$8.7$"],
    answer: 1,
    solution: [
      "The payment is $Y = \\min(\\max(X - 4, 0), 12)$, and each value of $X$ has probability $\\frac{1}{20}$.",
      "For $X \\le 4$, $Y = 0$. For $X = 5, \\ldots, 16$, $Y = X - 4$ takes the values $1, \\ldots, 12$, with sum $78$. For $X = 17, \\ldots, 20$, $Y = 12$, with sum $4(12) = 48$.",
      "$$E[Y] = \\frac{0 + 78 + 48}{20} = \\frac{126}{20} = 6.3$$",
    ],
  },
  {
    question: "The time, in days, to settle a minor claim is uniformly distributed on a set of consecutive integers, with mean $8$ and variance $4$. Settlement times for two claims are independent. Calculate the probability that the total settlement time for the two claims exceeds $19$ days, rounded to four decimal places.",
    choices: ["$0.0612$", "$0.1224$", "$0.2041$", "$0.2308$", "$0.3077$"],
    answer: 1,
    solution: [
      "From $\\frac{n^2 - 1}{12} = 4$, $n^2 = 49$, so $n = 7$. With $\\frac{a + b}{2} = 8$ and $b - a = 6$, the support is $\\{5, 6, \\ldots, 11\\}$.",
      "Let $X$ and $Y$ be the two times. There are $7 \\times 7 = 49$ equally likely pairs, and $X + Y > 19$ means $X + Y \\in \\{20, 21, 22\\}$.",
      "Count pairs: sum $22$: $(11, 11)$; sum $21$: $(10, 11), (11, 10)$; sum $20$: $(9, 11), (10, 10), (11, 9)$. That is $1 + 2 + 3 = 6$ pairs.",
      "$$P(X + Y > 19) = \\frac{6}{49} \\approx 0.1224$$",
    ],
  },
];

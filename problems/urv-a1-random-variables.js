export default [
  {
    question: "Two fair six-sided dice are rolled. Define the random variable $X$ on this sample space as the absolute difference between the two numbers rolled. Calculate $P(1 < X \\le 3)$.",
    choices: ["$\\frac{2}{9}$", "$\\frac{7}{18}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{5}{6}$"],
    answer: 1,
    solution: [
      "The sample space has $36$ equally likely ordered outcomes, and the support of $X$ is $\\{0, 1, 2, 3, 4, 5\\}$.",
      "$X = 2$ for the $8$ outcomes $(1,3), (2,4), (3,5), (4,6)$ and their reverses, and $X = 3$ for the $6$ outcomes $(1,4), (2,5), (3,6)$ and their reverses.",
      "The event $1 < X \\le 3$ excludes $X = 1$ and includes $X = 3$, so it is $\\{X = 2\\} \\cup \\{X = 3\\}$.",
      "$$P(1 < X \\le 3) = \\frac{8 + 6}{36} = \\frac{14}{36} = \\frac{7}{18}$$",
    ],
  },
  {
    question: "A policyholder has both an auto policy and a homeowners policy. Let $A$ be the event of an auto claim during the year and $H$ the event of a homeowners claim during the year, with $P(A) = 0.25$ and $P(H) = 0.15$. The probability that the policyholder files neither type of claim is $0.68$. Let $X = I_A + I_H$, where $I_A$ and $I_H$ are the indicator random variables of $A$ and $H$. Calculate $P(X = 1)$.",
    choices: ["$0.08$", "$0.16$", "$0.24$", "$0.32$", "$0.40$"],
    answer: 2,
    solution: [
      "$X$ counts how many of the two claim types occur, so its support is $\\{0, 1, 2\\}$, and $X = 1$ means exactly one of $A$, $H$ occurs.",
      "$$P(A \\cup H) = 1 - 0.68 = 0.32 \\qquad P(A \\cap H) = 0.25 + 0.15 - 0.32 = 0.08$$",
      "Here $P(X \\ge 1) = P(A \\cup H)$ and $P(X = 2) = P(A \\cap H)$.",
      "$$P(X = 1) = 0.32 - 0.08 = 0.24$$",
    ],
  },
  {
    question: "A loss $X$ takes the values $0$, $400$, $1{,}000$, $2{,}000$, $2{,}500$, and $5{,}000$ with probabilities $0.30$, $0.20$, $0.20$, $0.10$, $0.12$, and $0.08$, respectively. An insurance policy has a deductible of \\$500 and pays at most \\$2,000 per loss, so the payment is $Y = \\min(\\max(X - 500,\\ 0),\\ 2000)$. Calculate the probability, rounded to two decimal places, that the payment equals \\$2,000, given that the payment is positive.",
    choices: ["$0.20$", "$0.29$", "$0.30$", "$0.40$", "$0.60$"],
    answer: 3,
    solution: [
      "Apply $Y = g(X)$ to each value of $X$: the losses $0, 400, 1000, 2000, 2500, 5000$ give payments $0, 0, 500, 1500, 2000, 2000$.",
      "$Y = 2000$ requires $X - 500 \\ge 2000$, that is, $X \\ge 2500$, so $P(Y = 2000) = 0.12 + 0.08 = 0.20$. A loss of $2{,}000$ pays only $1{,}500$.",
      "$Y > 0$ requires $X > 500$, so $P(Y > 0) = 0.20 + 0.10 + 0.12 + 0.08 = 0.50$.",
      "$$P(Y = 2000 \\mid Y > 0) = \\frac{0.20}{0.50} = 0.40$$",
    ],
  },
  {
    question: "An actuary tracks three risk factors for a group of employees. For a randomly selected employee, let $A$, $B$, and $C$ be the events that the employee has risk factor 1, 2, and 3, respectively. You are given $P(A) = 0.30$, $P(B) = 0.25$, $P(C) = 0.20$, $P(A \\cap B) = 0.10$, $P(A \\cap C) = 0.08$, and $P(B \\cap C) = 0.06$. The probability that the employee has none of the three risk factors is $0.45$. Let $X = I_A + I_B + I_C$ be the number of risk factors the employee has. Calculate the probability, rounded to two decimal places, that $X = 1$, given that $X \\ge 1$.",
    choices: ["$0.22$", "$0.39$", "$0.49$", "$0.56$", "$0.71$"],
    answer: 4,
    solution: [
      "$P(X \\ge 1) = P(A \\cup B \\cup C) = 1 - 0.45 = 0.55$. By inclusion-exclusion, $0.55 = 0.75 - 0.24 + P(A \\cap B \\cap C)$, so $P(A \\cap B \\cap C) = 0.04$.",
      "Each pairwise intersection counts the triple intersection, so $P(X = 2) = (0.10 + 0.08 + 0.06) - 3(0.04) = 0.12$, and $P(X = 3) = 0.04$.",
      "$$P(X = 1) = 0.55 - P(X = 2) - P(X = 3) = 0.55 - 0.12 - 0.04 = 0.39$$",
      "$$P(X = 1 \\mid X \\ge 1) = \\frac{0.39}{0.55} = 0.7091 \\approx 0.71$$",
    ],
  },
];

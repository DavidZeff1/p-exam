export default [
  {
    question: "An insurer issues $10$ one-year policies. Each policy independently results in a claim during the year with probability $0.20$. Calculate the probability, rounded to three decimal places, that at least $2$ of the $10$ policies result in a claim.",
    choices: ["$0.302$", "$0.322$", "$0.376$", "$0.624$", "$0.893$"],
    answer: 3,
    solution: [
      "The number of policies with a claim is $X \\sim \\text{Binomial}(n = 10,\\ p = 0.20)$, and $P(X \\ge 2) = 1 - P(X = 0) - P(X = 1)$.",
      "$$P(X = 0) = (0.80)^{10} = 0.107374 \\qquad P(X = 1) = \\binom{10}{1}(0.20)(0.80)^{9} = 0.268435$$",
      "$$P(X \\ge 2) = 1 - 0.107374 - 0.268435 = 0.624190 \\approx 0.624$$",
    ],
  },
  {
    question: "A telemarketer for an insurance company makes calls one at a time. Each call independently results in a policy sale with probability $0.25$. Calculate the probability, rounded to three decimal places, that the third sale occurs on the eighth call.",
    choices: ["$0.078$", "$0.130$", "$0.208$", "$0.311$", "$0.321$"],
    answer: 0,
    solution: [
      "Let $X$ be the number of calls needed to obtain $r = 3$ sales, so $X$ is negative binomial with $p = 0.25$ and $P(X = k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}$.",
      "The eighth call must be a sale, and exactly $2$ of the first $7$ calls must be sales, which gives $\\binom{7}{2}$ rather than $\\binom{8}{3}$.",
      "$$P(X = 8) = \\binom{7}{2}(0.25)^3(0.75)^5 = 21 \\times 0.015625 \\times 0.237305 = 0.077866 \\approx 0.078$$",
    ],
  },
  {
    question: "An insurer classifies each claim as minor, moderate, or severe with probabilities $0.60$, $0.30$, and $0.10$, respectively, independently from claim to claim. The insurer receives $8$ claims. Calculate the probability, rounded to three decimal places, that exactly $1$ of the claims is severe and at least $5$ of the claims are minor.",
    choices: ["$0.101$", "$0.118$", "$0.218$", "$0.227$", "$0.383$"],
    answer: 2,
    solution: [
      "With exactly $1$ severe claim and at least $5$ minor claims, the counts (minor, moderate, severe) must be $(5, 2, 1)$, $(6, 1, 1)$, or $(7, 0, 1)$.",
      "By the multinomial formula, $P(5, 2, 1) = \\frac{8!}{5!\\,2!\\,1!}(0.60)^5(0.30)^2(0.10) = 168 \\times 0.00069984 = 0.117573$.",
      "Similarly, $P(6, 1, 1) = \\frac{8!}{6!\\,1!\\,1!}(0.60)^6(0.30)(0.10) = 56 \\times 0.00139968 = 0.078382$ and $P(7, 0, 1) = \\frac{8!}{7!\\,0!\\,1!}(0.60)^7(0.10) = 8 \\times 0.00279936 = 0.022395$.",
      "$$P = 0.117573 + 0.078382 + 0.022395 = 0.218350 \\approx 0.218$$",
    ],
  },
  {
    question: "Two actuarial candidates, Ana and Ben, each take a professional exam repeatedly until passing it. Ana passes any given attempt with probability $0.40$, and Ben passes any given attempt with probability $0.30$. All attempts are mutually independent, both within each candidate's sequence of attempts and between the two candidates. Calculate the probability, rounded to three decimal places, that Ana passes in fewer attempts than Ben.",
    choices: ["$0.207$", "$0.483$", "$0.571$", "$0.690$", "$0.793$"],
    answer: 1,
    solution: [
      "Let $A$ and $B$ be the numbers of attempts needed. $A$ is geometric with $p = 0.40$, so $P(A = k) = (0.60)^{k-1}(0.40)$, and $B$ is geometric with $p = 0.30$.",
      "Ben needs more than $k$ attempts exactly when his first $k$ attempts all fail, so $P(B > k) = (0.70)^k$. Note the strict inequality: $P(B \\ge k) = (0.70)^{k-1}$ would also count ties.",
      "By independence, $P(A < B) = \\sum_{k=1}^{\\infty} P(A = k)\\,P(B > k) = \\sum_{k=1}^{\\infty} (0.60)^{k-1}(0.40)(0.70)^k$.",
      "$$P(A < B) = (0.40)(0.70)\\sum_{k=1}^{\\infty}(0.42)^{k-1} = \\frac{0.28}{1 - 0.42} = \\frac{14}{29} \\approx 0.483$$",
    ],
  },
];

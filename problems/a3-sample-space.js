export default [
  {
    question: "Two fair six-sided dice are rolled, and the sum of the two numbers showing is recorded. Calculate the probability that the sum is $10$.",
    choices: ["$\\frac{1}{18}$", "$\\frac{1}{12}$", "$\\frac{1}{11}$", "$\\frac{2}{21}$", "$\\frac{1}{9}$"],
    answer: 1,
    solution: [
      "The $11$ possible sums $2, 3, \\dots, 12$ are not equally likely, so $\\frac{1}{11}$ is wrong. Use ordered pairs (first die, second die) instead: by the multiplication principle, $|S| = 6 \\times 6 = 36$ equally likely outcomes.",
      "The event is $E = \\{(4,6), (5,5), (6,4)\\}$. Order matters, so $(4,6)$ and $(6,4)$ are different outcomes, but $(5,5)$ is a single outcome. Thus $|E| = 3$.",
      "$$P(E) = \\frac{|E|}{|S|} = \\frac{3}{36} = \\frac{1}{12}$$",
    ],
  },
  {
    question: "Three fair six-sided dice are rolled. Calculate the probability that the largest of the three numbers showing is exactly $4$.",
    choices: ["$\\frac{1}{8}$", "$\\frac{1}{6}$", "$\\frac{37}{216}$", "$\\frac{2}{9}$", "$\\frac{8}{27}$"],
    answer: 2,
    solution: [
      "Record each outcome as an ordered triple. By the multiplication principle, $|S| = 6^3 = 216$ equally likely outcomes. The six possible largest values are not equally likely.",
      "Let $A$ be the event that all three dice show $4$ or less, and $B$ the event that all three show $3$ or less. Then $|A| = 4^3 = 64$ and $|B| = 3^3 = 27$.",
      "The largest number is exactly $4$ when every die is at most $4$ but not every die is at most $3$. Since $B \\subseteq A$, this event is $A \\cap B'$, with $|A \\cap B'| = 64 - 27 = 37$.",
      "$$P(\\text{largest} = 4) = \\frac{37}{216}$$",
    ],
  },
  {
    question: "An insurer models the number of claims a policyholder files in a year using the sample space $S = \\{0, 1, 2, \\dots\\}$. The outcome $n$ has probability $p_n = c\\left(\\frac{1}{3}\\right)^n$ for $n = 0, 1, 2, \\dots$, where $c$ is a constant. Calculate the probability that the policyholder files an odd number of claims in the year.",
    choices: ["$\\frac{1}{4}$", "$\\frac{1}{3}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$"],
    answer: 0,
    solution: [
      "The probabilities of all outcomes in $S$ must sum to $1$.",
      "$$c \\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n = c \\cdot \\frac{1}{1 - \\frac{1}{3}} = \\frac{3c}{2} = 1 \\implies c = \\frac{2}{3}$$",
      "The event is $E = \\{1, 3, 5, \\dots\\}$. Its probabilities form a geometric series with first term $p_1 = \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$ and common ratio $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$, because consecutive odd values differ by $2$.",
      "$$P(E) = \\frac{2/9}{1 - 1/9} = \\frac{2/9}{8/9} = \\frac{1}{4}$$",
    ],
  },
  {
    question: "A claims department assigns each of four new claims to one of four adjusters. Each claim is assigned at random, with each adjuster equally likely to receive it, independently of the assignments of the other claims. Calculate the probability that exactly one of the four adjusters receives no claims.",
    choices: ["$\\frac{3}{32}$", "$\\frac{9}{32}$", "$\\frac{12}{35}$", "$\\frac{33}{64}$", "$\\frac{9}{16}$"],
    answer: 4,
    solution: [
      "The claims are distinct, so an outcome lists the adjuster assigned to each claim. By the multiplication principle, $|S| = 4^4 = 256$ equally likely outcomes. Recording only how many claims each adjuster gets would give $35$ outcomes that are not equally likely.",
      "If exactly one adjuster gets no claims, the other three adjusters share all four claims and each gets at least one, so the claim counts are $2, 1, 1, 0$ in some order.",
      "Choose the adjuster with no claims ($4$ ways) and then the adjuster with two claims ($3$ ways). Of the two remaining adjusters, the first receives any of the $4$ claims and the second any of the remaining $3$. The last two claims go to the adjuster with two.",
      "$$|E| = 4 \\cdot 3 \\cdot 4 \\cdot 3 = 144$$",
      "$$P(E) = \\frac{|E|}{|S|} = \\frac{144}{256} = \\frac{9}{16}$$",
    ],
  },
];

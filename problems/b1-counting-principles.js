export default [
  {
    question: "A claims system assigns each new claim a code consisting of one letter (from the $26$ letters) followed by three digits (each from $0$ to $9$). Repetition is allowed, and all possible codes are equally likely. Calculate the probability that at least one digit appears more than once among the three digits of a randomly assigned code.",
    choices: ["$0.190$", "$0.270$", "$0.280$", "$0.300$", "$0.720$"],
    answer: 2,
    solution: [
      "By the multiplication principle, the number of possible codes is $26 \\times 10 \\times 10 \\times 10 = 26{,}000$.",
      "Count the complement (no repeated digit): $26 \\times 10 \\times 9 \\times 8 = 18{,}720$.",
      "By the subtraction principle, codes with at least one repeated digit number $26{,}000 - 18{,}720 = 7{,}280$.",
      "$$P(\\text{at least one repeat}) = \\frac{7{,}280}{26{,}000} = 1 - 0.72 = 0.28$$",
    ],
  },
  {
    question: "An auditor selects one claim at random from claims numbered $1$ through $1{,}000$, with all claim numbers equally likely. Calculate the probability that the selected claim number is divisible by none of $4$, $6$, and $10$.",
    choices: ["$0.366$", "$0.484$", "$0.562$", "$0.634$", "$0.650$"],
    answer: 3,
    solution: [
      "Let $A$, $B$, $C$ be the numbers divisible by $4$, $6$, $10$. Then $|A| = 250$, $|B| = 166$, $|C| = 100$.",
      "A number divisible by two of these is a multiple of their least common multiple: $|A \\cap B| = \\lfloor 1000/12 \\rfloor = 83$, $|A \\cap C| = \\lfloor 1000/20 \\rfloor = 50$, $|B \\cap C| = \\lfloor 1000/30 \\rfloor = 33$, and $|A \\cap B \\cap C| = \\lfloor 1000/60 \\rfloor = 16$.",
      "$$|A \\cup B \\cup C| = 250 + 166 + 100 - 83 - 50 - 33 + 16 = 366$$",
      "By the subtraction principle, $1{,}000 - 366 = 634$ numbers are divisible by none of them.",
      "$$P(\\text{none}) = \\frac{634}{1{,}000} = 0.634$$",
    ],
  },
  {
    question: "A reinsurance pool consists of $12$ insurers. Every pair of insurers in the pool has exactly one treaty with each other, and there are no other treaties. An auditor randomly selects two different treaties, with all pairs of treaties equally likely. Calculate the probability, rounded to three decimal places, that the two selected treaties involve a common insurer.",
    choices: ["$0.154$", "$0.308$", "$0.333$", "$0.615$", "$0.692$"],
    answer: 1,
    solution: [
      "Counting ordered pairs of insurers counts each treaty twice, so by the division principle there are $\\frac{12 \\times 11}{2} = 66$ treaties.",
      "Likewise, the number of unordered pairs of treaties is $\\frac{66 \\times 65}{2} = 2{,}145$.",
      "For a pair sharing an insurer, choose the common insurer ($12$ ways) and then two of its $11$ partners ($\\frac{11 \\times 10}{2} = 55$ ways). Two different treaties share at most one insurer, so no pair is counted twice: $12 \\times 55 = 660$.",
      "$$P = \\frac{660}{2{,}145} = \\frac{4}{13} \\approx 0.308 \\text{ (rounded to three decimal places)}$$",
    ],
  },
  {
    question: "An insurer's online portal issues each policyholder a $5$-digit access code. Each digit is from $0$ to $9$, repetition is allowed, and all $10^5$ codes are equally likely. Calculate the probability that a randomly issued code contains each of the digits $1$, $2$, and $3$ at least once.",
    choices: ["$0.0435$", "$0.0600$", "$0.0687$", "$0.2116$", "$0.8319$"],
    answer: 0,
    solution: [
      "Let $A_1$, $A_2$, $A_3$ be the sets of codes with no $1$, no $2$, and no $3$. The desired codes are those in none of these sets.",
      "By the multiplication principle, $|A_i| = 9^5 = 59{,}049$, $|A_i \\cap A_j| = 8^5 = 32{,}768$, and $|A_1 \\cap A_2 \\cap A_3| = 7^5 = 16{,}807$.",
      "$$|A_1 \\cup A_2 \\cup A_3| = 3(59{,}049) - 3(32{,}768) + 16{,}807 = 95{,}650$$",
      "By the subtraction principle, $100{,}000 - 95{,}650 = 4{,}350$ codes contain all three digits.",
      "$$P = \\frac{4{,}350}{100{,}000} = 0.0435$$",
    ],
  },
];

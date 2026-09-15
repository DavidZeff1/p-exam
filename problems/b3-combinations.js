export default [
  {
    question: "An insurer's claims unit has $8$ senior adjusters and $6$ junior adjusters. A review panel of $4$ adjusters is selected at random from the $14$ adjusters, with all possible panels equally likely. Calculate the probability, rounded to three decimal places, that the panel consists of exactly $2$ senior and $2$ junior adjusters.",
    choices: ["$0.070$", "$0.360$", "$0.420$", "$0.594$", "$0.825$"],
    answer: 2,
    solution: [
      "Order does not matter on a panel, so the number of equally likely panels is $\\binom{14}{4} = \\frac{14 \\times 13 \\times 12 \\times 11}{4 \\times 3 \\times 2 \\times 1} = 1{,}001$.",
      "By the multiplication principle, the number of panels with $2$ senior and $2$ junior adjusters is $\\binom{8}{2}\\binom{6}{2} = 28 \\times 15 = 420$.",
      "$$P = \\frac{420}{1{,}001} = \\frac{60}{143} \\approx 0.420$$",
    ],
  },
  {
    question: "A claims manager assigns $12$ new claims to $4$ adjusters. The claims are treated as identical, so an assignment is determined only by the number of claims each adjuster receives. Each adjuster must receive at least $2$ claims. Calculate the number of possible assignments.",
    choices: ["$35$", "$56$", "$165$", "$256$", "$455$"],
    answer: 0,
    solution: [
      "First give each adjuster $2$ claims. This uses $8$ claims and leaves $4$ claims to distribute with no restriction.",
      "Distributing $r = 4$ identical claims among $n = 4$ adjusters is a combination with repetition (stars and bars): $4$ stars and $n - 1 = 3$ bars.",
      "$$\\binom{n+r-1}{r} = \\binom{4+4-1}{4} = \\binom{7}{4} = \\binom{7}{3} = 35$$",
    ],
  },
  {
    question: "An auditor reviews a batch of $20$ claims, of which $5$ contain billing errors. The auditor selects $6$ claims at random without replacement, with all sets of $6$ claims equally likely. Calculate the probability, rounded to three decimal places, that at least $2$ of the selected claims contain billing errors.",
    choices: ["$0.466$", "$0.483$", "$0.517$", "$0.613$", "$0.871$"],
    answer: 1,
    solution: [
      "The number of equally likely samples is $\\binom{20}{6} = 38{,}760$.",
      "Use the complement. Samples with no errors: $\\binom{5}{0}\\binom{15}{6} = 5{,}005$. Samples with exactly one error: $\\binom{5}{1}\\binom{15}{5} = 5 \\times 3{,}003 = 15{,}015$.",
      "$$P(\\text{at most } 1) = \\frac{5{,}005 + 15{,}015}{38{,}760} = \\frac{20{,}020}{38{,}760} \\approx 0.5165$$",
      "$$P(\\text{at least } 2) = 1 - \\frac{20{,}020}{38{,}760} = \\frac{937}{1{,}938} \\approx 0.483$$",
    ],
  },
  {
    question: "A risk committee of $5$ members is to be formed from $7$ actuaries and $5$ underwriters. One particular actuary and one particular underwriter refuse to serve together, so no committee may include both of them. The committee is selected at random from all allowable committees, with each allowable committee equally likely. Calculate the probability, rounded to three decimal places, that the committee includes at least $2$ underwriters.",
    choices: ["$0.432$", "$0.626$", "$0.708$", "$0.738$", "$0.753$"],
    answer: 3,
    solution: [
      "Committees containing both of the two people: choose the other $3$ members from the remaining $10$, giving $\\binom{10}{3} = 120$. Allowable committees: $\\binom{12}{5} - 120 = 792 - 120 = 672$.",
      "Allowable committees with no underwriters: $\\binom{7}{5} = 21$ (none contain the particular underwriter).",
      "Committees with exactly $1$ underwriter: $\\binom{5}{1}\\binom{7}{4} = 175$. Of these, the ones with both people have the particular underwriter as the only underwriter, with the particular actuary and $3$ of the other $6$ actuaries: $\\binom{6}{3} = 20$. That leaves $175 - 20 = 155$ allowable committees.",
      "Allowable committees with at least $2$ underwriters: $672 - 21 - 155 = 496$.",
      "$$P = \\frac{496}{672} = \\frac{31}{42} \\approx 0.738$$",
    ],
  },
];

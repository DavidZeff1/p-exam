export default [
  {
    question: "A batch of $20$ claims contains $6$ fraudulent claims. An auditor selects $5$ claims at random, without replacement, with all sets of $5$ claims equally likely. Calculate the probability, rounded to three decimal places, that exactly $2$ of the selected claims are fraudulent.",
    choices: ["$0.035$", "$0.117$", "$0.309$", "$0.352$", "$0.483$"],
    answer: 3,
    solution: [
      "This is a hypergeometric count with $N = 20$, $K = 6$, $n = 5$, and $k = 2$.",
      "Choose $2$ of the $6$ fraudulent claims and $3$ of the $14$ legitimate claims: $\\binom{6}{2}\\binom{14}{3} = 15 \\times 364 = 5{,}460$.",
      "The total number of samples is $\\binom{20}{5} = 15{,}504$.",
      "$$P(X = 2) = \\frac{5{,}460}{15{,}504} = \\frac{455}{1{,}292} \\approx 0.352$$",
    ],
  },
  {
    question: "A committee of $5$ people is selected at random from a group of $7$ actuaries and $6$ underwriters, with all committees of $5$ equally likely. One of the $7$ actuaries is the chief actuary. Calculate the probability, rounded to three decimal places, that the committee includes the chief actuary and at least $2$ underwriters.",
    choices: ["$0.175$", "$0.280$", "$0.316$", "$0.365$", "$0.821$"],
    answer: 1,
    solution: [
      "The total number of committees is $\\binom{13}{5} = 1{,}287$.",
      "Including the chief actuary leaves $4$ seats to fill from the other $6$ actuaries and $6$ underwriters: $\\binom{12}{4} = 495$ committees.",
      "Subtract those with fewer than $2$ underwriters: $\\binom{6}{0}\\binom{6}{4} + \\binom{6}{1}\\binom{6}{3} = 15 + 120 = 135$, leaving $495 - 135 = 360$.",
      "$$P = \\frac{360}{1{,}287} = \\frac{40}{143} \\approx 0.280$$",
    ],
  },
  {
    question: "An assistant prepares renewal letters for $6$ different policyholders along with $6$ matching addressed envelopes, then inserts the letters into the envelopes at random, one letter per envelope, with all $6!$ arrangements equally likely. Calculate the probability, rounded to four decimal places, that exactly $2$ letters are placed in their correct envelopes.",
    choices: ["$0.1875$", "$0.2009$", "$0.2653$", "$0.4167$", "$0.5000$"],
    answer: 0,
    solution: [
      "Choose which $2$ letters match in $\\binom{6}{2} = 15$ ways; the other $4$ must all be in wrong envelopes (a derangement).",
      "$$D(4) = 4!\\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!}\\right) = 24 - 24 + 12 - 4 + 1 = 9$$",
      "$$P(2 \\text{ matches}) = \\frac{\\binom{6}{2} D(4)}{6!} = \\frac{15 \\times 9}{720} = \\frac{135}{720} = 0.1875$$",
    ],
  },
  {
    question: "Each of $6$ claims is reported on one of the $7$ days of the week. Each claim is equally likely to be reported on any day, independently of the other claims, so all $7^6$ assignments of claims to days are equally likely. Calculate the probability, rounded to three decimal places, that the claims are reported on exactly $5$ different days of the week.",
    choices: ["$0.064$", "$0.114$", "$0.321$", "$0.643$", "$0.957$"],
    answer: 2,
    solution: [
      "With exactly $5$ days used, one day receives $2$ claims and the other four days receive $1$ claim each.",
      "Choose the $5$ days in $\\binom{7}{5} = 21$ ways and the day with $2$ claims in $5$ ways.",
      "Assign the $6$ distinct claims to those days in $\\frac{6!}{2!} = 360$ ways, giving $21 \\times 5 \\times 360 = 37{,}800$ favorable assignments.",
      "$$P = \\frac{37{,}800}{7^6} = \\frac{37{,}800}{117{,}649} \\approx 0.321$$",
    ],
  },
];

export default [
  {
    question: "A claims auditor has $20$ closed claim files, of which $6$ contain a coding error. The auditor selects $5$ of the files at random without replacement. Calculate the probability that exactly $2$ of the selected files contain a coding error.",
    choices: ["$0.1174$", "$0.3087$", "$0.3522$", "$0.3874$", "$0.4835$"],
    answer: 2,
    solution: [
      "The number of files with errors is hypergeometric with $N = 20$, $K = 6$, $n = 5$.",
      "$$P(X = 2) = \\frac{\\binom{6}{2}\\binom{14}{3}}{\\binom{20}{5}} = \\frac{15 \\times 364}{15504} = \\frac{5460}{15504}$$",
      "$$P(X = 2) = 0.3522$$",
    ],
  },
  {
    question: "A shipment of $40$ smoke detectors to be installed in insured homes contains exactly $10$ defective units. An inspector selects $8$ detectors at random without replacement. Let $X$ be the number of defective detectors selected. Calculate $\\operatorname{Var}(X)$.",
    choices: ["$1.2000$", "$1.2308$", "$1.5000$", "$1.6410$", "$2.0000$"],
    answer: 1,
    solution: [
      "$X$ is hypergeometric with $N = 40$, $K = 10$, $n = 8$, so $p = \\frac{10}{40} = 0.25$ and $q = 0.75$.",
      "The binomial-style part is $npq = 8(0.25)(0.75) = 1.5$.",
      "Apply the finite population correction $\\frac{N - n}{N - 1} = \\frac{32}{39}$.",
      "$$\\operatorname{Var}(X) = 1.5 \\cdot \\frac{32}{39} = \\frac{16}{13} = 1.2308$$",
    ],
  },
  {
    question: "A fraud investigation unit has flagged $25$ claims, of which exactly $5$ are actually fraudulent. An investigator randomly selects $6$ of the flagged claims, without replacement, for a detailed review. Calculate the probability that at least one of the reviewed claims is fraudulent.",
    choices: ["$0.2189$", "$0.3434$", "$0.4377$", "$0.7379$", "$0.7811$"],
    answer: 4,
    solution: [
      "The number of fraudulent claims reviewed is hypergeometric with $N = 25$, $K = 5$, $n = 6$.",
      "Use the complement: $P(X \\ge 1) = 1 - P(X = 0)$.",
      "$$P(X = 0) = \\frac{\\binom{5}{0}\\binom{20}{6}}{\\binom{25}{6}} = \\frac{38760}{177100} = 0.218859$$",
      "$$P(X \\ge 1) = 1 - 0.218859 = 0.7811$$",
    ],
  },
  {
    question: "A lot of $20$ generators contains exactly $3$ defective units. A buyer uses the following plan. First, $4$ generators are selected at random without replacement. If none is defective, the lot is accepted; if $2$ or more are defective, the lot is rejected. If exactly $1$ is defective, a second sample of $4$ is selected at random without replacement from the $16$ generators not yet inspected, and the lot is accepted only if none of these is defective. Calculate the probability that the lot is accepted.",
    choices: ["$0.4912$", "$0.6566$", "$0.6981$", "$0.7228$", "$0.9123$"],
    answer: 3,
    solution: [
      "First sample: $X_1$ is hypergeometric with $N = 20$, $K = 3$, $n = 4$. $P(X_1 = 0) = \\frac{\\binom{17}{4}}{\\binom{20}{4}} = \\frac{2380}{4845} = 0.491228$.",
      "$P(X_1 = 1) = \\frac{\\binom{3}{1}\\binom{17}{3}}{\\binom{20}{4}} = \\frac{2040}{4845} = 0.421053$.",
      "Given $X_1 = 1$, the $16$ remaining generators contain $2$ defectives, so the second sample has $N = 16$, $K = 2$, $n = 4$: $P(X_2 = 0) = \\frac{\\binom{14}{4}}{\\binom{16}{4}} = \\frac{1001}{1820} = 0.55$.",
      "$$P(\\text{accept}) = 0.491228 + 0.421053(0.55) = 0.491228 + 0.231579 = 0.7228$$",
    ],
  },
];

export default [
  {
    question: "A group health plan offers dental coverage and vision coverage as optional add-ons. Among the plan's members, $45\\%$ elect dental coverage, $30\\%$ elect vision coverage, and $40\\%$ elect neither. Calculate the probability that a randomly selected member elects both dental and vision coverage.",
    choices: ["$0.15$", "$0.25$", "$0.35$", "$0.45$", "$0.60$"],
    answer: 0,
    solution: [
      "Let $D$ and $V$ be the events that the member elects dental and vision coverage. Electing neither is $D' \\cap V'$, which by De Morgan's law equals $(D \\cup V)'$.",
      "$$P(D \\cup V) = 1 - P(D' \\cap V') = 1 - 0.40 = 0.60$$",
      "By the addition rule, $P(D \\cup V) = P(D) + P(V) - P(D \\cap V)$.",
      "$$P(D \\cap V) = 0.45 + 0.30 - 0.60 = 0.15$$",
    ],
  },
  {
    question: "A life insurer offers two optional riders on its policies: an accidental death rider and a waiver of premium rider. For a randomly selected policyholder, the probability of electing the waiver of premium rider is $0.27$, the probability of electing exactly one of the two riders is $0.36$, and the probability of electing neither rider is $0.51$. Calculate the probability that a randomly selected policyholder elects the accidental death rider.",
    choices: ["$0.09$", "$0.13$", "$0.22$", "$0.35$", "$0.49$"],
    answer: 3,
    solution: [
      "Let $A$ and $W$ be the events of electing the accidental death and waiver of premium riders. By De Morgan's law, $P(A \\cup W) = 1 - P(A' \\cap W') = 1 - 0.51 = 0.49$.",
      "Electing exactly one rider is the symmetric difference $A \\triangle W = (A \\cup W) \\setminus (A \\cap W)$, so $P(A \\cap W) = P(A \\cup W) - P(A \\triangle W)$.",
      "$$P(A \\cap W) = 0.49 - 0.36 = 0.13$$",
      "From $P(A \\cup W) = P(A) + P(W) - P(A \\cap W)$:",
      "$$P(A) = 0.49 - 0.27 + 0.13 = 0.35$$",
    ],
  },
  {
    question: "Each employee of a company is enrolled in at most one of two medical plans, a high-deductible plan or a low-deductible plan, and each employee may also elect dental coverage. $45\\%$ of employees are enrolled in the high-deductible plan, $35\\%$ are enrolled in the low-deductible plan, and $50\\%$ elect dental coverage. $28\\%$ of employees are enrolled in the high-deductible plan and elect dental coverage, and $6\\%$ elect dental coverage but are enrolled in neither medical plan. Calculate the probability that a randomly selected employee is enrolled in the low-deductible plan and does not elect dental coverage.",
    choices: ["$0.13$", "$0.16$", "$0.19$", "$0.22$", "$0.29$"],
    answer: 2,
    solution: [
      "Let $H$, $L$, and $D$ be the events of enrollment in the high-deductible plan, enrollment in the low-deductible plan, and electing dental coverage. The events $H$ and $L$ are disjoint.",
      "$D$ splits into the disjoint pieces $D \\cap (H \\cup L)$ and $D \\cap (H \\cup L)'$, so $P(D \\cap (H \\cup L)) = 0.50 - 0.06 = 0.44$.",
      "By the distributive law, $D \\cap (H \\cup L) = (D \\cap H) \\cup (D \\cap L)$, a disjoint union, so $P(D \\cap L) = 0.44 - 0.28 = 0.16$.",
      "Since $L \\cap D' = L \\setminus (L \\cap D)$:",
      "$$P(L \\cap D') = 0.35 - 0.16 = 0.19$$",
    ],
  },
  {
    question: "In a survey of $2{,}000$ households, each household reported whether it holds auto insurance, homeowners insurance, and life insurance. $1{,}120$ households hold auto insurance, $800$ hold homeowners insurance, $530$ hold life insurance, $350$ hold none of the three, and $580$ hold exactly two of the three. Calculate the number of households that hold exactly one of the three types of insurance.",
    choices: ["$850$", "$960$", "$1{,}070$", "$1{,}180$", "$1{,}290$"],
    answer: 1,
    solution: [
      "Let $n_k$ be the number of households holding exactly $k$ of the three types. The households holding at least one type form the complement of the $350$ holding none, so $n_1 + n_2 + n_3 = 2{,}000 - 350 = 1{,}650$.",
      "Adding the three coverage counts counts each household once for every type it holds, so $n_1 + 2n_2 + 3n_3 = 1{,}120 + 800 + 530 = 2{,}450$.",
      "With $n_2 = 580$, these become $n_1 + n_3 = 1{,}070$ and $n_1 + 3n_3 = 2{,}450 - 1{,}160 = 1{,}290$.",
      "Subtracting gives $2n_3 = 220$, so $n_3 = 110$.",
      "$$n_1 = 1{,}070 - 110 = 960$$",
    ],
  },
];

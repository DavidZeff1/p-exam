export default [
  {
    question: "A property insurer covers two office buildings located in different states. During the next year, the probability that the first building has a claim is $0.20$ and the probability that the second building has a claim is $0.15$. The events that the two buildings have claims are independent. Calculate the probability that exactly one of the two buildings has a claim during the next year.",
    choices: ["$0.03$", "$0.29$", "$0.32$", "$0.35$", "$0.68$"],
    answer: 1,
    solution: [
      "Let $A$ and $B$ be the events that the first and second buildings have claims. Exactly one claim is the union of the mutually exclusive events $A \\cap B'$ and $A' \\cap B$.",
      "Because $A$ and $B$ are independent, so are $A$ and $B'$, and so are $A'$ and $B$. Therefore $P(A \\cap B') = (0.20)(0.85) = 0.17$ and $P(A' \\cap B) = (0.80)(0.15) = 0.12$.",
      "$$P(\\text{exactly one}) = 0.17 + 0.12 = 0.29$$",
    ],
  },
  {
    question: "An insurer sells both an auto policy and a homeowners policy to each of its customers. For a randomly selected customer, the event of filing an auto claim during the year and the event of filing a homeowners claim during the year are independent. The probability that the customer files both types of claims is $0.02$, and the probability that the customer files neither type of claim is $0.72$. An auto claim is more likely than a homeowners claim. Calculate the probability that the customer files an auto claim during the year.",
    choices: ["$0.10$", "$0.15$", "$0.20$", "$0.26$", "$0.28$"],
    answer: 2,
    solution: [
      "Let $a = P(\\text{auto claim})$ and $h = P(\\text{homeowners claim})$. By independence, $ah = 0.02$.",
      "The complements are also independent, so $(1 - a)(1 - h) = 1 - (a + h) + ah = 0.72$. This gives $a + h = 1 - 0.72 + 0.02 = 0.30$.",
      "So $a$ and $h$ are the roots of $x^2 - 0.30x + 0.02 = 0$, which factors as $(x - 0.20)(x - 0.10) = 0$.",
      "Since $a > h$, $$a = 0.20$$",
    ],
  },
  {
    question: "An insurer's fraud unit sends each suspicious claim to $n$ reviewers. If a claim is fraudulent, each reviewer detects the fraud with probability $0.4$, independently of the other reviewers. Calculate the smallest value of $n$ for which the probability that at least one reviewer detects a fraudulent claim is at least $0.95$.",
    choices: ["$3$", "$4$", "$5$", "$6$", "$7$"],
    answer: 3,
    solution: [
      "Each reviewer misses the fraud with probability $1 - 0.4 = 0.6$. By the multiplication rule for independent events, all $n$ reviewers miss it with probability $0.6^n$.",
      "By the complement rule, $P(\\text{at least one detects}) = 1 - 0.6^n$, so we need $0.6^n \\le 0.05$.",
      "$0.6^5 = 0.0778 > 0.05$, which gives only $1 - 0.0778 = 0.9222$.",
      "$0.6^6 = 0.0467 \\le 0.05$, which gives $1 - 0.0467 = 0.9533 \\ge 0.95$. $$n = 6$$",
    ],
  },
  {
    question: "Over a five-year period, a manufacturing company may file a property claim, a liability claim, and a workers compensation claim. These three events are mutually independent. The probability that the company files both a property claim and a liability claim is $0.24$, the probability that it files both a property claim and a workers compensation claim is $0.18$, and the probability that it files both a liability claim and a workers compensation claim is $0.12$. Calculate the probability that the company files exactly one of the three types of claims during the five-year period.",
    choices: ["$0.072$", "$0.168$", "$0.220$", "$0.324$", "$0.436$"],
    answer: 4,
    solution: [
      "Let $p$, $l$, and $w$ be the probabilities of a property, liability, and workers compensation claim. By independence, $pl = 0.24$, $pw = 0.18$, and $lw = 0.12$.",
      "Multiplying the three equations gives $(plw)^2 = (0.24)(0.18)(0.12) = 0.005184$, so $plw = 0.072$.",
      "Then $p = \\frac{0.072}{0.12} = 0.6$, $l = \\frac{0.072}{0.18} = 0.4$, and $w = \\frac{0.072}{0.24} = 0.3$.",
      "Exactly one claim type is the union of three mutually exclusive events, each a product of independent events and complements: $$(0.6)(0.6)(0.7) + (0.4)(0.4)(0.7) + (0.3)(0.4)(0.6) = 0.252 + 0.112 + 0.072$$",
      "$$P(\\text{exactly one}) = 0.436$$",
    ],
  },
];

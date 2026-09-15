export default [
  {
    question: "A pension fund's board has $10$ trustees, including Alvarez and Brooks. The board fills the positions of chair, vice chair, and secretary by selecting three different trustees at random, with all $P(10,3)$ assignments of trustees to positions equally likely. Calculate the probability that Alvarez is chair and Brooks holds one of the other two positions.",
    choices: ["$0.0111$", "$0.0222$", "$0.0444$", "$0.0667$", "$0.1333$"],
    answer: 1,
    solution: [
      "Order matters because the positions are different, so the number of equally likely assignments is $P(10,3) = 10 \\times 9 \\times 8 = 720$.",
      "Favorable assignments: Alvarez is chair ($1$ way), Brooks takes vice chair or secretary ($2$ ways), and any of the remaining $8$ trustees fills the last position ($8$ ways), for $1 \\times 2 \\times 8 = 16$.",
      "$$P = \\frac{16}{720} = \\frac{1}{45} \\approx 0.0222 \\text{ (rounded to four decimal places)}$$",
    ],
  },
  {
    question: "Over the next $9$ business days, an underwriter will review exactly one application per day. The applications consist of $4$ auto, $3$ homeowners, and $2$ life applications, and applications of the same type are indistinguishable. All distinguishable sequences of application types are equally likely. Calculate the probability that the first day's application is an auto application and the two life applications are reviewed on consecutive days.",
    choices: ["$0.0556$", "$0.0988$", "$0.1111$", "$0.1270$", "$0.2222$"],
    answer: 2,
    solution: [
      "Total number of distinguishable sequences: $$\\frac{9!}{4! \\, 3! \\, 2!} = \\frac{362{,}880}{24 \\times 6 \\times 2} = 1{,}260$$",
      "For a favorable sequence, day $1$ is auto. The other $8$ days hold $3$ auto, $3$ homeowners, and $2$ life applications with the two life applications adjacent.",
      "Treat the two life applications as one unit. They are identical, so swapping them within the unit gives no new sequence. Arrange $7$ units ($3$ auto, $3$ homeowners, $1$ life block): $$\\frac{7!}{3! \\, 3! \\, 1!} = \\frac{5{,}040}{36} = 140$$",
      "$$P = \\frac{140}{1{,}260} = \\frac{1}{9} \\approx 0.1111 \\text{ (rounded to four decimal places)}$$",
    ],
  },
  {
    question: "Eight representatives, three of them from Company X, attend a reinsurance negotiation and are seated at random around a circular table with eight seats. Seatings that differ only by a rotation are considered the same, and all $(8-1)!$ seatings are equally likely. Calculate the probability that no two Company X representatives sit next to each other.",
    choices: ["$0.0476$", "$0.1143$", "$0.1429$", "$0.2857$", "$0.3571$"],
    answer: 3,
    solution: [
      "Total circular seatings: $(8-1)! = 7! = 5{,}040$.",
      "First seat the $5$ other representatives in a circle: $(5-1)! = 4! = 24$ ways. This leaves $5$ gaps, one between each pair of neighbors.",
      "No two Company X representatives are adjacent exactly when each goes into a different gap. Placing the $3$ distinct representatives into $3$ of the $5$ gaps, in order, gives $P(5,3) = 5 \\times 4 \\times 3 = 60$ ways.",
      "$$P = \\frac{24 \\times 60}{5{,}040} = \\frac{1{,}440}{5{,}040} = \\frac{2}{7} \\approx 0.2857 \\text{ (rounded to four decimal places)}$$",
    ],
  },
  {
    question: "Each of $6$ regional managers at an insurer submits one expense report. For peer review, the $6$ reports are redistributed at random, one report to each manager, with all $6!$ assignments equally likely. Calculate the probability that at least two managers receive their own report.",
    choices: ["$0.1875$", "$0.2653$", "$0.5000$", "$0.6319$", "$0.7347$"],
    answer: 1,
    solution: [
      "Use the complement: $P(\\text{at least } 2) = 1 - P(\\text{none}) - P(\\text{exactly } 1)$, with $6! = 720$ equally likely assignments.",
      "No manager receives their own report in $D(6) = 720\\left(1 - 1 + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\frac{1}{5!} + \\frac{1}{6!}\\right) = 265$ assignments.",
      "Exactly one manager receives their own report: choose that manager ($6$ ways), then the other $5$ reports form a derangement, $D(5) = 44$. This gives $6 \\times 44 = 264$ assignments.",
      "$$P(\\text{at least } 2) = 1 - \\frac{265 + 264}{720} = \\frac{191}{720} \\approx 0.2653 \\text{ (rounded to four decimal places)}$$",
    ],
  },
];

export default [
  {
    question: "Two fair six-sided dice are rolled. Calculate the probability that the two numbers showing differ by exactly $1$.",
    choices: ["$\\frac{1}{6}$", "$\\frac{5}{21}$", "$\\frac{5}{18}$", "$\\frac{1}{3}$", "$\\frac{10}{21}$"],
    answer: 2,
    solution: [
      "The six possible differences $0, 1, \\dots, 5$ are not equally likely, so $\\frac{1}{6}$ is wrong. Use ordered pairs (first die, second die): by the multiplication principle, $|S| = 6 \\times 6 = 36$ equally likely outcomes.",
      "The event is $E = \\{(1,2), (2,1), (2,3), (3,2), (3,4), (4,3), (4,5), (5,4), (5,6), (6,5)\\}$. Order matters, so $(1,2)$ and $(2,1)$ are different outcomes, and $|E| = 10$.",
      "$$P(E) = \\frac{|E|}{|S|} = \\frac{10}{36} = \\frac{5}{18}$$",
    ],
  },
  {
    question: "A claims auditor has $10$ claim files, $4$ of which contain errors. The auditor selects $3$ of the files at random, one at a time, without replacement. Calculate the probability that exactly $2$ of the selected files contain errors.",
    choices: ["$\\frac{12}{125}$", "$\\frac{1}{10}$", "$\\frac{36}{125}$", "$\\frac{3}{10}$", "$\\frac{1}{3}$"],
    answer: 3,
    solution: [
      "Record each outcome as the ordered list of files drawn. Without replacement, by the multiplication principle, $|S| = 10 \\cdot 9 \\cdot 8 = 720$ equally likely outcomes.",
      "The one error-free file can be in draw $1$, $2$, or $3$ ($3$ ways). In the other two draws the error files can be chosen in $4 \\cdot 3$ ordered ways, and the error-free file in $6$ ways.",
      "$$|E| = 3 \\cdot 4 \\cdot 3 \\cdot 6 = 216$$",
      "$$P(E) = \\frac{216}{720} = \\frac{3}{10}$$",
      "Drawing with replacement would instead give $\\frac{3 \\cdot 4 \\cdot 4 \\cdot 6}{10^3} = \\frac{36}{125}$, and forgetting the $3$ positions of the error-free file gives $\\frac{1}{10}$.",
    ],
  },
  {
    question: "Two claims are reported to an insurer during a one-hour period. The report times, in minutes after the start of the period, are recorded as an ordered pair $(x, y)$, so the sample space is $S = \\{(x, y) : 0 \\le x \\le 60, \\ 0 \\le y \\le 60\\}$. Assume that the probability of any region of $S$ equals its area divided by the area of $S$. Calculate the probability that the two report times differ by at least $20$ minutes.",
    choices: ["$\\frac{2}{9}$", "$\\frac{4}{9}$", "$\\frac{5}{9}$", "$\\frac{2}{3}$", "$\\frac{8}{9}$"],
    answer: 1,
    solution: [
      "$S$ is a continuous sample space, a square with area $60 \\times 60 = 3{,}600$.",
      "The event $|x - y| \\ge 20$ is the union of two disjoint regions, $x - y \\ge 20$ and $y - x \\ge 20$. Each is a right triangle in a corner of the square with legs $60 - 20 = 40$.",
      "$$\\text{Area}(E) = 2 \\cdot \\frac{1}{2} \\cdot 40^2 = 1{,}600$$",
      "$$P(E) = \\frac{1{,}600}{3{,}600} = \\frac{4}{9}$$",
      "Counting only one of the triangles gives $\\frac{2}{9}$. The boundary lines $|x - y| = 20$ have zero area, so \"at least\" and \"more than\" give the same answer.",
    ],
  },
  {
    question: "A fair coin is tossed. If it lands heads, one fair six-sided die is rolled and the number showing is recorded. If it lands tails, two fair six-sided dice are rolled and the sum of the two numbers showing is recorded. Calculate the probability that the recorded number is $6$.",
    choices: ["$\\frac{5}{72}$", "$\\frac{1}{12}$", "$\\frac{17}{132}$", "$\\frac{1}{7}$", "$\\frac{11}{72}$"],
    answer: 4,
    solution: [
      "Listing the $6$ heads outcomes and the $36$ tails outcomes as $42$ equally likely outcomes is wrong: each heads outcome has probability $\\frac{1}{12}$, while each tails outcome has probability $\\frac{1}{72}$.",
      "Choose a finer sample space whose outcomes are equally likely: always roll two dice, but after heads record only the first die. Then $S = \\{(c, i, j)\\}$ with $c \\in \\{H, T\\}$ and $i, j \\in \\{1, \\dots, 6\\}$, so $|S| = 2 \\cdot 6 \\cdot 6 = 72$.",
      "Heads outcomes in the event are $(H, 6, j)$ for $j = 1, \\dots, 6$, which gives $6$ outcomes.",
      "Tails outcomes in the event have $i + j = 6$: $(T,1,5), (T,2,4), (T,3,3), (T,4,2), (T,5,1)$, which gives $5$ outcomes.",
      "$$P(E) = \\frac{6 + 5}{72} = \\frac{11}{72}$$",
    ],
  },
];

export default [
  {
    question: "A property insurer finds that $35\\%$ of its insured homes are in a coastal zone and the remaining $65\\%$ are inland. The probability that an insured home has a claim next year is $0.08$ for a coastal home and $0.03$ for an inland home. Calculate the probability that a randomly selected insured home has a claim next year.",
    choices: ["$0.0280$", "$0.0475$", "$0.0550$", "$0.0625$", "$0.1100$"],
    answer: 1,
    solution: [
      "Let $C$ be the event that the home is coastal and $A$ the event that it has a claim. The events $C$ and $C'$ partition the insured homes.",
      "$$P(A) = P(A \\mid C)P(C) + P(A \\mid C')P(C')$$",
      "$$P(A) = 0.08(0.35) + 0.03(0.65) = 0.0280 + 0.0195 = 0.0475$$",
    ],
  },
  {
    question: "An auto insurer classifies each policyholder as low risk, moderate risk, or high risk. Half of the policyholders are low risk, and there are twice as many moderate-risk policyholders as high-risk policyholders. The probability that a policyholder files at least one claim during the year is $0.05$ for a low-risk policyholder, $0.12$ for a moderate-risk policyholder, and $0.30$ for a high-risk policyholder. Calculate the probability that a randomly selected policyholder files no claims during the year.",
    choices: ["$0.115$", "$0.843$", "$0.870$", "$0.885$", "$0.950$"],
    answer: 3,
    solution: [
      "Let $L$, $M$, $H$ be the risk classes. $P(L) = 0.5$ and $P(M) = 2P(H)$ with $P(M) + P(H) = 0.5$, so $P(H) = \\frac{1}{6}$ and $P(M) = \\frac{1}{3}$.",
      "Let $C$ be the event of at least one claim. By the law of total probability,",
      "$$P(C) = 0.05(0.5) + 0.12\\left(\\tfrac{1}{3}\\right) + 0.30\\left(\\tfrac{1}{6}\\right) = 0.025 + 0.040 + 0.050 = 0.115$$",
      "$$P(C') = 1 - 0.115 = 0.885$$",
    ],
  },
  {
    question: "An auditor reviews claim files from one of two branch offices. Branch 1 is chosen with probability $0.6$ and Branch 2 with probability $0.4$. Branch 1 has $10$ files, $3$ of which contain errors. Branch 2 has $8$ files, $4$ of which contain errors. From the chosen branch, the auditor selects $2$ files at random without replacement. Calculate the probability that both selected files contain errors. Round your answer to three decimal places.",
    choices: ["$0.126$", "$0.137$", "$0.144$", "$0.154$", "$0.214$"],
    answer: 0,
    solution: [
      "Let $E$ be the event that both files contain errors, and let $B_1$, $B_2$ be the events that each branch is chosen.",
      "$$P(E \\mid B_1) = \\frac{\\binom{3}{2}}{\\binom{10}{2}} = \\frac{3}{45}, \\qquad P(E \\mid B_2) = \\frac{\\binom{4}{2}}{\\binom{8}{2}} = \\frac{6}{28}$$",
      "$$P(E) = \\frac{3}{45}(0.6) + \\frac{6}{28}(0.4) = 0.04 + 0.0857 = 0.1257$$",
      "Rounded to three decimal places, $P(E) \\approx 0.126$.",
    ],
  },
  {
    question: "At the start of each year, an insurer classifies every policyholder as preferred or standard. A policyholder who is preferred in one year is preferred in the following year with probability $0.80$, and a policyholder who is standard in one year is preferred in the following year with probability $0.40$. This year, $50\\%$ of policyholders are preferred. In any year, the probability that a policyholder files a claim is $0.04$ if the policyholder is preferred that year and $0.20$ if standard that year. Calculate the probability that a randomly selected current policyholder files a claim two years from now.",
    choices: ["$0.0816$", "$0.0933$", "$0.0976$", "$0.1040$", "$0.1200$"],
    answer: 2,
    solution: [
      "Let $p_k$ be the probability that the policyholder is preferred $k$ years from now, so $p_0 = 0.50$. Applying total probability over this year's class gives $p_{k+1} = 0.80\\,p_k + 0.40(1 - p_k)$.",
      "$$p_1 = 0.80(0.50) + 0.40(0.50) = 0.60$$",
      "$$p_2 = 0.80(0.60) + 0.40(0.40) = 0.64$$",
      "Conditioning on the class two years from now,",
      "$$P(\\text{claim}) = 0.04(0.64) + 0.20(0.36) = 0.0256 + 0.0720 = 0.0976$$",
    ],
  },
];

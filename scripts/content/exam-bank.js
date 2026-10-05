export default {
  "a1-set-functions": [
    {
      "question": "A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({ω3} given {ω2,ω3})=10/12, calculate P({ω4}). Round your answer to four decimal places.",
      "choices": [
        "$0.0417$",
        "$0.4167$",
        "$0.4231$",
        "$0.4583$",
        "$0.4783$"
      ],
      "answer": 3,
      "solution": [
        "The conditional ratio is k/(2+k)=10/12; solving gives k=10.",
        "Normalize the four masses: c(1+2+k+k+1)=1, so c=1/24.",
        "P({ω4})=(k+1)c=11/24=0.458333."
      ],
      "feedback": {
        "0": "First solve the conditional ratio, then normalize all four outcome masses.",
        "1": "First solve the conditional ratio, then normalize all four outcome masses.",
        "2": "First solve the conditional ratio, then normalize all four outcome masses.",
        "4": "First solve the conditional ratio, then normalize all four outcome masses."
      },
      "skills": [
        "conditional ratio",
        "normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional ratio, normalization.",
        "The conditional ratio is k/(2+k)=10/12; solving gives k=10."
      ],
      "verification": {
        "kind": "four-atoms",
        "k": 10,
        "target": "last"
      },
      "level": "challenge",
      "id": "exam:a1-set-functions:0",
      "topicId": "a1-set-functions",
      "family": "atoms-normalize"
    },
    {
      "question": "Three coverage events A, B, C satisfy P(A)=12/22, P(B)=12/22, P(C)=8/22, P(A∩B)=6/22, P(A∩C)=4/22, and P(B∩C)=3/22. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.0909$",
        "$0.1364$",
        "$0.1667$",
        "$0.2000$",
        "$0.4545$"
      ],
      "answer": 3,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/22.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 2/22. The probability of not A is 10/22.",
        "None is contained in not A, so the requested conditional probability is 0.2."
      ],
      "feedback": {
        "0": "This is the probability of none before conditioning; divide by P(not A).",
        "1": "The triple intersection must be included once with the correct sign in inclusion–exclusion.",
        "2": "The condition is not A, so use its probability in the denominator.",
        "4": "This is the condition probability, not the conditional numerator divided by it."
      },
      "skills": [
        "recover an intersection",
        "inclusion–exclusion",
        "conditional probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, inclusion–exclusion, conditional probability.",
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/22."
      ],
      "verification": {
        "kind": "atoms",
        "weights": [
          2,
          3,
          4,
          5,
          2,
          3,
          2,
          1
        ],
        "target": "none-given-notA"
      },
      "level": "challenge",
      "id": "exam:a1-set-functions:1",
      "topicId": "a1-set-functions",
      "family": "region-conditional"
    }
  ],
  "a2-venn-diagrams": [
    {
      "question": "Three coverage events A, B, C satisfy P(A)=14/25, P(B)=12/25, P(C)=8/25, P(A∩B)=6/25, P(A∩C)=4/25, and P(B∩C)=3/25. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.1200$",
        "$0.1600$",
        "$0.2143$",
        "$0.2727$",
        "$0.4400$"
      ],
      "answer": 3,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/25.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 3/25. The probability of not A is 11/25.",
        "None is contained in not A, so the requested conditional probability is 0.272727."
      ],
      "feedback": {
        "0": "This is the probability of none before conditioning; divide by P(not A).",
        "1": "The triple intersection must be included once with the correct sign in inclusion–exclusion.",
        "2": "The condition is not A, so use its probability in the denominator.",
        "4": "This is the condition probability, not the conditional numerator divided by it."
      },
      "skills": [
        "recover an intersection",
        "inclusion–exclusion",
        "conditional probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, inclusion–exclusion, conditional probability.",
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/25."
      ],
      "verification": {
        "kind": "atoms",
        "weights": [
          3,
          5,
          4,
          5,
          2,
          3,
          2,
          1
        ],
        "target": "none-given-notA"
      },
      "level": "challenge",
      "id": "exam:a2-venn-diagrams:0",
      "topicId": "a2-venn-diagrams",
      "family": "region-conditional"
    },
    {
      "question": "For two policy features A and B, P(neither)=0.475, P(A∩B)=0.125, and P(B)-P(A)=0.05. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.1750$",
        "$0.3571$",
        "$0.4167$",
        "$0.5833$",
        "$0.6500$"
      ],
      "answer": 3,
      "solution": [
        "The union probability is 1-0.475=0.525. Thus P(A)+P(B)=0.65.",
        "Combine this sum with the difference 0.05 to get P(A)=0.3 and P(B)=0.35.",
        "The A-only probability is 0.175. Divide by P(A): 0.175/0.3=0.583333."
      ],
      "feedback": {
        "0": "This is a joint event; normalize by the probability of A.",
        "1": "This reverses the condition and omits the complement.",
        "2": "This gives B rather than not B conditional on A.",
        "4": "This ignores the condition A."
      },
      "skills": [
        "solve marginal probabilities",
        "conditional complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: solve marginal probabilities, conditional complement.",
        "The union probability is 1-0.475=0.525. Thus P(A)+P(B)=0.65."
      ],
      "verification": {
        "kind": "two-events",
        "a": 0.30000000000000004,
        "b": 0.35,
        "joint": 0.125,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "exam:a2-venn-diagrams:1",
      "topicId": "a2-venn-diagrams",
      "family": "two-events-infer"
    }
  ],
  "a3-sample-space": [
    {
      "question": "A box contains 3 damaged and 3 sound components. Three are inspected in order without replacement. Calculate the probability the first is damaged and the other two are sound. Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.1500$",
        "$0.2025$",
        "$0.4500$",
        "$0.5000$"
      ],
      "answer": 1,
      "solution": [
        "The first-stage damaged probability is 3/6.",
        "After removing a damaged component there are 3 sound components out of 5; after removing a sound component there are 2 out of 4.",
        "Multiply conditional stage probabilities: (3/6)(3/5)(2/4)=0.15."
      ],
      "feedback": {
        "0": "This treats changing without-replacement probabilities as constant.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "This allows the damaged component in any position, but the order is specified.",
        "4": "This only accounts for the first inspection."
      },
      "skills": [
        "conditional multiplication",
        "without replacement",
        "ordered outcomes"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional multiplication, without replacement, ordered outcomes.",
        "The first-stage damaged probability is 3/6."
      ],
      "verification": {
        "kind": "draw-sequence",
        "N": 6,
        "K": 3,
        "pattern": [
          1,
          0,
          0
        ]
      },
      "level": "challenge",
      "id": "exam:a3-sample-space:0",
      "topicId": "a3-sample-space",
      "family": "replacement-pattern"
    },
    {
      "question": "Independent X,Y are each uniform on the integers 1 through 6. Given X+Y≥8, calculate P(X=Y). Round your answer to four decimal places.",
      "choices": [
        "$0.0833$",
        "$0.1667$",
        "$0.2000$",
        "$0.2610$",
        "$0.4167$"
      ],
      "answer": 2,
      "solution": [
        "All 36 ordered pairs are equally likely before conditioning.",
        "The condition allows 15 ordered pairs. Exactly 3 of these lie on the diagonal x=y.",
        "The conditional ratio is 3/15=0.2."
      ],
      "feedback": {
        "0": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution.",
        "1": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution."
      },
      "skills": [
        "discrete uniform pairs",
        "sample-space counting",
        "conditioning"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete uniform pairs, sample-space counting, conditioning.",
        "All 36 ordered pairs are equally likely before conditioning."
      ],
      "verification": {
        "kind": "uniform-pairs",
        "n": 6,
        "threshold": 8,
        "target": "equal-given-tail"
      },
      "level": "challenge",
      "id": "exam:a3-sample-space:1",
      "topicId": "a3-sample-space",
      "family": "discrete-uniform-sum"
    }
  ],
  "a4-events": [
    {
      "question": "For two policy features A and B, P(neither)=0.4, P(A∩B)=0.1, and P(B)-P(A)=0.1. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.2000$",
        "$0.2500$",
        "$0.3333$",
        "$0.6000$",
        "$0.6667$"
      ],
      "answer": 4,
      "solution": [
        "The union probability is 1-0.4=0.6. Thus P(A)+P(B)=0.7.",
        "Combine this sum with the difference 0.1 to get P(A)=0.3 and P(B)=0.4.",
        "The A-only probability is 0.2. Divide by P(A): 0.2/0.3=0.666667."
      ],
      "feedback": {
        "0": "This is a joint event; normalize by the probability of A.",
        "1": "This reverses the condition and omits the complement.",
        "2": "This gives B rather than not B conditional on A.",
        "3": "This ignores the condition A."
      },
      "skills": [
        "solve marginal probabilities",
        "conditional complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: solve marginal probabilities, conditional complement.",
        "The union probability is 1-0.4=0.6. Thus P(A)+P(B)=0.7."
      ],
      "verification": {
        "kind": "two-events",
        "a": 0.30000000000000004,
        "b": 0.39999999999999997,
        "joint": 0.1,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "exam:a4-events:0",
      "topicId": "a4-events",
      "family": "two-events-infer"
    },
    {
      "question": "4 policies have mutually independent claim indicators, each with claim probability 0.2. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0976$",
        "$0.1653$",
        "$0.3388$",
        "$0.4880$",
        "$0.8000$"
      ],
      "answer": 1,
      "solution": [
        "The condition has probability 1-(1-0.2)^4=0.5904.",
        "The numerator requires a claim on policy 1 and at least one among the remaining 3: 0.2[1-(1-0.2)^3]=0.0976.",
        "Divide numerator by condition probability: 0.165312."
      ],
      "feedback": {
        "0": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "2": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "3": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "4": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population."
      },
      "skills": [
        "independence",
        "complements",
        "conditional joint event"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independence, complements, conditional joint event.",
        "The condition has probability 1-(1-0.2)^4=0.5904."
      ],
      "verification": {
        "kind": "binomial-indicators",
        "n": 4,
        "p": 0.2,
        "target": "first-and-other-given-any"
      },
      "level": "challenge",
      "id": "exam:a4-events:1",
      "topicId": "a4-events",
      "family": "conditional-independent"
    }
  ],
  "a5-probability-set-function": [
    {
      "question": "A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({ω3} given {ω2,ω3})=9/11, calculate P({ω4}). Round your answer to four decimal places.",
      "choices": [
        "$0.0455$",
        "$0.4091$",
        "$0.4167$",
        "$0.4545$",
        "$0.4762$"
      ],
      "answer": 3,
      "solution": [
        "The conditional ratio is k/(2+k)=9/11; solving gives k=9.",
        "Normalize the four masses: c(1+2+k+k+1)=1, so c=1/22.",
        "P({ω4})=(k+1)c=10/22=0.454545."
      ],
      "feedback": {
        "0": "First solve the conditional ratio, then normalize all four outcome masses.",
        "1": "First solve the conditional ratio, then normalize all four outcome masses.",
        "2": "First solve the conditional ratio, then normalize all four outcome masses.",
        "4": "First solve the conditional ratio, then normalize all four outcome masses."
      },
      "skills": [
        "conditional ratio",
        "normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional ratio, normalization.",
        "The conditional ratio is k/(2+k)=9/11; solving gives k=9."
      ],
      "verification": {
        "kind": "four-atoms",
        "k": 9,
        "target": "last"
      },
      "level": "challenge",
      "id": "exam:a5-probability-set-function:0",
      "topicId": "a5-probability-set-function",
      "family": "atoms-normalize"
    },
    {
      "question": "Events A, B, C, D form a partition. P(A∪B)=0.39, P(A given A∪B)=0.615385 is specified exactly as 0.24/0.39, and P(C)=0.11. Calculate P(D given not C). Round your answer to four decimal places.",
      "choices": [
        "$0.5000$",
        "$0.5618$",
        "$0.6154$",
        "$0.6843$",
        "$0.8900$"
      ],
      "answer": 1,
      "solution": [
        "The A and B union already accounts for 0.39 of the total probability.",
        "The remaining D probability is 1-P(A∪B)-P(C)=0.5.",
        "D is contained in not C. Divide by 1-P(C): 0.5/0.89=0.561798."
      ],
      "feedback": {
        "0": "This is the unconditional D probability.",
        "2": "This answers the supplied conditional question about A instead of the requested question about D.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "This is the conditioning probability."
      },
      "skills": [
        "partition",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: partition, conditional normalization.",
        "The A and B union already accounts for 0.39 of the total probability."
      ],
      "verification": {
        "kind": "partition",
        "weights": [
          0.24000000000000002,
          0.15,
          0.11,
          0.5
        ],
        "target": "D-given-notC"
      },
      "level": "challenge",
      "id": "exam:a5-probability-set-function:1",
      "topicId": "a5-probability-set-function",
      "family": "disjoint-infer"
    }
  ],
  "a6-axioms-probability": [
    {
      "question": "A severity category X takes values 1 through 4. Its probability set function assigns P(X=k)=ck, where c is unknown. A file is known to have X≥2. Calculate P(X>2 given this information). Round your answer to four decimal places.",
      "choices": [
        "$0.6667$",
        "$0.7000$",
        "$0.7778$",
        "$0.8000$",
        "$0.9000$"
      ],
      "answer": 2,
      "solution": [
        "Normalize: c(1+2+…+4)=1, so c=0.1.",
        "The conditioning category weights total 9; the strictly larger category weights total 7.",
        "The factor c cancels in the conditional ratio, giving 0.777778."
      ],
      "feedback": {
        "0": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
        "1": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
        "3": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
        "4": "Use probability weights and the correct strict endpoint; the categories are not equally likely."
      },
      "skills": [
        "normalize a PMF",
        "distinguish event endpoints",
        "conditional probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: normalize a PMF, distinguish event endpoints, conditional probability.",
        "Normalize: c(1+2+…+4)=1, so c=0.1."
      ],
      "verification": {
        "kind": "weighted-discrete",
        "values": [
          1,
          2,
          3,
          4
        ],
        "weights": [
          1,
          2,
          3,
          4
        ],
        "threshold": 2,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "exam:a6-axioms-probability:0",
      "topicId": "a6-axioms-probability",
      "family": "weighted-outcomes"
    },
    {
      "question": "Events A and B are independent. P(A)=2P(B), and P(A∩B)=0.245. Calculate the probability that neither event occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.1950$",
        "$0.2450$",
        "$0.2551$",
        "$0.4225$",
        "$0.7550$"
      ],
      "answer": 0,
      "solution": [
        "Let p=P(B). Independence gives 2p²=0.245, so p=0.35 and P(A)=0.7.",
        "The complement events are also independent. Multiply their probabilities: (1-0.7)(1-0.35).",
        "The probability of neither is 0.195."
      ],
      "feedback": {
        "1": "Recover both marginal probabilities from the independence equation before taking the complement of their union.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "Recover both marginal probabilities from the independence equation before taking the complement of their union.",
        "4": "Recover both marginal probabilities from the independence equation before taking the complement of their union."
      },
      "skills": [
        "recover a probability parameter",
        "independence",
        "complements"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover a probability parameter, independence, complements.",
        "Let p=P(B). Independence gives 2p²=0.245, so p=0.35 and P(A)=0.7."
      ],
      "verification": {
        "kind": "independent",
        "p": 0.35000000000000003,
        "ratio": 2,
        "target": "neither"
      },
      "level": "challenge",
      "id": "exam:a6-axioms-probability:1",
      "topicId": "a6-axioms-probability",
      "family": "independent-infer"
    }
  ],
  "b1-counting-principles": [
    {
      "question": "A security code is an ordered sequence of four distinct symbols chosen from 11 symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes. Round your answer to four decimal places.",
      "choices": [
        "$330.0000$",
        "$3024.0000$",
        "$7056.0000$",
        "$7920.0000$",
        "$14641.0000$"
      ],
      "answer": 2,
      "solution": [
        "Without the restriction there are 11!/(11-4)!=7920 codes.",
        "Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from 9 symbols, giving 12(9)(8).",
        "Subtract forbidden codes: 7920-864=7056."
      ],
      "feedback": {
        "0": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
        "1": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
        "3": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
        "4": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols."
      },
      "skills": [
        "ordered counting",
        "restrictions",
        "complement counting"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordered counting, restrictions, complement counting.",
        "Without the restriction there are 11!/(11-4)!=7920 codes."
      ],
      "verification": {
        "kind": "restricted-code",
        "n": 11,
        "r": 4
      },
      "level": "challenge",
      "id": "exam:b1-counting-principles:0",
      "topicId": "b1-counting-principles",
      "family": "restricted-code"
    },
    {
      "question": "A committee consists of exactly two senior and two junior employees selected from 4 seniors and 6 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
      "choices": [
        "$90.0000$",
        "$210.0000$",
        "$360.0000$",
        "$840.0000$",
        "$1440.0000$"
      ],
      "answer": 2,
      "solution": [
        "Choose the committee in choose(4,2)choose(6,2) ways.",
        "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
        "The total is choose(4,2)choose(6,2)×2×2=360."
      ],
      "feedback": {
        "0": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
        "1": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
        "3": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
        "4": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition."
      },
      "skills": [
        "combinations",
        "labeled roles",
        "group restrictions"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: combinations, labeled roles, group restrictions.",
        "Choose the committee in choose(4,2)choose(6,2) ways."
      ],
      "verification": {
        "kind": "committee-roles",
        "S": 4,
        "J": 6
      },
      "level": "challenge",
      "id": "exam:b1-counting-principles:1",
      "topicId": "b1-counting-principles",
      "family": "committee-roles"
    }
  ],
  "b2-permutations": [
    {
      "question": "6 distinct claim files are arranged in a line. Files A and B must be adjacent, but file C may not be adjacent to either A or B. Calculate the number of permitted arrangements. Round your answer to four decimal places.",
      "choices": [
        "$24.0000$",
        "$48.0000$",
        "$144.0000$",
        "$240.0000$",
        "$624.0000$"
      ],
      "answer": 2,
      "solution": [
        "Treat A,B as a block, with two internal orders: 2(5)! arrangements.",
        "Forbidden arrangements have C immediately before or after that block. There are four internal orders for the three-file block and (4)! block arrangements.",
        "Subtract: 2(5)!-4(4)!=144."
      ],
      "feedback": {
        "0": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block.",
        "1": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block.",
        "3": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block.",
        "4": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block."
      },
      "skills": [
        "permutations with adjacency",
        "subtract forbidden arrangements"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: permutations with adjacency, subtract forbidden arrangements.",
        "Treat A,B as a block, with two internal orders: 2(5)! arrangements."
      ],
      "verification": {
        "kind": "adjacency",
        "n": 6
      },
      "level": "challenge",
      "id": "exam:b2-permutations:0",
      "topicId": "b2-permutations",
      "family": "adjacent-permutation"
    },
    {
      "question": "A security code is an ordered sequence of four distinct symbols chosen from 6 symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes. Round your answer to four decimal places.",
      "choices": [
        "$15.0000$",
        "$24.0000$",
        "$216.0000$",
        "$360.0000$",
        "$1296.0000$"
      ],
      "answer": 2,
      "solution": [
        "Without the restriction there are 6!/(6-4)!=360 codes.",
        "Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from 4 symbols, giving 12(4)(3).",
        "Subtract forbidden codes: 360-144=216."
      ],
      "feedback": {
        "0": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
        "1": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
        "3": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
        "4": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols."
      },
      "skills": [
        "ordered counting",
        "restrictions",
        "complement counting"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordered counting, restrictions, complement counting.",
        "Without the restriction there are 6!/(6-4)!=360 codes."
      ],
      "verification": {
        "kind": "restricted-code",
        "n": 6,
        "r": 4
      },
      "level": "challenge",
      "id": "exam:b2-permutations:1",
      "topicId": "b2-permutations",
      "family": "restricted-code"
    }
  ],
  "b3-combinations": [
    {
      "question": "A committee consists of exactly two senior and two junior employees selected from 4 seniors and 7 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
      "choices": [
        "$126.0000$",
        "$330.0000$",
        "$504.0000$",
        "$1320.0000$",
        "$2016.0000$"
      ],
      "answer": 2,
      "solution": [
        "Choose the committee in choose(4,2)choose(7,2) ways.",
        "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
        "The total is choose(4,2)choose(7,2)×2×2=504."
      ],
      "feedback": {
        "0": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
        "1": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
        "3": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
        "4": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition."
      },
      "skills": [
        "combinations",
        "labeled roles",
        "group restrictions"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: combinations, labeled roles, group restrictions.",
        "Choose the committee in choose(4,2)choose(7,2) ways."
      ],
      "verification": {
        "kind": "committee-roles",
        "S": 4,
        "J": 7
      },
      "level": "challenge",
      "id": "exam:b3-combinations:0",
      "topicId": "b3-combinations",
      "family": "committee-roles"
    },
    {
      "question": "Four files are sampled uniformly without replacement from 11 files, of which 4 are high severity. Given that the sample contains at least one high-severity file, calculate the probability it contains exactly two. Round your answer to four decimal places.",
      "choices": [
        "$0.1091$",
        "$0.3818$",
        "$0.3830$",
        "$0.4271$",
        "$0.8939$"
      ],
      "answer": 3,
      "solution": [
        "The total number of samples satisfying the condition is choose(11,4)-choose(7,4)=295.",
        "Exactly-two samples can be chosen in choose(4,2)choose(7,2)=126 ways.",
        "The conditional probability is 126/295=0.427119."
      ],
      "feedback": {
        "0": "This samples only two files instead of four.",
        "1": "This is the unconditional probability of exactly two.",
        "2": "This removes all-success samples rather than no-success samples.",
        "4": "This is the condition probability, not the ratio requested."
      },
      "skills": [
        "combinatorial probability",
        "conditioning on a sample event"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: combinatorial probability, conditioning on a sample event.",
        "The total number of samples satisfying the condition is choose(11,4)-choose(7,4)=295."
      ],
      "verification": {
        "kind": "hypergeom",
        "N": 11,
        "K": 4,
        "n": 4,
        "target": "two-given-positive"
      },
      "level": "challenge",
      "id": "exam:b3-combinations:1",
      "topicId": "b3-combinations",
      "family": "conditional-sample"
    }
  ],
  "b4-combinatorial-probability": [
    {
      "question": "Four files are sampled uniformly without replacement from 12 files, of which 4 are high severity. Given that the sample contains at least one high-severity file, calculate the probability it contains exactly two. Round your answer to four decimal places.",
      "choices": [
        "$0.0909$",
        "$0.3394$",
        "$0.3401$",
        "$0.3953$",
        "$0.8586$"
      ],
      "answer": 3,
      "solution": [
        "The total number of samples satisfying the condition is choose(12,4)-choose(8,4)=425.",
        "Exactly-two samples can be chosen in choose(4,2)choose(8,2)=168 ways.",
        "The conditional probability is 168/425=0.395294."
      ],
      "feedback": {
        "0": "This samples only two files instead of four.",
        "1": "This is the unconditional probability of exactly two.",
        "2": "This removes all-success samples rather than no-success samples.",
        "4": "This is the condition probability, not the ratio requested."
      },
      "skills": [
        "combinatorial probability",
        "conditioning on a sample event"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: combinatorial probability, conditioning on a sample event.",
        "The total number of samples satisfying the condition is choose(12,4)-choose(8,4)=425."
      ],
      "verification": {
        "kind": "hypergeom",
        "N": 12,
        "K": 4,
        "n": 4,
        "target": "two-given-positive"
      },
      "level": "challenge",
      "id": "exam:b4-combinatorial-probability:0",
      "topicId": "b4-combinatorial-probability",
      "family": "conditional-sample"
    },
    {
      "question": "A container is type H with probability 0.5, otherwise type L. Both types hold 9 components; type H contains 4 defective components and type L contains 2. Three are sampled without replacement and exactly two defects are observed. Calculate the posterior probability the container is type H. Round your answer to four decimal places.",
      "choices": [
        "$0.1786$",
        "$0.3571$",
        "$0.5000$",
        "$0.8108$",
        "$0.9756$"
      ],
      "answer": 3,
      "solution": [
        "The observation likelihood is choose(4,2)choose(5,1)/choose(9,3)=0.357143 for H and 0.083333 for L.",
        "The total observation probability is 0.220238.",
        "Weight the H likelihood by its prior and divide by the total: 0.810811."
      ],
      "feedback": {
        "0": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "1": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "2": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "hypergeometric likelihood",
        "Bayesian class inference"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: hypergeometric likelihood, Bayesian class inference.",
        "The observation likelihood is choose(4,2)choose(5,1)/choose(9,3)=0.357143 for H and 0.083333 for L."
      ],
      "verification": {
        "kind": "hypergeom-mixture",
        "N": 9,
        "K": [
          4,
          2
        ],
        "n": 3,
        "k": 2,
        "w": 0.5
      },
      "level": "challenge",
      "id": "exam:b4-combinatorial-probability:1",
      "topicId": "b4-combinatorial-probability",
      "family": "hypergeom-bayes"
    }
  ],
  "c1-independent-events": [
    {
      "question": "Events A and B are independent. P(A)=2P(B), and P(A∩B)=0.125. Calculate the probability that neither event occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.2500$",
        "$0.3750$",
        "$0.5625$",
        "$0.8750$"
      ],
      "answer": 2,
      "solution": [
        "Let p=P(B). Independence gives 2p²=0.125, so p=0.25 and P(A)=0.5.",
        "The complement events are also independent. Multiply their probabilities: (1-0.5)(1-0.25).",
        "The probability of neither is 0.375."
      ],
      "feedback": {
        "0": "Recover both marginal probabilities from the independence equation before taking the complement of their union.",
        "1": "Recover both marginal probabilities from the independence equation before taking the complement of their union.",
        "3": "Recover both marginal probabilities from the independence equation before taking the complement of their union.",
        "4": "Recover both marginal probabilities from the independence equation before taking the complement of their union."
      },
      "skills": [
        "recover a probability parameter",
        "independence",
        "complements"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover a probability parameter, independence, complements.",
        "Let p=P(B). Independence gives 2p²=0.125, so p=0.25 and P(A)=0.5."
      ],
      "verification": {
        "kind": "independent",
        "p": 0.25,
        "ratio": 2,
        "target": "neither"
      },
      "level": "challenge",
      "id": "exam:c1-independent-events:0",
      "topicId": "c1-independent-events",
      "family": "independent-infer"
    },
    {
      "question": "A portfolio has a fraction 0.35 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.125 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.2388$",
        "$0.3035$",
        "$0.4500$",
        "$0.6597$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.2475 for H and 0.109375 for L.",
        "Weight these by the prior shares; the total history probability is 0.157719.",
        "Weight the next-year claim rates by those posterior shares: [0.086625(0.45)+0.071094(0.125)]/0.157719=0.303502."
      ],
      "feedback": {
        "0": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "1": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "3": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "4": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year."
      },
      "skills": [
        "conditional independence",
        "Bayes over a history",
        "posterior prediction"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional independence, Bayes over a history, posterior prediction.",
        "The observed history likelihoods are 0.2475 for H and 0.109375 for L."
      ],
      "verification": {
        "kind": "latent-history",
        "w": 0.35,
        "rates": [
          0.45,
          0.125
        ],
        "history": [
          1,
          0
        ],
        "target": "next"
      },
      "level": "challenge",
      "id": "exam:c1-independent-events:1",
      "topicId": "c1-independent-events",
      "family": "latent-two-years"
    }
  ],
  "c2-independent-trials": [
    {
      "question": "4 policies have mutually independent claim indicators, each with claim probability 0.25. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.1445$",
        "$0.2114$",
        "$0.3657$",
        "$0.5781$",
        "$1.0000$"
      ],
      "answer": 1,
      "solution": [
        "The condition has probability 1-(1-0.25)^4=0.683594.",
        "The numerator requires a claim on policy 1 and at least one among the remaining 3: 0.25[1-(1-0.25)^3]=0.144531.",
        "Divide numerator by condition probability: 0.211429."
      ],
      "feedback": {
        "0": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "2": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "3": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "4": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population."
      },
      "skills": [
        "independence",
        "complements",
        "conditional joint event"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independence, complements, conditional joint event.",
        "The condition has probability 1-(1-0.25)^4=0.683594."
      ],
      "verification": {
        "kind": "binomial-indicators",
        "n": 4,
        "p": 0.25,
        "target": "first-and-other-given-any"
      },
      "level": "challenge",
      "id": "exam:c2-independent-trials:0",
      "topicId": "c2-independent-trials",
      "family": "conditional-independent"
    },
    {
      "question": "A portfolio has a fraction 0.3 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.15 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1500$",
        "$0.2400$",
        "$0.2862$",
        "$0.4500$",
        "$0.5625$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.2475 for H and 0.1275 for L.",
        "Weight these by the prior shares; the total history probability is 0.1635.",
        "Weight the next-year claim rates by those posterior shares: [0.07425(0.45)+0.08925(0.15)]/0.1635=0.286239."
      ],
      "feedback": {
        "0": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "1": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "3": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "4": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year."
      },
      "skills": [
        "conditional independence",
        "Bayes over a history",
        "posterior prediction"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional independence, Bayes over a history, posterior prediction.",
        "The observed history likelihoods are 0.2475 for H and 0.1275 for L."
      ],
      "verification": {
        "kind": "latent-history",
        "w": 0.3,
        "rates": [
          0.45,
          0.15000000000000002
        ],
        "history": [
          1,
          0
        ],
        "target": "next"
      },
      "level": "challenge",
      "id": "exam:c2-independent-trials:1",
      "topicId": "c2-independent-trials",
      "family": "latent-two-years"
    }
  ],
  "d1-mutually-exclusive": [
    {
      "question": "Events A, B, C, D form a partition. P(A∪B)=0.44, P(A given A∪B)=0.590909 is specified exactly as 0.26/0.44, and P(C)=0.1. Calculate P(D given not C). Round your answer to four decimal places.",
      "choices": [
        "$0.4600$",
        "$0.5111$",
        "$0.5909$",
        "$0.6250$",
        "$0.9000$"
      ],
      "answer": 1,
      "solution": [
        "The A and B union already accounts for 0.44 of the total probability.",
        "The remaining D probability is 1-P(A∪B)-P(C)=0.46.",
        "D is contained in not C. Divide by 1-P(C): 0.46/0.9=0.511111."
      ],
      "feedback": {
        "0": "This is the unconditional D probability.",
        "2": "This answers the supplied conditional question about A instead of the requested question about D.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "This is the conditioning probability."
      },
      "skills": [
        "partition",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: partition, conditional normalization.",
        "The A and B union already accounts for 0.44 of the total probability."
      ],
      "verification": {
        "kind": "partition",
        "weights": [
          0.26,
          0.18,
          0.1,
          0.4600000000000001
        ],
        "target": "D-given-notC"
      },
      "level": "challenge",
      "id": "exam:d1-mutually-exclusive:0",
      "topicId": "d1-mutually-exclusive",
      "family": "disjoint-infer"
    },
    {
      "question": "For two policy features A and B, P(neither)=0.45, P(A∩B)=0.1, and P(B)-P(A)=0.25. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.1000$",
        "$0.2222$",
        "$0.5000$",
        "$0.5500$",
        "$0.6120$"
      ],
      "answer": 2,
      "solution": [
        "The union probability is 1-0.45=0.55. Thus P(A)+P(B)=0.65.",
        "Combine this sum with the difference 0.25 to get P(A)=0.2 and P(B)=0.45.",
        "The A-only probability is 0.1. Divide by P(A): 0.1/0.2=0.5."
      ],
      "feedback": {
        "0": "This is a joint event; normalize by the probability of A.",
        "1": "This reverses the condition and omits the complement.",
        "3": "This ignores the condition A.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "solve marginal probabilities",
        "conditional complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: solve marginal probabilities, conditional complement.",
        "The union probability is 1-0.45=0.55. Thus P(A)+P(B)=0.65."
      ],
      "verification": {
        "kind": "two-events",
        "a": 0.2,
        "b": 0.44999999999999996,
        "joint": 0.1,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "exam:d1-mutually-exclusive:1",
      "topicId": "d1-mutually-exclusive",
      "family": "two-events-infer"
    }
  ],
  "d2-partitions": [
    {
      "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.3. The overall annual claim probability is 0.183 and the ordinary-risk claim probability is 0.09. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
      "choices": [
        "$0.1200$",
        "$0.1830$",
        "$0.3000$",
        "$0.4000$",
        "$0.6557$"
      ],
      "answer": 4,
      "solution": [
        "Let h be the high-risk claim rate. Total probability gives 0.183=0.3h+0.7(0.09).",
        "This gives h=0.4 and joint probability P(high risk and claim)=0.12.",
        "Bayes gives 0.12/0.183=0.655738."
      ],
      "feedback": {
        "0": "This is the joint probability; divide by the overall claim probability.",
        "1": "This is the denominator of the Bayes calculation.",
        "2": "This is the class share before observing a claim.",
        "3": "This is the conditional claim rate within the class, reversing the requested condition."
      },
      "skills": [
        "infer a missing class rate",
        "total probability",
        "Bayes"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a missing class rate, total probability, Bayes.",
        "Let h be the high-risk claim rate. Total probability gives 0.183=0.3h+0.7(0.09)."
      ],
      "verification": {
        "kind": "mixture",
        "weight": 0.3,
        "rates": [
          0.4,
          0.09
        ],
        "target": "posterior"
      },
      "level": "challenge",
      "id": "exam:d2-partitions:0",
      "topicId": "d2-partitions",
      "family": "partition-rate"
    },
    {
      "question": "An insured belongs permanently to class H with probability 0.5, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.4, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0092$",
        "$0.0183$",
        "$0.0392$",
        "$0.1680$",
        "$0.5000$"
      ],
      "answer": 2,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.449329 for L.",
        "The overall likelihood is 0.233822 after weighting by the prior class shares.",
        "The H posterior is 0.009158/0.233822=0.039166."
      ],
      "feedback": {
        "0": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "1": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "3": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "4": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate."
      },
      "skills": [
        "Poisson likelihood",
        "conditional independence",
        "Bayes"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Poisson likelihood, conditional independence, Bayes.",
        "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.449329 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.5,
        "rates": [
          2,
          0.4
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "exam:d2-partitions:1",
      "topicId": "d2-partitions",
      "family": "mixture-no-claim"
    }
  ],
  "e1-addition-rule": [
    {
      "question": "Three coverage events A, B, C satisfy P(A)=14/24, P(B)=13/24, P(C)=9/24, P(A∩B)=7/24, P(A∩C)=5/24, and P(B∩C)=4/24. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.0833$",
        "$0.1429$",
        "$0.1667$",
        "$0.2000$",
        "$0.4167$"
      ],
      "answer": 3,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/24.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 2/24. The probability of not A is 10/24.",
        "None is contained in not A, so the requested conditional probability is 0.2."
      ],
      "feedback": {
        "0": "This is the probability of none before conditioning; divide by P(not A).",
        "1": "The condition is not A, so use its probability in the denominator.",
        "2": "The triple intersection must be included once with the correct sign in inclusion–exclusion.",
        "4": "This is the condition probability, not the conditional numerator divided by it."
      },
      "skills": [
        "recover an intersection",
        "inclusion–exclusion",
        "conditional probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, inclusion–exclusion, conditional probability.",
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/24."
      ],
      "verification": {
        "kind": "atoms",
        "weights": [
          2,
          4,
          4,
          5,
          2,
          3,
          2,
          2
        ],
        "target": "none-given-notA"
      },
      "level": "challenge",
      "id": "exam:e1-addition-rule:0",
      "topicId": "e1-addition-rule",
      "family": "region-conditional"
    },
    {
      "question": "For two policy features A and B, P(neither)=0.5, P(A∩B)=0.1, and P(B)-P(A)=0.1. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.1500$",
        "$0.2857$",
        "$0.4000$",
        "$0.6000$",
        "$0.6500$"
      ],
      "answer": 3,
      "solution": [
        "The union probability is 1-0.5=0.5. Thus P(A)+P(B)=0.6.",
        "Combine this sum with the difference 0.1 to get P(A)=0.25 and P(B)=0.35.",
        "The A-only probability is 0.15. Divide by P(A): 0.15/0.25=0.6."
      ],
      "feedback": {
        "0": "This is a joint event; normalize by the probability of A.",
        "1": "This reverses the condition and omits the complement.",
        "2": "This gives B rather than not B conditional on A.",
        "4": "This ignores the condition A."
      },
      "skills": [
        "solve marginal probabilities",
        "conditional complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: solve marginal probabilities, conditional complement.",
        "The union probability is 1-0.5=0.5. Thus P(A)+P(B)=0.6."
      ],
      "verification": {
        "kind": "two-events",
        "a": 0.25,
        "b": 0.35,
        "joint": 0.1,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "exam:e1-addition-rule:1",
      "topicId": "e1-addition-rule",
      "family": "two-events-infer"
    }
  ],
  "e2-multiplication-rule": [
    {
      "question": "A box contains 2 damaged and 6 sound components. Three are inspected in order without replacement. Calculate the probability the first is damaged and the other two are sound. Round your answer to four decimal places.",
      "choices": [
        "$0.1406$",
        "$0.1786$",
        "$0.2359$",
        "$0.2500$",
        "$0.5357$"
      ],
      "answer": 1,
      "solution": [
        "The first-stage damaged probability is 2/8.",
        "After removing a damaged component there are 6 sound components out of 7; after removing a sound component there are 5 out of 6.",
        "Multiply conditional stage probabilities: (2/8)(6/7)(5/6)=0.178571."
      ],
      "feedback": {
        "0": "This treats changing without-replacement probabilities as constant.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "This only accounts for the first inspection.",
        "4": "This allows the damaged component in any position, but the order is specified."
      },
      "skills": [
        "conditional multiplication",
        "without replacement",
        "ordered outcomes"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional multiplication, without replacement, ordered outcomes.",
        "The first-stage damaged probability is 2/8."
      ],
      "verification": {
        "kind": "draw-sequence",
        "N": 8,
        "K": 2,
        "pattern": [
          1,
          0,
          0
        ]
      },
      "level": "challenge",
      "id": "exam:e2-multiplication-rule:0",
      "topicId": "e2-multiplication-rule",
      "family": "replacement-pattern"
    },
    {
      "question": "A portfolio has a fraction 0.25 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.1 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1000$",
        "$0.2000$",
        "$0.2923$",
        "$0.5000$",
        "$0.6250$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.25 for H and 0.09 for L.",
        "Weight these by the prior shares; the total history probability is 0.13.",
        "Weight the next-year claim rates by those posterior shares: [0.0625(0.5)+0.0675(0.1)]/0.13=0.292308."
      ],
      "feedback": {
        "0": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "1": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "3": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "4": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year."
      },
      "skills": [
        "conditional independence",
        "Bayes over a history",
        "posterior prediction"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional independence, Bayes over a history, posterior prediction.",
        "The observed history likelihoods are 0.25 for H and 0.09 for L."
      ],
      "verification": {
        "kind": "latent-history",
        "w": 0.25,
        "rates": [
          0.5,
          0.1
        ],
        "history": [
          1,
          0
        ],
        "target": "next"
      },
      "level": "challenge",
      "id": "exam:e2-multiplication-rule:1",
      "topicId": "e2-multiplication-rule",
      "family": "latent-two-years"
    }
  ],
  "e3-combined-problems": [
    {
      "question": "An insured belongs permanently to class H with probability 0.4, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.3, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0073$",
        "$0.0183$",
        "$0.0218$",
        "$0.1086$",
        "$0.4000$"
      ],
      "answer": 2,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.548812 for L.",
        "The overall likelihood is 0.336613 after weighting by the prior class shares.",
        "The H posterior is 0.007326/0.336613=0.021765."
      ],
      "feedback": {
        "0": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "1": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "3": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "4": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate."
      },
      "skills": [
        "Poisson likelihood",
        "conditional independence",
        "Bayes"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Poisson likelihood, conditional independence, Bayes.",
        "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.548812 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.4,
        "rates": [
          2,
          0.30000000000000004
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "exam:e3-combined-problems:0",
      "topicId": "e3-combined-problems",
      "family": "mixture-no-claim"
    },
    {
      "question": "A container is type H with probability 0.4, otherwise type L. Both types hold 11 components; type H contains 4 defective components and type L contains 2. Three are sampled without replacement and exactly two defects are observed. Calculate the posterior probability the container is type H. Round your answer to four decimal places.",
      "choices": [
        "$0.1018$",
        "$0.2545$",
        "$0.4000$",
        "$0.7568$",
        "$0.8235$"
      ],
      "answer": 3,
      "solution": [
        "The observation likelihood is choose(4,2)choose(7,1)/choose(11,3)=0.254545 for H and 0.054545 for L.",
        "The total observation probability is 0.134545.",
        "Weight the H likelihood by its prior and divide by the total: 0.756757."
      ],
      "feedback": {
        "0": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "1": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "2": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "4": "Use without-replacement likelihoods and both prior class weights before reversing the condition."
      },
      "skills": [
        "hypergeometric likelihood",
        "Bayesian class inference"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: hypergeometric likelihood, Bayesian class inference.",
        "The observation likelihood is choose(4,2)choose(7,1)/choose(11,3)=0.254545 for H and 0.054545 for L."
      ],
      "verification": {
        "kind": "hypergeom-mixture",
        "N": 11,
        "K": [
          4,
          2
        ],
        "n": 3,
        "k": 2,
        "w": 0.4
      },
      "level": "challenge",
      "id": "exam:e3-combined-problems:1",
      "topicId": "e3-combined-problems",
      "family": "hypergeom-bayes"
    }
  ],
  "f1-conditional-probability": [
    {
      "question": "Three coverage events A, B, C satisfy P(A)=12/24, P(B)=14/24, P(C)=8/24, P(A∩B)=6/24, P(A∩C)=4/24, and P(B∩C)=3/24. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.0833$",
        "$0.1250$",
        "$0.1667$",
        "$0.2220$",
        "$0.5000$"
      ],
      "answer": 2,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/24.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 2/24. The probability of not A is 12/24.",
        "None is contained in not A, so the requested conditional probability is 0.166667."
      ],
      "feedback": {
        "0": "This is the probability of none before conditioning; divide by P(not A).",
        "1": "The triple intersection must be included once with the correct sign in inclusion–exclusion.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "This is the condition probability, not the conditional numerator divided by it."
      },
      "skills": [
        "recover an intersection",
        "inclusion–exclusion",
        "conditional probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, inclusion–exclusion, conditional probability.",
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/24."
      ],
      "verification": {
        "kind": "atoms",
        "weights": [
          2,
          3,
          6,
          5,
          2,
          3,
          2,
          1
        ],
        "target": "none-given-notA"
      },
      "level": "challenge",
      "id": "exam:f1-conditional-probability:0",
      "topicId": "f1-conditional-probability",
      "family": "region-conditional"
    },
    {
      "question": "6 policies have mutually independent claim indicators, each with claim probability 0.25. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.1907$",
        "$0.2320$",
        "$0.2984$",
        "$0.3041$",
        "$0.7627$"
      ],
      "answer": 1,
      "solution": [
        "The condition has probability 1-(1-0.25)^6=0.822021.",
        "The numerator requires a claim on policy 1 and at least one among the remaining 5: 0.25[1-(1-0.25)^5]=0.190674.",
        "Divide numerator by condition probability: 0.231957."
      ],
      "feedback": {
        "0": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
        "4": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population."
      },
      "skills": [
        "independence",
        "complements",
        "conditional joint event"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independence, complements, conditional joint event.",
        "The condition has probability 1-(1-0.25)^6=0.822021."
      ],
      "verification": {
        "kind": "binomial-indicators",
        "n": 6,
        "p": 0.25,
        "target": "first-and-other-given-any"
      },
      "level": "challenge",
      "id": "exam:f1-conditional-probability:1",
      "topicId": "f1-conditional-probability",
      "family": "conditional-independent"
    }
  ],
  "f2-bayes-theorem": [
    {
      "question": "A fraud screen flags a fraction 0.85 of fraudulent claims. Fraud prevalence is 0.1. Of flagged claims, the fraud fraction is specified exactly as 0.085/(0.085+0.054). Calculate the flag probability for a legitimate claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0540$",
        "$0.0600$",
        "$0.0850$",
        "$0.1390$",
        "$0.6115$"
      ],
      "answer": 1,
      "solution": [
        "The joint fraud-and-flag probability is 0.085.",
        "Use the supplied posterior fraction to recover total flag probability 0.139.",
        "Subtract the fraud contribution and divide by P(legitimate): 0.054/0.9=0.06."
      ],
      "feedback": {
        "0": "Distinguish joint flag masses, posterior fraud probability, and a flag probability conditional on legitimacy.",
        "2": "Distinguish joint flag masses, posterior fraud probability, and a flag probability conditional on legitimacy.",
        "3": "Distinguish joint flag masses, posterior fraud probability, and a flag probability conditional on legitimacy.",
        "4": "Distinguish joint flag masses, posterior fraud probability, and a flag probability conditional on legitimacy."
      },
      "skills": [
        "reverse a Bayes equation",
        "total probability",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: reverse a Bayes equation, total probability, conditional normalization.",
        "The joint fraud-and-flag probability is 0.085."
      ],
      "verification": {
        "kind": "screen",
        "prior": 0.1,
        "sensitivity": 0.85,
        "falsePositive": 0.060000000000000005,
        "target": "infer-fp"
      },
      "level": "challenge",
      "id": "exam:f2-bayes-theorem:0",
      "topicId": "f2-bayes-theorem",
      "family": "screen-infer"
    },
    {
      "question": "A portfolio has a fraction 0.25 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.125 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.2062$",
        "$0.2647$",
        "$0.4500$",
        "$0.5455$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.2475 for H and 0.109375 for L.",
        "Weight these by the prior shares; the total history probability is 0.143906.",
        "Weight the next-year claim rates by those posterior shares: [0.061875(0.45)+0.082031(0.125)]/0.143906=0.264739."
      ],
      "feedback": {
        "0": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "1": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "3": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year.",
        "4": "The same latent type persists across years. Update class weights using the entire observed claim history before predicting another year."
      },
      "skills": [
        "conditional independence",
        "Bayes over a history",
        "posterior prediction"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional independence, Bayes over a history, posterior prediction.",
        "The observed history likelihoods are 0.2475 for H and 0.109375 for L."
      ],
      "verification": {
        "kind": "latent-history",
        "w": 0.25,
        "rates": [
          0.45,
          0.125
        ],
        "history": [
          1,
          0
        ],
        "target": "next"
      },
      "level": "challenge",
      "id": "exam:f2-bayes-theorem:1",
      "topicId": "f2-bayes-theorem",
      "family": "latent-two-years"
    }
  ],
  "f3-law-total-probability": [
    {
      "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.3. The overall annual claim probability is 0.19 and the ordinary-risk claim probability is 0.1. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
      "choices": [
        "$0.1200$",
        "$0.1900$",
        "$0.3000$",
        "$0.4000$",
        "$0.6316$"
      ],
      "answer": 4,
      "solution": [
        "Let h be the high-risk claim rate. Total probability gives 0.19=0.3h+0.7(0.1).",
        "This gives h=0.4 and joint probability P(high risk and claim)=0.12.",
        "Bayes gives 0.12/0.19=0.631579."
      ],
      "feedback": {
        "0": "This is the joint probability; divide by the overall claim probability.",
        "1": "This is the denominator of the Bayes calculation.",
        "2": "This is the class share before observing a claim.",
        "3": "This is the conditional claim rate within the class, reversing the requested condition."
      },
      "skills": [
        "infer a missing class rate",
        "total probability",
        "Bayes"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a missing class rate, total probability, Bayes.",
        "Let h be the high-risk claim rate. Total probability gives 0.19=0.3h+0.7(0.1)."
      ],
      "verification": {
        "kind": "mixture",
        "weight": 0.3,
        "rates": [
          0.4,
          0.1
        ],
        "target": "posterior"
      },
      "level": "challenge",
      "id": "exam:f3-law-total-probability:0",
      "topicId": "f3-law-total-probability",
      "family": "partition-rate"
    },
    {
      "question": "An insured belongs permanently to class H with probability 0.5, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.2, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0092$",
        "$0.0183$",
        "$0.0266$",
        "$0.1419$",
        "$0.5000$"
      ],
      "answer": 2,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.67032 for L.",
        "The overall likelihood is 0.344318 after weighting by the prior class shares.",
        "The H posterior is 0.009158/0.344318=0.026597."
      ],
      "feedback": {
        "0": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "1": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "3": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "4": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate."
      },
      "skills": [
        "Poisson likelihood",
        "conditional independence",
        "Bayes"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Poisson likelihood, conditional independence, Bayes.",
        "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.67032 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.5,
        "rates": [
          2,
          0.2
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "exam:f3-law-total-probability:1",
      "topicId": "f3-law-total-probability",
      "family": "mixture-no-claim"
    }
  ],
  "urv-a1-random-variables": [
    {
      "question": "X is equally likely to be each integer from 1 through 6. A contract pays Y=150 min(max(X-3,0),3). Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$173.2051$",
        "$22500.0000$",
        "$30000.0000$",
        "$52500.0000$",
        "$65625.0000$"
      ],
      "answer": 2,
      "solution": [
        "List the payment at each supported X value: 0, 0, 0, 150, 300, 450.",
        "The equal-weight moments are E[Y]=150 and E[Y²]=52500.",
        "Subtract the squared mean: Var(Y)=30000."
      ],
      "feedback": {
        "0": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
        "1": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
        "3": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
        "4": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments."
      },
      "skills": [
        "discrete support",
        "nonlinear transformation",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete support, nonlinear transformation, variance.",
        "List the payment at each supported X value: 0, 0, 0, 150, 300, 450."
      ],
      "verification": {
        "kind": "discrete-uniform-payment",
        "n": 6,
        "d": 3,
        "cap": 3,
        "B": 150,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-a1-random-variables:0",
      "topicId": "urv-a1-random-variables",
      "family": "discrete-uniform-capped"
    },
    {
      "question": "A device independently survives each year with probability 0.75, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays 150(4-t); after year 3 it pays zero. Calculate the variance of the payment. Round your answer to four decimal places.",
      "choices": [
        "$186.0737$",
        "$189.8438$",
        "$4218.7500$",
        "$34623.4131$",
        "$70664.0625$"
      ],
      "answer": 3,
      "solution": [
        "The first-failure year T is geometric: P(T=t)=0.25(0.75)^(t-1).",
        "Payment is 450, 300, 150 in the first three years; all later outcomes have payment zero.",
        "Weighted moments are E[Y]=189.84375 and E[Y²]=70664.0625.",
        "Var(Y)=E[Y²]-(E[Y])²=34623.413086."
      ],
      "feedback": {
        "0": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
        "1": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
        "2": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
        "4": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance."
      },
      "skills": [
        "geometric first occurrence",
        "piecewise benefit",
        "payment variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: geometric first occurrence, piecewise benefit, payment variance.",
        "The first-failure year T is geometric: P(T=t)=0.25(0.75)^(t-1)."
      ],
      "verification": {
        "kind": "geometric-benefit",
        "p": 0.25,
        "B": 150,
        "horizon": 4,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-a1-random-variables:1",
      "topicId": "urv-a1-random-variables",
      "family": "geometric-benefit"
    }
  ],
  "urv-a2-pdf": [
    {
      "question": "X has density f(x)=a+bx on (0,5) and zero elsewhere. The unknown constants satisfy a:b=0.75:0.4. Given X>2.5, calculate P(X>4). Round your answer to four decimal places.",
      "choices": [
        "$0.2000$",
        "$0.2914$",
        "$0.3514$",
        "$0.4533$",
        "$0.5574$"
      ],
      "answer": 3,
      "solution": [
        "Write a=0.75c and b=0.4c. Normalizing the density gives c=1/8.75.",
        "The CDF on the support is F(x)=0.085714x+(0.045714/2)x².",
        "Divide the tail above 4 by the tail above 2.5: 0.291429/0.642857=0.453333."
      ],
      "feedback": {
        "0": "Normalize the nonuniform density, integrate the relevant tails, then divide by the condition probability.",
        "1": "Normalize the nonuniform density, integrate the relevant tails, then divide by the condition probability.",
        "2": "Normalize the nonuniform density, integrate the relevant tails, then divide by the condition probability.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "density normalization",
        "nonuniform integration",
        "conditioning"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: density normalization, nonuniform integration, conditioning.",
        "Write a=0.75c and b=0.4c. Normalizing the density gives c=1/8.75."
      ],
      "verification": {
        "kind": "linear-density",
        "L": 5,
        "A": 0.08571428571428572,
        "B": 0.045714285714285714,
        "t": 2.5,
        "u": 4.0,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "exam:urv-a2-pdf:0",
      "topicId": "urv-a2-pdf",
      "family": "density-infer-conditional"
    },
    {
      "question": "X has density proportional to x^1 on (0,5) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
      "choices": [
        "$2.2361$",
        "$2.6432$",
        "$3.0000$",
        "$3.8730$",
        "$4.4721$"
      ],
      "answer": 0,
      "solution": [
        "Normalize the density: f(x)=2x^1/25, so F(x)=(x/5)^2.",
        "Solve F(q)=u to get q(u)=5u^(1/2).",
        "The requested difference is 5[0.8^(1/2)-0.2^(1/2)]=2.236068."
      ],
      "feedback": {
        "1": "Recheck the setup and the requested quantity before evaluating the formula.",
        "2": "Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter.",
        "3": "Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter.",
        "4": "Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter."
      },
      "skills": [
        "normalize a density",
        "invert CDF",
        "quantile comparison"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: normalize a density, invert CDF, quantile comparison.",
        "Normalize the density: f(x)=2x^1/25, so F(x)=(x/5)^2."
      ],
      "verification": {
        "kind": "power-density",
        "L": 5,
        "power": 1,
        "low": 0.2,
        "high": 0.8,
        "target": "quantile-difference"
      },
      "level": "challenge",
      "id": "exam:urv-a2-pdf:1",
      "topicId": "urv-a2-pdf",
      "family": "power-quantile-difference"
    }
  ],
  "urv-a3-cdf": [
    {
      "question": "A loss fraction X has probability 0.15 at 0 and 0.3 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.6, calculate the probability X=1. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.2200$",
        "$0.3000$",
        "$0.3529$",
        "$0.5769$"
      ],
      "answer": 4,
      "solution": [
        "The continuous component has weight 0.55, so its mass above 0.6 is 0.22.",
        "The conditioning event also includes the atom at 1; its total probability is 0.52.",
        "Divide the atom mass by that total: 0.3/0.52=0.576923."
      ],
      "feedback": {
        "0": "The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous.",
        "1": "The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous.",
        "2": "The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous.",
        "3": "The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous."
      },
      "skills": [
        "CDF jumps",
        "mixed distribution",
        "conditional atom"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF jumps, mixed distribution, conditional atom.",
        "The continuous component has weight 0.55, so its mass above 0.6 is 0.22."
      ],
      "verification": {
        "kind": "mixed-cdf",
        "p0": 0.15000000000000002,
        "p1": 0.30000000000000004,
        "cut": 0.6000000000000001,
        "target": "atom-conditional"
      },
      "level": "challenge",
      "id": "exam:urv-a3-cdf:0",
      "topicId": "urv-a3-cdf",
      "family": "cdf-atom-conditional"
    },
    {
      "question": "Loss X has density f(x)=2x/36 on (0,6) and zero elsewhere. A claim is recorded only when X>1. Calculate the mean loss among recorded claims. Round your answer to four decimal places.",
      "choices": [
        "$3.5000$",
        "$3.8709$",
        "$3.9815$",
        "$4.0000$",
        "$4.0952$"
      ],
      "answer": 4,
      "solution": [
        "The recording probability is 1-(1/6)²=0.972222.",
        "The restricted first-moment integral is the integral of x(2x/36) from 1 to 6, equal to 3.981481.",
        "Normalize to the recorded population: 3.981481/0.972222=4.095238."
      ],
      "feedback": {
        "0": "Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed.",
        "1": "Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed.",
        "2": "Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed.",
        "3": "Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed."
      },
      "skills": [
        "conditional density",
        "truncated first moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional density, truncated first moment.",
        "The recording probability is 1-(1/6)²=0.972222."
      ],
      "verification": {
        "kind": "power-density",
        "L": 6,
        "power": 1,
        "lower": 1,
        "target": "conditional-mean"
      },
      "level": "challenge",
      "id": "exam:urv-a3-cdf:1",
      "topicId": "urv-a3-cdf",
      "family": "continuous-conditional-mean"
    }
  ],
  "urv-b1-discrete-uniform": [
    {
      "question": "X is equally likely to be each integer from 1 through 6. A contract pays Y=100 min(max(X-2,0),3). Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$125.8306$",
        "$15833.3333$",
        "$22500.0000$",
        "$29166.6667$",
        "$38333.3333$"
      ],
      "answer": 1,
      "solution": [
        "List the payment at each supported X value: 0, 0, 100, 200, 300, 300.",
        "The equal-weight moments are E[Y]=150 and E[Y²]=38333.333333.",
        "Subtract the squared mean: Var(Y)=15833.333333."
      ],
      "feedback": {
        "0": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
        "2": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
        "3": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
        "4": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments."
      },
      "skills": [
        "discrete support",
        "nonlinear transformation",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete support, nonlinear transformation, variance.",
        "List the payment at each supported X value: 0, 0, 100, 200, 300, 300."
      ],
      "verification": {
        "kind": "discrete-uniform-payment",
        "n": 6,
        "d": 2,
        "cap": 3,
        "B": 100,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-b1-discrete-uniform:0",
      "topicId": "urv-b1-discrete-uniform",
      "family": "discrete-uniform-capped"
    },
    {
      "question": "Independent X,Y are each uniform on the integers 1 through 9. Given X+Y≥11, calculate P(X=Y). Round your answer to four decimal places.",
      "choices": [
        "$0.0494$",
        "$0.1111$",
        "$0.1570$",
        "$0.2029$",
        "$0.4444$"
      ],
      "answer": 1,
      "solution": [
        "All 81 ordered pairs are equally likely before conditioning.",
        "The condition allows 36 ordered pairs. Exactly 4 of these lie on the diagonal x=y.",
        "The conditional ratio is 4/36=0.111111."
      ],
      "feedback": {
        "0": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution."
      },
      "skills": [
        "discrete uniform pairs",
        "sample-space counting",
        "conditioning"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete uniform pairs, sample-space counting, conditioning.",
        "All 81 ordered pairs are equally likely before conditioning."
      ],
      "verification": {
        "kind": "uniform-pairs",
        "n": 9,
        "threshold": 11,
        "target": "equal-given-tail"
      },
      "level": "challenge",
      "id": "exam:urv-b1-discrete-uniform:1",
      "topicId": "urv-b1-discrete-uniform",
      "family": "discrete-uniform-sum"
    }
  ],
  "urv-b2-binomial": [
    {
      "question": "A portfolio contains 8 independent policies with a common unknown claim probability p. The probability no policy has a claim is 0.05764801. Given at least one claim, calculate the probability at least two policies have claims. Round your answer to four decimal places.",
      "choices": [
        "$0.2097$",
        "$0.3000$",
        "$0.7447$",
        "$0.7903$",
        "$0.9424$"
      ],
      "answer": 3,
      "solution": [
        "From (1-p)^8=0.05764801, take the nth root to obtain p=0.3.",
        "The zero and exactly-one probabilities are 0.057648 and 0.19765. Thus P(N≥2)=0.744702.",
        "Condition on N≥1 by dividing by 0.942352; the answer is 0.790258."
      ],
      "feedback": {
        "0": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
        "1": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
        "2": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
        "4": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability."
      },
      "skills": [
        "infer a Bernoulli parameter",
        "binomial complement",
        "truncation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a Bernoulli parameter, binomial complement, truncation.",
        "From (1-p)^8=0.05764801, take the nth root to obtain p=0.3."
      ],
      "verification": {
        "kind": "binomial",
        "n": 8,
        "p": 0.30000000000000004,
        "target": "atleast2-given-positive"
      },
      "level": "challenge",
      "id": "exam:urv-b2-binomial:0",
      "topicId": "urv-b2-binomial",
      "family": "binomial-infer"
    },
    {
      "question": "5 independent devices each fail with probability 0.25 during a year. A contract pays nothing for the first failed device and 300 for each additional failed device, subject to a total payment cap of 600. Calculate expected annual payment. Round your answer to four decimal places.",
      "choices": [
        "$75.0000$",
        "$141.2109$",
        "$146.1914$",
        "$228.8086$",
        "$600.0000$"
      ],
      "answer": 1,
      "solution": [
        "The failure count N is binomial with n=5, p=0.25. The payment is 300min((N-1)₊,2).",
        "Use tail sums: expected payment = 300[P(N≥2)+P(N≥3)]. These two tail probabilities are 0.367188 and 0.103516.",
        "The expected payment is 141.210938. This includes years with zero payment."
      ],
      "feedback": {
        "0": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count.",
        "2": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count.",
        "3": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count.",
        "4": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count."
      },
      "skills": [
        "identify binomial",
        "transform a count",
        "tail-sum expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: identify binomial, transform a count, tail-sum expectation.",
        "The failure count N is binomial with n=5, p=0.25. The payment is 300min((N-1)₊,2)."
      ],
      "verification": {
        "kind": "binomial",
        "n": 5,
        "p": 0.25,
        "B": 300,
        "target": "capped-payment"
      },
      "level": "challenge",
      "id": "exam:urv-b2-binomial:1",
      "topicId": "urv-b2-binomial",
      "family": "capped-binomial-payment"
    }
  ],
  "urv-b3-geometric": [
    {
      "question": "A device independently survives each year with probability 0.7, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays 200(4-t); after year 3 it pays zero. Calculate the variance of the payment. Round your answer to four decimal places.",
      "choices": [
        "$247.7831$",
        "$293.4000$",
        "$8400.0000$",
        "$61396.4400$",
        "$147480.0000$"
      ],
      "answer": 3,
      "solution": [
        "The first-failure year T is geometric: P(T=t)=0.3(0.7)^(t-1).",
        "Payment is 600, 400, 200 in the first three years; all later outcomes have payment zero.",
        "Weighted moments are E[Y]=293.4 and E[Y²]=147480.",
        "Var(Y)=E[Y²]-(E[Y])²=61396.44."
      ],
      "feedback": {
        "0": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
        "1": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
        "2": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
        "4": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance."
      },
      "skills": [
        "geometric first occurrence",
        "piecewise benefit",
        "payment variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: geometric first occurrence, piecewise benefit, payment variance.",
        "The first-failure year T is geometric: P(T=t)=0.3(0.7)^(t-1)."
      ],
      "verification": {
        "kind": "geometric-benefit",
        "p": 0.30000000000000004,
        "B": 200,
        "horizon": 4,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-b3-geometric:0",
      "topicId": "urv-b3-geometric",
      "family": "geometric-benefit"
    },
    {
      "question": "The trial number T of a first success includes the successful trial. Independent trials have success probability 0.35. Given that a success occurs within 7 trials, calculate P(3<T≤6) under this condition. Round your answer to four decimal places.",
      "choices": [
        "$0.1992$",
        "$0.2095$",
        "$0.2155$",
        "$0.2746$",
        "$0.7254$"
      ],
      "answer": 1,
      "solution": [
        "For the trial-count convention P(T>k)=(1-p)^k.",
        "The requested interval has probability (0.65)^3-(0.65)^6=0.199206.",
        "It is contained in T≤7, whose probability is 0.950978. The conditional result is 0.209475."
      ],
      "feedback": {
        "0": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator.",
        "2": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator.",
        "3": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator.",
        "4": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator."
      },
      "skills": [
        "waiting-time endpoints",
        "conditional interval probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: waiting-time endpoints, conditional interval probability.",
        "For the trial-count convention P(T>k)=(1-p)^k."
      ],
      "verification": {
        "kind": "geometric-interval",
        "p": 0.35000000000000003,
        "a": 3,
        "b": 6,
        "limit": 7
      },
      "level": "challenge",
      "id": "exam:urv-b3-geometric:1",
      "topicId": "urv-b3-geometric",
      "family": "geometric-conditioned"
    }
  ],
  "urv-b4-negative-binomial": [
    {
      "question": "Independent inspections each find a defect with probability 0.25. Let T be the inspection number at which the second defect is found. Given that the second defect is found by inspection 5, calculate P(T=5). Round your answer to four decimal places.",
      "choices": [
        "$0.1055$",
        "$0.1702$",
        "$0.2872$",
        "$0.3672$",
        "$0.7181$"
      ],
      "answer": 2,
      "solution": [
        "To have T=s, the last inspection is defective and exactly one of the first s-1 is defective: P(T=s)=(s-1)p²(1-p)^(s-2).",
        "The numerator at s=5 is 0.105469. Sum these masses from s=2 through 5 for denominator 0.367188.",
        "The conditional probability is 0.287234."
      ],
      "feedback": {
        "0": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition.",
        "1": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition.",
        "3": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition.",
        "4": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition."
      },
      "skills": [
        "stopping-time PMF",
        "truncated negative binomial"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: stopping-time PMF, truncated negative binomial.",
        "To have T=s, the last inspection is defective and exactly one of the first s-1 is defective: P(T=s)=(s-1)p²(1-p)^(s-2)."
      ],
      "verification": {
        "kind": "negative-binomial",
        "p": 0.25,
        "r": 2,
        "t": 5,
        "target": "at-t-given-by-t"
      },
      "level": "challenge",
      "id": "exam:urv-b4-negative-binomial:0",
      "topicId": "urv-b4-negative-binomial",
      "family": "negative-binomial-joint"
    },
    {
      "question": "Independent trials have success probability 0.2. T1 and T2 are the trial numbers of the first and second successes. Given T2=7, calculate P(T1≤2). Round your answer to four decimal places.",
      "choices": [
        "$0.2000$",
        "$0.2857$",
        "$0.3333$",
        "$0.3600$",
        "$0.4000$"
      ],
      "answer": 2,
      "solution": [
        "Given T2=7, exactly one success occurred among trials 1 through 6, and trial 7 is a success.",
        "Every permitted first-success position has the same joint probability p²(1-p)^(T2-2). Thus those positions are conditionally equally likely.",
        "There are 2 qualifying positions out of 6, giving 0.333333."
      ],
      "feedback": {
        "0": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials.",
        "1": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials.",
        "3": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials.",
        "4": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials."
      },
      "skills": [
        "joint stopping events",
        "conditional symmetry"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint stopping events, conditional symmetry.",
        "Given T2=7, exactly one success occurred among trials 1 through 6, and trial 7 is a success."
      ],
      "verification": {
        "kind": "success-positions",
        "p": 0.2,
        "t": 7,
        "k": 2
      },
      "level": "challenge",
      "id": "exam:urv-b4-negative-binomial:1",
      "topicId": "urv-b4-negative-binomial",
      "family": "first-success-given-second"
    }
  ],
  "urv-b5-hypergeometric": [
    {
      "question": "A container is type H with probability 0.4, otherwise type L. Both types hold 10 components; type H contains 4 defective components and type L contains 2. Three are sampled without replacement and exactly two defects are observed. Calculate the posterior probability the container is type H. Round your answer to four decimal places.",
      "choices": [
        "$0.1200$",
        "$0.3000$",
        "$0.4000$",
        "$0.7500$",
        "$0.8182$"
      ],
      "answer": 3,
      "solution": [
        "The observation likelihood is choose(4,2)choose(6,1)/choose(10,3)=0.3 for H and 0.066667 for L.",
        "The total observation probability is 0.16.",
        "Weight the H likelihood by its prior and divide by the total: 0.75."
      ],
      "feedback": {
        "0": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "1": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "2": "Use without-replacement likelihoods and both prior class weights before reversing the condition.",
        "4": "Use without-replacement likelihoods and both prior class weights before reversing the condition."
      },
      "skills": [
        "hypergeometric likelihood",
        "Bayesian class inference"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: hypergeometric likelihood, Bayesian class inference.",
        "The observation likelihood is choose(4,2)choose(6,1)/choose(10,3)=0.3 for H and 0.066667 for L."
      ],
      "verification": {
        "kind": "hypergeom-mixture",
        "N": 10,
        "K": [
          4,
          2
        ],
        "n": 3,
        "k": 2,
        "w": 0.4
      },
      "level": "challenge",
      "id": "exam:urv-b5-hypergeometric:0",
      "topicId": "urv-b5-hypergeometric",
      "family": "hypergeom-bayes"
    },
    {
      "question": "A sample of four devices is selected uniformly without replacement from 10 devices, 5 of which are damaged. A warranty pays 100 per damaged device in the sample after the first damaged device. Calculate expected payment. Round your answer to four decimal places.",
      "choices": [
        "$97.6190$",
        "$100.0000$",
        "$102.3810$",
        "$119.8127$",
        "$200.0000$"
      ],
      "answer": 2,
      "solution": [
        "The sampled damaged count X is hypergeometric, so E[X]=4(5/10).",
        "The payment is B(X-1)₊. Since (X-1)₊=X-1+1{X=0}, expectation can be found from the mean and the zero probability.",
        "P(X=0)=choose(5,4)/choose(10,4)=0.02381; expected payment is 100[2-1+0.02381]=102.380952."
      ],
      "feedback": {
        "0": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
        "1": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule."
      },
      "skills": [
        "hypergeometric mean",
        "count deductible",
        "zero mass"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: hypergeometric mean, count deductible, zero mass.",
        "The sampled damaged count X is hypergeometric, so E[X]=4(5/10)."
      ],
      "verification": {
        "kind": "hypergeom",
        "N": 10,
        "K": 5,
        "n": 4,
        "B": 100,
        "target": "excess-payment"
      },
      "level": "challenge",
      "id": "exam:urv-b5-hypergeometric:1",
      "topicId": "urv-b5-hypergeometric",
      "family": "hypergeom-payment"
    }
  ],
  "urv-b6-poisson": [
    {
      "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-1.4). A policy pays 300 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
      "choices": [
        "$120.0000$",
        "$193.9791$",
        "$226.0209$",
        "$226.9825$",
        "$420.0000$"
      ],
      "answer": 1,
      "solution": [
        "P(N=0)=exp(-λ) identifies λ=1.4.",
        "Payment is 300(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
        "E[Y]=300[λ-1+exp(-λ)]=193.979089."
      ],
      "feedback": {
        "0": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
        "2": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count."
      },
      "skills": [
        "infer a Poisson mean",
        "tail/indicator expectation",
        "aggregate insurance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a Poisson mean, tail/indicator expectation, aggregate insurance.",
        "P(N=0)=exp(-λ) identifies λ=1.4."
      ],
      "verification": {
        "kind": "poisson",
        "lam": 1.4000000000000001,
        "B": 300,
        "target": "excess-payment"
      },
      "level": "challenge",
      "id": "exam:urv-b6-poisson:0",
      "topicId": "urv-b6-poisson",
      "family": "poisson-deductible"
    },
    {
      "question": "Independent claim counts X and Y from two branches are Poisson with means 1.8 and 0.6. Given X+Y=6, calculate P(X≥2). Round your answer to four decimal places.",
      "choices": [
        "$0.1780$",
        "$0.5372$",
        "$0.7500$",
        "$0.9954$",
        "$0.9998$"
      ],
      "answer": 3,
      "solution": [
        "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.75.",
        "The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n=6.",
        "Evaluate 1-(1-p)^6-6p(1-p)^5=0.995361."
      ],
      "feedback": {
        "0": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
        "1": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
        "2": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
        "4": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail."
      },
      "skills": [
        "independent Poisson totals",
        "conditional binomial",
        "tail probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent Poisson totals, conditional binomial, tail probability.",
        "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.75."
      ],
      "verification": {
        "kind": "poisson-split",
        "a": 1.7999999999999998,
        "b": 0.6,
        "n": 6,
        "target": "atleast2"
      },
      "level": "challenge",
      "id": "exam:urv-b6-poisson:1",
      "topicId": "urv-b6-poisson",
      "family": "poisson-split-condition"
    }
  ],
  "urv-c1-continuous-uniform": [
    {
      "question": "A loss X is uniform on (0,1200). A policy pays the positive excess above an ordinary deductible d, with no other limits. Expected payment is 0.36 times the mean loss. Calculate d. Round your answer to four decimal places.",
      "choices": [
        "$432.0000$",
        "$480.0000$",
        "$600.0000$",
        "$720.0000$",
        "$768.0000$"
      ],
      "answer": 1,
      "solution": [
        "E[X]=1200/2. Integrating the deductible payment gives E[(X-d)₊]=(1200-d)²/(2×1200).",
        "Set the ratio to 0.36: ((1200-d)/1200)²=0.36.",
        "The admissible deductible lies between 0 and 1200: d=1200(1-√0.36)=480."
      ],
      "feedback": {
        "0": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "2": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "3": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "4": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction."
      },
      "skills": [
        "uniform integration",
        "inverse insurance parameter"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: uniform integration, inverse insurance parameter.",
        "E[X]=1200/2. Integrating the deductible payment gives E[(X-d)₊]=(1200-d)²/(2×1200)."
      ],
      "verification": {
        "kind": "uniform-deductible",
        "B": 1200,
        "ratio": 0.36,
        "target": "deductible"
      },
      "level": "challenge",
      "id": "exam:urv-c1-continuous-uniform:0",
      "topicId": "urv-c1-continuous-uniform",
      "family": "uniform-infer-deductible"
    },
    {
      "question": "X is uniform on (0,2100). Insurer payment is Y=min(0.75 max(X-420,0),1050). Calculate Var(Y) per loss. Round your answer to four decimal places.",
      "choices": [
        "$389.7435$",
        "$151900.0000$",
        "$206718.7500$",
        "$240100.0000$",
        "$392000.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment is zero through 420, grows at rate 0.75 until loss 1820, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=490 and E[Y²]=392000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=151900."
      ],
      "feedback": {
        "0": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss.",
        "2": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss.",
        "3": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss.",
        "4": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss."
      },
      "skills": [
        "piecewise payment",
        "cap mass",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: piecewise payment, cap mass, variance.",
        "Payment is zero through 420, grows at rate 0.75 until loss 1820, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 2100,
        "d": 420.0,
        "share": 0.75,
        "cap": 1050.0,
        "inflation": 1,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-c1-continuous-uniform:1",
      "topicId": "urv-c1-continuous-uniform",
      "family": "uniform-payment-variance"
    }
  ],
  "urv-c2-exponential": [
    {
      "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-300)₊] to E[X] is 0.68728928, rounded to eight decimal places. Calculate P(X>600). Round your answer to four decimal places.",
      "choices": [
        "$0.1353$",
        "$0.4724$",
        "$0.5276$",
        "$0.5797$",
        "$0.6873$"
      ],
      "answer": 1,
      "solution": [
        "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
        "The positive mean is μ=800; survival beyond 600 is exp(-600/800).",
        "The probability is 0.472367."
      ],
      "feedback": {
        "0": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
        "2": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold."
      },
      "skills": [
        "inverse moment parameter",
        "exponential survival"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: inverse moment parameter, exponential survival.",
        "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean."
      ],
      "verification": {
        "kind": "exponential",
        "mu": 800,
        "d": 300,
        "threshold": 600,
        "target": "tail-from-deductible"
      },
      "level": "challenge",
      "id": "exam:urv-c2-exponential:0",
      "topicId": "urv-c2-exponential",
      "family": "exponential-infer"
    },
    {
      "question": "A device lifetime is exponential with mean 3 years. A contract pays benefit B for failure by year 1, pays 0.4B for failure after year 1 but by year 3, and otherwise pays zero. Its expected payment is 500. Calculate B. Round your answer to four decimal places.",
      "choices": [
        "$211.4647$",
        "$790.9884$",
        "$1182.2303$",
        "$1250.0000$",
        "$1763.8632$"
      ],
      "answer": 2,
      "solution": [
        "The two covered interval probabilities are 0.283469 and 0.348652.",
        "E[benefit]=B[0.283469+0.4(0.348652)]=0.422929B.",
        "Solve B=500/0.422929=1182.230311."
      ],
      "feedback": {
        "0": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
        "1": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
        "3": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
        "4": "Weight each time interval by its own benefit fraction before solving for the benefit amount."
      },
      "skills": [
        "continuous interval probabilities",
        "piecewise benefit",
        "inverse expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: continuous interval probabilities, piecewise benefit, inverse expectation.",
        "The two covered interval probabilities are 0.283469 and 0.348652."
      ],
      "verification": {
        "kind": "exponential-benefit",
        "mu": 3,
        "t1": 1,
        "t2": 3,
        "fraction": 0.4,
        "meanPay": 500
      },
      "level": "challenge",
      "id": "exam:urv-c2-exponential:1",
      "topicId": "urv-c2-exponential",
      "family": "exponential-benefit"
    }
  ],
  "urv-c3-gamma": [
    {
      "question": "A gamma waiting time T has mean 12 and variance 48. Calculate P(T>12). Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0498$",
        "$0.2500$",
        "$0.4232$",
        "$0.5768$"
      ],
      "answer": 3,
      "solution": [
        "Using mean αθ and variance αθ², infer scale θ=48/12=4 and shape α=3.",
        "The inferred shape is an integer, so gamma survival equals a Poisson lower tail: exp(-t/θ) times the sum of (t/θ)^j/j! for j=0,…,α-1.",
        "At t=12, t/θ=3.0. The probability is 0.42319."
      ],
      "feedback": {
        "0": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms.",
        "1": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms.",
        "2": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms.",
        "4": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms."
      },
      "skills": [
        "infer gamma parameters",
        "integer-shape waiting-time probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer gamma parameters, integer-shape waiting-time probability.",
        "Using mean αθ and variance αθ², infer scale θ=48/12=4 and shape α=3."
      ],
      "verification": {
        "kind": "gamma",
        "shape": 3,
        "scale": 4,
        "t": 12,
        "target": "tail-from-moments"
      },
      "level": "challenge",
      "id": "exam:urv-c3-gamma:0",
      "topicId": "urv-c3-gamma",
      "family": "gamma-parameter-tail"
    },
    {
      "question": "A Poisson process has rate 0.6 per hour. Let T be the time of the 5th arrival. Given no 5th arrival by hour 3, calculate the probability it is still absent at hour 6. Round your answer to four decimal places.",
      "choices": [
        "$0.1653$",
        "$0.2669$",
        "$0.7064$",
        "$0.7331$",
        "$0.8848$"
      ],
      "answer": 3,
      "solution": [
        "T is gamma with shape 5 and rate 0.6. Its survival is P(N(t)≤4), not a single exponential waiting-time tail.",
        "The survival probabilities at the two times are 0.963593 and 0.706438.",
        "The conditional tail ratio is 0.706438/0.963593=0.733129. Gamma with shape greater than one is not memoryless."
      ],
      "feedback": {
        "0": "Condition using gamma survival probabilities. Only the one-arrival exponential waiting time has the memoryless simplification.",
        "1": "Condition using gamma survival probabilities. Only the one-arrival exponential waiting time has the memoryless simplification.",
        "2": "Condition using gamma survival probabilities. Only the one-arrival exponential waiting time has the memoryless simplification.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "gamma/Poisson relation",
        "conditional continuous tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: gamma/Poisson relation, conditional continuous tail.",
        "T is gamma with shape 5 and rate 0.6. Its survival is P(N(t)≤4), not a single exponential waiting-time tail."
      ],
      "verification": {
        "kind": "gamma",
        "shape": 5,
        "scale": 1.6666666666666665,
        "a": 3,
        "b": 6,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "exam:urv-c3-gamma:1",
      "topicId": "urv-c3-gamma",
      "family": "gamma-sum-condition"
    }
  ],
  "urv-c4-beta": [
    {
      "question": "A proportion X has a beta distribution. Its mean is specified exactly as 3/(3+4) and its variance as (3×4)/[(3+4)²(3+4+1)]. Four risks share the same X; conditional on X=x each risk independently has a claim with probability x. Calculate the unconditional probability that the first two risks both claim, irrespective of the other two. Round your answer to four decimal places.",
      "choices": [
        "$0.0306$",
        "$0.1837$",
        "$0.2143$",
        "$0.4286$",
        "$0.8163$"
      ],
      "answer": 2,
      "solution": [
        "Given X=x, the first-two joint claim probability is x². The unconditional probability is therefore E[X²].",
        "Use the moment identity E[X²]=Var(X)+(E[X])². Conditional independence given X does not imply unconditional independence.",
        "The result is 0.030612+(3/7)²=0.214286."
      ],
      "feedback": {
        "0": "The shared random probability creates dependence after averaging; use the second raw moment, not the square of the mean.",
        "1": "The shared random probability creates dependence after averaging; use the second raw moment, not the square of the mean.",
        "3": "The shared random probability creates dependence after averaging; use the second raw moment, not the square of the mean.",
        "4": "The shared random probability creates dependence after averaging; use the second raw moment, not the square of the mean."
      },
      "skills": [
        "beta moments",
        "conditional independence",
        "mixture expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: beta moments, conditional independence, mixture expectation.",
        "Given X=x, the first-two joint claim probability is x². The unconditional probability is therefore E[X²]."
      ],
      "verification": {
        "kind": "beta",
        "a": 3,
        "b": 4,
        "target": "second-moment"
      },
      "level": "challenge",
      "id": "exam:urv-c4-beta:0",
      "topicId": "urv-c4-beta",
      "family": "beta-infer"
    },
    {
      "question": "A random damage fraction X has density f(x)=6x^1(1-x) for 0<x<1, and zero elsewhere. Given X>0.3, calculate P(X>0.7). Round your answer to four decimal places.",
      "choices": [
        "$0.2160$",
        "$0.2755$",
        "$0.3493$",
        "$0.5680$",
        "$0.6480$"
      ],
      "answer": 1,
      "solution": [
        "This is a beta(2,2) density. Integrating gives F(x)=3x^2-2x^3.",
        "The two required survival probabilities are 0.784 and 0.216.",
        "The higher-threshold tail is contained in the condition; divide the two tail probabilities to obtain 0.27551."
      ],
      "feedback": {
        "0": "Integrate the density to obtain each tail and normalize by the condition; a beta variable is not memoryless.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "Integrate the density to obtain each tail and normalize by the condition; a beta variable is not memoryless.",
        "4": "Integrate the density to obtain each tail and normalize by the condition; a beta variable is not memoryless."
      },
      "skills": [
        "recognize a beta density",
        "integrate polynomial density",
        "conditional tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recognize a beta density, integrate polynomial density, conditional tail.",
        "This is a beta(2,2) density. Integrating gives F(x)=3x^2-2x^3."
      ],
      "verification": {
        "kind": "beta",
        "a": 2,
        "b": 2,
        "lo": 0.30000000000000004,
        "hi": 0.7,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "exam:urv-c4-beta:1",
      "topicId": "urv-c4-beta",
      "family": "beta-conditional"
    }
  ],
  "urv-c5-normal": [
    {
      "question": "Loss X is normal with mean 80. Its 80th percentile is 88.41621234, rounded to eight decimal places. Calculate P(X>95.0). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
      "choices": [
        "$0.0668$",
        "$0.2000$",
        "$0.2551$",
        "$0.4404$",
        "$0.9332$"
      ],
      "answer": 0,
      "solution": [
        "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=10.",
        "The threshold has z=(95.0-80)/10=1.5.",
        "Use the upper tail 1-Φ(1.5)=0.066807."
      ],
      "feedback": {
        "1": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile.",
        "2": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile.",
        "3": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile.",
        "4": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile."
      },
      "skills": [
        "infer normal scale",
        "standardize",
        "select tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer normal scale, standardize, select tail.",
        "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=10."
      ],
      "verification": {
        "kind": "normal",
        "mu": 80,
        "sd": 10,
        "t": 95.0,
        "target": "tail-from-quantile"
      },
      "level": "challenge",
      "id": "exam:urv-c5-normal:0",
      "topicId": "urv-c5-normal",
      "family": "normal-quantile-infer"
    },
    {
      "question": "X is normal with mean 13 and variance 9. Calculate P((X-12)²<16). Round your answer to four decimal places.",
      "choices": [
        "$0.2064$",
        "$0.3413$",
        "$0.7936$",
        "$0.8176$",
        "$0.8413$"
      ],
      "answer": 2,
      "solution": [
        "Solve the quadratic event: 8<X<16. Both endpoints contribute to the probability.",
        "The standard normal endpoints are -1.666667 and 1 because SD is 3.",
        "Take the CDF difference: Φ(1)-Φ(-1.666667)=0.793554."
      ],
      "feedback": {
        "0": "Solve the event for both bounds and use the actual mean and square-root variance in standardization.",
        "1": "Solve the event for both bounds and use the actual mean and square-root variance in standardization.",
        "3": "Solve the event for both bounds and use the actual mean and square-root variance in standardization.",
        "4": "Solve the event for both bounds and use the actual mean and square-root variance in standardization."
      },
      "skills": [
        "transform a nonlinear event",
        "normal interval probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: transform a nonlinear event, normal interval probability.",
        "Solve the quadratic event: 8<X<16. Both endpoints contribute to the probability."
      ],
      "verification": {
        "kind": "normal",
        "mu": 13,
        "sd": 3,
        "lo": 8,
        "hi": 16,
        "target": "quadratic-interval"
      },
      "level": "challenge",
      "id": "exam:urv-c5-normal:1",
      "topicId": "urv-c5-normal",
      "family": "normal-quadratic"
    }
  ],
  "urv-d1-conditional-discrete": [
    {
      "question": "5 independent insureds each have claim probability 0.3. Let N count insureds with a claim. Given N>0, calculate E[N]. Round your answer to four decimal places.",
      "choices": [
        "$1.2020$",
        "$1.2479$",
        "$1.5000$",
        "$1.8030$",
        "$2.1429$"
      ],
      "answer": 3,
      "solution": [
        "N is binomial with mean 1.5 and zero probability 0.16807.",
        "The N=0 outcome contributes zero to the unconditional first moment, so the positive-count moment numerator remains E[N].",
        "Renormalize by P(N>0): 1.5/0.83193=1.803036."
      ],
      "feedback": {
        "0": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
        "1": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
        "2": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
        "4": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0)."
      },
      "skills": [
        "binomial mean",
        "zero truncation",
        "conditional expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: binomial mean, zero truncation, conditional expectation.",
        "N is binomial with mean 1.5 and zero probability 0.16807."
      ],
      "verification": {
        "kind": "binomial",
        "n": 5,
        "p": 0.30000000000000004,
        "target": "positive-mean"
      },
      "level": "challenge",
      "id": "exam:urv-d1-conditional-discrete:0",
      "topicId": "urv-d1-conditional-discrete",
      "family": "conditional-binomial-mean"
    },
    {
      "question": "6 independent policies each have claim probability 0.25. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
      "choices": [
        "$0.7759$",
        "$1.1250$",
        "$1.3686$",
        "$1.8557$",
        "$4.1057$"
      ],
      "answer": 0,
      "solution": [
        "Unconditionally E[N]=1.5 and E[N²]=np(1-p)+(np)²=3.375.",
        "The condition probability is 0.822021. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
        "Conditional variance is 3.375/0.822021-(1.5/0.822021)²=0.775947."
      ],
      "feedback": {
        "1": "Renormalize both raw moments and square the conditional mean; conditional variance is not simply unconditional variance divided by the condition probability.",
        "2": "Renormalize both raw moments and square the conditional mean; conditional variance is not simply unconditional variance divided by the condition probability.",
        "3": "Renormalize both raw moments and square the conditional mean; conditional variance is not simply unconditional variance divided by the condition probability.",
        "4": "Renormalize both raw moments and square the conditional mean; conditional variance is not simply unconditional variance divided by the condition probability."
      },
      "skills": [
        "zero-truncated distribution",
        "first and second moments",
        "conditional variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-truncated distribution, first and second moments, conditional variance.",
        "Unconditionally E[N]=1.5 and E[N²]=np(1-p)+(np)²=3.375."
      ],
      "verification": {
        "kind": "binomial",
        "n": 6,
        "p": 0.25,
        "target": "positive-variance"
      },
      "level": "challenge",
      "id": "exam:urv-d1-conditional-discrete:1",
      "topicId": "urv-d1-conditional-discrete",
      "family": "conditional-binomial-variance"
    }
  ],
  "urv-d2-conditional-continuous": [
    {
      "question": "Loss X has density f(x)=2x/36 on (0,6) and zero elsewhere. A claim is recorded only when X>2. Calculate the mean loss among recorded claims. Round your answer to four decimal places.",
      "choices": [
        "$3.4239$",
        "$3.8519$",
        "$4.0000$",
        "$4.3333$",
        "$5.0970$"
      ],
      "answer": 3,
      "solution": [
        "The recording probability is 1-(2/6)²=0.888889.",
        "The restricted first-moment integral is the integral of x(2x/36) from 2 to 6, equal to 3.851852.",
        "Normalize to the recorded population: 3.851852/0.888889=4.333333."
      ],
      "feedback": {
        "0": "Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed.",
        "1": "Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed.",
        "2": "Weight by the increasing density and divide by the recording probability; the retained values are not uniformly distributed.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "conditional density",
        "truncated first moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional density, truncated first moment.",
        "The recording probability is 1-(2/6)²=0.888889."
      ],
      "verification": {
        "kind": "power-density",
        "L": 6,
        "power": 1,
        "lower": 2,
        "target": "conditional-mean"
      },
      "level": "challenge",
      "id": "exam:urv-d2-conditional-continuous:0",
      "topicId": "urv-d2-conditional-continuous",
      "family": "continuous-conditional-mean"
    },
    {
      "question": "X has density f(x)=a+bx on (0,3) and zero elsewhere. The unknown constants satisfy a:b=0.5:0.2. Given X>1.5, calculate P(X>2.4). Round your answer to four decimal places.",
      "choices": [
        "$0.2000$",
        "$0.2600$",
        "$0.3337$",
        "$0.4379$",
        "$0.5393$"
      ],
      "answer": 3,
      "solution": [
        "Write a=0.5c and b=0.2c. Normalizing the density gives c=1/2.4.",
        "The CDF on the support is F(x)=0.208333x+(0.083333/2)x².",
        "Divide the tail above 2.4 by the tail above 1.5: 0.26/0.59375=0.437895."
      ],
      "feedback": {
        "0": "Normalize the nonuniform density, integrate the relevant tails, then divide by the condition probability.",
        "1": "Normalize the nonuniform density, integrate the relevant tails, then divide by the condition probability.",
        "2": "Normalize the nonuniform density, integrate the relevant tails, then divide by the condition probability.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "density normalization",
        "nonuniform integration",
        "conditioning"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: density normalization, nonuniform integration, conditioning.",
        "Write a=0.5c and b=0.2c. Normalizing the density gives c=1/2.4."
      ],
      "verification": {
        "kind": "linear-density",
        "L": 3,
        "A": 0.20833333333333331,
        "B": 0.08333333333333333,
        "t": 1.5,
        "u": 2.4000000000000004,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "exam:urv-d2-conditional-continuous:1",
      "topicId": "urv-d2-conditional-continuous",
      "family": "density-infer-conditional"
    }
  ],
  "urv-e1-expected-value": [
    {
      "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-1.4). A policy pays 400 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
      "choices": [
        "$160.0000$",
        "$258.6388$",
        "$301.3612$",
        "$302.6344$",
        "$560.0000$"
      ],
      "answer": 1,
      "solution": [
        "P(N=0)=exp(-λ) identifies λ=1.4.",
        "Payment is 400(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
        "E[Y]=400[λ-1+exp(-λ)]=258.638786."
      ],
      "feedback": {
        "0": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
        "2": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count."
      },
      "skills": [
        "infer a Poisson mean",
        "tail/indicator expectation",
        "aggregate insurance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a Poisson mean, tail/indicator expectation, aggregate insurance.",
        "P(N=0)=exp(-λ) identifies λ=1.4."
      ],
      "verification": {
        "kind": "poisson",
        "lam": 1.4000000000000001,
        "B": 400,
        "target": "excess-payment"
      },
      "level": "challenge",
      "id": "exam:urv-e1-expected-value:0",
      "topicId": "urv-e1-expected-value",
      "family": "poisson-deductible"
    },
    {
      "question": "A device lifetime is exponential with mean 6 years. A contract pays benefit B for failure by year 2, pays 0.4B for failure after year 2 but by year 4, and otherwise pays zero. Its expected payment is 800. Calculate B. Round your answer to four decimal places.",
      "choices": [
        "$291.7715$",
        "$1644.1187$",
        "$2000.0000$",
        "$2193.4974$",
        "$2822.1812$"
      ],
      "answer": 3,
      "solution": [
        "The two covered interval probabilities are 0.283469 and 0.203114.",
        "E[benefit]=B[0.283469+0.4(0.203114)]=0.364714B.",
        "Solve B=800/0.364714=2193.497363."
      ],
      "feedback": {
        "0": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
        "1": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
        "2": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
        "4": "Weight each time interval by its own benefit fraction before solving for the benefit amount."
      },
      "skills": [
        "continuous interval probabilities",
        "piecewise benefit",
        "inverse expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: continuous interval probabilities, piecewise benefit, inverse expectation.",
        "The two covered interval probabilities are 0.283469 and 0.203114."
      ],
      "verification": {
        "kind": "exponential-benefit",
        "mu": 6,
        "t1": 2,
        "t2": 4,
        "fraction": 0.4,
        "meanPay": 800
      },
      "level": "challenge",
      "id": "exam:urv-e1-expected-value:1",
      "topicId": "urv-e1-expected-value",
      "family": "exponential-benefit"
    }
  ],
  "urv-e2-moments": [
    {
      "question": "X has density 2x/4 on (0,2). A benefit is Y=2X²+3. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.8889$",
        "$2.6667$",
        "$5.3333$",
        "$14.3333$",
        "$21.3333$"
      ],
      "answer": 2,
      "solution": [
        "Variance ignores the additive constant, so Var(Y)=4Var(X²).",
        "Integrating the density gives E[X²]=2 and E[X⁴]=5.333333.",
        "Var(Y)=4(E[X⁴]-(E[X²])²)=5.333333."
      ],
      "feedback": {
        "0": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
        "1": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
        "3": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
        "4": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift."
      },
      "skills": [
        "transformed moments",
        "fourth moment",
        "variance scaling"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: transformed moments, fourth moment, variance scaling.",
        "Variance ignores the additive constant, so Var(Y)=4Var(X²)."
      ],
      "verification": {
        "kind": "power-transform",
        "L": 2,
        "power": 1,
        "a": 2,
        "b": 3,
        "target": "variance-square"
      },
      "level": "challenge",
      "id": "exam:urv-e2-moments:0",
      "topicId": "urv-e2-moments",
      "family": "quadratic-moment"
    },
    {
      "question": "Independent X,Y have means 10,16 and variances 5,9, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
      "choices": [
        "$101.0000$",
        "$126.0000$",
        "$512.0000$",
        "$529.0000$",
        "$630.0000$"
      ],
      "answer": 4,
      "solution": [
        "Linearity gives E[T]=2(10)-3(16)+5=-23.",
        "Independence gives Var(T)=4(5)+9(9)=101; the constant contributes zero variance.",
        "E[T²]=Var(T)+(E[T])²=101+529=630."
      ],
      "feedback": {
        "0": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
        "1": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
        "2": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
        "3": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance."
      },
      "skills": [
        "linear expectation",
        "independent variance",
        "raw second moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: linear expectation, independent variance, raw second moment.",
        "Linearity gives E[T]=2(10)-3(16)+5=-23."
      ],
      "verification": {
        "kind": "linear-moments",
        "mx": 10,
        "my": 16,
        "vx": 5,
        "vy": 9,
        "a": 2,
        "b": -3,
        "shift": 5,
        "target": "second"
      },
      "level": "challenge",
      "id": "exam:urv-e2-moments:1",
      "topicId": "urv-e2-moments",
      "family": "linear-second-moment"
    }
  ],
  "urv-e3-mode-median-percentiles": [
    {
      "question": "X has density proportional to x^3 on (0,9) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
      "choices": [
        "$2.4930$",
        "$5.4000$",
        "$6.0187$",
        "$7.9210$",
        "$8.5117$"
      ],
      "answer": 0,
      "solution": [
        "Normalize the density: f(x)=4x^3/6561, so F(x)=(x/9)^4.",
        "Solve F(q)=u to get q(u)=9u^(1/4).",
        "The requested difference is 9[0.8^(1/4)-0.2^(1/4)]=2.493012."
      ],
      "feedback": {
        "1": "Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter.",
        "2": "Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter.",
        "3": "Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter.",
        "4": "Invert the CDF for each percentile separately; density normalization and nonlinear inversion both matter."
      },
      "skills": [
        "normalize a density",
        "invert CDF",
        "quantile comparison"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: normalize a density, invert CDF, quantile comparison.",
        "Normalize the density: f(x)=4x^3/6561, so F(x)=(x/9)^4."
      ],
      "verification": {
        "kind": "power-density",
        "L": 9,
        "power": 3,
        "low": 0.2,
        "high": 0.8,
        "target": "quantile-difference"
      },
      "level": "challenge",
      "id": "exam:urv-e3-mode-median-percentiles:0",
      "topicId": "urv-e3-mode-median-percentiles",
      "family": "power-quantile-difference"
    },
    {
      "question": "Loss X is normal with mean 100. Its 80th percentile is 116.83242467, rounded to eight decimal places. Calculate P(X>130.0). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
      "choices": [
        "$0.0668$",
        "$0.2000$",
        "$0.2551$",
        "$0.4701$",
        "$0.9332$"
      ],
      "answer": 0,
      "solution": [
        "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=20.",
        "The threshold has z=(130.0-100)/20=1.5.",
        "Use the upper tail 1-Φ(1.5)=0.066807."
      ],
      "feedback": {
        "1": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile.",
        "2": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile.",
        "3": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile.",
        "4": "Infer SD from the percentile first, then standardize around the mean rather than around the percentile."
      },
      "skills": [
        "infer normal scale",
        "standardize",
        "select tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer normal scale, standardize, select tail.",
        "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=20."
      ],
      "verification": {
        "kind": "normal",
        "mu": 100,
        "sd": 20,
        "t": 130.0,
        "target": "tail-from-quantile"
      },
      "level": "challenge",
      "id": "exam:urv-e3-mode-median-percentiles:1",
      "topicId": "urv-e3-mode-median-percentiles",
      "family": "normal-quantile-infer"
    }
  ],
  "urv-f1-variance": [
    {
      "question": "A policy has no claim with probability 0.7 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1600). The insurer pays the positive excess over a deductible of 400. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
      "choices": [
        "$299.6248$",
        "$47250.0000$",
        "$89775.0000$",
        "$108000.0000$",
        "$157500.0000$"
      ],
      "answer": 2,
      "solution": [
        "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000.",
        "Include no-claim policies by multiplying each raw moment by claim probability 0.3: E[Y]=135, E[Y²]=108000.",
        "The per-policy variance is 108000-(135)²=89775."
      ],
      "feedback": {
        "0": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation.",
        "1": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation.",
        "3": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation.",
        "4": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation."
      },
      "skills": [
        "claim occurrence mixture",
        "deductible integration",
        "total variability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: claim occurrence mixture, deductible integration, total variability.",
        "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000."
      ],
      "verification": {
        "kind": "policy-mixture",
        "p": 0.30000000000000004,
        "B": 1600,
        "d": 400.0,
        "target": "payment-variance"
      },
      "level": "challenge",
      "id": "exam:urv-f1-variance:0",
      "topicId": "urv-f1-variance",
      "family": "mixture-variance"
    },
    {
      "question": "X has density 2x/16 on (0,4). A benefit is Y=1X²+4. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.8889$",
        "$21.3333$",
        "$24.9870$",
        "$37.3333$",
        "$85.3333$"
      ],
      "answer": 1,
      "solution": [
        "Variance ignores the additive constant, so Var(Y)=1Var(X²).",
        "Integrating the density gives E[X²]=8 and E[X⁴]=85.333333.",
        "Var(Y)=1(E[X⁴]-(E[X²])²)=21.333333."
      ],
      "feedback": {
        "0": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
        "4": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift."
      },
      "skills": [
        "transformed moments",
        "fourth moment",
        "variance scaling"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: transformed moments, fourth moment, variance scaling.",
        "Variance ignores the additive constant, so Var(Y)=1Var(X²)."
      ],
      "verification": {
        "kind": "power-transform",
        "L": 4,
        "power": 1,
        "a": 1,
        "b": 4,
        "target": "variance-square"
      },
      "level": "challenge",
      "id": "exam:urv-f1-variance:1",
      "topicId": "urv-f1-variance",
      "family": "quadratic-moment"
    }
  ],
  "urv-f2-standard-deviation": [
    {
      "question": "X is uniform on (0,1200). Insurer payment is Y=min(0.75 max(X-240,0),600). Calculate the standard deviation of Y per loss. Round your answer to four decimal places.",
      "choices": [
        "$222.7106$",
        "$259.8076$",
        "$280.0000$",
        "$357.7709$",
        "$49600.0000$"
      ],
      "answer": 0,
      "solution": [
        "Payment is zero through 240, grows at rate 0.75 until loss 1040, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=280 and E[Y²]=128000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=49600.",
        "Take the square root of the variance to get SD(Y)=222.710575."
      ],
      "feedback": {
        "1": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
        "2": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
        "3": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
        "4": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities."
      },
      "skills": [
        "piecewise moments",
        "cap mass",
        "standard deviation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: piecewise moments, cap mass, standard deviation.",
        "Payment is zero through 240, grows at rate 0.75 until loss 1040, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1200,
        "d": 240.0,
        "share": 0.75,
        "cap": 600.0,
        "inflation": 1,
        "target": "sd"
      },
      "level": "challenge",
      "id": "exam:urv-f2-standard-deviation:0",
      "topicId": "urv-f2-standard-deviation",
      "family": "uniform-payment-sd"
    },
    {
      "question": "A policy has no claim with probability 0.7 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1200). The insurer pays the positive excess over a deductible of 300. Calculate the annual payment standard deviation per policy. Round your answer to four decimal places.",
      "choices": [
        "$101.2500$",
        "$163.0280$",
        "$224.7186$",
        "$297.6470$",
        "$50498.4375$"
      ],
      "answer": 2,
      "solution": [
        "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500.",
        "Include no-claim policies by multiplying each raw moment by claim probability 0.3: E[Y]=101.25, E[Y²]=60750.",
        "The per-policy variance is 60750-(101.25)²=50498.4375.",
        "The square root of the per-policy variance is 224.718574."
      ],
      "feedback": {
        "0": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
        "1": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
        "3": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
        "4": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation."
      },
      "skills": [
        "occurrence/severity mixture",
        "payment variance",
        "SD"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: occurrence/severity mixture, payment variance, SD.",
        "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500."
      ],
      "verification": {
        "kind": "policy-mixture",
        "p": 0.30000000000000004,
        "B": 1200,
        "d": 300.0,
        "target": "payment-sd"
      },
      "level": "challenge",
      "id": "exam:urv-f2-standard-deviation:1",
      "topicId": "urv-f2-standard-deviation",
      "family": "mixture-payment-sd"
    }
  ],
  "urv-f3-coefficient-variation": [
    {
      "question": "Positive loss X has mean 60 and standard deviation 15. Adjusted cost is Y=1.2X+b. If Y has coefficient of variation 0.25 and positive mean, calculate b. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0270$",
        "$0.0540$",
        "$0.0810$",
        "$72.0000$"
      ],
      "answer": 0,
      "solution": [
        "Linear scaling gives SD(Y)=1.2(15)=18; a constant adds no variance.",
        "CV(Y)=SD(Y)/E[Y] implies E[Y]=18/0.25=72.",
        "Solve 1.2(60)+b=72, giving b=0."
      ],
      "feedback": {
        "1": "Recheck the setup and the requested quantity before evaluating the formula.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance."
      },
      "skills": [
        "SD scaling",
        "CV",
        "inverse affine parameter"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: SD scaling, CV, inverse affine parameter.",
        "Linear scaling gives SD(Y)=1.2(15)=18; a constant adds no variance."
      ],
      "verification": {
        "kind": "affine-cv",
        "mean": 60,
        "sd": 15,
        "a": 1.2,
        "targetCV": 0.25
      },
      "level": "challenge",
      "id": "exam:urv-f3-coefficient-variation:0",
      "topicId": "urv-f3-coefficient-variation",
      "family": "affine-cv-infer"
    },
    {
      "question": "X is uniform on (0,1200). Insurer payment is Y=min(0.75 max(X-240,0),600). Calculate the coefficient of variation of Y per loss. Round your answer to four decimal places.",
      "choices": [
        "$0.3712$",
        "$0.5774$",
        "$0.7954$",
        "$1.2572$",
        "$177.1429$"
      ],
      "answer": 2,
      "solution": [
        "Payment is zero through 240, grows at rate 0.75 until loss 1040, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=280 and E[Y²]=128000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=49600.",
        "CV(Y)=SD(Y)/E[Y]=222.710575/280=0.795395."
      ],
      "feedback": {
        "0": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
        "1": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
        "3": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
        "4": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule."
      },
      "skills": [
        "transformed moments",
        "SD",
        "relative variability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: transformed moments, SD, relative variability.",
        "Payment is zero through 240, grows at rate 0.75 until loss 1040, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1200,
        "d": 240.0,
        "share": 0.75,
        "cap": 600.0,
        "inflation": 1,
        "target": "cv"
      },
      "level": "challenge",
      "id": "exam:urv-f3-coefficient-variation:1",
      "topicId": "urv-f3-coefficient-variation",
      "family": "uniform-payment-cv"
    }
  ],
  "urv-g1-deductibles": [
    {
      "question": "A loss X is uniform on (0,1600). A policy pays the positive excess above an ordinary deductible d, with no other limits. Expected payment is 0.36 times the mean loss. Calculate d. Round your answer to four decimal places.",
      "choices": [
        "$576.0000$",
        "$640.0000$",
        "$800.0000$",
        "$960.0000$",
        "$1024.0000$"
      ],
      "answer": 1,
      "solution": [
        "E[X]=1600/2. Integrating the deductible payment gives E[(X-d)₊]=(1600-d)²/(2×1600).",
        "Set the ratio to 0.36: ((1600-d)/1600)²=0.36.",
        "The admissible deductible lies between 0 and 1600: d=1600(1-√0.36)=640."
      ],
      "feedback": {
        "0": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "2": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "3": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "4": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction."
      },
      "skills": [
        "uniform integration",
        "inverse insurance parameter"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: uniform integration, inverse insurance parameter.",
        "E[X]=1600/2. Integrating the deductible payment gives E[(X-d)₊]=(1600-d)²/(2×1600)."
      ],
      "verification": {
        "kind": "uniform-deductible",
        "B": 1600,
        "ratio": 0.36,
        "target": "deductible"
      },
      "level": "challenge",
      "id": "exam:urv-g1-deductibles:0",
      "topicId": "urv-g1-deductibles",
      "family": "uniform-infer-deductible"
    },
    {
      "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-200)₊] to E[X] is 0.71653131, rounded to eight decimal places. Calculate P(X>400). Round your answer to four decimal places.",
      "choices": [
        "$0.1353$",
        "$0.4866$",
        "$0.5134$",
        "$0.6277$",
        "$0.7165$"
      ],
      "answer": 2,
      "solution": [
        "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
        "The positive mean is μ=600; survival beyond 400 is exp(-400/600).",
        "The probability is 0.513417."
      ],
      "feedback": {
        "0": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
        "1": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold."
      },
      "skills": [
        "inverse moment parameter",
        "exponential survival"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: inverse moment parameter, exponential survival.",
        "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean."
      ],
      "verification": {
        "kind": "exponential",
        "mu": 600,
        "d": 200,
        "threshold": 400,
        "target": "tail-from-deductible"
      },
      "level": "challenge",
      "id": "exam:urv-g1-deductibles:1",
      "topicId": "urv-g1-deductibles",
      "family": "exponential-infer"
    }
  ],
  "urv-g2-coinsurance": [
    {
      "question": "Loss X is uniform on (0,1800). Payment is Y=c max(X-360,0), where the insurer share c is unknown. Mean payment per loss is 432. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$124416.0000$",
        "$151875.0000$",
        "$165888.0000$",
        "$186624.0000$",
        "$414720.0000$"
      ],
      "answer": 0,
      "solution": [
        "Before coinsurance, the deductible payment mean is (1800-360)²/(2×1800)=576.",
        "The given mean identifies c=0.75. The deductible-payment second moment is (1800-360)³/(3×1800).",
        "Variance is c² times the deductible-payment variance, giving 124416."
      ],
      "feedback": {
        "1": "Recover the insurer share from the mean, then square that share when scaling the deductible-payment variance.",
        "2": "Recover the insurer share from the mean, then square that share when scaling the deductible-payment variance.",
        "3": "Recover the insurer share from the mean, then square that share when scaling the deductible-payment variance.",
        "4": "Recover the insurer share from the mean, then square that share when scaling the deductible-payment variance."
      },
      "skills": [
        "infer coinsurance",
        "payment moments",
        "variance scaling"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer coinsurance, payment moments, variance scaling.",
        "Before coinsurance, the deductible payment mean is (1800-360)²/(2×1800)=576."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1800,
        "d": 360.0,
        "share": 0.75,
        "cap": 180000,
        "inflation": 1,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-g2-coinsurance:0",
      "topicId": "urv-g2-coinsurance",
      "family": "coinsurance-infer"
    },
    {
      "question": "X is uniform on (0,2000). Payment is Y=min(0.8 max(X-500,0),L). The probability of a payment exactly equal to the positive cap L is 0.375. Calculate L. Round your answer to four decimal places.",
      "choices": [
        "$450.0000$",
        "$600.0000$",
        "$702.0270$",
        "$750.0000$",
        "$1250.0000$"
      ],
      "answer": 1,
      "solution": [
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/2000.",
        "Set this probability to 0.375 and solve the loss threshold as 2000(1-0.375)=1250.",
        "L=0.8(1250-500)=600."
      ],
      "feedback": {
        "0": "Use the mass at the final payment cap to identify the loss threshold, then apply coinsurance to its excess above the deductible.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "Use the mass at the final payment cap to identify the loss threshold, then apply coinsurance to its excess above the deductible.",
        "4": "Use the mass at the final payment cap to identify the loss threshold, then apply coinsurance to its excess above the deductible."
      },
      "skills": [
        "payment atom",
        "inverse cap",
        "coinsurance order"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: payment atom, inverse cap, coinsurance order.",
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/2000."
      ],
      "verification": {
        "kind": "uniform-cap-infer",
        "B": 2000,
        "d": 500.0,
        "share": 0.8,
        "mass": 0.375
      },
      "level": "challenge",
      "id": "exam:urv-g2-coinsurance:1",
      "topicId": "urv-g2-coinsurance",
      "family": "cap-infer"
    }
  ],
  "urv-g3-benefit-limits": [
    {
      "question": "X is uniform on (0,1600). Payment is Y=min(0.8 max(X-400,0),L). The probability of a payment exactly equal to the positive cap L is 0.375. Calculate L. Round your answer to four decimal places.",
      "choices": [
        "$360.0000$",
        "$480.0000$",
        "$561.6270$",
        "$600.0000$",
        "$1000.0000$"
      ],
      "answer": 1,
      "solution": [
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/1600.",
        "Set this probability to 0.375 and solve the loss threshold as 1600(1-0.375)=1000.",
        "L=0.8(1000-400)=480."
      ],
      "feedback": {
        "0": "Use the mass at the final payment cap to identify the loss threshold, then apply coinsurance to its excess above the deductible.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "Use the mass at the final payment cap to identify the loss threshold, then apply coinsurance to its excess above the deductible.",
        "4": "Use the mass at the final payment cap to identify the loss threshold, then apply coinsurance to its excess above the deductible."
      },
      "skills": [
        "payment atom",
        "inverse cap",
        "coinsurance order"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: payment atom, inverse cap, coinsurance order.",
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/1600."
      ],
      "verification": {
        "kind": "uniform-cap-infer",
        "B": 1600,
        "d": 400.0,
        "share": 0.8,
        "mass": 0.375
      },
      "level": "challenge",
      "id": "exam:urv-g3-benefit-limits:0",
      "topicId": "urv-g3-benefit-limits",
      "family": "cap-infer"
    },
    {
      "question": "Loss X is exponential with mean 1400. Payment is Y=min(0.75 max(X-300,0),500). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
      "choices": [
        "$321.0695$",
        "$397.7976$",
        "$500.0000$",
        "$847.4736$",
        "$1050.0000$"
      ],
      "answer": 1,
      "solution": [
        "Positive payment occurs exactly when X>300, with probability exp(-300/1400)=0.807118.",
        "Using survival integration up to the final payment cap gives E[Y]=0.75(1400)[exp(-300/1400)-exp(-(300+500/0.75)/1400)]=321.06949.",
        "The per-payment mean is E[Y]/P(Y>0)=397.797585."
      ],
      "feedback": {
        "0": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "2": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "3": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "4": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean."
      },
      "skills": [
        "exponential loss",
        "capped payment",
        "per-loss versus per-payment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exponential loss, capped payment, per-loss versus per-payment.",
        "Positive payment occurs exactly when X>300, with probability exp(-300/1400)=0.807118."
      ],
      "verification": {
        "kind": "exp-payment",
        "mu": 1400,
        "d": 300,
        "share": 0.75,
        "cap": 500,
        "target": "positive-mean"
      },
      "level": "challenge",
      "id": "exam:urv-g3-benefit-limits:1",
      "topicId": "urv-g3-benefit-limits",
      "family": "payment-per-payment"
    }
  ],
  "urv-g4-inflation": [
    {
      "question": "Original loss X is uniform on (0,1200). Losses rise by 25%, while an ordinary deductible of 360 and a final payment cap of 600 stay fixed. The insurer pays 80% of the inflated excess above the deductible, subject to that cap. Calculate expected payment per original loss. Round your answer to four decimal places.",
      "choices": [
        "$290.6250$",
        "$306.0000$",
        "$312.0000$",
        "$346.5600$",
        "$600.0000$"
      ],
      "answer": 1,
      "solution": [
        "Inflated loss is uniform on (0,1500). The zero-payment boundary is 360 and the cap is reached at inflated loss 1110.",
        "Integrate 0.8(x-d) over the intermediate region with density 1/1500, then add cap times its survival probability 0.26.",
        "The resulting expected payment is 306. Policy terms were not inflated."
      ],
      "feedback": {
        "0": "Inflate the loss distribution first. Fixed deductible and cap must then be applied inside the expectation, with a cap-mass contribution.",
        "2": "Inflate the loss distribution first. Fixed deductible and cap must then be applied inside the expectation, with a cap-mass contribution.",
        "3": "Inflate the loss distribution first. Fixed deductible and cap must then be applied inside the expectation, with a cap-mass contribution.",
        "4": "Inflate the loss distribution first. Fixed deductible and cap must then be applied inside the expectation, with a cap-mass contribution."
      },
      "skills": [
        "inflation",
        "fixed policy terms",
        "piecewise expected payment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: inflation, fixed policy terms, piecewise expected payment.",
        "Inflated loss is uniform on (0,1500). The zero-payment boundary is 360 and the cap is reached at inflated loss 1110."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1200,
        "d": 360.0,
        "share": 0.8,
        "cap": 600.0,
        "inflation": 1.25,
        "target": "mean"
      },
      "level": "challenge",
      "id": "exam:urv-g4-inflation:0",
      "topicId": "urv-g4-inflation",
      "family": "inflation-payment-mean"
    },
    {
      "question": "Original loss X is exponential with mean 800. Payment after 20% loss inflation is Y=min(0.8 max(1.2X-250,0),900). Given a positive payment, calculate P(Y>450). Round your answer to four decimal places.",
      "choices": [
        "$0.4290$",
        "$0.4434$",
        "$0.4950$",
        "$0.5566$",
        "$0.5698$"
      ],
      "answer": 3,
      "solution": [
        "Since 450 is below the final cap, Y>450 is equivalent to X>(250+450/0.8)/1.2=677.083333.",
        "Positive payment requires X>250/1.2. Use the ratio of the corresponding exponential survival probabilities.",
        "The ratio simplifies to exp(-450/(0.8×1.2×800))=0.556584. The deductible cancels only because of exponential memorylessness."
      ],
      "feedback": {
        "0": "Transform the threshold using inflation and coinsurance, then condition on positive payment. Do not inflate fixed policy terms.",
        "1": "Transform the threshold using inflation and coinsurance, then condition on positive payment. Do not inflate fixed policy terms.",
        "2": "Transform the threshold using inflation and coinsurance, then condition on positive payment. Do not inflate fixed policy terms.",
        "4": "Transform the threshold using inflation and coinsurance, then condition on positive payment. Do not inflate fixed policy terms."
      },
      "skills": [
        "inflation and policy order",
        "payment event inversion",
        "conditional exponential tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: inflation and policy order, payment event inversion, conditional exponential tail.",
        "Since 450 is below the final cap, Y>450 is equivalent to X>(250+450/0.8)/1.2=677.083333."
      ],
      "verification": {
        "kind": "inflated-exp-tail",
        "mu": 800,
        "inflation": 1.2,
        "d": 250,
        "share": 0.8,
        "cap": 900,
        "threshold": 450
      },
      "level": "challenge",
      "id": "exam:urv-g4-inflation:1",
      "topicId": "urv-g4-inflation",
      "family": "inflation-tail"
    }
  ],
  "urv-h1-loss-variable": [
    {
      "question": "A policy has no claim with probability 0.75 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1400). The insurer pays the positive excess over a deductible of 350. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
      "choices": [
        "$243.3440$",
        "$30146.4844$",
        "$59216.3086$",
        "$68906.2500$",
        "$120585.9375$"
      ],
      "answer": 2,
      "solution": [
        "Conditional on a claim, the deductible payment has first moment (1400-350)²/(2×1400)=393.75 and second moment (1400-350)³/(3×1400)=275625.",
        "Include no-claim policies by multiplying each raw moment by claim probability 0.25: E[Y]=98.4375, E[Y²]=68906.25.",
        "The per-policy variance is 68906.25-(98.4375)²=59216.308594."
      ],
      "feedback": {
        "0": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation.",
        "1": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation.",
        "3": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation.",
        "4": "The zero-claim population changes both moments. Multiplying the conditional variance by claim probability omits the between-group variation."
      },
      "skills": [
        "claim occurrence mixture",
        "deductible integration",
        "total variability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: claim occurrence mixture, deductible integration, total variability.",
        "Conditional on a claim, the deductible payment has first moment (1400-350)²/(2×1400)=393.75 and second moment (1400-350)³/(3×1400)=275625."
      ],
      "verification": {
        "kind": "policy-mixture",
        "p": 0.25,
        "B": 1400,
        "d": 350.0,
        "target": "payment-variance"
      },
      "level": "challenge",
      "id": "exam:urv-h1-loss-variable:0",
      "topicId": "urv-h1-loss-variable",
      "family": "mixture-variance"
    },
    {
      "question": "An insured belongs permanently to class A with probability 0.4 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 3 for A or 6 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
      "choices": [
        "$2.1600$",
        "$4.8000$",
        "$6.9600$",
        "$23.0400$",
        "$25.2000$"
      ],
      "answer": 2,
      "solution": [
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.8.",
        "The conditional means themselves vary: Var(E[N given class])=2.16.",
        "Total variance adds these two components, giving 6.96. The unconditional mixture is not Poisson."
      ],
      "feedback": {
        "0": "Average within-class variance alone misses the variation between class means; apply total variance.",
        "1": "Average within-class variance alone misses the variation between class means; apply total variance.",
        "3": "Average within-class variance alone misses the variation between class means; apply total variance.",
        "4": "Average within-class variance alone misses the variation between class means; apply total variance."
      },
      "skills": [
        "conditional moments",
        "total variance",
        "Poisson mixture"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional moments, total variance, Poisson mixture.",
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.8."
      ],
      "verification": {
        "kind": "poisson-class",
        "w": 0.4,
        "rates": [
          3,
          6
        ],
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-h1-loss-variable:1",
      "topicId": "urv-h1-loss-variable",
      "family": "total-variance-mixture"
    }
  ],
  "urv-h2-payment-variable": [
    {
      "question": "Loss X is exponential with mean 1400. Payment is Y=min(0.75 max(X-400,0),600). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
      "choices": [
        "$343.4597$",
        "$457.0460$",
        "$600.0000$",
        "$789.0512$",
        "$1050.0000$"
      ],
      "answer": 1,
      "solution": [
        "Positive payment occurs exactly when X>400, with probability exp(-400/1400)=0.751477.",
        "Using survival integration up to the final payment cap gives E[Y]=0.75(1400)[exp(-400/1400)-exp(-(400+600/0.75)/1400)]=343.45967.",
        "The per-payment mean is E[Y]/P(Y>0)=457.045972."
      ],
      "feedback": {
        "0": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "2": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "3": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "4": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean."
      },
      "skills": [
        "exponential loss",
        "capped payment",
        "per-loss versus per-payment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exponential loss, capped payment, per-loss versus per-payment.",
        "Positive payment occurs exactly when X>400, with probability exp(-400/1400)=0.751477."
      ],
      "verification": {
        "kind": "exp-payment",
        "mu": 1400,
        "d": 400,
        "share": 0.75,
        "cap": 600,
        "target": "positive-mean"
      },
      "level": "challenge",
      "id": "exam:urv-h2-payment-variable:0",
      "topicId": "urv-h2-payment-variable",
      "family": "payment-per-payment"
    },
    {
      "question": "A loss fraction X has probability 0.1 at 0 and 0.3 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.5, calculate the probability X=1. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.3000$",
        "$0.3333$",
        "$0.5000$",
        "$0.6120$"
      ],
      "answer": 3,
      "solution": [
        "The continuous component has weight 0.6, so its mass above 0.5 is 0.3.",
        "The conditioning event also includes the atom at 1; its total probability is 0.6.",
        "Divide the atom mass by that total: 0.3/0.6=0.5."
      ],
      "feedback": {
        "0": "The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous.",
        "1": "The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous.",
        "2": "The jump at 1 is positive probability. Include it in the condition instead of treating the full distribution as continuous.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "CDF jumps",
        "mixed distribution",
        "conditional atom"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF jumps, mixed distribution, conditional atom.",
        "The continuous component has weight 0.6, so its mass above 0.5 is 0.3."
      ],
      "verification": {
        "kind": "mixed-cdf",
        "p0": 0.1,
        "p1": 0.30000000000000004,
        "cut": 0.5,
        "target": "atom-conditional"
      },
      "level": "challenge",
      "id": "exam:urv-h2-payment-variable:1",
      "topicId": "urv-h2-payment-variable",
      "family": "cdf-atom-conditional"
    }
  ],
  "urv-h3-moments-loss-payment": [
    {
      "question": "A loss has exponential mean 800. The insurer pays Y=min(0.8 max(X-400,0),500). Calculate the variance of payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$217.6514$",
        "$44292.5869$",
        "$47372.1239$",
        "$91664.7108$",
        "$409600.0000$"
      ],
      "answer": 2,
      "solution": [
        "For 0<y<500, P(Y>y)=exp(-(400+y/0.8)/800). There is zero mass 0.393469 and a cap mass exp(-(400+500/0.8)/800).",
        "Use E[Y]=the integral of P(Y>y), and E[Y²]=the integral of 2yP(Y>y), each over (0,500). These give 210.458041 and 91664.710821.",
        "Subtract squared mean: Var(Y)=47372.123881."
      ],
      "feedback": {
        "0": "Include the deductible and payment cap in both payment moments; scaling the original exponential variance omits these transformations.",
        "1": "Include the deductible and payment cap in both payment moments; scaling the original exponential variance omits these transformations.",
        "3": "Include the deductible and payment cap in both payment moments; scaling the original exponential variance omits these transformations.",
        "4": "Include the deductible and payment cap in both payment moments; scaling the original exponential variance omits these transformations."
      },
      "skills": [
        "survival moments",
        "deductible and cap masses",
        "payment variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: survival moments, deductible and cap masses, payment variance.",
        "For 0<y<500, P(Y>y)=exp(-(400+y/0.8)/800). There is zero mass 0.393469 and a cap mass exp(-(400+500/0.8)/800)."
      ],
      "verification": {
        "kind": "exp-payment",
        "mu": 800,
        "d": 400,
        "share": 0.8,
        "cap": 500,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-h3-moments-loss-payment:0",
      "topicId": "urv-h3-moments-loss-payment",
      "family": "exponential-payment-variance"
    },
    {
      "question": "X is uniform on (0,1500). Insurer payment is Y=min(0.75 max(X-300,0),750). Calculate Var(Y) per loss. Round your answer to four decimal places.",
      "choices": [
        "$278.3882$",
        "$77500.0000$",
        "$105468.7500$",
        "$122500.0000$",
        "$200000.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment is zero through 300, grows at rate 0.75 until loss 1300, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=350 and E[Y²]=200000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=77500."
      ],
      "feedback": {
        "0": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss.",
        "2": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss.",
        "3": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss.",
        "4": "Compute the transformed payment moments, including its point masses, instead of scaling the variance of the original uniform loss."
      },
      "skills": [
        "piecewise payment",
        "cap mass",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: piecewise payment, cap mass, variance.",
        "Payment is zero through 300, grows at rate 0.75 until loss 1300, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1500,
        "d": 300.0,
        "share": 0.75,
        "cap": 750.0,
        "inflation": 1,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:urv-h3-moments-loss-payment:1",
      "topicId": "urv-h3-moments-loss-payment",
      "family": "uniform-payment-variance"
    }
  ],
  "mrv-a1-joint-distributions": [
    {
      "question": "For x,y in {0,1,2}, the joint PMF is p(x,y)=k(x+2y+7), and it is zero elsewhere. Given X+Y≥2, calculate P(X>Y). Round your answer to four decimal places.",
      "choices": [
        "$0.2222$",
        "$0.3030$",
        "$0.3111$",
        "$0.7333$",
        "$0.8333$"
      ],
      "answer": 1,
      "solution": [
        "Normalizing all nine cells gives k=1/90.",
        "The conditioning region consists of the cells with x+y≥2; their unnormalized weights total 66. Within that region, cells satisfying x>y have total weight 20.",
        "The normalization constant cancels, so the conditional probability is 20/66=0.30303."
      ],
      "feedback": {
        "0": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
        "2": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
        "3": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
        "4": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement."
      },
      "skills": [
        "joint normalization",
        "nonrectangular event",
        "conditioning"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint normalization, nonrectangular event, conditioning.",
        "Normalizing all nine cells gives k=1/90."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 7,
        "target": "event"
      },
      "level": "challenge",
      "id": "exam:mrv-a1-joint-distributions:0",
      "topicId": "mrv-a1-joint-distributions",
      "family": "joint-table-event"
    },
    {
      "question": "p(x,y)=k(x+2y+5) for x,y in {0,1,2}. Calculate Var(2X-1Y). Independence is not assumed. Round your answer to four decimal places.",
      "choices": [
        "$0.6806$",
        "$1.0000$",
        "$3.2778$",
        "$3.3333$",
        "$4.3333$"
      ],
      "answer": 3,
      "solution": [
        "Normalize with k=1/72. Let T=2X-1Y and evaluate T in each joint cell.",
        "Weighting those values gives E[T]=1 and E[T²]=4.333333.",
        "Var(T)=E[T²]-(E[T])²=3.333333. Equivalently, include the signed covariance term in the linear-combination formula."
      ],
      "feedback": {
        "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
        "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
        "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
        "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
      },
      "skills": [
        "joint transformation",
        "variance with covariance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint transformation, variance with covariance.",
        "Normalize with k=1/72. Let T=2X-1Y and evaluate T in each joint cell."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 5,
        "a": 2,
        "b": -1,
        "target": "linear-variance"
      },
      "level": "challenge",
      "id": "exam:mrv-a1-joint-distributions:1",
      "topicId": "mrv-a1-joint-distributions",
      "family": "joint-linear-variance"
    }
  ],
  "mrv-a2-conditional-distributions": [
    {
      "question": "A collection contains 6 class-A, 6 class-B, and 7 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.2868$",
        "$0.6213$",
        "$0.7456$",
        "$0.8284$",
        "$1.3846$"
      ],
      "answer": 1,
      "solution": [
        "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 6 are B.",
        "The conditional Y distribution is hypergeometric with population 13, success count 6, and sample size 3.",
        "Its variance is 3(6/13)(1-6/13)(13-3)/(13-1)=0.621302."
      ],
      "feedback": {
        "0": "Change the sample size and population after conditioning, and retain the finite-population correction.",
        "2": "Change the sample size and population after conditioning, and retain the finite-population correction.",
        "3": "Change the sample size and population after conditioning, and retain the finite-population correction.",
        "4": "Change the sample size and population after conditioning, and retain the finite-population correction."
      },
      "skills": [
        "condition a multivariate sample",
        "hypergeometric variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: condition a multivariate sample, hypergeometric variance.",
        "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 6 are B."
      ],
      "verification": {
        "kind": "conditional-hypergeom",
        "groups": [
          6,
          6,
          7
        ],
        "n": 5,
        "x": 2,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:mrv-a2-conditional-distributions:0",
      "topicId": "mrv-a2-conditional-distributions",
      "family": "conditional-hypergeom-variance"
    },
    {
      "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+2), with k determined by normalization. Calculate Var(X given Y=2). Round your answer to four decimal places.",
      "choices": [
        "$-0.9932$",
        "$0.6576$",
        "$0.7619$",
        "$1.0952$",
        "$1.8571$"
      ],
      "answer": 1,
      "solution": [
        "On the Y=2 slice, the X weights are 6, 7, 8. Divide by their sum 21 to get the conditional PMF.",
        "The conditional first and second moments are 1.095238 and 1.857143.",
        "Conditional variance is 1.857143-(1.095238)²=0.657596."
      ],
      "feedback": {
        "0": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
        "2": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
        "3": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
        "4": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean."
      },
      "skills": [
        "conditional PMF",
        "conditional moments",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional PMF, conditional moments, variance.",
        "On the Y=2 slice, the X weights are 6, 7, 8. Divide by their sum 21 to get the conditional PMF."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 2,
        "y": 2,
        "target": "conditional-variance"
      },
      "level": "challenge",
      "id": "exam:mrv-a2-conditional-distributions:1",
      "topicId": "mrv-a2-conditional-distributions",
      "family": "joint-table-conditional-moment"
    }
  ],
  "mrv-b1-joint-moments": [
    {
      "question": "An insured belongs permanently to class A with probability 0.5 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 2 for A or 7 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
      "choices": [
        "$4.5000$",
        "$6.2500$",
        "$10.7500$",
        "$20.2500$",
        "$26.5000$"
      ],
      "answer": 2,
      "solution": [
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.5.",
        "The conditional means themselves vary: Var(E[N given class])=6.25.",
        "Total variance adds these two components, giving 10.75. The unconditional mixture is not Poisson."
      ],
      "feedback": {
        "0": "Average within-class variance alone misses the variation between class means; apply total variance.",
        "1": "Average within-class variance alone misses the variation between class means; apply total variance.",
        "3": "Average within-class variance alone misses the variation between class means; apply total variance.",
        "4": "Average within-class variance alone misses the variation between class means; apply total variance."
      },
      "skills": [
        "conditional moments",
        "total variance",
        "Poisson mixture"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional moments, total variance, Poisson mixture.",
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.5."
      ],
      "verification": {
        "kind": "poisson-class",
        "w": 0.5,
        "rates": [
          2,
          7
        ],
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:mrv-b1-joint-moments:0",
      "topicId": "mrv-b1-joint-moments",
      "family": "total-variance-mixture"
    },
    {
      "question": "An insured is type A with probability 0.5, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 1 for A or 5 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
      "choices": [
        "$-4.0000$",
        "$0.0000$",
        "$3.0000$",
        "$4.0000$",
        "$13.0000$"
      ],
      "answer": 3,
      "solution": [
        "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
        "E[XY]=13 and E[X]=E[Y]=3.",
        "Cov(X,Y)=E[XY]-E[X]E[Y]=4."
      ],
      "feedback": {
        "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
        "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
        "2": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
        "4": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means."
      },
      "skills": [
        "conditional independence",
        "mixed moment",
        "latent covariance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional independence, mixed moment, latent covariance.",
        "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence."
      ],
      "verification": {
        "kind": "poisson-class",
        "w": 0.5,
        "rates": [
          1,
          5
        ],
        "target": "covariance"
      },
      "level": "challenge",
      "id": "exam:mrv-b1-joint-moments:1",
      "topicId": "mrv-b1-joint-moments",
      "family": "shared-class-covariance"
    }
  ],
  "mrv-b2-conditional-variance": [
    {
      "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+5), with k determined by normalization. Calculate Var(X given Y=1). Round your answer to four decimal places.",
      "choices": [
        "$-0.9699$",
        "$0.6597$",
        "$0.7500$",
        "$1.0833$",
        "$1.8333$"
      ],
      "answer": 1,
      "solution": [
        "On the Y=1 slice, the X weights are 7, 8, 9. Divide by their sum 24 to get the conditional PMF.",
        "The conditional first and second moments are 1.083333 and 1.833333.",
        "Conditional variance is 1.833333-(1.083333)²=0.659722."
      ],
      "feedback": {
        "0": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
        "2": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
        "3": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
        "4": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean."
      },
      "skills": [
        "conditional PMF",
        "conditional moments",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional PMF, conditional moments, variance.",
        "On the Y=1 slice, the X weights are 7, 8, 9. Divide by their sum 24 to get the conditional PMF."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 5,
        "y": 1,
        "target": "conditional-variance"
      },
      "level": "challenge",
      "id": "exam:mrv-b2-conditional-variance:0",
      "topicId": "mrv-b2-conditional-variance",
      "family": "joint-table-conditional-moment"
    },
    {
      "question": "A collection contains 5 class-A, 8 class-B, and 5 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.3641$",
        "$0.5917$",
        "$0.7101$",
        "$0.7890$",
        "$1.8462$"
      ],
      "answer": 1,
      "solution": [
        "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 8 are B.",
        "The conditional Y distribution is hypergeometric with population 13, success count 8, and sample size 3.",
        "Its variance is 3(8/13)(1-8/13)(13-3)/(13-1)=0.591716."
      ],
      "feedback": {
        "0": "Change the sample size and population after conditioning, and retain the finite-population correction.",
        "2": "Change the sample size and population after conditioning, and retain the finite-population correction.",
        "3": "Change the sample size and population after conditioning, and retain the finite-population correction.",
        "4": "Change the sample size and population after conditioning, and retain the finite-population correction."
      },
      "skills": [
        "condition a multivariate sample",
        "hypergeometric variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: condition a multivariate sample, hypergeometric variance.",
        "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 8 are B."
      ],
      "verification": {
        "kind": "conditional-hypergeom",
        "groups": [
          5,
          8,
          5
        ],
        "n": 5,
        "x": 2,
        "target": "variance"
      },
      "level": "challenge",
      "id": "exam:mrv-b2-conditional-variance:1",
      "topicId": "mrv-b2-conditional-variance",
      "family": "conditional-hypergeom-variance"
    }
  ],
  "mrv-c1-covariance": [
    {
      "question": "X and Y have joint PMF p(x,y)=k(x+2y+2) for x,y in {0,1,2}. Calculate their correlation coefficient. Round your answer to four decimal places.",
      "choices": [
        "$-0.0920$",
        "$-0.0572$",
        "$-0.0356$",
        "$0.0000$",
        "$0.0572$"
      ],
      "answer": 1,
      "solution": [
        "Normalize the nine weights: k=1/45. Joint summation gives E[X]=1.133333, E[Y]=1.266667, E[XY]=1.4.",
        "The marginal variances are 0.648889 and 0.595556, and covariance is E[XY]-E[X]E[Y]=-0.035556.",
        "Correlation is covariance divided by √(Var(X)Var(Y)), giving -0.057195."
      ],
      "feedback": {
        "0": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
        "2": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
        "3": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
        "4": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support."
      },
      "skills": [
        "joint mixed moment",
        "marginal variances",
        "correlation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint mixed moment, marginal variances, correlation.",
        "Normalize the nine weights: k=1/45. Joint summation gives E[X]=1.133333, E[Y]=1.266667, E[XY]=1.4."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 2,
        "target": "correlation"
      },
      "level": "challenge",
      "id": "exam:mrv-c1-covariance:0",
      "topicId": "mrv-c1-covariance",
      "family": "joint-covariance"
    },
    {
      "question": "p(x,y)=k(x+2y+7) for x,y in {0,1,2}. Calculate Var(2X-1Y). Independence is not assumed. Round your answer to four decimal places.",
      "choices": [
        "$0.6756$",
        "$1.0000$",
        "$3.2978$",
        "$3.3333$",
        "$4.3333$"
      ],
      "answer": 3,
      "solution": [
        "Normalize with k=1/90. Let T=2X-1Y and evaluate T in each joint cell.",
        "Weighting those values gives E[T]=1 and E[T²]=4.333333.",
        "Var(T)=E[T²]-(E[T])²=3.333333. Equivalently, include the signed covariance term in the linear-combination formula."
      ],
      "feedback": {
        "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
        "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
        "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
        "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
      },
      "skills": [
        "joint transformation",
        "variance with covariance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint transformation, variance with covariance.",
        "Normalize with k=1/90. Let T=2X-1Y and evaluate T in each joint cell."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 7,
        "a": 2,
        "b": -1,
        "target": "linear-variance"
      },
      "level": "challenge",
      "id": "exam:mrv-c1-covariance:1",
      "topicId": "mrv-c1-covariance",
      "family": "joint-linear-variance"
    }
  ],
  "mrv-d1-order-statistics": [
    {
      "question": "5 independent observations are uniform on (0,12). Let U and V be their minimum and maximum. Calculate P(V-U<3). Round your answer to four decimal places.",
      "choices": [
        "$0.0010$",
        "$0.0039$",
        "$0.0156$",
        "$0.0195$",
        "$0.9844$"
      ],
      "answer": 2,
      "solution": [
        "The joint min–max density is n(n-1)(v-u)^(n-2)/12^5 on 0<u<v<12.",
        "Integrate over the band v-u<3. Equivalently, integrate the range density n(n-1)r^(n-2)(12-r)/12^5 from 0 to 3.",
        "The result is n(3/12)^(n-1)-(n-1)(3/12)^n=0.015625."
      ],
      "feedback": {
        "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
        "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
        "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
        "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
      },
      "skills": [
        "joint order statistics",
        "integration over a band"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint order statistics, integration over a band.",
        "The joint min–max density is n(n-1)(v-u)^(n-2)/12^5 on 0<u<v<12."
      ],
      "verification": {
        "kind": "order-uniform",
        "n": 5,
        "B": 12,
        "r": 3,
        "target": "range"
      },
      "level": "challenge",
      "id": "exam:mrv-d1-order-statistics:0",
      "topicId": "mrv-d1-order-statistics",
      "family": "order-range"
    },
    {
      "question": "7 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.6. Round your answer to four decimal places.",
      "choices": [
        "$0.0078$",
        "$0.5000$",
        "$0.7734$",
        "$0.9037$",
        "$0.9922$"
      ],
      "answer": 2,
      "solution": [
        "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.6 with conditional probability (0.6-0.2)/(1-0.2)=0.5.",
        "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
        "Sum the binomial probabilities from 3 through 7; the result is 0.773437."
      ],
      "feedback": {
        "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
        "1": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
        "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
        "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
      },
      "skills": [
        "condition order statistics",
        "rank-to-count conversion",
        "binomial tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
        "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.6 with conditional probability (0.6-0.2)/(1-0.2)=0.5."
      ],
      "verification": {
        "kind": "order-uniform",
        "n": 7,
        "rank": 3,
        "a": 0.2,
        "b": 0.6,
        "target": "conditional-rank"
      },
      "level": "challenge",
      "id": "exam:mrv-d1-order-statistics:1",
      "topicId": "mrv-d1-order-statistics",
      "family": "order-rank-conditional"
    }
  ],
  "mrv-e1-linear-combinations": [
    {
      "question": "Independent normal X and Y have means 100 and 35. SD(X)=8. The variance of X+Y is 89. Calculate P(X-2Y>42.80624847). Round your answer to four decimal places.",
      "choices": [
        "$0.1587$",
        "$0.2126$",
        "$0.4689$",
        "$0.8413$",
        "$1.0000$"
      ],
      "answer": 0,
      "solution": [
        "Independence gives Var(Y)=Var(X+Y)-Var(X)=89-64=25.",
        "X-2Y is exactly normal with mean 30 and SD √(64+4×25)=12.806248.",
        "The standardized threshold is 1, so the upper-tail probability is 1-Φ(1)=0.158655."
      ],
      "feedback": {
        "1": "Recheck the setup and the requested quantity before evaluating the formula.",
        "2": "Use signed coefficients in the mean and squared coefficients in the independent variance, then standardize with SD.",
        "3": "Use signed coefficients in the mean and squared coefficients in the independent variance, then standardize with SD.",
        "4": "Use signed coefficients in the mean and squared coefficients in the independent variance, then standardize with SD."
      },
      "skills": [
        "infer a component variance",
        "exact normal linear combination",
        "tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a component variance, exact normal linear combination, tail.",
        "Independence gives Var(Y)=Var(X+Y)-Var(X)=89-64=25."
      ],
      "verification": {
        "kind": "normal-combination",
        "muX": 100,
        "muY": 35,
        "sdX": 8,
        "sdY": 5,
        "a": 1,
        "b": -2,
        "t": 42.8062484748657,
        "target": "tail"
      },
      "level": "challenge",
      "id": "exam:mrv-e1-linear-combinations:0",
      "topicId": "mrv-e1-linear-combinations",
      "family": "normal-combination-infer"
    },
    {
      "question": "Independent claim counts X and Y are Poisson with means 0.8 and 1.25. A branch statistic is T=2X+Y. Calculate P(T≤5). Round your answer to four decimal places.",
      "choices": [
        "$0.1131$",
        "$0.1287$",
        "$0.8869$",
        "$0.9304$",
        "$0.9816$"
      ],
      "answer": 2,
      "solution": [
        "Independence gives joint masses exp(-(0.8+1.25))0.8^x 1.25^y/(x!y!). The weighted statistic is not generally Poisson.",
        "Enumerate x=0 through 2; for each x sum y=0 through 5-2x.",
        "The sum of all qualifying joint masses is 0.886899."
      ],
      "feedback": {
        "0": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
        "1": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
        "3": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
        "4": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean."
      },
      "skills": [
        "discrete convolution",
        "weighted support",
        "independence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete convolution, weighted support, independence.",
        "Independence gives joint masses exp(-(0.8+1.25))0.8^x 1.25^y/(x!y!). The weighted statistic is not generally Poisson."
      ],
      "verification": {
        "kind": "poisson-weighted",
        "a": 0.8,
        "b": 1.25,
        "limit": 5
      },
      "level": "challenge",
      "id": "exam:mrv-e1-linear-combinations:1",
      "topicId": "mrv-e1-linear-combinations",
      "family": "poisson-weighted-sum"
    }
  ],
  "mrv-e2-linear-moments": [
    {
      "question": "Independent X,Y have means 10,16 and variances 6,10, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
      "choices": [
        "$114.0000$",
        "$139.0000$",
        "$511.0000$",
        "$529.0000$",
        "$643.0000$"
      ],
      "answer": 4,
      "solution": [
        "Linearity gives E[T]=2(10)-3(16)+5=-23.",
        "Independence gives Var(T)=4(6)+9(10)=114; the constant contributes zero variance.",
        "E[T²]=Var(T)+(E[T])²=114+529=643."
      ],
      "feedback": {
        "0": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
        "1": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
        "2": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
        "3": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance."
      },
      "skills": [
        "linear expectation",
        "independent variance",
        "raw second moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: linear expectation, independent variance, raw second moment.",
        "Linearity gives E[T]=2(10)-3(16)+5=-23."
      ],
      "verification": {
        "kind": "linear-moments",
        "mx": 10,
        "my": 16,
        "vx": 6,
        "vy": 10,
        "a": 2,
        "b": -3,
        "shift": 5,
        "target": "second"
      },
      "level": "challenge",
      "id": "exam:mrv-e2-linear-moments:0",
      "topicId": "mrv-e2-linear-moments",
      "family": "linear-second-moment"
    },
    {
      "question": "X1,…,X16 are independent with common mean 40 and SD 12. An independent random surcharge C has variance 4. Define Y as their sample mean plus the same single surcharge C. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$3.6056$",
        "$9.0156$",
        "$9.2500$",
        "$13.0000$",
        "$148.0000$"
      ],
      "answer": 3,
      "solution": [
        "The sample mean variance is 144/16.",
        "The independent surcharge is added once, so its full variance 4 is added; it is not averaged over 16 observations.",
        "The total variance is 144/16+4=13."
      ],
      "feedback": {
        "0": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
        "1": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
        "2": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
        "4": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size."
      },
      "skills": [
        "sample mean",
        "independent random shift",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: sample mean, independent random shift, variance.",
        "The sample mean variance is 144/16."
      ],
      "verification": {
        "kind": "sample-shift",
        "n": 16,
        "sigma": 12,
        "varC": 4
      },
      "level": "challenge",
      "id": "exam:mrv-e2-linear-moments:1",
      "topicId": "mrv-e2-linear-moments",
      "family": "sample-mean-random-shift"
    }
  ],
  "mrv-f1-central-limit-theorem": [
    {
      "question": "Each of 125 independent identical policies has no claim with probability 0.7 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 15436.27705519. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0200$",
        "$0.0668$",
        "$0.4466$",
        "$0.9332$"
      ],
      "answer": 2,
      "solution": [
        "Compute per-policy moments before approximating: mean μ=96 and variance σ²=41984, including no-claim policies.",
        "The total has mean 12000 and SD √(125×41984)=2290.85137.",
        "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
      ],
      "feedback": {
        "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
        "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
        "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
        "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
      },
      "skills": [
        "insurance mixture moments",
        "CLT for an aggregate",
        "standardization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
        "Compute per-policy moments before approximating: mean μ=96 and variance σ²=41984, including no-claim policies."
      ],
      "verification": {
        "kind": "clt-payment",
        "n": 125,
        "p": 0.30000000000000004,
        "B": 1000,
        "d": 200,
        "threshold": 15436.277055186327
      },
      "level": "challenge",
      "id": "exam:mrv-f1-central-limit-theorem:0",
      "topicId": "mrv-f1-central-limit-theorem",
      "family": "clt-payment-tail"
    },
    {
      "question": "160 independent policies each have probability 0.4 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 72 policies have a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0851$",
        "$0.0984$",
        "$0.1131$",
        "$0.4226$",
        "$0.8869$"
      ],
      "answer": 2,
      "solution": [
        "The count mean is 64 and SD is √(160×0.4×0.6)=6.196773.",
        "At least 72 for an integer count becomes the normal event above 71.5. The standardized boundary is 1.210307.",
        "The approximate probability is 1-Φ(z)=0.11308."
      ],
      "feedback": {
        "0": "Use the lower half-unit boundary for an at-least tail and standardize using SD rather than variance.",
        "1": "Use the lower half-unit boundary for an at-least tail and standardize using SD rather than variance.",
        "3": "Use the lower half-unit boundary for an at-least tail and standardize using SD rather than variance.",
        "4": "Use the lower half-unit boundary for an at-least tail and standardize using SD rather than variance."
      },
      "skills": [
        "binomial normal approximation",
        "continuity correction",
        "tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: binomial normal approximation, continuity correction, tail.",
        "The count mean is 64 and SD is √(160×0.4×0.6)=6.196773."
      ],
      "verification": {
        "kind": "clt-binomial",
        "n": 160,
        "p": 0.4,
        "k": 72
      },
      "level": "challenge",
      "id": "exam:mrv-f1-central-limit-theorem:1",
      "topicId": "mrv-f1-central-limit-theorem",
      "family": "clt-binomial-correction"
    }
  ]
};

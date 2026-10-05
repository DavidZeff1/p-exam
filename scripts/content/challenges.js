export default {
  "a1-set-functions": [
    {
      "question": "A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({ω3} given {ω2,ω3})=2/4, calculate P({ω4}). Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.2500$",
        "$0.3000$",
        "$0.3750$",
        "$0.4286$"
      ],
      "answer": 3,
      "solution": [
        "The conditional ratio is k/(2+k)=2/4; solving gives k=2.",
        "Normalize the four masses: c(1+2+k+k+1)=1, so c=1/8.",
        "P({ω4})=(k+1)c=3/8=0.375."
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
        "The conditional ratio is k/(2+k)=2/4; solving gives k=2."
      ],
      "verification": {
        "kind": "four-atoms",
        "k": 2,
        "target": "last"
      },
      "level": "challenge",
      "id": "chapter:a1-set-functions:0",
      "topicId": "a1-set-functions",
      "family": "atoms-normalize"
    },
    {
      "question": "Three coverage events A, B, C satisfy P(A)=12/23, P(B)=12/23, P(C)=8/23, P(A∩B)=6/23, P(A∩C)=4/23, and P(B∩C)=3/23. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.1304$",
        "$0.1739$",
        "$0.2500$",
        "$0.2727$",
        "$0.4783$"
      ],
      "answer": 3,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/23.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 3/23. The probability of not A is 11/23.",
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
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/23."
      ],
      "verification": {
        "kind": "atoms",
        "weights": [
          3,
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
      "id": "chapter:a1-set-functions:1",
      "topicId": "a1-set-functions",
      "family": "region-conditional"
    }
  ],
  "a2-venn-diagrams": [
    {
      "question": "Three coverage events A, B, C satisfy P(A)=14/26, P(B)=12/26, P(C)=8/26, P(A∩B)=6/26, P(A∩C)=4/26, and P(B∩C)=3/26. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.1538$",
        "$0.1923$",
        "$0.2857$",
        "$0.3333$",
        "$0.4615$"
      ],
      "answer": 3,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/26.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 4/26. The probability of not A is 12/26.",
        "None is contained in not A, so the requested conditional probability is 0.333333."
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
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/26."
      ],
      "verification": {
        "kind": "atoms",
        "weights": [
          4,
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
      "id": "chapter:a2-venn-diagrams:0",
      "topicId": "a2-venn-diagrams",
      "family": "region-conditional"
    },
    {
      "question": "For two policy features A and B, P(neither)=0.5, P(A∩B)=0.1, and P(B)-P(A)=0.2. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.1000$",
        "$0.2500$",
        "$0.5000$",
        "$0.6000$",
        "$0.6120$"
      ],
      "answer": 2,
      "solution": [
        "The union probability is 1-0.5=0.5. Thus P(A)+P(B)=0.6.",
        "Combine this sum with the difference 0.2 to get P(A)=0.2 and P(B)=0.4.",
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
        "The union probability is 1-0.5=0.5. Thus P(A)+P(B)=0.6."
      ],
      "verification": {
        "kind": "two-events",
        "a": 0.2,
        "b": 0.39999999999999997,
        "joint": 0.1,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "chapter:a2-venn-diagrams:1",
      "topicId": "a2-venn-diagrams",
      "family": "two-events-infer"
    }
  ],
  "a3-sample-space": [
    {
      "question": "A box contains 2 damaged and 5 sound components. Three are inspected in order without replacement. Calculate the probability the first is damaged and the other two are sound. Round your answer to four decimal places.",
      "choices": [
        "$0.1458$",
        "$0.1905$",
        "$0.2499$",
        "$0.2857$",
        "$0.5714$"
      ],
      "answer": 1,
      "solution": [
        "The first-stage damaged probability is 2/7.",
        "After removing a damaged component there are 5 sound components out of 6; after removing a sound component there are 4 out of 5.",
        "Multiply conditional stage probabilities: (2/7)(5/6)(4/5)=0.190476."
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
        "The first-stage damaged probability is 2/7."
      ],
      "verification": {
        "kind": "draw-sequence",
        "N": 7,
        "K": 2,
        "pattern": [
          1,
          0,
          0
        ]
      },
      "level": "challenge",
      "id": "chapter:a3-sample-space:0",
      "topicId": "a3-sample-space",
      "family": "replacement-pattern"
    },
    {
      "question": "Independent X,Y are each uniform on the integers 1 through 11. Given X+Y≥13, calculate P(X=Y). Round your answer to four decimal places.",
      "choices": [
        "$0.0413$",
        "$0.0909$",
        "$0.1334$",
        "$0.1758$",
        "$0.4545$"
      ],
      "answer": 1,
      "solution": [
        "All 121 ordered pairs are equally likely before conditioning.",
        "The condition allows 55 ordered pairs. Exactly 5 of these lie on the diagonal x=y.",
        "The conditional ratio is 5/55=0.090909."
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
        "All 121 ordered pairs are equally likely before conditioning."
      ],
      "verification": {
        "kind": "uniform-pairs",
        "n": 11,
        "threshold": 13,
        "target": "equal-given-tail"
      },
      "level": "challenge",
      "id": "chapter:a3-sample-space:1",
      "topicId": "a3-sample-space",
      "family": "discrete-uniform-sum"
    }
  ],
  "a4-events": [
    {
      "question": "For two policy features A and B, P(neither)=0.475, P(A∩B)=0.125, and P(B)-P(A)=0.25. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.0750$",
        "$0.2778$",
        "$0.3750$",
        "$0.5500$",
        "$0.6250$"
      ],
      "answer": 2,
      "solution": [
        "The union probability is 1-0.475=0.525. Thus P(A)+P(B)=0.65.",
        "Combine this sum with the difference 0.25 to get P(A)=0.2 and P(B)=0.45.",
        "The A-only probability is 0.075. Divide by P(A): 0.075/0.2=0.375."
      ],
      "feedback": {
        "0": "This is a joint event; normalize by the probability of A.",
        "1": "This reverses the condition and omits the complement.",
        "3": "This ignores the condition A.",
        "4": "This gives B rather than not B conditional on A."
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
        "a": 0.2,
        "b": 0.44999999999999996,
        "joint": 0.125,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "chapter:a4-events:0",
      "topicId": "a4-events",
      "family": "two-events-infer"
    },
    {
      "question": "5 policies have mutually independent claim indicators, each with claim probability 0.25. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.1709$",
        "$0.2241$",
        "$0.2892$",
        "$0.3278$",
        "$0.6836$"
      ],
      "answer": 1,
      "solution": [
        "The condition has probability 1-(1-0.25)^5=0.762695.",
        "The numerator requires a claim on policy 1 and at least one among the remaining 4: 0.25[1-(1-0.25)^4]=0.170898.",
        "Divide numerator by condition probability: 0.224072."
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
        "The condition has probability 1-(1-0.25)^5=0.762695."
      ],
      "verification": {
        "kind": "binomial-indicators",
        "n": 5,
        "p": 0.25,
        "target": "first-and-other-given-any"
      },
      "level": "challenge",
      "id": "chapter:a4-events:1",
      "topicId": "a4-events",
      "family": "conditional-independent"
    }
  ],
  "a5-probability-set-function": [
    {
      "question": "A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({ω3} given {ω2,ω3})=5/7, calculate P({ω4}). Round your answer to four decimal places.",
      "choices": [
        "$0.0714$",
        "$0.3571$",
        "$0.3750$",
        "$0.4286$",
        "$0.4615$"
      ],
      "answer": 3,
      "solution": [
        "The conditional ratio is k/(2+k)=5/7; solving gives k=5.",
        "Normalize the four masses: c(1+2+k+k+1)=1, so c=1/14.",
        "P({ω4})=(k+1)c=6/14=0.428571."
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
        "The conditional ratio is k/(2+k)=5/7; solving gives k=5."
      ],
      "verification": {
        "kind": "four-atoms",
        "k": 5,
        "target": "last"
      },
      "level": "challenge",
      "id": "chapter:a5-probability-set-function:0",
      "topicId": "a5-probability-set-function",
      "family": "atoms-normalize"
    },
    {
      "question": "Events A, B, C, D form a partition. P(A∪B)=0.42, P(A given A∪B)=0.619048 is specified exactly as 0.26/0.42, and P(C)=0.11. Calculate P(D given not C). Round your answer to four decimal places.",
      "choices": [
        "$0.4700$",
        "$0.5281$",
        "$0.6190$",
        "$0.6449$",
        "$0.8900$"
      ],
      "answer": 1,
      "solution": [
        "The A and B union already accounts for 0.42 of the total probability.",
        "The remaining D probability is 1-P(A∪B)-P(C)=0.47.",
        "D is contained in not C. Divide by 1-P(C): 0.47/0.89=0.52809."
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
        "The A and B union already accounts for 0.42 of the total probability."
      ],
      "verification": {
        "kind": "partition",
        "weights": [
          0.26,
          0.16,
          0.11,
          0.47
        ],
        "target": "D-given-notC"
      },
      "level": "challenge",
      "id": "chapter:a5-probability-set-function:1",
      "topicId": "a5-probability-set-function",
      "family": "disjoint-infer"
    }
  ],
  "a6-axioms-probability": [
    {
      "question": "A severity category X takes values 1 through 5. Its probability set function assigns P(X=k)=ck, where c is unknown. A file is known to have X≥3. Calculate P(X>3 given this information). Round your answer to four decimal places.",
      "choices": [
        "$0.6000$",
        "$0.6667$",
        "$0.7500$",
        "$0.8000$",
        "$0.9045$"
      ],
      "answer": 2,
      "solution": [
        "Normalize: c(1+2+…+5)=1, so c=0.066667.",
        "The conditioning category weights total 12; the strictly larger category weights total 9.",
        "The factor c cancels in the conditional ratio, giving 0.75."
      ],
      "feedback": {
        "0": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
        "1": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
        "3": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
        "4": "Recheck the setup and the requested quantity before evaluating the formula."
      },
      "skills": [
        "normalize a PMF",
        "distinguish event endpoints",
        "conditional probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: normalize a PMF, distinguish event endpoints, conditional probability.",
        "Normalize: c(1+2+…+5)=1, so c=0.066667."
      ],
      "verification": {
        "kind": "weighted-discrete",
        "values": [
          1,
          2,
          3,
          4,
          5
        ],
        "weights": [
          1,
          2,
          3,
          4,
          5
        ],
        "threshold": 3,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "chapter:a6-axioms-probability:0",
      "topicId": "a6-axioms-probability",
      "family": "weighted-outcomes"
    },
    {
      "question": "Events A and B are independent. P(A)=2P(B), and P(A∩B)=0.08. Calculate the probability that neither event occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.0800$",
        "$0.4000$",
        "$0.4800$",
        "$0.6400$",
        "$0.9200$"
      ],
      "answer": 2,
      "solution": [
        "Let p=P(B). Independence gives 2p²=0.08, so p=0.2 and P(A)=0.4.",
        "The complement events are also independent. Multiply their probabilities: (1-0.4)(1-0.2).",
        "The probability of neither is 0.48."
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
        "Let p=P(B). Independence gives 2p²=0.08, so p=0.2 and P(A)=0.4."
      ],
      "verification": {
        "kind": "independent",
        "p": 0.2,
        "ratio": 2,
        "target": "neither"
      },
      "level": "challenge",
      "id": "chapter:a6-axioms-probability:1",
      "topicId": "a6-axioms-probability",
      "family": "independent-infer"
    }
  ],
  "b1-counting-principles": [
    {
      "question": "A security code is an ordered sequence of four distinct symbols chosen from 9 symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes. Round your answer to four decimal places.",
      "choices": [
        "$126.0000$",
        "$840.0000$",
        "$2520.0000$",
        "$3024.0000$",
        "$6561.0000$"
      ],
      "answer": 2,
      "solution": [
        "Without the restriction there are 9!/(9-4)!=3024 codes.",
        "Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from 7 symbols, giving 12(7)(6).",
        "Subtract forbidden codes: 3024-504=2520."
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
        "Without the restriction there are 9!/(9-4)!=3024 codes."
      ],
      "verification": {
        "kind": "restricted-code",
        "n": 9,
        "r": 4
      },
      "level": "challenge",
      "id": "chapter:b1-counting-principles:0",
      "topicId": "b1-counting-principles",
      "family": "restricted-code"
    },
    {
      "question": "A committee consists of exactly two senior and two junior employees selected from 5 seniors and 6 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
      "choices": [
        "$150.0000$",
        "$330.0000$",
        "$600.0000$",
        "$1320.0000$",
        "$2400.0000$"
      ],
      "answer": 2,
      "solution": [
        "Choose the committee in choose(5,2)choose(6,2) ways.",
        "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
        "The total is choose(5,2)choose(6,2)×2×2=600."
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
        "Choose the committee in choose(5,2)choose(6,2) ways."
      ],
      "verification": {
        "kind": "committee-roles",
        "S": 5,
        "J": 6
      },
      "level": "challenge",
      "id": "chapter:b1-counting-principles:1",
      "topicId": "b1-counting-principles",
      "family": "committee-roles"
    }
  ],
  "b2-permutations": [
    {
      "question": "7 distinct claim files are arranged in a line. Files A and B must be adjacent, but file C may not be adjacent to either A or B. Calculate the number of permitted arrangements. Round your answer to four decimal places.",
      "choices": [
        "$120.0000$",
        "$240.0000$",
        "$960.0000$",
        "$1440.0000$",
        "$4560.0000$"
      ],
      "answer": 2,
      "solution": [
        "Treat A,B as a block, with two internal orders: 2(6)! arrangements.",
        "Forbidden arrangements have C immediately before or after that block. There are four internal orders for the three-file block and (5)! block arrangements.",
        "Subtract: 2(6)!-4(5)!=960."
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
        "Treat A,B as a block, with two internal orders: 2(6)! arrangements."
      ],
      "verification": {
        "kind": "adjacency",
        "n": 7
      },
      "level": "challenge",
      "id": "chapter:b2-permutations:0",
      "topicId": "b2-permutations",
      "family": "adjacent-permutation"
    },
    {
      "question": "A security code is an ordered sequence of four distinct symbols chosen from 7 symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes. Round your answer to four decimal places.",
      "choices": [
        "$35.0000$",
        "$120.0000$",
        "$600.0000$",
        "$840.0000$",
        "$2401.0000$"
      ],
      "answer": 2,
      "solution": [
        "Without the restriction there are 7!/(7-4)!=840 codes.",
        "Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from 5 symbols, giving 12(5)(4).",
        "Subtract forbidden codes: 840-240=600."
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
        "Without the restriction there are 7!/(7-4)!=840 codes."
      ],
      "verification": {
        "kind": "restricted-code",
        "n": 7,
        "r": 4
      },
      "level": "challenge",
      "id": "chapter:b2-permutations:1",
      "topicId": "b2-permutations",
      "family": "restricted-code"
    }
  ],
  "b3-combinations": [
    {
      "question": "A committee consists of exactly two senior and two junior employees selected from 5 seniors and 7 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
      "choices": [
        "$210.0000$",
        "$495.0000$",
        "$840.0000$",
        "$1980.0000$",
        "$3360.0000$"
      ],
      "answer": 2,
      "solution": [
        "Choose the committee in choose(5,2)choose(7,2) ways.",
        "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
        "The total is choose(5,2)choose(7,2)×2×2=840."
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
        "Choose the committee in choose(5,2)choose(7,2) ways."
      ],
      "verification": {
        "kind": "committee-roles",
        "S": 5,
        "J": 7
      },
      "level": "challenge",
      "id": "chapter:b3-combinations:0",
      "topicId": "b3-combinations",
      "family": "committee-roles"
    },
    {
      "question": "Four files are sampled uniformly without replacement from 12 files, of which 5 are high severity. Given that the sample contains at least one high-severity file, calculate the probability it contains exactly two. Round your answer to four decimal places.",
      "choices": [
        "$0.1515$",
        "$0.4242$",
        "$0.4286$",
        "$0.4565$",
        "$0.9293$"
      ],
      "answer": 3,
      "solution": [
        "The total number of samples satisfying the condition is choose(12,4)-choose(7,4)=460.",
        "Exactly-two samples can be chosen in choose(5,2)choose(7,2)=210 ways.",
        "The conditional probability is 210/460=0.456522."
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
        "The total number of samples satisfying the condition is choose(12,4)-choose(7,4)=460."
      ],
      "verification": {
        "kind": "hypergeom",
        "N": 12,
        "K": 5,
        "n": 4,
        "target": "two-given-positive"
      },
      "level": "challenge",
      "id": "chapter:b3-combinations:1",
      "topicId": "b3-combinations",
      "family": "conditional-sample"
    }
  ],
  "b4-combinatorial-probability": [
    {
      "question": "Four files are sampled uniformly without replacement from 10 files, of which 5 are high severity. Given that the sample contains at least one high-severity file, calculate the probability it contains exactly two. Round your answer to four decimal places.",
      "choices": [
        "$0.2222$",
        "$0.4762$",
        "$0.4878$",
        "$0.5977$",
        "$0.9762$"
      ],
      "answer": 2,
      "solution": [
        "The total number of samples satisfying the condition is choose(10,4)-choose(5,4)=205.",
        "Exactly-two samples can be chosen in choose(5,2)choose(5,2)=100 ways.",
        "The conditional probability is 100/205=0.487805."
      ],
      "feedback": {
        "0": "This samples only two files instead of four.",
        "1": "This is the unconditional probability of exactly two.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "This is the condition probability, not the ratio requested."
      },
      "skills": [
        "combinatorial probability",
        "conditioning on a sample event"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: combinatorial probability, conditioning on a sample event.",
        "The total number of samples satisfying the condition is choose(10,4)-choose(5,4)=205."
      ],
      "verification": {
        "kind": "hypergeom",
        "N": 10,
        "K": 5,
        "n": 4,
        "target": "two-given-positive"
      },
      "level": "challenge",
      "id": "chapter:b4-combinatorial-probability:0",
      "topicId": "b4-combinatorial-probability",
      "family": "conditional-sample"
    },
    {
      "question": "A container is type H with probability 0.5, otherwise type L. Both types hold 10 components; type H contains 4 defective components and type L contains 2. Three are sampled without replacement and exactly two defects are observed. Calculate the posterior probability the container is type H. Round your answer to four decimal places.",
      "choices": [
        "$0.1500$",
        "$0.3000$",
        "$0.5000$",
        "$0.8182$",
        "$0.9843$"
      ],
      "answer": 3,
      "solution": [
        "The observation likelihood is choose(4,2)choose(6,1)/choose(10,3)=0.3 for H and 0.066667 for L.",
        "The total observation probability is 0.183333.",
        "Weight the H likelihood by its prior and divide by the total: 0.818182."
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
        "w": 0.5
      },
      "level": "challenge",
      "id": "chapter:b4-combinatorial-probability:1",
      "topicId": "b4-combinatorial-probability",
      "family": "hypergeom-bayes"
    }
  ],
  "c1-independent-events": [
    {
      "question": "Events A and B are independent. P(A)=2P(B), and P(A∩B)=0.18. Calculate the probability that neither event occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.1000$",
        "$0.1800$",
        "$0.2800$",
        "$0.4900$",
        "$0.8200$"
      ],
      "answer": 2,
      "solution": [
        "Let p=P(B). Independence gives 2p²=0.18, so p=0.3 and P(A)=0.6.",
        "The complement events are also independent. Multiply their probabilities: (1-0.6)(1-0.3).",
        "The probability of neither is 0.28."
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
        "Let p=P(B). Independence gives 2p²=0.18, so p=0.3 and P(A)=0.6."
      ],
      "verification": {
        "kind": "independent",
        "p": 0.30000000000000004,
        "ratio": 2,
        "target": "neither"
      },
      "level": "challenge",
      "id": "chapter:c1-independent-events:0",
      "topicId": "c1-independent-events",
      "family": "independent-infer"
    },
    {
      "question": "A portfolio has a fraction 0.25 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.125 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.2188$",
        "$0.2872$",
        "$0.5000$",
        "$0.5714$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.25 for H and 0.109375 for L.",
        "Weight these by the prior shares; the total history probability is 0.144531.",
        "Weight the next-year claim rates by those posterior shares: [0.0625(0.5)+0.082031(0.125)]/0.144531=0.287162."
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
        "The observed history likelihoods are 0.25 for H and 0.109375 for L."
      ],
      "verification": {
        "kind": "latent-history",
        "w": 0.25,
        "rates": [
          0.5,
          0.125
        ],
        "history": [
          1,
          0
        ],
        "target": "next"
      },
      "level": "challenge",
      "id": "chapter:c1-independent-events:1",
      "topicId": "c1-independent-events",
      "family": "latent-two-years"
    }
  ],
  "c2-independent-trials": [
    {
      "question": "5 policies have mutually independent claim indicators, each with claim probability 0.3. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.2280$",
        "$0.2740$",
        "$0.3476$",
        "$0.3606$",
        "$0.7599$"
      ],
      "answer": 1,
      "solution": [
        "The condition has probability 1-(1-0.3)^5=0.83193.",
        "The numerator requires a claim on policy 1 and at least one among the remaining 4: 0.3[1-(1-0.3)^4]=0.22797.",
        "Divide numerator by condition probability: 0.274025."
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
        "The condition has probability 1-(1-0.3)^5=0.83193."
      ],
      "verification": {
        "kind": "binomial-indicators",
        "n": 5,
        "p": 0.30000000000000004,
        "target": "first-and-other-given-any"
      },
      "level": "challenge",
      "id": "chapter:c2-independent-trials:0",
      "topicId": "c2-independent-trials",
      "family": "conditional-independent"
    },
    {
      "question": "A portfolio has a fraction 0.35 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.15 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1500$",
        "$0.2550$",
        "$0.3033$",
        "$0.4500$",
        "$0.6176$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.2475 for H and 0.1275 for L.",
        "Weight these by the prior shares; the total history probability is 0.1695.",
        "Weight the next-year claim rates by those posterior shares: [0.086625(0.45)+0.082875(0.15)]/0.1695=0.303319."
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
        "w": 0.35,
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
      "id": "chapter:c2-independent-trials:1",
      "topicId": "c2-independent-trials",
      "family": "latent-two-years"
    }
  ],
  "d1-mutually-exclusive": [
    {
      "question": "Events A, B, C, D form a partition. P(A∪B)=0.35, P(A given A∪B)=0.571429 is specified exactly as 0.2/0.35, and P(C)=0.1. Calculate P(D given not C). Round your answer to four decimal places.",
      "choices": [
        "$0.5500$",
        "$0.5714$",
        "$0.6111$",
        "$0.7420$",
        "$0.9000$"
      ],
      "answer": 2,
      "solution": [
        "The A and B union already accounts for 0.35 of the total probability.",
        "The remaining D probability is 1-P(A∪B)-P(C)=0.55.",
        "D is contained in not C. Divide by 1-P(C): 0.55/0.9=0.611111."
      ],
      "feedback": {
        "0": "This is the unconditional D probability.",
        "1": "This answers the supplied conditional question about A instead of the requested question about D.",
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
        "The A and B union already accounts for 0.35 of the total probability."
      ],
      "verification": {
        "kind": "partition",
        "weights": [
          0.2,
          0.15,
          0.1,
          0.55
        ],
        "target": "D-given-notC"
      },
      "level": "challenge",
      "id": "chapter:d1-mutually-exclusive:0",
      "topicId": "d1-mutually-exclusive",
      "family": "disjoint-infer"
    },
    {
      "question": "For two policy features A and B, P(neither)=0.425, P(A∩B)=0.125, and P(B)-P(A)=0.2. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.2778$",
        "$0.5000$",
        "$0.5500$",
        "$0.6120$"
      ],
      "answer": 2,
      "solution": [
        "The union probability is 1-0.425=0.575. Thus P(A)+P(B)=0.7.",
        "Combine this sum with the difference 0.2 to get P(A)=0.25 and P(B)=0.45.",
        "The A-only probability is 0.125. Divide by P(A): 0.125/0.25=0.5."
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
        "The union probability is 1-0.425=0.575. Thus P(A)+P(B)=0.7."
      ],
      "verification": {
        "kind": "two-events",
        "a": 0.25,
        "b": 0.44999999999999996,
        "joint": 0.125,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "chapter:d1-mutually-exclusive:1",
      "topicId": "d1-mutually-exclusive",
      "family": "two-events-infer"
    }
  ],
  "d2-partitions": [
    {
      "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.35. The overall annual claim probability is 0.1985 and the ordinary-risk claim probability is 0.09. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
      "choices": [
        "$0.1400$",
        "$0.1985$",
        "$0.3500$",
        "$0.4000$",
        "$0.7053$"
      ],
      "answer": 4,
      "solution": [
        "Let h be the high-risk claim rate. Total probability gives 0.1985=0.35h+0.65(0.09).",
        "This gives h=0.4 and joint probability P(high risk and claim)=0.14.",
        "Bayes gives 0.14/0.1985=0.70529."
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
        "Let h be the high-risk claim rate. Total probability gives 0.1985=0.35h+0.65(0.09)."
      ],
      "verification": {
        "kind": "mixture",
        "weight": 0.35,
        "rates": [
          0.4,
          0.09
        ],
        "target": "posterior"
      },
      "level": "challenge",
      "id": "chapter:d2-partitions:0",
      "topicId": "d2-partitions",
      "family": "partition-rate"
    },
    {
      "question": "An insured belongs permanently to class H with probability 0.3, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.2, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0406$",
        "$0.0796$",
        "$0.1353$",
        "$0.1615$",
        "$0.3000$"
      ],
      "answer": 1,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.67032 for L.",
        "The overall likelihood is 0.509825 after weighting by the prior class shares.",
        "The H posterior is 0.040601/0.509825=0.079636."
      ],
      "feedback": {
        "0": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "2": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
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
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.67032 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.3,
        "rates": [
          1,
          0.2
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "chapter:d2-partitions:1",
      "topicId": "d2-partitions",
      "family": "mixture-no-claim"
    }
  ],
  "e1-addition-rule": [
    {
      "question": "Three coverage events A, B, C satisfy P(A)=15/26, P(B)=13/26, P(C)=9/26, P(A∩B)=7/26, P(A∩C)=5/26, and P(B∩C)=4/26. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.1154$",
        "$0.1923$",
        "$0.2000$",
        "$0.2727$",
        "$0.4231$"
      ],
      "answer": 3,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/26.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 3/26. The probability of not A is 11/26.",
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
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/26."
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
          2
        ],
        "target": "none-given-notA"
      },
      "level": "challenge",
      "id": "chapter:e1-addition-rule:0",
      "topicId": "e1-addition-rule",
      "family": "region-conditional"
    },
    {
      "question": "For two policy features A and B, P(neither)=0.525, P(A∩B)=0.125, and P(B)-P(A)=0.1. Calculate P(not B given A). Round your answer to four decimal places.",
      "choices": [
        "$0.1250$",
        "$0.3571$",
        "$0.5000$",
        "$0.6120$",
        "$0.6500$"
      ],
      "answer": 2,
      "solution": [
        "The union probability is 1-0.525=0.475. Thus P(A)+P(B)=0.6.",
        "Combine this sum with the difference 0.1 to get P(A)=0.25 and P(B)=0.35.",
        "The A-only probability is 0.125. Divide by P(A): 0.125/0.25=0.5."
      ],
      "feedback": {
        "0": "This is a joint event; normalize by the probability of A.",
        "1": "This reverses the condition and omits the complement.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
        "4": "This ignores the condition A."
      },
      "skills": [
        "solve marginal probabilities",
        "conditional complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: solve marginal probabilities, conditional complement.",
        "The union probability is 1-0.525=0.475. Thus P(A)+P(B)=0.6."
      ],
      "verification": {
        "kind": "two-events",
        "a": 0.25,
        "b": 0.35,
        "joint": 0.125,
        "target": "notB-given-A"
      },
      "level": "challenge",
      "id": "chapter:e1-addition-rule:1",
      "topicId": "e1-addition-rule",
      "family": "two-events-infer"
    }
  ],
  "e2-multiplication-rule": [
    {
      "question": "A box contains 3 damaged and 5 sound components. Three are inspected in order without replacement. Calculate the probability the first is damaged and the other two are sound. Round your answer to four decimal places.",
      "choices": [
        "$0.1465$",
        "$0.1786$",
        "$0.2359$",
        "$0.3750$",
        "$0.5357$"
      ],
      "answer": 1,
      "solution": [
        "The first-stage damaged probability is 3/8.",
        "After removing a damaged component there are 5 sound components out of 7; after removing a sound component there are 4 out of 6.",
        "Multiply conditional stage probabilities: (3/8)(5/7)(4/6)=0.178571."
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
        "The first-stage damaged probability is 3/8."
      ],
      "verification": {
        "kind": "draw-sequence",
        "N": 8,
        "K": 3,
        "pattern": [
          1,
          0,
          0
        ]
      },
      "level": "challenge",
      "id": "chapter:e2-multiplication-rule:0",
      "topicId": "e2-multiplication-rule",
      "family": "replacement-pattern"
    },
    {
      "question": "A portfolio has a fraction 0.3 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.1 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1000$",
        "$0.2200$",
        "$0.3174$",
        "$0.5000$",
        "$0.6818$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.25 for H and 0.09 for L.",
        "Weight these by the prior shares; the total history probability is 0.138.",
        "Weight the next-year claim rates by those posterior shares: [0.075(0.5)+0.063(0.1)]/0.138=0.317391."
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
        "w": 0.3,
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
      "id": "chapter:e2-multiplication-rule:1",
      "topicId": "e2-multiplication-rule",
      "family": "latent-two-years"
    }
  ],
  "e3-combined-problems": [
    {
      "question": "An insured belongs permanently to class H with probability 0.5, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.3, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0677$",
        "$0.1353$",
        "$0.1978$",
        "$0.3318$",
        "$0.5000$"
      ],
      "answer": 2,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.548812 for L.",
        "The overall likelihood is 0.342073 after weighting by the prior class shares.",
        "The H posterior is 0.067668/0.342073=0.197816."
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
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.548812 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.5,
        "rates": [
          1,
          0.30000000000000004
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "chapter:e3-combined-problems:0",
      "topicId": "e3-combined-problems",
      "family": "mixture-no-claim"
    },
    {
      "question": "A container is type H with probability 0.5, otherwise type L. Both types hold 11 components; type H contains 4 defective components and type L contains 2. Three are sampled without replacement and exactly two defects are observed. Calculate the posterior probability the container is type H. Round your answer to four decimal places.",
      "choices": [
        "$0.1273$",
        "$0.2545$",
        "$0.5000$",
        "$0.8235$",
        "$0.9905$"
      ],
      "answer": 3,
      "solution": [
        "The observation likelihood is choose(4,2)choose(7,1)/choose(11,3)=0.254545 for H and 0.054545 for L.",
        "The total observation probability is 0.154545.",
        "Weight the H likelihood by its prior and divide by the total: 0.823529."
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
        "w": 0.5
      },
      "level": "challenge",
      "id": "chapter:e3-combined-problems:1",
      "topicId": "e3-combined-problems",
      "family": "hypergeom-bayes"
    }
  ],
  "f1-conditional-probability": [
    {
      "question": "Three coverage events A, B, C satisfy P(A)=12/25, P(B)=14/25, P(C)=8/25, P(A∩B)=6/25, P(A∩C)=4/25, and P(B∩C)=3/25. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
      "choices": [
        "$0.1200$",
        "$0.1600$",
        "$0.2308$",
        "$0.2500$",
        "$0.5200$"
      ],
      "answer": 2,
      "solution": [
        "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/25.",
        "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
        "The probability of none is 3/25. The probability of not A is 13/25.",
        "None is contained in not A, so the requested conditional probability is 0.230769."
      ],
      "feedback": {
        "0": "This is the probability of none before conditioning; divide by P(not A).",
        "1": "The triple intersection must be included once with the correct sign in inclusion–exclusion.",
        "3": "The condition is not A, so use its probability in the denominator.",
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
      "id": "chapter:f1-conditional-probability:0",
      "topicId": "f1-conditional-probability",
      "family": "region-conditional"
    },
    {
      "question": "6 policies have mutually independent claim indicators, each with claim probability 0.15. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0834$",
        "$0.1340$",
        "$0.2408$",
        "$0.5563$",
        "$0.9000$"
      ],
      "answer": 1,
      "solution": [
        "The condition has probability 1-(1-0.15)^6=0.62285.",
        "The numerator requires a claim on policy 1 and at least one among the remaining 5: 0.15[1-(1-0.15)^5]=0.083444.",
        "Divide numerator by condition probability: 0.133971."
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
        "The condition has probability 1-(1-0.15)^6=0.62285."
      ],
      "verification": {
        "kind": "binomial-indicators",
        "n": 6,
        "p": 0.15,
        "target": "first-and-other-given-any"
      },
      "level": "challenge",
      "id": "chapter:f1-conditional-probability:1",
      "topicId": "f1-conditional-probability",
      "family": "conditional-independent"
    }
  ],
  "f2-bayes-theorem": [
    {
      "question": "A fraud screen flags a fraction 0.75 of fraudulent claims. Fraud prevalence is 0.05. Of flagged claims, the fraud fraction is specified exactly as 0.0375/(0.0375+0.057). Calculate the flag probability for a legitimate claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0375$",
        "$0.0570$",
        "$0.0600$",
        "$0.0945$",
        "$0.3968$"
      ],
      "answer": 2,
      "solution": [
        "The joint fraud-and-flag probability is 0.0375.",
        "Use the supplied posterior fraction to recover total flag probability 0.0945.",
        "Subtract the fraud contribution and divide by P(legitimate): 0.057/0.95=0.06."
      ],
      "feedback": {
        "0": "Distinguish joint flag masses, posterior fraud probability, and a flag probability conditional on legitimacy.",
        "1": "Distinguish joint flag masses, posterior fraud probability, and a flag probability conditional on legitimacy.",
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
        "The joint fraud-and-flag probability is 0.0375."
      ],
      "verification": {
        "kind": "screen",
        "prior": 0.05,
        "sensitivity": 0.75,
        "falsePositive": 0.060000000000000005,
        "target": "infer-fp"
      },
      "level": "challenge",
      "id": "chapter:f2-bayes-theorem:0",
      "topicId": "f2-bayes-theorem",
      "family": "screen-infer"
    },
    {
      "question": "A portfolio has a fraction 0.25 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.15 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
      "choices": [
        "$0.1500$",
        "$0.2375$",
        "$0.2883$",
        "$0.5000$",
        "$0.5263$"
      ],
      "answer": 2,
      "solution": [
        "The observed history likelihoods are 0.25 for H and 0.1275 for L.",
        "Weight these by the prior shares; the total history probability is 0.158125.",
        "Weight the next-year claim rates by those posterior shares: [0.0625(0.5)+0.095625(0.15)]/0.158125=0.28834."
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
        "The observed history likelihoods are 0.25 for H and 0.1275 for L."
      ],
      "verification": {
        "kind": "latent-history",
        "w": 0.25,
        "rates": [
          0.5,
          0.15000000000000002
        ],
        "history": [
          1,
          0
        ],
        "target": "next"
      },
      "level": "challenge",
      "id": "chapter:f2-bayes-theorem:1",
      "topicId": "f2-bayes-theorem",
      "family": "latent-two-years"
    }
  ],
  "f3-law-total-probability": [
    {
      "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.35. The overall annual claim probability is 0.205 and the ordinary-risk claim probability is 0.1. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
      "choices": [
        "$0.1400$",
        "$0.2050$",
        "$0.3500$",
        "$0.4000$",
        "$0.6829$"
      ],
      "answer": 4,
      "solution": [
        "Let h be the high-risk claim rate. Total probability gives 0.205=0.35h+0.65(0.1).",
        "This gives h=0.4 and joint probability P(high risk and claim)=0.14.",
        "Bayes gives 0.14/0.205=0.682927."
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
        "Let h be the high-risk claim rate. Total probability gives 0.205=0.35h+0.65(0.1)."
      ],
      "verification": {
        "kind": "mixture",
        "weight": 0.35,
        "rates": [
          0.4,
          0.1
        ],
        "target": "posterior"
      },
      "level": "challenge",
      "id": "chapter:f3-law-total-probability:0",
      "topicId": "f3-law-total-probability",
      "family": "partition-rate"
    },
    {
      "question": "An insured belongs permanently to class H with probability 0.3, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.3, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0406$",
        "$0.0956$",
        "$0.1353$",
        "$0.1755$",
        "$0.3000$"
      ],
      "answer": 1,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.548812 for L.",
        "The overall likelihood is 0.424769 after weighting by the prior class shares.",
        "The H posterior is 0.040601/0.424769=0.095583."
      ],
      "feedback": {
        "0": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
        "2": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
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
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.548812 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.3,
        "rates": [
          1,
          0.30000000000000004
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "chapter:f3-law-total-probability:1",
      "topicId": "f3-law-total-probability",
      "family": "mixture-no-claim"
    }
  ],
  "urv-a1-random-variables": [
    {
      "question": "X is equally likely to be each integer from 1 through 7. A contract pays Y=150 min(max(X-2,0),3). Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$191.6630$",
        "$36734.6939$",
        "$66122.4490$",
        "$90000.0000$",
        "$102857.1429$"
      ],
      "answer": 1,
      "solution": [
        "List the payment at each supported X value: 0, 0, 150, 300, 450, 450, 450.",
        "The equal-weight moments are E[Y]=257.142857 and E[Y²]=102857.142857.",
        "Subtract the squared mean: Var(Y)=36734.693878."
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
        "List the payment at each supported X value: 0, 0, 150, 300, 450, 450, 450."
      ],
      "verification": {
        "kind": "discrete-uniform-payment",
        "n": 7,
        "d": 2,
        "cap": 3,
        "B": 150,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-a1-random-variables:0",
      "topicId": "urv-a1-random-variables",
      "family": "discrete-uniform-capped"
    },
    {
      "question": "A device independently survives each year with probability 0.7, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays 150(4-t); after year 3 it pays zero. Calculate the variance of the payment. Round your answer to four decimal places.",
      "choices": [
        "$185.8373$",
        "$220.0500$",
        "$4725.0000$",
        "$34535.4975$",
        "$82957.5000$"
      ],
      "answer": 3,
      "solution": [
        "The first-failure year T is geometric: P(T=t)=0.3(0.7)^(t-1).",
        "Payment is 450, 300, 150 in the first three years; all later outcomes have payment zero.",
        "Weighted moments are E[Y]=220.05 and E[Y²]=82957.5.",
        "Var(Y)=E[Y²]-(E[Y])²=34535.4975."
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
        "B": 150,
        "horizon": 4,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-a1-random-variables:1",
      "topicId": "urv-a1-random-variables",
      "family": "geometric-benefit"
    }
  ],
  "urv-a2-pdf": [
    {
      "question": "X has density f(x)=a+bx on (0,3) and zero elsewhere. The unknown constants satisfy a:b=1:0.2. Given X>1.5, calculate P(X>2.4). Round your answer to four decimal places.",
      "choices": [
        "$0.2000$",
        "$0.2369$",
        "$0.3208$",
        "$0.4248$",
        "$0.5240$"
      ],
      "answer": 3,
      "solution": [
        "Write a=1c and b=0.2c. Normalizing the density gives c=1/3.9.",
        "The CDF on the support is F(x)=0.25641x+(0.051282/2)x².",
        "Divide the tail above 2.4 by the tail above 1.5: 0.236923/0.557692=0.424828."
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
        "Write a=1c and b=0.2c. Normalizing the density gives c=1/3.9."
      ],
      "verification": {
        "kind": "linear-density",
        "L": 3,
        "A": 0.2564102564102564,
        "B": 0.05128205128205128,
        "t": 1.5,
        "u": 2.4000000000000004,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "chapter:urv-a2-pdf:0",
      "topicId": "urv-a2-pdf",
      "family": "density-infer-conditional"
    },
    {
      "question": "X has density proportional to x^2 on (0,10) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
      "choices": [
        "$3.4351$",
        "$5.8480$",
        "$6.0000$",
        "$8.4343$",
        "$9.2832$"
      ],
      "answer": 0,
      "solution": [
        "Normalize the density: f(x)=3x^2/1000, so F(x)=(x/10)^3.",
        "Solve F(q)=u to get q(u)=10u^(1/3).",
        "The requested difference is 10[0.8^(1/3)-0.2^(1/3)]=3.435142."
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
        "Normalize the density: f(x)=3x^2/1000, so F(x)=(x/10)^3."
      ],
      "verification": {
        "kind": "power-density",
        "L": 10,
        "power": 2,
        "low": 0.2,
        "high": 0.8,
        "target": "quantile-difference"
      },
      "level": "challenge",
      "id": "chapter:urv-a2-pdf:1",
      "topicId": "urv-a2-pdf",
      "family": "power-quantile-difference"
    }
  ],
  "urv-a3-cdf": [
    {
      "question": "A loss fraction X has probability 0.2 at 0 and 0.3 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.6, calculate the probability X=1. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.2000$",
        "$0.3000$",
        "$0.3750$",
        "$0.6000$"
      ],
      "answer": 4,
      "solution": [
        "The continuous component has weight 0.5, so its mass above 0.6 is 0.2.",
        "The conditioning event also includes the atom at 1; its total probability is 0.5.",
        "Divide the atom mass by that total: 0.3/0.5=0.6."
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
        "The continuous component has weight 0.5, so its mass above 0.6 is 0.2."
      ],
      "verification": {
        "kind": "mixed-cdf",
        "p0": 0.2,
        "p1": 0.30000000000000004,
        "cut": 0.6000000000000001,
        "target": "atom-conditional"
      },
      "level": "challenge",
      "id": "chapter:urv-a3-cdf:0",
      "topicId": "urv-a3-cdf",
      "family": "cdf-atom-conditional"
    },
    {
      "question": "Loss X has density f(x)=2x/16 on (0,4) and zero elsewhere. A claim is recorded only when X>2. Calculate the mean loss among recorded claims. Round your answer to four decimal places.",
      "choices": [
        "$1.7500$",
        "$2.3333$",
        "$2.6667$",
        "$3.0000$",
        "$3.1111$"
      ],
      "answer": 4,
      "solution": [
        "The recording probability is 1-(2/4)²=0.75.",
        "The restricted first-moment integral is the integral of x(2x/16) from 2 to 4, equal to 2.333333.",
        "Normalize to the recorded population: 2.333333/0.75=3.111111."
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
        "The recording probability is 1-(2/4)²=0.75."
      ],
      "verification": {
        "kind": "power-density",
        "L": 4,
        "power": 1,
        "lower": 2,
        "target": "conditional-mean"
      },
      "level": "challenge",
      "id": "chapter:urv-a3-cdf:1",
      "topicId": "urv-a3-cdf",
      "family": "continuous-conditional-mean"
    }
  ],
  "urv-b1-discrete-uniform": [
    {
      "question": "X is equally likely to be each integer from 1 through 7. A contract pays Y=100 min(max(X-3,0),3). Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$127.7753$",
        "$16326.5306$",
        "$16530.6122$",
        "$32857.1429$",
        "$40000.0000$"
      ],
      "answer": 1,
      "solution": [
        "List the payment at each supported X value: 0, 0, 0, 100, 200, 300, 300.",
        "The equal-weight moments are E[Y]=128.571429 and E[Y²]=32857.142857.",
        "Subtract the squared mean: Var(Y)=16326.530612."
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
        "List the payment at each supported X value: 0, 0, 0, 100, 200, 300, 300."
      ],
      "verification": {
        "kind": "discrete-uniform-payment",
        "n": 7,
        "d": 3,
        "cap": 3,
        "B": 100,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-b1-discrete-uniform:0",
      "topicId": "urv-b1-discrete-uniform",
      "family": "discrete-uniform-capped"
    },
    {
      "question": "Independent X,Y are each uniform on the integers 1 through 7. Given X+Y≥9, calculate P(X=Y). Round your answer to four decimal places.",
      "choices": [
        "$0.0612$",
        "$0.1429$",
        "$0.1941$",
        "$0.2454$",
        "$0.4286$"
      ],
      "answer": 1,
      "solution": [
        "All 49 ordered pairs are equally likely before conditioning.",
        "The condition allows 21 ordered pairs. Exactly 3 of these lie on the diagonal x=y.",
        "The conditional ratio is 3/21=0.142857."
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
        "All 49 ordered pairs are equally likely before conditioning."
      ],
      "verification": {
        "kind": "uniform-pairs",
        "n": 7,
        "threshold": 9,
        "target": "equal-given-tail"
      },
      "level": "challenge",
      "id": "chapter:urv-b1-discrete-uniform:1",
      "topicId": "urv-b1-discrete-uniform",
      "family": "discrete-uniform-sum"
    }
  ],
  "urv-b2-binomial": [
    {
      "question": "A portfolio contains 5 independent policies with a common unknown claim probability p. The probability no policy has a claim is 0.44370531. Given at least one claim, calculate the probability at least two policies have claims. Round your answer to four decimal places.",
      "choices": [
        "$0.1500$",
        "$0.1648$",
        "$0.2962$",
        "$0.5563$",
        "$0.7038$"
      ],
      "answer": 2,
      "solution": [
        "From (1-p)^5=0.44370531, take the nth root to obtain p=0.15.",
        "The zero and exactly-one probabilities are 0.443705 and 0.391505. Thus P(N≥2)=0.16479.",
        "Condition on N≥1 by dividing by 0.556295; the answer is 0.296228."
      ],
      "feedback": {
        "0": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
        "1": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
        "3": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
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
        "From (1-p)^5=0.44370531, take the nth root to obtain p=0.15."
      ],
      "verification": {
        "kind": "binomial",
        "n": 5,
        "p": 0.15,
        "target": "atleast2-given-positive"
      },
      "level": "challenge",
      "id": "chapter:urv-b2-binomial:0",
      "topicId": "urv-b2-binomial",
      "family": "binomial-infer"
    },
    {
      "question": "6 independent devices each fail with probability 0.25 during a year. A contract pays nothing for the first failed device and 350 for each additional failed device, subject to a total payment cap of 700. Calculate expected annual payment. Round your answer to four decimal places.",
      "choices": [
        "$175.0000$",
        "$222.4243$",
        "$237.2925$",
        "$287.7075$",
        "$700.0000$"
      ],
      "answer": 1,
      "solution": [
        "The failure count N is binomial with n=6, p=0.25. The payment is 350min((N-1)₊,2).",
        "Use tail sums: expected payment = 350[P(N≥2)+P(N≥3)]. These two tail probabilities are 0.466064 and 0.169434.",
        "The expected payment is 222.424316. This includes years with zero payment."
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
        "The failure count N is binomial with n=6, p=0.25. The payment is 350min((N-1)₊,2)."
      ],
      "verification": {
        "kind": "binomial",
        "n": 6,
        "p": 0.25,
        "B": 350,
        "target": "capped-payment"
      },
      "level": "challenge",
      "id": "chapter:urv-b2-binomial:1",
      "topicId": "urv-b2-binomial",
      "family": "capped-binomial-payment"
    }
  ],
  "urv-b3-geometric": [
    {
      "question": "A device independently survives each year with probability 0.8, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays 100(4-t); after year 3 it pays zero. Calculate the variance of the payment. Round your answer to four decimal places.",
      "choices": [
        "$104.8000$",
        "$121.2310$",
        "$1600.0000$",
        "$14696.9600$",
        "$25680.0000$"
      ],
      "answer": 3,
      "solution": [
        "The first-failure year T is geometric: P(T=t)=0.2(0.8)^(t-1).",
        "Payment is 300, 200, 100 in the first three years; all later outcomes have payment zero.",
        "Weighted moments are E[Y]=104.8 and E[Y²]=25680.",
        "Var(Y)=E[Y²]-(E[Y])²=14696.96."
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
        "The first-failure year T is geometric: P(T=t)=0.2(0.8)^(t-1)."
      ],
      "verification": {
        "kind": "geometric-benefit",
        "p": 0.2,
        "B": 100,
        "horizon": 4,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-b3-geometric:0",
      "topicId": "urv-b3-geometric",
      "family": "geometric-benefit"
    },
    {
      "question": "The trial number T of a first success includes the successful trial. Independent trials have success probability 0.2. Given that a success occurs within 7 trials, calculate P(2<T≤5) under this condition. Round your answer to four decimal places.",
      "choices": [
        "$0.3123$",
        "$0.3952$",
        "$0.4645$",
        "$0.4880$",
        "$0.5120$"
      ],
      "answer": 1,
      "solution": [
        "For the trial-count convention P(T>k)=(1-p)^k.",
        "The requested interval has probability (0.8)^2-(0.8)^5=0.31232.",
        "It is contained in T≤7, whose probability is 0.790285. The conditional result is 0.395199."
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
        "p": 0.2,
        "a": 2,
        "b": 5,
        "limit": 7
      },
      "level": "challenge",
      "id": "chapter:urv-b3-geometric:1",
      "topicId": "urv-b3-geometric",
      "family": "geometric-conditioned"
    }
  ],
  "urv-b4-negative-binomial": [
    {
      "question": "Independent inspections each find a defect with probability 0.3. Let T be the inspection number at which the second defect is found. Given that the second defect is found by inspection 6, calculate P(T=6). Round your answer to four decimal places.",
      "choices": [
        "$0.1080$",
        "$0.1552$",
        "$0.1863$",
        "$0.5590$",
        "$0.5798$"
      ],
      "answer": 2,
      "solution": [
        "To have T=s, the last inspection is defective and exactly one of the first s-1 is defective: P(T=s)=(s-1)p²(1-p)^(s-2).",
        "The numerator at s=6 is 0.108045. Sum these masses from s=2 through 6 for denominator 0.579825.",
        "The conditional probability is 0.186341."
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
        "p": 0.3,
        "r": 2,
        "t": 6,
        "target": "at-t-given-by-t"
      },
      "level": "challenge",
      "id": "chapter:urv-b4-negative-binomial:0",
      "topicId": "urv-b4-negative-binomial",
      "family": "negative-binomial-joint"
    },
    {
      "question": "Independent trials have success probability 0.25. T1 and T2 are the trial numbers of the first and second successes. Given T2=8, calculate P(T1≤3). Round your answer to four decimal places.",
      "choices": [
        "$0.2500$",
        "$0.3750$",
        "$0.4286$",
        "$0.5781$",
        "$0.7500$"
      ],
      "answer": 2,
      "solution": [
        "Given T2=8, exactly one success occurred among trials 1 through 7, and trial 8 is a success.",
        "Every permitted first-success position has the same joint probability p²(1-p)^(T2-2). Thus those positions are conditionally equally likely.",
        "There are 3 qualifying positions out of 7, giving 0.428571."
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
        "Given T2=8, exactly one success occurred among trials 1 through 7, and trial 8 is a success."
      ],
      "verification": {
        "kind": "success-positions",
        "p": 0.25,
        "t": 8,
        "k": 3
      },
      "level": "challenge",
      "id": "chapter:urv-b4-negative-binomial:1",
      "topicId": "urv-b4-negative-binomial",
      "family": "first-success-given-second"
    }
  ],
  "urv-b5-hypergeometric": [
    {
      "question": "A container is type H with probability 0.4, otherwise type L. Both types hold 9 components; type H contains 4 defective components and type L contains 2. Three are sampled without replacement and exactly two defects are observed. Calculate the posterior probability the container is type H. Round your answer to four decimal places.",
      "choices": [
        "$0.1429$",
        "$0.3571$",
        "$0.4000$",
        "$0.7407$",
        "$0.8108$"
      ],
      "answer": 3,
      "solution": [
        "The observation likelihood is choose(4,2)choose(5,1)/choose(9,3)=0.357143 for H and 0.083333 for L.",
        "The total observation probability is 0.192857.",
        "Weight the H likelihood by its prior and divide by the total: 0.740741."
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
        "w": 0.4
      },
      "level": "challenge",
      "id": "chapter:urv-b5-hypergeometric:0",
      "topicId": "urv-b5-hypergeometric",
      "family": "hypergeom-bayes"
    },
    {
      "question": "A sample of four devices is selected uniformly without replacement from 11 devices, 4 of which are damaged. A warranty pays 100 per damaged device in the sample after the first damaged device. Calculate expected payment. Round your answer to four decimal places.",
      "choices": [
        "$45.4545$",
        "$56.0606$",
        "$65.6179$",
        "$89.3939$",
        "$145.4545$"
      ],
      "answer": 1,
      "solution": [
        "The sampled damaged count X is hypergeometric, so E[X]=4(4/11).",
        "The payment is B(X-1)₊. Since (X-1)₊=X-1+1{X=0}, expectation can be found from the mean and the zero probability.",
        "P(X=0)=choose(7,4)/choose(11,4)=0.106061; expected payment is 100[1.454545-1+0.106061]=56.060606."
      ],
      "feedback": {
        "0": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
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
        "The sampled damaged count X is hypergeometric, so E[X]=4(4/11)."
      ],
      "verification": {
        "kind": "hypergeom",
        "N": 11,
        "K": 4,
        "n": 4,
        "B": 100,
        "target": "excess-payment"
      },
      "level": "challenge",
      "id": "chapter:urv-b5-hypergeometric:1",
      "topicId": "urv-b5-hypergeometric",
      "family": "hypergeom-payment"
    }
  ],
  "urv-b6-poisson": [
    {
      "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-0.8). A policy pays 300 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
      "choices": [
        "$-60.0000$",
        "$0.0000$",
        "$74.7987$",
        "$165.2013$",
        "$240.0000$"
      ],
      "answer": 2,
      "solution": [
        "P(N=0)=exp(-λ) identifies λ=0.8.",
        "Payment is 300(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
        "E[Y]=300[λ-1+exp(-λ)]=74.798689."
      ],
      "feedback": {
        "0": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
        "1": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
        "3": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
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
        "P(N=0)=exp(-λ) identifies λ=0.8."
      ],
      "verification": {
        "kind": "poisson",
        "lam": 0.8,
        "B": 300,
        "target": "excess-payment"
      },
      "level": "challenge",
      "id": "chapter:urv-b6-poisson:0",
      "topicId": "urv-b6-poisson",
      "family": "poisson-deductible"
    },
    {
      "question": "Independent claim counts X and Y from two branches are Poisson with means 1.2 and 0.8. Given X+Y=4, calculate P(X≥2). Round your answer to four decimal places.",
      "choices": [
        "$0.1296$",
        "$0.3374$",
        "$0.6000$",
        "$0.8208$",
        "$0.9744$"
      ],
      "answer": 3,
      "solution": [
        "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.6.",
        "The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n=4.",
        "Evaluate 1-(1-p)^4-4p(1-p)^3=0.8208."
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
        "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.6."
      ],
      "verification": {
        "kind": "poisson-split",
        "a": 1.2,
        "b": 0.8,
        "n": 4,
        "target": "atleast2"
      },
      "level": "challenge",
      "id": "chapter:urv-b6-poisson:1",
      "topicId": "urv-b6-poisson",
      "family": "poisson-split-condition"
    }
  ],
  "urv-c1-continuous-uniform": [
    {
      "question": "A loss X is uniform on (0,1400). A policy pays the positive excess above an ordinary deductible d, with no other limits. Expected payment is 0.16 times the mean loss. Calculate d. Round your answer to four decimal places.",
      "choices": [
        "$224.0000$",
        "$560.0000$",
        "$700.0000$",
        "$840.0000$",
        "$1176.0000$"
      ],
      "answer": 3,
      "solution": [
        "E[X]=1400/2. Integrating the deductible payment gives E[(X-d)₊]=(1400-d)²/(2×1400).",
        "Set the ratio to 0.16: ((1400-d)/1400)²=0.16.",
        "The admissible deductible lies between 0 and 1400: d=1400(1-√0.16)=840."
      ],
      "feedback": {
        "0": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "1": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "2": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "4": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction."
      },
      "skills": [
        "uniform integration",
        "inverse insurance parameter"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: uniform integration, inverse insurance parameter.",
        "E[X]=1400/2. Integrating the deductible payment gives E[(X-d)₊]=(1400-d)²/(2×1400)."
      ],
      "verification": {
        "kind": "uniform-deductible",
        "B": 1400,
        "ratio": 0.16,
        "target": "deductible"
      },
      "level": "challenge",
      "id": "chapter:urv-c1-continuous-uniform:0",
      "topicId": "urv-c1-continuous-uniform",
      "family": "uniform-infer-deductible"
    },
    {
      "question": "X is uniform on (0,1200). Insurer payment is Y=min(0.75 max(X-240,0),600). Calculate Var(Y) per loss. Round your answer to four decimal places.",
      "choices": [
        "$222.7106$",
        "$49600.0000$",
        "$67500.0000$",
        "$78400.0000$",
        "$128000.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment is zero through 240, grows at rate 0.75 until loss 1040, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=280 and E[Y²]=128000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=49600."
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
        "Payment is zero through 240, grows at rate 0.75 until loss 1040, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1200,
        "d": 240.0,
        "share": 0.75,
        "cap": 600.0,
        "inflation": 1,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-c1-continuous-uniform:1",
      "topicId": "urv-c1-continuous-uniform",
      "family": "uniform-payment-variance"
    }
  ],
  "urv-c2-exponential": [
    {
      "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-400)₊] to E[X] is 0.67032005, rounded to eight decimal places. Calculate P(X>800). Round your answer to four decimal places.",
      "choices": [
        "$0.1353$",
        "$0.4493$",
        "$0.5507$",
        "$0.5527$",
        "$0.6703$"
      ],
      "answer": 1,
      "solution": [
        "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
        "The positive mean is μ=1000; survival beyond 800 is exp(-800/1000).",
        "The probability is 0.449329."
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
        "mu": 1000,
        "d": 400,
        "threshold": 800,
        "target": "tail-from-deductible"
      },
      "level": "challenge",
      "id": "chapter:urv-c2-exponential:0",
      "topicId": "urv-c2-exponential",
      "family": "exponential-infer"
    },
    {
      "question": "A device lifetime is exponential with mean 4 years. A contract pays benefit B for failure by year 1, pays 0.4B for failure after year 1 but by year 3, and otherwise pays zero. Its expected payment is 600. Calculate B. Round your answer to four decimal places.",
      "choices": [
        "$206.2637$",
        "$1137.1531$",
        "$1500.0000$",
        "$1745.3382$",
        "$2712.4870$"
      ],
      "answer": 3,
      "solution": [
        "The two covered interval probabilities are 0.221199 and 0.306434.",
        "E[benefit]=B[0.221199+0.4(0.306434)]=0.343773B.",
        "Solve B=600/0.343773=1745.338228."
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
        "The two covered interval probabilities are 0.221199 and 0.306434."
      ],
      "verification": {
        "kind": "exponential-benefit",
        "mu": 4,
        "t1": 1,
        "t2": 3,
        "fraction": 0.4,
        "meanPay": 600
      },
      "level": "challenge",
      "id": "chapter:urv-c2-exponential:1",
      "topicId": "urv-c2-exponential",
      "family": "exponential-benefit"
    }
  ],
  "urv-c3-gamma": [
    {
      "question": "A gamma waiting time T has mean 16 and variance 64. Calculate P(T>16). Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0183$",
        "$0.2500$",
        "$0.4335$",
        "$0.5665$"
      ],
      "answer": 3,
      "solution": [
        "Using mean αθ and variance αθ², infer scale θ=64/16=4 and shape α=4.",
        "The inferred shape is an integer, so gamma survival equals a Poisson lower tail: exp(-t/θ) times the sum of (t/θ)^j/j! for j=0,…,α-1.",
        "At t=16, t/θ=4.0. The probability is 0.43347."
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
        "Using mean αθ and variance αθ², infer scale θ=64/16=4 and shape α=4."
      ],
      "verification": {
        "kind": "gamma",
        "shape": 4,
        "scale": 4,
        "t": 16,
        "target": "tail-from-moments"
      },
      "level": "challenge",
      "id": "chapter:urv-c3-gamma:0",
      "topicId": "urv-c3-gamma",
      "family": "gamma-parameter-tail"
    },
    {
      "question": "A Poisson process has rate 0.4 per hour. Let T be the time of the 3th arrival. Given no 3th arrival by hour 2, calculate the probability it is still absent at hour 5. Round your answer to four decimal places.",
      "choices": [
        "$0.2896$",
        "$0.3012$",
        "$0.6767$",
        "$0.7104$",
        "$0.8581$"
      ],
      "answer": 3,
      "solution": [
        "T is gamma with shape 3 and rate 0.4. Its survival is P(N(t)≤2), not a single exponential waiting-time tail.",
        "The survival probabilities at the two times are 0.952577 and 0.676676.",
        "The conditional tail ratio is 0.676676/0.952577=0.710364. Gamma with shape greater than one is not memoryless."
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
        "T is gamma with shape 3 and rate 0.4. Its survival is P(N(t)≤2), not a single exponential waiting-time tail."
      ],
      "verification": {
        "kind": "gamma",
        "shape": 3,
        "scale": 2.5,
        "a": 2,
        "b": 5,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "chapter:urv-c3-gamma:1",
      "topicId": "urv-c3-gamma",
      "family": "gamma-sum-condition"
    }
  ],
  "urv-c4-beta": [
    {
      "question": "A proportion X has a beta distribution. Its mean is specified exactly as 2/(2+4) and its variance as (2×4)/[(2+4)²(2+4+1)]. Four risks share the same X; conditional on X=x each risk independently has a claim with probability x. Calculate the unconditional probability that the first two risks both claim, irrespective of the other two. Round your answer to four decimal places.",
      "choices": [
        "$0.0317$",
        "$0.1111$",
        "$0.1429$",
        "$0.3333$",
        "$0.8889$"
      ],
      "answer": 2,
      "solution": [
        "Given X=x, the first-two joint claim probability is x². The unconditional probability is therefore E[X²].",
        "Use the moment identity E[X²]=Var(X)+(E[X])². Conditional independence given X does not imply unconditional independence.",
        "The result is 0.031746+(2/6)²=0.142857."
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
        "a": 2,
        "b": 4,
        "target": "second-moment"
      },
      "level": "challenge",
      "id": "chapter:urv-c4-beta:0",
      "topicId": "urv-c4-beta",
      "family": "beta-infer"
    },
    {
      "question": "A random damage fraction X has density f(x)=12x^2(1-x) for 0<x<1, and zero elsewhere. Given X>0.3, calculate P(X>0.7). Round your answer to four decimal places.",
      "choices": [
        "$0.1284$",
        "$0.3483$",
        "$0.3801$",
        "$0.5680$",
        "$0.8208$"
      ],
      "answer": 2,
      "solution": [
        "This is a beta(3,2) density. Integrating gives F(x)=4x^3-3x^4.",
        "The two required survival probabilities are 0.9163 and 0.3483.",
        "The higher-threshold tail is contained in the condition; divide the two tail probabilities to obtain 0.380116."
      ],
      "feedback": {
        "0": "Integrate the density to obtain each tail and normalize by the condition; a beta variable is not memoryless.",
        "1": "Integrate the density to obtain each tail and normalize by the condition; a beta variable is not memoryless.",
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
        "This is a beta(3,2) density. Integrating gives F(x)=4x^3-3x^4."
      ],
      "verification": {
        "kind": "beta",
        "a": 3,
        "b": 2,
        "lo": 0.30000000000000004,
        "hi": 0.7,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "chapter:urv-c4-beta:1",
      "topicId": "urv-c4-beta",
      "family": "beta-conditional"
    }
  ],
  "urv-c5-normal": [
    {
      "question": "Loss X is normal with mean 100. Its 80th percentile is 112.62431850, rounded to eight decimal places. Calculate P(X>122.5). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
      "choices": [
        "$0.0668$",
        "$0.2000$",
        "$0.2551$",
        "$0.4602$",
        "$0.9332$"
      ],
      "answer": 0,
      "solution": [
        "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=15.",
        "The threshold has z=(122.5-100)/15=1.5.",
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
        "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=15."
      ],
      "verification": {
        "kind": "normal",
        "mu": 100,
        "sd": 15,
        "t": 122.5,
        "target": "tail-from-quantile"
      },
      "level": "challenge",
      "id": "chapter:urv-c5-normal:0",
      "topicId": "urv-c5-normal",
      "family": "normal-quantile-infer"
    },
    {
      "question": "X is normal with mean 10 and variance 9. Calculate P((X-9)²<9). Round your answer to four decimal places.",
      "choices": [
        "$0.2596$",
        "$0.3437$",
        "$0.6563$",
        "$0.6827$",
        "$0.7475$"
      ],
      "answer": 2,
      "solution": [
        "Solve the quadratic event: 6<X<12. Both endpoints contribute to the probability.",
        "The standard normal endpoints are -1.333333 and 0.666667 because SD is 3.",
        "Take the CDF difference: Φ(0.666667)-Φ(-1.333333)=0.656296."
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
        "Solve the quadratic event: 6<X<12. Both endpoints contribute to the probability."
      ],
      "verification": {
        "kind": "normal",
        "mu": 10,
        "sd": 3,
        "lo": 6,
        "hi": 12,
        "target": "quadratic-interval"
      },
      "level": "challenge",
      "id": "chapter:urv-c5-normal:1",
      "topicId": "urv-c5-normal",
      "family": "normal-quadratic"
    }
  ],
  "urv-c6-lognormal": [
    {
      "question": "Optional enrichment: log X is normal with mean 3.2 and SD 0.5. Payment is Y=0.8 max(X-20,0). Calculate P(Y>30). Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0442$",
        "$0.0772$",
        "$0.3437$",
        "$0.9558$"
      ],
      "answer": 1,
      "solution": [
        "The payment event is X>20+30/0.8=57.5.",
        "Take logs and standardize log X: z=(log(57.5)-3.2)/0.5=1.70357.",
        "The upper normal tail gives 0.044231."
      ],
      "feedback": {
        "0": "Apply the payment transformation first, then standardize the logarithm of the loss threshold.",
        "2": "Apply the payment transformation first, then standardize the logarithm of the loss threshold.",
        "3": "Apply the payment transformation first, then standardize the logarithm of the loss threshold.",
        "4": "Apply the payment transformation first, then standardize the logarithm of the loss threshold."
      },
      "skills": [
        "insurance threshold",
        "log transformation",
        "normal tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: insurance threshold, log transformation, normal tail.",
        "The payment event is X>20+30/0.8=57.5."
      ],
      "verification": {
        "kind": "lognormal",
        "mu": 3.2,
        "sigma": 0.5,
        "threshold": 57.5,
        "target": "tail"
      },
      "level": "challenge",
      "id": "chapter:urv-c6-lognormal:0",
      "topicId": "urv-c6-lognormal",
      "family": "lognormal-payment-tail"
    },
    {
      "question": "Optional enrichment: X is lognormal with mean 100 and coefficient of variation 0.7. Calculate its median. Round your answer to four decimal places.",
      "choices": [
        "$67.1141$",
        "$70.0000$",
        "$81.9232$",
        "$100.0000$",
        "$122.0656$"
      ],
      "answer": 2,
      "solution": [
        "For a lognormal variable CV²=exp(σ²)-1, so σ²=log(1+0.49).",
        "E[X]=exp(μ+σ²/2), so the median exp(μ)=E[X]exp(-σ²/2).",
        "The median is 100/√(1+0.49)=81.923192."
      ],
      "feedback": {
        "0": "Recover log variance from CV and separate median from mean; the mean includes the half-variance correction.",
        "1": "Recover log variance from CV and separate median from mean; the mean includes the half-variance correction.",
        "3": "Recover log variance from CV and separate median from mean; the mean includes the half-variance correction.",
        "4": "Recover log variance from CV and separate median from mean; the mean includes the half-variance correction."
      },
      "skills": [
        "infer distribution parameters",
        "distinguish mean and median"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer distribution parameters, distinguish mean and median.",
        "For a lognormal variable CV²=exp(σ²)-1, so σ²=log(1+0.49)."
      ],
      "verification": {
        "kind": "lognormal",
        "mean": 100,
        "cv": 0.7,
        "target": "median-from-moments"
      },
      "level": "challenge",
      "id": "chapter:urv-c6-lognormal:1",
      "topicId": "urv-c6-lognormal",
      "family": "lognormal-moment-infer"
    }
  ],
  "urv-d1-conditional-discrete": [
    {
      "question": "6 independent insureds each have claim probability 0.3. Let N count insureds with a claim. Given N>0, calculate E[N]. Round your answer to four decimal places.",
      "choices": [
        "$1.1333$",
        "$1.5882$",
        "$1.8000$",
        "$2.0400$",
        "$2.5714$"
      ],
      "answer": 3,
      "solution": [
        "N is binomial with mean 1.8 and zero probability 0.117649.",
        "The N=0 outcome contributes zero to the unconditional first moment, so the positive-count moment numerator remains E[N].",
        "Renormalize by P(N>0): 1.8/0.882351=2.040004."
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
        "N is binomial with mean 1.8 and zero probability 0.117649."
      ],
      "verification": {
        "kind": "binomial",
        "n": 6,
        "p": 0.30000000000000004,
        "target": "positive-mean"
      },
      "level": "challenge",
      "id": "chapter:urv-d1-conditional-discrete:0",
      "topicId": "urv-d1-conditional-discrete",
      "family": "conditional-binomial-mean"
    },
    {
      "question": "7 independent policies each have claim probability 0.25. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
      "choices": [
        "$0.9702$",
        "$1.3125$",
        "$1.5147$",
        "$1.9865$",
        "$5.0490$"
      ],
      "answer": 0,
      "solution": [
        "Unconditionally E[N]=1.75 and E[N²]=np(1-p)+(np)²=4.375.",
        "The condition probability is 0.866516. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
        "Conditional variance is 4.375/0.866516-(1.75/0.866516)²=0.970244."
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
        "Unconditionally E[N]=1.75 and E[N²]=np(1-p)+(np)²=4.375."
      ],
      "verification": {
        "kind": "binomial",
        "n": 7,
        "p": 0.25,
        "target": "positive-variance"
      },
      "level": "challenge",
      "id": "chapter:urv-d1-conditional-discrete:1",
      "topicId": "urv-d1-conditional-discrete",
      "family": "conditional-binomial-variance"
    }
  ],
  "urv-d2-conditional-continuous": [
    {
      "question": "Loss X has density f(x)=2x/16 on (0,4) and zero elsewhere. A claim is recorded only when X>1. Calculate the mean loss among recorded claims. Round your answer to four decimal places.",
      "choices": [
        "$2.4609$",
        "$2.5000$",
        "$2.6250$",
        "$2.6667$",
        "$2.8000$"
      ],
      "answer": 4,
      "solution": [
        "The recording probability is 1-(1/4)²=0.9375.",
        "The restricted first-moment integral is the integral of x(2x/16) from 1 to 4, equal to 2.625.",
        "Normalize to the recorded population: 2.625/0.9375=2.8."
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
        "The recording probability is 1-(1/4)²=0.9375."
      ],
      "verification": {
        "kind": "power-density",
        "L": 4,
        "power": 1,
        "lower": 1,
        "target": "conditional-mean"
      },
      "level": "challenge",
      "id": "chapter:urv-d2-conditional-continuous:0",
      "topicId": "urv-d2-conditional-continuous",
      "family": "continuous-conditional-mean"
    },
    {
      "question": "X has density f(x)=a+bx on (0,4) and zero elsewhere. The unknown constants satisfy a:b=0.5:0.3. Given X>2, calculate P(X>3.2). Round your answer to four decimal places.",
      "choices": [
        "$0.2000$",
        "$0.2873$",
        "$0.3491$",
        "$0.4514$",
        "$0.5552$"
      ],
      "answer": 3,
      "solution": [
        "Write a=0.5c and b=0.3c. Normalizing the density gives c=1/4.4.",
        "The CDF on the support is F(x)=0.113636x+(0.068182/2)x².",
        "Divide the tail above 3.2 by the tail above 2: 0.287273/0.636364=0.451429."
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
        "Write a=0.5c and b=0.3c. Normalizing the density gives c=1/4.4."
      ],
      "verification": {
        "kind": "linear-density",
        "L": 4,
        "A": 0.11363636363636363,
        "B": 0.06818181818181819,
        "t": 2.0,
        "u": 3.2,
        "target": "conditional-tail"
      },
      "level": "challenge",
      "id": "chapter:urv-d2-conditional-continuous:1",
      "topicId": "urv-d2-conditional-continuous",
      "family": "density-infer-conditional"
    }
  ],
  "urv-e1-expected-value": [
    {
      "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-1). A policy pays 300 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$110.3638$",
        "$129.1527$",
        "$189.6362$",
        "$300.0000$"
      ],
      "answer": 1,
      "solution": [
        "P(N=0)=exp(-λ) identifies λ=1.",
        "Payment is 300(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
        "E[Y]=300[λ-1+exp(-λ)]=110.363832."
      ],
      "feedback": {
        "0": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
        "3": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
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
        "P(N=0)=exp(-λ) identifies λ=1."
      ],
      "verification": {
        "kind": "poisson",
        "lam": 1.0,
        "B": 300,
        "target": "excess-payment"
      },
      "level": "challenge",
      "id": "chapter:urv-e1-expected-value:0",
      "topicId": "urv-e1-expected-value",
      "family": "poisson-deductible"
    },
    {
      "question": "A device lifetime is exponential with mean 6 years. A contract pays benefit B for failure by year 1, pays 0.4B for failure after year 1 but by year 3, and otherwise pays zero. Its expected payment is 800. Calculate B. Round your answer to four decimal places.",
      "choices": [
        "$199.5990$",
        "$2000.0000$",
        "$2033.1953$",
        "$3206.4295$",
        "$5211.1060$"
      ],
      "answer": 3,
      "solution": [
        "The two covered interval probabilities are 0.153518 and 0.239951.",
        "E[benefit]=B[0.153518+0.4(0.239951)]=0.249499B.",
        "Solve B=800/0.249499=3206.429517."
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
        "The two covered interval probabilities are 0.153518 and 0.239951."
      ],
      "verification": {
        "kind": "exponential-benefit",
        "mu": 6,
        "t1": 1,
        "t2": 3,
        "fraction": 0.4,
        "meanPay": 800
      },
      "level": "challenge",
      "id": "chapter:urv-e1-expected-value:1",
      "topicId": "urv-e1-expected-value",
      "family": "exponential-benefit"
    }
  ],
  "urv-e2-moments": [
    {
      "question": "X has density 2x/9 on (0,3). A benefit is Y=1X²+3. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.5000$",
        "$6.7500$",
        "$7.9245$",
        "$15.7500$",
        "$27.0000$"
      ],
      "answer": 1,
      "solution": [
        "Variance ignores the additive constant, so Var(Y)=1Var(X²).",
        "Integrating the density gives E[X²]=4.5 and E[X⁴]=27.",
        "Var(Y)=1(E[X⁴]-(E[X²])²)=6.75."
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
        "L": 3,
        "power": 1,
        "a": 1,
        "b": 3,
        "target": "variance-square"
      },
      "level": "challenge",
      "id": "chapter:urv-e2-moments:0",
      "topicId": "urv-e2-moments",
      "family": "quadratic-moment"
    },
    {
      "question": "Independent X,Y have means 11,16 and variances 6,10, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
      "choices": [
        "$114.0000$",
        "$139.0000$",
        "$423.0000$",
        "$441.0000$",
        "$555.0000$"
      ],
      "answer": 4,
      "solution": [
        "Linearity gives E[T]=2(11)-3(16)+5=-21.",
        "Independence gives Var(T)=4(6)+9(10)=114; the constant contributes zero variance.",
        "E[T²]=Var(T)+(E[T])²=114+441=555."
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
        "Linearity gives E[T]=2(11)-3(16)+5=-21."
      ],
      "verification": {
        "kind": "linear-moments",
        "mx": 11,
        "my": 16,
        "vx": 6,
        "vy": 10,
        "a": 2,
        "b": -3,
        "shift": 5,
        "target": "second"
      },
      "level": "challenge",
      "id": "chapter:urv-e2-moments:1",
      "topicId": "urv-e2-moments",
      "family": "linear-second-moment"
    }
  ],
  "urv-e3-mode-median-percentiles": [
    {
      "question": "X has density proportional to x^1 on (0,7) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
      "choices": [
        "$3.1305$",
        "$3.6897$",
        "$4.2000$",
        "$5.4222$",
        "$6.2610$"
      ],
      "answer": 0,
      "solution": [
        "Normalize the density: f(x)=2x^1/49, so F(x)=(x/7)^2.",
        "Solve F(q)=u to get q(u)=7u^(1/2).",
        "The requested difference is 7[0.8^(1/2)-0.2^(1/2)]=3.130495."
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
        "Normalize the density: f(x)=2x^1/49, so F(x)=(x/7)^2."
      ],
      "verification": {
        "kind": "power-density",
        "L": 7,
        "power": 1,
        "low": 0.2,
        "high": 0.8,
        "target": "quantile-difference"
      },
      "level": "challenge",
      "id": "chapter:urv-e3-mode-median-percentiles:0",
      "topicId": "urv-e3-mode-median-percentiles",
      "family": "power-quantile-difference"
    },
    {
      "question": "Loss X is normal with mean 120. Its 80th percentile is 136.83242467, rounded to eight decimal places. Calculate P(X>150.0). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
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
        "The threshold has z=(150.0-120)/20=1.5.",
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
        "mu": 120,
        "sd": 20,
        "t": 150.0,
        "target": "tail-from-quantile"
      },
      "level": "challenge",
      "id": "chapter:urv-e3-mode-median-percentiles:1",
      "topicId": "urv-e3-mode-median-percentiles",
      "family": "normal-quantile-infer"
    }
  ],
  "urv-f1-variance": [
    {
      "question": "A policy has no claim with probability 0.85 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1600). The insurer pays the positive excess over a deductible of 400. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
      "choices": [
        "$222.3595$",
        "$23625.0000$",
        "$49443.7500$",
        "$54000.0000$",
        "$157500.0000$"
      ],
      "answer": 2,
      "solution": [
        "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000.",
        "Include no-claim policies by multiplying each raw moment by claim probability 0.15: E[Y]=67.5, E[Y²]=54000.",
        "The per-policy variance is 54000-(67.5)²=49443.75."
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
        "p": 0.15,
        "B": 1600,
        "d": 400.0,
        "target": "payment-variance"
      },
      "level": "challenge",
      "id": "chapter:urv-f1-variance:0",
      "topicId": "urv-f1-variance",
      "family": "mixture-variance"
    },
    {
      "question": "X has density 2x/4 on (0,2). A benefit is Y=2X²+2. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.8889$",
        "$2.6667$",
        "$5.3333$",
        "$9.3333$",
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
        "b": 2,
        "target": "variance-square"
      },
      "level": "challenge",
      "id": "chapter:urv-f1-variance:1",
      "topicId": "urv-f1-variance",
      "family": "quadratic-moment"
    }
  ],
  "urv-f2-standard-deviation": [
    {
      "question": "X is uniform on (0,1500). Insurer payment is Y=min(0.75 max(X-300,0),750). Calculate the standard deviation of Y per loss. Round your answer to four decimal places.",
      "choices": [
        "$278.3882$",
        "$324.7595$",
        "$350.0000$",
        "$447.2136$",
        "$77500.0000$"
      ],
      "answer": 0,
      "solution": [
        "Payment is zero through 300, grows at rate 0.75 until loss 1300, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=350 and E[Y²]=200000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=77500.",
        "Take the square root of the variance to get SD(Y)=278.388218."
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
        "Payment is zero through 300, grows at rate 0.75 until loss 1300, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1500,
        "d": 300.0,
        "share": 0.75,
        "cap": 750.0,
        "inflation": 1,
        "target": "sd"
      },
      "level": "challenge",
      "id": "chapter:urv-f2-standard-deviation:0",
      "topicId": "urv-f2-standard-deviation",
      "family": "uniform-payment-sd"
    },
    {
      "question": "A policy has no claim with probability 0.85 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1200). The insurer pays the positive excess over a deductible of 300. Calculate the annual payment standard deviation per policy. Round your answer to four decimal places.",
      "choices": [
        "$50.6250$",
        "$115.2782$",
        "$166.7696$",
        "$297.6470$",
        "$27812.1094$"
      ],
      "answer": 2,
      "solution": [
        "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500.",
        "Include no-claim policies by multiplying each raw moment by claim probability 0.15: E[Y]=50.625, E[Y²]=30375.",
        "The per-policy variance is 30375-(50.625)²=27812.109375.",
        "The square root of the per-policy variance is 166.76963."
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
        "p": 0.15,
        "B": 1200,
        "d": 300.0,
        "target": "payment-sd"
      },
      "level": "challenge",
      "id": "chapter:urv-f2-standard-deviation:1",
      "topicId": "urv-f2-standard-deviation",
      "family": "mixture-payment-sd"
    }
  ],
  "urv-f3-coefficient-variation": [
    {
      "question": "Positive loss X has mean 40 and standard deviation 20. Adjusted cost is Y=1.2X+b. If Y has coefficient of variation 0.25 and positive mean, calculate b. Round your answer to four decimal places.",
      "choices": [
        "$40.0000$",
        "$48.0000$",
        "$56.1870$",
        "$64.3740$",
        "$96.0000$"
      ],
      "answer": 1,
      "solution": [
        "Linear scaling gives SD(Y)=1.2(20)=24; a constant adds no variance.",
        "CV(Y)=SD(Y)/E[Y] implies E[Y]=24/0.25=96.",
        "Solve 1.2(40)+b=96, giving b=48."
      ],
      "feedback": {
        "0": "Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance.",
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
        "Linear scaling gives SD(Y)=1.2(20)=24; a constant adds no variance."
      ],
      "verification": {
        "kind": "affine-cv",
        "mean": 40,
        "sd": 20,
        "a": 1.2,
        "targetCV": 0.25
      },
      "level": "challenge",
      "id": "chapter:urv-f3-coefficient-variation:0",
      "topicId": "urv-f3-coefficient-variation",
      "family": "affine-cv-infer"
    },
    {
      "question": "X is uniform on (0,1500). Insurer payment is Y=min(0.75 max(X-300,0),750). Calculate the coefficient of variation of Y per loss. Round your answer to four decimal places.",
      "choices": [
        "$0.3712$",
        "$0.5774$",
        "$0.7954$",
        "$1.2572$",
        "$221.4286$"
      ],
      "answer": 2,
      "solution": [
        "Payment is zero through 300, grows at rate 0.75 until loss 1300, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=350 and E[Y²]=200000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=77500.",
        "CV(Y)=SD(Y)/E[Y]=278.388218/350=0.795395."
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
        "Payment is zero through 300, grows at rate 0.75 until loss 1300, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1500,
        "d": 300.0,
        "share": 0.75,
        "cap": 750.0,
        "inflation": 1,
        "target": "cv"
      },
      "level": "challenge",
      "id": "chapter:urv-f3-coefficient-variation:1",
      "topicId": "urv-f3-coefficient-variation",
      "family": "uniform-payment-cv"
    }
  ],
  "urv-g1-deductibles": [
    {
      "question": "A loss X is uniform on (0,1800). A policy pays the positive excess above an ordinary deductible d, with no other limits. Expected payment is 0.16 times the mean loss. Calculate d. Round your answer to four decimal places.",
      "choices": [
        "$288.0000$",
        "$720.0000$",
        "$900.0000$",
        "$1080.0000$",
        "$1512.0000$"
      ],
      "answer": 3,
      "solution": [
        "E[X]=1800/2. Integrating the deductible payment gives E[(X-d)₊]=(1800-d)²/(2×1800).",
        "Set the ratio to 0.16: ((1800-d)/1800)²=0.16.",
        "The admissible deductible lies between 0 and 1800: d=1800(1-√0.16)=1080."
      ],
      "feedback": {
        "0": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "1": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "2": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction.",
        "4": "The payment expectation is quadratic in the remaining support length; solve that equation rather than using a linear fraction."
      },
      "skills": [
        "uniform integration",
        "inverse insurance parameter"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: uniform integration, inverse insurance parameter.",
        "E[X]=1800/2. Integrating the deductible payment gives E[(X-d)₊]=(1800-d)²/(2×1800)."
      ],
      "verification": {
        "kind": "uniform-deductible",
        "B": 1800,
        "ratio": 0.16,
        "target": "deductible"
      },
      "level": "challenge",
      "id": "chapter:urv-g1-deductibles:0",
      "topicId": "urv-g1-deductibles",
      "family": "uniform-infer-deductible"
    },
    {
      "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-200)₊] to E[X] is 0.77880078, rounded to eight decimal places. Calculate P(X>400). Round your answer to four decimal places.",
      "choices": [
        "$0.1353$",
        "$0.3935$",
        "$0.6065$",
        "$0.7366$",
        "$0.7788$"
      ],
      "answer": 2,
      "solution": [
        "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
        "The positive mean is μ=800; survival beyond 400 is exp(-400/800).",
        "The probability is 0.606531."
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
        "mu": 800,
        "d": 200,
        "threshold": 400,
        "target": "tail-from-deductible"
      },
      "level": "challenge",
      "id": "chapter:urv-g1-deductibles:1",
      "topicId": "urv-g1-deductibles",
      "family": "exponential-infer"
    }
  ],
  "urv-g2-coinsurance": [
    {
      "question": "Loss X is uniform on (0,1200). Payment is Y=c max(X-240,0), where the insurer share c is unknown. Mean payment per loss is 288. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$55296.0000$",
        "$67500.0000$",
        "$73728.0000$",
        "$82944.0000$",
        "$184320.0000$"
      ],
      "answer": 0,
      "solution": [
        "Before coinsurance, the deductible payment mean is (1200-240)²/(2×1200)=384.",
        "The given mean identifies c=0.75. The deductible-payment second moment is (1200-240)³/(3×1200).",
        "Variance is c² times the deductible-payment variance, giving 55296."
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
        "Before coinsurance, the deductible payment mean is (1200-240)²/(2×1200)=384."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1200,
        "d": 240.0,
        "share": 0.75,
        "cap": 120000,
        "inflation": 1,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-g2-coinsurance:0",
      "topicId": "urv-g2-coinsurance",
      "family": "coinsurance-infer"
    },
    {
      "question": "X is uniform on (0,2200). Payment is Y=min(0.8 max(X-550,0),L). The probability of a payment exactly equal to the positive cap L is 0.375. Calculate L. Round your answer to four decimal places.",
      "choices": [
        "$495.0000$",
        "$660.0000$",
        "$772.2270$",
        "$825.0000$",
        "$1375.0000$"
      ],
      "answer": 1,
      "solution": [
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/2200.",
        "Set this probability to 0.375 and solve the loss threshold as 2200(1-0.375)=1375.",
        "L=0.8(1375-550)=660."
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
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/2200."
      ],
      "verification": {
        "kind": "uniform-cap-infer",
        "B": 2200,
        "d": 550.0,
        "share": 0.8,
        "mass": 0.375
      },
      "level": "challenge",
      "id": "chapter:urv-g2-coinsurance:1",
      "topicId": "urv-g2-coinsurance",
      "family": "cap-infer"
    }
  ],
  "urv-g3-benefit-limits": [
    {
      "question": "X is uniform on (0,1800). Payment is Y=min(0.8 max(X-450,0),L). The probability of a payment exactly equal to the positive cap L is 0.375. Calculate L. Round your answer to four decimal places.",
      "choices": [
        "$405.0000$",
        "$540.0000$",
        "$631.8270$",
        "$675.0000$",
        "$1125.0000$"
      ],
      "answer": 1,
      "solution": [
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/1800.",
        "Set this probability to 0.375 and solve the loss threshold as 1800(1-0.375)=1125.",
        "L=0.8(1125-450)=540."
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
        "The cap is reached when X≥d+L/0.8. Uniform survival gives P(Y=L)=1-(d+L/0.8)/1800."
      ],
      "verification": {
        "kind": "uniform-cap-infer",
        "B": 1800,
        "d": 450.0,
        "share": 0.8,
        "mass": 0.375
      },
      "level": "challenge",
      "id": "chapter:urv-g3-benefit-limits:0",
      "topicId": "urv-g3-benefit-limits",
      "family": "cap-infer"
    },
    {
      "question": "Loss X is exponential with mean 800. Payment is Y=min(0.75 max(X-300,0),500). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
      "choices": [
        "$233.1568$",
        "$339.2411$",
        "$412.3736$",
        "$500.0000$",
        "$600.0000$"
      ],
      "answer": 1,
      "solution": [
        "Positive payment occurs exactly when X>300, with probability exp(-300/800)=0.687289.",
        "Using survival integration up to the final payment cap gives E[Y]=0.75(800)[exp(-300/800)-exp(-(300+500/0.75)/800)]=233.156754.",
        "The per-payment mean is E[Y]/P(Y>0)=339.241075."
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
        "Positive payment occurs exactly when X>300, with probability exp(-300/800)=0.687289."
      ],
      "verification": {
        "kind": "exp-payment",
        "mu": 800,
        "d": 300,
        "share": 0.75,
        "cap": 500,
        "target": "positive-mean"
      },
      "level": "challenge",
      "id": "chapter:urv-g3-benefit-limits:1",
      "topicId": "urv-g3-benefit-limits",
      "family": "payment-per-payment"
    }
  ],
  "urv-g4-inflation": [
    {
      "question": "Original loss X is uniform on (0,1400). Losses rise by 25%, while an ordinary deductible of 420 and a final payment cap of 700 stay fixed. The insurer pays 80% of the inflated excess above the deductible, subject to that cap. Calculate expected payment per original loss. Round your answer to four decimal places.",
      "choices": [
        "$339.0625$",
        "$357.0000$",
        "$364.0000$",
        "$404.3200$",
        "$700.0000$"
      ],
      "answer": 1,
      "solution": [
        "Inflated loss is uniform on (0,1750). The zero-payment boundary is 420 and the cap is reached at inflated loss 1295.",
        "Integrate 0.8(x-d) over the intermediate region with density 1/1750, then add cap times its survival probability 0.26.",
        "The resulting expected payment is 357. Policy terms were not inflated."
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
        "Inflated loss is uniform on (0,1750). The zero-payment boundary is 420 and the cap is reached at inflated loss 1295."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1400,
        "d": 420.0,
        "share": 0.8,
        "cap": 700.0,
        "inflation": 1.25,
        "target": "mean"
      },
      "level": "challenge",
      "id": "chapter:urv-g4-inflation:0",
      "topicId": "urv-g4-inflation",
      "family": "inflation-payment-mean"
    },
    {
      "question": "Original loss X is exponential with mean 1000. Payment after 20% loss inflation is Y=min(0.8 max(1.2X-300,0),900). Given a positive payment, calculate P(Y>450). Round your answer to four decimal places.",
      "choices": [
        "$0.3742$",
        "$0.4874$",
        "$0.5698$",
        "$0.6258$",
        "$0.6376$"
      ],
      "answer": 3,
      "solution": [
        "Since 450 is below the final cap, Y>450 is equivalent to X>(300+450/0.8)/1.2=718.75.",
        "Positive payment requires X>300/1.2. Use the ratio of the corresponding exponential survival probabilities.",
        "The ratio simplifies to exp(-450/(0.8×1.2×1000))=0.625784. The deductible cancels only because of exponential memorylessness."
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
        "Since 450 is below the final cap, Y>450 is equivalent to X>(300+450/0.8)/1.2=718.75."
      ],
      "verification": {
        "kind": "inflated-exp-tail",
        "mu": 1000,
        "inflation": 1.2,
        "d": 300,
        "share": 0.8,
        "cap": 900,
        "threshold": 450
      },
      "level": "challenge",
      "id": "chapter:urv-g4-inflation:1",
      "topicId": "urv-g4-inflation",
      "family": "inflation-tail"
    }
  ],
  "urv-h1-loss-variable": [
    {
      "question": "A policy has no claim with probability 0.7 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1400). The insurer pays the positive excess over a deductible of 350. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
      "choices": [
        "$262.1717$",
        "$36175.7813$",
        "$68733.9844$",
        "$82687.5000$",
        "$120585.9375$"
      ],
      "answer": 2,
      "solution": [
        "Conditional on a claim, the deductible payment has first moment (1400-350)²/(2×1400)=393.75 and second moment (1400-350)³/(3×1400)=275625.",
        "Include no-claim policies by multiplying each raw moment by claim probability 0.3: E[Y]=118.125, E[Y²]=82687.5.",
        "The per-policy variance is 82687.5-(118.125)²=68733.984375."
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
        "p": 0.30000000000000004,
        "B": 1400,
        "d": 350.0,
        "target": "payment-variance"
      },
      "level": "challenge",
      "id": "chapter:urv-h1-loss-variable:0",
      "topicId": "urv-h1-loss-variable",
      "family": "mixture-variance"
    },
    {
      "question": "An insured belongs permanently to class A with probability 0.5 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 2 for A or 6 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
      "choices": [
        "$4.0000$",
        "$8.0000$",
        "$9.3870$",
        "$16.0000$",
        "$20.0000$"
      ],
      "answer": 1,
      "solution": [
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.",
        "The conditional means themselves vary: Var(E[N given class])=4.",
        "Total variance adds these two components, giving 8. The unconditional mixture is not Poisson."
      ],
      "feedback": {
        "0": "Average within-class variance alone misses the variation between class means; apply total variance.",
        "2": "Recheck the setup and the requested quantity before evaluating the formula.",
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
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4."
      ],
      "verification": {
        "kind": "poisson-class",
        "w": 0.5,
        "rates": [
          2,
          6
        ],
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-h1-loss-variable:1",
      "topicId": "urv-h1-loss-variable",
      "family": "total-variance-mixture"
    }
  ],
  "urv-h2-payment-variable": [
    {
      "question": "Loss X is exponential with mean 800. Payment is Y=min(0.75 max(X-500,0),600). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
      "choices": [
        "$203.0099$",
        "$321.1569$",
        "$379.2723$",
        "$443.7756$",
        "$600.0000$"
      ],
      "answer": 2,
      "solution": [
        "Positive payment occurs exactly when X>500, with probability exp(-500/800)=0.535261.",
        "Using survival integration up to the final payment cap gives E[Y]=0.75(800)[exp(-500/800)-exp(-(500+600/0.75)/800)]=203.009852.",
        "The per-payment mean is E[Y]/P(Y>0)=379.272335."
      ],
      "feedback": {
        "0": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "1": "Condition on positive payment by dividing the per-loss mean by its probability. The cap still reduces the conditional mean.",
        "3": "Recheck the setup and the requested quantity before evaluating the formula.",
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
        "Positive payment occurs exactly when X>500, with probability exp(-500/800)=0.535261."
      ],
      "verification": {
        "kind": "exp-payment",
        "mu": 800,
        "d": 500,
        "share": 0.75,
        "cap": 600,
        "target": "positive-mean"
      },
      "level": "challenge",
      "id": "chapter:urv-h2-payment-variable:0",
      "topicId": "urv-h2-payment-variable",
      "family": "payment-per-payment"
    },
    {
      "question": "A loss fraction X has probability 0.2 at 0 and 0.2 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.6, calculate the probability X=1. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.2000$",
        "$0.2400$",
        "$0.2500$",
        "$0.4545$"
      ],
      "answer": 4,
      "solution": [
        "The continuous component has weight 0.6, so its mass above 0.6 is 0.24.",
        "The conditioning event also includes the atom at 1; its total probability is 0.44.",
        "Divide the atom mass by that total: 0.2/0.44=0.454545."
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
        "The continuous component has weight 0.6, so its mass above 0.6 is 0.24."
      ],
      "verification": {
        "kind": "mixed-cdf",
        "p0": 0.2,
        "p1": 0.2,
        "cut": 0.6000000000000001,
        "target": "atom-conditional"
      },
      "level": "challenge",
      "id": "chapter:urv-h2-payment-variable:1",
      "topicId": "urv-h2-payment-variable",
      "family": "cdf-atom-conditional"
    }
  ],
  "urv-h3-moments-loss-payment": [
    {
      "question": "A loss has exponential mean 1000. The insurer pays Y=min(0.8 max(X-400,0),500). Calculate the variance of payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$222.7172$",
        "$49602.9685$",
        "$62110.0424$",
        "$111713.0109$",
        "$640000.0000$"
      ],
      "answer": 1,
      "solution": [
        "For 0<y<500, P(Y>y)=exp(-(400+y/0.8)/1000). There is zero mass 0.32968 and a cap mass exp(-(400+500/0.8)/1000).",
        "Use E[Y]=the integral of P(Y>y), and E[Y²]=the integral of 2yP(Y>y), each over (0,500). These give 249.218865 and 111713.010881.",
        "Subtract squared mean: Var(Y)=49602.968457."
      ],
      "feedback": {
        "0": "Include the deductible and payment cap in both payment moments; scaling the original exponential variance omits these transformations.",
        "2": "Include the deductible and payment cap in both payment moments; scaling the original exponential variance omits these transformations.",
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
        "For 0<y<500, P(Y>y)=exp(-(400+y/0.8)/1000). There is zero mass 0.32968 and a cap mass exp(-(400+500/0.8)/1000)."
      ],
      "verification": {
        "kind": "exp-payment",
        "mu": 1000,
        "d": 400,
        "share": 0.8,
        "cap": 500,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-h3-moments-loss-payment:0",
      "topicId": "urv-h3-moments-loss-payment",
      "family": "exponential-payment-variance"
    },
    {
      "question": "X is uniform on (0,1800). Insurer payment is Y=min(0.75 max(X-360,0),900). Calculate Var(Y) per loss. Round your answer to four decimal places.",
      "choices": [
        "$334.0659$",
        "$111600.0000$",
        "$151875.0000$",
        "$176400.0000$",
        "$288000.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment is zero through 360, grows at rate 0.75 until loss 1560, and then stays at the cap.",
        "Integrating the linear region and including the cap mass gives E[Y]=420 and E[Y²]=288000.",
        "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=111600."
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
        "Payment is zero through 360, grows at rate 0.75 until loss 1560, and then stays at the cap."
      ],
      "verification": {
        "kind": "uniform-payment",
        "B": 1800,
        "d": 360.0,
        "share": 0.75,
        "cap": 900.0,
        "inflation": 1,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-h3-moments-loss-payment:1",
      "topicId": "urv-h3-moments-loss-payment",
      "family": "uniform-payment-variance"
    }
  ],
  "mrv-a1-joint-distributions": [
    {
      "question": "For x,y in {0,1,2}, the joint PMF is p(x,y)=k(x+2y+5), and it is zero elsewhere. Given X+Y≥2, calculate P(X>Y). Round your answer to four decimal places.",
      "choices": [
        "$0.2222$",
        "$0.2963$",
        "$0.3056$",
        "$0.7500$",
        "$0.8889$"
      ],
      "answer": 1,
      "solution": [
        "Normalizing all nine cells gives k=1/72.",
        "The conditioning region consists of the cells with x+y≥2; their unnormalized weights total 54. Within that region, cells satisfying x>y have total weight 16.",
        "The normalization constant cancels, so the conditional probability is 16/54=0.296296."
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
        "Normalizing all nine cells gives k=1/72."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 5,
        "target": "event"
      },
      "level": "challenge",
      "id": "chapter:mrv-a1-joint-distributions:0",
      "topicId": "mrv-a1-joint-distributions",
      "family": "joint-table-event"
    },
    {
      "question": "p(x,y)=k(x+2y+3) for x,y in {0,1,2}. Calculate Var(2X-2Y). Independence is not assumed. Round your answer to four decimal places.",
      "choices": [
        "$0.0494$",
        "$0.0741$",
        "$5.0864$",
        "$5.2840$",
        "$5.3333$"
      ],
      "answer": 3,
      "solution": [
        "Normalize with k=1/54. Let T=2X-2Y and evaluate T in each joint cell.",
        "Weighting those values gives E[T]=-0.222222 and E[T²]=5.333333.",
        "Var(T)=E[T²]-(E[T])²=5.283951. Equivalently, include the signed covariance term in the linear-combination formula."
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
        "Normalize with k=1/54. Let T=2X-2Y and evaluate T in each joint cell."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 3,
        "a": 2,
        "b": -2,
        "target": "linear-variance"
      },
      "level": "challenge",
      "id": "chapter:mrv-a1-joint-distributions:1",
      "topicId": "mrv-a1-joint-distributions",
      "family": "joint-linear-variance"
    }
  ],
  "mrv-a2-conditional-distributions": [
    {
      "question": "A collection contains 4 class-A, 7 class-B, and 7 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.3173$",
        "$0.6346$",
        "$0.7500$",
        "$0.8654$",
        "$1.5000$"
      ],
      "answer": 1,
      "solution": [
        "Conditioning on X=2 leaves three sampled files drawn from the 14 non-A files, of which 7 are B.",
        "The conditional Y distribution is hypergeometric with population 14, success count 7, and sample size 3.",
        "Its variance is 3(7/14)(1-7/14)(14-3)/(14-1)=0.634615."
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
        "Conditioning on X=2 leaves three sampled files drawn from the 14 non-A files, of which 7 are B."
      ],
      "verification": {
        "kind": "conditional-hypergeom",
        "groups": [
          4,
          7,
          7
        ],
        "n": 5,
        "x": 2,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:mrv-a2-conditional-distributions:0",
      "topicId": "mrv-a2-conditional-distributions",
      "family": "conditional-hypergeom-variance"
    },
    {
      "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+7), with k determined by normalization. Calculate Var(X given Y=1). Round your answer to four decimal places.",
      "choices": [
        "$-0.9378$",
        "$0.6622$",
        "$0.7333$",
        "$1.0667$",
        "$1.8000$"
      ],
      "answer": 1,
      "solution": [
        "On the Y=1 slice, the X weights are 9, 10, 11. Divide by their sum 30 to get the conditional PMF.",
        "The conditional first and second moments are 1.066667 and 1.8.",
        "Conditional variance is 1.8-(1.066667)²=0.662222."
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
        "On the Y=1 slice, the X weights are 9, 10, 11. Divide by their sum 30 to get the conditional PMF."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 7,
        "y": 1,
        "target": "conditional-variance"
      },
      "level": "challenge",
      "id": "chapter:mrv-a2-conditional-distributions:1",
      "topicId": "mrv-a2-conditional-distributions",
      "family": "joint-table-conditional-moment"
    }
  ],
  "mrv-b1-joint-moments": [
    {
      "question": "An insured belongs permanently to class A with probability 0.3 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 3 for A or 5 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
      "choices": [
        "$0.8400$",
        "$4.4000$",
        "$5.2400$",
        "$19.3600$",
        "$20.2000$"
      ],
      "answer": 2,
      "solution": [
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.4.",
        "The conditional means themselves vary: Var(E[N given class])=0.84.",
        "Total variance adds these two components, giving 5.24. The unconditional mixture is not Poisson."
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
        "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.4."
      ],
      "verification": {
        "kind": "poisson-class",
        "w": 0.3,
        "rates": [
          3,
          5
        ],
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:mrv-b1-joint-moments:0",
      "topicId": "mrv-b1-joint-moments",
      "family": "total-variance-mixture"
    },
    {
      "question": "An insured is type A with probability 0.3, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 2 for A or 6 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
      "choices": [
        "$-3.3600$",
        "$0.0000$",
        "$3.3600$",
        "$4.8000$",
        "$26.4000$"
      ],
      "answer": 2,
      "solution": [
        "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
        "E[XY]=26.4 and E[X]=E[Y]=4.8.",
        "Cov(X,Y)=E[XY]-E[X]E[Y]=3.36."
      ],
      "feedback": {
        "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
        "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
        "3": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
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
        "w": 0.3,
        "rates": [
          2,
          6
        ],
        "target": "covariance"
      },
      "level": "challenge",
      "id": "chapter:mrv-b1-joint-moments:1",
      "topicId": "mrv-b1-joint-moments",
      "family": "shared-class-covariance"
    }
  ],
  "mrv-b2-conditional-variance": [
    {
      "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+3), with k determined by normalization. Calculate Var(X given Y=2). Round your answer to four decimal places.",
      "choices": [
        "$-0.9699$",
        "$0.6597$",
        "$0.7500$",
        "$1.0833$",
        "$1.8333$"
      ],
      "answer": 1,
      "solution": [
        "On the Y=2 slice, the X weights are 7, 8, 9. Divide by their sum 24 to get the conditional PMF.",
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
        "On the Y=2 slice, the X weights are 7, 8, 9. Divide by their sum 24 to get the conditional PMF."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 3,
        "y": 2,
        "target": "conditional-variance"
      },
      "level": "challenge",
      "id": "chapter:mrv-b2-conditional-variance:0",
      "topicId": "mrv-b2-conditional-variance",
      "family": "joint-table-conditional-moment"
    },
    {
      "question": "A collection contains 6 class-A, 8 class-B, and 6 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$0.3552$",
        "$0.6217$",
        "$0.7347$",
        "$0.8477$",
        "$1.7143$"
      ],
      "answer": 1,
      "solution": [
        "Conditioning on X=2 leaves three sampled files drawn from the 14 non-A files, of which 8 are B.",
        "The conditional Y distribution is hypergeometric with population 14, success count 8, and sample size 3.",
        "Its variance is 3(8/14)(1-8/14)(14-3)/(14-1)=0.621664."
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
        "Conditioning on X=2 leaves three sampled files drawn from the 14 non-A files, of which 8 are B."
      ],
      "verification": {
        "kind": "conditional-hypergeom",
        "groups": [
          6,
          8,
          6
        ],
        "n": 5,
        "x": 2,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:mrv-b2-conditional-variance:1",
      "topicId": "mrv-b2-conditional-variance",
      "family": "conditional-hypergeom-variance"
    }
  ],
  "mrv-c1-covariance": [
    {
      "question": "X and Y have joint PMF p(x,y)=k(x+2y+7) for x,y in {0,1,2}. Calculate their correlation coefficient. Round your answer to four decimal places.",
      "choices": [
        "$-0.0207$",
        "$-0.0136$",
        "$-0.0089$",
        "$0.0000$",
        "$0.0136$"
      ],
      "answer": 1,
      "solution": [
        "Normalize the nine weights: k=1/90. Joint summation gives E[X]=1.066667, E[Y]=1.133333, E[XY]=1.2.",
        "The marginal variances are 0.662222 and 0.648889, and covariance is E[XY]-E[X]E[Y]=-0.008889.",
        "Correlation is covariance divided by √(Var(X)Var(Y)), giving -0.01356."
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
        "Normalize the nine weights: k=1/90. Joint summation gives E[X]=1.066667, E[Y]=1.133333, E[XY]=1.2."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 7,
        "target": "correlation"
      },
      "level": "challenge",
      "id": "chapter:mrv-c1-covariance:0",
      "topicId": "mrv-c1-covariance",
      "family": "joint-covariance"
    },
    {
      "question": "p(x,y)=k(x+2y+5) for x,y in {0,1,2}. Calculate Var(2X-2Y). Independence is not assumed. Round your answer to four decimal places.",
      "choices": [
        "$0.0278$",
        "$0.0417$",
        "$5.1944$",
        "$5.3056$",
        "$5.3333$"
      ],
      "answer": 3,
      "solution": [
        "Normalize with k=1/72. Let T=2X-2Y and evaluate T in each joint cell.",
        "Weighting those values gives E[T]=-0.166667 and E[T²]=5.333333.",
        "Var(T)=E[T²]-(E[T])²=5.305556. Equivalently, include the signed covariance term in the linear-combination formula."
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
        "Normalize with k=1/72. Let T=2X-2Y and evaluate T in each joint cell."
      ],
      "verification": {
        "kind": "joint-grid",
        "c": 5,
        "a": 2,
        "b": -2,
        "target": "linear-variance"
      },
      "level": "challenge",
      "id": "chapter:mrv-c1-covariance:1",
      "topicId": "mrv-c1-covariance",
      "family": "joint-linear-variance"
    }
  ],
  "mrv-d1-order-statistics": [
    {
      "question": "6 independent observations are uniform on (0,13). Let U and V be their minimum and maximum. Calculate P(V-U<4). Round your answer to four decimal places.",
      "choices": [
        "$0.0008$",
        "$0.0028$",
        "$0.0123$",
        "$0.0165$",
        "$0.9877$"
      ],
      "answer": 2,
      "solution": [
        "The joint min–max density is n(n-1)(v-u)^(n-2)/13^6 on 0<u<v<13.",
        "Integrate over the band v-u<4. Equivalently, integrate the range density n(n-1)r^(n-2)(13-r)/13^6 from 0 to 4.",
        "The result is n(4/13)^(n-1)-(n-1)(4/13)^n=0.012305."
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
        "The joint min–max density is n(n-1)(v-u)^(n-2)/13^6 on 0<u<v<13."
      ],
      "verification": {
        "kind": "order-uniform",
        "n": 6,
        "B": 13,
        "r": 4,
        "target": "range"
      },
      "level": "challenge",
      "id": "chapter:mrv-d1-order-statistics:0",
      "topicId": "mrv-d1-order-statistics",
      "family": "order-range"
    },
    {
      "question": "5 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.65. Round your answer to four decimal places.",
      "choices": [
        "$0.0563$",
        "$0.5625$",
        "$0.6160$",
        "$0.7648$",
        "$0.9840$"
      ],
      "answer": 2,
      "solution": [
        "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.65 with conditional probability (0.65-0.2)/(1-0.2)=0.5625.",
        "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
        "Sum the binomial probabilities from 3 through 5; the result is 0.615973."
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
        "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.65 with conditional probability (0.65-0.2)/(1-0.2)=0.5625."
      ],
      "verification": {
        "kind": "order-uniform",
        "n": 5,
        "rank": 3,
        "a": 0.2,
        "b": 0.65,
        "target": "conditional-rank"
      },
      "level": "challenge",
      "id": "chapter:mrv-d1-order-statistics:1",
      "topicId": "mrv-d1-order-statistics",
      "family": "order-rank-conditional"
    }
  ],
  "mrv-e1-linear-combinations": [
    {
      "question": "Independent normal X and Y have means 110 and 35. SD(X)=9. The variance of X+Y is 106. Calculate P(X-2Y>56.14434886). Round your answer to four decimal places.",
      "choices": [
        "$0.1151$",
        "$0.1616$",
        "$0.4645$",
        "$0.8849$",
        "$1.0000$"
      ],
      "answer": 0,
      "solution": [
        "Independence gives Var(Y)=Var(X+Y)-Var(X)=106-81=25.",
        "X-2Y is exactly normal with mean 40 and SD √(81+4×25)=13.453624.",
        "The standardized threshold is 1.2, so the upper-tail probability is 1-Φ(1.2)=0.11507."
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
        "Independence gives Var(Y)=Var(X+Y)-Var(X)=106-81=25."
      ],
      "verification": {
        "kind": "normal-combination",
        "muX": 110,
        "muY": 35,
        "sdX": 9,
        "sdY": 5,
        "a": 1,
        "b": -2,
        "t": 56.14434885648845,
        "target": "tail"
      },
      "level": "challenge",
      "id": "chapter:mrv-e1-linear-combinations:0",
      "topicId": "mrv-e1-linear-combinations",
      "family": "normal-combination-infer"
    },
    {
      "question": "Independent claim counts X and Y are Poisson with means 1 and 1.25. A branch statistic is T=2X+Y. Calculate P(T≤6). Round your answer to four decimal places.",
      "choices": [
        "$0.0904$",
        "$0.1054$",
        "$0.9096$",
        "$0.9523$",
        "$0.9916$"
      ],
      "answer": 2,
      "solution": [
        "Independence gives joint masses exp(-(1+1.25))1^x 1.25^y/(x!y!). The weighted statistic is not generally Poisson.",
        "Enumerate x=0 through 3; for each x sum y=0 through 6-2x.",
        "The sum of all qualifying joint masses is 0.909597."
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
        "Independence gives joint masses exp(-(1+1.25))1^x 1.25^y/(x!y!). The weighted statistic is not generally Poisson."
      ],
      "verification": {
        "kind": "poisson-weighted",
        "a": 1.0,
        "b": 1.25,
        "limit": 6
      },
      "level": "challenge",
      "id": "chapter:mrv-e1-linear-combinations:1",
      "topicId": "mrv-e1-linear-combinations",
      "family": "poisson-weighted-sum"
    }
  ],
  "mrv-e2-linear-moments": [
    {
      "question": "Independent X,Y have means 11,17 and variances 4,10, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
      "choices": [
        "$106.0000$",
        "$131.0000$",
        "$554.0000$",
        "$576.0000$",
        "$682.0000$"
      ],
      "answer": 4,
      "solution": [
        "Linearity gives E[T]=2(11)-3(17)+5=-24.",
        "Independence gives Var(T)=4(4)+9(10)=106; the constant contributes zero variance.",
        "E[T²]=Var(T)+(E[T])²=106+576=682."
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
        "Linearity gives E[T]=2(11)-3(17)+5=-24."
      ],
      "verification": {
        "kind": "linear-moments",
        "mx": 11,
        "my": 17,
        "vx": 4,
        "vy": 10,
        "a": 2,
        "b": -3,
        "shift": 5,
        "target": "second"
      },
      "level": "challenge",
      "id": "chapter:mrv-e2-linear-moments:0",
      "topicId": "mrv-e2-linear-moments",
      "family": "linear-second-moment"
    },
    {
      "question": "X1,…,X20 are independent with common mean 40 and SD 12. An independent random surcharge C has variance 5. Define Y as their sample mean plus the same single surcharge C. Calculate Var(Y). Round your answer to four decimal places.",
      "choices": [
        "$3.4928$",
        "$7.2125$",
        "$7.4500$",
        "$12.2000$",
        "$149.0000$"
      ],
      "answer": 3,
      "solution": [
        "The sample mean variance is 144/20.",
        "The independent surcharge is added once, so its full variance 5 is added; it is not averaged over 20 observations.",
        "The total variance is 144/20+5=12.2."
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
        "The sample mean variance is 144/20."
      ],
      "verification": {
        "kind": "sample-shift",
        "n": 20,
        "sigma": 12,
        "varC": 5
      },
      "level": "challenge",
      "id": "chapter:mrv-e2-linear-moments:1",
      "topicId": "mrv-e2-linear-moments",
      "family": "sample-mean-random-shift"
    }
  ],
  "mrv-f1-central-limit-theorem": [
    {
      "question": "Each of 150 independent identical policies has no claim with probability 0.7 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 18164.25291393. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0200$",
        "$0.0668$",
        "$0.4513$",
        "$0.9332$"
      ],
      "answer": 2,
      "solution": [
        "Compute per-policy moments before approximating: mean μ=96 and variance σ²=41984, including no-claim policies.",
        "The total has mean 14400 and SD √(150×41984)=2509.501943.",
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
        "n": 150,
        "p": 0.30000000000000004,
        "B": 1000,
        "d": 200,
        "threshold": 18164.25291392595
      },
      "level": "challenge",
      "id": "chapter:mrv-f1-central-limit-theorem:0",
      "topicId": "mrv-f1-central-limit-theorem",
      "family": "clt-payment-tail"
    },
    {
      "question": "120 independent policies each have probability 0.3 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 43 policies have a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0676$",
        "$0.0816$",
        "$0.0977$",
        "$0.3982$",
        "$0.9023$"
      ],
      "answer": 2,
      "solution": [
        "The count mean is 36 and SD is √(120×0.3×0.7)=5.01996.",
        "At least 43 for an integer count becomes the normal event above 42.5. The standardized boundary is 1.294831.",
        "The approximate probability is 1-Φ(z)=0.097689."
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
        "The count mean is 36 and SD is √(120×0.3×0.7)=5.01996."
      ],
      "verification": {
        "kind": "clt-binomial",
        "n": 120,
        "p": 0.3,
        "k": 43
      },
      "level": "challenge",
      "id": "chapter:mrv-f1-central-limit-theorem:1",
      "topicId": "mrv-f1-central-limit-theorem",
      "family": "clt-binomial-correction"
    }
  ]
};

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
    },
    {
      "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.425, P(B)=0.475, and P(neither)=0.275. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2414$",
        "$0.5500$",
        "$0.5862$",
        "$0.6552$",
        "$0.7586$"
      ],
      "answer": 4,
      "solution": [
        "The union has probability 0.725. The addition rule gives P(A∩B)=0.425+0.475-0.725=0.175.",
        "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.55.",
        "Divide by the union probability to obtain 0.758621."
      ],
      "feedback": {
        "0": "This gives both events conditional on the union.",
        "1": "This is the probability of exactly one before restricting to the union.",
        "2": "This includes the intersection as well as the A-only region.",
        "3": "This includes the intersection as well as the B-only region."
      },
      "skills": [
        "recover an intersection",
        "exactly-one event",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, exactly-one event, conditional normalization.",
        "The union has probability 0.725. The addition rule gives P(A∩B)=0.425+0.475-0.725=0.175."
      ],
      "verification": {
        "kind": "symmetric-difference",
        "a": 0.425,
        "b": 0.47500000000000003,
        "both": 0.175,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a1-set-functions:2",
      "topicId": "a1-set-functions",
      "family": "symmetric-difference-infer"
    },
    {
      "question": "Three diagnostic flags A, B, C have probabilities 17/46, 16/46, 15/46. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 5/46, 5/46, 3/46, and all three occur with probability 1/46. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2391$",
        "$0.5435$",
        "$0.6944$",
        "$0.7609$",
        "$0.7826$"
      ],
      "answer": 1,
      "solution": [
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
        "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
        "The result is [17+16+15-2(5+5+3)+3]/46=25/46=0.543478."
      ],
      "feedback": {
        "0": "This gives at least two flags.",
        "2": "This conditions on at least one flag, which was not requested.",
        "3": "This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.",
        "4": "This is at least one, including overlaps."
      },
      "skills": [
        "Venn-region multiplicities",
        "inclusion–exclusion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Venn-region multiplicities, inclusion–exclusion.",
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times."
      ],
      "verification": {
        "kind": "three-exact",
        "weights": [
          10,
          8,
          9,
          4,
          8,
          4,
          2,
          1
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a1-set-functions:3",
      "topicId": "a1-set-functions",
      "family": "three-events-exactly-one"
    },
    {
      "question": "An insurer records P(auto coverage)=0.525, P(home coverage)=0.475, and P(both)=0.275. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
      "choices": [
        "$0.2475$",
        "$0.2775$",
        "$0.5250$",
        "$0.6213$",
        "$0.7241$"
      ],
      "answer": 2,
      "solution": [
        "The disjoint class shares are auto-only 0.25, home-only 0.2, both 0.275, and neither 0.275.",
        "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
        "Total probability gives 0.25(0.55)+0.2(0.70)+0.275(0.90)=0.525."
      ],
      "feedback": {
        "0": "This includes only the both-coverage class.",
        "1": "This omits customers with both coverages.",
        "3": "This double counts customers with both and applies the wrong renewal rate to them.",
        "4": "This conditions on having coverage; the question samples from all customers."
      },
      "skills": [
        "overlapping coverages to partition",
        "total probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: overlapping coverages to partition, total probability.",
        "The disjoint class shares are auto-only 0.25, home-only 0.2, both 0.275, and neither 0.275."
      ],
      "verification": {
        "kind": "renewal-mixture",
        "a": 0.525,
        "b": 0.47500000000000003,
        "both": 0.275,
        "rates": [
          0.55,
          0.7,
          0.9
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a1-set-functions:4",
      "topicId": "a1-set-functions",
      "family": "coverage-renewal-mixture"
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
    },
    {
      "question": "Three diagnostic flags A, B, C have probabilities 16/39, 13/39, 13/39. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 4/39, 5/39, 3/39, and all three occur with probability 1/39. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2564$",
        "$0.5385$",
        "$0.6774$",
        "$0.7692$",
        "$0.7949$"
      ],
      "answer": 1,
      "solution": [
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
        "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
        "The result is [16+13+13-2(4+5+3)+3]/39=21/39=0.538462."
      ],
      "feedback": {
        "0": "This gives at least two flags.",
        "2": "This conditions on at least one flag, which was not requested.",
        "3": "This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.",
        "4": "This is at least one, including overlaps."
      },
      "skills": [
        "Venn-region multiplicities",
        "inclusion–exclusion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Venn-region multiplicities, inclusion–exclusion.",
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times."
      ],
      "verification": {
        "kind": "three-exact",
        "weights": [
          8,
          8,
          7,
          3,
          6,
          4,
          2,
          1
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a2-venn-diagrams:2",
      "topicId": "a2-venn-diagrams",
      "family": "three-events-exactly-one"
    },
    {
      "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.45, P(B)=0.45, and P(neither)=0.275. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2414$",
        "$0.5500$",
        "$0.6207$",
        "$0.7250$",
        "$0.7586$"
      ],
      "answer": 4,
      "solution": [
        "The union has probability 0.725. The addition rule gives P(A∩B)=0.45+0.45-0.725=0.175.",
        "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.55.",
        "Divide by the union probability to obtain 0.758621."
      ],
      "feedback": {
        "0": "This gives both events conditional on the union.",
        "1": "This is the probability of exactly one before restricting to the union.",
        "2": "This includes the intersection as well as the A-only region.",
        "3": "This gives the probability of the condition."
      },
      "skills": [
        "recover an intersection",
        "exactly-one event",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, exactly-one event, conditional normalization.",
        "The union has probability 0.725. The addition rule gives P(A∩B)=0.45+0.45-0.725=0.175."
      ],
      "verification": {
        "kind": "symmetric-difference",
        "a": 0.44999999999999996,
        "b": 0.45,
        "both": 0.175,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a2-venn-diagrams:3",
      "topicId": "a2-venn-diagrams",
      "family": "symmetric-difference-infer"
    },
    {
      "question": "An insurer records P(auto coverage)=0.575, P(home coverage)=0.45, and P(both)=0.25. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
      "choices": [
        "$0.2250$",
        "$0.3187$",
        "$0.5437$",
        "$0.6312$",
        "$0.7016$"
      ],
      "answer": 2,
      "solution": [
        "The disjoint class shares are auto-only 0.325, home-only 0.2, both 0.25, and neither 0.225.",
        "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
        "Total probability gives 0.325(0.55)+0.2(0.70)+0.25(0.90)=0.54375."
      ],
      "feedback": {
        "0": "This includes only the both-coverage class.",
        "1": "This omits customers with both coverages.",
        "3": "This double counts customers with both and applies the wrong renewal rate to them.",
        "4": "This conditions on having coverage; the question samples from all customers."
      },
      "skills": [
        "overlapping coverages to partition",
        "total probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: overlapping coverages to partition, total probability.",
        "The disjoint class shares are auto-only 0.325, home-only 0.2, both 0.25, and neither 0.225."
      ],
      "verification": {
        "kind": "renewal-mixture",
        "a": 0.575,
        "b": 0.45,
        "both": 0.25,
        "rates": [
          0.55,
          0.7,
          0.9
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a2-venn-diagrams:4",
      "topicId": "a2-venn-diagrams",
      "family": "coverage-renewal-mixture"
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
    },
    {
      "question": "An urn contains 3 red balls and 6 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
      "choices": [
        "$0.0833$",
        "$0.2500$",
        "$0.3333$",
        "$0.3750$",
        "$0.7500$"
      ],
      "answer": 1,
      "solution": [
        "P(first red and second red)=(3/9)(2/8).",
        "By symmetry, the second draw is red with probability 3/9.",
        "Dividing the joint probability by the condition probability gives (2)/(8)=0.25. Conditioning on a later draw still changes the earlier draw distribution."
      ],
      "feedback": {
        "0": "This is the joint probability; it needs a conditional denominator.",
        "2": "This is the first-draw probability before observing the second draw.",
        "3": "The observed red ball must be removed from the red count as well as the population count.",
        "4": "This gives the probability that the first ball was blue."
      },
      "skills": [
        "ordered sample space",
        "reverse conditioning",
        "without replacement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordered sample space, reverse conditioning, without replacement.",
        "P(first red and second red)=(3/9)(2/8)."
      ],
      "verification": {
        "kind": "ordered-condition",
        "N": 9,
        "K": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a3-sample-space:2",
      "topicId": "a3-sample-space",
      "family": "ordered-draw-condition"
    },
    {
      "question": "An integer-valued random variable X is uniform on 1 through 11. Given that X≥3, calculate the probability that X is even. Round your answer to four decimal places.",
      "choices": [
        "$0.3636$",
        "$0.4444$",
        "$0.4545$",
        "$0.5000$",
        "$0.5556$"
      ],
      "answer": 1,
      "solution": [
        "The condition retains the integers 3, 4, …, 11: 9 equally likely values.",
        "Exactly 4 retained integers are even. The endpoints must be counted, not approximated by half the interval.",
        "The conditional probability is 4/9=0.444444."
      ],
      "feedback": {
        "0": "This is the joint probability and has not been renormalized.",
        "2": "This is the unconditional even probability.",
        "3": "Half is not guaranteed when a finite retained set has odd size.",
        "4": "This counts the odd integers."
      },
      "skills": [
        "discrete endpoints",
        "conditional uniform support"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete endpoints, conditional uniform support.",
        "The condition retains the integers 3, 4, …, 11: 9 equally likely values."
      ],
      "verification": {
        "kind": "uniform-lattice",
        "n": 11,
        "lower": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a3-sample-space:3",
      "topicId": "a3-sample-space",
      "family": "uniform-lattice-condition"
    },
    {
      "question": "A committee of four is selected uniformly from 6 senior and 7 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
      "choices": [
        "$0.1591$",
        "$0.3182$",
        "$0.4167$",
        "$0.4406$",
        "$0.4773$"
      ],
      "answer": 4,
      "solution": [
        "After including the specified senior, choose three people from the remaining 12.",
        "Exactly two seniors overall means one additional senior and two juniors: choose(5,1)choose(7,2).",
        "Divide by choose(12,3) to obtain 0.477273."
      ],
      "feedback": {
        "0": "This gives exactly one senior overall.",
        "1": "This adds two more seniors, giving three seniors overall.",
        "2": "This considers only one additional member and omits the other two selections.",
        "3": "This is the unconditional probability before learning that a specific senior is included."
      },
      "skills": [
        "conditional sample space",
        "combinations",
        "fixed membership"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional sample space, combinations, fixed membership.",
        "After including the specified senior, choose three people from the remaining 12."
      ],
      "verification": {
        "kind": "committee-condition",
        "S": 6,
        "J": 7,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a3-sample-space:4",
      "topicId": "a3-sample-space",
      "family": "committee-conditioned-membership"
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
    },
    {
      "question": "Three diagnostic flags A, B, C have probabilities 14/44, 15/44, 14/44. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 4/44, 5/44, 3/44, and all three occur with probability 1/44. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2273$",
        "$0.5000$",
        "$0.6875$",
        "$0.7045$",
        "$0.7273$"
      ],
      "answer": 1,
      "solution": [
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
        "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
        "The result is [14+15+14-2(4+5+3)+3]/44=22/44=0.5."
      ],
      "feedback": {
        "0": "This gives at least two flags.",
        "2": "This conditions on at least one flag, which was not requested.",
        "3": "This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.",
        "4": "This is at least one, including overlaps."
      },
      "skills": [
        "Venn-region multiplicities",
        "inclusion–exclusion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Venn-region multiplicities, inclusion–exclusion.",
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times."
      ],
      "verification": {
        "kind": "three-exact",
        "weights": [
          12,
          6,
          9,
          3,
          7,
          4,
          2,
          1
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a4-events:2",
      "topicId": "a4-events",
      "family": "three-events-exactly-one"
    },
    {
      "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.425, P(B)=0.425, and P(neither)=0.375. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.3600$",
        "$0.4000$",
        "$0.6250$",
        "$0.6400$",
        "$0.6800$"
      ],
      "answer": 3,
      "solution": [
        "The union has probability 0.625. The addition rule gives P(A∩B)=0.425+0.425-0.625=0.225.",
        "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.4.",
        "Divide by the union probability to obtain 0.64."
      ],
      "feedback": {
        "0": "This gives both events conditional on the union.",
        "1": "This is the probability of exactly one before restricting to the union.",
        "2": "This gives the probability of the condition.",
        "4": "This includes the intersection as well as the A-only region."
      },
      "skills": [
        "recover an intersection",
        "exactly-one event",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, exactly-one event, conditional normalization.",
        "The union has probability 0.625. The addition rule gives P(A∩B)=0.425+0.425-0.625=0.225."
      ],
      "verification": {
        "kind": "symmetric-difference",
        "a": 0.425,
        "b": 0.42500000000000004,
        "both": 0.225,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a4-events:3",
      "topicId": "a4-events",
      "family": "symmetric-difference-infer"
    },
    {
      "question": "An urn contains 2 red balls and 8 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
      "choices": [
        "$0.0222$",
        "$0.1111$",
        "$0.2000$",
        "$0.2222$",
        "$0.8889$"
      ],
      "answer": 1,
      "solution": [
        "P(first red and second red)=(2/10)(1/9).",
        "By symmetry, the second draw is red with probability 2/10.",
        "Dividing the joint probability by the condition probability gives (1)/(9)=0.111111. Conditioning on a later draw still changes the earlier draw distribution."
      ],
      "feedback": {
        "0": "This is the joint probability; it needs a conditional denominator.",
        "2": "This is the first-draw probability before observing the second draw.",
        "3": "The observed red ball must be removed from the red count as well as the population count.",
        "4": "This gives the probability that the first ball was blue."
      },
      "skills": [
        "ordered sample space",
        "reverse conditioning",
        "without replacement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordered sample space, reverse conditioning, without replacement.",
        "P(first red and second red)=(2/10)(1/9)."
      ],
      "verification": {
        "kind": "ordered-condition",
        "N": 10,
        "K": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a4-events:4",
      "topicId": "a4-events",
      "family": "ordered-draw-condition"
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
    },
    {
      "question": "Three diagnostic flags A, B, C have probabilities 16/42, 16/42, 14/42. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 6/42, 5/42, 3/42, and all three occur with probability 1/42. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2857$",
        "$0.5000$",
        "$0.6364$",
        "$0.7619$",
        "$0.7857$"
      ],
      "answer": 1,
      "solution": [
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
        "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
        "The result is [16+16+14-2(6+5+3)+3]/42=21/42=0.5."
      ],
      "feedback": {
        "0": "This gives at least two flags.",
        "2": "This conditions on at least one flag, which was not requested.",
        "3": "This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.",
        "4": "This is at least one, including overlaps."
      },
      "skills": [
        "Venn-region multiplicities",
        "inclusion–exclusion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Venn-region multiplicities, inclusion–exclusion.",
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times."
      ],
      "verification": {
        "kind": "three-exact",
        "weights": [
          9,
          6,
          8,
          5,
          7,
          4,
          2,
          1
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a5-probability-set-function:2",
      "topicId": "a5-probability-set-function",
      "family": "three-events-exactly-one"
    },
    {
      "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.35, P(B)=0.425, and P(neither)=0.425. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.3478$",
        "$0.3750$",
        "$0.6087$",
        "$0.6522$",
        "$0.7391$"
      ],
      "answer": 3,
      "solution": [
        "The union has probability 0.575. The addition rule gives P(A∩B)=0.35+0.425-0.575=0.2.",
        "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.375.",
        "Divide by the union probability to obtain 0.652174."
      ],
      "feedback": {
        "0": "This gives both events conditional on the union.",
        "1": "This is the probability of exactly one before restricting to the union.",
        "2": "This includes the intersection as well as the A-only region.",
        "4": "This includes the intersection as well as the B-only region."
      },
      "skills": [
        "recover an intersection",
        "exactly-one event",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, exactly-one event, conditional normalization.",
        "The union has probability 0.575. The addition rule gives P(A∩B)=0.35+0.425-0.575=0.2."
      ],
      "verification": {
        "kind": "symmetric-difference",
        "a": 0.35,
        "b": 0.42500000000000004,
        "both": 0.2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a5-probability-set-function:3",
      "topicId": "a5-probability-set-function",
      "family": "symmetric-difference-infer"
    },
    {
      "question": "The claim count N takes values 0 through 3, with P(N=k)=c(k+1). A contract pays 75 for each claim in excess of the first 2 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$18.7500$",
        "$30.0000$",
        "$150.0000$",
        "$2250.0000$"
      ],
      "answer": 2,
      "solution": [
        "Normalize the probabilities: c[1+2+⋯+4]=1, giving c=2/(4×5).",
        "The payment at count k is 75 max(k-2,0). Its possible values are 0, 0, 0, 75.",
        "Weight each payment by c(k+1); the expected payment is 30."
      ],
      "feedback": {
        "0": "A positive-part function cannot be moved outside an expectation.",
        "1": "The supported counts are not equally likely.",
        "3": "This ignores the count deductible.",
        "4": "This is the second raw moment rather than the mean."
      },
      "skills": [
        "PMF normalization",
        "discrete payment transformation",
        "expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: PMF normalization, discrete payment transformation, expectation.",
        "Normalize the probabilities: c[1+2+⋯+4]=1, giving c=2/(4×5)."
      ],
      "verification": {
        "kind": "finite-payment",
        "n": 4,
        "scale": 75,
        "d": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:a5-probability-set-function:4",
      "topicId": "a5-probability-set-function",
      "family": "finite-payment-moments"
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
    },
    {
      "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.425, P(B)=0.4, and P(neither)=0.325. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2222$",
        "$0.5250$",
        "$0.5926$",
        "$0.6296$",
        "$0.7778$"
      ],
      "answer": 4,
      "solution": [
        "The union has probability 0.675. The addition rule gives P(A∩B)=0.425+0.4-0.675=0.15.",
        "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.525.",
        "Divide by the union probability to obtain 0.777778."
      ],
      "feedback": {
        "0": "This gives both events conditional on the union.",
        "1": "This is the probability of exactly one before restricting to the union.",
        "2": "This includes the intersection as well as the B-only region.",
        "3": "This includes the intersection as well as the A-only region."
      },
      "skills": [
        "recover an intersection",
        "exactly-one event",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, exactly-one event, conditional normalization.",
        "The union has probability 0.675. The addition rule gives P(A∩B)=0.425+0.4-0.675=0.15."
      ],
      "verification": {
        "kind": "symmetric-difference",
        "a": 0.425,
        "b": 0.4,
        "both": 0.15,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a6-axioms-probability:2",
      "topicId": "a6-axioms-probability",
      "family": "symmetric-difference-infer"
    },
    {
      "question": "Three diagnostic flags A, B, C have probabilities 14/42, 15/42, 15/42. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 5/42, 5/42, 3/42, and all three occur with probability 1/42. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2619$",
        "$0.5000$",
        "$0.6562$",
        "$0.7381$",
        "$0.7619$"
      ],
      "answer": 1,
      "solution": [
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
        "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
        "The result is [14+15+15-2(5+5+3)+3]/42=21/42=0.5."
      ],
      "feedback": {
        "0": "This gives at least two flags.",
        "2": "This conditions on at least one flag, which was not requested.",
        "3": "This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.",
        "4": "This is at least one, including overlaps."
      },
      "skills": [
        "Venn-region multiplicities",
        "inclusion–exclusion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Venn-region multiplicities, inclusion–exclusion.",
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times."
      ],
      "verification": {
        "kind": "three-exact",
        "weights": [
          10,
          5,
          8,
          4,
          8,
          4,
          2,
          1
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a6-axioms-probability:3",
      "topicId": "a6-axioms-probability",
      "family": "three-events-exactly-one"
    },
    {
      "question": "A portfolio consists of classes A, B, C in proportions 0.225, 0.3, 0.475. Their annual claim probabilities are 0.1, 0.22, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
      "choices": [
        "$0.2340$",
        "$0.2370$",
        "$0.3000$",
        "$0.3243$",
        "$0.7800$"
      ],
      "answer": 3,
      "solution": [
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
        "Total no-claim probability is 0.225(0.9)+0.3(0.78)+0.475(0.6)=0.7215.",
        "The class-B and no-claim joint probability is 0.234; its ratio to 0.7215 is 0.324324."
      ],
      "feedback": {
        "0": "This is a joint probability; normalize by total no-claim probability.",
        "1": "This conditions on a claim rather than on no claim.",
        "2": "This is the prior class share.",
        "4": "This reverses the direction of the condition."
      },
      "skills": [
        "exhaustive partition",
        "total probability",
        "Bayes with a complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exhaustive partition, total probability, Bayes with a complement.",
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities."
      ],
      "verification": {
        "kind": "class-survival",
        "weights": [
          0.225,
          0.3,
          0.475
        ],
        "rates": [
          0.1,
          0.22,
          0.4
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:a6-axioms-probability:4",
      "topicId": "a6-axioms-probability",
      "family": "three-class-survival"
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
    },
    {
      "question": "A 5-digit identifier uses distinct digits chosen from 0 through 6. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
      "choices": [
        "$45$",
        "$900$",
        "$1080$",
        "$1875$",
        "$2520$"
      ],
      "answer": 1,
      "solution": [
        "Choose the last digit first: there are three possibilities, each nonzero.",
        "After fixing the last digit, the first digit has 5 nonzero choices.",
        "Fill the 3 labeled middle positions from the remaining 5 digits without replacement. The count is 3×5×60=900."
      ],
      "feedback": {
        "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
        "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
        "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
        "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
      },
      "skills": [
        "constrained positions",
        "multiplication principle",
        "permutations"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: constrained positions, multiplication principle, permutations.",
        "Choose the last digit first: there are three possibilities, each nonzero."
      ],
      "verification": {
        "kind": "digit-codes",
        "n": 7,
        "length": 5,
        "probability": false,
        "precision": 0
      },
      "level": "challenge",
      "id": "chapter:b1-counting-principles:2",
      "topicId": "b1-counting-principles",
      "family": "digit-code-restrictions"
    },
    {
      "question": "A row contains two identical red folders and 8 distinct numbered folders. All folders are used. Calculate the number of distinct rows in which the red folders are not adjacent.",
      "choices": [
        "$362880$",
        "$846720$",
        "$1451520$",
        "$1814400$",
        "$2903040$"
      ],
      "answer": 2,
      "solution": [
        "Arrange the numbered folders in 8! ways.",
        "The numbered row creates 9 gaps, including the two ends. Choose two different gaps for the identical red folders.",
        "The count is 8!×choose(9,2)=1451520. No factor of 2 is needed for identical red folders."
      ],
      "feedback": {
        "0": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "1": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "3": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "4": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap."
      },
      "skills": [
        "identical objects",
        "gap method",
        "nonadjacency"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: identical objects, gap method, nonadjacency.",
        "Arrange the numbered folders in 8! ways."
      ],
      "verification": {
        "kind": "multiset-separation",
        "n": 8,
        "probability": false,
        "precision": 0
      },
      "level": "challenge",
      "id": "chapter:b1-counting-principles:3",
      "topicId": "b1-counting-principles",
      "family": "multiset-separation"
    },
    {
      "question": "A committee of four is selected uniformly from 6 senior and 4 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
      "choices": [
        "$0.0476$",
        "$0.3571$",
        "$0.4286$",
        "$0.4762$",
        "$0.5556$"
      ],
      "answer": 1,
      "solution": [
        "After including the specified senior, choose three people from the remaining 9.",
        "Exactly two seniors overall means one additional senior and two juniors: choose(5,1)choose(4,2).",
        "Divide by choose(9,3) to obtain 0.357143."
      ],
      "feedback": {
        "0": "This gives exactly one senior overall.",
        "2": "This is the unconditional probability before learning that a specific senior is included.",
        "3": "This adds two more seniors, giving three seniors overall.",
        "4": "This considers only one additional member and omits the other two selections."
      },
      "skills": [
        "conditional sample space",
        "combinations",
        "fixed membership"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional sample space, combinations, fixed membership.",
        "After including the specified senior, choose three people from the remaining 9."
      ],
      "verification": {
        "kind": "committee-condition",
        "S": 6,
        "J": 4,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:b1-counting-principles:4",
      "topicId": "b1-counting-principles",
      "family": "committee-conditioned-membership"
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
    },
    {
      "question": "A row contains two identical red folders and 6 distinct numbered folders. All folders are used. Calculate the number of distinct rows in which the red folders are not adjacent.",
      "choices": [
        "$5040$",
        "$7200$",
        "$15120$",
        "$20160$",
        "$30240$"
      ],
      "answer": 2,
      "solution": [
        "Arrange the numbered folders in 6! ways.",
        "The numbered row creates 7 gaps, including the two ends. Choose two different gaps for the identical red folders.",
        "The count is 6!×choose(7,2)=15120. No factor of 2 is needed for identical red folders."
      ],
      "feedback": {
        "0": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "1": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "3": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "4": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap."
      },
      "skills": [
        "identical objects",
        "gap method",
        "nonadjacency"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: identical objects, gap method, nonadjacency.",
        "Arrange the numbered folders in 6! ways."
      ],
      "verification": {
        "kind": "multiset-separation",
        "n": 6,
        "probability": false,
        "precision": 0
      },
      "level": "challenge",
      "id": "chapter:b2-permutations:2",
      "topicId": "b2-permutations",
      "family": "multiset-separation"
    },
    {
      "question": "A 4-digit identifier uses distinct digits chosen from 0 through 6. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
      "choices": [
        "$60$",
        "$300$",
        "$360$",
        "$375$",
        "$840$"
      ],
      "answer": 1,
      "solution": [
        "Choose the last digit first: there are three possibilities, each nonzero.",
        "After fixing the last digit, the first digit has 5 nonzero choices.",
        "Fill the 2 labeled middle positions from the remaining 5 digits without replacement. The count is 3×5×20=300."
      ],
      "feedback": {
        "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
        "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
        "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
        "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
      },
      "skills": [
        "constrained positions",
        "multiplication principle",
        "permutations"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: constrained positions, multiplication principle, permutations.",
        "Choose the last digit first: there are three possibilities, each nonzero."
      ],
      "verification": {
        "kind": "digit-codes",
        "n": 7,
        "length": 4,
        "probability": false,
        "precision": 0
      },
      "level": "challenge",
      "id": "chapter:b2-permutations:3",
      "topicId": "b2-permutations",
      "family": "digit-code-restrictions"
    },
    {
      "question": "A committee consists of exactly two senior and two junior employees selected from 6 seniors and 5 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
      "choices": [
        "$150.0000$",
        "$330.0000$",
        "$600.0000$",
        "$1320.0000$",
        "$2400.0000$"
      ],
      "answer": 2,
      "solution": [
        "Choose the committee in choose(6,2)choose(5,2) ways.",
        "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
        "The total is choose(6,2)choose(5,2)×2×2=600."
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
        "Choose the committee in choose(6,2)choose(5,2) ways."
      ],
      "verification": {
        "kind": "committee-roles",
        "S": 6,
        "J": 5
      },
      "level": "challenge",
      "id": "chapter:b2-permutations:4",
      "topicId": "b2-permutations",
      "family": "committee-roles"
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
    },
    {
      "question": "A committee of four is selected uniformly from 5 senior and 7 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
      "choices": [
        "$0.2121$",
        "$0.2545$",
        "$0.3636$",
        "$0.4242$",
        "$0.5091$"
      ],
      "answer": 4,
      "solution": [
        "After including the specified senior, choose three people from the remaining 11.",
        "Exactly two seniors overall means one additional senior and two juniors: choose(4,1)choose(7,2).",
        "Divide by choose(11,3) to obtain 0.509091."
      ],
      "feedback": {
        "0": "This gives exactly one senior overall.",
        "1": "This adds two more seniors, giving three seniors overall.",
        "2": "This considers only one additional member and omits the other two selections.",
        "3": "This is the unconditional probability before learning that a specific senior is included."
      },
      "skills": [
        "conditional sample space",
        "combinations",
        "fixed membership"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional sample space, combinations, fixed membership.",
        "After including the specified senior, choose three people from the remaining 11."
      ],
      "verification": {
        "kind": "committee-condition",
        "S": 5,
        "J": 7,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:b3-combinations:2",
      "topicId": "b3-combinations",
      "family": "committee-conditioned-membership"
    },
    {
      "question": "A lot contains 16 parts, of which 5 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
      "choices": [
        "$0.2473$",
        "$0.3571$",
        "$0.4428$",
        "$0.4911$",
        "$0.4945$"
      ],
      "answer": 4,
      "solution": [
        "The remaining lot has 14 parts: 5 defective and 9 sound.",
        "Choose one defective and two sound parts in choose(5,1)choose(9,2) ways.",
        "Divide by choose(14,3) to obtain 0.494505."
      ],
      "feedback": {
        "0": "This gives exactly two defective parts.",
        "1": "This is the probability for only one new part.",
        "2": "This treats the follow-up sample as sampling with replacement.",
        "3": "This samples from the original lot and ignores the observed removals."
      },
      "skills": [
        "update a finite population",
        "hypergeometric sample"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: update a finite population, hypergeometric sample.",
        "The remaining lot has 14 parts: 5 defective and 9 sound."
      ],
      "verification": {
        "kind": "hyper-followup",
        "N": 16,
        "K": 5,
        "removed": 2,
        "sample": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:b3-combinations:3",
      "topicId": "b3-combinations",
      "family": "hypergeometric-followup"
    },
    {
      "question": "A row contains two identical red folders and 7 distinct numbered folders. All folders are used. Calculate the number of distinct rows in which the red folders are not adjacent.",
      "choices": [
        "$40320$",
        "$75600$",
        "$141120$",
        "$181440$",
        "$282240$"
      ],
      "answer": 2,
      "solution": [
        "Arrange the numbered folders in 7! ways.",
        "The numbered row creates 8 gaps, including the two ends. Choose two different gaps for the identical red folders.",
        "The count is 7!×choose(8,2)=141120. No factor of 2 is needed for identical red folders."
      ],
      "feedback": {
        "0": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "1": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "3": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
        "4": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap."
      },
      "skills": [
        "identical objects",
        "gap method",
        "nonadjacency"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: identical objects, gap method, nonadjacency.",
        "Arrange the numbered folders in 7! ways."
      ],
      "verification": {
        "kind": "multiset-separation",
        "n": 7,
        "probability": false,
        "precision": 0
      },
      "level": "challenge",
      "id": "chapter:b3-combinations:4",
      "topicId": "b3-combinations",
      "family": "multiset-separation"
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
    },
    {
      "question": "A committee of four is selected uniformly from 7 senior and 5 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
      "choices": [
        "$0.0606$",
        "$0.3636$",
        "$0.4242$",
        "$0.4545$",
        "$0.5455$"
      ],
      "answer": 1,
      "solution": [
        "After including the specified senior, choose three people from the remaining 11.",
        "Exactly two seniors overall means one additional senior and two juniors: choose(6,1)choose(5,2).",
        "Divide by choose(11,3) to obtain 0.363636."
      ],
      "feedback": {
        "0": "This gives exactly one senior overall.",
        "2": "This is the unconditional probability before learning that a specific senior is included.",
        "3": "This adds two more seniors, giving three seniors overall.",
        "4": "This considers only one additional member and omits the other two selections."
      },
      "skills": [
        "conditional sample space",
        "combinations",
        "fixed membership"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional sample space, combinations, fixed membership.",
        "After including the specified senior, choose three people from the remaining 11."
      ],
      "verification": {
        "kind": "committee-condition",
        "S": 7,
        "J": 5,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:b4-combinatorial-probability:2",
      "topicId": "b4-combinatorial-probability",
      "family": "committee-conditioned-membership"
    },
    {
      "question": "A lot contains 15 parts, of which 4 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
      "choices": [
        "$0.1888$",
        "$0.3077$",
        "$0.4424$",
        "$0.4835$",
        "$0.5035$"
      ],
      "answer": 4,
      "solution": [
        "The remaining lot has 13 parts: 4 defective and 9 sound.",
        "Choose one defective and two sound parts in choose(4,1)choose(9,2) ways.",
        "Divide by choose(13,3) to obtain 0.503497."
      ],
      "feedback": {
        "0": "This gives exactly two defective parts.",
        "1": "This is the probability for only one new part.",
        "2": "This treats the follow-up sample as sampling with replacement.",
        "3": "This samples from the original lot and ignores the observed removals."
      },
      "skills": [
        "update a finite population",
        "hypergeometric sample"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: update a finite population, hypergeometric sample.",
        "The remaining lot has 13 parts: 4 defective and 9 sound."
      ],
      "verification": {
        "kind": "hyper-followup",
        "N": 15,
        "K": 4,
        "removed": 2,
        "sample": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:b4-combinatorial-probability:3",
      "topicId": "b4-combinatorial-probability",
      "family": "hypergeometric-followup"
    },
    {
      "question": "Independent trials succeed with probability 0.425. T is the trial number of the 4th success. Given that trial 1 failed, calculate P(T=9). Round your answer to four decimal places.",
      "choices": [
        "$0.0718$",
        "$0.1148$",
        "$0.1248$",
        "$0.2171$",
        "$0.2937$"
      ],
      "answer": 2,
      "solution": [
        "Trial 9 must succeed, and among trials 2 through 8 there must be exactly 3 successes.",
        "The first failure is given, so it contributes no probability factor after conditioning. There are choose(7,3) admissible success-position sets.",
        "The conditional probability is choose(7,3)(0.425)^4(0.575)^4=0.124823."
      ],
      "feedback": {
        "0": "This retains the factor for the first failure even though that failure is already given.",
        "1": "This is the unconditional negative-binomial probability.",
        "3": "This allows all required successes before the final trial.",
        "4": "This omits the required success on the final trial."
      },
      "skills": [
        "negative-binomial event",
        "conditional first trial",
        "success positions"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: negative-binomial event, conditional first trial, success positions.",
        "Trial 9 must succeed, and among trials 2 through 8 there must be exactly 3 successes."
      ],
      "verification": {
        "kind": "negative-first-failure",
        "r": 4,
        "t": 9,
        "p": 0.425,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:b4-combinatorial-probability:4",
      "topicId": "b4-combinatorial-probability",
      "family": "negative-binomial-first-failure"
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
    },
    {
      "question": "Three components operate independently, with operating probabilities 0.675, 0.725, and 0.85. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
      "choices": [
        "$0.2363$",
        "$0.4909$",
        "$0.6472$",
        "$0.6750$",
        "$0.7637$"
      ],
      "answer": 4,
      "solution": [
        "System operation includes exactly two operating components and all three. Its probability is 0.847438.",
        "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.675[1-(1-0.725)(1-0.85)]=0.647156.",
        "The requested ratio is 0.647156/0.847438=0.763663."
      ],
      "feedback": {
        "0": "This gives component 1 failure conditional on system operation.",
        "1": "This unnecessarily requires all three components to operate.",
        "2": "This is the joint probability before conditioning.",
        "3": "Component independence does not mean component 1 is independent of system operation."
      },
      "skills": [
        "independent unequal trials",
        "at-least-two event",
        "conditional reliability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent unequal trials, at-least-two event, conditional reliability.",
        "System operation includes exactly two operating components and all three. Its probability is 0.847438."
      ],
      "verification": {
        "kind": "reliability-condition",
        "rates": [
          0.675,
          0.725,
          0.8500000000000001
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:c1-independent-events:2",
      "topicId": "c1-independent-events",
      "family": "unequal-reliability"
    },
    {
      "question": "Two independent components have exponential lifetimes with means 5 and 5 years. A device fails when either component fails. Given that the device has survived 3 years, calculate the probability it survives at least another 3 years. Round your answer to four decimal places.",
      "choices": [
        "$0.0907$",
        "$0.3012$",
        "$0.5488$",
        "$0.6988$",
        "$0.7408$"
      ],
      "answer": 1,
      "solution": [
        "For independent lifetimes, device survival is the product of both component survival functions.",
        "The minimum lifetime is exponential with rate 1/5+1/5. It is memoryless.",
        "Conditional survival for another 3 years is exp[-3(1/5+1/5)]=0.301194."
      ],
      "feedback": {
        "0": "This is unconditional survival for twice the elapsed interval.",
        "2": "Both components must survive, not just component 1.",
        "3": "This gives failure during the additional interval.",
        "4": "Means do not add for a minimum lifetime; failure rates add."
      },
      "skills": [
        "minimum of independent lifetimes",
        "rate versus mean",
        "memorylessness"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: minimum of independent lifetimes, rate versus mean, memorylessness.",
        "For independent lifetimes, device survival is the product of both component survival functions."
      ],
      "verification": {
        "kind": "exponential-minimum",
        "means": [
          5,
          5
        ],
        "t": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:c1-independent-events:3",
      "topicId": "c1-independent-events",
      "family": "exponential-minimum-lifetime"
    },
    {
      "question": "5 policies have mutually independent claim indicators, each with claim probability 0.15. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0717$",
        "$0.1289$",
        "$0.2696$",
        "$0.4780$",
        "$0.7500$"
      ],
      "answer": 1,
      "solution": [
        "The condition has probability 1-(1-0.15)^5=0.556295.",
        "The numerator requires a claim on policy 1 and at least one among the remaining 4: 0.15[1-(1-0.15)^4]=0.071699.",
        "Divide numerator by condition probability: 0.128887."
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
        "The condition has probability 1-(1-0.15)^5=0.556295."
      ],
      "verification": {
        "kind": "binomial-indicators",
        "n": 5,
        "p": 0.15,
        "target": "first-and-other-given-any"
      },
      "level": "challenge",
      "id": "chapter:c1-independent-events:4",
      "topicId": "c1-independent-events",
      "family": "conditional-independent"
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
    },
    {
      "question": "Three components operate independently, with operating probabilities 0.6, 0.725, and 0.825. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
      "choices": [
        "$0.2952$",
        "$0.4429$",
        "$0.5711$",
        "$0.6000$",
        "$0.7048$"
      ],
      "answer": 4,
      "solution": [
        "System operation includes exactly two operating components and all three. Its probability is 0.810375.",
        "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.6[1-(1-0.725)(1-0.825)]=0.571125.",
        "The requested ratio is 0.571125/0.810375=0.704766."
      ],
      "feedback": {
        "0": "This gives component 1 failure conditional on system operation.",
        "1": "This unnecessarily requires all three components to operate.",
        "2": "This is the joint probability before conditioning.",
        "3": "Component independence does not mean component 1 is independent of system operation."
      },
      "skills": [
        "independent unequal trials",
        "at-least-two event",
        "conditional reliability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent unequal trials, at-least-two event, conditional reliability.",
        "System operation includes exactly two operating components and all three. Its probability is 0.810375."
      ],
      "verification": {
        "kind": "reliability-condition",
        "rates": [
          0.6,
          0.725,
          0.8250000000000001
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:c2-independent-trials:2",
      "topicId": "c2-independent-trials",
      "family": "unequal-reliability"
    },
    {
      "question": "A supplier shipment comes from plant A with probability 0.4, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.1 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
      "choices": [
        "$0.1045$",
        "$0.4000$",
        "$0.5841$",
        "$0.7273$",
        "$0.9143$"
      ],
      "answer": 2,
      "solution": [
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.261274 for A and 0.124003 for B.",
        "Weight the likelihoods by plant shares 0.4 and 0.6.",
        "Bayes gives 0.104509/(0.104509+0.074402)=0.584141."
      ],
      "feedback": {
        "0": "This omits the total likelihood in the denominator.",
        "1": "This is the prior before observing the sample.",
        "3": "This updates using one defective item rather than the entire sample.",
        "4": "This omits the observed nondefective items."
      },
      "skills": [
        "conditional binomial likelihood",
        "Bayes over sample evidence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.261274 for A and 0.124003 for B."
      ],
      "verification": {
        "kind": "bayes-binomial",
        "w": 0.4,
        "rates": [
          0.39999999999999997,
          0.1
        ],
        "n": 7,
        "k": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:c2-independent-trials:3",
      "topicId": "c2-independent-trials",
      "family": "bayes-sample-count"
    },
    {
      "question": "Independent trials succeed with probability 0.375. T is the trial number of the 4th success. Given that trial 1 failed, calculate P(T=10). Round your answer to four decimal places.",
      "choices": [
        "$0.0660$",
        "$0.0990$",
        "$0.1056$",
        "$0.2112$",
        "$0.2816$"
      ],
      "answer": 2,
      "solution": [
        "Trial 10 must succeed, and among trials 2 through 9 there must be exactly 3 successes.",
        "The first failure is given, so it contributes no probability factor after conditioning. There are choose(8,3) admissible success-position sets.",
        "The conditional probability is choose(8,3)(0.375)^4(0.625)^5=0.105612."
      ],
      "feedback": {
        "0": "This retains the factor for the first failure even though that failure is already given.",
        "1": "This is the unconditional negative-binomial probability.",
        "3": "This allows all required successes before the final trial.",
        "4": "This omits the required success on the final trial."
      },
      "skills": [
        "negative-binomial event",
        "conditional first trial",
        "success positions"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: negative-binomial event, conditional first trial, success positions.",
        "Trial 10 must succeed, and among trials 2 through 9 there must be exactly 3 successes."
      ],
      "verification": {
        "kind": "negative-first-failure",
        "r": 4,
        "t": 10,
        "p": 0.375,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:c2-independent-trials:4",
      "topicId": "c2-independent-trials",
      "family": "negative-binomial-first-failure"
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
    },
    {
      "question": "Three diagnostic flags A, B, C have probabilities 14/39, 14/39, 13/39. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 5/39, 5/39, 3/39, and all three occur with probability 1/39. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2821$",
        "$0.4615$",
        "$0.6207$",
        "$0.7179$",
        "$0.7436$"
      ],
      "answer": 1,
      "solution": [
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
        "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
        "The result is [14+14+13-2(5+5+3)+3]/39=18/39=0.461538."
      ],
      "feedback": {
        "0": "This gives at least two flags.",
        "2": "This conditions on at least one flag, which was not requested.",
        "3": "This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.",
        "4": "This is at least one, including overlaps."
      },
      "skills": [
        "Venn-region multiplicities",
        "inclusion–exclusion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Venn-region multiplicities, inclusion–exclusion.",
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times."
      ],
      "verification": {
        "kind": "three-exact",
        "weights": [
          10,
          5,
          7,
          4,
          6,
          4,
          2,
          1
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:d1-mutually-exclusive:2",
      "topicId": "d1-mutually-exclusive",
      "family": "three-events-exactly-one"
    },
    {
      "question": "An insurer records P(auto coverage)=0.525, P(home coverage)=0.4, and P(both)=0.225. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
      "choices": [
        "$0.2025$",
        "$0.2875$",
        "$0.4900$",
        "$0.5688$",
        "$0.7000$"
      ],
      "answer": 2,
      "solution": [
        "The disjoint class shares are auto-only 0.3, home-only 0.175, both 0.225, and neither 0.3.",
        "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
        "Total probability gives 0.3(0.55)+0.175(0.70)+0.225(0.90)=0.49."
      ],
      "feedback": {
        "0": "This includes only the both-coverage class.",
        "1": "This omits customers with both coverages.",
        "3": "This double counts customers with both and applies the wrong renewal rate to them.",
        "4": "This conditions on having coverage; the question samples from all customers."
      },
      "skills": [
        "overlapping coverages to partition",
        "total probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: overlapping coverages to partition, total probability.",
        "The disjoint class shares are auto-only 0.3, home-only 0.175, both 0.225, and neither 0.3."
      ],
      "verification": {
        "kind": "renewal-mixture",
        "a": 0.525,
        "b": 0.4,
        "both": 0.225,
        "rates": [
          0.55,
          0.7,
          0.9
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:d1-mutually-exclusive:3",
      "topicId": "d1-mutually-exclusive",
      "family": "coverage-renewal-mixture"
    },
    {
      "question": "A portfolio consists of classes A, B, C in proportions 0.2, 0.3, 0.5. Their annual claim probabilities are 0.1, 0.24, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
      "choices": [
        "$0.2280$",
        "$0.2466$",
        "$0.3000$",
        "$0.3220$",
        "$0.7600$"
      ],
      "answer": 3,
      "solution": [
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
        "Total no-claim probability is 0.2(0.9)+0.3(0.76)+0.5(0.6)=0.708.",
        "The class-B and no-claim joint probability is 0.228; its ratio to 0.708 is 0.322034."
      ],
      "feedback": {
        "0": "This is a joint probability; normalize by total no-claim probability.",
        "1": "This conditions on a claim rather than on no claim.",
        "2": "This is the prior class share.",
        "4": "This reverses the direction of the condition."
      },
      "skills": [
        "exhaustive partition",
        "total probability",
        "Bayes with a complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exhaustive partition, total probability, Bayes with a complement.",
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities."
      ],
      "verification": {
        "kind": "class-survival",
        "weights": [
          0.2,
          0.3,
          0.5
        ],
        "rates": [
          0.1,
          0.24000000000000002,
          0.4
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:d1-mutually-exclusive:4",
      "topicId": "d1-mutually-exclusive",
      "family": "three-class-survival"
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
    },
    {
      "question": "A portfolio consists of classes A, B, C in proportions 0.3, 0.375, 0.325. Their annual claim probabilities are 0.12, 0.2, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
      "choices": [
        "$0.3000$",
        "$0.3112$",
        "$0.3750$",
        "$0.3953$",
        "$0.8000$"
      ],
      "answer": 3,
      "solution": [
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
        "Total no-claim probability is 0.3(0.88)+0.375(0.8)+0.325(0.6)=0.759.",
        "The class-B and no-claim joint probability is 0.3; its ratio to 0.759 is 0.395257."
      ],
      "feedback": {
        "0": "This is a joint probability; normalize by total no-claim probability.",
        "1": "This conditions on a claim rather than on no claim.",
        "2": "This is the prior class share.",
        "4": "This reverses the direction of the condition."
      },
      "skills": [
        "exhaustive partition",
        "total probability",
        "Bayes with a complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exhaustive partition, total probability, Bayes with a complement.",
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities."
      ],
      "verification": {
        "kind": "class-survival",
        "weights": [
          0.30000000000000004,
          0.375,
          0.32499999999999996
        ],
        "rates": [
          0.12000000000000001,
          0.2,
          0.4
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:d2-partitions:2",
      "topicId": "d2-partitions",
      "family": "three-class-survival"
    },
    {
      "question": "An insurer records P(auto coverage)=0.575, P(home coverage)=0.475, and P(both)=0.275. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
      "choices": [
        "$0.2475$",
        "$0.3050$",
        "$0.5525$",
        "$0.6487$",
        "$0.7129$"
      ],
      "answer": 2,
      "solution": [
        "The disjoint class shares are auto-only 0.3, home-only 0.2, both 0.275, and neither 0.225.",
        "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
        "Total probability gives 0.3(0.55)+0.2(0.70)+0.275(0.90)=0.5525."
      ],
      "feedback": {
        "0": "This includes only the both-coverage class.",
        "1": "This omits customers with both coverages.",
        "3": "This double counts customers with both and applies the wrong renewal rate to them.",
        "4": "This conditions on having coverage; the question samples from all customers."
      },
      "skills": [
        "overlapping coverages to partition",
        "total probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: overlapping coverages to partition, total probability.",
        "The disjoint class shares are auto-only 0.3, home-only 0.2, both 0.275, and neither 0.225."
      ],
      "verification": {
        "kind": "renewal-mixture",
        "a": 0.575,
        "b": 0.47500000000000003,
        "both": 0.275,
        "rates": [
          0.55,
          0.7,
          0.9
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:d2-partitions:3",
      "topicId": "d2-partitions",
      "family": "coverage-renewal-mixture"
    },
    {
      "question": "A supplier shipment comes from plant A with probability 0.3, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.15 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
      "choices": [
        "$0.0895$",
        "$0.3000$",
        "$0.3789$",
        "$0.5000$",
        "$0.7000$"
      ],
      "answer": 2,
      "solution": [
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.209651 for B.",
        "Weight the likelihoods by plant shares 0.3 and 0.7.",
        "Bayes gives 0.089545/(0.089545+0.146756)=0.378947."
      ],
      "feedback": {
        "0": "This omits the total likelihood in the denominator.",
        "1": "This is the prior before observing the sample.",
        "3": "This updates using one defective item rather than the entire sample.",
        "4": "This omits the observed nondefective items."
      },
      "skills": [
        "conditional binomial likelihood",
        "Bayes over sample evidence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.209651 for B."
      ],
      "verification": {
        "kind": "bayes-binomial",
        "w": 0.30000000000000004,
        "rates": [
          0.35,
          0.15000000000000002
        ],
        "n": 7,
        "k": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:d2-partitions:4",
      "topicId": "d2-partitions",
      "family": "bayes-sample-count"
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
    },
    {
      "question": "Three diagnostic flags A, B, C have probabilities 17/43, 15/43, 14/43. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 5/43, 5/43, 3/43, and all three occur with probability 1/43. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.2558$",
        "$0.5349$",
        "$0.6765$",
        "$0.7674$",
        "$0.7907$"
      ],
      "answer": 1,
      "solution": [
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
        "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
        "The result is [17+15+14-2(5+5+3)+3]/43=23/43=0.534884."
      ],
      "feedback": {
        "0": "This gives at least two flags.",
        "2": "This conditions on at least one flag, which was not requested.",
        "3": "This applies the union subtraction rather than the exactly-one subtraction and also omits the triple correction.",
        "4": "This is at least one, including overlaps."
      },
      "skills": [
        "Venn-region multiplicities",
        "inclusion–exclusion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Venn-region multiplicities, inclusion–exclusion.",
        "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times."
      ],
      "verification": {
        "kind": "three-exact",
        "weights": [
          9,
          8,
          8,
          4,
          7,
          4,
          2,
          1
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e1-addition-rule:2",
      "topicId": "e1-addition-rule",
      "family": "three-events-exactly-one"
    },
    {
      "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.35, P(B)=0.475, and P(neither)=0.375. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.3200$",
        "$0.4250$",
        "$0.5600$",
        "$0.6800$",
        "$0.7600$"
      ],
      "answer": 3,
      "solution": [
        "The union has probability 0.625. The addition rule gives P(A∩B)=0.35+0.475-0.625=0.2.",
        "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.425.",
        "Divide by the union probability to obtain 0.68."
      ],
      "feedback": {
        "0": "This gives both events conditional on the union.",
        "1": "This is the probability of exactly one before restricting to the union.",
        "2": "This includes the intersection as well as the A-only region.",
        "4": "This includes the intersection as well as the B-only region."
      },
      "skills": [
        "recover an intersection",
        "exactly-one event",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, exactly-one event, conditional normalization.",
        "The union has probability 0.625. The addition rule gives P(A∩B)=0.35+0.475-0.625=0.2."
      ],
      "verification": {
        "kind": "symmetric-difference",
        "a": 0.35,
        "b": 0.47500000000000003,
        "both": 0.2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e1-addition-rule:3",
      "topicId": "e1-addition-rule",
      "family": "symmetric-difference-infer"
    },
    {
      "question": "Three components operate independently, with operating probabilities 0.7, 0.75, and 0.875. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
      "choices": [
        "$0.2250$",
        "$0.5250$",
        "$0.6781$",
        "$0.7000$",
        "$0.7750$"
      ],
      "answer": 4,
      "solution": [
        "System operation includes exactly two operating components and all three. Its probability is 0.875.",
        "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.7[1-(1-0.75)(1-0.875)]=0.678125.",
        "The requested ratio is 0.678125/0.875=0.775."
      ],
      "feedback": {
        "0": "This gives component 1 failure conditional on system operation.",
        "1": "This unnecessarily requires all three components to operate.",
        "2": "This is the joint probability before conditioning.",
        "3": "Component independence does not mean component 1 is independent of system operation."
      },
      "skills": [
        "independent unequal trials",
        "at-least-two event",
        "conditional reliability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent unequal trials, at-least-two event, conditional reliability.",
        "System operation includes exactly two operating components and all three. Its probability is 0.875."
      ],
      "verification": {
        "kind": "reliability-condition",
        "rates": [
          0.7,
          0.75,
          0.875
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e1-addition-rule:4",
      "topicId": "e1-addition-rule",
      "family": "unequal-reliability"
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
    },
    {
      "question": "An urn contains 3 red balls and 5 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
      "choices": [
        "$0.1071$",
        "$0.2857$",
        "$0.3750$",
        "$0.4286$",
        "$0.7143$"
      ],
      "answer": 1,
      "solution": [
        "P(first red and second red)=(3/8)(2/7).",
        "By symmetry, the second draw is red with probability 3/8.",
        "Dividing the joint probability by the condition probability gives (2)/(7)=0.285714. Conditioning on a later draw still changes the earlier draw distribution."
      ],
      "feedback": {
        "0": "This is the joint probability; it needs a conditional denominator.",
        "2": "This is the first-draw probability before observing the second draw.",
        "3": "The observed red ball must be removed from the red count as well as the population count.",
        "4": "This gives the probability that the first ball was blue."
      },
      "skills": [
        "ordered sample space",
        "reverse conditioning",
        "without replacement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordered sample space, reverse conditioning, without replacement.",
        "P(first red and second red)=(3/8)(2/7)."
      ],
      "verification": {
        "kind": "ordered-condition",
        "N": 8,
        "K": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e2-multiplication-rule:2",
      "topicId": "e2-multiplication-rule",
      "family": "ordered-draw-condition"
    },
    {
      "question": "Three components operate independently, with operating probabilities 0.65, 0.75, and 0.825. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
      "choices": [
        "$0.2584$",
        "$0.4799$",
        "$0.6216$",
        "$0.6500$",
        "$0.7416$"
      ],
      "answer": 4,
      "solution": [
        "System operation includes exactly two operating components and all three. Its probability is 0.838125.",
        "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.65[1-(1-0.75)(1-0.825)]=0.621563.",
        "The requested ratio is 0.621563/0.838125=0.741611."
      ],
      "feedback": {
        "0": "This gives component 1 failure conditional on system operation.",
        "1": "This unnecessarily requires all three components to operate.",
        "2": "This is the joint probability before conditioning.",
        "3": "Component independence does not mean component 1 is independent of system operation."
      },
      "skills": [
        "independent unequal trials",
        "at-least-two event",
        "conditional reliability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent unequal trials, at-least-two event, conditional reliability.",
        "System operation includes exactly two operating components and all three. Its probability is 0.838125."
      ],
      "verification": {
        "kind": "reliability-condition",
        "rates": [
          0.65,
          0.75,
          0.8250000000000001
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e2-multiplication-rule:3",
      "topicId": "e2-multiplication-rule",
      "family": "unequal-reliability"
    },
    {
      "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.15 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
      "choices": [
        "$0.0653$",
        "$0.2500$",
        "$0.2935$",
        "$0.4706$",
        "$0.7033$"
      ],
      "answer": 2,
      "solution": [
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.261274 for A and 0.209651 for B.",
        "Weight the likelihoods by plant shares 0.25 and 0.75.",
        "Bayes gives 0.065318/(0.065318+0.157238)=0.293491."
      ],
      "feedback": {
        "0": "This omits the total likelihood in the denominator.",
        "1": "This is the prior before observing the sample.",
        "3": "This updates using one defective item rather than the entire sample.",
        "4": "This omits the observed nondefective items."
      },
      "skills": [
        "conditional binomial likelihood",
        "Bayes over sample evidence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.261274 for A and 0.209651 for B."
      ],
      "verification": {
        "kind": "bayes-binomial",
        "w": 0.25,
        "rates": [
          0.39999999999999997,
          0.15000000000000002
        ],
        "n": 7,
        "k": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e2-multiplication-rule:4",
      "topicId": "e2-multiplication-rule",
      "family": "bayes-sample-count"
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
    },
    {
      "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.1 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
      "choices": [
        "$0.0597$",
        "$0.2000$",
        "$0.3757$",
        "$0.4667$",
        "$0.7538$"
      ],
      "answer": 2,
      "solution": [
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.124003 for B.",
        "Weight the likelihoods by plant shares 0.2 and 0.8.",
        "Bayes gives 0.059697/(0.059697+0.099202)=0.375691."
      ],
      "feedback": {
        "0": "This omits the total likelihood in the denominator.",
        "1": "This is the prior before observing the sample.",
        "3": "This updates using one defective item rather than the entire sample.",
        "4": "This omits the observed nondefective items."
      },
      "skills": [
        "conditional binomial likelihood",
        "Bayes over sample evidence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.124003 for B."
      ],
      "verification": {
        "kind": "bayes-binomial",
        "w": 0.2,
        "rates": [
          0.35,
          0.1
        ],
        "n": 7,
        "k": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e3-combined-problems:2",
      "topicId": "e3-combined-problems",
      "family": "bayes-sample-count"
    },
    {
      "question": "An insurer records P(auto coverage)=0.6, P(home coverage)=0.425, and P(both)=0.2. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
      "choices": [
        "$0.1800$",
        "$0.3775$",
        "$0.5575$",
        "$0.6275$",
        "$0.6758$"
      ],
      "answer": 2,
      "solution": [
        "The disjoint class shares are auto-only 0.4, home-only 0.225, both 0.2, and neither 0.175.",
        "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
        "Total probability gives 0.4(0.55)+0.225(0.70)+0.2(0.90)=0.5575."
      ],
      "feedback": {
        "0": "This includes only the both-coverage class.",
        "1": "This omits customers with both coverages.",
        "3": "This double counts customers with both and applies the wrong renewal rate to them.",
        "4": "This conditions on having coverage; the question samples from all customers."
      },
      "skills": [
        "overlapping coverages to partition",
        "total probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: overlapping coverages to partition, total probability.",
        "The disjoint class shares are auto-only 0.4, home-only 0.225, both 0.2, and neither 0.175."
      ],
      "verification": {
        "kind": "renewal-mixture",
        "a": 0.6,
        "b": 0.42500000000000004,
        "both": 0.2,
        "rates": [
          0.55,
          0.7,
          0.9
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e3-combined-problems:3",
      "topicId": "e3-combined-problems",
      "family": "coverage-renewal-mixture"
    },
    {
      "question": "Three components operate independently, with operating probabilities 0.675, 0.725, and 0.825. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
      "choices": [
        "$0.2323$",
        "$0.4824$",
        "$0.6425$",
        "$0.6750$",
        "$0.7677$"
      ],
      "answer": 4,
      "solution": [
        "System operation includes exactly two operating components and all three. Its probability is 0.836906.",
        "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.675[1-(1-0.725)(1-0.825)]=0.642516.",
        "The requested ratio is 0.642516/0.836906=0.767727."
      ],
      "feedback": {
        "0": "This gives component 1 failure conditional on system operation.",
        "1": "This unnecessarily requires all three components to operate.",
        "2": "This is the joint probability before conditioning.",
        "3": "Component independence does not mean component 1 is independent of system operation."
      },
      "skills": [
        "independent unequal trials",
        "at-least-two event",
        "conditional reliability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent unequal trials, at-least-two event, conditional reliability.",
        "System operation includes exactly two operating components and all three. Its probability is 0.836906."
      ],
      "verification": {
        "kind": "reliability-condition",
        "rates": [
          0.675,
          0.725,
          0.8250000000000001
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:e3-combined-problems:4",
      "topicId": "e3-combined-problems",
      "family": "unequal-reliability"
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
    },
    {
      "question": "An urn contains 3 red balls and 9 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
      "choices": [
        "$0.0455$",
        "$0.1818$",
        "$0.2500$",
        "$0.2727$",
        "$0.8182$"
      ],
      "answer": 1,
      "solution": [
        "P(first red and second red)=(3/12)(2/11).",
        "By symmetry, the second draw is red with probability 3/12.",
        "Dividing the joint probability by the condition probability gives (2)/(11)=0.181818. Conditioning on a later draw still changes the earlier draw distribution."
      ],
      "feedback": {
        "0": "This is the joint probability; it needs a conditional denominator.",
        "2": "This is the first-draw probability before observing the second draw.",
        "3": "The observed red ball must be removed from the red count as well as the population count.",
        "4": "This gives the probability that the first ball was blue."
      },
      "skills": [
        "ordered sample space",
        "reverse conditioning",
        "without replacement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordered sample space, reverse conditioning, without replacement.",
        "P(first red and second red)=(3/12)(2/11)."
      ],
      "verification": {
        "kind": "ordered-condition",
        "N": 12,
        "K": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f1-conditional-probability:2",
      "topicId": "f1-conditional-probability",
      "family": "ordered-draw-condition"
    },
    {
      "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.375, P(B)=0.425, and P(neither)=0.425. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
      "choices": [
        "$0.3500$",
        "$0.3913$",
        "$0.6087$",
        "$0.6522$",
        "$0.7391$"
      ],
      "answer": 2,
      "solution": [
        "The union has probability 0.575. The addition rule gives P(A∩B)=0.375+0.425-0.575=0.225.",
        "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.35.",
        "Divide by the union probability to obtain 0.608696."
      ],
      "feedback": {
        "0": "This is the probability of exactly one before restricting to the union.",
        "1": "This gives both events conditional on the union.",
        "3": "This includes the intersection as well as the A-only region.",
        "4": "This includes the intersection as well as the B-only region."
      },
      "skills": [
        "recover an intersection",
        "exactly-one event",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: recover an intersection, exactly-one event, conditional normalization.",
        "The union has probability 0.575. The addition rule gives P(A∩B)=0.375+0.425-0.575=0.225."
      ],
      "verification": {
        "kind": "symmetric-difference",
        "a": 0.375,
        "b": 0.42500000000000004,
        "both": 0.225,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f1-conditional-probability:3",
      "topicId": "f1-conditional-probability",
      "family": "symmetric-difference-infer"
    },
    {
      "question": "Three components operate independently, with operating probabilities 0.6, 0.725, and 0.8. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
      "choices": [
        "$0.2904$",
        "$0.4355$",
        "$0.5670$",
        "$0.6000$",
        "$0.7096$"
      ],
      "answer": 4,
      "solution": [
        "System operation includes exactly two operating components and all three. Its probability is 0.799.",
        "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.6[1-(1-0.725)(1-0.8)]=0.567.",
        "The requested ratio is 0.567/0.799=0.709637."
      ],
      "feedback": {
        "0": "This gives component 1 failure conditional on system operation.",
        "1": "This unnecessarily requires all three components to operate.",
        "2": "This is the joint probability before conditioning.",
        "3": "Component independence does not mean component 1 is independent of system operation."
      },
      "skills": [
        "independent unequal trials",
        "at-least-two event",
        "conditional reliability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent unequal trials, at-least-two event, conditional reliability.",
        "System operation includes exactly two operating components and all three. Its probability is 0.799."
      ],
      "verification": {
        "kind": "reliability-condition",
        "rates": [
          0.6,
          0.725,
          0.8
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f1-conditional-probability:4",
      "topicId": "f1-conditional-probability",
      "family": "unequal-reliability"
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
    },
    {
      "question": "A supplier shipment comes from plant A with probability 0.4, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.1 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
      "choices": [
        "$0.1194$",
        "$0.4000$",
        "$0.6161$",
        "$0.7000$",
        "$0.8909$"
      ],
      "answer": 2,
      "solution": [
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.124003 for B.",
        "Weight the likelihoods by plant shares 0.4 and 0.6.",
        "Bayes gives 0.119394/(0.119394+0.074402)=0.616081."
      ],
      "feedback": {
        "0": "This omits the total likelihood in the denominator.",
        "1": "This is the prior before observing the sample.",
        "3": "This updates using one defective item rather than the entire sample.",
        "4": "This omits the observed nondefective items."
      },
      "skills": [
        "conditional binomial likelihood",
        "Bayes over sample evidence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.124003 for B."
      ],
      "verification": {
        "kind": "bayes-binomial",
        "w": 0.4,
        "rates": [
          0.35,
          0.1
        ],
        "n": 7,
        "k": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f2-bayes-theorem:2",
      "topicId": "f2-bayes-theorem",
      "family": "bayes-sample-count"
    },
    {
      "question": "A portfolio consists of classes A, B, C in proportions 0.275, 0.3, 0.425. Their annual claim probabilities are 0.12, 0.2, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
      "choices": [
        "$0.2281$",
        "$0.2400$",
        "$0.3000$",
        "$0.3256$",
        "$0.8000$"
      ],
      "answer": 3,
      "solution": [
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
        "Total no-claim probability is 0.275(0.88)+0.3(0.8)+0.425(0.6)=0.737.",
        "The class-B and no-claim joint probability is 0.24; its ratio to 0.737 is 0.325645."
      ],
      "feedback": {
        "0": "This conditions on a claim rather than on no claim.",
        "1": "This is a joint probability; normalize by total no-claim probability.",
        "2": "This is the prior class share.",
        "4": "This reverses the direction of the condition."
      },
      "skills": [
        "exhaustive partition",
        "total probability",
        "Bayes with a complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exhaustive partition, total probability, Bayes with a complement.",
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities."
      ],
      "verification": {
        "kind": "class-survival",
        "weights": [
          0.275,
          0.3,
          0.42500000000000004
        ],
        "rates": [
          0.12000000000000001,
          0.2,
          0.4
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f2-bayes-theorem:3",
      "topicId": "f2-bayes-theorem",
      "family": "three-class-survival"
    },
    {
      "question": "An insured belongs permanently to class H with probability 0.3, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.4, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0406$",
        "$0.1143$",
        "$0.1353$",
        "$0.1904$",
        "$0.3000$"
      ],
      "answer": 1,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.449329 for L.",
        "The overall likelihood is 0.355131 after weighting by the prior class shares.",
        "The H posterior is 0.040601/0.355131=0.114326."
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
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.449329 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.3,
        "rates": [
          1,
          0.4
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "chapter:f2-bayes-theorem:4",
      "topicId": "f2-bayes-theorem",
      "family": "mixture-no-claim"
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
    },
    {
      "question": "An insurer records P(auto coverage)=0.525, P(home coverage)=0.4, and P(both)=0.2. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
      "choices": [
        "$0.1800$",
        "$0.3187$",
        "$0.4988$",
        "$0.5688$",
        "$0.6879$"
      ],
      "answer": 2,
      "solution": [
        "The disjoint class shares are auto-only 0.325, home-only 0.2, both 0.2, and neither 0.275.",
        "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
        "Total probability gives 0.325(0.55)+0.2(0.70)+0.2(0.90)=0.49875."
      ],
      "feedback": {
        "0": "This includes only the both-coverage class.",
        "1": "This omits customers with both coverages.",
        "3": "This double counts customers with both and applies the wrong renewal rate to them.",
        "4": "This conditions on having coverage; the question samples from all customers."
      },
      "skills": [
        "overlapping coverages to partition",
        "total probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: overlapping coverages to partition, total probability.",
        "The disjoint class shares are auto-only 0.325, home-only 0.2, both 0.2, and neither 0.275."
      ],
      "verification": {
        "kind": "renewal-mixture",
        "a": 0.525,
        "b": 0.4,
        "both": 0.2,
        "rates": [
          0.55,
          0.7,
          0.9
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f3-law-total-probability:2",
      "topicId": "f3-law-total-probability",
      "family": "coverage-renewal-mixture"
    },
    {
      "question": "A portfolio consists of classes A, B, C in proportions 0.2, 0.3, 0.5. Their annual claim probabilities are 0.14, 0.24, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
      "choices": [
        "$0.2280$",
        "$0.2400$",
        "$0.3000$",
        "$0.3257$",
        "$0.7600$"
      ],
      "answer": 3,
      "solution": [
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
        "Total no-claim probability is 0.2(0.86)+0.3(0.76)+0.5(0.6)=0.7.",
        "The class-B and no-claim joint probability is 0.228; its ratio to 0.7 is 0.325714."
      ],
      "feedback": {
        "0": "This is a joint probability; normalize by total no-claim probability.",
        "1": "This conditions on a claim rather than on no claim.",
        "2": "This is the prior class share.",
        "4": "This reverses the direction of the condition."
      },
      "skills": [
        "exhaustive partition",
        "total probability",
        "Bayes with a complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exhaustive partition, total probability, Bayes with a complement.",
        "Use no-claim probabilities within each class, the complements of the supplied claim probabilities."
      ],
      "verification": {
        "kind": "class-survival",
        "weights": [
          0.2,
          0.3,
          0.5
        ],
        "rates": [
          0.14,
          0.24000000000000002,
          0.4
        ],
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f3-law-total-probability:3",
      "topicId": "f3-law-total-probability",
      "family": "three-class-survival"
    },
    {
      "question": "A supplier shipment comes from plant A with probability 0.4, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.45 at A and 0.15 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
      "choices": [
        "$0.0856$",
        "$0.4000$",
        "$0.4050$",
        "$0.6667$",
        "$0.8571$"
      ],
      "answer": 2,
      "solution": [
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.214022 for A and 0.209651 for B.",
        "Weight the likelihoods by plant shares 0.4 and 0.6.",
        "Bayes gives 0.085609/(0.085609+0.12579)=0.404962."
      ],
      "feedback": {
        "0": "This omits the total likelihood in the denominator.",
        "1": "This is the prior before observing the sample.",
        "3": "This updates using one defective item rather than the entire sample.",
        "4": "This omits the observed nondefective items."
      },
      "skills": [
        "conditional binomial likelihood",
        "Bayes over sample evidence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.214022 for A and 0.209651 for B."
      ],
      "verification": {
        "kind": "bayes-binomial",
        "w": 0.4,
        "rates": [
          0.44999999999999996,
          0.15000000000000002
        ],
        "n": 7,
        "k": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:f3-law-total-probability:4",
      "topicId": "f3-law-total-probability",
      "family": "bayes-sample-count"
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
    },
    {
      "question": "The claim count N takes values 0 through 5, with P(N=k)=c(k+1). A contract pays 150 for each claim in excess of the first 1 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
      "choices": [
        "$250.0000$",
        "$350.0000$",
        "$357.1429$",
        "$500.0000$",
        "$171428.5714$"
      ],
      "answer": 2,
      "solution": [
        "Normalize the probabilities: c[1+2+⋯+6]=1, giving c=2/(6×7).",
        "The payment at count k is 150 max(k-1,0). Its possible values are 0, 0, 150, 300, 450, 600.",
        "Weight each payment by c(k+1); the expected payment is 357.142857."
      ],
      "feedback": {
        "0": "The supported counts are not equally likely.",
        "1": "A positive-part function cannot be moved outside an expectation.",
        "3": "This ignores the count deductible.",
        "4": "This is the second raw moment rather than the mean."
      },
      "skills": [
        "PMF normalization",
        "discrete payment transformation",
        "expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: PMF normalization, discrete payment transformation, expectation.",
        "Normalize the probabilities: c[1+2+⋯+6]=1, giving c=2/(6×7)."
      ],
      "verification": {
        "kind": "finite-payment",
        "n": 6,
        "scale": 150,
        "d": 1,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-a1-random-variables:2",
      "topicId": "urv-a1-random-variables",
      "family": "finite-payment-moments"
    },
    {
      "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.225+(1-0.225)(x/8)^4 for 0≤x<8, and F(x)=1 for x≥8. Calculate E[X]. Round your answer to four decimal places.",
      "choices": [
        "$3.1000$",
        "$4.9600$",
        "$6.4000$",
        "$6.7600$",
        "$33.0667$"
      ],
      "answer": 1,
      "solution": [
        "The jump at zero is 0.225. It contributes zero to E[X].",
        "On (0,8), the density is (1-0.225)4x^3/8^4.",
        "Integrating x times this density gives (1-0.225)8×4/(4+1)=4.96."
      ],
      "feedback": {
        "0": "This replaces the power CDF with a uniform distribution.",
        "2": "This is the mean conditional on X>0.",
        "3": "The point mass is at zero, not at the upper endpoint.",
        "4": "This is the second raw moment."
      },
      "skills": [
        "CDF jump",
        "continuous component",
        "mixed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF jump, continuous component, mixed expectation.",
        "The jump at zero is 0.225. It contributes zero to E[X]."
      ],
      "verification": {
        "kind": "mixed-power",
        "p": 0.225,
        "B": 8,
        "power": 4,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-a1-random-variables:3",
      "topicId": "urv-a1-random-variables",
      "family": "mixed-cdf-mean"
    },
    {
      "question": "X has CDF F(x)=(x/7)^4 for 0<x<7, with F(x)=0 below the support and 1 above it. A benefit is Y=4X²+7. Calculate E[Y]. Round your answer to four decimal places.",
      "choices": [
        "$29.4000$",
        "$130.6667$",
        "$132.4400$",
        "$137.6667$",
        "$529.6667$"
      ],
      "answer": 3,
      "solution": [
        "Differentiating the CDF gives density 4x^3/7^4.",
        "The second raw moment is E[X²]=4×7²/(4+2)=32.666667.",
        "Linearity gives E[Y]=4E[X²]+7=137.666667. Squaring the mean would not give E[X²]."
      ],
      "feedback": {
        "0": "This treats the squared transformation as linear in X.",
        "1": "This omits the additive benefit.",
        "2": "This replaces E[X²] by (E[X])².",
        "4": "The multiplier is squared in a variance, not in an expectation."
      },
      "skills": [
        "CDF to density",
        "second raw moment",
        "transformed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF to density, second raw moment, transformed expectation.",
        "Differentiating the CDF gives density 4x^3/7^4."
      ],
      "verification": {
        "kind": "power-expectation",
        "B": 7,
        "power": 4,
        "a": 4,
        "shift": 7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-a1-random-variables:4",
      "topicId": "urv-a1-random-variables",
      "family": "power-transformed-expectation"
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
    },
    {
      "question": "A loss X has density c(10-x) for 0<x<10, and zero otherwise. The constant c is unknown. A loss has already exceeded 2.5. Calculate the probability that it exceeds 7.5. Round your answer to four decimal places.",
      "choices": [
        "$0.0625$",
        "$0.1111$",
        "$0.3333$",
        "$0.5625$",
        "$0.8889$"
      ],
      "answer": 1,
      "solution": [
        "Normalization gives c=2/100, since the integral of 10-x over the support is 100/2.",
        "The survival function is P(X>x)=((10-x)/10)².",
        "Divide survival at 7.5 by survival at 2.5: [(10-7.5)/(10-2.5)]²=0.111111."
      ],
      "feedback": {
        "0": "This is the unconditional tail at the higher threshold.",
        "2": "This uses a uniform density instead of the supplied decreasing density.",
        "3": "This is only the probability of the condition.",
        "4": "This is the probability of not exceeding the higher threshold, conditional on exceeding the lower one."
      },
      "skills": [
        "density normalization",
        "survival integration",
        "conditional tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: density normalization, survival integration, conditional tail.",
        "Normalization gives c=2/100, since the integral of 10-x over the support is 100/2."
      ],
      "verification": {
        "kind": "triangular-tail",
        "B": 10,
        "t": 2.5,
        "u": 7.5,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-a2-pdf:2",
      "topicId": "urv-a2-pdf",
      "family": "triangular-tail-infer"
    },
    {
      "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.15+(1-0.15)(x/4)^2 for 0≤x<4, and F(x)=1 for x≥4. Calculate E[X]. Round your answer to four decimal places.",
      "choices": [
        "$1.7000$",
        "$2.2667$",
        "$2.6667$",
        "$2.8667$",
        "$6.8000$"
      ],
      "answer": 1,
      "solution": [
        "The jump at zero is 0.15. It contributes zero to E[X].",
        "On (0,4), the density is (1-0.15)2x^1/4^2.",
        "Integrating x times this density gives (1-0.15)4×2/(2+1)=2.266667."
      ],
      "feedback": {
        "0": "This replaces the power CDF with a uniform distribution.",
        "2": "This is the mean conditional on X>0.",
        "3": "The point mass is at zero, not at the upper endpoint.",
        "4": "This is the second raw moment."
      },
      "skills": [
        "CDF jump",
        "continuous component",
        "mixed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF jump, continuous component, mixed expectation.",
        "The jump at zero is 0.15. It contributes zero to E[X]."
      ],
      "verification": {
        "kind": "mixed-power",
        "p": 0.15000000000000002,
        "B": 4,
        "power": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-a2-pdf:3",
      "topicId": "urv-a2-pdf",
      "family": "mixed-cdf-mean"
    },
    {
      "question": "X has density 2(12-x)/144 for 0<x<12, and zero otherwise. Given X>3, calculate Var(X). Round your answer to four decimal places.",
      "choices": [
        "$2.1213$",
        "$4.5000$",
        "$6.7500$",
        "$8.0000$",
        "$13.5000$"
      ],
      "answer": 1,
      "solution": [
        "The condition probability is ((12-3)/12)². Divide the original density by this probability on (3,12).",
        "For Z=X-3, the conditional density is 2(9-z)/(9)² on (0,9). Its first two moments are 3 and 13.5.",
        "The shift contributes no variance, so Var(X given X>3)=(9)²/18=4.5. The conditional mean is 6."
      ],
      "feedback": {
        "0": "This is the conditional SD.",
        "2": "This uses a conditional uniform distribution instead of the triangular density.",
        "3": "This is the unconditional variance.",
        "4": "This is the second raw moment of the shifted variable."
      },
      "skills": [
        "conditional density",
        "shifted support",
        "two moments"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional density, shifted support, two moments.",
        "The condition probability is ((12-3)/12)². Divide the original density by this probability on (3,12)."
      ],
      "verification": {
        "kind": "triangular-variance",
        "B": 12,
        "lower": 3.0,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-a2-pdf:4",
      "topicId": "urv-a2-pdf",
      "family": "triangular-conditional-variance"
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
    },
    {
      "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.125+(1-0.125)(x/9)^4 for 0≤x<9, and F(x)=1 for x≥9. Calculate E[X]. Round your answer to four decimal places.",
      "choices": [
        "$3.9375$",
        "$6.3000$",
        "$7.2000$",
        "$7.4250$",
        "$47.2500$"
      ],
      "answer": 1,
      "solution": [
        "The jump at zero is 0.125. It contributes zero to E[X].",
        "On (0,9), the density is (1-0.125)4x^3/9^4.",
        "Integrating x times this density gives (1-0.125)9×4/(4+1)=6.3."
      ],
      "feedback": {
        "0": "This replaces the power CDF with a uniform distribution.",
        "2": "This is the mean conditional on X>0.",
        "3": "The point mass is at zero, not at the upper endpoint.",
        "4": "This is the second raw moment."
      },
      "skills": [
        "CDF jump",
        "continuous component",
        "mixed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF jump, continuous component, mixed expectation.",
        "The jump at zero is 0.125. It contributes zero to E[X]."
      ],
      "verification": {
        "kind": "mixed-power",
        "p": 0.125,
        "B": 9,
        "power": 4,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-a3-cdf:2",
      "topicId": "urv-a3-cdf",
      "family": "mixed-cdf-mean"
    },
    {
      "question": "Loss X is uniform on (0,1800). The insurer pays Y=0.65max(X-450,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
      "choices": [
        "$438.7500$",
        "$585.0000$",
        "$658.1250$",
        "$877.5000$",
        "$900.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive.",
        "For positive y, P(Y≤y)=(450+y/0.65)/1800.",
        "Set this to 0.75 and solve y=0.65(0.75×1800-450)=585."
      ],
      "feedback": {
        "0": "This is the positive-payment mean rather than the per-loss 75th percentile.",
        "2": "This gives the percentile conditional on positive payment.",
        "3": "This omits the deductible.",
        "4": "This omits the insurer share."
      },
      "skills": [
        "zero-payment mass",
        "payment CDF",
        "percentile inversion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-payment mass, payment CDF, percentile inversion.",
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive."
      ],
      "verification": {
        "kind": "uniform-payment-quantile",
        "B": 1800,
        "d": 450.0,
        "share": 0.65,
        "u": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-a3-cdf:3",
      "topicId": "urv-a3-cdf",
      "family": "uniform-payment-quantile"
    },
    {
      "question": "Loss X is exponential with mean 1100. The payment is Y=min(0.75max(X-350,0),500). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
      "choices": [
        "$0.2725$",
        "$0.3306$",
        "$0.3968$",
        "$0.6032$",
        "$0.7275$"
      ],
      "answer": 1,
      "solution": [
        "The payment is positive when X>350, and reaches its cap when X≥1016.666667.",
        "The event 0<Y<500 corresponds to 350<X<1016.666667. Both the zero atom and the cap atom are excluded.",
        "Subtract the two exponential survival probabilities: exp(-350/1100)-exp(-(350+500/0.75)/1100)=0.330639."
      ],
      "feedback": {
        "0": "This gives zero payment.",
        "2": "This gives payment exactly at the cap.",
        "3": "This includes zero payments.",
        "4": "This includes the atom at the payment cap."
      },
      "skills": [
        "invert a payment event",
        "zero and cap atoms",
        "strict endpoints"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: invert a payment event, zero and cap atoms, strict endpoints.",
        "The payment is positive when X>350, and reaches its cap when X≥1016.666667."
      ],
      "verification": {
        "kind": "payment-interior",
        "mu": 1100,
        "d": 350,
        "cap": 500,
        "share": 0.75,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-a3-cdf:4",
      "topicId": "urv-a3-cdf",
      "family": "payment-zero-and-cap"
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
    },
    {
      "question": "An integer-valued random variable X is uniform on 1 through 12. Given that X≥4, calculate the probability that X is even. Round your answer to four decimal places.",
      "choices": [
        "$0.4167$",
        "$0.4444$",
        "$0.5000$",
        "$0.5556$",
        "$0.6250$"
      ],
      "answer": 3,
      "solution": [
        "The condition retains the integers 4, 5, …, 12: 9 equally likely values.",
        "Exactly 5 retained integers are even. The endpoints must be counted, not approximated by half the interval.",
        "The conditional probability is 5/9=0.555556."
      ],
      "feedback": {
        "0": "This is the joint probability and has not been renormalized.",
        "1": "This counts the odd integers.",
        "2": "This is the unconditional even probability.",
        "4": "The inclusive lower endpoint contributes one more retained integer."
      },
      "skills": [
        "discrete endpoints",
        "conditional uniform support"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete endpoints, conditional uniform support.",
        "The condition retains the integers 4, 5, …, 12: 9 equally likely values."
      ],
      "verification": {
        "kind": "uniform-lattice",
        "n": 12,
        "lower": 4,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b1-discrete-uniform:2",
      "topicId": "urv-b1-discrete-uniform",
      "family": "uniform-lattice-condition"
    },
    {
      "question": "X is uniform on the integers 1 through an unknown n. Its variance is specified exactly as 168/12. Calculate E[X given X≥4]. Round your answer to four decimal places.",
      "choices": [
        "$4.5000$",
        "$7.0000$",
        "$8.0000$",
        "$8.5000$",
        "$10.0000$"
      ],
      "answer": 3,
      "solution": [
        "For this distribution Var(X)=(n²-1)/12, so n²=169 and n=13.",
        "The conditional distribution is uniform on the integers 4 through 13.",
        "Its mean is the midpoint (4+13)/2=8.5."
      ],
      "feedback": {
        "0": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean.",
        "1": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean.",
        "2": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean.",
        "4": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean."
      },
      "skills": [
        "discrete-uniform variance",
        "infer support size",
        "conditional mean"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete-uniform variance, infer support size, conditional mean.",
        "For this distribution Var(X)=(n²-1)/12, so n²=169 and n=13."
      ],
      "verification": {
        "kind": "uniform-support-infer",
        "n": 13,
        "threshold": 4,
        "variance": 14.0,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-b1-discrete-uniform:3",
      "topicId": "urv-b1-discrete-uniform",
      "family": "uniform-infer-support"
    },
    {
      "question": "X is uniform on the integers 1 through 8. A cost is Y=5X²+3. Calculate E[Y]. Round your answer to four decimal places.",
      "choices": [
        "$25.5000$",
        "$29.2500$",
        "$104.2500$",
        "$127.5000$",
        "$130.5000$"
      ],
      "answer": 4,
      "solution": [
        "Each of the 8 values has probability 1/8.",
        "E[X²]=(1²+2²+⋯+8²)/8=(8+1)(2×8+1)/6.",
        "E[Y]=5E[X²]+3=130.5."
      ],
      "feedback": {
        "0": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean.",
        "1": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean.",
        "2": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean.",
        "3": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean."
      },
      "skills": [
        "discrete-uniform support",
        "second moment",
        "nonlinear cost"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete-uniform support, second moment, nonlinear cost.",
        "Each of the 8 values has probability 1/8."
      ],
      "verification": {
        "kind": "uniform-square",
        "n": 8,
        "scale": 5,
        "shift": 3,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-b1-discrete-uniform:4",
      "topicId": "urv-b1-discrete-uniform",
      "family": "uniform-lattice-square-moment"
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
    },
    {
      "question": "N is the number of claims among 7 independent policies with the same unknown claim probability p. The ratio P(N=2)/P(N=1) is specified exactly as 6×0.225/[2×0.775]. Calculate P(N≥3). Round your answer to four decimal places.",
      "choices": [
        "$0.0114$",
        "$0.1438$",
        "$0.1936$",
        "$0.4908$",
        "$0.8321$"
      ],
      "answer": 2,
      "solution": [
        "The binomial ratio simplifies to (6/2)p/(1-p). Equating it to the supplied ratio gives p=0.225.",
        "At least three is the complement of zero, one, and two claims.",
        "Use 1-Σ from k=0 to 2 of choose(7,k)p^k(1-p)^(7-k), giving 0.193582."
      ],
      "feedback": {
        "0": "This requires three particular policies to claim and does not count the other possible outcomes.",
        "1": "This gives exactly three, not at least three.",
        "3": "This removes only zero and one, giving at least two.",
        "4": "This gives at least one."
      },
      "skills": [
        "infer a binomial parameter",
        "complement of a count tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a binomial parameter, complement of a count tail.",
        "The binomial ratio simplifies to (6/2)p/(1-p). Equating it to the supplied ratio gives p=0.225."
      ],
      "verification": {
        "kind": "binomial-odds",
        "n": 7,
        "p": 0.225,
        "ratio": 0.8709677419354839,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b2-binomial:2",
      "topicId": "urv-b2-binomial",
      "family": "binomial-odds-infer"
    },
    {
      "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.15 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
      "choices": [
        "$0.0523$",
        "$0.2000$",
        "$0.2375$",
        "$0.4000$",
        "$0.6400$"
      ],
      "answer": 2,
      "solution": [
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.261274 for A and 0.209651 for B.",
        "Weight the likelihoods by plant shares 0.2 and 0.8.",
        "Bayes gives 0.052255/(0.052255+0.167721)=0.237548."
      ],
      "feedback": {
        "0": "This omits the total likelihood in the denominator.",
        "1": "This is the prior before observing the sample.",
        "3": "This updates using one defective item rather than the entire sample.",
        "4": "This omits the observed nondefective items."
      },
      "skills": [
        "conditional binomial likelihood",
        "Bayes over sample evidence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
        "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.261274 for A and 0.209651 for B."
      ],
      "verification": {
        "kind": "bayes-binomial",
        "w": 0.2,
        "rates": [
          0.39999999999999997,
          0.15000000000000002
        ],
        "n": 7,
        "k": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b2-binomial:3",
      "topicId": "urv-b2-binomial",
      "family": "bayes-sample-count"
    },
    {
      "question": "5 independent policies each have claim probability 0.15. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
      "choices": [
        "$0.3395$",
        "$0.6375$",
        "$1.1460$",
        "$1.5946$",
        "$2.1571$"
      ],
      "answer": 0,
      "solution": [
        "Unconditionally E[N]=0.75 and E[N²]=np(1-p)+(np)²=1.2.",
        "The condition probability is 0.556295. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
        "Conditional variance is 1.2/0.556295-(0.75/0.556295)²=0.33947."
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
        "Unconditionally E[N]=0.75 and E[N²]=np(1-p)+(np)²=1.2."
      ],
      "verification": {
        "kind": "binomial",
        "n": 5,
        "p": 0.15,
        "target": "positive-variance"
      },
      "level": "challenge",
      "id": "chapter:urv-b2-binomial:4",
      "topicId": "urv-b2-binomial",
      "family": "conditional-binomial-variance"
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
    },
    {
      "question": "Independent daily inspections detect a defect with probability 0.35. Inspections stop on the first detection or after 5 inspections, whichever occurs first. Calculate the expected number of inspections performed. Round your answer to four decimal places.",
      "choices": [
        "$0.5801$",
        "$1.5256$",
        "$1.9455$",
        "$2.5256$",
        "$2.8571$"
      ],
      "answer": 3,
      "solution": [
        "Let T be the first successful inspection, so the number performed is min(T,h).",
        "Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,5)]=Σ from j=1 to 5 of (1-0.35)^(j-1).",
        "The finite geometric sum is [1-(1-0.35)^5]/0.35=2.525631."
      ],
      "feedback": {
        "0": "This counts only the all-failure outcome and misses earlier stops.",
        "1": "This counts only inspections after the first one.",
        "2": "This omits the censored outcome where no detection occurs by the limit.",
        "4": "This is the uncapped waiting-time mean."
      },
      "skills": [
        "geometric waiting time",
        "censoring",
        "tail-sum expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: geometric waiting time, censoring, tail-sum expectation.",
        "Let T be the first successful inspection, so the number performed is min(T,h)."
      ],
      "verification": {
        "kind": "geometric-cap",
        "p": 0.35000000000000003,
        "horizon": 5,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-b3-geometric:2",
      "topicId": "urv-b3-geometric",
      "family": "geometric-capped-count"
    },
    {
      "question": "Independent daily trials succeed with probability p. T is the day of the first success. You are given P(T>6)=(0.75)^6. Given no success on the first 6 days, calculate the probability that the first success occurs during the next 3 days. Round your answer to four decimal places.",
      "choices": [
        "$0.1029$",
        "$0.1406$",
        "$0.2500$",
        "$0.4219$",
        "$0.5781$"
      ],
      "answer": 4,
      "solution": [
        "P(T>6)=(1-p)^6; its positive root gives 1-p=0.75 and p=0.25.",
        "After the known failures, the remaining trials still have the same success probability.",
        "The probability of at least one success in the next 3 trials is 1-(1-0.25)^3=0.578125."
      ],
      "feedback": {
        "0": "This is the joint probability before conditioning on the known failures.",
        "1": "This gives the first success exactly on the last day of the new interval.",
        "2": "This considers only the next single trial.",
        "3": "This gives no success during the next interval."
      },
      "skills": [
        "infer a geometric parameter",
        "memorylessness",
        "interval complement"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a geometric parameter, memorylessness, interval complement.",
        "P(T>6)=(1-p)^6; its positive root gives 1-p=0.75 and p=0.25."
      ],
      "verification": {
        "kind": "geometric-tail-infer",
        "p": 0.25,
        "elapsed": 6,
        "remaining": 3,
        "tail": 0.177978515625,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b3-geometric:3",
      "topicId": "urv-b3-geometric",
      "family": "geometric-tail-infer"
    },
    {
      "question": "Independent inspections find a fault with probability 0.325. T is the inspection number of the first fault. Given no fault in the first 7 inspections, calculate E[T]. Round your answer to four decimal places.",
      "choices": [
        "$3.0769$",
        "$8.0000$",
        "$9.0769$",
        "$10.0769$",
        "$24.6154$"
      ],
      "answer": 3,
      "solution": [
        "Future inspections retain their independent success probabilities.",
        "The remaining waiting time is geometric with mean 1/0.325=3.076923.",
        "Include the known inspections: E[T given T>7]=7+3.076923=10.076923."
      ],
      "feedback": {
        "0": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials.",
        "1": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials.",
        "2": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials.",
        "4": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials."
      },
      "skills": [
        "conditional geometric waiting time",
        "total versus remaining count"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional geometric waiting time, total versus remaining count.",
        "Future inspections retain their independent success probabilities."
      ],
      "verification": {
        "kind": "geometric-late",
        "p": 0.325,
        "elapsed": 7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-b3-geometric:4",
      "topicId": "urv-b3-geometric",
      "family": "geometric-late-mean"
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
    },
    {
      "question": "Independent trials succeed with probability 0.4. T is the trial number of the 3th success. Given that trial 1 failed, calculate P(T=6). Round your answer to four decimal places.",
      "choices": [
        "$0.0230$",
        "$0.0829$",
        "$0.1382$",
        "$0.1536$",
        "$0.3456$"
      ],
      "answer": 2,
      "solution": [
        "Trial 6 must succeed, and among trials 2 through 5 there must be exactly 2 successes.",
        "The first failure is given, so it contributes no probability factor after conditioning. There are choose(4,2) admissible success-position sets.",
        "The conditional probability is choose(4,2)(0.4)^3(0.6)^2=0.13824."
      ],
      "feedback": {
        "0": "This counts only one success-position arrangement.",
        "1": "This retains the factor for the first failure even though that failure is already given.",
        "3": "This allows all required successes before the final trial.",
        "4": "This omits the required success on the final trial."
      },
      "skills": [
        "negative-binomial event",
        "conditional first trial",
        "success positions"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: negative-binomial event, conditional first trial, success positions.",
        "Trial 6 must succeed, and among trials 2 through 5 there must be exactly 2 successes."
      ],
      "verification": {
        "kind": "negative-first-failure",
        "r": 3,
        "t": 6,
        "p": 0.4,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b4-negative-binomial:2",
      "topicId": "urv-b4-negative-binomial",
      "family": "negative-binomial-first-failure"
    },
    {
      "question": "Independent trials succeed with probability 0.325. Trials stop at the 4th success. Exactly two successes have occurred in the first 7 trials. Calculate the expected total number of trials until stopping, conditional on this information. Round your answer to four decimal places.",
      "choices": [
        "$6.1538$",
        "$11.1538$",
        "$12.3077$",
        "$13.1538$",
        "$19.3077$"
      ],
      "answer": 3,
      "solution": [
        "The known history leaves 2 successes still required.",
        "The future waiting time is negative binomial with mean (4-2)/0.325=6.153846.",
        "Add the already completed trials: 7+6.153846=13.153846."
      ],
      "feedback": {
        "0": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials.",
        "1": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials.",
        "2": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials.",
        "4": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials."
      },
      "skills": [
        "conditional progress",
        "negative-binomial mean",
        "total versus remaining trials"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional progress, negative-binomial mean, total versus remaining trials.",
        "The known history leaves 2 successes still required."
      ],
      "verification": {
        "kind": "negative-progress",
        "p": 0.325,
        "r": 4,
        "elapsed": 7,
        "completed": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-b4-negative-binomial:3",
      "topicId": "urv-b4-negative-binomial",
      "family": "negative-binomial-progress-mean"
    },
    {
      "question": "Independent trials succeed with probability 0.35. T is the trial number of the 4th success. Given T>5, calculate P(T≤8). Round your answer to four decimal places.",
      "choices": [
        "$0.2396$",
        "$0.2533$",
        "$0.2936$",
        "$0.7254$",
        "$0.7467$"
      ],
      "answer": 1,
      "solution": [
        "T>n means fewer than 4 successes among the first n trials, so P(T>n)=Σ from k=0 to 3 of choose(n,k)p^k(1-p)^(n-k).",
        "The survival probabilities at 5 and 8 are 0.945978 and 0.706399.",
        "The conditional interval probability is 1-P(T>8)/P(T>5)=0.25326. For more than one required success, geometric memorylessness does not apply."
      ],
      "feedback": {
        "0": "This is the interval probability before conditioning.",
        "2": "This includes stopping times before the given lower bound.",
        "3": "This uses a first-success geometric event for a later-success stopping time.",
        "4": "This is survival beyond the upper bound, conditional on the lower bound."
      },
      "skills": [
        "negative-binomial to binomial counts",
        "conditional interval",
        "nonmemoryless waiting time"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: negative-binomial to binomial counts, conditional interval, nonmemoryless waiting time.",
        "T>n means fewer than 4 successes among the first n trials, so P(T>n)=Σ from k=0 to 3 of choose(n,k)p^k(1-p)^(n-k)."
      ],
      "verification": {
        "kind": "negative-interval",
        "r": 4,
        "p": 0.35,
        "a": 5,
        "b": 8,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b4-negative-binomial:4",
      "topicId": "urv-b4-negative-binomial",
      "family": "negative-binomial-interval"
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
    },
    {
      "question": "A lot contains 14 parts, of which 4 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
      "choices": [
        "$0.2182$",
        "$0.3333$",
        "$0.4444$",
        "$0.4945$",
        "$0.5091$"
      ],
      "answer": 4,
      "solution": [
        "The remaining lot has 12 parts: 4 defective and 8 sound.",
        "Choose one defective and two sound parts in choose(4,1)choose(8,2) ways.",
        "Divide by choose(12,3) to obtain 0.509091."
      ],
      "feedback": {
        "0": "This gives exactly two defective parts.",
        "1": "This is the probability for only one new part.",
        "2": "This treats the follow-up sample as sampling with replacement.",
        "3": "This samples from the original lot and ignores the observed removals."
      },
      "skills": [
        "update a finite population",
        "hypergeometric sample"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: update a finite population, hypergeometric sample.",
        "The remaining lot has 12 parts: 4 defective and 8 sound."
      ],
      "verification": {
        "kind": "hyper-followup",
        "N": 14,
        "K": 4,
        "removed": 2,
        "sample": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b5-hypergeometric:2",
      "topicId": "urv-b5-hypergeometric",
      "family": "hypergeometric-followup"
    },
    {
      "question": "A committee of four is selected uniformly from 4 senior and 7 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
      "choices": [
        "$0.1750$",
        "$0.2917$",
        "$0.3000$",
        "$0.3818$",
        "$0.5250$"
      ],
      "answer": 4,
      "solution": [
        "After including the specified senior, choose three people from the remaining 10.",
        "Exactly two seniors overall means one additional senior and two juniors: choose(3,1)choose(7,2).",
        "Divide by choose(10,3) to obtain 0.525."
      ],
      "feedback": {
        "0": "This adds two more seniors, giving three seniors overall.",
        "1": "This gives exactly one senior overall.",
        "2": "This considers only one additional member and omits the other two selections.",
        "3": "This is the unconditional probability before learning that a specific senior is included."
      },
      "skills": [
        "conditional sample space",
        "combinations",
        "fixed membership"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional sample space, combinations, fixed membership.",
        "After including the specified senior, choose three people from the remaining 10."
      ],
      "verification": {
        "kind": "committee-condition",
        "S": 4,
        "J": 7,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b5-hypergeometric:3",
      "topicId": "urv-b5-hypergeometric",
      "family": "committee-conditioned-membership"
    },
    {
      "question": "A collection contains 4 class-A, 8 class-B, and 5 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
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
          4,
          8,
          5
        ],
        "n": 5,
        "x": 2,
        "target": "variance"
      },
      "level": "challenge",
      "id": "chapter:urv-b5-hypergeometric:4",
      "topicId": "urv-b5-hypergeometric",
      "family": "conditional-hypergeom-variance"
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
    },
    {
      "question": "Weekly claim counts are independent and identically Poisson distributed. For one week, P(N=1)=1P(N=0). Calculate the probability of exactly 5 claims over 2 weeks. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0031$",
        "$0.0361$",
        "$0.0527$",
        "$0.1353$"
      ],
      "answer": 2,
      "solution": [
        "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 1.",
        "The independent 2-week total is Poisson with mean 2.",
        "Its probability at 5 is exp(-2)(2)^5/5!=0.036089."
      ],
      "feedback": {
        "0": "This requires that count in every week, rather than in the entire period.",
        "1": "This uses a one-week mean.",
        "3": "This gives at least the requested count.",
        "4": "This gives zero claims."
      },
      "skills": [
        "infer a Poisson mean",
        "independent sums",
        "exact count"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a Poisson mean, independent sums, exact count.",
        "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 1."
      ],
      "verification": {
        "kind": "poisson-aggregate",
        "lam": 1.0,
        "periods": 2,
        "count": 5,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-b6-poisson:2",
      "topicId": "urv-b6-poisson",
      "family": "poisson-ratio-aggregate"
    },
    {
      "question": "N is Poisson with mean 2.25. Only policies with at most 5 claims are retained in a study. Calculate the mean claim count among retained policies. Round your answer to four decimal places.",
      "choices": [
        "$2.0745$",
        "$2.1328$",
        "$2.2500$",
        "$2.3133$",
        "$2.5000$"
      ],
      "answer": 1,
      "solution": [
        "The retained probability is Σ from n=0 to 5 of exp(-2.25)(2.25)^n/n!=0.972635.",
        "The retained first-moment sum is Σ nP(N=n) over those same counts, equal to 2.074468.",
        "Normalize to the study population: E[N given N≤5]=2.074468/0.972635=2.132834."
      ],
      "feedback": {
        "0": "This is the restricted first moment before normalization.",
        "2": "This is the mean of all policies before truncation.",
        "3": "The excluded high-count outcomes contribute to the mean and must be removed from the numerator.",
        "4": "The retained counts are not uniformly distributed."
      },
      "skills": [
        "truncated Poisson support",
        "conditional first moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: truncated Poisson support, conditional first moment.",
        "The retained probability is Σ from n=0 to 5 of exp(-2.25)(2.25)^n/n!=0.972635."
      ],
      "verification": {
        "kind": "poisson-truncated",
        "lam": 2.25,
        "upper": 5,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-b6-poisson:3",
      "topicId": "urv-b6-poisson",
      "family": "poisson-truncated-mean"
    },
    {
      "question": "An insured belongs permanently to class H with probability 0.5, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.4, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
      "choices": [
        "$0.0677$",
        "$0.1353$",
        "$0.2315$",
        "$0.3543$",
        "$0.5000$"
      ],
      "answer": 2,
      "solution": [
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.449329 for L.",
        "The overall likelihood is 0.292332 after weighting by the prior class shares.",
        "The H posterior is 0.067668/0.292332=0.231475."
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
        "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.449329 for L."
      ],
      "verification": {
        "kind": "poisson-mixture",
        "w": 0.5,
        "rates": [
          1,
          0.4
        ],
        "n": 2,
        "target": "posterior-zero"
      },
      "level": "challenge",
      "id": "chapter:urv-b6-poisson:4",
      "topicId": "urv-b6-poisson",
      "family": "mixture-no-claim"
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
    },
    {
      "question": "Loss X is uniform on (0,2600). The insurer pays Y=0.6max(X-650,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
      "choices": [
        "$585.0000$",
        "$780.0000$",
        "$877.5000$",
        "$1170.0000$",
        "$1300.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive.",
        "For positive y, P(Y≤y)=(650+y/0.6)/2600.",
        "Set this to 0.75 and solve y=0.6(0.75×2600-650)=780."
      ],
      "feedback": {
        "0": "This is the positive-payment mean rather than the per-loss 75th percentile.",
        "2": "This gives the percentile conditional on positive payment.",
        "3": "This omits the deductible.",
        "4": "This omits the insurer share."
      },
      "skills": [
        "zero-payment mass",
        "payment CDF",
        "percentile inversion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-payment mass, payment CDF, percentile inversion.",
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive."
      ],
      "verification": {
        "kind": "uniform-payment-quantile",
        "B": 2600,
        "d": 650.0,
        "share": 0.6,
        "u": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c1-continuous-uniform:2",
      "topicId": "urv-c1-continuous-uniform",
      "family": "uniform-payment-quantile"
    },
    {
      "question": "An original loss X is uniform on (0,1200). Losses increase by 10%. A fixed franchise deductible of 450 applies to the inflated loss: the insurer pays nothing at or below the threshold and 70% of the full inflated loss above it. Calculate expected payment per original loss. Round your answer to four decimal places.",
      "choices": [
        "$200.6932$",
        "$397.0313$",
        "$408.3068$",
        "$462.0000$",
        "$583.2955$"
      ],
      "answer": 2,
      "solution": [
        "The inflated loss Z is uniform on (0,1320). Its density is 1/1320.",
        "The payment is 0.7Z for Z>450, so integrate 0.7z/1320 from 450 to 1320.",
        "The result is 0.7[(1320)²-450²]/(2×1320)=408.306818."
      ],
      "feedback": {
        "0": "This uses an ordinary deductible rather than the stated franchise deductible.",
        "1": "This inflates the original mean payment and effectively inflates the franchise threshold too.",
        "3": "This ignores the threshold.",
        "4": "This omits the insurer share."
      },
      "skills": [
        "inflate the loss support",
        "fixed franchise threshold",
        "payment integration"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: inflate the loss support, fixed franchise threshold, payment integration.",
        "The inflated loss Z is uniform on (0,1320). Its density is 1/1320."
      ],
      "verification": {
        "kind": "inflation-franchise",
        "B": 1200,
        "factor": 1.1,
        "d": 450,
        "share": 0.7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c1-continuous-uniform:3",
      "topicId": "urv-c1-continuous-uniform",
      "family": "inflation-franchise-mean"
    },
    {
      "question": "6 independent values are uniform on (0,10). Let X_(2) be the 2th smallest value. Calculate E[X_(2)]. Round your answer to four decimal places.",
      "choices": [
        "$1.4286$",
        "$2.8571$",
        "$3.3333$",
        "$5.0000$",
        "$7.1429$"
      ],
      "answer": 1,
      "solution": [
        "For Z=X_(2)/10, the order-statistic density is proportional to z^1(1-z)^4 on (0,1).",
        "This is beta(2,5), with mean 2/(6+1).",
        "Rescale: E[X_(2)]=10×2/7=2.857143."
      ],
      "feedback": {
        "0": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "2": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "3": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "4": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean."
      },
      "skills": [
        "order-statistic density",
        "beta first moment",
        "rescaling"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: order-statistic density, beta first moment, rescaling.",
        "For Z=X_(2)/10, the order-statistic density is proportional to z^1(1-z)^4 on (0,1)."
      ],
      "verification": {
        "kind": "order-uniform-mean",
        "n": 6,
        "rank": 2,
        "B": 10,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c1-continuous-uniform:4",
      "topicId": "urv-c1-continuous-uniform",
      "family": "order-uniform-middle-mean"
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
    },
    {
      "question": "Two independent components have exponential lifetimes with means 6 and 9 years. A device fails when either component fails. Given that the device has survived 3 years, calculate the probability it survives at least another 3 years. Round your answer to four decimal places.",
      "choices": [
        "$0.1889$",
        "$0.4346$",
        "$0.5654$",
        "$0.6065$",
        "$0.8187$"
      ],
      "answer": 1,
      "solution": [
        "For independent lifetimes, device survival is the product of both component survival functions.",
        "The minimum lifetime is exponential with rate 1/6+1/9. It is memoryless.",
        "Conditional survival for another 3 years is exp[-3(1/6+1/9)]=0.434598."
      ],
      "feedback": {
        "0": "This is unconditional survival for twice the elapsed interval.",
        "2": "This gives failure during the additional interval.",
        "3": "Both components must survive, not just component 1.",
        "4": "Means do not add for a minimum lifetime; failure rates add."
      },
      "skills": [
        "minimum of independent lifetimes",
        "rate versus mean",
        "memorylessness"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: minimum of independent lifetimes, rate versus mean, memorylessness.",
        "For independent lifetimes, device survival is the product of both component survival functions."
      ],
      "verification": {
        "kind": "exponential-minimum",
        "means": [
          6,
          9
        ],
        "t": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-c2-exponential:2",
      "topicId": "urv-c2-exponential",
      "family": "exponential-minimum-lifetime"
    },
    {
      "question": "An exponential loss has mean 1300. A policy originally has an ordinary deductible of 400. The deductible is increased to 500, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$0.0740$",
        "$0.6807$",
        "$0.7351$",
        "$0.9260$",
        "$1.0000$"
      ],
      "answer": 3,
      "solution": [
        "For an ordinary deductible d, E[(X-d)₊]=1300 exp(-d/1300).",
        "The new-to-old ratio is exp(-(500)/1300)/exp(-400/1300).",
        "The original deductible cancels, leaving exp(-100/1300)=0.925961. The ratio is per loss, so zero payments are included."
      ],
      "feedback": {
        "0": "This is the fractional reduction, not the retained fraction.",
        "1": "This is the new positive-payment probability, rather than its ratio to the old one.",
        "2": "This is the old positive-payment probability.",
        "4": "Per-payment means stay constant for this exponential model, but the question asks per loss."
      },
      "skills": [
        "ordinary deductible mean",
        "compare policy terms",
        "per-loss basis"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordinary deductible mean, compare policy terms, per-loss basis.",
        "For an ordinary deductible d, E[(X-d)₊]=1300 exp(-d/1300)."
      ],
      "verification": {
        "kind": "deductible-ratio",
        "mu": 1300,
        "d": 400,
        "delta": 100,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-c2-exponential:3",
      "topicId": "urv-c2-exponential",
      "family": "deductible-change-ratio"
    },
    {
      "question": "A loss X is exponential with mean 800. There is no deductible. The insurer pays 0.75X, subject to a maximum insurer payment of 800. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$230.9640$",
        "$379.2723$",
        "$441.8417$",
        "$589.1223$",
        "$600.0000$"
      ],
      "answer": 2,
      "solution": [
        "The final cap is reached at loss 1066.666667, since coinsurance is applied before the payment cap.",
        "For 0≤y<800, P(Y>y)=exp[-y/(0.75×800)].",
        "Integrate this survival function from 0 to 800: E[Y]=0.75×800[1-exp(-800/(0.75×800))]=441.841717."
      ],
      "feedback": {
        "0": "This omits the point mass at the payment cap.",
        "1": "This caps the loss before coinsurance instead of capping insurer payment.",
        "3": "This pays the cap at every uncapped covered outcome.",
        "4": "This omits the payment limit."
      },
      "skills": [
        "final payment cap",
        "coinsurance order",
        "survival integration"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: final payment cap, coinsurance order, survival integration.",
        "The final cap is reached at loss 1066.666667, since coinsurance is applied before the payment cap."
      ],
      "verification": {
        "kind": "limited-exponential",
        "mu": 800,
        "cap": 800,
        "share": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c2-exponential:4",
      "topicId": "urv-c2-exponential",
      "family": "limited-exponential-infer"
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
    },
    {
      "question": "T is the sum of 2 independent exponential lifetimes, each with mean 5. A lifetime is recorded only if T>20. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
      "choices": [
        "$2.3810$",
        "$10.0000$",
        "$26.0000$",
        "$30.0000$",
        "$109.1963$"
      ],
      "answer": 2,
      "solution": [
        "T has a gamma density with shape 2 and scale 5. Its recording probability is 0.091578.",
        "Multiplying its density by t gives 10 times the gamma density with shape 3 and the same scale. Thus the restricted first moment is 2.381033.",
        "Divide by the recording probability to obtain 26. A multistage lifetime does not have exponential memorylessness."
      ],
      "feedback": {
        "0": "This is a restricted first moment before conditioning.",
        "1": "This is the unconditional mean.",
        "3": "This applies exponential memorylessness to a gamma variable with shape greater than one.",
        "4": "The discarded lower region contributes a nonzero first moment; the numerator must be restricted too."
      },
      "skills": [
        "gamma from exponential sums",
        "truncated moment",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: gamma from exponential sums, truncated moment, conditional normalization.",
        "T has a gamma density with shape 2 and scale 5. Its recording probability is 0.091578."
      ],
      "verification": {
        "kind": "gamma-truncated-mean",
        "shape": 2,
        "scale": 5,
        "threshold": 20,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c3-gamma:2",
      "topicId": "urv-c3-gamma",
      "family": "gamma-truncated-mean"
    },
    {
      "question": "2 independent waiting times each have a gamma distribution with shape 2 and scale 2. Calculate the probability that their sum exceeds 10. Round your answer to four decimal places.",
      "choices": [
        "$0.0067$",
        "$0.0404$",
        "$0.2650$",
        "$0.2873$",
        "$0.7350$"
      ],
      "answer": 2,
      "solution": [
        "Independent gamma variables with the same scale add their shapes. The total has shape 4 and scale 2.",
        "For this integer shape, survival at 10 is exp(-10/2) times Σ from k=0 to 3 of (10/2)^k/k!.",
        "The probability is 0.265026."
      ],
      "feedback": {
        "0": "This treats the multistage sum as a single exponential.",
        "1": "This uses the shape of one waiting time only.",
        "3": "For independent sums with equal scales, add the shapes rather than the scales.",
        "4": "This is the lower tail of the sum."
      },
      "skills": [
        "independent gamma sum",
        "shape and scale",
        "integer-shape tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent gamma sum, shape and scale, integer-shape tail.",
        "Independent gamma variables with the same scale add their shapes. The total has shape 4 and scale 2."
      ],
      "verification": {
        "kind": "gamma-aggregate",
        "shape": 2,
        "scale": 2,
        "count": 2,
        "threshold": 10,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-c3-gamma:3",
      "topicId": "urv-c3-gamma",
      "family": "gamma-aggregate-tail"
    },
    {
      "question": "A gamma loss has mean 35 and squared coefficient of variation 1/7. Calculate its variance. Round your answer to four decimal places.",
      "choices": [
        "$13.2288$",
        "$25.0000$",
        "$35.0000$",
        "$175.0000$",
        "$1225.0000$"
      ],
      "answer": 3,
      "solution": [
        "For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV.",
        "The mean αθ=35 gives α=7 and θ=5.",
        "Var(X)=αθ²=7×5²=175. Equivalently, Var(X)=CV²(E[X])²."
      ],
      "feedback": {
        "0": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter.",
        "1": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter.",
        "2": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter.",
        "4": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter."
      },
      "skills": [
        "gamma moments",
        "coefficient of variation",
        "parameter inference"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: gamma moments, coefficient of variation, parameter inference.",
        "For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV."
      ],
      "verification": {
        "kind": "gamma-cv",
        "shape": 7,
        "scale": 5,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c3-gamma:4",
      "topicId": "urv-c3-gamma",
      "family": "gamma-cv-infer"
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
    },
    {
      "question": "A damage fraction X follows a beta distribution with both shape parameters greater than 1. Its mean is 4/10, and its mode is 3/8. Calculate Var(X). Round your answer to four decimal places.",
      "choices": [
        "$0.0218$",
        "$0.1477$",
        "$0.1600$",
        "$0.1818$",
        "$0.2400$"
      ],
      "answer": 0,
      "solution": [
        "Write s=α+β. The mean gives α=(4/10)s, while the mode gives (α-1)/(s-2)=(3/8).",
        "Solving these two equations yields α=4 and β=6.",
        "Beta variance is αβ/[s²(s+1)]=0.021818."
      ],
      "feedback": {
        "1": "This is the standard deviation.",
        "2": "This is the squared mean.",
        "3": "This is the second raw moment.",
        "4": "This omits the concentration factor s+1 in the variance."
      },
      "skills": [
        "infer beta parameters",
        "mode versus mean",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer beta parameters, mode versus mean, variance.",
        "Write s=α+β. The mean gives α=(4/10)s, while the mode gives (α-1)/(s-2)=(3/8)."
      ],
      "verification": {
        "kind": "beta-mode-infer",
        "a": 4,
        "b": 6,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c4-beta:2",
      "topicId": "urv-c4-beta",
      "family": "beta-mode-mean-infer"
    },
    {
      "question": "8 independent values are uniform on (0,15). Let X_(4) be the 4th smallest value. Calculate E[X_(4)]. Round your answer to four decimal places.",
      "choices": [
        "$1.6667$",
        "$6.0000$",
        "$6.6667$",
        "$7.5000$",
        "$8.3333$"
      ],
      "answer": 2,
      "solution": [
        "For Z=X_(4)/15, the order-statistic density is proportional to z^3(1-z)^4 on (0,1).",
        "This is beta(4,5), with mean 4/(8+1).",
        "Rescale: E[X_(4)]=15×4/9=6.666667."
      ],
      "feedback": {
        "0": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "1": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "3": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "4": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean."
      },
      "skills": [
        "order-statistic density",
        "beta first moment",
        "rescaling"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: order-statistic density, beta first moment, rescaling.",
        "For Z=X_(4)/15, the order-statistic density is proportional to z^3(1-z)^4 on (0,1)."
      ],
      "verification": {
        "kind": "order-uniform-mean",
        "n": 8,
        "rank": 4,
        "B": 15,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c4-beta:3",
      "topicId": "urv-c4-beta",
      "family": "order-uniform-middle-mean"
    },
    {
      "question": "X has CDF F(x)=(x/7)^2 for 0<x<7, with F(x)=0 below the support and 1 above it. A benefit is Y=5X²+9. Calculate E[Y]. Round your answer to four decimal places.",
      "choices": [
        "$32.3333$",
        "$117.8889$",
        "$122.5000$",
        "$131.5000$",
        "$621.5000$"
      ],
      "answer": 3,
      "solution": [
        "Differentiating the CDF gives density 2x^1/7^2.",
        "The second raw moment is E[X²]=2×7²/(2+2)=24.5.",
        "Linearity gives E[Y]=5E[X²]+9=131.5. Squaring the mean would not give E[X²]."
      ],
      "feedback": {
        "0": "This treats the squared transformation as linear in X.",
        "1": "This replaces E[X²] by (E[X])².",
        "2": "This omits the additive benefit.",
        "4": "The multiplier is squared in a variance, not in an expectation."
      },
      "skills": [
        "CDF to density",
        "second raw moment",
        "transformed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF to density, second raw moment, transformed expectation.",
        "Differentiating the CDF gives density 2x^1/7^2."
      ],
      "verification": {
        "kind": "power-expectation",
        "B": 7,
        "power": 2,
        "a": 5,
        "shift": 9,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c4-beta:4",
      "topicId": "urv-c4-beta",
      "family": "power-transformed-expectation"
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
    },
    {
      "question": "A measurement X is normally distributed. Its 15.8655th percentile is 85 and its 97.7250th percentile is 160. Use standard-normal percentile values -1 and 2, respectively. Calculate P(X>135). Round your answer to four decimal places.",
      "choices": [
        "$0.1587$",
        "$0.3085$",
        "$0.3694$",
        "$0.4840$",
        "$0.8413$"
      ],
      "answer": 0,
      "solution": [
        "The percentile equations are μ-σ=85 and μ+2σ=160. Subtract them to get 3σ=75, so σ=25.",
        "Then μ=110, and the requested threshold standardizes to (135-110)/25=1.",
        "The upper standard-normal tail at 1 is 0.158655."
      ],
      "feedback": {
        "1": "The midpoint of asymmetrically placed percentiles is not the mean.",
        "2": "The percentile separation is three SDs, not one.",
        "3": "Standardize using SD, not variance.",
        "4": "This is the lower tail at the threshold."
      },
      "skills": [
        "solve normal location and scale",
        "standardization",
        "upper tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: solve normal location and scale, standardization, upper tail.",
        "The percentile equations are μ-σ=85 and μ+2σ=160. Subtract them to get 3σ=75, so σ=25."
      ],
      "verification": {
        "kind": "normal-two-quantiles",
        "mu": 110,
        "sd": 25,
        "lower": 85,
        "upper": 160,
        "threshold": 135,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-c5-normal:2",
      "topicId": "urv-c5-normal",
      "family": "normal-two-quantiles"
    },
    {
      "question": "Independent normal X and Y have means 120 and 40. SD(X)=10. The variance of X+Y is 125. Calculate P(X-2Y>59.79898987). Round your answer to four decimal places.",
      "choices": [
        "$0.0808$",
        "$0.4606$",
        "$0.5000$",
        "$0.9192$",
        "$1.0000$"
      ],
      "answer": 0,
      "solution": [
        "Independence gives Var(Y)=Var(X+Y)-Var(X)=125-100=25.",
        "X-2Y is exactly normal with mean 40 and SD √(100+4×25)=14.142136.",
        "The standardized threshold is 1.4, so the upper-tail probability is 1-Φ(1.4)=0.080757."
      ],
      "feedback": {
        "1": "Use signed coefficients in the mean and squared coefficients in the independent variance, then standardize with SD.",
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
        "Independence gives Var(Y)=Var(X+Y)-Var(X)=125-100=25."
      ],
      "verification": {
        "kind": "normal-combination",
        "muX": 120,
        "muY": 40,
        "sdX": 10,
        "sdY": 5,
        "a": 1,
        "b": -2,
        "t": 59.798989873223334,
        "target": "tail"
      },
      "level": "challenge",
      "id": "chapter:urv-c5-normal:3",
      "topicId": "urv-c5-normal",
      "family": "normal-combination-infer"
    },
    {
      "question": "140 independent policies each have probability 0.35 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 56 policies have a claim. Round your answer to four decimal places.",
      "choices": [
        "$0.0919$",
        "$0.1074$",
        "$0.1247$",
        "$0.4191$",
        "$0.8753$"
      ],
      "answer": 2,
      "solution": [
        "The count mean is 49 and SD is √(140×0.35×0.65)=5.64358.",
        "At least 56 for an integer count becomes the normal event above 55.5. The standardized boundary is 1.151751.",
        "The approximate probability is 1-Φ(z)=0.124712."
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
        "The count mean is 49 and SD is √(140×0.35×0.65)=5.64358."
      ],
      "verification": {
        "kind": "clt-binomial",
        "n": 140,
        "p": 0.35,
        "k": 56
      },
      "level": "challenge",
      "id": "chapter:urv-c5-normal:4",
      "topicId": "urv-c5-normal",
      "family": "clt-binomial-correction"
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
    },
    {
      "question": "Optional enrichment: ln X is normal with mean 3 and SD 0.4. Given X>exp(3), calculate P(X>exp(3.4)). Round your answer to four decimal places.",
      "choices": [
        "$0.1587$",
        "$0.3173$",
        "$0.5000$",
        "$0.6827$",
        "$0.8413$"
      ],
      "answer": 1,
      "solution": [
        "Taking logs preserves the inequality because the logarithm is increasing.",
        "The condition is Z>0 and the higher threshold is Z>1 for a standard normal Z.",
        "The conditional tail is [1-Φ(1)]/[1-Φ(0)]=0.317311."
      ],
      "feedback": {
        "0": "This is the unconditional upper tail.",
        "2": "This is the probability of the conditioning event.",
        "3": "This is the conditional probability of being at or below the higher threshold.",
        "4": "This is the lower tail before conditioning."
      },
      "skills": [
        "monotone log transformation",
        "conditional normal tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: monotone log transformation, conditional normal tail.",
        "Taking logs preserves the inequality because the logarithm is increasing."
      ],
      "verification": {
        "kind": "lognormal-conditional",
        "mu": 3.0,
        "sigma": 0.4,
        "lower": 20.085536923187668,
        "upper": 29.96410004739701,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-c6-lognormal:2",
      "topicId": "urv-c6-lognormal",
      "family": "lognormal-conditional-tail"
    },
    {
      "question": "Optional enrichment: ln X is normal with mean 2.5 and variance 0.16. A payment is Y=0.75X. Calculate E[Y²]. Round your answer to four decimal places.",
      "choices": [
        "$9.8979$",
        "$16.9984$",
        "$97.9675$",
        "$114.9659$",
        "$153.2879$"
      ],
      "answer": 3,
      "solution": [
        "For a lognormal variable, E[X^r]=exp(rμ+r²σ²/2).",
        "At r=2, E[X²]=exp(2×2.5+2×0.16).",
        "The payment multiplier is squared: E[Y²]=(0.75)²E[X²]=114.965934."
      ],
      "feedback": {
        "0": "Use the second raw moment, square the payment multiplier, and distinguish the supplied log variance from log SD.",
        "1": "Use the second raw moment, square the payment multiplier, and distinguish the supplied log variance from log SD.",
        "2": "Use the second raw moment, square the payment multiplier, and distinguish the supplied log variance from log SD.",
        "4": "Use the second raw moment, square the payment multiplier, and distinguish the supplied log variance from log SD."
      },
      "skills": [
        "lognormal raw moment",
        "scaled payment",
        "second moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: lognormal raw moment, scaled payment, second moment.",
        "For a lognormal variable, E[X^r]=exp(rμ+r²σ²/2)."
      ],
      "verification": {
        "kind": "lognormal-square",
        "mu": 2.5,
        "sigma": 0.4,
        "share": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c6-lognormal:3",
      "topicId": "urv-c6-lognormal",
      "family": "lognormal-square-moment"
    },
    {
      "question": "Optional enrichment: ln X is normal with mean 3.3 and SD 0.55. Payment is Y=min(X,exp(3.3)). Calculate E[Y]. Round your answer to four decimal places.",
      "choices": [
        "$9.1831$",
        "$13.5563$",
        "$22.7394$",
        "$27.1126$",
        "$31.5398$"
      ],
      "answer": 2,
      "solution": [
        "Split payment into the uncapped first moment below the cap and cap times its upper-tail probability.",
        "For lognormal X, E[X I(X≤c)]=exp(μ+σ²/2)Φ((ln c-μ-σ²)/σ). Here c=exp(μ), so the normal argument is -0.55 and cap probability is 0.5.",
        "E[Y]=exp(3.3+0.15125)Φ(-0.55)+0.5exp(3.3)=22.739436."
      ],
      "feedback": {
        "0": "A limited expectation includes the truncated raw moment and the positive mass at the cap; the unconditional mean or a probability times the mean is insufficient.",
        "1": "A limited expectation includes the truncated raw moment and the positive mass at the cap; the unconditional mean or a probability times the mean is insufficient.",
        "3": "A limited expectation includes the truncated raw moment and the positive mass at the cap; the unconditional mean or a probability times the mean is insufficient.",
        "4": "A limited expectation includes the truncated raw moment and the positive mass at the cap; the unconditional mean or a probability times the mean is insufficient."
      },
      "skills": [
        "truncated lognormal moment",
        "cap mass",
        "limited expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: truncated lognormal moment, cap mass, limited expectation.",
        "Split payment into the uncapped first moment below the cap and cap times its upper-tail probability."
      ],
      "verification": {
        "kind": "lognormal-limited",
        "mu": 3.3,
        "sigma": 0.55,
        "cap": 27.112638920657883,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-c6-lognormal:4",
      "topicId": "urv-c6-lognormal",
      "family": "lognormal-limited-mean"
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
    },
    {
      "question": "N is Poisson with mean 1.25. Only policies with at most 3 claims are retained in a study. Calculate the mean claim count among retained policies. Round your answer to four decimal places.",
      "choices": [
        "$1.0856$",
        "$1.1288$",
        "$1.2500$",
        "$1.2997$",
        "$1.5000$"
      ],
      "answer": 1,
      "solution": [
        "The retained probability is Σ from n=0 to 3 of exp(-1.25)(1.25)^n/n!=0.961731.",
        "The retained first-moment sum is Σ nP(N=n) over those same counts, equal to 1.085585.",
        "Normalize to the study population: E[N given N≤3]=1.085585/0.961731=1.128782."
      ],
      "feedback": {
        "0": "This is the restricted first moment before normalization.",
        "2": "This is the mean of all policies before truncation.",
        "3": "The excluded high-count outcomes contribute to the mean and must be removed from the numerator.",
        "4": "The retained counts are not uniformly distributed."
      },
      "skills": [
        "truncated Poisson support",
        "conditional first moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: truncated Poisson support, conditional first moment.",
        "The retained probability is Σ from n=0 to 3 of exp(-1.25)(1.25)^n/n!=0.961731."
      ],
      "verification": {
        "kind": "poisson-truncated",
        "lam": 1.25,
        "upper": 3,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-d1-conditional-discrete:2",
      "topicId": "urv-d1-conditional-discrete",
      "family": "poisson-truncated-mean"
    },
    {
      "question": "A lot contains 13 parts, of which 6 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
      "choices": [
        "$0.3381$",
        "$0.3636$",
        "$0.4406$",
        "$0.4545$",
        "$0.5455$"
      ],
      "answer": 1,
      "solution": [
        "The remaining lot has 11 parts: 6 defective and 5 sound.",
        "Choose one defective and two sound parts in choose(6,1)choose(5,2) ways.",
        "Divide by choose(11,3) to obtain 0.363636."
      ],
      "feedback": {
        "0": "This treats the follow-up sample as sampling with replacement.",
        "2": "This samples from the original lot and ignores the observed removals.",
        "3": "This gives exactly two defective parts.",
        "4": "This is the probability for only one new part."
      },
      "skills": [
        "update a finite population",
        "hypergeometric sample"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: update a finite population, hypergeometric sample.",
        "The remaining lot has 11 parts: 6 defective and 5 sound."
      ],
      "verification": {
        "kind": "hyper-followup",
        "N": 13,
        "K": 6,
        "removed": 2,
        "sample": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-d1-conditional-discrete:3",
      "topicId": "urv-d1-conditional-discrete",
      "family": "hypergeometric-followup"
    },
    {
      "question": "An integer-valued random variable X is uniform on 1 through 15. Given that X≥5, calculate the probability that X is even. Round your answer to four decimal places.",
      "choices": [
        "$0.3333$",
        "$0.4545$",
        "$0.4667$",
        "$0.5000$",
        "$0.5455$"
      ],
      "answer": 1,
      "solution": [
        "The condition retains the integers 5, 6, …, 15: 11 equally likely values.",
        "Exactly 5 retained integers are even. The endpoints must be counted, not approximated by half the interval.",
        "The conditional probability is 5/11=0.454545."
      ],
      "feedback": {
        "0": "This is the joint probability and has not been renormalized.",
        "2": "This is the unconditional even probability.",
        "3": "Half is not guaranteed when a finite retained set has odd size.",
        "4": "This counts the odd integers."
      },
      "skills": [
        "discrete endpoints",
        "conditional uniform support"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: discrete endpoints, conditional uniform support.",
        "The condition retains the integers 5, 6, …, 15: 11 equally likely values."
      ],
      "verification": {
        "kind": "uniform-lattice",
        "n": 15,
        "lower": 5,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-d1-conditional-discrete:4",
      "topicId": "urv-d1-conditional-discrete",
      "family": "uniform-lattice-condition"
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
    },
    {
      "question": "X has density 2(14-x)/196 for 0<x<14, and zero otherwise. Given X>4.2, calculate Var(X). Round your answer to four decimal places.",
      "choices": [
        "$2.3099$",
        "$5.3356$",
        "$8.0033$",
        "$10.8889$",
        "$16.0067$"
      ],
      "answer": 1,
      "solution": [
        "The condition probability is ((14-4.2)/14)². Divide the original density by this probability on (4.2,14).",
        "For Z=X-4.2, the conditional density is 2(9.8-z)/(9.8)² on (0,9.8). Its first two moments are 3.266667 and 16.006667.",
        "The shift contributes no variance, so Var(X given X>4.2)=(9.8)²/18=5.335556. The conditional mean is 7.466667."
      ],
      "feedback": {
        "0": "This is the conditional SD.",
        "2": "This uses a conditional uniform distribution instead of the triangular density.",
        "3": "This is the unconditional variance.",
        "4": "This is the second raw moment of the shifted variable."
      },
      "skills": [
        "conditional density",
        "shifted support",
        "two moments"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional density, shifted support, two moments.",
        "The condition probability is ((14-4.2)/14)². Divide the original density by this probability on (4.2,14)."
      ],
      "verification": {
        "kind": "triangular-variance",
        "B": 14,
        "lower": 4.2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-d2-conditional-continuous:2",
      "topicId": "urv-d2-conditional-continuous",
      "family": "triangular-conditional-variance"
    },
    {
      "question": "T is the sum of 4 independent exponential lifetimes, each with mean 3. A lifetime is recorded only if T>9. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
      "choices": [
        "$9.7832$",
        "$12.0000$",
        "$15.1154$",
        "$18.5405$",
        "$21.0000$"
      ],
      "answer": 2,
      "solution": [
        "T has a gamma density with shape 4 and scale 3. Its recording probability is 0.647232.",
        "Multiplying its density by t gives 12 times the gamma density with shape 5 and the same scale. Thus the restricted first moment is 9.783159.",
        "Divide by the recording probability to obtain 15.115385. A multistage lifetime does not have exponential memorylessness."
      ],
      "feedback": {
        "0": "This is a restricted first moment before conditioning.",
        "1": "This is the unconditional mean.",
        "3": "The discarded lower region contributes a nonzero first moment; the numerator must be restricted too.",
        "4": "This applies exponential memorylessness to a gamma variable with shape greater than one."
      },
      "skills": [
        "gamma from exponential sums",
        "truncated moment",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: gamma from exponential sums, truncated moment, conditional normalization.",
        "T has a gamma density with shape 4 and scale 3. Its recording probability is 0.647232."
      ],
      "verification": {
        "kind": "gamma-truncated-mean",
        "shape": 4,
        "scale": 3,
        "threshold": 9,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-d2-conditional-continuous:3",
      "topicId": "urv-d2-conditional-continuous",
      "family": "gamma-truncated-mean"
    },
    {
      "question": "A loss X has density c(8-x) for 0<x<8, and zero otherwise. The constant c is unknown. A loss has already exceeded 2. Calculate the probability that it exceeds 6. Round your answer to four decimal places.",
      "choices": [
        "$0.0625$",
        "$0.1111$",
        "$0.3333$",
        "$0.5625$",
        "$0.8889$"
      ],
      "answer": 1,
      "solution": [
        "Normalization gives c=2/64, since the integral of 8-x over the support is 64/2.",
        "The survival function is P(X>x)=((8-x)/8)².",
        "Divide survival at 6 by survival at 2: [(8-6)/(8-2)]²=0.111111."
      ],
      "feedback": {
        "0": "This is the unconditional tail at the higher threshold.",
        "2": "This uses a uniform density instead of the supplied decreasing density.",
        "3": "This is only the probability of the condition.",
        "4": "This is the probability of not exceeding the higher threshold, conditional on exceeding the lower one."
      },
      "skills": [
        "density normalization",
        "survival integration",
        "conditional tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: density normalization, survival integration, conditional tail.",
        "Normalization gives c=2/64, since the integral of 8-x over the support is 64/2."
      ],
      "verification": {
        "kind": "triangular-tail",
        "B": 8,
        "t": 2.0,
        "u": 6.0,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-d2-conditional-continuous:4",
      "topicId": "urv-d2-conditional-continuous",
      "family": "triangular-tail-infer"
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
    },
    {
      "question": "The claim count N takes values 0 through 6, with P(N=k)=c(k+1). A contract pays 75 for each claim in excess of the first 2 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
      "choices": [
        "$107.1429$",
        "$150.0000$",
        "$160.7143$",
        "$300.0000$",
        "$38169.6429$"
      ],
      "answer": 2,
      "solution": [
        "Normalize the probabilities: c[1+2+⋯+7]=1, giving c=2/(7×8).",
        "The payment at count k is 75 max(k-2,0). Its possible values are 0, 0, 0, 75, 150, 225, 300.",
        "Weight each payment by c(k+1); the expected payment is 160.714286."
      ],
      "feedback": {
        "0": "The supported counts are not equally likely.",
        "1": "A positive-part function cannot be moved outside an expectation.",
        "3": "This ignores the count deductible.",
        "4": "This is the second raw moment rather than the mean."
      },
      "skills": [
        "PMF normalization",
        "discrete payment transformation",
        "expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: PMF normalization, discrete payment transformation, expectation.",
        "Normalize the probabilities: c[1+2+⋯+7]=1, giving c=2/(7×8)."
      ],
      "verification": {
        "kind": "finite-payment",
        "n": 7,
        "scale": 75,
        "d": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e1-expected-value:2",
      "topicId": "urv-e1-expected-value",
      "family": "finite-payment-moments"
    },
    {
      "question": "Independent daily inspections detect a defect with probability 0.275. Inspections stop on the first detection or after 8 inspections, whichever occurs first. Calculate the expected number of inspections performed. Round your answer to four decimal places.",
      "choices": [
        "$0.6107$",
        "$2.3588$",
        "$2.7481$",
        "$3.3588$",
        "$3.6364$"
      ],
      "answer": 3,
      "solution": [
        "Let T be the first successful inspection, so the number performed is min(T,h).",
        "Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,8)]=Σ from j=1 to 8 of (1-0.275)^(j-1).",
        "The finite geometric sum is [1-(1-0.275)^8]/0.275=3.358794."
      ],
      "feedback": {
        "0": "This counts only the all-failure outcome and misses earlier stops.",
        "1": "This counts only inspections after the first one.",
        "2": "This omits the censored outcome where no detection occurs by the limit.",
        "4": "This is the uncapped waiting-time mean."
      },
      "skills": [
        "geometric waiting time",
        "censoring",
        "tail-sum expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: geometric waiting time, censoring, tail-sum expectation.",
        "Let T be the first successful inspection, so the number performed is min(T,h)."
      ],
      "verification": {
        "kind": "geometric-cap",
        "p": 0.275,
        "horizon": 8,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e1-expected-value:3",
      "topicId": "urv-e1-expected-value",
      "family": "geometric-capped-count"
    },
    {
      "question": "X has CDF F(x)=(x/8)^4 for 0<x<8, with F(x)=0 below the support and 1 above it. A benefit is Y=5X²+6. Calculate E[Y]. Round your answer to four decimal places.",
      "choices": [
        "$38.0000$",
        "$210.8000$",
        "$213.3333$",
        "$219.3333$",
        "$1072.6667$"
      ],
      "answer": 3,
      "solution": [
        "Differentiating the CDF gives density 4x^3/8^4.",
        "The second raw moment is E[X²]=4×8²/(4+2)=42.666667.",
        "Linearity gives E[Y]=5E[X²]+6=219.333333. Squaring the mean would not give E[X²]."
      ],
      "feedback": {
        "0": "This treats the squared transformation as linear in X.",
        "1": "This replaces E[X²] by (E[X])².",
        "2": "This omits the additive benefit.",
        "4": "The multiplier is squared in a variance, not in an expectation."
      },
      "skills": [
        "CDF to density",
        "second raw moment",
        "transformed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF to density, second raw moment, transformed expectation.",
        "Differentiating the CDF gives density 4x^3/8^4."
      ],
      "verification": {
        "kind": "power-expectation",
        "B": 8,
        "power": 4,
        "a": 5,
        "shift": 6,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e1-expected-value:4",
      "topicId": "urv-e1-expected-value",
      "family": "power-transformed-expectation"
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
    },
    {
      "question": "X has CDF F(x)=(x/5)^5 for 0<x<5, with F(x)=0 below the support and 1 above it. A benefit is Y=5X²+7. Calculate E[Y]. Round your answer to four decimal places.",
      "choices": [
        "$27.8333$",
        "$89.2857$",
        "$93.8056$",
        "$96.2857$",
        "$453.4286$"
      ],
      "answer": 3,
      "solution": [
        "Differentiating the CDF gives density 5x^4/5^5.",
        "The second raw moment is E[X²]=5×5²/(5+2)=17.857143.",
        "Linearity gives E[Y]=5E[X²]+7=96.285714. Squaring the mean would not give E[X²]."
      ],
      "feedback": {
        "0": "This treats the squared transformation as linear in X.",
        "1": "This omits the additive benefit.",
        "2": "This replaces E[X²] by (E[X])².",
        "4": "The multiplier is squared in a variance, not in an expectation."
      },
      "skills": [
        "CDF to density",
        "second raw moment",
        "transformed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF to density, second raw moment, transformed expectation.",
        "Differentiating the CDF gives density 5x^4/5^5."
      ],
      "verification": {
        "kind": "power-expectation",
        "B": 5,
        "power": 5,
        "a": 5,
        "shift": 7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e2-moments:2",
      "topicId": "urv-e2-moments",
      "family": "power-transformed-expectation"
    },
    {
      "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.1+(1-0.1)(x/7)^3 for 0≤x<7, and F(x)=1 for x≥7. Calculate E[X]. Round your answer to four decimal places.",
      "choices": [
        "$3.1500$",
        "$4.7250$",
        "$5.2500$",
        "$5.4250$",
        "$26.4600$"
      ],
      "answer": 1,
      "solution": [
        "The jump at zero is 0.1. It contributes zero to E[X].",
        "On (0,7), the density is (1-0.1)3x^2/7^3.",
        "Integrating x times this density gives (1-0.1)7×3/(3+1)=4.725."
      ],
      "feedback": {
        "0": "This replaces the power CDF with a uniform distribution.",
        "2": "This is the mean conditional on X>0.",
        "3": "The point mass is at zero, not at the upper endpoint.",
        "4": "This is the second raw moment."
      },
      "skills": [
        "CDF jump",
        "continuous component",
        "mixed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF jump, continuous component, mixed expectation.",
        "The jump at zero is 0.1. It contributes zero to E[X]."
      ],
      "verification": {
        "kind": "mixed-power",
        "p": 0.1,
        "B": 7,
        "power": 3,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e2-moments:3",
      "topicId": "urv-e2-moments",
      "family": "mixed-cdf-mean"
    },
    {
      "question": "A randomly selected loss belongs to class A with probability 0.35 and to class B otherwise. Conditional loss means are 120 and 340, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
      "choices": [
        "$66.0000$",
        "$125.4233$",
        "$4720.0000$",
        "$11011.0000$",
        "$15731.0000$"
      ],
      "answer": 4,
      "solution": [
        "The mean is 0.35(120)+0.65(340)=263.",
        "The mean conditional variance is 4720. The variance of the class means is 0.35(0.65)(120-340)²=11011.",
        "Total variance is the sum 4720+11011=15731."
      ],
      "feedback": {
        "0": "This averages SDs rather than using total variance.",
        "1": "This is the unconditional SD.",
        "2": "This omits variation between class means.",
        "3": "This omits variation within classes."
      },
      "skills": [
        "mixture first moment",
        "within-class and between-class variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: mixture first moment, within-class and between-class variance.",
        "The mean is 0.35(120)+0.65(340)=263."
      ],
      "verification": {
        "kind": "loss-mixture-variance",
        "w": 0.35,
        "means": [
          120,
          340
        ],
        "sds": [
          40,
          80
        ],
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e2-moments:4",
      "topicId": "urv-e2-moments",
      "family": "two-class-loss-variance"
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
    },
    {
      "question": "A damage fraction X follows a beta distribution with both shape parameters greater than 1. Its mean is 3/8, and its mode is 2/6. Calculate Var(X). Round your answer to four decimal places.",
      "choices": [
        "$0.0260$",
        "$0.1406$",
        "$0.1614$",
        "$0.1667$",
        "$0.2344$"
      ],
      "answer": 0,
      "solution": [
        "Write s=α+β. The mean gives α=(3/8)s, while the mode gives (α-1)/(s-2)=(2/6).",
        "Solving these two equations yields α=3 and β=5.",
        "Beta variance is αβ/[s²(s+1)]=0.026042."
      ],
      "feedback": {
        "1": "This is the squared mean.",
        "2": "This is the standard deviation.",
        "3": "This is the second raw moment.",
        "4": "This omits the concentration factor s+1 in the variance."
      },
      "skills": [
        "infer beta parameters",
        "mode versus mean",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer beta parameters, mode versus mean, variance.",
        "Write s=α+β. The mean gives α=(3/8)s, while the mode gives (α-1)/(s-2)=(2/6)."
      ],
      "verification": {
        "kind": "beta-mode-infer",
        "a": 3,
        "b": 5,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e3-mode-median-percentiles:2",
      "topicId": "urv-e3-mode-median-percentiles",
      "family": "beta-mode-mean-infer"
    },
    {
      "question": "Loss X is uniform on (0,2000). The insurer pays Y=0.7max(X-500,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
      "choices": [
        "$525.0000$",
        "$700.0000$",
        "$787.5000$",
        "$1000.0000$",
        "$1050.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive.",
        "For positive y, P(Y≤y)=(500+y/0.7)/2000.",
        "Set this to 0.75 and solve y=0.7(0.75×2000-500)=700."
      ],
      "feedback": {
        "0": "This is the positive-payment mean rather than the per-loss 75th percentile.",
        "2": "This gives the percentile conditional on positive payment.",
        "3": "This omits the insurer share.",
        "4": "This omits the deductible."
      },
      "skills": [
        "zero-payment mass",
        "payment CDF",
        "percentile inversion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-payment mass, payment CDF, percentile inversion.",
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive."
      ],
      "verification": {
        "kind": "uniform-payment-quantile",
        "B": 2000,
        "d": 500.0,
        "share": 0.7,
        "u": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-e3-mode-median-percentiles:3",
      "topicId": "urv-e3-mode-median-percentiles",
      "family": "uniform-payment-quantile"
    },
    {
      "question": "A measurement X is normally distributed. Its 15.8655th percentile is 115 and its 97.7250th percentile is 160. Use standard-normal percentile values -1 and 2, respectively. Calculate P(X>145). Round your answer to four decimal places.",
      "choices": [
        "$0.1587$",
        "$0.3085$",
        "$0.3694$",
        "$0.4734$",
        "$0.8413$"
      ],
      "answer": 0,
      "solution": [
        "The percentile equations are μ-σ=115 and μ+2σ=160. Subtract them to get 3σ=45, so σ=15.",
        "Then μ=130, and the requested threshold standardizes to (145-130)/15=1.",
        "The upper standard-normal tail at 1 is 0.158655."
      ],
      "feedback": {
        "1": "The midpoint of asymmetrically placed percentiles is not the mean.",
        "2": "The percentile separation is three SDs, not one.",
        "3": "Standardize using SD, not variance.",
        "4": "This is the lower tail at the threshold."
      },
      "skills": [
        "solve normal location and scale",
        "standardization",
        "upper tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: solve normal location and scale, standardization, upper tail.",
        "The percentile equations are μ-σ=115 and μ+2σ=160. Subtract them to get 3σ=45, so σ=15."
      ],
      "verification": {
        "kind": "normal-two-quantiles",
        "mu": 130,
        "sd": 15,
        "lower": 115,
        "upper": 160,
        "threshold": 145,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-e3-mode-median-percentiles:4",
      "topicId": "urv-e3-mode-median-percentiles",
      "family": "normal-two-quantiles"
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
    },
    {
      "question": "A randomly selected loss belongs to class A with probability 0.4 and to class B otherwise. Conditional loss means are 160 and 300, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
      "choices": [
        "$64.0000$",
        "$95.8332$",
        "$4480.0000$",
        "$4704.0000$",
        "$9184.0000$"
      ],
      "answer": 4,
      "solution": [
        "The mean is 0.4(160)+0.6(300)=244.",
        "The mean conditional variance is 4480. The variance of the class means is 0.4(0.6)(160-300)²=4704.",
        "Total variance is the sum 4480+4704=9184."
      ],
      "feedback": {
        "0": "This averages SDs rather than using total variance.",
        "1": "This is the unconditional SD.",
        "2": "This omits variation between class means.",
        "3": "This omits variation within classes."
      },
      "skills": [
        "mixture first moment",
        "within-class and between-class variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: mixture first moment, within-class and between-class variance.",
        "The mean is 0.4(160)+0.6(300)=244."
      ],
      "verification": {
        "kind": "loss-mixture-variance",
        "w": 0.4,
        "means": [
          160,
          300
        ],
        "sds": [
          40,
          80
        ],
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f1-variance:2",
      "topicId": "urv-f1-variance",
      "family": "two-class-loss-variance"
    },
    {
      "question": "X has density 2(8-x)/64 for 0<x<8, and zero otherwise. Given X>2.4, calculate Var(X). Round your answer to four decimal places.",
      "choices": [
        "$1.3199$",
        "$1.7422$",
        "$2.6133$",
        "$3.5556$",
        "$5.2267$"
      ],
      "answer": 1,
      "solution": [
        "The condition probability is ((8-2.4)/8)². Divide the original density by this probability on (2.4,8).",
        "For Z=X-2.4, the conditional density is 2(5.6-z)/(5.6)² on (0,5.6). Its first two moments are 1.866667 and 5.226667.",
        "The shift contributes no variance, so Var(X given X>2.4)=(5.6)²/18=1.742222. The conditional mean is 4.266667."
      ],
      "feedback": {
        "0": "This is the conditional SD.",
        "2": "This uses a conditional uniform distribution instead of the triangular density.",
        "3": "This is the unconditional variance.",
        "4": "This is the second raw moment of the shifted variable."
      },
      "skills": [
        "conditional density",
        "shifted support",
        "two moments"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional density, shifted support, two moments.",
        "The condition probability is ((8-2.4)/8)². Divide the original density by this probability on (2.4,8)."
      ],
      "verification": {
        "kind": "triangular-variance",
        "B": 8,
        "lower": 2.4,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f1-variance:3",
      "topicId": "urv-f1-variance",
      "family": "triangular-conditional-variance"
    },
    {
      "question": "7 independent policies each have claim probability 0.2. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
      "choices": [
        "$0.7591$",
        "$1.1200$",
        "$1.4172$",
        "$1.9373$",
        "$3.8973$"
      ],
      "answer": 0,
      "solution": [
        "Unconditionally E[N]=1.4 and E[N²]=np(1-p)+(np)²=3.08.",
        "The condition probability is 0.790285. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
        "Conditional variance is 3.08/0.790285-(1.4/0.790285)²=0.75907."
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
        "Unconditionally E[N]=1.4 and E[N²]=np(1-p)+(np)²=3.08."
      ],
      "verification": {
        "kind": "binomial",
        "n": 7,
        "p": 0.2,
        "target": "positive-variance"
      },
      "level": "challenge",
      "id": "chapter:urv-f1-variance:4",
      "topicId": "urv-f1-variance",
      "family": "conditional-binomial-variance"
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
    },
    {
      "question": "A loss belongs to class A with probability 0.25 and otherwise to class B. Conditional means are 120 and 340, and conditional SDs are 40 and 80, respectively. Calculate the unconditional loss standard deviation. Round your answer to four decimal places.",
      "choices": [
        "$70.0000$",
        "$72.1110$",
        "$95.2628$",
        "$119.4780$",
        "$14275.0000$"
      ],
      "answer": 3,
      "solution": [
        "The unconditional mean is 285. Total variance combines mean within-class variance 5200 and variance of class means 9075.",
        "Thus Var(X)=14275 and SD(X)=119.478031.",
        "The requested standard deviation is 119.478031."
      ],
      "feedback": {
        "0": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
        "1": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
        "2": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
        "4": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV."
      },
      "skills": [
        "total variance",
        "mixture mean",
        "standard deviation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: total variance, mixture mean, standard deviation.",
        "The unconditional mean is 285. Total variance combines mean within-class variance 5200 and variance of class means 9075."
      ],
      "verification": {
        "kind": "loss-mixture-variance",
        "w": 0.25,
        "means": [
          120,
          340
        ],
        "sds": [
          40,
          80
        ],
        "target": "sd",
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f2-standard-deviation:2",
      "topicId": "urv-f2-standard-deviation",
      "family": "loss-mixture-sd"
    },
    {
      "question": "X and Y have standard deviations 8 and 7 and correlation 0.3. Calculate the standard deviation of 2X-3Y. Round your answer to four decimal places.",
      "choices": [
        "$5.0000$",
        "$22.2576$",
        "$26.4008$",
        "$29.9767$",
        "$495.4000$"
      ],
      "answer": 1,
      "solution": [
        "First Cov(X,Y)=0.3×8×7=16.8.",
        "Then Var(2X-3Y)=4×8²+9×7²-12×16.8=495.4.",
        "Take the square root to get the SD 22.257583."
      ],
      "feedback": {
        "0": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
        "2": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
        "3": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
        "4": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance."
      },
      "skills": [
        "correlation to covariance",
        "linear variance",
        "standard deviation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: correlation to covariance, linear variance, standard deviation.",
        "First Cov(X,Y)=0.3×8×7=16.8."
      ],
      "verification": {
        "kind": "correlated-linear",
        "sx": 8,
        "sy": 7,
        "rho": 0.3,
        "a": 2,
        "b": -3,
        "target": "sd",
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f2-standard-deviation:3",
      "topicId": "urv-f2-standard-deviation",
      "family": "correlated-linear-sd"
    },
    {
      "question": "X has density 2(8-x)/64 on (0,8), and zero elsewhere. Given X>2.8, calculate its conditional standard deviation. Round your answer to four decimal places.",
      "choices": [
        "$1.2257$",
        "$1.5011$",
        "$1.5022$",
        "$1.8856$",
        "$2.1229$"
      ],
      "answer": 0,
      "solution": [
        "Normalize the density on (2.8,8). After subtracting 2.8, the conditional variable is decreasing triangular on (0,5.2).",
        "Its conditional variance is (5.2)²/18=1.502222.",
        "Take the square root: SD(X given X>2.8)=1.225652."
      ],
      "feedback": {
        "1": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
        "2": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
        "3": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
        "4": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities."
      },
      "skills": [
        "conditional density",
        "conditional variance",
        "standard deviation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional density, conditional variance, standard deviation.",
        "Normalize the density on (2.8,8). After subtracting 2.8, the conditional variable is decreasing triangular on (0,5.2)."
      ],
      "verification": {
        "kind": "triangular-variance",
        "B": 8,
        "lower": 2.8,
        "target": "sd",
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f2-standard-deviation:4",
      "topicId": "urv-f2-standard-deviation",
      "family": "triangular-conditional-sd"
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
    },
    {
      "question": "A loss belongs to class A with probability 0.35 and otherwise to class B. Conditional means are 160 and 340, and conditional SDs are 40 and 80, respectively. Calculate the unconditional loss coefficient of variation. Round your answer to four decimal places.",
      "choices": [
        "$0.2480$",
        "$0.3099$",
        "$0.3970$",
        "$2.5191$",
        "$43.6498$"
      ],
      "answer": 2,
      "solution": [
        "The unconditional mean is 277. Total variance combines mean within-class variance 4720 and variance of class means 7371.",
        "Thus Var(X)=12091 and SD(X)=109.959083.",
        "The requested coefficient of variation is 0.396964 after dividing SD by the unconditional mean."
      ],
      "feedback": {
        "0": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
        "1": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
        "3": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
        "4": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV."
      },
      "skills": [
        "total variance",
        "mixture mean",
        "coefficient of variation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: total variance, mixture mean, coefficient of variation.",
        "The unconditional mean is 277. Total variance combines mean within-class variance 4720 and variance of class means 7371."
      ],
      "verification": {
        "kind": "loss-mixture-variance",
        "w": 0.35,
        "means": [
          160,
          340
        ],
        "sds": [
          40,
          80
        ],
        "target": "cv",
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f3-coefficient-variation:2",
      "topicId": "urv-f3-coefficient-variation",
      "family": "loss-mixture-cv"
    },
    {
      "question": "A loss X is zero with probability 0.15. Conditional on a positive loss, its CDF is (x/7)^4 on (0,7). Calculate the coefficient of variation of X, including zero losses. Round your answer to four decimal places.",
      "choices": [
        "$0.0998$",
        "$0.2041$",
        "$0.4749$",
        "$1.0733$",
        "$2.1059$"
      ],
      "answer": 2,
      "solution": [
        "Include the positive-loss probability in both raw moments: E[X]=4.76 and E[X²]=27.766667.",
        "Then SD(X)=√(E[X²]-(E[X])²)=2.260324.",
        "CV(X)=SD(X)/E[X]=0.474858."
      ],
      "feedback": {
        "0": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
        "1": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
        "3": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
        "4": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean."
      },
      "skills": [
        "mixed raw moments",
        "standard deviation",
        "coefficient of variation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: mixed raw moments, standard deviation, coefficient of variation.",
        "Include the positive-loss probability in both raw moments: E[X]=4.76 and E[X²]=27.766667."
      ],
      "verification": {
        "kind": "mixed-power",
        "p": 0.15000000000000002,
        "B": 7,
        "power": 4,
        "target": "cv",
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f3-coefficient-variation:3",
      "topicId": "urv-f3-coefficient-variation",
      "family": "mixed-power-cv"
    },
    {
      "question": "A gamma loss has mean 10 and squared coefficient of variation 1/2. Calculate its variance. Round your answer to four decimal places.",
      "choices": [
        "$7.0711$",
        "$10.0000$",
        "$25.0000$",
        "$50.0000$",
        "$100.0000$"
      ],
      "answer": 3,
      "solution": [
        "For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV.",
        "The mean αθ=10 gives α=2 and θ=5.",
        "Var(X)=αθ²=2×5²=50. Equivalently, Var(X)=CV²(E[X])²."
      ],
      "feedback": {
        "0": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter.",
        "1": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter.",
        "2": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter.",
        "4": "Squared CV multiplies the squared mean to give variance; it is not itself a variance or a scale parameter."
      },
      "skills": [
        "gamma moments",
        "coefficient of variation",
        "parameter inference"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: gamma moments, coefficient of variation, parameter inference.",
        "For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV."
      ],
      "verification": {
        "kind": "gamma-cv",
        "shape": 2,
        "scale": 5,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-f3-coefficient-variation:4",
      "topicId": "urv-f3-coefficient-variation",
      "family": "gamma-cv-infer"
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
    },
    {
      "question": "An exponential loss has mean 700. A policy originally has an ordinary deductible of 350. The deductible is increased to 500, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$0.1929$",
        "$0.4895$",
        "$0.6065$",
        "$0.8071$",
        "$1.0000$"
      ],
      "answer": 3,
      "solution": [
        "For an ordinary deductible d, E[(X-d)₊]=700 exp(-d/700).",
        "The new-to-old ratio is exp(-(500)/700)/exp(-350/700).",
        "The original deductible cancels, leaving exp(-150/700)=0.807118. The ratio is per loss, so zero payments are included."
      ],
      "feedback": {
        "0": "This is the fractional reduction, not the retained fraction.",
        "1": "This is the new positive-payment probability, rather than its ratio to the old one.",
        "2": "This is the old positive-payment probability.",
        "4": "Per-payment means stay constant for this exponential model, but the question asks per loss."
      },
      "skills": [
        "ordinary deductible mean",
        "compare policy terms",
        "per-loss basis"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordinary deductible mean, compare policy terms, per-loss basis.",
        "For an ordinary deductible d, E[(X-d)₊]=700 exp(-d/700)."
      ],
      "verification": {
        "kind": "deductible-ratio",
        "mu": 700,
        "d": 350,
        "delta": 150,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-g1-deductibles:2",
      "topicId": "urv-g1-deductibles",
      "family": "deductible-change-ratio"
    },
    {
      "question": "A loss X is exponential with mean 900. A policy has a franchise deductible 350: it pays nothing when X≤350, and pays 0.6X when X>350. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$366.0172$",
        "$508.3572$",
        "$540.0000$",
        "$750.0000$",
        "$847.2620$"
      ],
      "answer": 1,
      "solution": [
        "The covered probability is exp(-350/900)=0.67781.",
        "Memorylessness gives E[X given X>350]=350+900. A franchise deductible retains the full loss after crossing the threshold.",
        "Multiply covered probability, conditional full-loss mean, and insurer share: 0.6(350+900)exp(-350/900)=508.357184."
      ],
      "feedback": {
        "0": "This subtracts the deductible from a covered loss, giving an ordinary-deductible payment.",
        "2": "This ignores the franchise threshold.",
        "3": "This gives the conditional mean among covered losses only.",
        "4": "This omits coinsurance."
      },
      "skills": [
        "franchise versus ordinary deductible",
        "conditional exponential mean",
        "coinsurance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: franchise versus ordinary deductible, conditional exponential mean, coinsurance.",
        "The covered probability is exp(-350/900)=0.67781."
      ],
      "verification": {
        "kind": "franchise-exponential",
        "mu": 900,
        "d": 350,
        "share": 0.6,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g1-deductibles:3",
      "topicId": "urv-g1-deductibles",
      "family": "franchise-payment-mean"
    },
    {
      "question": "Loss X is uniform on (0,2600). The insurer pays Y=0.65max(X-910,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
      "choices": [
        "$549.2500$",
        "$676.0000$",
        "$823.8750$",
        "$1040.0000$",
        "$1267.5000$"
      ],
      "answer": 1,
      "solution": [
        "Payment has mass 0.35 at zero. Since this is below 0.75, the requested percentile is positive.",
        "For positive y, P(Y≤y)=(910+y/0.65)/2600.",
        "Set this to 0.75 and solve y=0.65(0.75×2600-910)=676."
      ],
      "feedback": {
        "0": "This is the positive-payment mean rather than the per-loss 75th percentile.",
        "2": "This gives the percentile conditional on positive payment.",
        "3": "This omits the insurer share.",
        "4": "This omits the deductible."
      },
      "skills": [
        "zero-payment mass",
        "payment CDF",
        "percentile inversion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-payment mass, payment CDF, percentile inversion.",
        "Payment has mass 0.35 at zero. Since this is below 0.75, the requested percentile is positive."
      ],
      "verification": {
        "kind": "uniform-payment-quantile",
        "B": 2600,
        "d": 910.0000000000001,
        "share": 0.65,
        "u": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g1-deductibles:4",
      "topicId": "urv-g1-deductibles",
      "family": "uniform-payment-quantile"
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
    },
    {
      "question": "A loss X is exponential with mean 700. A policy has a franchise deductible 200: it pays nothing when X≤200, and pays 0.75X when X>200. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$394.5256$",
        "$507.2472$",
        "$525.0000$",
        "$675.0000$",
        "$676.3296$"
      ],
      "answer": 1,
      "solution": [
        "The covered probability is exp(-200/700)=0.751477.",
        "Memorylessness gives E[X given X>200]=200+700. A franchise deductible retains the full loss after crossing the threshold.",
        "Multiply covered probability, conditional full-loss mean, and insurer share: 0.75(200+700)exp(-200/700)=507.247173."
      ],
      "feedback": {
        "0": "This subtracts the deductible from a covered loss, giving an ordinary-deductible payment.",
        "2": "This ignores the franchise threshold.",
        "3": "This gives the conditional mean among covered losses only.",
        "4": "This omits coinsurance."
      },
      "skills": [
        "franchise versus ordinary deductible",
        "conditional exponential mean",
        "coinsurance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: franchise versus ordinary deductible, conditional exponential mean, coinsurance.",
        "The covered probability is exp(-200/700)=0.751477."
      ],
      "verification": {
        "kind": "franchise-exponential",
        "mu": 700,
        "d": 200,
        "share": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g2-coinsurance:2",
      "topicId": "urv-g2-coinsurance",
      "family": "franchise-payment-mean"
    },
    {
      "question": "A loss X is exponential with mean 1100. There is no deductible. The insurer pays 0.75X, subject to a maximum insurer payment of 500. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$102.2184$",
        "$227.2522$",
        "$301.3425$",
        "$374.9662$",
        "$825.0000$"
      ],
      "answer": 3,
      "solution": [
        "The final cap is reached at loss 666.666667, since coinsurance is applied before the payment cap.",
        "For 0≤y<500, P(Y>y)=exp[-y/(0.75×1100)].",
        "Integrate this survival function from 0 to 500: E[Y]=0.75×1100[1-exp(-500/(0.75×1100))]=374.96616."
      ],
      "feedback": {
        "0": "This omits the point mass at the payment cap.",
        "1": "This pays the cap at every uncapped covered outcome.",
        "2": "This caps the loss before coinsurance instead of capping insurer payment.",
        "4": "This omits the payment limit."
      },
      "skills": [
        "final payment cap",
        "coinsurance order",
        "survival integration"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: final payment cap, coinsurance order, survival integration.",
        "The final cap is reached at loss 666.666667, since coinsurance is applied before the payment cap."
      ],
      "verification": {
        "kind": "limited-exponential",
        "mu": 1100,
        "cap": 500,
        "share": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g2-coinsurance:3",
      "topicId": "urv-g2-coinsurance",
      "family": "limited-exponential-infer"
    },
    {
      "question": "Loss X is uniform on (0,2400). The insurer pays Y=0.75max(X-720,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
      "choices": [
        "$630.0000$",
        "$810.0000$",
        "$945.0000$",
        "$1080.0000$",
        "$1350.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment has mass 0.3 at zero. Since this is below 0.75, the requested percentile is positive.",
        "For positive y, P(Y≤y)=(720+y/0.75)/2400.",
        "Set this to 0.75 and solve y=0.75(0.75×2400-720)=810."
      ],
      "feedback": {
        "0": "This is the positive-payment mean rather than the per-loss 75th percentile.",
        "2": "This gives the percentile conditional on positive payment.",
        "3": "This omits the insurer share.",
        "4": "This omits the deductible."
      },
      "skills": [
        "zero-payment mass",
        "payment CDF",
        "percentile inversion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-payment mass, payment CDF, percentile inversion.",
        "Payment has mass 0.3 at zero. Since this is below 0.75, the requested percentile is positive."
      ],
      "verification": {
        "kind": "uniform-payment-quantile",
        "B": 2400,
        "d": 720.0000000000001,
        "share": 0.75,
        "u": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g2-coinsurance:4",
      "topicId": "urv-g2-coinsurance",
      "family": "uniform-payment-quantile"
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
    },
    {
      "question": "A loss X is exponential with mean 900. There is no deductible. The insurer pays 0.6X, subject to a maximum insurer payment of 800. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$235.4171$",
        "$317.9994$",
        "$417.2576$",
        "$540.0000$",
        "$618.1594$"
      ],
      "answer": 2,
      "solution": [
        "The final cap is reached at loss 1333.333333, since coinsurance is applied before the payment cap.",
        "For 0≤y<800, P(Y>y)=exp[-y/(0.6×900)].",
        "Integrate this survival function from 0 to 800: E[Y]=0.6×900[1-exp(-800/(0.6×900))]=417.257624."
      ],
      "feedback": {
        "0": "This omits the point mass at the payment cap.",
        "1": "This caps the loss before coinsurance instead of capping insurer payment.",
        "3": "This omits the payment limit.",
        "4": "This pays the cap at every uncapped covered outcome."
      },
      "skills": [
        "final payment cap",
        "coinsurance order",
        "survival integration"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: final payment cap, coinsurance order, survival integration.",
        "The final cap is reached at loss 1333.333333, since coinsurance is applied before the payment cap."
      ],
      "verification": {
        "kind": "limited-exponential",
        "mu": 900,
        "cap": 800,
        "share": 0.6,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g3-benefit-limits:2",
      "topicId": "urv-g3-benefit-limits",
      "family": "limited-exponential-infer"
    },
    {
      "question": "Loss X is exponential with mean 700. The payment is Y=min(0.75max(X-250,0),500). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
      "choices": [
        "$0.2699$",
        "$0.3003$",
        "$0.4297$",
        "$0.6997$",
        "$0.7301$"
      ],
      "answer": 2,
      "solution": [
        "The payment is positive when X>250, and reaches its cap when X≥916.666667.",
        "The event 0<Y<500 corresponds to 250<X<916.666667. Both the zero atom and the cap atom are excluded.",
        "Subtract the two exponential survival probabilities: exp(-250/700)-exp(-(250+500/0.75)/700)=0.429724."
      ],
      "feedback": {
        "0": "This gives payment exactly at the cap.",
        "1": "This gives zero payment.",
        "3": "This includes the atom at the payment cap.",
        "4": "This includes zero payments."
      },
      "skills": [
        "invert a payment event",
        "zero and cap atoms",
        "strict endpoints"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: invert a payment event, zero and cap atoms, strict endpoints.",
        "The payment is positive when X>250, and reaches its cap when X≥916.666667."
      ],
      "verification": {
        "kind": "payment-interior",
        "mu": 700,
        "d": 250,
        "cap": 500,
        "share": 0.75,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-g3-benefit-limits:3",
      "topicId": "urv-g3-benefit-limits",
      "family": "payment-zero-and-cap"
    },
    {
      "question": "Independent daily inspections detect a defect with probability 0.325. Inspections stop on the first detection or after 7 inspections, whichever occurs first. Calculate the expected number of inspections performed. Round your answer to four decimal places.",
      "choices": [
        "$0.4469$",
        "$1.8805$",
        "$2.4336$",
        "$2.8805$",
        "$3.0769$"
      ],
      "answer": 3,
      "solution": [
        "Let T be the first successful inspection, so the number performed is min(T,h).",
        "Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,7)]=Σ from j=1 to 7 of (1-0.325)^(j-1).",
        "The finite geometric sum is [1-(1-0.325)^7]/0.325=2.880477."
      ],
      "feedback": {
        "0": "This counts only the all-failure outcome and misses earlier stops.",
        "1": "This counts only inspections after the first one.",
        "2": "This omits the censored outcome where no detection occurs by the limit.",
        "4": "This is the uncapped waiting-time mean."
      },
      "skills": [
        "geometric waiting time",
        "censoring",
        "tail-sum expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: geometric waiting time, censoring, tail-sum expectation.",
        "Let T be the first successful inspection, so the number performed is min(T,h)."
      ],
      "verification": {
        "kind": "geometric-cap",
        "p": 0.325,
        "horizon": 7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g3-benefit-limits:4",
      "topicId": "urv-g3-benefit-limits",
      "family": "geometric-capped-count"
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
    },
    {
      "question": "An original loss X is uniform on (0,1200). Losses increase by 10%. A fixed franchise deductible of 400 applies to the inflated loss: the insurer pays nothing at or below the threshold and 70% of the full inflated loss above it. Calculate expected payment per original loss. Round your answer to four decimal places.",
      "choices": [
        "$224.4242$",
        "$410.6667$",
        "$419.5758$",
        "$462.0000$",
        "$599.3939$"
      ],
      "answer": 2,
      "solution": [
        "The inflated loss Z is uniform on (0,1320). Its density is 1/1320.",
        "The payment is 0.7Z for Z>400, so integrate 0.7z/1320 from 400 to 1320.",
        "The result is 0.7[(1320)²-400²]/(2×1320)=419.575758."
      ],
      "feedback": {
        "0": "This uses an ordinary deductible rather than the stated franchise deductible.",
        "1": "This inflates the original mean payment and effectively inflates the franchise threshold too.",
        "3": "This ignores the threshold.",
        "4": "This omits the insurer share."
      },
      "skills": [
        "inflate the loss support",
        "fixed franchise threshold",
        "payment integration"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: inflate the loss support, fixed franchise threshold, payment integration.",
        "The inflated loss Z is uniform on (0,1320). Its density is 1/1320."
      ],
      "verification": {
        "kind": "inflation-franchise",
        "B": 1200,
        "factor": 1.1,
        "d": 400,
        "share": 0.7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g4-inflation:2",
      "topicId": "urv-g4-inflation",
      "family": "inflation-franchise-mean"
    },
    {
      "question": "Loss X is uniform on (0,1800). The insurer pays Y=0.7max(X-450,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
      "choices": [
        "$472.5000$",
        "$630.0000$",
        "$708.7500$",
        "$900.0000$",
        "$945.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive.",
        "For positive y, P(Y≤y)=(450+y/0.7)/1800.",
        "Set this to 0.75 and solve y=0.7(0.75×1800-450)=630."
      ],
      "feedback": {
        "0": "This is the positive-payment mean rather than the per-loss 75th percentile.",
        "2": "This gives the percentile conditional on positive payment.",
        "3": "This omits the insurer share.",
        "4": "This omits the deductible."
      },
      "skills": [
        "zero-payment mass",
        "payment CDF",
        "percentile inversion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-payment mass, payment CDF, percentile inversion.",
        "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive."
      ],
      "verification": {
        "kind": "uniform-payment-quantile",
        "B": 1800,
        "d": 450.0,
        "share": 0.7,
        "u": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-g4-inflation:3",
      "topicId": "urv-g4-inflation",
      "family": "uniform-payment-quantile"
    },
    {
      "question": "An exponential loss has mean 800. A policy originally has an ordinary deductible of 400. The deductible is increased to 600, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$0.2212$",
        "$0.4724$",
        "$0.6065$",
        "$0.7788$",
        "$1.0000$"
      ],
      "answer": 3,
      "solution": [
        "For an ordinary deductible d, E[(X-d)₊]=800 exp(-d/800).",
        "The new-to-old ratio is exp(-(600)/800)/exp(-400/800).",
        "The original deductible cancels, leaving exp(-200/800)=0.778801. The ratio is per loss, so zero payments are included."
      ],
      "feedback": {
        "0": "This is the fractional reduction, not the retained fraction.",
        "1": "This is the new positive-payment probability, rather than its ratio to the old one.",
        "2": "This is the old positive-payment probability.",
        "4": "Per-payment means stay constant for this exponential model, but the question asks per loss."
      },
      "skills": [
        "ordinary deductible mean",
        "compare policy terms",
        "per-loss basis"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: ordinary deductible mean, compare policy terms, per-loss basis.",
        "For an ordinary deductible d, E[(X-d)₊]=800 exp(-d/800)."
      ],
      "verification": {
        "kind": "deductible-ratio",
        "mu": 800,
        "d": 400,
        "delta": 200,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-g4-inflation:4",
      "topicId": "urv-g4-inflation",
      "family": "deductible-change-ratio"
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
    },
    {
      "question": "A randomly selected loss belongs to class A with probability 0.35 and to class B otherwise. Conditional loss means are 100 and 460, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
      "choices": [
        "$66.0000$",
        "$184.9432$",
        "$4720.0000$",
        "$29484.0000$",
        "$34204.0000$"
      ],
      "answer": 4,
      "solution": [
        "The mean is 0.35(100)+0.65(460)=334.",
        "The mean conditional variance is 4720. The variance of the class means is 0.35(0.65)(100-460)²=29484.",
        "Total variance is the sum 4720+29484=34204."
      ],
      "feedback": {
        "0": "This averages SDs rather than using total variance.",
        "1": "This is the unconditional SD.",
        "2": "This omits variation between class means.",
        "3": "This omits variation within classes."
      },
      "skills": [
        "mixture first moment",
        "within-class and between-class variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: mixture first moment, within-class and between-class variance.",
        "The mean is 0.35(100)+0.65(460)=334."
      ],
      "verification": {
        "kind": "loss-mixture-variance",
        "w": 0.35,
        "means": [
          100,
          460
        ],
        "sds": [
          40,
          80
        ],
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h1-loss-variable:2",
      "topicId": "urv-h1-loss-variable",
      "family": "two-class-loss-variance"
    },
    {
      "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.125+(1-0.125)(x/9)^2 for 0≤x<9, and F(x)=1 for x≥9. Calculate E[X]. Round your answer to four decimal places.",
      "choices": [
        "$3.9375$",
        "$5.2500$",
        "$6.0000$",
        "$6.3750$",
        "$35.4375$"
      ],
      "answer": 1,
      "solution": [
        "The jump at zero is 0.125. It contributes zero to E[X].",
        "On (0,9), the density is (1-0.125)2x^1/9^2.",
        "Integrating x times this density gives (1-0.125)9×2/(2+1)=5.25."
      ],
      "feedback": {
        "0": "This replaces the power CDF with a uniform distribution.",
        "2": "This is the mean conditional on X>0.",
        "3": "The point mass is at zero, not at the upper endpoint.",
        "4": "This is the second raw moment."
      },
      "skills": [
        "CDF jump",
        "continuous component",
        "mixed expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CDF jump, continuous component, mixed expectation.",
        "The jump at zero is 0.125. It contributes zero to E[X]."
      ],
      "verification": {
        "kind": "mixed-power",
        "p": 0.125,
        "B": 9,
        "power": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h1-loss-variable:3",
      "topicId": "urv-h1-loss-variable",
      "family": "mixed-cdf-mean"
    },
    {
      "question": "T is the sum of 3 independent exponential lifetimes, each with mean 4. A lifetime is recorded only if T>8. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
      "choices": [
        "$10.2855$",
        "$12.0000$",
        "$15.2000$",
        "$17.7337$",
        "$20.0000$"
      ],
      "answer": 2,
      "solution": [
        "T has a gamma density with shape 3 and scale 4. Its recording probability is 0.676676.",
        "Multiplying its density by t gives 12 times the gamma density with shape 4 and the same scale. Thus the restricted first moment is 10.285482.",
        "Divide by the recording probability to obtain 15.2. A multistage lifetime does not have exponential memorylessness."
      ],
      "feedback": {
        "0": "This is a restricted first moment before conditioning.",
        "1": "This is the unconditional mean.",
        "3": "The discarded lower region contributes a nonzero first moment; the numerator must be restricted too.",
        "4": "This applies exponential memorylessness to a gamma variable with shape greater than one."
      },
      "skills": [
        "gamma from exponential sums",
        "truncated moment",
        "conditional normalization"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: gamma from exponential sums, truncated moment, conditional normalization.",
        "T has a gamma density with shape 3 and scale 4. Its recording probability is 0.676676."
      ],
      "verification": {
        "kind": "gamma-truncated-mean",
        "shape": 3,
        "scale": 4,
        "threshold": 8,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h1-loss-variable:4",
      "topicId": "urv-h1-loss-variable",
      "family": "gamma-truncated-mean"
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
    },
    {
      "question": "Loss X is exponential with mean 700. The payment is Y=min(0.75max(X-300,0),300). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
      "choices": [
        "$0.2836$",
        "$0.3486$",
        "$0.3679$",
        "$0.6321$",
        "$0.6514$"
      ],
      "answer": 0,
      "solution": [
        "The payment is positive when X>300, and reaches its cap when X≥700.",
        "The event 0<Y<300 corresponds to 300<X<700. Both the zero atom and the cap atom are excluded.",
        "Subtract the two exponential survival probabilities: exp(-300/700)-exp(-(300+300/0.75)/700)=0.28356."
      ],
      "feedback": {
        "1": "This gives zero payment.",
        "2": "This gives payment exactly at the cap.",
        "3": "This includes zero payments.",
        "4": "This includes the atom at the payment cap."
      },
      "skills": [
        "invert a payment event",
        "zero and cap atoms",
        "strict endpoints"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: invert a payment event, zero and cap atoms, strict endpoints.",
        "The payment is positive when X>300, and reaches its cap when X≥700."
      ],
      "verification": {
        "kind": "payment-interior",
        "mu": 700,
        "d": 300,
        "cap": 300,
        "share": 0.75,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:urv-h2-payment-variable:2",
      "topicId": "urv-h2-payment-variable",
      "family": "payment-zero-and-cap"
    },
    {
      "question": "A loss X is exponential with mean 600. A policy has a franchise deductible 450: it pays nothing when X≤450, and pays 0.8X when X>450. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$226.7359$",
        "$396.7879$",
        "$480.0000$",
        "$495.9849$",
        "$840.0000$"
      ],
      "answer": 1,
      "solution": [
        "The covered probability is exp(-450/600)=0.472367.",
        "Memorylessness gives E[X given X>450]=450+600. A franchise deductible retains the full loss after crossing the threshold.",
        "Multiply covered probability, conditional full-loss mean, and insurer share: 0.8(450+600)exp(-450/600)=396.787904."
      ],
      "feedback": {
        "0": "This subtracts the deductible from a covered loss, giving an ordinary-deductible payment.",
        "2": "This ignores the franchise threshold.",
        "3": "This omits coinsurance.",
        "4": "This gives the conditional mean among covered losses only."
      },
      "skills": [
        "franchise versus ordinary deductible",
        "conditional exponential mean",
        "coinsurance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: franchise versus ordinary deductible, conditional exponential mean, coinsurance.",
        "The covered probability is exp(-450/600)=0.472367."
      ],
      "verification": {
        "kind": "franchise-exponential",
        "mu": 600,
        "d": 450,
        "share": 0.8,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h2-payment-variable:3",
      "topicId": "urv-h2-payment-variable",
      "family": "franchise-payment-mean"
    },
    {
      "question": "Loss X is uniform on (0,1600). The insurer pays Y=0.7max(X-480,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
      "choices": [
        "$392.0000$",
        "$504.0000$",
        "$588.0000$",
        "$720.0000$",
        "$840.0000$"
      ],
      "answer": 1,
      "solution": [
        "Payment has mass 0.3 at zero. Since this is below 0.75, the requested percentile is positive.",
        "For positive y, P(Y≤y)=(480+y/0.7)/1600.",
        "Set this to 0.75 and solve y=0.7(0.75×1600-480)=504."
      ],
      "feedback": {
        "0": "This is the positive-payment mean rather than the per-loss 75th percentile.",
        "2": "This gives the percentile conditional on positive payment.",
        "3": "This omits the insurer share.",
        "4": "This omits the deductible."
      },
      "skills": [
        "zero-payment mass",
        "payment CDF",
        "percentile inversion"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: zero-payment mass, payment CDF, percentile inversion.",
        "Payment has mass 0.3 at zero. Since this is below 0.75, the requested percentile is positive."
      ],
      "verification": {
        "kind": "uniform-payment-quantile",
        "B": 1600,
        "d": 480.00000000000006,
        "share": 0.7,
        "u": 0.75,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h2-payment-variable:4",
      "topicId": "urv-h2-payment-variable",
      "family": "uniform-payment-quantile"
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
    },
    {
      "question": "A loss X is exponential with mean 1300. There is no deductible. The insurer pays 0.7X, subject to a maximum insurer payment of 400. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$65.9414$",
        "$142.2722$",
        "$241.0213$",
        "$323.6692$",
        "$910.0000$"
      ],
      "answer": 3,
      "solution": [
        "The final cap is reached at loss 571.428571, since coinsurance is applied before the payment cap.",
        "For 0≤y<400, P(Y>y)=exp[-y/(0.7×1300)].",
        "Integrate this survival function from 0 to 400: E[Y]=0.7×1300[1-exp(-400/(0.7×1300))]=323.669186."
      ],
      "feedback": {
        "0": "This omits the point mass at the payment cap.",
        "1": "This pays the cap at every uncapped covered outcome.",
        "2": "This caps the loss before coinsurance instead of capping insurer payment.",
        "4": "This omits the payment limit."
      },
      "skills": [
        "final payment cap",
        "coinsurance order",
        "survival integration"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: final payment cap, coinsurance order, survival integration.",
        "The final cap is reached at loss 571.428571, since coinsurance is applied before the payment cap."
      ],
      "verification": {
        "kind": "limited-exponential",
        "mu": 1300,
        "cap": 400,
        "share": 0.7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h3-moments-loss-payment:2",
      "topicId": "urv-h3-moments-loss-payment",
      "family": "limited-exponential-infer"
    },
    {
      "question": "A loss X is exponential with mean 700. A policy has a franchise deductible 400: it pays nothing when X≤400, and pays 0.7X when X>400. Calculate expected payment per loss. Round your answer to four decimal places.",
      "choices": [
        "$276.7119$",
        "$434.8330$",
        "$490.0000$",
        "$621.1899$",
        "$770.0000$"
      ],
      "answer": 1,
      "solution": [
        "The covered probability is exp(-400/700)=0.564718.",
        "Memorylessness gives E[X given X>400]=400+700. A franchise deductible retains the full loss after crossing the threshold.",
        "Multiply covered probability, conditional full-loss mean, and insurer share: 0.7(400+700)exp(-400/700)=434.832954."
      ],
      "feedback": {
        "0": "This subtracts the deductible from a covered loss, giving an ordinary-deductible payment.",
        "2": "This ignores the franchise threshold.",
        "3": "This omits coinsurance.",
        "4": "This gives the conditional mean among covered losses only."
      },
      "skills": [
        "franchise versus ordinary deductible",
        "conditional exponential mean",
        "coinsurance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: franchise versus ordinary deductible, conditional exponential mean, coinsurance.",
        "The covered probability is exp(-400/700)=0.564718."
      ],
      "verification": {
        "kind": "franchise-exponential",
        "mu": 700,
        "d": 400,
        "share": 0.7,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h3-moments-loss-payment:3",
      "topicId": "urv-h3-moments-loss-payment",
      "family": "franchise-payment-mean"
    },
    {
      "question": "The claim count N takes values 0 through 4, with P(N=k)=c(k+1). A contract pays 100 for each claim in excess of the first 2 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
      "choices": [
        "$60.0000$",
        "$66.6667$",
        "$93.3333$",
        "$266.6667$",
        "$16000.0000$"
      ],
      "answer": 2,
      "solution": [
        "Normalize the probabilities: c[1+2+⋯+5]=1, giving c=2/(5×6).",
        "The payment at count k is 100 max(k-2,0). Its possible values are 0, 0, 0, 100, 200.",
        "Weight each payment by c(k+1); the expected payment is 93.333333."
      ],
      "feedback": {
        "0": "The supported counts are not equally likely.",
        "1": "A positive-part function cannot be moved outside an expectation.",
        "3": "This ignores the count deductible.",
        "4": "This is the second raw moment rather than the mean."
      },
      "skills": [
        "PMF normalization",
        "discrete payment transformation",
        "expectation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: PMF normalization, discrete payment transformation, expectation.",
        "Normalize the probabilities: c[1+2+⋯+5]=1, giving c=2/(5×6)."
      ],
      "verification": {
        "kind": "finite-payment",
        "n": 5,
        "scale": 100,
        "d": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:urv-h3-moments-loss-payment:4",
      "topicId": "urv-h3-moments-loss-payment",
      "family": "finite-payment-moments"
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
    },
    {
      "question": "Integer-valued X and Y have joint PMF P(X=x,Y=y)=c for nonnegative integers satisfying x+y≤7, and zero otherwise. Calculate P(X-Y>3). Round your answer to four decimal places.",
      "choices": [
        "$0.0938$",
        "$0.1667$",
        "$0.2500$",
        "$0.5000$",
        "$0.8333$"
      ],
      "answer": 1,
      "solution": [
        "The triangular lattice contains (7+1)(7+2)/2=36 points, so c=1/36.",
        "There are 6 support points with x>y+3. The inequality is strict.",
        "The event probability is 6/36=0.166667."
      ],
      "feedback": {
        "0": "This uses the full square rather than the triangular support.",
        "2": "This includes the boundary x-y=t.",
        "3": "A positive threshold and excluded equality outcomes prevent a simple one-half answer.",
        "4": "This gives the complementary event."
      },
      "skills": [
        "joint discrete support",
        "PMF normalization",
        "strict difference event"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint discrete support, PMF normalization, strict difference event.",
        "The triangular lattice contains (7+1)(7+2)/2=36 points, so c=1/36."
      ],
      "verification": {
        "kind": "joint-discrete-triangle",
        "B": 7,
        "threshold": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-a1-joint-distributions:2",
      "topicId": "mrv-a1-joint-distributions",
      "family": "joint-discrete-triangle-event"
    },
    {
      "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤8, and zero probability elsewhere. Calculate E[X given Y=1]. Round your answer to four decimal places.",
      "choices": [
        "$2.6667$",
        "$3.5000$",
        "$4.0000$",
        "$4.5000$",
        "$7.0000$"
      ],
      "answer": 1,
      "solution": [
        "At Y=1, the allowable X values are 0,1,…,7.",
        "The joint PMF is constant at these 8 points, so the conditional PMF is 1/8 at each value.",
        "The conditional mean is (8-1)/2=3.5."
      ],
      "feedback": {
        "0": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "2": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "3": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "4": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row."
      },
      "skills": [
        "joint support row",
        "conditional PMF",
        "conditional first moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint support row, conditional PMF, conditional first moment.",
        "At Y=1, the allowable X values are 0,1,…,7."
      ],
      "verification": {
        "kind": "joint-discrete-triangle-mean",
        "B": 8,
        "y": 1,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-a1-joint-distributions:3",
      "topicId": "mrv-a1-joint-distributions",
      "family": "joint-discrete-triangle-mean"
    },
    {
      "question": "U is uniform on the integers 1 through 7. Errors E and F each take values ±√2 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(7-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
      "choices": [
        "$-80.0000$",
        "$-24.0000$",
        "$-16.0000$",
        "$0.0000$",
        "$16.0000$"
      ],
      "answer": 2,
      "solution": [
        "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
        "The constant term 28 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
        "For this discrete uniform U, Var(U)=(49-1)/12. Thus Cov(X,Y)=-16."
      ],
      "feedback": {
        "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
      },
      "skills": [
        "shared discrete variable",
        "covariance bilinearity",
        "sign of dependence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
        "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
      ],
      "verification": {
        "kind": "shared-discrete-cov",
        "B": 7,
        "a": 4,
        "noise": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-a1-joint-distributions:4",
      "topicId": "mrv-a1-joint-distributions",
      "family": "shared-discrete-covariance"
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
    },
    {
      "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤6, and zero probability elsewhere. Calculate E[X given Y=1]. Round your answer to four decimal places.",
      "choices": [
        "$2.0000$",
        "$2.5000$",
        "$3.0000$",
        "$3.5000$",
        "$5.0000$"
      ],
      "answer": 1,
      "solution": [
        "At Y=1, the allowable X values are 0,1,…,5.",
        "The joint PMF is constant at these 6 points, so the conditional PMF is 1/6 at each value.",
        "The conditional mean is (6-1)/2=2.5."
      ],
      "feedback": {
        "0": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "2": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "3": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "4": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row."
      },
      "skills": [
        "joint support row",
        "conditional PMF",
        "conditional first moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint support row, conditional PMF, conditional first moment.",
        "At Y=1, the allowable X values are 0,1,…,5."
      ],
      "verification": {
        "kind": "joint-discrete-triangle-mean",
        "B": 6,
        "y": 1,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-a2-conditional-distributions:2",
      "topicId": "mrv-a2-conditional-distributions",
      "family": "joint-discrete-triangle-mean"
    },
    {
      "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤9, and zero elsewhere. Calculate Var(X given Y=3). Round your answer to four decimal places.",
      "choices": [
        "$2.0000$",
        "$3.0000$",
        "$4.0000$",
        "$9.0000$",
        "$13.0000$"
      ],
      "answer": 2,
      "solution": [
        "Given Y=3, X is discrete uniform on the 7 integers 0 through 6.",
        "The conditional first moment is 3, and second moment is 13.",
        "Subtract the squared conditional mean: Var(X given Y=3)=6(6+2)/12=4."
      ],
      "feedback": {
        "0": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
        "1": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
        "3": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
        "4": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction."
      },
      "skills": [
        "conditional discrete support",
        "conditional raw moments",
        "conditional variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional discrete support, conditional raw moments, conditional variance.",
        "Given Y=3, X is discrete uniform on the 7 integers 0 through 6."
      ],
      "verification": {
        "kind": "joint-discrete-triangle-variance",
        "B": 9,
        "y": 3,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-a2-conditional-distributions:3",
      "topicId": "mrv-a2-conditional-distributions",
      "family": "joint-discrete-triangle-variance"
    },
    {
      "question": "Independent claim counts X and Y from two branches are Poisson with means 1.2 and 0.6. Given X+Y=4, calculate P(X≥2). Round your answer to four decimal places.",
      "choices": [
        "$0.1975$",
        "$0.3374$",
        "$0.6667$",
        "$0.8889$",
        "$0.9877$"
      ],
      "answer": 3,
      "solution": [
        "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.666667.",
        "The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n=4.",
        "Evaluate 1-(1-p)^4-4p(1-p)^3=0.888889."
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
        "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.666667."
      ],
      "verification": {
        "kind": "poisson-split",
        "a": 1.2,
        "b": 0.6,
        "n": 4,
        "target": "atleast2"
      },
      "level": "challenge",
      "id": "chapter:mrv-a2-conditional-distributions:4",
      "topicId": "mrv-a2-conditional-distributions",
      "family": "poisson-split-condition"
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
    },
    {
      "question": "U is uniform on the integers 1 through 3. Errors E and F each take values ±√4 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(3-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
      "choices": [
        "$-18.6667$",
        "$-8.0000$",
        "$-2.6667$",
        "$0.0000$",
        "$2.6667$"
      ],
      "answer": 2,
      "solution": [
        "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
        "The constant term 12 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
        "For this discrete uniform U, Var(U)=(9-1)/12. Thus Cov(X,Y)=-2.666667."
      ],
      "feedback": {
        "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
      },
      "skills": [
        "shared discrete variable",
        "covariance bilinearity",
        "sign of dependence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
        "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
      ],
      "verification": {
        "kind": "shared-discrete-cov",
        "B": 3,
        "a": 4,
        "noise": 4,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-b1-joint-moments:2",
      "topicId": "mrv-b1-joint-moments",
      "family": "shared-discrete-covariance"
    },
    {
      "question": "X and Y have standard deviations 5 and 4, and correlation 0.35. Calculate Var(2X-3Y). Round your answer to four decimal places.",
      "choices": [
        "$12.6491$",
        "$14.0000$",
        "$160.0000$",
        "$244.0000$",
        "$328.0000$"
      ],
      "answer": 2,
      "solution": [
        "Cov(X,Y)=ρ SD(X) SD(Y)=7.",
        "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
        "Var(2X-3Y)=4(5)²+9(4)²-12(7)=160."
      ],
      "feedback": {
        "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
        "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
        "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
        "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
      },
      "skills": [
        "correlation to covariance",
        "signed linear combination",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: correlation to covariance, signed linear combination, variance.",
        "Cov(X,Y)=ρ SD(X) SD(Y)=7."
      ],
      "verification": {
        "kind": "correlated-linear",
        "sx": 5,
        "sy": 4,
        "rho": 0.35,
        "a": 2,
        "b": -3,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-b1-joint-moments:3",
      "topicId": "mrv-b1-joint-moments",
      "family": "correlated-linear-variance"
    },
    {
      "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤5, and zero probability elsewhere. Calculate E[X given Y=2]. Round your answer to four decimal places.",
      "choices": [
        "$1.5000$",
        "$1.6667$",
        "$2.5000$",
        "$3.0000$",
        "$3.5000$"
      ],
      "answer": 0,
      "solution": [
        "At Y=2, the allowable X values are 0,1,…,3.",
        "The joint PMF is constant at these 4 points, so the conditional PMF is 1/4 at each value.",
        "The conditional mean is (5-2)/2=1.5."
      ],
      "feedback": {
        "1": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "2": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "3": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
        "4": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row."
      },
      "skills": [
        "joint support row",
        "conditional PMF",
        "conditional first moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: joint support row, conditional PMF, conditional first moment.",
        "At Y=2, the allowable X values are 0,1,…,3."
      ],
      "verification": {
        "kind": "joint-discrete-triangle-mean",
        "B": 5,
        "y": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-b1-joint-moments:4",
      "topicId": "mrv-b1-joint-moments",
      "family": "joint-discrete-triangle-mean"
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
    },
    {
      "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤8, and zero elsewhere. Calculate Var(X given Y=2). Round your answer to four decimal places.",
      "choices": [
        "$2.0000$",
        "$3.0000$",
        "$4.0000$",
        "$9.0000$",
        "$13.0000$"
      ],
      "answer": 2,
      "solution": [
        "Given Y=2, X is discrete uniform on the 7 integers 0 through 6.",
        "The conditional first moment is 3, and second moment is 13.",
        "Subtract the squared conditional mean: Var(X given Y=2)=6(6+2)/12=4."
      ],
      "feedback": {
        "0": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
        "1": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
        "3": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
        "4": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction."
      },
      "skills": [
        "conditional discrete support",
        "conditional raw moments",
        "conditional variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: conditional discrete support, conditional raw moments, conditional variance.",
        "Given Y=2, X is discrete uniform on the 7 integers 0 through 6."
      ],
      "verification": {
        "kind": "joint-discrete-triangle-variance",
        "B": 8,
        "y": 2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-b2-conditional-variance:2",
      "topicId": "mrv-b2-conditional-variance",
      "family": "joint-discrete-triangle-variance"
    },
    {
      "question": "N is Poisson with mean 2.5. Only policies with N≤5 are retained. Calculate the conditional variance of N among retained policies. Round your answer to four decimal places.",
      "choices": [
        "$1.7813$",
        "$1.8595$",
        "$2.5000$",
        "$2.6097$",
        "$7.2682$"
      ],
      "answer": 1,
      "solution": [
        "The retained probability is 0.957979. Divide the restricted first and second raw-moment sums by this probability.",
        "The conditional moments are E[N]=2.325672 and E[N²]=7.268214.",
        "The conditional variance is 7.268214-(2.325672)²=1.859463."
      ],
      "feedback": {
        "0": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
        "2": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
        "3": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
        "4": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance."
      },
      "skills": [
        "truncated Poisson PMF",
        "conditional raw moments",
        "conditional variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: truncated Poisson PMF, conditional raw moments, conditional variance.",
        "The retained probability is 0.957979. Divide the restricted first and second raw-moment sums by this probability."
      ],
      "verification": {
        "kind": "poisson-truncated",
        "lam": 2.5,
        "upper": 5,
        "target": "variance",
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-b2-conditional-variance:3",
      "topicId": "mrv-b2-conditional-variance",
      "family": "poisson-truncated-variance"
    },
    {
      "question": "A policy has a permanent class H with probability 0.35, otherwise class L. Conditional on class, annual counts are independent Poisson variables with means 2 and 0.4, respectively. Given no claims in year 1, calculate the conditional variance of the year-2 count. Round your answer to four decimal places.",
      "choices": [
        "$0.2264$",
        "$0.5569$",
        "$0.7833$",
        "$1.0934$",
        "$1.5424$"
      ],
      "answer": 2,
      "solution": [
        "No-claim likelihoods update the H share to 0.098054 by Bayes.",
        "The posterior mean count, also the mean within-class Poisson variance, is 0.556886.",
        "Add posterior variance of the class rates 0.226404: Var(N₂ given N₁=0)=0.78329."
      ],
      "feedback": {
        "0": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
        "1": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
        "3": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
        "4": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior."
      },
      "skills": [
        "Bayes from a count observation",
        "conditional independence",
        "conditional total variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: Bayes from a count observation, conditional independence, conditional total variance.",
        "No-claim likelihoods update the H share to 0.098054 by Bayes."
      ],
      "verification": {
        "kind": "predictive-variance",
        "w": 0.35,
        "rates": [
          2.0,
          0.4
        ],
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-b2-conditional-variance:4",
      "topicId": "mrv-b2-conditional-variance",
      "family": "bayes-predictive-variance"
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
    },
    {
      "question": "U is uniform on the integers 1 through 7. Errors E and F each take values ±√4 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=1(7-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
      "choices": [
        "$-20.0000$",
        "$-8.0000$",
        "$-4.0000$",
        "$0.0000$",
        "$4.0000$"
      ],
      "answer": 2,
      "solution": [
        "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
        "The constant term 7 contributes zero covariance, leaving Cov(U,-1U)=-1Var(U).",
        "For this discrete uniform U, Var(U)=(49-1)/12. Thus Cov(X,Y)=-4."
      ],
      "feedback": {
        "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
        "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
      },
      "skills": [
        "shared discrete variable",
        "covariance bilinearity",
        "sign of dependence"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
        "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
      ],
      "verification": {
        "kind": "shared-discrete-cov",
        "B": 7,
        "a": 1,
        "noise": 4,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-c1-covariance:2",
      "topicId": "mrv-c1-covariance",
      "family": "shared-discrete-covariance"
    },
    {
      "question": "X and Y have standard deviations 4 and 4, and correlation 0.4. Calculate Var(2X-3Y). Round your answer to four decimal places.",
      "choices": [
        "$3.2000$",
        "$11.4543$",
        "$131.2000$",
        "$208.0000$",
        "$284.8000$"
      ],
      "answer": 2,
      "solution": [
        "Cov(X,Y)=ρ SD(X) SD(Y)=6.4.",
        "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
        "Var(2X-3Y)=4(4)²+9(4)²-12(6.4)=131.2."
      ],
      "feedback": {
        "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
        "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
        "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
        "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
      },
      "skills": [
        "correlation to covariance",
        "signed linear combination",
        "variance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: correlation to covariance, signed linear combination, variance.",
        "Cov(X,Y)=ρ SD(X) SD(Y)=6.4."
      ],
      "verification": {
        "kind": "correlated-linear",
        "sx": 4,
        "sy": 4,
        "rho": 0.4,
        "a": 2,
        "b": -3,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-c1-covariance:3",
      "topicId": "mrv-c1-covariance",
      "family": "correlated-linear-variance"
    },
    {
      "question": "An insured is type A with probability 0.3, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 1 for A or 6 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
      "choices": [
        "$-5.2500$",
        "$0.0000$",
        "$4.5000$",
        "$5.2500$",
        "$25.5000$"
      ],
      "answer": 3,
      "solution": [
        "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
        "E[XY]=25.5 and E[X]=E[Y]=4.5.",
        "Cov(X,Y)=E[XY]-E[X]E[Y]=5.25."
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
        "w": 0.3,
        "rates": [
          1,
          6
        ],
        "target": "covariance"
      },
      "level": "challenge",
      "id": "chapter:mrv-c1-covariance:4",
      "topicId": "mrv-c1-covariance",
      "family": "shared-class-covariance"
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
    },
    {
      "question": "7 independent component lifetimes are exponential with mean 3. T is the time of the second failure. Calculate P(T≤6). Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0007$",
        "$0.3614$",
        "$0.7476$",
        "$1.0000$"
      ],
      "answer": 4,
      "solution": [
        "Each component fails by time 6 with probability 1-exp(-6/3)=0.864665.",
        "The number of failures by time 6 is binomial with n=7 and p=0.864665. The second failure has occurred exactly when this count is at least two.",
        "Remove zero and one failures: 1-(1-p)^7-7p(1-p)^6=0.999962."
      ],
      "feedback": {
        "0": "This is the probability the second failure is still in the future.",
        "1": "This counts exactly two failures and excludes three or more.",
        "2": "This requires all components to fail by the threshold.",
        "3": "This requires two specified components to fail rather than the second order statistic."
      },
      "skills": [
        "order-statistic event",
        "binomial count representation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: order-statistic event, binomial count representation.",
        "Each component fails by time 6 with probability 1-exp(-6/3)=0.864665."
      ],
      "verification": {
        "kind": "order-exponential",
        "n": 7,
        "mu": 3,
        "threshold": 6,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-d1-order-statistics:2",
      "topicId": "mrv-d1-order-statistics",
      "family": "order-second-exponential"
    },
    {
      "question": "9 independent values are uniform on (0,14). Let X_(4) be the 4th smallest value. Calculate E[X_(4)]. Round your answer to four decimal places.",
      "choices": [
        "$1.4000$",
        "$5.6000$",
        "$6.2222$",
        "$7.0000$",
        "$8.4000$"
      ],
      "answer": 1,
      "solution": [
        "For Z=X_(4)/14, the order-statistic density is proportional to z^3(1-z)^5 on (0,1).",
        "This is beta(4,6), with mean 4/(9+1).",
        "Rescale: E[X_(4)]=14×4/10=5.6."
      ],
      "feedback": {
        "0": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "2": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "3": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
        "4": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean."
      },
      "skills": [
        "order-statistic density",
        "beta first moment",
        "rescaling"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: order-statistic density, beta first moment, rescaling.",
        "For Z=X_(4)/14, the order-statistic density is proportional to z^3(1-z)^5 on (0,1)."
      ],
      "verification": {
        "kind": "order-uniform-mean",
        "n": 9,
        "rank": 4,
        "B": 14,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-d1-order-statistics:3",
      "topicId": "mrv-d1-order-statistics",
      "family": "order-uniform-middle-mean"
    },
    {
      "question": "Two independent components have exponential lifetimes with means 4 and 7 years. A device fails when either component fails. Given that the device has survived 2 years, calculate the probability it survives at least another 2 years. Round your answer to four decimal places.",
      "choices": [
        "$0.2077$",
        "$0.4558$",
        "$0.5442$",
        "$0.6065$",
        "$0.8338$"
      ],
      "answer": 1,
      "solution": [
        "For independent lifetimes, device survival is the product of both component survival functions.",
        "The minimum lifetime is exponential with rate 1/4+1/7. It is memoryless.",
        "Conditional survival for another 2 years is exp[-2(1/4+1/7)]=0.455794."
      ],
      "feedback": {
        "0": "This is unconditional survival for twice the elapsed interval.",
        "2": "This gives failure during the additional interval.",
        "3": "Both components must survive, not just component 1.",
        "4": "Means do not add for a minimum lifetime; failure rates add."
      },
      "skills": [
        "minimum of independent lifetimes",
        "rate versus mean",
        "memorylessness"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: minimum of independent lifetimes, rate versus mean, memorylessness.",
        "For independent lifetimes, device survival is the product of both component survival functions."
      ],
      "verification": {
        "kind": "exponential-minimum",
        "means": [
          4,
          7
        ],
        "t": 2,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-d1-order-statistics:4",
      "topicId": "mrv-d1-order-statistics",
      "family": "exponential-minimum-lifetime"
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
    },
    {
      "question": "Independent counts X and Y are binomial with parameters (5,0.3) and (6,0.35), respectively. Each X claim costs two units and each Y claim costs one unit. Calculate P(2X+Y≤3). Round your answer to four decimal places.",
      "choices": [
        "$0.1273$",
        "$0.2018$",
        "$0.2633$",
        "$0.4899$",
        "$0.7367$"
      ],
      "answer": 2,
      "solution": [
        "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero.",
        "By independence, sum P(X=x)P(Y≤3-2x) over x=0,…,1.",
        "This weighted discrete sum equals 0.263251; the weighted count is not an ordinary binomial variable."
      ],
      "feedback": {
        "0": "This gives equality only.",
        "1": "This reverses the two costs.",
        "3": "This treats both claim types as having the same cost.",
        "4": "This gives the probability the cost exceeds the limit."
      },
      "skills": [
        "independent discrete sums",
        "weighted support",
        "conditional summation"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent discrete sums, weighted support, conditional summation.",
        "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero."
      ],
      "verification": {
        "kind": "weighted-binomial",
        "n": 5,
        "m": 6,
        "p": 0.30000000000000004,
        "q": 0.35,
        "limit": 3,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-e1-linear-combinations:2",
      "topicId": "mrv-e1-linear-combinations",
      "family": "independent-weighted-binomial"
    },
    {
      "question": "Weekly claim counts are independent and identically Poisson distributed. For one week, P(N=1)=0.4P(N=0). Calculate the probability of exactly 4 claims over 2 weeks. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0007$",
        "$0.0077$",
        "$0.0091$",
        "$0.4493$"
      ],
      "answer": 2,
      "solution": [
        "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 0.4.",
        "The independent 2-week total is Poisson with mean 0.8.",
        "Its probability at 4 is exp(-0.8)(0.8)^4/4!=0.007669."
      ],
      "feedback": {
        "0": "This requires that count in every week, rather than in the entire period.",
        "1": "This uses a one-week mean.",
        "3": "This gives at least the requested count.",
        "4": "This gives zero claims."
      },
      "skills": [
        "infer a Poisson mean",
        "independent sums",
        "exact count"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer a Poisson mean, independent sums, exact count.",
        "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 0.4."
      ],
      "verification": {
        "kind": "poisson-aggregate",
        "lam": 0.4,
        "periods": 2,
        "count": 4,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-e1-linear-combinations:3",
      "topicId": "mrv-e1-linear-combinations",
      "family": "poisson-ratio-aggregate"
    },
    {
      "question": "Independent measurements X and Y are normal with means 60 and 60 and SDs 6 and 8, respectively. Calculate P(X<Y+10). Round your answer to four decimal places.",
      "choices": [
        "$0.1587$",
        "$0.5398$",
        "$0.7625$",
        "$0.8413$",
        "$0.9522$"
      ],
      "answer": 3,
      "solution": [
        "D=X-Y is normal with mean 60-60=0.",
        "Independence gives Var(D)=6²+8²=100; the negative coefficient does not subtract variance.",
        "Standardize D<10: Φ[(10-0)/√100]=0.841345."
      ],
      "feedback": {
        "0": "This is the upper rather than lower difference tail.",
        "1": "This standardizes using variance instead of SD.",
        "2": "Independent SDs do not add directly.",
        "4": "This ignores the variation in Y."
      },
      "skills": [
        "independent normal difference",
        "mean and variance of a linear combination",
        "tail probability"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: independent normal difference, mean and variance of a linear combination, tail probability.",
        "D=X-Y is normal with mean 60-60=0."
      ],
      "verification": {
        "kind": "normal-independent-difference",
        "mx": 60,
        "my": 60,
        "sx": 6,
        "sy": 8,
        "margin": 10,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-e1-linear-combinations:4",
      "topicId": "mrv-e1-linear-combinations",
      "family": "normal-independent-difference"
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
    },
    {
      "question": "Independent X and Y are uniform on the integers 1 through 5 and Bernoulli with success probability 0.35, respectively. Let Z=2X-3Y+6. Calculate E[Z²]. Round your answer to four decimal places.",
      "choices": [
        "$10.0475$",
        "$34.5500$",
        "$46.0475$",
        "$119.9025$",
        "$129.9500$"
      ],
      "answer": 4,
      "solution": [
        "E[Z]=2(6/2)-3(0.35)+6=10.95.",
        "Independence gives Var(Z)=4(24/12)+9(0.35)(0.65)=10.0475. The shift adds no variance.",
        "E[Z²]=Var(Z)+(E[Z])²=129.95."
      ],
      "feedback": {
        "0": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
        "1": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
        "2": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
        "3": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring."
      },
      "skills": [
        "moments of independent variables",
        "signed coefficients",
        "second raw moment"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: moments of independent variables, signed coefficients, second raw moment.",
        "E[Z]=2(6/2)-3(0.35)+6=10.95."
      ],
      "verification": {
        "kind": "independent-linear-raw",
        "n": 5,
        "p": 0.35000000000000003,
        "shift": 6,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-e2-linear-moments:2",
      "topicId": "mrv-e2-linear-moments",
      "family": "independent-linear-second-moment"
    },
    {
      "question": "7 independent measurements each have mean 100 and SD 16. Let M be their average. A cost is Z=1.2M+C, where C is independent of all measurements and has mean 5 and SD 5. Calculate SD(Z). Round your answer to four decimal places.",
      "choices": [
        "$8.2997$",
        "$8.8127$",
        "$12.2569$",
        "$19.8404$",
        "$77.6629$"
      ],
      "answer": 1,
      "solution": [
        "Var(M)=16²/7=36.571429.",
        "Independence gives Var(Z)=1.2²Var(M)+Var(C)=77.662857. The means do not affect this variance.",
        "Take the square root: SD(Z)=8.812653."
      ],
      "feedback": {
        "0": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
        "2": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
        "3": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
        "4": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root."
      },
      "skills": [
        "moments of an independent average",
        "independent random surcharge",
        "SD of a linear combination"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: moments of an independent average, independent random surcharge, SD of a linear combination.",
        "Var(M)=16²/7=36.571429."
      ],
      "verification": {
        "kind": "independent-average-sd",
        "sd": 16,
        "n": 7,
        "shiftSD": 5,
        "scale": 1.2,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-e2-linear-moments:3",
      "topicId": "mrv-e2-linear-moments",
      "family": "independent-average-sd"
    },
    {
      "question": "Independent counts X and Y are Poisson. Their zero-count probabilities are exp(-1.1) and exp(-2), respectively. Calculate Var(2X-3Y). Round your answer to four decimal places.",
      "choices": [
        "$-13.6000$",
        "$-3.8000$",
        "$4.7329$",
        "$8.2000$",
        "$22.4000$"
      ],
      "answer": 4,
      "solution": [
        "The identity P(N=0)=exp(-λ) gives means 1.1 and 2. Poisson variances equal those means.",
        "Independence gives zero covariance. Both the positive and negative coefficients must be squared in the variance.",
        "Var(2X-3Y)=4×1.1+9×2=22.4."
      ],
      "feedback": {
        "0": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
        "1": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
        "2": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
        "3": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment."
      },
      "skills": [
        "infer Poisson parameters",
        "independent linear variance",
        "signed coefficients"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: infer Poisson parameters, independent linear variance, signed coefficients.",
        "The identity P(N=0)=exp(-λ) gives means 1.1 and 2. Poisson variances equal those means."
      ],
      "verification": {
        "kind": "poisson-linear-variance",
        "a": 1.1,
        "b": 2.0,
        "probability": false
      },
      "level": "challenge",
      "id": "chapter:mrv-e2-linear-moments:4",
      "topicId": "mrv-e2-linear-moments",
      "family": "independent-poisson-linear-variance"
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
    },
    {
      "question": "Independent and identically distributed observations have standard deviation 22 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤3) is approximately at least 0.95.",
      "choices": [
        "$15$",
        "$54$",
        "$146$",
        "$206$",
        "$207$"
      ],
      "answer": 4,
      "solution": [
        "The sample mean has standard deviation 22/√n.",
        "The required central-normal half-width is 1.96×22/√n≤3, so n≥(1.96×22/3)²=206.592711.",
        "Round upward, since n is an integer and must meet the bound: n=207."
      ],
      "feedback": {
        "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
        "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
        "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
        "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
      },
      "skills": [
        "CLT for a sample mean",
        "two-sided probability",
        "inverse sample size"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
        "The sample mean has standard deviation 22/√n."
      ],
      "verification": {
        "kind": "clt-size",
        "sd": 22,
        "tolerance": 3,
        "z": 1.96,
        "probability": false,
        "precision": 0
      },
      "level": "challenge",
      "id": "chapter:mrv-f1-central-limit-theorem:2",
      "topicId": "mrv-f1-central-limit-theorem",
      "family": "clt-sample-size"
    },
    {
      "question": "60 independent service times are each uniform on (0,14) minutes. Use the central limit theorem to approximate the probability that their average exceeds 7.8 minutes. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.0016$",
        "$0.0626$",
        "$0.4215$",
        "$0.9374$"
      ],
      "answer": 2,
      "solution": [
        "One service time has mean 14/2 and variance 196/12.",
        "The average has variance 196/(12×60), so z=(7.8-14/2)/√(196/(12×60))=1.533304.",
        "The upper normal tail is approximately 0.062601."
      ],
      "feedback": {
        "0": "The SD decreases by √n, not n.",
        "1": "This standardizes using the average variance rather than its SD.",
        "3": "This uses the SD of one observation rather than the average.",
        "4": "This is the lower normal tail."
      },
      "skills": [
        "CLT for a uniform average",
        "variance divided by sample size",
        "normal tail"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: CLT for a uniform average, variance divided by sample size, normal tail.",
        "One service time has mean 14/2 and variance 196/12."
      ],
      "verification": {
        "kind": "clt-uniform",
        "B": 14,
        "n": 60,
        "threshold": 7.8,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-f1-central-limit-theorem:3",
      "topicId": "mrv-f1-central-limit-theorem",
      "family": "clt-uniform-average"
    },
    {
      "question": "70 independent claim amounts each have an exponential distribution with mean 140. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds 10600. Round your answer to four decimal places.",
      "choices": [
        "$0.0000$",
        "$0.2473$",
        "$0.3390$",
        "$0.4675$",
        "$0.7527$"
      ],
      "answer": 1,
      "solution": [
        "An exponential claim has variance 140². The aggregate has mean 9800 and variance 70×140².",
        "The standardized reserve is (10600-9800)/(140√70)=0.682988.",
        "The approximate upper normal tail is 0.247307."
      ],
      "feedback": {
        "0": "This uses one claim SD for the entire sum.",
        "2": "An aggregate of exponential variables is not a single exponential with the aggregate mean.",
        "3": "The sum SD grows with √n, not n.",
        "4": "This is the lower tail."
      },
      "skills": [
        "exponential moments",
        "CLT for an aggregate",
        "reserve exceedance"
      ],
      "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
      "hints": [
        "Break the solution into: exponential moments, CLT for an aggregate, reserve exceedance.",
        "An exponential claim has variance 140². The aggregate has mean 9800 and variance 70×140²."
      ],
      "verification": {
        "kind": "clt-exponential",
        "n": 70,
        "mu": 140,
        "reserve": 10600,
        "probability": true
      },
      "level": "challenge",
      "id": "chapter:mrv-f1-central-limit-theorem:4",
      "topicId": "mrv-f1-central-limit-theorem",
      "family": "clt-exponential-total"
    }
  ]
};

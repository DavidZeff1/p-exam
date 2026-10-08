export default [
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 10/34, 14/34, and 12/34. The probabilities of A∩B, A∩C, and B∩C are 4/34, 3/34, and 5/34; all three occur with probability 1/34. Calculate the probability that a randomly selected customer has exactly two of the three endorsements. Round your answer to four decimal places.",
    "choices": [
      "$0.1324$",
      "$0.2647$",
      "$0.3847$",
      "$0.6324$",
      "$0.7353$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 4/34; the exactly-two regions have total mass 9/34. Inclusion–exclusion gives the none region 9/34.",
      "The requested region or disjoint union of regions has probability 9/34=0.264706."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        9,
        4,
        6,
        3,
        5,
        2,
        4,
        1
      ],
      "target": "two",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:0",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 14/42, 18/42, and 16/42. The probabilities of A∩B, A∩C, and B∩C are 6/42, 5/42, and 7/42; all three occur with probability 2/42. Calculate the probability that a randomly selected customer has endorsement A but neither B nor C. Round your answer to four decimal places.",
    "choices": [
      "$0.0595$",
      "$0.1190$",
      "$0.2390$",
      "$0.5595$",
      "$0.8810$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 5/42; the exactly-two regions have total mass 12/42. Inclusion–exclusion gives the none region 10/42.",
      "The requested region or disjoint union of regions has probability 5/42=0.119048."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        10,
        5,
        7,
        4,
        6,
        3,
        5,
        2
      ],
      "target": "a-only",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:1",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({ω3} given {ω2,ω3})=3/5, calculate P({ω4}). Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.3000$",
      "$0.3333$",
      "$0.4000$",
      "$0.4444$"
    ],
    "answer": 3,
    "solution": [
      "The conditional ratio is k/(2+k)=3/5; solving gives k=3.",
      "Normalize the four masses: c(1+2+k+k+1)=1, so c=1/10.",
      "P({ω4})=(k+1)c=4/10=0.4."
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
      "The conditional ratio is k/(2+k)=3/5; solving gives k=3."
    ],
    "verification": {
      "kind": "four-atoms",
      "k": 3,
      "target": "last"
    },
    "level": "challenge",
    "id": "section:general-probability-a:8",
    "topicId": "a5-probability-set-function",
    "family": "atoms-normalize",
    "difficulty": 4,
    "relatedTopicIds": [
      "a5-probability-set-function"
    ],
    "cumulative": false
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=14/25, P(B)=14/25, P(C)=9/25, P(A∩B)=7/25, P(A∩C)=5/25, and P(B∩C)=4/25. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.0800$",
      "$0.1429$",
      "$0.1600$",
      "$0.1818$",
      "$0.4400$"
    ],
    "answer": 3,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/25.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 2/25. The probability of not A is 11/25.",
      "None is contained in not A, so the requested conditional probability is 0.181818."
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/25."
    ],
    "verification": {
      "kind": "atoms",
      "weights": [
        2,
        4,
        5,
        5,
        2,
        3,
        2,
        2
      ],
      "target": "none-given-notA"
    },
    "level": "challenge",
    "id": "section:general-probability-a:9",
    "topicId": "a2-venn-diagrams",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "a2-venn-diagrams"
    ],
    "cumulative": false
  },
  {
    "question": "A box contains 2 damaged and 4 sound components. Three are inspected in order without replacement. Calculate the probability the first is damaged and the other two are sound. Round your answer to four decimal places.",
    "choices": [
      "$0.1481$",
      "$0.2000$",
      "$0.2610$",
      "$0.3333$",
      "$0.6000$"
    ],
    "answer": 1,
    "solution": [
      "The first-stage damaged probability is 2/6.",
      "After removing a damaged component there are 4 sound components out of 5; after removing a sound component there are 3 out of 4.",
      "Multiply conditional stage probabilities: (2/6)(4/5)(3/4)=0.2."
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
      "The first-stage damaged probability is 2/6."
    ],
    "verification": {
      "kind": "draw-sequence",
      "N": 6,
      "K": 2,
      "pattern": [
        1,
        0,
        0
      ]
    },
    "level": "challenge",
    "id": "section:general-probability-a:10",
    "topicId": "a3-sample-space",
    "family": "replacement-pattern",
    "difficulty": 3,
    "relatedTopicIds": [
      "a3-sample-space"
    ],
    "cumulative": false
  },
  {
    "question": "For two policy features A and B, P(neither)=0.45, P(A∩B)=0.1, and P(B)-P(A)=0.05. Calculate P(not B given A). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.2857$",
      "$0.3333$",
      "$0.6500$",
      "$0.6667$"
    ],
    "answer": 4,
    "solution": [
      "The union probability is 1-0.45=0.55. Thus P(A)+P(B)=0.65.",
      "Combine this sum with the difference 0.05 to get P(A)=0.3 and P(B)=0.35.",
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
      "The union probability is 1-0.45=0.55. Thus P(A)+P(B)=0.65."
    ],
    "verification": {
      "kind": "two-events",
      "a": 0.30000000000000004,
      "b": 0.35,
      "joint": 0.1,
      "target": "notB-given-A"
    },
    "level": "challenge",
    "id": "section:general-probability-a:11",
    "topicId": "a4-events",
    "family": "two-events-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a4-events"
    ],
    "cumulative": false
  },
  {
    "question": "A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({ω3} given {ω2,ω3})=6/8, calculate P({ω4}). Round your answer to four decimal places.",
    "choices": [
      "$0.0625$",
      "$0.3750$",
      "$0.3889$",
      "$0.4375$",
      "$0.4667$"
    ],
    "answer": 3,
    "solution": [
      "The conditional ratio is k/(2+k)=6/8; solving gives k=6.",
      "Normalize the four masses: c(1+2+k+k+1)=1, so c=1/16.",
      "P({ω4})=(k+1)c=7/16=0.4375."
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
      "The conditional ratio is k/(2+k)=6/8; solving gives k=6."
    ],
    "verification": {
      "kind": "four-atoms",
      "k": 6,
      "target": "last"
    },
    "level": "challenge",
    "id": "section:general-probability-a:12",
    "topicId": "a5-probability-set-function",
    "family": "atoms-normalize",
    "difficulty": 4,
    "relatedTopicIds": [
      "a5-probability-set-function"
    ],
    "cumulative": false
  },
  {
    "question": "A severity category X takes values 1 through 6. Its probability set function assigns P(X=k)=ck, where c is unknown. A file is known to have X≥4. Calculate P(X>4 given this information). Round your answer to four decimal places.",
    "choices": [
      "$0.5238$",
      "$0.6667$",
      "$0.7143$",
      "$0.7333$",
      "$0.8095$"
    ],
    "answer": 3,
    "solution": [
      "Normalize: c(1+2+…+6)=1, so c=0.047619.",
      "The conditioning category weights total 15; the strictly larger category weights total 11.",
      "The factor c cancels in the conditional ratio, giving 0.733333."
    ],
    "feedback": {
      "0": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
      "1": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
      "2": "Use probability weights and the correct strict endpoint; the categories are not equally likely.",
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
      "Normalize: c(1+2+…+6)=1, so c=0.047619."
    ],
    "verification": {
      "kind": "weighted-discrete",
      "values": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "weights": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "threshold": 4,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:general-probability-a:13",
    "topicId": "a6-axioms-probability",
    "family": "weighted-outcomes",
    "difficulty": 3,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=15/27, P(B)=14/27, P(C)=9/27, P(A∩B)=7/27, P(A∩C)=5/27, and P(B∩C)=4/27. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.1111$",
      "$0.1852$",
      "$0.2000$",
      "$0.2500$",
      "$0.4444$"
    ],
    "answer": 3,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/27.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 3/27. The probability of not A is 12/27.",
      "None is contained in not A, so the requested conditional probability is 0.25."
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/27."
    ],
    "verification": {
      "kind": "atoms",
      "weights": [
        3,
        5,
        5,
        5,
        2,
        3,
        2,
        2
      ],
      "target": "none-given-notA"
    },
    "level": "challenge",
    "id": "section:general-probability-a:14",
    "topicId": "a2-venn-diagrams",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "a2-venn-diagrams"
    ],
    "cumulative": false
  },
  {
    "question": "For two policy features A and B, P(neither)=0.425, P(A∩B)=0.125, and P(B)-P(A)=0.1. Calculate P(not B given A). Round your answer to four decimal places.",
    "choices": [
      "$0.1750$",
      "$0.3125$",
      "$0.4167$",
      "$0.5833$",
      "$0.6000$"
    ],
    "answer": 3,
    "solution": [
      "The union probability is 1-0.425=0.575. Thus P(A)+P(B)=0.7.",
      "Combine this sum with the difference 0.1 to get P(A)=0.3 and P(B)=0.4.",
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
      "The union probability is 1-0.425=0.575. Thus P(A)+P(B)=0.7."
    ],
    "verification": {
      "kind": "two-events",
      "a": 0.30000000000000004,
      "b": 0.39999999999999997,
      "joint": 0.125,
      "target": "notB-given-A"
    },
    "level": "challenge",
    "id": "section:general-probability-a:15",
    "topicId": "a4-events",
    "family": "two-events-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a4-events"
    ],
    "cumulative": false
  },
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 18/48, 20/48, and 18/48. The probabilities of A∩B, A∩C, and B∩C are 8/48, 7/48, and 7/48; all three occur with probability 3/48. Calculate the probability that a randomly selected customer has none of the three endorsements. Round your answer to four decimal places.",
    "choices": [
      "$0.1146$",
      "$0.2292$",
      "$0.3492$",
      "$0.6146$",
      "$0.7708$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 6/48; the exactly-two regions have total mass 13/48. Inclusion–exclusion gives the none region 11/48.",
      "The requested region or disjoint union of regions has probability 11/48=0.229167."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        11,
        6,
        8,
        5,
        7,
        4,
        4,
        3
      ],
      "target": "none",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:2",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 13/47, 21/47, and 16/47. The probabilities of A∩B, A∩C, and B∩C are 7/47, 3/47, and 6/47; all three occur with probability 1/47. Calculate the probability that a randomly selected customer has exactly two of the three endorsements. Round your answer to four decimal places.",
    "choices": [
      "$0.1383$",
      "$0.2766$",
      "$0.3966$",
      "$0.6383$",
      "$0.7234$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 4/47; the exactly-two regions have total mass 13/47. Inclusion–exclusion gives the none region 12/47.",
      "The requested region or disjoint union of regions has probability 13/47=0.276596."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        12,
        4,
        9,
        6,
        8,
        2,
        5,
        1
      ],
      "target": "two",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:3",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "Independent X,Y are each uniform on the integers 1 through 5. Given X+Y≥7, calculate P(X=Y). Round your answer to four decimal places.",
    "choices": [
      "$0.0800$",
      "$0.2000$",
      "$0.2610$",
      "$0.3220$",
      "$0.4000$"
    ],
    "answer": 1,
    "solution": [
      "All 25 ordered pairs are equally likely before conditioning.",
      "The condition allows 10 ordered pairs. Exactly 2 of these lie on the diagonal x=y.",
      "The conditional ratio is 2/10=0.2."
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
      "All 25 ordered pairs are equally likely before conditioning."
    ],
    "verification": {
      "kind": "uniform-pairs",
      "n": 5,
      "threshold": 7,
      "target": "equal-given-tail"
    },
    "level": "challenge",
    "id": "section:general-probability-a:16",
    "topicId": "a3-sample-space",
    "family": "discrete-uniform-sum",
    "difficulty": 5,
    "relatedTopicIds": [
      "a3-sample-space"
    ],
    "cumulative": false
  },
  {
    "question": "5 policies have mutually independent claim indicators, each with claim probability 0.2. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.1181$",
      "$0.1756$",
      "$0.2975$",
      "$0.5904$",
      "$1.0000$"
    ],
    "answer": 1,
    "solution": [
      "The condition has probability 1-(1-0.2)^5=0.67232.",
      "The numerator requires a claim on policy 1 and at least one among the remaining 4: 0.2[1-(1-0.2)^4]=0.11808.",
      "Divide numerator by condition probability: 0.175631."
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
      "The condition has probability 1-(1-0.2)^5=0.67232."
    ],
    "verification": {
      "kind": "binomial-indicators",
      "n": 5,
      "p": 0.2,
      "target": "first-and-other-given-any"
    },
    "level": "challenge",
    "id": "section:general-probability-a:17",
    "topicId": "a4-events",
    "family": "conditional-independent",
    "difficulty": 5,
    "relatedTopicIds": [
      "a4-events"
    ],
    "cumulative": false
  },
  {
    "question": "Events A, B, C, D form a partition. P(A∪B)=0.41, P(A given A∪B)=0.585366 is specified exactly as 0.24/0.41, and P(C)=0.12. Calculate P(D given not C). Round your answer to four decimal places.",
    "choices": [
      "$0.4700$",
      "$0.5341$",
      "$0.5854$",
      "$0.6519$",
      "$0.8800$"
    ],
    "answer": 1,
    "solution": [
      "The A and B union already accounts for 0.41 of the total probability.",
      "The remaining D probability is 1-P(A∪B)-P(C)=0.47.",
      "D is contained in not C. Divide by 1-P(C): 0.47/0.88=0.534091."
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
      "The A and B union already accounts for 0.41 of the total probability."
    ],
    "verification": {
      "kind": "partition",
      "weights": [
        0.24000000000000002,
        0.16999999999999998,
        0.12000000000000001,
        0.4700000000000001
      ],
      "target": "D-given-notC"
    },
    "level": "challenge",
    "id": "section:general-probability-a:18",
    "topicId": "a5-probability-set-function",
    "family": "disjoint-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a5-probability-set-function"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.4, P(B)=0.425, and P(neither)=0.325. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2222$",
      "$0.5250$",
      "$0.5926$",
      "$0.6296$",
      "$0.7778$"
    ],
    "answer": 4,
    "solution": [
      "The union has probability 0.675. The addition rule gives P(A∩B)=0.4+0.425-0.675=0.15.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.525.",
      "Divide by the union probability to obtain 0.777778."
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
      "The union has probability 0.675. The addition rule gives P(A∩B)=0.4+0.425-0.675=0.15."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.39999999999999997,
      "b": 0.42500000000000004,
      "both": 0.15,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:19",
    "topicId": "a6-axioms-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.35, P(B)=0.4, and P(neither)=0.425. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.3043$",
      "$0.4000$",
      "$0.5750$",
      "$0.6087$",
      "$0.6957$"
    ],
    "answer": 4,
    "solution": [
      "The union has probability 0.575. The addition rule gives P(A∩B)=0.35+0.4-0.575=0.175.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.4.",
      "Divide by the union probability to obtain 0.695652."
    ],
    "feedback": {
      "0": "This gives both events conditional on the union.",
      "1": "This is the probability of exactly one before restricting to the union.",
      "2": "This gives the probability of the condition.",
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
      "The union has probability 0.575. The addition rule gives P(A∩B)=0.35+0.4-0.575=0.175."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.35,
      "b": 0.4,
      "both": 0.175,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:20",
    "topicId": "a6-axioms-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 15/44, 14/44, 15/44. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 4/44, 5/44, 3/44, and all three occur with probability 1/44. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2273$",
      "$0.5227$",
      "$0.6970$",
      "$0.7273$",
      "$0.7500$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [15+14+15-2(4+5+3)+3]/44=23/44=0.522727."
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
        11,
        7,
        8,
        3,
        8,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:21",
    "topicId": "a6-axioms-probability",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 2 red balls and 7 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.0278$",
      "$0.1250$",
      "$0.2222$",
      "$0.2500$",
      "$0.8750$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(2/9)(1/8).",
      "By symmetry, the second draw is red with probability 2/9.",
      "Dividing the joint probability by the condition probability gives (1)/(8)=0.125. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(2/9)(1/8)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 9,
      "K": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:22",
    "topicId": "a4-events",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "a4-events"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 17/46, 16/46, 13/46. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 5/46, 5/46, 3/46, and all three occur with probability 1/46. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2391$",
      "$0.5000$",
      "$0.6765$",
      "$0.7174$",
      "$0.7391$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [17+16+13-2(5+5+3)+3]/46=23/46=0.5."
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
        8,
        9,
        4,
        6,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:23",
    "topicId": "a6-axioms-probability",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 13/49, 19/49, and 18/49. The probabilities of A∩B, A∩C, and B∩C are 5/49, 5/49, and 6/49; all three occur with probability 2/49. Calculate the probability that a randomly selected customer has endorsement A but neither B nor C. Round your answer to four decimal places.",
    "choices": [
      "$0.0510$",
      "$0.1020$",
      "$0.2220$",
      "$0.5510$",
      "$0.8980$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 5/49; the exactly-two regions have total mass 10/49. Inclusion–exclusion gives the none region 13/49.",
      "The requested region or disjoint union of regions has probability 5/49=0.102041."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        13,
        5,
        10,
        3,
        9,
        3,
        4,
        2
      ],
      "target": "a-only",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:4",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 17/52, 18/52, and 22/52. The probabilities of A∩B, A∩C, and B∩C are 7/52, 7/52, and 8/52; all three occur with probability 3/52. Calculate the probability that a randomly selected customer has none of the three endorsements. Round your answer to four decimal places.",
    "choices": [
      "$0.1346$",
      "$0.2692$",
      "$0.3892$",
      "$0.6346$",
      "$0.7308$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 6/52; the exactly-two regions have total mass 13/52. Inclusion–exclusion gives the none region 14/52.",
      "The requested region or disjoint union of regions has probability 14/52=0.269231."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        14,
        6,
        6,
        4,
        10,
        4,
        5,
        3
      ],
      "target": "none",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:5",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 15/44, 16/44, 14/44. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 4/44, 5/44, 3/44, and all three occur with probability 1/44. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2273$",
      "$0.5455$",
      "$0.7059$",
      "$0.7500$",
      "$0.7727$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [15+16+14-2(4+5+3)+3]/44=24/44=0.545455."
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
        7,
        10,
        3,
        7,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:24",
    "topicId": "a6-axioms-probability",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.35, P(B)=0.425, and P(neither)=0.375. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2400$",
      "$0.4750$",
      "$0.5600$",
      "$0.6800$",
      "$0.7600$"
    ],
    "answer": 4,
    "solution": [
      "The union has probability 0.625. The addition rule gives P(A∩B)=0.35+0.425-0.625=0.15.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.475.",
      "Divide by the union probability to obtain 0.76."
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
      "The union has probability 0.625. The addition rule gives P(A∩B)=0.35+0.425-0.625=0.15."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.35,
      "b": 0.42500000000000004,
      "both": 0.15,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:25",
    "topicId": "a6-axioms-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 18/46, 15/46, 15/46. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 6/46, 5/46, 3/46, and all three occur with probability 1/46. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2609$",
      "$0.5000$",
      "$0.6571$",
      "$0.7391$",
      "$0.7609$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [18+15+15-2(6+5+3)+3]/46=23/46=0.5."
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
        11,
        8,
        7,
        5,
        8,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:26",
    "topicId": "a6-axioms-probability",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.375, P(B)=0.45, and P(neither)=0.35. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2692$",
      "$0.4750$",
      "$0.5769$",
      "$0.6923$",
      "$0.7308$"
    ],
    "answer": 4,
    "solution": [
      "The union has probability 0.65. The addition rule gives P(A∩B)=0.375+0.45-0.65=0.175.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.475.",
      "Divide by the union probability to obtain 0.730769."
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
      "The union has probability 0.65. The addition rule gives P(A∩B)=0.375+0.45-0.65=0.175."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.375,
      "b": 0.45,
      "both": 0.175,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:27",
    "topicId": "a6-axioms-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An integer-valued random variable X is uniform on 1 through 9. Given that X≥3, calculate the probability that X is even. Round your answer to four decimal places.",
    "choices": [
      "$0.3333$",
      "$0.4286$",
      "$0.4444$",
      "$0.5000$",
      "$0.5714$"
    ],
    "answer": 1,
    "solution": [
      "The condition retains the integers 3, 4, …, 9: 7 equally likely values.",
      "Exactly 3 retained integers are even. The endpoints must be counted, not approximated by half the interval.",
      "The conditional probability is 3/7=0.428571."
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
      "The condition retains the integers 3, 4, …, 9: 7 equally likely values."
    ],
    "verification": {
      "kind": "uniform-lattice",
      "n": 9,
      "lower": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:28",
    "topicId": "a3-sample-space",
    "family": "uniform-lattice-condition",
    "difficulty": 3,
    "relatedTopicIds": [
      "a3-sample-space"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.4, P(B)=0.475, and P(neither)=0.325. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2963$",
      "$0.4750$",
      "$0.5926$",
      "$0.6750$",
      "$0.7037$"
    ],
    "answer": 4,
    "solution": [
      "The union has probability 0.675. The addition rule gives P(A∩B)=0.4+0.475-0.675=0.2.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.475.",
      "Divide by the union probability to obtain 0.703704."
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
      "The union has probability 0.675. The addition rule gives P(A∩B)=0.4+0.475-0.675=0.2."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.39999999999999997,
      "b": 0.47500000000000003,
      "both": 0.2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:29",
    "topicId": "a6-axioms-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.35, P(B)=0.45, and P(neither)=0.425. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.3500$",
      "$0.3913$",
      "$0.5750$",
      "$0.6087$",
      "$0.7826$"
    ],
    "answer": 3,
    "solution": [
      "The union has probability 0.575. The addition rule gives P(A∩B)=0.35+0.45-0.575=0.225.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.35.",
      "Divide by the union probability to obtain 0.608696."
    ],
    "feedback": {
      "0": "This is the probability of exactly one before restricting to the union.",
      "1": "This gives both events conditional on the union.",
      "2": "This gives the probability of the condition.",
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
      "The union has probability 0.575. The addition rule gives P(A∩B)=0.35+0.45-0.575=0.225."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.35,
      "b": 0.45,
      "both": 0.225,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:30",
    "topicId": "a6-axioms-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 14/40, 14/40, 13/40. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 5/40, 5/40, 3/40, and all three occur with probability 1/40. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2750$",
      "$0.4500$",
      "$0.6207$",
      "$0.7000$",
      "$0.7250$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [14+14+13-2(5+5+3)+3]/40=18/40=0.45."
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
        11,
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
    "id": "section:general-probability-a:31",
    "topicId": "a6-axioms-probability",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 12/49, 17/49, and 18/49. The probabilities of A∩B, A∩C, and B∩C are 6/49, 3/49, and 5/49; all three occur with probability 1/49. Calculate the probability that a randomly selected customer has exactly two of the three endorsements. Round your answer to four decimal places.",
    "choices": [
      "$0.1122$",
      "$0.2245$",
      "$0.3445$",
      "$0.6122$",
      "$0.7755$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 4/49; the exactly-two regions have total mass 11/49. Inclusion–exclusion gives the none region 15/49.",
      "The requested region or disjoint union of regions has probability 11/49=0.22449."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        15,
        4,
        7,
        5,
        11,
        2,
        4,
        1
      ],
      "target": "two",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:6",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A homeowners portfolio offers endorsements A, B, and C. Their probabilities are 16/50, 21/50, and 15/50. The probabilities of A∩B, A∩C, and B∩C are 8/50, 5/50, and 7/50; all three occur with probability 2/50. Calculate the probability that a randomly selected customer has endorsement A but neither B nor C. Round your answer to four decimal places.",
    "choices": [
      "$0.0500$",
      "$0.1000$",
      "$0.2200$",
      "$0.5500$",
      "$0.9000$"
    ],
    "answer": 1,
    "solution": [
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection.",
      "The A-only region has mass 5/50; the exactly-two regions have total mass 14/50. Inclusion–exclusion gives the none region 16/50.",
      "The requested region or disjoint union of regions has probability 5/50=0.1."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "set operations",
      "Venn regions",
      "probability axioms"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: set operations, Venn regions, probability axioms.",
      "Split the sample space into its eight disjoint Venn regions. Each pair intersection includes the triple intersection."
    ],
    "verification": {
      "kind": "section-venn",
      "weights": [
        16,
        5,
        8,
        6,
        5,
        3,
        5,
        2
      ],
      "target": "a-only",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:7",
    "topicId": "a1-set-functions",
    "family": "cumulative-general-probability-a",
    "difficulty": 4,
    "relatedTopicIds": [
      "a1-set-functions",
      "a2-venn-diagrams",
      "a3-sample-space",
      "a4-events",
      "a5-probability-set-function",
      "a6-axioms-probability"
    ],
    "cumulative": true
  },
  {
    "question": "An insurer records P(auto coverage)=0.525, P(home coverage)=0.475, and P(both)=0.2. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.1800$",
      "$0.3713$",
      "$0.5513$",
      "$0.6213$",
      "$0.6891$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.325, home-only 0.275, both 0.2, and neither 0.2.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.325(0.55)+0.275(0.70)+0.2(0.90)=0.55125."
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
      "The disjoint class shares are auto-only 0.325, home-only 0.275, both 0.2, and neither 0.2."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.525,
      "b": 0.47500000000000003,
      "both": 0.2,
      "rates": [
        0.55,
        0.7,
        0.9
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:32",
    "topicId": "a2-venn-diagrams",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "a2-venn-diagrams"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.6, P(home coverage)=0.425, and P(both)=0.225. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2025$",
      "$0.3463$",
      "$0.5488$",
      "$0.6275$",
      "$0.6859$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.375, home-only 0.2, both 0.225, and neither 0.2.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.375(0.55)+0.2(0.70)+0.225(0.90)=0.54875."
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
      "The disjoint class shares are auto-only 0.375, home-only 0.2, both 0.225, and neither 0.2."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.6,
      "b": 0.42500000000000004,
      "both": 0.225,
      "rates": [
        0.55,
        0.7,
        0.9
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:33",
    "topicId": "a2-venn-diagrams",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "a2-venn-diagrams"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 5 senior and 6 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.1667$",
      "$0.3000$",
      "$0.4000$",
      "$0.4545$",
      "$0.5000$"
    ],
    "answer": 4,
    "solution": [
      "After including the specified senior, choose three people from the remaining 10.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(4,1)choose(6,2).",
      "Divide by choose(10,3) to obtain 0.5."
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
      "After including the specified senior, choose three people from the remaining 10."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 5,
      "J": 6,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:34",
    "topicId": "a3-sample-space",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "a3-sample-space"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 2 red balls and 6 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.0357$",
      "$0.1429$",
      "$0.2500$",
      "$0.2857$",
      "$0.8571$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(2/8)(1/7).",
      "By symmetry, the second draw is red with probability 2/8.",
      "Dividing the joint probability by the condition probability gives (1)/(7)=0.142857. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(2/8)(1/7)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 8,
      "K": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:35",
    "topicId": "a4-events",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "a4-events"
    ],
    "cumulative": false
  },
  {
    "question": "The claim count N takes values 0 through 3, with P(N=k)=c(k+1). A contract pays 100 for each claim in excess of the first 2 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$25.0000$",
      "$40.0000$",
      "$200.0000$",
      "$4000.0000$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the probabilities: c[1+2+⋯+4]=1, giving c=2/(4×5).",
      "The payment at count k is 100 max(k-2,0). Its possible values are 0, 0, 0, 100.",
      "Weight each payment by c(k+1); the expected payment is 40."
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
      "scale": 100,
      "d": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:general-probability-a:36",
    "topicId": "a5-probability-set-function",
    "family": "finite-payment-moments",
    "difficulty": 5,
    "relatedTopicIds": [
      "a5-probability-set-function"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.225, 0.3, 0.475. Their annual claim probabilities are 0.14, 0.2, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2131$",
      "$0.2400$",
      "$0.3000$",
      "$0.3340$",
      "$0.8000$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.225(0.86)+0.3(0.8)+0.475(0.6)=0.7185.",
      "The class-B and no-claim joint probability is 0.24; its ratio to 0.7185 is 0.334029."
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
        0.225,
        0.3,
        0.475
      ],
      "rates": [
        0.14,
        0.2,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-a:37",
    "topicId": "a6-axioms-probability",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "a6-axioms-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A probability set function assigns masses c, 2c, kc, and (k+1)c to four exhaustive disjoint outcomes ω1, ω2, ω3, ω4. If P({ω3} given {ω2,ω3})=4/6, calculate P({ω4}). Round your answer to four decimal places.",
    "choices": [
      "$0.0833$",
      "$0.3333$",
      "$0.3571$",
      "$0.4167$",
      "$0.4545$"
    ],
    "answer": 3,
    "solution": [
      "The conditional ratio is k/(2+k)=4/6; solving gives k=4.",
      "Normalize the four masses: c(1+2+k+k+1)=1, so c=1/12.",
      "P({ω4})=(k+1)c=5/12=0.416667."
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
      "The conditional ratio is k/(2+k)=4/6; solving gives k=4."
    ],
    "verification": {
      "kind": "four-atoms",
      "k": 4,
      "target": "last"
    },
    "level": "challenge",
    "id": "section:general-probability-a:38",
    "topicId": "a5-probability-set-function",
    "family": "atoms-normalize",
    "difficulty": 4,
    "relatedTopicIds": [
      "a5-probability-set-function"
    ],
    "cumulative": false
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=13/23, P(B)=12/23, P(C)=8/23, P(A∩B)=6/23, P(A∩C)=4/23, and P(B∩C)=3/23. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.0870$",
      "$0.1304$",
      "$0.1538$",
      "$0.2000$",
      "$0.4348$"
    ],
    "answer": 3,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/23.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 2/23. The probability of not A is 10/23.",
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/23."
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
        1
      ],
      "target": "none-given-notA"
    },
    "level": "challenge",
    "id": "section:general-probability-a:39",
    "topicId": "a2-venn-diagrams",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "a2-venn-diagrams"
    ],
    "cumulative": false
  }
];

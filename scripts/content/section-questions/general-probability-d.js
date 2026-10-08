export default [
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.046, 0.122, 0.286, respectively. Calculate the annual claim probability. Round your answer to four decimal places.",
    "choices": [
      "$0.0944$",
      "$0.1888$",
      "$0.3088$",
      "$0.5944$",
      "$0.8112$"
    ],
    "answer": 1,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.1888, and the no-claim probability is 0.8112.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.1888."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.046,
        0.122,
        0.28600000000000003
      ],
      "group": 0,
      "target": "claim",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:0",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.047, 0.124, 0.288, respectively. Calculate the probability that a policy is in class 2, given that it had no claim. Round your answer to four decimal places.",
    "choices": [
      "$0.1623$",
      "$0.3247$",
      "$0.4447$",
      "$0.6623$",
      "$0.6753$"
    ],
    "answer": 1,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.1906, and the no-claim probability is 0.8094.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.324685."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.047,
        0.124,
        0.28800000000000003
      ],
      "group": 1,
      "target": "posterior-no",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:1",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "Events A, B, C, D form a partition. P(A∪B)=0.37, P(A given A∪B)=0.594595 is specified exactly as 0.22/0.37, and P(C)=0.12. Calculate P(D given not C). Round your answer to four decimal places.",
    "choices": [
      "$0.5100$",
      "$0.5795$",
      "$0.5946$",
      "$0.7051$",
      "$0.8800$"
    ],
    "answer": 1,
    "solution": [
      "The A and B union already accounts for 0.37 of the total probability.",
      "The remaining D probability is 1-P(A∪B)-P(C)=0.51.",
      "D is contained in not C. Divide by 1-P(C): 0.51/0.88=0.579545."
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
      "The A and B union already accounts for 0.37 of the total probability."
    ],
    "verification": {
      "kind": "partition",
      "weights": [
        0.22,
        0.15,
        0.12000000000000001,
        0.51
      ],
      "target": "D-given-notC"
    },
    "level": "challenge",
    "id": "section:general-probability-d:8",
    "topicId": "d1-mutually-exclusive",
    "family": "disjoint-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.25. The overall annual claim probability is 0.1425 and the ordinary-risk claim probability is 0.09. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
    "choices": [
      "$0.0750$",
      "$0.1425$",
      "$0.2500$",
      "$0.3000$",
      "$0.5263$"
    ],
    "answer": 4,
    "solution": [
      "Let h be the high-risk claim rate. Total probability gives 0.1425=0.25h+0.75(0.09).",
      "This gives h=0.3 and joint probability P(high risk and claim)=0.075.",
      "Bayes gives 0.075/0.1425=0.526316."
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
      "Let h be the high-risk claim rate. Total probability gives 0.1425=0.25h+0.75(0.09)."
    ],
    "verification": {
      "kind": "mixture",
      "weight": 0.25,
      "rates": [
        0.3,
        0.09
      ],
      "target": "posterior"
    },
    "level": "challenge",
    "id": "section:general-probability-d:9",
    "topicId": "d2-partitions",
    "family": "partition-rate",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "For two policy features A and B, P(neither)=0.375, P(A∩B)=0.125, and P(B)-P(A)=0.15. Calculate P(not B given A). Round your answer to four decimal places.",
    "choices": [
      "$0.1750$",
      "$0.2778$",
      "$0.4167$",
      "$0.5500$",
      "$0.5833$"
    ],
    "answer": 4,
    "solution": [
      "The union probability is 1-0.375=0.625. Thus P(A)+P(B)=0.75.",
      "Combine this sum with the difference 0.15 to get P(A)=0.3 and P(B)=0.45.",
      "The A-only probability is 0.175. Divide by P(A): 0.175/0.3=0.583333."
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
      "The union probability is 1-0.375=0.625. Thus P(A)+P(B)=0.75."
    ],
    "verification": {
      "kind": "two-events",
      "a": 0.30000000000000004,
      "b": 0.44999999999999996,
      "joint": 0.125,
      "target": "notB-given-A"
    },
    "level": "challenge",
    "id": "section:general-probability-d:10",
    "topicId": "d1-mutually-exclusive",
    "family": "two-events-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.4, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.2, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0541$",
      "$0.1186$",
      "$0.1353$",
      "$0.2305$",
      "$0.4000$"
    ],
    "answer": 1,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.67032 for L.",
      "The overall likelihood is 0.456326 after weighting by the prior class shares.",
      "The H posterior is 0.054134/0.456326=0.11863."
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
      "w": 0.4,
      "rates": [
        1,
        0.2
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-d:11",
    "topicId": "d2-partitions",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 16/39, 15/39, 13/39. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 6/39, 5/39, 3/39, and all three occur with probability 1/39. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.3077$",
      "$0.4872$",
      "$0.6129$",
      "$0.7692$",
      "$0.7949$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [16+15+13-2(6+5+3)+3]/39=19/39=0.487179."
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
        6,
        7,
        5,
        6,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:12",
    "topicId": "d1-mutually-exclusive",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.275, 0.375, 0.35. Their annual claim probabilities are 0.12, 0.24, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2850$",
      "$0.3422$",
      "$0.3750$",
      "$0.3867$",
      "$0.7600$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.275(0.88)+0.375(0.76)+0.35(0.6)=0.737.",
      "The class-B and no-claim joint probability is 0.285; its ratio to 0.737 is 0.386703."
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
        0.275,
        0.375,
        0.35
      ],
      "rates": [
        0.12000000000000001,
        0.24000000000000002,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:13",
    "topicId": "d2-partitions",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.525, P(home coverage)=0.45, and P(both)=0.225. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2025$",
      "$0.3225$",
      "$0.5250$",
      "$0.6038$",
      "$0.7000$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.3, home-only 0.225, both 0.225, and neither 0.25.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.3(0.55)+0.225(0.70)+0.225(0.90)=0.525."
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
      "The disjoint class shares are auto-only 0.3, home-only 0.225, both 0.225, and neither 0.25."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.525,
      "b": 0.45,
      "both": 0.225,
      "rates": [
        0.55,
        0.7,
        0.9
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:14",
    "topicId": "d2-partitions",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.6, P(home coverage)=0.4, and P(both)=0.25. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2250$",
      "$0.2975$",
      "$0.5225$",
      "$0.6100$",
      "$0.6967$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.35, home-only 0.15, both 0.25, and neither 0.25.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.35(0.55)+0.15(0.70)+0.25(0.90)=0.5225."
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
      "The disjoint class shares are auto-only 0.35, home-only 0.15, both 0.25, and neither 0.25."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.6,
      "b": 0.4,
      "both": 0.25,
      "rates": [
        0.55,
        0.7,
        0.9
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:15",
    "topicId": "d2-partitions",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.048, 0.126, 0.29, respectively. Calculate the probability that a policy is in class 3, given that it had a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.2464$",
      "$0.3768$",
      "$0.7536$",
      "$0.8736$",
      "$0.8768$"
    ],
    "answer": 2,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.1924, and the no-claim probability is 0.8076.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.753638."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.048,
        0.126,
        0.29000000000000004
      ],
      "group": 2,
      "target": "posterior-claim",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:2",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.049, 0.128, 0.292, respectively. Calculate the annual claim probability. Round your answer to four decimal places.",
    "choices": [
      "$0.0971$",
      "$0.1942$",
      "$0.3142$",
      "$0.5971$",
      "$0.8058$"
    ],
    "answer": 1,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.1942, and the no-claim probability is 0.8058.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.1942."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.049,
        0.128,
        0.29200000000000004
      ],
      "group": 0,
      "target": "claim",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:3",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.25, 0.375, 0.375. Their annual claim probabilities are 0.1, 0.24, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2850$",
      "$0.3396$",
      "$0.3750$",
      "$0.3878$",
      "$0.7600$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.25(0.9)+0.375(0.76)+0.375(0.6)=0.735.",
      "The class-B and no-claim joint probability is 0.285; its ratio to 0.735 is 0.387755."
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
        0.25,
        0.375,
        0.375
      ],
      "rates": [
        0.1,
        0.24000000000000002,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:16",
    "topicId": "d2-partitions",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.45 at A and 0.15 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0674$",
      "$0.2000$",
      "$0.3787$",
      "$0.4286$",
      "$0.6923$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336909 for A and 0.138178 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.067382/(0.067382+0.110543)=0.378711."
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
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336909 for A and 0.138178 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.2,
      "rates": [
        0.44999999999999996,
        0.15000000000000002
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:17",
    "topicId": "d2-partitions",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Events A, B, C, D form a partition. P(A∪B)=0.42, P(A given A∪B)=0.619048 is specified exactly as 0.26/0.42, and P(C)=0.1. Calculate P(D given not C). Round your answer to four decimal places.",
    "choices": [
      "$0.4800$",
      "$0.5333$",
      "$0.6190$",
      "$0.6510$",
      "$0.9000$"
    ],
    "answer": 1,
    "solution": [
      "The A and B union already accounts for 0.42 of the total probability.",
      "The remaining D probability is 1-P(A∪B)-P(C)=0.48.",
      "D is contained in not C. Divide by 1-P(C): 0.48/0.9=0.533333."
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
        0.1,
        0.48
      ],
      "target": "D-given-notC"
    },
    "level": "challenge",
    "id": "section:general-probability-d:18",
    "topicId": "d1-mutually-exclusive",
    "family": "disjoint-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.35. The overall annual claim probability is 0.1875 and the ordinary-risk claim probability is 0.1. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
    "choices": [
      "$0.1225$",
      "$0.1875$",
      "$0.3500$",
      "$0.6533$",
      "$0.7914$"
    ],
    "answer": 3,
    "solution": [
      "Let h be the high-risk claim rate. Total probability gives 0.1875=0.35h+0.65(0.1).",
      "This gives h=0.35 and joint probability P(high risk and claim)=0.1225.",
      "Bayes gives 0.1225/0.1875=0.653333."
    ],
    "feedback": {
      "0": "This is the joint probability; divide by the overall claim probability.",
      "1": "This is the denominator of the Bayes calculation.",
      "2": "This is the class share before observing a claim.",
      "4": "Recheck the setup and the requested quantity before evaluating the formula."
    },
    "skills": [
      "infer a missing class rate",
      "total probability",
      "Bayes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a missing class rate, total probability, Bayes.",
      "Let h be the high-risk claim rate. Total probability gives 0.1875=0.35h+0.65(0.1)."
    ],
    "verification": {
      "kind": "mixture",
      "weight": 0.35,
      "rates": [
        0.35,
        0.1
      ],
      "target": "posterior"
    },
    "level": "challenge",
    "id": "section:general-probability-d:19",
    "topicId": "d2-partitions",
    "family": "partition-rate",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "For two policy features A and B, P(neither)=0.575, P(A∩B)=0.125, and P(B)-P(A)=0.15. Calculate P(not B given A). Round your answer to four decimal places.",
    "choices": [
      "$0.0750$",
      "$0.3571$",
      "$0.3750$",
      "$0.6250$",
      "$0.6500$"
    ],
    "answer": 2,
    "solution": [
      "The union probability is 1-0.575=0.425. Thus P(A)+P(B)=0.55.",
      "Combine this sum with the difference 0.15 to get P(A)=0.2 and P(B)=0.35.",
      "The A-only probability is 0.075. Divide by P(A): 0.075/0.2=0.375."
    ],
    "feedback": {
      "0": "This is a joint event; normalize by the probability of A.",
      "1": "This reverses the condition and omits the complement.",
      "3": "This gives B rather than not B conditional on A.",
      "4": "This ignores the condition A."
    },
    "skills": [
      "solve marginal probabilities",
      "conditional complement"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: solve marginal probabilities, conditional complement.",
      "The union probability is 1-0.575=0.425. Thus P(A)+P(B)=0.55."
    ],
    "verification": {
      "kind": "two-events",
      "a": 0.2,
      "b": 0.35,
      "joint": 0.125,
      "target": "notB-given-A"
    },
    "level": "challenge",
    "id": "section:general-probability-d:20",
    "topicId": "d1-mutually-exclusive",
    "family": "two-events-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.4, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.4, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0073$",
      "$0.0183$",
      "$0.0265$",
      "$0.1186$",
      "$0.4000$"
    ],
    "answer": 2,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.449329 for L.",
      "The overall likelihood is 0.276924 after weighting by the prior class shares.",
      "The H posterior is 0.007326/0.276924=0.026456."
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
      "w": 0.4,
      "rates": [
        2,
        0.4
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-d:21",
    "topicId": "d2-partitions",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 18/44, 17/44, 14/44. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 6/44, 5/44, 3/44, and all three occur with probability 1/44. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2727$",
      "$0.5455$",
      "$0.6667$",
      "$0.7955$",
      "$0.8182$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [18+17+14-2(6+5+3)+3]/44=24/44=0.545455."
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
        9,
        5,
        7,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:22",
    "topicId": "d1-mutually-exclusive",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.275, 0.325, 0.4. Their annual claim probabilities are 0.12, 0.22, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2535$",
      "$0.2703$",
      "$0.3250$",
      "$0.3447$",
      "$0.7800$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.275(0.88)+0.325(0.78)+0.4(0.6)=0.7355.",
      "The class-B and no-claim joint probability is 0.2535; its ratio to 0.7355 is 0.344663."
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
        0.275,
        0.325,
        0.3999999999999999
      ],
      "rates": [
        0.12000000000000001,
        0.22,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:23",
    "topicId": "d2-partitions",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.05, 0.13, 0.294, respectively. Calculate the probability that a policy is in class 2, given that it had no claim. Round your answer to four decimal places.",
    "choices": [
      "$0.1623$",
      "$0.3246$",
      "$0.4446$",
      "$0.6623$",
      "$0.6754$"
    ],
    "answer": 1,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.196, and the no-claim probability is 0.804.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.324627."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.05,
        0.13,
        0.29400000000000004
      ],
      "group": 1,
      "target": "posterior-no",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:4",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.051, 0.132, 0.296, respectively. Calculate the probability that a policy is in class 3, given that it had a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.2518$",
      "$0.3741$",
      "$0.7482$",
      "$0.8682$",
      "$0.8741$"
    ],
    "answer": 2,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.1978, and the no-claim probability is 0.8022.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.748231."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.051000000000000004,
        0.132,
        0.29600000000000004
      ],
      "group": 2,
      "target": "posterior-claim",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:5",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "An insurer records P(auto coverage)=0.55, P(home coverage)=0.45, and P(both)=0.225. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2025$",
      "$0.3363$",
      "$0.5388$",
      "$0.6175$",
      "$0.6952$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.325, home-only 0.225, both 0.225, and neither 0.225.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.325(0.55)+0.225(0.70)+0.225(0.90)=0.53875."
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
      "The disjoint class shares are auto-only 0.325, home-only 0.225, both 0.225, and neither 0.225."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.55,
      "b": 0.45,
      "both": 0.225,
      "rates": [
        0.55,
        0.7,
        0.9
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:24",
    "topicId": "d2-partitions",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.6, P(home coverage)=0.45, and P(both)=0.2. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.1800$",
      "$0.3950$",
      "$0.5750$",
      "$0.6450$",
      "$0.6765$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.4, home-only 0.25, both 0.2, and neither 0.15.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.4(0.55)+0.25(0.70)+0.2(0.90)=0.575."
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
      "The disjoint class shares are auto-only 0.4, home-only 0.25, both 0.2, and neither 0.15."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.6,
      "b": 0.45,
      "both": 0.2,
      "rates": [
        0.55,
        0.7,
        0.9
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:25",
    "topicId": "d2-partitions",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.25, 0.325, 0.425. Their annual claim probabilities are 0.1, 0.22, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2535$",
      "$0.2683$",
      "$0.3250$",
      "$0.3456$",
      "$0.7800$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.25(0.9)+0.325(0.78)+0.425(0.6)=0.7335.",
      "The class-B and no-claim joint probability is 0.2535; its ratio to 0.7335 is 0.345603."
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
        0.25,
        0.325,
        0.42500000000000004
      ],
      "rates": [
        0.1,
        0.22,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:26",
    "topicId": "d2-partitions",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.125 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0673$",
      "$0.2000$",
      "$0.4118$",
      "$0.4455$",
      "$0.6622$"
    ],
    "answer": 3,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336416 for A and 0.104675 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.067283/(0.067283+0.08374)=0.445515."
    ],
    "feedback": {
      "0": "This omits the total likelihood in the denominator.",
      "1": "This is the prior before observing the sample.",
      "2": "This updates using one defective item rather than the entire sample.",
      "4": "This omits the observed nondefective items."
    },
    "skills": [
      "conditional binomial likelihood",
      "Bayes over sample evidence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336416 for A and 0.104675 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.2,
      "rates": [
        0.35,
        0.125
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:27",
    "topicId": "d2-partitions",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Events A, B, C, D form a partition. P(A∪B)=0.38, P(A given A∪B)=0.578947 is specified exactly as 0.22/0.38, and P(C)=0.12. Calculate P(D given not C). Round your answer to four decimal places.",
    "choices": [
      "$0.5000$",
      "$0.5682$",
      "$0.5789$",
      "$0.6918$",
      "$0.8800$"
    ],
    "answer": 1,
    "solution": [
      "The A and B union already accounts for 0.38 of the total probability.",
      "The remaining D probability is 1-P(A∪B)-P(C)=0.5.",
      "D is contained in not C. Divide by 1-P(C): 0.5/0.88=0.568182."
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
      "The A and B union already accounts for 0.38 of the total probability."
    ],
    "verification": {
      "kind": "partition",
      "weights": [
        0.22,
        0.16,
        0.12000000000000001,
        0.5
      ],
      "target": "D-given-notC"
    },
    "level": "challenge",
    "id": "section:general-probability-d:28",
    "topicId": "d1-mutually-exclusive",
    "family": "disjoint-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.25. The overall annual claim probability is 0.135 and the ordinary-risk claim probability is 0.08. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
    "choices": [
      "$0.0750$",
      "$0.1350$",
      "$0.2500$",
      "$0.3000$",
      "$0.5556$"
    ],
    "answer": 4,
    "solution": [
      "Let h be the high-risk claim rate. Total probability gives 0.135=0.25h+0.75(0.08).",
      "This gives h=0.3 and joint probability P(high risk and claim)=0.075.",
      "Bayes gives 0.075/0.135=0.555556."
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
      "Let h be the high-risk claim rate. Total probability gives 0.135=0.25h+0.75(0.08)."
    ],
    "verification": {
      "kind": "mixture",
      "weight": 0.25,
      "rates": [
        0.3,
        0.08
      ],
      "target": "posterior"
    },
    "level": "challenge",
    "id": "section:general-probability-d:29",
    "topicId": "d2-partitions",
    "family": "partition-rate",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "For two policy features A and B, P(neither)=0.525, P(A∩B)=0.125, and P(B)-P(A)=0.2. Calculate P(not B given A). Round your answer to four decimal places.",
    "choices": [
      "$0.0750$",
      "$0.3125$",
      "$0.3750$",
      "$0.6000$",
      "$0.6250$"
    ],
    "answer": 2,
    "solution": [
      "The union probability is 1-0.525=0.475. Thus P(A)+P(B)=0.6.",
      "Combine this sum with the difference 0.2 to get P(A)=0.2 and P(B)=0.4.",
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
      "The union probability is 1-0.525=0.475. Thus P(A)+P(B)=0.6."
    ],
    "verification": {
      "kind": "two-events",
      "a": 0.2,
      "b": 0.39999999999999997,
      "joint": 0.125,
      "target": "notB-given-A"
    },
    "level": "challenge",
    "id": "section:general-probability-d:30",
    "topicId": "d1-mutually-exclusive",
    "family": "two-events-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.3, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.2, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0055$",
      "$0.0116$",
      "$0.0183$",
      "$0.0662$",
      "$0.3000$"
    ],
    "answer": 1,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.67032 for L.",
      "The overall likelihood is 0.474719 after weighting by the prior class shares.",
      "The H posterior is 0.005495/0.474719=0.011575."
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
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.67032 for L."
    ],
    "verification": {
      "kind": "poisson-mixture",
      "w": 0.3,
      "rates": [
        2,
        0.2
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-d:31",
    "topicId": "d2-partitions",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.052, 0.134, 0.298, respectively. Calculate the annual claim probability. Round your answer to four decimal places.",
    "choices": [
      "$0.0998$",
      "$0.1996$",
      "$0.3196$",
      "$0.5998$",
      "$0.8004$"
    ],
    "answer": 1,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.1996, and the no-claim probability is 0.8004.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.1996."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.052000000000000005,
        0.134,
        0.29800000000000004
      ],
      "group": 0,
      "target": "claim",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:6",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "Every insured belongs to exactly one of three exhaustive risk classes. Their portfolio proportions are 0.20, 0.30, and 0.50. Their annual claim probabilities are 0.053, 0.136, 0.3, respectively. Calculate the probability that a policy is in class 2, given that it had no claim. Round your answer to four decimal places.",
    "choices": [
      "$0.1623$",
      "$0.3246$",
      "$0.4446$",
      "$0.6623$",
      "$0.6754$"
    ],
    "answer": 1,
    "solution": [
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates.",
      "The total claim probability is 0.2014, and the no-claim probability is 0.7986.",
      "For a conditional class probability, divide that class’s appropriate joint probability by the probability of the observed event. The requested value is 0.324568."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mutually exclusive classes",
      "partition",
      "total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mutually exclusive classes, partition, total probability.",
      "The classes form an exhaustive mutually exclusive partition, so sum the class-weighted claim rates."
    ],
    "verification": {
      "kind": "section-partition",
      "weights": [
        0.2,
        0.3,
        0.5
      ],
      "rates": [
        0.053000000000000005,
        0.136,
        0.30000000000000004
      ],
      "group": 1,
      "target": "posterior-no",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:7",
    "topicId": "d1-mutually-exclusive",
    "family": "cumulative-general-probability-d",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive",
      "d2-partitions"
    ],
    "cumulative": true
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 14/38, 14/38, 13/38. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 4/38, 5/38, 3/38, and all three occur with probability 1/38. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2632$",
      "$0.5263$",
      "$0.6667$",
      "$0.7632$",
      "$0.7895$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [14+14+13-2(4+5+3)+3]/38=20/38=0.526316."
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
        6,
        8,
        3,
        6,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:32",
    "topicId": "d1-mutually-exclusive",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.275, 0.375, 0.35. Their annual claim probabilities are 0.1, 0.2, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.3000$",
      "$0.3093$",
      "$0.3750$",
      "$0.3960$",
      "$0.8000$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.275(0.9)+0.375(0.8)+0.35(0.6)=0.7575.",
      "The class-B and no-claim joint probability is 0.3; its ratio to 0.7575 is 0.39604."
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
        0.275,
        0.375,
        0.35
      ],
      "rates": [
        0.1,
        0.2,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:33",
    "topicId": "d2-partitions",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.525, P(home coverage)=0.45, and P(both)=0.25. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2250$",
      "$0.2913$",
      "$0.5162$",
      "$0.6038$",
      "$0.7121$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.275, home-only 0.2, both 0.25, and neither 0.275.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.275(0.55)+0.2(0.70)+0.25(0.90)=0.51625."
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
      "The disjoint class shares are auto-only 0.275, home-only 0.2, both 0.25, and neither 0.275."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.525,
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
    "id": "section:general-probability-d:34",
    "topicId": "d2-partitions",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.6, P(home coverage)=0.4, and P(both)=0.275. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2475$",
      "$0.2662$",
      "$0.5138$",
      "$0.6100$",
      "$0.7086$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.325, home-only 0.125, both 0.275, and neither 0.275.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.325(0.55)+0.125(0.70)+0.275(0.90)=0.51375."
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
      "The disjoint class shares are auto-only 0.325, home-only 0.125, both 0.275, and neither 0.275."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.6,
      "b": 0.4,
      "both": 0.275,
      "rates": [
        0.55,
        0.7,
        0.9
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:35",
    "topicId": "d2-partitions",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.25, 0.375, 0.375. Their annual claim probabilities are 0.14, 0.24, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2850$",
      "$0.3273$",
      "$0.3750$",
      "$0.3931$",
      "$0.7600$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.25(0.86)+0.375(0.76)+0.375(0.6)=0.725.",
      "The class-B and no-claim joint probability is 0.285; its ratio to 0.725 is 0.393103."
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
        0.25,
        0.375,
        0.375
      ],
      "rates": [
        0.14,
        0.24000000000000002,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:36",
    "topicId": "d2-partitions",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.125 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0864$",
      "$0.2500$",
      "$0.5161$",
      "$0.5239$",
      "$0.7734$"
    ],
    "answer": 3,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.3456 for A and 0.104675 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.0864/(0.0864+0.078506)=0.523933."
    ],
    "feedback": {
      "0": "This omits the total likelihood in the denominator.",
      "1": "This is the prior before observing the sample.",
      "2": "This updates using one defective item rather than the entire sample.",
      "4": "This omits the observed nondefective items."
    },
    "skills": [
      "conditional binomial likelihood",
      "Bayes over sample evidence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.3456 for A and 0.104675 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.25,
      "rates": [
        0.39999999999999997,
        0.125
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-d:37",
    "topicId": "d2-partitions",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  },
  {
    "question": "Events A, B, C, D form a partition. P(A∪B)=0.43, P(A given A∪B)=0.604651 is specified exactly as 0.26/0.43, and P(C)=0.1. Calculate P(D given not C). Round your answer to four decimal places.",
    "choices": [
      "$0.4700$",
      "$0.5222$",
      "$0.6047$",
      "$0.6380$",
      "$0.9000$"
    ],
    "answer": 1,
    "solution": [
      "The A and B union already accounts for 0.43 of the total probability.",
      "The remaining D probability is 1-P(A∪B)-P(C)=0.47.",
      "D is contained in not C. Divide by 1-P(C): 0.47/0.9=0.522222."
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
      "The A and B union already accounts for 0.43 of the total probability."
    ],
    "verification": {
      "kind": "partition",
      "weights": [
        0.26,
        0.16999999999999998,
        0.1,
        0.4700000000000001
      ],
      "target": "D-given-notC"
    },
    "level": "challenge",
    "id": "section:general-probability-d:38",
    "topicId": "d1-mutually-exclusive",
    "family": "disjoint-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "d1-mutually-exclusive"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.3. The overall annual claim probability is 0.153 and the ordinary-risk claim probability is 0.09. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
    "choices": [
      "$0.0900$",
      "$0.1530$",
      "$0.3000$",
      "$0.5882$",
      "$0.7152$"
    ],
    "answer": 3,
    "solution": [
      "Let h be the high-risk claim rate. Total probability gives 0.153=0.3h+0.7(0.09).",
      "This gives h=0.3 and joint probability P(high risk and claim)=0.09.",
      "Bayes gives 0.09/0.153=0.588235."
    ],
    "feedback": {
      "0": "This is the joint probability; divide by the overall claim probability.",
      "1": "This is the denominator of the Bayes calculation.",
      "2": "This is the class share before observing a claim.",
      "4": "Recheck the setup and the requested quantity before evaluating the formula."
    },
    "skills": [
      "infer a missing class rate",
      "total probability",
      "Bayes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a missing class rate, total probability, Bayes.",
      "Let h be the high-risk claim rate. Total probability gives 0.153=0.3h+0.7(0.09)."
    ],
    "verification": {
      "kind": "mixture",
      "weight": 0.3,
      "rates": [
        0.3,
        0.09
      ],
      "target": "posterior"
    },
    "level": "challenge",
    "id": "section:general-probability-d:39",
    "topicId": "d2-partitions",
    "family": "partition-rate",
    "difficulty": 5,
    "relatedTopicIds": [
      "d2-partitions"
    ],
    "cumulative": false
  }
];

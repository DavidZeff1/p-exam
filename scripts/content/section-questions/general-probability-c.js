export default [
  {
    "question": "Four components operate mutually independently with probabilities 0.62, 0.72, 0.75, 0.81, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the expected number of operating components. Round your answer to four decimal places.",
    "choices": [
      "$1.6946$",
      "$2.7113$",
      "$3.3892$",
      "$4.0670$",
      "$6.7783$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.69687.",
      "Within these operating patterns, the requested numerator is 2.361798. Divide by 0.69687 to obtain 3.389151."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.6200000000000001,
        0.72,
        0.75,
        0.81
      ],
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:general-probability-c:0",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "Four components operate mutually independently with probabilities 0.63, 0.72, 0.76, 0.815, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2332$",
      "$0.3834$",
      "$0.7668$",
      "$0.8834$",
      "$0.8868$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.70773.",
      "Within these operating patterns, the requested numerator is 0.542722. Divide by 0.70773 to obtain 0.766849."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.63,
        0.72,
        0.76,
        0.8150000000000001
      ],
      "target": "first",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:1",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "A portfolio has a fraction 0.25 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.1 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.1875$",
      "$0.2674$",
      "$0.4500$",
      "$0.6000$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.2475 for H and 0.09 for L.",
      "Weight these by the prior shares; the total history probability is 0.129375.",
      "Weight the next-year claim rates by those posterior shares: [0.061875(0.45)+0.0675(0.1)]/0.129375=0.267391."
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
      "The observed history likelihoods are 0.2475 for H and 0.09 for L."
    ],
    "verification": {
      "kind": "latent-history",
      "w": 0.25,
      "rates": [
        0.45,
        0.1
      ],
      "history": [
        1,
        0
      ],
      "target": "next"
    },
    "level": "challenge",
    "id": "section:general-probability-c:8",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "6 policies have mutually independent claim indicators, each with claim probability 0.3. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.2496$",
      "$0.2829$",
      "$0.3400$",
      "$0.3579$",
      "$0.8319$"
    ],
    "answer": 1,
    "solution": [
      "The condition has probability 1-(1-0.3)^6=0.882351.",
      "The numerator requires a claim on policy 1 and at least one among the remaining 5: 0.3[1-(1-0.3)^5]=0.249579.",
      "Divide numerator by condition probability: 0.282857."
    ],
    "feedback": {
      "0": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
      "2": "The numerator includes both policy 1 and another policy; the denominator restricts to the stated at-least-one population.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
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
      "The condition has probability 1-(1-0.3)^6=0.882351."
    ],
    "verification": {
      "kind": "binomial-indicators",
      "n": 6,
      "p": 0.30000000000000004,
      "target": "first-and-other-given-any"
    },
    "level": "challenge",
    "id": "section:general-probability-c:9",
    "topicId": "c2-independent-trials",
    "family": "conditional-independent",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.35 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.1 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.2400$",
      "$0.3397$",
      "$0.5000$",
      "$0.7292$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.25 for H and 0.09 for L.",
      "Weight these by the prior shares; the total history probability is 0.146.",
      "Weight the next-year claim rates by those posterior shares: [0.0875(0.5)+0.0585(0.1)]/0.146=0.339726."
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
      "w": 0.35,
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
    "id": "section:general-probability-c:10",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.3 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.15 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1500$",
      "$0.2550$",
      "$0.3098$",
      "$0.5000$",
      "$0.5882$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.25 for H and 0.1275 for L.",
      "Weight these by the prior shares; the total history probability is 0.16425.",
      "Weight the next-year claim rates by those posterior shares: [0.075(0.5)+0.08925(0.15)]/0.16425=0.309817."
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
      "w": 0.3,
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
    "id": "section:general-probability-c:11",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.65, 0.7, and 0.8. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2429$",
      "$0.4511$",
      "$0.6110$",
      "$0.6500$",
      "$0.7571$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.807.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.65[1-(1-0.7)(1-0.8)]=0.611.",
      "The requested ratio is 0.611/0.807=0.757125."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.807."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.65,
        0.7,
        0.8
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:12",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.6, 0.775, and 0.8. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.3021$",
      "$0.4531$",
      "$0.5730$",
      "$0.6000$",
      "$0.6979$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.821.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.6[1-(1-0.775)(1-0.8)]=0.573.",
      "The requested ratio is 0.573/0.821=0.697929."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.821."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.6,
        0.7749999999999999,
        0.8
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:13",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 6 and 5 years. A device fails when either component fails. Given that the device has survived 3 years, calculate the probability it survives at least another 3 years. Round your answer to four decimal places.",
    "choices": [
      "$0.1108$",
      "$0.3329$",
      "$0.6065$",
      "$0.6671$",
      "$0.7613$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/6+1/5. It is memoryless.",
      "Conditional survival for another 3 years is exp[-3(1/6+1/5)]=0.332871."
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
        6,
        5
      ],
      "t": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:14",
    "topicId": "c1-independent-events",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.45 at A and 0.15 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0535$",
      "$0.2500$",
      "$0.2539$",
      "$0.5000$",
      "$0.7500$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.214022 for A and 0.209651 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.053505/(0.053505+0.157238)=0.253889."
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
      "w": 0.25,
      "rates": [
        0.44999999999999996,
        0.15000000000000002
      ],
      "n": 7,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:15",
    "topicId": "c2-independent-trials",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Four components operate mutually independently with probabilities 0.64, 0.73, 0.76, 0.82, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the probability that exactly three components operate. Round your answer to four decimal places.",
    "choices": [
      "$0.2974$",
      "$0.4052$",
      "$0.5948$",
      "$0.7148$",
      "$0.7974$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.718483.",
      "Within these operating patterns, the requested numerator is 0.427324. Divide by 0.718483 to obtain 0.594759."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.64,
        0.73,
        0.76,
        0.8200000000000001
      ],
      "target": "exact-three",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:2",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "Four components operate mutually independently with probabilities 0.65, 0.73, 0.76, 0.825, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the expected number of operating components. Round your answer to four decimal places.",
    "choices": [
      "$1.7052$",
      "$2.7284$",
      "$3.4105$",
      "$4.0926$",
      "$6.8209$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.724808.",
      "Within these operating patterns, the requested numerator is 2.471936. Divide by 0.724808 to obtain 3.410469."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.65,
        0.73,
        0.76,
        0.8250000000000001
      ],
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:general-probability-c:3",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "6 policies have mutually independent claim indicators, each with claim probability 0.2. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.1345$",
      "$0.1822$",
      "$0.2402$",
      "$0.2711$",
      "$0.6723$"
    ],
    "answer": 1,
    "solution": [
      "The condition has probability 1-(1-0.2)^6=0.737856.",
      "The numerator requires a claim on policy 1 and at least one among the remaining 5: 0.2[1-(1-0.2)^5]=0.134464.",
      "Divide numerator by condition probability: 0.182236."
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
      "The condition has probability 1-(1-0.2)^6=0.737856."
    ],
    "verification": {
      "kind": "binomial-indicators",
      "n": 6,
      "p": 0.2,
      "target": "first-and-other-given-any"
    },
    "level": "challenge",
    "id": "section:general-probability-c:16",
    "topicId": "c2-independent-trials",
    "family": "conditional-independent",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials succeed with probability 0.3. T is the trial number of the 4th success. Given that trial 1 failed, calculate P(T=8). Round your answer to four decimal places.",
    "choices": [
      "$0.0389$",
      "$0.0556$",
      "$0.0595$",
      "$0.0681$",
      "$0.1852$"
    ],
    "answer": 1,
    "solution": [
      "Trial 8 must succeed, and among trials 2 through 7 there must be exactly 3 successes.",
      "The first failure is given, so it contributes no probability factor after conditioning. There are choose(6,3) admissible success-position sets.",
      "The conditional probability is choose(6,3)(0.3)^4(0.7)^3=0.055566."
    ],
    "feedback": {
      "0": "This retains the factor for the first failure even though that failure is already given.",
      "2": "This allows all required successes before the final trial.",
      "3": "This is the unconditional negative-binomial probability.",
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
      "Trial 8 must succeed, and among trials 2 through 7 there must be exactly 3 successes."
    ],
    "verification": {
      "kind": "negative-first-failure",
      "r": 4,
      "t": 8,
      "p": 0.3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:17",
    "topicId": "c2-independent-trials",
    "family": "negative-binomial-first-failure",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.3 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.125 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1250$",
      "$0.2375$",
      "$0.3106$",
      "$0.5000$",
      "$0.6316$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.25 for H and 0.109375 for L.",
      "Weight these by the prior shares; the total history probability is 0.151562.",
      "Weight the next-year claim rates by those posterior shares: [0.075(0.5)+0.076562(0.125)]/0.151562=0.310567."
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
      "w": 0.3,
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
    "id": "section:general-probability-c:18",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "4 policies have mutually independent claim indicators, each with claim probability 0.3. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.1971$",
      "$0.2594$",
      "$0.3305$",
      "$0.3948$",
      "$0.6570$"
    ],
    "answer": 1,
    "solution": [
      "The condition has probability 1-(1-0.3)^4=0.7599.",
      "The numerator requires a claim on policy 1 and at least one among the remaining 3: 0.3[1-(1-0.3)^3]=0.1971.",
      "Divide numerator by condition probability: 0.259376."
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
      "The condition has probability 1-(1-0.3)^4=0.7599."
    ],
    "verification": {
      "kind": "binomial-indicators",
      "n": 4,
      "p": 0.30000000000000004,
      "target": "first-and-other-given-any"
    },
    "level": "challenge",
    "id": "section:general-probability-c:19",
    "topicId": "c2-independent-trials",
    "family": "conditional-independent",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.3 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.125 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1250$",
      "$0.2225$",
      "$0.2850$",
      "$0.4500$",
      "$0.6067$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.2475 for H and 0.109375 for L.",
      "Weight these by the prior shares; the total history probability is 0.150813.",
      "Weight the next-year claim rates by those posterior shares: [0.07425(0.45)+0.076562(0.125)]/0.150813=0.285008."
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
      "w": 0.3,
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
    "id": "section:general-probability-c:20",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.35 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.15 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1500$",
      "$0.2725$",
      "$0.3298$",
      "$0.5000$",
      "$0.6422$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.25 for H and 0.1275 for L.",
      "Weight these by the prior shares; the total history probability is 0.170375.",
      "Weight the next-year claim rates by those posterior shares: [0.0875(0.5)+0.082875(0.15)]/0.170375=0.329751."
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
      "w": 0.35,
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
    "id": "section:general-probability-c:21",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.65, 0.75, and 0.85. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2629$",
      "$0.4882$",
      "$0.6256$",
      "$0.6500$",
      "$0.7371$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.84875.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.65[1-(1-0.75)(1-0.85)]=0.625625.",
      "The requested ratio is 0.625625/0.84875=0.737113."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.84875."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.65,
        0.75,
        0.8500000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:22",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.6, 0.725, and 0.875. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.3046$",
      "$0.4569$",
      "$0.5794$",
      "$0.6000$",
      "$0.6954$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.833125.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.6[1-(1-0.725)(1-0.875)]=0.579375.",
      "The requested ratio is 0.579375/0.833125=0.695424."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.833125."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.6,
        0.725,
        0.875
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:23",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Four components operate mutually independently with probabilities 0.55, 0.65, 0.77, 0.83, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2861$",
      "$0.3570$",
      "$0.7139$",
      "$0.8339$",
      "$0.8570$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.653485.",
      "Within these operating patterns, the requested numerator is 0.466549. Divide by 0.653485 to obtain 0.713939."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.55,
        0.65,
        0.77,
        0.8300000000000001
      ],
      "target": "first",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:4",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "Four components operate mutually independently with probabilities 0.56, 0.65, 0.77, 0.835, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the probability that exactly three components operate. Round your answer to four decimal places.",
    "choices": [
      "$0.3227$",
      "$0.3545$",
      "$0.6455$",
      "$0.7655$",
      "$0.8227$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.660088.",
      "Within these operating patterns, the requested numerator is 0.426054. Divide by 0.660088 to obtain 0.645451."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.56,
        0.65,
        0.77,
        0.8350000000000001
      ],
      "target": "exact-three",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:5",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "Two independent components have exponential lifetimes with means 6 and 6 years. A device fails when either component fails. Given that the device has survived 4 years, calculate the probability it survives at least another 4 years. Round your answer to four decimal places.",
    "choices": [
      "$0.0695$",
      "$0.2636$",
      "$0.5134$",
      "$0.7165$",
      "$0.7364$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/6+1/6. It is memoryless.",
      "Conditional survival for another 4 years is exp[-4(1/6+1/6)]=0.263597."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "2": "Both components must survive, not just component 1.",
      "3": "Means do not add for a minimum lifetime; failure rates add.",
      "4": "This gives failure during the additional interval."
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
        6
      ],
      "t": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:24",
    "topicId": "c1-independent-events",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.125 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0746$",
      "$0.2500$",
      "$0.3715$",
      "$0.4828$",
      "$0.7232$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.168298 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.074621/(0.074621+0.126224)=0.371536."
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
      "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.168298 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.25,
      "rates": [
        0.35,
        0.125
      ],
      "n": 7,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:25",
    "topicId": "c2-independent-trials",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "4 policies have mutually independent claim indicators, each with claim probability 0.15. Given that at least one policy has a claim, calculate the probability policy 1 has a claim and at least one other policy has a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0579$",
      "$0.1211$",
      "$0.3138$",
      "$0.3859$",
      "$0.6000$"
    ],
    "answer": 1,
    "solution": [
      "The condition has probability 1-(1-0.15)^4=0.477994.",
      "The numerator requires a claim on policy 1 and at least one among the remaining 3: 0.15[1-(1-0.15)^3]=0.057881.",
      "Divide numerator by condition probability: 0.121092."
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
      "The condition has probability 1-(1-0.15)^4=0.477994."
    ],
    "verification": {
      "kind": "binomial-indicators",
      "n": 4,
      "p": 0.15,
      "target": "first-and-other-given-any"
    },
    "level": "challenge",
    "id": "section:general-probability-c:26",
    "topicId": "c2-independent-trials",
    "family": "conditional-independent",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials succeed with probability 0.3. T is the trial number of the 4th success. Given that trial 1 failed, calculate P(T=9). Round your answer to four decimal places.",
    "choices": [
      "$0.0476$",
      "$0.0681$",
      "$0.0762$",
      "$0.0972$",
      "$0.2269$"
    ],
    "answer": 1,
    "solution": [
      "Trial 9 must succeed, and among trials 2 through 8 there must be exactly 3 successes.",
      "The first failure is given, so it contributes no probability factor after conditioning. There are choose(7,3) admissible success-position sets.",
      "The conditional probability is choose(7,3)(0.3)^4(0.7)^4=0.068068."
    ],
    "feedback": {
      "0": "This retains the factor for the first failure even though that failure is already given.",
      "2": "This is the unconditional negative-binomial probability.",
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
      "p": 0.3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:27",
    "topicId": "c2-independent-trials",
    "family": "negative-binomial-first-failure",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.25 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.15 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1500$",
      "$0.2250$",
      "$0.2679$",
      "$0.4500$",
      "$0.5000$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.2475 for H and 0.1275 for L.",
      "Weight these by the prior shares; the total history probability is 0.1575.",
      "Weight the next-year claim rates by those posterior shares: [0.061875(0.45)+0.095625(0.15)]/0.1575=0.267857."
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
      "w": 0.25,
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
    "id": "section:general-probability-c:28",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.35 of type H and the remainder type L. Annual claim probabilities are 0.5 for H and 0.125 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1250$",
      "$0.2562$",
      "$0.3319$",
      "$0.5000$",
      "$0.6829$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.25 for H and 0.109375 for L.",
      "Weight these by the prior shares; the total history probability is 0.158594.",
      "Weight the next-year claim rates by those posterior shares: [0.0875(0.5)+0.071094(0.125)]/0.158594=0.331897."
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
      "w": 0.35,
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
    "id": "section:general-probability-c:29",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.3 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.1 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.2050$",
      "$0.2893$",
      "$0.4500$",
      "$0.6585$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.2475 for H and 0.09 for L.",
      "Weight these by the prior shares; the total history probability is 0.13725.",
      "Weight the next-year claim rates by those posterior shares: [0.07425(0.45)+0.063(0.1)]/0.13725=0.289344."
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
      "The observed history likelihoods are 0.2475 for H and 0.09 for L."
    ],
    "verification": {
      "kind": "latent-history",
      "w": 0.3,
      "rates": [
        0.45,
        0.1
      ],
      "history": [
        1,
        0
      ],
      "target": "next"
    },
    "level": "challenge",
    "id": "section:general-probability-c:30",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio has a fraction 0.35 of type H and the remainder type L. Annual claim probabilities are 0.45 for H and 0.1 for L. Years are independent conditional on type, but the type is fixed for each insured. An insured had a claim in year 1 and no claim in year 2. Calculate the probability of a claim in year 3. Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.2225$",
      "$0.3089$",
      "$0.4500$",
      "$0.7079$"
    ],
    "answer": 2,
    "solution": [
      "The observed history likelihoods are 0.2475 for H and 0.09 for L.",
      "Weight these by the prior shares; the total history probability is 0.145125.",
      "Weight the next-year claim rates by those posterior shares: [0.086625(0.45)+0.0585(0.1)]/0.145125=0.308915."
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
      "The observed history likelihoods are 0.2475 for H and 0.09 for L."
    ],
    "verification": {
      "kind": "latent-history",
      "w": 0.35,
      "rates": [
        0.45,
        0.1
      ],
      "history": [
        1,
        0
      ],
      "target": "next"
    },
    "level": "challenge",
    "id": "section:general-probability-c:31",
    "topicId": "c2-independent-trials",
    "family": "latent-two-years",
    "difficulty": 6,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Four components operate mutually independently with probabilities 0.57, 0.66, 0.77, 0.84, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the expected number of operating components. Round your answer to four decimal places.",
    "choices": [
      "$1.6812$",
      "$2.6900$",
      "$3.3625$",
      "$4.0350$",
      "$6.7250$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.671268.",
      "Within these operating patterns, the requested numerator is 2.257129. Divide by 0.671268 to obtain 3.362488."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.5700000000000001,
        0.66,
        0.77,
        0.8400000000000001
      ],
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:general-probability-c:6",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "Four components operate mutually independently with probabilities 0.58, 0.66, 0.78, 0.845, respectively. A backup system operates when at least three components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2677$",
      "$0.3661$",
      "$0.7323$",
      "$0.8523$",
      "$0.8661$"
    ],
    "answer": 2,
    "solution": [
      "Use independence to multiply success and failure probabilities for each possible component pattern.",
      "Add the four exactly-three patterns and the all-four pattern. The system operating probability is 0.682424.",
      "Within these operating patterns, the requested numerator is 0.499721. Divide by 0.682424 to obtain 0.732274."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent trials",
      "addition of disjoint patterns",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent trials, addition of disjoint patterns, conditioning.",
      "Use independence to multiply success and failure probabilities for each possible component pattern."
    ],
    "verification": {
      "kind": "section-reliability",
      "ps": [
        0.5800000000000001,
        0.66,
        0.78,
        0.8450000000000001
      ],
      "target": "first",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:7",
    "topicId": "c1-independent-events",
    "family": "cumulative-general-probability-c",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events",
      "c2-independent-trials"
    ],
    "cumulative": true
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.65, 0.7, and 0.825. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2471$",
      "$0.4589$",
      "$0.6159$",
      "$0.6500$",
      "$0.7529$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.818.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.65[1-(1-0.7)(1-0.825)]=0.615875.",
      "The requested ratio is 0.615875/0.818=0.752903."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.818."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.65,
        0.7,
        0.8250000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:32",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.6, 0.775, and 0.825. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.3073$",
      "$0.4610$",
      "$0.5764$",
      "$0.6000$",
      "$0.6927$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.832125.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.6[1-(1-0.775)(1-0.825)]=0.576375.",
      "The requested ratio is 0.576375/0.832125=0.692654."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.832125."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.6,
        0.7749999999999999,
        0.8250000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:33",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 6 and 7 years. A device fails when either component fails. Given that the device has survived 5 years, calculate the probability it survives at least another 5 years. Round your answer to four decimal places.",
    "choices": [
      "$0.0453$",
      "$0.2128$",
      "$0.4346$",
      "$0.6807$",
      "$0.7872$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/6+1/7. It is memoryless.",
      "Conditional survival for another 5 years is exp[-5(1/6+1/7)]=0.212754."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "2": "Both components must survive, not just component 1.",
      "3": "Means do not add for a minimum lifetime; failure rates add.",
      "4": "This gives failure during the additional interval."
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
        7
      ],
      "t": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:34",
    "topicId": "c1-independent-events",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "c1-independent-events"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.15 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0778$",
      "$0.2500$",
      "$0.3705$",
      "$0.4706$",
      "$0.7033$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.176177 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.07776/(0.07776+0.132133)=0.370475."
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
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.176177 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.25,
      "rates": [
        0.39999999999999997,
        0.15000000000000002
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:35",
    "topicId": "c2-independent-trials",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.625, 0.775, and 0.85. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2903$",
      "$0.4838$",
      "$0.6039$",
      "$0.6250$",
      "$0.7097$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.850938.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.625[1-(1-0.775)(1-0.85)]=0.603906.",
      "The requested ratio is 0.603906/0.850938=0.709695."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.850938."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.625,
        0.7749999999999999,
        0.8500000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:36",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials succeed with probability 0.3. T is the trial number of the 4th success. Given that trial 1 failed, calculate P(T=10). Round your answer to four decimal places.",
    "choices": [
      "$0.0534$",
      "$0.0762$",
      "$0.0800$",
      "$0.1361$",
      "$0.2541$"
    ],
    "answer": 1,
    "solution": [
      "Trial 10 must succeed, and among trials 2 through 9 there must be exactly 3 successes.",
      "The first failure is given, so it contributes no probability factor after conditioning. There are choose(8,3) admissible success-position sets.",
      "The conditional probability is choose(8,3)(0.3)^4(0.7)^5=0.076237."
    ],
    "feedback": {
      "0": "This retains the factor for the first failure even though that failure is already given.",
      "2": "This is the unconditional negative-binomial probability.",
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
      "p": 0.3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:37",
    "topicId": "c2-independent-trials",
    "family": "negative-binomial-first-failure",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.6, 0.7, and 0.825. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2889$",
      "$0.4334$",
      "$0.5685$",
      "$0.6000$",
      "$0.7111$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.7995.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.6[1-(1-0.7)(1-0.825)]=0.5685.",
      "The requested ratio is 0.5685/0.7995=0.711069."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.7995."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.6,
        0.7,
        0.8250000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:38",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.675, 0.75, and 0.825. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2375$",
      "$0.4934$",
      "$0.6455$",
      "$0.6750$",
      "$0.7625$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.846563.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.675[1-(1-0.75)(1-0.825)]=0.645469.",
      "The requested ratio is 0.645469/0.846563=0.762458."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.846563."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.675,
        0.75,
        0.8250000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-c:39",
    "topicId": "c2-independent-trials",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "c2-independent-trials"
    ],
    "cumulative": false
  }
];

export default [
  {
    "question": "A claim is fraudulent with probability 0.03. A screening test flags a fraudulent claim with probability 0.775 and a legitimate claim with probability 0.09. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability test 2 does not flag the claim, given that test 1 flags it. Round your answer to four decimal places.",
    "choices": [
      "$0.2341$",
      "$0.3830$",
      "$0.7659$",
      "$0.8830$",
      "$0.8859$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.084674. Bayes gives fraud probability 0.061781 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.765936."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.03,
      "s": 0.775,
      "t": 0.09,
      "target": "second-negative",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:0",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A claim is fraudulent with probability 0.031. A screening test flags a fraudulent claim with probability 0.78 and a legitimate claim with probability 0.092. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability the claim is fraudulent, given that test 1 flags it and test 2 does not. Round your answer to four decimal places.",
    "choices": [
      "$0.0308$",
      "$0.0617$",
      "$0.1817$",
      "$0.5308$",
      "$0.9383$"
    ],
    "answer": 1,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.086266. Bayes gives fraud probability 0.061665 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.061665."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.031,
      "s": 0.78,
      "t": 0.092,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:1",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=15/28, P(B)=15/28, P(C)=9/28, P(A∩B)=7/28, P(A∩C)=5/28, and P(B∩C)=4/28. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.1071$",
      "$0.1786$",
      "$0.2000$",
      "$0.2308$",
      "$0.4643$"
    ],
    "answer": 3,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/28.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 3/28. The probability of not A is 13/28.",
      "None is contained in not A, so the requested conditional probability is 0.230769."
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/28."
    ],
    "verification": {
      "kind": "atoms",
      "weights": [
        3,
        5,
        6,
        5,
        2,
        3,
        2,
        2
      ],
      "target": "none-given-notA"
    },
    "level": "challenge",
    "id": "section:general-probability-f:8",
    "topicId": "f1-conditional-probability",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A fraud screen flags a fraction 0.8 of fraudulent claims. Fraud prevalence is 0.1. Of flagged claims, the fraud fraction is specified exactly as 0.08/(0.08+0.045). Calculate the flag probability for a legitimate claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0450$",
      "$0.0500$",
      "$0.0800$",
      "$0.1250$",
      "$0.6400$"
    ],
    "answer": 1,
    "solution": [
      "The joint fraud-and-flag probability is 0.08.",
      "Use the supplied posterior fraction to recover total flag probability 0.125.",
      "Subtract the fraud contribution and divide by P(legitimate): 0.045/0.9=0.05."
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
      "The joint fraud-and-flag probability is 0.08."
    ],
    "verification": {
      "kind": "screen",
      "prior": 0.1,
      "sensitivity": 0.8,
      "falsePositive": 0.05,
      "target": "infer-fp"
    },
    "level": "challenge",
    "id": "section:general-probability-f:9",
    "topicId": "f2-bayes-theorem",
    "family": "screen-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "f2-bayes-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.3. The overall annual claim probability is 0.146 and the ordinary-risk claim probability is 0.08. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
    "choices": [
      "$0.0900$",
      "$0.1460$",
      "$0.3000$",
      "$0.6164$",
      "$0.7482$"
    ],
    "answer": 3,
    "solution": [
      "Let h be the high-risk claim rate. Total probability gives 0.146=0.3h+0.7(0.08).",
      "This gives h=0.3 and joint probability P(high risk and claim)=0.09.",
      "Bayes gives 0.09/0.146=0.616438."
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
      "Let h be the high-risk claim rate. Total probability gives 0.146=0.3h+0.7(0.08)."
    ],
    "verification": {
      "kind": "mixture",
      "weight": 0.3,
      "rates": [
        0.3,
        0.08
      ],
      "target": "posterior"
    },
    "level": "challenge",
    "id": "section:general-probability-f:10",
    "topicId": "f3-law-total-probability",
    "family": "partition-rate",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 2 red balls and 5 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.0476$",
      "$0.1667$",
      "$0.2857$",
      "$0.3333$",
      "$0.8333$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(2/7)(1/6).",
      "By symmetry, the second draw is red with probability 2/7.",
      "Dividing the joint probability by the condition probability gives (1)/(6)=0.166667. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(2/7)(1/6)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 7,
      "K": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:11",
    "topicId": "f1-conditional-probability",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.45 at A and 0.1 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0695$",
      "$0.2500$",
      "$0.4849$",
      "$0.6000$",
      "$0.8710$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.27795 for A and 0.098415 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.069488/(0.069488+0.073811)=0.484914."
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
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.27795 for A and 0.098415 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.25,
      "rates": [
        0.44999999999999996,
        0.1
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:12",
    "topicId": "f3-law-total-probability",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.4, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.3, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0541$",
      "$0.1353$",
      "$0.1412$",
      "$0.2487$",
      "$0.4000$"
    ],
    "answer": 2,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.548812 for L.",
      "The overall likelihood is 0.383421 after weighting by the prior class shares.",
      "The H posterior is 0.054134/0.383421=0.141187."
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
      "w": 0.4,
      "rates": [
        1,
        0.30000000000000004
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-f:13",
    "topicId": "f3-law-total-probability",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 3 red balls and 8 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.0545$",
      "$0.2000$",
      "$0.2727$",
      "$0.3000$",
      "$0.8000$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(3/11)(2/10).",
      "By symmetry, the second draw is red with probability 3/11.",
      "Dividing the joint probability by the condition probability gives (2)/(10)=0.2. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(3/11)(2/10)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 11,
      "K": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:14",
    "topicId": "f1-conditional-probability",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.15 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0691$",
      "$0.2000$",
      "$0.3847$",
      "$0.4000$",
      "$0.6400$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.3456 for A and 0.138178 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.06912/(0.06912+0.110543)=0.384721."
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
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.3456 for A and 0.138178 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.2,
      "rates": [
        0.39999999999999997,
        0.15000000000000002
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:15",
    "topicId": "f3-law-total-probability",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim is fraudulent with probability 0.032. A screening test flags a fraudulent claim with probability 0.785 and a legitimate claim with probability 0.094. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability test 3 flags the claim, given that test 1 flags it and test 2 does not. Round your answer to four decimal places.",
    "choices": [
      "$0.0682$",
      "$0.1365$",
      "$0.2565$",
      "$0.5682$",
      "$0.8635$"
    ],
    "answer": 1,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.08784. Bayes gives fraud probability 0.061485 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.136486."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.032,
      "s": 0.785,
      "t": 0.094,
      "target": "next",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:2",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A claim is fraudulent with probability 0.033. A screening test flags a fraudulent claim with probability 0.79 and a legitimate claim with probability 0.096. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability test 2 does not flag the claim, given that test 1 flags it. Round your answer to four decimal places.",
    "choices": [
      "$0.2482$",
      "$0.3759$",
      "$0.7518$",
      "$0.8718$",
      "$0.8759$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.089395. Bayes gives fraud probability 0.061242 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.751836."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.033,
      "s": 0.79,
      "t": 0.096,
      "target": "second-negative",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:3",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "An insurer records P(auto coverage)=0.575, P(home coverage)=0.4, and P(both)=0.275. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2475$",
      "$0.2525$",
      "$0.5000$",
      "$0.5962$",
      "$0.7143$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.3, home-only 0.125, both 0.275, and neither 0.3.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.3(0.55)+0.125(0.70)+0.275(0.90)=0.5."
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
      "The disjoint class shares are auto-only 0.3, home-only 0.125, both 0.275, and neither 0.3."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.575,
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
    "id": "section:general-probability-f:16",
    "topicId": "f3-law-total-probability",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.375, P(B)=0.475, and P(neither)=0.375. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.3600$",
      "$0.4000$",
      "$0.6000$",
      "$0.6400$",
      "$0.7600$"
    ],
    "answer": 3,
    "solution": [
      "The union has probability 0.625. The addition rule gives P(A∩B)=0.375+0.475-0.625=0.225.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.4.",
      "Divide by the union probability to obtain 0.64."
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
      "The union has probability 0.625. The addition rule gives P(A∩B)=0.375+0.475-0.625=0.225."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.375,
      "b": 0.47500000000000003,
      "both": 0.225,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:17",
    "topicId": "f1-conditional-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.3, 0.325, 0.375. Their annual claim probabilities are 0.12, 0.24, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2470$",
      "$0.2955$",
      "$0.3250$",
      "$0.3356$",
      "$0.7600$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.3(0.88)+0.325(0.76)+0.375(0.6)=0.736.",
      "The class-B and no-claim joint probability is 0.247; its ratio to 0.736 is 0.335598."
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
        0.325,
        0.375
      ],
      "rates": [
        0.12000000000000001,
        0.24000000000000002,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:18",
    "topicId": "f3-law-total-probability",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.25, 0.3, 0.45. Their annual claim probabilities are 0.12, 0.24, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2280$",
      "$0.2553$",
      "$0.3000$",
      "$0.3175$",
      "$0.7600$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.25(0.88)+0.3(0.76)+0.45(0.6)=0.718.",
      "The class-B and no-claim joint probability is 0.228; its ratio to 0.718 is 0.317549."
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
        0.3,
        0.44999999999999996
      ],
      "rates": [
        0.12000000000000001,
        0.24000000000000002,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:19",
    "topicId": "f3-law-total-probability",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.625, 0.725, and 0.875. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2827$",
      "$0.4712$",
      "$0.6035$",
      "$0.6250$",
      "$0.7173$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.841406.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.625[1-(1-0.725)(1-0.875)]=0.603516.",
      "The requested ratio is 0.603516/0.841406=0.71727."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.841406."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.625,
        0.725,
        0.875
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:20",
    "topicId": "f1-conditional-probability",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.5, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.3, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0092$",
      "$0.0183$",
      "$0.0323$",
      "$0.1545$",
      "$0.5000$"
    ],
    "answer": 2,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.548812 for L.",
      "The overall likelihood is 0.283564 after weighting by the prior class shares.",
      "The H posterior is 0.009158/0.283564=0.032295."
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
      "w": 0.5,
      "rates": [
        2,
        0.30000000000000004
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-f:21",
    "topicId": "f3-law-total-probability",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.15 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0841$",
      "$0.2500$",
      "$0.4375$",
      "$0.4480$",
      "$0.6447$"
    ],
    "answer": 3,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336416 for A and 0.138178 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.084104/(0.084104+0.103634)=0.447987."
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
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336416 for A and 0.138178 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.25,
      "rates": [
        0.35,
        0.15000000000000002
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:22",
    "topicId": "f3-law-total-probability",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=15/29, P(B)=15/29, P(C)=9/29, P(A∩B)=7/29, P(A∩C)=5/29, and P(B∩C)=4/29. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.1379$",
      "$0.2069$",
      "$0.2667$",
      "$0.2857$",
      "$0.4828$"
    ],
    "answer": 3,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/29.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 4/29. The probability of not A is 14/29.",
      "None is contained in not A, so the requested conditional probability is 0.285714."
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/29."
    ],
    "verification": {
      "kind": "atoms",
      "weights": [
        4,
        5,
        6,
        5,
        2,
        3,
        2,
        2
      ],
      "target": "none-given-notA"
    },
    "level": "challenge",
    "id": "section:general-probability-f:23",
    "topicId": "f1-conditional-probability",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim is fraudulent with probability 0.034. A screening test flags a fraudulent claim with probability 0.795 and a legitimate claim with probability 0.098. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability the claim is fraudulent, given that test 1 flags it and test 2 does not. Round your answer to four decimal places.",
    "choices": [
      "$0.0305$",
      "$0.0609$",
      "$0.1809$",
      "$0.5305$",
      "$0.9391$"
    ],
    "answer": 1,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.090932. Bayes gives fraud probability 0.060938 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.060938."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.034,
      "s": 0.795,
      "t": 0.098,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:4",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A claim is fraudulent with probability 0.035. A screening test flags a fraudulent claim with probability 0.8 and a legitimate claim with probability 0.1. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability test 3 flags the claim, given that test 1 flags it and test 2 does not. Round your answer to four decimal places.",
    "choices": [
      "$0.0712$",
      "$0.1424$",
      "$0.2624$",
      "$0.5712$",
      "$0.8576$"
    ],
    "answer": 1,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.09245. Bayes gives fraud probability 0.060573 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.142401."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.035,
      "s": 0.8,
      "t": 0.1,
      "target": "next",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:5",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A fraud screen flags a fraction 0.85 of fraudulent claims. Fraud prevalence is 0.1. Of flagged claims, the fraud fraction is specified exactly as 0.085/(0.085+0.045). Calculate the flag probability for a legitimate claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0450$",
      "$0.0500$",
      "$0.0850$",
      "$0.1300$",
      "$0.6538$"
    ],
    "answer": 1,
    "solution": [
      "The joint fraud-and-flag probability is 0.085.",
      "Use the supplied posterior fraction to recover total flag probability 0.13.",
      "Subtract the fraud contribution and divide by P(legitimate): 0.045/0.9=0.05."
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
      "falsePositive": 0.05,
      "target": "infer-fp"
    },
    "level": "challenge",
    "id": "section:general-probability-f:24",
    "topicId": "f2-bayes-theorem",
    "family": "screen-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "f2-bayes-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer has high-risk and ordinary-risk classes, which partition its portfolio. The high-risk share is 0.25. The overall annual claim probability is 0.1475 and the ordinary-risk claim probability is 0.08. Given that a selected insured made a claim, calculate the probability the insured is high risk. Round your answer to four decimal places.",
    "choices": [
      "$0.0875$",
      "$0.1475$",
      "$0.2500$",
      "$0.3500$",
      "$0.5932$"
    ],
    "answer": 4,
    "solution": [
      "Let h be the high-risk claim rate. Total probability gives 0.1475=0.25h+0.75(0.08).",
      "This gives h=0.35 and joint probability P(high risk and claim)=0.0875.",
      "Bayes gives 0.0875/0.1475=0.59322."
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
      "Let h be the high-risk claim rate. Total probability gives 0.1475=0.25h+0.75(0.08)."
    ],
    "verification": {
      "kind": "mixture",
      "weight": 0.25,
      "rates": [
        0.35,
        0.08
      ],
      "target": "posterior"
    },
    "level": "challenge",
    "id": "section:general-probability-f:25",
    "topicId": "f3-law-total-probability",
    "family": "partition-rate",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 3 red balls and 7 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.0667$",
      "$0.2222$",
      "$0.3000$",
      "$0.3333$",
      "$0.7778$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(3/10)(2/9).",
      "By symmetry, the second draw is red with probability 3/10.",
      "Dividing the joint probability by the condition probability gives (2)/(9)=0.222222. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(3/10)(2/9)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 10,
      "K": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:26",
    "topicId": "f1-conditional-probability",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.45 at A and 0.15 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0695$",
      "$0.2500$",
      "$0.3446$",
      "$0.5000$",
      "$0.7500$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.27795 for A and 0.176177 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.069488/(0.069488+0.132133)=0.344645."
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
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.27795 for A and 0.176177 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.25,
      "rates": [
        0.44999999999999996,
        0.15000000000000002
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:27",
    "topicId": "f3-law-total-probability",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.3, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.3, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0055$",
      "$0.0141$",
      "$0.0183$",
      "$0.0726$",
      "$0.3000$"
    ],
    "answer": 1,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.548812 for L.",
      "The overall likelihood is 0.389663 after weighting by the prior class shares.",
      "The H posterior is 0.005495/0.389663=0.014101."
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
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.548812 for L."
    ],
    "verification": {
      "kind": "poisson-mixture",
      "w": 0.3,
      "rates": [
        2,
        0.30000000000000004
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-f:28",
    "topicId": "f3-law-total-probability",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 4 red balls and 8 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.0909$",
      "$0.2727$",
      "$0.3333$",
      "$0.3636$",
      "$0.7273$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(4/12)(3/11).",
      "By symmetry, the second draw is red with probability 4/12.",
      "Dividing the joint probability by the condition probability gives (3)/(11)=0.272727. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(4/12)(3/11)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 12,
      "K": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:29",
    "topicId": "f1-conditional-probability",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.125 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0622$",
      "$0.2000$",
      "$0.3614$",
      "$0.4444$",
      "$0.7191$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.137386 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.062208/(0.062208+0.109909)=0.361428."
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
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.137386 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.2,
      "rates": [
        0.39999999999999997,
        0.125
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:30",
    "topicId": "f3-law-total-probability",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.575, P(home coverage)=0.475, and P(both)=0.2. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.1800$",
      "$0.3987$",
      "$0.5787$",
      "$0.6487$",
      "$0.6809$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.375, home-only 0.275, both 0.2, and neither 0.15.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.375(0.55)+0.275(0.70)+0.2(0.90)=0.57875."
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
      "The disjoint class shares are auto-only 0.375, home-only 0.275, both 0.2, and neither 0.15."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.575,
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
    "id": "section:general-probability-f:31",
    "topicId": "f3-law-total-probability",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A claim is fraudulent with probability 0.036. A screening test flags a fraudulent claim with probability 0.805 and a legitimate claim with probability 0.102. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability test 2 does not flag the claim, given that test 1 flags it. Round your answer to four decimal places.",
    "choices": [
      "$0.2620$",
      "$0.3690$",
      "$0.7380$",
      "$0.8580$",
      "$0.8690$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.09395. Bayes gives fraud probability 0.06015 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.737971."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.036000000000000004,
      "s": 0.805,
      "t": 0.10200000000000001,
      "target": "second-negative",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:6",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A claim is fraudulent with probability 0.037. A screening test flags a fraudulent claim with probability 0.81 and a legitimate claim with probability 0.104. Repeated tests are independent conditional on the claim’s fixed fraud status. Calculate the probability the claim is fraudulent, given that test 1 flags it and test 2 does not. Round your answer to four decimal places.",
    "choices": [
      "$0.0298$",
      "$0.0597$",
      "$0.1797$",
      "$0.5298$",
      "$0.9403$"
    ],
    "answer": 1,
    "solution": [
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement.",
      "The total positive-then-negative probability is 0.09543. Bayes gives fraud probability 0.05967 after that history.",
      "For another test, weight its two flag rates by the posterior class probabilities; for one-test conditioning use the first-test flag probability in the denominator. The requested result is 0.05967."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional probability",
      "Bayes",
      "posterior total probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional probability, Bayes, posterior total probability.",
      "Conditional on fraud status, the positive-then-negative likelihood is the flag rate times its complement."
    ],
    "verification": {
      "kind": "section-screens",
      "p": 0.037000000000000005,
      "s": 0.81,
      "t": 0.10400000000000001,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:7",
    "topicId": "f1-conditional-probability",
    "family": "cumulative-general-probability-f",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability",
      "f2-bayes-theorem",
      "f3-law-total-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.4, P(B)=0.4, and P(neither)=0.425. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.3500$",
      "$0.3913$",
      "$0.5750$",
      "$0.6087$",
      "$0.6957$"
    ],
    "answer": 3,
    "solution": [
      "The union has probability 0.575. The addition rule gives P(A∩B)=0.4+0.4-0.575=0.225.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.35.",
      "Divide by the union probability to obtain 0.608696."
    ],
    "feedback": {
      "0": "This is the probability of exactly one before restricting to the union.",
      "1": "This gives both events conditional on the union.",
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
      "The union has probability 0.575. The addition rule gives P(A∩B)=0.4+0.4-0.575=0.225."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.39999999999999997,
      "b": 0.4,
      "both": 0.225,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:32",
    "topicId": "f1-conditional-probability",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.3, 0.3, 0.4. Their annual claim probabilities are 0.14, 0.2, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2290$",
      "$0.2400$",
      "$0.3000$",
      "$0.3252$",
      "$0.8000$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.3(0.86)+0.3(0.8)+0.4(0.6)=0.738.",
      "The class-B and no-claim joint probability is 0.24; its ratio to 0.738 is 0.325203."
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
        0.30000000000000004,
        0.3,
        0.3999999999999999
      ],
      "rates": [
        0.14,
        0.2,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:33",
    "topicId": "f3-law-total-probability",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio consists of classes A, B, C in proportions 0.25, 0.375, 0.375. Their annual claim probabilities are 0.12, 0.2, 0.4, respectively. A randomly selected policy has no claim this year. Calculate the probability it belongs to class B. Round your answer to four decimal places.",
    "choices": [
      "$0.2941$",
      "$0.3000$",
      "$0.3750$",
      "$0.4027$",
      "$0.8000$"
    ],
    "answer": 3,
    "solution": [
      "Use no-claim probabilities within each class, the complements of the supplied claim probabilities.",
      "Total no-claim probability is 0.25(0.88)+0.375(0.8)+0.375(0.6)=0.745.",
      "The class-B and no-claim joint probability is 0.3; its ratio to 0.745 is 0.402685."
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
        0.25,
        0.375,
        0.375
      ],
      "rates": [
        0.12000000000000001,
        0.2,
        0.4
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:34",
    "topicId": "f3-law-total-probability",
    "family": "three-class-survival",
    "difficulty": 4,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.6, 0.75, and 0.875. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.3111$",
      "$0.4667$",
      "$0.5812$",
      "$0.6000$",
      "$0.6889$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.84375.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.6[1-(1-0.75)(1-0.875)]=0.58125.",
      "The requested ratio is 0.58125/0.84375=0.688889."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.84375."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.6,
        0.75,
        0.875
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:35",
    "topicId": "f1-conditional-probability",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.4, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.4, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0541$",
      "$0.1353$",
      "$0.1672$",
      "$0.2679$",
      "$0.4000$"
    ],
    "answer": 2,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.449329 for L.",
      "The overall likelihood is 0.323731 after weighting by the prior class shares.",
      "The H posterior is 0.054134/0.323731=0.167219."
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
      "w": 0.4,
      "rates": [
        1,
        0.4
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-f:36",
    "topicId": "f3-law-total-probability",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.25, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.125 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0820$",
      "$0.2500$",
      "$0.4432$",
      "$0.4828$",
      "$0.7232$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.328005 for A and 0.137386 for B.",
      "Weight the likelihoods by plant shares 0.25 and 0.75.",
      "Bayes gives 0.082001/(0.082001+0.10304)=0.443152."
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
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.328005 for A and 0.137386 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.25,
      "rates": [
        0.35,
        0.125
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-f:37",
    "topicId": "f3-law-total-probability",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "f3-law-total-probability"
    ],
    "cumulative": false
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=14/28, P(B)=14/28, P(C)=8/28, P(A∩B)=6/28, P(A∩C)=4/28, and P(B∩C)=3/28. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.1429$",
      "$0.1786$",
      "$0.2857$",
      "$0.3613$",
      "$0.5000$"
    ],
    "answer": 2,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/28.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 4/28. The probability of not A is 14/28.",
      "None is contained in not A, so the requested conditional probability is 0.285714."
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/28."
    ],
    "verification": {
      "kind": "atoms",
      "weights": [
        4,
        5,
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
    "id": "section:general-probability-f:38",
    "topicId": "f1-conditional-probability",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "f1-conditional-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A fraud screen flags a fraction 0.75 of fraudulent claims. Fraud prevalence is 0.1. Of flagged claims, the fraud fraction is specified exactly as 0.075/(0.075+0.045). Calculate the flag probability for a legitimate claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0450$",
      "$0.0500$",
      "$0.0750$",
      "$0.1200$",
      "$0.6250$"
    ],
    "answer": 1,
    "solution": [
      "The joint fraud-and-flag probability is 0.075.",
      "Use the supplied posterior fraction to recover total flag probability 0.12.",
      "Subtract the fraud contribution and divide by P(legitimate): 0.045/0.9=0.05."
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
      "The joint fraud-and-flag probability is 0.075."
    ],
    "verification": {
      "kind": "screen",
      "prior": 0.1,
      "sensitivity": 0.75,
      "falsePositive": 0.05,
      "target": "infer-fp"
    },
    "level": "challenge",
    "id": "section:general-probability-f:39",
    "topicId": "f2-bayes-theorem",
    "family": "screen-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "f2-bayes-theorem"
    ],
    "cumulative": false
  }
];

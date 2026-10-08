export default [
  {
    "question": "A batch comes from office H with probability 0.48, otherwise from office L. Each batch has 16 files. H batches contain exactly 4 error files; L batches contain exactly 1. Two files are sampled in order without replacement. Calculate the probability that at least one sampled file has an error. Round your answer to four decimal places.",
    "choices": [
      "$0.1405$",
      "$0.2810$",
      "$0.4010$",
      "$0.6405$",
      "$0.7190$"
    ],
    "answer": 1,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.05 and 0.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.45 and 0.125.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.024. The requested value is 0.281."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.05 and 0."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 16,
      "K": [
        4,
        1
      ],
      "w": 0.48,
      "target": "some",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:0",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "A batch comes from office H with probability 0.49, otherwise from office L. Each batch has 17 files. H batches contain exactly 5 error files; L batches contain exactly 2. Two files are sampled in order without replacement. Calculate the probability that office H supplied the batch, given that both sampled files have errors. Round your answer to four decimal places.",
    "choices": [
      "$0.0943$",
      "$0.4529$",
      "$0.9057$",
      "$0.9529$",
      "$0.9900$"
    ],
    "answer": 2,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.073529 and 0.007353.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.514706 and 0.227941.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.039779. The requested value is 0.90573."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.073529 and 0.007353."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 17,
      "K": [
        5,
        2
      ],
      "w": 0.49,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:1",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=14/28, P(B)=15/28, P(C)=9/28, P(A∩B)=7/28, P(A∩C)=5/28, and P(B∩C)=4/28. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.1429$",
      "$0.2143$",
      "$0.2857$",
      "$0.3613$",
      "$0.5000$"
    ],
    "answer": 2,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/28.",
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/28."
    ],
    "verification": {
      "kind": "atoms",
      "weights": [
        4,
        4,
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
    "id": "section:general-probability-e:8",
    "topicId": "e1-addition-rule",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "A box contains 3 damaged and 4 sound components. Three are inspected in order without replacement. Calculate the probability the first is damaged and the other two are sound. Round your answer to four decimal places.",
    "choices": [
      "$0.1399$",
      "$0.1714$",
      "$0.2276$",
      "$0.4286$",
      "$0.5143$"
    ],
    "answer": 1,
    "solution": [
      "The first-stage damaged probability is 3/7.",
      "After removing a damaged component there are 4 sound components out of 6; after removing a sound component there are 3 out of 5.",
      "Multiply conditional stage probabilities: (3/7)(4/6)(3/5)=0.171429."
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
      "The first-stage damaged probability is 3/7."
    ],
    "verification": {
      "kind": "draw-sequence",
      "N": 7,
      "K": 3,
      "pattern": [
        1,
        0,
        0
      ]
    },
    "level": "challenge",
    "id": "section:general-probability-e:9",
    "topicId": "e2-multiplication-rule",
    "family": "replacement-pattern",
    "difficulty": 3,
    "relatedTopicIds": [
      "e2-multiplication-rule"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.5, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 1 and 0.2, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0677$",
      "$0.1353$",
      "$0.1680$",
      "$0.3100$",
      "$0.5000$"
    ],
    "answer": 2,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.67032 for L.",
      "The overall likelihood is 0.402828 after weighting by the prior class shares.",
      "The H posterior is 0.067668/0.402828=0.167982."
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
      "No claims in both years has probability exp(-2λ), giving 0.135335 for H and 0.67032 for L."
    ],
    "verification": {
      "kind": "poisson-mixture",
      "w": 0.5,
      "rates": [
        1,
        0.2
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-e:10",
    "topicId": "e3-combined-problems",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "For two policy features A and B, P(neither)=0.55, P(A∩B)=0.1, and P(B)-P(A)=0.15. Calculate P(not B given A). Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.2857$",
      "$0.5000$",
      "$0.6120$",
      "$0.6500$"
    ],
    "answer": 2,
    "solution": [
      "The union probability is 1-0.55=0.45. Thus P(A)+P(B)=0.55.",
      "Combine this sum with the difference 0.15 to get P(A)=0.2 and P(B)=0.35.",
      "The A-only probability is 0.1. Divide by P(A): 0.1/0.2=0.5."
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
      "The union probability is 1-0.55=0.45. Thus P(A)+P(B)=0.55."
    ],
    "verification": {
      "kind": "two-events",
      "a": 0.2,
      "b": 0.35,
      "joint": 0.1,
      "target": "notB-given-A"
    },
    "level": "challenge",
    "id": "section:general-probability-e:11",
    "topicId": "e1-addition-rule",
    "family": "two-events-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 4 red balls and 7 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.1091$",
      "$0.3000$",
      "$0.3636$",
      "$0.4000$",
      "$0.7000$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(4/11)(3/10).",
      "By symmetry, the second draw is red with probability 4/11.",
      "Dividing the joint probability by the condition probability gives (3)/(10)=0.3. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(4/11)(3/10)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 11,
      "K": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:12",
    "topicId": "e2-multiplication-rule",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "e2-multiplication-rule"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.3, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.125 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.1037$",
      "$0.3000$",
      "$0.5783$",
      "$0.5859$",
      "$0.8144$"
    ],
    "answer": 3,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.3456 for A and 0.104675 for B.",
      "Weight the likelihoods by plant shares 0.3 and 0.7.",
      "Bayes gives 0.10368/(0.10368+0.073273)=0.585919."
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
      "w": 0.30000000000000004,
      "rates": [
        0.39999999999999997,
        0.125
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:13",
    "topicId": "e3-combined-problems",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 17/46, 16/46, 14/46. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 6/46, 5/46, 3/46, and all three occur with probability 1/46. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2609$",
      "$0.4783$",
      "$0.6471$",
      "$0.7174$",
      "$0.7391$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [17+16+14-2(6+5+3)+3]/46=22/46=0.478261."
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
        7,
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
    "id": "section:general-probability-e:14",
    "topicId": "e1-addition-rule",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 4 red balls and 4 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.2143$",
      "$0.3750$",
      "$0.4286$",
      "$0.5000$",
      "$0.5714$"
    ],
    "answer": 2,
    "solution": [
      "P(first red and second red)=(4/8)(3/7).",
      "By symmetry, the second draw is red with probability 4/8.",
      "Dividing the joint probability by the condition probability gives (3)/(7)=0.428571. Conditioning on a later draw still changes the earlier draw distribution."
    ],
    "feedback": {
      "0": "This is the joint probability; it needs a conditional denominator.",
      "1": "The conditional population has one fewer ball.",
      "3": "This is the first-draw probability before observing the second draw.",
      "4": "The observed red ball must be removed from the red count as well as the population count."
    },
    "skills": [
      "ordered sample space",
      "reverse conditioning",
      "without replacement"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: ordered sample space, reverse conditioning, without replacement.",
      "P(first red and second red)=(4/8)(3/7)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 8,
      "K": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:15",
    "topicId": "e2-multiplication-rule",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "e2-multiplication-rule"
    ],
    "cumulative": false
  },
  {
    "question": "A batch comes from office H with probability 0.35, otherwise from office L. Each batch has 18 files. H batches contain exactly 3 error files; L batches contain exactly 1. Two files are sampled in order without replacement. Calculate the probability that both sampled files have errors. Round your answer to four decimal places.",
    "choices": [
      "$0.0034$",
      "$0.0069$",
      "$0.1269$",
      "$0.5034$",
      "$0.9931$"
    ],
    "answer": 1,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.019608 and 0.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.313725 and 0.111111.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.006863. The requested value is 0.006863."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.019608 and 0."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 18,
      "K": [
        3,
        1
      ],
      "w": 0.35,
      "target": "both",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:2",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "A batch comes from office H with probability 0.36, otherwise from office L. Each batch has 19 files. H batches contain exactly 4 error files; L batches contain exactly 2. Two files are sampled in order without replacement. Calculate the probability that at least one sampled file has an error. Round your answer to four decimal places.",
    "choices": [
      "$0.1350$",
      "$0.2699$",
      "$0.3899$",
      "$0.6350$",
      "$0.7301$"
    ],
    "answer": 1,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.035088 and 0.005848.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.385965 and 0.204678.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.016374. The requested value is 0.269942."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.035088 and 0.005848."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 19,
      "K": [
        4,
        2
      ],
      "w": 0.36,
      "target": "some",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:3",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.125 at B. Exactly two of 7 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0597$",
      "$0.2000$",
      "$0.3072$",
      "$0.4118$",
      "$0.6622$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(7,2)p²(1-p)^(5), giving 0.298485 for A and 0.168298 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.059697/(0.059697+0.134639)=0.307185."
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
      "w": 0.2,
      "rates": [
        0.35,
        0.125
      ],
      "n": 7,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:16",
    "topicId": "e3-combined-problems",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.425, P(B)=0.45, and P(neither)=0.35. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.3462$",
      "$0.4250$",
      "$0.6500$",
      "$0.6538$",
      "$0.6923$"
    ],
    "answer": 3,
    "solution": [
      "The union has probability 0.65. The addition rule gives P(A∩B)=0.425+0.45-0.65=0.225.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.425.",
      "Divide by the union probability to obtain 0.653846."
    ],
    "feedback": {
      "0": "This gives both events conditional on the union.",
      "1": "This is the probability of exactly one before restricting to the union.",
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
      "The union has probability 0.65. The addition rule gives P(A∩B)=0.425+0.45-0.65=0.225."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.425,
      "b": 0.45,
      "both": 0.225,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:17",
    "topicId": "e1-addition-rule",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.625, 0.725, and 0.8. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2691$",
      "$0.4486$",
      "$0.5906$",
      "$0.6250$",
      "$0.7309$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.808125.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.625[1-(1-0.725)(1-0.8)]=0.590625.",
      "The requested ratio is 0.590625/0.808125=0.730858."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.808125."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.625,
        0.725,
        0.8
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:18",
    "topicId": "e3-combined-problems",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.6, P(home coverage)=0.475, and P(both)=0.2. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.1800$",
      "$0.4125$",
      "$0.5925$",
      "$0.6625$",
      "$0.6771$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.4, home-only 0.275, both 0.2, and neither 0.125.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.4(0.55)+0.275(0.70)+0.2(0.90)=0.5925."
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
      "The disjoint class shares are auto-only 0.4, home-only 0.275, both 0.2, and neither 0.125."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.6,
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
    "id": "section:general-probability-e:19",
    "topicId": "e3-combined-problems",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.675, 0.7, and 0.875. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2345$",
      "$0.4871$",
      "$0.6497$",
      "$0.6750$",
      "$0.7655$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.84875.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.675[1-(1-0.7)(1-0.875)]=0.649688.",
      "The requested ratio is 0.649688/0.84875=0.765464."
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
        0.675,
        0.7,
        0.875
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:20",
    "topicId": "e3-combined-problems",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.45 at A and 0.125 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0674$",
      "$0.2000$",
      "$0.4459$",
      "$0.4737$",
      "$0.7642$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336909 for A and 0.104675 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.067382/(0.067382+0.08374)=0.445877."
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
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336909 for A and 0.104675 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.2,
      "rates": [
        0.44999999999999996,
        0.125
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:21",
    "topicId": "e3-combined-problems",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.675, 0.775, and 0.85. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2471$",
      "$0.5133$",
      "$0.6522$",
      "$0.6750$",
      "$0.7529$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.866313.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.675[1-(1-0.775)(1-0.85)]=0.652219.",
      "The requested ratio is 0.652219/0.866313=0.752868."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.866313."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.675,
        0.7749999999999999,
        0.8500000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:22",
    "topicId": "e3-combined-problems",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=15/27, P(B)=13/27, P(C)=9/27, P(A∩B)=7/27, P(A∩C)=5/27, and P(B∩C)=4/27. Also P(C given A∩B)=2/7. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.1481$",
      "$0.2222$",
      "$0.2667$",
      "$0.3333$",
      "$0.4444$"
    ],
    "answer": 3,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/27.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 4/27. The probability of not A is 12/27.",
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=2/27."
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
        2
      ],
      "target": "none-given-notA"
    },
    "level": "challenge",
    "id": "section:general-probability-e:23",
    "topicId": "e1-addition-rule",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "A batch comes from office H with probability 0.37, otherwise from office L. Each batch has 12 files. H batches contain exactly 5 error files; L batches contain exactly 1. Two files are sampled in order without replacement. Calculate the probability that office H supplied the batch, given that both sampled files have errors. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.5000$",
      "$0.8800$",
      "$0.9900$",
      "$1.0000$"
    ],
    "answer": 4,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.151515 and 0.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.681818 and 0.166667.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.056061. The requested value is 1."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.151515 and 0."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 12,
      "K": [
        5,
        1
      ],
      "w": 0.37,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:4",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "A batch comes from office H with probability 0.38, otherwise from office L. Each batch has 13 files. H batches contain exactly 3 error files; L batches contain exactly 2. Two files are sampled in order without replacement. Calculate the probability that both sampled files have errors. Round your answer to four decimal places.",
    "choices": [
      "$0.0113$",
      "$0.0226$",
      "$0.1426$",
      "$0.5113$",
      "$0.9774$"
    ],
    "answer": 1,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.038462 and 0.012821.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.423077 and 0.294872.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.022564. The requested value is 0.022564."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.038462 and 0.012821."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 13,
      "K": [
        3,
        2
      ],
      "w": 0.38,
      "target": "both",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:5",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "An urn contains 2 red balls and 9 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.0182$",
      "$0.1000$",
      "$0.1818$",
      "$0.2000$",
      "$0.9000$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(2/11)(1/10).",
      "By symmetry, the second draw is red with probability 2/11.",
      "Dividing the joint probability by the condition probability gives (1)/(10)=0.1. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(2/11)(1/10)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 11,
      "K": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:24",
    "topicId": "e2-multiplication-rule",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "e2-multiplication-rule"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.3, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.4, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0055$",
      "$0.0172$",
      "$0.0183$",
      "$0.0796$",
      "$0.3000$"
    ],
    "answer": 1,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.449329 for L.",
      "The overall likelihood is 0.320025 after weighting by the prior class shares.",
      "The H posterior is 0.005495/0.320025=0.01717."
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
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.449329 for L."
    ],
    "verification": {
      "kind": "poisson-mixture",
      "w": 0.3,
      "rates": [
        2,
        0.4
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:general-probability-e:25",
    "topicId": "e3-combined-problems",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "For two policy features A and B, P(neither)=0.35, P(A∩B)=0.1, and P(B)-P(A)=0.15. Calculate P(not B given A). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.2222$",
      "$0.3333$",
      "$0.5500$",
      "$0.6667$"
    ],
    "answer": 4,
    "solution": [
      "The union probability is 1-0.35=0.65. Thus P(A)+P(B)=0.75.",
      "Combine this sum with the difference 0.15 to get P(A)=0.3 and P(B)=0.45.",
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
      "The union probability is 1-0.35=0.65. Thus P(A)+P(B)=0.75."
    ],
    "verification": {
      "kind": "two-events",
      "a": 0.30000000000000004,
      "b": 0.44999999999999996,
      "joint": 0.1,
      "target": "notB-given-A"
    },
    "level": "challenge",
    "id": "section:general-probability-e:26",
    "topicId": "e1-addition-rule",
    "family": "two-events-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 4 red balls and 5 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.1667$",
      "$0.3750$",
      "$0.4444$",
      "$0.5000$",
      "$0.6250$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(4/9)(3/8).",
      "By symmetry, the second draw is red with probability 4/9.",
      "Dividing the joint probability by the condition probability gives (3)/(8)=0.375. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(4/9)(3/8)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 9,
      "K": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:27",
    "topicId": "e2-multiplication-rule",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "e2-multiplication-rule"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.3, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.1 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0933$",
      "$0.3000$",
      "$0.5753$",
      "$0.6316$",
      "$0.8727$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.098415 for B.",
      "Weight the likelihoods by plant shares 0.3 and 0.7.",
      "Bayes gives 0.093312/(0.093312+0.068891)=0.575281."
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
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.098415 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.30000000000000004,
      "rates": [
        0.39999999999999997,
        0.1
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:28",
    "topicId": "e3-combined-problems",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three diagnostic flags A, B, C have probabilities 15/45, 17/45, 13/45. Their pairwise intersections A∩B, A∩C, B∩C have probabilities 5/45, 5/45, 3/45, and all three occur with probability 1/45. Calculate the probability that exactly one flag occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2444$",
      "$0.4889$",
      "$0.6667$",
      "$0.7111$",
      "$0.7333$"
    ],
    "answer": 1,
    "solution": [
      "Start with the sum of the three marginal probabilities. A point in exactly two events is counted twice, and a point in all three is counted three times.",
      "Subtract twice the sum of the pairwise intersections, then add three times the triple intersection.",
      "The result is [15+17+13-2(5+5+3)+3]/45=22/45=0.488889."
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
        10,
        4,
        6,
        4,
        2,
        1
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:29",
    "topicId": "e1-addition-rule",
    "family": "three-events-exactly-one",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 3 red balls and 4 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.1429$",
      "$0.3333$",
      "$0.4286$",
      "$0.5000$",
      "$0.6667$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(3/7)(2/6).",
      "By symmetry, the second draw is red with probability 3/7.",
      "Dividing the joint probability by the condition probability gives (2)/(6)=0.333333. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(3/7)(2/6)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 7,
      "K": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:30",
    "topicId": "e2-multiplication-rule",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "e2-multiplication-rule"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.35 at A and 0.1 at B. Exactly two of 5 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0673$",
      "$0.2000$",
      "$0.4667$",
      "$0.5357$",
      "$0.7538$"
    ],
    "answer": 3,
    "solution": [
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336416 for A and 0.0729 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.067283/(0.067283+0.05832)=0.53568."
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
      "The likelihoods of exactly two defects are choose(5,2)p²(1-p)^(3), giving 0.336416 for A and 0.0729 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.2,
      "rates": [
        0.35,
        0.1
      ],
      "n": 5,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:31",
    "topicId": "e3-combined-problems",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "A batch comes from office H with probability 0.39, otherwise from office L. Each batch has 14 files. H batches contain exactly 4 error files; L batches contain exactly 1. Two files are sampled in order without replacement. Calculate the probability that at least one sampled file has an error. Round your answer to four decimal places.",
    "choices": [
      "$0.1421$",
      "$0.2843$",
      "$0.4043$",
      "$0.6421$",
      "$0.7157$"
    ],
    "answer": 1,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.065934 and 0.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.505495 and 0.142857.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.025714. The requested value is 0.284286."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.065934 and 0."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 14,
      "K": [
        4,
        1
      ],
      "w": 0.38999999999999996,
      "target": "some",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:6",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "A batch comes from office H with probability 0.4, otherwise from office L. Each batch has 15 files. H batches contain exactly 5 error files; L batches contain exactly 2. Two files are sampled in order without replacement. Calculate the probability that office H supplied the batch, given that both sampled files have errors. Round your answer to four decimal places.",
    "choices": [
      "$0.1304$",
      "$0.4348$",
      "$0.8696$",
      "$0.9348$",
      "$0.9896$"
    ],
    "answer": 2,
    "solution": [
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.095238 and 0.009524.",
      "For at least one error, complement the two-sound event. The office-specific probabilities are 0.571429 and 0.257143.",
      "Weight the office-specific probabilities before adding; for the posterior, divide the H-and-two-errors joint mass by total two-errors mass 0.04381. The requested value is 0.869565."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "multiplication without replacement",
      "complements",
      "addition over classes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: multiplication without replacement, complements, addition over classes.",
      "Within each office, use conditional multiplication without replacement. The probabilities of two errors are 0.095238 and 0.009524."
    ],
    "verification": {
      "kind": "section-audit",
      "N": 15,
      "K": [
        5,
        2
      ],
      "w": 0.39999999999999997,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:7",
    "topicId": "e1-addition-rule",
    "family": "cumulative-general-probability-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "e1-addition-rule",
      "e2-multiplication-rule",
      "e3-combined-problems"
    ],
    "cumulative": true
  },
  {
    "question": "A claim may involve property damage A, bodily injury B, both, or neither. P(A)=0.425, P(B)=0.425, and P(neither)=0.325. Given that at least one of A and B occurs, calculate the probability that exactly one occurs. Round your answer to four decimal places.",
    "choices": [
      "$0.2593$",
      "$0.5000$",
      "$0.6296$",
      "$0.6750$",
      "$0.7407$"
    ],
    "answer": 4,
    "solution": [
      "The union has probability 0.675. The addition rule gives P(A∩B)=0.425+0.425-0.675=0.175.",
      "Exactly one has probability P(A)+P(B)-2P(A∩B)=0.5.",
      "Divide by the union probability to obtain 0.740741."
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
      "The union has probability 0.675. The addition rule gives P(A∩B)=0.425+0.425-0.675=0.175."
    ],
    "verification": {
      "kind": "symmetric-difference",
      "a": 0.425,
      "b": 0.42500000000000004,
      "both": 0.175,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:32",
    "topicId": "e1-addition-rule",
    "family": "symmetric-difference-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.625, 0.7, and 0.85. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2721$",
      "$0.4535$",
      "$0.5969$",
      "$0.6250$",
      "$0.7279$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.82.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.625[1-(1-0.7)(1-0.85)]=0.596875.",
      "The requested ratio is 0.596875/0.82=0.727896."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.82."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.625,
        0.7,
        0.8500000000000001
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:33",
    "topicId": "e3-combined-problems",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer records P(auto coverage)=0.6, P(home coverage)=0.45, and P(both)=0.25. Auto-only customers renew with probability 0.55, home-only customers with probability 0.70, and customers with both renew at least one coverage with probability 0.90. Customers with neither cannot renew. Calculate the probability that a randomly selected customer renews at least one coverage. Round your answer to four decimal places.",
    "choices": [
      "$0.2250$",
      "$0.3325$",
      "$0.5575$",
      "$0.6450$",
      "$0.6969$"
    ],
    "answer": 2,
    "solution": [
      "The disjoint class shares are auto-only 0.35, home-only 0.2, both 0.25, and neither 0.2.",
      "Multiply each class share by its corresponding renewal probability. The neither class contributes zero.",
      "Total probability gives 0.35(0.55)+0.2(0.70)+0.25(0.90)=0.5575."
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
      "The disjoint class shares are auto-only 0.35, home-only 0.2, both 0.25, and neither 0.2."
    ],
    "verification": {
      "kind": "renewal-mixture",
      "a": 0.6,
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
    "id": "section:general-probability-e:34",
    "topicId": "e3-combined-problems",
    "family": "coverage-renewal-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.65, 0.725, and 0.875. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2613$",
      "$0.4853$",
      "$0.6277$",
      "$0.6500$",
      "$0.7387$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.849688.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.65[1-(1-0.725)(1-0.875)]=0.627656.",
      "The requested ratio is 0.627656/0.849688=0.738691."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.849688."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.65,
        0.725,
        0.875
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:35",
    "topicId": "e3-combined-problems",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.2, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.45 at A and 0.1 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.0556$",
      "$0.2000$",
      "$0.4139$",
      "$0.5294$",
      "$0.8351$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.27795 for A and 0.098415 for B.",
      "Weight the likelihoods by plant shares 0.2 and 0.8.",
      "Bayes gives 0.05559/(0.05559+0.078732)=0.413856."
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
      "w": 0.2,
      "rates": [
        0.44999999999999996,
        0.1
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:36",
    "topicId": "e3-combined-problems",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three components operate independently, with operating probabilities 0.675, 0.75, and 0.8. A system operates if at least two components operate. Given that the system operates, calculate the probability that component 1 operates. Round your answer to four decimal places.",
    "choices": [
      "$0.2332$",
      "$0.4843$",
      "$0.6412$",
      "$0.6750$",
      "$0.7668$"
    ],
    "answer": 4,
    "solution": [
      "System operation includes exactly two operating components and all three. Its probability is 0.83625.",
      "Component 1 and the system both operate if component 1 operates and at least one of the other two does: 0.675[1-(1-0.75)(1-0.8)]=0.64125.",
      "The requested ratio is 0.64125/0.83625=0.766816."
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
      "System operation includes exactly two operating components and all three. Its probability is 0.83625."
    ],
    "verification": {
      "kind": "reliability-condition",
      "rates": [
        0.675,
        0.75,
        0.8
      ],
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:37",
    "topicId": "e3-combined-problems",
    "family": "unequal-reliability",
    "difficulty": 5,
    "relatedTopicIds": [
      "e3-combined-problems"
    ],
    "cumulative": false
  },
  {
    "question": "Three coverage events A, B, C satisfy P(A)=13/26, P(B)=13/26, P(C)=8/26, P(A∩B)=6/26, P(A∩C)=4/26, and P(B∩C)=3/26. Also P(C given A∩B)=1/6. Calculate the probability that none occurs, given that A does not occur. Round your answer to four decimal places.",
    "choices": [
      "$0.1538$",
      "$0.1923$",
      "$0.3077$",
      "$0.3870$",
      "$0.5000$"
    ],
    "answer": 2,
    "solution": [
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/26.",
      "Inclusion–exclusion gives the union: add the three marginal probabilities, subtract the three pair intersections, and add the triple intersection.",
      "The probability of none is 4/26. The probability of not A is 13/26.",
      "None is contained in not A, so the requested conditional probability is 0.307692."
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
      "First recover P(A∩B∩C)=P(C given A∩B)P(A∩B)=1/26."
    ],
    "verification": {
      "kind": "atoms",
      "weights": [
        4,
        4,
        5,
        5,
        2,
        3,
        2,
        1
      ],
      "target": "none-given-notA"
    },
    "level": "challenge",
    "id": "section:general-probability-e:38",
    "topicId": "e1-addition-rule",
    "family": "region-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "e1-addition-rule"
    ],
    "cumulative": false
  },
  {
    "question": "An urn contains 4 red balls and 6 blue balls. Two balls are drawn in order without replacement. You are told that the second ball is red. Calculate the probability that the first ball was also red. Round your answer to four decimal places.",
    "choices": [
      "$0.1333$",
      "$0.3333$",
      "$0.4000$",
      "$0.4444$",
      "$0.6667$"
    ],
    "answer": 1,
    "solution": [
      "P(first red and second red)=(4/10)(3/9).",
      "By symmetry, the second draw is red with probability 4/10.",
      "Dividing the joint probability by the condition probability gives (3)/(9)=0.333333. Conditioning on a later draw still changes the earlier draw distribution."
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
      "P(first red and second red)=(4/10)(3/9)."
    ],
    "verification": {
      "kind": "ordered-condition",
      "N": 10,
      "K": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-e:39",
    "topicId": "e2-multiplication-rule",
    "family": "ordered-draw-condition",
    "difficulty": 4,
    "relatedTopicIds": [
      "e2-multiplication-rule"
    ],
    "cumulative": false
  }
];

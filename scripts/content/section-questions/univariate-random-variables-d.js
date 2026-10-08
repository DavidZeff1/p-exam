export default [
  {
    "question": "An annual loss X equals zero with probability 0.435. Otherwise it has conditional density 2x/973² on (0,973). A reported loss exceeds d=321.09. Calculate E[X given X>d]. Round your answer to four decimal places.",
    "choices": [
      "$350.8896$",
      "$561.4234$",
      "$701.7793$",
      "$842.1352$",
      "$1403.5586$"
    ],
    "answer": 2,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/973² over (321.09,973).",
      "The severity tail at d is 0.8911. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 701.779298 and 524913.89405. Subtract the squared mean for variance. The requested value is 701.779298."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/973² over (321.09,973)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 973,
      "p": 0.5650000000000001,
      "d": 321.09000000000003,
      "a": 778.4000000000001,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:0",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "An annual loss X equals zero with probability 0.43. Otherwise it has conditional density 2x/974² on (0,974). A reported loss exceeds d=331.16. Calculate Var(X given X>d). Round your answer to four decimal places.",
    "choices": [
      "$15826.1093$",
      "$25321.7749$",
      "$31652.2186$",
      "$37982.6624$",
      "$63304.4373$"
    ],
    "answer": 2,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/974² over (331.16,974).",
      "The severity tail at d is 0.8844. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 705.350448 and 529171.4728. Subtract the squared mean for variance. The requested value is 31652.218643."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/974² over (331.16,974)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 974,
      "p": 0.5700000000000001,
      "d": 331.16,
      "a": 779.2,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:1",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "6 independent insureds each have claim probability 0.2. Let N count insureds with a claim. Given N>0, calculate E[N]. Round your answer to four decimal places.",
    "choices": [
      "$0.8854$",
      "$1.2000$",
      "$1.3553$",
      "$1.5000$",
      "$1.6263$"
    ],
    "answer": 4,
    "solution": [
      "N is binomial with mean 1.2 and zero probability 0.262144.",
      "The N=0 outcome contributes zero to the unconditional first moment, so the positive-count moment numerator remains E[N].",
      "Renormalize by P(N>0): 1.2/0.737856=1.626334."
    ],
    "feedback": {
      "0": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
      "1": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
      "2": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
      "3": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0)."
    },
    "skills": [
      "binomial mean",
      "zero truncation",
      "conditional expectation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: binomial mean, zero truncation, conditional expectation.",
      "N is binomial with mean 1.2 and zero probability 0.262144."
    ],
    "verification": {
      "kind": "binomial",
      "n": 6,
      "p": 0.2,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:8",
    "topicId": "urv-d1-conditional-discrete",
    "family": "conditional-binomial-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density f(x)=a+bx on (0,4) and zero elsewhere. The unknown constants satisfy a:b=1:0.3. Given X>2, calculate P(X>3.2). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.2600$",
      "$0.3337$",
      "$0.4379$",
      "$0.5393$"
    ],
    "answer": 3,
    "solution": [
      "Write a=1c and b=0.3c. Normalizing the density gives c=1/6.4.",
      "The CDF on the support is F(x)=0.15625x+(0.046875/2)x².",
      "Divide the tail above 3.2 by the tail above 2: 0.26/0.59375=0.437895."
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
      "Write a=1c and b=0.3c. Normalizing the density gives c=1/6.4."
    ],
    "verification": {
      "kind": "linear-density",
      "L": 4,
      "A": 0.15625,
      "B": 0.04687500000000001,
      "t": 2.0,
      "u": 3.2,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:9",
    "topicId": "urv-d2-conditional-continuous",
    "family": "density-infer-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent policies each have claim probability 0.2. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
    "choices": [
      "$0.6077$",
      "$0.9600$",
      "$1.3011$",
      "$1.8127$",
      "$3.2527$"
    ],
    "answer": 0,
    "solution": [
      "Unconditionally E[N]=1.2 and E[N²]=np(1-p)+(np)²=2.4.",
      "The condition probability is 0.737856. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
      "Conditional variance is 2.4/0.737856-(1.2/0.737856)²=0.607706."
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
      "Unconditionally E[N]=1.2 and E[N²]=np(1-p)+(np)²=2.4."
    ],
    "verification": {
      "kind": "binomial",
      "n": 6,
      "p": 0.2,
      "target": "positive-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:10",
    "topicId": "urv-d1-conditional-discrete",
    "family": "conditional-binomial-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density f(x)=a+bx on (0,5) and zero elsewhere. The unknown constants satisfy a:b=0.5:0.4. Given X>2.5, calculate P(X>4). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.3067$",
      "$0.3600$",
      "$0.4600$",
      "$0.5652$"
    ],
    "answer": 3,
    "solution": [
      "Write a=0.5c and b=0.4c. Normalizing the density gives c=1/7.5.",
      "The CDF on the support is F(x)=0.066667x+(0.053333/2)x².",
      "Divide the tail above 4 by the tail above 2.5: 0.306667/0.666667=0.46."
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
      "Write a=0.5c and b=0.4c. Normalizing the density gives c=1/7.5."
    ],
    "verification": {
      "kind": "linear-density",
      "L": 5,
      "A": 0.06666666666666667,
      "B": 0.05333333333333334,
      "t": 2.5,
      "u": 4.0,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:11",
    "topicId": "urv-d2-conditional-continuous",
    "family": "density-infer-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "N is Poisson with mean 2.75. Only policies with at most 5 claims are retained in a study. Calculate the mean claim count among retained policies. Round your answer to four decimal places.",
    "choices": [
      "$2.3523$",
      "$2.5000$",
      "$2.5047$",
      "$2.7500$",
      "$2.9281$"
    ],
    "answer": 2,
    "solution": [
      "The retained probability is Σ from n=0 to 5 of exp(-2.75)(2.75)^n/n!=0.939165.",
      "The retained first-moment sum is Σ nP(N=n) over those same counts, equal to 2.352291.",
      "Normalize to the study population: E[N given N≤5]=2.352291/0.939165=2.504663."
    ],
    "feedback": {
      "0": "This is the restricted first moment before normalization.",
      "1": "The retained counts are not uniformly distributed.",
      "3": "This is the mean of all policies before truncation.",
      "4": "The excluded high-count outcomes contribute to the mean and must be removed from the numerator."
    },
    "skills": [
      "truncated Poisson support",
      "conditional first moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: truncated Poisson support, conditional first moment.",
      "The retained probability is Σ from n=0 to 5 of exp(-2.75)(2.75)^n/n!=0.939165."
    ],
    "verification": {
      "kind": "poisson-truncated",
      "lam": 2.75,
      "upper": 5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:12",
    "topicId": "urv-d1-conditional-discrete",
    "family": "poisson-truncated-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(10-x)/100 for 0<x<10, and zero otherwise. Given X>4.5, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.2964$",
      "$1.6806$",
      "$2.5208$",
      "$5.0417$",
      "$5.5556$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((10-4.5)/10)². Divide the original density by this probability on (4.5,10).",
      "For Z=X-4.5, the conditional density is 2(5.5-z)/(5.5)² on (0,5.5). Its first two moments are 1.833333 and 5.041667.",
      "The shift contributes no variance, so Var(X given X>4.5)=(5.5)²/18=1.680556. The conditional mean is 6.333333."
    ],
    "feedback": {
      "0": "This is the conditional SD.",
      "2": "This uses a conditional uniform distribution instead of the triangular density.",
      "3": "This is the second raw moment of the shifted variable.",
      "4": "This is the unconditional variance."
    },
    "skills": [
      "conditional density",
      "shifted support",
      "two moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional density, shifted support, two moments.",
      "The condition probability is ((10-4.5)/10)². Divide the original density by this probability on (4.5,10)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 10,
      "lower": 4.5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:13",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "A lot contains 15 parts, of which 5 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.2797$",
      "$0.3846$",
      "$0.4370$",
      "$0.4895$",
      "$0.4945$"
    ],
    "answer": 3,
    "solution": [
      "The remaining lot has 13 parts: 5 defective and 8 sound.",
      "Choose one defective and two sound parts in choose(5,1)choose(8,2) ways.",
      "Divide by choose(13,3) to obtain 0.48951."
    ],
    "feedback": {
      "0": "This gives exactly two defective parts.",
      "1": "This is the probability for only one new part.",
      "2": "This treats the follow-up sample as sampling with replacement.",
      "4": "This samples from the original lot and ignores the observed removals."
    },
    "skills": [
      "update a finite population",
      "hypergeometric sample"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: update a finite population, hypergeometric sample.",
      "The remaining lot has 13 parts: 5 defective and 8 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 15,
      "K": 5,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:14",
    "topicId": "urv-d1-conditional-discrete",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "T is the sum of 2 independent exponential lifetimes, each with mean 4. A lifetime is recorded only if T>12. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
    "choices": [
      "$3.3855$",
      "$8.0000$",
      "$17.0000$",
      "$20.0000$",
      "$40.1711$"
    ],
    "answer": 2,
    "solution": [
      "T has a gamma density with shape 2 and scale 4. Its recording probability is 0.199148.",
      "Multiplying its density by t gives 8 times the gamma density with shape 3 and the same scale. Thus the restricted first moment is 3.385521.",
      "Divide by the recording probability to obtain 17. A multistage lifetime does not have exponential memorylessness."
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
      "T has a gamma density with shape 2 and scale 4. Its recording probability is 0.199148."
    ],
    "verification": {
      "kind": "gamma-truncated-mean",
      "shape": 2,
      "scale": 4,
      "threshold": 12,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:15",
    "topicId": "urv-d2-conditional-continuous",
    "family": "gamma-truncated-mean",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "An annual loss X equals zero with probability 0.425. Otherwise it has conditional density 2x/975² on (0,975). A reported loss exceeds d=341.25. Calculate P(X>780 given X>d). Round your answer to four decimal places.",
    "choices": [
      "$0.2051$",
      "$0.4103$",
      "$0.5303$",
      "$0.5897$",
      "$0.7051$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/975² over (341.25,975).",
      "The severity tail at d is 0.8775. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 708.981481 and 533538.28125. Subtract the squared mean for variance. The requested value is 0.410256."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/975² over (341.25,975)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 975,
      "p": 0.5750000000000001,
      "d": 341.25,
      "a": 780.0,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:2",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "An annual loss X equals zero with probability 0.42. Otherwise it has conditional density 2x/976² on (0,976). A reported loss exceeds d=351.36. Calculate E[X given X>d]. Round your answer to four decimal places.",
    "choices": [
      "$356.3357$",
      "$570.1371$",
      "$712.6714$",
      "$855.2056$",
      "$1425.3427$"
    ],
    "answer": 2,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/976² over (351.36,976).",
      "The severity tail at d is 0.8704. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 712.671373 and 538014.9248. Subtract the squared mean for variance. The requested value is 712.671373."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/976² over (351.36,976)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 976,
      "p": 0.5800000000000001,
      "d": 351.36,
      "a": 780.8000000000001,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:3",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "An integer-valued random variable X is uniform on 1 through 13. Given that X≥5, calculate the probability that X is even. Round your answer to four decimal places.",
    "choices": [
      "$0.3077$",
      "$0.4444$",
      "$0.4615$",
      "$0.5000$",
      "$0.5556$"
    ],
    "answer": 1,
    "solution": [
      "The condition retains the integers 5, 6, …, 13: 9 equally likely values.",
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
      "The condition retains the integers 5, 6, …, 13: 9 equally likely values."
    ],
    "verification": {
      "kind": "uniform-lattice",
      "n": 13,
      "lower": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:16",
    "topicId": "urv-d1-conditional-discrete",
    "family": "uniform-lattice-condition",
    "difficulty": 3,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X has density c(16-x) for 0<x<16, and zero otherwise. The constant c is unknown. A loss has already exceeded 4. Calculate the probability that it exceeds 12. Round your answer to four decimal places.",
    "choices": [
      "$0.0625$",
      "$0.1111$",
      "$0.3333$",
      "$0.5625$",
      "$0.8889$"
    ],
    "answer": 1,
    "solution": [
      "Normalization gives c=2/256, since the integral of 16-x over the support is 256/2.",
      "The survival function is P(X>x)=((16-x)/16)².",
      "Divide survival at 12 by survival at 4: [(16-12)/(16-4)]²=0.111111."
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
      "Normalization gives c=2/256, since the integral of 16-x over the support is 256/2."
    ],
    "verification": {
      "kind": "triangular-tail",
      "B": 16,
      "t": 4.0,
      "u": 12.0,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:17",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-tail-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent insureds each have claim probability 0.25. Let N count insureds with a claim. Given N>0, calculate E[N]. Round your answer to four decimal places.",
    "choices": [
      "$0.9534$",
      "$1.2500$",
      "$1.3111$",
      "$1.6389$",
      "$1.6667$"
    ],
    "answer": 3,
    "solution": [
      "N is binomial with mean 1.25 and zero probability 0.237305.",
      "The N=0 outcome contributes zero to the unconditional first moment, so the positive-count moment numerator remains E[N].",
      "Renormalize by P(N>0): 1.25/0.762695=1.638924."
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
      "N is binomial with mean 1.25 and zero probability 0.237305."
    ],
    "verification": {
      "kind": "binomial",
      "n": 5,
      "p": 0.25,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:18",
    "topicId": "urv-d1-conditional-discrete",
    "family": "conditional-binomial-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(10-x)/100 for 0<x<10, and zero otherwise. Given X>3.5, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.5321$",
      "$2.3472$",
      "$3.5208$",
      "$5.5556$",
      "$7.0417$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((10-3.5)/10)². Divide the original density by this probability on (3.5,10).",
      "For Z=X-3.5, the conditional density is 2(6.5-z)/(6.5)² on (0,6.5). Its first two moments are 2.166667 and 7.041667.",
      "The shift contributes no variance, so Var(X given X>3.5)=(6.5)²/18=2.347222. The conditional mean is 5.666667."
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
      "The condition probability is ((10-3.5)/10)². Divide the original density by this probability on (3.5,10)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 10,
      "lower": 3.5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:19",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent policies each have claim probability 0.25. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
    "choices": [
      "$0.5918$",
      "$0.9375$",
      "$1.2292$",
      "$1.7153$",
      "$3.2778$"
    ],
    "answer": 0,
    "solution": [
      "Unconditionally E[N]=1.25 and E[N²]=np(1-p)+(np)²=2.5.",
      "The condition probability is 0.762695. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
      "Conditional variance is 2.5/0.762695-(1.25/0.762695)²=0.591776."
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
      "Unconditionally E[N]=1.25 and E[N²]=np(1-p)+(np)²=2.5."
    ],
    "verification": {
      "kind": "binomial",
      "n": 5,
      "p": 0.25,
      "target": "positive-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:20",
    "topicId": "urv-d1-conditional-discrete",
    "family": "conditional-binomial-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(6-x)/36 for 0<x<6, and zero otherwise. Given X>1.5, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.0607$",
      "$1.1250$",
      "$1.6875$",
      "$2.0000$",
      "$3.3750$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((6-1.5)/6)². Divide the original density by this probability on (1.5,6).",
      "For Z=X-1.5, the conditional density is 2(4.5-z)/(4.5)² on (0,4.5). Its first two moments are 1.5 and 3.375.",
      "The shift contributes no variance, so Var(X given X>1.5)=(4.5)²/18=1.125. The conditional mean is 3."
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
      "The condition probability is ((6-1.5)/6)². Divide the original density by this probability on (1.5,6)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 6,
      "lower": 1.5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:21",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "N is Poisson with mean 1.25. Only policies with at most 6 claims are retained in a study. Calculate the mean claim count among retained policies. Round your answer to four decimal places.",
    "choices": [
      "$1.2477$",
      "$1.2481$",
      "$1.2500$",
      "$1.2504$",
      "$3.0000$"
    ],
    "answer": 1,
    "solution": [
      "The retained probability is Σ from n=0 to 6 of exp(-1.25)(1.25)^n/n!=0.99968.",
      "The retained first-moment sum is Σ nP(N=n) over those same counts, equal to 1.247702.",
      "Normalize to the study population: E[N given N≤6]=1.247702/0.99968=1.248102."
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
      "The retained probability is Σ from n=0 to 6 of exp(-1.25)(1.25)^n/n!=0.99968."
    ],
    "verification": {
      "kind": "poisson-truncated",
      "lam": 1.25,
      "upper": 6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:22",
    "topicId": "urv-d1-conditional-discrete",
    "family": "poisson-truncated-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(14-x)/196 for 0<x<14, and zero otherwise. Given X>4.9, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$2.1449$",
      "$4.6006$",
      "$6.9008$",
      "$10.8889$",
      "$13.8017$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((14-4.9)/14)². Divide the original density by this probability on (4.9,14).",
      "For Z=X-4.9, the conditional density is 2(9.1-z)/(9.1)² on (0,9.1). Its first two moments are 3.033333 and 13.801667.",
      "The shift contributes no variance, so Var(X given X>4.9)=(9.1)²/18=4.600556. The conditional mean is 7.933333."
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
      "The condition probability is ((14-4.9)/14)². Divide the original density by this probability on (4.9,14)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 14,
      "lower": 4.8999999999999995,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:23",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "An annual loss X equals zero with probability 0.415. Otherwise it has conditional density 2x/977² on (0,977). A reported loss exceeds d=361.49. Calculate Var(X given X>d). Round your answer to four decimal places.",
    "choices": [
      "$14672.8243$",
      "$23476.5190$",
      "$29345.6487$",
      "$35214.7784$",
      "$58691.2974$"
    ],
    "answer": 2,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/977² over (361.49,977).",
      "The severity tail at d is 0.8631. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 716.419124 and 542602.01005. Subtract the squared mean for variance. The requested value is 29345.648692."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/977² over (361.49,977)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 977,
      "p": 0.5850000000000001,
      "d": 361.49,
      "a": 781.6,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:4",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "An annual loss X equals zero with probability 0.41. Otherwise it has conditional density 2x/978² on (0,978). A reported loss exceeds d=371.64. Calculate P(X>782.4 given X>d). Round your answer to four decimal places.",
    "choices": [
      "$0.2104$",
      "$0.4208$",
      "$0.5408$",
      "$0.5792$",
      "$0.7104$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/978² over (371.64,978).",
      "The severity tail at d is 0.8556. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 720.223768 and 547300.1448. Subtract the squared mean for variance. The requested value is 0.420757."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/978² over (371.64,978)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 978,
      "p": 0.5900000000000001,
      "d": 371.64,
      "a": 782.4000000000001,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:5",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "A lot contains 16 parts, of which 4 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.1648$",
      "$0.2857$",
      "$0.4373$",
      "$0.4714$",
      "$0.4945$"
    ],
    "answer": 4,
    "solution": [
      "The remaining lot has 14 parts: 4 defective and 10 sound.",
      "Choose one defective and two sound parts in choose(4,1)choose(10,2) ways.",
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
      "The remaining lot has 14 parts: 4 defective and 10 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 16,
      "K": 4,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:24",
    "topicId": "urv-d1-conditional-discrete",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "T is the sum of 4 independent exponential lifetimes, each with mean 4. A lifetime is recorded only if T>12. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
    "choices": [
      "$13.0442$",
      "$16.0000$",
      "$20.1538$",
      "$24.7207$",
      "$28.0000$"
    ],
    "answer": 2,
    "solution": [
      "T has a gamma density with shape 4 and scale 4. Its recording probability is 0.647232.",
      "Multiplying its density by t gives 16 times the gamma density with shape 5 and the same scale. Thus the restricted first moment is 13.044212.",
      "Divide by the recording probability to obtain 20.153846. A multistage lifetime does not have exponential memorylessness."
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
      "T has a gamma density with shape 4 and scale 4. Its recording probability is 0.647232."
    ],
    "verification": {
      "kind": "gamma-truncated-mean",
      "shape": 4,
      "scale": 4,
      "threshold": 12,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:25",
    "topicId": "urv-d2-conditional-continuous",
    "family": "gamma-truncated-mean",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "An integer-valued random variable X is uniform on 1 through 13. Given that X≥3, calculate the probability that X is even. Round your answer to four decimal places.",
    "choices": [
      "$0.3846$",
      "$0.4545$",
      "$0.4615$",
      "$0.5000$",
      "$0.5455$"
    ],
    "answer": 1,
    "solution": [
      "The condition retains the integers 3, 4, …, 13: 11 equally likely values.",
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
      "The condition retains the integers 3, 4, …, 13: 11 equally likely values."
    ],
    "verification": {
      "kind": "uniform-lattice",
      "n": 13,
      "lower": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:26",
    "topicId": "urv-d1-conditional-discrete",
    "family": "uniform-lattice-condition",
    "difficulty": 3,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X has density c(18-x) for 0<x<18, and zero otherwise. The constant c is unknown. A loss has already exceeded 4.5. Calculate the probability that it exceeds 13.5. Round your answer to four decimal places.",
    "choices": [
      "$0.0625$",
      "$0.1111$",
      "$0.3333$",
      "$0.5625$",
      "$0.8889$"
    ],
    "answer": 1,
    "solution": [
      "Normalization gives c=2/324, since the integral of 18-x over the support is 324/2.",
      "The survival function is P(X>x)=((18-x)/18)².",
      "Divide survival at 13.5 by survival at 4.5: [(18-13.5)/(18-4.5)]²=0.111111."
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
      "Normalization gives c=2/324, since the integral of 18-x over the support is 324/2."
    ],
    "verification": {
      "kind": "triangular-tail",
      "B": 18,
      "t": 4.5,
      "u": 13.5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:27",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-tail-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "7 independent insureds each have claim probability 0.25. Let N count insureds with a claim. Given N>0, calculate E[N]. Round your answer to four decimal places.",
    "choices": [
      "$1.1540$",
      "$1.5164$",
      "$1.7500$",
      "$2.0196$",
      "$2.3333$"
    ],
    "answer": 3,
    "solution": [
      "N is binomial with mean 1.75 and zero probability 0.133484.",
      "The N=0 outcome contributes zero to the unconditional first moment, so the positive-count moment numerator remains E[N].",
      "Renormalize by P(N>0): 1.75/0.866516=2.019582."
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
      "N is binomial with mean 1.75 and zero probability 0.133484."
    ],
    "verification": {
      "kind": "binomial",
      "n": 7,
      "p": 0.25,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:28",
    "topicId": "urv-d1-conditional-discrete",
    "family": "conditional-binomial-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(14-x)/196 for 0<x<14, and zero otherwise. Given X>3.5, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$2.4749$",
      "$6.1250$",
      "$9.1875$",
      "$10.8889$",
      "$18.3750$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((14-3.5)/14)². Divide the original density by this probability on (3.5,14).",
      "For Z=X-3.5, the conditional density is 2(10.5-z)/(10.5)² on (0,10.5). Its first two moments are 3.5 and 18.375.",
      "The shift contributes no variance, so Var(X given X>3.5)=(10.5)²/18=6.125. The conditional mean is 7."
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
      "The condition probability is ((14-3.5)/14)². Divide the original density by this probability on (3.5,14)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 14,
      "lower": 3.5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:29",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent policies each have claim probability 0.2. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
    "choices": [
      "$0.4650$",
      "$0.8000$",
      "$1.1899$",
      "$1.6773$",
      "$2.6773$"
    ],
    "answer": 0,
    "solution": [
      "Unconditionally E[N]=1 and E[N²]=np(1-p)+(np)²=1.8.",
      "The condition probability is 0.67232. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
      "Conditional variance is 1.8/0.67232-(1/0.67232)²=0.464977."
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
      "Unconditionally E[N]=1 and E[N²]=np(1-p)+(np)²=1.8."
    ],
    "verification": {
      "kind": "binomial",
      "n": 5,
      "p": 0.2,
      "target": "positive-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:30",
    "topicId": "urv-d1-conditional-discrete",
    "family": "conditional-binomial-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(10-x)/100 for 0<x<10, and zero otherwise. Given X>4, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.4142$",
      "$2.0000$",
      "$3.0000$",
      "$5.5556$",
      "$6.0000$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((10-4)/10)². Divide the original density by this probability on (4,10).",
      "For Z=X-4, the conditional density is 2(6-z)/(6)² on (0,6). Its first two moments are 2 and 6.",
      "The shift contributes no variance, so Var(X given X>4)=(6)²/18=2. The conditional mean is 6."
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
      "The condition probability is ((10-4)/10)². Divide the original density by this probability on (4,10)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 10,
      "lower": 4.0,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:31",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "An annual loss X equals zero with probability 0.405. Otherwise it has conditional density 2x/979² on (0,979). A reported loss exceeds d=381.81. Calculate E[X given X>d]. Round your answer to four decimal places.",
    "choices": [
      "$362.0422$",
      "$579.2675$",
      "$724.0844$",
      "$868.9012$",
      "$1448.1687$"
    ],
    "answer": 2,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/979² over (381.81,979).",
      "The severity tail at d is 0.8479. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 724.084365 and 552109.93805. Subtract the squared mean for variance. The requested value is 724.084365."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/979² over (381.81,979)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 979,
      "p": 0.5950000000000001,
      "d": 381.81,
      "a": 783.2,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:6",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "An annual loss X equals zero with probability 0.4. Otherwise it has conditional density 2x/980² on (0,980). A reported loss exceeds d=196. Calculate Var(X given X>d). Round your answer to four decimal places.",
    "choices": [
      "$21816.4938$",
      "$34906.3901$",
      "$43632.9877$",
      "$52359.5852$",
      "$87265.9753$"
    ],
    "answer": 2,
    "solution": [
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/980² over (196,980).",
      "The severity tail at d is 0.96. Divide truncated event probabilities or integrals by this tail; the occurrence probability cancels.",
      "The conditional first and second moments are 675.111111 and 499408. Subtract the squared mean for variance. The requested value is 43632.987654."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete-continuous mixture",
      "conditional density",
      "truncated moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-continuous mixture, conditional density, truncated moments.",
      "Conditioning on X>d removes the zero atom. The remaining density is proportional to 2x/980² over (196,980)."
    ],
    "verification": {
      "kind": "section-truncated",
      "B": 980,
      "p": 0.6000000000000001,
      "d": 196.0,
      "a": 784.0,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:7",
    "topicId": "urv-d1-conditional-discrete",
    "family": "cumulative-univariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete",
      "urv-d2-conditional-continuous"
    ],
    "cumulative": true
  },
  {
    "question": "N is Poisson with mean 1.75. Only policies with at most 6 claims are retained in a study. Calculate the mean claim count among retained policies. Round your answer to four decimal places.",
    "choices": [
      "$1.7340$",
      "$1.7378$",
      "$1.7500$",
      "$1.7539$",
      "$3.0000$"
    ],
    "answer": 1,
    "solution": [
      "The retained probability is Σ from n=0 to 6 of exp(-1.75)(1.75)^n/n!=0.997799.",
      "The retained first-moment sum is Σ nP(N=n) over those same counts, equal to 1.734016.",
      "Normalize to the study population: E[N given N≤6]=1.734016/0.997799=1.737842."
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
      "The retained probability is Σ from n=0 to 6 of exp(-1.75)(1.75)^n/n!=0.997799."
    ],
    "verification": {
      "kind": "poisson-truncated",
      "lam": 1.75,
      "upper": 6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:32",
    "topicId": "urv-d1-conditional-discrete",
    "family": "poisson-truncated-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(10-x)/100 for 0<x<10, and zero otherwise. Given X>3, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.6499$",
      "$2.7222$",
      "$4.0833$",
      "$5.5556$",
      "$8.1667$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((10-3)/10)². Divide the original density by this probability on (3,10).",
      "For Z=X-3, the conditional density is 2(7-z)/(7)² on (0,7). Its first two moments are 2.333333 and 8.166667.",
      "The shift contributes no variance, so Var(X given X>3)=(7)²/18=2.722222. The conditional mean is 5.333333."
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
      "The condition probability is ((10-3)/10)². Divide the original density by this probability on (3,10)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 10,
      "lower": 3.0,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:33",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "A lot contains 18 parts, of which 4 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.1286$",
      "$0.2500$",
      "$0.4219$",
      "$0.4461$",
      "$0.4714$"
    ],
    "answer": 4,
    "solution": [
      "The remaining lot has 16 parts: 4 defective and 12 sound.",
      "Choose one defective and two sound parts in choose(4,1)choose(12,2) ways.",
      "Divide by choose(16,3) to obtain 0.471429."
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
      "The remaining lot has 16 parts: 4 defective and 12 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 18,
      "K": 4,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:34",
    "topicId": "urv-d1-conditional-discrete",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "T is the sum of 3 independent exponential lifetimes, each with mean 5. A lifetime is recorded only if T>15. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
    "choices": [
      "$9.7085$",
      "$15.0000$",
      "$22.9412$",
      "$30.0000$",
      "$35.4451$"
    ],
    "answer": 2,
    "solution": [
      "T has a gamma density with shape 3 and scale 5. Its recording probability is 0.42319.",
      "Multiplying its density by t gives 15 times the gamma density with shape 4 and the same scale. Thus the restricted first moment is 9.708478.",
      "Divide by the recording probability to obtain 22.941176. A multistage lifetime does not have exponential memorylessness."
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
      "T has a gamma density with shape 3 and scale 5. Its recording probability is 0.42319."
    ],
    "verification": {
      "kind": "gamma-truncated-mean",
      "shape": 3,
      "scale": 5,
      "threshold": 15,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:35",
    "topicId": "urv-d2-conditional-continuous",
    "family": "gamma-truncated-mean",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "An integer-valued random variable X is uniform on 1 through 15. Given that X≥3, calculate the probability that X is even. Round your answer to four decimal places.",
    "choices": [
      "$0.4000$",
      "$0.4615$",
      "$0.4667$",
      "$0.5000$",
      "$0.5385$"
    ],
    "answer": 1,
    "solution": [
      "The condition retains the integers 3, 4, …, 15: 13 equally likely values.",
      "Exactly 6 retained integers are even. The endpoints must be counted, not approximated by half the interval.",
      "The conditional probability is 6/13=0.461538."
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
      "The condition retains the integers 3, 4, …, 15: 13 equally likely values."
    ],
    "verification": {
      "kind": "uniform-lattice",
      "n": 15,
      "lower": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:36",
    "topicId": "urv-d1-conditional-discrete",
    "family": "uniform-lattice-condition",
    "difficulty": 3,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(12-x)/144 for 0<x<12, and zero otherwise. Given X>3.6, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.9799$",
      "$3.9200$",
      "$5.8800$",
      "$8.0000$",
      "$11.7600$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((12-3.6)/12)². Divide the original density by this probability on (3.6,12).",
      "For Z=X-3.6, the conditional density is 2(8.4-z)/(8.4)² on (0,8.4). Its first two moments are 2.8 and 11.76.",
      "The shift contributes no variance, so Var(X given X>3.6)=(8.4)²/18=3.92. The conditional mean is 6.4."
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
      "The condition probability is ((12-3.6)/12)². Divide the original density by this probability on (3.6,12)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 12,
      "lower": 3.5999999999999996,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:37",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  },
  {
    "question": "7 independent insureds each have claim probability 0.2. Let N count insureds with a claim. Given N>0, calculate E[N]. Round your answer to four decimal places.",
    "choices": [
      "$1.1064$",
      "$1.2654$",
      "$1.4000$",
      "$1.7500$",
      "$1.7715$"
    ],
    "answer": 4,
    "solution": [
      "N is binomial with mean 1.4 and zero probability 0.209715.",
      "The N=0 outcome contributes zero to the unconditional first moment, so the positive-count moment numerator remains E[N].",
      "Renormalize by P(N>0): 1.4/0.790285=1.771513."
    ],
    "feedback": {
      "0": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
      "1": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
      "2": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0).",
      "3": "Positive-count expectation uses the zero-truncated population; divide its unchanged moment numerator by P(N>0)."
    },
    "skills": [
      "binomial mean",
      "zero truncation",
      "conditional expectation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: binomial mean, zero truncation, conditional expectation.",
      "N is binomial with mean 1.4 and zero probability 0.209715."
    ],
    "verification": {
      "kind": "binomial",
      "n": 7,
      "p": 0.2,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:38",
    "topicId": "urv-d1-conditional-discrete",
    "family": "conditional-binomial-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-d1-conditional-discrete"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(6-x)/36 for 0<x<6, and zero otherwise. Given X>2.7, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$0.6050$",
      "$0.7778$",
      "$0.9075$",
      "$1.8150$",
      "$2.0000$"
    ],
    "answer": 0,
    "solution": [
      "The condition probability is ((6-2.7)/6)². Divide the original density by this probability on (2.7,6).",
      "For Z=X-2.7, the conditional density is 2(3.3-z)/(3.3)² on (0,3.3). Its first two moments are 1.1 and 1.815.",
      "The shift contributes no variance, so Var(X given X>2.7)=(3.3)²/18=0.605. The conditional mean is 3.8."
    ],
    "feedback": {
      "1": "This is the conditional SD.",
      "2": "This uses a conditional uniform distribution instead of the triangular density.",
      "3": "This is the second raw moment of the shifted variable.",
      "4": "This is the unconditional variance."
    },
    "skills": [
      "conditional density",
      "shifted support",
      "two moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional density, shifted support, two moments.",
      "The condition probability is ((6-2.7)/6)². Divide the original density by this probability on (2.7,6)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 6,
      "lower": 2.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-d:39",
    "topicId": "urv-d2-conditional-continuous",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-d2-conditional-continuous"
    ],
    "cumulative": false
  }
];

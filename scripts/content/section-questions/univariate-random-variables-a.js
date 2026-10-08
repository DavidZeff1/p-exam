export default [
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,4, and zero otherwise. The constant c is unknown. A benefit is Y=200 max(N-1,0). Calculate P(Y=0). Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.2000$",
      "$0.3200$",
      "$0.6000$",
      "$0.8000$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+5)=1/15.",
      "Transform each count to its benefit. Counts through 1 give the CDF jump at zero; a positive benefit has probability 0.8.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 0.2."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+5)=1/15."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 4,
      "d": 1,
      "B": 200,
      "target": "zero",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:0",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,5, and zero otherwise. The constant c is unknown. A benefit is Y=210 max(N-2,0). Calculate P(Y>420 given Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.4000$",
      "$0.5200$",
      "$0.6000$",
      "$0.7000$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+6)=1/21.",
      "Transform each count to its benefit. Counts through 2 give the CDF jump at zero; a positive benefit has probability 0.714286.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 0.4."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+6)=1/21."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 5,
      "d": 2,
      "B": 210,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:1",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "X is equally likely to be each integer from 1 through 7. A contract pays Y=200 min(max(X-2,0),3). Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$255.5506$",
      "$65306.1224$",
      "$117551.0204$",
      "$160000.0000$",
      "$182857.1429$"
    ],
    "answer": 1,
    "solution": [
      "List the payment at each supported X value: 0, 0, 200, 400, 600, 600, 600.",
      "The equal-weight moments are E[Y]=342.857143 and E[Y²]=182857.142857.",
      "Subtract the squared mean: Var(Y)=65306.122449."
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
      "List the payment at each supported X value: 0, 0, 200, 400, 600, 600, 600."
    ],
    "verification": {
      "kind": "discrete-uniform-payment",
      "n": 7,
      "d": 2,
      "cap": 3,
      "B": 200,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:8",
    "topicId": "urv-a1-random-variables",
    "family": "discrete-uniform-capped",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "X has density f(x)=a+bx on (0,4) and zero elsewhere. The unknown constants satisfy a:b=0.75:0.3. Given X>2, calculate P(X>3.2). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.2711$",
      "$0.3400$",
      "$0.4436$",
      "$0.5461$"
    ],
    "answer": 3,
    "solution": [
      "Write a=0.75c and b=0.3c. Normalizing the density gives c=1/5.4.",
      "The CDF on the support is F(x)=0.138889x+(0.055556/2)x².",
      "Divide the tail above 3.2 by the tail above 2: 0.271111/0.611111=0.443636."
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
      "Write a=0.75c and b=0.3c. Normalizing the density gives c=1/5.4."
    ],
    "verification": {
      "kind": "linear-density",
      "L": 4,
      "A": 0.13888888888888887,
      "B": 0.05555555555555556,
      "t": 2.0,
      "u": 3.2,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:9",
    "topicId": "urv-a2-pdf",
    "family": "density-infer-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "A loss fraction X has probability 0.2 at 0 and 0.2 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.5, calculate the probability X=1. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.2000$",
      "$0.2500$",
      "$0.3000$",
      "$0.4000$"
    ],
    "answer": 4,
    "solution": [
      "The continuous component has weight 0.6, so its mass above 0.5 is 0.3.",
      "The conditioning event also includes the atom at 1; its total probability is 0.5.",
      "Divide the atom mass by that total: 0.2/0.5=0.4."
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
      "The continuous component has weight 0.6, so its mass above 0.5 is 0.3."
    ],
    "verification": {
      "kind": "mixed-cdf",
      "p0": 0.2,
      "p1": 0.2,
      "cut": 0.5,
      "target": "atom-conditional"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:10",
    "topicId": "urv-a3-cdf",
    "family": "cdf-atom-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "A device independently survives each year with probability 0.8, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays 150(4-t); after year 3 it pays zero. Calculate the variance of the payment. Round your answer to four decimal places.",
    "choices": [
      "$157.2000$",
      "$181.8465$",
      "$3600.0000$",
      "$33068.1600$",
      "$57780.0000$"
    ],
    "answer": 3,
    "solution": [
      "The first-failure year T is geometric: P(T=t)=0.2(0.8)^(t-1).",
      "Payment is 450, 300, 150 in the first three years; all later outcomes have payment zero.",
      "Weighted moments are E[Y]=157.2 and E[Y²]=57780.",
      "Var(Y)=E[Y²]-(E[Y])²=33068.16."
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
      "B": 150,
      "horizon": 4,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:11",
    "topicId": "urv-a1-random-variables",
    "family": "geometric-benefit",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "X has density proportional to x^1 on (0,9) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
    "choices": [
      "$4.0249$",
      "$4.7362$",
      "$5.4000$",
      "$6.9714$",
      "$8.0498$"
    ],
    "answer": 0,
    "solution": [
      "Normalize the density: f(x)=2x^1/81, so F(x)=(x/9)^2.",
      "Solve F(q)=u to get q(u)=9u^(1/2).",
      "The requested difference is 9[0.8^(1/2)-0.2^(1/2)]=4.024922."
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
      "Normalize the density: f(x)=2x^1/81, so F(x)=(x/9)^2."
    ],
    "verification": {
      "kind": "power-density",
      "L": 9,
      "power": 1,
      "low": 0.2,
      "high": 0.8,
      "target": "quantile-difference"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:12",
    "topicId": "urv-a2-pdf",
    "family": "power-quantile-difference",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X has density f(x)=2x/25 on (0,5) and zero elsewhere. A claim is recorded only when X>2. Calculate the mean loss among recorded claims. Round your answer to four decimal places.",
    "choices": [
      "$2.6208$",
      "$3.1200$",
      "$3.3333$",
      "$3.5000$",
      "$3.7143$"
    ],
    "answer": 4,
    "solution": [
      "The recording probability is 1-(2/5)²=0.84.",
      "The restricted first-moment integral is the integral of x(2x/25) from 2 to 5, equal to 3.12.",
      "Normalize to the recorded population: 3.12/0.84=3.714286."
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
      "The recording probability is 1-(2/5)²=0.84."
    ],
    "verification": {
      "kind": "power-density",
      "L": 5,
      "power": 1,
      "lower": 2,
      "target": "conditional-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:13",
    "topicId": "urv-a3-cdf",
    "family": "continuous-conditional-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "The claim count N takes values 0 through 3, with P(N=k)=c(k+1). A contract pays 50 for each claim in excess of the first 1 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
    "choices": [
      "$37.5000$",
      "$50.0000$",
      "$55.0000$",
      "$100.0000$",
      "$4750.0000$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the probabilities: c[1+2+⋯+4]=1, giving c=2/(4×5).",
      "The payment at count k is 50 max(k-1,0). Its possible values are 0, 0, 50, 100.",
      "Weight each payment by c(k+1); the expected payment is 55."
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
      "Normalize the probabilities: c[1+2+⋯+4]=1, giving c=2/(4×5)."
    ],
    "verification": {
      "kind": "finite-payment",
      "n": 4,
      "scale": 50,
      "d": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:14",
    "topicId": "urv-a1-random-variables",
    "family": "finite-payment-moments",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X has density c(14-x) for 0<x<14, and zero otherwise. The constant c is unknown. A loss has already exceeded 3.5. Calculate the probability that it exceeds 10.5. Round your answer to four decimal places.",
    "choices": [
      "$0.0625$",
      "$0.1111$",
      "$0.3333$",
      "$0.5625$",
      "$0.8889$"
    ],
    "answer": 1,
    "solution": [
      "Normalization gives c=2/196, since the integral of 14-x over the support is 196/2.",
      "The survival function is P(X>x)=((14-x)/14)².",
      "Divide survival at 10.5 by survival at 3.5: [(14-10.5)/(14-3.5)]²=0.111111."
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
      "Normalization gives c=2/196, since the integral of 14-x over the support is 196/2."
    ],
    "verification": {
      "kind": "triangular-tail",
      "B": 14,
      "t": 3.5,
      "u": 10.5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:15",
    "topicId": "urv-a2-pdf",
    "family": "triangular-tail-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,6, and zero otherwise. The constant c is unknown. A benefit is Y=220 max(N-1,0). Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$333.9286$",
      "$534.2857$",
      "$667.8571$",
      "$801.4286$",
      "$1335.7143$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+7)=1/28.",
      "Transform each count to its benefit. Counts through 1 give the CDF jump at zero; a positive benefit has probability 0.892857.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 667.857143."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+7)=1/28."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 6,
      "d": 1,
      "B": 220,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:2",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,7, and zero otherwise. The constant c is unknown. A benefit is Y=100 max(N-2,0). Calculate P(Y=0). Round your answer to four decimal places.",
    "choices": [
      "$0.0833$",
      "$0.1667$",
      "$0.2867$",
      "$0.5833$",
      "$0.8333$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+8)=1/36.",
      "Transform each count to its benefit. Counts through 2 give the CDF jump at zero; a positive benefit has probability 0.833333.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 0.166667."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+8)=1/36."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 7,
      "d": 2,
      "B": 100,
      "target": "zero",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:3",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.175+(1-0.175)(x/9)^4 for 0≤x<9, and F(x)=1 for x≥9. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$3.7125$",
      "$5.9400$",
      "$7.2000$",
      "$7.5150$",
      "$44.5500$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.175. It contributes zero to E[X].",
      "On (0,9), the density is (1-0.175)4x^3/9^4.",
      "Integrating x times this density gives (1-0.175)9×4/(4+1)=5.94."
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
      "The jump at zero is 0.175. It contributes zero to E[X]."
    ],
    "verification": {
      "kind": "mixed-power",
      "p": 0.17500000000000002,
      "B": 9,
      "power": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:16",
    "topicId": "urv-a3-cdf",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.125+(1-0.125)(x/4)^3 for 0≤x<4, and F(x)=1 for x≥4. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$1.7500$",
      "$2.6250$",
      "$3.0000$",
      "$3.1250$",
      "$8.4000$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.125. It contributes zero to E[X].",
      "On (0,4), the density is (1-0.125)3x^2/4^3.",
      "Integrating x times this density gives (1-0.125)4×3/(3+1)=2.625."
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
      "B": 4,
      "power": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:17",
    "topicId": "urv-a3-cdf",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.25+(1-0.25)(x/4)^4 for 0≤x<4, and F(x)=1 for x≥4. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$1.5000$",
      "$2.4000$",
      "$3.2000$",
      "$3.4000$",
      "$8.0000$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.25. It contributes zero to E[X].",
      "On (0,4), the density is (1-0.25)4x^3/4^4.",
      "Integrating x times this density gives (1-0.25)4×4/(4+1)=2.4."
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
      "The jump at zero is 0.25. It contributes zero to E[X]."
    ],
    "verification": {
      "kind": "mixed-power",
      "p": 0.25,
      "B": 4,
      "power": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:18",
    "topicId": "urv-a3-cdf",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,2600). The insurer pays Y=0.65max(X-780,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$591.5000$",
      "$760.5000$",
      "$887.2500$",
      "$1170.0000$",
      "$1267.5000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.3 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(780+y/0.65)/2600.",
      "Set this to 0.75 and solve y=0.65(0.75×2600-780)=760.5."
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
      "B": 2600,
      "d": 780.0000000000001,
      "share": 0.65,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:19",
    "topicId": "urv-a3-cdf",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "X has CDF F(x)=(x/7)^5 for 0<x<7, with F(x)=0 below the support and 1 above it. A benefit is Y=2X²+6. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$17.6667$",
      "$70.0000$",
      "$74.0556$",
      "$76.0000$",
      "$146.0000$"
    ],
    "answer": 3,
    "solution": [
      "Differentiating the CDF gives density 5x^4/7^5.",
      "The second raw moment is E[X²]=5×7²/(5+2)=35.",
      "Linearity gives E[Y]=2E[X²]+6=76. Squaring the mean would not give E[X²]."
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
      "Differentiating the CDF gives density 5x^4/7^5."
    ],
    "verification": {
      "kind": "power-expectation",
      "B": 7,
      "power": 5,
      "a": 2,
      "shift": 6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:20",
    "topicId": "urv-a1-random-variables",
    "family": "power-transformed-expectation",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(12-x)/144 for 0<x<12, and zero otherwise. Given X>4.8, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.6971$",
      "$2.8800$",
      "$4.3200$",
      "$8.0000$",
      "$8.6400$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((12-4.8)/12)². Divide the original density by this probability on (4.8,12).",
      "For Z=X-4.8, the conditional density is 2(7.2-z)/(7.2)² on (0,7.2). Its first two moments are 2.4 and 8.64.",
      "The shift contributes no variance, so Var(X given X>4.8)=(7.2)²/18=2.88. The conditional mean is 7.2."
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
      "The condition probability is ((12-4.8)/12)². Divide the original density by this probability on (4.8,12)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 12,
      "lower": 4.800000000000001,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:21",
    "topicId": "urv-a2-pdf",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1200. The payment is Y=min(0.75max(X-300,0),450). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
    "choices": [
      "$0.2212$",
      "$0.3064$",
      "$0.4724$",
      "$0.5276$",
      "$0.7788$"
    ],
    "answer": 1,
    "solution": [
      "The payment is positive when X>300, and reaches its cap when X≥900.",
      "The event 0<Y<450 corresponds to 300<X<900. Both the zero atom and the cap atom are excluded.",
      "Subtract the two exponential survival probabilities: exp(-300/1200)-exp(-(300+450/0.75)/1200)=0.306434."
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
      "The payment is positive when X>300, and reaches its cap when X≥900."
    ],
    "verification": {
      "kind": "payment-interior",
      "mu": 1200,
      "d": 300,
      "cap": 450,
      "share": 0.75,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:22",
    "topicId": "urv-a3-cdf",
    "family": "payment-zero-and-cap",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "X is equally likely to be each integer from 1 through 8. A contract pays Y=150 min(max(X-2,0),3). Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$190.2917$",
      "$36210.9375$",
      "$79101.5625$",
      "$115312.5000$",
      "$118125.0000$"
    ],
    "answer": 1,
    "solution": [
      "List the payment at each supported X value: 0, 0, 150, 300, 450, 450, 450, 450.",
      "The equal-weight moments are E[Y]=281.25 and E[Y²]=115312.5.",
      "Subtract the squared mean: Var(Y)=36210.9375."
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
      "List the payment at each supported X value: 0, 0, 150, 300, 450, 450, 450, 450."
    ],
    "verification": {
      "kind": "discrete-uniform-payment",
      "n": 8,
      "d": 2,
      "cap": 3,
      "B": 150,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:23",
    "topicId": "urv-a1-random-variables",
    "family": "discrete-uniform-capped",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,8, and zero otherwise. The constant c is unknown. A benefit is Y=110 max(N-1,0). Calculate P(Y>220 given Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.1667$",
      "$0.4167$",
      "$0.8333$",
      "$0.9167$",
      "$0.9533$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+9)=1/45.",
      "Transform each count to its benefit. Counts through 1 give the CDF jump at zero; a positive benefit has probability 0.933333.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 0.833333."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+9)=1/45."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 8,
      "d": 1,
      "B": 110,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:4",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,9, and zero otherwise. The constant c is unknown. A benefit is Y=120 max(N-2,0). Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$244.3636$",
      "$390.9818$",
      "$488.7273$",
      "$586.4727$",
      "$977.4545$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+10)=1/55.",
      "Transform each count to its benefit. Counts through 2 give the CDF jump at zero; a positive benefit has probability 0.890909.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 488.727273."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+10)=1/55."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 9,
      "d": 2,
      "B": 120,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:5",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "X has density f(x)=a+bx on (0,3) and zero elsewhere. The unknown constants satisfy a:b=0.75:0.2. Given X>1.5, calculate P(X>2.4). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.2457$",
      "$0.3257$",
      "$0.4300$",
      "$0.5301$"
    ],
    "answer": 3,
    "solution": [
      "Write a=0.75c and b=0.2c. Normalizing the density gives c=1/3.15.",
      "The CDF on the support is F(x)=0.238095x+(0.063492/2)x².",
      "Divide the tail above 2.4 by the tail above 1.5: 0.245714/0.571429=0.43."
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
      "Write a=0.75c and b=0.2c. Normalizing the density gives c=1/3.15."
    ],
    "verification": {
      "kind": "linear-density",
      "L": 3,
      "A": 0.23809523809523808,
      "B": 0.06349206349206349,
      "t": 1.5,
      "u": 2.4000000000000004,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:24",
    "topicId": "urv-a2-pdf",
    "family": "density-infer-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "A loss fraction X has probability 0.2 at 0 and 0.25 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.5, calculate the probability X=1. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.2500$",
      "$0.2750$",
      "$0.3125$",
      "$0.4762$"
    ],
    "answer": 4,
    "solution": [
      "The continuous component has weight 0.55, so its mass above 0.5 is 0.275.",
      "The conditioning event also includes the atom at 1; its total probability is 0.525.",
      "Divide the atom mass by that total: 0.25/0.525=0.47619."
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
      "The continuous component has weight 0.55, so its mass above 0.5 is 0.275."
    ],
    "verification": {
      "kind": "mixed-cdf",
      "p0": 0.2,
      "p1": 0.25,
      "cut": 0.5,
      "target": "atom-conditional"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:25",
    "topicId": "urv-a3-cdf",
    "family": "cdf-atom-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "A device independently survives each year with probability 0.75, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays 200(4-t); after year 3 it pays zero. Calculate the variance of the payment. Round your answer to four decimal places.",
    "choices": [
      "$248.0982$",
      "$253.1250$",
      "$7500.0000$",
      "$61552.7344$",
      "$125625.0000$"
    ],
    "answer": 3,
    "solution": [
      "The first-failure year T is geometric: P(T=t)=0.25(0.75)^(t-1).",
      "Payment is 600, 400, 200 in the first three years; all later outcomes have payment zero.",
      "Weighted moments are E[Y]=253.125 and E[Y²]=125625.",
      "Var(Y)=E[Y²]-(E[Y])²=61552.734375."
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
      "B": 200,
      "horizon": 4,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:26",
    "topicId": "urv-a1-random-variables",
    "family": "geometric-benefit",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "X has density proportional to x^3 on (0,6) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
    "choices": [
      "$1.6620$",
      "$3.6000$",
      "$4.0124$",
      "$5.2807$",
      "$5.6744$"
    ],
    "answer": 0,
    "solution": [
      "Normalize the density: f(x)=4x^3/1296, so F(x)=(x/6)^4.",
      "Solve F(q)=u to get q(u)=6u^(1/4).",
      "The requested difference is 6[0.8^(1/4)-0.2^(1/4)]=1.662008."
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
      "Normalize the density: f(x)=4x^3/1296, so F(x)=(x/6)^4."
    ],
    "verification": {
      "kind": "power-density",
      "L": 6,
      "power": 3,
      "low": 0.2,
      "high": 0.8,
      "target": "quantile-difference"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:27",
    "topicId": "urv-a2-pdf",
    "family": "power-quantile-difference",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X has density f(x)=2x/25 on (0,5) and zero elsewhere. A claim is recorded only when X>1. Calculate the mean loss among recorded claims. Round your answer to four decimal places.",
    "choices": [
      "$3.0000$",
      "$3.1744$",
      "$3.3067$",
      "$3.3333$",
      "$3.4444$"
    ],
    "answer": 4,
    "solution": [
      "The recording probability is 1-(1/5)²=0.96.",
      "The restricted first-moment integral is the integral of x(2x/25) from 1 to 5, equal to 3.306667.",
      "Normalize to the recorded population: 3.306667/0.96=3.444444."
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
      "The recording probability is 1-(1/5)²=0.96."
    ],
    "verification": {
      "kind": "power-density",
      "L": 5,
      "power": 1,
      "lower": 1,
      "target": "conditional-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:28",
    "topicId": "urv-a3-cdf",
    "family": "continuous-conditional-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "The claim count N takes values 0 through 6, with P(N=k)=c(k+1). A contract pays 125 for each claim in excess of the first 2 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
    "choices": [
      "$178.5714$",
      "$250.0000$",
      "$267.8571$",
      "$500.0000$",
      "$106026.7857$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the probabilities: c[1+2+⋯+7]=1, giving c=2/(7×8).",
      "The payment at count k is 125 max(k-2,0). Its possible values are 0, 0, 0, 125, 250, 375, 500.",
      "Weight each payment by c(k+1); the expected payment is 267.857143."
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
      "scale": 125,
      "d": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:29",
    "topicId": "urv-a1-random-variables",
    "family": "finite-payment-moments",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X has density c(12-x) for 0<x<12, and zero otherwise. The constant c is unknown. A loss has already exceeded 3. Calculate the probability that it exceeds 9. Round your answer to four decimal places.",
    "choices": [
      "$0.0625$",
      "$0.1111$",
      "$0.3333$",
      "$0.5625$",
      "$0.8889$"
    ],
    "answer": 1,
    "solution": [
      "Normalization gives c=2/144, since the integral of 12-x over the support is 144/2.",
      "The survival function is P(X>x)=((12-x)/12)².",
      "Divide survival at 9 by survival at 3: [(12-9)/(12-3)]²=0.111111."
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
      "Normalization gives c=2/144, since the integral of 12-x over the support is 144/2."
    ],
    "verification": {
      "kind": "triangular-tail",
      "B": 12,
      "t": 3.0,
      "u": 9.0,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:30",
    "topicId": "urv-a2-pdf",
    "family": "triangular-tail-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.125+(1-0.125)(x/8)^3 for 0≤x<8, and F(x)=1 for x≥8. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$3.5000$",
      "$5.2500$",
      "$6.0000$",
      "$6.2500$",
      "$33.6000$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.125. It contributes zero to E[X].",
      "On (0,8), the density is (1-0.125)3x^2/8^3.",
      "Integrating x times this density gives (1-0.125)8×3/(3+1)=5.25."
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
      "B": 8,
      "power": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:31",
    "topicId": "urv-a3-cdf",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,4, and zero otherwise. The constant c is unknown. A benefit is Y=130 max(N-1,0). Calculate P(Y=0). Round your answer to four decimal places.",
    "choices": [
      "$0.1000$",
      "$0.2000$",
      "$0.3200$",
      "$0.6000$",
      "$0.8000$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+5)=1/15.",
      "Transform each count to its benefit. Counts through 1 give the CDF jump at zero; a positive benefit has probability 0.8.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 0.2."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+5)=1/15."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 4,
      "d": 1,
      "B": 130,
      "target": "zero",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:6",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "A claim count N has probability mass function P(N=k)=c(k+1), k=0,1,…,5, and zero otherwise. The constant c is unknown. A benefit is Y=140 max(N-2,0). Calculate P(Y>280 given Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.4000$",
      "$0.5200$",
      "$0.6000$",
      "$0.7000$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the mass function: c=1/(1+2+…+6)=1/21.",
      "Transform each count to its benefit. Counts through 2 give the CDF jump at zero; a positive benefit has probability 0.714286.",
      "Sum masses for the requested event, divide by the positive mass when conditioning, or sum benefit times mass for the mean. The requested value is 0.4."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "PMF normalization",
      "random-variable transformation",
      "CDF and event probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: PMF normalization, random-variable transformation, CDF and event probabilities.",
      "Normalize the mass function: c=1/(1+2+…+6)=1/21."
    ],
    "verification": {
      "kind": "section-rv",
      "n": 5,
      "d": 2,
      "B": 140,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:7",
    "topicId": "urv-a1-random-variables",
    "family": "cumulative-univariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a1-random-variables",
      "urv-a2-pdf",
      "urv-a3-cdf"
    ],
    "cumulative": true
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.25+(1-0.25)(x/8)^4 for 0≤x<8, and F(x)=1 for x≥8. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$3.0000$",
      "$4.8000$",
      "$6.4000$",
      "$6.8000$",
      "$32.0000$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.25. It contributes zero to E[X].",
      "On (0,8), the density is (1-0.25)4x^3/8^4.",
      "Integrating x times this density gives (1-0.25)8×4/(4+1)=4.8."
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
      "The jump at zero is 0.25. It contributes zero to E[X]."
    ],
    "verification": {
      "kind": "mixed-power",
      "p": 0.25,
      "B": 8,
      "power": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:32",
    "topicId": "urv-a3-cdf",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.2+(1-0.2)(x/9)^2 for 0≤x<9, and F(x)=1 for x≥9. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$3.6000$",
      "$4.8000$",
      "$6.0000$",
      "$6.6000$",
      "$32.4000$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.2. It contributes zero to E[X].",
      "On (0,9), the density is (1-0.2)2x^1/9^2.",
      "Integrating x times this density gives (1-0.2)9×2/(2+1)=4.8."
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
      "The jump at zero is 0.2. It contributes zero to E[X]."
    ],
    "verification": {
      "kind": "mixed-power",
      "p": 0.2,
      "B": 9,
      "power": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:33",
    "topicId": "urv-a3-cdf",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,2000). The insurer pays Y=0.65max(X-700,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$422.5000$",
      "$520.0000$",
      "$633.7500$",
      "$800.0000$",
      "$975.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.35 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(700+y/0.65)/2000.",
      "Set this to 0.75 and solve y=0.65(0.75×2000-700)=520."
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
      "B": 2000,
      "d": 700.0000000000001,
      "share": 0.65,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:34",
    "topicId": "urv-a3-cdf",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "X has CDF F(x)=(x/4)^2 for 0<x<4, with F(x)=0 below the support and 1 above it. A benefit is Y=3X²+8. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$16.0000$",
      "$24.0000$",
      "$29.3333$",
      "$32.0000$",
      "$80.0000$"
    ],
    "answer": 3,
    "solution": [
      "Differentiating the CDF gives density 2x^1/4^2.",
      "The second raw moment is E[X²]=2×4²/(2+2)=8.",
      "Linearity gives E[Y]=3E[X²]+8=32. Squaring the mean would not give E[X²]."
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
      "Differentiating the CDF gives density 2x^1/4^2."
    ],
    "verification": {
      "kind": "power-expectation",
      "B": 4,
      "power": 2,
      "a": 3,
      "shift": 8,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:35",
    "topicId": "urv-a1-random-variables",
    "family": "power-transformed-expectation",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(6-x)/36 for 0<x<6, and zero otherwise. Given X>1.8, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$0.9800$",
      "$0.9899$",
      "$1.4700$",
      "$2.0000$",
      "$2.9400$"
    ],
    "answer": 0,
    "solution": [
      "The condition probability is ((6-1.8)/6)². Divide the original density by this probability on (1.8,6).",
      "For Z=X-1.8, the conditional density is 2(4.2-z)/(4.2)² on (0,4.2). Its first two moments are 1.4 and 2.94.",
      "The shift contributes no variance, so Var(X given X>1.8)=(4.2)²/18=0.98. The conditional mean is 3.2."
    ],
    "feedback": {
      "1": "This is the conditional SD.",
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
      "The condition probability is ((6-1.8)/6)². Divide the original density by this probability on (1.8,6)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 6,
      "lower": 1.7999999999999998,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:36",
    "topicId": "urv-a2-pdf",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1000. The payment is Y=min(0.75max(X-350,0),400). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
    "choices": [
      "$0.2913$",
      "$0.2953$",
      "$0.4134$",
      "$0.5866$",
      "$0.7047$"
    ],
    "answer": 0,
    "solution": [
      "The payment is positive when X>350, and reaches its cap when X≥883.333333.",
      "The event 0<Y<400 corresponds to 350<X<883.333333. Both the zero atom and the cap atom are excluded.",
      "Subtract the two exponential survival probabilities: exp(-350/1000)-exp(-(350+400/0.75)/1000)=0.291285."
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
      "The payment is positive when X>350, and reaches its cap when X≥883.333333."
    ],
    "verification": {
      "kind": "payment-interior",
      "mu": 1000,
      "d": 350,
      "cap": 400,
      "share": 0.75,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:37",
    "topicId": "urv-a3-cdf",
    "family": "payment-zero-and-cap",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a3-cdf"
    ],
    "cumulative": false
  },
  {
    "question": "X is equally likely to be each integer from 1 through 8. A contract pays Y=200 min(max(X-3,0),3). Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$264.5751$",
      "$70000.0000$",
      "$90000.0000$",
      "$160000.0000$",
      "$210000.0000$"
    ],
    "answer": 1,
    "solution": [
      "List the payment at each supported X value: 0, 0, 0, 200, 400, 600, 600, 600.",
      "The equal-weight moments are E[Y]=300 and E[Y²]=160000.",
      "Subtract the squared mean: Var(Y)=70000."
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
      "List the payment at each supported X value: 0, 0, 0, 200, 400, 600, 600, 600."
    ],
    "verification": {
      "kind": "discrete-uniform-payment",
      "n": 8,
      "d": 3,
      "cap": 3,
      "B": 200,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:38",
    "topicId": "urv-a1-random-variables",
    "family": "discrete-uniform-capped",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-a1-random-variables"
    ],
    "cumulative": false
  },
  {
    "question": "X has density f(x)=a+bx on (0,5) and zero elsewhere. The unknown constants satisfy a:b=1:0.4. Given X>2.5, calculate P(X>4). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.2800$",
      "$0.3450$",
      "$0.4480$",
      "$0.5512$"
    ],
    "answer": 3,
    "solution": [
      "Write a=1c and b=0.4c. Normalizing the density gives c=1/10.",
      "The CDF on the support is F(x)=0.1x+(0.04/2)x².",
      "Divide the tail above 4 by the tail above 2.5: 0.28/0.625=0.448."
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
      "Write a=1c and b=0.4c. Normalizing the density gives c=1/10."
    ],
    "verification": {
      "kind": "linear-density",
      "L": 5,
      "A": 0.1,
      "B": 0.04,
      "t": 2.5,
      "u": 4.0,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-a:39",
    "topicId": "urv-a2-pdf",
    "family": "density-infer-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-a2-pdf"
    ],
    "cumulative": false
  }
];

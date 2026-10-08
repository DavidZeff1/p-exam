export default [
  {
    "question": "A loss is from an exponential class with probability 0.46 and a uniform class otherwise. Within the classes, X is exponential with mean 8460, or uniform on (0,40800), respectively. The ordinary deductible d is 10200. Calculate the expected payment (X-d)₊ per loss. Round your answer to four decimal places.",
    "choices": [
      "$3680.9979$",
      "$5889.5967$",
      "$7361.9959$",
      "$8834.3950$",
      "$14723.9917$"
    ],
    "answer": 2,
    "solution": [
      "Use class-specific survival functions: exp(-x/8460) and 1-x/40800 on the uniform support.",
      "The mixture survival probability at the deductible is 0.542765. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 7361.995858."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8460) and 1-x/40800 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 40800,
      "mu": 8460,
      "w": 0.45999999999999996,
      "d": 10200.0,
      "a": 24480.0,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:0",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "A loss is from an exponential class with probability 0.47 and a uniform class otherwise. Within the classes, X is exponential with mean 8470, or uniform on (0,40850), respectively. The ordinary deductible d is 10212.5. Calculate the probability the loss came from the exponential class, given X>d. Round your answer to four decimal places.",
    "choices": [
      "$0.1307$",
      "$0.2615$",
      "$0.3815$",
      "$0.6307$",
      "$0.7385$"
    ],
    "answer": 1,
    "solution": [
      "Use class-specific survival functions: exp(-x/8470) and 1-x/40850 on the uniform support.",
      "The mixture survival probability at the deductible is 0.538253. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 0.2615."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8470) and 1-x/40850 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 40850,
      "mu": 8470,
      "w": 0.47,
      "d": 10212.5,
      "a": 24510.0,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:1",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "Loss X is uniform on (0,1600). The insurer pays Y=0.6max(X-320,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$384.0000$",
      "$528.0000$",
      "$576.0000$",
      "$720.0000$",
      "$880.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(320+y/0.6)/1600.",
      "Set this to 0.75 and solve y=0.6(0.75×1600-320)=528."
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
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive."
    ],
    "verification": {
      "kind": "uniform-payment-quantile",
      "B": 1600,
      "d": 320.0,
      "share": 0.6,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:8",
    "topicId": "urv-c1-continuous-uniform",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-400)₊] to E[X] is 0.60653066, rounded to eight decimal places. Calculate P(X>800). Round your answer to four decimal places.",
    "choices": [
      "$0.1353$",
      "$0.3679$",
      "$0.4574$",
      "$0.6065$",
      "$0.6321$"
    ],
    "answer": 1,
    "solution": [
      "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
      "The positive mean is μ=800; survival beyond 800 is exp(-800/800).",
      "The probability is 0.367879."
    ],
    "feedback": {
      "0": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
      "2": "Recheck the setup and the requested quantity before evaluating the formula.",
      "3": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
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
      "d": 400,
      "threshold": 800,
      "target": "tail-from-deductible"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:9",
    "topicId": "urv-c2-exponential",
    "family": "exponential-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-c2-exponential"
    ],
    "cumulative": false
  },
  {
    "question": "A gamma waiting time T has mean 6 and variance 12. Calculate P(T>6). Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0498$",
      "$0.4232$",
      "$0.5000$",
      "$0.5768$"
    ],
    "answer": 2,
    "solution": [
      "Using mean αθ and variance αθ², infer scale θ=12/6=2 and shape α=3.",
      "The inferred shape is an integer, so gamma survival equals a Poisson lower tail: exp(-t/θ) times the sum of (t/θ)^j/j! for j=0,…,α-1.",
      "At t=6, t/θ=3.0. The probability is 0.42319."
    ],
    "feedback": {
      "0": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms.",
      "1": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms.",
      "3": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms.",
      "4": "Infer shape and scale from both moments before calculating the gamma tail; a one-event exponential tail omits the other terms."
    },
    "skills": [
      "infer gamma parameters",
      "integer-shape waiting-time probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer gamma parameters, integer-shape waiting-time probability.",
      "Using mean αθ and variance αθ², infer scale θ=12/6=2 and shape α=3."
    ],
    "verification": {
      "kind": "gamma",
      "shape": 3,
      "scale": 2,
      "t": 6,
      "target": "tail-from-moments"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:10",
    "topicId": "urv-c3-gamma",
    "family": "gamma-parameter-tail",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c3-gamma"
    ],
    "cumulative": false
  },
  {
    "question": "A proportion X has a beta distribution. Its mean is specified exactly as 2/(2+3) and its variance as (2×3)/[(2+3)²(2+3+1)]. Four risks share the same X; conditional on X=x each risk independently has a claim with probability x. Calculate the unconditional probability that the first two risks both claim, irrespective of the other two. Round your answer to four decimal places.",
    "choices": [
      "$0.0400$",
      "$0.1600$",
      "$0.2000$",
      "$0.4000$",
      "$0.8400$"
    ],
    "answer": 2,
    "solution": [
      "Given X=x, the first-two joint claim probability is x². The unconditional probability is therefore E[X²].",
      "Use the moment identity E[X²]=Var(X)+(E[X])². Conditional independence given X does not imply unconditional independence.",
      "The result is 0.04+(2/5)²=0.2."
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
      "b": 3,
      "target": "second-moment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:11",
    "topicId": "urv-c4-beta",
    "family": "beta-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c4-beta"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is normal with mean 80. Its 80th percentile is 92.62431850, rounded to eight decimal places. Calculate P(X>102.5). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
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
      "The threshold has z=(102.5-80)/15=1.5.",
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
      "mu": 80,
      "sd": 15,
      "t": 102.5,
      "target": "tail-from-quantile"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:12",
    "topicId": "urv-c5-normal",
    "family": "normal-quantile-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-c5-normal"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,1800). The insurer pays Y=0.6max(X-360,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$432.0000$",
      "$594.0000$",
      "$648.0000$",
      "$810.0000$",
      "$990.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(360+y/0.6)/1800.",
      "Set this to 0.75 and solve y=0.6(0.75×1800-360)=594."
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
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive."
    ],
    "verification": {
      "kind": "uniform-payment-quantile",
      "B": 1800,
      "d": 360.0,
      "share": 0.6,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:13",
    "topicId": "urv-c1-continuous-uniform",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A device lifetime is exponential with mean 5 years. A contract pays benefit B for failure by year 1, pays 0.5B for failure after year 1 but by year 3, and otherwise pays zero. Its expected payment is 700. Calculate B. Round your answer to four decimal places.",
    "choices": [
      "$221.3602$",
      "$1400.0000$",
      "$1551.4585$",
      "$2213.5871$",
      "$3861.6589$"
    ],
    "answer": 3,
    "solution": [
      "The two covered interval probabilities are 0.181269 and 0.269919.",
      "E[benefit]=B[0.181269+0.5(0.269919)]=0.316229B.",
      "Solve B=700/0.316229=2213.587086."
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
      "The two covered interval probabilities are 0.181269 and 0.269919."
    ],
    "verification": {
      "kind": "exponential-benefit",
      "mu": 5,
      "t1": 1,
      "t2": 3,
      "fraction": 0.5,
      "meanPay": 700
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:14",
    "topicId": "urv-c2-exponential",
    "family": "exponential-benefit",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c2-exponential"
    ],
    "cumulative": false
  },
  {
    "question": "A Poisson process has rate 0.5 per hour. Let T be the time of the 4th arrival. Given no 4th arrival by hour 3, calculate the probability it is still absent at hour 6. Round your answer to four decimal places.",
    "choices": [
      "$0.2231$",
      "$0.3073$",
      "$0.6472$",
      "$0.6927$",
      "$0.8375$"
    ],
    "answer": 3,
    "solution": [
      "T is gamma with shape 4 and rate 0.5. Its survival is P(N(t)≤3), not a single exponential waiting-time tail.",
      "The survival probabilities at the two times are 0.934358 and 0.647232.",
      "The conditional tail ratio is 0.647232/0.934358=0.692703. Gamma with shape greater than one is not memoryless."
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
      "T is gamma with shape 4 and rate 0.5. Its survival is P(N(t)≤3), not a single exponential waiting-time tail."
    ],
    "verification": {
      "kind": "gamma",
      "shape": 4,
      "scale": 2.0,
      "a": 3,
      "b": 6,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:15",
    "topicId": "urv-c3-gamma",
    "family": "gamma-sum-condition",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c3-gamma"
    ],
    "cumulative": false
  },
  {
    "question": "A loss is from an exponential class with probability 0.48 and a uniform class otherwise. Within the classes, X is exponential with mean 8480, or uniform on (0,40900), respectively. The ordinary deductible d is 10225. Calculate the P(X>24540 given X>d). Round your answer to four decimal places.",
    "choices": [
      "$0.2197$",
      "$0.4395$",
      "$0.5595$",
      "$0.5605$",
      "$0.7197$"
    ],
    "answer": 1,
    "solution": [
      "Use class-specific survival functions: exp(-x/8480) and 1-x/40900 on the uniform support.",
      "The mixture survival probability at the deductible is 0.53374. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 0.43949."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8480) and 1-x/40900 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 40900,
      "mu": 8480,
      "w": 0.48,
      "d": 10225.0,
      "a": 24540.0,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:2",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "A loss is from an exponential class with probability 0.49 and a uniform class otherwise. Within the classes, X is exponential with mean 8490, or uniform on (0,40950), respectively. The ordinary deductible d is 10237.5. Calculate the expected payment (X-d)₊ per loss. Round your answer to four decimal places.",
    "choices": [
      "$3559.7397$",
      "$5695.5836$",
      "$7119.4795$",
      "$8543.3753$",
      "$14238.9589$"
    ],
    "answer": 2,
    "solution": [
      "Use class-specific survival functions: exp(-x/8490) and 1-x/40950 on the uniform support.",
      "The mixture survival probability at the deductible is 0.529227. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 7119.479456."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8490) and 1-x/40950 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 40950,
      "mu": 8490,
      "w": 0.49,
      "d": 10237.5,
      "a": 24570.0,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:3",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "A random damage fraction X has density f(x)=6x^1(1-x) for 0<x<1, and zero elsewhere. Given X>0.2, calculate P(X>0.7). Round your answer to four decimal places.",
    "choices": [
      "$0.1327$",
      "$0.2160$",
      "$0.2411$",
      "$0.5000$",
      "$0.6800$"
    ],
    "answer": 2,
    "solution": [
      "This is a beta(2,2) density. Integrating gives F(x)=3x^2-2x^3.",
      "The two required survival probabilities are 0.896 and 0.216.",
      "The higher-threshold tail is contained in the condition; divide the two tail probabilities to obtain 0.241071."
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
      "This is a beta(2,2) density. Integrating gives F(x)=3x^2-2x^3."
    ],
    "verification": {
      "kind": "beta",
      "a": 2,
      "b": 2,
      "lo": 0.2,
      "hi": 0.7,
      "target": "conditional-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:16",
    "topicId": "urv-c4-beta",
    "family": "beta-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c4-beta"
    ],
    "cumulative": false
  },
  {
    "question": "X is normal with mean 11 and variance 9. Calculate P((X-10)²<16). Round your answer to four decimal places.",
    "choices": [
      "$0.2064$",
      "$0.3413$",
      "$0.7936$",
      "$0.8176$",
      "$0.8413$"
    ],
    "answer": 2,
    "solution": [
      "Solve the quadratic event: 6<X<14. Both endpoints contribute to the probability.",
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
      "Solve the quadratic event: 6<X<14. Both endpoints contribute to the probability."
    ],
    "verification": {
      "kind": "normal",
      "mu": 11,
      "sd": 3,
      "lo": 6,
      "hi": 14,
      "target": "quadratic-interval"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:17",
    "topicId": "urv-c5-normal",
    "family": "normal-quadratic",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c5-normal"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,2000). The insurer pays Y=0.6max(X-400,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$480.0000$",
      "$660.0000$",
      "$720.0000$",
      "$900.0000$",
      "$1100.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(400+y/0.6)/2000.",
      "Set this to 0.75 and solve y=0.6(0.75×2000-400)=660."
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
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive."
    ],
    "verification": {
      "kind": "uniform-payment-quantile",
      "B": 2000,
      "d": 400.0,
      "share": 0.6,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:18",
    "topicId": "urv-c1-continuous-uniform",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 5 and 8 years. A device fails when either component fails. Given that the device has survived 3 years, calculate the probability it survives at least another 3 years. Round your answer to four decimal places.",
    "choices": [
      "$0.1423$",
      "$0.3772$",
      "$0.5488$",
      "$0.6228$",
      "$0.7939$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/5+1/8. It is memoryless.",
      "Conditional survival for another 3 years is exp[-3(1/5+1/8)]=0.377192."
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
        8
      ],
      "t": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:19",
    "topicId": "urv-c2-exponential",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c2-exponential"
    ],
    "cumulative": false
  },
  {
    "question": "T is the sum of 2 independent exponential lifetimes, each with mean 2. A lifetime is recorded only if T>4. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
    "choices": [
      "$2.7067$",
      "$4.0000$",
      "$6.6667$",
      "$8.0000$",
      "$9.8521$"
    ],
    "answer": 2,
    "solution": [
      "T has a gamma density with shape 2 and scale 2. Its recording probability is 0.406006.",
      "Multiplying its density by t gives 4 times the gamma density with shape 3 and the same scale. Thus the restricted first moment is 2.706706.",
      "Divide by the recording probability to obtain 6.666667. A multistage lifetime does not have exponential memorylessness."
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
      "T has a gamma density with shape 2 and scale 2. Its recording probability is 0.406006."
    ],
    "verification": {
      "kind": "gamma-truncated-mean",
      "shape": 2,
      "scale": 2,
      "threshold": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:20",
    "topicId": "urv-c3-gamma",
    "family": "gamma-truncated-mean",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-c3-gamma"
    ],
    "cumulative": false
  },
  {
    "question": "A damage fraction X follows a beta distribution with both shape parameters greater than 1. Its mean is 3/9, and its mode is 2/7. Calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$0.0222$",
      "$0.1111$",
      "$0.1333$",
      "$0.1491$",
      "$0.2222$"
    ],
    "answer": 0,
    "solution": [
      "Write s=α+β. The mean gives α=(3/9)s, while the mode gives (α-1)/(s-2)=(2/7).",
      "Solving these two equations yields α=3 and β=6.",
      "Beta variance is αβ/[s²(s+1)]=0.022222."
    ],
    "feedback": {
      "1": "This is the squared mean.",
      "2": "This is the second raw moment.",
      "3": "This is the standard deviation.",
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
      "Write s=α+β. The mean gives α=(3/9)s, while the mode gives (α-1)/(s-2)=(2/7)."
    ],
    "verification": {
      "kind": "beta-mode-infer",
      "a": 3,
      "b": 6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:21",
    "topicId": "urv-c4-beta",
    "family": "beta-mode-mean-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c4-beta"
    ],
    "cumulative": false
  },
  {
    "question": "A measurement X is normally distributed. Its 15.8655th percentile is 125 and its 97.7250th percentile is 170. Use standard-normal percentile values -1 and 2, respectively. Calculate P(X>155). Round your answer to four decimal places.",
    "choices": [
      "$0.1587$",
      "$0.3085$",
      "$0.3694$",
      "$0.4734$",
      "$0.8413$"
    ],
    "answer": 0,
    "solution": [
      "The percentile equations are μ-σ=125 and μ+2σ=170. Subtract them to get 3σ=45, so σ=15.",
      "Then μ=140, and the requested threshold standardizes to (155-140)/15=1.",
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
      "The percentile equations are μ-σ=125 and μ+2σ=170. Subtract them to get 3σ=45, so σ=15."
    ],
    "verification": {
      "kind": "normal-two-quantiles",
      "mu": 140,
      "sd": 15,
      "lower": 125,
      "upper": 170,
      "threshold": 155,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:22",
    "topicId": "urv-c5-normal",
    "family": "normal-two-quantiles",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c5-normal"
    ],
    "cumulative": false
  },
  {
    "question": "An original loss X is uniform on (0,1800). Losses increase by 10%. A fixed franchise deductible of 400 applies to the inflated loss: the insurer pays nothing at or below the threshold and 70% of the full inflated loss above it. Calculate expected payment per original loss. Round your answer to four decimal places.",
    "choices": [
      "$441.2828$",
      "$658.7778$",
      "$664.7172$",
      "$693.0000$",
      "$949.5960$"
    ],
    "answer": 2,
    "solution": [
      "The inflated loss Z is uniform on (0,1980). Its density is 1/1980.",
      "The payment is 0.7Z for Z>400, so integrate 0.7z/1980 from 400 to 1980.",
      "The result is 0.7[(1980)²-400²]/(2×1980)=664.717172."
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
      "The inflated loss Z is uniform on (0,1980). Its density is 1/1980."
    ],
    "verification": {
      "kind": "inflation-franchise",
      "B": 1800,
      "factor": 1.1,
      "d": 400,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:23",
    "topicId": "urv-c1-continuous-uniform",
    "family": "inflation-franchise-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A loss is from an exponential class with probability 0.3 and a uniform class otherwise. Within the classes, X is exponential with mean 8500, or uniform on (0,41000), respectively. The ordinary deductible d is 10250. Calculate the probability the loss came from the exponential class, given X>d. Round your answer to four decimal places.",
    "choices": [
      "$0.0731$",
      "$0.1461$",
      "$0.2661$",
      "$0.5731$",
      "$0.8539$"
    ],
    "answer": 1,
    "solution": [
      "Use class-specific survival functions: exp(-x/8500) and 1-x/41000 on the uniform support.",
      "The mixture survival probability at the deductible is 0.614828. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 0.146103."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8500) and 1-x/41000 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 41000,
      "mu": 8500,
      "w": 0.3,
      "d": 10250.0,
      "a": 24600.0,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:4",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "A loss is from an exponential class with probability 0.31 and a uniform class otherwise. Within the classes, X is exponential with mean 8510, or uniform on (0,41050), respectively. The ordinary deductible d is 10262.5. Calculate the P(X>24630 given X>d). Round your answer to four decimal places.",
    "choices": [
      "$0.2402$",
      "$0.4803$",
      "$0.5197$",
      "$0.6003$",
      "$0.7402$"
    ],
    "answer": 1,
    "solution": [
      "Use class-specific survival functions: exp(-x/8510) and 1-x/41050 on the uniform support.",
      "The mixture survival probability at the deductible is 0.610318. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 0.480333."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8510) and 1-x/41050 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 41050,
      "mu": 8510,
      "w": 0.31,
      "d": 10262.5,
      "a": 24630.0,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:5",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "An exponential loss has mean 600. A policy originally has an ordinary deductible of 400. The deductible is increased to 600, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$0.2835$",
      "$0.3679$",
      "$0.5134$",
      "$0.7165$",
      "$1.0000$"
    ],
    "answer": 3,
    "solution": [
      "For an ordinary deductible d, E[(X-d)₊]=600 exp(-d/600).",
      "The new-to-old ratio is exp(-(600)/600)/exp(-400/600).",
      "The original deductible cancels, leaving exp(-200/600)=0.716531. The ratio is per loss, so zero payments are included."
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
      "For an ordinary deductible d, E[(X-d)₊]=600 exp(-d/600)."
    ],
    "verification": {
      "kind": "deductible-ratio",
      "mu": 600,
      "d": 400,
      "delta": 200,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:24",
    "topicId": "urv-c2-exponential",
    "family": "deductible-change-ratio",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-c2-exponential"
    ],
    "cumulative": false
  },
  {
    "question": "3 independent waiting times each have a gamma distribution with shape 3 and scale 4. Calculate the probability that their sum exceeds 40. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0028$",
      "$0.3328$",
      "$0.3528$",
      "$0.6672$"
    ],
    "answer": 2,
    "solution": [
      "Independent gamma variables with the same scale add their shapes. The total has shape 9 and scale 4.",
      "For this integer shape, survival at 40 is exp(-40/4) times Σ from k=0 to 8 of (40/4)^k/k!.",
      "The probability is 0.33282."
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
      "Independent gamma variables with the same scale add their shapes. The total has shape 9 and scale 4."
    ],
    "verification": {
      "kind": "gamma-aggregate",
      "shape": 3,
      "scale": 4,
      "count": 3,
      "threshold": 40,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:25",
    "topicId": "urv-c3-gamma",
    "family": "gamma-aggregate-tail",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c3-gamma"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent values are uniform on (0,14). Let X_(2) be the 2th smallest value. Calculate E[X_(2)]. Round your answer to four decimal places.",
    "choices": [
      "$2.0000$",
      "$4.0000$",
      "$4.6667$",
      "$7.0000$",
      "$10.0000$"
    ],
    "answer": 1,
    "solution": [
      "For Z=X_(2)/14, the order-statistic density is proportional to z^1(1-z)^4 on (0,1).",
      "This is beta(2,5), with mean 2/(6+1).",
      "Rescale: E[X_(2)]=14×2/7=4."
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
      "For Z=X_(2)/14, the order-statistic density is proportional to z^1(1-z)^4 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 6,
      "rank": 2,
      "B": 14,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:26",
    "topicId": "urv-c4-beta",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c4-beta"
    ],
    "cumulative": false
  },
  {
    "question": "Independent normal X and Y have means 120 and 40. SD(X)=10. The variance of X+Y is 125. Calculate P(X-2Y>51.31370850). Round your answer to four decimal places.",
    "choices": [
      "$0.2119$",
      "$0.4774$",
      "$0.5000$",
      "$0.7881$",
      "$1.0000$"
    ],
    "answer": 0,
    "solution": [
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=125-100=25.",
      "X-2Y is exactly normal with mean 40 and SD √(100+4×25)=14.142136.",
      "The standardized threshold is 0.8, so the upper-tail probability is 1-Φ(0.8)=0.211855."
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
      "t": 51.31370849898476,
      "target": "tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:27",
    "topicId": "urv-c5-normal",
    "family": "normal-combination-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c5-normal"
    ],
    "cumulative": false
  },
  {
    "question": "9 independent values are uniform on (0,15). Let X_(3) be the 3th smallest value. Calculate E[X_(3)]. Round your answer to four decimal places.",
    "choices": [
      "$1.5000$",
      "$4.5000$",
      "$5.0000$",
      "$7.5000$",
      "$10.5000$"
    ],
    "answer": 1,
    "solution": [
      "For Z=X_(3)/15, the order-statistic density is proportional to z^2(1-z)^6 on (0,1).",
      "This is beta(3,7), with mean 3/(9+1).",
      "Rescale: E[X_(3)]=15×3/10=4.5."
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
      "For Z=X_(3)/15, the order-statistic density is proportional to z^2(1-z)^6 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 9,
      "rank": 3,
      "B": 15,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:28",
    "topicId": "urv-c4-beta",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c4-beta"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 700. There is no deductible. The insurer pays 0.65X, subject to a maximum insurer payment of 700. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$207.0086$",
      "$287.6149$",
      "$357.3064$",
      "$455.0000$",
      "$549.7022$"
    ],
    "answer": 2,
    "solution": [
      "The final cap is reached at loss 1076.923077, since coinsurance is applied before the payment cap.",
      "For 0≤y<700, P(Y>y)=exp[-y/(0.65×700)].",
      "Integrate this survival function from 0 to 700: E[Y]=0.65×700[1-exp(-700/(0.65×700))]=357.306417."
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
      "The final cap is reached at loss 1076.923077, since coinsurance is applied before the payment cap."
    ],
    "verification": {
      "kind": "limited-exponential",
      "mu": 700,
      "cap": 700,
      "share": 0.65,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:29",
    "topicId": "urv-c2-exponential",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c2-exponential"
    ],
    "cumulative": false
  },
  {
    "question": "A gamma loss has mean 15 and squared coefficient of variation 1/5. Calculate its variance. Round your answer to four decimal places.",
    "choices": [
      "$6.7082$",
      "$9.0000$",
      "$15.0000$",
      "$45.0000$",
      "$225.0000$"
    ],
    "answer": 3,
    "solution": [
      "For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV.",
      "The mean αθ=15 gives α=5 and θ=3.",
      "Var(X)=αθ²=5×3²=45. Equivalently, Var(X)=CV²(E[X])²."
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
      "shape": 5,
      "scale": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:30",
    "topicId": "urv-c3-gamma",
    "family": "gamma-cv-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c3-gamma"
    ],
    "cumulative": false
  },
  {
    "question": "X has CDF F(x)=(x/4)^5 for 0<x<4, with F(x)=0 below the support and 1 above it. A benefit is Y=3X²+9. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$19.0000$",
      "$34.2857$",
      "$42.3333$",
      "$43.2857$",
      "$111.8571$"
    ],
    "answer": 3,
    "solution": [
      "Differentiating the CDF gives density 5x^4/4^5.",
      "The second raw moment is E[X²]=5×4²/(5+2)=11.428571.",
      "Linearity gives E[Y]=3E[X²]+9=43.285714. Squaring the mean would not give E[X²]."
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
      "Differentiating the CDF gives density 5x^4/4^5."
    ],
    "verification": {
      "kind": "power-expectation",
      "B": 4,
      "power": 5,
      "a": 3,
      "shift": 9,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:31",
    "topicId": "urv-c4-beta",
    "family": "power-transformed-expectation",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-c4-beta"
    ],
    "cumulative": false
  },
  {
    "question": "A loss is from an exponential class with probability 0.32 and a uniform class otherwise. Within the classes, X is exponential with mean 8520, or uniform on (0,41100), respectively. The ordinary deductible d is 10275. Calculate the expected payment (X-d)₊ per loss. Round your answer to four decimal places.",
    "choices": [
      "$4338.3250$",
      "$6941.3201$",
      "$8676.6501$",
      "$10411.9801$",
      "$17353.3002$"
    ],
    "answer": 2,
    "solution": [
      "Use class-specific survival functions: exp(-x/8520) and 1-x/41100 on the uniform support.",
      "The mixture survival probability at the deductible is 0.605807. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 8676.650092."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8520) and 1-x/41100 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 41100,
      "mu": 8520,
      "w": 0.32,
      "d": 10275.0,
      "a": 24660.0,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:6",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "A loss is from an exponential class with probability 0.33 and a uniform class otherwise. Within the classes, X is exponential with mean 8530, or uniform on (0,41150), respectively. The ordinary deductible d is 10287.5. Calculate the probability the loss came from the exponential class, given X>d. Round your answer to four decimal places.",
    "choices": [
      "$0.0822$",
      "$0.1643$",
      "$0.2843$",
      "$0.5822$",
      "$0.8357$"
    ],
    "answer": 1,
    "solution": [
      "Use class-specific survival functions: exp(-x/8530) and 1-x/41150 on the uniform support.",
      "The mixture survival probability at the deductible is 0.601296. A conditional probability divides its appropriate joint or tail mass by this number.",
      "For expected excess, integrate each survival function above d and weight by class. The requested result is 0.164305."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "continuous distribution selection",
      "mixture survival",
      "deductible and conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: continuous distribution selection, mixture survival, deductible and conditioning.",
      "Use class-specific survival functions: exp(-x/8530) and 1-x/41150 on the uniform support."
    ],
    "verification": {
      "kind": "section-continuous",
      "B": 41150,
      "mu": 8530,
      "w": 0.32999999999999996,
      "d": 10287.5,
      "a": 24690.0,
      "target": "posterior",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:7",
    "topicId": "urv-c1-continuous-uniform",
    "family": "cumulative-univariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform",
      "urv-c2-exponential",
      "urv-c3-gamma",
      "urv-c4-beta",
      "urv-c5-normal"
    ],
    "cumulative": true
  },
  {
    "question": "120 independent policies each have probability 0.35 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 49 policies have a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0756$",
      "$0.0902$",
      "$0.1067$",
      "$0.4059$",
      "$0.8933$"
    ],
    "answer": 2,
    "solution": [
      "The count mean is 42 and SD is √(120×0.35×0.65)=5.22494.",
      "At least 49 for an integer count becomes the normal event above 48.5. The standardized boundary is 1.244033.",
      "The approximate probability is 1-Φ(z)=0.106744."
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
      "The count mean is 42 and SD is √(120×0.35×0.65)=5.22494."
    ],
    "verification": {
      "kind": "clt-binomial",
      "n": 120,
      "p": 0.35,
      "k": 49
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:32",
    "topicId": "urv-c5-normal",
    "family": "clt-binomial-correction",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c5-normal"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,2600). The insurer pays Y=0.6max(X-520,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$624.0000$",
      "$858.0000$",
      "$936.0000$",
      "$1170.0000$",
      "$1430.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(520+y/0.6)/2600.",
      "Set this to 0.75 and solve y=0.6(0.75×2600-520)=858."
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
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive."
    ],
    "verification": {
      "kind": "uniform-payment-quantile",
      "B": 2600,
      "d": 520.0,
      "share": 0.6,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:33",
    "topicId": "urv-c1-continuous-uniform",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-300)₊] to E[X] is 0.74081822, rounded to eight decimal places. Calculate P(X>600). Round your answer to four decimal places.",
    "choices": [
      "$0.1353$",
      "$0.4512$",
      "$0.5488$",
      "$0.6691$",
      "$0.7408$"
    ],
    "answer": 2,
    "solution": [
      "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
      "The positive mean is μ=1000; survival beyond 600 is exp(-600/1000).",
      "The probability is 0.548812."
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
      "mu": 1000,
      "d": 300,
      "threshold": 600,
      "target": "tail-from-deductible"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:34",
    "topicId": "urv-c2-exponential",
    "family": "exponential-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-c2-exponential"
    ],
    "cumulative": false
  },
  {
    "question": "A gamma waiting time T has mean 8 and variance 32. Calculate P(T>8). Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.1353$",
      "$0.2500$",
      "$0.4060$",
      "$0.5940$"
    ],
    "answer": 3,
    "solution": [
      "Using mean αθ and variance αθ², infer scale θ=32/8=4 and shape α=2.",
      "The inferred shape is an integer, so gamma survival equals a Poisson lower tail: exp(-t/θ) times the sum of (t/θ)^j/j! for j=0,…,α-1.",
      "At t=8, t/θ=2.0. The probability is 0.406006."
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
      "Using mean αθ and variance αθ², infer scale θ=32/8=4 and shape α=2."
    ],
    "verification": {
      "kind": "gamma",
      "shape": 2,
      "scale": 4,
      "t": 8,
      "target": "tail-from-moments"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:35",
    "topicId": "urv-c3-gamma",
    "family": "gamma-parameter-tail",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c3-gamma"
    ],
    "cumulative": false
  },
  {
    "question": "A proportion X has a beta distribution. Its mean is specified exactly as 3/(3+3) and its variance as (3×3)/[(3+3)²(3+3+1)]. Four risks share the same X; conditional on X=x each risk independently has a claim with probability x. Calculate the unconditional probability that the first two risks both claim, irrespective of the other two. Round your answer to four decimal places.",
    "choices": [
      "$0.0357$",
      "$0.2500$",
      "$0.2857$",
      "$0.5000$",
      "$0.7500$"
    ],
    "answer": 2,
    "solution": [
      "Given X=x, the first-two joint claim probability is x². The unconditional probability is therefore E[X²].",
      "Use the moment identity E[X²]=Var(X)+(E[X])². Conditional independence given X does not imply unconditional independence.",
      "The result is 0.035714+(3/6)²=0.285714."
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
      "b": 3,
      "target": "second-moment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:36",
    "topicId": "urv-c4-beta",
    "family": "beta-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c4-beta"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is normal with mean 100. Its 80th percentile is 108.41621234, rounded to eight decimal places. Calculate P(X>115.0). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
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
      "The threshold has z=(115.0-100)/10=1.5.",
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
      "mu": 100,
      "sd": 10,
      "t": 115.0,
      "target": "tail-from-quantile"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:37",
    "topicId": "urv-c5-normal",
    "family": "normal-quantile-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-c5-normal"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,1600). The insurer pays Y=0.6max(X-400,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$360.0000$",
      "$480.0000$",
      "$540.0000$",
      "$720.0000$",
      "$800.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(400+y/0.6)/1600.",
      "Set this to 0.75 and solve y=0.6(0.75×1600-400)=480."
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
      "B": 1600,
      "d": 400.0,
      "share": 0.6,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:38",
    "topicId": "urv-c1-continuous-uniform",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-c1-continuous-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A device lifetime is exponential with mean 6 years. A contract pays benefit B for failure by year 2, pays 0.6B for failure after year 2 but by year 4, and otherwise pays zero. Its expected payment is 800. Calculate B. Round your answer to four decimal places.",
    "choices": [
      "$324.2698$",
      "$1333.3333$",
      "$1644.1187$",
      "$1973.6654$",
      "$2822.1812$"
    ],
    "answer": 3,
    "solution": [
      "The two covered interval probabilities are 0.283469 and 0.203114.",
      "E[benefit]=B[0.283469+0.6(0.203114)]=0.405337B.",
      "Solve B=800/0.405337=1973.665362."
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
      "fraction": 0.6000000000000001,
      "meanPay": 800
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-c:39",
    "topicId": "urv-c2-exponential",
    "family": "exponential-benefit",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-c2-exponential"
    ],
    "cumulative": false
  }
];

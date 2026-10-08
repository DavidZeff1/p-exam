export default [
  {
    "question": "A policy has one loss with probability 0.102, and no loss otherwise. Given a loss, its size is exponential with mean 26020. The insurer pays 70.2% of the excess above deductible 4083, subject to a final payment cap of 7205. Calculate the expected insurer payment given that a positive insurer payment occurs. Round your answer to four decimal places.",
    "choices": [
      "$2976.8885$",
      "$4763.0216$",
      "$5953.7770$",
      "$7144.5324$",
      "$11907.5540$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5089.135884 and second moment is 34262900.688465.",
      "Include the no-loss atom: annual E[Y]=519.09186, E[Y²]=3494815.870223. A positive payment occurs with probability 0.087187.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 2654.04-E[Y]. The requested result is 5953.776978."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5089.135884 and second moment is 34262900.688465."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.10200000000000001,
      "mu": 26020,
      "d": 4083,
      "share": 0.702,
      "cap": 7205,
      "target": "per-payment",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:0",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "A policy has one loss with probability 0.104, and no loss otherwise. Given a loss, its size is exponential with mean 26040. The insurer pays 70.4% of the excess above deductible 4086, subject to a final payment cap of 7210. Calculate the expected annual loss retained by the policyholder. Round your answer to four decimal places.",
    "choices": [
      "$1089.1175$",
      "$1742.5881$",
      "$2178.2351$",
      "$2613.8821$",
      "$4356.4702$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5095.43177 and second moment is 34336081.5056.",
      "Include the no-loss atom: annual E[Y]=529.924904, E[Y²]=3570952.476582. A positive payment occurs with probability 0.088897.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 2708.16-E[Y]. The requested result is 2178.235096."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5095.43177 and second moment is 34336081.5056."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.10400000000000001,
      "mu": 26040,
      "d": 4086,
      "share": 0.704,
      "cap": 7210,
      "target": "retained",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:1",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "A policy has no claim with probability 0.8 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1600). The insurer pays the positive excess over a deductible of 400. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
    "choices": [
      "$252.7845$",
      "$31500.0000$",
      "$63900.0000$",
      "$72000.0000$",
      "$157500.0000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.2: E[Y]=90, E[Y²]=72000.",
      "The per-policy variance is 72000-(90)²=63900."
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
      "p": 0.2,
      "B": 1600,
      "d": 400.0,
      "target": "payment-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:8",
    "topicId": "urv-h1-loss-variable",
    "family": "mixture-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1400. Payment is Y=min(0.75 max(X-400,0),500). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
    "choices": [
      "$298.9359$",
      "$397.7976$",
      "$500.0000$",
      "$789.0512$",
      "$1050.0000$"
    ],
    "answer": 1,
    "solution": [
      "Positive payment occurs exactly when X>400, with probability exp(-400/1400)=0.751477.",
      "Using survival integration up to the final payment cap gives E[Y]=0.75(1400)[exp(-400/1400)-exp(-(400+500/0.75)/1400)]=298.935852.",
      "The per-payment mean is E[Y]/P(Y>0)=397.797585."
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
      "Positive payment occurs exactly when X>400, with probability exp(-400/1400)=0.751477."
    ],
    "verification": {
      "kind": "exp-payment",
      "mu": 1400,
      "d": 400,
      "share": 0.75,
      "cap": 500,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:9",
    "topicId": "urv-h2-payment-variable",
    "family": "payment-per-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss has exponential mean 1000. The insurer pays Y=min(0.8 max(X-300,0),500). Calculate the variance of payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$218.1756$",
      "$47600.5937$",
      "$75861.3771$",
      "$123461.9708$",
      "$640000.0000$"
    ],
    "answer": 1,
    "solution": [
      "For 0<y<500, P(Y>y)=exp(-(300+y/0.8)/1000). There is zero mass 0.259182 and a cap mass exp(-(300+500/0.8)/1000).",
      "Use E[Y]=the integral of P(Y>y), and E[Y²]=the integral of 2yP(Y>y), each over (0,500). These give 275.429441 and 123461.970797.",
      "Subtract squared mean: Var(Y)=47600.59367."
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
      "For 0<y<500, P(Y>y)=exp(-(300+y/0.8)/1000). There is zero mass 0.259182 and a cap mass exp(-(300+500/0.8)/1000)."
    ],
    "verification": {
      "kind": "exp-payment",
      "mu": 1000,
      "d": 300,
      "share": 0.8,
      "cap": 500,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:10",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "exponential-payment-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class A with probability 0.4 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 2 for A or 6 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
    "choices": [
      "$3.8400$",
      "$4.4000$",
      "$8.2400$",
      "$19.3600$",
      "$23.2000$"
    ],
    "answer": 2,
    "solution": [
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.4.",
      "The conditional means themselves vary: Var(E[N given class])=3.84.",
      "Total variance adds these two components, giving 8.24. The unconditional mixture is not Poisson."
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
      "w": 0.4,
      "rates": [
        2,
        6
      ],
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:11",
    "topicId": "urv-h1-loss-variable",
    "family": "total-variance-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss fraction X has probability 0.1 at 0 and 0.3 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.6, calculate the probability X=1. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.2400$",
      "$0.3000$",
      "$0.3333$",
      "$0.5556$"
    ],
    "answer": 4,
    "solution": [
      "The continuous component has weight 0.6, so its mass above 0.6 is 0.24.",
      "The conditioning event also includes the atom at 1; its total probability is 0.54.",
      "Divide the atom mass by that total: 0.3/0.54=0.555556."
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
      "p0": 0.1,
      "p1": 0.30000000000000004,
      "cut": 0.6000000000000001,
      "target": "atom-conditional"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:12",
    "topicId": "urv-h2-payment-variable",
    "family": "cdf-atom-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 600. There is no deductible. The insurer pays 0.65X, subject to a maximum insurer payment of 300. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$70.2751$",
      "$153.4530$",
      "$160.9892$",
      "$209.2859$",
      "$390.0000$"
    ],
    "answer": 3,
    "solution": [
      "The final cap is reached at loss 461.538462, since coinsurance is applied before the payment cap.",
      "For 0≤y<300, P(Y>y)=exp[-y/(0.65×600)].",
      "Integrate this survival function from 0 to 300: E[Y]=0.65×600[1-exp(-300/(0.65×600))]=209.285946."
    ],
    "feedback": {
      "0": "This omits the point mass at the payment cap.",
      "1": "This caps the loss before coinsurance instead of capping insurer payment.",
      "2": "This pays the cap at every uncapped covered outcome.",
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
      "The final cap is reached at loss 461.538462, since coinsurance is applied before the payment cap."
    ],
    "verification": {
      "kind": "limited-exponential",
      "mu": 600,
      "cap": 300,
      "share": 0.65,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:13",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A randomly selected loss belongs to class A with probability 0.3 and to class B otherwise. Conditional loss means are 140 and 420, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
    "choices": [
      "$68.0000$",
      "$146.3694$",
      "$4960.0000$",
      "$16464.0000$",
      "$21424.0000$"
    ],
    "answer": 4,
    "solution": [
      "The mean is 0.3(140)+0.7(420)=336.",
      "The mean conditional variance is 4960. The variance of the class means is 0.3(0.7)(140-420)²=16464.",
      "Total variance is the sum 4960+16464=21424."
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
      "The mean is 0.3(140)+0.7(420)=336."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.3,
      "means": [
        140,
        420
      ],
      "sds": [
        40,
        80
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:14",
    "topicId": "urv-h1-loss-variable",
    "family": "two-class-loss-variance",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1200. The payment is Y=min(0.75max(X-300,0),500). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
    "choices": [
      "$0.2212$",
      "$0.3320$",
      "$0.4468$",
      "$0.5532$",
      "$0.7788$"
    ],
    "answer": 1,
    "solution": [
      "The payment is positive when X>300, and reaches its cap when X≥966.666667.",
      "The event 0<Y<500 corresponds to 300<X<966.666667. Both the zero atom and the cap atom are excluded.",
      "Subtract the two exponential survival probabilities: exp(-300/1200)-exp(-(300+500/0.75)/1200)=0.331961."
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
      "The payment is positive when X>300, and reaches its cap when X≥966.666667."
    ],
    "verification": {
      "kind": "payment-interior",
      "mu": 1200,
      "d": 300,
      "cap": 500,
      "share": 0.75,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:15",
    "topicId": "urv-h2-payment-variable",
    "family": "payment-zero-and-cap",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has one loss with probability 0.106, and no loss otherwise. Given a loss, its size is exponential with mean 26060. The insurer pays 70.6% of the excess above deductible 4089, subject to a final payment cap of 7215. Calculate the annual insurer payment standard deviation per policy. Round your answer to four decimal places.",
    "choices": [
      "$915.8240$",
      "$1465.3184$",
      "$1831.6480$",
      "$2197.9776$",
      "$3663.2960$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5101.717865 and second moment is 34409242.457825.",
      "Include the no-loss atom: annual E[Y]=540.782094, E[Y²]=3647379.700529. A positive payment occurs with probability 0.090607.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 2762.36-E[Y]. The requested result is 1831.648009."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5101.717865 and second moment is 34409242.457825."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.10600000000000001,
      "mu": 26060,
      "d": 4089,
      "share": 0.706,
      "cap": 7215,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:2",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "A policy has one loss with probability 0.108, and no loss otherwise. Given a loss, its size is exponential with mean 26080. The insurer pays 70.8% of the excess above deductible 4092, subject to a final payment cap of 7220. Calculate the expected insurer payment given that a positive insurer payment occurs. Round your answer to four decimal places.",
    "choices": [
      "$2987.8721$",
      "$4780.5954$",
      "$5975.7443$",
      "$7170.8931$",
      "$11951.4885$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5107.99424 and second moment is 34482383.991522.",
      "Include the no-loss atom: annual E[Y]=551.663378, E[Y²]=3724097.471084. A positive payment occurs with probability 0.092317.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 2816.64-E[Y]. The requested result is 5975.744251."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5107.99424 and second moment is 34482383.991522."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.10800000000000001,
      "mu": 26080,
      "d": 4092,
      "share": 0.708,
      "cap": 7220,
      "target": "per-payment",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:3",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "A loss X is exponential with mean 1300. There is no deductible. The insurer pays 0.65X, subject to a maximum insurer payment of 700. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$170.2267$",
      "$351.8196$",
      "$394.2775$",
      "$475.9492$",
      "$845.0000$"
    ],
    "answer": 3,
    "solution": [
      "The final cap is reached at loss 1076.923077, since coinsurance is applied before the payment cap.",
      "For 0≤y<700, P(Y>y)=exp[-y/(0.65×1300)].",
      "Integrate this survival function from 0 to 700: E[Y]=0.65×1300[1-exp(-700/(0.65×1300))]=475.949216."
    ],
    "feedback": {
      "0": "This omits the point mass at the payment cap.",
      "1": "This caps the loss before coinsurance instead of capping insurer payment.",
      "2": "This pays the cap at every uncapped covered outcome.",
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
      "The final cap is reached at loss 1076.923077, since coinsurance is applied before the payment cap."
    ],
    "verification": {
      "kind": "limited-exponential",
      "mu": 1300,
      "cap": 700,
      "share": 0.65,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:16",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.125+(1-0.125)(x/5)^2 for 0≤x<5, and F(x)=1 for x≥5. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$2.1875$",
      "$2.9167$",
      "$3.3333$",
      "$3.5417$",
      "$10.9375$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.125. It contributes zero to E[X].",
      "On (0,5), the density is (1-0.125)2x^1/5^2.",
      "Integrating x times this density gives (1-0.125)5×2/(2+1)=2.916667."
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
      "B": 5,
      "power": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:17",
    "topicId": "urv-h1-loss-variable",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 600. A policy has a franchise deductible 200: it pays nothing when X≤200, and pays 0.8X when X>200. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$343.9350$",
      "$458.5800$",
      "$480.0000$",
      "$573.2250$",
      "$640.0000$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-200/600)=0.716531.",
      "Memorylessness gives E[X given X>200]=200+600. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.8(200+600)exp(-200/600)=458.580039."
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
      "The covered probability is exp(-200/600)=0.716531."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 600,
      "d": 200,
      "share": 0.8,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:18",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 1100. A policy has a franchise deductible 350: it pays nothing when X≤350, and pays 0.7X when X>350. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$560.1523$",
      "$738.3826$",
      "$770.0000$",
      "$1015.0000$",
      "$1054.8322$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-350/1100)=0.727471.",
      "Memorylessness gives E[X given X>350]=350+1100. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.7(350+1100)exp(-350/1100)=738.382567."
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
      "The covered probability is exp(-350/1100)=0.727471."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 1100,
      "d": 350,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:19",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "T is the sum of 4 independent exponential lifetimes, each with mean 5. A lifetime is recorded only if T>5. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
    "choices": [
      "$19.9268$",
      "$20.0000$",
      "$20.3125$",
      "$20.3871$",
      "$25.0000$"
    ],
    "answer": 2,
    "solution": [
      "T has a gamma density with shape 4 and scale 5. Its recording probability is 0.981012.",
      "Multiplying its density by t gives 20 times the gamma density with shape 5 and the same scale. Thus the restricted first moment is 19.926803.",
      "Divide by the recording probability to obtain 20.3125. A multistage lifetime does not have exponential memorylessness."
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
      "T has a gamma density with shape 4 and scale 5. Its recording probability is 0.981012."
    ],
    "verification": {
      "kind": "gamma-truncated-mean",
      "shape": 4,
      "scale": 5,
      "threshold": 5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:20",
    "topicId": "urv-h1-loss-variable",
    "family": "gamma-truncated-mean",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,2600). The insurer pays Y=0.6max(X-910,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$507.0000$",
      "$624.0000$",
      "$760.5000$",
      "$1040.0000$",
      "$1170.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.35 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(910+y/0.6)/2600.",
      "Set this to 0.75 and solve y=0.6(0.75×2600-910)=624."
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
      "share": 0.6,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:21",
    "topicId": "urv-h2-payment-variable",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "The claim count N takes values 0 through 4, with P(N=k)=c(k+1). A contract pays 75 for each claim in excess of the first 1 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
    "choices": [
      "$90.0000$",
      "$125.0000$",
      "$130.0000$",
      "$200.0000$",
      "$24000.0000$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the probabilities: c[1+2+⋯+5]=1, giving c=2/(5×6).",
      "The payment at count k is 75 max(k-1,0). Its possible values are 0, 0, 75, 150, 225.",
      "Weight each payment by c(k+1); the expected payment is 130."
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
      "scale": 75,
      "d": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:22",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "finite-payment-moments",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.8 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1400). The insurer pays the positive excess over a deductible of 350. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
    "choices": [
      "$221.1864$",
      "$24117.1875$",
      "$48923.4375$",
      "$55125.0000$",
      "$120585.9375$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1400-350)²/(2×1400)=393.75 and second moment (1400-350)³/(3×1400)=275625.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.2: E[Y]=78.75, E[Y²]=55125.",
      "The per-policy variance is 55125-(78.75)²=48923.4375."
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
      "p": 0.2,
      "B": 1400,
      "d": 350.0,
      "target": "payment-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:23",
    "topicId": "urv-h1-loss-variable",
    "family": "mixture-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has one loss with probability 0.11, and no loss otherwise. Given a loss, its size is exponential with mean 26100. The insurer pays 71% of the excess above deductible 4095, subject to a final payment cap of 7225. Calculate the expected annual loss retained by the policyholder. Round your answer to four decimal places.",
    "choices": [
      "$1154.2156$",
      "$1846.7450$",
      "$2308.4313$",
      "$2770.1176$",
      "$4616.8626$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5114.260965 and second moment is 34555506.548909.",
      "Include the no-loss atom: annual E[Y]=562.568706, E[Y²]=3801105.72038. A positive payment occurs with probability 0.094027.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 2871-E[Y]. The requested result is 2308.431294."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5114.260965 and second moment is 34555506.548909."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.11,
      "mu": 26100,
      "d": 4095,
      "share": 0.71,
      "cap": 7225,
      "target": "retained",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:4",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "A policy has one loss with probability 0.112, and no loss otherwise. Given a loss, its size is exponential with mean 26120. The insurer pays 71.2% of the excess above deductible 4098, subject to a final payment cap of 7230. Calculate the annual insurer payment standard deviation per policy. Round your answer to four decimal places.",
    "choices": [
      "$942.0064$",
      "$1507.2103$",
      "$1884.0128$",
      "$2260.8154$",
      "$3768.0257$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5120.518112 and second moment is 34628610.568088.",
      "Include the no-loss atom: annual E[Y]=573.498029, E[Y²]=3878404.383626. A positive payment occurs with probability 0.095737.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 2925.44-E[Y]. The requested result is 1884.012844."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5120.518112 and second moment is 34628610.568088."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.112,
      "mu": 26120,
      "d": 4098,
      "share": 0.712,
      "cap": 7230,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:5",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "Loss X is exponential with mean 1200. Payment is Y=min(0.75 max(X-500,0),500). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
    "choices": [
      "$252.8992$",
      "$383.6219$",
      "$500.0000$",
      "$593.3166$",
      "$900.0000$"
    ],
    "answer": 1,
    "solution": [
      "Positive payment occurs exactly when X>500, with probability exp(-500/1200)=0.659241.",
      "Using survival integration up to the final payment cap gives E[Y]=0.75(1200)[exp(-500/1200)-exp(-(500+500/0.75)/1200)]=252.899157.",
      "The per-payment mean is E[Y]/P(Y>0)=383.621921."
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
      "Positive payment occurs exactly when X>500, with probability exp(-500/1200)=0.659241."
    ],
    "verification": {
      "kind": "exp-payment",
      "mu": 1200,
      "d": 500,
      "share": 0.75,
      "cap": 500,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:24",
    "topicId": "urv-h2-payment-variable",
    "family": "payment-per-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss has exponential mean 1400. The insurer pays Y=min(0.8 max(X-200,0),600). Calculate the variance of payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$240.8047$",
      "$57986.8862$",
      "$162152.0279$",
      "$220138.9141$",
      "$1254400.0000$"
    ],
    "answer": 1,
    "solution": [
      "For 0<y<600, P(Y>y)=exp(-(200+y/0.8)/1400). There is zero mass 0.133122 and a cap mass exp(-(200+600/0.8)/1400).",
      "Use E[Y]=the integral of P(Y>y), and E[Y²]=the integral of 2yP(Y>y), each over (0,600). These give 402.68105 and 220138.914104.",
      "Subtract squared mean: Var(Y)=57986.886223."
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
      "For 0<y<600, P(Y>y)=exp(-(200+y/0.8)/1400). There is zero mass 0.133122 and a cap mass exp(-(200+600/0.8)/1400)."
    ],
    "verification": {
      "kind": "exp-payment",
      "mu": 1400,
      "d": 200,
      "share": 0.8,
      "cap": 600,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:25",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "exponential-payment-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class A with probability 0.5 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 3 for A or 7 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
    "choices": [
      "$4.0000$",
      "$5.0000$",
      "$9.0000$",
      "$25.0000$",
      "$29.0000$"
    ],
    "answer": 2,
    "solution": [
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=5.",
      "The conditional means themselves vary: Var(E[N given class])=4.",
      "Total variance adds these two components, giving 9. The unconditional mixture is not Poisson."
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
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=5."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.5,
      "rates": [
        3,
        7
      ],
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:26",
    "topicId": "urv-h1-loss-variable",
    "family": "total-variance-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss fraction X has probability 0.15 at 0 and 0.2 at 1. The remaining probability is spread uniformly over (0,1). Given X>0.6, calculate the probability X=1. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.2000$",
      "$0.2353$",
      "$0.2600$",
      "$0.4348$"
    ],
    "answer": 4,
    "solution": [
      "The continuous component has weight 0.65, so its mass above 0.6 is 0.26.",
      "The conditioning event also includes the atom at 1; its total probability is 0.46.",
      "Divide the atom mass by that total: 0.2/0.46=0.434783."
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
      "The continuous component has weight 0.65, so its mass above 0.6 is 0.26."
    ],
    "verification": {
      "kind": "mixed-cdf",
      "p0": 0.15000000000000002,
      "p1": 0.2,
      "cut": 0.6000000000000001,
      "target": "atom-conditional"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:27",
    "topicId": "urv-h2-payment-variable",
    "family": "cdf-atom-conditional",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 900. There is no deductible. The insurer pays 0.6X, subject to a maximum insurer payment of 300. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$58.0471$",
      "$127.8740$",
      "$153.0731$",
      "$230.1732$",
      "$540.0000$"
    ],
    "answer": 3,
    "solution": [
      "The final cap is reached at loss 500, since coinsurance is applied before the payment cap.",
      "For 0≤y<300, P(Y>y)=exp[-y/(0.6×900)].",
      "Integrate this survival function from 0 to 300: E[Y]=0.6×900[1-exp(-300/(0.6×900))]=230.173153."
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
      "The final cap is reached at loss 500, since coinsurance is applied before the payment cap."
    ],
    "verification": {
      "kind": "limited-exponential",
      "mu": 900,
      "cap": 300,
      "share": 0.6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:28",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A randomly selected loss belongs to class A with probability 0.3 and to class B otherwise. Conditional loss means are 120 and 380, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
    "choices": [
      "$68.0000$",
      "$138.4052$",
      "$4960.0000$",
      "$14196.0000$",
      "$19156.0000$"
    ],
    "answer": 4,
    "solution": [
      "The mean is 0.3(120)+0.7(380)=302.",
      "The mean conditional variance is 4960. The variance of the class means is 0.3(0.7)(120-380)²=14196.",
      "Total variance is the sum 4960+14196=19156."
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
      "The mean is 0.3(120)+0.7(380)=302."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.3,
      "means": [
        120,
        380
      ],
      "sds": [
        40,
        80
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:29",
    "topicId": "urv-h1-loss-variable",
    "family": "two-class-loss-variance",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1000. The payment is Y=min(0.75max(X-350,0),450). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
    "choices": [
      "$0.2953$",
      "$0.3179$",
      "$0.3867$",
      "$0.6133$",
      "$0.7047$"
    ],
    "answer": 1,
    "solution": [
      "The payment is positive when X>350, and reaches its cap when X≥950.",
      "The event 0<Y<450 corresponds to 350<X<950. Both the zero atom and the cap atom are excluded.",
      "Subtract the two exponential survival probabilities: exp(-350/1000)-exp(-(350+450/0.75)/1000)=0.317947."
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
      "The payment is positive when X>350, and reaches its cap when X≥950."
    ],
    "verification": {
      "kind": "payment-interior",
      "mu": 1000,
      "d": 350,
      "cap": 450,
      "share": 0.75,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:30",
    "topicId": "urv-h2-payment-variable",
    "family": "payment-zero-and-cap",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 800. There is no deductible. The insurer pays 0.6X, subject to a maximum insurer payment of 800. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$238.2392$",
      "$303.4179$",
      "$389.3397$",
      "$480.0000$",
      "$648.8995$"
    ],
    "answer": 2,
    "solution": [
      "The final cap is reached at loss 1333.333333, since coinsurance is applied before the payment cap.",
      "For 0≤y<800, P(Y>y)=exp[-y/(0.6×800)].",
      "Integrate this survival function from 0 to 800: E[Y]=0.6×800[1-exp(-800/(0.6×800))]=389.339711."
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
      "mu": 800,
      "cap": 800,
      "share": 0.6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:31",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has one loss with probability 0.114, and no loss otherwise. Given a loss, its size is exponential with mean 26140. The insurer pays 71.4% of the excess above deductible 4101, subject to a final payment cap of 7235. Calculate the expected insurer payment given that a positive insurer payment occurs. Round your answer to four decimal places.",
    "choices": [
      "$2998.8048$",
      "$4798.0877$",
      "$5997.6097$",
      "$7197.1316$",
      "$11995.2193$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5126.765749 and second moment is 34701696.483091.",
      "Include the no-loss atom: annual E[Y]=584.451295, E[Y²]=3955993.399072. A positive payment occurs with probability 0.097447.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 2979.96-E[Y]. The requested result is 5997.609664."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5126.765749 and second moment is 34701696.483091."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.114,
      "mu": 26140,
      "d": 4101,
      "share": 0.714,
      "cap": 7235,
      "target": "per-payment",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:6",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "A policy has one loss with probability 0.116, and no loss otherwise. Given a loss, its size is exponential with mean 26160. The insurer pays 71.6% of the excess above deductible 4104, subject to a final payment cap of 7240. Calculate the expected annual loss retained by the policyholder. Round your answer to four decimal places.",
    "choices": [
      "$1219.5658$",
      "$1951.3052$",
      "$2439.1315$",
      "$2926.9579$",
      "$4878.2631$"
    ],
    "answer": 2,
    "solution": [
      "Given a loss, integrate the payment survival function. Its first moment is 5133.003946 and second moment is 34774764.723927.",
      "Include the no-loss atom: annual E[Y]=595.428458, E[Y²]=4033872.707976. A positive payment occurs with probability 0.099157.",
      "For SD subtract E[Y]² before taking a square root; for a per-payment mean divide by the positive-payment probability; retained loss has expectation 3034.56-E[Y]. The requested result is 2439.131542."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss occurrence mixture",
      "payment transformation",
      "per-loss and per-payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss occurrence mixture, payment transformation, per-loss and per-payment moments.",
      "Given a loss, integrate the payment survival function. Its first moment is 5133.003946 and second moment is 34774764.723927."
    ],
    "verification": {
      "kind": "section-loss-payment",
      "p": 0.116,
      "mu": 26160,
      "d": 4104,
      "share": 0.716,
      "cap": 7240,
      "target": "retained",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:7",
    "topicId": "urv-h1-loss-variable",
    "family": "cumulative-univariate-random-variables-h",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable",
      "urv-h2-payment-variable",
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": true
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.25+(1-0.25)(x/9)^3 for 0≤x<9, and F(x)=1 for x≥9. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$3.3750$",
      "$5.0625$",
      "$6.7500$",
      "$7.3125$",
      "$36.4500$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.25. It contributes zero to E[X].",
      "On (0,9), the density is (1-0.25)3x^2/9^3.",
      "Integrating x times this density gives (1-0.25)9×3/(3+1)=5.0625."
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
      "B": 9,
      "power": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:32",
    "topicId": "urv-h1-loss-variable",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 900. A policy has a franchise deductible 200: it pays nothing when X≤200, and pays 0.75X when X>200. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$540.4977$",
      "$660.6084$",
      "$675.0000$",
      "$825.0000$",
      "$880.8111$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-200/900)=0.800737.",
      "Memorylessness gives E[X given X>200]=200+900. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.75(200+900)exp(-200/900)=660.608357."
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
      "The covered probability is exp(-200/900)=0.800737."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 900,
      "d": 200,
      "share": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:33",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 600. A policy has a franchise deductible 400: it pays nothing when X≤400, and pays 0.65X when X>400. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$200.2327$",
      "$333.7211$",
      "$390.0000$",
      "$513.4171$",
      "$650.0000$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-400/600)=0.513417.",
      "Memorylessness gives E[X given X>400]=400+600. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.65(400+600)exp(-400/600)=333.721127."
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
      "The covered probability is exp(-400/600)=0.513417."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 600,
      "d": 400,
      "share": 0.65,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:34",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "T is the sum of 4 independent exponential lifetimes, each with mean 2. A lifetime is recorded only if T>4. Calculate the mean of T among recorded lifetimes. Round your answer to four decimal places.",
    "choices": [
      "$7.5788$",
      "$8.0000$",
      "$8.8421$",
      "$9.3335$",
      "$12.0000$"
    ],
    "answer": 2,
    "solution": [
      "T has a gamma density with shape 4 and scale 2. Its recording probability is 0.857123.",
      "Multiplying its density by t gives 8 times the gamma density with shape 5 and the same scale. Thus the restricted first moment is 7.578776.",
      "Divide by the recording probability to obtain 8.842105. A multistage lifetime does not have exponential memorylessness."
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
      "T has a gamma density with shape 4 and scale 2. Its recording probability is 0.857123."
    ],
    "verification": {
      "kind": "gamma-truncated-mean",
      "shape": 4,
      "scale": 2,
      "threshold": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:35",
    "topicId": "urv-h1-loss-variable",
    "family": "gamma-truncated-mean",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,2000). The insurer pays Y=0.65max(X-400,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$520.0000$",
      "$715.0000$",
      "$780.0000$",
      "$975.0000$",
      "$1100.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(400+y/0.65)/2000.",
      "Set this to 0.75 and solve y=0.65(0.75×2000-400)=715."
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
      "share": 0.65,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:36",
    "topicId": "urv-h2-payment-variable",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  },
  {
    "question": "The claim count N takes values 0 through 6, with P(N=k)=c(k+1). A contract pays 100 for each claim in excess of the first 2 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
    "choices": [
      "$142.8571$",
      "$200.0000$",
      "$214.2857$",
      "$400.0000$",
      "$67857.1429$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the probabilities: c[1+2+⋯+7]=1, giving c=2/(7×8).",
      "The payment at count k is 100 max(k-2,0). Its possible values are 0, 0, 0, 100, 200, 300, 400.",
      "Weight each payment by c(k+1); the expected payment is 214.285714."
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
      "scale": 100,
      "d": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:37",
    "topicId": "urv-h3-moments-loss-payment",
    "family": "finite-payment-moments",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-h3-moments-loss-payment"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.75 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1600). The insurer pays the positive excess over a deductible of 400. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
    "choices": [
      "$278.1074$",
      "$39375.0000$",
      "$77343.7500$",
      "$90000.0000$",
      "$157500.0000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.25: E[Y]=112.5, E[Y²]=90000.",
      "The per-policy variance is 90000-(112.5)²=77343.75."
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
      "p": 0.25,
      "B": 1600,
      "d": 400.0,
      "target": "payment-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:38",
    "topicId": "urv-h1-loss-variable",
    "family": "mixture-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-h1-loss-variable"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1000. Payment is Y=min(0.75 max(X-300,0),500). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
    "choices": [
      "$270.3521$",
      "$364.9372$",
      "$500.0000$",
      "$555.6137$",
      "$750.0000$"
    ],
    "answer": 1,
    "solution": [
      "Positive payment occurs exactly when X>300, with probability exp(-300/1000)=0.740818.",
      "Using survival integration up to the final payment cap gives E[Y]=0.75(1000)[exp(-300/1000)-exp(-(300+500/0.75)/1000)]=270.352098.",
      "The per-payment mean is E[Y]/P(Y>0)=364.937161."
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
      "Positive payment occurs exactly when X>300, with probability exp(-300/1000)=0.740818."
    ],
    "verification": {
      "kind": "exp-payment",
      "mu": 1000,
      "d": 300,
      "share": 0.75,
      "cap": 500,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-h:39",
    "topicId": "urv-h2-payment-variable",
    "family": "payment-per-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-h2-payment-variable"
    ],
    "cumulative": false
  }
];

export default [
  {
    "question": "Before inflation, a property loss X is uniform on (0,26280). Losses increase by 22%. The policy’s fixed ordinary deductible is 6320; the insurer then pays 77% of the excess, subject to a final payment limit of 4192. Calculate the expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$1504.8818$",
      "$2407.8109$",
      "$3009.7636$",
      "$3611.7163$",
      "$6019.5272$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,32061.6) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.77 max(1.22X-6320,0),4192). The loss at which the cap is reached is 11764.155844 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=3009.763597, E[Y²]=12119608.164064, and P(Y=cap)=0.633076. The requested result is 3009.763597."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,32061.6) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26280,
      "inflation": 1.2200000000000002,
      "d": 6320,
      "share": 0.77,
      "cap": 4192,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:0",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "Before inflation, a property loss X is uniform on (0,26300). Losses increase by 22.5%. The policy’s fixed ordinary deductible is 6325; the insurer then pays 77.5% of the excess, subject to a final payment limit of 4195. Calculate the payment variance per loss. Round your answer to four decimal places.",
    "choices": [
      "$1528759.0761$",
      "$2446014.5218$",
      "$3057518.1523$",
      "$3669021.7827$",
      "$6115036.3046$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,32217.5) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.775 max(1.225X-6325,0),4195). The loss at which the cap is reached is 11737.903226 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=3019.026088, E[Y²]=12172036.671135, and P(Y=cap)=0.635667. The requested result is 3057518.152285."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,32217.5) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26300,
      "inflation": 1.225,
      "d": 6325,
      "share": 0.775,
      "cap": 4195,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:1",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-300)₊] to E[X] is 0.60653066, rounded to eight decimal places. Calculate P(X>600). Round your answer to four decimal places.",
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
      "The positive mean is μ=600; survival beyond 600 is exp(-600/600).",
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
      "mu": 600,
      "d": 300,
      "threshold": 600,
      "target": "tail-from-deductible"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:8",
    "topicId": "urv-g1-deductibles",
    "family": "exponential-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-g1-deductibles"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,1400). Payment is Y=c max(X-280,0), where the insurer share c is unknown. Mean payment per loss is 336. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$75264.0000$",
      "$91875.0000$",
      "$100352.0000$",
      "$112896.0000$",
      "$250880.0000$"
    ],
    "answer": 0,
    "solution": [
      "Before coinsurance, the deductible payment mean is (1400-280)²/(2×1400)=448.",
      "The given mean identifies c=0.75. The deductible-payment second moment is (1400-280)³/(3×1400).",
      "Variance is c² times the deductible-payment variance, giving 75264."
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
      "Before coinsurance, the deductible payment mean is (1400-280)²/(2×1400)=448."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 1400,
      "d": 280.0,
      "share": 0.75,
      "cap": 140000,
      "inflation": 1,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:9",
    "topicId": "urv-g2-coinsurance",
    "family": "coinsurance-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g2-coinsurance"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1200. Payment is Y=min(0.75 max(X-500,0),700). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
    "choices": [
      "$320.7316$",
      "$486.5168$",
      "$593.3166$",
      "$700.0000$",
      "$900.0000$"
    ],
    "answer": 1,
    "solution": [
      "Positive payment occurs exactly when X>500, with probability exp(-500/1200)=0.659241.",
      "Using survival integration up to the final payment cap gives E[Y]=0.75(1200)[exp(-500/1200)-exp(-(500+700/0.75)/1200)]=320.731614.",
      "The per-payment mean is E[Y]/P(Y>0)=486.516758."
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
      "cap": 700,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:10",
    "topicId": "urv-g3-benefit-limits",
    "family": "payment-per-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "Original loss X is uniform on (0,1600). Losses rise by 25%, while an ordinary deductible of 480 and a final payment cap of 800 stay fixed. The insurer pays 80% of the inflated excess above the deductible, subject to that cap. Calculate expected payment per original loss. Round your answer to four decimal places.",
    "choices": [
      "$387.5000$",
      "$408.0000$",
      "$416.0000$",
      "$462.0800$",
      "$800.0000$"
    ],
    "answer": 1,
    "solution": [
      "Inflated loss is uniform on (0,2000). The zero-payment boundary is 480 and the cap is reached at inflated loss 1480.",
      "Integrate 0.8(x-d) over the intermediate region with density 1/2000, then add cap times its survival probability 0.26.",
      "The resulting expected payment is 408. Policy terms were not inflated."
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
      "Inflated loss is uniform on (0,2000). The zero-payment boundary is 480 and the cap is reached at inflated loss 1480."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 1600,
      "d": 480.0,
      "share": 0.8,
      "cap": 800.0,
      "inflation": 1.25,
      "target": "mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:11",
    "topicId": "urv-g4-inflation",
    "family": "inflation-payment-mean",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-400)₊] to E[X] is 0.71653131, rounded to eight decimal places. Calculate P(X>800). Round your answer to four decimal places.",
    "choices": [
      "$0.1353$",
      "$0.4866$",
      "$0.5134$",
      "$0.6277$",
      "$0.7165$"
    ],
    "answer": 2,
    "solution": [
      "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
      "The positive mean is μ=1200; survival beyond 800 is exp(-800/1200).",
      "The probability is 0.513417."
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
      "mu": 1200,
      "d": 400,
      "threshold": 800,
      "target": "tail-from-deductible"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:12",
    "topicId": "urv-g1-deductibles",
    "family": "exponential-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-g1-deductibles"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 1000. A policy has a franchise deductible 350: it pays nothing when X≤350, and pays 0.7X when X>350. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$493.2817$",
      "$665.9302$",
      "$700.0000$",
      "$945.0000$",
      "$951.3289$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-350/1000)=0.704688.",
      "Memorylessness gives E[X given X>350]=350+1000. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.7(350+1000)exp(-350/1000)=665.930245."
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
      "The covered probability is exp(-350/1000)=0.704688."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 1000,
      "d": 350,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:13",
    "topicId": "urv-g2-coinsurance",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g2-coinsurance"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1000. Payment is Y=min(0.75 max(X-300,0),700). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
    "choices": [
      "$337.1237$",
      "$455.0695$",
      "$555.6137$",
      "$700.0000$",
      "$750.0000$"
    ],
    "answer": 1,
    "solution": [
      "Positive payment occurs exactly when X>300, with probability exp(-300/1000)=0.740818.",
      "Using survival integration up to the final payment cap gives E[Y]=0.75(1000)[exp(-300/1000)-exp(-(300+700/0.75)/1000)]=337.123747.",
      "The per-payment mean is E[Y]/P(Y>0)=455.069459."
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
      "cap": 700,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:14",
    "topicId": "urv-g3-benefit-limits",
    "family": "payment-per-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "Original loss X is exponential with mean 1400. Payment after 20% loss inflation is Y=min(0.8 max(1.2X-250,0),900). Given a positive payment, calculate P(Y>450). Round your answer to four decimal places.",
    "choices": [
      "$0.2845$",
      "$0.6165$",
      "$0.6691$",
      "$0.7155$",
      "$0.7251$"
    ],
    "answer": 3,
    "solution": [
      "Since 450 is below the final cap, Y>450 is equivalent to X>(250+450/0.8)/1.2=677.083333.",
      "Positive payment requires X>250/1.2. Use the ratio of the corresponding exponential survival probabilities.",
      "The ratio simplifies to exp(-450/(0.8×1.2×1400))=0.715466. The deductible cancels only because of exponential memorylessness."
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
      "Since 450 is below the final cap, Y>450 is equivalent to X>(250+450/0.8)/1.2=677.083333."
    ],
    "verification": {
      "kind": "inflated-exp-tail",
      "mu": 1400,
      "inflation": 1.2,
      "d": 250,
      "share": 0.8,
      "cap": 900,
      "threshold": 450
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:15",
    "topicId": "urv-g4-inflation",
    "family": "inflation-tail",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "Before inflation, a property loss X is uniform on (0,26320). Losses increase by 23%. The policy’s fixed ordinary deductible is 6330; the insurer then pays 78% of the excess, subject to a final payment limit of 4198. Calculate the probability that the insurer pays exactly the benefit limit. Round your answer to four decimal places.",
    "choices": [
      "$0.3191$",
      "$0.3618$",
      "$0.6382$",
      "$0.7582$",
      "$0.8191$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,32373.6) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.78 max(1.23X-6330,0),4198). The loss at which the cap is reached is 11712.051282 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=3028.21148, E[Y²]=12224127.599022, and P(Y=cap)=0.638222. The requested result is 0.638222."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,32373.6) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26320,
      "inflation": 1.23,
      "d": 6330,
      "share": 0.78,
      "cap": 4198,
      "target": "cap",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:2",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "Before inflation, a property loss X is uniform on (0,26340). Losses increase by 23.5%. The policy’s fixed ordinary deductible is 6335; the insurer then pays 78.5% of the excess, subject to a final payment limit of 4201. Calculate the expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$1518.6606$",
      "$2429.8570$",
      "$3037.3212$",
      "$3644.7854$",
      "$6074.6424$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,32529.9) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.785 max(1.235X-6335,0),4201). The loss at which the cap is reached is 11686.592357 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=3037.321208, E[Y²]=12275887.744977, and P(Y=cap)=0.640743. The requested result is 3037.321208."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,32529.9) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26340,
      "inflation": 1.235,
      "d": 6335,
      "share": 0.785,
      "cap": 4201,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:3",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "An exponential loss has mean 1000. A policy originally has an ordinary deductible of 200. The deductible is increased to 300, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$0.0952$",
      "$0.7408$",
      "$0.8187$",
      "$0.9048$",
      "$1.0000$"
    ],
    "answer": 3,
    "solution": [
      "For an ordinary deductible d, E[(X-d)₊]=1000 exp(-d/1000).",
      "The new-to-old ratio is exp(-(300)/1000)/exp(-200/1000).",
      "The original deductible cancels, leaving exp(-100/1000)=0.904837. The ratio is per loss, so zero payments are included."
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
      "For an ordinary deductible d, E[(X-d)₊]=1000 exp(-d/1000)."
    ],
    "verification": {
      "kind": "deductible-ratio",
      "mu": 1000,
      "d": 200,
      "delta": 100,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:16",
    "topicId": "urv-g4-inflation",
    "family": "deductible-change-ratio",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 600. A policy has a franchise deductible 200: it pays nothing when X≤200, and pays 0.7X when X>200. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$300.9432$",
      "$401.2575$",
      "$420.0000$",
      "$560.0000$",
      "$573.2250$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-200/600)=0.716531.",
      "Memorylessness gives E[X given X>200]=200+600. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.7(200+600)exp(-200/600)=401.257534."
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
      "The covered probability is exp(-200/600)=0.716531."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 600,
      "d": 200,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:17",
    "topicId": "urv-g2-coinsurance",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g2-coinsurance"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 1200. There is no deductible. The insurer pays 0.6X, subject to a maximum insurer payment of 600. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$146.3304$",
      "$283.2979$",
      "$339.2411$",
      "$407.0893$",
      "$720.0000$"
    ],
    "answer": 3,
    "solution": [
      "The final cap is reached at loss 1000, since coinsurance is applied before the payment cap.",
      "For 0≤y<600, P(Y>y)=exp[-y/(0.6×1200)].",
      "Integrate this survival function from 0 to 600: E[Y]=0.6×1200[1-exp(-600/(0.6×1200))]=407.08929."
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
      "The final cap is reached at loss 1000, since coinsurance is applied before the payment cap."
    ],
    "verification": {
      "kind": "limited-exponential",
      "mu": 1200,
      "cap": 600,
      "share": 0.6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:18",
    "topicId": "urv-g3-benefit-limits",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "An original loss X is uniform on (0,2200). Losses increase by 25%. A fixed franchise deductible of 500 applies to the inflated loss: the insurer pays nothing at or below the threshold and 70% of the full inflated loss above it. Calculate expected payment per original loss. Round your answer to four decimal places.",
    "choices": [
      "$644.3182$",
      "$912.7841$",
      "$930.6818$",
      "$962.5000$",
      "$1329.5455$"
    ],
    "answer": 2,
    "solution": [
      "The inflated loss Z is uniform on (0,2750). Its density is 1/2750.",
      "The payment is 0.7Z for Z>500, so integrate 0.7z/2750 from 500 to 2750.",
      "The result is 0.7[(2750)²-500²]/(2×2750)=930.681818."
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
      "The inflated loss Z is uniform on (0,2750). Its density is 1/2750."
    ],
    "verification": {
      "kind": "inflation-franchise",
      "B": 2200,
      "factor": 1.25,
      "d": 500,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:19",
    "topicId": "urv-g4-inflation",
    "family": "inflation-franchise-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 500. A policy has a franchise deductible 450: it pays nothing when X≤450, and pays 0.7X when X>450. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$142.2994$",
      "$270.3688$",
      "$350.0000$",
      "$386.2412$",
      "$665.0000$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-450/500)=0.40657.",
      "Memorylessness gives E[X given X>450]=450+500. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.7(450+500)exp(-450/500)=270.368824."
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
      "The covered probability is exp(-450/500)=0.40657."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 500,
      "d": 450,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:20",
    "topicId": "urv-g2-coinsurance",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g2-coinsurance"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 1100. There is no deductible. The insurer pays 0.65X, subject to a maximum insurer payment of 500. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$111.2268$",
      "$251.5337$",
      "$261.1635$",
      "$359.6931$",
      "$715.0000$"
    ],
    "answer": 3,
    "solution": [
      "The final cap is reached at loss 769.230769, since coinsurance is applied before the payment cap.",
      "For 0≤y<500, P(Y>y)=exp[-y/(0.65×1100)].",
      "Integrate this survival function from 0 to 500: E[Y]=0.65×1100[1-exp(-500/(0.65×1100))]=359.693128."
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
      "The final cap is reached at loss 769.230769, since coinsurance is applied before the payment cap."
    ],
    "verification": {
      "kind": "limited-exponential",
      "mu": 1100,
      "cap": 500,
      "share": 0.65,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:21",
    "topicId": "urv-g3-benefit-limits",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1100. The payment is Y=min(0.75max(X-400,0),350). Calculate the probability that payment is strictly between zero and the cap. Round your answer to four decimal places.",
    "choices": [
      "$0.2403$",
      "$0.3049$",
      "$0.4548$",
      "$0.5452$",
      "$0.6951$"
    ],
    "answer": 0,
    "solution": [
      "The payment is positive when X>400, and reaches its cap when X≥866.666667.",
      "The event 0<Y<350 corresponds to 400<X<866.666667. Both the zero atom and the cap atom are excluded.",
      "Subtract the two exponential survival probabilities: exp(-400/1100)-exp(-(400+350/0.75)/1100)=0.240335."
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
      "The payment is positive when X>400, and reaches its cap when X≥866.666667."
    ],
    "verification": {
      "kind": "payment-interior",
      "mu": 1100,
      "d": 400,
      "cap": 350,
      "share": 0.75,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:22",
    "topicId": "urv-g3-benefit-limits",
    "family": "payment-zero-and-cap",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,1800). The insurer pays Y=0.75max(X-450,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$506.2500$",
      "$675.0000$",
      "$759.3750$",
      "$900.0000$",
      "$1012.5000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.25 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(450+y/0.75)/1800.",
      "Set this to 0.75 and solve y=0.75(0.75×1800-450)=675."
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
      "share": 0.75,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:23",
    "topicId": "urv-g4-inflation",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "Before inflation, a property loss X is uniform on (0,26360). Losses increase by 24%. The policy’s fixed ordinary deductible is 6340; the insurer then pays 79% of the excess, subject to a final payment limit of 4204. Calculate the payment variance per loss. Round your answer to four decimal places.",
    "choices": [
      "$1523517.3838$",
      "$2437627.8141$",
      "$3047034.7676$",
      "$3656441.7211$",
      "$6094069.5352$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,32686.4) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.79 max(1.24X-6340,0),4204). The loss at which the cap is reached is 11661.518987 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=3046.356671, E[Y²]=12327323.734124, and P(Y=cap)=0.64323. The requested result is 3047034.767619."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,32686.4) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26360,
      "inflation": 1.2400000000000002,
      "d": 6340,
      "share": 0.79,
      "cap": 4204,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:4",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "Before inflation, a property loss X is uniform on (0,26380). Losses increase by 24.5%. The policy’s fixed ordinary deductible is 6345; the insurer then pays 79.5% of the excess, subject to a final payment limit of 4207. Calculate the probability that the insurer pays exactly the benefit limit. Round your answer to four decimal places.",
    "choices": [
      "$0.3228$",
      "$0.3543$",
      "$0.6457$",
      "$0.7657$",
      "$0.8228$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,32843.1) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.795 max(1.245X-6345,0),4207). The loss at which the cap is reached is 11636.823899 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=3055.319234, E[Y²]=12378442.024876, and P(Y=cap)=0.645684. The requested result is 0.645684."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,32843.1) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26380,
      "inflation": 1.245,
      "d": 6345,
      "share": 0.795,
      "cap": 4207,
      "target": "cap",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:5",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "Loss X is uniform on (0,1800). The insurer pays Y=0.75max(X-630,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$438.7500$",
      "$540.0000$",
      "$658.1250$",
      "$720.0000$",
      "$1012.5000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.35 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(630+y/0.75)/1800.",
      "Set this to 0.75 and solve y=0.75(0.75×1800-630)=540."
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
      "B": 1800,
      "d": 630.0000000000001,
      "share": 0.75,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:24",
    "topicId": "urv-g4-inflation",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,1600). The insurer pays Y=0.75max(X-320,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$480.0000$",
      "$660.0000$",
      "$720.0000$",
      "$880.0000$",
      "$900.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(320+y/0.75)/1600.",
      "Set this to 0.75 and solve y=0.75(0.75×1600-320)=660."
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
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive."
    ],
    "verification": {
      "kind": "uniform-payment-quantile",
      "B": 1600,
      "d": 320.0,
      "share": 0.75,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:25",
    "topicId": "urv-g4-inflation",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "Independent daily inspections detect a defect with probability 0.275. Inspections stop on the first detection or after 7 inspections, whichever occurs first. Calculate the expected number of inspections performed. Round your answer to four decimal places.",
    "choices": [
      "$0.7370$",
      "$2.2535$",
      "$2.5165$",
      "$3.2535$",
      "$3.6364$"
    ],
    "answer": 3,
    "solution": [
      "Let T be the first successful inspection, so the number performed is min(T,h).",
      "Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,7)]=Σ from j=1 to 7 of (1-0.275)^(j-1).",
      "The finite geometric sum is [1-(1-0.275)^7]/0.275=3.253509."
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
      "horizon": 7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:26",
    "topicId": "urv-g3-benefit-limits",
    "family": "geometric-capped-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "An exponential loss has mean 900. A policy originally has an ordinary deductible of 300. The deductible is increased to 550, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$0.2425$",
      "$0.5427$",
      "$0.7165$",
      "$0.7575$",
      "$1.0000$"
    ],
    "answer": 3,
    "solution": [
      "For an ordinary deductible d, E[(X-d)₊]=900 exp(-d/900).",
      "The new-to-old ratio is exp(-(550)/900)/exp(-300/900).",
      "The original deductible cancels, leaving exp(-250/900)=0.757465. The ratio is per loss, so zero payments are included."
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
      "For an ordinary deductible d, E[(X-d)₊]=900 exp(-d/900)."
    ],
    "verification": {
      "kind": "deductible-ratio",
      "mu": 900,
      "d": 300,
      "delta": 250,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:27",
    "topicId": "urv-g4-inflation",
    "family": "deductible-change-ratio",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-400)₊] to E[X] is 0.51341712, rounded to eight decimal places. Calculate P(X>800). Round your answer to four decimal places.",
    "choices": [
      "$0.1353$",
      "$0.2636$",
      "$0.3354$",
      "$0.5134$",
      "$0.7364$"
    ],
    "answer": 1,
    "solution": [
      "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
      "The positive mean is μ=600; survival beyond 800 is exp(-800/600).",
      "The probability is 0.263597."
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
      "mu": 600,
      "d": 400,
      "threshold": 800,
      "target": "tail-from-deductible"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:28",
    "topicId": "urv-g1-deductibles",
    "family": "exponential-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-g1-deductibles"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,1400). Payment is Y=c max(X-280,0), where the insurer share c is unknown. Mean payment per loss is 291.2. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$56531.6267$",
      "$69008.3333$",
      "$84797.4400$",
      "$86971.7333$",
      "$217429.3333$"
    ],
    "answer": 0,
    "solution": [
      "Before coinsurance, the deductible payment mean is (1400-280)²/(2×1400)=448.",
      "The given mean identifies c=0.65. The deductible-payment second moment is (1400-280)³/(3×1400).",
      "Variance is c² times the deductible-payment variance, giving 56531.626667."
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
      "Before coinsurance, the deductible payment mean is (1400-280)²/(2×1400)=448."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 1400,
      "d": 280.0,
      "share": 0.65,
      "cap": 140000,
      "inflation": 1,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:29",
    "topicId": "urv-g2-coinsurance",
    "family": "coinsurance-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g2-coinsurance"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1200. Payment is Y=min(0.75 max(X-400,0),600). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
    "choices": [
      "$313.7867$",
      "$437.9246$",
      "$600.0000$",
      "$644.8782$",
      "$900.0000$"
    ],
    "answer": 1,
    "solution": [
      "Positive payment occurs exactly when X>400, with probability exp(-400/1200)=0.716531.",
      "Using survival integration up to the final payment cap gives E[Y]=0.75(1200)[exp(-400/1200)-exp(-(400+600/0.75)/1200)]=313.786682.",
      "The per-payment mean is E[Y]/P(Y>0)=437.924593."
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
      "Positive payment occurs exactly when X>400, with probability exp(-400/1200)=0.716531."
    ],
    "verification": {
      "kind": "exp-payment",
      "mu": 1200,
      "d": 400,
      "share": 0.75,
      "cap": 600,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:30",
    "topicId": "urv-g3-benefit-limits",
    "family": "payment-per-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "Original loss X is uniform on (0,1000). Losses rise by 25%, while an ordinary deductible of 300 and a final payment cap of 500 stay fixed. The insurer pays 80% of the inflated excess above the deductible, subject to that cap. Calculate expected payment per original loss. Round your answer to four decimal places.",
    "choices": [
      "$242.1875$",
      "$255.0000$",
      "$260.0000$",
      "$288.8000$",
      "$500.0000$"
    ],
    "answer": 1,
    "solution": [
      "Inflated loss is uniform on (0,1250). The zero-payment boundary is 300 and the cap is reached at inflated loss 925.",
      "Integrate 0.8(x-d) over the intermediate region with density 1/1250, then add cap times its survival probability 0.26.",
      "The resulting expected payment is 255. Policy terms were not inflated."
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
      "Inflated loss is uniform on (0,1250). The zero-payment boundary is 300 and the cap is reached at inflated loss 925."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 1000,
      "d": 300.0,
      "share": 0.8,
      "cap": 500.0,
      "inflation": 1.25,
      "target": "mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:31",
    "topicId": "urv-g4-inflation",
    "family": "inflation-payment-mean",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "Before inflation, a property loss X is uniform on (0,26400). Losses increase by 10%. The policy’s fixed ordinary deductible is 6350; the insurer then pays 65% of the excess, subject to a final payment limit of 4210. Calculate the expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$1409.9686$",
      "$2255.9498$",
      "$2819.9372$",
      "$3383.9247$",
      "$5639.8744$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,29040) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.65 max(1.1X-6350,0),4210). The loss at which the cap is reached is 12826.923077 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=2819.937222, E[Y²]=11213087.952073, and P(Y=cap)=0.558302. The requested result is 2819.937222."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,29040) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26400,
      "inflation": 1.1,
      "d": 6350,
      "share": 0.65,
      "cap": 4210,
      "target": "mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:6",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "Before inflation, a property loss X is uniform on (0,26420). Losses increase by 10.5%. The policy’s fixed ordinary deductible is 6355; the insurer then pays 65.5% of the excess, subject to a final payment limit of 4213. Calculate the payment variance per loss. Round your answer to four decimal places.",
    "choices": [
      "$1629758.3458$",
      "$2607613.3533$",
      "$3259516.6916$",
      "$3911420.0299$",
      "$6519033.3832$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss support to (0,29194.1) while retaining the fixed deductible and final payment cap.",
      "The payment is min(0.655 max(1.105X-6355,0),4213). The loss at which the cap is reached is 12787.061069 after inflation.",
      "Integrate the linear payment region and add the cap atom: E[Y]=2831.804771, E[Y²]=11278634.951421, and P(Y=cap)=0.561998. The requested result is 3259516.691579."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "inflation",
      "deductible and coinsurance",
      "benefit cap and payment moments"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: inflation, deductible and coinsurance, benefit cap and payment moments.",
      "Inflate the loss support to (0,29194.1) while retaining the fixed deductible and final payment cap."
    ],
    "verification": {
      "kind": "section-insurance",
      "B": 26420,
      "inflation": 1.105,
      "d": 6355,
      "share": 0.655,
      "cap": 4213,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:7",
    "topicId": "urv-g1-deductibles",
    "family": "cumulative-univariate-random-variables-g",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-g1-deductibles",
      "urv-g2-coinsurance",
      "urv-g3-benefit-limits",
      "urv-g4-inflation"
    ],
    "cumulative": true
  },
  {
    "question": "A positive loss X is exponential with an unknown mean. The ratio of E[(X-200)₊] to E[X] is 0.84648172, rounded to eight decimal places. Calculate P(X>400). Round your answer to four decimal places.",
    "choices": [
      "$0.1353$",
      "$0.2835$",
      "$0.7165$",
      "$0.8465$",
      "$0.8653$"
    ],
    "answer": 2,
    "solution": [
      "For an exponential loss, E[(X-d)₊]=μ exp(-d/μ), so the supplied expectation ratio identifies the mean.",
      "The positive mean is μ=1200; survival beyond 400 is exp(-400/1200).",
      "The probability is 0.716531."
    ],
    "feedback": {
      "0": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
      "1": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
      "3": "Use the deductible expectation ratio to identify the exponential mean, then apply the survival function at the requested threshold.",
      "4": "Recheck the setup and the requested quantity before evaluating the formula."
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
      "mu": 1200,
      "d": 200,
      "threshold": 400,
      "target": "tail-from-deductible"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:32",
    "topicId": "urv-g1-deductibles",
    "family": "exponential-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-g1-deductibles"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 600. A policy has a franchise deductible 400: it pays nothing when X≤400, and pays 0.8X when X>400. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$246.4402$",
      "$410.7337$",
      "$480.0000$",
      "$513.4171$",
      "$800.0000$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-400/600)=0.513417.",
      "Memorylessness gives E[X given X>400]=400+600. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.8(400+600)exp(-400/600)=410.733695."
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
      "share": 0.8,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:33",
    "topicId": "urv-g2-coinsurance",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g2-coinsurance"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is exponential with mean 1200. Payment is Y=min(0.75 max(X-300,0),600). Calculate E[Y given Y>0]. Round your answer to four decimal places.",
    "choices": [
      "$341.0560$",
      "$437.9246$",
      "$600.0000$",
      "$700.9207$",
      "$900.0000$"
    ],
    "answer": 1,
    "solution": [
      "Positive payment occurs exactly when X>300, with probability exp(-300/1200)=0.778801.",
      "Using survival integration up to the final payment cap gives E[Y]=0.75(1200)[exp(-300/1200)-exp(-(300+600/0.75)/1200)]=341.056016.",
      "The per-payment mean is E[Y]/P(Y>0)=437.924593."
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
      "Positive payment occurs exactly when X>300, with probability exp(-300/1200)=0.778801."
    ],
    "verification": {
      "kind": "exp-payment",
      "mu": 1200,
      "d": 300,
      "share": 0.75,
      "cap": 600,
      "target": "positive-mean"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:34",
    "topicId": "urv-g3-benefit-limits",
    "family": "payment-per-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "Original loss X is exponential with mean 1400. Payment after 20% loss inflation is Y=min(0.8 max(1.2X-300,0),900). Given a positive payment, calculate P(Y>400). Round your answer to four decimal places.",
    "choices": [
      "$0.2574$",
      "$0.6211$",
      "$0.6997$",
      "$0.7426$",
      "$0.7515$"
    ],
    "answer": 3,
    "solution": [
      "Since 400 is below the final cap, Y>400 is equivalent to X>(300+400/0.8)/1.2=666.666667.",
      "Positive payment requires X>300/1.2. Use the ratio of the corresponding exponential survival probabilities.",
      "The ratio simplifies to exp(-400/(0.8×1.2×1400))=0.742584. The deductible cancels only because of exponential memorylessness."
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
      "Since 400 is below the final cap, Y>400 is equivalent to X>(300+400/0.8)/1.2=666.666667."
    ],
    "verification": {
      "kind": "inflated-exp-tail",
      "mu": 1400,
      "inflation": 1.2,
      "d": 300,
      "share": 0.8,
      "cap": 900,
      "threshold": 400
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:35",
    "topicId": "urv-g4-inflation",
    "family": "inflation-tail",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "An exponential loss has mean 600. A policy originally has an ordinary deductible of 250. The deductible is increased to 500, with no other changes. Calculate the ratio of the new expected payment per loss to the old expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$0.3408$",
      "$0.4346$",
      "$0.5833$",
      "$0.6592$",
      "$1.0000$"
    ],
    "answer": 3,
    "solution": [
      "For an ordinary deductible d, E[(X-d)₊]=600 exp(-d/600).",
      "The new-to-old ratio is exp(-(500)/600)/exp(-250/600).",
      "The original deductible cancels, leaving exp(-250/600)=0.659241. The ratio is per loss, so zero payments are included."
    ],
    "feedback": {
      "0": "This is the fractional reduction, not the retained fraction.",
      "1": "This is the new positive-payment probability, rather than its ratio to the old one.",
      "2": "This treats the payment reduction as linear in the deductible increment.",
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
      "d": 250,
      "delta": 250,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:36",
    "topicId": "urv-g4-inflation",
    "family": "deductible-change-ratio",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 1000. A policy has a franchise deductible 200: it pays nothing when X≤200, and pays 0.8X when X>200. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$654.9846$",
      "$785.9815$",
      "$800.0000$",
      "$960.0000$",
      "$982.4769$"
    ],
    "answer": 1,
    "solution": [
      "The covered probability is exp(-200/1000)=0.818731.",
      "Memorylessness gives E[X given X>200]=200+1000. A franchise deductible retains the full loss after crossing the threshold.",
      "Multiply covered probability, conditional full-loss mean, and insurer share: 0.8(200+1000)exp(-200/1000)=785.981523."
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
      "The covered probability is exp(-200/1000)=0.818731."
    ],
    "verification": {
      "kind": "franchise-exponential",
      "mu": 1000,
      "d": 200,
      "share": 0.8,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:37",
    "topicId": "urv-g2-coinsurance",
    "family": "franchise-payment-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g2-coinsurance"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is exponential with mean 800. There is no deductible. The insurer pays 0.7X, subject to a maximum insurer payment of 700. Calculate expected payment per loss. Round your answer to four decimal places.",
    "choices": [
      "$199.0040$",
      "$326.5573$",
      "$399.5573$",
      "$499.4466$",
      "$560.0000$"
    ],
    "answer": 2,
    "solution": [
      "The final cap is reached at loss 1000, since coinsurance is applied before the payment cap.",
      "For 0≤y<700, P(Y>y)=exp[-y/(0.7×800)].",
      "Integrate this survival function from 0 to 700: E[Y]=0.7×800[1-exp(-700/(0.7×800))]=399.557314."
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
      "The final cap is reached at loss 1000, since coinsurance is applied before the payment cap."
    ],
    "verification": {
      "kind": "limited-exponential",
      "mu": 800,
      "cap": 700,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:38",
    "topicId": "urv-g3-benefit-limits",
    "family": "limited-exponential-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-g3-benefit-limits"
    ],
    "cumulative": false
  },
  {
    "question": "An original loss X is uniform on (0,1800). Losses increase by 10%. A fixed franchise deductible of 300 applies to the inflated loss: the insurer pays nothing at or below the threshold and 70% of the full inflated loss above it. Calculate expected payment per original loss. Round your answer to four decimal places.",
    "choices": [
      "$498.9091$",
      "$673.7500$",
      "$677.0909$",
      "$693.0000$",
      "$967.2727$"
    ],
    "answer": 2,
    "solution": [
      "The inflated loss Z is uniform on (0,1980). Its density is 1/1980.",
      "The payment is 0.7Z for Z>300, so integrate 0.7z/1980 from 300 to 1980.",
      "The result is 0.7[(1980)²-300²]/(2×1980)=677.090909."
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
      "d": 300,
      "share": 0.7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-g:39",
    "topicId": "urv-g4-inflation",
    "family": "inflation-franchise-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-g4-inflation"
    ],
    "cumulative": false
  }
];

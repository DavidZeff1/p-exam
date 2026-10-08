export default [
  {
    "question": "Independent identical policies have no loss with probability 0.794. Given a loss, severity is 9715 with probability 0.60 or 19430 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1943. For 193 policies, use the central limit theorem to calculate the approximately 95th-percentile reserve for 193 policies, using z=1.645. Round your answer to four decimal places.",
    "choices": [
      "$218256.7229$",
      "$349210.7567$",
      "$436513.4459$",
      "$523816.1351$",
      "$873026.8918$"
    ],
    "answer": 2,
    "solution": [
      "The per-policy payment takes values 0, 5829, 13115.25 with probabilities 0.794, 0.1236, 0.0824. Include the no-loss mass.",
      "The per-policy mean is 1801.161 and variance 15129012.122829. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×15129012.122829); for an average use SD sqrt(15129012.122829/n) and round the required sample size upward. The requested result is 436513.445878."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5829, 13115.25 with probabilities 0.794, 0.1236, 0.0824. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.20600000000000002,
      "B": 9715,
      "d": 1943,
      "share": 0.75,
      "n": 193,
      "threshold": 403281.25,
      "tol": 13,
      "target": "reserve",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:0",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "Independent identical policies have no loss with probability 0.792. Given a loss, severity is 9720 with probability 0.60 or 19440 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1944. use the central limit theorem to calculate the smallest integer number of policies for which the average payment is within 14 of its mean with approximately 95% probability, using z=1.96.",
    "choices": [
      "$149546$",
      "$239274$",
      "$299092$",
      "$358910$",
      "$598184$"
    ],
    "answer": 2,
    "solution": [
      "The per-policy payment takes values 0, 5832, 13122 with probabilities 0.792, 0.1248, 0.0832. Include the no-loss mass.",
      "The per-policy mean is 1819.584 and variance 15259788.370944. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×15259788.370944); for an average use SD sqrt(15259788.370944/n) and round the required sample size upward. The requested result is 299092."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5832, 13122 with probabilities 0.792, 0.1248, 0.0832. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.20800000000000002,
      "B": 9720,
      "d": 1944,
      "share": 0.75,
      "n": 194,
      "threshold": 409585.23,
      "tol": 14,
      "target": "size",
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:1",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "Each of 150 independent identical policies has no claim with probability 0.75 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 15498.57113691. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0167$",
      "$0.0668$",
      "$0.4513$",
      "$0.9332$"
    ],
    "answer": 2,
    "solution": [
      "Compute per-policy moments before approximating: mean μ=80 and variance σ²=36266.666667, including no-claim policies.",
      "The total has mean 12000 and SD √(150×36266.666667)=2332.380758.",
      "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
    ],
    "feedback": {
      "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
    },
    "skills": [
      "insurance mixture moments",
      "CLT for an aggregate",
      "standardization"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
      "Compute per-policy moments before approximating: mean μ=80 and variance σ²=36266.666667, including no-claim policies."
    ],
    "verification": {
      "kind": "clt-payment",
      "n": 150,
      "p": 0.25,
      "B": 1000,
      "d": 200,
      "threshold": 15498.57113690718
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:8",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-payment-tail",
    "difficulty": 8,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "140 independent policies each have probability 0.4 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 64 policies have a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0713$",
      "$0.0838$",
      "$0.0979$",
      "$0.4117$",
      "$0.9021$"
    ],
    "answer": 2,
    "solution": [
      "The count mean is 56 and SD is √(140×0.4×0.6)=5.796551.",
      "At least 64 for an integer count becomes the normal event above 63.5. The standardized boundary is 1.293873.",
      "The approximate probability is 1-Φ(z)=0.097855."
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
      "The count mean is 56 and SD is √(140×0.4×0.6)=5.796551."
    ],
    "verification": {
      "kind": "clt-binomial",
      "n": 140,
      "p": 0.4,
      "k": 64
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:9",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-binomial-correction",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 12 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤3) is approximately at least 0.95.",
    "choices": [
      "$8$",
      "$16$",
      "$44$",
      "$61$",
      "$62$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 12/√n.",
      "The required central-normal half-width is 1.96×12/√n≤3, so n≥(1.96×12/3)²=61.4656.",
      "Round upward, since n is an integer and must meet the bound: n=62."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 12/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 12,
      "tolerance": 3,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:10",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "70 independent service times are each uniform on (0,16) minutes. Use the central limit theorem to approximate the probability that their average exceeds 8.8 minutes. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0043$",
      "$0.0736$",
      "$0.4312$",
      "$0.9264$"
    ],
    "answer": 2,
    "solution": [
      "One service time has mean 16/2 and variance 256/12.",
      "The average has variance 256/(12×70), so z=(8.8-16/2)/√(256/(12×70))=1.449138.",
      "The upper normal tail is approximately 0.07365."
    ],
    "feedback": {
      "0": "The SD decreases by √n, not n.",
      "1": "This standardizes using the average variance rather than its SD.",
      "3": "This uses the SD of one observation rather than the average.",
      "4": "This is the lower normal tail."
    },
    "skills": [
      "CLT for a uniform average",
      "variance divided by sample size",
      "normal tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a uniform average, variance divided by sample size, normal tail.",
      "One service time has mean 16/2 and variance 256/12."
    ],
    "verification": {
      "kind": "clt-uniform",
      "B": 16,
      "n": 70,
      "threshold": 8.8,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:11",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-uniform-average",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "60 independent claim amounts each have an exponential distribution with mean 140. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds 8900. Round your answer to four decimal places.",
    "choices": [
      "$0.0002$",
      "$0.3224$",
      "$0.3466$",
      "$0.4763$",
      "$0.6776$"
    ],
    "answer": 1,
    "solution": [
      "An exponential claim has variance 140². The aggregate has mean 8400 and variance 60×140².",
      "The standardized reserve is (8900-8400)/(140√60)=0.461069.",
      "The approximate upper normal tail is 0.322374."
    ],
    "feedback": {
      "0": "This uses one claim SD for the entire sum.",
      "2": "An aggregate of exponential variables is not a single exponential with the aggregate mean.",
      "3": "The sum SD grows with √n, not n.",
      "4": "This is the lower tail."
    },
    "skills": [
      "exponential moments",
      "CLT for an aggregate",
      "reserve exceedance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: exponential moments, CLT for an aggregate, reserve exceedance.",
      "An exponential claim has variance 140². The aggregate has mean 8400 and variance 60×140²."
    ],
    "verification": {
      "kind": "clt-exponential",
      "n": 60,
      "mu": 140,
      "reserve": 8900,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:12",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-exponential-total",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Each of 100 independent identical policies has no claim with probability 0.7 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 12673.49963397. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0200$",
      "$0.0668$",
      "$0.4404$",
      "$0.9332$"
    ],
    "answer": 2,
    "solution": [
      "Compute per-policy moments before approximating: mean μ=96 and variance σ²=41984, including no-claim policies.",
      "The total has mean 9600 and SD √(100×41984)=2048.999756.",
      "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
    ],
    "feedback": {
      "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
    },
    "skills": [
      "insurance mixture moments",
      "CLT for an aggregate",
      "standardization"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
      "Compute per-policy moments before approximating: mean μ=96 and variance σ²=41984, including no-claim policies."
    ],
    "verification": {
      "kind": "clt-payment",
      "n": 100,
      "p": 0.30000000000000004,
      "B": 1000,
      "d": 200,
      "threshold": 12673.49963396777
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:13",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-payment-tail",
    "difficulty": 8,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "160 independent policies each have probability 0.3 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 56 policies have a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0713$",
      "$0.0838$",
      "$0.0979$",
      "$0.4117$",
      "$0.9021$"
    ],
    "answer": 2,
    "solution": [
      "The count mean is 48 and SD is √(160×0.3×0.7)=5.796551.",
      "At least 56 for an integer count becomes the normal event above 55.5. The standardized boundary is 1.293873.",
      "The approximate probability is 1-Φ(z)=0.097855."
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
      "The count mean is 48 and SD is √(160×0.3×0.7)=5.796551."
    ],
    "verification": {
      "kind": "clt-binomial",
      "n": 160,
      "p": 0.3,
      "k": 56
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:14",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-binomial-correction",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 20 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤2) is approximately at least 0.95.",
    "choices": [
      "$20$",
      "$100$",
      "$271$",
      "$384$",
      "$385$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 20/√n.",
      "The required central-normal half-width is 1.96×20/√n≤2, so n≥(1.96×20/2)²=384.16.",
      "Round upward, since n is an integer and must meet the bound: n=385."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 20/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 20,
      "tolerance": 2,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:15",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent identical policies have no loss with probability 0.79. Given a loss, severity is 9725 with probability 0.60 or 19450 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1945. For 195 policies, use the central limit theorem to calculate the probability aggregate annual payment exceeds 415936.17. Round your answer to four decimal places.",
    "choices": [
      "$0.0734$",
      "$0.1469$",
      "$0.2669$",
      "$0.5734$",
      "$0.8531$"
    ],
    "answer": 1,
    "solution": [
      "The per-policy payment takes values 0, 5835, 13128.75 with probabilities 0.79, 0.126, 0.084. Include the no-loss mass.",
      "The per-policy mean is 1838.025 and variance 15390196.880625. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×15390196.880625); for an average use SD sqrt(15390196.880625/n) and round the required sample size upward. The requested result is 0.146859."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5835, 13128.75 with probabilities 0.79, 0.126, 0.084. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.21000000000000002,
      "B": 9725,
      "d": 1945,
      "share": 0.75,
      "n": 195,
      "threshold": 415936.17,
      "tol": 15,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:2",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "Independent identical policies have no loss with probability 0.788. Given a loss, severity is 9730 with probability 0.60 or 19460 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1946. For 196 policies, use the central limit theorem to calculate the approximately 95th-percentile reserve for 196 policies, using z=1.645. Round your answer to four decimal places.",
    "choices": [
      "$227299.6159$",
      "$363679.3854$",
      "$454599.2317$",
      "$545519.0781$",
      "$909198.4634$"
    ],
    "answer": 2,
    "solution": [
      "The per-policy payment takes values 0, 5838, 13135.5 with probabilities 0.788, 0.1272, 0.0848. Include the no-loss mass.",
      "The per-policy mean is 1856.484 and variance 15520235.943744. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×15520235.943744); for an average use SD sqrt(15520235.943744/n) and round the required sample size upward. The requested result is 454599.231714."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5838, 13135.5 with probabilities 0.788, 0.1272, 0.0848. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.21200000000000002,
      "B": 9730,
      "d": 1946,
      "share": 0.75,
      "n": 196,
      "threshold": 422334.13,
      "tol": 16,
      "target": "reserve",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:3",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "60 independent service times are each uniform on (0,18) minutes. Use the central limit theorem to approximate the probability that their average exceeds 9.7 minutes. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0599$",
      "$0.1484$",
      "$0.4464$",
      "$0.8516$"
    ],
    "answer": 2,
    "solution": [
      "One service time has mean 18/2 and variance 324/12.",
      "The average has variance 324/(12×60), so z=(9.7-18/2)/√(324/(12×60))=1.043498.",
      "The upper normal tail is approximately 0.148359."
    ],
    "feedback": {
      "0": "The SD decreases by √n, not n.",
      "1": "This standardizes using the average variance rather than its SD.",
      "3": "This uses the SD of one observation rather than the average.",
      "4": "This is the lower normal tail."
    },
    "skills": [
      "CLT for a uniform average",
      "variance divided by sample size",
      "normal tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a uniform average, variance divided by sample size, normal tail.",
      "One service time has mean 18/2 and variance 324/12."
    ],
    "verification": {
      "kind": "clt-uniform",
      "B": 18,
      "n": 60,
      "threshold": 9.7,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:16",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-uniform-average",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "70 independent claim amounts each have an exponential distribution with mean 140. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds 10700. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.2211$",
      "$0.3356$",
      "$0.4634$",
      "$0.7789$"
    ],
    "answer": 1,
    "solution": [
      "An exponential claim has variance 140². The aggregate has mean 9800 and variance 70×140².",
      "The standardized reserve is (10700-9800)/(140√70)=0.768361.",
      "The approximate upper normal tail is 0.221136."
    ],
    "feedback": {
      "0": "This uses one claim SD for the entire sum.",
      "2": "An aggregate of exponential variables is not a single exponential with the aggregate mean.",
      "3": "The sum SD grows with √n, not n.",
      "4": "This is the lower tail."
    },
    "skills": [
      "exponential moments",
      "CLT for an aggregate",
      "reserve exceedance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: exponential moments, CLT for an aggregate, reserve exceedance.",
      "An exponential claim has variance 140². The aggregate has mean 9800 and variance 70×140²."
    ],
    "verification": {
      "kind": "clt-exponential",
      "n": 70,
      "mu": 140,
      "reserve": 10700,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:17",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-exponential-total",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Each of 150 independent identical policies has no claim with probability 0.8 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 12783.95979874. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0134$",
      "$0.0668$",
      "$0.4513$",
      "$0.9332$"
    ],
    "answer": 2,
    "solution": [
      "Compute per-policy moments before approximating: mean μ=64 and variance σ²=30037.333333, including no-claim policies.",
      "The total has mean 9600 and SD √(150×30037.333333)=2122.639866.",
      "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
    ],
    "feedback": {
      "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
    },
    "skills": [
      "insurance mixture moments",
      "CLT for an aggregate",
      "standardization"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
      "Compute per-policy moments before approximating: mean μ=64 and variance σ²=30037.333333, including no-claim policies."
    ],
    "verification": {
      "kind": "clt-payment",
      "n": 150,
      "p": 0.2,
      "B": 1000,
      "d": 200,
      "threshold": 12783.959798741183
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:18",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-payment-tail",
    "difficulty": 8,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "120 independent policies each have probability 0.4 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 55 policies have a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0811$",
      "$0.0961$",
      "$0.1129$",
      "$0.4107$",
      "$0.8871$"
    ],
    "answer": 2,
    "solution": [
      "The count mean is 48 and SD is √(120×0.4×0.6)=5.366563.",
      "At least 55 for an integer count becomes the normal event above 54.5. The standardized boundary is 1.211203.",
      "The approximate probability is 1-Φ(z)=0.112909."
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
      "The count mean is 48 and SD is √(120×0.4×0.6)=5.366563."
    ],
    "verification": {
      "kind": "clt-binomial",
      "n": 120,
      "p": 0.4,
      "k": 55
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:19",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-binomial-correction",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 14 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤2) is approximately at least 0.95.",
    "choices": [
      "$14$",
      "$49$",
      "$133$",
      "$188$",
      "$189$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 14/√n.",
      "The required central-normal half-width is 1.96×14/√n≤2, so n≥(1.96×14/2)²=188.2384.",
      "Round upward, since n is an integer and must meet the bound: n=189."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 14/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 14,
      "tolerance": 2,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:20",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "50 independent service times are each uniform on (0,20) minutes. Use the central limit theorem to approximate the probability that their average exceeds 10.6 minutes. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.1841$",
      "$0.2312$",
      "$0.4586$",
      "$0.7688$"
    ],
    "answer": 2,
    "solution": [
      "One service time has mean 20/2 and variance 400/12.",
      "The average has variance 400/(12×50), so z=(10.6-20/2)/√(400/(12×50))=0.734847.",
      "The upper normal tail is approximately 0.231216."
    ],
    "feedback": {
      "0": "The SD decreases by √n, not n.",
      "1": "This standardizes using the average variance rather than its SD.",
      "3": "This uses the SD of one observation rather than the average.",
      "4": "This is the lower normal tail."
    },
    "skills": [
      "CLT for a uniform average",
      "variance divided by sample size",
      "normal tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a uniform average, variance divided by sample size, normal tail.",
      "One service time has mean 20/2 and variance 400/12."
    ],
    "verification": {
      "kind": "clt-uniform",
      "B": 20,
      "n": 50,
      "threshold": 10.6,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:21",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-uniform-average",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "80 independent claim amounts each have an exponential distribution with mean 140. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds 12000. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.2615$",
      "$0.3425$",
      "$0.4715$",
      "$0.7385$"
    ],
    "answer": 1,
    "solution": [
      "An exponential claim has variance 140². The aggregate has mean 11200 and variance 80×140².",
      "The standardized reserve is (12000-11200)/(140√80)=0.638877.",
      "The approximate upper normal tail is 0.261452."
    ],
    "feedback": {
      "0": "This uses one claim SD for the entire sum.",
      "2": "An aggregate of exponential variables is not a single exponential with the aggregate mean.",
      "3": "The sum SD grows with √n, not n.",
      "4": "This is the lower tail."
    },
    "skills": [
      "exponential moments",
      "CLT for an aggregate",
      "reserve exceedance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: exponential moments, CLT for an aggregate, reserve exceedance.",
      "An exponential claim has variance 140². The aggregate has mean 11200 and variance 80×140²."
    ],
    "verification": {
      "kind": "clt-exponential",
      "n": 80,
      "mu": 140,
      "reserve": 12000,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:22",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-exponential-total",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Each of 100 independent identical policies has no claim with probability 0.75 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 10856.57137142. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0167$",
      "$0.0668$",
      "$0.4404$",
      "$0.9332$"
    ],
    "answer": 2,
    "solution": [
      "Compute per-policy moments before approximating: mean μ=80 and variance σ²=36266.666667, including no-claim policies.",
      "The total has mean 8000 and SD √(100×36266.666667)=1904.380914.",
      "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
    ],
    "feedback": {
      "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
    },
    "skills": [
      "insurance mixture moments",
      "CLT for an aggregate",
      "standardization"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
      "Compute per-policy moments before approximating: mean μ=80 and variance σ²=36266.666667, including no-claim policies."
    ],
    "verification": {
      "kind": "clt-payment",
      "n": 100,
      "p": 0.25,
      "B": 1000,
      "d": 200,
      "threshold": 10856.57137141714
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:23",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-payment-tail",
    "difficulty": 8,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent identical policies have no loss with probability 0.786. Given a loss, severity is 9735 with probability 0.60 or 19470 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1947. use the central limit theorem to calculate the smallest integer number of policies for which the average payment is within 17 of its mean with approximately 95% probability, using z=1.96.",
    "choices": [
      "$104016$",
      "$166425$",
      "$208031$",
      "$249637$",
      "$416062$"
    ],
    "answer": 2,
    "solution": [
      "The per-policy payment takes values 0, 5841, 13142.25 with probabilities 0.786, 0.1284, 0.0856. Include the no-loss mass.",
      "The per-policy mean is 1874.961 and variance 15649903.850229. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×15649903.850229); for an average use SD sqrt(15649903.850229/n) and round the required sample size upward. The requested result is 208031."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5841, 13142.25 with probabilities 0.786, 0.1284, 0.0856. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.21400000000000002,
      "B": 9735,
      "d": 1947,
      "share": 0.75,
      "n": 197,
      "threshold": 428779.12,
      "tol": 17,
      "target": "size",
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:4",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "Independent identical policies have no loss with probability 0.784. Given a loss, severity is 9740 with probability 0.60 or 19480 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1948. For 198 policies, use the central limit theorem to calculate the probability aggregate annual payment exceeds 435271.18. Round your answer to four decimal places.",
    "choices": [
      "$0.0700$",
      "$0.1401$",
      "$0.2601$",
      "$0.5700$",
      "$0.8599$"
    ],
    "answer": 1,
    "solution": [
      "The per-policy payment takes values 0, 5844, 13149 with probabilities 0.784, 0.1296, 0.0864. Include the no-loss mass.",
      "The per-policy mean is 1893.456 and variance 15779198.888064. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×15779198.888064); for an average use SD sqrt(15779198.888064/n) and round the required sample size upward. The requested result is 0.140071."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5844, 13149 with probabilities 0.784, 0.1296, 0.0864. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.21600000000000003,
      "B": 9740,
      "d": 1948,
      "share": 0.75,
      "n": 198,
      "threshold": 435271.18,
      "tol": 18,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:5",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "140 independent policies each have probability 0.3 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 49 policies have a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0833$",
      "$0.0984$",
      "$0.1153$",
      "$0.4125$",
      "$0.8847$"
    ],
    "answer": 2,
    "solution": [
      "The count mean is 42 and SD is √(140×0.3×0.7)=5.422177.",
      "At least 49 for an integer count becomes the normal event above 48.5. The standardized boundary is 1.198781.",
      "The approximate probability is 1-Φ(z)=0.115307."
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
      "The count mean is 42 and SD is √(140×0.3×0.7)=5.422177."
    ],
    "verification": {
      "kind": "clt-binomial",
      "n": 140,
      "p": 0.3,
      "k": 49
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:24",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-binomial-correction",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 22 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤5) is approximately at least 0.95.",
    "choices": [
      "$9$",
      "$20$",
      "$53$",
      "$74$",
      "$75$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 22/√n.",
      "The required central-normal half-width is 1.96×22/√n≤5, so n≥(1.96×22/5)²=74.373376.",
      "Round upward, since n is an integer and must meet the bound: n=75."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 22/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 22,
      "tolerance": 5,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:25",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "40 independent service times are each uniform on (0,22) minutes. Use the central limit theorem to approximate the probability that their average exceeds 11.5 minutes. Round your answer to four decimal places.",
    "choices": [
      "$0.0008$",
      "$0.3093$",
      "$0.3100$",
      "$0.4686$",
      "$0.6907$"
    ],
    "answer": 1,
    "solution": [
      "One service time has mean 22/2 and variance 484/12.",
      "The average has variance 484/(12×40), so z=(11.5-22/2)/√(484/(12×40))=0.49793.",
      "The upper normal tail is approximately 0.309267."
    ],
    "feedback": {
      "0": "The SD decreases by √n, not n.",
      "2": "This standardizes using the average variance rather than its SD.",
      "3": "This uses the SD of one observation rather than the average.",
      "4": "This is the lower normal tail."
    },
    "skills": [
      "CLT for a uniform average",
      "variance divided by sample size",
      "normal tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a uniform average, variance divided by sample size, normal tail.",
      "One service time has mean 22/2 and variance 484/12."
    ],
    "verification": {
      "kind": "clt-uniform",
      "B": 22,
      "n": 40,
      "threshold": 11.5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:26",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-uniform-average",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "90 independent claim amounts each have an exponential distribution with mean 140. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds 13300. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.2991$",
      "$0.3480$",
      "$0.4778$",
      "$0.7009$"
    ],
    "answer": 1,
    "solution": [
      "An exponential claim has variance 140². The aggregate has mean 12600 and variance 90×140².",
      "The standardized reserve is (13300-12600)/(140√90)=0.527046.",
      "The approximate upper normal tail is 0.299081."
    ],
    "feedback": {
      "0": "This uses one claim SD for the entire sum.",
      "2": "An aggregate of exponential variables is not a single exponential with the aggregate mean.",
      "3": "The sum SD grows with √n, not n.",
      "4": "This is the lower tail."
    },
    "skills": [
      "exponential moments",
      "CLT for an aggregate",
      "reserve exceedance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: exponential moments, CLT for an aggregate, reserve exceedance.",
      "An exponential claim has variance 140². The aggregate has mean 12600 and variance 90×140²."
    ],
    "verification": {
      "kind": "clt-exponential",
      "n": 90,
      "mu": 140,
      "reserve": 13300,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:27",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-exponential-total",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Each of 100 independent identical policies has no claim with probability 0.8 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 8999.69228948. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0134$",
      "$0.0668$",
      "$0.4404$",
      "$0.9332$"
    ],
    "answer": 2,
    "solution": [
      "Compute per-policy moments before approximating: mean μ=64 and variance σ²=30037.333333, including no-claim policies.",
      "The total has mean 6400 and SD √(100×30037.333333)=1733.128193.",
      "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
    ],
    "feedback": {
      "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
    },
    "skills": [
      "insurance mixture moments",
      "CLT for an aggregate",
      "standardization"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
      "Compute per-policy moments before approximating: mean μ=64 and variance σ²=30037.333333, including no-claim policies."
    ],
    "verification": {
      "kind": "clt-payment",
      "n": 100,
      "p": 0.2,
      "B": 1000,
      "d": 200,
      "threshold": 8999.692289483508
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:28",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-payment-tail",
    "difficulty": 8,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "160 independent policies each have probability 0.35 of a claim. Use a normal approximation with continuity correction to calculate the probability at least 64 policies have a claim. Round your answer to four decimal places.",
    "choices": [
      "$0.0794$",
      "$0.0924$",
      "$0.1069$",
      "$0.4184$",
      "$0.8931$"
    ],
    "answer": 2,
    "solution": [
      "The count mean is 56 and SD is √(160×0.35×0.65)=6.033241.",
      "At least 64 for an integer count becomes the normal event above 63.5. The standardized boundary is 1.243113.",
      "The approximate probability is 1-Φ(z)=0.106913."
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
      "The count mean is 56 and SD is √(160×0.35×0.65)=6.033241."
    ],
    "verification": {
      "kind": "clt-binomial",
      "n": 160,
      "p": 0.35,
      "k": 64
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:29",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-binomial-correction",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 16 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤5) is approximately at least 0.95.",
    "choices": [
      "$7$",
      "$11$",
      "$28$",
      "$39$",
      "$40$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 16/√n.",
      "The required central-normal half-width is 1.96×16/√n≤5, so n≥(1.96×16/5)²=39.337984.",
      "Round upward, since n is an integer and must meet the bound: n=40."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 16/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 16,
      "tolerance": 5,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:30",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "40 independent service times are each uniform on (0,12) minutes. Use the central limit theorem to approximate the probability that their average exceeds 6.9 minutes. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0013$",
      "$0.0502$",
      "$0.3975$",
      "$0.9498$"
    ],
    "answer": 2,
    "solution": [
      "One service time has mean 12/2 and variance 144/12.",
      "The average has variance 144/(12×40), so z=(6.9-12/2)/√(144/(12×40))=1.643168.",
      "The upper normal tail is approximately 0.050174."
    ],
    "feedback": {
      "0": "The SD decreases by √n, not n.",
      "1": "This standardizes using the average variance rather than its SD.",
      "3": "This uses the SD of one observation rather than the average.",
      "4": "This is the lower normal tail."
    },
    "skills": [
      "CLT for a uniform average",
      "variance divided by sample size",
      "normal tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a uniform average, variance divided by sample size, normal tail.",
      "One service time has mean 12/2 and variance 144/12."
    ],
    "verification": {
      "kind": "clt-uniform",
      "B": 12,
      "n": 40,
      "threshold": 6.9,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:31",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-uniform-average",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent identical policies have no loss with probability 0.782. Given a loss, severity is 9745 with probability 0.60 or 19490 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1949. For 199 policies, use the central limit theorem to calculate the approximately 95th-percentile reserve for 199 policies, using z=1.645. Round your answer to four decimal places.",
    "choices": [
      "$236518.6260$",
      "$378429.8016$",
      "$473037.2520$",
      "$567644.7024$",
      "$946074.5040$"
    ],
    "answer": 2,
    "solution": [
      "The per-policy payment takes values 0, 5847, 13155.75 with probabilities 0.782, 0.1308, 0.0872. Include the no-loss mass.",
      "The per-policy mean is 1911.969 and variance 15908119.343289. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×15908119.343289); for an average use SD sqrt(15908119.343289/n) and round the required sample size upward. The requested result is 473037.252022."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5847, 13155.75 with probabilities 0.782, 0.1308, 0.0872. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.21800000000000003,
      "B": 9745,
      "d": 1949,
      "share": 0.75,
      "n": 199,
      "threshold": 441810.35,
      "tol": 19,
      "target": "reserve",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:6",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "Independent identical policies have no loss with probability 0.78. Given a loss, severity is 9750 with probability 0.60 or 19500 with probability 0.40. The insurer pays 75% of the loss above ordinary deductible 1950. use the central limit theorem to calculate the smallest integer number of policies for which the average payment is within 20 of its mean with approximately 95% probability, using z=1.96.",
    "choices": [
      "$77008$",
      "$123214$",
      "$154017$",
      "$184820$",
      "$308034$"
    ],
    "answer": 2,
    "solution": [
      "The per-policy payment takes values 0, 5850, 13162.5 with probabilities 0.78, 0.132, 0.088. Include the no-loss mass.",
      "The per-policy mean is 1930.5 and variance 16036663.5. An aggregate of n policies has mean n times the mean and variance n times the variance.",
      "Use the normal approximation with SD sqrt(n×16036663.5); for an average use SD sqrt(16036663.5/n) and round the required sample size upward. The requested result is 154017."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "loss and payment moments",
      "independent aggregate",
      "CLT and inverse planning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: loss and payment moments, independent aggregate, CLT and inverse planning.",
      "The per-policy payment takes values 0, 5850, 13162.5 with probabilities 0.78, 0.132, 0.088. Include the no-loss mass."
    ],
    "verification": {
      "kind": "section-clt",
      "p": 0.22,
      "B": 9750,
      "d": 1950,
      "share": 0.75,
      "n": 200,
      "threshold": 448396.65,
      "tol": 20,
      "target": "size",
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:7",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "cumulative-multivariate-random-variables-f",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": true
  },
  {
    "question": "100 independent claim amounts each have an exponential distribution with mean 140. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds 14600. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.3341$",
      "$0.3524$",
      "$0.4829$",
      "$0.6659$"
    ],
    "answer": 1,
    "solution": [
      "An exponential claim has variance 140². The aggregate has mean 14000 and variance 100×140².",
      "The standardized reserve is (14600-14000)/(140√100)=0.428571.",
      "The approximate upper normal tail is 0.334118."
    ],
    "feedback": {
      "0": "This uses one claim SD for the entire sum.",
      "2": "An aggregate of exponential variables is not a single exponential with the aggregate mean.",
      "3": "The sum SD grows with √n, not n.",
      "4": "This is the lower tail."
    },
    "skills": [
      "exponential moments",
      "CLT for an aggregate",
      "reserve exceedance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: exponential moments, CLT for an aggregate, reserve exceedance.",
      "An exponential claim has variance 140². The aggregate has mean 14000 and variance 100×140²."
    ],
    "verification": {
      "kind": "clt-exponential",
      "n": 100,
      "mu": 140,
      "reserve": 14600,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:32",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-exponential-total",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Each of 125 independent identical policies has no claim with probability 0.8 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 10906.54433993. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0134$",
      "$0.0668$",
      "$0.4466$",
      "$0.9332$"
    ],
    "answer": 2,
    "solution": [
      "Compute per-policy moments before approximating: mean μ=64 and variance σ²=30037.333333, including no-claim policies.",
      "The total has mean 8000 and SD √(125×30037.333333)=1937.696227.",
      "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
    ],
    "feedback": {
      "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
    },
    "skills": [
      "insurance mixture moments",
      "CLT for an aggregate",
      "standardization"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
      "Compute per-policy moments before approximating: mean μ=64 and variance σ²=30037.333333, including no-claim policies."
    ],
    "verification": {
      "kind": "clt-payment",
      "n": 125,
      "p": 0.2,
      "B": 1000,
      "d": 200,
      "threshold": 10906.544339933593
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:33",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-payment-tail",
    "difficulty": 8,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 14 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤4) is approximately at least 0.95.",
    "choices": [
      "$7$",
      "$13$",
      "$34$",
      "$47$",
      "$48$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 14/√n.",
      "The required central-normal half-width is 1.96×14/√n≤4, so n≥(1.96×14/4)²=47.0596.",
      "Round upward, since n is an integer and must meet the bound: n=48."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 14/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 14,
      "tolerance": 4,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:34",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 24 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤4) is approximately at least 0.95.",
    "choices": [
      "$12$",
      "$36$",
      "$98$",
      "$138$",
      "$139$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 24/√n.",
      "The required central-normal half-width is 1.96×24/√n≤4, so n≥(1.96×24/4)²=138.2976.",
      "Round upward, since n is an integer and must meet the bound: n=139."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 24/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 24,
      "tolerance": 4,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:35",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "80 independent service times are each uniform on (0,14) minutes. Use the central limit theorem to approximate the probability that their average exceeds 7.7 minutes. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0003$",
      "$0.0607$",
      "$0.4312$",
      "$0.9393$"
    ],
    "answer": 2,
    "solution": [
      "One service time has mean 14/2 and variance 196/12.",
      "The average has variance 196/(12×80), so z=(7.7-14/2)/√(196/(12×80))=1.549193.",
      "The upper normal tail is approximately 0.060668."
    ],
    "feedback": {
      "0": "The SD decreases by √n, not n.",
      "1": "This standardizes using the average variance rather than its SD.",
      "3": "This uses the SD of one observation rather than the average.",
      "4": "This is the lower normal tail."
    },
    "skills": [
      "CLT for a uniform average",
      "variance divided by sample size",
      "normal tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a uniform average, variance divided by sample size, normal tail.",
      "One service time has mean 14/2 and variance 196/12."
    ],
    "verification": {
      "kind": "clt-uniform",
      "B": 14,
      "n": 80,
      "threshold": 7.7,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:36",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-uniform-average",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "50 independent claim amounts each have an exponential distribution with mean 160. Use the central limit theorem to approximate the probability that the aggregate claim amount exceeds 8500. Round your answer to four decimal places.",
    "choices": [
      "$0.0009$",
      "$0.3293$",
      "$0.3456$",
      "$0.4751$",
      "$0.6707$"
    ],
    "answer": 1,
    "solution": [
      "An exponential claim has variance 160². The aggregate has mean 8000 and variance 50×160².",
      "The standardized reserve is (8500-8000)/(160√50)=0.441942.",
      "The approximate upper normal tail is 0.329266."
    ],
    "feedback": {
      "0": "This uses one claim SD for the entire sum.",
      "2": "An aggregate of exponential variables is not a single exponential with the aggregate mean.",
      "3": "The sum SD grows with √n, not n.",
      "4": "This is the lower tail."
    },
    "skills": [
      "exponential moments",
      "CLT for an aggregate",
      "reserve exceedance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: exponential moments, CLT for an aggregate, reserve exceedance.",
      "An exponential claim has variance 160². The aggregate has mean 8000 and variance 50×160²."
    ],
    "verification": {
      "kind": "clt-exponential",
      "n": 50,
      "mu": 160,
      "reserve": 8500,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:37",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-exponential-total",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Each of 125 independent identical policies has no claim with probability 0.75 and one claim otherwise. Conditional severity is uniform on (0,1000). Payment is the positive excess over 200. Using the CLT, approximate the probability total payment exceeds 13193.74388453. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0167$",
      "$0.0668$",
      "$0.4466$",
      "$0.9332$"
    ],
    "answer": 2,
    "solution": [
      "Compute per-policy moments before approximating: mean μ=80 and variance σ²=36266.666667, including no-claim policies.",
      "The total has mean 10000 and SD √(125×36266.666667)=2129.16259.",
      "The standardized threshold is about 1.5, so the approximate upper tail is 0.066807. This is a continuous-payment model, so no unit-lattice continuity correction is used."
    ],
    "feedback": {
      "0": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "1": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "3": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies.",
      "4": "First derive the per-policy payment moments, then use total SD equal to individual SD times the square root of the number of policies."
    },
    "skills": [
      "insurance mixture moments",
      "CLT for an aggregate",
      "standardization"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: insurance mixture moments, CLT for an aggregate, standardization.",
      "Compute per-policy moments before approximating: mean μ=80 and variance σ²=36266.666667, including no-claim policies."
    ],
    "verification": {
      "kind": "clt-payment",
      "n": 125,
      "p": 0.25,
      "B": 1000,
      "d": 200,
      "threshold": 13193.743884534262
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:38",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-payment-tail",
    "difficulty": 8,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  },
  {
    "question": "Independent and identically distributed observations have standard deviation 20 and finite mean μ. Using the central limit theorem and z=1.96 for a central 95% normal interval, calculate the smallest integer sample size n for which P(|sample mean-μ|≤4) is approximately at least 0.95.",
    "choices": [
      "$10$",
      "$25$",
      "$68$",
      "$96$",
      "$97$"
    ],
    "answer": 4,
    "solution": [
      "The sample mean has standard deviation 20/√n.",
      "The required central-normal half-width is 1.96×20/√n≤4, so n≥(1.96×20/4)²=96.04.",
      "Round upward, since n is an integer and must meet the bound: n=97."
    ],
    "feedback": {
      "0": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "1": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "2": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality.",
      "3": "Use the two-sided 95% critical value, the square-root sample-size rule for SD, and the smallest integer satisfying the inequality."
    },
    "skills": [
      "CLT for a sample mean",
      "two-sided probability",
      "inverse sample size"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: CLT for a sample mean, two-sided probability, inverse sample size.",
      "The sample mean has standard deviation 20/√n."
    ],
    "verification": {
      "kind": "clt-size",
      "sd": 20,
      "tolerance": 4,
      "z": 1.96,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-f:39",
    "topicId": "mrv-f1-central-limit-theorem",
    "family": "clt-sample-size",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-f1-central-limit-theorem"
    ],
    "cumulative": false
  }
];

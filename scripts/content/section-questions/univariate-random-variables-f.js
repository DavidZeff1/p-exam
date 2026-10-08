export default [
  {
    "question": "A loss X is uniform on (0,11070) for class 1 and uniform on (0,22140) for class 2. The probability of class 1 is 0.335. The total cost is Y=1167+0.685X. Calculate the coefficient of variation of Y. Round your answer to four decimal places.",
    "choices": [
      "$0.2801$",
      "$0.4481$",
      "$0.5601$",
      "$0.6722$",
      "$1.1203$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9215.775 and E[X²]=122340658.5.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7479.805875 and Var(Y)=17553777.469228. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 0.560138."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9215.775 and E[X²]=122340658.5."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11070,
      "w": 0.335,
      "a": 0.6849999999999999,
      "b": 1167,
      "target": "cv",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:0",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "A loss X is uniform on (0,11080) for class 1 and uniform on (0,22160) for class 2. The probability of class 1 is 0.34. The total cost is Y=1168+0.69X. Calculate the variance of Y. Round your answer to four decimal places.",
    "choices": [
      "$8896924.5901$",
      "$14235079.3441$",
      "$17793849.1801$",
      "$21352619.0162$",
      "$35587698.3603$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9196.4 and E[X²]=121947957.333333.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7513.516 and Var(Y)=17793849.180144. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 17793849.180144."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9196.4 and E[X²]=121947957.333333."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11080,
      "w": 0.34,
      "a": 0.69,
      "b": 1168,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:1",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "A policy has no claim with probability 0.8 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1200). The insurer pays the positive excess over a deductible of 300. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
    "choices": [
      "$189.5884$",
      "$17718.7500$",
      "$35943.7500$",
      "$40500.0000$",
      "$88593.7500$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.2: E[Y]=67.5, E[Y²]=40500.",
      "The per-policy variance is 40500-(67.5)²=35943.75."
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
      "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500."
    ],
    "verification": {
      "kind": "policy-mixture",
      "p": 0.2,
      "B": 1200,
      "d": 300.0,
      "target": "payment-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:8",
    "topicId": "urv-f1-variance",
    "family": "mixture-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X is uniform on (0,1800). Insurer payment is Y=min(0.75 max(X-360,0),900). Calculate the standard deviation of Y per loss. Round your answer to four decimal places.",
    "choices": [
      "$334.0659$",
      "$389.7114$",
      "$420.0000$",
      "$536.6563$",
      "$111600.0000$"
    ],
    "answer": 0,
    "solution": [
      "Payment is zero through 360, grows at rate 0.75 until loss 1560, and then stays at the cap.",
      "Integrating the linear region and including the cap mass gives E[Y]=420 and E[Y²]=288000.",
      "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=111600.",
      "Take the square root of the variance to get SD(Y)=334.065862."
    ],
    "feedback": {
      "1": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
      "2": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
      "3": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
      "4": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities."
    },
    "skills": [
      "piecewise moments",
      "cap mass",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: piecewise moments, cap mass, standard deviation.",
      "Payment is zero through 360, grows at rate 0.75 until loss 1560, and then stays at the cap."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 1800,
      "d": 360.0,
      "share": 0.75,
      "cap": 900.0,
      "inflation": 1,
      "target": "sd"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:9",
    "topicId": "urv-f2-standard-deviation",
    "family": "uniform-payment-sd",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "Positive loss X has mean 50 and standard deviation 20. Adjusted cost is Y=1.2X+b. If Y has coefficient of variation 0.25 and positive mean, calculate b. Round your answer to four decimal places.",
    "choices": [
      "$30.0000$",
      "$36.0000$",
      "$42.1470$",
      "$60.0000$",
      "$96.0000$"
    ],
    "answer": 1,
    "solution": [
      "Linear scaling gives SD(Y)=1.2(20)=24; a constant adds no variance.",
      "CV(Y)=SD(Y)/E[Y] implies E[Y]=24/0.25=96.",
      "Solve 1.2(50)+b=96, giving b=36."
    ],
    "feedback": {
      "0": "Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance.",
      "2": "Recheck the setup and the requested quantity before evaluating the formula.",
      "3": "Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance.",
      "4": "Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance."
    },
    "skills": [
      "SD scaling",
      "CV",
      "inverse affine parameter"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: SD scaling, CV, inverse affine parameter.",
      "Linear scaling gives SD(Y)=1.2(20)=24; a constant adds no variance."
    ],
    "verification": {
      "kind": "affine-cv",
      "mean": 50,
      "sd": 20,
      "a": 1.2,
      "targetCV": 0.25
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:10",
    "topicId": "urv-f3-coefficient-variation",
    "family": "affine-cv-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2x/4 on (0,2). A benefit is Y=1X²+4. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.2222$",
      "$1.3333$",
      "$1.5870$",
      "$5.3333$",
      "$17.3333$"
    ],
    "answer": 1,
    "solution": [
      "Variance ignores the additive constant, so Var(Y)=1Var(X²).",
      "Integrating the density gives E[X²]=2 and E[X⁴]=5.333333.",
      "Var(Y)=1(E[X⁴]-(E[X²])²)=1.333333."
    ],
    "feedback": {
      "0": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
      "2": "Recheck the setup and the requested quantity before evaluating the formula.",
      "3": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
      "4": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift."
    },
    "skills": [
      "transformed moments",
      "fourth moment",
      "variance scaling"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: transformed moments, fourth moment, variance scaling.",
      "Variance ignores the additive constant, so Var(Y)=1Var(X²)."
    ],
    "verification": {
      "kind": "power-transform",
      "L": 2,
      "power": 1,
      "a": 1,
      "b": 4,
      "target": "variance-square"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:11",
    "topicId": "urv-f1-variance",
    "family": "quadratic-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.8 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1600). The insurer pays the positive excess over a deductible of 400. Calculate the annual payment standard deviation per policy. Round your answer to four decimal places.",
    "choices": [
      "$90.0000$",
      "$177.4824$",
      "$252.7845$",
      "$396.8627$",
      "$63900.0000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.2: E[Y]=90, E[Y²]=72000.",
      "The per-policy variance is 72000-(90)²=63900.",
      "The square root of the per-policy variance is 252.784493."
    ],
    "feedback": {
      "0": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "1": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "3": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "4": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation."
    },
    "skills": [
      "occurrence/severity mixture",
      "payment variance",
      "SD"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: occurrence/severity mixture, payment variance, SD.",
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000."
    ],
    "verification": {
      "kind": "policy-mixture",
      "p": 0.2,
      "B": 1600,
      "d": 400.0,
      "target": "payment-sd"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:12",
    "topicId": "urv-f2-standard-deviation",
    "family": "mixture-payment-sd",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "X is uniform on (0,1800). Insurer payment is Y=min(0.75 max(X-360,0),900). Calculate the coefficient of variation of Y per loss. Round your answer to four decimal places.",
    "choices": [
      "$0.3712$",
      "$0.5774$",
      "$0.7954$",
      "$1.2572$",
      "$265.7143$"
    ],
    "answer": 2,
    "solution": [
      "Payment is zero through 360, grows at rate 0.75 until loss 1560, and then stays at the cap.",
      "Integrating the linear region and including the cap mass gives E[Y]=420 and E[Y²]=288000.",
      "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=111600.",
      "CV(Y)=SD(Y)/E[Y]=334.065862/420=0.795395."
    ],
    "feedback": {
      "0": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
      "1": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
      "3": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
      "4": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule."
    },
    "skills": [
      "transformed moments",
      "SD",
      "relative variability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: transformed moments, SD, relative variability.",
      "Payment is zero through 360, grows at rate 0.75 until loss 1560, and then stays at the cap."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 1800,
      "d": 360.0,
      "share": 0.75,
      "cap": 900.0,
      "inflation": 1,
      "target": "cv"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:13",
    "topicId": "urv-f3-coefficient-variation",
    "family": "uniform-payment-cv",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "A randomly selected loss belongs to class A with probability 0.25 and to class B otherwise. Conditional loss means are 120 and 420, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
    "choices": [
      "$70.0000$",
      "$148.5766$",
      "$5200.0000$",
      "$16875.0000$",
      "$22075.0000$"
    ],
    "answer": 4,
    "solution": [
      "The mean is 0.25(120)+0.75(420)=345.",
      "The mean conditional variance is 5200. The variance of the class means is 0.25(0.75)(120-420)²=16875.",
      "Total variance is the sum 5200+16875=22075."
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
      "The mean is 0.25(120)+0.75(420)=345."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.25,
      "means": [
        120,
        420
      ],
      "sds": [
        40,
        80
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:14",
    "topicId": "urv-f1-variance",
    "family": "two-class-loss-variance",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A loss belongs to class A with probability 0.4 and otherwise to class B. Conditional means are 100 and 300, and conditional SDs are 40 and 80, respectively. Calculate the unconditional loss standard deviation. Round your answer to four decimal places.",
    "choices": [
      "$64.0000$",
      "$66.9328$",
      "$97.9796$",
      "$118.6592$",
      "$14080.0000$"
    ],
    "answer": 3,
    "solution": [
      "The unconditional mean is 220. Total variance combines mean within-class variance 4480 and variance of class means 9600.",
      "Thus Var(X)=14080 and SD(X)=118.659176.",
      "The requested standard deviation is 118.659176."
    ],
    "feedback": {
      "0": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "1": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "2": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "4": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV."
    },
    "skills": [
      "total variance",
      "mixture mean",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: total variance, mixture mean, standard deviation.",
      "The unconditional mean is 220. Total variance combines mean within-class variance 4480 and variance of class means 9600."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.4,
      "means": [
        100,
        300
      ],
      "sds": [
        40,
        80
      ],
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:15",
    "topicId": "urv-f2-standard-deviation",
    "family": "loss-mixture-sd",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is uniform on (0,11090) for class 1 and uniform on (0,22180) for class 2. The probability of class 1 is 0.345. The total cost is Y=1169+0.695X. Calculate the standard deviation of Y. Round your answer to four decimal places.",
    "choices": [
      "$2123.3464$",
      "$3397.3542$",
      "$4246.6928$",
      "$5096.0313$",
      "$8493.3855$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9176.975 and E[X²]=121553238.833333.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7546.997625 and Var(Y)=18034399.482965. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 4246.69277."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9176.975 and E[X²]=121553238.833333."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11090,
      "w": 0.345,
      "a": 0.695,
      "b": 1169,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:2",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "A loss X is uniform on (0,11100) for class 1 and uniform on (0,22200) for class 2. The probability of class 1 is 0.35. The total cost is Y=1170+0.7X. Calculate the coefficient of variation of Y. Round your answer to four decimal places.",
    "choices": [
      "$0.2820$",
      "$0.4512$",
      "$0.5640$",
      "$0.6768$",
      "$1.1279$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9157.5 and E[X²]=121156500.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7580.25 and Var(Y)=18275379.9375. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 0.563962."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9157.5 and E[X²]=121156500."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11100,
      "w": 0.35,
      "a": 0.7,
      "b": 1170,
      "target": "cv",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:3",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "A loss belongs to class A with probability 0.3 and otherwise to class B. Conditional means are 100 and 380, and conditional SDs are 40 and 80, respectively. Calculate the unconditional loss coefficient of variation. Round your answer to four decimal places.",
    "choices": [
      "$0.2379$",
      "$0.4335$",
      "$0.4945$",
      "$2.0223$",
      "$72.3784$"
    ],
    "answer": 2,
    "solution": [
      "The unconditional mean is 296. Total variance combines mean within-class variance 4960 and variance of class means 16464.",
      "Thus Var(X)=21424 and SD(X)=146.369396.",
      "The requested coefficient of variation is 0.494491 after dividing SD by the unconditional mean."
    ],
    "feedback": {
      "0": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "1": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "3": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "4": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV."
    },
    "skills": [
      "total variance",
      "mixture mean",
      "coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: total variance, mixture mean, coefficient of variation.",
      "The unconditional mean is 296. Total variance combines mean within-class variance 4960 and variance of class means 16464."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.3,
      "means": [
        100,
        380
      ],
      "sds": [
        40,
        80
      ],
      "target": "cv",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:16",
    "topicId": "urv-f3-coefficient-variation",
    "family": "loss-mixture-cv",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(8-x)/64 for 0<x<8, and zero otherwise. Given X>3.6, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.0371$",
      "$1.0756$",
      "$1.6133$",
      "$3.2267$",
      "$3.5556$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((8-3.6)/8)². Divide the original density by this probability on (3.6,8).",
      "For Z=X-3.6, the conditional density is 2(4.4-z)/(4.4)² on (0,4.4). Its first two moments are 1.466667 and 3.226667.",
      "The shift contributes no variance, so Var(X given X>3.6)=(4.4)²/18=1.075556. The conditional mean is 5.066667."
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
      "The condition probability is ((8-3.6)/8)². Divide the original density by this probability on (3.6,8)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 8,
      "lower": 3.6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:17",
    "topicId": "urv-f1-variance",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 6 and 7 and correlation 0.25. Calculate the standard deviation of 2X-3Y. Round your answer to four decimal places.",
    "choices": [
      "$9.0000$",
      "$21.4243$",
      "$24.1868$",
      "$26.6646$",
      "$459.0000$"
    ],
    "answer": 1,
    "solution": [
      "First Cov(X,Y)=0.25×6×7=10.5.",
      "Then Var(2X-3Y)=4×6²+9×7²-12×10.5=459.",
      "Take the square root to get the SD 21.424285."
    ],
    "feedback": {
      "0": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
      "2": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
      "3": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
      "4": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance."
    },
    "skills": [
      "correlation to covariance",
      "linear variance",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, linear variance, standard deviation.",
      "First Cov(X,Y)=0.25×6×7=10.5."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 6,
      "sy": 7,
      "rho": 0.25,
      "a": 2,
      "b": -3,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:18",
    "topicId": "urv-f2-standard-deviation",
    "family": "correlated-linear-sd",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is zero with probability 0.15. Conditional on a positive loss, its CDF is (x/6)^3 on (0,6). Calculate the coefficient of variation of X, including zero losses. Round your answer to four decimal places.",
    "choices": [
      "$0.1320$",
      "$0.2582$",
      "$0.5049$",
      "$0.9750$",
      "$1.9807$"
    ],
    "answer": 2,
    "solution": [
      "Include the positive-loss probability in both raw moments: E[X]=3.825 and E[X²]=18.36.",
      "Then SD(X)=√(E[X²]-(E[X])²)=1.931159.",
      "CV(X)=SD(X)/E[X]=0.504878."
    ],
    "feedback": {
      "0": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
      "1": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
      "3": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
      "4": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean."
    },
    "skills": [
      "mixed raw moments",
      "standard deviation",
      "coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixed raw moments, standard deviation, coefficient of variation.",
      "Include the positive-loss probability in both raw moments: E[X]=3.825 and E[X²]=18.36."
    ],
    "verification": {
      "kind": "mixed-power",
      "p": 0.15000000000000002,
      "B": 6,
      "power": 3,
      "target": "cv",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:19",
    "topicId": "urv-f3-coefficient-variation",
    "family": "mixed-power-cv",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent policies each have claim probability 0.15. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
    "choices": [
      "$0.4408$",
      "$0.7650$",
      "$1.2282$",
      "$1.7187$",
      "$2.5287$"
    ],
    "answer": 0,
    "solution": [
      "Unconditionally E[N]=0.9 and E[N²]=np(1-p)+(np)²=1.575.",
      "The condition probability is 0.62285. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
      "Conditional variance is 1.575/0.62285-(0.9/0.62285)²=0.44076."
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
      "Unconditionally E[N]=0.9 and E[N²]=np(1-p)+(np)²=1.575."
    ],
    "verification": {
      "kind": "binomial",
      "n": 6,
      "p": 0.15,
      "target": "positive-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:20",
    "topicId": "urv-f1-variance",
    "family": "conditional-binomial-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(10-x)/100 on (0,10), and zero elsewhere. Given X>4.5, calculate its conditional standard deviation. Round your answer to four decimal places.",
    "choices": [
      "$1.2964$",
      "$1.5877$",
      "$1.6806$",
      "$2.2454$",
      "$2.3570$"
    ],
    "answer": 0,
    "solution": [
      "Normalize the density on (4.5,10). After subtracting 4.5, the conditional variable is decreasing triangular on (0,5.5).",
      "Its conditional variance is (5.5)²/18=1.680556.",
      "Take the square root: SD(X given X>4.5)=1.296362."
    ],
    "feedback": {
      "1": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
      "2": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
      "3": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
      "4": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities."
    },
    "skills": [
      "conditional density",
      "conditional variance",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional density, conditional variance, standard deviation.",
      "Normalize the density on (4.5,10). After subtracting 4.5, the conditional variable is decreasing triangular on (0,5.5)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 10,
      "lower": 4.5,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:21",
    "topicId": "urv-f2-standard-deviation",
    "family": "triangular-conditional-sd",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "A gamma loss has mean 15 and squared coefficient of variation 1/3. Calculate its variance. Round your answer to four decimal places.",
    "choices": [
      "$8.6603$",
      "$15.0000$",
      "$25.0000$",
      "$75.0000$",
      "$225.0000$"
    ],
    "answer": 3,
    "solution": [
      "For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV.",
      "The mean αθ=15 gives α=3 and θ=5.",
      "Var(X)=αθ²=3×5²=75. Equivalently, Var(X)=CV²(E[X])²."
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
      "shape": 3,
      "scale": 5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:22",
    "topicId": "urv-f3-coefficient-variation",
    "family": "gamma-cv-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.85 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1400). The insurer pays the positive excess over a deductible of 350. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
    "choices": [
      "$194.5646$",
      "$18087.8906$",
      "$37855.3711$",
      "$41343.7500$",
      "$120585.9375$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1400-350)²/(2×1400)=393.75 and second moment (1400-350)³/(3×1400)=275625.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.15: E[Y]=59.0625, E[Y²]=41343.75.",
      "The per-policy variance is 41343.75-(59.0625)²=37855.371094."
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
      "p": 0.15,
      "B": 1400,
      "d": 350.0,
      "target": "payment-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:23",
    "topicId": "urv-f1-variance",
    "family": "mixture-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is uniform on (0,11110) for class 1 and uniform on (0,22220) for class 2. The probability of class 1 is 0.355. The total cost is Y=1171+0.705X. Calculate the variance of Y. Round your answer to four decimal places.",
    "choices": [
      "$9258370.6465$",
      "$14813393.0343$",
      "$18516741.2929$",
      "$22220089.5515$",
      "$37033482.5858$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9137.975 and E[X²]=120757737.833333.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7613.272375 and Var(Y)=18516741.292924. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 18516741.292924."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9137.975 and E[X²]=120757737.833333."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11110,
      "w": 0.355,
      "a": 0.705,
      "b": 1171,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:4",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "A loss X is uniform on (0,11120) for class 1 and uniform on (0,22240) for class 2. The probability of class 1 is 0.36. The total cost is Y=1172+0.71X. Calculate the standard deviation of Y. Round your answer to four decimal places.",
    "choices": [
      "$2165.5504$",
      "$3464.8806$",
      "$4331.1007$",
      "$5197.3209$",
      "$8662.2014$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9118.4 and E[X²]=120356949.333333.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7646.064 and Var(Y)=18758433.482837. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 4331.100724."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9118.4 and E[X²]=120356949.333333."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11120,
      "w": 0.36,
      "a": 0.71,
      "b": 1172,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:5",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "X is uniform on (0,2100). Insurer payment is Y=min(0.75 max(X-420,0),1050). Calculate the standard deviation of Y per loss. Round your answer to four decimal places.",
    "choices": [
      "$389.7435$",
      "$454.6633$",
      "$490.0000$",
      "$626.0990$",
      "$151900.0000$"
    ],
    "answer": 0,
    "solution": [
      "Payment is zero through 420, grows at rate 0.75 until loss 1820, and then stays at the cap.",
      "Integrating the linear region and including the cap mass gives E[Y]=490 and E[Y²]=392000.",
      "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=151900.",
      "Take the square root of the variance to get SD(Y)=389.743505."
    ],
    "feedback": {
      "1": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
      "2": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
      "3": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities.",
      "4": "Find the variance of the actual capped payment, then take its square root; raw loss SD and square-root second moment are different quantities."
    },
    "skills": [
      "piecewise moments",
      "cap mass",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: piecewise moments, cap mass, standard deviation.",
      "Payment is zero through 420, grows at rate 0.75 until loss 1820, and then stays at the cap."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 2100,
      "d": 420.0,
      "share": 0.75,
      "cap": 1050.0,
      "inflation": 1,
      "target": "sd"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:24",
    "topicId": "urv-f2-standard-deviation",
    "family": "uniform-payment-sd",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "Positive loss X has mean 50 and standard deviation 25. Adjusted cost is Y=1.2X+b. If Y has coefficient of variation 0.25 and positive mean, calculate b. Round your answer to four decimal places.",
    "choices": [
      "$50.0000$",
      "$60.0000$",
      "$70.2270$",
      "$80.4540$",
      "$120.0000$"
    ],
    "answer": 1,
    "solution": [
      "Linear scaling gives SD(Y)=1.2(25)=30; a constant adds no variance.",
      "CV(Y)=SD(Y)/E[Y] implies E[Y]=30/0.25=120.",
      "Solve 1.2(50)+b=120, giving b=60."
    ],
    "feedback": {
      "0": "Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance.",
      "2": "Recheck the setup and the requested quantity before evaluating the formula.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
      "4": "Scale SD linearly, then solve the CV ratio for the shifted mean. A shift changes CV even though it does not change variance."
    },
    "skills": [
      "SD scaling",
      "CV",
      "inverse affine parameter"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: SD scaling, CV, inverse affine parameter.",
      "Linear scaling gives SD(Y)=1.2(25)=30; a constant adds no variance."
    ],
    "verification": {
      "kind": "affine-cv",
      "mean": 50,
      "sd": 25,
      "a": 1.2,
      "targetCV": 0.25
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:25",
    "topicId": "urv-f3-coefficient-variation",
    "family": "affine-cv-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2x/16 on (0,4). A benefit is Y=2X²+4. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$3.5556$",
      "$42.6667$",
      "$85.3333$",
      "$101.3333$",
      "$341.3333$"
    ],
    "answer": 2,
    "solution": [
      "Variance ignores the additive constant, so Var(Y)=4Var(X²).",
      "Integrating the density gives E[X²]=8 and E[X⁴]=85.333333.",
      "Var(Y)=4(E[X⁴]-(E[X²])²)=85.333333."
    ],
    "feedback": {
      "0": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
      "1": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
      "3": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift.",
      "4": "The variance of X² requires the fourth raw moment of X, not merely Var(X). Square the multiplier and omit the shift."
    },
    "skills": [
      "transformed moments",
      "fourth moment",
      "variance scaling"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: transformed moments, fourth moment, variance scaling.",
      "Variance ignores the additive constant, so Var(Y)=4Var(X²)."
    ],
    "verification": {
      "kind": "power-transform",
      "L": 4,
      "power": 1,
      "a": 2,
      "b": 4,
      "target": "variance-square"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:26",
    "topicId": "urv-f1-variance",
    "family": "quadratic-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.7 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1600). The insurer pays the positive excess over a deductible of 400. Calculate the annual payment standard deviation per policy. Round your answer to four decimal places.",
    "choices": [
      "$135.0000$",
      "$217.3707$",
      "$299.6248$",
      "$396.8627$",
      "$89775.0000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.3: E[Y]=135, E[Y²]=108000.",
      "The per-policy variance is 108000-(135)²=89775.",
      "The square root of the per-policy variance is 299.624765."
    ],
    "feedback": {
      "0": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "1": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "3": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "4": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation."
    },
    "skills": [
      "occurrence/severity mixture",
      "payment variance",
      "SD"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: occurrence/severity mixture, payment variance, SD.",
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000."
    ],
    "verification": {
      "kind": "policy-mixture",
      "p": 0.30000000000000004,
      "B": 1600,
      "d": 400.0,
      "target": "payment-sd"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:27",
    "topicId": "urv-f2-standard-deviation",
    "family": "mixture-payment-sd",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "X is uniform on (0,2100). Insurer payment is Y=min(0.75 max(X-420,0),1050). Calculate the coefficient of variation of Y per loss. Round your answer to four decimal places.",
    "choices": [
      "$0.3712$",
      "$0.5774$",
      "$0.7954$",
      "$1.2572$",
      "$310.0000$"
    ],
    "answer": 2,
    "solution": [
      "Payment is zero through 420, grows at rate 0.75 until loss 1820, and then stays at the cap.",
      "Integrating the linear region and including the cap mass gives E[Y]=490 and E[Y²]=392000.",
      "The cap has probability 0.133333; it must contribute to both moments. Var(Y)=151900.",
      "CV(Y)=SD(Y)/E[Y]=389.743505/490=0.795395."
    ],
    "feedback": {
      "0": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
      "1": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
      "3": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule.",
      "4": "Use payment SD and payment mean, including the cap and zero-payment mass. The original uniform loss CV does not carry through a nonlinear payment rule."
    },
    "skills": [
      "transformed moments",
      "SD",
      "relative variability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: transformed moments, SD, relative variability.",
      "Payment is zero through 420, grows at rate 0.75 until loss 1820, and then stays at the cap."
    ],
    "verification": {
      "kind": "uniform-payment",
      "B": 2100,
      "d": 420.0,
      "share": 0.75,
      "cap": 1050.0,
      "inflation": 1,
      "target": "cv"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:28",
    "topicId": "urv-f3-coefficient-variation",
    "family": "uniform-payment-cv",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "A randomly selected loss belongs to class A with probability 0.25 and to class B otherwise. Conditional loss means are 100 and 380, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
    "choices": [
      "$70.0000$",
      "$141.0674$",
      "$5200.0000$",
      "$14700.0000$",
      "$19900.0000$"
    ],
    "answer": 4,
    "solution": [
      "The mean is 0.25(100)+0.75(380)=310.",
      "The mean conditional variance is 5200. The variance of the class means is 0.25(0.75)(100-380)²=14700.",
      "Total variance is the sum 5200+14700=19900."
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
      "The mean is 0.25(100)+0.75(380)=310."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.25,
      "means": [
        100,
        380
      ],
      "sds": [
        40,
        80
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:29",
    "topicId": "urv-f1-variance",
    "family": "two-class-loss-variance",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A loss belongs to class A with probability 0.4 and otherwise to class B. Conditional means are 180 and 420, and conditional SDs are 40 and 80, respectively. Calculate the unconditional loss standard deviation. Round your answer to four decimal places.",
    "choices": [
      "$64.0000$",
      "$66.9328$",
      "$117.5755$",
      "$135.2923$",
      "$18304.0000$"
    ],
    "answer": 3,
    "solution": [
      "The unconditional mean is 324. Total variance combines mean within-class variance 4480 and variance of class means 13824.",
      "Thus Var(X)=18304 and SD(X)=135.292276.",
      "The requested standard deviation is 135.292276."
    ],
    "feedback": {
      "0": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "1": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "2": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "4": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV."
    },
    "skills": [
      "total variance",
      "mixture mean",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: total variance, mixture mean, standard deviation.",
      "The unconditional mean is 324. Total variance combines mean within-class variance 4480 and variance of class means 13824."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.4,
      "means": [
        180,
        420
      ],
      "sds": [
        40,
        80
      ],
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:30",
    "topicId": "urv-f2-standard-deviation",
    "family": "loss-mixture-sd",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss belongs to class A with probability 0.3 and otherwise to class B. Conditional means are 180 and 300, and conditional SDs are 40 and 80, respectively. Calculate the unconditional loss coefficient of variation. Round your answer to four decimal places.",
    "choices": [
      "$0.2083$",
      "$0.2668$",
      "$0.3385$",
      "$2.9546$",
      "$30.2424$"
    ],
    "answer": 2,
    "solution": [
      "The unconditional mean is 264. Total variance combines mean within-class variance 4960 and variance of class means 3024.",
      "Thus Var(X)=7984 and SD(X)=89.353232.",
      "The requested coefficient of variation is 0.338459 after dividing SD by the unconditional mean."
    ],
    "feedback": {
      "0": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "1": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "3": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV.",
      "4": "Include both within-class and between-class variance, take its square root, and use the unconditional mean when calculating CV."
    },
    "skills": [
      "total variance",
      "mixture mean",
      "coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: total variance, mixture mean, coefficient of variation.",
      "The unconditional mean is 264. Total variance combines mean within-class variance 4960 and variance of class means 3024."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.3,
      "means": [
        180,
        300
      ],
      "sds": [
        40,
        80
      ],
      "target": "cv",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:31",
    "topicId": "urv-f3-coefficient-variation",
    "family": "loss-mixture-cv",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is uniform on (0,11130) for class 1 and uniform on (0,22260) for class 2. The probability of class 1 is 0.365. The total cost is Y=1173+0.715X. Calculate the coefficient of variation of Y. Round your answer to four decimal places.",
    "choices": [
      "$0.2838$",
      "$0.4541$",
      "$0.5677$",
      "$0.6812$",
      "$1.1353$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9098.775 and E[X²]=119954131.5.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7678.624125 and Var(Y)=19000405.620305. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 0.567673."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9098.775 and E[X²]=119954131.5."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11130,
      "w": 0.365,
      "a": 0.715,
      "b": 1173,
      "target": "cv",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:6",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "A loss X is uniform on (0,11140) for class 1 and uniform on (0,22280) for class 2. The probability of class 1 is 0.37. The total cost is Y=1174+0.72X. Calculate the variance of Y. Round your answer to four decimal places.",
    "choices": [
      "$9621302.9964$",
      "$15394084.7943$",
      "$19242605.9929$",
      "$23091127.1915$",
      "$38485211.9858$"
    ],
    "answer": 2,
    "solution": [
      "Weight the class-specific raw moments, giving E[X]=9079.1 and E[X²]=119549281.333333.",
      "Calculate Var(X)=E[X²]-E[X]². The constant addition changes the mean but not variance.",
      "E[Y]=7710.952 and Var(Y)=19242605.992896. Take its square root for SD; divide that SD by E[Y] for CV. The requested value is 19242605.992896."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "mixture moments",
      "affine mean and variance",
      "SD and coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixture moments, affine mean and variance, SD and coefficient of variation.",
      "Weight the class-specific raw moments, giving E[X]=9079.1 and E[X²]=119549281.333333."
    ],
    "verification": {
      "kind": "section-variability",
      "B": 11140,
      "w": 0.37,
      "a": 0.72,
      "b": 1174,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:7",
    "topicId": "urv-f1-variance",
    "family": "cumulative-univariate-random-variables-f",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f1-variance",
      "urv-f2-standard-deviation",
      "urv-f3-coefficient-variation"
    ],
    "cumulative": true
  },
  {
    "question": "X has density 2(16-x)/256 for 0<x<16, and zero otherwise. Given X>4.8, calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$2.6399$",
      "$6.9689$",
      "$10.4533$",
      "$14.2222$",
      "$20.9067$"
    ],
    "answer": 1,
    "solution": [
      "The condition probability is ((16-4.8)/16)². Divide the original density by this probability on (4.8,16).",
      "For Z=X-4.8, the conditional density is 2(11.2-z)/(11.2)² on (0,11.2). Its first two moments are 3.733333 and 20.906667.",
      "The shift contributes no variance, so Var(X given X>4.8)=(11.2)²/18=6.968889. The conditional mean is 8.533333."
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
      "The condition probability is ((16-4.8)/16)². Divide the original density by this probability on (4.8,16)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 16,
      "lower": 4.8,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:32",
    "topicId": "urv-f1-variance",
    "family": "triangular-conditional-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 6 and 6 and correlation 0.45. Calculate the standard deviation of 2X-3Y. Round your answer to four decimal places.",
    "choices": [
      "$6.0000$",
      "$16.5409$",
      "$21.6333$",
      "$25.7371$",
      "$273.6000$"
    ],
    "answer": 1,
    "solution": [
      "First Cov(X,Y)=0.45×6×6=16.2.",
      "Then Var(2X-3Y)=4×6²+9×6²-12×16.2=273.6.",
      "Take the square root to get the SD 16.540859."
    ],
    "feedback": {
      "0": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
      "2": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
      "3": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance.",
      "4": "Convert correlation to covariance, preserve coefficient signs in the cross term, and take the square root of the resulting variance."
    },
    "skills": [
      "correlation to covariance",
      "linear variance",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, linear variance, standard deviation.",
      "First Cov(X,Y)=0.45×6×6=16.2."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 6,
      "sy": 6,
      "rho": 0.45,
      "a": 2,
      "b": -3,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:33",
    "topicId": "urv-f2-standard-deviation",
    "family": "correlated-linear-sd",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "A loss X is zero with probability 0.1. Conditional on a positive loss, its CDF is (x/5)^2 on (0,5). Calculate the coefficient of variation of X, including zero losses. Round your answer to four decimal places.",
    "choices": [
      "$0.1667$",
      "$0.3536$",
      "$0.5000$",
      "$0.7500$",
      "$2.0000$"
    ],
    "answer": 2,
    "solution": [
      "Include the positive-loss probability in both raw moments: E[X]=3 and E[X²]=11.25.",
      "Then SD(X)=√(E[X²]-(E[X])²)=1.5.",
      "CV(X)=SD(X)/E[X]=0.5."
    ],
    "feedback": {
      "0": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
      "1": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
      "3": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean.",
      "4": "Include the zero-loss mass in both moments, take the square root to get SD, then divide by the unconditional mean."
    },
    "skills": [
      "mixed raw moments",
      "standard deviation",
      "coefficient of variation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: mixed raw moments, standard deviation, coefficient of variation.",
      "Include the positive-loss probability in both raw moments: E[X]=3 and E[X²]=11.25."
    ],
    "verification": {
      "kind": "mixed-power",
      "p": 0.1,
      "B": 5,
      "power": 2,
      "target": "cv",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:34",
    "topicId": "urv-f3-coefficient-variation",
    "family": "mixed-power-cv",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.85 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1200). The insurer pays the positive excess over a deductible of 300. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
    "choices": [
      "$166.7696$",
      "$13289.0625$",
      "$27812.1094$",
      "$30375.0000$",
      "$88593.7500$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.15: E[Y]=50.625, E[Y²]=30375.",
      "The per-policy variance is 30375-(50.625)²=27812.109375."
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
      "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500."
    ],
    "verification": {
      "kind": "policy-mixture",
      "p": 0.15,
      "B": 1200,
      "d": 300.0,
      "target": "payment-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:35",
    "topicId": "urv-f1-variance",
    "family": "mixture-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2(16-x)/256 on (0,16), and zero elsewhere. Given X>4.8, calculate its conditional standard deviation. Round your answer to four decimal places.",
    "choices": [
      "$2.6399$",
      "$3.2332$",
      "$3.7712$",
      "$4.5724$",
      "$6.9689$"
    ],
    "answer": 0,
    "solution": [
      "Normalize the density on (4.8,16). After subtracting 4.8, the conditional variable is decreasing triangular on (0,11.2).",
      "Its conditional variance is (11.2)²/18=6.968889.",
      "Take the square root: SD(X given X>4.8)=2.639865."
    ],
    "feedback": {
      "1": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
      "2": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
      "3": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities.",
      "4": "Use the variance of the conditional triangular density, then take its square root; the conditional mean and uniform SD are different quantities."
    },
    "skills": [
      "conditional density",
      "conditional variance",
      "standard deviation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional density, conditional variance, standard deviation.",
      "Normalize the density on (4.8,16). After subtracting 4.8, the conditional variable is decreasing triangular on (0,11.2)."
    ],
    "verification": {
      "kind": "triangular-variance",
      "B": 16,
      "lower": 4.8,
      "target": "sd",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:36",
    "topicId": "urv-f2-standard-deviation",
    "family": "triangular-conditional-sd",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  },
  {
    "question": "A gamma loss has mean 30 and squared coefficient of variation 1/6. Calculate its variance. Round your answer to four decimal places.",
    "choices": [
      "$12.2474$",
      "$25.0000$",
      "$30.0000$",
      "$150.0000$",
      "$900.0000$"
    ],
    "answer": 3,
    "solution": [
      "For a gamma loss, CV²=1/α, so the shape is recovered directly from the squared CV.",
      "The mean αθ=30 gives α=6 and θ=5.",
      "Var(X)=αθ²=6×5²=150. Equivalently, Var(X)=CV²(E[X])²."
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
      "shape": 6,
      "scale": 5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:37",
    "topicId": "urv-f3-coefficient-variation",
    "family": "gamma-cv-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-f3-coefficient-variation"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.75 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1200). The insurer pays the positive excess over a deductible of 300. Calculate the annual payment variance per policy. Round your answer to four decimal places.",
    "choices": [
      "$208.5806$",
      "$22148.4375$",
      "$43505.8594$",
      "$50625.0000$",
      "$88593.7500$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.25: E[Y]=84.375, E[Y²]=50625.",
      "The per-policy variance is 50625-(84.375)²=43505.859375."
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
      "Conditional on a claim, the deductible payment has first moment (1200-300)²/(2×1200)=337.5 and second moment (1200-300)³/(3×1200)=202500."
    ],
    "verification": {
      "kind": "policy-mixture",
      "p": 0.25,
      "B": 1200,
      "d": 300.0,
      "target": "payment-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:38",
    "topicId": "urv-f1-variance",
    "family": "mixture-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f1-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has no claim with probability 0.85 and exactly one claim otherwise. Conditional claim severity is uniform on (0,1600). The insurer pays the positive excess over a deductible of 400. Calculate the annual payment standard deviation per policy. Round your answer to four decimal places.",
    "choices": [
      "$67.5000$",
      "$153.7043$",
      "$222.3595$",
      "$396.8627$",
      "$49443.7500$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000.",
      "Include no-claim policies by multiplying each raw moment by claim probability 0.15: E[Y]=67.5, E[Y²]=54000.",
      "The per-policy variance is 54000-(67.5)²=49443.75.",
      "The square root of the per-policy variance is 222.359506."
    ],
    "feedback": {
      "0": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "1": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "3": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation.",
      "4": "Include the no-claim mixture before taking the square root. Scaling a conditional SD alone misses between-group variation."
    },
    "skills": [
      "occurrence/severity mixture",
      "payment variance",
      "SD"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: occurrence/severity mixture, payment variance, SD.",
      "Conditional on a claim, the deductible payment has first moment (1600-400)²/(2×1600)=450 and second moment (1600-400)³/(3×1600)=360000."
    ],
    "verification": {
      "kind": "policy-mixture",
      "p": 0.15,
      "B": 1600,
      "d": 400.0,
      "target": "payment-sd"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-f:39",
    "topicId": "urv-f2-standard-deviation",
    "family": "mixture-payment-sd",
    "difficulty": 7,
    "relatedTopicIds": [
      "urv-f2-standard-deviation"
    ],
    "cumulative": false
  }
];

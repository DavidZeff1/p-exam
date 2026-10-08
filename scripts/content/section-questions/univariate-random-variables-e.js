export default [
  {
    "question": "A loss proportion X has density c x^1(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the expected benefit 10200X²+1070X. Round your answer to four decimal places.",
    "choices": [
      "$1797.5000$",
      "$2876.0000$",
      "$3595.0000$",
      "$4314.0000$",
      "$7190.0000$"
    ],
    "answer": 2,
    "solution": [
      "Integrating x^1(1-x) gives 1/(2×3), so c=6 and F(x)=3x^2-2x^3.",
      "Integration gives E[X]=0.5 and E[X²]=0.3; differentiation places the density maximum at 0.5.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 3595."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^1(1-x) gives 1/(2×3), so c=6 and F(x)=3x^2-2x^3."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 2,
      "A": 10200,
      "C": 1070,
      "target": "benefit",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:0",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "A loss proportion X has density c x^2(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the 75th percentile of X. Round your answer to four decimal places.",
    "choices": [
      "$0.2430$",
      "$0.3785$",
      "$0.7570$",
      "$0.8770$",
      "$0.8785$"
    ],
    "answer": 2,
    "solution": [
      "Integrating x^2(1-x) gives 1/(3×4), so c=12 and F(x)=4x^3-3x^4.",
      "Integration gives E[X]=0.6 and E[X²]=0.4; differentiation places the density maximum at 0.666667.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 0.756978."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^2(1-x) gives 1/(3×4), so c=12 and F(x)=4x^3-3x^4."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 3,
      "A": 10210,
      "C": 1071,
      "target": "percentile",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:1",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-0.8). A policy pays 400 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
    "choices": [
      "$-80.0000$",
      "$0.0000$",
      "$99.7316$",
      "$220.2684$",
      "$320.0000$"
    ],
    "answer": 2,
    "solution": [
      "P(N=0)=exp(-λ) identifies λ=0.8.",
      "Payment is 400(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
      "E[Y]=400[λ-1+exp(-λ)]=99.731586."
    ],
    "feedback": {
      "0": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
      "1": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
      "3": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
      "4": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count."
    },
    "skills": [
      "infer a Poisson mean",
      "tail/indicator expectation",
      "aggregate insurance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Poisson mean, tail/indicator expectation, aggregate insurance.",
      "P(N=0)=exp(-λ) identifies λ=0.8."
    ],
    "verification": {
      "kind": "poisson",
      "lam": 0.8,
      "B": 400,
      "target": "excess-payment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:8",
    "topicId": "urv-e1-expected-value",
    "family": "poisson-deductible",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2x/9 on (0,3). A benefit is Y=2X²+4. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$2.0000$",
      "$13.5000$",
      "$27.0000$",
      "$43.0000$",
      "$108.0000$"
    ],
    "answer": 2,
    "solution": [
      "Variance ignores the additive constant, so Var(Y)=4Var(X²).",
      "Integrating the density gives E[X²]=4.5 and E[X⁴]=27.",
      "Var(Y)=4(E[X⁴]-(E[X²])²)=27."
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
      "L": 3,
      "power": 1,
      "a": 2,
      "b": 4,
      "target": "variance-square"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:9",
    "topicId": "urv-e2-moments",
    "family": "quadratic-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "X has density proportional to x^1 on (0,10) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
    "choices": [
      "$4.4721$",
      "$5.2594$",
      "$6.0000$",
      "$7.7460$",
      "$8.9443$"
    ],
    "answer": 0,
    "solution": [
      "Normalize the density: f(x)=2x^1/100, so F(x)=(x/10)^2.",
      "Solve F(q)=u to get q(u)=10u^(1/2).",
      "The requested difference is 10[0.8^(1/2)-0.2^(1/2)]=4.472136."
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
      "Normalize the density: f(x)=2x^1/100, so F(x)=(x/10)^2."
    ],
    "verification": {
      "kind": "power-density",
      "L": 10,
      "power": 1,
      "low": 0.2,
      "high": 0.8,
      "target": "quantile-difference"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:10",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "power-quantile-difference",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "A device lifetime is exponential with mean 4 years. A contract pays benefit B for failure by year 2, pays 0.5B for failure after year 2 but by year 4, and otherwise pays zero. Its expected payment is 600. Calculate B. Round your answer to four decimal places.",
    "choices": [
      "$307.6770$",
      "$949.1860$",
      "$1170.0583$",
      "$1200.0000$",
      "$1524.8964$"
    ],
    "answer": 2,
    "solution": [
      "The two covered interval probabilities are 0.393469 and 0.238651.",
      "E[benefit]=B[0.393469+0.5(0.238651)]=0.512795B.",
      "Solve B=600/0.512795=1170.058325."
    ],
    "feedback": {
      "0": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
      "1": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
      "3": "Weight each time interval by its own benefit fraction before solving for the benefit amount.",
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
      "The two covered interval probabilities are 0.393469 and 0.238651."
    ],
    "verification": {
      "kind": "exponential-benefit",
      "mu": 4,
      "t1": 2,
      "t2": 4,
      "fraction": 0.5,
      "meanPay": 600
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:11",
    "topicId": "urv-e1-expected-value",
    "family": "exponential-benefit",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X,Y have means 12,16 and variances 5,9, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
    "choices": [
      "$101.0000$",
      "$126.0000$",
      "$344.0000$",
      "$361.0000$",
      "$462.0000$"
    ],
    "answer": 4,
    "solution": [
      "Linearity gives E[T]=2(12)-3(16)+5=-19.",
      "Independence gives Var(T)=4(5)+9(9)=101; the constant contributes zero variance.",
      "E[T²]=Var(T)+(E[T])²=101+361=462."
    ],
    "feedback": {
      "0": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
      "1": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
      "2": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
      "3": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance."
    },
    "skills": [
      "linear expectation",
      "independent variance",
      "raw second moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: linear expectation, independent variance, raw second moment.",
      "Linearity gives E[T]=2(12)-3(16)+5=-19."
    ],
    "verification": {
      "kind": "linear-moments",
      "mx": 12,
      "my": 16,
      "vx": 5,
      "vy": 9,
      "a": 2,
      "b": -3,
      "shift": 5,
      "target": "second"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:12",
    "topicId": "urv-e2-moments",
    "family": "linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is normal with mean 140. Its 80th percentile is 156.83242467, rounded to eight decimal places. Calculate P(X>170.0). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
    "choices": [
      "$0.0668$",
      "$0.2000$",
      "$0.2551$",
      "$0.4701$",
      "$0.9332$"
    ],
    "answer": 0,
    "solution": [
      "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=20.",
      "The threshold has z=(170.0-140)/20=1.5.",
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
      "For a normal percentile, q0.80=μ+z0.80σ. The supplied percentile therefore implies σ=20."
    ],
    "verification": {
      "kind": "normal",
      "mu": 140,
      "sd": 20,
      "t": 170.0,
      "target": "tail-from-quantile"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:13",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "normal-quantile-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "The claim count N takes values 0 through 3, with P(N=k)=c(k+1). A contract pays 125 for each claim in excess of the first 1 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
    "choices": [
      "$93.7500$",
      "$125.0000$",
      "$137.5000$",
      "$250.0000$",
      "$29687.5000$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the probabilities: c[1+2+⋯+4]=1, giving c=2/(4×5).",
      "The payment at count k is 125 max(k-1,0). Its possible values are 0, 0, 125, 250.",
      "Weight each payment by c(k+1); the expected payment is 137.5."
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
      "scale": 125,
      "d": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:14",
    "topicId": "urv-e1-expected-value",
    "family": "finite-payment-moments",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "X has CDF F(x)=(x/4)^2 for 0<x<4, with F(x)=0 below the support and 1 above it. A benefit is Y=2X²+9. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$14.3333$",
      "$16.0000$",
      "$23.2222$",
      "$25.0000$",
      "$41.0000$"
    ],
    "answer": 3,
    "solution": [
      "Differentiating the CDF gives density 2x^1/4^2.",
      "The second raw moment is E[X²]=2×4²/(2+2)=8.",
      "Linearity gives E[Y]=2E[X²]+9=25. Squaring the mean would not give E[X²]."
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
      "a": 2,
      "shift": 9,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:15",
    "topicId": "urv-e2-moments",
    "family": "power-transformed-expectation",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A loss proportion X has density c x^3(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the mode of X. Round your answer to four decimal places.",
    "choices": [
      "$0.2500$",
      "$0.3750$",
      "$0.7500$",
      "$0.8700$",
      "$0.8750$"
    ],
    "answer": 2,
    "solution": [
      "Integrating x^3(1-x) gives 1/(4×5), so c=20 and F(x)=5x^4-4x^5.",
      "Integration gives E[X]=0.666667 and E[X²]=0.47619; differentiation places the density maximum at 0.75.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 0.75."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^3(1-x) gives 1/(4×5), so c=20 and F(x)=5x^4-4x^5."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 4,
      "A": 10220,
      "C": 1072,
      "target": "mode",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:2",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "A loss proportion X has density c x^4(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the second raw moment of X. Round your answer to four decimal places.",
    "choices": [
      "$0.2679$",
      "$0.4643$",
      "$0.5357$",
      "$0.6557$",
      "$0.7679$"
    ],
    "answer": 2,
    "solution": [
      "Integrating x^4(1-x) gives 1/(5×6), so c=30 and F(x)=6x^5-5x^6.",
      "Integration gives E[X]=0.714286 and E[X²]=0.535714; differentiation places the density maximum at 0.8.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 0.535714."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^4(1-x) gives 1/(5×6), so c=30 and F(x)=6x^5-5x^6."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 5,
      "A": 10230,
      "C": 1073,
      "target": "second",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:3",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "A damage fraction X follows a beta distribution with both shape parameters greater than 1. Its mean is 4/11, and its mode is 3/9. Calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$0.0193$",
      "$0.1322$",
      "$0.1389$",
      "$0.1515$",
      "$0.2314$"
    ],
    "answer": 0,
    "solution": [
      "Write s=α+β. The mean gives α=(4/11)s, while the mode gives (α-1)/(s-2)=(3/9).",
      "Solving these two equations yields α=4 and β=7.",
      "Beta variance is αβ/[s²(s+1)]=0.019284."
    ],
    "feedback": {
      "1": "This is the squared mean.",
      "2": "This is the standard deviation.",
      "3": "This is the second raw moment.",
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
      "Write s=α+β. The mean gives α=(4/11)s, while the mode gives (α-1)/(s-2)=(3/9)."
    ],
    "verification": {
      "kind": "beta-mode-infer",
      "a": 4,
      "b": 7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:16",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "beta-mode-mean-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "Independent daily inspections detect a defect with probability 0.225. Inspections stop on the first detection or after 7 inspections, whichever occurs first. Calculate the expected number of inspections performed. Round your answer to four decimal places.",
    "choices": [
      "$1.1755$",
      "$2.5227$",
      "$2.6981$",
      "$3.6981$",
      "$4.4444$"
    ],
    "answer": 3,
    "solution": [
      "Let T be the first successful inspection, so the number performed is min(T,h).",
      "Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,7)]=Σ from j=1 to 7 of (1-0.225)^(j-1).",
      "The finite geometric sum is [1-(1-0.225)^7]/0.225=3.698117."
    ],
    "feedback": {
      "0": "This counts only the all-failure outcome and misses earlier stops.",
      "1": "This omits the censored outcome where no detection occurs by the limit.",
      "2": "This counts only inspections after the first one.",
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
      "p": 0.225,
      "horizon": 7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:17",
    "topicId": "urv-e1-expected-value",
    "family": "geometric-capped-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.175+(1-0.175)(x/5)^3 for 0≤x<5, and F(x)=1 for x≥5. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$2.0625$",
      "$3.0938$",
      "$3.7500$",
      "$3.9688$",
      "$12.3750$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.175. It contributes zero to E[X].",
      "On (0,5), the density is (1-0.175)3x^2/5^3.",
      "Integrating x times this density gives (1-0.175)5×3/(3+1)=3.09375."
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
      "B": 5,
      "power": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:18",
    "topicId": "urv-e2-moments",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,2200). The insurer pays Y=0.6max(X-770,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$429.0000$",
      "$528.0000$",
      "$643.5000$",
      "$880.0000$",
      "$990.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.35 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(770+y/0.6)/2200.",
      "Set this to 0.75 and solve y=0.6(0.75×2200-770)=528."
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
      "B": 2200,
      "d": 770.0000000000001,
      "share": 0.6,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:19",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "X has CDF F(x)=(x/5)^2 for 0<x<5, with F(x)=0 below the support and 1 above it. A benefit is Y=2X²+8. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$14.6667$",
      "$25.0000$",
      "$30.2222$",
      "$33.0000$",
      "$58.0000$"
    ],
    "answer": 3,
    "solution": [
      "Differentiating the CDF gives density 2x^1/5^2.",
      "The second raw moment is E[X²]=2×5²/(2+2)=12.5.",
      "Linearity gives E[Y]=2E[X²]+8=33. Squaring the mean would not give E[X²]."
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
      "Differentiating the CDF gives density 2x^1/5^2."
    ],
    "verification": {
      "kind": "power-expectation",
      "B": 5,
      "power": 2,
      "a": 2,
      "shift": 8,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:20",
    "topicId": "urv-e2-moments",
    "family": "power-transformed-expectation",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A randomly selected loss belongs to class A with probability 0.4 and to class B otherwise. Conditional loss means are 140 and 340, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
    "choices": [
      "$64.0000$",
      "$118.6592$",
      "$4480.0000$",
      "$9600.0000$",
      "$14080.0000$"
    ],
    "answer": 4,
    "solution": [
      "The mean is 0.4(140)+0.6(340)=260.",
      "The mean conditional variance is 4480. The variance of the class means is 0.4(0.6)(140-340)²=9600.",
      "Total variance is the sum 4480+9600=14080."
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
      "The mean is 0.4(140)+0.6(340)=260."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.4,
      "means": [
        140,
        340
      ],
      "sds": [
        40,
        80
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:21",
    "topicId": "urv-e2-moments",
    "family": "two-class-loss-variance",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A measurement X is normally distributed. Its 15.8655th percentile is 85 and its 97.7250th percentile is 130. Use standard-normal percentile values -1 and 2, respectively. Calculate P(X>115). Round your answer to four decimal places.",
    "choices": [
      "$0.1587$",
      "$0.3085$",
      "$0.3694$",
      "$0.4734$",
      "$0.8413$"
    ],
    "answer": 0,
    "solution": [
      "The percentile equations are μ-σ=85 and μ+2σ=130. Subtract them to get 3σ=45, so σ=15.",
      "Then μ=100, and the requested threshold standardizes to (115-100)/15=1.",
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
      "The percentile equations are μ-σ=85 and μ+2σ=130. Subtract them to get 3σ=45, so σ=15."
    ],
    "verification": {
      "kind": "normal-two-quantiles",
      "mu": 100,
      "sd": 15,
      "lower": 85,
      "upper": 130,
      "threshold": 115,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:22",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "normal-two-quantiles",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-1). A policy pays 500 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$183.9397$",
      "$215.2365$",
      "$316.0603$",
      "$500.0000$"
    ],
    "answer": 1,
    "solution": [
      "P(N=0)=exp(-λ) identifies λ=1.",
      "Payment is 500(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
      "E[Y]=500[λ-1+exp(-λ)]=183.939721."
    ],
    "feedback": {
      "0": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
      "2": "Recheck the setup and the requested quantity before evaluating the formula.",
      "3": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
      "4": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count."
    },
    "skills": [
      "infer a Poisson mean",
      "tail/indicator expectation",
      "aggregate insurance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Poisson mean, tail/indicator expectation, aggregate insurance.",
      "P(N=0)=exp(-λ) identifies λ=1."
    ],
    "verification": {
      "kind": "poisson",
      "lam": 1.0,
      "B": 500,
      "target": "excess-payment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:23",
    "topicId": "urv-e1-expected-value",
    "family": "poisson-deductible",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "A loss proportion X has density c x^5(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the expected benefit 10240X²+1074X. Round your answer to four decimal places.",
    "choices": [
      "$3389.4167$",
      "$5423.0667$",
      "$6778.8333$",
      "$8134.6000$",
      "$13557.6667$"
    ],
    "answer": 2,
    "solution": [
      "Integrating x^5(1-x) gives 1/(6×7), so c=42 and F(x)=7x^6-6x^7.",
      "Integration gives E[X]=0.75 and E[X²]=0.583333; differentiation places the density maximum at 0.833333.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 6778.833333."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^5(1-x) gives 1/(6×7), so c=42 and F(x)=7x^6-6x^7."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 6,
      "A": 10240,
      "C": 1074,
      "target": "benefit",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:4",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "A loss proportion X has density c x^1(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the 75th percentile of X. Round your answer to four decimal places.",
    "choices": [
      "$0.3264$",
      "$0.3368$",
      "$0.6736$",
      "$0.7936$",
      "$0.8368$"
    ],
    "answer": 2,
    "solution": [
      "Integrating x^1(1-x) gives 1/(2×3), so c=6 and F(x)=3x^2-2x^3.",
      "Integration gives E[X]=0.5 and E[X²]=0.3; differentiation places the density maximum at 0.5.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 0.673648."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^1(1-x) gives 1/(2×3), so c=6 and F(x)=3x^2-2x^3."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 2,
      "A": 10250,
      "C": 1075,
      "target": "percentile",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:5",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "X has density 2x/9 on (0,3). A benefit is Y=1X²+2. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.5000$",
      "$6.7500$",
      "$7.9245$",
      "$10.7500$",
      "$27.0000$"
    ],
    "answer": 1,
    "solution": [
      "Variance ignores the additive constant, so Var(Y)=1Var(X²).",
      "Integrating the density gives E[X²]=4.5 and E[X⁴]=27.",
      "Var(Y)=1(E[X⁴]-(E[X²])²)=6.75."
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
      "L": 3,
      "power": 1,
      "a": 1,
      "b": 2,
      "target": "variance-square"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:24",
    "topicId": "urv-e2-moments",
    "family": "quadratic-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "X has density proportional to x^1 on (0,8) and zero elsewhere. Calculate the difference between its 80th and 20th percentiles. Round your answer to four decimal places.",
    "choices": [
      "$3.5777$",
      "$4.2129$",
      "$4.8000$",
      "$6.1968$",
      "$7.1554$"
    ],
    "answer": 0,
    "solution": [
      "Normalize the density: f(x)=2x^1/64, so F(x)=(x/8)^2.",
      "Solve F(q)=u to get q(u)=8u^(1/2).",
      "The requested difference is 8[0.8^(1/2)-0.2^(1/2)]=3.577709."
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
      "Normalize the density: f(x)=2x^1/64, so F(x)=(x/8)^2."
    ],
    "verification": {
      "kind": "power-density",
      "L": 8,
      "power": 1,
      "low": 0.2,
      "high": 0.8,
      "target": "quantile-difference"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:25",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "power-quantile-difference",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "A device lifetime is exponential with mean 3 years. A contract pays benefit B for failure by year 1, pays 0.5B for failure after year 1 but by year 3, and otherwise pays zero. Its expected payment is 500. Calculate B. Round your answer to four decimal places.",
    "choices": [
      "$228.8973$",
      "$790.9884$",
      "$1000.0000$",
      "$1092.1928$",
      "$1763.8632$"
    ],
    "answer": 3,
    "solution": [
      "The two covered interval probabilities are 0.283469 and 0.348652.",
      "E[benefit]=B[0.283469+0.5(0.348652)]=0.457795B.",
      "Solve B=500/0.457795=1092.192817."
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
      "The two covered interval probabilities are 0.283469 and 0.348652."
    ],
    "verification": {
      "kind": "exponential-benefit",
      "mu": 3,
      "t1": 1,
      "t2": 3,
      "fraction": 0.5,
      "meanPay": 500
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:26",
    "topicId": "urv-e1-expected-value",
    "family": "exponential-benefit",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X,Y have means 11,17 and variances 5,9, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
    "choices": [
      "$101.0000$",
      "$126.0000$",
      "$559.0000$",
      "$576.0000$",
      "$677.0000$"
    ],
    "answer": 4,
    "solution": [
      "Linearity gives E[T]=2(11)-3(17)+5=-24.",
      "Independence gives Var(T)=4(5)+9(9)=101; the constant contributes zero variance.",
      "E[T²]=Var(T)+(E[T])²=101+576=677."
    ],
    "feedback": {
      "0": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
      "1": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
      "2": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance.",
      "3": "The second raw moment includes both variance and squared mean; use squared coefficients only for variance."
    },
    "skills": [
      "linear expectation",
      "independent variance",
      "raw second moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: linear expectation, independent variance, raw second moment.",
      "Linearity gives E[T]=2(11)-3(17)+5=-24."
    ],
    "verification": {
      "kind": "linear-moments",
      "mx": 11,
      "my": 17,
      "vx": 5,
      "vy": 9,
      "a": 2,
      "b": -3,
      "shift": 5,
      "target": "second"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:27",
    "topicId": "urv-e2-moments",
    "family": "linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is normal with mean 120. Its 80th percentile is 128.41621234, rounded to eight decimal places. Calculate P(X>135.0). You may use Φ(0.8416212335729143)=0.80. Round your answer to four decimal places.",
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
      "The threshold has z=(135.0-120)/10=1.5.",
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
      "mu": 120,
      "sd": 10,
      "t": 135.0,
      "target": "tail-from-quantile"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:28",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "normal-quantile-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "The claim count N takes values 0 through 6, with P(N=k)=c(k+1). A contract pays 75 for each claim in excess of the first 1 claims. Calculate expected payment per contract. Round your answer to four decimal places.",
    "choices": [
      "$160.7143$",
      "$225.0000$",
      "$227.6786$",
      "$300.0000$",
      "$67299.1071$"
    ],
    "answer": 2,
    "solution": [
      "Normalize the probabilities: c[1+2+⋯+7]=1, giving c=2/(7×8).",
      "The payment at count k is 75 max(k-1,0). Its possible values are 0, 0, 75, 150, 225, 300, 375.",
      "Weight each payment by c(k+1); the expected payment is 227.678571."
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
      "scale": 75,
      "d": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:29",
    "topicId": "urv-e1-expected-value",
    "family": "finite-payment-moments",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "X has CDF F(x)=(x/7)^2 for 0<x<7, with F(x)=0 below the support and 1 above it. A benefit is Y=2X²+6. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$15.3333$",
      "$49.0000$",
      "$49.5556$",
      "$55.0000$",
      "$104.0000$"
    ],
    "answer": 3,
    "solution": [
      "Differentiating the CDF gives density 2x^1/7^2.",
      "The second raw moment is E[X²]=2×7²/(2+2)=24.5.",
      "Linearity gives E[Y]=2E[X²]+6=55. Squaring the mean would not give E[X²]."
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
      "Differentiating the CDF gives density 2x^1/7^2."
    ],
    "verification": {
      "kind": "power-expectation",
      "B": 7,
      "power": 2,
      "a": 2,
      "shift": 6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:30",
    "topicId": "urv-e2-moments",
    "family": "power-transformed-expectation",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A damage fraction X follows a beta distribution with both shape parameters greater than 1. Its mean is 3/10, and its mode is 2/8. Calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$0.0191$",
      "$0.0900$",
      "$0.1091$",
      "$0.1382$",
      "$0.2100$"
    ],
    "answer": 0,
    "solution": [
      "Write s=α+β. The mean gives α=(3/10)s, while the mode gives (α-1)/(s-2)=(2/8).",
      "Solving these two equations yields α=3 and β=7.",
      "Beta variance is αβ/[s²(s+1)]=0.019091."
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
      "Write s=α+β. The mean gives α=(3/10)s, while the mode gives (α-1)/(s-2)=(2/8)."
    ],
    "verification": {
      "kind": "beta-mode-infer",
      "a": 3,
      "b": 7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:31",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "beta-mode-mean-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "A loss proportion X has density c x^2(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the mode of X. Round your answer to four decimal places.",
    "choices": [
      "$0.3333$",
      "$0.5467$",
      "$0.6667$",
      "$0.7867$",
      "$0.8333$"
    ],
    "answer": 2,
    "solution": [
      "Integrating x^2(1-x) gives 1/(3×4), so c=12 and F(x)=4x^3-3x^4.",
      "Integration gives E[X]=0.6 and E[X²]=0.4; differentiation places the density maximum at 0.666667.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 0.666667."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^2(1-x) gives 1/(3×4), so c=12 and F(x)=4x^3-3x^4."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 3,
      "A": 10260,
      "C": 1076,
      "target": "mode",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:6",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "A loss proportion X has density c x^3(1-x) on (0,1), and zero elsewhere. The normalizing constant c is unknown. Calculate the second raw moment of X. Round your answer to four decimal places.",
    "choices": [
      "$0.2381$",
      "$0.4762$",
      "$0.5238$",
      "$0.5962$",
      "$0.7381$"
    ],
    "answer": 1,
    "solution": [
      "Integrating x^3(1-x) gives 1/(4×5), so c=20 and F(x)=5x^4-4x^5.",
      "Integration gives E[X]=0.666667 and E[X²]=0.47619; differentiation places the density maximum at 0.75.",
      "For a percentile, solve F(x)=0.75; for the benefit, apply linearity to the two raw moments. The requested result is 0.47619."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "normalize a density",
      "moments and transformed expectation",
      "mode and percentile"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: normalize a density, moments and transformed expectation, mode and percentile.",
      "Integrating x^3(1-x) gives 1/(4×5), so c=20 and F(x)=5x^4-4x^5."
    ],
    "verification": {
      "kind": "section-moments",
      "k": 4,
      "A": 10270,
      "C": 1077,
      "target": "second",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:7",
    "topicId": "urv-e1-expected-value",
    "family": "cumulative-univariate-random-variables-e",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value",
      "urv-e2-moments",
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": true
  },
  {
    "question": "Independent daily inspections detect a defect with probability 0.25. Inspections stop on the first detection or after 7 inspections, whichever occurs first. Calculate the expected number of inspections performed. Round your answer to four decimal places.",
    "choices": [
      "$0.9344$",
      "$2.4661$",
      "$2.5317$",
      "$3.4661$",
      "$4.0000$"
    ],
    "answer": 3,
    "solution": [
      "Let T be the first successful inspection, so the number performed is min(T,h).",
      "Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,7)]=Σ from j=1 to 7 of (1-0.25)^(j-1).",
      "The finite geometric sum is [1-(1-0.25)^7]/0.25=3.466064."
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
      "p": 0.25,
      "horizon": 7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:32",
    "topicId": "urv-e1-expected-value",
    "family": "geometric-capped-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "A nonnegative loss X has CDF F(x)=0 for x<0, F(x)=0.125+(1-0.125)(x/4)^2 for 0≤x<4, and F(x)=1 for x≥4. Calculate E[X]. Round your answer to four decimal places.",
    "choices": [
      "$1.7500$",
      "$2.3333$",
      "$2.6667$",
      "$2.8333$",
      "$7.0000$"
    ],
    "answer": 1,
    "solution": [
      "The jump at zero is 0.125. It contributes zero to E[X].",
      "On (0,4), the density is (1-0.125)2x^1/4^2.",
      "Integrating x times this density gives (1-0.125)4×2/(2+1)=2.333333."
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
      "power": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:33",
    "topicId": "urv-e2-moments",
    "family": "mixed-cdf-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Loss X is uniform on (0,1600). The insurer pays Y=0.65max(X-320,0), with no limit. Calculate the 75th percentile of payment per loss, including zero payments. Round your answer to four decimal places.",
    "choices": [
      "$416.0000$",
      "$572.0000$",
      "$624.0000$",
      "$780.0000$",
      "$880.0000$"
    ],
    "answer": 1,
    "solution": [
      "Payment has mass 0.2 at zero. Since this is below 0.75, the requested percentile is positive.",
      "For positive y, P(Y≤y)=(320+y/0.65)/1600.",
      "Set this to 0.75 and solve y=0.65(0.75×1600-320)=572."
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
      "share": 0.65,
      "u": 0.75,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:34",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "uniform-payment-quantile",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "X has CDF F(x)=(x/8)^2 for 0<x<8, with F(x)=0 below the support and 1 above it. A benefit is Y=2X²+5. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$15.6667$",
      "$61.8889$",
      "$64.0000$",
      "$69.0000$",
      "$133.0000$"
    ],
    "answer": 3,
    "solution": [
      "Differentiating the CDF gives density 2x^1/8^2.",
      "The second raw moment is E[X²]=2×8²/(2+2)=32.",
      "Linearity gives E[Y]=2E[X²]+5=69. Squaring the mean would not give E[X²]."
    ],
    "feedback": {
      "0": "This treats the squared transformation as linear in X.",
      "1": "This replaces E[X²] by (E[X])².",
      "2": "This omits the additive benefit.",
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
      "Differentiating the CDF gives density 2x^1/8^2."
    ],
    "verification": {
      "kind": "power-expectation",
      "B": 8,
      "power": 2,
      "a": 2,
      "shift": 5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:35",
    "topicId": "urv-e2-moments",
    "family": "power-transformed-expectation",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A randomly selected loss belongs to class A with probability 0.4 and to class B otherwise. Conditional loss means are 120 and 300, and conditional standard deviations are 40 and 80, respectively. Calculate the unconditional loss variance. Round your answer to four decimal places.",
    "choices": [
      "$64.0000$",
      "$110.7068$",
      "$4480.0000$",
      "$7776.0000$",
      "$12256.0000$"
    ],
    "answer": 4,
    "solution": [
      "The mean is 0.4(120)+0.6(300)=228.",
      "The mean conditional variance is 4480. The variance of the class means is 0.4(0.6)(120-300)²=7776.",
      "Total variance is the sum 4480+7776=12256."
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
      "The mean is 0.4(120)+0.6(300)=228."
    ],
    "verification": {
      "kind": "loss-mixture-variance",
      "w": 0.4,
      "means": [
        120,
        300
      ],
      "sds": [
        40,
        80
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:36",
    "topicId": "urv-e2-moments",
    "family": "two-class-loss-variance",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A measurement X is normally distributed. Its 15.8655th percentile is 105 and its 97.7250th percentile is 180. Use standard-normal percentile values -1 and 2, respectively. Calculate P(X>155). Round your answer to four decimal places.",
    "choices": [
      "$0.1587$",
      "$0.3085$",
      "$0.3694$",
      "$0.4840$",
      "$0.8413$"
    ],
    "answer": 0,
    "solution": [
      "The percentile equations are μ-σ=105 and μ+2σ=180. Subtract them to get 3σ=75, so σ=25.",
      "Then μ=130, and the requested threshold standardizes to (155-130)/25=1.",
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
      "The percentile equations are μ-σ=105 and μ+2σ=180. Subtract them to get 3σ=75, so σ=25."
    ],
    "verification": {
      "kind": "normal-two-quantiles",
      "mu": 130,
      "sd": 25,
      "lower": 105,
      "upper": 180,
      "threshold": 155,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:37",
    "topicId": "urv-e3-mode-median-percentiles",
    "family": "normal-two-quantiles",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-e3-mode-median-percentiles"
    ],
    "cumulative": false
  },
  {
    "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-1.4). A policy pays 500 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
    "choices": [
      "$200.0000$",
      "$323.2985$",
      "$376.7015$",
      "$378.2862$",
      "$700.0000$"
    ],
    "answer": 1,
    "solution": [
      "P(N=0)=exp(-λ) identifies λ=1.4.",
      "Payment is 500(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
      "E[Y]=500[λ-1+exp(-λ)]=323.298482."
    ],
    "feedback": {
      "0": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
      "2": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
      "4": "A positive-part payment must be averaged over count outcomes, including zero; it is not the positive part of the expected count."
    },
    "skills": [
      "infer a Poisson mean",
      "tail/indicator expectation",
      "aggregate insurance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Poisson mean, tail/indicator expectation, aggregate insurance.",
      "P(N=0)=exp(-λ) identifies λ=1.4."
    ],
    "verification": {
      "kind": "poisson",
      "lam": 1.4000000000000001,
      "B": 500,
      "target": "excess-payment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:38",
    "topicId": "urv-e1-expected-value",
    "family": "poisson-deductible",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e1-expected-value"
    ],
    "cumulative": false
  },
  {
    "question": "X has density 2x/9 on (0,3). A benefit is Y=2X²+3. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$2.0000$",
      "$13.5000$",
      "$27.0000$",
      "$36.0000$",
      "$108.0000$"
    ],
    "answer": 2,
    "solution": [
      "Variance ignores the additive constant, so Var(Y)=4Var(X²).",
      "Integrating the density gives E[X²]=4.5 and E[X⁴]=27.",
      "Var(Y)=4(E[X⁴]-(E[X²])²)=27."
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
      "L": 3,
      "power": 1,
      "a": 2,
      "b": 3,
      "target": "variance-square"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-e:39",
    "topicId": "urv-e2-moments",
    "family": "quadratic-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-e2-moments"
    ],
    "cumulative": false
  }
];

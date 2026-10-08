export default [
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.21, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.52 in H or 1.72 in L. Calculate Corr(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$0.0700$",
      "$0.1120$",
      "$0.1400$",
      "$0.1680$",
      "$0.2799$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.468; Var(X)=Var(Y)=1.706896. E[XY]-E[X]E[Y]=0.238896.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 0.139959."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.21000000000000002,
      "rates": [
        0.52,
        1.72
      ],
      "target": "correlation",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:0",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.215, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.53 in H or 1.73 in L. Calculate Var(2X-Y). Round your answer to four decimal places.",
    "choices": [
      "$3.8015$",
      "$6.0824$",
      "$7.6030$",
      "$9.1236$",
      "$15.2061$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.472; Var(X)=Var(Y)=1.715036. E[XY]-E[X]E[Y]=0.243036.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 7.603036."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.21500000000000002,
      "rates": [
        0.53,
        1.73
      ],
      "target": "linear-variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:1",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "X and Y have joint PMF p(x,y)=k(x+2y+5) for x,y in {0,1,2}. Calculate their correlation coefficient. Round your answer to four decimal places.",
    "choices": [
      "$-0.0330$",
      "$-0.0214$",
      "$-0.0139$",
      "$0.0000$",
      "$0.0214$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the nine weights: k=1/72. Joint summation gives E[X]=1.083333, E[Y]=1.166667, E[XY]=1.25.",
      "The marginal variances are 0.659722 and 0.638889, and covariance is E[XY]-E[X]E[Y]=-0.013889.",
      "Correlation is covariance divided by √(Var(X)Var(Y)), giving -0.021393."
    ],
    "feedback": {
      "0": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "2": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "3": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "4": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support."
    },
    "skills": [
      "joint mixed moment",
      "marginal variances",
      "correlation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint mixed moment, marginal variances, correlation.",
      "Normalize the nine weights: k=1/72. Joint summation gives E[X]=1.083333, E[Y]=1.166667, E[XY]=1.25."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 5,
      "target": "correlation"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:8",
    "topicId": "mrv-c1-covariance",
    "family": "joint-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+7) for x,y in {0,1,2}. Calculate Var(2X-2Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.0178$",
      "$0.0267$",
      "$5.2444$",
      "$5.3156$",
      "$5.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/90. Let T=2X-2Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=-0.133333 and E[T²]=5.333333.",
      "Var(T)=E[T²]-(E[T])²=5.315556. Equivalently, include the signed covariance term in the linear-combination formula."
    ],
    "feedback": {
      "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
    },
    "skills": [
      "joint transformation",
      "variance with covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint transformation, variance with covariance.",
      "Normalize with k=1/90. Let T=2X-2Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 7,
      "a": 2,
      "b": -2,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:9",
    "topicId": "mrv-c1-covariance",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 3. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(3-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-18.6667$",
      "$-6.6667$",
      "$-2.6667$",
      "$0.0000$",
      "$2.6667$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 12 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(9-1)/12. Thus Cov(X,Y)=-2.666667."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 3,
      "a": 4,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:10",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 5 and 3, and correlation 0.4. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$5.0000$",
      "$10.4403$",
      "$109.0000$",
      "$181.0000$",
      "$253.0000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=6.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(5)²+9(3)²-12(6)=109."
    ],
    "feedback": {
      "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
    },
    "skills": [
      "correlation to covariance",
      "signed linear combination",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, signed linear combination, variance.",
      "Cov(X,Y)=ρ SD(X) SD(Y)=6."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 5,
      "sy": 3,
      "rho": 0.4,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:11",
    "topicId": "mrv-c1-covariance",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.5, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 2 for A or 5 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-2.2500$",
      "$0.0000$",
      "$2.2500$",
      "$3.5000$",
      "$14.5000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=14.5 and E[X]=E[Y]=3.5.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=2.25."
    ],
    "feedback": {
      "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "3": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "4": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means."
    },
    "skills": [
      "conditional independence",
      "mixed moment",
      "latent covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, mixed moment, latent covariance.",
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.5,
      "rates": [
        2,
        5
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:12",
    "topicId": "mrv-c1-covariance",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have joint PMF p(x,y)=k(x+2y+6) for x,y in {0,1,2}. Calculate their correlation coefficient. Round your answer to four decimal places.",
    "choices": [
      "$-0.0257$",
      "$-0.0168$",
      "$-0.0110$",
      "$0.0000$",
      "$0.0168$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the nine weights: k=1/81. Joint summation gives E[X]=1.074074, E[Y]=1.148148, E[XY]=1.222222.",
      "The marginal variances are 0.66118 and 0.644719, and covariance is E[XY]-E[X]E[Y]=-0.010974.",
      "Correlation is covariance divided by √(Var(X)Var(Y)), giving -0.016808."
    ],
    "feedback": {
      "0": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "2": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "3": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "4": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support."
    },
    "skills": [
      "joint mixed moment",
      "marginal variances",
      "correlation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint mixed moment, marginal variances, correlation.",
      "Normalize the nine weights: k=1/81. Joint summation gives E[X]=1.074074, E[Y]=1.148148, E[XY]=1.222222."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 6,
      "target": "correlation"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:13",
    "topicId": "mrv-c1-covariance",
    "family": "joint-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+6) for x,y in {0,1,2}. Calculate Var(2X-2Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.0219$",
      "$0.0329$",
      "$5.2236$",
      "$5.3114$",
      "$5.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/81. Let T=2X-2Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=-0.148148 and E[T²]=5.333333.",
      "Var(T)=E[T²]-(E[T])²=5.311385. Equivalently, include the signed covariance term in the linear-combination formula."
    ],
    "feedback": {
      "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
    },
    "skills": [
      "joint transformation",
      "variance with covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint transformation, variance with covariance.",
      "Normalize with k=1/81. Let T=2X-2Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 6,
      "a": 2,
      "b": -2,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:14",
    "topicId": "mrv-c1-covariance",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 4. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(4-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-30.0000$",
      "$-9.0000$",
      "$-5.0000$",
      "$0.0000$",
      "$5.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 16 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(16-1)/12. Thus Cov(X,Y)=-5."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 4,
      "a": 4,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:15",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.22, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.54 in H or 1.74 in L. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$0.1236$",
      "$0.1977$",
      "$0.2471$",
      "$0.2965$",
      "$0.4942$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.476; Var(X)=Var(Y)=1.723104. E[XY]-E[X]E[Y]=0.247104.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 0.247104."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.22,
      "rates": [
        0.54,
        1.74
      ],
      "target": "covariance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:2",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.225, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.55 in H or 1.75 in L. Calculate Corr(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$0.0725$",
      "$0.1160$",
      "$0.1451$",
      "$0.1741$",
      "$0.2901$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.48; Var(X)=Var(Y)=1.7311. E[XY]-E[X]E[Y]=0.2511.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 0.145052."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.225,
      "rates": [
        0.55,
        1.75
      ],
      "target": "correlation",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:3",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "X and Y have standard deviations 5 and 6, and correlation 0.35. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$17.2627$",
      "$32.0000$",
      "$298.0000$",
      "$424.0000$",
      "$550.0000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=10.5.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(5)²+9(6)²-12(10.5)=298."
    ],
    "feedback": {
      "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
    },
    "skills": [
      "correlation to covariance",
      "signed linear combination",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, signed linear combination, variance.",
      "Cov(X,Y)=ρ SD(X) SD(Y)=10.5."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 5,
      "sy": 6,
      "rho": 0.35,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:16",
    "topicId": "mrv-c1-covariance",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.4, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 2 for A or 4 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-0.9600$",
      "$0.0000$",
      "$0.9600$",
      "$3.2000$",
      "$11.2000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=11.2 and E[X]=E[Y]=3.2.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=0.96."
    ],
    "feedback": {
      "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "3": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "4": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means."
    },
    "skills": [
      "conditional independence",
      "mixed moment",
      "latent covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, mixed moment, latent covariance.",
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.4,
      "rates": [
        2,
        4
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:17",
    "topicId": "mrv-c1-covariance",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have joint PMF p(x,y)=k(x+2y+3) for x,y in {0,1,2}. Calculate their correlation coefficient. Round your answer to four decimal places.",
    "choices": [
      "$-0.0611$",
      "$-0.0389$",
      "$-0.0247$",
      "$0.0000$",
      "$0.0389$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the nine weights: k=1/54. Joint summation gives E[X]=1.111111, E[Y]=1.222222, E[XY]=1.333333.",
      "The marginal variances are 0.654321 and 0.617284, and covariance is E[XY]-E[X]E[Y]=-0.024691.",
      "Correlation is covariance divided by √(Var(X)Var(Y)), giving -0.038851."
    ],
    "feedback": {
      "0": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "2": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "3": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "4": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support."
    },
    "skills": [
      "joint mixed moment",
      "marginal variances",
      "correlation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint mixed moment, marginal variances, correlation.",
      "Normalize the nine weights: k=1/54. Joint summation gives E[X]=1.111111, E[Y]=1.222222, E[XY]=1.333333."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 3,
      "target": "correlation"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:18",
    "topicId": "mrv-c1-covariance",
    "family": "joint-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+2) for x,y in {0,1,2}. Calculate Var(2X-1Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.7022$",
      "$1.0000$",
      "$3.1911$",
      "$3.3333$",
      "$4.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/45. Let T=2X-1Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=1 and E[T²]=4.333333.",
      "Var(T)=E[T²]-(E[T])²=3.333333. Equivalently, include the signed covariance term in the linear-combination formula."
    ],
    "feedback": {
      "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
    },
    "skills": [
      "joint transformation",
      "variance with covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint transformation, variance with covariance.",
      "Normalize with k=1/45. Let T=2X-1Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 2,
      "a": 2,
      "b": -1,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:19",
    "topicId": "mrv-c1-covariance",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 5. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(5-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-44.0000$",
      "$-12.0000$",
      "$-8.0000$",
      "$0.0000$",
      "$8.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 20 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(25-1)/12. Thus Cov(X,Y)=-8."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 5,
      "a": 4,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:20",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 6 and 5, and correlation 0.4. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$3.0000$",
      "$15.0000$",
      "$225.0000$",
      "$369.0000$",
      "$513.0000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=12.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(6)²+9(5)²-12(12)=225."
    ],
    "feedback": {
      "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
    },
    "skills": [
      "correlation to covariance",
      "signed linear combination",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, signed linear combination, variance.",
      "Cov(X,Y)=ρ SD(X) SD(Y)=12."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 6,
      "sy": 5,
      "rho": 0.4,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:21",
    "topicId": "mrv-c1-covariance",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.3, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 1 for A or 5 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-3.3600$",
      "$0.0000$",
      "$3.3600$",
      "$3.8000$",
      "$17.8000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=17.8 and E[X]=E[Y]=3.8.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=3.36."
    ],
    "feedback": {
      "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "3": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "4": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means."
    },
    "skills": [
      "conditional independence",
      "mixed moment",
      "latent covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, mixed moment, latent covariance.",
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.3,
      "rates": [
        1,
        5
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:22",
    "topicId": "mrv-c1-covariance",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have joint PMF p(x,y)=k(x+2y+1) for x,y in {0,1,2}. Calculate their correlation coefficient. Round your answer to four decimal places.",
    "choices": [
      "$-0.1565$",
      "$-0.0933$",
      "$-0.0556$",
      "$0.0000$",
      "$0.0933$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the nine weights: k=1/36. Joint summation gives E[X]=1.166667, E[Y]=1.333333, E[XY]=1.5.",
      "The marginal variances are 0.638889 and 0.555556, and covariance is E[XY]-E[X]E[Y]=-0.055556.",
      "Correlation is covariance divided by √(Var(X)Var(Y)), giving -0.09325."
    ],
    "feedback": {
      "0": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "2": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "3": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "4": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support."
    },
    "skills": [
      "joint mixed moment",
      "marginal variances",
      "correlation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint mixed moment, marginal variances, correlation.",
      "Normalize the nine weights: k=1/36. Joint summation gives E[X]=1.166667, E[Y]=1.333333, E[XY]=1.5."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 1,
      "target": "correlation"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:23",
    "topicId": "mrv-c1-covariance",
    "family": "joint-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.23, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.56 in H or 1.76 in L. Calculate Var(2X-Y). Round your answer to four decimal places.",
    "choices": [
      "$3.8375$",
      "$6.1400$",
      "$7.6750$",
      "$9.2100$",
      "$15.3500$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.484; Var(X)=Var(Y)=1.739024. E[XY]-E[X]E[Y]=0.255024.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 7.675024."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.23,
      "rates": [
        0.56,
        1.76
      ],
      "target": "linear-variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:4",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.235, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.57 in H or 1.77 in L. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$0.1294$",
      "$0.2071$",
      "$0.2589$",
      "$0.3107$",
      "$0.5178$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.488; Var(X)=Var(Y)=1.746876. E[XY]-E[X]E[Y]=0.258876.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 0.258876."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.23500000000000001,
      "rates": [
        0.5700000000000001,
        1.77
      ],
      "target": "covariance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:5",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "p(x,y)=k(x+2y+1) for x,y in {0,1,2}. Calculate Var(2X-1Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.7222$",
      "$1.0000$",
      "$3.1111$",
      "$3.3333$",
      "$4.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/36. Let T=2X-1Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=1 and E[T²]=4.333333.",
      "Var(T)=E[T²]-(E[T])²=3.333333. Equivalently, include the signed covariance term in the linear-combination formula."
    ],
    "feedback": {
      "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
    },
    "skills": [
      "joint transformation",
      "variance with covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint transformation, variance with covariance.",
      "Normalize with k=1/36. Let T=2X-1Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 1,
      "a": 2,
      "b": -1,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:24",
    "topicId": "mrv-c1-covariance",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 6. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(6-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-60.6667$",
      "$-15.6667$",
      "$-11.6667$",
      "$0.0000$",
      "$11.6667$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 24 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(36-1)/12. Thus Cov(X,Y)=-11.666667."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 6,
      "a": 4,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:25",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 5 and 7, and correlation 0.3. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$20.3715$",
      "$71.0000$",
      "$415.0000$",
      "$541.0000$",
      "$667.0000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=10.5.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(5)²+9(7)²-12(10.5)=415."
    ],
    "feedback": {
      "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
    },
    "skills": [
      "correlation to covariance",
      "signed linear combination",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, signed linear combination, variance.",
      "Cov(X,Y)=ρ SD(X) SD(Y)=10.5."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 5,
      "sy": 7,
      "rho": 0.3,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:26",
    "topicId": "mrv-c1-covariance",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.5, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 1 for A or 6 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-6.2500$",
      "$0.0000$",
      "$3.5000$",
      "$6.2500$",
      "$18.5000$"
    ],
    "answer": 3,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=18.5 and E[X]=E[Y]=3.5.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=6.25."
    ],
    "feedback": {
      "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "2": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "4": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means."
    },
    "skills": [
      "conditional independence",
      "mixed moment",
      "latent covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, mixed moment, latent covariance.",
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.5,
      "rates": [
        1,
        6
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:27",
    "topicId": "mrv-c1-covariance",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have joint PMF p(x,y)=k(x+2y+4) for x,y in {0,1,2}. Calculate their correlation coefficient. Round your answer to four decimal places.",
    "choices": [
      "$-0.0438$",
      "$-0.0282$",
      "$-0.0181$",
      "$0.0000$",
      "$0.0282$"
    ],
    "answer": 1,
    "solution": [
      "Normalize the nine weights: k=1/63. Joint summation gives E[X]=1.095238, E[Y]=1.190476, E[XY]=1.285714.",
      "The marginal variances are 0.657596 and 0.630385, and covariance is E[XY]-E[X]E[Y]=-0.018141.",
      "Correlation is covariance divided by √(Var(X)Var(Y)), giving -0.028175."
    ],
    "feedback": {
      "0": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "2": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "3": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support.",
      "4": "Use the joint cross moment and both marginal standard deviations. Do not assume independence from the form of the support."
    },
    "skills": [
      "joint mixed moment",
      "marginal variances",
      "correlation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint mixed moment, marginal variances, correlation.",
      "Normalize the nine weights: k=1/63. Joint summation gives E[X]=1.095238, E[Y]=1.190476, E[XY]=1.285714."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 4,
      "target": "correlation"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:28",
    "topicId": "mrv-c1-covariance",
    "family": "joint-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+2) for x,y in {0,1,2}. Calculate Var(2X-2Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.0711$",
      "$0.1067$",
      "$4.9778$",
      "$5.2622$",
      "$5.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/45. Let T=2X-2Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=-0.266667 and E[T²]=5.333333.",
      "Var(T)=E[T²]-(E[T])²=5.262222. Equivalently, include the signed covariance term in the linear-combination formula."
    ],
    "feedback": {
      "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
    },
    "skills": [
      "joint transformation",
      "variance with covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint transformation, variance with covariance.",
      "Normalize with k=1/45. Let T=2X-2Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 2,
      "a": 2,
      "b": -2,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:29",
    "topicId": "mrv-c1-covariance",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 7. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(7-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-80.0000$",
      "$-20.0000$",
      "$-16.0000$",
      "$0.0000$",
      "$16.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 28 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(49-1)/12. Thus Cov(X,Y)=-16."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 7,
      "a": 4,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:30",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 5 and 5, and correlation 0.3. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$15.3297$",
      "$35.0000$",
      "$235.0000$",
      "$325.0000$",
      "$415.0000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=7.5.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(5)²+9(5)²-12(7.5)=235."
    ],
    "feedback": {
      "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
    },
    "skills": [
      "correlation to covariance",
      "signed linear combination",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, signed linear combination, variance.",
      "Cov(X,Y)=ρ SD(X) SD(Y)=7.5."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 5,
      "sy": 5,
      "rho": 0.3,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:31",
    "topicId": "mrv-c1-covariance",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.24, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.58 in H or 1.78 in L. Calculate Corr(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$0.0748$",
      "$0.1198$",
      "$0.1497$",
      "$0.1796$",
      "$0.2994$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.492; Var(X)=Var(Y)=1.754656. E[XY]-E[X]E[Y]=0.262656.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 0.149691."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.24000000000000002,
      "rates": [
        0.5800000000000001,
        1.78
      ],
      "target": "correlation",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:6",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "Two insured risks share a fixed latent class: class H with probability 0.245, otherwise L. Given the class, their counts X,Y are independent Poisson variables, each with mean 0.59 in H or 1.79 in L. Calculate Var(2X-Y). Round your answer to four decimal places.",
    "choices": [
      "$3.8732$",
      "$6.1971$",
      "$7.7464$",
      "$9.2956$",
      "$15.4927$"
    ],
    "answer": 2,
    "solution": [
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means.",
      "E[X]=E[Y]=1.496; Var(X)=Var(Y)=1.762364. E[XY]-E[X]E[Y]=0.266364.",
      "Correlation divides covariance by the marginal SD product. For 2X-Y include the signed covariance term: 4Var(X)+Var(Y)-4Cov(X,Y). The result is 7.746364."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional independence",
      "discrete mixed moments",
      "covariance and linear variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, discrete mixed moments, covariance and linear variance.",
      "Independence holds conditional on class, not marginally. The shared class contributes covariance through the two class means."
    ],
    "verification": {
      "kind": "section-covariance",
      "w": 0.245,
      "rates": [
        0.5900000000000001,
        1.79
      ],
      "target": "linear-variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:7",
    "topicId": "mrv-c1-covariance",
    "family": "cumulative-multivariate-random-variables-c",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": true
  },
  {
    "question": "An insured is type A with probability 0.3, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 2 for A or 4 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-0.8400$",
      "$0.0000$",
      "$0.8400$",
      "$3.4000$",
      "$12.4000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=12.4 and E[X]=E[Y]=3.4.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=0.84."
    ],
    "feedback": {
      "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "3": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "4": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means."
    },
    "skills": [
      "conditional independence",
      "mixed moment",
      "latent covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, mixed moment, latent covariance.",
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.3,
      "rates": [
        2,
        4
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:32",
    "topicId": "mrv-c1-covariance",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+4) for x,y in {0,1,2}. Calculate Var(2X-2Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.0363$",
      "$0.0544$",
      "$5.1519$",
      "$5.2971$",
      "$5.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/63. Let T=2X-2Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=-0.190476 and E[T²]=5.333333.",
      "Var(T)=E[T²]-(E[T])²=5.297052. Equivalently, include the signed covariance term in the linear-combination formula."
    ],
    "feedback": {
      "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
    },
    "skills": [
      "joint transformation",
      "variance with covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint transformation, variance with covariance.",
      "Normalize with k=1/63. Let T=2X-2Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 4,
      "a": 2,
      "b": -2,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:33",
    "topicId": "mrv-c1-covariance",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+6) for x,y in {0,1,2}. Calculate Var(2X-1Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.6776$",
      "$1.0000$",
      "$3.2894$",
      "$3.3333$",
      "$4.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/81. Let T=2X-1Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=1 and E[T²]=4.333333.",
      "Var(T)=E[T²]-(E[T])²=3.333333. Equivalently, include the signed covariance term in the linear-combination formula."
    ],
    "feedback": {
      "0": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "1": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "2": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients.",
      "4": "The joint law can imply dependence. Use direct cell moments or include covariance, with the sign of the product of coefficients."
    },
    "skills": [
      "joint transformation",
      "variance with covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint transformation, variance with covariance.",
      "Normalize with k=1/81. Let T=2X-1Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 6,
      "a": 2,
      "b": -1,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:34",
    "topicId": "mrv-c1-covariance",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 8. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(8-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-102.0000$",
      "$-25.0000$",
      "$-21.0000$",
      "$0.0000$",
      "$21.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 32 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(64-1)/12. Thus Cov(X,Y)=-21."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 8,
      "a": 4,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:35",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 5 and 3, and correlation 0.3. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$11.2694$",
      "$23.0000$",
      "$127.0000$",
      "$181.0000$",
      "$235.0000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=4.5.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(5)²+9(3)²-12(4.5)=127."
    ],
    "feedback": {
      "0": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "1": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "3": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances.",
      "4": "Square the coefficients on marginal variances, preserve the negative sign in the covariance term, and convert correlation using SDs rather than variances."
    },
    "skills": [
      "correlation to covariance",
      "signed linear combination",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: correlation to covariance, signed linear combination, variance.",
      "Cov(X,Y)=ρ SD(X) SD(Y)=4.5."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 5,
      "sy": 3,
      "rho": 0.3,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:36",
    "topicId": "mrv-c1-covariance",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.3, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 1 for A or 4 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-1.8900$",
      "$0.0000$",
      "$1.8900$",
      "$3.1000$",
      "$11.5000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=11.5 and E[X]=E[Y]=3.1.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=1.89."
    ],
    "feedback": {
      "0": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "1": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "3": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means.",
      "4": "The persistent class creates dependence across years after averaging over type. Use the cross moment or covariance of conditional means."
    },
    "skills": [
      "conditional independence",
      "mixed moment",
      "latent covariance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional independence, mixed moment, latent covariance.",
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.3,
      "rates": [
        1,
        4
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:37",
    "topicId": "mrv-c1-covariance",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 6. Errors E and F each take values ±√4 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(6-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-60.6667$",
      "$-27.6667$",
      "$-11.6667$",
      "$0.0000$",
      "$11.6667$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 24 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(36-1)/12. Thus Cov(X,Y)=-11.666667."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 6,
      "a": 4,
      "noise": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:38",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 4. Errors E and F each take values ±√2 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=4(4-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-30.0000$",
      "$-13.0000$",
      "$-5.0000$",
      "$0.0000$",
      "$5.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 16 contributes zero covariance, leaving Cov(U,-4U)=-4Var(U).",
      "For this discrete uniform U, Var(U)=(16-1)/12. Thus Cov(X,Y)=-5."
    ],
    "feedback": {
      "0": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "1": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "3": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²].",
      "4": "The measurements share U with opposite coefficients. Independent error variances do not enter the cross covariance, which uses Var(U), not E[U²]."
    },
    "skills": [
      "shared discrete variable",
      "covariance bilinearity",
      "sign of dependence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: shared discrete variable, covariance bilinearity, sign of dependence.",
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish."
    ],
    "verification": {
      "kind": "shared-discrete-cov",
      "B": 4,
      "a": 4,
      "noise": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-c:39",
    "topicId": "mrv-c1-covariance",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-c1-covariance"
    ],
    "cumulative": false
  }
];

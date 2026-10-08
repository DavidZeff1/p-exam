export default [
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.375, otherwise 2. Given class 1 or 2, X is binomial with 5 trials and success probability 0.13 or 0.38, respectively. Calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$0.6573$",
      "$1.0516$",
      "$1.3145$",
      "$1.5774$",
      "$2.6290$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 1.",
      "Compute first and second raw moments from the retained masses: E[X]=1.43125, E[X²]=3.363. Subtract the squared mean for variance; the requested value is 1.314523."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 5,
      "w": 0.375,
      "ps": [
        0.13,
        0.38
      ],
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:0",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.38, otherwise 2. Given class 1 or 2, X is binomial with 6 trials and success probability 0.132 or 0.382, respectively. Calculate E[X given X≥2]. Round your answer to four decimal places.",
    "choices": [
      "$1.3727$",
      "$2.1963$",
      "$2.7454$",
      "$3.2945$",
      "$5.4908$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 0.526553.",
      "Compute first and second raw moments from the retained masses: E[X]=2.745422, E[X²]=8.277282. Subtract the squared mean for variance; the requested value is 2.745422."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 6,
      "w": 0.38,
      "ps": [
        0.132,
        0.382
      ],
      "target": "conditional-mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:1",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "An insured belongs permanently to class A with probability 0.4 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 3 for A or 7 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
    "choices": [
      "$3.8400$",
      "$5.4000$",
      "$9.2400$",
      "$29.1600$",
      "$33.0000$"
    ],
    "answer": 2,
    "solution": [
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=5.4.",
      "The conditional means themselves vary: Var(E[N given class])=3.84.",
      "Total variance adds these two components, giving 9.24. The unconditional mixture is not Poisson."
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
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=5.4."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.4,
      "rates": [
        3,
        7
      ],
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:8",
    "topicId": "mrv-b1-joint-moments",
    "family": "total-variance-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+7), with k determined by normalization. Calculate Var(X given Y=2). Round your answer to four decimal places.",
    "choices": [
      "$-0.9167$",
      "$0.6636$",
      "$0.7222$",
      "$1.0556$",
      "$1.7778$"
    ],
    "answer": 1,
    "solution": [
      "On the Y=2 slice, the X weights are 11, 12, 13. Divide by their sum 36 to get the conditional PMF.",
      "The conditional first and second moments are 1.055556 and 1.777778.",
      "Conditional variance is 1.777778-(1.055556)²=0.66358."
    ],
    "feedback": {
      "0": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "2": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "3": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "4": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean."
    },
    "skills": [
      "conditional PMF",
      "conditional moments",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional PMF, conditional moments, variance.",
      "On the Y=2 slice, the X weights are 11, 12, 13. Divide by their sum 36 to get the conditional PMF."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 7,
      "y": 2,
      "target": "conditional-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:9",
    "topicId": "mrv-b2-conditional-variance",
    "family": "joint-table-conditional-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.5, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 2 for A or 4 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-1.0000$",
      "$0.0000$",
      "$1.0000$",
      "$3.0000$",
      "$10.0000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=10 and E[X]=E[Y]=3.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=1."
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
        4
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:10",
    "topicId": "mrv-b1-joint-moments",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 5 class-A, 7 class-B, and 7 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.3173$",
      "$0.6346$",
      "$0.7500$",
      "$0.8654$",
      "$1.5000$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X=2 leaves three sampled files drawn from the 14 non-A files, of which 7 are B.",
      "The conditional Y distribution is hypergeometric with population 14, success count 7, and sample size 3.",
      "Its variance is 3(7/14)(1-7/14)(14-3)/(14-1)=0.634615."
    ],
    "feedback": {
      "0": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "2": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "3": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "4": "Change the sample size and population after conditioning, and retain the finite-population correction."
    },
    "skills": [
      "condition a multivariate sample",
      "hypergeometric variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition a multivariate sample, hypergeometric variance.",
      "Conditioning on X=2 leaves three sampled files drawn from the 14 non-A files, of which 7 are B."
    ],
    "verification": {
      "kind": "conditional-hypergeom",
      "groups": [
        5,
        7,
        7
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:11",
    "topicId": "mrv-b2-conditional-variance",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 6. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=2(6-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-30.3333$",
      "$-7.8333$",
      "$-5.8333$",
      "$0.0000$",
      "$5.8333$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 12 contributes zero covariance, leaving Cov(U,-2U)=-2Var(U).",
      "For this discrete uniform U, Var(U)=(36-1)/12. Thus Cov(X,Y)=-5.833333."
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
      "a": 2,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:12",
    "topicId": "mrv-b1-joint-moments",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤11, and zero elsewhere. Calculate Var(X given Y=2). Round your answer to four decimal places.",
    "choices": [
      "$2.8723$",
      "$6.7500$",
      "$8.2500$",
      "$20.2500$",
      "$28.5000$"
    ],
    "answer": 2,
    "solution": [
      "Given Y=2, X is discrete uniform on the 10 integers 0 through 9.",
      "The conditional first moment is 4.5, and second moment is 28.5.",
      "Subtract the squared conditional mean: Var(X given Y=2)=9(9+2)/12=8.25."
    ],
    "feedback": {
      "0": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "1": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "3": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "4": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction."
    },
    "skills": [
      "conditional discrete support",
      "conditional raw moments",
      "conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional discrete support, conditional raw moments, conditional variance.",
      "Given Y=2, X is discrete uniform on the 10 integers 0 through 9."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-variance",
      "B": 11,
      "y": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:13",
    "topicId": "mrv-b2-conditional-variance",
    "family": "joint-discrete-triangle-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 6 and 6, and correlation 0.4. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$7.2000$",
      "$17.1814$",
      "$295.2000$",
      "$468.0000$",
      "$640.8000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=14.4.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(6)²+9(6)²-12(14.4)=295.2."
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
      "Cov(X,Y)=ρ SD(X) SD(Y)=14.4."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 6,
      "sy": 6,
      "rho": 0.4,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:14",
    "topicId": "mrv-b1-joint-moments",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "N is Poisson with mean 1. Only policies with N≤5 are retained. Calculate the conditional variance of N among retained policies. Round your answer to four decimal places.",
    "choices": [
      "$0.9841$",
      "$0.9847$",
      "$1.0000$",
      "$1.0006$",
      "$1.9785$"
    ],
    "answer": 1,
    "solution": [
      "The retained probability is 0.999406. Divide the restricted first and second raw-moment sums by this probability.",
      "The conditional moments are E[N]=0.996933 and E[N²]=1.978528.",
      "The conditional variance is 1.978528-(0.996933)²=0.984653."
    ],
    "feedback": {
      "0": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "2": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "3": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "4": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance."
    },
    "skills": [
      "truncated Poisson PMF",
      "conditional raw moments",
      "conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: truncated Poisson PMF, conditional raw moments, conditional variance.",
      "The retained probability is 0.999406. Divide the restricted first and second raw-moment sums by this probability."
    ],
    "verification": {
      "kind": "poisson-truncated",
      "lam": 1.0,
      "upper": 5,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:15",
    "topicId": "mrv-b2-conditional-variance",
    "family": "poisson-truncated-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.385, otherwise 2. Given class 1 or 2, X is binomial with 7 trials and success probability 0.134 or 0.384, respectively. Calculate Var(X given X≥2). Round your answer to four decimal places.",
    "choices": [
      "$0.5074$",
      "$0.8119$",
      "$1.0148$",
      "$1.2178$",
      "$2.0297$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 0.596023.",
      "Compute first and second raw moments from the retained masses: E[X]=2.972376, E[X²]=9.849857. Subtract the squared mean for variance; the requested value is 1.014841."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 7,
      "w": 0.385,
      "ps": [
        0.134,
        0.384
      ],
      "target": "conditional-variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:2",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.39, otherwise 2. Given class 1 or 2, X is binomial with 8 trials and success probability 0.136 or 0.386, respectively. Calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$1.2374$",
      "$1.9798$",
      "$2.4748$",
      "$2.9698$",
      "$4.9496$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 1.",
      "Compute first and second raw moments from the retained masses: E[X]=2.308, E[X²]=7.801656. Subtract the squared mean for variance; the requested value is 2.474792."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 8,
      "w": 0.39,
      "ps": [
        0.136,
        0.386
      ],
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:3",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤10, and zero probability elsewhere. Calculate E[X given Y=1]. Round your answer to four decimal places.",
    "choices": [
      "$3.3333$",
      "$4.5000$",
      "$5.0000$",
      "$5.5000$",
      "$9.0000$"
    ],
    "answer": 1,
    "solution": [
      "At Y=1, the allowable X values are 0,1,…,9.",
      "The joint PMF is constant at these 10 points, so the conditional PMF is 1/10 at each value.",
      "The conditional mean is (10-1)/2=4.5."
    ],
    "feedback": {
      "0": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "2": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "3": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "4": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row."
    },
    "skills": [
      "joint support row",
      "conditional PMF",
      "conditional first moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint support row, conditional PMF, conditional first moment.",
      "At Y=1, the allowable X values are 0,1,…,9."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 10,
      "y": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:16",
    "topicId": "mrv-b1-joint-moments",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has a permanent class H with probability 0.3, otherwise class L. Conditional on class, annual counts are independent Poisson variables with means 2 and 0.45, respectively. Given no claims in year 1, calculate the conditional variance of the year-2 count. Round your answer to four decimal places.",
    "choices": [
      "$0.1836$",
      "$0.5792$",
      "$0.7629$",
      "$1.0984$",
      "$1.4195$"
    ],
    "answer": 2,
    "solution": [
      "No-claim likelihoods update the H share to 0.083379 by Bayes.",
      "The posterior mean count, also the mean within-class Poisson variance, is 0.579237.",
      "Add posterior variance of the class rates 0.183616: Var(N₂ given N₁=0)=0.762853."
    ],
    "feedback": {
      "0": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "1": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "3": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "4": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior."
    },
    "skills": [
      "Bayes from a count observation",
      "conditional independence",
      "conditional total variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: Bayes from a count observation, conditional independence, conditional total variance.",
      "No-claim likelihoods update the H share to 0.083379 by Bayes."
    ],
    "verification": {
      "kind": "predictive-variance",
      "w": 0.3,
      "rates": [
        2.0,
        0.45
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:17",
    "topicId": "mrv-b2-conditional-variance",
    "family": "bayes-predictive-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class A with probability 0.3 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 2 for A or 6 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
    "choices": [
      "$3.3600$",
      "$4.8000$",
      "$8.1600$",
      "$23.0400$",
      "$26.4000$"
    ],
    "answer": 2,
    "solution": [
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.8.",
      "The conditional means themselves vary: Var(E[N given class])=3.36.",
      "Total variance adds these two components, giving 8.16. The unconditional mixture is not Poisson."
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
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.8."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.3,
      "rates": [
        2,
        6
      ],
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:18",
    "topicId": "mrv-b1-joint-moments",
    "family": "total-variance-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+3), with k determined by normalization. Calculate Var(X given Y=1). Round your answer to four decimal places.",
    "choices": [
      "$-1.0247$",
      "$0.6543$",
      "$0.7778$",
      "$1.1111$",
      "$1.8889$"
    ],
    "answer": 1,
    "solution": [
      "On the Y=1 slice, the X weights are 5, 6, 7. Divide by their sum 18 to get the conditional PMF.",
      "The conditional first and second moments are 1.111111 and 1.888889.",
      "Conditional variance is 1.888889-(1.111111)²=0.654321."
    ],
    "feedback": {
      "0": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "2": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "3": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "4": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean."
    },
    "skills": [
      "conditional PMF",
      "conditional moments",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional PMF, conditional moments, variance.",
      "On the Y=1 slice, the X weights are 5, 6, 7. Divide by their sum 18 to get the conditional PMF."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 3,
      "y": 1,
      "target": "conditional-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:19",
    "topicId": "mrv-b2-conditional-variance",
    "family": "joint-table-conditional-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.4, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 2 for A or 5 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-2.1600$",
      "$0.0000$",
      "$2.1600$",
      "$3.8000$",
      "$16.6000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=16.6 and E[X]=E[Y]=3.8.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=2.16."
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
        5
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:20",
    "topicId": "mrv-b1-joint-moments",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 6 class-A, 7 class-B, and 6 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.3345$",
      "$0.6213$",
      "$0.7456$",
      "$0.8284$",
      "$1.6154$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 7 are B.",
      "The conditional Y distribution is hypergeometric with population 13, success count 7, and sample size 3.",
      "Its variance is 3(7/13)(1-7/13)(13-3)/(13-1)=0.621302."
    ],
    "feedback": {
      "0": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "2": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "3": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "4": "Change the sample size and population after conditioning, and retain the finite-population correction."
    },
    "skills": [
      "condition a multivariate sample",
      "hypergeometric variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition a multivariate sample, hypergeometric variance.",
      "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 7 are B."
    ],
    "verification": {
      "kind": "conditional-hypergeom",
      "groups": [
        6,
        7,
        6
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:21",
    "topicId": "mrv-b2-conditional-variance",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 8. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=2(8-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-51.0000$",
      "$-12.5000$",
      "$-10.5000$",
      "$0.0000$",
      "$10.5000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 16 contributes zero covariance, leaving Cov(U,-2U)=-2Var(U).",
      "For this discrete uniform U, Var(U)=(64-1)/12. Thus Cov(X,Y)=-10.5."
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
      "a": 2,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:22",
    "topicId": "mrv-b1-joint-moments",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤5, and zero elsewhere. Calculate Var(X given Y=3). Round your answer to four decimal places.",
    "choices": [
      "$0.3333$",
      "$0.6667$",
      "$0.8165$",
      "$1.0000$",
      "$1.6667$"
    ],
    "answer": 1,
    "solution": [
      "Given Y=3, X is discrete uniform on the 3 integers 0 through 2.",
      "The conditional first moment is 1, and second moment is 1.666667.",
      "Subtract the squared conditional mean: Var(X given Y=3)=2(2+2)/12=0.666667."
    ],
    "feedback": {
      "0": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "2": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "3": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "4": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction."
    },
    "skills": [
      "conditional discrete support",
      "conditional raw moments",
      "conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional discrete support, conditional raw moments, conditional variance.",
      "Given Y=3, X is discrete uniform on the 3 integers 0 through 2."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-variance",
      "B": 5,
      "y": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:23",
    "topicId": "mrv-b2-conditional-variance",
    "family": "joint-discrete-triangle-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.395, otherwise 2. Given class 1 or 2, X is binomial with 9 trials and success probability 0.138 or 0.388, respectively. Calculate E[X given X≥2]. Round your answer to four decimal places.",
    "choices": [
      "$1.7284$",
      "$2.7654$",
      "$3.4568$",
      "$4.1481$",
      "$6.9135$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 0.697799.",
      "Compute first and second raw moments from the retained masses: E[X]=3.456764, E[X²]=13.630617. Subtract the squared mean for variance; the requested value is 3.456764."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 9,
      "w": 0.395,
      "ps": [
        0.138,
        0.38799999999999996
      ],
      "target": "conditional-mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:4",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.4, otherwise 2. Given class 1 or 2, X is binomial with 5 trials and success probability 0.14 or 0.39, respectively. Calculate Var(X given X≥2). Round your answer to four decimal places.",
    "choices": [
      "$0.2570$",
      "$0.4112$",
      "$0.5139$",
      "$0.6167$",
      "$1.0279$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 0.445995.",
      "Compute first and second raw moments from the retained masses: E[X]=2.544517, E[X²]=6.988515. Subtract the squared mean for variance; the requested value is 0.513948."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 5,
      "w": 0.4,
      "ps": [
        0.14,
        0.38999999999999996
      ],
      "target": "conditional-variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:5",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "X and Y have standard deviations 6 and 7, and correlation 0.35. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$20.2139$",
      "$42.6000$",
      "$408.6000$",
      "$585.0000$",
      "$761.4000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=14.7.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(6)²+9(7)²-12(14.7)=408.6."
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
      "Cov(X,Y)=ρ SD(X) SD(Y)=14.7."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 6,
      "sy": 7,
      "rho": 0.35,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:24",
    "topicId": "mrv-b1-joint-moments",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "N is Poisson with mean 1.5. Only policies with N≤5 are retained. Calculate the conditional variance of N among retained policies. Round your answer to four decimal places.",
    "choices": [
      "$1.3976$",
      "$1.4038$",
      "$1.5000$",
      "$1.5067$",
      "$3.5904$"
    ],
    "answer": 1,
    "solution": [
      "The retained probability is 0.995544. Divide the restricted first and second raw-moment sums by this probability.",
      "The conditional moments are E[N]=1.478725 and E[N²]=3.59044.",
      "The conditional variance is 3.59044-(1.478725)²=1.403811."
    ],
    "feedback": {
      "0": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "2": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "3": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "4": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance."
    },
    "skills": [
      "truncated Poisson PMF",
      "conditional raw moments",
      "conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: truncated Poisson PMF, conditional raw moments, conditional variance.",
      "The retained probability is 0.995544. Divide the restricted first and second raw-moment sums by this probability."
    ],
    "verification": {
      "kind": "poisson-truncated",
      "lam": 1.5,
      "upper": 5,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:25",
    "topicId": "mrv-b2-conditional-variance",
    "family": "poisson-truncated-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤12, and zero probability elsewhere. Calculate E[X given Y=1]. Round your answer to four decimal places.",
    "choices": [
      "$4.0000$",
      "$5.5000$",
      "$6.0000$",
      "$6.5000$",
      "$11.0000$"
    ],
    "answer": 1,
    "solution": [
      "At Y=1, the allowable X values are 0,1,…,11.",
      "The joint PMF is constant at these 12 points, so the conditional PMF is 1/12 at each value.",
      "The conditional mean is (12-1)/2=5.5."
    ],
    "feedback": {
      "0": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "2": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "3": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "4": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row."
    },
    "skills": [
      "joint support row",
      "conditional PMF",
      "conditional first moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint support row, conditional PMF, conditional first moment.",
      "At Y=1, the allowable X values are 0,1,…,11."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 12,
      "y": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:26",
    "topicId": "mrv-b1-joint-moments",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has a permanent class H with probability 0.3, otherwise class L. Conditional on class, annual counts are independent Poisson variables with means 2.25 and 0.4, respectively. Given no claims in year 1, calculate the conditional variance of the year-2 count. Round your answer to four decimal places.",
    "choices": [
      "$0.2024$",
      "$0.5168$",
      "$0.7192$",
      "$0.9863$",
      "$1.6737$"
    ],
    "answer": 2,
    "solution": [
      "No-claim likelihoods update the H share to 0.063133 by Bayes.",
      "The posterior mean count, also the mean within-class Poisson variance, is 0.516796.",
      "Add posterior variance of the class rates 0.202431: Var(N₂ given N₁=0)=0.719227."
    ],
    "feedback": {
      "0": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "1": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "3": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "4": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior."
    },
    "skills": [
      "Bayes from a count observation",
      "conditional independence",
      "conditional total variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: Bayes from a count observation, conditional independence, conditional total variance.",
      "No-claim likelihoods update the H share to 0.063133 by Bayes."
    ],
    "verification": {
      "kind": "predictive-variance",
      "w": 0.3,
      "rates": [
        2.25,
        0.4
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:27",
    "topicId": "mrv-b2-conditional-variance",
    "family": "bayes-predictive-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class A with probability 0.5 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 3 for A or 5 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
    "choices": [
      "$1.0000$",
      "$4.0000$",
      "$5.0000$",
      "$16.0000$",
      "$17.0000$"
    ],
    "answer": 2,
    "solution": [
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=4.",
      "The conditional means themselves vary: Var(E[N given class])=1.",
      "Total variance adds these two components, giving 5. The unconditional mixture is not Poisson."
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
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=4."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.5,
      "rates": [
        3,
        5
      ],
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:28",
    "topicId": "mrv-b1-joint-moments",
    "family": "total-variance-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+1), with k determined by normalization. Calculate Var(X given Y=1). Round your answer to four decimal places.",
    "choices": [
      "$-1.1389$",
      "$0.6389$",
      "$0.8333$",
      "$1.1667$",
      "$2.0000$"
    ],
    "answer": 1,
    "solution": [
      "On the Y=1 slice, the X weights are 3, 4, 5. Divide by their sum 12 to get the conditional PMF.",
      "The conditional first and second moments are 1.166667 and 2.",
      "Conditional variance is 2-(1.166667)²=0.638889."
    ],
    "feedback": {
      "0": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "2": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "3": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "4": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean."
    },
    "skills": [
      "conditional PMF",
      "conditional moments",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional PMF, conditional moments, variance.",
      "On the Y=1 slice, the X weights are 3, 4, 5. Divide by their sum 12 to get the conditional PMF."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 1,
      "y": 1,
      "target": "conditional-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:29",
    "topicId": "mrv-b2-conditional-variance",
    "family": "joint-table-conditional-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured is type A with probability 0.4, otherwise type B. Given type, claim counts X and Y in two years are independent Poisson variables, each with mean 1 for A or 4 for B. Calculate Cov(X,Y) without conditioning on type. Round your answer to four decimal places.",
    "choices": [
      "$-2.1600$",
      "$0.0000$",
      "$2.1600$",
      "$2.8000$",
      "$10.0000$"
    ],
    "answer": 2,
    "solution": [
      "Conditional independence gives E[XY given type]=the squared class mean, but does not give unconditional independence.",
      "E[XY]=10 and E[X]=E[Y]=2.8.",
      "Cov(X,Y)=E[XY]-E[X]E[Y]=2.16."
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
        1,
        4
      ],
      "target": "covariance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:30",
    "topicId": "mrv-b1-joint-moments",
    "family": "shared-class-covariance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 4 class-A, 7 class-B, and 6 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.3345$",
      "$0.6213$",
      "$0.7456$",
      "$0.8284$",
      "$1.6154$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 7 are B.",
      "The conditional Y distribution is hypergeometric with population 13, success count 7, and sample size 3.",
      "Its variance is 3(7/13)(1-7/13)(13-3)/(13-1)=0.621302."
    ],
    "feedback": {
      "0": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "2": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "3": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "4": "Change the sample size and population after conditioning, and retain the finite-population correction."
    },
    "skills": [
      "condition a multivariate sample",
      "hypergeometric variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition a multivariate sample, hypergeometric variance.",
      "Conditioning on X=2 leaves three sampled files drawn from the 13 non-A files, of which 7 are B."
    ],
    "verification": {
      "kind": "conditional-hypergeom",
      "groups": [
        4,
        7,
        6
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:31",
    "topicId": "mrv-b2-conditional-variance",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.405, otherwise 2. Given class 1 or 2, X is binomial with 6 trials and success probability 0.142 or 0.392, respectively. Calculate Var(X). Round your answer to four decimal places.",
    "choices": [
      "$0.8446$",
      "$1.3513$",
      "$1.6891$",
      "$2.0269$",
      "$3.3782$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 1.",
      "Compute first and second raw moments from the retained masses: E[X]=1.7445, E[X²]=4.732395. Subtract the squared mean for variance; the requested value is 1.689115."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 6,
      "w": 0.40499999999999997,
      "ps": [
        0.14200000000000002,
        0.39199999999999996
      ],
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:6",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "A policy’s fixed class Y is 1 with probability 0.41, otherwise 2. Given class 1 or 2, X is binomial with 7 trials and success probability 0.144 or 0.394, respectively. Calculate E[X given X≥2]. Round your answer to four decimal places.",
    "choices": [
      "$1.4952$",
      "$2.3923$",
      "$2.9903$",
      "$3.5884$",
      "$5.9807$"
    ],
    "answer": 2,
    "solution": [
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions.",
      "For conditioning, retain counts at least 2 and renormalize by their total probability 0.601044.",
      "Compute first and second raw moments from the retained masses: E[X]=2.990332, E[X²]=9.984526. Subtract the squared mean for variance; the requested value is 2.990332."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "conditional and marginal PMFs",
      "conditional moments",
      "total and conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional and marginal PMFs, conditional moments, total and conditional variance.",
      "First obtain the marginal mass function by weighting the two conditional binomial mass functions."
    ],
    "verification": {
      "kind": "section-joint-moments",
      "n": 7,
      "w": 0.41,
      "ps": [
        0.14400000000000002,
        0.39399999999999996
      ],
      "target": "conditional-mean",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:7",
    "topicId": "mrv-b1-joint-moments",
    "family": "cumulative-multivariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b1-joint-moments",
      "mrv-b2-conditional-variance"
    ],
    "cumulative": true
  },
  {
    "question": "U is uniform on the integers 1 through 4. Errors E and F each take values ±√1 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=3(4-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-22.5000$",
      "$-6.7500$",
      "$-3.7500$",
      "$0.0000$",
      "$3.7500$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 12 contributes zero covariance, leaving Cov(U,-3U)=-3Var(U).",
      "For this discrete uniform U, Var(U)=(16-1)/12. Thus Cov(X,Y)=-3.75."
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
      "a": 3,
      "noise": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:32",
    "topicId": "mrv-b1-joint-moments",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤7, and zero elsewhere. Calculate Var(X given Y=3). Round your answer to four decimal places.",
    "choices": [
      "$1.3333$",
      "$1.4142$",
      "$2.0000$",
      "$4.0000$",
      "$6.0000$"
    ],
    "answer": 2,
    "solution": [
      "Given Y=3, X is discrete uniform on the 5 integers 0 through 4.",
      "The conditional first moment is 2, and second moment is 6.",
      "Subtract the squared conditional mean: Var(X given Y=3)=4(4+2)/12=2."
    ],
    "feedback": {
      "0": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "1": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "3": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction.",
      "4": "Use the inclusive discrete conditional support and both conditional moments; the continuous-uniform formula misses the lattice endpoint correction."
    },
    "skills": [
      "conditional discrete support",
      "conditional raw moments",
      "conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional discrete support, conditional raw moments, conditional variance.",
      "Given Y=3, X is discrete uniform on the 5 integers 0 through 4."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-variance",
      "B": 7,
      "y": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:33",
    "topicId": "mrv-b2-conditional-variance",
    "family": "joint-discrete-triangle-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have standard deviations 6 and 3, and correlation 0.35. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$12.2229$",
      "$23.4000$",
      "$149.4000$",
      "$225.0000$",
      "$300.6000$"
    ],
    "answer": 2,
    "solution": [
      "Cov(X,Y)=ρ SD(X) SD(Y)=6.3.",
      "For aX+bY, variance is a²Var(X)+b²Var(Y)+2abCov(X,Y). Here the Y coefficient is negative.",
      "Var(2X-3Y)=4(6)²+9(3)²-12(6.3)=149.4."
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
      "Cov(X,Y)=ρ SD(X) SD(Y)=6.3."
    ],
    "verification": {
      "kind": "correlated-linear",
      "sx": 6,
      "sy": 3,
      "rho": 0.35,
      "a": 2,
      "b": -3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:34",
    "topicId": "mrv-b1-joint-moments",
    "family": "correlated-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "N is Poisson with mean 2. Only policies with N≤5 are retained. Calculate the conditional variance of N among retained policies. Round your answer to four decimal places.",
    "choices": [
      "$1.6729$",
      "$1.7010$",
      "$2.0000$",
      "$2.0337$",
      "$5.4128$"
    ],
    "answer": 1,
    "solution": [
      "The retained probability is 0.983436. Divide the restricted first and second raw-moment sums by this probability.",
      "The conditional moments are E[N]=1.926606 and E[N²]=5.412844.",
      "The conditional variance is 5.412844-(1.926606)²=1.701035."
    ],
    "feedback": {
      "0": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "2": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "3": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance.",
      "4": "Renormalize both restricted raw moments and subtract the squared conditional mean; truncation does not merely rescale the unconditional variance."
    },
    "skills": [
      "truncated Poisson PMF",
      "conditional raw moments",
      "conditional variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: truncated Poisson PMF, conditional raw moments, conditional variance.",
      "The retained probability is 0.983436. Divide the restricted first and second raw-moment sums by this probability."
    ],
    "verification": {
      "kind": "poisson-truncated",
      "lam": 2.0,
      "upper": 5,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:35",
    "topicId": "mrv-b2-conditional-variance",
    "family": "poisson-truncated-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤5, and zero probability elsewhere. Calculate E[X given Y=3]. Round your answer to four decimal places.",
    "choices": [
      "$1.0000$",
      "$1.6667$",
      "$2.0000$",
      "$2.5000$",
      "$4.0000$"
    ],
    "answer": 0,
    "solution": [
      "At Y=3, the allowable X values are 0,1,…,2.",
      "The joint PMF is constant at these 3 points, so the conditional PMF is 1/3 at each value.",
      "The conditional mean is (5-3)/2=1."
    ],
    "feedback": {
      "1": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "2": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "3": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row.",
      "4": "Normalize the PMF on the conditional row; the unconditional marginal mean and full-support midpoint do not describe that row."
    },
    "skills": [
      "joint support row",
      "conditional PMF",
      "conditional first moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint support row, conditional PMF, conditional first moment.",
      "At Y=3, the allowable X values are 0,1,…,2."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 5,
      "y": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:36",
    "topicId": "mrv-b1-joint-moments",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "A policy has a permanent class H with probability 0.3, otherwise class L. Conditional on class, annual counts are independent Poisson variables with means 2.5 and 0.35, respectively. Given no claims in year 1, calculate the conditional variance of the year-2 count. Round your answer to four decimal places.",
    "choices": [
      "$0.2093$",
      "$0.4522$",
      "$0.6616$",
      "$0.8661$",
      "$1.9657$"
    ],
    "answer": 2,
    "solution": [
      "No-claim likelihoods update the H share to 0.047548 by Bayes.",
      "The posterior mean count, also the mean within-class Poisson variance, is 0.452228.",
      "Add posterior variance of the class rates 0.20934: Var(N₂ given N₁=0)=0.661569."
    ],
    "feedback": {
      "0": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "1": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "3": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior.",
      "4": "Update the class probabilities using the observed count, then add within-class and between-class variance under that posterior."
    },
    "skills": [
      "Bayes from a count observation",
      "conditional independence",
      "conditional total variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: Bayes from a count observation, conditional independence, conditional total variance.",
      "No-claim likelihoods update the H share to 0.047548 by Bayes."
    ],
    "verification": {
      "kind": "predictive-variance",
      "w": 0.3,
      "rates": [
        2.5,
        0.35
      ],
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:37",
    "topicId": "mrv-b2-conditional-variance",
    "family": "bayes-predictive-variance",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class A with probability 0.3 and class B otherwise. Conditional on class, annual claim count N is Poisson with mean 3 for A or 6 for B. Calculate Var(N) for a randomly selected insured. Round your answer to four decimal places.",
    "choices": [
      "$1.8900$",
      "$5.1000$",
      "$6.9900$",
      "$26.0100$",
      "$27.9000$"
    ],
    "answer": 2,
    "solution": [
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=5.1.",
      "The conditional means themselves vary: Var(E[N given class])=1.89.",
      "Total variance adds these two components, giving 6.99. The unconditional mixture is not Poisson."
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
      "Within-class variances equal their Poisson means, so E[Var(N given class)]=5.1."
    ],
    "verification": {
      "kind": "poisson-class",
      "w": 0.3,
      "rates": [
        3,
        6
      ],
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:38",
    "topicId": "mrv-b1-joint-moments",
    "family": "total-variance-mixture",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-b1-joint-moments"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+2), with k determined by normalization. Calculate Var(X given Y=1). Round your answer to four decimal places.",
    "choices": [
      "$-1.0696$",
      "$0.6489$",
      "$0.8000$",
      "$1.1333$",
      "$1.9333$"
    ],
    "answer": 1,
    "solution": [
      "On the Y=1 slice, the X weights are 4, 5, 6. Divide by their sum 15 to get the conditional PMF.",
      "The conditional first and second moments are 1.133333 and 1.933333.",
      "Conditional variance is 1.933333-(1.133333)²=0.648889."
    ],
    "feedback": {
      "0": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "2": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "3": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean.",
      "4": "Normalize the conditioning slice before computing both moments, then subtract the squared conditional mean."
    },
    "skills": [
      "conditional PMF",
      "conditional moments",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional PMF, conditional moments, variance.",
      "On the Y=1 slice, the X weights are 4, 5, 6. Divide by their sum 15 to get the conditional PMF."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 2,
      "y": 1,
      "target": "conditional-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-b:39",
    "topicId": "mrv-b2-conditional-variance",
    "family": "joint-table-conditional-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-b2-conditional-variance"
    ],
    "cumulative": false
  }
];

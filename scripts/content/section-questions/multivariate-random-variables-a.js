export default [
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+3y+1) for integers 0≤x≤4, 0≤y≤4; it is zero elsewhere. The constant c is unknown. Calculate P(X≥3). Round your answer to four decimal places.",
    "choices": [
      "$0.2333$",
      "$0.4667$",
      "$0.5333$",
      "$0.5867$",
      "$0.7333$"
    ],
    "answer": 1,
    "solution": [
      "Sum the joint weights over the 25 support cells, giving c=1/225.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 105 and 225. Their common normalizing factor cancels, giving 0.466667."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 25 support cells, giving c=1/225."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 4,
      "k": 3,
      "target": "marginal",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:0",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+1y+1) for integers 0≤x≤5, 0≤y≤5; it is zero elsewhere. The constant c is unknown. Calculate P(X≤1,Y≤1 given X+Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.0163$",
      "$0.0326$",
      "$0.1526$",
      "$0.5163$",
      "$0.9674$"
    ],
    "answer": 1,
    "solution": [
      "Sum the joint weights over the 36 support cells, giving c=1/216.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 7 and 215. Their common normalizing factor cancels, giving 0.032558."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 36 support cells, giving c=1/216."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 5,
      "k": 1,
      "target": "cdf",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:1",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "For x,y in {0,1,2}, the joint PMF is p(x,y)=k(x+2y+3), and it is zero elsewhere. Given X+Y≥2, calculate P(X>Y). Round your answer to four decimal places.",
    "choices": [
      "$0.2222$",
      "$0.2857$",
      "$0.2963$",
      "$0.7778$",
      "$1.0000$"
    ],
    "answer": 1,
    "solution": [
      "Normalizing all nine cells gives k=1/54.",
      "The conditioning region consists of the cells with x+y≥2; their unnormalized weights total 42. Within that region, cells satisfying x>y have total weight 12.",
      "The normalization constant cancels, so the conditional probability is 12/42=0.285714."
    ],
    "feedback": {
      "0": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "2": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "3": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "4": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement."
    },
    "skills": [
      "joint normalization",
      "nonrectangular event",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint normalization, nonrectangular event, conditioning.",
      "Normalizing all nine cells gives k=1/54."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 3,
      "target": "event"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:8",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-table-event",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 6 class-A, 7 class-B, and 7 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
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
        6,
        7,
        7
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:9",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+3) for x,y in {0,1,2}. Calculate Var(2X-1Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.6914$",
      "$1.0000$",
      "$3.2346$",
      "$3.3333$",
      "$4.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/54. Let T=2X-1Y and evaluate T in each joint cell.",
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
      "Normalize with k=1/54. Let T=2X-1Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 3,
      "a": 2,
      "b": -1,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:10",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+1), with k determined by normalization. Calculate Var(X given Y=2). Round your answer to four decimal places.",
    "choices": [
      "$-1.0247$",
      "$0.6543$",
      "$0.7778$",
      "$1.1111$",
      "$1.8889$"
    ],
    "answer": 1,
    "solution": [
      "On the Y=2 slice, the X weights are 5, 6, 7. Divide by their sum 18 to get the conditional PMF.",
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
      "On the Y=2 slice, the X weights are 5, 6, 7. Divide by their sum 18 to get the conditional PMF."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 1,
      "y": 2,
      "target": "conditional-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:11",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-table-conditional-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Integer-valued X and Y have joint PMF P(X=x,Y=y)=c for nonnegative integers satisfying x+y≤7, and zero otherwise. Calculate P(X-Y>1). Round your answer to four decimal places.",
    "choices": [
      "$0.1875$",
      "$0.3333$",
      "$0.4444$",
      "$0.5000$",
      "$0.6667$"
    ],
    "answer": 1,
    "solution": [
      "The triangular lattice contains (7+1)(7+2)/2=36 points, so c=1/36.",
      "There are 12 support points with x>y+1. The inequality is strict.",
      "The event probability is 12/36=0.333333."
    ],
    "feedback": {
      "0": "This uses the full square rather than the triangular support.",
      "2": "This includes the boundary x-y=t.",
      "3": "A positive threshold and excluded equality outcomes prevent a simple one-half answer.",
      "4": "This gives the complementary event."
    },
    "skills": [
      "joint discrete support",
      "PMF normalization",
      "strict difference event"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint discrete support, PMF normalization, strict difference event.",
      "The triangular lattice contains (7+1)(7+2)/2=36 points, so c=1/36."
    ],
    "verification": {
      "kind": "joint-discrete-triangle",
      "B": 7,
      "threshold": 1,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:12",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-discrete-triangle-event",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤8, and zero probability elsewhere. Calculate E[X given Y=3]. Round your answer to four decimal places.",
    "choices": [
      "$2.5000$",
      "$2.6667$",
      "$4.0000$",
      "$5.0000$",
      "$5.5000$"
    ],
    "answer": 0,
    "solution": [
      "At Y=3, the allowable X values are 0,1,…,5.",
      "The joint PMF is constant at these 6 points, so the conditional PMF is 1/6 at each value.",
      "The conditional mean is (8-3)/2=2.5."
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
      "At Y=3, the allowable X values are 0,1,…,5."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 8,
      "y": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:13",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤5, and zero probability elsewhere. Calculate E[X given Y=1]. Round your answer to four decimal places.",
    "choices": [
      "$1.6667$",
      "$2.0000$",
      "$2.5000$",
      "$3.0000$",
      "$4.0000$"
    ],
    "answer": 1,
    "solution": [
      "At Y=1, the allowable X values are 0,1,…,4.",
      "The joint PMF is constant at these 5 points, so the conditional PMF is 1/5 at each value.",
      "The conditional mean is (5-1)/2=2."
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
      "At Y=1, the allowable X values are 0,1,…,4."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 5,
      "y": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:14",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤10, and zero elsewhere. Calculate Var(X given Y=1). Round your answer to four decimal places.",
    "choices": [
      "$2.8723$",
      "$6.7500$",
      "$8.2500$",
      "$20.2500$",
      "$28.5000$"
    ],
    "answer": 2,
    "solution": [
      "Given Y=1, X is discrete uniform on the 10 integers 0 through 9.",
      "The conditional first moment is 4.5, and second moment is 28.5.",
      "Subtract the squared conditional mean: Var(X given Y=1)=9(9+2)/12=8.25."
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
      "Given Y=1, X is discrete uniform on the 10 integers 0 through 9."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-variance",
      "B": 10,
      "y": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:15",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+2y+1) for integers 0≤x≤2, 0≤y≤2; it is zero elsewhere. The constant c is unknown. Calculate P(X≥1 given Y=2). Round your answer to four decimal places.",
    "choices": [
      "$0.2778$",
      "$0.3611$",
      "$0.7222$",
      "$0.8422$",
      "$0.8611$"
    ],
    "answer": 2,
    "solution": [
      "Sum the joint weights over the 9 support cells, giving c=1/36.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 13 and 18. Their common normalizing factor cancels, giving 0.722222."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 9 support cells, giving c=1/36."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 2,
      "k": 2,
      "target": "conditional",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:2",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+3y+1) for integers 0≤x≤3, 0≤y≤3; it is zero elsewhere. The constant c is unknown. Calculate P(X≥2). Round your answer to four decimal places.",
    "choices": [
      "$0.2857$",
      "$0.4286$",
      "$0.5714$",
      "$0.6914$",
      "$0.7857$"
    ],
    "answer": 2,
    "solution": [
      "Sum the joint weights over the 16 support cells, giving c=1/112.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 64 and 112. Their common normalizing factor cancels, giving 0.571429."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 16 support cells, giving c=1/112."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 3,
      "k": 3,
      "target": "marginal",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:3",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "U is uniform on the integers 1 through 7. Errors E and F each take values ±√3 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=2(7-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-40.0000$",
      "$-14.0000$",
      "$-8.0000$",
      "$0.0000$",
      "$8.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 14 contributes zero covariance, leaving Cov(U,-2U)=-2Var(U).",
      "For this discrete uniform U, Var(U)=(49-1)/12. Thus Cov(X,Y)=-8."
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
      "a": 2,
      "noise": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:16",
    "topicId": "mrv-a1-joint-distributions",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Independent claim counts X and Y from two branches are Poisson with means 1.5 and 1. Given X+Y=5, calculate P(X≥2). Round your answer to four decimal places.",
    "choices": [
      "$0.0778$",
      "$0.4422$",
      "$0.6000$",
      "$0.9130$",
      "$0.9898$"
    ],
    "answer": 3,
    "solution": [
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.6.",
      "The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n=5.",
      "Evaluate 1-(1-p)^5-5p(1-p)^4=0.91296."
    ],
    "feedback": {
      "0": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "1": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "2": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "4": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail."
    },
    "skills": [
      "independent Poisson totals",
      "conditional binomial",
      "tail probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent Poisson totals, conditional binomial, tail probability.",
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.6."
    ],
    "verification": {
      "kind": "poisson-split",
      "a": 1.5,
      "b": 1.0,
      "n": 5,
      "target": "atleast2"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:17",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "poisson-split-condition",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, the joint PMF is p(x,y)=k(x+2y+1), and it is zero elsewhere. Given X+Y≥2, calculate P(X>Y). Round your answer to four decimal places.",
    "choices": [
      "$0.2222$",
      "$0.2667$",
      "$0.2778$",
      "$0.3390$",
      "$0.8333$"
    ],
    "answer": 1,
    "solution": [
      "Normalizing all nine cells gives k=1/36.",
      "The conditioning region consists of the cells with x+y≥2; their unnormalized weights total 30. Within that region, cells satisfying x>y have total weight 8.",
      "The normalization constant cancels, so the conditional probability is 8/30=0.266667."
    ],
    "feedback": {
      "0": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "2": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
      "4": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement."
    },
    "skills": [
      "joint normalization",
      "nonrectangular event",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint normalization, nonrectangular event, conditioning.",
      "Normalizing all nine cells gives k=1/36."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 1,
      "target": "event"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:18",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-table-event",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 6 class-A, 6 class-B, and 6 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.3068$",
      "$0.6136$",
      "$0.7500$",
      "$0.7955$",
      "$1.5000$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X=2 leaves three sampled files drawn from the 12 non-A files, of which 6 are B.",
      "The conditional Y distribution is hypergeometric with population 12, success count 6, and sample size 3.",
      "Its variance is 3(6/12)(1-6/12)(12-3)/(12-1)=0.613636."
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
      "Conditioning on X=2 leaves three sampled files drawn from the 12 non-A files, of which 6 are B."
    ],
    "verification": {
      "kind": "conditional-hypergeom",
      "groups": [
        6,
        6,
        6
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:19",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+4) for x,y in {0,1,2}. Calculate Var(2X-1Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.6848$",
      "$1.0000$",
      "$3.2608$",
      "$3.3333$",
      "$4.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/63. Let T=2X-1Y and evaluate T in each joint cell.",
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
      "Normalize with k=1/63. Let T=2X-1Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 4,
      "a": 2,
      "b": -1,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:20",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+4), with k determined by normalization. Calculate Var(X given Y=1). Round your answer to four decimal places.",
    "choices": [
      "$-0.9932$",
      "$0.6576$",
      "$0.7619$",
      "$1.0952$",
      "$1.8571$"
    ],
    "answer": 1,
    "solution": [
      "On the Y=1 slice, the X weights are 6, 7, 8. Divide by their sum 21 to get the conditional PMF.",
      "The conditional first and second moments are 1.095238 and 1.857143.",
      "Conditional variance is 1.857143-(1.095238)²=0.657596."
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
      "On the Y=1 slice, the X weights are 6, 7, 8. Divide by their sum 21 to get the conditional PMF."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 4,
      "y": 1,
      "target": "conditional-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:21",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-table-conditional-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Integer-valued X and Y have joint PMF P(X=x,Y=y)=c for nonnegative integers satisfying x+y≤9, and zero otherwise. Calculate P(X-Y>1). Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.3636$",
      "$0.4545$",
      "$0.5000$",
      "$0.6364$"
    ],
    "answer": 1,
    "solution": [
      "The triangular lattice contains (9+1)(9+2)/2=55 points, so c=1/55.",
      "There are 20 support points with x>y+1. The inequality is strict.",
      "The event probability is 20/55=0.363636."
    ],
    "feedback": {
      "0": "This uses the full square rather than the triangular support.",
      "2": "This includes the boundary x-y=t.",
      "3": "A positive threshold and excluded equality outcomes prevent a simple one-half answer.",
      "4": "This gives the complementary event."
    },
    "skills": [
      "joint discrete support",
      "PMF normalization",
      "strict difference event"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint discrete support, PMF normalization, strict difference event.",
      "The triangular lattice contains (9+1)(9+2)/2=55 points, so c=1/55."
    ],
    "verification": {
      "kind": "joint-discrete-triangle",
      "B": 9,
      "threshold": 1,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:22",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-discrete-triangle-event",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤10, and zero probability elsewhere. Calculate E[X given Y=3]. Round your answer to four decimal places.",
    "choices": [
      "$3.3333$",
      "$3.5000$",
      "$5.0000$",
      "$6.5000$",
      "$7.0000$"
    ],
    "answer": 1,
    "solution": [
      "At Y=3, the allowable X values are 0,1,…,7.",
      "The joint PMF is constant at these 8 points, so the conditional PMF is 1/8 at each value.",
      "The conditional mean is (10-3)/2=3.5."
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
      "At Y=3, the allowable X values are 0,1,…,7."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 10,
      "y": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:23",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+1y+1) for integers 0≤x≤4, 0≤y≤4; it is zero elsewhere. The constant c is unknown. Calculate P(X≤1,Y≤1 given X+Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.0282$",
      "$0.0565$",
      "$0.1765$",
      "$0.5282$",
      "$0.9435$"
    ],
    "answer": 1,
    "solution": [
      "Sum the joint weights over the 25 support cells, giving c=1/125.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 7 and 124. Their common normalizing factor cancels, giving 0.056452."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 25 support cells, giving c=1/125."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 4,
      "k": 1,
      "target": "cdf",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:4",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+2y+1) for integers 0≤x≤5, 0≤y≤5; it is zero elsewhere. The constant c is unknown. Calculate P(X≥1 given Y=5). Round your answer to four decimal places.",
    "choices": [
      "$0.1358$",
      "$0.4321$",
      "$0.8642$",
      "$0.9321$",
      "$0.9842$"
    ],
    "answer": 2,
    "solution": [
      "Sum the joint weights over the 36 support cells, giving c=1/306.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 70 and 81. Their common normalizing factor cancels, giving 0.864198."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 36 support cells, giving c=1/306."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 5,
      "k": 2,
      "target": "conditional",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:5",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤7, and zero probability elsewhere. Calculate E[X given Y=1]. Round your answer to four decimal places.",
    "choices": [
      "$2.3333$",
      "$3.0000$",
      "$3.5000$",
      "$4.0000$",
      "$6.0000$"
    ],
    "answer": 1,
    "solution": [
      "At Y=1, the allowable X values are 0,1,…,6.",
      "The joint PMF is constant at these 7 points, so the conditional PMF is 1/7 at each value.",
      "The conditional mean is (7-1)/2=3."
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
      "At Y=1, the allowable X values are 0,1,…,6."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 7,
      "y": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:24",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤12, and zero elsewhere. Calculate Var(X given Y=1). Round your answer to four decimal places.",
    "choices": [
      "$3.4521$",
      "$10.0833$",
      "$11.9167$",
      "$30.2500$",
      "$42.1667$"
    ],
    "answer": 2,
    "solution": [
      "Given Y=1, X is discrete uniform on the 12 integers 0 through 11.",
      "The conditional first moment is 5.5, and second moment is 42.166667.",
      "Subtract the squared conditional mean: Var(X given Y=1)=11(11+2)/12=11.916667."
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
      "Given Y=1, X is discrete uniform on the 12 integers 0 through 11."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-variance",
      "B": 12,
      "y": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:25",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 3. Errors E and F each take values ±√3 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=3(3-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-14.0000$",
      "$-11.0000$",
      "$-2.0000$",
      "$0.0000$",
      "$2.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 9 contributes zero covariance, leaving Cov(U,-3U)=-3Var(U).",
      "For this discrete uniform U, Var(U)=(9-1)/12. Thus Cov(X,Y)=-2."
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
      "a": 3,
      "noise": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:26",
    "topicId": "mrv-a1-joint-distributions",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Independent claim counts X and Y from two branches are Poisson with means 1.8 and 0.8. Given X+Y=6, calculate P(X≥2). Round your answer to four decimal places.",
    "choices": [
      "$0.1101$",
      "$0.5372$",
      "$0.6923$",
      "$0.9877$",
      "$0.9992$"
    ],
    "answer": 3,
    "solution": [
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.692308.",
      "The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n=6.",
      "Evaluate 1-(1-p)^6-6p(1-p)^5=0.987695."
    ],
    "feedback": {
      "0": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "1": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "2": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "4": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail."
    },
    "skills": [
      "independent Poisson totals",
      "conditional binomial",
      "tail probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent Poisson totals, conditional binomial, tail probability.",
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.692308."
    ],
    "verification": {
      "kind": "poisson-split",
      "a": 1.7999999999999998,
      "b": 0.8,
      "n": 6,
      "target": "atleast2"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:27",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "poisson-split-condition",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, the joint PMF is p(x,y)=k(x+2y+2), and it is zero elsewhere. Given X+Y≥2, calculate P(X>Y). Round your answer to four decimal places.",
    "choices": [
      "$0.2222$",
      "$0.2778$",
      "$0.2889$",
      "$0.3520$",
      "$0.8000$"
    ],
    "answer": 1,
    "solution": [
      "Normalizing all nine cells gives k=1/45.",
      "The conditioning region consists of the cells with x+y≥2; their unnormalized weights total 36. Within that region, cells satisfying x>y have total weight 10.",
      "The normalization constant cancels, so the conditional probability is 10/36=0.277778."
    ],
    "feedback": {
      "0": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "2": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
      "4": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement."
    },
    "skills": [
      "joint normalization",
      "nonrectangular event",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint normalization, nonrectangular event, conditioning.",
      "Normalizing all nine cells gives k=1/45."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 2,
      "target": "event"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:28",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-table-event",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 4 class-A, 6 class-B, and 6 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.3068$",
      "$0.6136$",
      "$0.7500$",
      "$0.7955$",
      "$1.5000$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X=2 leaves three sampled files drawn from the 12 non-A files, of which 6 are B.",
      "The conditional Y distribution is hypergeometric with population 12, success count 6, and sample size 3.",
      "Its variance is 3(6/12)(1-6/12)(12-3)/(12-1)=0.613636."
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
      "Conditioning on X=2 leaves three sampled files drawn from the 12 non-A files, of which 6 are B."
    ],
    "verification": {
      "kind": "conditional-hypergeom",
      "groups": [
        4,
        6,
        6
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:29",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "p(x,y)=k(x+2y+1) for x,y in {0,1,2}. Calculate Var(2X-2Y). Independence is not assumed. Round your answer to four decimal places.",
    "choices": [
      "$0.1111$",
      "$0.1667$",
      "$4.7778$",
      "$5.2222$",
      "$5.3333$"
    ],
    "answer": 3,
    "solution": [
      "Normalize with k=1/36. Let T=2X-2Y and evaluate T in each joint cell.",
      "Weighting those values gives E[T]=-0.333333 and E[T²]=5.333333.",
      "Var(T)=E[T²]-(E[T])²=5.222222. Equivalently, include the signed covariance term in the linear-combination formula."
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
      "Normalize with k=1/36. Let T=2X-2Y and evaluate T in each joint cell."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 1,
      "a": 2,
      "b": -2,
      "target": "linear-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:30",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-linear-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, p(x,y)=k(x+2y+6), with k determined by normalization. Calculate Var(X given Y=1). Round your answer to four decimal places.",
    "choices": [
      "$-0.9520$",
      "$0.6612$",
      "$0.7407$",
      "$1.0741$",
      "$1.8148$"
    ],
    "answer": 1,
    "solution": [
      "On the Y=1 slice, the X weights are 8, 9, 10. Divide by their sum 27 to get the conditional PMF.",
      "The conditional first and second moments are 1.074074 and 1.814815.",
      "Conditional variance is 1.814815-(1.074074)²=0.66118."
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
      "On the Y=1 slice, the X weights are 8, 9, 10. Divide by their sum 27 to get the conditional PMF."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 6,
      "y": 1,
      "target": "conditional-variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:31",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-table-conditional-moment",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+3y+1) for integers 0≤x≤2, 0≤y≤2; it is zero elsewhere. The constant c is unknown. Calculate P(X≥1). Round your answer to four decimal places.",
    "choices": [
      "$0.2667$",
      "$0.3667$",
      "$0.7333$",
      "$0.8533$",
      "$0.8667$"
    ],
    "answer": 2,
    "solution": [
      "Sum the joint weights over the 9 support cells, giving c=1/45.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 33 and 45. Their common normalizing factor cancels, giving 0.733333."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 9 support cells, giving c=1/45."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 2,
      "k": 3,
      "target": "marginal",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:6",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "Two claim counts X,Y have joint mass p(x,y)=c(x+1y+1) for integers 0≤x≤3, 0≤y≤3; it is zero elsewhere. The constant c is unknown. Calculate P(X≤1,Y≤1 given X+Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.0556$",
      "$0.1111$",
      "$0.2311$",
      "$0.5556$",
      "$0.8889$"
    ],
    "answer": 1,
    "solution": [
      "Sum the joint weights over the 16 support cells, giving c=1/64.",
      "For a joint CDF, add cells in its lower-left rectangle. For a marginal add across the other variable; for a conditional restrict the denominator to the stated row or event.",
      "The numerator and denominator weights are 7 and 63. Their common normalizing factor cancels, giving 0.111111."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint PMF normalization",
      "joint CDF and marginals",
      "conditional distributions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint PMF normalization, joint CDF and marginals, conditional distributions.",
      "Sum the joint weights over the 16 support cells, giving c=1/64."
    ],
    "verification": {
      "kind": "section-joint",
      "n": 3,
      "k": 1,
      "target": "cdf",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:7",
    "topicId": "mrv-a1-joint-distributions",
    "family": "cumulative-multivariate-random-variables-a",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions",
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": true
  },
  {
    "question": "Integer-valued X and Y have joint PMF P(X=x,Y=y)=c for nonnegative integers satisfying x+y≤5, and zero otherwise. Calculate P(X-Y>2). Round your answer to four decimal places.",
    "choices": [
      "$0.1111$",
      "$0.1905$",
      "$0.2857$",
      "$0.5000$",
      "$0.8095$"
    ],
    "answer": 1,
    "solution": [
      "The triangular lattice contains (5+1)(5+2)/2=21 points, so c=1/21.",
      "There are 4 support points with x>y+2. The inequality is strict.",
      "The event probability is 4/21=0.190476."
    ],
    "feedback": {
      "0": "This uses the full square rather than the triangular support.",
      "2": "This includes the boundary x-y=t.",
      "3": "A positive threshold and excluded equality outcomes prevent a simple one-half answer.",
      "4": "This gives the complementary event."
    },
    "skills": [
      "joint discrete support",
      "PMF normalization",
      "strict difference event"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint discrete support, PMF normalization, strict difference event.",
      "The triangular lattice contains (5+1)(5+2)/2=21 points, so c=1/21."
    ],
    "verification": {
      "kind": "joint-discrete-triangle",
      "B": 5,
      "threshold": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:32",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-discrete-triangle-event",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤12, and zero probability elsewhere. Calculate E[X given Y=3]. Round your answer to four decimal places.",
    "choices": [
      "$4.0000$",
      "$4.5000$",
      "$6.0000$",
      "$7.5000$",
      "$9.0000$"
    ],
    "answer": 1,
    "solution": [
      "At Y=3, the allowable X values are 0,1,…,9.",
      "The joint PMF is constant at these 10 points, so the conditional PMF is 1/10 at each value.",
      "The conditional mean is (12-3)/2=4.5."
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
      "At Y=3, the allowable X values are 0,1,…,9."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 12,
      "y": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:33",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have equal joint probability at every pair of nonnegative integers with x+y≤9, and zero probability elsewhere. Calculate E[X given Y=1]. Round your answer to four decimal places.",
    "choices": [
      "$3.0000$",
      "$4.0000$",
      "$4.5000$",
      "$5.0000$",
      "$8.0000$"
    ],
    "answer": 1,
    "solution": [
      "At Y=1, the allowable X values are 0,1,…,8.",
      "The joint PMF is constant at these 9 points, so the conditional PMF is 1/9 at each value.",
      "The conditional mean is (9-1)/2=4."
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
      "At Y=1, the allowable X values are 0,1,…,8."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-mean",
      "B": 9,
      "y": 1,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:34",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "X and Y have a constant joint PMF on nonnegative integer pairs satisfying x+y≤6, and zero elsewhere. Calculate Var(X given Y=2). Round your answer to four decimal places.",
    "choices": [
      "$1.3333$",
      "$1.4142$",
      "$2.0000$",
      "$4.0000$",
      "$6.0000$"
    ],
    "answer": 2,
    "solution": [
      "Given Y=2, X is discrete uniform on the 5 integers 0 through 4.",
      "The conditional first moment is 2, and second moment is 6.",
      "Subtract the squared conditional mean: Var(X given Y=2)=4(4+2)/12=2."
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
      "Given Y=2, X is discrete uniform on the 5 integers 0 through 4."
    ],
    "verification": {
      "kind": "joint-discrete-triangle-variance",
      "B": 6,
      "y": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:35",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "joint-discrete-triangle-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "U is uniform on the integers 1 through 5. Errors E and F each take values ±√3 with equal probability. U, E, and F are mutually independent. Measurements are X=U+E and Y=3(5-U)+F. Calculate Cov(X,Y). Round your answer to four decimal places.",
    "choices": [
      "$-33.0000$",
      "$-15.0000$",
      "$-6.0000$",
      "$0.0000$",
      "$6.0000$"
    ],
    "answer": 2,
    "solution": [
      "Expand the covariance using bilinearity. Cross terms involving independent errors vanish.",
      "The constant term 15 contributes zero covariance, leaving Cov(U,-3U)=-3Var(U).",
      "For this discrete uniform U, Var(U)=(25-1)/12. Thus Cov(X,Y)=-6."
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
      "a": 3,
      "noise": 3,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:36",
    "topicId": "mrv-a1-joint-distributions",
    "family": "shared-discrete-covariance",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "Independent claim counts X and Y from two branches are Poisson with means 1.5 and 0.6. Given X+Y=5, calculate P(X≥2). Round your answer to four decimal places.",
    "choices": [
      "$0.1859$",
      "$0.4422$",
      "$0.7143$",
      "$0.9743$",
      "$0.9981$"
    ],
    "answer": 3,
    "solution": [
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.714286.",
      "The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n=5.",
      "Evaluate 1-(1-p)^5-5p(1-p)^4=0.974296."
    ],
    "feedback": {
      "0": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "1": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "2": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail.",
      "4": "Conditioning on the total changes the count distribution to binomial; remove both zero and one for the requested tail."
    },
    "skills": [
      "independent Poisson totals",
      "conditional binomial",
      "tail probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent Poisson totals, conditional binomial, tail probability.",
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.714286."
    ],
    "verification": {
      "kind": "poisson-split",
      "a": 1.5,
      "b": 0.6,
      "n": 5,
      "target": "atleast2"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:37",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "poisson-split-condition",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "For x,y in {0,1,2}, the joint PMF is p(x,y)=k(x+2y+6), and it is zero elsewhere. Given X+Y≥2, calculate P(X>Y). Round your answer to four decimal places.",
    "choices": [
      "$0.2222$",
      "$0.3000$",
      "$0.3086$",
      "$0.7407$",
      "$0.8571$"
    ],
    "answer": 1,
    "solution": [
      "Normalizing all nine cells gives k=1/81.",
      "The conditioning region consists of the cells with x+y≥2; their unnormalized weights total 60. Within that region, cells satisfying x>y have total weight 18.",
      "The normalization constant cancels, so the conditional probability is 18/60=0.3."
    ],
    "feedback": {
      "0": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "2": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "3": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement.",
      "4": "Enumerate the intersection with the conditioning region and normalize by that region, not the full joint table or its complement."
    },
    "skills": [
      "joint normalization",
      "nonrectangular event",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint normalization, nonrectangular event, conditioning.",
      "Normalizing all nine cells gives k=1/81."
    ],
    "verification": {
      "kind": "joint-grid",
      "c": 6,
      "target": "event"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:38",
    "topicId": "mrv-a1-joint-distributions",
    "family": "joint-table-event",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-a1-joint-distributions"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 6 class-A, 7 class-B, and 5 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.3480$",
      "$0.5966$",
      "$0.7292$",
      "$0.7734$",
      "$1.7500$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X=2 leaves three sampled files drawn from the 12 non-A files, of which 7 are B.",
      "The conditional Y distribution is hypergeometric with population 12, success count 7, and sample size 3.",
      "Its variance is 3(7/12)(1-7/12)(12-3)/(12-1)=0.596591."
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
      "Conditioning on X=2 leaves three sampled files drawn from the 12 non-A files, of which 7 are B."
    ],
    "verification": {
      "kind": "conditional-hypergeom",
      "groups": [
        6,
        7,
        5
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-a:39",
    "topicId": "mrv-a2-conditional-distributions",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-a2-conditional-distributions"
    ],
    "cumulative": false
  }
];

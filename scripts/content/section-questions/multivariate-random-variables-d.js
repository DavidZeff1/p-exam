export default [
  {
    "question": "8 independent losses are each uniform on (0,1749). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate E[V-U given U>349.8]. Round your answer to four decimal places.",
    "choices": [
      "$544.1333$",
      "$870.6133$",
      "$1088.2667$",
      "$1305.9200$",
      "$2176.5333$"
    ],
    "answer": 2,
    "solution": [
      "Given U>349.8, every loss lies in (349.8,1749); independence is retained under this product event.",
      "The conditional chance a loss is below 1031.91 is r=0.4875. The maximum event requires all 8 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1749-349.8)(8-1)/(8+1). Evaluate the appropriate order-statistic quantity to obtain 1088.266667."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>349.8, every loss lies in (349.8,1749); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 8,
      "B": 1749,
      "a": 349.8,
      "b": 1031.9099999999999,
      "target": "range",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:0",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "9 independent losses are each uniform on (0,1750). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate P(V<1050 given U>350). Round your answer to four decimal places.",
    "choices": [
      "$0.0010$",
      "$0.0020$",
      "$0.1220$",
      "$0.5010$",
      "$0.9980$"
    ],
    "answer": 1,
    "solution": [
      "Given U>350, every loss lies in (350,1750); independence is retained under this product event.",
      "The conditional chance a loss is below 1050 is r=0.5. The maximum event requires all 9 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1750-350)(9-1)/(9+1). Evaluate the appropriate order-statistic quantity to obtain 0.001953."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>350, every loss lies in (350,1750); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 9,
      "B": 1750,
      "a": 350.0,
      "b": 1050.0,
      "target": "maximum",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:1",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "4 independent observations are uniform on (0,13). Let U and V be their minimum and maximum. Calculate P(V-U<4). Round your answer to four decimal places.",
    "choices": [
      "$0.0090$",
      "$0.0291$",
      "$0.0896$",
      "$0.1165$",
      "$0.9104$"
    ],
    "answer": 2,
    "solution": [
      "The joint min–max density is n(n-1)(v-u)^(n-2)/13^4 on 0<u<v<13.",
      "Integrate over the band v-u<4. Equivalently, integrate the range density n(n-1)r^(n-2)(13-r)/13^4 from 0 to 4.",
      "The result is n(4/13)^(n-1)-(n-1)(4/13)^n=0.089633."
    ],
    "feedback": {
      "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
    },
    "skills": [
      "joint order statistics",
      "integration over a band"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint order statistics, integration over a band.",
      "The joint min–max density is n(n-1)(v-u)^(n-2)/13^4 on 0<u<v<13."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 4,
      "B": 13,
      "r": 4,
      "target": "range"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:8",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-range",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "7 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.7. Round your answer to four decimal places.",
    "choices": [
      "$0.0373$",
      "$0.6250$",
      "$0.9260$",
      "$0.9712$",
      "$0.9990$"
    ],
    "answer": 2,
    "solution": [
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.7 with conditional probability (0.7-0.2)/(1-0.2)=0.625.",
      "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
      "Sum the binomial probabilities from 3 through 7; the result is 0.925958."
    ],
    "feedback": {
      "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "1": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
    },
    "skills": [
      "condition order statistics",
      "rank-to-count conversion",
      "binomial tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.7 with conditional probability (0.7-0.2)/(1-0.2)=0.625."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 7,
      "rank": 3,
      "a": 0.2,
      "b": 0.7,
      "target": "conditional-rank"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:9",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-rank-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent component lifetimes are exponential with mean 3. T is the time of the second failure. Calculate P(T≤3). Round your answer to four decimal places.",
    "choices": [
      "$0.0646$",
      "$0.1989$",
      "$0.3996$",
      "$0.9354$",
      "$0.9933$"
    ],
    "answer": 3,
    "solution": [
      "Each component fails by time 3 with probability 1-exp(-3/3)=0.632121.",
      "The number of failures by time 3 is binomial with n=5 and p=0.632121. The second failure has occurred exactly when this count is at least two.",
      "Remove zero and one failures: 1-(1-p)^5-5p(1-p)^4=0.935374."
    ],
    "feedback": {
      "0": "This is the probability the second failure is still in the future.",
      "1": "This counts exactly two failures and excludes three or more.",
      "2": "This requires two specified components to fail rather than the second order statistic.",
      "4": "This is the time of the first failure."
    },
    "skills": [
      "order-statistic event",
      "binomial count representation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: order-statistic event, binomial count representation.",
      "Each component fails by time 3 with probability 1-exp(-3/3)=0.632121."
    ],
    "verification": {
      "kind": "order-exponential",
      "n": 5,
      "mu": 3,
      "threshold": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:10",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-second-exponential",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent values are uniform on (0,13). Let X_(4) be the 4th smallest value. Calculate E[X_(4)]. Round your answer to four decimal places.",
    "choices": [
      "$2.1667$",
      "$4.3333$",
      "$6.5000$",
      "$8.6667$",
      "$10.4000$"
    ],
    "answer": 3,
    "solution": [
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^1 on (0,1).",
      "This is beta(4,2), with mean 4/(5+1).",
      "Rescale: E[X_(4)]=13×4/6=8.666667."
    ],
    "feedback": {
      "0": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
      "1": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
      "2": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
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
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^1 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 5,
      "rank": 4,
      "B": 13,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:11",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 7 and 7 years. A device fails when either component fails. Given that the device has survived 5 years, calculate the probability it survives at least another 5 years. Round your answer to four decimal places.",
    "choices": [
      "$0.0574$",
      "$0.2397$",
      "$0.4895$",
      "$0.6997$",
      "$0.7603$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/7+1/7. It is memoryless.",
      "Conditional survival for another 5 years is exp[-5(1/7+1/7)]=0.239651."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "2": "Both components must survive, not just component 1.",
      "3": "Means do not add for a minimum lifetime; failure rates add.",
      "4": "This gives failure during the additional interval."
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
        7,
        7
      ],
      "t": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:12",
    "topicId": "mrv-d1-order-statistics",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent observations are uniform on (0,10). Let U and V be their minimum and maximum. Calculate P(V-U<3). Round your answer to four decimal places.",
    "choices": [
      "$0.0024$",
      "$0.0081$",
      "$0.0308$",
      "$0.0405$",
      "$0.9692$"
    ],
    "answer": 2,
    "solution": [
      "The joint min–max density is n(n-1)(v-u)^(n-2)/10^5 on 0<u<v<10.",
      "Integrate over the band v-u<3. Equivalently, integrate the range density n(n-1)r^(n-2)(10-r)/10^5 from 0 to 3.",
      "The result is n(3/10)^(n-1)-(n-1)(3/10)^n=0.03078."
    ],
    "feedback": {
      "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
    },
    "skills": [
      "joint order statistics",
      "integration over a band"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint order statistics, integration over a band.",
      "The joint min–max density is n(n-1)(v-u)^(n-2)/10^5 on 0<u<v<10."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 5,
      "B": 10,
      "r": 3,
      "target": "range"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:13",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-range",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.6. Round your answer to four decimal places.",
    "choices": [
      "$0.0312$",
      "$0.5000$",
      "$0.6120$",
      "$0.6826$",
      "$0.9688$"
    ],
    "answer": 1,
    "solution": [
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.6 with conditional probability (0.6-0.2)/(1-0.2)=0.5.",
      "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
      "Sum the binomial probabilities from 3 through 5; the result is 0.5."
    ],
    "feedback": {
      "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "2": "Recheck the setup and the requested quantity before evaluating the formula.",
      "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
    },
    "skills": [
      "condition order statistics",
      "rank-to-count conversion",
      "binomial tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.6 with conditional probability (0.6-0.2)/(1-0.2)=0.5."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 5,
      "rank": 3,
      "a": 0.2,
      "b": 0.6,
      "target": "conditional-rank"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:14",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-rank-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent component lifetimes are exponential with mean 8. T is the time of the second failure. Calculate P(T≤6). Round your answer to four decimal places.",
    "choices": [
      "$0.1549$",
      "$0.2784$",
      "$0.2934$",
      "$0.8451$",
      "$0.9765$"
    ],
    "answer": 3,
    "solution": [
      "Each component fails by time 6 with probability 1-exp(-6/8)=0.527633.",
      "The number of failures by time 6 is binomial with n=5 and p=0.527633. The second failure has occurred exactly when this count is at least two.",
      "Remove zero and one failures: 1-(1-p)^5-5p(1-p)^4=0.845136."
    ],
    "feedback": {
      "0": "This is the probability the second failure is still in the future.",
      "1": "This requires two specified components to fail rather than the second order statistic.",
      "2": "This counts exactly two failures and excludes three or more.",
      "4": "This is the time of the first failure."
    },
    "skills": [
      "order-statistic event",
      "binomial count representation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: order-statistic event, binomial count representation.",
      "Each component fails by time 6 with probability 1-exp(-6/8)=0.527633."
    ],
    "verification": {
      "kind": "order-exponential",
      "n": 5,
      "mu": 8,
      "threshold": 6,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:15",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-second-exponential",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "10 independent losses are each uniform on (0,1751). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate P(W>1068.11 given U>350.2). Round your answer to four decimal places.",
    "choices": [
      "$0.0044$",
      "$0.0087$",
      "$0.1287$",
      "$0.5044$",
      "$0.9913$"
    ],
    "answer": 1,
    "solution": [
      "Given U>350.2, every loss lies in (350.2,1751); independence is retained under this product event.",
      "The conditional chance a loss is below 1068.11 is r=0.5125. The maximum event requires all 10 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1751-350.2)(10-1)/(10+1). Evaluate the appropriate order-statistic quantity to obtain 0.008728."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>350.2, every loss lies in (350.2,1751); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 10,
      "B": 1751,
      "a": 350.20000000000005,
      "b": 1068.11,
      "target": "second",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:2",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "4 independent losses are each uniform on (0,1752). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate E[V-U given U>350.4]. Round your answer to four decimal places.",
    "choices": [
      "$420.4800$",
      "$672.7680$",
      "$840.9600$",
      "$1009.1520$",
      "$1681.9200$"
    ],
    "answer": 2,
    "solution": [
      "Given U>350.4, every loss lies in (350.4,1752); independence is retained under this product event.",
      "The conditional chance a loss is below 1086.24 is r=0.525. The maximum event requires all 4 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1752-350.4)(4-1)/(4+1). Evaluate the appropriate order-statistic quantity to obtain 840.96."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>350.4, every loss lies in (350.4,1752); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 4,
      "B": 1752,
      "a": 350.40000000000003,
      "b": 1086.24,
      "target": "range",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:3",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "6 independent values are uniform on (0,13). Let X_(4) be the 4th smallest value. Calculate E[X_(4)]. Round your answer to four decimal places.",
    "choices": [
      "$1.8571$",
      "$5.5714$",
      "$6.5000$",
      "$7.4286$",
      "$8.6667$"
    ],
    "answer": 3,
    "solution": [
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^2 on (0,1).",
      "This is beta(4,3), with mean 4/(6+1).",
      "Rescale: E[X_(4)]=13×4/7=7.428571."
    ],
    "feedback": {
      "0": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
      "1": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
      "2": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
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
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^2 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 6,
      "rank": 4,
      "B": 13,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:16",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 5 and 8 years. A device fails when either component fails. Given that the device has survived 5 years, calculate the probability it survives at least another 5 years. Round your answer to four decimal places.",
    "choices": [
      "$0.0388$",
      "$0.1969$",
      "$0.3679$",
      "$0.6807$",
      "$0.8031$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/5+1/8. It is memoryless.",
      "Conditional survival for another 5 years is exp[-5(1/5+1/8)]=0.196912."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "2": "Both components must survive, not just component 1.",
      "3": "Means do not add for a minimum lifetime; failure rates add.",
      "4": "This gives failure during the additional interval."
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
      "t": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:17",
    "topicId": "mrv-d1-order-statistics",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent observations are uniform on (0,11). Let U and V be their minimum and maximum. Calculate P(V-U<4). Round your answer to four decimal places.",
    "choices": [
      "$0.0023$",
      "$0.0064$",
      "$0.0266$",
      "$0.0381$",
      "$0.9734$"
    ],
    "answer": 2,
    "solution": [
      "The joint min–max density is n(n-1)(v-u)^(n-2)/11^6 on 0<u<v<11.",
      "Integrate over the band v-u<4. Equivalently, integrate the range density n(n-1)r^(n-2)(11-r)/11^6 from 0 to 4.",
      "The result is n(4/11)^(n-1)-(n-1)(4/11)^n=0.026589."
    ],
    "feedback": {
      "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
    },
    "skills": [
      "joint order statistics",
      "integration over a band"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint order statistics, integration over a band.",
      "The joint min–max density is n(n-1)(v-u)^(n-2)/11^6 on 0<u<v<11."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 6,
      "B": 11,
      "r": 4,
      "target": "range"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:18",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-range",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.6. Round your answer to four decimal places.",
    "choices": [
      "$0.0156$",
      "$0.5000$",
      "$0.6562$",
      "$0.8208$",
      "$0.9844$"
    ],
    "answer": 2,
    "solution": [
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.6 with conditional probability (0.6-0.2)/(1-0.2)=0.5.",
      "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
      "Sum the binomial probabilities from 3 through 6; the result is 0.65625."
    ],
    "feedback": {
      "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "1": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
    },
    "skills": [
      "condition order statistics",
      "rank-to-count conversion",
      "binomial tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.6 with conditional probability (0.6-0.2)/(1-0.2)=0.5."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 6,
      "rank": 3,
      "a": 0.2,
      "b": 0.6,
      "target": "conditional-rank"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:19",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-rank-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent component lifetimes are exponential with mean 7. T is the time of the second failure. Calculate P(T≤5). Round your answer to four decimal places.",
    "choices": [
      "$0.1747$",
      "$0.2606$",
      "$0.3057$",
      "$0.8253$",
      "$0.9719$"
    ],
    "answer": 3,
    "solution": [
      "Each component fails by time 5 with probability 1-exp(-5/7)=0.510458.",
      "The number of failures by time 5 is binomial with n=5 and p=0.510458. The second failure has occurred exactly when this count is at least two.",
      "Remove zero and one failures: 1-(1-p)^5-5p(1-p)^4=0.8253."
    ],
    "feedback": {
      "0": "This is the probability the second failure is still in the future.",
      "1": "This requires two specified components to fail rather than the second order statistic.",
      "2": "This counts exactly two failures and excludes three or more.",
      "4": "This is the time of the first failure."
    },
    "skills": [
      "order-statistic event",
      "binomial count representation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: order-statistic event, binomial count representation.",
      "Each component fails by time 5 with probability 1-exp(-5/7)=0.510458."
    ],
    "verification": {
      "kind": "order-exponential",
      "n": 5,
      "mu": 7,
      "threshold": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:20",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-second-exponential",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "8 independent values are uniform on (0,15). Let X_(3) be the 3th smallest value. Calculate E[X_(3)]. Round your answer to four decimal places.",
    "choices": [
      "$1.6667$",
      "$5.0000$",
      "$5.6250$",
      "$7.5000$",
      "$10.0000$"
    ],
    "answer": 1,
    "solution": [
      "For Z=X_(3)/15, the order-statistic density is proportional to z^2(1-z)^5 on (0,1).",
      "This is beta(3,6), with mean 3/(8+1).",
      "Rescale: E[X_(3)]=15×3/9=5."
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
      "For Z=X_(3)/15, the order-statistic density is proportional to z^2(1-z)^5 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 8,
      "rank": 3,
      "B": 15,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:21",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 5 and 6 years. A device fails when either component fails. Given that the device has survived 4 years, calculate the probability it survives at least another 4 years. Round your answer to four decimal places.",
    "choices": [
      "$0.0532$",
      "$0.2307$",
      "$0.4493$",
      "$0.6951$",
      "$0.7693$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/5+1/6. It is memoryless.",
      "Conditional survival for another 4 years is exp[-4(1/5+1/6)]=0.230693."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "2": "Both components must survive, not just component 1.",
      "3": "Means do not add for a minimum lifetime; failure rates add.",
      "4": "This gives failure during the additional interval."
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
        6
      ],
      "t": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:22",
    "topicId": "mrv-d1-order-statistics",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "4 independent observations are uniform on (0,12). Let U and V be their minimum and maximum. Calculate P(V-U<3). Round your answer to four decimal places.",
    "choices": [
      "$0.0039$",
      "$0.0156$",
      "$0.0508$",
      "$0.0625$",
      "$0.9492$"
    ],
    "answer": 2,
    "solution": [
      "The joint min–max density is n(n-1)(v-u)^(n-2)/12^4 on 0<u<v<12.",
      "Integrate over the band v-u<3. Equivalently, integrate the range density n(n-1)r^(n-2)(12-r)/12^4 from 0 to 3.",
      "The result is n(3/12)^(n-1)-(n-1)(3/12)^n=0.050781."
    ],
    "feedback": {
      "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
    },
    "skills": [
      "joint order statistics",
      "integration over a band"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint order statistics, integration over a band.",
      "The joint min–max density is n(n-1)(v-u)^(n-2)/12^4 on 0<u<v<12."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 4,
      "B": 12,
      "r": 3,
      "target": "range"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:23",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-range",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent losses are each uniform on (0,1753). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate P(V<1104.39 given U>350.6). Round your answer to four decimal places.",
    "choices": [
      "$0.0224$",
      "$0.0449$",
      "$0.1649$",
      "$0.5224$",
      "$0.9551$"
    ],
    "answer": 1,
    "solution": [
      "Given U>350.6, every loss lies in (350.6,1753); independence is retained under this product event.",
      "The conditional chance a loss is below 1104.39 is r=0.5375. The maximum event requires all 5 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1753-350.6)(5-1)/(5+1). Evaluate the appropriate order-statistic quantity to obtain 0.044863."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>350.6, every loss lies in (350.6,1753); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 5,
      "B": 1753,
      "a": 350.6,
      "b": 1104.39,
      "target": "maximum",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:4",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "6 independent losses are each uniform on (0,1754). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate P(W>1122.56 given U>350.8). Round your answer to four decimal places.",
    "choices": [
      "$0.0346$",
      "$0.0692$",
      "$0.1892$",
      "$0.5346$",
      "$0.9308$"
    ],
    "answer": 1,
    "solution": [
      "Given U>350.8, every loss lies in (350.8,1754); independence is retained under this product event.",
      "The conditional chance a loss is below 1122.56 is r=0.55. The maximum event requires all 6 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1754-350.8)(6-1)/(6+1). Evaluate the appropriate order-statistic quantity to obtain 0.069198."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>350.8, every loss lies in (350.8,1754); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 6,
      "B": 1754,
      "a": 350.8,
      "b": 1122.56,
      "target": "second",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:5",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "5 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.7. Round your answer to four decimal places.",
    "choices": [
      "$0.0954$",
      "$0.6250$",
      "$0.7248$",
      "$0.8369$",
      "$0.9926$"
    ],
    "answer": 2,
    "solution": [
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.7 with conditional probability (0.7-0.2)/(1-0.2)=0.625.",
      "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
      "Sum the binomial probabilities from 3 through 5; the result is 0.724792."
    ],
    "feedback": {
      "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "1": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
    },
    "skills": [
      "condition order statistics",
      "rank-to-count conversion",
      "binomial tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.7 with conditional probability (0.7-0.2)/(1-0.2)=0.625."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 5,
      "rank": 3,
      "a": 0.2,
      "b": 0.7,
      "target": "conditional-rank"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:24",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-rank-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent component lifetimes are exponential with mean 6. T is the time of the second failure. Calculate P(T≤4). Round your answer to four decimal places.",
    "choices": [
      "$0.2047$",
      "$0.2368$",
      "$0.3204$",
      "$0.7953$",
      "$0.9643$"
    ],
    "answer": 3,
    "solution": [
      "Each component fails by time 4 with probability 1-exp(-4/6)=0.486583.",
      "The number of failures by time 4 is binomial with n=5 and p=0.486583. The second failure has occurred exactly when this count is at least two.",
      "Remove zero and one failures: 1-(1-p)^5-5p(1-p)^4=0.795279."
    ],
    "feedback": {
      "0": "This is the probability the second failure is still in the future.",
      "1": "This requires two specified components to fail rather than the second order statistic.",
      "2": "This counts exactly two failures and excludes three or more.",
      "4": "This is the time of the first failure."
    },
    "skills": [
      "order-statistic event",
      "binomial count representation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: order-statistic event, binomial count representation.",
      "Each component fails by time 4 with probability 1-exp(-4/6)=0.486583."
    ],
    "verification": {
      "kind": "order-exponential",
      "n": 5,
      "mu": 6,
      "threshold": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:25",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-second-exponential",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "8 independent values are uniform on (0,13). Let X_(4) be the 4th smallest value. Calculate E[X_(4)]. Round your answer to four decimal places.",
    "choices": [
      "$1.4444$",
      "$5.2000$",
      "$5.7778$",
      "$6.5000$",
      "$7.2222$"
    ],
    "answer": 2,
    "solution": [
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^4 on (0,1).",
      "This is beta(4,5), with mean 4/(8+1).",
      "Rescale: E[X_(4)]=13×4/9=5.777778."
    ],
    "feedback": {
      "0": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
      "1": "Use the rank-specific order-statistic distribution; its beta shape parameters sum to n+1, and the uniform endpoint rescales its mean.",
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
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^4 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 8,
      "rank": 4,
      "B": 13,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:26",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 5 and 9 years. A device fails when either component fails. Given that the device has survived 2 years, calculate the probability it survives at least another 2 years. Round your answer to four decimal places.",
    "choices": [
      "$0.2881$",
      "$0.4632$",
      "$0.5368$",
      "$0.6703$",
      "$0.8669$"
    ],
    "answer": 2,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/5+1/9. It is memoryless.",
      "Conditional survival for another 2 years is exp[-2(1/5+1/9)]=0.53675."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "1": "This gives failure during the additional interval.",
      "3": "Both components must survive, not just component 1.",
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
        9
      ],
      "t": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:27",
    "topicId": "mrv-d1-order-statistics",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent observations are uniform on (0,13). Let U and V be their minimum and maximum. Calculate P(V-U<4). Round your answer to four decimal places.",
    "choices": [
      "$0.0028$",
      "$0.0090$",
      "$0.0338$",
      "$0.0448$",
      "$0.9662$"
    ],
    "answer": 2,
    "solution": [
      "The joint min–max density is n(n-1)(v-u)^(n-2)/13^5 on 0<u<v<13.",
      "Integrate over the band v-u<4. Equivalently, integrate the range density n(n-1)r^(n-2)(13-r)/13^5 from 0 to 4.",
      "The result is n(4/13)^(n-1)-(n-1)(4/13)^n=0.033785."
    ],
    "feedback": {
      "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
    },
    "skills": [
      "joint order statistics",
      "integration over a band"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint order statistics, integration over a band.",
      "The joint min–max density is n(n-1)(v-u)^(n-2)/13^5 on 0<u<v<13."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 5,
      "B": 13,
      "r": 4,
      "target": "range"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:28",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-range",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.7. Round your answer to four decimal places.",
    "choices": [
      "$0.0596$",
      "$0.6250$",
      "$0.8535$",
      "$0.9295$",
      "$0.9972$"
    ],
    "answer": 2,
    "solution": [
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.7 with conditional probability (0.7-0.2)/(1-0.2)=0.625.",
      "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
      "Sum the binomial probabilities from 3 through 6; the result is 0.853539."
    ],
    "feedback": {
      "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "1": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
    },
    "skills": [
      "condition order statistics",
      "rank-to-count conversion",
      "binomial tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.7 with conditional probability (0.7-0.2)/(1-0.2)=0.625."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 6,
      "rank": 3,
      "a": 0.2,
      "b": 0.7,
      "target": "conditional-rank"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:29",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-rank-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent component lifetimes are exponential with mean 5. T is the time of the second failure. Calculate P(T≤3). Round your answer to four decimal places.",
    "choices": [
      "$0.2036$",
      "$0.2544$",
      "$0.3365$",
      "$0.7456$",
      "$0.9502$"
    ],
    "answer": 3,
    "solution": [
      "Each component fails by time 3 with probability 1-exp(-3/5)=0.451188.",
      "The number of failures by time 3 is binomial with n=5 and p=0.451188. The second failure has occurred exactly when this count is at least two.",
      "Remove zero and one failures: 1-(1-p)^5-5p(1-p)^4=0.745559."
    ],
    "feedback": {
      "0": "This requires two specified components to fail rather than the second order statistic.",
      "1": "This is the probability the second failure is still in the future.",
      "2": "This counts exactly two failures and excludes three or more.",
      "4": "This is the time of the first failure."
    },
    "skills": [
      "order-statistic event",
      "binomial count representation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: order-statistic event, binomial count representation.",
      "Each component fails by time 3 with probability 1-exp(-3/5)=0.451188."
    ],
    "verification": {
      "kind": "order-exponential",
      "n": 5,
      "mu": 5,
      "threshold": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:30",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-second-exponential",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "9 independent values are uniform on (0,13). Let X_(4) be the 4th smallest value. Calculate E[X_(4)]. Round your answer to four decimal places.",
    "choices": [
      "$1.3000$",
      "$5.2000$",
      "$5.7778$",
      "$6.5000$",
      "$7.8000$"
    ],
    "answer": 1,
    "solution": [
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^5 on (0,1).",
      "This is beta(4,6), with mean 4/(9+1).",
      "Rescale: E[X_(4)]=13×4/10=5.2."
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
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^5 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 9,
      "rank": 4,
      "B": 13,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:31",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "7 independent losses are each uniform on (0,1755). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate E[V-U given U>351]. Round your answer to four decimal places.",
    "choices": [
      "$526.5000$",
      "$842.4000$",
      "$1053.0000$",
      "$1263.6000$",
      "$2106.0000$"
    ],
    "answer": 2,
    "solution": [
      "Given U>351, every loss lies in (351,1755); independence is retained under this product event.",
      "The conditional chance a loss is below 1140.75 is r=0.5625. The maximum event requires all 7 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1755-351)(7-1)/(7+1). Evaluate the appropriate order-statistic quantity to obtain 1053."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>351, every loss lies in (351,1755); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 7,
      "B": 1755,
      "a": 351.0,
      "b": 1140.75,
      "target": "range",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:6",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "8 independent losses are each uniform on (0,1756). Let U be the minimum, W the second-smallest loss, and V the maximum. Calculate P(V<1158.96 given U>351.2). Round your answer to four decimal places.",
    "choices": [
      "$0.0060$",
      "$0.0119$",
      "$0.1319$",
      "$0.5060$",
      "$0.9881$"
    ],
    "answer": 1,
    "solution": [
      "Given U>351.2, every loss lies in (351.2,1756); independence is retained under this product event.",
      "The conditional chance a loss is below 1158.96 is r=0.575. The maximum event requires all 8 losses below it; the second-smallest event allows at most one below it.",
      "The expected conditional range is (1756-351.2)(8-1)/(8+1). Evaluate the appropriate order-statistic quantity to obtain 0.011949."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "joint ranks",
      "conditional support",
      "rank-to-count conversion"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint ranks, conditional support, rank-to-count conversion.",
      "Given U>351.2, every loss lies in (351.2,1756); independence is retained under this product event."
    ],
    "verification": {
      "kind": "section-order",
      "n": 8,
      "B": 1756,
      "a": 351.20000000000005,
      "b": 1158.96,
      "target": "maximum",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:7",
    "topicId": "mrv-d1-order-statistics",
    "family": "cumulative-multivariate-random-variables-d",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": true
  },
  {
    "question": "Two independent components have exponential lifetimes with means 5 and 7 years. A device fails when either component fails. Given that the device has survived 5 years, calculate the probability it survives at least another 5 years. Round your answer to four decimal places.",
    "choices": [
      "$0.0324$",
      "$0.1801$",
      "$0.3679$",
      "$0.6592$",
      "$0.8199$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/5+1/7. It is memoryless.",
      "Conditional survival for another 5 years is exp[-5(1/5+1/7)]=0.180092."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "2": "Both components must survive, not just component 1.",
      "3": "Means do not add for a minimum lifetime; failure rates add.",
      "4": "This gives failure during the additional interval."
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
        7
      ],
      "t": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:32",
    "topicId": "mrv-d1-order-statistics",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent observations are uniform on (0,10). Let U and V be their minimum and maximum. Calculate P(V-U<3). Round your answer to four decimal places.",
    "choices": [
      "$0.0007$",
      "$0.0024$",
      "$0.0109$",
      "$0.0146$",
      "$0.9891$"
    ],
    "answer": 2,
    "solution": [
      "The joint min–max density is n(n-1)(v-u)^(n-2)/10^6 on 0<u<v<10.",
      "Integrate over the band v-u<3. Equivalently, integrate the range density n(n-1)r^(n-2)(10-r)/10^6 from 0 to 3.",
      "The result is n(3/10)^(n-1)-(n-1)(3/10)^n=0.010935."
    ],
    "feedback": {
      "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
    },
    "skills": [
      "joint order statistics",
      "integration over a band"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint order statistics, integration over a band.",
      "The joint min–max density is n(n-1)(v-u)^(n-2)/10^6 on 0<u<v<10."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 6,
      "B": 10,
      "r": 3,
      "target": "range"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:33",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-range",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.65. Round your answer to four decimal places.",
    "choices": [
      "$0.0317$",
      "$0.5625$",
      "$0.7650$",
      "$0.8826$",
      "$0.9930$"
    ],
    "answer": 2,
    "solution": [
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.65 with conditional probability (0.65-0.2)/(1-0.2)=0.5625.",
      "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
      "Sum the binomial probabilities from 3 through 6; the result is 0.765012."
    ],
    "feedback": {
      "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "1": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
    },
    "skills": [
      "condition order statistics",
      "rank-to-count conversion",
      "binomial tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.65 with conditional probability (0.65-0.2)/(1-0.2)=0.5625."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 6,
      "rank": 3,
      "a": 0.2,
      "b": 0.65,
      "target": "conditional-rank"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:34",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-rank-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent component lifetimes are exponential with mean 4. T is the time of the second failure. Calculate P(T≤2). Round your answer to four decimal places.",
    "choices": [
      "$0.1548$",
      "$0.3454$",
      "$0.3483$",
      "$0.6517$",
      "$0.9179$"
    ],
    "answer": 3,
    "solution": [
      "Each component fails by time 2 with probability 1-exp(-2/4)=0.393469.",
      "The number of failures by time 2 is binomial with n=5 and p=0.393469. The second failure has occurred exactly when this count is at least two.",
      "Remove zero and one failures: 1-(1-p)^5-5p(1-p)^4=0.651664."
    ],
    "feedback": {
      "0": "This requires two specified components to fail rather than the second order statistic.",
      "1": "This counts exactly two failures and excludes three or more.",
      "2": "This is the probability the second failure is still in the future.",
      "4": "This is the time of the first failure."
    },
    "skills": [
      "order-statistic event",
      "binomial count representation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: order-statistic event, binomial count representation.",
      "Each component fails by time 2 with probability 1-exp(-2/4)=0.393469."
    ],
    "verification": {
      "kind": "order-exponential",
      "n": 5,
      "mu": 4,
      "threshold": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:35",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-second-exponential",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "10 independent values are uniform on (0,13). Let X_(4) be the 4th smallest value. Calculate E[X_(4)]. Round your answer to four decimal places.",
    "choices": [
      "$1.1818$",
      "$4.7273$",
      "$5.2000$",
      "$6.5000$",
      "$8.2727$"
    ],
    "answer": 1,
    "solution": [
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^6 on (0,1).",
      "This is beta(4,7), with mean 4/(10+1).",
      "Rescale: E[X_(4)]=13×4/11=4.727273."
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
      "For Z=X_(4)/13, the order-statistic density is proportional to z^3(1-z)^6 on (0,1)."
    ],
    "verification": {
      "kind": "order-uniform-mean",
      "n": 10,
      "rank": 4,
      "B": 13,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:36",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-uniform-middle-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "Two independent components have exponential lifetimes with means 5 and 5 years. A device fails when either component fails. Given that the device has survived 4 years, calculate the probability it survives at least another 4 years. Round your answer to four decimal places.",
    "choices": [
      "$0.0408$",
      "$0.2019$",
      "$0.4493$",
      "$0.6703$",
      "$0.7981$"
    ],
    "answer": 1,
    "solution": [
      "For independent lifetimes, device survival is the product of both component survival functions.",
      "The minimum lifetime is exponential with rate 1/5+1/5. It is memoryless.",
      "Conditional survival for another 4 years is exp[-4(1/5+1/5)]=0.201897."
    ],
    "feedback": {
      "0": "This is unconditional survival for twice the elapsed interval.",
      "2": "Both components must survive, not just component 1.",
      "3": "Means do not add for a minimum lifetime; failure rates add.",
      "4": "This gives failure during the additional interval."
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
        5
      ],
      "t": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:37",
    "topicId": "mrv-d1-order-statistics",
    "family": "exponential-minimum-lifetime",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "4 independent observations are uniform on (0,11). Let U and V be their minimum and maximum. Calculate P(V-U<4). Round your answer to four decimal places.",
    "choices": [
      "$0.0175$",
      "$0.0481$",
      "$0.1399$",
      "$0.1923$",
      "$0.8601$"
    ],
    "answer": 2,
    "solution": [
      "The joint min–max density is n(n-1)(v-u)^(n-2)/11^4 on 0<u<v<11.",
      "Integrate over the band v-u<4. Equivalently, integrate the range density n(n-1)r^(n-2)(11-r)/11^4 from 0 to 4.",
      "The result is n(4/11)^(n-1)-(n-1)(4/11)^n=0.139881."
    ],
    "feedback": {
      "0": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "1": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "3": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval.",
      "4": "A short range can lie anywhere inside the support. Integrate the min–max band instead of forcing every value into one fixed interval."
    },
    "skills": [
      "joint order statistics",
      "integration over a band"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint order statistics, integration over a band.",
      "The joint min–max density is n(n-1)(v-u)^(n-2)/11^4 on 0<u<v<11."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 4,
      "B": 11,
      "r": 4,
      "target": "range"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:38",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-range",
    "difficulty": 7,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  },
  {
    "question": "7 independent observations are uniform on (0,1). Their minimum is known to exceed 0.2. Calculate the probability that their third-smallest observation is at most 0.65. Round your answer to four decimal places.",
    "choices": [
      "$0.0178$",
      "$0.5625$",
      "$0.8628$",
      "$0.9444$",
      "$0.9969$"
    ],
    "answer": 2,
    "solution": [
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.65 with conditional probability (0.65-0.2)/(1-0.2)=0.5625.",
      "The third-smallest is below the threshold exactly when at least three of the observations are below it.",
      "Sum the binomial probabilities from 3 through 7; the result is 0.862819."
    ],
    "feedback": {
      "0": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "1": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "3": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event.",
      "4": "First condition the individual support, then translate the rank event into a binomial count rather than a maximum or at-least-one event."
    },
    "skills": [
      "condition order statistics",
      "rank-to-count conversion",
      "binomial tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: condition order statistics, rank-to-count conversion, binomial tail.",
      "Given all observations exceed 0.2, they remain independent uniform variables on (0.2,1). Each is at most 0.65 with conditional probability (0.65-0.2)/(1-0.2)=0.5625."
    ],
    "verification": {
      "kind": "order-uniform",
      "n": 7,
      "rank": 3,
      "a": 0.2,
      "b": 0.65,
      "target": "conditional-rank"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-d:39",
    "topicId": "mrv-d1-order-statistics",
    "family": "order-rank-conditional",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-d1-order-statistics"
    ],
    "cumulative": false
  }
];

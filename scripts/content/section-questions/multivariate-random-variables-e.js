export default [
  {
    "question": "Independent amounts X,Y are normal with means 1846,1796 and variances 3592,1810, respectively. Independently, a surcharge R is 1786 with probability 0.33 and zero otherwise. Let Z=2X-3Y+R. Calculate P(Z>-1666). Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$0.3097$",
      "$0.3806$",
      "$0.6194$",
      "$0.7394$",
      "$0.8097$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1696 and variance 30658; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.33 and 0.33.",
      "E[Z]=-1106.62, Var(Z)=735921.8956; E[Z²]=Var(Z)+E[Z]². The requested value is 0.619426."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1696 and variance 30658; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1846,
      "my": 1796,
      "vx": 3592,
      "vy": 1810,
      "p": 0.33,
      "C": 1786,
      "threshold": -1666,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:0",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Independent amounts X,Y are normal with means 1847,1797 and variances 3594,1811, respectively. Independently, a surcharge R is 1787 with probability 0.335 and zero otherwise. Let Z=2X-3Y+R. Calculate Var(Z). Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$371038.8895$",
      "$593662.2232$",
      "$742077.7790$",
      "$890493.3348$",
      "$1484155.5580$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1697 and variance 30675; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.335 and 0.335.",
      "E[Z]=-1098.355, Var(Z)=742077.778975; E[Z²]=Var(Z)+E[Z]². The requested value is 742077.778975."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1697 and variance 30675; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1847,
      "my": 1797,
      "vx": 3594,
      "vy": 1811,
      "p": 0.335,
      "C": 1787,
      "threshold": -1667,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:1",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Independent normal X and Y have means 110 and 30. SD(X)=9. The variance of X+Y is 117. Calculate P(X-2Y>71.00000000). Round your answer to four decimal places.",
    "choices": [
      "$0.0808$",
      "$0.1215$",
      "$0.4628$",
      "$0.9192$",
      "$1.0000$"
    ],
    "answer": 0,
    "solution": [
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=117-81=36.",
      "X-2Y is exactly normal with mean 50 and SD √(81+4×36)=15.",
      "The standardized threshold is 1.4, so the upper-tail probability is 1-Φ(1.4)=0.080757."
    ],
    "feedback": {
      "1": "Recheck the setup and the requested quantity before evaluating the formula.",
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
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=117-81=36."
    ],
    "verification": {
      "kind": "normal-combination",
      "muX": 110,
      "muY": 30,
      "sdX": 9,
      "sdY": 6,
      "a": 1,
      "b": -2,
      "t": 71.0,
      "target": "tail"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:8",
    "topicId": "mrv-e1-linear-combinations",
    "family": "normal-combination-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X,Y have means 13,16 and variances 4,10, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
    "choices": [
      "$106.0000$",
      "$131.0000$",
      "$267.0000$",
      "$289.0000$",
      "$395.0000$"
    ],
    "answer": 4,
    "solution": [
      "Linearity gives E[T]=2(13)-3(16)+5=-17.",
      "Independence gives Var(T)=4(4)+9(10)=106; the constant contributes zero variance.",
      "E[T²]=Var(T)+(E[T])²=106+289=395."
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
      "Linearity gives E[T]=2(13)-3(16)+5=-17."
    ],
    "verification": {
      "kind": "linear-moments",
      "mx": 13,
      "my": 16,
      "vx": 4,
      "vy": 10,
      "a": 2,
      "b": -3,
      "shift": 5,
      "target": "second"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:9",
    "topicId": "mrv-e2-linear-moments",
    "family": "linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent claim counts X and Y are Poisson with means 0.6 and 1. A branch statistic is T=2X+Y. Calculate P(T≤4). Round your answer to four decimal places.",
    "choices": [
      "$0.1140$",
      "$0.2019$",
      "$0.8860$",
      "$0.9275$",
      "$0.9763$"
    ],
    "answer": 2,
    "solution": [
      "Independence gives joint masses exp(-(0.6+1))0.6^x 1^y/(x!y!). The weighted statistic is not generally Poisson.",
      "Enumerate x=0 through 2; for each x sum y=0 through 4-2x.",
      "The sum of all qualifying joint masses is 0.885989."
    ],
    "feedback": {
      "0": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "1": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "3": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "4": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean."
    },
    "skills": [
      "discrete convolution",
      "weighted support",
      "independence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete convolution, weighted support, independence.",
      "Independence gives joint masses exp(-(0.6+1))0.6^x 1^y/(x!y!). The weighted statistic is not generally Poisson."
    ],
    "verification": {
      "kind": "poisson-weighted",
      "a": 0.6,
      "b": 1.0,
      "limit": 4
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:10",
    "topicId": "mrv-e1-linear-combinations",
    "family": "poisson-weighted-sum",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "X1,…,X24 are independent with common mean 30 and SD 12. An independent random surcharge C has variance 6. Define Y as their sample mean plus the same single surcharge C. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$3.4641$",
      "$6.0104$",
      "$6.2500$",
      "$12.0000$",
      "$150.0000$"
    ],
    "answer": 3,
    "solution": [
      "The sample mean variance is 144/24.",
      "The independent surcharge is added once, so its full variance 6 is added; it is not averaged over 24 observations.",
      "The total variance is 144/24+6=12."
    ],
    "feedback": {
      "0": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "1": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "2": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "4": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size."
    },
    "skills": [
      "sample mean",
      "independent random shift",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: sample mean, independent random shift, variance.",
      "The sample mean variance is 144/24."
    ],
    "verification": {
      "kind": "sample-shift",
      "n": 24,
      "sigma": 12,
      "varC": 6
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:11",
    "topicId": "mrv-e2-linear-moments",
    "family": "sample-mean-random-shift",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent counts X and Y are binomial with parameters (3,0.3) and (4,0.3), respectively. Each X claim costs two units and each Y claim costs one unit. Calculate P(2X+Y≤3). Round your answer to four decimal places.",
    "choices": [
      "$0.2074$",
      "$0.3724$",
      "$0.5628$",
      "$0.6276$",
      "$0.8740$"
    ],
    "answer": 3,
    "solution": [
      "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero.",
      "By independence, sum P(X=x)P(Y≤3-2x) over x=0,…,1.",
      "This weighted discrete sum equals 0.627621; the weighted count is not an ordinary binomial variable."
    ],
    "feedback": {
      "0": "This gives equality only.",
      "1": "This gives the probability the cost exceeds the limit.",
      "2": "This reverses the two costs.",
      "4": "This treats both claim types as having the same cost."
    },
    "skills": [
      "independent discrete sums",
      "weighted support",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent discrete sums, weighted support, conditional summation.",
      "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero."
    ],
    "verification": {
      "kind": "weighted-binomial",
      "n": 3,
      "m": 4,
      "p": 0.30000000000000004,
      "q": 0.3,
      "limit": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:12",
    "topicId": "mrv-e1-linear-combinations",
    "family": "independent-weighted-binomial",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X and Y are uniform on the integers 1 through 4 and Bernoulli with success probability 0.4, respectively. Let Z=2X-3Y+8. Calculate E[Z²]. Round your answer to four decimal places.",
    "choices": [
      "$7.1600$",
      "$21.6000$",
      "$71.1600$",
      "$139.2400$",
      "$146.4000$"
    ],
    "answer": 4,
    "solution": [
      "E[Z]=2(5/2)-3(0.4)+8=11.8.",
      "Independence gives Var(Z)=4(15/12)+9(0.4)(0.6)=7.16. The shift adds no variance.",
      "E[Z²]=Var(Z)+(E[Z])²=146.4."
    ],
    "feedback": {
      "0": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "1": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "2": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "3": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring."
    },
    "skills": [
      "moments of independent variables",
      "signed coefficients",
      "second raw moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: moments of independent variables, signed coefficients, second raw moment.",
      "E[Z]=2(5/2)-3(0.4)+8=11.8."
    ],
    "verification": {
      "kind": "independent-linear-raw",
      "n": 4,
      "p": 0.4,
      "shift": 8,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:13",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Weekly claim counts are independent and identically Poisson distributed. For one week, P(N=1)=0.8P(N=0). Calculate the probability of exactly 4 claims over 3 weeks. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0077$",
      "$0.0907$",
      "$0.1254$",
      "$0.2213$"
    ],
    "answer": 3,
    "solution": [
      "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 0.8.",
      "The independent 3-week total is Poisson with mean 2.4.",
      "Its probability at 4 is exp(-2.4)(2.4)^4/4!=0.125408."
    ],
    "feedback": {
      "0": "This requires that count in every week, rather than in the entire period.",
      "1": "This uses a one-week mean.",
      "2": "This gives zero claims.",
      "4": "This gives at least the requested count."
    },
    "skills": [
      "infer a Poisson mean",
      "independent sums",
      "exact count"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Poisson mean, independent sums, exact count.",
      "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 0.8."
    ],
    "verification": {
      "kind": "poisson-aggregate",
      "lam": 0.8,
      "periods": 3,
      "count": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:14",
    "topicId": "mrv-e1-linear-combinations",
    "family": "poisson-ratio-aggregate",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "4 independent measurements each have mean 100 and SD 18. Let M be their average. A cost is Z=1.2M+C, where C is independent of all measurements and has mean 5 and SD 5. Calculate SD(Z). Round your answer to four decimal places.",
    "choices": [
      "$11.0544$",
      "$11.9013$",
      "$15.8000$",
      "$22.1712$",
      "$141.6400$"
    ],
    "answer": 1,
    "solution": [
      "Var(M)=18²/4=81.",
      "Independence gives Var(Z)=1.2²Var(M)+Var(C)=141.64. The means do not affect this variance.",
      "Take the square root: SD(Z)=11.90126."
    ],
    "feedback": {
      "0": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "2": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "3": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "4": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root."
    },
    "skills": [
      "moments of an independent average",
      "independent random surcharge",
      "SD of a linear combination"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: moments of an independent average, independent random surcharge, SD of a linear combination.",
      "Var(M)=18²/4=81."
    ],
    "verification": {
      "kind": "independent-average-sd",
      "sd": 18,
      "n": 4,
      "shiftSD": 5,
      "scale": 1.2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:15",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-average-sd",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent amounts X,Y are normal with means 1848,1798 and variances 3596,1812, respectively. Independently, a surcharge R is 1788 with probability 0.34 and zero otherwise. Let Z=2X-3Y+R. Calculate E[Z²]. Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$968180.3200$",
      "$1549088.5120$",
      "$1936360.6400$",
      "$2323632.7680$",
      "$3872721.2800$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1698 and variance 30692; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.34 and 0.34.",
      "E[Z]=-1090.08, Var(Z)=748086.2336; E[Z²]=Var(Z)+E[Z]². The requested value is 1936360.64."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1698 and variance 30692; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1848,
      "my": 1798,
      "vx": 3596,
      "vy": 1812,
      "p": 0.34,
      "C": 1788,
      "threshold": -1668,
      "target": "second",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:2",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Independent amounts X,Y are normal with means 1849,1799 and variances 3598,1813, respectively. Independently, a surcharge R is 1789 with probability 0.345 and zero otherwise. Let Z=2X-3Y+R. Calculate P(Z>-1669). Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$0.3140$",
      "$0.3720$",
      "$0.6280$",
      "$0.7480$",
      "$0.8140$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1699 and variance 30709; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.345 and 0.345.",
      "E[Z]=-1081.795, Var(Z)=753946.732975; E[Z²]=Var(Z)+E[Z]². The requested value is 0.627983."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1699 and variance 30709; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1849,
      "my": 1799,
      "vx": 3598,
      "vy": 1813,
      "p": 0.345,
      "C": 1789,
      "threshold": -1669,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:3",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Independent measurements X and Y are normal with means 65 and 75 and SDs 9 and 9, respectively. Calculate P(X<Y+10). Round your answer to four decimal places.",
    "choices": [
      "$0.0581$",
      "$0.5491$",
      "$0.8667$",
      "$0.9419$",
      "$0.9869$"
    ],
    "answer": 3,
    "solution": [
      "D=X-Y is normal with mean 65-75=-10.",
      "Independence gives Var(D)=9²+9²=162; the negative coefficient does not subtract variance.",
      "Standardize D<10: Φ[(10--10)/√162]=0.941949."
    ],
    "feedback": {
      "0": "This is the upper rather than lower difference tail.",
      "1": "This standardizes using variance instead of SD.",
      "2": "Independent SDs do not add directly.",
      "4": "This ignores the variation in Y."
    },
    "skills": [
      "independent normal difference",
      "mean and variance of a linear combination",
      "tail probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal difference, mean and variance of a linear combination, tail probability.",
      "D=X-Y is normal with mean 65-75=-10."
    ],
    "verification": {
      "kind": "normal-independent-difference",
      "mx": 65,
      "my": 75,
      "sx": 9,
      "sy": 9,
      "margin": 10,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:16",
    "topicId": "mrv-e1-linear-combinations",
    "family": "normal-independent-difference",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent counts X and Y are Poisson. Their zero-count probabilities are exp(-0.9) and exp(-1.4), respectively. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$-9.0000$",
      "$-2.4000$",
      "$4.0249$",
      "$6.0000$",
      "$16.2000$"
    ],
    "answer": 4,
    "solution": [
      "The identity P(N=0)=exp(-λ) gives means 0.9 and 1.4. Poisson variances equal those means.",
      "Independence gives zero covariance. Both the positive and negative coefficients must be squared in the variance.",
      "Var(2X-3Y)=4×0.9+9×1.4=16.2."
    ],
    "feedback": {
      "0": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "1": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "2": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "3": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment."
    },
    "skills": [
      "infer Poisson parameters",
      "independent linear variance",
      "signed coefficients"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer Poisson parameters, independent linear variance, signed coefficients.",
      "The identity P(N=0)=exp(-λ) gives means 0.9 and 1.4. Poisson variances equal those means."
    ],
    "verification": {
      "kind": "poisson-linear-variance",
      "a": 0.9,
      "b": 1.4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:17",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-poisson-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent normal X and Y have means 100 and 35. SD(X)=8. The variance of X+Y is 80. Calculate P(X-2Y>45.83919190). Round your answer to four decimal places.",
    "choices": [
      "$0.0808$",
      "$0.4508$",
      "$0.5000$",
      "$0.9192$",
      "$1.0000$"
    ],
    "answer": 0,
    "solution": [
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=80-64=16.",
      "X-2Y is exactly normal with mean 30 and SD √(64+4×16)=11.313708.",
      "The standardized threshold is 1.4, so the upper-tail probability is 1-Φ(1.4)=0.080757."
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
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=80-64=16."
    ],
    "verification": {
      "kind": "normal-combination",
      "muX": 100,
      "muY": 35,
      "sdX": 8,
      "sdY": 4,
      "a": 1,
      "b": -2,
      "t": 45.83919189857867,
      "target": "tail"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:18",
    "topicId": "mrv-e1-linear-combinations",
    "family": "normal-combination-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X,Y have means 11,16 and variances 6,11, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
    "choices": [
      "$123.0000$",
      "$148.0000$",
      "$420.0000$",
      "$441.0000$",
      "$564.0000$"
    ],
    "answer": 4,
    "solution": [
      "Linearity gives E[T]=2(11)-3(16)+5=-21.",
      "Independence gives Var(T)=4(6)+9(11)=123; the constant contributes zero variance.",
      "E[T²]=Var(T)+(E[T])²=123+441=564."
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
      "Linearity gives E[T]=2(11)-3(16)+5=-21."
    ],
    "verification": {
      "kind": "linear-moments",
      "mx": 11,
      "my": 16,
      "vx": 6,
      "vy": 11,
      "a": 2,
      "b": -3,
      "shift": 5,
      "target": "second"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:19",
    "topicId": "mrv-e2-linear-moments",
    "family": "linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent claim counts X and Y are Poisson with means 0.8 and 1.5. A branch statistic is T=2X+Y. Calculate P(T≤5). Round your answer to four decimal places.",
    "choices": [
      "$0.1003$",
      "$0.1366$",
      "$0.8634$",
      "$0.9057$",
      "$0.9700$"
    ],
    "answer": 2,
    "solution": [
      "Independence gives joint masses exp(-(0.8+1.5))0.8^x 1.5^y/(x!y!). The weighted statistic is not generally Poisson.",
      "Enumerate x=0 through 2; for each x sum y=0 through 5-2x.",
      "The sum of all qualifying joint masses is 0.863401."
    ],
    "feedback": {
      "0": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "1": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "3": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "4": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean."
    },
    "skills": [
      "discrete convolution",
      "weighted support",
      "independence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete convolution, weighted support, independence.",
      "Independence gives joint masses exp(-(0.8+1.5))0.8^x 1.5^y/(x!y!). The weighted statistic is not generally Poisson."
    ],
    "verification": {
      "kind": "poisson-weighted",
      "a": 0.8,
      "b": 1.5,
      "limit": 5
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:20",
    "topicId": "mrv-e1-linear-combinations",
    "family": "poisson-weighted-sum",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "X1,…,X16 are independent with common mean 30 and SD 12. An independent random surcharge C has variance 4. Define Y as their sample mean plus the same single surcharge C. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$3.6056$",
      "$9.0156$",
      "$9.2500$",
      "$13.0000$",
      "$148.0000$"
    ],
    "answer": 3,
    "solution": [
      "The sample mean variance is 144/16.",
      "The independent surcharge is added once, so its full variance 4 is added; it is not averaged over 16 observations.",
      "The total variance is 144/16+4=13."
    ],
    "feedback": {
      "0": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "1": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "2": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "4": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size."
    },
    "skills": [
      "sample mean",
      "independent random shift",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: sample mean, independent random shift, variance.",
      "The sample mean variance is 144/16."
    ],
    "verification": {
      "kind": "sample-shift",
      "n": 16,
      "sigma": 12,
      "varC": 4
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:21",
    "topicId": "mrv-e2-linear-moments",
    "family": "sample-mean-random-shift",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent counts X and Y are binomial with parameters (5,0.3) and (4,0.3), respectively. Each X claim costs two units and each Y claim costs one unit. Calculate P(2X+Y≤3). Round your answer to four decimal places.",
    "choices": [
      "$0.1609$",
      "$0.4014$",
      "$0.4501$",
      "$0.5986$",
      "$0.7297$"
    ],
    "answer": 1,
    "solution": [
      "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero.",
      "By independence, sum P(X=x)P(Y≤3-2x) over x=0,…,1.",
      "This weighted discrete sum equals 0.401418; the weighted count is not an ordinary binomial variable."
    ],
    "feedback": {
      "0": "This gives equality only.",
      "2": "This reverses the two costs.",
      "3": "This gives the probability the cost exceeds the limit.",
      "4": "This treats both claim types as having the same cost."
    },
    "skills": [
      "independent discrete sums",
      "weighted support",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent discrete sums, weighted support, conditional summation.",
      "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero."
    ],
    "verification": {
      "kind": "weighted-binomial",
      "n": 5,
      "m": 4,
      "p": 0.30000000000000004,
      "q": 0.3,
      "limit": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:22",
    "topicId": "mrv-e1-linear-combinations",
    "family": "independent-weighted-binomial",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X and Y are uniform on the integers 1 through 5 and Bernoulli with success probability 0.25, respectively. Let Z=2X-3Y+4. Calculate E[Z²]. Round your answer to four decimal places.",
    "choices": [
      "$9.6875$",
      "$25.6875$",
      "$37.2500$",
      "$85.5625$",
      "$95.2500$"
    ],
    "answer": 4,
    "solution": [
      "E[Z]=2(6/2)-3(0.25)+4=9.25.",
      "Independence gives Var(Z)=4(24/12)+9(0.25)(0.75)=9.6875. The shift adds no variance.",
      "E[Z²]=Var(Z)+(E[Z])²=95.25."
    ],
    "feedback": {
      "0": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "1": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "2": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "3": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring."
    },
    "skills": [
      "moments of independent variables",
      "signed coefficients",
      "second raw moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: moments of independent variables, signed coefficients, second raw moment.",
      "E[Z]=2(6/2)-3(0.25)+4=9.25."
    ],
    "verification": {
      "kind": "independent-linear-raw",
      "n": 5,
      "p": 0.25,
      "shift": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:23",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent amounts X,Y are normal with means 1850,1800 and variances 3600,1814, respectively. Independently, a surcharge R is 1790 with probability 0.35 and zero otherwise. Let Z=2X-3Y+R. Calculate Var(Z). Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$379829.3750$",
      "$607727.0000$",
      "$759658.7500$",
      "$911590.5000$",
      "$1519317.5000$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1700 and variance 30726; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.35 and 0.35.",
      "E[Z]=-1073.5, Var(Z)=759658.75; E[Z²]=Var(Z)+E[Z]². The requested value is 759658.75."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1700 and variance 30726; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1850,
      "my": 1800,
      "vx": 3600,
      "vy": 1814,
      "p": 0.35,
      "C": 1790,
      "threshold": -1670,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:4",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Independent amounts X,Y are normal with means 1851,1801 and variances 3602,1815, respectively. Independently, a surcharge R is 1791 with probability 0.355 and zero otherwise. Let Z=2X-3Y+R. Calculate E[Z²]. Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$949931.0725$",
      "$1519889.7160$",
      "$1899862.1450$",
      "$2279834.5740$",
      "$3799724.2900$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1701 and variance 30743; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.355 and 0.355.",
      "E[Z]=-1065.195, Var(Z)=765221.756975; E[Z²]=Var(Z)+E[Z]². The requested value is 1899862.145."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1701 and variance 30743; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1851,
      "my": 1801,
      "vx": 3602,
      "vy": 1815,
      "p": 0.355,
      "C": 1791,
      "threshold": -1671,
      "target": "second",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:5",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Weekly claim counts are independent and identically Poisson distributed. For one week, P(N=1)=1P(N=0). Calculate the probability of exactly 5 claims over 3 weeks. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0031$",
      "$0.0498$",
      "$0.1008$",
      "$0.1847$"
    ],
    "answer": 3,
    "solution": [
      "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 1.",
      "The independent 3-week total is Poisson with mean 3.",
      "Its probability at 5 is exp(-3)(3)^5/5!=0.100819."
    ],
    "feedback": {
      "0": "This requires that count in every week, rather than in the entire period.",
      "1": "This uses a one-week mean.",
      "2": "This gives zero claims.",
      "4": "This gives at least the requested count."
    },
    "skills": [
      "infer a Poisson mean",
      "independent sums",
      "exact count"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Poisson mean, independent sums, exact count.",
      "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 1."
    ],
    "verification": {
      "kind": "poisson-aggregate",
      "lam": 1.0,
      "periods": 3,
      "count": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:24",
    "topicId": "mrv-e1-linear-combinations",
    "family": "poisson-ratio-aggregate",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "5 independent measurements each have mean 100 and SD 22. Let M be their average. A cost is Z=1.2M+C, where C is independent of all measurements and has mean 5 and SD 6. Calculate SD(Z). Round your answer to four decimal places.",
    "choices": [
      "$12.3353$",
      "$13.2436$",
      "$17.8064$",
      "$27.0732$",
      "$175.3920$"
    ],
    "answer": 1,
    "solution": [
      "Var(M)=22²/5=96.8.",
      "Independence gives Var(Z)=1.2²Var(M)+Var(C)=175.392. The means do not affect this variance.",
      "Take the square root: SD(Z)=13.243564."
    ],
    "feedback": {
      "0": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "2": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "3": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "4": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root."
    },
    "skills": [
      "moments of an independent average",
      "independent random surcharge",
      "SD of a linear combination"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: moments of an independent average, independent random surcharge, SD of a linear combination.",
      "Var(M)=22²/5=96.8."
    ],
    "verification": {
      "kind": "independent-average-sd",
      "sd": 22,
      "n": 5,
      "shiftSD": 6,
      "scale": 1.2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:25",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-average-sd",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent measurements X and Y are normal with means 70 and 50 and SDs 5 and 9, respectively. Calculate P(X<Y+10). Round your answer to four decimal places.",
    "choices": [
      "$0.0228$",
      "$0.1657$",
      "$0.2375$",
      "$0.4624$",
      "$0.8343$"
    ],
    "answer": 1,
    "solution": [
      "D=X-Y is normal with mean 70-50=20.",
      "Independence gives Var(D)=5²+9²=106; the negative coefficient does not subtract variance.",
      "Standardize D<10: Φ[(10-20)/√106]=0.165703."
    ],
    "feedback": {
      "0": "This ignores the variation in Y.",
      "2": "Independent SDs do not add directly.",
      "3": "This standardizes using variance instead of SD.",
      "4": "This is the upper rather than lower difference tail."
    },
    "skills": [
      "independent normal difference",
      "mean and variance of a linear combination",
      "tail probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal difference, mean and variance of a linear combination, tail probability.",
      "D=X-Y is normal with mean 70-50=20."
    ],
    "verification": {
      "kind": "normal-independent-difference",
      "mx": 70,
      "my": 50,
      "sx": 5,
      "sy": 9,
      "margin": 10,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:26",
    "topicId": "mrv-e1-linear-combinations",
    "family": "normal-independent-difference",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent counts X and Y are Poisson. Their zero-count probabilities are exp(-1.1) and exp(-1.4), respectively. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$-8.2000$",
      "$-2.0000$",
      "$4.1231$",
      "$6.4000$",
      "$17.0000$"
    ],
    "answer": 4,
    "solution": [
      "The identity P(N=0)=exp(-λ) gives means 1.1 and 1.4. Poisson variances equal those means.",
      "Independence gives zero covariance. Both the positive and negative coefficients must be squared in the variance.",
      "Var(2X-3Y)=4×1.1+9×1.4=17."
    ],
    "feedback": {
      "0": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "1": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "2": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "3": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment."
    },
    "skills": [
      "infer Poisson parameters",
      "independent linear variance",
      "signed coefficients"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer Poisson parameters, independent linear variance, signed coefficients.",
      "The identity P(N=0)=exp(-λ) gives means 1.1 and 1.4. Poisson variances equal those means."
    ],
    "verification": {
      "kind": "poisson-linear-variance",
      "a": 1.1,
      "b": 1.4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:27",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-poisson-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent normal X and Y have means 120 and 35. SD(X)=10. The variance of X+Y is 125. Calculate P(X-2Y>69.79898987). Round your answer to four decimal places.",
    "choices": [
      "$0.0808$",
      "$0.4606$",
      "$0.5000$",
      "$0.9192$",
      "$1.0000$"
    ],
    "answer": 0,
    "solution": [
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=125-100=25.",
      "X-2Y is exactly normal with mean 50 and SD √(100+4×25)=14.142136.",
      "The standardized threshold is 1.4, so the upper-tail probability is 1-Φ(1.4)=0.080757."
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
      "muY": 35,
      "sdX": 10,
      "sdY": 5,
      "a": 1,
      "b": -2,
      "t": 69.79898987322333,
      "target": "tail"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:28",
    "topicId": "mrv-e1-linear-combinations",
    "family": "normal-combination-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X,Y have means 13,17 and variances 5,9, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
    "choices": [
      "$101.0000$",
      "$126.0000$",
      "$383.0000$",
      "$400.0000$",
      "$501.0000$"
    ],
    "answer": 4,
    "solution": [
      "Linearity gives E[T]=2(13)-3(17)+5=-20.",
      "Independence gives Var(T)=4(5)+9(9)=101; the constant contributes zero variance.",
      "E[T²]=Var(T)+(E[T])²=101+400=501."
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
      "Linearity gives E[T]=2(13)-3(17)+5=-20."
    ],
    "verification": {
      "kind": "linear-moments",
      "mx": 13,
      "my": 17,
      "vx": 5,
      "vy": 9,
      "a": 2,
      "b": -3,
      "shift": 5,
      "target": "second"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:29",
    "topicId": "mrv-e2-linear-moments",
    "family": "linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent claim counts X and Y are Poisson with means 1 and 1.5. A branch statistic is T=2X+Y. Calculate P(T≤6). Round your answer to four decimal places.",
    "choices": [
      "$0.0821$",
      "$0.1090$",
      "$0.8910$",
      "$0.9347$",
      "$0.9858$"
    ],
    "answer": 2,
    "solution": [
      "Independence gives joint masses exp(-(1+1.5))1^x 1.5^y/(x!y!). The weighted statistic is not generally Poisson.",
      "Enumerate x=0 through 3; for each x sum y=0 through 6-2x.",
      "The sum of all qualifying joint masses is 0.891044."
    ],
    "feedback": {
      "0": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "1": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "3": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean.",
      "4": "The coefficient 2 changes support jumps. Enumerate qualifying joint outcomes instead of assuming a Poisson law with a scaled mean."
    },
    "skills": [
      "discrete convolution",
      "weighted support",
      "independence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete convolution, weighted support, independence.",
      "Independence gives joint masses exp(-(1+1.5))1^x 1.5^y/(x!y!). The weighted statistic is not generally Poisson."
    ],
    "verification": {
      "kind": "poisson-weighted",
      "a": 1.0,
      "b": 1.5,
      "limit": 6
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:30",
    "topicId": "mrv-e1-linear-combinations",
    "family": "poisson-weighted-sum",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "X1,…,X20 are independent with common mean 30 and SD 12. An independent random surcharge C has variance 5. Define Y as their sample mean plus the same single surcharge C. Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$3.4928$",
      "$7.2125$",
      "$7.4500$",
      "$12.2000$",
      "$149.0000$"
    ],
    "answer": 3,
    "solution": [
      "The sample mean variance is 144/20.",
      "The independent surcharge is added once, so its full variance 5 is added; it is not averaged over 20 observations.",
      "The total variance is 144/20+5=12.2."
    ],
    "feedback": {
      "0": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "1": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "2": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size.",
      "4": "Distinguish averaging independent observations from adding one common random surcharge; the surcharge variance does not shrink with sample size."
    },
    "skills": [
      "sample mean",
      "independent random shift",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: sample mean, independent random shift, variance.",
      "The sample mean variance is 144/20."
    ],
    "verification": {
      "kind": "sample-shift",
      "n": 20,
      "sigma": 12,
      "varC": 5
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:31",
    "topicId": "mrv-e2-linear-moments",
    "family": "sample-mean-random-shift",
    "difficulty": 5,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent amounts X,Y are normal with means 1852,1802 and variances 3604,1816, respectively. Independently, a surcharge R is 1792 with probability 0.36 and zero otherwise. Let Z=2X-3Y+R. Calculate P(Z>-1672). Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$0.3183$",
      "$0.3635$",
      "$0.6365$",
      "$0.7565$",
      "$0.8183$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1702 and variance 30760; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.36 and 0.36.",
      "E[Z]=-1056.88, Var(Z)=770635.2256; E[Z²]=Var(Z)+E[Z]². The requested value is 0.636539."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1702 and variance 30760; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1852,
      "my": 1802,
      "vx": 3604,
      "vy": 1816,
      "p": 0.36,
      "C": 1792,
      "threshold": -1672,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:6",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Independent amounts X,Y are normal with means 1853,1803 and variances 3606,1817, respectively. Independently, a surcharge R is 1793 with probability 0.365 and zero otherwise. Let Z=2X-3Y+R. Calculate Var(Z). Use a standard normal table when needed. Round your answer to four decimal places.",
    "choices": [
      "$387949.3135$",
      "$620718.9016$",
      "$775898.6270$",
      "$931078.3524$",
      "$1551797.2540$"
    ],
    "answer": 2,
    "solution": [
      "2X-3Y is exactly normal with mean -1703 and variance 30777; signed coefficients are squared in the variance.",
      "Conditioning on R shifts this normal distribution. For a tail, weight the two standardized normal tails by 1-0.365 and 0.365.",
      "E[Z]=-1048.555, Var(Z)=775898.626975; E[Z²]=Var(Z)+E[Z]². The requested value is 775898.626975."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "independent normal combination",
      "discrete independent surcharge",
      "linear moments and probabilities"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal combination, discrete independent surcharge, linear moments and probabilities.",
      "2X-3Y is exactly normal with mean -1703 and variance 30777; signed coefficients are squared in the variance."
    ],
    "verification": {
      "kind": "section-linear",
      "mx": 1853,
      "my": 1803,
      "vx": 3606,
      "vy": 1817,
      "p": 0.365,
      "C": 1793,
      "threshold": -1673,
      "target": "variance",
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:7",
    "topicId": "mrv-e1-linear-combinations",
    "family": "cumulative-multivariate-random-variables-e",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations",
      "mrv-e2-linear-moments"
    ],
    "cumulative": true
  },
  {
    "question": "Independent counts X and Y are binomial with parameters (4,0.3) and (5,0.3), respectively. Each X claim costs two units and each Y claim costs one unit. Calculate P(2X+Y≤3). Round your answer to four decimal places.",
    "choices": [
      "$0.1800$",
      "$0.4014$",
      "$0.4501$",
      "$0.5499$",
      "$0.7297$"
    ],
    "answer": 2,
    "solution": [
      "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero.",
      "By independence, sum P(X=x)P(Y≤3-2x) over x=0,…,1.",
      "This weighted discrete sum equals 0.450125; the weighted count is not an ordinary binomial variable."
    ],
    "feedback": {
      "0": "This gives equality only.",
      "1": "This reverses the two costs.",
      "3": "This gives the probability the cost exceeds the limit.",
      "4": "This treats both claim types as having the same cost."
    },
    "skills": [
      "independent discrete sums",
      "weighted support",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent discrete sums, weighted support, conditional summation.",
      "For a fixed X=x, the permitted Y values satisfy Y≤3-2x. Values with 2x>3 contribute zero."
    ],
    "verification": {
      "kind": "weighted-binomial",
      "n": 4,
      "m": 5,
      "p": 0.30000000000000004,
      "q": 0.3,
      "limit": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:32",
    "topicId": "mrv-e1-linear-combinations",
    "family": "independent-weighted-binomial",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X and Y are uniform on the integers 1 through 6 and Bernoulli with success probability 0.35, respectively. Let Z=2X-3Y+5. Calculate E[Z²]. Round your answer to four decimal places.",
    "choices": [
      "$13.7142$",
      "$38.7142$",
      "$49.1167$",
      "$119.9025$",
      "$133.6167$"
    ],
    "answer": 4,
    "solution": [
      "E[Z]=2(7/2)-3(0.35)+5=10.95.",
      "Independence gives Var(Z)=4(35/12)+9(0.35)(0.65)=13.714167. The shift adds no variance.",
      "E[Z²]=Var(Z)+(E[Z])²=133.616667."
    ],
    "feedback": {
      "0": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "1": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "2": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring.",
      "3": "Distinguish the second raw moment from variance, square the linear coefficients in the variance, and include the shift in the mean before squaring."
    },
    "skills": [
      "moments of independent variables",
      "signed coefficients",
      "second raw moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: moments of independent variables, signed coefficients, second raw moment.",
      "E[Z]=2(7/2)-3(0.35)+5=10.95."
    ],
    "verification": {
      "kind": "independent-linear-raw",
      "n": 6,
      "p": 0.35000000000000003,
      "shift": 5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:33",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Weekly claim counts are independent and identically Poisson distributed. For one week, P(N=1)=1.2P(N=0). Calculate the probability of exactly 3 claims over 3 weeks. Round your answer to four decimal places.",
    "choices": [
      "$0.0007$",
      "$0.0273$",
      "$0.0867$",
      "$0.2125$",
      "$0.6973$"
    ],
    "answer": 3,
    "solution": [
      "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 1.2.",
      "The independent 3-week total is Poisson with mean 3.6.",
      "Its probability at 3 is exp(-3.6)(3.6)^3/3!=0.212469."
    ],
    "feedback": {
      "0": "This requires that count in every week, rather than in the entire period.",
      "1": "This gives zero claims.",
      "2": "This uses a one-week mean.",
      "4": "This gives at least the requested count."
    },
    "skills": [
      "infer a Poisson mean",
      "independent sums",
      "exact count"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Poisson mean, independent sums, exact count.",
      "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 1.2."
    ],
    "verification": {
      "kind": "poisson-aggregate",
      "lam": 1.2000000000000002,
      "periods": 3,
      "count": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:34",
    "topicId": "mrv-e1-linear-combinations",
    "family": "poisson-ratio-aggregate",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "7 independent measurements each have mean 100 and SD 14. Let M be their average. A cost is Z=1.2M+C, where C is independent of all measurements and has mean 5 and SD 2. Calculate SD(Z). Round your answer to four decimal places.",
    "choices": [
      "$6.1319$",
      "$6.6573$",
      "$8.3498$",
      "$16.9186$",
      "$44.3200$"
    ],
    "answer": 1,
    "solution": [
      "Var(M)=14²/7=28.",
      "Independence gives Var(Z)=1.2²Var(M)+Var(C)=44.32. The means do not affect this variance.",
      "Take the square root: SD(Z)=6.657327."
    ],
    "feedback": {
      "0": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "2": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "3": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root.",
      "4": "Divide measurement variance by sample size, square the scaling factor, add the independent surcharge variance, then take the square root."
    },
    "skills": [
      "moments of an independent average",
      "independent random surcharge",
      "SD of a linear combination"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: moments of an independent average, independent random surcharge, SD of a linear combination.",
      "Var(M)=14²/7=28."
    ],
    "verification": {
      "kind": "independent-average-sd",
      "sd": 14,
      "n": 7,
      "shiftSD": 2,
      "scale": 1.2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:35",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-average-sd",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent measurements X and Y are normal with means 75 and 60 and SDs 5 and 8, respectively. Calculate P(X<Y+10). Round your answer to four decimal places.",
    "choices": [
      "$0.1587$",
      "$0.2981$",
      "$0.3503$",
      "$0.4776$",
      "$0.7019$"
    ],
    "answer": 1,
    "solution": [
      "D=X-Y is normal with mean 75-60=15.",
      "Independence gives Var(D)=5²+8²=89; the negative coefficient does not subtract variance.",
      "Standardize D<10: Φ[(10-15)/√89]=0.298056."
    ],
    "feedback": {
      "0": "This ignores the variation in Y.",
      "2": "Independent SDs do not add directly.",
      "3": "This standardizes using variance instead of SD.",
      "4": "This is the upper rather than lower difference tail."
    },
    "skills": [
      "independent normal difference",
      "mean and variance of a linear combination",
      "tail probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: independent normal difference, mean and variance of a linear combination, tail probability.",
      "D=X-Y is normal with mean 75-60=15."
    ],
    "verification": {
      "kind": "normal-independent-difference",
      "mx": 75,
      "my": 60,
      "sx": 5,
      "sy": 8,
      "margin": 10,
      "probability": true
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:36",
    "topicId": "mrv-e1-linear-combinations",
    "family": "normal-independent-difference",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent counts X and Y are Poisson. Their zero-count probabilities are exp(-1.3) and exp(-1.4), respectively. Calculate Var(2X-3Y). Round your answer to four decimal places.",
    "choices": [
      "$-7.4000$",
      "$-1.6000$",
      "$4.2190$",
      "$6.8000$",
      "$17.8000$"
    ],
    "answer": 4,
    "solution": [
      "The identity P(N=0)=exp(-λ) gives means 1.3 and 1.4. Poisson variances equal those means.",
      "Independence gives zero covariance. Both the positive and negative coefficients must be squared in the variance.",
      "Var(2X-3Y)=4×1.3+9×1.4=17.8."
    ],
    "feedback": {
      "0": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "1": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "2": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment.",
      "3": "Infer both Poisson variances, square the coefficients, and distinguish variance from the mean, SD, and second raw moment."
    },
    "skills": [
      "infer Poisson parameters",
      "independent linear variance",
      "signed coefficients"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer Poisson parameters, independent linear variance, signed coefficients.",
      "The identity P(N=0)=exp(-λ) gives means 1.3 and 1.4. Poisson variances equal those means."
    ],
    "verification": {
      "kind": "poisson-linear-variance",
      "a": 1.3,
      "b": 1.4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:37",
    "topicId": "mrv-e2-linear-moments",
    "family": "independent-poisson-linear-variance",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  },
  {
    "question": "Independent normal X and Y have means 110 and 40. SD(X)=9. The variance of X+Y is 117. Calculate P(X-2Y>51.00000000). Round your answer to four decimal places.",
    "choices": [
      "$0.0808$",
      "$0.1215$",
      "$0.4628$",
      "$0.9192$",
      "$1.0000$"
    ],
    "answer": 0,
    "solution": [
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=117-81=36.",
      "X-2Y is exactly normal with mean 30 and SD √(81+4×36)=15.",
      "The standardized threshold is 1.4, so the upper-tail probability is 1-Φ(1.4)=0.080757."
    ],
    "feedback": {
      "1": "Recheck the setup and the requested quantity before evaluating the formula.",
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
      "Independence gives Var(Y)=Var(X+Y)-Var(X)=117-81=36."
    ],
    "verification": {
      "kind": "normal-combination",
      "muX": 110,
      "muY": 40,
      "sdX": 9,
      "sdY": 6,
      "a": 1,
      "b": -2,
      "t": 51.0,
      "target": "tail"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:38",
    "topicId": "mrv-e1-linear-combinations",
    "family": "normal-combination-infer",
    "difficulty": 6,
    "relatedTopicIds": [
      "mrv-e1-linear-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X,Y have means 11,15 and variances 4,10, respectively. For T=2X-3Y+5, calculate E[T²]. Round your answer to four decimal places.",
    "choices": [
      "$106.0000$",
      "$131.0000$",
      "$302.0000$",
      "$324.0000$",
      "$430.0000$"
    ],
    "answer": 4,
    "solution": [
      "Linearity gives E[T]=2(11)-3(15)+5=-18.",
      "Independence gives Var(T)=4(4)+9(10)=106; the constant contributes zero variance.",
      "E[T²]=Var(T)+(E[T])²=106+324=430."
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
      "Linearity gives E[T]=2(11)-3(15)+5=-18."
    ],
    "verification": {
      "kind": "linear-moments",
      "mx": 11,
      "my": 15,
      "vx": 4,
      "vy": 10,
      "a": 2,
      "b": -3,
      "shift": 5,
      "target": "second"
    },
    "level": "challenge",
    "id": "section:multivariate-random-variables-e:39",
    "topicId": "mrv-e2-linear-moments",
    "family": "linear-second-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "mrv-e2-linear-moments"
    ],
    "cumulative": false
  }
];

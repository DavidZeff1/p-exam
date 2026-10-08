export default [
  {
    "question": "An insurer covers 4 independent small risks, each with claim probability 0.34; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.6. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate P(S≤8 given Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.0113$",
      "$0.4943$",
      "$0.9887$",
      "$0.9900$",
      "$0.9943$"
    ],
    "answer": 2,
    "solution": [
      "X is binomial with parameters 4,0.34 and Y is Poisson with mean 0.6. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤8. For Y>0 exclude its zero row and divide by 1-exp(-0.6).",
      "E[S]=2.56 and Var(S)=3.2976. Use E[S²]=Var(S)+E[S]² when requested; the result is 0.988675."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 4,0.34 and Y is Poisson with mean 0.6. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 4,
      "p": 0.33999999999999997,
      "lam": 0.6000000000000001,
      "limit": 8,
      "target": "conditional",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:0",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "An insurer covers 5 independent small risks, each with claim probability 0.15; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.65. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate E[S²]. Round your answer to four decimal places.",
    "choices": [
      "$3.7200$",
      "$5.9520$",
      "$7.4400$",
      "$8.9280$",
      "$14.8800$"
    ],
    "answer": 2,
    "solution": [
      "X is binomial with parameters 5,0.15 and Y is Poisson with mean 0.65. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤4. For Y>0 exclude its zero row and divide by 1-exp(-0.65).",
      "E[S]=2.05 and Var(S)=3.2375. Use E[S²]=Var(S)+E[S]² when requested; the result is 7.44."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 5,0.15 and Y is Poisson with mean 0.65. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 5,
      "p": 0.15,
      "lam": 0.65,
      "limit": 4,
      "target": "second",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:1",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "X is equally likely to be each integer from 1 through 8. A contract pays Y=100 min(max(X-3,0),3). Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$132.2876$",
      "$17500.0000$",
      "$22500.0000$",
      "$40000.0000$",
      "$52500.0000$"
    ],
    "answer": 1,
    "solution": [
      "List the payment at each supported X value: 0, 0, 0, 100, 200, 300, 300, 300.",
      "The equal-weight moments are E[Y]=150 and E[Y²]=40000.",
      "Subtract the squared mean: Var(Y)=17500."
    ],
    "feedback": {
      "0": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
      "2": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
      "3": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
      "4": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments."
    },
    "skills": [
      "discrete support",
      "nonlinear transformation",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete support, nonlinear transformation, variance.",
      "List the payment at each supported X value: 0, 0, 0, 100, 200, 300, 300, 300."
    ],
    "verification": {
      "kind": "discrete-uniform-payment",
      "n": 8,
      "d": 3,
      "cap": 3,
      "B": 100,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:8",
    "topicId": "urv-b1-discrete-uniform",
    "family": "discrete-uniform-capped",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio contains 7 independent policies with a common unknown claim probability p. The probability no policy has a claim is 0.08235430. Given at least one claim, calculate the probability at least two policies have claims. Round your answer to four decimal places.",
    "choices": [
      "$0.2692$",
      "$0.3000$",
      "$0.6706$",
      "$0.7308$",
      "$0.9176$"
    ],
    "answer": 3,
    "solution": [
      "From (1-p)^7=0.08235430, take the nth root to obtain p=0.3.",
      "The zero and exactly-one probabilities are 0.082354 and 0.247063. Thus P(N≥2)=0.670583.",
      "Condition on N≥1 by dividing by 0.917646; the answer is 0.730764."
    ],
    "feedback": {
      "0": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
      "1": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
      "2": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
      "4": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability."
    },
    "skills": [
      "infer a Bernoulli parameter",
      "binomial complement",
      "truncation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Bernoulli parameter, binomial complement, truncation.",
      "From (1-p)^7=0.08235430, take the nth root to obtain p=0.3."
    ],
    "verification": {
      "kind": "binomial",
      "n": 7,
      "p": 0.30000000000000004,
      "target": "atleast2-given-positive"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:9",
    "topicId": "urv-b2-binomial",
    "family": "binomial-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b2-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "A device independently survives each year with probability 0.8, conditional on having survived to its start. If the first failure occurs in year t=1,2,3, the contract pays 200(4-t); after year 3 it pays zero. Calculate the variance of the payment. Round your answer to four decimal places.",
    "choices": [
      "$209.6000$",
      "$242.4620$",
      "$6400.0000$",
      "$58787.8400$",
      "$102720.0000$"
    ],
    "answer": 3,
    "solution": [
      "The first-failure year T is geometric: P(T=t)=0.2(0.8)^(t-1).",
      "Payment is 600, 400, 200 in the first three years; all later outcomes have payment zero.",
      "Weighted moments are E[Y]=209.6 and E[Y²]=102720.",
      "Var(Y)=E[Y²]-(E[Y])²=58787.84."
    ],
    "feedback": {
      "0": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
      "1": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
      "2": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance.",
      "4": "Use the complete payment distribution, including zero after the covered years. The second raw moment is not the variance."
    },
    "skills": [
      "geometric first occurrence",
      "piecewise benefit",
      "payment variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: geometric first occurrence, piecewise benefit, payment variance.",
      "The first-failure year T is geometric: P(T=t)=0.2(0.8)^(t-1)."
    ],
    "verification": {
      "kind": "geometric-benefit",
      "p": 0.2,
      "B": 200,
      "horizon": 4,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:10",
    "topicId": "urv-b3-geometric",
    "family": "geometric-benefit",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b3-geometric"
    ],
    "cumulative": false
  },
  {
    "question": "Independent inspections each find a defect with probability 0.35. Let T be the inspection number at which the second defect is found. Given that the second defect is found by inspection 7, calculate P(T=7). Round your answer to four decimal places.",
    "choices": [
      "$0.0853$",
      "$0.1113$",
      "$0.1599$",
      "$0.3896$",
      "$0.7662$"
    ],
    "answer": 1,
    "solution": [
      "To have T=s, the last inspection is defective and exactly one of the first s-1 is defective: P(T=s)=(s-1)p²(1-p)^(s-2).",
      "The numerator at s=7 is 0.085281. Sum these masses from s=2 through 7 for denominator 0.766201.",
      "The conditional probability is 0.111304."
    ],
    "feedback": {
      "0": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition.",
      "2": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition.",
      "3": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition.",
      "4": "The final trial must be the second success; a fixed-trial binomial count does not enforce this stopping condition."
    },
    "skills": [
      "stopping-time PMF",
      "truncated negative binomial"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: stopping-time PMF, truncated negative binomial.",
      "To have T=s, the last inspection is defective and exactly one of the first s-1 is defective: P(T=s)=(s-1)p²(1-p)^(s-2)."
    ],
    "verification": {
      "kind": "negative-binomial",
      "p": 0.35,
      "r": 2,
      "t": 7,
      "target": "at-t-given-by-t"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:11",
    "topicId": "urv-b4-negative-binomial",
    "family": "negative-binomial-joint",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b4-negative-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "A sample of four devices is selected uniformly without replacement from 11 devices, 5 of which are damaged. A warranty pays 100 per damaged device in the sample after the first damaged device. Calculate expected payment. Round your answer to four decimal places.",
    "choices": [
      "$81.8182$",
      "$86.3636$",
      "$95.4545$",
      "$101.0725$",
      "$181.8182$"
    ],
    "answer": 1,
    "solution": [
      "The sampled damaged count X is hypergeometric, so E[X]=4(5/11).",
      "The payment is B(X-1)₊. Since (X-1)₊=X-1+1{X=0}, expectation can be found from the mean and the zero probability.",
      "P(X=0)=choose(6,4)/choose(11,4)=0.045455; expected payment is 100[1.818182-1+0.045455]=86.363636."
    ],
    "feedback": {
      "0": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
      "2": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
      "4": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule."
    },
    "skills": [
      "hypergeometric mean",
      "count deductible",
      "zero mass"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: hypergeometric mean, count deductible, zero mass.",
      "The sampled damaged count X is hypergeometric, so E[X]=4(5/11)."
    ],
    "verification": {
      "kind": "hypergeom",
      "N": 11,
      "K": 5,
      "n": 4,
      "B": 100,
      "target": "excess-payment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:12",
    "topicId": "urv-b5-hypergeometric",
    "family": "hypergeom-payment",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b5-hypergeometric"
    ],
    "cumulative": false
  },
  {
    "question": "The annual number of equipment breakdowns is Poisson. Its probability of no breakdowns is exp(-1.2). A policy pays 400 for every breakdown after the first breakdown of the year. Calculate expected annual payment. Round your answer to four decimal places.",
    "choices": [
      "$80.0000$",
      "$200.4777$",
      "$234.5859$",
      "$279.5223$",
      "$480.0000$"
    ],
    "answer": 1,
    "solution": [
      "P(N=0)=exp(-λ) identifies λ=1.2.",
      "Payment is 400(N-1)₊. Use (N-1)₊=N-1+1{N=0}.",
      "E[Y]=400[λ-1+exp(-λ)]=200.477685."
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
      "P(N=0)=exp(-λ) identifies λ=1.2."
    ],
    "verification": {
      "kind": "poisson",
      "lam": 1.2000000000000002,
      "B": 400,
      "target": "excess-payment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:13",
    "topicId": "urv-b6-poisson",
    "family": "poisson-deductible",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b6-poisson"
    ],
    "cumulative": false
  },
  {
    "question": "Independent X,Y are each uniform on the integers 1 through 8. Given X+Y≥10, calculate P(X=Y). Round your answer to four decimal places.",
    "choices": [
      "$0.0625$",
      "$0.1250$",
      "$0.1429$",
      "$0.1941$",
      "$0.4375$"
    ],
    "answer": 2,
    "solution": [
      "All 64 ordered pairs are equally likely before conditioning.",
      "The condition allows 28 ordered pairs. Exactly 4 of these lie on the diagonal x=y.",
      "The conditional ratio is 4/28=0.142857."
    ],
    "feedback": {
      "0": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution.",
      "1": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
      "4": "Count equally likely ordered pairs satisfying both the condition and equality; the conditional distribution is not the original uniform pair distribution."
    },
    "skills": [
      "discrete uniform pairs",
      "sample-space counting",
      "conditioning"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete uniform pairs, sample-space counting, conditioning.",
      "All 64 ordered pairs are equally likely before conditioning."
    ],
    "verification": {
      "kind": "uniform-pairs",
      "n": 8,
      "threshold": 10,
      "target": "equal-given-tail"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:14",
    "topicId": "urv-b1-discrete-uniform",
    "family": "discrete-uniform-sum",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "6 independent devices each fail with probability 0.3 during a year. A contract pays nothing for the first failed device and 200 for each additional failed device, subject to a total payment cap of 400. Calculate expected annual payment. Round your answer to four decimal places.",
    "choices": [
      "$160.0000$",
      "$167.1030$",
      "$176.4702$",
      "$183.5298$",
      "$400.0000$"
    ],
    "answer": 1,
    "solution": [
      "The failure count N is binomial with n=6, p=0.3. The payment is 200min((N-1)₊,2).",
      "Use tail sums: expected payment = 200[P(N≥2)+P(N≥3)]. These two tail probabilities are 0.579825 and 0.25569.",
      "The expected payment is 167.103. This includes years with zero payment."
    ],
    "feedback": {
      "0": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count.",
      "2": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count.",
      "3": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count.",
      "4": "Apply the deductible count and cap to each count outcome before averaging, rather than applying them to the mean count."
    },
    "skills": [
      "identify binomial",
      "transform a count",
      "tail-sum expectation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: identify binomial, transform a count, tail-sum expectation.",
      "The failure count N is binomial with n=6, p=0.3. The payment is 200min((N-1)₊,2)."
    ],
    "verification": {
      "kind": "binomial",
      "n": 6,
      "p": 0.30000000000000004,
      "B": 200,
      "target": "capped-payment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:15",
    "topicId": "urv-b2-binomial",
    "family": "capped-binomial-payment",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b2-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer covers 6 independent small risks, each with claim probability 0.16; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.7. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate P(S>5). Round your answer to four decimal places.",
    "choices": [
      "$0.0334$",
      "$0.0668$",
      "$0.1868$",
      "$0.5334$",
      "$0.9332$"
    ],
    "answer": 1,
    "solution": [
      "X is binomial with parameters 6,0.16 and Y is Poisson with mean 0.7. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤5. For Y>0 exclude its zero row and divide by 1-exp(-0.7).",
      "E[S]=2.36 and Var(S)=3.6064. Use E[S²]=Var(S)+E[S]² when requested; the result is 0.066828."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 6,0.16 and Y is Poisson with mean 0.7. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 6,
      "p": 0.16,
      "lam": 0.7000000000000001,
      "limit": 5,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:2",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "An insurer covers 7 independent small risks, each with claim probability 0.17; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.75. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate P(S≤6 given Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.0865$",
      "$0.4568$",
      "$0.9135$",
      "$0.9568$",
      "$0.9900$"
    ],
    "answer": 2,
    "solution": [
      "X is binomial with parameters 7,0.17 and Y is Poisson with mean 0.75. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤6. For Y>0 exclude its zero row and divide by 1-exp(-0.75).",
      "E[S]=2.69 and Var(S)=3.9877. Use E[S²]=Var(S)+E[S]² when requested; the result is 0.913527."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 7,0.17 and Y is Poisson with mean 0.75. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 7,
      "p": 0.16999999999999998,
      "lam": 0.75,
      "limit": 6,
      "target": "conditional",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:3",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "The trial number T of a first success includes the successful trial. Independent trials have success probability 0.25. Given that a success occurs within 7 trials, calculate P(3<T≤6) under this condition. Round your answer to four decimal places.",
    "choices": [
      "$0.2439$",
      "$0.2815$",
      "$0.2967$",
      "$0.4219$",
      "$0.5781$"
    ],
    "answer": 1,
    "solution": [
      "For the trial-count convention P(T>k)=(1-p)^k.",
      "The requested interval has probability (0.75)^3-(0.75)^6=0.243896.",
      "It is contained in T≤7, whose probability is 0.866516. The conditional result is 0.281468."
    ],
    "feedback": {
      "0": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator.",
      "2": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator.",
      "3": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator.",
      "4": "This conditions on a finite upper bound, not just survival to the lower endpoint. Use the stated conditioning denominator."
    },
    "skills": [
      "waiting-time endpoints",
      "conditional interval probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: waiting-time endpoints, conditional interval probability.",
      "For the trial-count convention P(T>k)=(1-p)^k."
    ],
    "verification": {
      "kind": "geometric-interval",
      "p": 0.25,
      "a": 3,
      "b": 6,
      "limit": 7
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:16",
    "topicId": "urv-b3-geometric",
    "family": "geometric-conditioned",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b3-geometric"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials have success probability 0.3. T1 and T2 are the trial numbers of the first and second successes. Given T2=8, calculate P(T1≤2). Round your answer to four decimal places.",
    "choices": [
      "$0.2500$",
      "$0.2857$",
      "$0.3000$",
      "$0.5100$",
      "$0.6000$"
    ],
    "answer": 1,
    "solution": [
      "Given T2=8, exactly one success occurred among trials 1 through 7, and trial 8 is a success.",
      "Every permitted first-success position has the same joint probability p²(1-p)^(T2-2). Thus those positions are conditionally equally likely.",
      "There are 2 qualifying positions out of 7, giving 0.285714."
    ],
    "feedback": {
      "0": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials.",
      "2": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials.",
      "3": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials.",
      "4": "Conditioning on the second-success stopping time makes the first-success position uniform over the earlier trials."
    },
    "skills": [
      "joint stopping events",
      "conditional symmetry"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: joint stopping events, conditional symmetry.",
      "Given T2=8, exactly one success occurred among trials 1 through 7, and trial 8 is a success."
    ],
    "verification": {
      "kind": "success-positions",
      "p": 0.30000000000000004,
      "t": 8,
      "k": 2
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:17",
    "topicId": "urv-b4-negative-binomial",
    "family": "first-success-given-second",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b4-negative-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "A sample of four devices is selected uniformly without replacement from 11 devices, 5 of which are damaged. A warranty pays 150 per damaged device in the sample after the first damaged device. Calculate expected payment. Round your answer to four decimal places.",
    "choices": [
      "$122.7273$",
      "$129.5455$",
      "$143.1818$",
      "$151.5952$",
      "$272.7273$"
    ],
    "answer": 1,
    "solution": [
      "The sampled damaged count X is hypergeometric, so E[X]=4(5/11).",
      "The payment is B(X-1)₊. Since (X-1)₊=X-1+1{X=0}, expectation can be found from the mean and the zero probability.",
      "P(X=0)=choose(6,4)/choose(11,4)=0.045455; expected payment is 150[1.818182-1+0.045455]=129.545455."
    ],
    "feedback": {
      "0": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
      "2": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule.",
      "3": "Recheck the setup and the requested quantity before evaluating the formula.",
      "4": "The zero-count outcomes change the positive-part expectation; account for the finite-population sampling rule."
    },
    "skills": [
      "hypergeometric mean",
      "count deductible",
      "zero mass"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: hypergeometric mean, count deductible, zero mass.",
      "The sampled damaged count X is hypergeometric, so E[X]=4(5/11)."
    ],
    "verification": {
      "kind": "hypergeom",
      "N": 11,
      "K": 5,
      "n": 4,
      "B": 150,
      "target": "excess-payment"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:18",
    "topicId": "urv-b5-hypergeometric",
    "family": "hypergeom-payment",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b5-hypergeometric"
    ],
    "cumulative": false
  },
  {
    "question": "Independent claim counts X and Y from two branches are Poisson with means 1.2 and 1. Given X+Y=4, calculate P(X≥2). Round your answer to four decimal places.",
    "choices": [
      "$0.0885$",
      "$0.3374$",
      "$0.5455$",
      "$0.7524$",
      "$0.9573$"
    ],
    "answer": 3,
    "solution": [
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.545455.",
      "The requested tail is 1-P(X=0)-P(X=1) for that conditional binomial with n=4.",
      "Evaluate 1-(1-p)^4-4p(1-p)^3=0.752408."
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
      "For independent Poisson counts, the conditional distribution X given X+Y=n is binomial with p=λX/(λX+λY)=0.545455."
    ],
    "verification": {
      "kind": "poisson-split",
      "a": 1.2,
      "b": 1.0,
      "n": 4,
      "target": "atleast2"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:19",
    "topicId": "urv-b6-poisson",
    "family": "poisson-split-condition",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b6-poisson"
    ],
    "cumulative": false
  },
  {
    "question": "An integer-valued random variable X is uniform on 1 through 9. Given that X≥5, calculate the probability that X is even. Round your answer to four decimal places.",
    "choices": [
      "$0.2222$",
      "$0.4000$",
      "$0.4444$",
      "$0.5000$",
      "$0.6000$"
    ],
    "answer": 1,
    "solution": [
      "The condition retains the integers 5, 6, …, 9: 5 equally likely values.",
      "Exactly 2 retained integers are even. The endpoints must be counted, not approximated by half the interval.",
      "The conditional probability is 2/5=0.4."
    ],
    "feedback": {
      "0": "This is the joint probability and has not been renormalized.",
      "2": "This is the unconditional even probability.",
      "3": "Half is not guaranteed when a finite retained set has odd size.",
      "4": "This counts the odd integers."
    },
    "skills": [
      "discrete endpoints",
      "conditional uniform support"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete endpoints, conditional uniform support.",
      "The condition retains the integers 5, 6, …, 9: 5 equally likely values."
    ],
    "verification": {
      "kind": "uniform-lattice",
      "n": 9,
      "lower": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:20",
    "topicId": "urv-b1-discrete-uniform",
    "family": "uniform-lattice-condition",
    "difficulty": 3,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "N is the number of claims among 10 independent policies with the same unknown claim probability p. The ratio P(N=2)/P(N=1) is specified exactly as 9×0.275/[2×0.725]. Calculate P(N≥3). Round your answer to four decimal places.",
    "choices": [
      "$0.0208$",
      "$0.2628$",
      "$0.5479$",
      "$0.8077$",
      "$0.9599$"
    ],
    "answer": 2,
    "solution": [
      "The binomial ratio simplifies to (9/2)p/(1-p). Equating it to the supplied ratio gives p=0.275.",
      "At least three is the complement of zero, one, and two claims.",
      "Use 1-Σ from k=0 to 2 of choose(10,k)p^k(1-p)^(10-k), giving 0.547926."
    ],
    "feedback": {
      "0": "This requires three particular policies to claim and does not count the other possible outcomes.",
      "1": "This gives exactly three, not at least three.",
      "3": "This removes only zero and one, giving at least two.",
      "4": "This gives at least one."
    },
    "skills": [
      "infer a binomial parameter",
      "complement of a count tail"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a binomial parameter, complement of a count tail.",
      "The binomial ratio simplifies to (9/2)p/(1-p). Equating it to the supplied ratio gives p=0.275."
    ],
    "verification": {
      "kind": "binomial-odds",
      "n": 10,
      "p": 0.275,
      "ratio": 1.7068965517241381,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:21",
    "topicId": "urv-b2-binomial",
    "family": "binomial-odds-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b2-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "Independent daily inspections detect a defect with probability 0.35. Inspections stop on the first detection or after 7 inspections, whichever occurs first. Calculate the expected number of inspections performed. Round your answer to four decimal places.",
    "choices": [
      "$0.3432$",
      "$1.7171$",
      "$2.3739$",
      "$2.7171$",
      "$2.8571$"
    ],
    "answer": 3,
    "solution": [
      "Let T be the first successful inspection, so the number performed is min(T,h).",
      "Inspection j is performed exactly when the first j-1 inspections all fail. Thus E[min(T,7)]=Σ from j=1 to 7 of (1-0.35)^(j-1).",
      "The finite geometric sum is [1-(1-0.35)^7]/0.35=2.717079."
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
      "p": 0.35000000000000003,
      "horizon": 7,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:22",
    "topicId": "urv-b3-geometric",
    "family": "geometric-capped-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b3-geometric"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials succeed with probability 0.325. T is the trial number of the 4th success. Given that trial 1 failed, calculate P(T=10). Round your answer to four decimal places.",
    "choices": [
      "$0.0591$",
      "$0.0875$",
      "$0.0886$",
      "$0.1621$",
      "$0.2694$"
    ],
    "answer": 1,
    "solution": [
      "Trial 10 must succeed, and among trials 2 through 9 there must be exactly 3 successes.",
      "The first failure is given, so it contributes no probability factor after conditioning. There are choose(8,3) admissible success-position sets.",
      "The conditional probability is choose(8,3)(0.325)^4(0.675)^5=0.087547."
    ],
    "feedback": {
      "0": "This retains the factor for the first failure even though that failure is already given.",
      "2": "This is the unconditional negative-binomial probability.",
      "3": "This allows all required successes before the final trial.",
      "4": "This omits the required success on the final trial."
    },
    "skills": [
      "negative-binomial event",
      "conditional first trial",
      "success positions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: negative-binomial event, conditional first trial, success positions.",
      "Trial 10 must succeed, and among trials 2 through 9 there must be exactly 3 successes."
    ],
    "verification": {
      "kind": "negative-first-failure",
      "r": 4,
      "t": 10,
      "p": 0.325,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:23",
    "topicId": "urv-b4-negative-binomial",
    "family": "negative-binomial-first-failure",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b4-negative-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer covers 8 independent small risks, each with claim probability 0.18; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.8. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate E[S²]. Round your answer to four decimal places.",
    "choices": [
      "$6.8112$",
      "$10.8979$",
      "$13.6224$",
      "$16.3469$",
      "$27.2448$"
    ],
    "answer": 2,
    "solution": [
      "X is binomial with parameters 8,0.18 and Y is Poisson with mean 0.8. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤7. For Y>0 exclude its zero row and divide by 1-exp(-0.8).",
      "E[S]=3.04 and Var(S)=4.3808. Use E[S²]=Var(S)+E[S]² when requested; the result is 13.6224."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 8,0.18 and Y is Poisson with mean 0.8. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 8,
      "p": 0.18,
      "lam": 0.8,
      "limit": 7,
      "target": "second",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:4",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "An insurer covers 9 independent small risks, each with claim probability 0.19; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.85. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate P(S>8). Round your answer to four decimal places.",
    "choices": [
      "$0.0113$",
      "$0.0226$",
      "$0.1426$",
      "$0.5113$",
      "$0.9774$"
    ],
    "answer": 1,
    "solution": [
      "X is binomial with parameters 9,0.19 and Y is Poisson with mean 0.85. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤8. For Y>0 exclude its zero row and divide by 1-exp(-0.85).",
      "E[S]=3.41 and Var(S)=4.7851. Use E[S²]=Var(S)+E[S]² when requested; the result is 0.022562."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 9,0.19 and Y is Poisson with mean 0.85. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 9,
      "p": 0.19,
      "lam": 0.8500000000000001,
      "limit": 8,
      "target": "tail",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:5",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "A lot contains 14 parts, of which 6 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.3750$",
      "$0.4091$",
      "$0.4615$",
      "$0.5000$",
      "$0.9091$"
    ],
    "answer": 1,
    "solution": [
      "The remaining lot has 12 parts: 6 defective and 6 sound.",
      "Choose one defective and two sound parts in choose(6,1)choose(6,2) ways.",
      "Divide by choose(12,3) to obtain 0.409091."
    ],
    "feedback": {
      "0": "This treats the follow-up sample as sampling with replacement.",
      "2": "This samples from the original lot and ignores the observed removals.",
      "3": "This is the probability for only one new part.",
      "4": "This gives at least one, not exactly one."
    },
    "skills": [
      "update a finite population",
      "hypergeometric sample"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: update a finite population, hypergeometric sample.",
      "The remaining lot has 12 parts: 6 defective and 6 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 14,
      "K": 6,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:24",
    "topicId": "urv-b5-hypergeometric",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b5-hypergeometric"
    ],
    "cumulative": false
  },
  {
    "question": "Weekly claim counts are independent and identically Poisson distributed. For one week, P(N=1)=0.8P(N=0). Calculate the probability of exactly 5 claims over 2 weeks. Round your answer to four decimal places.",
    "choices": [
      "$0.0000$",
      "$0.0012$",
      "$0.0176$",
      "$0.0237$",
      "$0.2019$"
    ],
    "answer": 2,
    "solution": [
      "For a Poisson distribution, P(N=1)/P(N=0)=λ, so the weekly mean is 0.8.",
      "The independent 2-week total is Poisson with mean 1.6.",
      "Its probability at 5 is exp(-1.6)(1.6)^5/5!=0.017642."
    ],
    "feedback": {
      "0": "This requires that count in every week, rather than in the entire period.",
      "1": "This uses a one-week mean.",
      "3": "This gives at least the requested count.",
      "4": "This gives zero claims."
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
      "periods": 2,
      "count": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:25",
    "topicId": "urv-b6-poisson",
    "family": "poisson-ratio-aggregate",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b6-poisson"
    ],
    "cumulative": false
  },
  {
    "question": "X is uniform on the integers 1 through an unknown n. Its variance is specified exactly as 80/12. Calculate E[X given X≥4]. Round your answer to four decimal places.",
    "choices": [
      "$2.5000$",
      "$4.3333$",
      "$5.0000$",
      "$6.0000$",
      "$6.5000$"
    ],
    "answer": 4,
    "solution": [
      "For this distribution Var(X)=(n²-1)/12, so n²=81 and n=9.",
      "The conditional distribution is uniform on the integers 4 through 9.",
      "Its mean is the midpoint (4+9)/2=6.5."
    ],
    "feedback": {
      "0": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean.",
      "1": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean.",
      "2": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean.",
      "3": "Recover the inclusive integer support from its variance, then renormalize to the retained integers before finding their mean."
    },
    "skills": [
      "discrete-uniform variance",
      "infer support size",
      "conditional mean"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-uniform variance, infer support size, conditional mean.",
      "For this distribution Var(X)=(n²-1)/12, so n²=81 and n=9."
    ],
    "verification": {
      "kind": "uniform-support-infer",
      "n": 9,
      "threshold": 4,
      "variance": 6.666666666666667,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:26",
    "topicId": "urv-b1-discrete-uniform",
    "family": "uniform-infer-support",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A supplier shipment comes from plant A with probability 0.35, and otherwise from plant B. Within a shipment, inspected items are independent conditional on its plant. Defect probabilities are 0.4 at A and 0.1 at B. Exactly two of 6 inspected items are defective. Calculate the probability the shipment came from plant A. Round your answer to four decimal places.",
    "choices": [
      "$0.1089$",
      "$0.3500$",
      "$0.6299$",
      "$0.6829$",
      "$0.8960$"
    ],
    "answer": 2,
    "solution": [
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.098415 for B.",
      "Weight the likelihoods by plant shares 0.35 and 0.65.",
      "Bayes gives 0.108864/(0.108864+0.06397)=0.629877."
    ],
    "feedback": {
      "0": "This omits the total likelihood in the denominator.",
      "1": "This is the prior before observing the sample.",
      "3": "This updates using one defective item rather than the entire sample.",
      "4": "This omits the observed nondefective items."
    },
    "skills": [
      "conditional binomial likelihood",
      "Bayes over sample evidence"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional binomial likelihood, Bayes over sample evidence.",
      "The likelihoods of exactly two defects are choose(6,2)p²(1-p)^(4), giving 0.31104 for A and 0.098415 for B."
    ],
    "verification": {
      "kind": "bayes-binomial",
      "w": 0.35000000000000003,
      "rates": [
        0.39999999999999997,
        0.1
      ],
      "n": 6,
      "k": 2,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:27",
    "topicId": "urv-b2-binomial",
    "family": "bayes-sample-count",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b2-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "Independent daily trials succeed with probability p. T is the day of the first success. You are given P(T>3)=(0.775)^3. Given no success on the first 3 days, calculate the probability that the first success occurs during the next 4 days. Round your answer to four decimal places.",
    "choices": [
      "$0.1047$",
      "$0.2250$",
      "$0.2976$",
      "$0.3608$",
      "$0.6392$"
    ],
    "answer": 4,
    "solution": [
      "P(T>3)=(1-p)^3; its positive root gives 1-p=0.775 and p=0.225.",
      "After the known failures, the remaining trials still have the same success probability.",
      "The probability of at least one success in the next 4 trials is 1-(1-0.225)^4=0.63925."
    ],
    "feedback": {
      "0": "This gives the first success exactly on the last day of the new interval.",
      "1": "This considers only the next single trial.",
      "2": "This is the joint probability before conditioning on the known failures.",
      "3": "This gives no success during the next interval."
    },
    "skills": [
      "infer a geometric parameter",
      "memorylessness",
      "interval complement"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a geometric parameter, memorylessness, interval complement.",
      "P(T>3)=(1-p)^3; its positive root gives 1-p=0.775 and p=0.225."
    ],
    "verification": {
      "kind": "geometric-tail-infer",
      "p": 0.225,
      "elapsed": 3,
      "remaining": 4,
      "tail": 0.46548437500000006,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:28",
    "topicId": "urv-b3-geometric",
    "family": "geometric-tail-infer",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b3-geometric"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials succeed with probability 0.4. Trials stop at the 5th success. Exactly two successes have occurred in the first 8 trials. Calculate the expected total number of trials until stopping, conditional on this information. Round your answer to four decimal places.",
    "choices": [
      "$7.5000$",
      "$11.0000$",
      "$12.5000$",
      "$15.5000$",
      "$20.5000$"
    ],
    "answer": 3,
    "solution": [
      "The known history leaves 3 successes still required.",
      "The future waiting time is negative binomial with mean (5-2)/0.4=7.5.",
      "Add the already completed trials: 8+7.5=15.5."
    ],
    "feedback": {
      "0": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials.",
      "1": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials.",
      "2": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials.",
      "4": "Use the remaining success count, the convention counting all future trials rather than failures only, and add the elapsed trials."
    },
    "skills": [
      "conditional progress",
      "negative-binomial mean",
      "total versus remaining trials"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional progress, negative-binomial mean, total versus remaining trials.",
      "The known history leaves 3 successes still required."
    ],
    "verification": {
      "kind": "negative-progress",
      "p": 0.4,
      "r": 5,
      "elapsed": 8,
      "completed": 2,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:29",
    "topicId": "urv-b4-negative-binomial",
    "family": "negative-binomial-progress-mean",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b4-negative-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 5 class-A, 6 class-B, and 5 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$0.3246$",
      "$0.5950$",
      "$0.7232$",
      "$0.7438$",
      "$1.6364$"
    ],
    "answer": 1,
    "solution": [
      "Conditioning on X=2 leaves three sampled files drawn from the 11 non-A files, of which 6 are B.",
      "The conditional Y distribution is hypergeometric with population 11, success count 6, and sample size 3.",
      "Its variance is 3(6/11)(1-6/11)(11-3)/(11-1)=0.595041."
    ],
    "feedback": {
      "0": "Change the sample size and population after conditioning, and retain the finite-population correction.",
      "2": "Recheck the setup and the requested quantity before evaluating the formula.",
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
      "Conditioning on X=2 leaves three sampled files drawn from the 11 non-A files, of which 6 are B."
    ],
    "verification": {
      "kind": "conditional-hypergeom",
      "groups": [
        5,
        6,
        5
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:30",
    "topicId": "urv-b5-hypergeometric",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b5-hypergeometric"
    ],
    "cumulative": false
  },
  {
    "question": "N is Poisson with mean 1. Only policies with at most 4 claims are retained in a study. Calculate the mean claim count among retained policies. Round your answer to four decimal places.",
    "choices": [
      "$0.9810$",
      "$0.9846$",
      "$1.0000$",
      "$1.0037$",
      "$2.0000$"
    ],
    "answer": 1,
    "solution": [
      "The retained probability is Σ from n=0 to 4 of exp(-1)(1)^n/n!=0.99634.",
      "The retained first-moment sum is Σ nP(N=n) over those same counts, equal to 0.981012.",
      "Normalize to the study population: E[N given N≤4]=0.981012/0.99634=0.984615."
    ],
    "feedback": {
      "0": "This is the restricted first moment before normalization.",
      "2": "This is the mean of all policies before truncation.",
      "3": "The excluded high-count outcomes contribute to the mean and must be removed from the numerator.",
      "4": "The retained counts are not uniformly distributed."
    },
    "skills": [
      "truncated Poisson support",
      "conditional first moment"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: truncated Poisson support, conditional first moment.",
      "The retained probability is Σ from n=0 to 4 of exp(-1)(1)^n/n!=0.99634."
    ],
    "verification": {
      "kind": "poisson-truncated",
      "lam": 1.0,
      "upper": 4,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:31",
    "topicId": "urv-b6-poisson",
    "family": "poisson-truncated-mean",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b6-poisson"
    ],
    "cumulative": false
  },
  {
    "question": "An insurer covers 10 independent small risks, each with claim probability 0.2; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.9. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate P(S≤4 given Y>0). Round your answer to four decimal places.",
    "choices": [
      "$0.2239$",
      "$0.4477$",
      "$0.5523$",
      "$0.5677$",
      "$0.7239$"
    ],
    "answer": 1,
    "solution": [
      "X is binomial with parameters 10,0.2 and Y is Poisson with mean 0.9. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤4. For Y>0 exclude its zero row and divide by 1-exp(-0.9).",
      "E[S]=3.8 and Var(S)=5.2. Use E[S²]=Var(S)+E[S]² when requested; the result is 0.447729."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 10,0.2 and Y is Poisson with mean 0.9. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 10,
      "p": 0.2,
      "lam": 0.9,
      "limit": 4,
      "target": "conditional",
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:6",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "An insurer covers 4 independent small risks, each with claim probability 0.21; let X count their claims. Independently, large claims Y follow a Poisson distribution with mean 0.95. Each small claim uses one processing unit and each large claim uses two, so S=X+2Y. Calculate E[S²]. Round your answer to four decimal places.",
    "choices": [
      "$5.9856$",
      "$9.5770$",
      "$11.9712$",
      "$14.3654$",
      "$23.9424$"
    ],
    "answer": 2,
    "solution": [
      "X is binomial with parameters 4,0.21 and Y is Poisson with mean 0.95. Their joint mass factors by independence.",
      "For the count event, sum the joint masses satisfying x+2y≤5. For Y>0 exclude its zero row and divide by 1-exp(-0.95).",
      "E[S]=2.74 and Var(S)=4.4636. Use E[S²]=Var(S)+E[S]² when requested; the result is 11.9712."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "discrete distribution selection",
      "weighted counts",
      "conditional summation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete distribution selection, weighted counts, conditional summation.",
      "X is binomial with parameters 4,0.21 and Y is Poisson with mean 0.95. Their joint mass factors by independence."
    ],
    "verification": {
      "kind": "section-counts",
      "n": 4,
      "p": 0.21,
      "lam": 0.9500000000000001,
      "limit": 5,
      "target": "second",
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:7",
    "topicId": "urv-b1-discrete-uniform",
    "family": "cumulative-univariate-random-variables-b",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform",
      "urv-b2-binomial",
      "urv-b3-geometric",
      "urv-b4-negative-binomial",
      "urv-b5-hypergeometric",
      "urv-b6-poisson"
    ],
    "cumulative": true
  },
  {
    "question": "X is uniform on the integers 1 through 10. A cost is Y=6X²+6. Calculate E[Y]. Round your answer to four decimal places.",
    "choices": [
      "$39.0000$",
      "$55.5000$",
      "$187.5000$",
      "$231.0000$",
      "$237.0000$"
    ],
    "answer": 4,
    "solution": [
      "Each of the 10 values has probability 1/10.",
      "E[X²]=(1²+2²+⋯+10²)/10=(10+1)(2×10+1)/6.",
      "E[Y]=6E[X²]+6=237."
    ],
    "feedback": {
      "0": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean.",
      "1": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean.",
      "2": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean.",
      "3": "Average the squared values over the discrete uniform support and distinguish the second raw moment from the variance or squared mean."
    },
    "skills": [
      "discrete-uniform support",
      "second moment",
      "nonlinear cost"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete-uniform support, second moment, nonlinear cost.",
      "Each of the 10 values has probability 1/10."
    ],
    "verification": {
      "kind": "uniform-square",
      "n": 10,
      "scale": 6,
      "shift": 6,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:32",
    "topicId": "urv-b1-discrete-uniform",
    "family": "uniform-lattice-square-moment",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "7 independent policies each have claim probability 0.15. N is their claim count. Given that at least one claim occurred, calculate Var(N). Round your answer to four decimal places.",
    "choices": [
      "$0.5480$",
      "$0.8925$",
      "$1.3136$",
      "$1.8338$",
      "$2.9363$"
    ],
    "answer": 0,
    "solution": [
      "Unconditionally E[N]=1.05 and E[N²]=np(1-p)+(np)²=1.995.",
      "The condition probability is 0.679423. Because the excluded zero outcome contributes nothing, divide both raw moments by this probability.",
      "Conditional variance is 1.995/0.679423-(1.05/0.679423)²=0.547964."
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
      "Unconditionally E[N]=1.05 and E[N²]=np(1-p)+(np)²=1.995."
    ],
    "verification": {
      "kind": "binomial",
      "n": 7,
      "p": 0.15,
      "target": "positive-variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:33",
    "topicId": "urv-b2-binomial",
    "family": "conditional-binomial-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b2-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "Independent inspections find a fault with probability 0.375. T is the inspection number of the first fault. Given no fault in the first 5 inspections, calculate E[T]. Round your answer to four decimal places.",
    "choices": [
      "$2.6667$",
      "$6.0000$",
      "$6.6667$",
      "$7.6667$",
      "$16.0000$"
    ],
    "answer": 3,
    "solution": [
      "Future inspections retain their independent success probabilities.",
      "The remaining waiting time is geometric with mean 1/0.375=2.666667.",
      "Include the known inspections: E[T given T>5]=5+2.666667=7.666667."
    ],
    "feedback": {
      "0": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials.",
      "1": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials.",
      "2": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials.",
      "4": "Use memorylessness for future trials, count the successful trial, and add the elapsed trials."
    },
    "skills": [
      "conditional geometric waiting time",
      "total versus remaining count"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional geometric waiting time, total versus remaining count.",
      "Future inspections retain their independent success probabilities."
    ],
    "verification": {
      "kind": "geometric-late",
      "p": 0.375,
      "elapsed": 5,
      "probability": false
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:34",
    "topicId": "urv-b3-geometric",
    "family": "geometric-late-mean",
    "difficulty": 4,
    "relatedTopicIds": [
      "urv-b3-geometric"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials succeed with probability 0.3. T is the trial number of the 5th success. Given T>7, calculate P(T≤10). Round your answer to four decimal places.",
    "choices": [
      "$0.1215$",
      "$0.1251$",
      "$0.1503$",
      "$0.6570$",
      "$0.8749$"
    ],
    "answer": 1,
    "solution": [
      "T>n means fewer than 5 successes among the first n trials, so P(T>n)=Σ from k=0 to 4 of choose(n,k)p^k(1-p)^(n-k).",
      "The survival probabilities at 7 and 10 are 0.971204 and 0.849732.",
      "The conditional interval probability is 1-P(T>10)/P(T>7)=0.125074. For more than one required success, geometric memorylessness does not apply."
    ],
    "feedback": {
      "0": "This is the interval probability before conditioning.",
      "2": "This includes stopping times before the given lower bound.",
      "3": "This uses a first-success geometric event for a later-success stopping time.",
      "4": "This is survival beyond the upper bound, conditional on the lower bound."
    },
    "skills": [
      "negative-binomial to binomial counts",
      "conditional interval",
      "nonmemoryless waiting time"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: negative-binomial to binomial counts, conditional interval, nonmemoryless waiting time.",
      "T>n means fewer than 5 successes among the first n trials, so P(T>n)=Σ from k=0 to 4 of choose(n,k)p^k(1-p)^(n-k)."
    ],
    "verification": {
      "kind": "negative-interval",
      "r": 5,
      "p": 0.3,
      "a": 7,
      "b": 10,
      "probability": true
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:35",
    "topicId": "urv-b4-negative-binomial",
    "family": "negative-binomial-interval",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b4-negative-binomial"
    ],
    "cumulative": false
  },
  {
    "question": "A collection contains 5 class-A, 7 class-B, and 5 class-C files. Five are selected uniformly without replacement. X counts class-A files and Y counts class-B files in the sample. Given X=2, calculate Var(Y). Round your answer to four decimal places.",
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
        5,
        7,
        5
      ],
      "n": 5,
      "x": 2,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:36",
    "topicId": "urv-b5-hypergeometric",
    "family": "conditional-hypergeom-variance",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b5-hypergeometric"
    ],
    "cumulative": false
  },
  {
    "question": "An insured belongs permanently to class H with probability 0.4, otherwise to class L. Conditional on class, annual claim counts are independent Poisson variables with means 2 and 0.2, respectively. No claims occurred in either of two years. Calculate the posterior probability of class H. Round your answer to four decimal places.",
    "choices": [
      "$0.0073$",
      "$0.0179$",
      "$0.0183$",
      "$0.0993$",
      "$0.4000$"
    ],
    "answer": 1,
    "solution": [
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.67032 for L.",
      "The overall likelihood is 0.409518 after weighting by the prior class shares.",
      "The H posterior is 0.007326/0.409518=0.01789."
    ],
    "feedback": {
      "0": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
      "2": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
      "3": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate.",
      "4": "Condition on the entire two-year history. The unconditional portfolio is a mixture, not a single Poisson law with averaged rate."
    },
    "skills": [
      "Poisson likelihood",
      "conditional independence",
      "Bayes"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: Poisson likelihood, conditional independence, Bayes.",
      "No claims in both years has probability exp(-2λ), giving 0.018316 for H and 0.67032 for L."
    ],
    "verification": {
      "kind": "poisson-mixture",
      "w": 0.4,
      "rates": [
        2,
        0.2
      ],
      "n": 2,
      "target": "posterior-zero"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:37",
    "topicId": "urv-b6-poisson",
    "family": "mixture-no-claim",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b6-poisson"
    ],
    "cumulative": false
  },
  {
    "question": "X is equally likely to be each integer from 1 through 6. A contract pays Y=150 min(max(X-2,0),3). Calculate Var(Y). Round your answer to four decimal places.",
    "choices": [
      "$188.7459$",
      "$35625.0000$",
      "$50625.0000$",
      "$65625.0000$",
      "$86250.0000$"
    ],
    "answer": 1,
    "solution": [
      "List the payment at each supported X value: 0, 0, 150, 300, 450, 450.",
      "The equal-weight moments are E[Y]=225 and E[Y²]=86250.",
      "Subtract the squared mean: Var(Y)=35625."
    ],
    "feedback": {
      "0": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
      "2": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
      "3": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments.",
      "4": "A deductible and cap change the distribution; first transform each integer outcome and then average the resulting payments."
    },
    "skills": [
      "discrete support",
      "nonlinear transformation",
      "variance"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: discrete support, nonlinear transformation, variance.",
      "List the payment at each supported X value: 0, 0, 150, 300, 450, 450."
    ],
    "verification": {
      "kind": "discrete-uniform-payment",
      "n": 6,
      "d": 2,
      "cap": 3,
      "B": 150,
      "target": "variance"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:38",
    "topicId": "urv-b1-discrete-uniform",
    "family": "discrete-uniform-capped",
    "difficulty": 6,
    "relatedTopicIds": [
      "urv-b1-discrete-uniform"
    ],
    "cumulative": false
  },
  {
    "question": "A portfolio contains 5 independent policies with a common unknown claim probability p. The probability no policy has a claim is 0.32768000. Given at least one claim, calculate the probability at least two policies have claims. Round your answer to four decimal places.",
    "choices": [
      "$0.2000$",
      "$0.2627$",
      "$0.3908$",
      "$0.6092$",
      "$0.6723$"
    ],
    "answer": 2,
    "solution": [
      "From (1-p)^5=0.32768000, take the nth root to obtain p=0.2.",
      "The zero and exactly-one probabilities are 0.32768 and 0.4096. Thus P(N≥2)=0.26272.",
      "Condition on N≥1 by dividing by 0.67232; the answer is 0.390766."
    ],
    "feedback": {
      "0": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
      "1": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
      "3": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability.",
      "4": "Recover p, remove both the zero and one outcomes, and renormalize by the positive-count probability."
    },
    "skills": [
      "infer a Bernoulli parameter",
      "binomial complement",
      "truncation"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: infer a Bernoulli parameter, binomial complement, truncation.",
      "From (1-p)^5=0.32768000, take the nth root to obtain p=0.2."
    ],
    "verification": {
      "kind": "binomial",
      "n": 5,
      "p": 0.2,
      "target": "atleast2-given-positive"
    },
    "level": "challenge",
    "id": "section:univariate-random-variables-b:39",
    "topicId": "urv-b2-binomial",
    "family": "binomial-infer",
    "difficulty": 5,
    "relatedTopicIds": [
      "urv-b2-binomial"
    ],
    "cumulative": false
  }
];

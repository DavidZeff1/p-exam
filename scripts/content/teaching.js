export default {
  "a1-set-functions": {
    "scenario": "How could you assign a dollar amount to every collection of claims?",
    "intuition": "A set function takes a whole collection as its input and returns one value. Probability is one example; a claim total is another.",
    "method": "Identify the input set and what the output measures.",
    "trap": "A set function need not be a probability.",
    "check": {
      "question": "Must every set function take values between 0 and 1?",
      "choices": [
        "Yes; every set function is a probability.",
        "Yes; a set can only contain one outcome.",
        "No; only a probability measure has that restriction."
      ],
      "answer": 2,
      "explanation": "A total-loss set function can return 5000. The probability axioms impose additional restrictions."
    },
    "setup": "Write the collection of inputs, then apply the stated rule to that whole collection."
  },
  "a2-venn-diagrams": {
    "scenario": "Some policyholders have both auto and home coverage. How can you count them only once?",
    "intuition": "A Venn diagram makes overlapping events visible. Read each region as an event before adding its probability.",
    "method": "Translate and, or, and not into intersection, union, and complement.",
    "trap": "Adding both circles counts their intersection twice.",
    "check": {
      "question": "Where do outcomes in A but not B belong?",
      "choices": [
        "Inside the overlap.",
        "Inside A and outside B.",
        "Outside both circles."
      ],
      "answer": 1,
      "explanation": "The event is the intersection of A with the complement of B."
    },
    "setup": "Write P(A union B)=P(A)+P(B)-P(A intersection B). For exactly one, remove the overlap from both events."
  },
  "a3-sample-space": {
    "scenario": "What counts as one outcome when you observe claims on two policies?",
    "intuition": "The sample space lists complete outcomes. Define one outcome before deciding which outcomes satisfy the question.",
    "method": "List complete outcomes, then decide whether they are equally likely.",
    "trap": "Counting favorable outcomes only works as a probability ratio when outcomes are equally likely.",
    "check": {
      "question": "Two yes/no claim indicators are observed. How many ordered outcomes are there?",
      "choices": [
        "Four.",
        "Two.",
        "Three."
      ],
      "answer": 0,
      "explanation": "The outcomes are no/no, no/yes, yes/no, and yes/yes. The policy labels distinguish the middle two."
    },
    "setup": "List complete outcomes and mark every outcome satisfying the question. For at least one, consider the complement of none."
  },
  "a4-events": {
    "scenario": "What does “at least one claim” include when two policies are observed?",
    "intuition": "An event collects every outcome that meets a condition. Its complement is often simpler to calculate.",
    "method": "Write the event and its complement in words first.",
    "trap": "At least one includes both; exactly one does not.",
    "check": {
      "question": "What is the complement of at least one claim?",
      "choices": [
        "No claims.",
        "Exactly one claim.",
        "Two claims."
      ],
      "answer": 0,
      "explanation": "Every outcome either has no claims or at least one claim."
    },
    "setup": "List complete outcomes and mark every outcome satisfying the question. For at least one, consider the complement of none."
  },
  "a5-probability-set-function": {
    "scenario": "Why can you add some event probabilities directly but not others?",
    "intuition": "Probability assigns a number to an event. Additivity applies directly to disjoint events because no outcome is counted twice.",
    "method": "Check for overlap before adding probabilities.",
    "trap": "Probabilities of overlapping events are not directly additive.",
    "check": {
      "question": "When is P(A union B) equal to P(A)+P(B)?",
      "choices": [
        "Whenever A and B are independent.",
        "Whenever both probabilities are positive.",
        "When A and B are disjoint."
      ],
      "answer": 2,
      "explanation": "Disjoint events have an empty intersection; independence is a different property."
    },
    "setup": "For disjoint exhaustive outcomes, set the sum of their probabilities equal to one. Check that every mass is nonnegative."
  },
  "a6-axioms-probability": {
    "scenario": "Can a proposed table really describe a probability model?",
    "intuition": "A valid model assigns nonnegative probabilities and total probability one. These simple rules constrain every calculation.",
    "method": "Check nonnegativity, total mass, and disjoint additivity.",
    "trap": "Individual entries in range do not guarantee their total is one.",
    "check": {
      "question": "Probabilities 0.2, 0.3, and 0.6 cover disjoint exhaustive outcomes. Is the model valid?",
      "choices": [
        "Yes; each entry is between zero and one.",
        "No; they sum to 1.1.",
        "Yes; there are three outcomes."
      ],
      "answer": 1,
      "explanation": "Disjoint exhaustive outcomes must have probabilities summing to exactly one."
    },
    "setup": "For disjoint exhaustive outcomes, set the sum of their probabilities equal to one. Check that every mass is nonnegative."
  },
  "b1-counting-principles": {
    "scenario": "How many policies can be built from three deductible options and two coverage options?",
    "intuition": "Count choices stage by stage. Multiply when every first choice can be paired with every second choice; add across disjoint alternatives.",
    "method": "Describe the stages and check whether every pairing is allowed.",
    "trap": "Restrictions can change the number of choices at later stages.",
    "check": {
      "question": "Three deductibles can each be paired with two coverage options. How many policies?",
      "choices": [
        "Five.",
        "Nine.",
        "Six."
      ],
      "answer": 2,
      "explanation": "Each of the three first choices has two second choices, giving 3 times 2."
    },
    "setup": "Write one factor for each choice stage. Recalculate later factors when earlier choices impose restrictions."
  },
  "b2-permutations": {
    "scenario": "How many ways can you assign three different prizes to five people?",
    "intuition": "Order matters when roles or positions differ. Count arrangements rather than unordered groups.",
    "method": "Ask whether swapping two selected people changes the outcome.",
    "trap": "A committee and a ranked list have different counts.",
    "check": {
      "question": "Does swapping the president and treasurer create a different assignment?",
      "choices": [
        "No; the same people are selected.",
        "Yes; the roles are different.",
        "Only if the people have different ages."
      ],
      "answer": 1,
      "explanation": "Different labeled roles make order relevant."
    },
    "setup": "For r different labeled positions chosen from n people without repeats, write n(n-1)...(n-r+1)."
  },
  "b3-combinations": {
    "scenario": "How many committees of three can be chosen from five people?",
    "intuition": "When only membership matters, many ordered lists describe the same group. Divide out those repeated arrangements.",
    "method": "Use combinations when order within the selection is irrelevant.",
    "trap": "Do not divide by a factorial when positions are labeled.",
    "check": {
      "question": "Does selecting A, B, C differ from selecting C, A, B for an ordinary committee?",
      "choices": [
        "Yes; every ordering is a different committee.",
        "No; membership is the same.",
        "Only if selection is without replacement."
      ],
      "answer": 1,
      "explanation": "There are 3 factorial ordered lists for one three-member committee."
    },
    "setup": "For an unordered selection of r from n, write n!/[r!(n-r)!]. Separate required groups before multiplying counts."
  },
  "b4-combinatorial-probability": {
    "scenario": "A sample of claims contains two large losses. How many samples satisfy that condition?",
    "intuition": "Count favorable selections and all selections using the same outcome definition. Their ratio is a probability when each selection is equally likely.",
    "method": "Choose a counting model, then use it in numerator and denominator.",
    "trap": "Mixing ordered numerators with unordered denominators changes the ratio.",
    "check": {
      "question": "Can an ordered favorable count be divided by an unordered total count?",
      "choices": [
        "No; both counts must use the same outcome definition.",
        "Yes; the ratio always corrects order.",
        "Yes; if the numerator is smaller."
      ],
      "answer": 0,
      "explanation": "A probability ratio needs consistent, equally likely elementary outcomes."
    },
    "setup": "Write probability as favorable equally likely selections divided by total equally likely selections. Use the same counting convention in both."
  },
  "c1-independent-events": {
    "scenario": "Does knowing one policy had a claim change the chance another did?",
    "intuition": "Independence means information about one event does not change the probability of the other. It permits multiplication of their probabilities.",
    "method": "Check a stated independence assumption or the product identity.",
    "trap": "Mutually exclusive positive-probability events are dependent.",
    "check": {
      "question": "Can independent events each with probability 0.5 have an empty intersection?",
      "choices": [
        "Yes; independence means they cannot occur together.",
        "No; their intersection must have probability 0.25.",
        "Yes; their union must have probability 1."
      ],
      "answer": 1,
      "explanation": "Independence gives the product 0.5 times 0.5."
    },
    "setup": "For independent events, multiply their probabilities. For at least one, write one minus the product of no-occurrence probabilities."
  },
  "c2-independent-trials": {
    "scenario": "What is the chance no claim occurs across five independent policies?",
    "intuition": "Independence lets you multiply probabilities across trials. For at least one occurrence, calculating no occurrences first is often easier.",
    "method": "Use a product across independent trials; use a complement for at least one.",
    "trap": "Identical trial probabilities alone do not establish independence.",
    "check": {
      "question": "If each independent policy has claim probability p, what is the chance none of n has a claim?",
      "choices": [
        "1 minus p raised to n.",
        "n times (1-p).",
        "(1-p) raised to n."
      ],
      "answer": 2,
      "explanation": "Every policy must avoid a claim, so multiply n no-claim probabilities."
    },
    "setup": "For independent events, multiply their probabilities. For at least one, write one minus the product of no-occurrence probabilities."
  },
  "d1-mutually-exclusive": {
    "scenario": "Can a single claim be both below 1000 and at least 1000?",
    "intuition": "Mutually exclusive events cannot happen together. Their intersection is empty, so union probabilities add directly.",
    "method": "Check whether one outcome can satisfy both descriptions.",
    "trap": "Disjointness does not imply independence.",
    "check": {
      "question": "Two disjoint events have positive probability. Are they independent?",
      "choices": [
        "Yes; disjoint means independent.",
        "No.",
        "Always, if their probabilities are equal."
      ],
      "answer": 1,
      "explanation": "Their intersection is zero, but the product of their positive probabilities is positive."
    },
    "setup": "Set the intersection probability to zero. For a union of disjoint events, add the individual probabilities."
  },
  "d2-partitions": {
    "scenario": "An insurer has three risk classes. How can their claim rates give the overall rate?",
    "intuition": "A partition separates the population into nonoverlapping groups that cover everyone. Weight each group rate by its population share.",
    "method": "Check that the groups are exhaustive and disjoint before weighting.",
    "trap": "Group rates are not averaged equally unless group sizes are equal.",
    "check": {
      "question": "Risk classes have different population shares. How should their claim rates be combined?",
      "choices": [
        "Weight each rate by its class probability.",
        "Take their unweighted average.",
        "Add the rates directly."
      ],
      "answer": 0,
      "explanation": "The overall rate counts claims from each class in proportion to how common that class is."
    },
    "setup": "Make a row for each group with its population share and conditional event rate. Multiply within rows, then add all group contributions."
  },
  "e1-addition-rule": {
    "scenario": "How likely is auto coverage or home coverage, including people with both?",
    "intuition": "A union counts every qualifying outcome once. Subtract the intersection after adding the individual probabilities.",
    "method": "Use union equals A plus B minus their intersection.",
    "trap": "The word or is inclusive unless the question says exactly one.",
    "check": {
      "question": "Why subtract the intersection in the addition rule?",
      "choices": [
        "It was counted twice.",
        "It is impossible.",
        "It must be independent."
      ],
      "answer": 0,
      "explanation": "An outcome in both events enters each individual probability, but belongs only once in the union."
    },
    "setup": "Write P(A union B)=P(A)+P(B)-P(A intersection B). For exactly one, remove the overlap from both events."
  },
  "e2-multiplication-rule": {
    "scenario": "How likely is a claim followed by a large payment?",
    "intuition": "Build a joint event in stages. Multiply the first-event probability by the second-event probability conditional on the first.",
    "method": "Use a conditional probability at the second stage unless independence is established.",
    "trap": "The unconditional second probability may differ from its conditional probability.",
    "check": {
      "question": "Which identity always gives P(A intersection B) when P(A)>0?",
      "choices": [
        "P(A) times P(B given A).",
        "P(A) times P(B).",
        "P(A)+P(B)."
      ],
      "answer": 0,
      "explanation": "The conditional factor restricts the second stage to outcomes where A occurs."
    },
    "setup": "For a path write P(first event) times P(second given first). Add alternative paths only after checking they are disjoint."
  },
  "e3-combined-problems": {
    "scenario": "A claim can arrive through several routes. Which rules should be used at each stage?",
    "intuition": "Separate mutually exclusive routes, calculate each route with conditional multiplication, and then add the routes.",
    "method": "Draw routes first; multiply along a route and add across disjoint routes.",
    "trap": "Adding overlapping routes counts some outcomes more than once.",
    "check": {
      "question": "How do you combine disjoint routes through a probability tree?",
      "choices": [
        "Add along each route, then multiply routes.",
        "Multiply every number in the whole tree.",
        "Multiply along each route, then add route probabilities."
      ],
      "answer": 2,
      "explanation": "A route is a joint event; alternative disjoint routes form a union."
    },
    "setup": "For a path write P(first event) times P(second given first). Add alternative paths only after checking they are disjoint."
  },
  "f1-conditional-probability": {
    "scenario": "Of policyholders who filed a claim, what fraction have home coverage?",
    "intuition": "Given a claim, only claim-filing policyholders remain in the denominator. Conditional probability rescales that smaller population to total probability one.",
    "method": "Put the event after given in the denominator.",
    "trap": "Reversing the condition usually changes the answer.",
    "check": {
      "question": "For P(A given B), which event defines the denominator?",
      "choices": [
        "B.",
        "A.",
        "The union of A and B."
      ],
      "answer": 0,
      "explanation": "The reference population is the event B, so divide the intersection probability by P(B)."
    },
    "setup": "Write P(requested event intersection condition)/P(condition). Identify the conditioning population before inserting numbers."
  },
  "f2-bayes-theorem": {
    "scenario": "A claim was flagged as suspicious. What is the chance it is actually fraudulent?",
    "intuition": "Among flagged claims, compare flagged fraud with all flagged claims. A sensitive screen can still flag many legitimate claims when fraud is rare.",
    "method": "Reverse a known conditional probability using prior group shares and total probability.",
    "trap": "Sensitivity is not the probability of fraud given a flag.",
    "check": {
      "question": "If fraud becomes rarer while screening accuracy stays fixed, what happens to the fraud fraction among flagged claims?",
      "choices": [
        "It decreases.",
        "It increases.",
        "It stays equal to sensitivity."
      ],
      "answer": 0,
      "explanation": "Fewer flags come from fraud; legitimate false positives become a larger share of all flags."
    },
    "setup": "The numerator is the target group share times its event rate. The denominator adds share times event rate over every group."
  },
  "f3-law-total-probability": {
    "scenario": "What is the overall claim rate when risk classes have different claim rates?",
    "intuition": "Find the contribution from each group, then add those contributions. This is a weighted average across a partition.",
    "method": "Multiply each conditional probability by its group share and add.",
    "trap": "Every possible group must be included in the denominator used by Bayes.",
    "check": {
      "question": "Which expression is a group contribution to P(claim)?",
      "choices": [
        "P(group given claim).",
        "P(claim given group) alone.",
        "P(claim given group) times P(group)."
      ],
      "answer": 2,
      "explanation": "A group contributes only in proportion to how often that group occurs."
    },
    "setup": "Make a row for each group with its population share and conditional event rate. Multiply within rows, then add all group contributions."
  },
  "urv-a1-random-variables": {
    "scenario": "How can an outcome such as a claim history become a number you can average?",
    "intuition": "A random variable assigns a numerical value to each outcome. Different outcomes can produce the same value.",
    "method": "Define exactly what is counted or measured and its possible values.",
    "trap": "An outcome and the number assigned to it are different objects.",
    "check": {
      "question": "Must different sample outcomes have different random-variable values?",
      "choices": [
        "Yes.",
        "No.",
        "Only for discrete variables."
      ],
      "answer": 1,
      "explanation": "For example, several different claim histories can each contain exactly two claims."
    },
    "setup": "Define the value X assigned to each outcome, its support, and the probabilities of those values."
  },
  "urv-a2-pdf": {
    "scenario": "A density is taller than one. Can it still describe a valid loss distribution?",
    "intuition": "A density describes how probability is spread over an interval. Probability is area under the curve, not its height at a point.",
    "method": "Integrate over the requested interval and normalize over the full support.",
    "trap": "A continuous point probability is zero even when the density there is positive.",
    "check": {
      "question": "Can a continuous density exceed 1?",
      "choices": [
        "Yes, if its total area is 1.",
        "No; height is always probability.",
        "Only if some probabilities are negative."
      ],
      "answer": 0,
      "explanation": "A uniform density on (0,0.5) has height 2 and area 1."
    },
    "setup": "First set the integral over the entire support equal to one. Then integrate the normalized density over the requested region."
  },
  "urv-a3-cdf": {
    "scenario": "What fraction of losses are no greater than a chosen threshold?",
    "intuition": "The CDF accumulates probability from the left. Differences of cumulative probabilities isolate an interval.",
    "method": "Translate inequalities carefully; use CDF differences for intervals.",
    "trap": "For a discrete variable, endpoint masses matter.",
    "check": {
      "question": "What does F(b)-F(a) give for any random variable?",
      "choices": [
        "P(a < X <= b).",
        "P(a <= X <= b).",
        "The density at b."
      ],
      "answer": 0,
      "explanation": "Subtracting F(a) removes all mass at or below a; mass at b remains included."
    },
    "setup": "Write F(x)=P(X<=x). For an interval, subtract cumulative probabilities and check whether each endpoint is included."
  },
  "urv-b1-discrete-uniform": {
    "scenario": "An integer claim count is equally likely to be any value from 1 to 6. What is its mean?",
    "intuition": "Each supported integer has the same probability. Count supported values before assigning weights.",
    "method": "Use equal weights on a finite list of integers.",
    "trap": "An inclusive integer range a through b contains b-a+1 values.",
    "check": {
      "question": "How many integer values are in the inclusive range 2 through 6?",
      "choices": [
        "Five.",
        "Four.",
        "Six."
      ],
      "answer": 0,
      "explanation": "The list is 2,3,4,5,6. Both endpoints are included."
    },
    "setup": "Count the supported integers. Give each weight 1/(number of values), then sum only the requested values."
  },
  "urv-b2-binomial": {
    "scenario": "Among ten independent policies, how many will file a claim this year?",
    "intuition": "The number of successes in a fixed number of independent trials is binomial when every trial has the same success probability.",
    "method": "Look for fixed n, independence, a common p, and two outcomes per trial.",
    "trap": "Sampling without replacement from a finite population is usually not binomial.",
    "check": {
      "question": "Which feature makes a binomial model appropriate?",
      "choices": [
        "Trials stop at the first success.",
        "Sampling a finite population without replacement.",
        "A fixed number of independent trials with a common success probability."
      ],
      "answer": 2,
      "explanation": "The fixed trial count distinguishes binomial from geometric and negative binomial models."
    },
    "setup": "Write P(X=k)=choose(n,k) p^k (1-p)^(n-k). Sum over all permitted k values if the question asks for a range."
  },
  "urv-b3-geometric": {
    "scenario": "How many independent policies are checked before the first claim is found?",
    "intuition": "Geometric waiting counts stop at the first success. Decide whether the count includes the successful trial.",
    "method": "Look for repeated independent trials with fixed p, stopping at the first success.",
    "trap": "Trial count starts at 1; failure count starts at 0.",
    "check": {
      "question": "If the first trial succeeds, what is the number of trials until success?",
      "choices": [
        "Zero.",
        "Two.",
        "One."
      ],
      "answer": 2,
      "explanation": "The successful trial is included. A failures-before-success convention would instead give zero."
    },
    "setup": "For trials until success, write P(T=t)=(1-p)^(t-1) p. A failures-before-success count instead starts at zero."
  },
  "urv-b4-negative-binomial": {
    "scenario": "How many policies are checked before the third claim is found?",
    "intuition": "Negative binomial counts stop at a specified success number. The final trial must be a success.",
    "method": "Fix the stopping success r and distinguish trials from failures.",
    "trap": "For a trial count t, the first t-1 trials must contain exactly r-1 successes.",
    "check": {
      "question": "What must happen on the last trial when stopping at the rth success?",
      "choices": [
        "A success.",
        "A failure.",
        "Either outcome."
      ],
      "answer": 0,
      "explanation": "The stopping rule is met only by the success that brings the total to r."
    },
    "setup": "For trials until success r, write choose(t-1,r-1) p^r (1-p)^(t-r). The final trial must be a success."
  },
  "urv-b5-hypergeometric": {
    "scenario": "Three files are selected without replacement from a known set of fraudulent and legitimate files. How many are fraudulent?",
    "intuition": "Removing a file changes the composition of the remaining pool. Count selections of successes and failures separately.",
    "method": "Use a finite population with a fixed success count and sampling without replacement.",
    "trap": "The draws are dependent even if every file initially has the same selection chance.",
    "check": {
      "question": "Which condition points to hypergeometric rather than binomial?",
      "choices": [
        "A constant probability on independent trials.",
        "Sampling without replacement from a finite population.",
        "Waiting for a first event."
      ],
      "answer": 1,
      "explanation": "The success probability on a later draw depends on what has already been removed."
    },
    "setup": "Write choose(K,k) choose(N-K,n-k)/choose(N,n). Label the population size N, success count K, and sample size n first."
  },
  "urv-b6-poisson": {
    "scenario": "How many claims arrive during a month when arrivals follow a constant-rate Poisson process?",
    "intuition": "A Poisson variable counts events over an exposure period. Its parameter is the expected count for that period.",
    "method": "Match rate units to the exposure before finding lambda.",
    "trap": "A rate per year is not the monthly expected count.",
    "check": {
      "question": "A Poisson process averages 12 claims per year. What is the mean count over three months?",
      "choices": [
        "Twelve.",
        "Thirty-six.",
        "Three."
      ],
      "answer": 2,
      "explanation": "Three months is one quarter of a year, giving 12 times one quarter."
    },
    "setup": "Convert rate times exposure into lambda. Use P(N=k)=exp(-lambda) lambda^k/k!, summing if more than one count is allowed."
  },
  "urv-c1-continuous-uniform": {
    "scenario": "Loss amounts are uniformly spread between 0 and 1000. What fraction exceed 600?",
    "intuition": "Equal-length subintervals have equal probabilities. Divide the qualifying length by the total support length.",
    "method": "Use interval lengths on a bounded continuous support.",
    "trap": "Uniform height is the reciprocal of the support length.",
    "check": {
      "question": "For uniform (0,10), what is P(2<X<5)?",
      "choices": [
        "0.3.",
        "3.",
        "0.5."
      ],
      "answer": 0,
      "explanation": "The qualifying interval has length 3 out of total length 10."
    },
    "setup": "Probability is the length of the qualifying part of (a,b) divided by b-a. Intersect with the support before measuring."
  },
  "urv-c2-exponential": {
    "scenario": "How long until the next claim in a constant-rate Poisson process?",
    "intuition": "Exponential waiting times have constant hazard. Survival over a time interval decays exponentially.",
    "method": "Look for one waiting time with constant rate; state rate versus mean.",
    "trap": "Memorylessness applies to exponential waiting times, not to every continuous distribution.",
    "check": {
      "question": "What is a rate-lambda exponential mean?",
      "choices": [
        "1 divided by lambda.",
        "Lambda.",
        "Lambda squared."
      ],
      "answer": 0,
      "explanation": "Rate has units events per time, so its reciprocal has units of time."
    },
    "setup": "Label the rate lambda; if the mean is given, lambda=1/mean. Survival beyond t is exp(-lambda t)."
  },
  "urv-c3-gamma": {
    "scenario": "How long until the third claim arrives in a constant-rate Poisson process?",
    "intuition": "For integer shape, gamma adds independent exponential waiting times. More generally, positive shape allows flexible right-skewed continuous models.",
    "method": "State shape and rate or scale before using a formula.",
    "trap": "Rate is the reciprocal of scale; swapping them changes moments.",
    "check": {
      "question": "If scale is 4, what is the corresponding rate?",
      "choices": [
        "0.25.",
        "4.",
        "16."
      ],
      "answer": 0,
      "explanation": "Rate and scale are reciprocals. Mean is shape times scale, or shape divided by rate."
    },
    "setup": "State shape alpha and rate lambda or scale theta. Mean is alpha/lambda=alpha theta; variance is alpha/lambda squared=alpha theta squared."
  },
  "urv-c4-beta": {
    "scenario": "How can you model a random proportion constrained between zero and one?",
    "intuition": "Beta distributions describe continuous proportions. Two shape parameters control where density concentrates inside the unit interval.",
    "method": "Look for a continuous proportion with support (0,1).",
    "trap": "A beta density is not a binomial count probability.",
    "check": {
      "question": "What support does a standard beta variable have?",
      "choices": [
        "Between zero and one.",
        "Nonnegative integers.",
        "The whole real line."
      ],
      "answer": 0,
      "explanation": "The standard beta model describes a continuous fraction; scaled beta models require a transformation."
    },
    "setup": "Label the two shapes alpha and beta. Mean is alpha/(alpha+beta); for probabilities integrate the normalized density over the requested part of (0,1)."
  },
  "urv-c5-normal": {
    "scenario": "How likely is a loss to exceed its mean by more than two standard deviations?",
    "intuition": "Standardization measures distance from the mean in standard-deviation units. The standard normal table then supplies cumulative probabilities.",
    "method": "Subtract the mean and divide by SD, then choose the correct tail.",
    "trap": "The second parameter in N(mu,sigma squared) is variance, not SD.",
    "check": {
      "question": "If X has mean 10 and variance 4, what z-score corresponds to X=14?",
      "choices": [
        "One.",
        "Two.",
        "Four."
      ],
      "answer": 1,
      "explanation": "SD is the square root of 4, so (14-10)/2=2."
    },
    "setup": "Write z=(threshold-mean)/SD. Take the square root if variance is given, then identify lower tail, upper tail, or an interval."
  },
  "urv-c6-lognormal": {
    "scenario": "What kind of positive variable results when its logarithm is normal?",
    "intuition": "A lognormal variable is positive and right-skewed. Transform a threshold by taking its logarithm, then use a normal probability.",
    "method": "Use this optional topic when the logarithm, rather than the original variable, is normal.",
    "trap": "The mean of X is not the exponential of the mean of log X.",
    "check": {
      "question": "If log X is normal, which variable is standardized directly?",
      "choices": [
        "log X.",
        "X.",
        "X squared."
      ],
      "answer": 0,
      "explanation": "Take the log of the threshold and standardize using the mean and SD of log X."
    },
    "setup": "For a probability, transform the threshold with log and standardize log X. For the mean of X, use exp(mu+sigma squared/2)."
  },
  "urv-d1-conditional-discrete": {
    "scenario": "What is the expected claim count given that at least one claim occurred?",
    "intuition": "Keep only values allowed by the condition and renormalize their probabilities. The remaining weights must sum to one.",
    "method": "Restrict the support, divide by condition probability, then calculate.",
    "trap": "Dropping disallowed values without renormalizing leaves incomplete weights.",
    "check": {
      "question": "After conditioning, what must the retained probabilities sum to?",
      "choices": [
        "The original condition probability.",
        "One.",
        "Zero."
      ],
      "answer": 1,
      "explanation": "Dividing retained masses by the condition probability rescales the restricted population."
    },
    "setup": "Restrict to values meeting the condition. Divide their masses or integrated density by the total condition probability before computing the requested quantity."
  },
  "urv-d2-conditional-continuous": {
    "scenario": "A loss exceeds the deductible. How likely is it to exceed a higher threshold?",
    "intuition": "The condition narrows the possible interval. Compare probability in the intersection with probability in the condition.",
    "method": "Intersect the intervals before integrating and dividing.",
    "trap": "Exponential memorylessness is not valid for a general density.",
    "check": {
      "question": "If b>a, what is P(X>b given X>a)?",
      "choices": [
        "P(X>a) divided by P(X>b).",
        "P(X>b) divided by P(X>a).",
        "P(X>b) minus P(X>a)."
      ],
      "answer": 1,
      "explanation": "The stricter event is contained in the condition, so its probability is the numerator."
    },
    "setup": "Restrict to values meeting the condition. Divide their masses or integrated density by the total condition probability before computing the requested quantity."
  },
  "urv-e1-expected-value": {
    "scenario": "What is the long-run average payment across many policies?",
    "intuition": "Expected value is a probability-weighted average. A nonlinear payment rule must be applied to each loss before averaging.",
    "method": "Sum or integrate value times probability; use g(x) for transformed payments.",
    "trap": "E[g(X)] generally differs from g(E[X]).",
    "check": {
      "question": "Is E[X squared] generally equal to E[X] squared?",
      "choices": [
        "No.",
        "Yes.",
        "Only for continuous variables."
      ],
      "answer": 0,
      "explanation": "Their difference is the variance, so equality occurs only when the variance is zero."
    },
    "setup": "Write E[g(X)] as a sum or integral of g(x) times its probability weight. Include any no-claim or zero-loss part."
  },
  "urv-e2-moments": {
    "scenario": "How can two averages describe both a loss level and its variability?",
    "intuition": "The first raw moment is the mean; the second raw moment averages squared values. Centered moments instead measure departures from the mean.",
    "method": "Keep raw moments and centered moments distinct.",
    "trap": "The second raw moment is not itself the variance.",
    "check": {
      "question": "How is variance obtained from the first two raw moments?",
      "choices": [
        "Second raw moment minus mean.",
        "Squared mean minus second raw moment.",
        "Second raw moment minus squared mean."
      ],
      "answer": 2,
      "explanation": "Centering the squared loss subtracts the square of the mean, not the mean itself."
    },
    "setup": "Find m=E[X] and s=E[X squared]. Variance is s-m squared; SD is its square root; CV is SD/m for a positive mean."
  },
  "urv-e3-mode-median-percentiles": {
    "scenario": "What loss threshold covers 90% of claims?",
    "intuition": "A percentile is a threshold with a specified cumulative probability. It answers a different question from the mean or the most likely value.",
    "method": "Solve a CDF threshold problem, checking endpoints and discrete jumps.",
    "trap": "Mean, median, and mode need not coincide.",
    "check": {
      "question": "Which equation identifies a continuous 90th percentile in a strictly increasing CDF?",
      "choices": [
        "f(q)=0.9.",
        "E[X]=0.9.",
        "F(q)=0.9."
      ],
      "answer": 2,
      "explanation": "A percentile is defined by accumulated probability, not density height."
    },
    "setup": "For a percentile q, solve F(q)=the requested fraction in a continuous increasing region. In a discrete model, locate the first CDF jump reaching that fraction."
  },
  "urv-f1-variance": {
    "scenario": "Two portfolios have the same average loss. Which is more variable?",
    "intuition": "Variance averages squared deviations from the mean. Scaling a loss stretches each deviation and squares that scale in the variance.",
    "method": "Find E[X squared] minus squared mean; square scale factors.",
    "trap": "A constant shift changes the mean but not the variance.",
    "check": {
      "question": "What is Var(3X+5)?",
      "choices": [
        "9 times Var(X).",
        "3 times Var(X)+5.",
        "9 times Var(X)+25."
      ],
      "answer": 0,
      "explanation": "The shift adds no variability; the multiplier is squared."
    },
    "setup": "Find m=E[X] and s=E[X squared]. Variance is s-m squared; SD is its square root; CV is SD/m for a positive mean."
  },
  "urv-f2-standard-deviation": {
    "scenario": "How can you express variability in the same units as the loss?",
    "intuition": "Standard deviation is the square root of variance. Unlike variance, it is measured in the original units.",
    "method": "Take the square root once and use the absolute scaling factor.",
    "trap": "Dividing by variance in a z-score gives the wrong units.",
    "check": {
      "question": "If variance is 400, what is SD?",
      "choices": [
        "20.",
        "400.",
        "160000."
      ],
      "answer": 0,
      "explanation": "Taking the square root restores the original loss units."
    },
    "setup": "Find m=E[X] and s=E[X squared]. Variance is s-m squared; SD is its square root; CV is SD/m for a positive mean."
  },
  "urv-f3-coefficient-variation": {
    "scenario": "How can you compare relative variability in portfolios with different mean losses?",
    "intuition": "Coefficient of variation divides standard deviation by a positive mean. It measures variability relative to average size.",
    "method": "Use SD divided by the positive mean and cancel units.",
    "trap": "A pure positive scale leaves CV unchanged; a shift usually does not.",
    "check": {
      "question": "Does multiplying every positive loss by 2 change its CV?",
      "choices": [
        "Yes; CV doubles.",
        "No.",
        "Yes; CV quadruples."
      ],
      "answer": 1,
      "explanation": "Both SD and mean double, so their ratio is unchanged."
    },
    "setup": "Find m=E[X] and s=E[X squared]. Variance is s-m squared; SD is its square root; CV is SD/m for a positive mean."
  },
  "urv-g1-deductibles": {
    "scenario": "A loss is below the deductible. What does the insurer pay?",
    "intuition": "An ordinary deductible leaves the policyholder paying the first d of every loss. The insurer pays only the positive excess.",
    "method": "Write max(loss minus deductible,0) before substituting a loss.",
    "trap": "A franchise deductible has a different rule from an ordinary deductible.",
    "check": {
      "question": "For an ordinary deductible of 500 and loss of 300, what is insurer payment?",
      "choices": [
        "Negative 200.",
        "300.",
        "Zero."
      ],
      "answer": 2,
      "explanation": "Payment cannot be negative; the positive-part rule truncates the excess at zero."
    },
    "setup": "For an ordinary deductible, payment is max(X-d,0). Read separately if the contract instead uses a franchise deductible."
  },
  "urv-g2-coinsurance": {
    "scenario": "The policyholder pays 20% above the deductible. What fraction does the insurer pay?",
    "intuition": "Apply the deductible, then multiply the remaining covered loss by the insurer share. Follow the order specified in the contract.",
    "method": "Convert policyholder share to insurer share; apply it to the covered amount.",
    "trap": "“Policyholder pays 20%” means insurer pays 80%.",
    "check": {
      "question": "A policyholder pays 20% of the covered loss. What is the insurer share?",
      "choices": [
        "80%.",
        "20%.",
        "100%."
      ],
      "answer": 0,
      "explanation": "The two shares sum to 100%; read whose percentage the contract specifies."
    },
    "setup": "Convert the stated policyholder share to the insurer share. For the stated ordinary deductible followed by coinsurance, write insurer share times max(X-d,0)."
  },
  "urv-g3-benefit-limits": {
    "scenario": "A loss is very large. At what amount does the insurer payment stop growing?",
    "intuition": "A payment cap flattens the loss-to-payment graph. A limit on covered loss can produce a different formula, so locate the cap precisely.",
    "method": "Identify whether the limit applies to the final payment or the loss before coinsurance.",
    "trap": "Moving a cap inside or outside coinsurance can change payment.",
    "check": {
      "question": "If the final insurer payment is capped at 3000, can it exceed 3000 after coinsurance?",
      "choices": [
        "Yes; if the loss is large enough.",
        "No.",
        "Yes; if the deductible is zero."
      ],
      "answer": 1,
      "explanation": "A final payment cap is applied to the amount actually paid by the insurer."
    },
    "setup": "Locate the cap in the contract. A cap L on final payment gives min(uncapped payment,L), while a covered-loss limit may be inside the coinsurance calculation."
  },
  "urv-g4-inflation": {
    "scenario": "Losses rise by 10% but the deductible stays fixed. Does every payment rise by 10%?",
    "intuition": "Inflation changes the loss before policy terms are applied. A fixed deductible or cap makes payment respond nonlinearly.",
    "method": "Inflate the loss first, then apply the stated current policy terms.",
    "trap": "Do not inflate the deductible unless the contract says it changes.",
    "check": {
      "question": "With fixed deductible d, is payment after 10% inflation equal to 1.1 times the old payment?",
      "choices": [
        "Always.",
        "Not generally.",
        "Only if d is positive."
      ],
      "answer": 1,
      "explanation": "The new rule is max(1.1X-d,0), which differs from 1.1 max(X-d,0)."
    },
    "setup": "Replace original loss X by (1+inflation rate)X first. Apply the current deductible, share, and cap afterward; change policy terms only if stated."
  },
  "urv-h1-loss-variable": {
    "scenario": "What is the average policy loss when many policies have no claims?",
    "intuition": "A policy-level loss may mix a zero-loss outcome with a positive severity distribution. Weight both parts when computing moments.",
    "method": "Distinguish whether the variable is per policy or conditional on a claim.",
    "trap": "Severity mean alone ignores the no-claim probability.",
    "check": {
      "question": "A claim occurs with probability p and has conditional mean m. What is mean policy loss?",
      "choices": [
        "m.",
        "p times m.",
        "m divided by p."
      ],
      "answer": 1,
      "explanation": "Zero-loss policies contribute zero; positive severities contribute with weight p."
    },
    "setup": "Write E[g(X)] as a sum or integral of g(x) times its probability weight. Include any no-claim or zero-loss part."
  },
  "urv-h2-payment-variable": {
    "scenario": "Why can a continuous loss create a payment with positive probability at zero?",
    "intuition": "A deductible maps a whole interval of losses to zero. A cap can map another interval to one fixed maximum payment.",
    "method": "Transform loss regions and track any point masses at zero or the cap.",
    "trap": "The payment need not remain a purely continuous random variable.",
    "check": {
      "question": "Where does zero-payment probability come from under an ordinary deductible d?",
      "choices": [
        "Only the loss X=0.",
        "Losses at or below d.",
        "Only the loss X=d."
      ],
      "answer": 1,
      "explanation": "Every loss below the deductible produces the same payment of zero."
    },
    "setup": "Write payment Y=g(X), including zero and capped regions. Average g(X) and g(X) squared per loss; divide by P(Y>0) only for conditional positive-payment moments."
  },
  "urv-h3-moments-loss-payment": {
    "scenario": "What is the mean payment across all losses, compared with only positive payments?",
    "intuition": "Payment per loss includes zeros. Payment per payment conditions on a positive amount, so its average is larger when some losses pay nothing.",
    "method": "Calculate the transformed moments, then condition only if asked.",
    "trap": "Per-loss and per-payment moments use different denominators.",
    "check": {
      "question": "How is E[Y given Y>0] related to E[Y] for nonnegative Y?",
      "choices": [
        "E[Y] divided by P(Y>0).",
        "E[Y] times P(Y>0).",
        "Always equal to E[Y]."
      ],
      "answer": 0,
      "explanation": "The zero outcomes contribute nothing, and conditioning rescales the positive-payment population."
    },
    "setup": "Write payment Y=g(X), including zero and capped regions. Average g(X) and g(X) squared per loss; divide by P(Y>0) only for conditional positive-payment moments."
  },
  "mrv-a1-joint-distributions": {
    "scenario": "Two claim indicators are recorded together. What can their joint table tell you?",
    "intuition": "Each cell describes a pair of outcomes. Marginals sum cells; joint CDFs sum rectangles satisfying both thresholds.",
    "method": "Mark the qualifying cells before summing probabilities.",
    "trap": "Marginal products equal joint probabilities only under independence.",
    "check": {
      "question": "How do you obtain the marginal probability for X=x from a joint PMF?",
      "choices": [
        "Divide by the probability of Y.",
        "Multiply row and column totals.",
        "Sum over every possible Y value."
      ],
      "answer": 2,
      "explanation": "Summing removes the Y restriction while retaining X=x."
    },
    "setup": "For a marginal, sum all joint cells with the specified X or Y value. For a joint CDF, sum the rectangle satisfying both thresholds."
  },
  "mrv-a2-conditional-distributions": {
    "scenario": "What does a joint claim table look like after you learn one indicator equals one?",
    "intuition": "Conditioning selects a row or column and divides its cells by the selected total. Marginalization instead sums out a variable.",
    "method": "Restrict to the condition and normalize the retained cells.",
    "trap": "A raw joint cell is not already a conditional probability.",
    "check": {
      "question": "For P(X=x given Y=y), what is the denominator?",
      "choices": [
        "The marginal probability P(Y=y).",
        "P(X=x).",
        "The joint cell P(X=x,Y=y)."
      ],
      "answer": 0,
      "explanation": "The denominator is the total probability of the conditioning slice."
    },
    "setup": "Keep the row or column for the condition and divide its cells by that slice total. The resulting conditional weights must sum to one."
  },
  "mrv-b1-joint-moments": {
    "scenario": "How can you calculate the average product of two claim indicators?",
    "intuition": "Evaluate the requested function in every joint cell and weight it by that cell probability. Conditioning changes the weights.",
    "method": "For E[g(X,Y)], weight g(x,y) by the joint PMF.",
    "trap": "E[XY] is not generally E[X]E[Y].",
    "check": {
      "question": "Do you need independence to calculate E[XY] from a joint table?",
      "choices": [
        "Yes.",
        "No.",
        "Only if X and Y are discrete."
      ],
      "answer": 1,
      "explanation": "The joint table already supplies the probabilities of every pair, including their dependence."
    },
    "setup": "Evaluate the requested g(x,y) in every joint cell and weight it by p(x,y). Use normalized conditional weights if a condition is specified."
  },
  "mrv-b2-conditional-variance": {
    "scenario": "How much loss variation remains within a particular risk class?",
    "intuition": "Use the conditional population to find its first and second moments. Overall variance can also include variation between class means.",
    "method": "Normalize the conditional distribution before computing its moments.",
    "trap": "Average within-group variance can miss variation between group means.",
    "check": {
      "question": "Can average conditional variance alone always give total variance?",
      "choices": [
        "No; variation in conditional means must also be included.",
        "Yes.",
        "Only when there are two groups."
      ],
      "answer": 0,
      "explanation": "Total variance adds within-group variation and the variance of group means."
    },
    "setup": "Within the conditioning slice, calculate its mean and second moment. Subtract the squared conditional mean; take a square root only if SD is requested."
  },
  "mrv-c1-covariance": {
    "scenario": "Do large values of two losses tend to occur together?",
    "intuition": "Covariance compares the average product with the product of the averages. Correlation divides out the two standard deviations.",
    "method": "Calculate E[XY] and both means before subtracting.",
    "trap": "Zero covariance does not generally imply independence.",
    "check": {
      "question": "Does zero covariance prove independence?",
      "choices": [
        "Yes.",
        "No.",
        "Yes, whenever both variables have finite variance."
      ],
      "answer": 1,
      "explanation": "Nonlinear dependence can remain even when linear association is zero."
    },
    "setup": "Compute E[XY], E[X], and E[Y]. Covariance is E[XY]-E[X]E[Y]; correlation divides by both SDs."
  },
  "mrv-d1-order-statistics": {
    "scenario": "What is the chance the largest of five independent losses is below a threshold?",
    "intuition": "A maximum is below a threshold only when every observation is below it. Intermediate ranks can be handled by counting observations below the threshold.",
    "method": "Translate the rank event into counts or simultaneous inequalities.",
    "trap": "Rank 2 is the second smallest, not usually the second largest.",
    "check": {
      "question": "For n independent identically distributed observations, what is P(maximum <= x)?",
      "choices": [
        "n times F(x).",
        "1 minus F(x) raised to n.",
        "F(x) raised to n."
      ],
      "answer": 2,
      "explanation": "All n observations must be at or below x; independence gives the product."
    },
    "setup": "A maximum below x requires all values below x. A kth smallest below x requires at least k values below x. Use independence and the appropriate individual CDFs."
  },
  "mrv-e1-linear-combinations": {
    "scenario": "What is the probability one independent normal loss exceeds another?",
    "intuition": "Turn the comparison into a difference. Its mean uses signed weights; its variance uses squared weights.",
    "method": "Identify the distribution of the combination, then standardize.",
    "trap": "Subtracting variables does not subtract their independent variances.",
    "check": {
      "question": "For independent X and Y, what is Var(X-Y)?",
      "choices": [
        "Var(X)+Var(Y).",
        "Var(X)-Var(Y).",
        "SD(X)+SD(Y)."
      ],
      "answer": 0,
      "explanation": "The coefficient of Y is minus one, whose square is one."
    },
    "setup": "For b+sum(a_i X_i), mean is b+sum(a_i mean_i). Independent variance is sum(a_i squared variance_i). Identify the combined distribution before finding a probability."
  },
  "mrv-e2-linear-moments": {
    "scenario": "How variable is a portfolio that holds two units of one loss and three of another?",
    "intuition": "Means combine linearly. Independent variance contributions use squared position sizes, and constants add no variance.",
    "method": "Write coefficients explicitly; square them only in the variance.",
    "trap": "Independence is needed to omit covariance, not to add expectations.",
    "check": {
      "question": "Does E[X+Y]=E[X]+E[Y] require independence?",
      "choices": [
        "Yes.",
        "Only if the means are positive.",
        "No."
      ],
      "answer": 2,
      "explanation": "Linearity of expectation applies even when X and Y depend on each other."
    },
    "setup": "For b+sum(a_i X_i), mean is b+sum(a_i mean_i). Independent variance is sum(a_i squared variance_i). Identify the combined distribution before finding a probability."
  },
  "mrv-f1-central-limit-theorem": {
    "scenario": "Can you approximate the total of many independent skewed claim amounts?",
    "intuition": "A large sum or average can be approximately normal even when individual losses are skewed. The individual loss distribution itself does not become normal.",
    "method": "Check i.i.d. assumptions and finite positive variance; distinguish total from average.",
    "trap": "A total SD grows with square root n; an average SD shrinks with square root n.",
    "check": {
      "question": "What is the SD of the mean of n i.i.d. observations with SD sigma?",
      "choices": [
        "sigma times square root n.",
        "sigma divided by square root n.",
        "sigma divided by n."
      ],
      "answer": 1,
      "explanation": "Variance of the average is sigma squared divided by n, so its SD is sigma divided by square root n."
    },
    "setup": "For a total, use mean n mu and SD sigma sqrt(n). For an average, use mean mu and SD sigma/sqrt(n). Use an appropriate continuity correction for a lattice count."
  }
};

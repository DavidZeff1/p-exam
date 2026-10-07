// Editorial study estimates, not official SOA or empirically calibrated ratings.
// 1–2: direct recognition/formula; 3–4: routine multistep calculation;
// 5–6: combined concepts, inverse parameters, or conditional/piecewise models;
// 7–8: substantial setup plus several interacting concepts; 9–10: exceptional.
// Numerical variants in the same family keep the same rating.
export const familyDifficulty = {
  'atoms-normalize': 4, 'region-conditional': 6, 'symmetric-difference-infer': 4,
  'three-events-exactly-one': 5, 'coverage-renewal-mixture': 5, 'two-events-infer': 4,
  'replacement-pattern': 3, 'discrete-uniform-sum': 5, 'ordered-draw-condition': 4,
  'uniform-lattice-condition': 3, 'committee-conditioned-membership': 4,
  'conditional-independent': 5, 'disjoint-infer': 4, 'finite-payment-moments': 5,
  'weighted-outcomes': 3, 'independent-infer': 4, 'three-class-survival': 4,
  'restricted-code': 5, 'committee-roles': 4, 'digit-code-restrictions': 5,
  'multiset-separation': 6, 'adjacent-permutation': 6, 'conditional-sample': 5,
  'hypergeometric-followup': 4, 'hypergeom-bayes': 6, 'negative-binomial-first-failure': 5,
  'latent-two-years': 6, 'unequal-reliability': 5, 'exponential-minimum-lifetime': 5,
  'bayes-sample-count': 5, 'partition-rate': 5, 'mixture-no-claim': 5, 'screen-infer': 5,
  'discrete-uniform-capped': 6, 'geometric-benefit': 6, 'mixed-cdf-mean': 5,
  'power-transformed-expectation': 4, 'density-infer-conditional': 5,
  'power-quantile-difference': 4, 'triangular-tail-infer': 4, 'triangular-conditional-variance': 6,
  'cdf-atom-conditional': 5, 'continuous-conditional-mean': 5,
  'uniform-payment-quantile': 5, 'payment-zero-and-cap': 5, 'uniform-infer-support': 5,
  'uniform-lattice-square-moment': 4, 'binomial-infer': 5, 'capped-binomial-payment': 6,
  'binomial-odds-infer': 4, 'conditional-binomial-variance': 6,
  'geometric-conditioned': 4, 'geometric-capped-count': 5, 'geometric-tail-infer': 4,
  'geometric-late-mean': 4, 'negative-binomial-joint': 5, 'first-success-given-second': 5,
  'negative-binomial-progress-mean': 4, 'negative-binomial-interval': 6,
  'hypergeom-payment': 5, 'conditional-hypergeom-variance': 6,
  'poisson-deductible': 6, 'poisson-split-condition': 5, 'poisson-ratio-aggregate': 4,
  'poisson-truncated-mean': 5, 'uniform-infer-deductible': 5,
  'uniform-payment-variance': 7, 'inflation-franchise-mean': 5,
  'order-uniform-middle-mean': 5, 'exponential-infer': 4, 'exponential-benefit': 6,
  'deductible-change-ratio': 4, 'limited-exponential-infer': 6,
  'gamma-parameter-tail': 5, 'gamma-sum-condition': 6, 'gamma-truncated-mean': 7,
  'gamma-aggregate-tail': 5, 'gamma-cv-infer': 5, 'beta-infer': 6,
  'beta-conditional': 5, 'beta-mode-mean-infer': 5, 'normal-quantile-infer': 4,
  'normal-quadratic': 5, 'normal-two-quantiles': 5, 'normal-combination-infer': 6,
  'clt-binomial-correction': 5, 'lognormal-payment-tail': 5, 'lognormal-moment-infer': 5,
  'lognormal-conditional-tail': 5, 'lognormal-square-moment': 4, 'lognormal-limited-mean': 7,
  'conditional-binomial-mean': 5, 'quadratic-moment': 6, 'linear-second-moment': 4,
  'two-class-loss-variance': 5, 'mixture-variance': 7, 'uniform-payment-sd': 7,
  'mixture-payment-sd': 7, 'loss-mixture-sd': 5, 'correlated-linear-sd': 4,
  'triangular-conditional-sd': 6, 'affine-cv-infer': 4, 'uniform-payment-cv': 7,
  'loss-mixture-cv': 5, 'mixed-power-cv': 6, 'franchise-payment-mean': 5,
  'coinsurance-infer': 5, 'cap-infer': 5, 'payment-per-payment': 6,
  'inflation-payment-mean': 6, 'inflation-tail': 5, 'total-variance-mixture': 5,
  'exponential-payment-variance': 7, 'joint-table-event': 5, 'joint-linear-variance': 6,
  'joint-discrete-triangle-event': 5, 'joint-discrete-triangle-mean': 5,
  'shared-discrete-covariance': 5, 'joint-table-conditional-moment': 6,
  'joint-discrete-triangle-variance': 6, 'shared-class-covariance': 6,
  'correlated-linear-variance': 4, 'poisson-truncated-variance': 6,
  'bayes-predictive-variance': 7, 'joint-covariance': 6,
  'order-range': 7, 'order-rank-conditional': 6, 'order-second-exponential': 5,
  'poisson-weighted-sum': 5, 'independent-weighted-binomial': 6,
  'normal-independent-difference': 4, 'sample-mean-random-shift': 5,
  'independent-linear-second-moment': 4, 'independent-average-sd': 4,
  'independent-poisson-linear-variance': 4, 'clt-payment-tail': 8,
  'clt-sample-size': 4, 'clt-uniform-average': 4, 'clt-exponential-total': 4,
};

// Ratings for each fixed foundation question, in its stable file order.
export const foundationDifficulty = {
  'a1-set-functions': [3, 4, 4, 5], 'a2-venn-diagrams': [3, 4, 5, 5],
  'a3-sample-space': [3, 4, 5, 4], 'a4-events': [2, 3, 4, 4],
  'a5-probability-set-function': [3, 4, 3, 4], 'a6-axioms-probability': [3, 4, 4, 5],
  'b1-counting-principles': [2, 3, 2, 4], 'b2-permutations': [4, 4, 5, 6],
  'b3-combinations': [3, 4, 4, 5], 'b4-combinatorial-probability': [4, 5, 6, 5],
  'c1-independent-events': [2, 3, 4, 4], 'c2-independent-trials': [3, 4, 5, 6],
  'd1-mutually-exclusive': [2, 3, 4, 4], 'd2-partitions': [2, 3, 4, 4],
  'e1-addition-rule': [2, 4, 4, 5], 'e2-multiplication-rule': [2, 3, 4, 5],
  'e3-combined-problems': [4, 5, 5, 5], 'f1-conditional-probability': [3, 4, 4, 5],
  'f2-bayes-theorem': [3, 4, 3, 4], 'f3-law-total-probability': [3, 3, 4, 5],
  'urv-a1-random-variables': [3, 4, 4, 5], 'urv-a2-pdf': [3, 4, 4, 5],
  'urv-a3-cdf': [3, 4, 4, 5], 'urv-b1-discrete-uniform': [2, 3, 4, 5],
  'urv-b2-binomial': [3, 4, 5, 5], 'urv-b3-geometric': [3, 3, 4, 5],
  'urv-b4-negative-binomial': [3, 4, 4, 5], 'urv-b5-hypergeometric': [3, 4, 5, 5],
  'urv-b6-poisson': [3, 4, 4, 5], 'urv-c1-continuous-uniform': [2, 4, 4, 5],
  'urv-c2-exponential': [3, 4, 4, 5], 'urv-c3-gamma': [4, 4, 4, 5],
  'urv-c4-beta': [4, 4, 4, 5], 'urv-c5-normal': [3, 4, 5, 6],
  'urv-c6-lognormal': [3, 3, 4], 'urv-d1-conditional-discrete': [3, 4, 4],
  'urv-d2-conditional-continuous': [3, 3, 4], 'urv-e1-expected-value': [3, 3, 2],
  'urv-e2-moments': [4, 3, 4], 'urv-e3-mode-median-percentiles': [3, 3, 2],
  'urv-f1-variance': [3, 2, 2], 'urv-f2-standard-deviation': [2, 3, 3],
  'urv-f3-coefficient-variation': [3, 3, 3], 'urv-g1-deductibles': [4, 4, 3],
  'urv-g2-coinsurance': [2, 3, 3], 'urv-g3-benefit-limits': [3, 5, 4],
  'urv-g4-inflation': [2, 4, 5], 'urv-h1-loss-variable': [4, 4, 2],
  'urv-h2-payment-variable': [4, 4, 4], 'urv-h3-moments-loss-payment': [5, 5, 4],
  'mrv-a1-joint-distributions': [3, 4, 3], 'mrv-a2-conditional-distributions': [3, 4, 4],
  'mrv-b1-joint-moments': [3, 3, 4], 'mrv-b2-conditional-variance': [4, 4, 4],
  'mrv-c1-covariance': [4, 3, 4], 'mrv-d1-order-statistics': [4, 5, 6],
  'mrv-e1-linear-combinations': [3, 4, 3], 'mrv-e2-linear-moments': [4, 3, 3],
  'mrv-f1-central-limit-theorem': [3, 4, 4],
};

const variantGroups = {
  1: ['a1-set-functions', 'a4-events', 'urv-f3-coefficient-variation'],
  3: ['urv-c3-gamma', 'urv-c4-beta', 'urv-c5-normal', 'urv-c6-lognormal',
    'urv-d1-conditional-discrete', 'urv-d2-conditional-continuous', 'urv-e2-moments',
    'urv-h1-loss-variable', 'urv-h2-payment-variable', 'urv-h3-moments-loss-payment',
    'mrv-b1-joint-moments', 'mrv-b2-conditional-variance', 'mrv-c1-covariance',
    'mrv-e1-linear-combinations', 'mrv-e2-linear-moments', 'mrv-f1-central-limit-theorem'],
};
export const variantDifficulty = Object.fromEntries(Object.keys(foundationDifficulty).map(id => {
  const group = Object.entries(variantGroups).find(([, ids]) => ids.includes(id));
  return [id, group ? Number(group[0]) : 2];
}));

export function getDifficulty(problem = {}) {
  if (Number.isInteger(problem.difficulty) && problem.difficulty >= 1 && problem.difficulty <= 10) return problem.difficulty;
  if (Object.hasOwn(familyDifficulty, problem.family)) return familyDifficulty[problem.family];
  if (problem.variant || problem.id?.startsWith('variant:')) return Object.hasOwn(variantDifficulty, problem.topicId) ? variantDifficulty[problem.topicId] : 2;
  const index = Number(problem.id?.split(':').at(-1));
  const scores = Object.hasOwn(foundationDifficulty, problem.topicId) ? foundationDifficulty[problem.topicId] : undefined;
  if (scores && /^\d+$/.test(problem.id?.split(':').at(-1) ?? '') && !problem.id?.startsWith('chapter:') && !problem.id?.startsWith('exam:')) return scores[index] ?? 3;
  return problem.level === 'challenge' ? 5 : 3;
}

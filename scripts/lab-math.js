export function bayesCounts(prior, sensitivity, falsePositive, population = 10000) {
  const fraud = population * prior, legitimate = population - fraud;
  const trueFlags = fraud * sensitivity, falseFlags = legitimate * falsePositive;
  return { fraud, legitimate, trueFlags, falseFlags, totalFlags: trueFlags + falseFlags, posterior: trueFlags / (trueFlags + falseFlags) };
}
// Increasing triangular density on (0,L).
export const triangularCDF = (x, L) => Math.max(0, Math.min(1, x / L)) ** 2;
export function insurancePayment(x, deductible, share, cap, inflation = 1) { return Math.min(share * Math.max(inflation * x - deductible, 0), cap); }
export function uniformPaymentMoments(maximum, deductible, share, cap, inflation = 1) {
  const B = maximum * inflation;
  if (share === 0 || cap === 0 || deductible >= B) return { mean: 0, variance: 0, massZero: 1, massCap: 0 };
  const covered = B - deductible;
  const upper = Math.min(covered, cap / share);
  const massCap = Math.max(0, (covered - upper) / B);
  const mean = share * upper ** 2 / (2 * B) + cap * massCap;
  const second = share ** 2 * upper ** 3 / (3 * B) + cap ** 2 * massCap;
  return { mean, variance: Math.max(0, second - mean ** 2), massZero: Math.min(1, deductible / B), massCap };
}
export function seededRandom(seed = 12345) {
  let value = seed >>> 0;
  return () => { value = (1664525 * value + 1013904223) >>> 0; return (value + .5) / 4294967296; };
}
export function exponentialSampleMeans(n, repetitions = 1200, seed = 12345) {
  const random = seededRandom(seed);
  return Array.from({ length: repetitions }, () => {
    let total = 0;
    for (let i = 0; i < n; i++) total -= Math.log(random());
    return total / n;
  });
}
export function histogram(values, max = 4, bins = 40) {
  const width = max / bins;
  const counts = Array(bins).fill(0);
  for (const value of values) if (value >= 0 && value < max) counts[Math.floor(value / width)]++;
  return counts.map(count => count / (values.length * width));
}

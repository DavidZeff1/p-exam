export const syllabusUrl = 'https://www.soa.org/globalassets/assets/files/edu/2026/spring/syllabi/2026-05-exam-p-syllabus.pdf';
export const resources = [
  ['May 2026 syllabus', syllabusUrl],
  ['Official normal table', 'https://www.soa.org/globalassets/assets/files/edu/2021/p-1-table-rev-4-29-21.pdf'],
  ['SOA sample questions', 'https://www.soa.org/globalassets/assets/files/edu/2026/spring/questions-solutions/2026-05-exam-p-sample-questions.pdf'],
  ['SOA sample solutions', 'https://www.soa.org/globalassets/assets/files/edu/2026/spring/questions-solutions/2026-05-exam-p-sample-solutions.pdf'],
  ['SOA online sample exam', 'https://www.soa.org/education/exam-req/syllabus-study-materials/edu-exam-p-online-sample/'],
  ['Risk and Insurance reading', 'https://www.soa.org/globalassets/assets/files/edu/P-21-05.pdf'],
  ['Exam rules', 'https://www.soa.org/education/exam-req/exam-day-info/edu-cbt-add-rules/'],
  ['Exam P updates', 'https://www.soa.org/education/exam-req/syllabus-study-materials/edu-updates-exam-p/'],
];
// Each May 2026 outcome maps to lessons with instruction and end-of-lesson practice.
export const outcomes = [
  { code: '1a', category: 'general-probability', label: 'Sets, events, sample spaces, probability as a set function, and axioms', topics: ['a1-set-functions','a2-venn-diagrams','a3-sample-space','a4-events','a5-probability-set-function','a6-axioms-probability'] },
  { code: '1b', category: 'general-probability', label: 'Combinations, permutations, and combinatorial probability', topics: ['b1-counting-principles','b2-permutations','b3-combinations','b4-combinatorial-probability'] },
  { code: '1c', category: 'general-probability', label: 'Independence and independent event probabilities', topics: ['c1-independent-events','c2-independent-trials'] },
  { code: '1d', category: 'general-probability', label: 'Mutually exclusive events', topics: ['d1-mutually-exclusive','d2-partitions'] },
  { code: '1e', category: 'general-probability', label: 'Addition and multiplication rules', topics: ['e1-addition-rule','e2-multiplication-rule','e3-combined-problems'] },
  { code: '1f', category: 'general-probability', label: 'Conditional probability', topics: ['f1-conditional-probability'] },
  { code: '1g', category: 'general-probability', label: 'Bayes’ theorem and total probability', topics: ['f2-bayes-theorem','f3-law-total-probability'] },
  { code: '2a', category: 'univariate-random-variables', label: 'Random variables, PMFs, PDFs, and CDFs; all named discrete and continuous distributions', topics: ['urv-a1-random-variables','urv-a2-pdf','urv-a3-cdf','urv-b1-discrete-uniform','urv-b2-binomial','urv-b3-geometric','urv-b4-negative-binomial','urv-b5-hypergeometric','urv-b6-poisson','urv-c1-continuous-uniform','urv-c2-exponential','urv-c3-gamma','urv-c4-beta','urv-c5-normal'] },
  { code: '2b', category: 'univariate-random-variables', label: 'Discrete and continuous conditional probabilities', topics: ['urv-d1-conditional-discrete','urv-d2-conditional-continuous'] },
  { code: '2c', category: 'univariate-random-variables', label: 'Expected values, moments, mode, median, and percentiles', topics: ['urv-e1-expected-value','urv-e2-moments','urv-e3-mode-median-percentiles'] },
  { code: '2d', category: 'univariate-random-variables', label: 'Variance, standard deviation, and coefficient of variation', topics: ['urv-f1-variance','urv-f2-standard-deviation','urv-f3-coefficient-variation'] },
  { code: '2e', category: 'univariate-random-variables', label: 'Deductibles, coinsurance, benefit limits, and inflation', topics: ['urv-g1-deductibles','urv-g2-coinsurance','urv-g3-benefit-limits','urv-g4-inflation'] },
  { code: '2f', category: 'univariate-random-variables', label: 'Mean, variance, and standard deviation of loss and payment variables', topics: ['urv-h1-loss-variable','urv-h2-payment-variable','urv-h3-moments-loss-payment'] },
  { code: '3a', category: 'multivariate-random-variables', label: 'Discrete joint PMFs and joint CDFs', topics: ['mrv-a1-joint-distributions'] },
  { code: '3b', category: 'multivariate-random-variables', label: 'Discrete conditional and marginal PMFs', topics: ['mrv-a1-joint-distributions','mrv-a2-conditional-distributions'] },
  { code: '3c', category: 'multivariate-random-variables', label: 'Joint, conditional, and marginal discrete moments', topics: ['mrv-b1-joint-moments'] },
  { code: '3d', category: 'multivariate-random-variables', label: 'Conditional and marginal discrete variance and standard deviation', topics: ['mrv-b2-conditional-variance'] },
  { code: '3e', category: 'multivariate-random-variables', label: 'Discrete covariance and correlation', topics: ['mrv-c1-covariance'] },
  { code: '3f', category: 'multivariate-random-variables', label: 'Joint distributions of order statistics of independent variables', topics: ['mrv-d1-order-statistics'] },
  { code: '3g', category: 'multivariate-random-variables', label: 'Probabilities for independent discrete and normal linear combinations', topics: ['mrv-e1-linear-combinations'] },
  { code: '3h', category: 'multivariate-random-variables', label: 'Moments of independent linear combinations', topics: ['mrv-e2-linear-moments'] },
  { code: '3i', category: 'multivariate-random-variables', label: 'CLT approximations for i.i.d. sums and averages', topics: ['mrv-f1-central-limit-theorem'] },
];
export const getOutcomes = id => outcomes.filter(outcome => outcome.topics.includes(id));

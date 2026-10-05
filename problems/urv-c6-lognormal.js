export default [
  {
    "question": "This is optional enrichment. If $\\ln X\\sim N(2,0.25)$, using variance as the second parameter, calculate the median of $X$.",
    "choices": [
      "$e^{0.25}$",
      "$e^{1.75}$",
      "$e^2$",
      "$e^{2.125}$",
      "$e^{2.25}$"
    ],
    "answer": 2,
    "solution": [
      "The median of $\\ln X$ is $2$.",
      "Since exponentiation is increasing, the median of $X$ is $e^2$."
    ]
  },
  {
    "question": "This is optional enrichment. If $\\ln X\\sim N(0,1)$, calculate $P(X>e)$, rounded to four decimals.",
    "choices": [
      "$0.0228$",
      "$0.1587$",
      "$0.5000$",
      "$0.8413$",
      "$0.9772$"
    ],
    "answer": 1,
    "solution": [
      "$X>e$ is equivalent to $\\ln X>1$.",
      "The probability is $1-\\Phi(1)\\approx0.1587$."
    ]
  },
  {
    "question": "This is optional enrichment. If $\\ln X\\sim N(1,2)$, using variance as the second parameter, calculate $E[X]$.",
    "choices": [
      "$e$",
      "$e^{1.5}$",
      "$e^2$",
      "$e^3$",
      "$e^4$"
    ],
    "answer": 2,
    "solution": [
      "The mean of a lognormal variable is $e^{\\mu+\\sigma^2/2}$.",
      "Here that is $e^{1+2/2}=e^2$."
    ]
  }
];

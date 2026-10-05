export default [
  {
    "question": "A loss has density $3x^2/1000$ on $(0,10)$. Calculate its 80th percentile, rounded to two decimals.",
    "choices": [
      "$5.85$",
      "$8.00$",
      "$8.94$",
      "$9.28$",
      "$9.65$"
    ],
    "answer": 3,
    "solution": [
      "$F(x)=x^3/1000$. Solve $q^3/1000=0.8$.",
      "$q=10(0.8)^{1/3}\\approx9.28$."
    ]
  },
  {
    "question": "A loss has density $12x(1-x)^2$ on $(0,1)$. Calculate its mode.",
    "choices": [
      "$0$",
      "$1/4$",
      "$1/3$",
      "$1/2$",
      "$2/3$"
    ],
    "answer": 2,
    "solution": [
      "The derivative is $12(1-x)(1-3x)$.",
      "The interior maximum occurs at $x=1/3$. The density tends to zero at both endpoints."
    ]
  },
  {
    "question": "$X$ takes values $0,1,2,3$ with probabilities $0.1,0.2,0.4,0.3$. Calculate the lower 70th percentile.",
    "choices": [
      "$0$",
      "$1$",
      "$1.5$",
      "$2$",
      "$3$"
    ],
    "answer": 3,
    "solution": [
      "The CDF values at $0,1,2,3$ are $0.1,0.3,0.7,1$.",
      "The smallest support value with CDF at least $0.7$ is $2$."
    ]
  }
];

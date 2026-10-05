export default [
  {
    "question": "$100$ i.i.d. losses have mean $50$ and standard deviation $20$. Use the CLT to approximate the probability that the total exceeds $5400$, rounded to four decimals.",
    "choices": [
      "$0.0013$",
      "$0.0228$",
      "$0.1587$",
      "$0.8413$",
      "$0.9772$"
    ],
    "answer": 1,
    "solution": [
      "Total mean is $5000$ and SD is $20\\sqrt{100}=200$.",
      "The standardized threshold is $2$. The upper tail is $1-\\Phi(2)\\approx0.0228$."
    ]
  },
  {
    "question": "$100$ i.i.d. continuous variables have mean $10$ and SD $5$. Use the CLT to approximate $P(\\bar X<11)$, rounded to four decimals.",
    "choices": [
      "$0.0228$",
      "$0.1587$",
      "$0.5000$",
      "$0.8413$",
      "$0.9772$"
    ],
    "answer": 4,
    "solution": [
      "The mean of the average is $10$ and its SD is $5/\\sqrt{100}=0.5$.",
      "The standardized threshold is $(11-10)/0.5=2$, giving $\\Phi(2)\\approx0.9772$."
    ]
  },
  {
    "question": "$X$ is binomial with $n=100,p=0.5$. Use a normal approximation with continuity correction to calculate $P(45\\le X\\le55)$, rounded to four decimals.",
    "choices": [
      "$0.6827$",
      "$0.7000$",
      "$0.7287$",
      "$0.7550$",
      "$0.8413$"
    ],
    "answer": 2,
    "solution": [
      "The approximating normal has mean $50$ and SD $5$. Correct the endpoints to $44.5,55.5$.",
      "The standardized interval is $(-1.1,1.1)$, giving $2\\Phi(1.1)-1\\approx0.7287$."
    ]
  }
];

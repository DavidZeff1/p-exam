export default [
  {
    "question": "Independent variables $X,Y$ are Poisson with means $1,2$. Calculate $P(X+Y=2)$, rounded to four decimals.",
    "choices": [
      "$0.1494$",
      "$0.1991$",
      "$0.2240$",
      "$0.2707$",
      "$0.4481$"
    ],
    "answer": 2,
    "solution": [
      "The sum is Poisson with mean $3$.",
      "$P(X+Y=2)=e^{-3}3^2/2!\\approx0.2240$."
    ]
  },
  {
    "question": "Independent $X\\sim N(100,400)$ and $Y\\sim N(80,225)$ use variance as the second parameter. Calculate $P(X>Y)$, rounded to four decimals.",
    "choices": [
      "$0.2119$",
      "$0.5000$",
      "$0.6554$",
      "$0.7881$",
      "$0.9772$"
    ],
    "answer": 3,
    "solution": [
      "$X-Y\\sim N(20,625)$, with SD $25$.",
      "$P(X-Y>0)=P(Z>-0.8)=\\Phi(0.8)\\approx0.7881$."
    ]
  },
  {
    "question": "Independent Bernoulli variables $X,Y$ have success probabilities $0.3,0.4$. Calculate $P(2X+Y\\le1)$.",
    "choices": [
      "$0.12$",
      "$0.28$",
      "$0.42$",
      "$0.58$",
      "$0.70$"
    ],
    "answer": 4,
    "solution": [
      "The event holds exactly when $X=0$, regardless of $Y$.",
      "The probability is $P(X=0)=0.7$. Alternatively sum $0.42+0.28$."
    ]
  }
];

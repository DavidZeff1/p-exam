export default [
  {
    "question": "The joint probabilities are $p(0,0)=0.2$, $p(2,0)=0.3$, $p(0,1)=0.1$, $p(2,1)=0.4$. Calculate $\\operatorname{Var}(X\\mid Y=0)$.",
    "choices": [
      "$0.24$",
      "$0.48$",
      "$0.84$",
      "$0.96$",
      "$1.44$"
    ],
    "answer": 3,
    "solution": [
      "The conditional probabilities at $0,2$ are $0.4,0.6$.",
      "$E[X\\mid Y=0]=1.2$ and $E[X^2\\mid Y=0]=2.4$. The variance is $2.4-1.44=0.96$."
    ]
  },
  {
    "question": "$Y$ takes values $0,1$ equally likely. Given $Y=0$, $X$ takes $0,2$ equally likely. Given $Y=1$, $X=1$ certainly. Calculate the marginal standard deviation of $X$, rounded to four decimals.",
    "choices": [
      "$0.5000$",
      "$0.7071$",
      "$1.0000$",
      "$1.2247$",
      "$1.4142$"
    ],
    "answer": 1,
    "solution": [
      "The marginal probabilities at $0,1,2$ are $0.25,0.5,0.25$.",
      "Mean is $1$, second moment is $1.5$, variance is $0.5$, and SD is $\\sqrt{0.5}\\approx0.7071$."
    ]
  },
  {
    "question": "A variable $Y$ equals $0$ or $1$, each with probability $1/2$. Given $Y=0$, $X=0$; given $Y=1$, $X=4$. Calculate the variance of $X$.",
    "choices": [
      "$0$",
      "$2$",
      "$4$",
      "$8$",
      "$16$"
    ],
    "answer": 2,
    "solution": [
      "Both conditional variances are zero, but the conditional means differ.",
      "$E[X]=2$ and $E[X^2]=8$, so variance is $8-4=4$."
    ]
  }
];

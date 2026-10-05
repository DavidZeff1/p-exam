export default [
  {
    "question": "The nonzero joint probabilities are $p(0,1)=0.2$, $p(1,0)=0.3$, $p(2,2)=0.5$. Calculate $\\operatorname{Cov}(X,Y)$.",
    "choices": [
      "$-0.44$",
      "$0$",
      "$0.44$",
      "$1.56$",
      "$2$"
    ],
    "answer": 2,
    "solution": [
      "$E[X]=1.3$, $E[Y]=1.2$, and $E[XY]=2$.",
      "Covariance is $2-1.3(1.2)=0.44$."
    ]
  },
  {
    "question": "$X,Y$ have variances $9,16$ and correlation $0.5$. Calculate $\\operatorname{Var}(X-Y)$.",
    "choices": [
      "$1$",
      "$7$",
      "$13$",
      "$25$",
      "$37$"
    ],
    "answer": 2,
    "solution": [
      "$\\operatorname{Cov}(X,Y)=0.5(3)(4)=6$.",
      "Variance of the difference is $9+16-2(6)=13$."
    ]
  },
  {
    "question": "$X$ is equally likely to be $-1,0,1$, and $Y=X^2$. Calculate the correlation between $X$ and $Y$.",
    "choices": [
      "$-1$",
      "$-0.5$",
      "$0$",
      "$0.5$",
      "$1$"
    ],
    "answer": 2,
    "solution": [
      "$E[X]=0$ and $E[XY]=E[X^3]=0$, so covariance is zero. Both variances are positive.",
      "Correlation is zero, even though $Y$ is determined by $X$ and the variables are dependent."
    ]
  }
];

export default [
  {
    "question": "The nonzero joint probabilities are $p(0,1)=0.2$, $p(1,0)=0.3$, $p(2,2)=0.5$. Calculate $E[XY]$.",
    "choices": [
      "$0.5$",
      "$1.0$",
      "$1.56$",
      "$2.0$",
      "$2.5$"
    ],
    "answer": 3,
    "solution": [
      "Sum $xy p(x,y)$ over the three support points.",
      "$0(1)(0.2)+1(0)(0.3)+2(2)(0.5)=2$."
    ]
  },
  {
    "question": "$Y$ is $0$ with probability $0.6$ and $1$ with probability $0.4$. Conditional on $Y=0$, $X$ is Poisson with mean $2$; conditional on $Y=1$, it is Poisson with mean $5$. Calculate $E[X^2]$.",
    "choices": [
      "$3.2$",
      "$6.0$",
      "$10.24$",
      "$15.6$",
      "$30.0$"
    ],
    "answer": 3,
    "solution": [
      "For a Poisson variable of mean $\\lambda$, $E[X^2]=\\lambda+\\lambda^2$.",
      "Total expectation gives $0.6(2+4)+0.4(5+25)=15.6$."
    ]
  },
  {
    "question": "$P(Y=0)=0.6$ and $P(Y=1)=0.4$. The conditional means of $X$ are $2,5$, and its conditional variances are $1,4$, respectively. Calculate the marginal variance of $X$.",
    "choices": [
      "$2.16$",
      "$2.20$",
      "$3.20$",
      "$4.36$",
      "$6.20$"
    ],
    "answer": 3,
    "solution": [
      "$E[\\operatorname{Var}(X\\mid Y)]=0.6(1)+0.4(4)=2.2$.",
      "The variance of the conditional mean is $0.6(0.4)(5-2)^2=2.16$. Total variance is $4.36$."
    ]
  }
];

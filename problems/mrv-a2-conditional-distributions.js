export default [
  {
    "question": "For $x,y\\in\\{0,1,2\\}$, $p(x,y)=(x+y)/18$. Calculate $P(X=2\\mid Y=1)$.",
    "choices": [
      "$1/6$",
      "$1/3$",
      "$1/2$",
      "$2/3$",
      "$1$"
    ],
    "answer": 2,
    "solution": [
      "The $Y=1$ column has weights $1,2,3$, totaling $6$.",
      "The conditional probability is $(3/18)/(6/18)=1/2$."
    ]
  },
  {
    "question": "The nonzero probabilities are $p(0,0)=0.1$, $p(0,1)=0.2$, $p(1,0)=0.3$, $p(1,1)=0.4$. Calculate $E[X\\mid Y=0]$.",
    "choices": [
      "$0.25$",
      "$0.40$",
      "$0.60$",
      "$0.70$",
      "$0.75$"
    ],
    "answer": 4,
    "solution": [
      "$P(Y=0)=0.4$.",
      "Since $X$ is an indicator, its conditional mean is $P(X=1\\mid Y=0)=0.3/0.4=0.75$."
    ]
  },
  {
    "question": "$X,Y$ are independent Poisson random variables with means $2,3$. Given $X+Y=4$, calculate $P(X=1\\mid X+Y=4)$.",
    "choices": [
      "$0.1536$",
      "$0.2160$",
      "$0.3456$",
      "$0.4000$",
      "$0.5184$"
    ],
    "answer": 2,
    "solution": [
      "Conditional on the total, $X$ is binomial with $n=4$ and probability $2/(2+3)=0.4$.",
      "$P(X=1\\mid X+Y=4)=\\binom41(0.4)(0.6)^3=0.3456$."
    ]
  }
];

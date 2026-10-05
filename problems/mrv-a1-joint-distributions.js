export default [
  {
    "question": "The only nonzero joint probabilities are $p(0,0)=c$, $p(0,1)=2c$, $p(1,0)=3c$, and $p(1,1)=4c$. Calculate $F_{X,Y}(0.5,1)$.",
    "choices": [
      "$0.1$",
      "$0.2$",
      "$0.3$",
      "$0.4$",
      "$0.7$"
    ],
    "answer": 2,
    "solution": [
      "Normalization gives $c=1/10$.",
      "The joint CDF sums cells with $X\\le0.5$ and $Y\\le1$: $c+2c=0.3$."
    ]
  },
  {
    "question": "For $x,y\\in\\{0,1,2\\}$, a joint PMF is $p(x,y)=c(x+y)$, with zero probability elsewhere. Calculate $P(X=2)$.",
    "choices": [
      "$1/6$",
      "$1/3$",
      "$4/9$",
      "$1/2$",
      "$2/3$"
    ],
    "answer": 3,
    "solution": [
      "The sum of $x+y$ over the nine cells is $18$, so $c=1/18$.",
      "The row for $X=2$ has total $(2+3+4)/18=1/2$."
    ]
  },
  {
    "question": "$X,Y$ are independent, with $P(X=0)=0.4$ and $P(Y=0)=0.7$. Both variables take only values $0$ and $1$. Calculate $P(X+Y=1)$.",
    "choices": [
      "$0.18$",
      "$0.28$",
      "$0.42$",
      "$0.54$",
      "$0.72$"
    ],
    "answer": 3,
    "solution": [
      "The event consists of the disjoint pairs $(0,1)$ and $(1,0)$.",
      "Independence gives $0.4(0.3)+0.6(0.7)=0.54$."
    ]
  }
];

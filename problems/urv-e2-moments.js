export default [
  {
    "question": "$X$ has density $3x^2$ on $(0,1)$. Calculate $\\operatorname{Var}(X)$.",
    "choices": [
      "$0.0250$",
      "$0.0375$",
      "$0.0625$",
      "$0.1875$",
      "$0.6000$"
    ],
    "answer": 1,
    "solution": [
      "$E[X]=3/4$ and $E[X^2]=3/5$.",
      "The variance is $3/5-(3/4)^2=3/80=0.0375$."
    ]
  },
  {
    "question": "$E[X]=4$ and $E[X^2]=20$. Calculate $E[(3X-2)^2]$.",
    "choices": [
      "$36$",
      "$64$",
      "$100$",
      "$136$",
      "$184$"
    ],
    "answer": 3,
    "solution": [
      "Expand the square inside the expectation.",
      "$9E[X^2]-12E[X]+4=180-48+4=136$."
    ]
  },
  {
    "question": "An exponential loss has mean $10$. The benefit equals the square of the loss. Calculate the variance of the benefit.",
    "choices": [
      "$200$",
      "$400$",
      "$1600$",
      "$200000$",
      "$240000$"
    ],
    "answer": 3,
    "solution": [
      "For an exponential variable, $E[X^k]=k!10^k$.",
      "$\\operatorname{Var}(X^2)=E[X^4]-(E[X^2])^2=24(10000)-200^2=200000$."
    ]
  }
];

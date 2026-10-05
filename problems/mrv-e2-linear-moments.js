export default [
  {
    "question": "Independent $X,Y$ have means $10,20$ and variances $4,9$. Calculate $E[(2X-3Y+5)^2]$.",
    "choices": [
      "$97$",
      "$1225$",
      "$1257$",
      "$1322$",
      "$1422$"
    ],
    "answer": 3,
    "solution": [
      "The linear combination has mean $-35$ and variance $4(4)+9(9)=97$.",
      "The second raw moment is $97+(-35)^2=1322$."
    ]
  },
  {
    "question": "Independent identically distributed $X_1,\\ldots,X_{25}$ have mean $8$ and variance $100$. Calculate $E[\\bar X^2]$.",
    "choices": [
      "$4$",
      "$8$",
      "$64$",
      "$68$",
      "$164$"
    ],
    "answer": 3,
    "solution": [
      "$E[\\bar X]=8$ and $\\operatorname{Var}(\\bar X)=100/25=4$.",
      "The second raw moment is $4+8^2=68$."
    ]
  },
  {
    "question": "Independent variables $X_1,X_2,X_3$ each have variance $4$. Calculate $\\operatorname{Var}(X_1+2X_2-X_3)$.",
    "choices": [
      "$0$",
      "$8$",
      "$16$",
      "$24$",
      "$64$"
    ],
    "answer": 3,
    "solution": [
      "Independence eliminates covariance terms.",
      "Variance is $(1^2+2^2+(-1)^2)4=24$."
    ]
  }
];

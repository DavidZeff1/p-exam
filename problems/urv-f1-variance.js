export default [
  {
    "question": "A loss takes values $0,100,400$ with probabilities $0.6,0.3,0.1$. Calculate its variance.",
    "choices": [
      "$4900$",
      "$12000$",
      "$14100$",
      "$19000$",
      "$23900$"
    ],
    "answer": 2,
    "solution": [
      "$E[X]=70$ and $E[X^2]=10000(0.3)+160000(0.1)=19000$.",
      "$\\operatorname{Var}(X)=19000-70^2=14100$."
    ]
  },
  {
    "question": "A variable has variance $25$. Let $Y=4-3X$. Calculate the variance of $Y$.",
    "choices": [
      "$9$",
      "$25$",
      "$75$",
      "$225$",
      "$229$"
    ],
    "answer": 3,
    "solution": [
      "The constant shift contributes no variance.",
      "$\\operatorname{Var}(Y)=(-3)^2(25)=225$."
    ]
  },
  {
    "question": "A payment is $1000$ with probability $0.2$ and zero otherwise. Calculate its variance.",
    "choices": [
      "$40000$",
      "$160000$",
      "$200000$",
      "$800000$",
      "$1000000$"
    ],
    "answer": 1,
    "solution": [
      "$E[Y]=200$ and $E[Y^2]=200000$.",
      "$\\operatorname{Var}(Y)=200000-200^2=160000$."
    ]
  }
];

export default [
  {
    "question": "A policy has claim probability $0.2$. Conditional severity has mean $500$ and variance $10000$. Calculate the variance of loss per policy.",
    "choices": [
      "$2000$",
      "$10000$",
      "$40000$",
      "$42000$",
      "$52000$"
    ],
    "answer": 3,
    "solution": [
      "$E[X]=0.2(500)=100$.",
      "$E[X^2]=0.2(10000+500^2)=52000$. Subtract $100^2$ to get $42000$."
    ]
  },
  {
    "question": "Claim probability is $0.1$. Given a claim, severity is uniform on $(0,1000)$. There is an ordinary deductible of $200$. Calculate expected insurer payment per policy.",
    "choices": [
      "$20$",
      "$32$",
      "$40$",
      "$50$",
      "$320$"
    ],
    "answer": 1,
    "solution": [
      "Given a claim, mean payment is $\\int_{200}^{1000}(x-200)/1000\\,dx=320$.",
      "Multiply by occurrence probability: $0.1(320)=32$."
    ]
  },
  {
    "question": "A loss has mean $1000$. An insurer payment from that loss has mean $650$. Calculate the expected loss retained by the policyholder.",
    "choices": [
      "$0$",
      "$350$",
      "$650$",
      "$1000$",
      "$1650$"
    ],
    "answer": 1,
    "solution": [
      "The retained loss is $R=X-Y$.",
      "Linearity gives $E[R]=1000-650=350$, even though loss and payment are dependent."
    ]
  }
];

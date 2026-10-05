export default [
  {
    "question": "After an ordinary deductible of $500$, the policyholder pays 20% of the remaining loss. For a loss of $2500$, calculate the insurer payment.",
    "choices": [
      "$400$",
      "$1500$",
      "$1600$",
      "$1900$",
      "$2000$"
    ],
    "answer": 2,
    "solution": [
      "The insurer share is $80\\%$.",
      "Payment is $0.8(2500-500)=1600$."
    ]
  },
  {
    "question": "The full payment after a deductible has mean $500$ and variance $40000$. The insurer pays 60% of that payment. Calculate the insurer payment standard deviation.",
    "choices": [
      "$72$",
      "$120$",
      "$200$",
      "$240$",
      "$300$"
    ],
    "answer": 1,
    "solution": [
      "The original SD is $\\sqrt{40000}=200$.",
      "Scaling by $0.6$ gives SD $120$ and variance $14400$."
    ]
  },
  {
    "question": "A policy pays 80% of the loss above a deductible of $1000$, subject to a cap of $3000$ on the final insurer payment. Calculate payment for a loss of $5000$.",
    "choices": [
      "$2400$",
      "$3000$",
      "$3200$",
      "$4000$",
      "$5000$"
    ],
    "answer": 1,
    "solution": [
      "The contract is $Y=\\min(0.8(X-1000)_+,3000)$.",
      "For $X=5000$, the uncapped payment is $3200$, so the final payment is $3000$."
    ]
  }
];

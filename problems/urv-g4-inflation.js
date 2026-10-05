export default [
  {
    "question": "A loss before inflation is $2000$. Inflation is 10%. A fixed ordinary deductible is $500$, and the insurer pays 80% of the excess. Calculate payment.",
    "choices": [
      "$1200$",
      "$1320$",
      "$1360$",
      "$1600$",
      "$1760$"
    ],
    "answer": 2,
    "solution": [
      "Inflate the loss to $2200$ before applying the fixed deductible.",
      "Payment is $0.8(2200-500)=1360$."
    ]
  },
  {
    "question": "A loss before inflation is exponential with mean $1000$. Inflation is 20% and the ordinary deductible remains $600$. Calculate expected payment per loss, rounded to two decimals.",
    "choices": [
      "$606.53$",
      "$658.57$",
      "$727.84$",
      "$800.00$",
      "$1200.00$"
    ],
    "answer": 2,
    "solution": [
      "The inflated loss is exponential with mean $1200$.",
      "The mean payment is $1200e^{-600/1200}=1200e^{-0.5}\\approx727.84$."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,1000)$. Losses increase by 25%. A policy has a fixed deductible of $250$ and a final payment cap of $500$, with no coinsurance. Calculate the probability that the insurer pays the cap.",
    "choices": [
      "$0.25$",
      "$0.30$",
      "$0.40$",
      "$0.50$",
      "$0.60$"
    ],
    "answer": 2,
    "solution": [
      "The cap is reached when $1.25X-250\\ge500$, or $X\\ge600$.",
      "The probability is $(1000-600)/1000=0.4$."
    ]
  }
];

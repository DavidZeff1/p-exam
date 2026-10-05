export default [
  {
    "question": "$X$ is uniform on $(0,1000)$. Payment is $Y=\\min((X-200)_+,500)$. Calculate $P(Y=500)$.",
    "choices": [
      "$0.2$",
      "$0.3$",
      "$0.5$",
      "$0.7$",
      "$0.8$"
    ],
    "answer": 1,
    "solution": [
      "The cap is reached when $X\\ge200+500=700$.",
      "The probability is $(1000-700)/1000=0.3$."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,1000)$. Payment is $Y=\\min((X-200)_+,500)$. Calculate $E[Y]$.",
    "choices": [
      "$125$",
      "$250$",
      "$275$",
      "$320$",
      "$500$"
    ],
    "answer": 2,
    "solution": [
      "Use the continuous part plus the cap atom.",
      "$E[Y]=\\int_{200}^{700}(x-200)/1000\\,dx+500(0.3)=125+150=275$."
    ]
  },
  {
    "question": "An exponential loss has mean $1000$. A policy has no deductible and a maximum payment of $2000$. Calculate expected payment, rounded to two decimals.",
    "choices": [
      "$270.67$",
      "$594.00$",
      "$864.66$",
      "$1000.00$",
      "$2000.00$"
    ],
    "answer": 2,
    "solution": [
      "$E[\\min(X,2000)]=\\int_0^{2000}e^{-x/1000}\\,dx$.",
      "This is $1000(1-e^{-2})\\approx864.66$."
    ]
  }
];

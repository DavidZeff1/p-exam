export default [
  {
    "question": "A loss is exponential with mean $1000$. An ordinary deductible is $500$. Calculate the expected payment per loss, rounded to two decimals.",
    "choices": [
      "$303.27$",
      "$500.00$",
      "$606.53$",
      "$1000.00$",
      "$1500.00$"
    ],
    "answer": 2,
    "solution": [
      "$E[(X-d)_+]=\\theta e^{-d/\\theta}$.",
      "$1000e^{-0.5}\\approx606.53$. This includes losses below the deductible."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,2000)$. A policy has a franchise deductible of $500$ and pays the full loss only when $X>500$. Calculate the expected payment.",
    "choices": [
      "$562.5$",
      "$750$",
      "$937.5$",
      "$1000$",
      "$1500$"
    ],
    "answer": 2,
    "solution": [
      "A franchise payment is $X I_{\\{X>500\\}}$.",
      "$E[Y]=\\int_{500}^{2000}x/2000\\,dx=(2000^2-500^2)/4000=937.5$."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,1000)$. A payment is $(X-250)_+$. Calculate $P(Y\\le100)$.",
    "choices": [
      "$0.10$",
      "$0.25$",
      "$0.35$",
      "$0.65$",
      "$0.75$"
    ],
    "answer": 2,
    "solution": [
      "$Y\\le100$ is equivalent to $X\\le350$, including zero payments.",
      "$P(X\\le350)=350/1000=0.35$."
    ]
  }
];

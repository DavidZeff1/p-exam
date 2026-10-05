export default [
  {
    "question": "A loss $X$ has density $3x^2$ on $(0,1)$. Given $X>0.5$, calculate $P(X>0.8)$ under this condition, rounded to four decimals.",
    "choices": [
      "$0.4880$",
      "$0.5120$",
      "$0.5577$",
      "$0.5851$",
      "$0.8750$"
    ],
    "answer": 2,
    "solution": [
      "The CDF is $F(x)=x^3$ on the support.",
      "$P(X>0.8\\mid X>0.5)=(1-0.8^3)/(1-0.5^3)=0.488/0.875=0.5577$."
    ]
  },
  {
    "question": "An exponential loss has mean $2000$. Given that the loss exceeds $1000$, calculate the expected amount of the loss in excess of $1000$.",
    "choices": [
      "$1000$",
      "$1213.06$",
      "$2000$",
      "$3000$",
      "$4000$"
    ],
    "answer": 2,
    "solution": [
      "By memorylessness, $X-1000\\mid X>1000$ is exponential with the original mean $2000$.",
      "The conditional original loss mean would be $3000$, but the requested excess mean is $2000$."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,10)$. Given $X>4$, calculate $E[X^2\\mid X>4]$.",
    "choices": [
      "$36$",
      "$40$",
      "$48$",
      "$52$",
      "$64$"
    ],
    "answer": 3,
    "solution": [
      "The conditional density is $1/6$ on $(4,10)$.",
      "$E[X^2\\mid X>4]=\\int_4^{10}x^2/6\\,dx=(1000-64)/18=52$."
    ]
  }
];

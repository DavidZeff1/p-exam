export default [
  {
    "question": "$X$ is uniform on $(0,10)$ and $Y=(X-4)_+$. Calculate $\\operatorname{Var}(Y)$.",
    "choices": [
      "$3.00$",
      "$3.24$",
      "$3.96$",
      "$7.20$",
      "$8.33$"
    ],
    "answer": 2,
    "solution": [
      "$E[Y]=6^2/20=1.8$ and $E[Y^2]=6^3/30=7.2$.",
      "Variance is $7.2-1.8^2=3.96$."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,10)$. Payment is $Y=\\min(X,5)$. Calculate $E[Y^2]$, rounded to four decimals.",
    "choices": [
      "$6.2500$",
      "$12.5000$",
      "$14.0625$",
      "$16.6667$",
      "$25.0000$"
    ],
    "answer": 3,
    "solution": [
      "Integrate the continuous part and add the cap mass.",
      "$E[Y^2]=\\int_0^5 x^2/10\\,dx+25P(X\\ge5)=125/30+12.5=16.6667$."
    ]
  },
  {
    "question": "An exponential loss has mean $100$. A policy has an ordinary deductible of $50$. Calculate the standard deviation of payment conditional on positive payment.",
    "choices": [
      "$50$",
      "$60.65$",
      "$91.94$",
      "$100$",
      "$150$"
    ],
    "answer": 3,
    "solution": [
      "By memorylessness, $(X-50)\\mid X>50$ is exponential with mean $100$.",
      "An exponential variable has SD equal to its mean, so the conditional payment SD is $100$."
    ]
  }
];

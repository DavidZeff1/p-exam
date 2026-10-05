export default [
  {
    "question": "A gamma loss has mean $600$ and coefficient of variation $0.5$. Using a shape–scale parameterization, calculate its scale parameter.",
    "choices": [
      "$75$",
      "$150$",
      "$300$",
      "$600$",
      "$1200$"
    ],
    "answer": 1,
    "solution": [
      "$\\operatorname{CV}=1/\\sqrt\\alpha$ implies $\\alpha=4$.",
      "Since $E[X]=\\alpha\\theta$, the scale is $\\theta=600/4=150$."
    ]
  },
  {
    "question": "$X$ has mean $100$ and standard deviation $40$. Calculate the coefficient of variation of $Y=1.2X+60$.",
    "choices": [
      "$0.20$",
      "$0.2667$",
      "$0.3333$",
      "$0.40$",
      "$0.48$"
    ],
    "answer": 1,
    "solution": [
      "$E[Y]=180$ and $\\operatorname{SD}(Y)=48$.",
      "$\\operatorname{CV}(Y)=48/180=0.2667$ to four decimals."
    ]
  },
  {
    "question": "Each of $25$ i.i.d. positive losses has coefficient of variation $2$. Calculate the coefficient of variation of the total loss.",
    "choices": [
      "$0.08$",
      "$0.4$",
      "$2$",
      "$5$",
      "$10$"
    ],
    "answer": 1,
    "solution": [
      "For independent identically distributed losses, the total CV is the individual CV divided by $\\sqrt n$.",
      "$2/\\sqrt{25}=0.4$."
    ]
  }
];

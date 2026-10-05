export default [
  {
    "question": "$X$ is binomial with $n=4,p=0.5$. Calculate $P(X=2\\mid X\\ge1)$.",
    "choices": [
      "$1/4$",
      "$3/8$",
      "$2/5$",
      "$1/2$",
      "$3/5$"
    ],
    "answer": 2,
    "solution": [
      "$P(X=2)=6/16$ and $P(X\\ge1)=15/16$.",
      "The ratio is $6/15=2/5$."
    ]
  },
  {
    "question": "$X$ is Poisson with mean $2$. Calculate $E[X\\mid X>0]$, rounded to four decimals.",
    "choices": [
      "$1.6869$",
      "$2.0000$",
      "$2.1565$",
      "$2.3130$",
      "$3.0000$"
    ],
    "answer": 3,
    "solution": [
      "$E[X\\mid X>0]=E[X]/P(X>0)$ because the excluded outcome is zero.",
      "$2/(1-e^{-2})\\approx2.3130$."
    ]
  },
  {
    "question": "$X$ counts independent trials up to and including the first success, with success probability $0.2$. Given $X>3$, calculate $P(X>5)$.",
    "choices": [
      "$0.2$",
      "$0.32768$",
      "$0.4$",
      "$0.64$",
      "$0.8$"
    ],
    "answer": 3,
    "solution": [
      "By geometric memorylessness, $P(X>5\\mid X>3)=P(X>2)$.",
      "Two further failures have probability $(0.8)^2=0.64$."
    ]
  }
];

export default [
  {
    "question": "$X$ is uniform on $(0,1000)$ and $Y=(X-200)_+$. Calculate $E[Y\\mid Y>0]$.",
    "choices": [
      "$200$",
      "$250$",
      "$320$",
      "$400$",
      "$500$"
    ],
    "answer": 3,
    "solution": [
      "$P(Y>0)=0.8$ and $E[Y]=320$.",
      "The positive-payment mean is $320/0.8=400$. Equivalently, $Y\\mid Y>0$ is uniform on $(0,800)$."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,1000)$ and $Y=\\min(0.5(X-200)_+,300)$. Calculate $P(Y=300)$.",
    "choices": [
      "$0.1$",
      "$0.2$",
      "$0.3$",
      "$0.5$",
      "$0.8$"
    ],
    "answer": 1,
    "solution": [
      "The cap is reached when $0.5(X-200)\\ge300$, or $X\\ge800$.",
      "This has probability $0.2$. There is also mass $0.2$ at zero."
    ]
  },
  {
    "question": "$X$ is uniform on $(0,1000)$ and $Y=0.5(X-200)_+$. Calculate the density of $Y$ at $y=100$.",
    "choices": [
      "$0.0005$",
      "$0.0010$",
      "$0.00125$",
      "$0.0020$",
      "$0.0050$"
    ],
    "answer": 3,
    "solution": [
      "For $0<y<400$, the inverse transformation is $x=200+2y$.",
      "The density is $f_X(200+2y)\\cdot2=0.002$. It integrates to $0.8$ on the positive interval; mass $0.2$ is at zero."
    ]
  }
];

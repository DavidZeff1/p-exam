export default [
  {
    "question": "Five independent losses are uniform on $(0,1000)$. Calculate the probability that the second-largest loss is at most $800$.",
    "choices": [
      "$0.32768$",
      "$0.40960$",
      "$0.65536$",
      "$0.73728$",
      "$0.94208$"
    ],
    "answer": 3,
    "solution": [
      "The second largest is the fourth order statistic. At least four losses must be at most $800$.",
      "This probability is $\\binom54(0.8)^4(0.2)+(0.8)^5=0.73728$."
    ]
  },
  {
    "question": "Three independent variables are uniform on $(0,1)$. Let $U$ be their minimum and $V$ their maximum. Calculate $P(U>0.2,V<0.7)$.",
    "choices": [
      "$0.025$",
      "$0.075$",
      "$0.125$",
      "$0.216$",
      "$0.5$"
    ],
    "answer": 2,
    "solution": [
      "All three observations must fall in $(0.2,0.7)$.",
      "By independence the probability is $(0.7-0.2)^3=0.125$. Equivalently, integrate $6(v-u)$ over $0.2<u<v<0.7$."
    ]
  },
  {
    "question": "Four independent variables are uniform on $(0,1)$. Let $U$ be the minimum and $V$ the maximum. Calculate the joint density at $u=0.2,v=0.7$.",
    "choices": [
      "$0.25$",
      "$0.5$",
      "$1.5$",
      "$3$",
      "$6$"
    ],
    "answer": 3,
    "solution": [
      "The joint density is $4(3)(v-u)^{4-2}$ for $0<u<v<1$.",
      "At the given point it is $12(0.5)^2=3$. Densities can exceed one."
    ]
  }
];

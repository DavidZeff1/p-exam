export default [
  {
    "question": "A loss has mean $100$ and second raw moment $12500$. Calculate its standard deviation.",
    "choices": [
      "$25$",
      "$50$",
      "$100$",
      "$111.80$",
      "$2500$"
    ],
    "answer": 1,
    "solution": [
      "$\\operatorname{Var}(X)=12500-100^2=2500$.",
      "The standard deviation is $\\sqrt{2500}=50$."
    ]
  },
  {
    "question": "An insurer covers $64$ independent losses, each with standard deviation $120$. Calculate the standard deviation of their average.",
    "choices": [
      "$1.875$",
      "$15$",
      "$120$",
      "$960$",
      "$7680$"
    ],
    "answer": 1,
    "solution": [
      "The variance of the average is $120^2/64$.",
      "The standard deviation is $120/\\sqrt{64}=15$."
    ]
  },
  {
    "question": "Independent variables $X,Y$ have standard deviations $3,4$. Calculate the standard deviation of $2X-Y$.",
    "choices": [
      "$2$",
      "$5$",
      "$7$",
      "$\\sqrt{52}$",
      "$10$"
    ],
    "answer": 3,
    "solution": [
      "By independence, $\\operatorname{Var}(2X-Y)=4(9)+16=52$.",
      "The standard deviation is $\\sqrt{52}$. Standard deviations do not add."
    ]
  }
];

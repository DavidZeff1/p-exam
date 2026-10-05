export default [
  {
    "question": "A loss takes values $0,200,600$ with probabilities $0.5,0.3,0.2$. A policy has an ordinary deductible of $100$. Calculate the expected insurer payment.",
    "choices": [
      "$80$",
      "$120$",
      "$130$",
      "$180$",
      "$200$"
    ],
    "answer": 2,
    "solution": [
      "The corresponding payments are $0,100,500$.",
      "The weighted average is $0(0.5)+100(0.3)+500(0.2)=130$."
    ]
  },
  {
    "question": "A loss has density $2x/10000$ on $(0,100)$. A benefit is $X^2/100$. Calculate its expected value, rounded to two decimals.",
    "choices": [
      "$33.33$",
      "$44.44$",
      "$50.00$",
      "$66.67$",
      "$75.00$"
    ],
    "answer": 2,
    "solution": [
      "Use LOTUS rather than squaring the mean.",
      "$E[X^2/100]=\\int_0^{100}(x^2/100)(2x/10000)\\,dx=50$."
    ]
  },
  {
    "question": "A portfolio contains $100$ policies, each with claim probability $0.03$. Claims need not be independent. Each claim produces a fixed benefit of $5000$. Calculate the expected total benefit.",
    "choices": [
      "$1500$",
      "$5000$",
      "$10000$",
      "$15000$",
      "$500000$"
    ],
    "answer": 3,
    "solution": [
      "Let $I_i$ indicate a claim on policy $i$. Total benefit is $5000\\sum I_i$.",
      "Linearity gives $5000\\sum E[I_i]=5000(100)(0.03)=15000$ without an independence assumption."
    ]
  }
];

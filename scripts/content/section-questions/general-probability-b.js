export default [
  {
    "question": "A review panel of four is selected from 7 actuaries and 8 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Every panel and every assignment of the two roles within it are equally likely. Calculate the probability that the panel has exactly two actuaries, with an actuary as chair and an underwriter as secretary. Round your answer to four decimal places.",
    "choices": [
      "$0.0718$",
      "$0.1436$",
      "$0.2636$",
      "$0.5718$",
      "$0.8564$"
    ],
    "answer": 1,
    "solution": [
      "Choose two members from each profession: choose(7,2)×choose(8,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 2352. The unrestricted count is choose(15,4)×4×3=16380; the requested result is 0.14359."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(7,2)×choose(8,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 7,
      "J": 8,
      "target": "probability",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:0",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A review panel of four is selected from 8 actuaries and 8 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Exactly two panel members must be actuaries; the chair must be an actuary and the secretary an underwriter. Calculate the number of permitted panel-and-role assignments.",
    "choices": [
      "$1568$",
      "$2509$",
      "$3136$",
      "$3763$",
      "$6272$"
    ],
    "answer": 2,
    "solution": [
      "Choose two members from each profession: choose(8,2)×choose(8,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 3136. The unrestricted count is choose(16,4)×4×3=21840; the requested result is 3136."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(8,2)×choose(8,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 8,
      "J": 8,
      "target": "count",
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:1",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A security code is an ordered sequence of four distinct symbols chosen from 12 symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes. Round your answer to four decimal places.",
    "choices": [
      "$495.0000$",
      "$5040.0000$",
      "$10800.0000$",
      "$11880.0000$",
      "$20736.0000$"
    ],
    "answer": 2,
    "solution": [
      "Without the restriction there are 12!/(12-4)!=11880 codes.",
      "Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from 10 symbols, giving 12(10)(9).",
      "Subtract forbidden codes: 11880-1080=10800."
    ],
    "feedback": {
      "0": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "1": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "3": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "4": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols."
    },
    "skills": [
      "ordered counting",
      "restrictions",
      "complement counting"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: ordered counting, restrictions, complement counting.",
      "Without the restriction there are 12!/(12-4)!=11880 codes."
    ],
    "verification": {
      "kind": "restricted-code",
      "n": 12,
      "r": 4
    },
    "level": "challenge",
    "id": "section:general-probability-b:8",
    "topicId": "b2-permutations",
    "family": "restricted-code",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "5 distinct claim files are arranged in a line. Files A and B must be adjacent, but file C may not be adjacent to either A or B. Calculate the number of permitted arrangements. Round your answer to four decimal places.",
    "choices": [
      "$6.0000$",
      "$12.0000$",
      "$24.0000$",
      "$48.0000$",
      "$96.0000$"
    ],
    "answer": 2,
    "solution": [
      "Treat A,B as a block, with two internal orders: 2(4)! arrangements.",
      "Forbidden arrangements have C immediately before or after that block. There are four internal orders for the three-file block and (3)! block arrangements.",
      "Subtract: 2(4)!-4(3)!=24."
    ],
    "feedback": {
      "0": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block.",
      "1": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block.",
      "3": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block.",
      "4": "Use the adjacent A,B block, then subtract arrangements with C at either exposed end of that block."
    },
    "skills": [
      "permutations with adjacency",
      "subtract forbidden arrangements"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: permutations with adjacency, subtract forbidden arrangements.",
      "Treat A,B as a block, with two internal orders: 2(4)! arrangements."
    ],
    "verification": {
      "kind": "adjacency",
      "n": 5
    },
    "level": "challenge",
    "id": "section:general-probability-b:9",
    "topicId": "b2-permutations",
    "family": "adjacent-permutation",
    "difficulty": 6,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A committee consists of exactly two senior and two junior employees selected from 4 seniors and 5 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
    "choices": [
      "$60.0000$",
      "$126.0000$",
      "$240.0000$",
      "$504.0000$",
      "$960.0000$"
    ],
    "answer": 2,
    "solution": [
      "Choose the committee in choose(4,2)choose(5,2) ways.",
      "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
      "The total is choose(4,2)choose(5,2)×2×2=240."
    ],
    "feedback": {
      "0": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "1": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "3": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "4": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition."
    },
    "skills": [
      "combinations",
      "labeled roles",
      "group restrictions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled roles, group restrictions.",
      "Choose the committee in choose(4,2)choose(5,2) ways."
    ],
    "verification": {
      "kind": "committee-roles",
      "S": 4,
      "J": 5
    },
    "level": "challenge",
    "id": "section:general-probability-b:10",
    "topicId": "b3-combinations",
    "family": "committee-roles",
    "difficulty": 4,
    "relatedTopicIds": [
      "b3-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Four files are sampled uniformly without replacement from 10 files, of which 4 are high severity. Given that the sample contains at least one high-severity file, calculate the probability it contains exactly two. Round your answer to four decimal places.",
    "choices": [
      "$0.1333$",
      "$0.4286$",
      "$0.4306$",
      "$0.4615$",
      "$0.9286$"
    ],
    "answer": 3,
    "solution": [
      "The total number of samples satisfying the condition is choose(10,4)-choose(6,4)=195.",
      "Exactly-two samples can be chosen in choose(4,2)choose(6,2)=90 ways.",
      "The conditional probability is 90/195=0.461538."
    ],
    "feedback": {
      "0": "This samples only two files instead of four.",
      "1": "This is the unconditional probability of exactly two.",
      "2": "This removes all-success samples rather than no-success samples.",
      "4": "This is the condition probability, not the ratio requested."
    },
    "skills": [
      "combinatorial probability",
      "conditioning on a sample event"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinatorial probability, conditioning on a sample event.",
      "The total number of samples satisfying the condition is choose(10,4)-choose(6,4)=195."
    ],
    "verification": {
      "kind": "hypergeom",
      "N": 10,
      "K": 4,
      "n": 4,
      "target": "two-given-positive"
    },
    "level": "challenge",
    "id": "section:general-probability-b:11",
    "topicId": "b4-combinatorial-probability",
    "family": "conditional-sample",
    "difficulty": 5,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A committee consists of exactly two senior and two junior employees selected from 6 seniors and 7 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
    "choices": [
      "$315.0000$",
      "$715.0000$",
      "$1260.0000$",
      "$2860.0000$",
      "$5040.0000$"
    ],
    "answer": 2,
    "solution": [
      "Choose the committee in choose(6,2)choose(7,2) ways.",
      "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
      "The total is choose(6,2)choose(7,2)×2×2=1260."
    ],
    "feedback": {
      "0": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "1": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "3": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "4": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition."
    },
    "skills": [
      "combinations",
      "labeled roles",
      "group restrictions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled roles, group restrictions.",
      "Choose the committee in choose(6,2)choose(7,2) ways."
    ],
    "verification": {
      "kind": "committee-roles",
      "S": 6,
      "J": 7
    },
    "level": "challenge",
    "id": "section:general-probability-b:12",
    "topicId": "b3-combinations",
    "family": "committee-roles",
    "difficulty": 4,
    "relatedTopicIds": [
      "b3-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "A security code is an ordered sequence of four distinct symbols chosen from 10 symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes. Round your answer to four decimal places.",
    "choices": [
      "$210.0000$",
      "$1680.0000$",
      "$4368.0000$",
      "$5040.0000$",
      "$10000.0000$"
    ],
    "answer": 2,
    "solution": [
      "Without the restriction there are 10!/(10-4)!=5040 codes.",
      "Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from 8 symbols, giving 12(8)(7).",
      "Subtract forbidden codes: 5040-672=4368."
    ],
    "feedback": {
      "0": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "1": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "3": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "4": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols."
    },
    "skills": [
      "ordered counting",
      "restrictions",
      "complement counting"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: ordered counting, restrictions, complement counting.",
      "Without the restriction there are 10!/(10-4)!=5040 codes."
    ],
    "verification": {
      "kind": "restricted-code",
      "n": 10,
      "r": 4
    },
    "level": "challenge",
    "id": "section:general-probability-b:13",
    "topicId": "b2-permutations",
    "family": "restricted-code",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "Four files are sampled uniformly without replacement from 11 files, of which 5 are high severity. Given that the sample contains at least one high-severity file, calculate the probability it contains exactly two. Round your answer to four decimal places.",
    "choices": [
      "$0.1818$",
      "$0.4545$",
      "$0.4615$",
      "$0.4762$",
      "$0.9545$"
    ],
    "answer": 3,
    "solution": [
      "The total number of samples satisfying the condition is choose(11,4)-choose(6,4)=315.",
      "Exactly-two samples can be chosen in choose(5,2)choose(6,2)=150 ways.",
      "The conditional probability is 150/315=0.47619."
    ],
    "feedback": {
      "0": "This samples only two files instead of four.",
      "1": "This is the unconditional probability of exactly two.",
      "2": "This removes all-success samples rather than no-success samples.",
      "4": "This is the condition probability, not the ratio requested."
    },
    "skills": [
      "combinatorial probability",
      "conditioning on a sample event"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinatorial probability, conditioning on a sample event.",
      "The total number of samples satisfying the condition is choose(11,4)-choose(6,4)=315."
    ],
    "verification": {
      "kind": "hypergeom",
      "N": 11,
      "K": 5,
      "n": 4,
      "target": "two-given-positive"
    },
    "level": "challenge",
    "id": "section:general-probability-b:14",
    "topicId": "b4-combinatorial-probability",
    "family": "conditional-sample",
    "difficulty": 5,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 6 senior and 5 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.0833$",
      "$0.4167$",
      "$0.4545$",
      "$0.5000$",
      "$0.5833$"
    ],
    "answer": 1,
    "solution": [
      "After including the specified senior, choose three people from the remaining 10.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(5,1)choose(5,2).",
      "Divide by choose(10,3) to obtain 0.416667."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "2": "This is the unconditional probability before learning that a specific senior is included.",
      "3": "This considers only one additional member and omits the other two selections.",
      "4": "This gives the complement of the required composition."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 10."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 6,
      "J": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:15",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A review panel of four is selected from 9 actuaries and 9 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Every panel and every assignment of the two roles within it are equally likely. Calculate the probability that the panel has exactly two actuaries, with an actuary as chair and an underwriter as secretary. Round your answer to four decimal places.",
    "choices": [
      "$0.0706$",
      "$0.1412$",
      "$0.2612$",
      "$0.5706$",
      "$0.8588$"
    ],
    "answer": 1,
    "solution": [
      "Choose two members from each profession: choose(9,2)×choose(9,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 5184. The unrestricted count is choose(18,4)×4×3=36720; the requested result is 0.141176."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(9,2)×choose(9,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 9,
      "J": 9,
      "target": "probability",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:2",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A review panel of four is selected from 5 actuaries and 9 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Exactly two panel members must be actuaries; the chair must be an actuary and the secretary an underwriter. Calculate the number of permitted panel-and-role assignments.",
    "choices": [
      "$720$",
      "$1152$",
      "$1440$",
      "$1728$",
      "$2880$"
    ],
    "answer": 2,
    "solution": [
      "Choose two members from each profession: choose(5,2)×choose(9,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 1440. The unrestricted count is choose(14,4)×4×3=12012; the requested result is 1440."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(5,2)×choose(9,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 5,
      "J": 9,
      "target": "count",
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:3",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A 4-digit identifier uses distinct digits chosen from 0 through 9. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
    "choices": [
      "$252$",
      "$1344$",
      "$1512$",
      "$1536$",
      "$5040$"
    ],
    "answer": 1,
    "solution": [
      "Choose the last digit first: there are three possibilities, each nonzero.",
      "After fixing the last digit, the first digit has 8 nonzero choices.",
      "Fill the 2 labeled middle positions from the remaining 8 digits without replacement. The count is 3×8×56=1344."
    ],
    "feedback": {
      "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
    },
    "skills": [
      "constrained positions",
      "multiplication principle",
      "permutations"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: constrained positions, multiplication principle, permutations.",
      "Choose the last digit first: there are three possibilities, each nonzero."
    ],
    "verification": {
      "kind": "digit-codes",
      "n": 10,
      "length": 4,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:16",
    "topicId": "b2-permutations",
    "family": "digit-code-restrictions",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A row contains two identical red folders and 4 distinct numbered folders. All folders are used. Calculate the number of distinct rows in which the red folders are not adjacent.",
    "choices": [
      "$72$",
      "$120$",
      "$240$",
      "$360$",
      "$480$"
    ],
    "answer": 2,
    "solution": [
      "Arrange the numbered folders in 4! ways.",
      "The numbered row creates 5 gaps, including the two ends. Choose two different gaps for the identical red folders.",
      "The count is 4!×choose(5,2)=240. No factor of 2 is needed for identical red folders."
    ],
    "feedback": {
      "0": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
      "1": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
      "3": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap.",
      "4": "Account for identical folders and use all gaps, including the ends, with at most one red folder per gap."
    },
    "skills": [
      "identical objects",
      "gap method",
      "nonadjacency"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: identical objects, gap method, nonadjacency.",
      "Arrange the numbered folders in 4! ways."
    ],
    "verification": {
      "kind": "multiset-separation",
      "n": 4,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:17",
    "topicId": "b3-combinations",
    "family": "multiset-separation",
    "difficulty": 6,
    "relatedTopicIds": [
      "b3-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 7 senior and 6 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.0909$",
      "$0.4091$",
      "$0.4406$",
      "$0.5000$",
      "$0.5909$"
    ],
    "answer": 1,
    "solution": [
      "After including the specified senior, choose three people from the remaining 12.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(6,1)choose(6,2).",
      "Divide by choose(12,3) to obtain 0.409091."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "2": "This is the unconditional probability before learning that a specific senior is included.",
      "3": "This considers only one additional member and omits the other two selections.",
      "4": "This gives the complement of the required composition."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 12."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 7,
      "J": 6,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:18",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 4 senior and 6 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.2143$",
      "$0.2381$",
      "$0.3333$",
      "$0.4286$",
      "$0.5357$"
    ],
    "answer": 4,
    "solution": [
      "After including the specified senior, choose three people from the remaining 9.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(3,1)choose(6,2).",
      "Divide by choose(9,3) to obtain 0.535714."
    ],
    "feedback": {
      "0": "This adds two more seniors, giving three seniors overall.",
      "1": "This gives exactly one senior overall.",
      "2": "This considers only one additional member and omits the other two selections.",
      "3": "This is the unconditional probability before learning that a specific senior is included."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 9."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 4,
      "J": 6,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:19",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 5 senior and 5 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.1190$",
      "$0.3571$",
      "$0.4444$",
      "$0.4762$",
      "$0.5238$"
    ],
    "answer": 3,
    "solution": [
      "After including the specified senior, choose three people from the remaining 9.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(4,1)choose(5,2).",
      "Divide by choose(9,3) to obtain 0.47619."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "1": "This adds two more seniors, giving three seniors overall.",
      "2": "This considers only one additional member and omits the other two selections.",
      "4": "This gives the complement of the required composition."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 9."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 5,
      "J": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:20",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A 4-digit identifier uses distinct digits chosen from 0 through 8. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
    "choices": [
      "$168$",
      "$882$",
      "$1008$",
      "$1029$",
      "$3024$"
    ],
    "answer": 1,
    "solution": [
      "Choose the last digit first: there are three possibilities, each nonzero.",
      "After fixing the last digit, the first digit has 7 nonzero choices.",
      "Fill the 2 labeled middle positions from the remaining 7 digits without replacement. The count is 3×7×42=882."
    ],
    "feedback": {
      "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
    },
    "skills": [
      "constrained positions",
      "multiplication principle",
      "permutations"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: constrained positions, multiplication principle, permutations.",
      "Choose the last digit first: there are three possibilities, each nonzero."
    ],
    "verification": {
      "kind": "digit-codes",
      "n": 9,
      "length": 4,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:21",
    "topicId": "b2-permutations",
    "family": "digit-code-restrictions",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A lot contains 17 parts, of which 6 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.2967$",
      "$0.4000$",
      "$0.4320$",
      "$0.4747$",
      "$0.4853$"
    ],
    "answer": 3,
    "solution": [
      "The remaining lot has 15 parts: 6 defective and 9 sound.",
      "Choose one defective and two sound parts in choose(6,1)choose(9,2) ways.",
      "Divide by choose(15,3) to obtain 0.474725."
    ],
    "feedback": {
      "0": "This gives exactly two defective parts.",
      "1": "This is the probability for only one new part.",
      "2": "This treats the follow-up sample as sampling with replacement.",
      "4": "This samples from the original lot and ignores the observed removals."
    },
    "skills": [
      "update a finite population",
      "hypergeometric sample"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: update a finite population, hypergeometric sample.",
      "The remaining lot has 15 parts: 6 defective and 9 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 17,
      "K": 6,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:22",
    "topicId": "b4-combinatorial-probability",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A lot contains 15 parts, of which 6 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.3671$",
      "$0.4015$",
      "$0.4406$",
      "$0.4615$",
      "$0.4747$"
    ],
    "answer": 2,
    "solution": [
      "The remaining lot has 13 parts: 6 defective and 7 sound.",
      "Choose one defective and two sound parts in choose(6,1)choose(7,2) ways.",
      "Divide by choose(13,3) to obtain 0.440559."
    ],
    "feedback": {
      "0": "This gives exactly two defective parts.",
      "1": "This treats the follow-up sample as sampling with replacement.",
      "3": "This is the probability for only one new part.",
      "4": "This samples from the original lot and ignores the observed removals."
    },
    "skills": [
      "update a finite population",
      "hypergeometric sample"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: update a finite population, hypergeometric sample.",
      "The remaining lot has 13 parts: 6 defective and 7 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 15,
      "K": 6,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:23",
    "topicId": "b4-combinatorial-probability",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A review panel of four is selected from 6 actuaries and 9 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Every panel and every assignment of the two roles within it are equally likely. Calculate the probability that the panel has exactly two actuaries, with an actuary as chair and an underwriter as secretary. Round your answer to four decimal places.",
    "choices": [
      "$0.0659$",
      "$0.1319$",
      "$0.2519$",
      "$0.5659$",
      "$0.8681$"
    ],
    "answer": 1,
    "solution": [
      "Choose two members from each profession: choose(6,2)×choose(9,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 2160. The unrestricted count is choose(15,4)×4×3=16380; the requested result is 0.131868."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(6,2)×choose(9,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 6,
      "J": 9,
      "target": "probability",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:4",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A review panel of four is selected from 7 actuaries and 10 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Exactly two panel members must be actuaries; the chair must be an actuary and the secretary an underwriter. Calculate the number of permitted panel-and-role assignments.",
    "choices": [
      "$1890$",
      "$3024$",
      "$3780$",
      "$4536$",
      "$7560$"
    ],
    "answer": 2,
    "solution": [
      "Choose two members from each profession: choose(7,2)×choose(10,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 3780. The unrestricted count is choose(17,4)×4×3=28560; the requested result is 3780."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(7,2)×choose(10,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 7,
      "J": 10,
      "target": "count",
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:5",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A committee of four is selected uniformly from 4 senior and 5 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.1786$",
      "$0.2679$",
      "$0.3750$",
      "$0.4762$",
      "$0.5357$"
    ],
    "answer": 4,
    "solution": [
      "After including the specified senior, choose three people from the remaining 8.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(3,1)choose(5,2).",
      "Divide by choose(8,3) to obtain 0.535714."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "1": "This adds two more seniors, giving three seniors overall.",
      "2": "This considers only one additional member and omits the other two selections.",
      "3": "This is the unconditional probability before learning that a specific senior is included."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 8."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 4,
      "J": 5,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:24",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A committee consists of exactly two senior and two junior employees selected from 5 seniors and 5 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
    "choices": [
      "$100.0000$",
      "$210.0000$",
      "$400.0000$",
      "$840.0000$",
      "$1600.0000$"
    ],
    "answer": 2,
    "solution": [
      "Choose the committee in choose(5,2)choose(5,2) ways.",
      "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
      "The total is choose(5,2)choose(5,2)×2×2=400."
    ],
    "feedback": {
      "0": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "1": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "3": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "4": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition."
    },
    "skills": [
      "combinations",
      "labeled roles",
      "group restrictions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled roles, group restrictions.",
      "Choose the committee in choose(5,2)choose(5,2) ways."
    ],
    "verification": {
      "kind": "committee-roles",
      "S": 5,
      "J": 5
    },
    "level": "challenge",
    "id": "section:general-probability-b:25",
    "topicId": "b3-combinations",
    "family": "committee-roles",
    "difficulty": 4,
    "relatedTopicIds": [
      "b3-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "A committee consists of exactly two senior and two junior employees selected from 6 seniors and 6 juniors. One selected senior is chair and one selected junior is secretary. Calculate the number of distinct committee-and-role assignments. Round your answer to four decimal places.",
    "choices": [
      "$225.0000$",
      "$495.0000$",
      "$900.0000$",
      "$1980.0000$",
      "$3600.0000$"
    ],
    "answer": 2,
    "solution": [
      "Choose the committee in choose(6,2)choose(6,2) ways.",
      "Choose its chair from the two selected seniors and secretary from the two selected juniors.",
      "The total is choose(6,2)choose(6,2)×2×2=900."
    ],
    "feedback": {
      "0": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "1": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "3": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition.",
      "4": "Separate unordered membership selection from the labeled roles; impose the senior/junior composition."
    },
    "skills": [
      "combinations",
      "labeled roles",
      "group restrictions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled roles, group restrictions.",
      "Choose the committee in choose(6,2)choose(6,2) ways."
    ],
    "verification": {
      "kind": "committee-roles",
      "S": 6,
      "J": 6
    },
    "level": "challenge",
    "id": "section:general-probability-b:26",
    "topicId": "b3-combinations",
    "family": "committee-roles",
    "difficulty": 4,
    "relatedTopicIds": [
      "b3-combinations"
    ],
    "cumulative": false
  },
  {
    "question": "Independent trials succeed with probability 0.4. T is the trial number of the 3th success. Given that trial 1 failed, calculate P(T=7). Round your answer to four decimal places.",
    "choices": [
      "$0.0829$",
      "$0.1244$",
      "$0.1382$",
      "$0.2304$",
      "$0.3456$"
    ],
    "answer": 2,
    "solution": [
      "Trial 7 must succeed, and among trials 2 through 6 there must be exactly 2 successes.",
      "The first failure is given, so it contributes no probability factor after conditioning. There are choose(5,2) admissible success-position sets.",
      "The conditional probability is choose(5,2)(0.4)^3(0.6)^3=0.13824."
    ],
    "feedback": {
      "0": "This retains the factor for the first failure even though that failure is already given.",
      "1": "This is the unconditional negative-binomial probability.",
      "3": "This allows all required successes before the final trial.",
      "4": "This omits the required success on the final trial."
    },
    "skills": [
      "negative-binomial event",
      "conditional first trial",
      "success positions"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: negative-binomial event, conditional first trial, success positions.",
      "Trial 7 must succeed, and among trials 2 through 6 there must be exactly 2 successes."
    ],
    "verification": {
      "kind": "negative-first-failure",
      "r": 3,
      "t": 7,
      "p": 0.4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:27",
    "topicId": "b4-combinatorial-probability",
    "family": "negative-binomial-first-failure",
    "difficulty": 5,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A security code is an ordered sequence of four distinct symbols chosen from 8 symbols. Two specified symbols may not both appear in the code. Calculate the number of permitted codes. Round your answer to four decimal places.",
    "choices": [
      "$70.0000$",
      "$360.0000$",
      "$1320.0000$",
      "$1680.0000$",
      "$4096.0000$"
    ],
    "answer": 2,
    "solution": [
      "Without the restriction there are 8!/(8-4)!=1680 codes.",
      "Codes containing both specified symbols: choose their positions in 4×3 ways and fill the other two from 6 symbols, giving 12(6)(5).",
      "Subtract forbidden codes: 1680-360=1320."
    ],
    "feedback": {
      "0": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "1": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "3": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols.",
      "4": "Count ordered codes with distinct symbols, then subtract those containing both forbidden-together symbols."
    },
    "skills": [
      "ordered counting",
      "restrictions",
      "complement counting"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: ordered counting, restrictions, complement counting.",
      "Without the restriction there are 8!/(8-4)!=1680 codes."
    ],
    "verification": {
      "kind": "restricted-code",
      "n": 8,
      "r": 4
    },
    "level": "challenge",
    "id": "section:general-probability-b:28",
    "topicId": "b2-permutations",
    "family": "restricted-code",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A 4-digit identifier uses distinct digits chosen from 0 through 7. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
    "choices": [
      "$105$",
      "$540$",
      "$630$",
      "$648$",
      "$1680$"
    ],
    "answer": 1,
    "solution": [
      "Choose the last digit first: there are three possibilities, each nonzero.",
      "After fixing the last digit, the first digit has 6 nonzero choices.",
      "Fill the 2 labeled middle positions from the remaining 6 digits without replacement. The count is 3×6×30=540."
    ],
    "feedback": {
      "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
    },
    "skills": [
      "constrained positions",
      "multiplication principle",
      "permutations"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: constrained positions, multiplication principle, permutations.",
      "Choose the last digit first: there are three possibilities, each nonzero."
    ],
    "verification": {
      "kind": "digit-codes",
      "n": 8,
      "length": 4,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:29",
    "topicId": "b2-permutations",
    "family": "digit-code-restrictions",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 7 senior and 4 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.0333$",
      "$0.3000$",
      "$0.3818$",
      "$0.5000$",
      "$0.6000$"
    ],
    "answer": 1,
    "solution": [
      "After including the specified senior, choose three people from the remaining 10.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(6,1)choose(4,2).",
      "Divide by choose(10,3) to obtain 0.3."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "2": "This is the unconditional probability before learning that a specific senior is included.",
      "3": "This adds two more seniors, giving three seniors overall.",
      "4": "This considers only one additional member and omits the other two selections."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 10."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 7,
      "J": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:30",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 5 senior and 4 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.0714$",
      "$0.4286$",
      "$0.4762$",
      "$0.5000$",
      "$0.5714$"
    ],
    "answer": 1,
    "solution": [
      "After including the specified senior, choose three people from the remaining 8.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(4,1)choose(4,2).",
      "Divide by choose(8,3) to obtain 0.428571."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "2": "This is the unconditional probability before learning that a specific senior is included.",
      "3": "This considers only one additional member and omits the other two selections.",
      "4": "This gives the complement of the required composition."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 8."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 5,
      "J": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:31",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A review panel of four is selected from 8 actuaries and 10 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Every panel and every assignment of the two roles within it are equally likely. Calculate the probability that the panel has exactly two actuaries, with an actuary as chair and an underwriter as secretary. Round your answer to four decimal places.",
    "choices": [
      "$0.0686$",
      "$0.1373$",
      "$0.2573$",
      "$0.5686$",
      "$0.8627$"
    ],
    "answer": 1,
    "solution": [
      "Choose two members from each profession: choose(8,2)×choose(10,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 5040. The unrestricted count is choose(18,4)×4×3=36720; the requested result is 0.137255."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "2": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(8,2)×choose(10,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 8,
      "J": 10,
      "target": "probability",
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:6",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A review panel of four is selected from 9 actuaries and 10 underwriters. The chair and secretary are distinct panel members, and their roles are labeled. Exactly two panel members must be actuaries; the chair must be an actuary and the secretary an underwriter. Calculate the number of permitted panel-and-role assignments.",
    "choices": [
      "$3240$",
      "$5184$",
      "$6480$",
      "$7776$",
      "$12960$"
    ],
    "answer": 2,
    "solution": [
      "Choose two members from each profession: choose(9,2)×choose(10,2).",
      "For each permitted panel there are two choices for the actuary chair and two for the underwriter secretary.",
      "The permitted count is 6480. The unrestricted count is choose(19,4)×4×3=46512; the requested result is 6480."
    ],
    "feedback": {
      "0": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "1": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "3": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities.",
      "4": "Use the stated support, conditioning event, and payment or counting rule in the worked setup. Keep the requested quantity separate from intermediate moments and probabilities."
    },
    "skills": [
      "combinations",
      "labeled permutations",
      "combinatorial probability"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: combinations, labeled permutations, combinatorial probability.",
      "Choose two members from each profession: choose(9,2)×choose(10,2)."
    ],
    "verification": {
      "kind": "section-committee",
      "S": 9,
      "J": 10,
      "target": "count",
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:7",
    "topicId": "b1-counting-principles",
    "family": "cumulative-general-probability-b",
    "difficulty": 5,
    "relatedTopicIds": [
      "b1-counting-principles",
      "b2-permutations",
      "b3-combinations",
      "b4-combinatorial-probability"
    ],
    "cumulative": true
  },
  {
    "question": "A 5-digit identifier uses distinct digits chosen from 0 through 9. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
    "choices": [
      "$378$",
      "$8064$",
      "$9072$",
      "$12288$",
      "$30240$"
    ],
    "answer": 1,
    "solution": [
      "Choose the last digit first: there are three possibilities, each nonzero.",
      "After fixing the last digit, the first digit has 8 nonzero choices.",
      "Fill the 3 labeled middle positions from the remaining 8 digits without replacement. The count is 3×8×336=8064."
    ],
    "feedback": {
      "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
    },
    "skills": [
      "constrained positions",
      "multiplication principle",
      "permutations"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: constrained positions, multiplication principle, permutations.",
      "Choose the last digit first: there are three possibilities, each nonzero."
    ],
    "verification": {
      "kind": "digit-codes",
      "n": 10,
      "length": 5,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:32",
    "topicId": "b2-permutations",
    "family": "digit-code-restrictions",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A 5-digit identifier uses distinct digits chosen from 0 through 8. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
    "choices": [
      "$210$",
      "$4410$",
      "$5040$",
      "$7203$",
      "$15120$"
    ],
    "answer": 1,
    "solution": [
      "Choose the last digit first: there are three possibilities, each nonzero.",
      "After fixing the last digit, the first digit has 7 nonzero choices.",
      "Fill the 3 labeled middle positions from the remaining 7 digits without replacement. The count is 3×7×210=4410."
    ],
    "feedback": {
      "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
    },
    "skills": [
      "constrained positions",
      "multiplication principle",
      "permutations"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: constrained positions, multiplication principle, permutations.",
      "Choose the last digit first: there are three possibilities, each nonzero."
    ],
    "verification": {
      "kind": "digit-codes",
      "n": 9,
      "length": 5,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:33",
    "topicId": "b2-permutations",
    "family": "digit-code-restrictions",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 4 senior and 4 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.1143$",
      "$0.3429$",
      "$0.4286$",
      "$0.4857$",
      "$0.5143$"
    ],
    "answer": 4,
    "solution": [
      "After including the specified senior, choose three people from the remaining 7.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(3,1)choose(4,2).",
      "Divide by choose(7,3) to obtain 0.514286."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "1": "This adds two more seniors, giving three seniors overall.",
      "2": "This considers only one additional member and omits the other two selections.",
      "3": "This gives the complement of the required composition."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 7."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 4,
      "J": 4,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:34",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A committee of four is selected uniformly from 7 senior and 7 junior employees. A particular senior employee is known to be on the committee. Calculate the probability that the committee contains exactly two senior employees. Round your answer to four decimal places.",
    "choices": [
      "$0.1224$",
      "$0.3671$",
      "$0.4406$",
      "$0.4615$",
      "$0.5594$"
    ],
    "answer": 2,
    "solution": [
      "After including the specified senior, choose three people from the remaining 13.",
      "Exactly two seniors overall means one additional senior and two juniors: choose(6,1)choose(7,2).",
      "Divide by choose(13,3) to obtain 0.440559."
    ],
    "feedback": {
      "0": "This gives exactly one senior overall.",
      "1": "This adds two more seniors, giving three seniors overall.",
      "3": "This considers only one additional member and omits the other two selections.",
      "4": "This gives the complement of the required composition."
    },
    "skills": [
      "conditional sample space",
      "combinations",
      "fixed membership"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: conditional sample space, combinations, fixed membership.",
      "After including the specified senior, choose three people from the remaining 13."
    ],
    "verification": {
      "kind": "committee-condition",
      "S": 7,
      "J": 7,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:35",
    "topicId": "b4-combinatorial-probability",
    "family": "committee-conditioned-membership",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A 5-digit identifier uses distinct digits chosen from 0 through 7. Its first digit cannot be 0, and its last digit must be 1, 3, or 5. Calculate the number of permitted identifiers.",
    "choices": [
      "$105$",
      "$2160$",
      "$2520$",
      "$3888$",
      "$6720$"
    ],
    "answer": 1,
    "solution": [
      "Choose the last digit first: there are three possibilities, each nonzero.",
      "After fixing the last digit, the first digit has 6 nonzero choices.",
      "Fill the 3 labeled middle positions from the remaining 6 digits without replacement. The count is 3×6×120=2160."
    ],
    "feedback": {
      "0": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "2": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "3": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection.",
      "4": "Reserve the constrained last digit, exclude zero and that digit at the first position, and distinguish ordered middle positions from an unordered selection."
    },
    "skills": [
      "constrained positions",
      "multiplication principle",
      "permutations"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: constrained positions, multiplication principle, permutations.",
      "Choose the last digit first: there are three possibilities, each nonzero."
    ],
    "verification": {
      "kind": "digit-codes",
      "n": 8,
      "length": 5,
      "probability": false,
      "precision": 0
    },
    "level": "challenge",
    "id": "section:general-probability-b:36",
    "topicId": "b2-permutations",
    "family": "digit-code-restrictions",
    "difficulty": 5,
    "relatedTopicIds": [
      "b2-permutations"
    ],
    "cumulative": false
  },
  {
    "question": "A lot contains 14 parts, of which 7 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.3038$",
      "$0.3182$",
      "$0.4038$",
      "$0.4773$",
      "$0.5833$"
    ],
    "answer": 1,
    "solution": [
      "The remaining lot has 12 parts: 7 defective and 5 sound.",
      "Choose one defective and two sound parts in choose(7,1)choose(5,2) ways.",
      "Divide by choose(12,3) to obtain 0.318182."
    ],
    "feedback": {
      "0": "This treats the follow-up sample as sampling with replacement.",
      "2": "This samples from the original lot and ignores the observed removals.",
      "3": "This gives exactly two defective parts.",
      "4": "This is the probability for only one new part."
    },
    "skills": [
      "update a finite population",
      "hypergeometric sample"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: update a finite population, hypergeometric sample.",
      "The remaining lot has 12 parts: 7 defective and 5 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 14,
      "K": 7,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:37",
    "topicId": "b4-combinatorial-probability",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A lot contains 18 parts, of which 6 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.2679$",
      "$0.3750$",
      "$0.4395$",
      "$0.4821$",
      "$0.4853$"
    ],
    "answer": 3,
    "solution": [
      "The remaining lot has 16 parts: 6 defective and 10 sound.",
      "Choose one defective and two sound parts in choose(6,1)choose(10,2) ways.",
      "Divide by choose(16,3) to obtain 0.482143."
    ],
    "feedback": {
      "0": "This gives exactly two defective parts.",
      "1": "This is the probability for only one new part.",
      "2": "This treats the follow-up sample as sampling with replacement.",
      "4": "This samples from the original lot and ignores the observed removals."
    },
    "skills": [
      "update a finite population",
      "hypergeometric sample"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: update a finite population, hypergeometric sample.",
      "The remaining lot has 16 parts: 6 defective and 10 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 18,
      "K": 6,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:38",
    "topicId": "b4-combinatorial-probability",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  },
  {
    "question": "A lot contains 17 parts, of which 7 are defective. Two parts sampled without replacement are both found to be sound and are set aside. Three more parts are sampled without replacement from the remainder. Calculate the probability that exactly one of these three is defective. Round your answer to four decimal places.",
    "choices": [
      "$0.3692$",
      "$0.3982$",
      "$0.4308$",
      "$0.4632$",
      "$0.4667$"
    ],
    "answer": 2,
    "solution": [
      "The remaining lot has 15 parts: 7 defective and 8 sound.",
      "Choose one defective and two sound parts in choose(7,1)choose(8,2) ways.",
      "Divide by choose(15,3) to obtain 0.430769."
    ],
    "feedback": {
      "0": "This gives exactly two defective parts.",
      "1": "This treats the follow-up sample as sampling with replacement.",
      "3": "This samples from the original lot and ignores the observed removals.",
      "4": "This is the probability for only one new part."
    },
    "skills": [
      "update a finite population",
      "hypergeometric sample"
    ],
    "designBasis": "Original exercises using May 2026 syllabus outcomes and official sample-question reasoning styles",
    "hints": [
      "Break the solution into: update a finite population, hypergeometric sample.",
      "The remaining lot has 15 parts: 7 defective and 8 sound."
    ],
    "verification": {
      "kind": "hyper-followup",
      "N": 17,
      "K": 7,
      "removed": 2,
      "sample": 3,
      "probability": true
    },
    "level": "challenge",
    "id": "section:general-probability-b:39",
    "topicId": "b4-combinatorial-probability",
    "family": "hypergeometric-followup",
    "difficulty": 4,
    "relatedTopicIds": [
      "b4-combinatorial-probability"
    ],
    "cumulative": false
  }
];

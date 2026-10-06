# Exam P study guide

A Preact + Vite study website aligned to the **May 2026 SOA Exam P syllabus**.

- 58 syllabus lessons and one clearly labeled optional lognormal lesson.
- All 22 learning outcomes mapped to instruction and chapter practice.
- 506 original five-choice chapter questions: 211 foundation exercises plus five multistep challenges at the end of each of the 59 chapters.
- A separate bank of 116 original timed-exam questions, with distinct stems and numerical parameters from chapter practice. Challenges and exam questions span 139 exercise families.
- A parameterized foundation exercise family for each chapter; mixed review retains the full difficulty of challenge questions.
- Concrete lesson openings, method cues, misconception reminders, reasoning checks, and worked/guided/independent practice in every chapter.
- Interactive Bayes counts, linked PDF/CDF graphs, deductible/coinsurance/cap/inflation payment graphs, and a reproducible CLT simulation.
- Progressive hints and solution steps, choice-specific feedback where the error is known, and targeted calculation checks for other distractors.
- Eight-question mixed review across the three syllabus areas, 12 method-selection drills, and a mistake notebook preserving exact questions and chosen answers.
- Separate first-attempt accuracy, assistance, confidence, elapsed-time, and spaced-review records. Repeated success advances review intervals only after a scheduled review is due.
- A three-hour, 30-question randomized practice exam: 8 general probability, 14 univariate, and 8 multivariate questions. Every syllabus section appears at least once.
- Saved chapter answers, assistance evidence, lesson completion, learning records, review sessions, and exam sessions in browser local storage when available. Blocked storage falls back to memory for learning records during the current session.
- Searchable chapters, a syllabus checklist, distribution formulas, prerequisite reminders, official SOA resources, and responsive keyboard-accessible navigation.

Practice questions are original educational exercises, not released SOA questions. The practice exam has not been statistically calibrated and does not predict an official passing result. Its timer continues while the page is closed or the student visits another lesson. All practice-exam questions are scored; the simulator does not insert pilot questions.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Build the static website with `npm run build`; preview that build with `npm run preview`. Routes use URL hashes, so static hosting needs no special route rewrites.

## Validate

```sh
npm test
npm run build
```

`npm test` validates teaching coverage for all 59 chapters, generated choice uniqueness and LaTeX across multiple seeds, independently recomputes representative variant families, numerically integrates lab payment moments, checks the CLT simulation, and tests review scheduling and learning records. It also verifies the exam blueprint, scoring, deadline calculations, stored-session structure, and topic navigation; independently recomputes 75 earlier added answers and all 411 challenge/exam answers using outcome enumeration, numerical integration, conditional distributions, and moment identities; checks all 22 syllabus mappings and lesson formulas; and validates all 622 fixed questions, choices, solutions, and LaTeX syntax. It requires five challenges from distinct exercise families in every chapter and checks that timed-exam stems do not appear in chapter practice. Numerical recomputation covers the added question sets, rather than claiming mathematical verification of every pre-existing exercise.

Browser verification also covered all 59 lesson routes at a 320-pixel dark-mode viewport, progressive hints, confidence, first-attempt retention, assistance after reloads, mixed review completion/restoration, mistake notebook history, answer/solution interactions, saved practice answers, syllabus and formula pages, mobile navigation, exam restoration, submission, filtering, and automatic expiry. The challenge update was also checked on every chapter route, with answer restoration, progressive steps, missed-challenge retention in mixed review, and separate-bank exam selection. See [the syllabus audit](SYLLABUS_AUDIT.md).

## Edit the content

- `scripts/topics.js`: chapter order, navigation, and optional-enrichment flags.
- `scripts/syllabus.js`: learning-outcome mappings and official resources.
- `scripts/content/lessons.json`: new lessons rendered by `pages/StudyLesson.jsx`.
- `pages/*.jsx`: original lesson pages and study tools.
- `problems/<topic-id>.js`: each chapter's question bank. Use five distinct choices, a zero-based `answer`, and a nonempty array of solution steps. Escape LaTeX backslashes in JavaScript strings.
- `tools/write-advanced.py` and `tools/soa_families.py`: authoring sources for challenge families and topic mappings. After editing, run `python3 tools/write-advanced.py` to regenerate `scripts/content/challenges.js` and `scripts/content/exam-bank.js`, then `npm run check:advanced`. The three additional challenges are appended after generating the original banks, preserving earlier IDs and content. Keep chapter and timed-exam instances distinct.
- `tools/verify-advanced.js` and `tools/verify-soa-families.js`: independent numerical audit; update its oracle when adding a new mathematical family. Count questions use integer choices; numerical comparisons respect each question's stated precision.
- `scripts/problems.js`: loads foundations and challenges together; loads the separate timed bank without authoring/audit metadata. Foundation IDs remain stable for existing learning records.
- `scripts/content/teaching.js`: chapter-specific concrete scenarios, intuition, method cues, traps, and reasoning checks.
- `scripts/content/distractors.js`: known explanations for common wrong answers; avoid inventing a student's reasoning from an unexplained choice.
- `scripts/variants.js`: deterministic numerical exercise families. Generated variants support learning within a chapter and do not reproduce every original question's difficulty or precise skill.
- `scripts/lab-math.js` and `scripts/components/LearningLabs.jsx`: pure calculations and interactive graphs.
- `scripts/learning.js`, `scripts/support.js`, and `pages/Review.jsx`: evidence, assistance tracking, review scheduling, and mistake history.
- `scripts/exam.js`: selection blueprint and pure exam logic.
- `pages/MockExam.jsx`: timer, persistence, navigation, and review.

Add a topic to its syllabus outcome and give it a practice file. `npm test` detects missing lessons, unmapped core topics, and missing chapter practice.

## Official sources

The [May 2026 syllabus](https://www.soa.org/globalassets/assets/files/edu/2026/spring/syllabi/2026-05-exam-p-syllabus.pdf) is the curriculum baseline. The site also links to the normal table, Risk and Insurance reading, May sample questions and solutions, online sample exam, exam rules, and updates. These are external resources; review SOA updates for a different exam sitting.

# Exam P study guide

A Preact + Vite study website aligned to the **May 2026 SOA Exam P syllabus**.

- 58 syllabus lessons and one clearly labeled optional lognormal lesson.
- All 22 learning outcomes mapped to instruction and chapter practice.
- 506 original five-choice chapter questions: 211 foundation exercises plus five multistep challenges for each of the 59 chapters.
- A dedicated Questions page immediately after each chapter in the sidebar and Next/Previous sequence. Each page presents its five existing multistep exam-style challenges (295 across the guide), with A–E choices, saved answers, progress, and solutions available after checking. Foundation exercises remain with the lesson. Direct links use `#/<topic-id>/questions`.
- 20 section-wide Mixed Questions pages (All A, All B, and so on in each syllabus area), each with 40 new questions split into four sets of ten: 800 added questions, including 160 cumulative scenarios and 640 fresh instances of existing reasoning families. Every core chapter is represented. Each set mixes methods, saves checked answers and the current set, and links to real released SOA sample questions and solutions. Section routes use `#/sections/<category-id>-<letter>/questions`. The guide now contains 1,422 fixed questions across chapter, section, and timed banks.
- Difficulty estimates beside question headings use a 1–10 scale: direct formulas at the lower end, routine multistep problems in the middle, and combined conditional/payment/moment calculations higher up. Ratings are editorial study estimates, not official SOA ratings or a statistically calibrated scale. Every fixed question and generated foundation family is rated; existing saved sessions retain their answers.
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

`npm test` validates teaching coverage for all 59 chapters, generated choice uniqueness and LaTeX across multiple seeds, independently recomputes representative variant families, numerically integrates lab payment moments, checks the CLT simulation, and tests review scheduling and learning records. It also verifies the exam blueprint, scoring, deadline calculations, stored-session structure, and topic navigation; independently recomputes 75 earlier added answers and all 1,211 challenge/exam/section answers using outcome enumeration, numerical integration, conditional distributions, and moment identities; checks all 22 syllabus mappings and lesson formulas; and validates all 1,422 fixed questions, choices, solutions, and LaTeX syntax. It requires five challenges from distinct exercise families in every chapter and checks that chapter, section, and timed-exam stems are disjoint. Section coverage checks require 40 questions, eight cumulative scenarios, valid difficulty estimates, and every core chapter in each lettered section. Numerical recomputation covers the added question sets, rather than claiming mathematical verification of every pre-existing exercise.

Browser verification also covered all 59 lesson routes at a 320-pixel dark-mode viewport, progressive hints, confidence, first-attempt retention, assistance after reloads, mixed review completion/restoration, mistake notebook history, answer/solution interactions, saved practice answers, syllabus and formula pages, mobile navigation, exam restoration, submission, filtering, and automatic expiry. The challenge update was also checked on every chapter route, with answer restoration, progressive steps, missed-challenge retention in mixed review, and separate-bank exam selection. See [the syllabus audit](SYLLABUS_AUDIT.md).

The dedicated Questions pages were checked across all 59 routes at 320 pixels: matching question sets, five choices per question, solutions hidden before submission, active sidebar links, and no horizontal overflow. Interaction checks covered scoring, solutions, reload restoration, the lesson/questions/next-lesson sequence, mobile navigation, dark mode, and unknown routes. Route regression tests run with `npm test`.

All 20 section-wide pages and 80 ten-question sets were checked at 320 pixels for question counts, A–E choices, difficulty badges, hidden solutions, active sidebar links, and horizontal overflow. Interaction checks covered scoring, full solutions, restoration across sets and reloads, chapter/section boundaries, the mobile drawer, desktop light/dark themes, malformed and blocked storage, unknown routes, and starting a timed exam. Deterministic regeneration reproduces every section bank byte for byte.

## Edit the content

- `scripts/topics.js`: chapter order, navigation, and optional-enrichment flags.
- `scripts/study-routes.js` and `pages/ChapterQuestions.jsx`: lesson → questions → next lesson routing and subsection exam-style practice. Question and learning IDs stay unchanged, so previously saved answers are retained.
- `scripts/sections.js` and `pages/SectionQuestions.jsx`: category-qualified section routes, 40-question mixed practice pages, set navigation, and separate saved section progress.
- `tools/write-section-questions.py` and `tools/section_families.py`: deterministic original section-bank generation. Run `python3 tools/write-section-questions.py`, then `npm test`. Twenty additional cumulative scenario families are independently audited in `tools/verify-section-families.js`; the chapter and timed banks remain untouched.
- `scripts/difficulty.js`: authored scores for each challenge family and each foundation question in its stable file order, plus separate generated-family scores. Explicit integer `difficulty` values from 1 through 10 override these estimates. Add a rating when adding a question or family; coverage is checked by `tools/difficulty.test.js`.
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

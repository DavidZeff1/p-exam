# Exam P study guide

A Preact + Vite study website aligned to the **May 2026 SOA Exam P syllabus**.

- 58 syllabus lessons and one clearly labeled optional lognormal lesson.
- All 22 learning outcomes mapped to instruction and chapter practice.
- 211 original five-choice questions with worked solutions, including 75 added to previously uncovered chapters.
- A three-hour, 30-question randomized practice exam: 8 general probability, 14 univariate, and 8 multivariate questions. Every syllabus section appears at least once.
- Saved chapter answers, lesson completion, exam answers, flags, current question, and exam deadline in browser local storage when available.
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

`npm test` verifies the exam blueprint, scoring, deadline calculations, stored-session structure, and topic navigation; independently recomputes all 75 new answer values; checks all 22 syllabus mappings and lesson formulas; and validates all 211 questions, choices, solutions, and LaTeX syntax. Numerical recomputation covers the new question sets, rather than claiming mathematical verification of every pre-existing exercise.

Browser verification also covered all 59 lesson routes at a mobile viewport, answer/solution interactions, saved practice answers, syllabus and formula pages, mobile navigation, exam restoration, submission, filtering, and automatic expiry. See [the syllabus audit](SYLLABUS_AUDIT.md).

## Edit the content

- `scripts/topics.js`: chapter order, navigation, and optional-enrichment flags.
- `scripts/syllabus.js`: learning-outcome mappings and official resources.
- `scripts/content/lessons.json`: new lessons rendered by `pages/StudyLesson.jsx`.
- `pages/*.jsx`: original lesson pages and study tools.
- `problems/<topic-id>.js`: each chapter's question bank. Use five distinct choices, a zero-based `answer`, and a nonempty array of solution steps. Escape LaTeX backslashes in JavaScript strings.
- `scripts/exam.js`: selection blueprint and pure exam logic.
- `pages/MockExam.jsx`: timer, persistence, navigation, and review.

Add a topic to its syllabus outcome and give it a practice file. `npm test` detects missing lessons, unmapped core topics, and missing chapter practice.

## Official sources

The [May 2026 syllabus](https://www.soa.org/globalassets/assets/files/edu/2026/spring/syllabi/2026-05-exam-p-syllabus.pdf) is the curriculum baseline. The site also links to the normal table, Risk and Insurance reading, May sample questions and solutions, online sample exam, exam rules, and updates. These are external resources; review SOA updates for a different exam sitting.

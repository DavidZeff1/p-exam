import { useEffect, useRef, useState } from "preact/hooks";
import { RichText } from "./RichText.jsx";

// Problem sets live in problems/<topic-id>.js; topics without a file show nothing.
const problemModules = import.meta.glob("../../problems/*.js");
const CHOICE_LETTERS = ["A", "B", "C", "D", "E"];

function loadProblems(topicId) {
  const load = problemModules[`../../problems/${topicId}.js`];
  return load ? load().then((mod) => mod.default) : Promise.resolve([]);
}

function Problem({ problem, number }) {
  const [selected, setSelected] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const feedbackRef = useRef(null);
  const firstChoiceRef = useRef(null);
  const refocusChoices = useRef(false);
  const answered = selected !== null;
  const correct = selected === problem.answer;

  // Answering disables the choice buttons and "Try again" removes itself, so move
  // keyboard focus somewhere meaningful instead of letting it fall back to <body>.
  useEffect(() => {
    if (answered) {
      feedbackRef.current?.focus({ preventScroll: true });
    } else if (refocusChoices.current) {
      refocusChoices.current = false;
      firstChoiceRef.current?.focus();
    }
  }, [answered]);

  const choiceClass = (index) => {
    if (answered && index === problem.answer) return "choice correct";
    if (answered && index === selected) return "choice incorrect";
    return "choice";
  };

  return (
    <article class="problem">
      <h3 class="problem-heading">Problem {number}</h3>
      <p class="problem-question">
        <RichText text={problem.question} />
      </p>
      <ol class="choice-list">
        {problem.choices.map((choice, index) => (
          <li key={index}>
            <button
              ref={index === 0 ? firstChoiceRef : undefined}
              type="button"
              class={choiceClass(index)}
              disabled={answered}
              onClick={() => setSelected(index)}
            >
              <span class="choice-letter">{CHOICE_LETTERS[index]}</span>
              <span class="choice-text">
                <RichText text={choice} />
              </span>
            </button>
          </li>
        ))}
      </ol>
      {answered && (
        <p
          ref={feedbackRef}
          tabIndex={-1}
          class={`problem-feedback ${correct ? "correct" : "incorrect"}`}
        >
          {correct
            ? "Correct!"
            : `Not quite. The correct answer is ${CHOICE_LETTERS[problem.answer]}.`}
        </p>
      )}
      <div class="problem-actions">
        <button
          type="button"
          class="problem-action"
          aria-expanded={showSolution}
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? "Hide solution" : "Show solution"}
        </button>
        {answered && (
          <button
            type="button"
            class="problem-action"
            onClick={() => {
              refocusChoices.current = true;
              setSelected(null);
              setShowSolution(false);
            }}
          >
            Try again
          </button>
        )}
      </div>
      {showSolution && (
        <div class="problem-solution">
          {problem.solution.map((step, i) => (
            <p key={i}>
              <RichText text={step} />
            </p>
          ))}
        </div>
      )}
    </article>
  );
}

export function PracticeProblems({ topicId }) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    let cancelled = false;
    loadProblems(topicId).then((loaded) => {
      if (!cancelled) setProblems(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [topicId]);

  if (problems.length === 0) return null;

  return (
    <div class="practice-problems">
      <h2>Practice Problems</h2>
      <p class="practice-intro">
        Exam-style multiple choice. Pick an answer to check yourself, or reveal the worked
        solution.
      </p>
      {problems.map((problem, i) => (
        <Problem key={i} problem={problem} number={i + 1} />
      ))}
    </div>
  );
}

// Validates practice problem files in problems/: structure, LaTeX syntax,
// unmatched dollar signs, and JS escapes that silently eat LaTeX backslashes.
// Usage: npm run check:problems [-- problems/a1-set-functions.js ...]
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import katex from "katex";
import { tokenizeMath } from "../scripts/math-text.js";
import { topicById } from "../scripts/topics.js";

const problemsDir = resolve(import.meta.dirname, "../problems");
const args = process.argv.slice(2);
const files = args.length
  ? args.map((file) => resolve(file))
  : existsSync(problemsDir)
    ? readdirSync(problemsDir)
        .filter((name) => name.endsWith(".js"))
        .map((name) => resolve(problemsDir, name))
    : [];

let errorCount = 0;
let problemCount = 0;

for (const file of files) {
  const id = basename(file, ".js");
  const report = (message) => {
    errorCount++;
    console.error(`${id}: ${message}`);
  };

  if (!topicById[id]) report("file name does not match any topic id in scripts/topics.js");
  else if (!topicById[id].page) report("topic has no page, so its problems would never be shown");

  // In a double-quoted JS string "\frac" becomes a form feed + "rac" and "\sum" becomes "sum".
  // Every LaTeX backslash must be doubled, so an odd run of backslashes is always a mistake.
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(/\\+/g)) {
    const next = source[match.index + match[0].length];
    if (match[0].length % 2 === 1 && next !== '"' && next !== "'") {
      const line = source.slice(0, match.index).split("\n").length;
      report(`line ${line}: single backslash before "${next}" (write LaTeX commands as \\\\frac)`);
    }
  }

  let problems;
  try {
    problems = (await import(pathToFileURL(file).href)).default;
  } catch (error) {
    report(`failed to import: ${error.message}`);
    continue;
  }
  if (!Array.isArray(problems) || problems.length === 0) {
    report("default export must be a non-empty array");
    continue;
  }

  problems.forEach((problem, i) => {
    problemCount++;
    const where = `problem ${i + 1}`;

    const checkText = (text, field) => {
      if (typeof text !== "string" || !text.trim()) {
        report(`${where} ${field}: must be a non-empty string`);
        return;
      }
      if (/[\u0000-\u001f]/.test(text)) {
        report(`${where} ${field}: contains a control character or newline`);
      }
      for (const segment of tokenizeMath(text)) {
        if (segment.type === "text" && segment.value.includes("$")) {
          report(`${where} ${field}: unmatched $ (use \\\\$ for a literal dollar sign)`);
        }
        if (segment.type === "inline" || segment.type === "display") {
          // Prose inside math usually means a money amount was written $500 instead of \$500.
          const bareWords = segment.value
            .replace(/\\(text|textbf|textit|mathrm|operatorname)\{[^}]*\}/g, "")
            .replace(/\\[a-zA-Z]+/g, "")
            .match(/[a-zA-Z]{4,}/g);
          if (bareWords) {
            report(`${where} ${field}: words inside math "${bareWords.join(", ")}" (use \\\\text{...}, or \\\\$ for money)`);
          }
          try {
            katex.renderToString(segment.value, {
              throwOnError: true,
              strict: "error",
              displayMode: segment.type === "display",
            });
          } catch (error) {
            report(`${where} ${field}: ${error.message}`);
          }
        }
      }
    };

    checkText(problem.question, "question");

    if (!Array.isArray(problem.choices) || problem.choices.length !== 5) {
      report(`${where}: needs exactly 5 choices`);
    } else {
      problem.choices.forEach((choice, j) => checkText(choice, `choice ${"ABCDE"[j]}`));
      if (new Set(problem.choices).size !== 5) report(`${where}: choices must be distinct`);
    }

    if (!Number.isInteger(problem.answer) || problem.answer < 0 || problem.answer > 4) {
      report(`${where}: answer must be a choice index from 0 to 4`);
    }

    if (!Array.isArray(problem.solution) || problem.solution.length === 0) {
      report(`${where}: solution must be a non-empty array of strings`);
    } else {
      problem.solution.forEach((step, j) => checkText(step, `solution step ${j + 1}`));
    }
  });
}

console.log(`${files.length} files, ${problemCount} problems, ${errorCount} errors`);
process.exit(errorCount ? 1 : 0);

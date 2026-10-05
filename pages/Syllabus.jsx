import { navStructure, getTopic } from '../scripts/topics.js';
import { outcomes, resources, syllabusUrl } from '../scripts/syllabus.js';

export function Syllabus({ completed }) {
  return <>
    <h1 class="page-title">Your syllabus checklist</h1>
    <p class="page-subtitle">May 2026 Exam P · All 22 learning outcomes</p>
    <p class="intro">Every outcome below links to lessons and practice. Checkmarks show lessons you marked complete, rather than a prediction of exam readiness. <a href={syllabusUrl} target="_blank" rel="noreferrer">Read the official syllabus</a>.</p>
    {navStructure.map(category => <section class="syllabus-category" key={category.id}>
      <h2>{category.title} <span class="weight-label">{category.weight}</span></h2>
      {outcomes.filter(outcome => outcome.category === category.id).map(outcome => <details class="outcome" key={outcome.code}>
        <summary><span class="outcome-code">{outcome.code}</span><span>{outcome.label}</span><span class="outcome-progress">{outcome.topics.filter(id => completed.includes(id)).length}/{outcome.topics.length} studied</span></summary>
        <ul>{outcome.topics.map(id => <li key={id}><a href={`#/${id}`}>{getTopic(id).label}</a>{completed.includes(id) && <span class="topic-badge done">Complete</span>}</li>)}</ul>
      </details>)}
    </section>)}
    <section class="definition-block"><h2>Prerequisites and scope</h2>
      <p>Calculus, including series, differentiation, and integration, is assumed. Review <a href="#/reference">the prerequisite refresher</a> and the SOA’s Risk and Insurance reading.</p>
      <p>The named distributions are discrete uniform, binomial, geometric, negative binomial, hypergeometric, Poisson, continuous uniform, exponential, gamma, beta, and normal. Lognormal and moment generating functions are optional enrichment. General continuous joint and conditional distributions are outside the listed discrete multivariate outcomes; continuous order statistics and independent normal combinations remain in scope.</p>
    </section>
    <section class="definition-block"><h2>Exam format</h2>
      <p>The exam has 30 questions in three hours, with five choices and one correct answer per question. Some answers are rounded. Unanswered questions are incorrect, so answer every question. A few unscored pilot questions are mixed into the exam; you are not told which they are.</p>
      <p>The normal table is provided through the CBT Exhibit button. Personal copies are not permitted in the exam room. Topic weights are approximate ranges; an individual exam may vary, and questions may combine outcomes.</p>
      <p>CBT forms draw from a question pool and use statistical scaling to make content and passing criteria comparable. The May syllabus states that unofficial pass/fail results are emailed within an hour. Check the official updates and rules for your sitting.</p>
    </section>
    <section class="definition-block"><h2>Official study resources</h2><ul class="resource-list">{resources.map(([label,url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a></li>)}</ul></section>
    <section class="definition-block"><h2>Suggested textbooks</h2>
      <p>No textbook is required. These six references are suggested in the May syllabus; use its chapter inclusions and exclusions when selecting readings.</p>
      <ul class="concept-list">
        <li>Ross, <em>A First Course in Probability</em>, 10th edition (2019).</li>
        <li>Wackerly, Mendenhall, and Scheaffer, <em>Mathematical Statistics with Applications</em>, 7th edition (2008).</li>
        <li>Hassett, Stewart, and Milovanovic, <em>Probability for Risk Management</em>, 3rd edition (2021).</li>
        <li>Asimow and Maxwell, <em>Probability and Statistics with Applications: A Problem-Solving Text</em>, 2nd edition (2015).</li>
        <li>Hogg, Tanis, and Zimmerman, <em>Probability and Statistical Inference</em>, 10th edition (2020).</li>
        <li>Leemis, <em>Probability</em>, 2nd edition (2018).</li>
      </ul>
    </section>
  </>;
}

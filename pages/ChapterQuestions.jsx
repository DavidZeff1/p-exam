import { PracticeProblems } from '../scripts/components/PracticeProblems.jsx';

export function ChapterQuestions({ topic }) {
  return <>
    <h1 class="page-title">Questions · {topic.label}</h1>
    <p class="page-subtitle">{topic.sectionTitle}</p>
    <p>Choose one answer, A–E. Check your answer to unlock the worked solution. Aim for about six minutes per question.</p>
    {topic.enrichment
      ? <p class="understanding-note">Optional enrichment: lognormal is not a named distribution in the current Exam P syllabus.</p>
      : <p class="understanding-note">Original SOA-style practice. Compare with <a href="https://www.soa.org/globalassets/assets/files/edu/2026/spring/questions-solutions/2026-05-exam-p-sample-questions.pdf" target="_blank" rel="noopener noreferrer">official SOA samples</a> and <a href="https://www.soa.org/globalassets/assets/files/edu/2026/spring/questions-solutions/2026-05-exam-p-sample-solutions.pdf" target="_blank" rel="noopener noreferrer">solutions</a>.</p>}
    <PracticeProblems topicId={topic.id} mode="exam" />
  </>;
}

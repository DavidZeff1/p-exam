import lessons from '../scripts/content/lessons.json';
import { RichText } from '../scripts/components/RichText.jsx';

export function StudyLesson({ topic }) {
  const lesson = lessons[topic.id];
  return <>
    <h1 class="page-title">{topic.label}</h1>
    <p class="page-subtitle">{topic.sectionTitle}</p>
    <section class="intro"><p>{lesson.intro}</p></section>
    <section class="lesson-objectives" aria-label="Learning goals">
      <h2>By the end of this lesson</h2>
      <ul>{lesson.objectives.map(goal => <li key={goal}>{goal}</li>)}</ul>
    </section>
    {lesson.sections.map(section => <section class="definition-block" key={section.title}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((text, index) => <p class="lesson-paragraph" key={index}><RichText text={text} /></p>)}
    </section>)}
    <aside class="exam-tip"><h2>Exam checkpoint</h2><p><RichText text={lesson.tip} /></p></aside>
  </>;
}

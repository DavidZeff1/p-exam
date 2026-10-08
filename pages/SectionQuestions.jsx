import { useEffect, useRef, useState } from 'preact/hooks';
import { Problem } from '../scripts/components/PracticeProblems.jsx';
import { loadSectionProblems } from '../scripts/problems.js';
import { getSectionPager } from '../scripts/sections.js';

function readProgress(id) {
  try {
    const stored = JSON.parse(localStorage.getItem(`exam-p-section-${id}`));
    const answers = stored?.answers;
    return {
      answers: answers && typeof answers === 'object' && !Array.isArray(answers) ? answers : {},
      set: Number.isInteger(stored?.set) && stored.set >= 0 && stored.set < 4 ? stored.set : 0,
    };
  } catch { return { answers: {}, set: 0 }; }
}

export function SectionQuestions({ section }) {
  const [problems, setProblems] = useState([]), [error, setError] = useState(false);
  const [progress, setProgress] = useState(() => readProgress(section.id));
  const setHeading = useRef(null);
  useEffect(() => {
    let cancelled = false;
    loadSectionProblems(section.id).then(
      loaded => { if (!cancelled) setProblems(loaded); },
      () => { if (!cancelled) setError(true); }
    );
    return () => { cancelled = true; };
  }, [section.id]);
  function save(update) {
    setProgress(previous => {
      const next = update(previous);
      try { localStorage.setItem(`exam-p-section-${section.id}`, JSON.stringify(next)); } catch { /* Practice remains usable without storage. */ }
      return next;
    });
  }
  function changeSet(set) {
    save(previous => ({ ...previous, set }));
    setHeading.current?.focus({ preventScroll: true });
    setHeading.current?.scrollIntoView({ block: 'start' });
  }
  const answerFor = q => Number.isInteger(progress.answers[q.id]) && progress.answers[q.id] >= 0 && progress.answers[q.id] < 5 ? progress.answers[q.id] : null;
  const answered = problems.filter(q => answerFor(q) !== null).length;
  const correct = problems.filter(q => answerFor(q) === q.answer).length;
  const start = progress.set * 10, visible = problems.slice(start, start + 10);
  const { prev, next } = getSectionPager(section);
  return <>
    <h1 class="page-title">Mixed questions · All {section.letter}</h1>
    <p class="page-subtitle">{section.categoryTitle} · {section.title}</p>
    <p>40 original questions covering this entire section, including cumulative scenarios that combine skills. Four mixed sets let you practice choosing a method across chapters. Choose one answer, A–E; check it to unlock the worked solution.</p>
    <p class="understanding-note">SOA-style practice with estimated difficulty scores, modeled on the format and reasoning of published samples. For real released questions, use the <a href="https://www.soa.org/globalassets/assets/files/edu/2026/spring/questions-solutions/2026-05-exam-p-sample-questions.pdf" target="_blank" rel="noopener noreferrer">official SOA questions</a> and <a href="https://www.soa.org/globalassets/assets/files/edu/2026/spring/questions-solutions/2026-05-exam-p-sample-solutions.pdf" target="_blank" rel="noopener noreferrer">solutions</a>.</p>
    <details class="section-coverage"><summary>Chapters covered in this section</summary><ul>{section.coreItems.map(item => <li key={item.id}><a href={`#/${item.id}`}>{item.label}</a></li>)}</ul>{section.items.some(item => item.enrichment) && <p>Optional lognormal enrichment has its own chapter questions.</p>}</details>
    <section class="practice-problems" aria-label="Mixed section practice">
      <p class="practice-intro" role="status">{answered} of {problems.length || 40} answered · {correct} correct across this section. Checked answers and your current set are saved in this browser.</p>
      {error ? <p role="alert">Questions could not be loaded. <button type="button" class="problem-action" onClick={() => window.location.reload()}>Reload</button></p> : !problems.length ? <p role="status">Loading questions…</p> : <>
        <nav class="section-sets" aria-label="Question sets">{[0,1,2,3].map(set => {
          const checked = problems.slice(set*10,set*10+10).filter(q => answerFor(q) !== null).length;
          return <button type="button" key={set} class={`problem-action ${set===progress.set?'primary-action':''}`} aria-current={set===progress.set?'page':undefined} onClick={() => changeSet(set)}>Set {set+1} · {checked}/10 answered</button>;
        })}</nav>
        <h2 ref={setHeading} tabIndex={-1} class="section-set-heading">Set {progress.set+1} · Questions {start+1}–{start+10}</h2>
        {visible.map((q,index) => <Problem key={q.id} problem={q} number={start+index+1} examStyle hideTopic initialAnswer={answerFor(q)} onAnswer={answer => save(previous => ({ ...previous, answers: { ...previous.answers, [q.id]: answer } }))} />)}
        <nav class="section-sets" aria-label="Continue question sets">
          {progress.set>0 && <button type="button" class="problem-action" onClick={() => changeSet(progress.set-1)}>← Previous set</button>}
          {progress.set<3 && <button type="button" class="problem-action" onClick={() => changeSet(progress.set+1)}>Next set →</button>}
          <a href="#/review">Review your mistakes</a>
        </nav>
      </>}
    </section>
    <div class="topic-footer"><nav class="pager" aria-label="Section navigation"><a class="pager-link prev" href={`#/${prev.path}`}><span class="pager-direction">← Previous</span><span class="pager-label">{prev.label}</span></a>{next && <a class="pager-link next" href={`#/${next.path}`}><span class="pager-direction">Next →</span><span class="pager-label">{next.label}</span></a>}</nav></div>
  </>;
}

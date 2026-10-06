import { useState } from 'preact/hooks';
import { navStructure, availableTopics } from '../scripts/topics.js';
import { UnderstandingSummary } from '../scripts/components/PracticeProblems.jsx';
import { resources } from '../scripts/syllabus.js';

export function Home({ completed }) {
  const [query,setQuery]=useState('');
  const core=availableTopics.filter(topic=>!topic.enrichment);
  const completedCount=core.filter(topic=>completed.includes(topic.id)).length;
  const nextTopic=core.find(topic=>!completed.includes(topic.id));
  const matches=availableTopics.filter(topic=>`${topic.label} ${topic.sectionTitle} ${navStructure.find(category=>category.id===topic.categoryId).title}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <>
    <div class="home-heading"><div><h1 class="page-title">Make probability<br/>second nature.</h1><p class="page-subtitle">Your Exam P study guide · May 2026 syllabus</p></div><div class="probability-emblem" aria-hidden="true">P(A<span>∣</span>B)<small>Learn. Calculate. Practice.</small></div></div>
    <p class="intro">Build the ideas, work the calculations, then practice under exam conditions. Every chapter ends with foundation exercises and five multistep exam-style challenges. When you’re ready, tackle a timed paper from a separate question bank.</p>
    <div class="study-start"><div><h2>{completedCount===0?'Begin with the foundations':'Pick up where you left off'}</h2><p>{completedCount} of {core.length} syllabus lessons marked complete</p><progress value={completedCount} max={core.length} aria-label="Completed syllabus lessons" /></div>{nextTopic?<a class="home-cta" href={`#/${nextTopic.id}`}>{completedCount===0?'Start studying':'Continue'}: {nextTopic.label}</a>:<a class="home-cta" href="#/exam">Try a practice exam</a>}</div>
    <UnderstandingSummary /><nav class="study-tools" aria-label="Study tools"><a href="#/review"><strong>Review & understanding</strong><span>Mixed questions, new variants, and your mistakes</span></a><a href="#/syllabus"><strong>Syllabus checklist</strong><span>Find every learning outcome</span></a><a href="#/exam"><strong>Timed practice exam</strong><span>30 questions in three hours</span></a><a href="#/reference"><strong>Formulas & prerequisites</strong><span>Distributions, calculus, and insurance</span></a></nav>
    <section class="exam-focus"><h2>Where to spend your study time</h2><p>Univariate distributions and insurance calculations carry the most weight. Revisit all three areas; questions can combine outcomes.</p><div class="syllabus-weight-bar" aria-hidden="true"><span class="general">General</span><span class="univariate">Univariate</span><span class="multivariate">Multivariate</span></div><div class="weight-legend">{navStructure.map(category=><span key={category.id}>{category.title}<strong>{category.weight}</strong></span>)}</div></section>
    <div class="chapter-index-heading"><h2>Explore the chapters</h2><label class="chapter-search">Find a topic<input type="search" placeholder="Try deductibles, Bayes, or order statistics" value={query} onInput={event=>setQuery(event.target.value)} /></label></div>
    {query.trim()&&<p class="search-count" role="status">{matches.length} matching lessons</p>}
    {navStructure.map(category=>{
      const sections=category.sections.map(section=>({...section,items:section.items.filter(item=>matches.some(match=>match.id===item.id))})).filter(section=>section.items.length);
      if(!sections.length) return null;
      const items=core.filter(topic=>topic.categoryId===category.id);
      return <section class="home-category" key={category.id}><div class="category-heading"><h2>{category.title}</h2><span class="topic-badge">{items.filter(topic=>completed.includes(topic.id)).length}/{items.length} studied</span></div>{sections.map(section=><div class="home-section" key={section.title}><h3>{section.title}</h3><ul class="topic-list">{section.items.map(item=><li key={item.id}><a href={`#/${item.id}`}>{item.label}</a>{item.enrichment?<span class="topic-badge">Optional</span>:completed.includes(item.id)?<span class="topic-badge done">✓ Complete</span>:<span class="topic-badge">Lesson & practice</span>}</li>)}</ul></div>)}</section>;
    })}
    {!matches.length&&<p class="intro">No lessons match “{query}”. Try a distribution name or clear your search.</p>}
    <section class="home-resources"><h2>Study with the official resources</h2><p>The questions here are original study exercises. Use the SOA’s sample questions to compare wording and difficulty, and check updates for your sitting.</p><ul class="resource-list">{resources.slice(0,6).map(([label,url])=><li key={url}><a href={url} target="_blank" rel="noreferrer">{label} ↗</a></li>)}</ul></section>
  </>;
}

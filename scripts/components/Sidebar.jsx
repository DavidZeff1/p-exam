import { useEffect, useState } from "preact/hooks";
import { navStructure, availableTopics } from "../topics.js";
import { getStudyRoute, questionsPath } from "../study-routes.js";
import { getSectionForRoute, sectionQuestionsPath } from "../sections.js";

export function Sidebar({ currentPage, completed, isOpen, onClose, onNavigate }) {
  const [search, setSearch] = useState("");
  const [openSections, setOpenSections] = useState(["general-probability"]);
  const currentCategory = getStudyRoute(currentPage).topic?.categoryId ?? getSectionForRoute(currentPage)?.categoryId;
  const coreTopics = availableTopics.filter(topic => !topic.enrichment);
  const completedCount = coreTopics.filter((topic) => completed.includes(topic.id)).length;

  // Expand the category of the page being viewed, e.g. after following a deep link.
  useEffect(() => {
    if (currentCategory) {
      setOpenSections((prev) =>
        prev.includes(currentCategory) ? prev : [...prev, currentCategory]
      );
    }
  }, [currentCategory]);

  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <nav id="sidebar" class={`sidebar ${isOpen ? "open" : ""}`} aria-label="Topics" inert={!isOpen}>
      <div class="sidebar-header">
        <h1>
          <a href="#/" onClick={onNavigate}>
            Exam P
          </a>
        </h1>
        <button
          type="button"
          class="sidebar-close"
          aria-label="Close topics menu"
          onClick={onClose}
        >
          ×
        </button>
        <div class="sidebar-progress">
          <div class="progress-track">
            <div
              class="progress-fill"
              style={{ width: `${(100 * completedCount) / coreTopics.length}%` }}
            />
          </div>
          <span>
            {completedCount} of {coreTopics.length} syllabus lessons complete
          </span>
        </div>
      </div>
      <div class="sidebar-tools"><a href="#/review" aria-current={currentPage === "review" ? "page" : undefined} onClick={onNavigate}>Review & understanding</a><a href="#/syllabus" aria-current={currentPage === "syllabus" ? "page" : undefined} onClick={onNavigate}>Syllabus checklist</a><a href="#/exam" aria-current={currentPage === "exam" ? "page" : undefined} onClick={onNavigate}>Practice exam</a><a href="#/reference" aria-current={currentPage === "reference" ? "page" : undefined} onClick={onNavigate}>Formulas & prerequisites</a></div>
      <label class="sidebar-search">Find a lesson<input type="search" placeholder="Search topics" value={search} onInput={event => setSearch(event.target.value)} /></label>
      {search.trim() ? <div class="sidebar-results">{availableTopics.filter(topic => `${topic.label} ${topic.sectionTitle}`.toLowerCase().includes(search.trim().toLowerCase())).map(topic => <a class="nav-link" href={`#/${topic.id}`} key={topic.id} onClick={() => { setSearch(""); onNavigate(); }}>{topic.label}</a>)}{!availableTopics.some(topic => `${topic.label} ${topic.sectionTitle}`.toLowerCase().includes(search.trim().toLowerCase())) && <p role="status">No matching lessons.</p>}</div> : <ul class="nav-list">
        {navStructure.map((category) => {
          const expanded = openSections.includes(category.id);
          return (
            <li class={`nav-section ${expanded ? "open" : ""}`} key={category.id}>
              <button
                type="button"
                class="nav-section-toggle"
                aria-expanded={expanded}
                onClick={() => toggleSection(category.id)}
              >
                <span class="toggle-icon" aria-hidden="true">
                  ▶
                </span>
                {category.title}
              </button>
              <ul class="nav-subsection">
                {category.sections.map((section) => (
                  <li key={section.title}>
                    <div class="nav-subsection-header">
                      <span>{section.title}</span>
                    </div>
                    {section.items.map((item) => {
                      const active = currentPage === item.id;
                      const classes = ["nav-link", active && "active", !item.page && "coming-soon"]
                        .filter(Boolean)
                        .join(" ");
                      return <div key={item.id}>
                        <a
                          href={`#/${item.id}`}
                          class={classes}
                          aria-current={active ? "page" : undefined}
                          onClick={onNavigate}
                        >
                          <span class="nav-link-label">{item.label}</span>
                          {completed.includes(item.id) && (
                            <span class="nav-check" title="Completed">
                              ✓
                            </span>
                          )}
                          {item.enrichment && <span class="nav-soon">optional</span>}
                        </a>
                        {item.page && <a href={`#/${questionsPath(item.id)}`}
                          class={`nav-link nav-questions ${currentPage === questionsPath(item.id) ? 'active' : ''}`}
                          aria-current={currentPage === questionsPath(item.id) ? 'page' : undefined}
                          aria-label={`Questions for ${item.label}`}
                          onClick={onNavigate}>Questions · {item.label.split(' ')[0]}</a>}
                      </div>;
                    })}
                    <a href={`#/${sectionQuestionsPath(`${category.id}-${section.title[0].toLowerCase()}`)}`}
                      class={`nav-link nav-section-questions ${currentPage === sectionQuestionsPath(`${category.id}-${section.title[0].toLowerCase()}`) ? 'active' : ''}`}
                      aria-current={currentPage === sectionQuestionsPath(`${category.id}-${section.title[0].toLowerCase()}`) ? 'page' : undefined}
                      onClick={onNavigate}>Mixed questions · All {section.title[0]}</a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>}
    </nav>
  );
}

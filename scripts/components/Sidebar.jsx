import { useEffect, useState } from "preact/hooks";
import { navStructure, topicById, availableTopics } from "../topics.js";

export function Sidebar({ currentPage, completed, isOpen, onClose }) {
  const [openSections, setOpenSections] = useState(["general-probability"]);
  const currentCategory = topicById[currentPage]?.categoryId;
  const completedCount = availableTopics.filter((topic) => completed.includes(topic.id)).length;

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
    <nav id="sidebar" class={`sidebar ${isOpen ? "open" : ""}`} aria-label="Topics">
      <div class="sidebar-header">
        <h1>
          <a href="#/" onClick={onClose}>
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
              style={{ width: `${(100 * completedCount) / availableTopics.length}%` }}
            />
          </div>
          <span>
            {completedCount} of {availableTopics.length} topics complete
          </span>
        </div>
      </div>
      <ul class="nav-list">
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
                      return (
                        <a
                          href={`#/${item.id}`}
                          class={classes}
                          aria-current={active ? "page" : undefined}
                          onClick={onClose}
                          key={item.id}
                        >
                          <span class="nav-link-label">{item.label}</span>
                          {completed.includes(item.id) && (
                            <span class="nav-check" title="Completed">
                              ✓
                            </span>
                          )}
                          {!item.page && <span class="nav-soon">soon</span>}
                        </a>
                      );
                    })}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

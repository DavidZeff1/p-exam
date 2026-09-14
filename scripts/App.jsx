import { useState, useEffect } from "preact/hooks";
import { renderFormulas } from "./katex-init.js";
import { topicById } from "./topics.js";
import { useCompletedTopics } from "./progress.js";
import { Sidebar } from "./components/Sidebar.jsx";
import { PracticeProblems } from "./components/PracticeProblems.jsx";
import { TopicFooter } from "./components/TopicFooter.jsx";
import { Home } from "../pages/Home.jsx";
import { Placeholder } from "../pages/Placeholder.jsx";

// Topic pages are split into their own chunks and loaded on first visit.
const pageModules = import.meta.glob([
  "../pages/*.jsx",
  "!../pages/Home.jsx",
  "!../pages/Placeholder.jsx",
]);

function loadPage(topic) {
  return pageModules[`../pages/${topic.page}.jsx`]().then((mod) => mod[topic.page]);
}

const readHash = () => window.location.hash.slice(2);

export function App() {
  const [currentPage, setCurrentPage] = useState(readHash);
  const [loadedPage, setLoadedPage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completed, toggleCompleted] = useCompletedTopics();
  const topic = topicById[currentPage];

  useEffect(() => {
    const handleHash = () => {
      setCurrentPage(readHash());
      setSidebarOpen(false);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    if (!sidebarOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [sidebarOpen]);

  useEffect(() => {
    document.title = topic ? `${topic.label} · Exam P` : "SOA Exam P Study Guide";
    if (!topic?.page) return;

    let cancelled = false;
    loadPage(topic).then((PageComponent) => {
      // The element is kept in state so its identity is stable: re-renders of App
      // (e.g. toggling progress) then skip the page and leave KaTeX's DOM alone.
      if (!cancelled) setLoadedPage({ id: topic.id, element: <PageComponent /> });
    });
    return () => {
      cancelled = true;
    };
  }, [topic]);

  useEffect(() => {
    renderFormulas();
  }, [loadedPage]);

  const pageReady = topic?.page && loadedPage?.id === topic.id;

  let content;
  if (!topic) {
    content = <Home completed={completed} />;
  } else if (!topic.page) {
    content = <Placeholder topic={topic} />;
  } else if (!pageReady) {
    content = <p class="page-loading">Loading…</p>;
  } else {
    content = loadedPage.element;
  }

  return (
    <div class="app">
      <header class="mobile-header">
        <button
          type="button"
          class="menu-button"
          aria-label="Open topics menu"
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
        <a href="#/" class="mobile-title">
          Exam P
        </a>
      </header>
      <Sidebar
        currentPage={currentPage}
        completed={completed}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {sidebarOpen && <div class="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
      <main class="content">
        <div id="page-container">
          {content}
          {pageReady && <PracticeProblems key={topic.id} topicId={topic.id} />}
          {topic && (pageReady || !topic.page) && (
            <TopicFooter
              topic={topic}
              isCompleted={completed.includes(topic.id)}
              onToggleCompleted={toggleCompleted}
            />
          )}
        </div>
      </main>
    </div>
  );
}

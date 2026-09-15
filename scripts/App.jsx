import { useState, useEffect, useRef } from "preact/hooks";
import { renderFormulas } from "./katex-init.js";
import { getTopic } from "./topics.js";
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
  const [failedPage, setFailedPage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completed, toggleCompleted] = useCompletedTopics();
  const menuButtonRef = useRef(null);
  const drawerOpenedOn = useRef(null);
  const hasNavigated = useRef(false);
  const topic = getTopic(currentPage);
  const pageReady = Boolean(topic?.page) && loadedPage?.id === topic.id;

  useEffect(() => {
    const handleHash = () => {
      hasNavigated.current = true;
      setCurrentPage(readHash());
      setSidebarOpen(false);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // The drawer only exists below 900px; close it if the window grows past that.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 901px)");
    const handleChange = (event) => {
      if (event.matches) setSidebarOpen(false);
    };
    wide.addEventListener("change", handleChange);
    return () => wide.removeEventListener("change", handleChange);
  }, []);

  // While the drawer is open, focus moves into it, the page behind is inert and
  // doesn't scroll, and Escape closes it. Closing it without navigating returns
  // focus to the menu button.
  useEffect(() => {
    document.documentElement.classList.toggle("drawer-open", sidebarOpen);
    if (!sidebarOpen) {
      if (drawerOpenedOn.current === currentPage) menuButtonRef.current?.focus();
      drawerOpenedOn.current = null;
      return;
    }

    drawerOpenedOn.current = currentPage;
    document.querySelector(".sidebar-close")?.focus();
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
    loadPage(topic).then(
      (PageComponent) => {
        // The element is kept in state so its identity is stable: re-renders of App
        // (e.g. toggling progress) then skip the page and leave KaTeX's DOM alone.
        if (!cancelled) setLoadedPage({ id: topic.id, element: <PageComponent /> });
      },
      () => {
        // Offline, or an old tab after a deploy replaced the chunk files.
        if (!cancelled) setFailedPage(topic.id);
      }
    );
    return () => {
      cancelled = true;
    };
  }, [topic]);

  useEffect(() => {
    renderFormulas();
  }, [loadedPage]);

  // After in-app navigation, start keyboard and screen reader users at the new heading.
  useEffect(() => {
    if (!hasNavigated.current || (topic?.page && !pageReady)) return;
    const heading = document.querySelector(".page-title");
    if (!heading) return;
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }, [currentPage, pageReady]);

  let content;
  if (!topic) {
    content = <Home completed={completed} />;
  } else if (!topic.page) {
    content = <Placeholder topic={topic} />;
  } else if (pageReady) {
    content = loadedPage.element;
  } else if (failedPage === topic.id) {
    content = (
      <div class="page-error" role="alert">
        <p>This topic couldn't be loaded. Check your connection, then reload the page.</p>
        <button type="button" class="problem-action" onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    );
  } else {
    content = <p class="page-loading">Loading…</p>;
  }

  return (
    <div class="app">
      <header class="mobile-header" inert={sidebarOpen}>
        <button
          ref={menuButtonRef}
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
      <main class="content" inert={sidebarOpen}>
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

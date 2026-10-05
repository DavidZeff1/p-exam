import { useState, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { renderFormulas } from "./katex-init.js";
import { getTopic } from "./topics.js";
import { useCompletedTopics } from "./progress.js";
import { Sidebar } from "./components/Sidebar.jsx";
import { PracticeProblems } from "./components/PracticeProblems.jsx";
import { TopicFooter } from "./components/TopicFooter.jsx";
import { Review } from "../pages/Review.jsx";
import { GuidedExamples } from "./components/GuidedExamples.jsx";
import { Home } from "../pages/Home.jsx";
import { Syllabus } from "../pages/Syllabus.jsx";
import { Reference } from "../pages/Reference.jsx";
import { MockExam } from "../pages/MockExam.jsx";
import { getOutcomes } from "./syllabus.js";
import { useTheme } from "./theme.js";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
const utilityTitles = { syllabus: "Syllabus checklist", reference: "Formulas & prerequisites", exam: "Practice exam", review: "Review & understanding" };

// Topic pages are split into their own chunks and loaded on first visit.
const pageModules = import.meta.glob([
  "../pages/*.jsx",
  "!../pages/Home.jsx",
  "!../pages/Placeholder.jsx",
  "!../pages/Syllabus.jsx",
  "!../pages/Reference.jsx",
  "!../pages/MockExam.jsx",
  "!../pages/Review.jsx",
]);

function loadPage(topic) {
  return pageModules[`../pages/${topic.page}.jsx`]().then((mod) => mod[topic.page]);
}

const readHash = () => window.location.hash.slice(2);

export function App() {
  const [theme, toggleTheme] = useTheme();
  const [currentPage, setCurrentPage] = useState(readHash);
  const [loadedPage, setLoadedPage] = useState(null);
  const [failedPage, setFailedPage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia("(min-width: 901px)").matches);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const drawerIsOpen = !isDesktop && sidebarOpen;
  const sidebarIsVisible = isDesktop ? desktopSidebarOpen : sidebarOpen;
  const [completed, toggleCompleted] = useCompletedTopics();
  const menuButtonRef = useRef(null);
  const desktopMenuButtonRef = useRef(null);
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

  // Keep the desktop panel preference separate from the mobile overlay.
  useLayoutEffect(() => {
    const wide = window.matchMedia("(min-width: 901px)");
    const handleChange = (event) => {
      setIsDesktop(event.matches);
      setSidebarOpen(false);
    };
    setIsDesktop(wide.matches);
    wide.addEventListener("change", handleChange);
    return () => wide.removeEventListener("change", handleChange);
  }, []);

  // While the drawer is open, focus moves into it, the page behind is inert and
  // doesn't scroll, and Escape closes it. Closing it without navigating returns
  // focus to the menu button.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("drawer-open", drawerIsOpen);
    if (!drawerIsOpen) {
      if (drawerOpenedOn.current === currentPage) menuButtonRef.current?.focus();
      drawerOpenedOn.current = null;
      return;
    }

    drawerOpenedOn.current = currentPage;
    document.querySelector(".sidebar-close")?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") setSidebarOpen(false);
      if (event.key === "Tab") {
        const nodes = [...document.querySelectorAll('.sidebar a, .sidebar button, .sidebar input')].filter(el => el.getClientRects().length && !el.disabled);
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [drawerIsOpen]);

  useEffect(() => {
    document.title = topic ? `${topic.label} · Exam P` : Object.hasOwn(utilityTitles, currentPage) ? `${utilityTitles[currentPage]} · Exam P` : "SOA Exam P Study Guide";
    if (!topic?.page) return;

    let cancelled = false;
    loadPage(topic).then(
      (PageComponent) => {
        // The element is kept in state so its identity is stable: re-renders of App
        // (e.g. toggling progress) then skip the page and leave KaTeX's DOM alone.
        if (!cancelled) setLoadedPage({ id: topic.id, element: <PageComponent topic={topic} /> });
      },
      () => {
        // Offline, or an old tab after a deploy replaced the chunk files.
        if (!cancelled) setFailedPage(topic.id);
      }
    );
    return () => {
      cancelled = true;
    };
  }, [topic, currentPage]);

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
  if (currentPage === "review") {
    content = <Review />;
  } else if (currentPage === "syllabus") {
    content = <Syllabus completed={completed} />;
  } else if (currentPage === "reference") {
    content = <Reference />;
  } else if (currentPage === "exam") {
    content = <MockExam />;
  } else if (!topic && currentPage) {
    content = <><h1 class="page-title">Topic not found</h1><p>That chapter link does not exist. <a href="#/">Find a lesson in the study guide</a>.</p></>;
  } else if (!topic) {
    content = <Home completed={completed} />;
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
    <div class={`app ${isDesktop && !desktopSidebarOpen ? "sidebar-collapsed" : ""}`}>
      <a class="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById("main-content")?.focus(); }}>Skip to study content</a>
      <header class="mobile-header" inert={drawerIsOpen}>
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
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>
      <Sidebar
        currentPage={currentPage}
        completed={completed}
        isOpen={sidebarIsVisible}
        onClose={() => {
          if (isDesktop) {
            setDesktopSidebarOpen(false);
            desktopMenuButtonRef.current?.focus();
          } else setSidebarOpen(false);
        }}
        onNavigate={() => setSidebarOpen(false)}
      />
      {drawerIsOpen && <div class="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
      <main id="main-content" tabIndex={-1} class="content" inert={drawerIsOpen}>
        <div class="desktop-menu-toolbar">
          <button
            ref={desktopMenuButtonRef}
            type="button"
            class="desktop-menu-toggle"
            aria-controls="sidebar"
            aria-expanded={desktopSidebarOpen}
            onClick={() => setDesktopSidebarOpen(open => !open)}
          >
            <span aria-hidden="true">☰</span>
            {desktopSidebarOpen ? "Hide topics" : "Show topics"}
          </button>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
        <div id="page-container">
          {topic && pageReady && <nav class="lesson-toolbar" aria-label="Lesson tools"><a href="#/">Study guide</a><span>{topic.sectionTitle}</span><a href="#practice" onClick={event => { event.preventDefault(); document.getElementById("practice")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }}>Go to practice</a></nav>}
          {topic && pageReady && <p class="outcome-tags">{topic.enrichment ? "Optional enrichment: lognormal is not named in the May 2026 syllabus." : <>Syllabus {getOutcomes(topic.id).map(outcome => <a key={outcome.code} href="#/syllabus" title={outcome.label}>{outcome.code}</a>)}</>}</p>}
          {content}
          {pageReady && <GuidedExamples key={`guided:${topic.id}`} topicId={topic.id} />}
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

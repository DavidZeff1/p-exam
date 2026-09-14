import { useState } from "preact/hooks";

const STORAGE_KEY = "exam-p-completed-topics";

function readCompleted() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

// Completed topic ids, persisted in this browser's localStorage.
export function useCompletedTopics() {
  const [completed, setCompleted] = useState(readCompleted);

  const toggleCompleted = (id) => {
    setCompleted((prev) => {
      const next = prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage can be unavailable (private mode, blocked site data); progress stays in memory.
      }
      return next;
    });
  };

  return [completed, toggleCompleted];
}

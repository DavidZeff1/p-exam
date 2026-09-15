import { useEffect, useState } from "preact/hooks";

const STORAGE_KEY = "exam-p-completed-topics";

// The stored list, or null when storage is unavailable or holds something unexpected.
function readStored() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored : null;
  } catch {
    return null;
  }
}

// Completed topic ids, persisted in this browser's localStorage and shared across tabs.
export function useCompletedTopics() {
  const [completed, setCompleted] = useState(() => readStored() ?? []);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === STORAGE_KEY) setCompleted(readStored() ?? []);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleCompleted = (id) => {
    // Start from storage rather than state so a change made in another tab isn't overwritten.
    const current = readStored() ?? completed;
    const next = current.includes(id) ? current.filter((t) => t !== id) : [...current, id];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage can be unavailable (private mode, blocked site data); progress stays in memory.
    }
    setCompleted(next);
  };

  return [completed, toggleCompleted];
}

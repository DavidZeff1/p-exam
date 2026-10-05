import { useEffect, useState } from 'preact/hooks';

const STORAGE_KEY = 'exam-p-theme';
function savedTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'dark' || value === 'light' ? value : null;
  } catch { return null; }
}
function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => savedTheme() ?? systemTheme());
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystem = () => {
      if (!savedTheme()) {
        const next = systemTheme();
        applyTheme(next);
        setTheme(next);
      }
    };
    const updateStorage = event => {
      if (event.key === STORAGE_KEY || event.key === null) {
        const next = savedTheme() ?? systemTheme();
        applyTheme(next);
        setTheme(next);
      }
    };
    media.addEventListener('change', updateSystem);
    window.addEventListener('storage', updateStorage);
    return () => {
      media.removeEventListener('change', updateSystem);
      window.removeEventListener('storage', updateStorage);
    };
  }, []);
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* Theme still works for this session. */ }
  }
  return [theme, toggleTheme];
}

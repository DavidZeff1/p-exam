// Revealing an answer or a hint stays recorded across navigation and reloads.
const KEY = 'exam-p-support-v1';
const memory = new Set();
export function hasSupport(id) {
  try { const saved = JSON.parse(localStorage.getItem(KEY)); return memory.has(id) || Array.isArray(saved) && saved.includes(id); } catch { return memory.has(id); }
}
export function markSupport(id) {
  if(!id) return;
  memory.add(id);
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    localStorage.setItem(KEY, JSON.stringify([...new Set([...(Array.isArray(saved) ? saved.filter(v=>typeof v==='string') : []),...memory])]));
  } catch { /* Keep support evidence for this session. */ }
}

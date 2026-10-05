// Learning evidence is separate from self-reported lesson completion.
export const LEARNING_KEY = 'exam-p-learning-v1';
const DAY = 86400000;
export const reviewIntervals = [1, 3, 7, 14, 30];
export function emptyLearning() { return { version: 1, questions: {} }; }
export function validLearning(value) {
  return value?.version === 1 && value.questions && typeof value.questions === 'object' && !Array.isArray(value.questions);
}
export function readLearning(storage) {
  try {
    const value = JSON.parse((storage ?? globalThis.localStorage).getItem(LEARNING_KEY));
    if (!validLearning(value)) return emptyLearning();
    value.questions = Object.fromEntries(Object.entries(value.questions).filter(([, q]) => typeof q?.topicId === 'string' && Array.isArray(q.attempts) && q.attempts.length > 0 && q.attempts.every(a => Number.isFinite(a?.at) && (a.seconds === undefined || Number.isFinite(a.seconds) && a.seconds >= 0) && typeof a.correct === 'boolean' && typeof a.assisted === 'boolean') && Number.isFinite(q.due) && Number.isInteger(q.streak) && q.streak >= 0));
    return value;
  } catch { return emptyLearning(); }
}
export function recordAttempt(state, id, topicId, attempt) {
  const previous = state.questions[id];
  const independentCorrect = attempt.correct && !attempt.assisted;
  // Several answers on the same day are useful practice, but not evidence of
  // retention across a longer interval. Advance only once a scheduled review is due.
  const streak = independentCorrect ? previous && attempt.at < previous.due ? Math.max(1, previous.streak) : (previous?.streak ?? 0) + 1 : 0;
  const interval = independentCorrect ? reviewIntervals[Math.min(streak - 1, reviewIntervals.length - 1)] : 1;
  const entry = { topicId, attempts: [...(previous?.attempts ?? []), attempt], streak, due: attempt.at + interval * DAY };
  return { version: 1, questions: { ...state.questions, [id]: entry } };
}
export function saveAttempt(id, topicId, attempt) {
  const next = recordAttempt(currentLearning(), id, topicId, attempt);
  try { localStorage.setItem(LEARNING_KEY, JSON.stringify(next)); memoryDirty = false; } catch { memoryDirty = true; }
  memoryLearning = next;
  globalThis.dispatchEvent?.(new Event('exam-p-learning-change'));
  return next;
}
let memoryLearning = null;
let memoryDirty = false;
export function currentLearning() {
  if (memoryDirty && memoryLearning) return memoryLearning;
  try { if (localStorage.getItem(LEARNING_KEY) !== null) return readLearning(); } catch { /* Use memory if storage is blocked. */ }
  return memoryLearning ?? emptyLearning();
}
export function summarizeLearning(state, topicId) {
  const entries = Object.values(state.questions).filter(q => !topicId || q.topicId === topicId);
  const attempts = entries.flatMap(q => q.attempts);
  const first = entries.map(q => q.attempts[0]).filter(Boolean);
  const independent = first.filter(a => !a.assisted);
  return { questions: first.length, firstCorrect: first.filter(a => a.correct).length,
    independent: independent.length, independentCorrect: independent.filter(a => a.correct).length,
    assisted: first.filter(a => a.assisted).length, attempts: attempts.length,
    highConfidenceMisses: attempts.filter(a => !a.correct && a.confidence === 'high').length,
    seconds: first.reduce((total, a) => total + (a.seconds ?? 0), 0) };
}
export function reviewPriority(entry, now = Date.now()) {
  if (!entry) return 1;
  const last = entry.attempts.at(-1);
  return (entry.due <= now ? 10 : 0) + (!last?.correct ? 5 : 0) + (last?.assisted ? 2 : 0);
}
export function selectReview(bank, state, count = 8, now = Date.now(), random = Math.random) {
  const candidates = bank.filter(q => !q.enrichment).map(q => ({ q, score: Math.max(reviewPriority(state.questions[q.id], now), reviewPriority(state.questions[`variant:${q.topicId}`], now)) + random() }));
  candidates.sort((a, b) => b.score - a.score);
  // Reserve at least one question in each area before filling by review need.
  const categories = [...new Set(candidates.map(item => item.q.categoryId))];
  const chosen = categories.map(category => candidates.find(item => item.q.categoryId === category)?.q).filter(Boolean).slice(0, count);
  // Prefer distinct topics, then fill any remaining slots if the bank is small.
  for (const { q } of candidates) if (chosen.length < count && !chosen.some(item => item.topicId === q.topicId)) chosen.push(q);
  for (const { q } of candidates) if (chosen.length < count && !chosen.some(item => item.id === q.id)) chosen.push(q);
  return chosen; // Selection order is shuffled by the caller.
}

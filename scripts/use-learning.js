import { useEffect, useState } from 'preact/hooks';
import { currentLearning, LEARNING_KEY } from './learning.js';
export function useLearning() {
  const [learning, setLearning] = useState(currentLearning);
  useEffect(() => {
    const update = event => { if (event.type !== 'storage' || event.key === LEARNING_KEY || event.key === null) setLearning(currentLearning()); };
    window.addEventListener('storage', update);
    window.addEventListener('exam-p-learning-change', update);
    return () => { window.removeEventListener('storage', update); window.removeEventListener('exam-p-learning-change', update); };
  }, []);
  return learning;
}

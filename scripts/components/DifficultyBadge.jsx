import { getDifficulty } from '../difficulty.js';

export function DifficultyBadge({ problem }) {
  const score = getDifficulty(problem);
  return <span class="difficulty-badge" title="Study estimate based on setup, concepts, and calculation. 1 = easiest; 10 = hardest."
    aria-label={`Estimated difficulty ${score} out of 10`}>Difficulty {score}/10</span>;
}

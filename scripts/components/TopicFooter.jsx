import { getStudyPager } from "../study-routes.js";

export function TopicFooter({ topic, questions = false, isCompleted, onToggleCompleted }) {
  const { prev, next } = getStudyPager(topic, questions);

  return (
    <div class="topic-footer">
      {topic.page && !questions && (
        <button
          type="button"
          class={`complete-toggle ${isCompleted ? "done" : ""}`}
          onClick={() => onToggleCompleted(topic.id)}
        >
          {isCompleted ? "✓ Completed" : "Mark topic as complete"}
        </button>
      )}
      <nav class="pager" aria-label="Topic navigation">
        {prev ? (
          <a class="pager-link prev" href={`#/${prev.path}`}>
            <span class="pager-direction">← Previous</span>
            <span class="pager-label">{prev.label}</span>
          </a>
        ) : (
          <span />
        )}
        {next && (
          <a class="pager-link next" href={`#/${next.path}`}>
            <span class="pager-direction">Next →</span>
            <span class="pager-label">{next.label}</span>
          </a>
        )}
      </nav>
    </div>
  );
}

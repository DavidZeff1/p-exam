import { navStructure, availableTopics } from "../scripts/topics.js";

export function Home({ completed }) {
  const completedCount = availableTopics.filter((topic) => completed.includes(topic.id)).length;
  const nextTopic = availableTopics.find((topic) => !completed.includes(topic.id));

  return (
    <>
      <h1 class="page-title">SOA Exam P Study Guide</h1>
      <p class="page-subtitle">Probability Exam Preparation</p>
      <div class="home-intro">
        <p>
          Welcome to your Exam P study companion. Work through the topics in order, try the
          practice problems at the end of each page, and mark topics complete as you go.
        </p>
        <p class="home-progress">
          <strong>
            {completedCount} of {availableTopics.length}
          </strong>{" "}
          topics complete
        </p>
        {nextTopic && (
          <a class="home-cta" href={`#/${nextTopic.id}`}>
            {completedCount === 0 ? "Start studying" : "Continue"}: {nextTopic.label} →
          </a>
        )}
      </div>
      {navStructure.map((category) => (
        <div class="home-category" key={category.id}>
          <h2>{category.title}</h2>
          {category.sections.map((section) => (
            <div class="home-section" key={section.title}>
              <h3>{section.title}</h3>
              <ul class="topic-list">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <a href={`#/${item.id}`} class={item.page ? "" : "coming-soon"}>
                      {item.label}
                    </a>
                    {!item.page && <span class="topic-badge">Coming soon</span>}
                    {item.page && completed.includes(item.id) && (
                      <span class="topic-badge done">✓ Complete</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

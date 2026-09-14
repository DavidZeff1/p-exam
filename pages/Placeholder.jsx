export function Placeholder({ topic }) {
  return (
    <>
      <h1 class="page-title">{topic.label}</h1>
      <p class="page-subtitle">{topic.sectionTitle.replace(/^[A-Z]\.\s*/, '')}</p>
      <p class="placeholder-message">Content coming soon...</p>
    </>
  )
}

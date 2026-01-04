export function renderFormulas() {
  document.querySelectorAll('[data-latex]').forEach(el => {
    katex.render(el.dataset.latex, el, {
      throwOnError: false,
      displayMode: !el.classList.contains('inline-formula')
    })
  })
}

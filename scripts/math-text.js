// Splits text into plain-text and LaTeX segments: $inline$, $$display$$,
// and \$ for a literal dollar sign (e.g. "a deductible of \$500").
const MATH_PATTERN = /\$\$([\s\S]+?)\$\$|\$((?:\\.|[^\\$])+)\$|\\\$/g;

export function tokenizeMath(source) {
  const segments = [];
  let lastIndex = 0;

  for (const match of source.matchAll(MATH_PATTERN)) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: source.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) segments.push({ type: "display", value: match[1] });
    else if (match[2] !== undefined) segments.push({ type: "inline", value: match[2] });
    else segments.push({ type: "dollar" });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < source.length) {
    segments.push({ type: "text", value: source.slice(lastIndex) });
  }
  return segments;
}

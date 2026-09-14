import katex from "katex";
import { tokenizeMath } from "../math-text.js";

// Renders a string containing $inline$ and $$display$$ LaTeX.
export function RichText({ text }) {
  return (
    <>
      {tokenizeMath(text).map((segment, i) => {
        if (segment.type === "text") return segment.value;
        if (segment.type === "dollar") return "$";
        const html = katex.renderToString(segment.value, {
          throwOnError: false,
          displayMode: segment.type === "display",
        });
        return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </>
  );
}

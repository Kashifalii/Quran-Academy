import { marked } from "marked";

export function MarkdownBody({ body }: { body: string }) {
  const html = marked.parse(body, { async: false });

  return (
    <div
      className="prose-quran"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

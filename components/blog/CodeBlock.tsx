import { highlightCode } from "@/lib/highlighter";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language: string;
  filename?: string;
};

export async function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const html = await highlightCode(code, language);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-[#f6f8fa]">
      {filename && (
        <figcaption className="border-b border-border bg-card px-4 py-2 font-mono text-xs text-text-secondary">
          {filename}
        </figcaption>
      )}
      <div
        className={cn(
          "shiki-wrapper overflow-x-auto p-4 text-sm leading-relaxed",
          "[&_.shiki]:!bg-transparent",
          "[&_pre]:!m-0 !bg-transparent",
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </figure>
  );
}

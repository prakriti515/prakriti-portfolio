import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

const SUPPORTED_LANGS = [
  "bash",
  "yaml",
  "terraform",
  "hcl",
  "python",
  "javascript",
  "typescript",
  "json",
  "dockerfile",
  "sql",
  "markdown",
  "ini",
  "toml",
] as const;

export async function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light"],
      langs: [...SUPPORTED_LANGS],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  language: string,
): Promise<string> {
  const highlighter = await getHighlighter();
  const lang = highlighter.getLoadedLanguages().includes(language)
    ? language
    : "bash";

  return highlighter.codeToHtml(code, {
    lang,
    theme: "github-light",
  });
}

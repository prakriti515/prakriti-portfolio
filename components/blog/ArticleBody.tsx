import type { ArticleBlock } from "@/data/articles";
import { ArticleCallout } from "@/components/blog/ArticleCallout";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { cn } from "@/lib/utils";

type ArticleBodyProps = {
  content: ArticleBlock[];
};

export async function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="article-body space-y-4">
      {await Promise.all(
        content.map(async (block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p
                  key={`block-${index}`}
                  className="text-base leading-relaxed text-text-secondary"
                >
                  {block.text}
                </p>
              );
            case "heading": {
              const Tag = block.level === 2 ? "h2" : "h3";
              return (
                <Tag
                  key={`block-${index}`}
                  id={block.id}
                  className={cn(
                    "scroll-mt-28 font-bold tracking-tight text-text-primary",
                    block.level === 2
                      ? "mt-10 text-2xl first:mt-0"
                      : "mt-8 text-xl",
                  )}
                >
                  {block.text}
                </Tag>
              );
            }
            case "code":
              return (
                <CodeBlock
                  key={`block-${index}`}
                  code={block.code}
                  language={block.language}
                  filename={block.filename}
                />
              );
            case "callout":
              return (
                <ArticleCallout
                  key={`block-${index}`}
                  variant={block.variant}
                  title={block.title}
                  text={block.text}
                />
              );
            case "list": {
              const ListTag = block.ordered ? "ol" : "ul";
              return (
                <ListTag
                  key={`block-${index}`}
                  className={cn(
                    "space-y-2 pl-5 text-base leading-relaxed text-text-secondary",
                    block.ordered ? "list-decimal" : "list-disc",
                  )}
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={`${index}-${itemIndex}`}>{item}</li>
                  ))}
                </ListTag>
              );
            }
            default:
              return null;
          }
        }),
      )}
    </div>
  );
}

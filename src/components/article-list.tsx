"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

type Article = {
  title: string;
  description: string;
  date: string;
  url: string;
};

export function ArticleList({ articles }: { articles: Article[] }) {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-3">
      {articles.map((article, idx) => (
        <div
          key={idx}
          className="px-6 py-3 rounded-xl transition-colors hover:bg-hovered"
        >
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-medium tracking-tight truncate">
              {article.title}
            </h3>
            {!isMobile && (
              <p className="text-sm text-muted-foreground">{article.date}</p>
            )}
          </div>
          <p className="truncate text-muted-foreground">
            {article.description}
          </p>
        </div>
      ))}
    </div>
  );
}

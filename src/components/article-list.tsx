"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Project } from "@/data/project-and-articles";
import Link from "next/link";

export function ArticleList({ articles }: { articles: Project[] }) {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-3">
      {articles.map((article, idx) => (
        <Link key={idx} href={article.url}>
          <ArticleListItem isMobile={isMobile} {...article} />
        </Link>
      ))}
    </div>
  );
}

export function ArticleListItem({
  title,
  description,
  date,
  isMobile,
}: {
  title: string;
  description: string;
  date: string;
  isMobile: boolean;
}) {
  return (
    <div className="px-6 py-3 rounded-xl transition-colors hover:bg-hovered hover:cursor-pointer">
      <div className="flex items-center gap-3 mb-1">
        <h3 className="font-medium tracking-tight truncate">{title}</h3>
        {!isMobile && <p className="text-sm text-muted-foreground">{date}</p>}
      </div>
      <p className="truncate text-muted-foreground">{description}</p>
    </div>
  );
}

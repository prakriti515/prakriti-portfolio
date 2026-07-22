"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.getElementById("article-content");
      if (!article) {
        return;
      }

      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = article.offsetHeight;
      const viewport = window.innerHeight;
      const scrolled = window.scrollY - articleTop + viewport * 0.15;
      const total = articleHeight - viewport * 0.35;

      if (total <= 0) {
        setProgress(scrolled > 0 ? 100 : 0);
        return;
      }

      const next = Math.min(100, Math.max(0, (scrolled / total) * 100));
      setProgress(next);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-16 z-40 h-0.5 bg-border"
      aria-hidden="true"
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

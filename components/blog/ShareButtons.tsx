"use client";

import { useCallback, useState } from "react";
import { LinkedinIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ShareButtonsProps = {
  title: string;
  className?: string;
};

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ShareButtons({ title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = useCallback(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return window.location.href;
  }, []);

  const handleCopy = async () => {
    const url = getShareUrl();
    if (!url) {
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareTwitter = () => {
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent(title);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="mr-1 text-sm font-medium text-text-secondary">Share</span>
      <button
        type="button"
        onClick={shareLinkedIn}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-secondary transition-colors hover:border-primary/30 hover:text-primary"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon className="h-4 w-4" />
        LinkedIn
      </button>
      <button
        type="button"
        onClick={shareTwitter}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-secondary transition-colors hover:border-primary/30 hover:text-primary"
        aria-label="Share on X"
      >
        <TwitterIcon className="h-4 w-4" />
        X
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-secondary transition-colors hover:border-primary/30 hover:text-primary"
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}

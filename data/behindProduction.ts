/**
 * Behind Production — LinkedIn engineering series
 *
 * Add posts you have published on LinkedIn (or plan to publish).
 * linkedinUrl must point to the specific post, not your profile.
 *
 * Remove this file's template entry until you have real posts to list.
 * If empty, the homepage section will render no cards — add entries when ready.
 */

export type BehindProductionPost = {
  id: string;
  title: string;
  excerpt: string;
  series: string;
  date: string;
  readTime: string;
  linkedinUrl: string;
  tags: string[];
};

export const behindProductionPosts: BehindProductionPost[] = [
  {
    id: "replace-post-slug",
    title: "REPLACE: Post Title",
    excerpt:
      "REPLACE: What happened in production, what you changed, and what others can apply. Avoid unverifiable metrics.",
    series: "Behind Production",
    date: "REPLACE: Mon YYYY",
    readTime: "REPLACE: N min read",
    linkedinUrl: "REPLACE: LinkedIn post URL",
    tags: ["REPLACE", "Tags"],
  },
];

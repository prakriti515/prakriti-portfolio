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
    id: "-post-slug",
    title: "Prakriti Shrestha",
    excerpt:
      ": What happened in production, what you changed, and what others can apply. Avoid unverifiable metrics.",
    series: "Behind Production",
    date: ": Mon YYYY",
    readTime: ": N min read",
    linkedinUrl: "https://www.linkedin.com/in/prakriti-shrestha-7b6101241/",
    tags: ["", "Tags"],
  },
];

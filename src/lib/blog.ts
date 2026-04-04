import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  ogImage?: string;
  content: string;
  readingTime: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  ogImage?: string;
  readingTime: number;
}

/** Format a date string for display, anchored to UTC to avoid timezone rollover */
export function formatDate(dateStr: string): string {
  return new Date(`${dateStr}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Estimate reading time based on ~225 words per minute */
function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 225));
}

/** Return metadata for all posts, sorted newest-first */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogPostMeta[] = [];

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    if (!data.title || !data.date) continue;

    posts.push({
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      title: data.title,
      description: data.description ?? "",
      date: data.date,
      author: data.author ?? "Dan Gentry",
      tags: data.tags ?? [],
      ogImage: data.ogImage,
      readingTime: estimateReadingTime(content),
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Return a single post by slug, including rendered HTML content */
export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const postSlug = data.slug ?? filename.replace(/\.md$/, "");

    if (postSlug === slug) {
      // Dynamic imports keep remark out of the client bundle
      const { remark } = await import("remark");
      const remarkHtml = (await import("remark-html")).default;

      const processed = await remark().use(remarkHtml).process(content);

      return {
        slug: postSlug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author ?? "Dan Gentry",
        tags: data.tags ?? [],
        ogImage: data.ogImage,
        content: processed.toString(),
        readingTime: estimateReadingTime(content),
      };
    }
  }

  return undefined;
}

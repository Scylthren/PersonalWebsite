// Loads every markdown file in src/content/posts, parses simple
// `---\nkey: value\n---` frontmatter, and returns post metadata + body.
// No external frontmatter library needed — this covers flat string fields,
// which is all a personal blog needs. Reach for gray-matter later if your
// frontmatter gets more complex (nested fields, arrays with commas, etc).

const files = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const [, frontmatter, body] = match;
  const meta = {};
  frontmatter.split("\n").forEach((line) => {
    const i = line.indexOf(":");
    if (i === -1) return;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  });

  return { meta, body: body.trim() };
}

// Rewrites markdown image paths like ![alt](/images/foo.png) so they
// resolve correctly under Vite's base path (e.g. on GitHub Pages).
function fixImagePaths(body) {
  const base = import.meta.env.BASE_URL; // e.g. "/your-repo-name/"
  return body.replace(/!\[([^\]]*)\]\(\/(?!\/)/g, `![$1](${base}`);
}

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.md$/, "");
}

export function getAllPosts() {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { meta, body } = parseFrontmatter(raw);
      return {
        slug: slugFromPath(path),
        title: meta.title || slugFromPath(path),
        date: meta.date || "",
        excerpt: meta.excerpt || "",
        body: fixImagePaths(body),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

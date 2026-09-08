import { createFileRoute } from "@tanstack/react-router";
import { POSTS } from "@/data/posts";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const staticPaths = ["/", "/blog", "/science", "/privacy", "/terms"];
        const urls = [
          ...staticPaths.map(
            (path) =>
              `  <url><loc>${origin}${path}</loc><changefreq>weekly</changefreq></url>`,
          ),
          ...POSTS.map(
            (post) =>
              `  <url><loc>${origin}/blog/${post.slug}</loc><lastmod>${post.date}</lastmod><changefreq>monthly</changefreq></url>`,
          ),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      {
        title: `Recovery blog — guides on quitting porn | ${SITE.name}`,
      },
      {
        name: "description",
        content:
          "Practical writing on porn addiction recovery: 30-day plans, urge surfing, relapse, dopamine, journaling, and breathing. From NEVER.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = POSTS.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
        Field notes
      </p>
      <h1 className="mt-3 max-w-2xl text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-[-0.045em] leading-[1.05]">
        Recovery writing you can use the same night.
      </h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Guides, science in plain language, and practices for the 10 minutes an
        urge is loud. Written to be found — and to be useful.
      </p>

      <ul className="mt-14 grid gap-10 sm:grid-cols-2">
        {posts.map((post, i) => (
          <li key={post.slug}>
            <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
              <div className="overflow-hidden rounded-[24px] bg-night">
                <img
                  src={post.cover}
                  alt={post.coverAlt}
                  className="aspect-16/10 w-full object-cover outline-none transition-transform duration-500 group-hover:scale-[1.03]"
                  width={900}
                  height={560}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                {post.category} · {formatDate(post.date)} · {post.readMinutes} min
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

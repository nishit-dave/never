import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, getRelated, type PostBlock } from "@/data/posts";
import { asset, formatDate } from "@/lib/utils";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelated(post) };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    return {
      meta: [
        { title: `${post.title} | ${SITE.name}` },
        { name: "description", content: post.description },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post, related } = Route.useLoaderData();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    image: asset(post.cover),
  };

  return (
    <main className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="mx-auto max-w-3xl px-5 pt-12 sm:px-8 sm:pt-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            <Link to="/blog" className="hover:text-ink">
              Blog
            </Link>
            {" · "}
            {post.category} · {formatDate(post.date)} · {post.readMinutes} min
          </p>
          <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold tracking-[-0.04em] leading-[1.08]">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.description}</p>
        </header>
        <div className="mx-auto mt-10 max-w-4xl px-5 sm:px-8">
          <img
            src={asset(post.cover)}
            alt={post.coverAlt}
            className="aspect-16/8 w-full rounded-[28px] object-cover"
            width={1400}
            height={700}
          />
        </div>
        <div className="prose-never mx-auto mt-10 max-w-2xl px-5 text-[17px] leading-[1.7] text-ink-soft sm:px-8">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {related.length > 0 ? (
        <aside className="mx-auto mt-20 max-w-3xl px-5 sm:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink">Keep reading</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="block rounded-[20px] bg-surface p-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                    {p.category}
                  </p>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-ink">
                    {p.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </main>
  );
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 className="text-ink">{block.text}</h2>;
    case "h3":
      return <h3 className="text-ink">{block.text}</h3>;
    case "ul":
      return (
        <ul className="list-disc">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-accent pl-5 font-serif text-2xl leading-snug text-ink italic">
          {block.text}
          {block.cite ? (
            <footer className="mt-3 font-sans text-sm font-medium not-italic text-muted">
              — {block.cite}
            </footer>
          ) : null}
        </blockquote>
      );
    default:
      return null;
  }
}

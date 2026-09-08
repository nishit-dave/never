import { _ as Link, y as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as SITE, n as Route, o as formatDate } from "./_ssr/router-CbenLiBl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-8_Bjg9Hx.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPost() {
	const { post, related } = Route.useLoaderData();
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		author: {
			"@type": "Organization",
			name: SITE.name
		},
		publisher: {
			"@type": "Organization",
			name: SITE.name
		},
		image: post.cover
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mx-auto max-w-3xl px-5 pt-12 sm:px-8 sm:pt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold tracking-[0.16em] text-muted uppercase",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									className: "hover:text-ink",
									children: "Blog"
								}),
								" · ",
								post.category,
								" · ",
								formatDate(post.date),
								" · ",
								post.readMinutes,
								" min"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold tracking-[-0.04em] leading-[1.08]",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg leading-relaxed text-ink-soft",
							children: post.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-10 max-w-4xl px-5 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.cover,
						alt: post.coverAlt,
						className: "aspect-16/8 w-full rounded-[28px] object-cover",
						width: 1400,
						height: 700
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-never mx-auto mt-10 max-w-2xl px-5 text-[17px] leading-[1.7] text-ink-soft sm:px-8",
					children: post.blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { block }, i))
				})
			] }),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mx-auto mt-20 max-w-3xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold tracking-tight text-ink",
					children: "Keep reading"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "block rounded-[20px] bg-surface p-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold tracking-[0.14em] text-muted uppercase",
							children: p.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-semibold tracking-tight text-ink",
							children: p.title
						})]
					}) }, p.slug))
				})]
			}) : null
		]
	});
}
function Block({ block }) {
	switch (block.type) {
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text });
		case "h2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-ink",
			children: block.text
		});
		case "h3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-ink",
			children: block.text
		});
		case "ul": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "list-disc",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
		});
		case "ol": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "list-decimal",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
		});
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "my-8 border-l-2 border-accent pl-5 font-serif text-2xl leading-snug text-ink italic",
			children: [block.text, block.cite ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-3 font-sans text-sm font-medium not-italic text-muted",
				children: ["— ", block.cite]
			}) : null]
		});
		default: return null;
	}
}
//#endregion
export { BlogPost as component };

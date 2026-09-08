import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as POSTS, o as formatDate } from "./router-CbenLiBl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-e5S4VN0J.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	const posts = POSTS.slice().sort((a, b) => b.date.localeCompare(a.date));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-muted uppercase",
				children: "Field notes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-2xl text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-[-0.045em] leading-[1.05]",
				children: "Recovery writing you can use the same night."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-ink-soft",
				children: "Guides, science in plain language, and practices for the 10 minutes an urge is loud. Written to be found — and to be useful."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 grid gap-10 sm:grid-cols-2",
				children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: post.slug },
					className: "group block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[24px] bg-night",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.cover,
								alt: post.coverAlt,
								className: "aspect-16/10 w-full object-cover outline-none transition-transform duration-500 group-hover:scale-[1.03]",
								width: 900,
								height: 560
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase",
							children: [
								post.category,
								" · ",
								formatDate(post.date),
								" · ",
								post.readMinutes,
								" min"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-bold tracking-tight group-hover:text-accent",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink-soft",
							children: post.description
						})
					]
				}) }, post.slug))
			})
		]
	});
}
//#endregion
export { BlogIndex as component };

import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Table2, c as Shield, f as ChevronDown, i as Timer, l as Play, m as BookOpen, n as Wind, o as StickyNote, p as Brain, s as Square, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as cn, c as FEATURES, d as SITE, f as SOUNDSCAPES, g as TOOLS, h as STORIES, i as POSTS, l as INSIDE_SHOTS, m as STEPS, o as formatDate, p as STATS, r as buttonVariants, s as FAQ, u as JUGGLING } from "./router-CbenLiBl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-b44ujgWv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function makeNoise(ctx, seconds = 2) {
	const length = Math.floor(ctx.sampleRate * seconds);
	const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
	return buffer;
}
function brownNoise(ctx) {
	const length = ctx.sampleRate * 2;
	const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	let last = 0;
	for (let i = 0; i < length; i += 1) {
		const white = Math.random() * 2 - 1;
		last = (last + .02 * white) / 1.02;
		data[i] = last * 3.2;
	}
	return buffer;
}
function connectLoop(ctx, buffer, filterType, freq, gainValue) {
	const src = ctx.createBufferSource();
	src.buffer = buffer;
	src.loop = true;
	const filter = ctx.createBiquadFilter();
	filter.type = filterType;
	filter.frequency.value = freq;
	const gain = ctx.createGain();
	gain.gain.value = 0;
	src.connect(filter).connect(gain).connect(ctx.destination);
	src.start();
	gain.gain.linearRampToValueAtTime(gainValue, ctx.currentTime + .35);
	return {
		src,
		gain
	};
}
function startSoundscape(id, ctx) {
	const nodes = [];
	if (id === "ocean") {
		nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 380, .28));
		nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 180, .12));
	} else if (id === "rain") {
		nodes.push(connectLoop(ctx, makeNoise(ctx), "highpass", 1200, .08));
		nodes.push(connectLoop(ctx, makeNoise(ctx), "bandpass", 2400, .06));
	} else if (id === "campfire") {
		nodes.push(connectLoop(ctx, makeNoise(ctx, 1), "lowpass", 900, .1));
		nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 320, .16));
	} else {
		nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 500, .14));
		nodes.push(connectLoop(ctx, makeNoise(ctx), "bandpass", 1800, .03));
	}
	return { stop: () => {
		nodes.forEach((n) => {
			n.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + .2);
			window.setTimeout(() => {
				try {
					n.src.stop();
				} catch {}
			}, 240);
		});
	} };
}
var JUGGLING_ICONS = [
	Shield,
	Timer,
	StickyNote,
	Wind,
	MessageCircle,
	Table2
];
var TOOL_ICONS = [
	Wind,
	Brain,
	MessageCircle,
	Shield,
	BookOpen,
	Timer
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneApp, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureSplit, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tools, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Soundscapes, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inside, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogPreview, {})
	] });
}
function JsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "SoftwareApplication",
			name: SITE.name,
			applicationCategory: "HealthApplication",
			operatingSystem: "iOS",
			description: SITE.description,
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD"
			}
		}, {
			"@type": "FAQPage",
			mainEntity: FAQ.map((item) => ({
				"@type": "Question",
				name: item.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.a
				}
			}))
		}]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-6 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pb-4 lg:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.22em] text-muted uppercase",
						children: "Recovery, in one place"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-extrabold tracking-[-0.055em] text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[clamp(3.1rem,8vw,6.4rem)] leading-[0.9]",
								children: "QUIT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[clamp(3.1rem,8vw,6.4rem)] leading-[0.9]",
								children: "HEAL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[clamp(3.1rem,8vw,6.4rem)] leading-[0.9]",
								children: "GROW"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-serif text-[clamp(2rem,5vw,3.4rem)] leading-none text-accent italic",
						children: "with Never"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft",
						children: "Streak, analytics, breathing, soundscapes, and a coach that answers when the urge is loud. Private. No ads. Built for the night you almost give in."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#start",
							className: buttonVariants({ size: "lg" }),
							children: "Start a streak"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: buttonVariants({
								variant: "line",
								size: "lg"
							}),
							children: "Read the guides"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-[480px] lg:max-w-none lg:translate-y-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[32px] bg-night",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/app/hero-hand.jpg",
						alt: "Hand holding the NEVER app showing 19 days and 15 hours clean",
						className: "aspect-[4/5] w-full object-cover object-center outline-none sm:aspect-[3/4]",
						width: 990,
						height: 1400
					})
				})
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
			children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("px-5 py-8 sm:px-8", i % 2 === 1 ? "border-l border-line" : "", i > 1 ? "border-t border-line md:border-t-0" : "", i === 2 || i === 3 ? "md:border-l" : ""),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-4xl tracking-tight text-ink italic sm:text-5xl",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: stat.label
				})]
			}, stat.label))
		})
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 py-20 sm:px-8 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-[1.05]",
				children: "Tired of juggling six different apps?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-xl text-ink-soft",
				children: "A blocker for the sites. A timer for the streak. Notes for the shame. A breathing app you forget. A chatbot that lectures. A spreadsheet you never open."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6 sm:grid-cols-6 sm:gap-4",
			children: JUGGLING.map((app, i) => {
				const Icon = JUGGLING_ICONS[i] ?? Shield;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col items-center gap-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-16 place-items-center rounded-full bg-paper-2 text-ink shadow-[var(--shadow-border)] sm:size-[4.5rem]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.6
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-ink",
							children: app.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted",
							children: app.detail
						})
					]
				}, app.name);
			})
		})]
	});
}
function OneApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.18em] text-muted uppercase",
					children: "One app"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]",
					children: "Four rooms. One night you want to keep."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-ink-soft",
					children: "Home for the streak. Analytics for the pattern. Library for the minute the urge arrives. You stop hopping between tools that were never built for this."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: [
						"Days clean, relapses, streak, 30-day challenge",
						"Progress curve and locked milestones",
						"Breathing, meditate, chat, soundscapes, lessons",
						"Ask me when the night gets loud"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" }), item]
					}, item))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[32px] bg-night",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/app/screen-library.jpg",
					alt: "NEVER library with soundscapes, breathing, meditate and lessons",
					className: "w-full outline-none",
					width: 800,
					height: 1600
				})
			})]
		})
	});
}
function Steps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "start",
		className: "scroll-mt-24 bg-paper-2 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-xl text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]",
					children: "Getting started takes less than a minute"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-[28px] bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-3xl text-accent italic",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-xl font-bold tracking-tight",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: step.body
							})
						]
					}, step.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreakWidget, {})
			]
		})
	});
}
function StreakWidget() {
	const [iso, setIso] = (0, import_react.useState)(null);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem("never-quit-date");
		if (raw) {
			if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
				const ts = raw === (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) ? (/* @__PURE__ */ new Date()).toISOString() : (/* @__PURE__ */ new Date(`${raw}T00:00:00`)).toISOString();
				localStorage.setItem("never-quit-date", ts);
				setIso(ts);
			} else setIso(raw);
		}
		const t = window.setInterval(() => setNow(Date.now()), 3e4);
		return () => window.clearInterval(t);
	}, []);
	const start = iso ? Date.parse(iso) : NaN;
	const diff = Number.isFinite(start) ? Math.max(0, now - start) : 0;
	const days = Math.floor(diff / 864e5);
	const hours = Math.floor(diff % 864e5 / 36e5);
	function begin() {
		const ts = (/* @__PURE__ */ new Date()).toISOString();
		localStorage.setItem("never-quit-date", ts);
		setIso(ts);
	}
	function reset() {
		localStorage.removeItem("never-quit-date");
		setIso(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 rounded-[28px] bg-night p-6 text-night-fg sm:p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.18em] text-night-muted uppercase",
					children: "Start on the web"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-2xl font-bold tracking-tight",
					children: iso ? "You already started." : "Set a quit date in this browser."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-md text-sm text-night-muted",
					children: "Saved on this device only. Analytics and Ask me live in the iOS app — this is the first honest number."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-5xl tracking-tight italic tabular-nums",
					children: iso ? `${days}d ${hours}h` : "0d"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs tracking-[0.16em] text-night-muted uppercase",
					children: iso ? "clean" : "not started"
				})] }), iso ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: buttonVariants({
						variant: "night",
						size: "md"
					}),
					onClick: reset,
					children: "Reset"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: buttonVariants({
						variant: "night",
						size: "md"
					}),
					onClick: begin,
					children: "Start today"
				})]
			})]
		})
	});
}
function FeatureSplit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: FEATURES.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("px-5 py-20 sm:px-8 sm:py-24", feature.dark ? "bg-night text-night-fg" : "bg-paper text-ink"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2", i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-xs font-semibold tracking-[0.18em] uppercase", feature.dark ? "text-night-muted" : "text-muted"),
					children: feature.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.08]",
					children: feature.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-4 max-w-md leading-relaxed", feature.dark ? "text-night-muted" : "text-ink-soft"),
					children: feature.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2",
					children: feature.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" }), p]
					}, p))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[32px] bg-night",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: feature.screen,
					alt: feature.alt,
					className: "w-full outline-none",
					width: 800,
					height: 1600
				})
			})]
		})
	}, feature.id)) });
}
function Tools() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tools",
		className: "scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-xl text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]",
					children: "Urge tools, built into every night"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-ink-soft",
					children: "The library is not a content farm. It is the six things you actually reach for when the old habit starts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: TOOLS.map((tool, i) => {
						const Icon = TOOL_ICONS[i] ?? Wind;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[24px] bg-surface p-6 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 place-items-center rounded-full bg-paper-2 text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4",
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-bold tracking-tight",
									children: tool.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-ink-soft",
									children: tool.body
								})
							]
						}, tool.title);
					})
				})
			]
		})
	});
}
function Soundscapes() {
	const [playing, setPlaying] = (0, import_react.useState)(null);
	const handle = (0, import_react.useRef)(null);
	const ctxRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			handle.current?.stop();
			ctxRef.current?.close();
		};
	}, []);
	async function toggle(id) {
		if (playing === id) {
			handle.current?.stop();
			handle.current = null;
			setPlaying(null);
			return;
		}
		handle.current?.stop();
		const AudioCtx = window.AudioContext || window.webkitAudioContext;
		if (!ctxRef.current || ctxRef.current.state === "closed") ctxRef.current = new AudioCtx();
		if (ctxRef.current.state === "suspended") await ctxRef.current.resume();
		handle.current = startSoundscape(id, ctxRef.current);
		setPlaying(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-night px-5 py-20 text-night-fg sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]",
					children: "Soundscapes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-night-muted",
					children: "Relax and drift into a different room while the urge peaks. Tap to play a generated ambience in this browser — no account."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-3",
					children: SOUNDSCAPES.map((s) => {
						const on = playing === s.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void toggle(s.id),
							className: "group relative flex h-[4.75rem] w-full items-center overflow-hidden rounded-full text-left sm:h-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.src,
									alt: s.alt,
									className: "absolute inset-0 size-full object-cover outline-none transition-transform duration-500 group-hover:scale-[1.03]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-night/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex w-full items-center justify-between px-6 sm:px-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg font-bold tracking-tight sm:text-xl",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-full bg-night-fg text-night sm:size-11",
										children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {
											className: "size-3.5",
											fill: "currentColor"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
											className: "size-4 translate-x-px",
											fill: "currentColor"
										})
									})]
								})
							]
						}) }, s.id);
					})
				})
			]
		})
	});
}
function Stories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-2xl text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]",
				children: "Loved by people who used to juggle six apps"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: STORIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col justify-between rounded-[28px] bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-serif text-2xl leading-snug text-ink italic",
						children: [
							"“",
							s.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [" · ", s.meta]
						})]
					})]
				}, s.name))
			})]
		})
	});
}
function Inside() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inside",
		className: "scroll-mt-24 bg-paper-2 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]",
					children: "A closer look inside the app"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-ink-soft",
					children: "Home, analytics, library, Ask me. The same rooms every night, so you do not have to invent a system at 1 a.m."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex snap-x gap-4 overflow-x-auto pb-4",
					children: INSIDE_SHOTS.map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "w-[min(78vw,320px)] shrink-0 snap-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[28px] bg-night",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: shot.src,
								alt: shot.alt,
								className: "w-full outline-none",
								width: 640,
								height: 1280
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-3 text-sm font-medium text-ink",
							children: shot.label
						})]
					}, shot.label))
				})
			]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em]",
				children: "Still have questions?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-line border-y border-line",
				children: FAQ.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[17px] font-semibold tracking-tight",
						children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-5 text-[15px] leading-relaxed text-ink-soft",
						children: item.a
					})]
				}, item.q))
			})]
		})
	});
}
function BlogPreview() {
	const latest = POSTS.slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-paper-2 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em]",
						children: "Stories, science and field notes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-ink-soft",
						children: "Practical writing on urges, relapses, and the 90-day stretch — published so people looking for help can actually find it."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: cn(buttonVariants({
							variant: "line",
							size: "sm"
						}), "hidden sm:inline-flex"),
						children: "All posts"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: latest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
									width: 800,
									height: 500
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase",
								children: [
									post.category,
									" · ",
									formatDate(post.date)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-bold tracking-tight group-hover:text-accent",
								children: post.title
							})
						]
					}) }, post.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: cn(buttonVariants({
						variant: "line",
						size: "md"
					}), "mt-8 sm:hidden"),
					children: "All posts"
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };

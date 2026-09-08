import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Brain,
  ChevronDown,
  MessageCircle,
  Play,
  Shield,
  Square,
  StickyNote,
  Table2,
  Timer,
  Wind,
} from "lucide-react";
import {
  APP_STORE_URL,
  FAQ,
  FEATURES,
  JUGGLING,
  SITE,
  SOUNDSCAPES,
  STATS,
  STEPS,
  STORIES,
  TOOLS,
} from "@/data/site";
import { POSTS } from "@/data/posts";
import { buttonVariants } from "@/components/ui/button";
import { AppStoreBadge } from "@/components/app-store-badge";
import { cn, formatDate } from "@/lib/utils";
import { startSoundscape, type SoundId } from "@/lib/soundscapes";

const JUGGLING_ICONS = [Shield, Timer, StickyNote, Wind, MessageCircle, Table2];
const TOOL_ICONS = [Wind, Brain, MessageCircle, Shield, BookOpen, Timer];

export function HomePage() {
  return (
    <main>
      <JsonLd />
      <Hero />
      <Stats />
      <Problem />
      <OneApp />
      <Steps />
      <FeatureSplit />
      <Tools />
      <Soundscapes />
      <Stories />
      <Faq />
      <BlogPreview />
    </main>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: SITE.name,
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        description: SITE.description,
        url: APP_STORE_URL,
        downloadUrl: APP_STORE_URL,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function PhoneShot({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="mx-auto w-[176px] outline-none drop-shadow-[0_20px_40px_rgba(20,18,16,0.2)] sm:w-[230px] lg:w-[300px]"
    />
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 pt-10 pb-2 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-8">
        <div className="pb-4 lg:pb-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
            Recovery, in one place
          </p>
          <h1 className="mt-5 font-extrabold tracking-[-0.055em] text-ink">
            <span className="block text-[clamp(3.1rem,8vw,6.4rem)] leading-[0.9]">
              QUIT
            </span>
            <span className="block text-[clamp(3.1rem,8vw,6.4rem)] leading-[0.9]">
              HEAL
            </span>
            <span className="block text-[clamp(3.1rem,8vw,6.4rem)] leading-[0.9]">
              GROW
            </span>
          </h1>
          <p className="mt-3 font-serif text-[clamp(2rem,5vw,3.4rem)] leading-none text-accent italic">
            with Never
          </p>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
            Streak, analytics, breathing, soundscapes, and a coach that
            answers when the urge is loud. Private. No ads. Built for the night
            you almost give in.
          </p>
          <div className="mt-8">
            <AppStoreBadge height={52} />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none lg:translate-y-8">
          <img
            src="/app/hero-hand.webp"
            alt="Hand holding the NEVER app showing 19 days and 15 hours clean"
            width={849}
            height={1200}
            className="w-full outline-none [mask-image:linear-gradient(to_bottom,#000_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_70%,transparent_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-linear-to-t from-paper from-10% via-paper/80 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "px-5 py-8 sm:px-8",
              i % 2 === 1 ? "border-l border-line" : "",
              i > 1 ? "border-t border-line md:border-t-0" : "",
              i === 2 || i === 3 ? "md:border-l" : "",
            )}
          >
            <p className="font-serif text-4xl tracking-tight text-ink italic sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
          Tired of juggling six different apps?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft">
          A blocker for the sites. A timer for the streak. Notes for the shame.
          A breathing app you forget. A chatbot that lectures. A spreadsheet
          you never open.
        </p>
      </div>
      <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6 sm:grid-cols-6 sm:gap-4">
        {JUGGLING.map((app, i) => {
          const Icon = JUGGLING_ICONS[i] ?? Shield;
          return (
            <li key={app.name} className="flex flex-col items-center gap-2 text-center">
              <span className="grid size-16 place-items-center rounded-full bg-paper-2 text-ink shadow-[var(--shadow-border)] sm:size-[4.5rem]">
                <Icon className="size-5" strokeWidth={1.6} />
              </span>
              <span className="text-xs font-medium text-ink">{app.name}</span>
              <span className="text-[11px] text-muted">{app.detail}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function OneApp() {
  return (
    <section id="features" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            One app
          </p>
          <h2 className="mt-3 text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
            Four rooms. One night you want to keep.
          </h2>
          <p className="mt-4 text-ink-soft">
            Home for the streak. Analytics for the pattern. Library for the
            minute the urge arrives. You stop hopping between tools that were
            never built for this.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Days clean, relapses, streak, 30-day challenge",
              "Progress curve and locked milestones",
              "Breathing, meditate, chat, soundscapes, lessons",
              "Ask me when the night gets loud",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <PhoneShot
          src="/app/screen-library.webp"
          alt="NEVER library with soundscapes, breathing, meditate and lessons"
          width={640}
          height={1307}
        />
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-paper-2 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-xl text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
          Getting started takes less than a minute
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="rounded-[28px] bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8"
            >
              <p className="font-serif text-3xl text-accent italic">{step.n}</p>
              <h3 className="mt-4 text-xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeatureSplit() {
  return (
    <div>
      {FEATURES.map((feature, i) => (
        <section
          key={feature.id}
          className={cn(
            "px-5 py-20 sm:px-8 sm:py-24",
            feature.dark ? "bg-night text-night-fg" : "bg-paper text-ink",
          )}
        >
          <div
            className={cn(
              "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2",
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : "",
            )}
          >
            <div>
              <p
                className={cn(
                  "text-xs font-semibold tracking-[0.18em] uppercase",
                  feature.dark ? "text-night-muted" : "text-muted",
                )}
              >
                {feature.kicker}
              </p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.08]">
                {feature.title}
              </h2>
              <p
                className={cn(
                  "mt-4 max-w-md leading-relaxed",
                  feature.dark ? "text-night-muted" : "text-ink-soft",
                )}
              >
                {feature.body}
              </p>
              <ul className="mt-6 space-y-2">
                {feature.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <PhoneShot
              src={feature.screen}
              alt={feature.alt}
              width={640}
              height={1307}
            />
          </div>
        </section>
      ))}
    </div>
  );
}

function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-xl text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
          Urge tools, built into every night
        </h2>
        <p className="mt-4 max-w-lg text-ink-soft">
          The library is not a content farm. It is the six things you actually
          reach for when the old habit starts.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => {
            const Icon = TOOL_ICONS[i] ?? Wind;
            return (
              <li
                key={tool.title}
                className="rounded-[24px] bg-surface p-6 shadow-[var(--shadow-border)]"
              >
                <span className="grid size-10 place-items-center rounded-full bg-paper-2 text-ink">
                  <Icon className="size-4" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tool.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Soundscapes() {
  const [playing, setPlaying] = useState<SoundId | null>(null);
  const handle = useRef<{ stop: () => void } | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      handle.current?.stop();
      void ctxRef.current?.close();
    };
  }, []);

  async function toggle(id: SoundId) {
    if (playing === id) {
      handle.current?.stop();
      handle.current = null;
      setPlaying(null);
      return;
    }
    handle.current?.stop();
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!ctxRef.current || ctxRef.current.state === "closed") {
      ctxRef.current = new AudioCtx();
    }
    if (ctxRef.current.state === "suspended") await ctxRef.current.resume();
    handle.current = startSoundscape(id, ctxRef.current);
    setPlaying(id);
  }

  return (
    <section className="bg-night px-5 py-20 text-night-fg sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
          Soundscapes
        </h2>
        <p className="mt-3 max-w-lg text-night-muted">
          Relax and drift into a different room while the urge peaks. Tap to
          play a generated ambience in this browser — no account.
        </p>
        <ul className="mt-10 grid gap-3">
          {SOUNDSCAPES.map((s) => {
            const on = playing === s.id;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => void toggle(s.id)}
                  className="group relative flex h-[4.75rem] w-full items-center overflow-hidden rounded-full text-left sm:h-24"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="absolute inset-0 size-full object-cover outline-none transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-night/40" />
                  <span className="relative flex w-full items-center justify-between px-6 sm:px-8">
                    <span className="text-lg font-bold tracking-tight sm:text-xl">
                      {s.title}
                    </span>
                    <span className="grid size-10 place-items-center rounded-full bg-night-fg text-night sm:size-11">
                      {on ? (
                        <Square className="size-3.5" fill="currentColor" />
                      ) : (
                        <Play className="size-4 translate-x-px" fill="currentColor" />
                      )}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section id="stories" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
          Loved by people who used to juggle six apps
        </h2>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {STORIES.map((s) => (
            <li
              key={s.name}
              className="flex flex-col justify-between rounded-[28px] bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8"
            >
              <p className="font-serif text-2xl leading-snug text-ink italic">
                “{s.quote}”
              </p>
              <p className="mt-8 text-sm">
                <span className="font-semibold">{s.name}</span>
                <span className="text-muted"> · {s.meta}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em]">
          Still have questions?
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[17px] font-semibold tracking-tight">
                {item.q}
                <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const latest = POSTS.slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section className="border-t border-line bg-paper-2 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold tracking-[-0.04em]">
              Stories, science and field notes
            </h2>
            <p className="mt-3 max-w-lg text-ink-soft">
              Practical writing on urges, relapses, and the 90-day stretch —
              published so people looking for help can actually find it.
            </p>
          </div>
          <Link
            to="/blog"
            className={cn(
              buttonVariants({ variant: "line", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            All posts
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {latest.map((post) => (
            <li key={post.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group block"
              >
                <div className="overflow-hidden rounded-[24px] bg-night">
                  <img
                    src={post.cover}
                    alt={post.coverAlt}
                    className="aspect-16/10 w-full object-cover outline-none transition-transform duration-500 group-hover:scale-[1.03]"
                    width={800}
                    height={500}
                  />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  {post.category} · {formatDate(post.date)}
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight group-hover:text-accent">
                  {post.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/blog"
          className={cn(buttonVariants({ variant: "line", size: "md" }), "mt-8 sm:hidden")}
        >
          All posts
        </Link>
      </div>
    </section>
  );
}

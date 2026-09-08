import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: `How brain rewiring works | ${SITE.name}` },
      {
        name: "description",
        content:
          "What NEVER means by brain rewiring: cue, craving, click, crash — and how a 90-day challenge plus urge tools changes the loop.",
      },
    ],
  }),
  component: SciencePage,
});

function SciencePage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
        Notes
      </p>
      <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
        How rewiring works
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        NEVER’s home screen shows a “brain rewiring” bar. It is not a lab
        reading. It is a honest metaphor for a loop you can interrupt often
        enough that it stops feeling like a command.
      </p>

      <section className="prose-never mt-10 text-[17px] leading-[1.7] text-ink-soft">
        <h2 className="text-ink">The loop</h2>
        <p>
          Cue (night, loneliness, a private screen). Craving (narrow attention).
          Behavior (search, escalate). Crash (flatness, hiding). After enough
          repetitions the wanting arrives before a decision. That is learning,
          not a moral defect.
        </p>
        <h2 className="text-ink">What the 90 days are for</h2>
        <p>
          Unused pathways get less traffic. Used ones — stand up, breathe, log
          the night — get more. Time only helps if the behavior at the cue
          actually changes. A 90-day challenge exists because the new ending
          needs reps, not because a calendar is magic.
        </p>
        <h2 className="text-ink">What NEVER does with that</h2>
        <p>
          Count days and hours so the work is visible. Put breathing, soundscapes,
          and Ask me in front of the old tab. Keep a journal so the next similar
          hour has a map. Reset without a public spectacle if you slip.
        </p>
        <p>
          This is not medical care. If compulsive use is tangled with depression,
          trauma, or harm to a relationship, add a clinician. NEVER is the daily
          practice between sessions.
        </p>
        <p>
          Longer reads:{" "}
          <Link to="/blog/$slug" params={{ slug: "what-happens-to-your-brain-when-you-quit-porn" }}>
            what happens in the brain
          </Link>{" "}
          and{" "}
          <Link to="/blog/$slug" params={{ slug: "rewire-dopamine-after-compulsive-habits" }}>
            dopamine after the habit
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy policy | ${SITE.name}` },
      {
        name: "description",
        content:
          "How NEVER treats journal entries, streaks, and this website. No ads. No sale of personal recovery data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy</h1>
      <p className="mt-3 text-sm text-muted">Last updated September 8, 2026</p>
      <div className="prose-never mt-8 text-[17px] leading-[1.7] text-ink-soft">
        <p>
          NEVER is built for a private problem. This policy is short on purpose.
        </p>
        <h2 className="text-ink">This website</h2>
        <p>
          The public site (home, blog, science, legal pages) is a brochure. We
          do not run advertising networks on it. A quit date you start in the
          browser streak widget is stored in your browser’s local storage only.
          Soundscapes are generated on your device.
        </p>
        <h2 className="text-ink">The iOS app</h2>
        <p>
          Journal entries, streak, relapse count, and analytics are intended to
          live on your device. NEVER does not sell recovery data, does not put
          streaks on a public leaderboard, and does not show third-party ads
          inside the product.
        </p>
        <h2 className="text-ink">Ask me</h2>
        <p>
          Conversations with the in-app coach are for support in the moment.
          Do not put names, addresses, or anyone else’s private facts into chat.
        </p>
        <h2 className="text-ink">Contact</h2>
        <p>
          For a deletion request or a question about this policy, use the contact
          path published with the App Store listing when it is live.
        </p>
      </div>
    </main>
  );
}

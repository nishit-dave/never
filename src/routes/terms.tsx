import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of use | ${SITE.name}` },
      {
        name: "description",
        content:
          "Terms for using NEVER and this website. NEVER is a self-help tool, not medical care.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight">Terms</h1>
      <p className="mt-3 text-sm text-muted">Last updated September 8, 2026</p>
      <div className="prose-never mt-8 text-[17px] leading-[1.7] text-ink-soft">
        <p>
          By using this website or the NEVER app you agree to these terms.
        </p>
        <h2 className="text-ink">Not medical advice</h2>
        <p>
          NEVER is a self-help companion for people who want to reduce or quit
          compulsive porn use. It is not therapy, not a clinic, and not a
          crisis service. If you are in immediate danger or considering
          self-harm, contact local emergency services or a crisis line.
        </p>
        <h2 className="text-ink">Your responsibility</h2>
        <p>
          Recovery is yours. The app can count days, offer a protocol, and keep
          a journal. It cannot guarantee that you will not relapse or that
          benefits described in the blog will appear on a schedule.
        </p>
        <h2 className="text-ink">Acceptable use</h2>
        <p>
          Do not misuse the coach to seek sexual content. Do not attempt to
          break, scrape, or overload the service. Blog articles may be linked
          to; they may not be republished as your own.
        </p>
        <h2 className="text-ink">Changes</h2>
        <p>
          We may update the product and these terms. Continued use after an
          update is acceptance of the new terms.
        </p>
      </div>
    </main>
  );
}

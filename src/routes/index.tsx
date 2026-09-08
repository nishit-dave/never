import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Quit porn. Keep your streak.` },
      { name: "description", content: SITE.description },
    ],
  }),
  component: Home,
});

function Home() {
  return <HomePage />;
}

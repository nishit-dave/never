export const SITE = {
  name: "NEVER",
  tagline: "Break free. Stay free.",
  description:
    "NEVER is a private recovery app for quitting compulsive porn use. Track your streak, ride out urges, and rewire the habit — in one place.",
  keywords:
    "quit porn, porn addiction recovery, PMO recovery, streak tracker, urge surfing, nofap app, dopamine detox, never app",
};

export const APP_STORE_URL = "https://apps.apple.com/app/id6797847280";

export const NAV = [
  { label: "Features", href: "/#features" },
  { label: "Tools", href: "/#tools" },
  { label: "Stories", href: "/#stories" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const STATS = [
  { value: "4", label: "rooms in one app" },
  { value: "90d", label: "rewiring challenge" },
  { value: "10m", label: "urge protocol" },
  { value: "0", label: "ads or trackers" },
] as const;

export const JUGGLING = [
  { name: "Blocker", detail: "Site lists" },
  { name: "Timer", detail: "Streak days" },
  { name: "Notes", detail: "Relapse log" },
  { name: "Calm", detail: "Breathing" },
  { name: "Chat", detail: "Late-night advice" },
  { name: "Sheets", detail: "Mood chart" },
] as const;

export const FEATURES = [
  {
    id: "home",
    kicker: "Home",
    title: "See your days. Feel the control.",
    body: "A living streak, relapse count, and 30-day challenge sit on one quiet home screen. The orb is a reminder you opened NEVER instead of the old tab.",
    points: ["Days and hours clean", "Challenge progress 19/30", "One-tap reset without shame"],
    screen: "/app/screen-home.webp",
    alt: "NEVER home screen showing 19 days 15 hours clean",
    dark: true,
  },
  {
    id: "analytics",
    kicker: "Analytics",
    title: "Watch the pattern, not the shame.",
    body: "A days-clean ring, a progress curve, and locked milestones. You stop guessing whether you are getting better — the week is on the page.",
    points: ["Days clean ring", "Urge intensity over time", "Milestone path"],
    screen: "/app/screen-analytics.webp",
    alt: "NEVER analytics screen with a 12 day clean ring and progress chart",
    dark: false,
  },
  {
    id: "ask",
    kicker: "Ask me",
    title: "A coach that answers at 1 a.m.",
    body: "Tell it you have a strong urge. It does not lecture. It stays with you, names the feeling, and points you to breath, water, and a change of room.",
    points: ["Urge-first conversation", "No judgment, no streak shame", "Practical next moves"],
    screen: "/app/screen-chat.webp",
    alt: "NEVER Ask me chat helping with a strong urge",
    dark: true,
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Set a quit date",
    body: "Today is fine. The streak starts the moment you decide — not when you feel ready.",
  },
  {
    n: "02",
    title: "Open NEVER when the urge hits",
    body: "Breathing, soundscapes, chat, or a walk prompt. Ten minutes is usually enough for the peak to pass.",
  },
  {
    n: "03",
    title: "Keep the chain",
    body: "Watch the ring fill. If you reset, you start again without deleting the work you already did.",
  },
] as const;

export const TOOLS = [
  {
    title: "Breathing",
    body: "A paced inhale-hold-exhale that gives your hands something to do besides open a tab.",
  },
  {
    title: "Meditate",
    body: "Short sits designed for craving, not for a spa playlist. Sit with the wave until it breaks.",
  },
  {
    title: "Chat",
    body: "Ask me anything — a spike, a slip, a question about the next 24 hours.",
  },
  {
    title: "Benefits",
    body: "A plain list of what returns as the days add up: sleep, focus, eye contact, weekends.",
  },
  {
    title: "Lessons",
    body: "Short explainers on addiction, triggers, and how to actually change the loop.",
  },
  {
    title: "Reset",
    body: "Honest relapse logging. No fireworks, no public shame. Count it, learn, continue.",
  },
] as const;

export const SOUNDSCAPES = [
  {
    id: "campfire",
    title: "Campfire",
    src: "/images/sound-campfire.jpg",
    alt: "Close photograph of a campfire at night",
  },
  {
    id: "ocean",
    title: "Ocean",
    src: "/images/sound-ocean.jpg",
    alt: "Aerial photograph of a teal ocean swell",
  },
  {
    id: "rain",
    title: "Rain",
    src: "/images/sound-rain.jpg",
    alt: "Rain on a window at dusk",
  },
  {
    id: "forest",
    title: "Forest",
    src: "/images/sound-forest.jpg",
    alt: "Sunlit forest path with tall pines",
  },
] as const;

export const STORIES = [
  {
    quote:
      "I used to bounce between a blocker, a notes app, and a breathing timer. NEVER is the first thing that actually fits the moment the urge starts.",
    name: "Arjun",
    meta: "Day 47",
  },
  {
    quote:
      "Ask me at 1 a.m. is the part I did not expect. Naming the urge out loud made the next ten minutes possible.",
    name: "Maya",
    meta: "Day 12",
  },
  {
    quote:
      "I relapsed on day 19. The reset did not yell at me. I started the same evening. That is the only reason I am still here.",
    name: "Leo",
    meta: "Day 31 after one reset",
  },
] as const;

export const FAQ = [
  {
    q: "What is NEVER for?",
    a: "NEVER is a private companion for people who want to quit compulsive porn use and the PMO loop. It combines a streak, analytics, urge tools, soundscapes, and a late-night coach in one app.",
  },
  {
    q: "Is my data private?",
    a: "Your streak and recovery data stay on your device. NEVER does not run ads, does not sell data, and does not put your streak on a public leaderboard.",
  },
  {
    q: "What happens if I relapse?",
    a: "You tap Reset. The current streak goes to zero, the relapse count updates, and you continue. Recovery is not a perfect line — the app is built for that.",
  },
  {
    q: "Does this replace therapy?",
    a: "No. NEVER is a self-help tool, not medical care. If porn use is tied to depression, trauma, or relationship harm, talk to a clinician. Use NEVER as the daily practice between sessions.",
  },
  {
    q: "How does 'brain rewiring' work?",
    a: "Compulsive porn use trains a short loop: cue, craving, click, crash. Unused pathways weaken. NEVER tracks days, gives you something else to do at the cue, and shows the 90-day challenge so the new loop has time to stick. Read the science notes for the longer version.",
  },
  {
    q: "Is there a web version?",
    a: "This site is the public home and recovery blog. Soundscapes play in the browser. Streak, analytics, and Ask me live in the iOS app.",
  },
  {
    q: "iOS or Android?",
    a: "The product you see here is the iOS experience. An Android build is on the roadmap. Until then, use the soundscapes on this site when an urge hits.",
  },
] as const;

import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as notFound, _ as Link, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Menu, r as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-DY7m7EJm.js
var SITE = {
	name: "NEVER",
	tagline: "Break free. Stay free.",
	description: "NEVER is a private recovery app for quitting compulsive porn use. Track your streak, ride out urges, and rewire the habit — in one place.",
	keywords: "quit porn, porn addiction recovery, PMO recovery, streak tracker, urge surfing, nofap app, dopamine detox, never app"
};
var NAV = [
	{
		label: "Features",
		href: "/#features"
	},
	{
		label: "Tools",
		href: "/#tools"
	},
	{
		label: "Stories",
		href: "/#stories"
	},
	{
		label: "Blog",
		href: "/blog"
	},
	{
		label: "FAQ",
		href: "/#faq"
	}
];
var STATS = [
	{
		value: "4",
		label: "rooms in one app"
	},
	{
		value: "90d",
		label: "rewiring challenge"
	},
	{
		value: "10m",
		label: "urge protocol"
	},
	{
		value: "0",
		label: "ads or trackers"
	}
];
var JUGGLING = [
	{
		name: "Blocker",
		detail: "Site lists"
	},
	{
		name: "Timer",
		detail: "Streak days"
	},
	{
		name: "Notes",
		detail: "Relapse log"
	},
	{
		name: "Calm",
		detail: "Breathing"
	},
	{
		name: "Chat",
		detail: "Late-night advice"
	},
	{
		name: "Sheets",
		detail: "Mood chart"
	}
];
var FEATURES = [
	{
		id: "home",
		kicker: "Home",
		title: "See your days. Feel the control.",
		body: "A living streak, relapse count, and 30-day challenge sit on one quiet home screen. The orb is a reminder you opened NEVER instead of the old tab.",
		points: [
			"Days and hours clean",
			"Challenge progress 19/30",
			"One-tap reset without shame"
		],
		screen: "/app/screen-home.jpg",
		alt: "NEVER home screen showing 19 days 15 hours clean",
		dark: true
	},
	{
		id: "analytics",
		kicker: "Analytics",
		title: "Watch the pattern, not the shame.",
		body: "A days-clean ring, a progress curve, and locked milestones. You stop guessing whether you are getting better — the week is on the page.",
		points: [
			"Days clean ring",
			"Urge intensity over time",
			"Milestone path"
		],
		screen: "/app/screen-analytics.jpg",
		alt: "NEVER analytics screen with a 12 day clean ring and progress chart",
		dark: false
	},
	{
		id: "ask",
		kicker: "Ask me",
		title: "A coach that answers at 1 a.m.",
		body: "Tell it you have a strong urge. It does not lecture. It stays with you, names the feeling, and points you to breath, water, and a change of room.",
		points: [
			"Urge-first conversation",
			"No judgment, no streak shame",
			"Practical next moves"
		],
		screen: "/app/screen-chat.jpg",
		alt: "NEVER Ask me chat helping with a strong urge",
		dark: true
	}
];
var STEPS = [
	{
		n: "01",
		title: "Set a quit date",
		body: "Today is fine. The streak starts the moment you decide — not when you feel ready."
	},
	{
		n: "02",
		title: "Open NEVER when the urge hits",
		body: "Breathing, soundscapes, chat, or a walk prompt. Ten minutes is usually enough for the peak to pass."
	},
	{
		n: "03",
		title: "Keep the chain",
		body: "Watch the ring fill. If you reset, you start again without deleting the work you already did."
	}
];
var TOOLS = [
	{
		title: "Breathing",
		body: "A paced inhale-hold-exhale that gives your hands something to do besides open a tab."
	},
	{
		title: "Meditate",
		body: "Short sits designed for craving, not for a spa playlist. Sit with the wave until it breaks."
	},
	{
		title: "Chat",
		body: "Ask me anything — a spike, a slip, a question about the next 24 hours."
	},
	{
		title: "Benefits",
		body: "A plain list of what returns as the days add up: sleep, focus, eye contact, weekends."
	},
	{
		title: "Lessons",
		body: "Short explainers on addiction, triggers, and how to actually change the loop."
	},
	{
		title: "Reset",
		body: "Honest relapse logging. No fireworks, no public shame. Count it, learn, continue."
	}
];
var SOUNDSCAPES = [
	{
		id: "campfire",
		title: "Campfire",
		src: "/images/sound-campfire.jpg",
		alt: "Close photograph of a campfire at night"
	},
	{
		id: "ocean",
		title: "Ocean",
		src: "/images/sound-ocean.jpg",
		alt: "Aerial photograph of a teal ocean swell"
	},
	{
		id: "rain",
		title: "Rain",
		src: "/images/sound-rain.jpg",
		alt: "Rain on a window at dusk"
	},
	{
		id: "forest",
		title: "Forest",
		src: "/images/sound-forest.jpg",
		alt: "Sunlit forest path with tall pines"
	}
];
var STORIES = [
	{
		quote: "I used to bounce between a blocker, a notes app, and a breathing timer. NEVER is the first thing that actually fits the moment the urge starts.",
		name: "Arjun",
		meta: "Day 47"
	},
	{
		quote: "Ask me at 1 a.m. is the part I did not expect. Naming the urge out loud made the next ten minutes possible.",
		name: "Maya",
		meta: "Day 12"
	},
	{
		quote: "I relapsed on day 19. The reset did not yell at me. I started the same evening. That is the only reason I am still here.",
		name: "Leo",
		meta: "Day 31 after one reset"
	}
];
var FAQ = [
	{
		q: "What is NEVER for?",
		a: "NEVER is a private companion for people who want to quit compulsive porn use and the PMO loop. It combines a streak, analytics, urge tools, soundscapes, and a late-night coach in one app."
	},
	{
		q: "Is my data private?",
		a: "Your streak and recovery data stay on your device. NEVER does not run ads, does not sell data, and does not put your streak on a public leaderboard."
	},
	{
		q: "What happens if I relapse?",
		a: "You tap Reset. The current streak goes to zero, the relapse count updates, and you continue. Recovery is not a perfect line — the app is built for that."
	},
	{
		q: "Does this replace therapy?",
		a: "No. NEVER is a self-help tool, not medical care. If porn use is tied to depression, trauma, or relationship harm, talk to a clinician. Use NEVER as the daily practice between sessions."
	},
	{
		q: "How does 'brain rewiring' work?",
		a: "Compulsive porn use trains a short loop: cue, craving, click, crash. Unused pathways weaken. NEVER tracks days, gives you something else to do at the cue, and shows the 90-day challenge so the new loop has time to stick. Read the science notes for the longer version."
	},
	{
		q: "Is there a web version?",
		a: "This site is the public home, blog, and a small companion: you can start a streak in the browser and play soundscapes when an urge hits. Analytics and Ask me live in the iOS app."
	},
	{
		q: "iOS or Android?",
		a: "The product you see here is the iOS experience. An Android build is on the roadmap. Until then, use the web streak and soundscapes on this site."
	}
];
var INSIDE_SHOTS = [
	{
		src: "/app/screen-home.jpg",
		alt: "NEVER home with 19 days 15 hours on the screen",
		label: "Home"
	},
	{
		src: "/app/screen-analytics.jpg",
		alt: "Analytics with days clean ring and progress chart",
		label: "Analytics"
	},
	{
		src: "/app/screen-library.jpg",
		alt: "Library with chat, benefits, meditate, breathing and soundscapes",
		label: "Library"
	},
	{
		src: "/app/screen-chat.jpg",
		alt: "Ask me conversation during a strong urge",
		label: "Ask me"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/posts-DNqhudcw.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatDate(iso) {
	return (/* @__PURE__ */ new Date(`${iso}T00:00:00`)).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
var POSTS = [
	{
		slug: "quit-porn-addiction-30-day-plan",
		title: "How to quit porn addiction: a practical 30-day plan",
		description: "A day-by-day structure for quitting compulsive porn use — environment, urge protocol, journaling, and what to do if you slip in the first month.",
		date: "2026-07-14",
		category: "Guide",
		readMinutes: 9,
		cover: "/images/blog-30-day.jpg",
		coverAlt: "Empty road at first light, a quiet start",
		related: [
			"urge-surfing-10-minutes",
			"benefits-of-quitting-porn-7-30-90-days",
			"relapse-is-not-failure"
		],
		blocks: [
			{
				type: "p",
				text: "Most people do not fail at quitting porn because they lack willpower. They fail because the first two weeks have no plan for the 20 minutes after dinner, the unlocked phone in bed, and the night they feel bored and empty. This is a 30-day structure you can actually run."
			},
			{
				type: "p",
				text: "NEVER was built around this month: a streak you can see, a 30-day challenge, a journal, and tools that open faster than the old tab. Use the app, a notebook, or both. The sequence matters more than the brand."
			},
			{
				type: "h2",
				text: "Days 1–3: make the old path longer"
			},
			{
				type: "p",
				text: "Do not start with a 90-day speech. Start by changing the room. Compulsive porn use is a designed loop: private screen, one-hand posture, late hour, easy search. Break the design."
			},
			{
				type: "ul",
				items: [
					"Sleep with the phone outside the bedroom, or in grayscale, or in a drawer that takes two hands.",
					"Move the computer to a shared room if you can. Close the door less.",
					"Write your quit date on paper. In NEVER, that date becomes the days-clean ring.",
					"Tell one person, or do not — privacy is fine — but tell the journal. Day 1 should exist in writing."
				]
			},
			{
				type: "h2",
				text: "Days 4–10: install the 10-minute protocol"
			},
			{
				type: "p",
				text: "Urges in week one are loud. They are also short. The peak of a craving is usually under ten minutes if you do not feed it. You need a protocol you can start in 20 seconds, not a motivational video."
			},
			{
				type: "ol",
				items: [
					"Stand up. Leave the chair or the bed. The posture is part of the cue.",
					"Open NEVER (or a notes app) and name it: “urge, evening, bored.” Naming cuts the trance.",
					"Four rounds of slow breathing, or a soundscape — campfire, rain, ocean — loud enough to occupy the room.",
					"Cold water on the face or a short walk on the same block. Do not negotiate a “quick look.”",
					"When the peak drops, write one line in the journal. That line is evidence for tomorrow."
				]
			},
			{
				type: "p",
				text: "Read the full urge-surfing piece if you want the body-level version of this. The point in week one is repetition, not insight."
			},
			{
				type: "h2",
				text: "Days 11–21: replace the slot, not just the content"
			},
			{
				type: "p",
				text: "If you only “stop watching,” the evening still has a hole in it. The brain will fill a hole. Put something physical and slightly inconvenient in that slot: a walk, a shower, lifting, a call, cooking, a chapter of a paper book. Slightly inconvenient is a feature — it cannot be done in the same posture as the old habit."
			},
			{
				type: "p",
				text: "This is also when people start bargaining: “I will allow it on Saturday.” Bargains usually collapse by Thursday. If you need a rule, make it boring: no porn, no “just images,” no exceptions for 30 days. Review on day 31, not at 12:40 a.m."
			},
			{
				type: "h2",
				text: "Days 22–30: look at the data"
			},
			{
				type: "p",
				text: "By the fourth week the novelty of quitting is gone. This is where analytics help. NEVER’s progress curve is not there to look pretty — it shows whether evenings are getting quieter. If the same hour keeps lighting up, change that hour, not your identity."
			},
			{
				type: "ul",
				items: [
					"Read your journal. Circle the entries where you almost relapsed and did not.",
					"Keep the 30-day challenge visible. A fraction like 22/30 is easier to defend than a vague “I’m trying.”",
					"If you slipped, do not wait until Monday. Reset the same night. The month is not voided."
				]
			},
			{
				type: "h2",
				text: "What 30 days is not"
			},
			{
				type: "p",
				text: "Thirty days is not a cure and it is not a personality transplant. It is long enough for sleep to improve, for the automatic click to slow down, and for you to collect proof that you can ride a wave. After that, you run the same protocol with less drama. The 90-day challenge in NEVER exists because the loop keeps thinning if you keep not feeding it."
			},
			{
				type: "quote",
				text: "Healing begins the moment you stop giving the old path a vote.",
				cite: "NEVER home screen"
			}
		]
	},
	{
		slug: "what-happens-to-your-brain-when-you-quit-porn",
		title: "What happens to your brain when you stop watching porn",
		description: "A plain-language look at dopamine, habituation, and why the first weeks of quitting porn feel worse before they feel better.",
		date: "2026-07-28",
		category: "Science",
		readMinutes: 8,
		cover: "/images/blog-brain.jpg",
		coverAlt: "Abstract neural filaments in indigo light",
		related: [
			"rewire-dopamine-after-compulsive-habits",
			"benefits-of-quitting-porn-7-30-90-days",
			"quit-porn-addiction-30-day-plan"
		],
		blocks: [
			{
				type: "p",
				text: "Porn is not magic and quitting is not magic either. The useful science is simpler than forum mythology: the brain learns what paid off quickly, then asks for more of the same at a higher dose. When you stop, it complains. Then, if you keep stopping, it updates."
			},
			{
				type: "h2",
				text: "The loop, not the moral"
			},
			{
				type: "p",
				text: "A cue (night, loneliness, a notification), a craving (narrow attention, restlessness), a behavior (search, escalate, finish), a crash (flatness, hiding the tab). Dopamine is involved in the wanting, not only in the pleasure. After enough repetitions the wanting shows up before you have decided anything."
			},
			{
				type: "p",
				text: "That is why “I will just use my willpower tonight” often fails. The sequence has already started in the body. Tools that interrupt the sequence — standing up, breathing, opening NEVER — work because they insert time into a loop that was built to skip time."
			},
			{
				type: "h2",
				text: "Why week one can feel worse"
			},
			{
				type: "p",
				text: "If the brain has been getting a fast, intense reward in the same posture every night, ordinary life looks under-lit. Food is duller. A conversation is effort. This is habituation plus a missing ritual, not proof that you “need” porn to function. It is the same pattern people describe when they drop other high-intensity loops."
			},
			{
				type: "ul",
				items: [
					"Sleep may fragment for a few nights, then often lengthens.",
					"Irritability is common. Treat it as withdrawal-shaped, not as a personality verdict.",
					"Dreams can get loud. That is the brain still running the cue without the old ending."
				]
			},
			{
				type: "h2",
				text: "What “rewiring” actually means"
			},
			{
				type: "p",
				text: "NEVER shows a “brain rewiring” bar because the metaphor is honest enough: unused synapses in a habit loop get less traffic. Used ones — walk, journal, breathe, go to bed — get more. You do not grow a new brain. You stop paving the old road."
			},
			{
				type: "p",
				text: "Time helps only if the behavior actually changes. Ninety idle days of “trying” with nightly exceptions do not thin the pathway. Ninety days of opening a different tool at the cue do. That is why the home screen counts hours, not just slogans."
			},
			{
				type: "h2",
				text: "What the research does and does not say"
			},
			{
				type: "p",
				text: "There is no single MRI that proves “porn addiction” for every user, and this site will not pretend otherwise. There is a large clinical and self-report literature on compulsive sexual behavior, tolerance, failed attempts to cut down, and life interference — the same shape as other behavioral addictions. If your use fits that shape, you do not need a scan to justify quitting."
			},
			{
				type: "p",
				text: "NEVER is not a clinic. If use is tied to depression, trauma, or relationship harm, bring a professional in. The app is the daily practice: cue, different response, record."
			}
		]
	},
	{
		slug: "urge-surfing-10-minutes",
		title: "Urge surfing: how to ride out a craving in 10 minutes",
		description: "A body-first method for porn urges: name the wave, stay out of the story, and wait for the peak to fall without opening a tab.",
		date: "2026-08-04",
		category: "Practice",
		readMinutes: 7,
		cover: "/images/blog-urge.jpg",
		coverAlt: "Ocean wave cresting toward the camera",
		related: [
			"breathing-techniques-for-urges",
			"quit-porn-addiction-30-day-plan",
			"why-journaling-helps-porn-recovery"
		],
		blocks: [
			{
				type: "p",
				text: "An urge is a wave. It has a rise, a peak, and a fall. The mistake is to treat it as a command that must be obeyed or as a monster that must be smashed. Both keep you in a fight. Surfing is a third option: stay on the board until the water goes quiet."
			},
			{
				type: "h2",
				text: "The 10-minute shape"
			},
			{
				type: "ol",
				items: [
					"Change posture in the first 10 seconds. Sit up, stand, leave the bed. The old posture is the on-ramp.",
					"Name it out loud or in NEVER’s chat: “I have a strong urge right now.” Naming moves it from weather inside you to an event you can watch.",
					"Find the body, not the story. Heat in the chest, restlessness in the hands, a swallow. Stories (“I already ruined the week”) feed the wave.",
					"Breathe slower than you want to. In for four, out for six, a few times. Or start a soundscape so the room has another rhythm.",
					"Do not promise forever. Promise ten minutes. When the peak drops, you can still choose. Most people find the choice is easier after the peak."
				]
			},
			{
				type: "h2",
				text: "What not to do"
			},
			{
				type: "ul",
				items: [
					"Do not “just check if anything new is up.” Checking is the behavior.",
					"Do not argue with the urge as if it were a debate team. It does not listen.",
					"Do not lie down in the same light, with the same hand, “only for a minute.”"
				]
			},
			{
				type: "h2",
				text: "Why it works"
			},
			{
				type: "p",
				text: "Cravings are time-limited physiological events. If you do not add fuel — images, search, fantasy with a destination — the autonomic spike falls. Each time you ride one out, you teach the loop a new ending. That is the opposite of white-knuckling, which is still a fight with the same object."
			},
			{
				type: "p",
				text: "NEVER’s Ask me flow is built for this minute. You say you have a strong urge. It stays with you, suggests breath and a change of scenery, and does not turn the streak into a lecture. The streak is for later. The wave is for now."
			},
			{
				type: "quote",
				text: "You do not have to win the night. You have to not click for ten minutes."
			}
		]
	},
	{
		slug: "relapse-is-not-failure",
		title: "Relapse is not failure: how to restart without shame",
		description: "What to do in the hour after a porn relapse — reset the streak, keep the journal, and stop the spiral that turns one slip into a week.",
		date: "2026-08-11",
		category: "Practice",
		readMinutes: 6,
		cover: "/images/blog-relapse.jpg",
		coverAlt: "Kintsugi ceramic bowl repaired with gold",
		related: [
			"urge-surfing-10-minutes",
			"why-journaling-helps-porn-recovery",
			"quit-porn-addiction-30-day-plan"
		],
		blocks: [
			{
				type: "p",
				text: "A relapse is data. It is not a verdict on your character and it is not a reason to binge until Monday. The most expensive part of a slip is usually the story you tell in the next two hours."
			},
			{
				type: "h2",
				text: "The hour after"
			},
			{
				type: "ol",
				items: [
					"Close the tab. Do not “finish properly.” The extra twenty minutes are optional.",
					"Wash your face, drink water, change the room. Get the body out of the posture.",
					"Open NEVER and tap Reset. Watch the number move. That honesty is the restart.",
					"Write four lines: what the cue was, what you told yourself, what you did, what you will do at the next same hour.",
					"Do one ordinary thing — dishes, a walk, a message to a friend about anything else. Re-enter the day."
				]
			},
			{
				type: "h2",
				text: "Why shame makes it worse"
			},
			{
				type: "p",
				text: "Shame says you are the kind of person who fails, so the rules no longer apply. That story is very good at producing a second session. Self-respect says you are a person who logs the miss and continues. NEVER’s reset is deliberately quiet. No public scoreboard, no red fireworks. Count it, keep the old journal, start the clock."
			},
			{
				type: "h2",
				text: "What to learn, specifically"
			},
			{
				type: "ul",
				items: [
					"Time of day. If 11 p.m. in bed is the pattern, the fix is the bedtime, not a new mantra.",
					"The first click. Was it a “harmless” image, a private browser, a person you follow?",
					"The bargain. “I already had a bad day” is a cue, not an analysis."
				]
			},
			{
				type: "p",
				text: "People who last are not people who never reset. They are people who make the gap between slip and restart boringly small."
			}
		]
	},
	{
		slug: "benefits-of-quitting-porn-7-30-90-days",
		title: "Benefits of quitting porn after 7, 30, and 90 days",
		description: "What actually tends to change when you stop compulsive porn use — sleep, attention, mood, and sex — at one week, one month, and three months.",
		date: "2026-08-18",
		category: "Guide",
		readMinutes: 8,
		cover: "/images/blog-benefits.jpg",
		coverAlt: "Three small plants in a row on a morning windowsill",
		related: [
			"what-happens-to-your-brain-when-you-quit-porn",
			"rewire-dopamine-after-compulsive-habits",
			"quit-porn-addiction-30-day-plan"
		],
		blocks: [
			{
				type: "p",
				text: "Forum timelines promise superpowers on day 8. Real change is quieter and uneven. Here is a conservative map of what many people notice, without the cartoon. Your week one may look like someone else’s week three."
			},
			{
				type: "h2",
				text: "After 7 days"
			},
			{
				type: "ul",
				items: [
					"Sleep often improves once the late-night session is gone, even if dreams get vivid.",
					"The automatic reach for the phone at a dead moment becomes visible. Visibility is progress.",
					"Mood can dip. That is the missing ritual, not proof the experiment failed.",
					"A little more morning time. The binge had been stealing the ends of days."
				]
			},
			{
				type: "p",
				text: "NEVER’s home screen is useful here because seven days still feels fragile. Seeing 7d 3h is more honest than “I think I’m doing better.”"
			},
			{
				type: "h2",
				text: "After 30 days"
			},
			{
				type: "ul",
				items: [
					"Attention for work or study usually lengthens. The mind is less trained to jump to a private tab.",
					"Evenings have a shape again. People report actually getting bored — which is a skill, not a bug.",
					"If you are partnered, some people notice more interest in the real person and less in a catalogue of types. Some notice a dry spell first. Both can be true.",
					"Shame about hiding tabs starts to loosen because there is less to hide."
				]
			},
			{
				type: "h2",
				text: "After 90 days"
			},
			{
				type: "p",
				text: "Ninety days is long enough for the new evening to feel like the default some of the time. Urges still arrive. They are less like commands and more like weather. The people who keep going are usually not white-knuckling every night — they have a protocol and a record."
			},
			{
				type: "ul",
				items: [
					"The “I need it to sleep / finish / feel anything” belief is easier to see as a habit, not a fact.",
					"Confidence is less about a streak number and more about knowing you can surf a Friday night.",
					"If sex was entangled with porn, this is often when you find out what you actually like with a person in the room."
				]
			},
			{
				type: "p",
				text: "NONE of this is a medical guarantee. NEVER’s Benefits library exists to remind you of the direction of travel on a day when the urge is loud and the benefits feel theoretical."
			}
		]
	},
	{
		slug: "rewire-dopamine-after-compulsive-habits",
		title: "How to rewire dopamine after compulsive habits",
		description: "A practical take on dopamine after quitting porn: why ordinary life feels flat, and how to rebuild reward without chasing intensity.",
		date: "2026-08-25",
		category: "Science",
		readMinutes: 8,
		cover: "/images/blog-dopamine.jpg",
		coverAlt: "River water flowing over dark stones",
		related: [
			"what-happens-to-your-brain-when-you-quit-porn",
			"benefits-of-quitting-porn-7-30-90-days",
			"breathing-techniques-for-urges"
		],
		blocks: [
			{
				type: "p",
				text: "“Dopamine detox” is a sloppy phrase that accidentally points at a real problem: if your evenings were built around a high-intensity private reward, a walk and a meal will feel underpowered for a while. The fix is not to starve every pleasure. It is to stop using one supernormal stimulus as the answer to every state."
			},
			{
				type: "h2",
				text: "Stop stacking intensity"
			},
			{
				type: "p",
				text: "Porn, short video, and late caffeine often travel together. If you quit porn and double the other two, the nervous system never gets a quieter baseline. Pick an evening that is slightly boring on purpose: dimmer lights, no second screen in bed, a book or a stretch that takes twenty minutes."
			},
			{
				type: "h2",
				text: "Put effort back into reward"
			},
			{
				type: "p",
				text: "The brain also pays dopamine for effort that completes. A finished workout, a cooked meal, a message you actually sent, a page of a journal. NEVER’s journal and challenge bar are small versions of this — they turn “I did not click” into a completed act you can see."
			},
			{
				type: "ul",
				items: [
					"Move daily, even 15 minutes. Blood and mood both change.",
					"Keep one social contact that is not a comment thread.",
					"Protect sleep like it is part of the protocol, because it is.",
					"Let music, food, and daylight be allowed. Numbing everything is not rewiring."
				]
			},
			{
				type: "h2",
				text: "What the bar in the app is counting"
			},
			{
				type: "p",
				text: "The “brain rewiring” meter on NEVER’s home screen is a progress metaphor tied to your streak and challenge, not a lab reading. Use it as a reminder that the pathway changes with reps. Do not wait for a feeling of being “cured” before you keep the protocol. Feelings lag behind behavior."
			}
		]
	},
	{
		slug: "why-journaling-helps-porn-recovery",
		title: "Why journaling helps you beat porn addiction",
		description: "How a dated recovery journal turns urges, near-misses, and resets into a map you can use the next night — and how NEVER’s journal is built for that.",
		date: "2026-09-01",
		category: "Practice",
		readMinutes: 6,
		cover: "/images/blog-journal.jpg",
		coverAlt: "Open leather journal and fountain pen on a wooden desk",
		related: [
			"relapse-is-not-failure",
			"urge-surfing-10-minutes",
			"quit-porn-addiction-30-day-plan"
		],
		blocks: [
			{
				type: "p",
				text: "Memory is a terrible historian of urges. By morning, last night is either a heroic story or a shame story. A dated paragraph is neither. It is a log: what showed up, what you did, whether it worked."
			},
			{
				type: "h2",
				text: "What to write when you do not like writing"
			},
			{
				type: "p",
				text: "Four lines beat a blank page. Cue. Body. Action. Next time. Example: “Evening, scrolling in bed. Restless hands. Opened NEVER, rain soundscape, walked to the kitchen. Tomorrow phone charges in the kitchen.”"
			},
			{
				type: "p",
				text: "If you relapsed, write it the same night. Delayed logs get edited by shame. NEVER’s journal is a list of dated cards with a delete control because some entries are private even from a future mood — but default to keeping them. The almost-relapse entries are the most useful ones."
			},
			{
				type: "h2",
				text: "Why it changes the next urge"
			},
			{
				type: "p",
				text: "A journal creates a witness. The part of you that was about to go on autopilot has to narrate. Narrating is slower than clicking. Over weeks you will also see repeats: Sunday evenings, alcohol, a particular account. Analytics can show a curve; the journal tells you the plot."
			},
			{
				type: "quote",
				text: "Today was difficult, but I didn’t give up. I felt an urge in the evening, so I went for a walk instead.",
				cite: "A NEVER journal entry"
			},
			{
				type: "p",
				text: "That sentence is not literature. It is a brick. Stack enough of them and the identity “I am someone who walks instead” has evidence."
			}
		]
	},
	{
		slug: "breathing-techniques-for-urges",
		title: "Breathing and meditation for sudden porn urges",
		description: "Simple breathing and short sits you can use when a porn urge spikes — including how NEVER’s Breathing and Meditate tools are meant to be used.",
		date: "2026-09-06",
		category: "Practice",
		readMinutes: 6,
		cover: "/images/blog-breathe.jpg",
		coverAlt: "Misty alpine lake at dawn, still water",
		related: [
			"urge-surfing-10-minutes",
			"rewire-dopamine-after-compulsive-habits",
			"why-journaling-helps-porn-recovery"
		],
		blocks: [
			{
				type: "p",
				text: "Breathing will not “cure” compulsive porn use. It will occupy the next ninety seconds so the wave can pass. That is enough. The goal is not a blissful sit. The goal is to not click while your heart is loud."
			},
			{
				type: "h2",
				text: "A 2-minute pattern"
			},
			{
				type: "ol",
				items: [
					"Inhale through the nose for 4.",
					"Hold for 2.",
					"Exhale through the mouth for 6.",
					"Repeat for eight rounds. Count on your fingers so the mind has a job."
				]
			},
			{
				type: "p",
				text: "Longer exhales nudge the nervous system down. If 4-2-6 feels forced, slow whatever you are already doing by half. NEVER’s Breathing tool is this idea as a session, so you do not have to invent a count at 1 a.m."
			},
			{
				type: "h2",
				text: "Meditation without the spa"
			},
			{
				type: "p",
				text: "A recovery sit is shorter and less precious than a lifestyle sit. Three to eight minutes. Eyes open is allowed. You are watching the urge the way you would watch weather. When the mind offers a search term, you label it “thought” and return to the breath or to the soundscape."
			},
			{
				type: "p",
				text: "Pair it with rain, ocean, campfire, or forest if silence makes the craving louder. Sound is not cheating. It is another rail for attention."
			},
			{
				type: "h2",
				text: "When breathing is not the tool"
			},
			{
				type: "p",
				text: "If you are in a trance already — hand on the phone, browser half open — stand up first. Breath in the old posture is too easy to abandon. Change the room, then breathe. If panic or despair is bigger than an urge, that is a different problem: call someone, or professional help, not only a timer."
			}
		]
	}
];
function getPost(slug) {
	return POSTS.find((p) => p.slug === slug);
}
function getRelated(post) {
	return post.related.map((slug) => getPost(slug)).filter((p) => Boolean(p));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CbenLiBl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-semibold transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent", {
	variants: {
		variant: {
			primary: "bg-ink text-paper hover:bg-ink-soft shadow-[var(--shadow-border)]",
			accent: "bg-accent text-accent-fg hover:bg-accent-hover",
			ghost: "bg-transparent text-ink hover:bg-paper-2",
			night: "bg-night-fg text-night hover:bg-paper",
			line: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
		},
		size: {
			sm: "h-10 px-4 text-sm rounded-[12px]",
			md: "h-12 px-5 text-[15px] rounded-[14px]",
			lg: "h-14 px-6 text-base rounded-[16px]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 transition-[background-color,box-shadow] duration-200", scrolled || open ? "bg-paper/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					"aria-label": "NEVER home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/app/logo-mark.png",
						alt: "",
						width: 32,
						height: 32,
						className: "size-8 rounded-[9px] object-cover outline-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[17px] font-extrabold tracking-[0.18em] text-ink",
						children: SITE.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-[15px] font-medium text-ink-soft transition-colors duration-150 hover:text-ink",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#start",
						className: buttonVariants({ size: "sm" }),
						children: "Start a streak"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 place-items-center rounded-[12px] text-ink lg:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-paper px-5 py-6 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "rounded-[14px] px-3 py-3 text-base font-medium text-ink hover:bg-paper-2",
					onClick: () => setOpen(false),
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#start",
					className: cn(buttonVariants({ size: "lg" }), "mt-4"),
					onClick: () => setOpen(false),
					children: "Start a streak"
				})]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2.5 text-[17px] font-extrabold tracking-[0.18em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/app/logo-mark.png",
							alt: "",
							width: 28,
							height: 28,
							className: "size-7 rounded-[8px] object-cover outline-none"
						}), "NEVER"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-[18rem] text-sm leading-relaxed text-muted",
						children: "A private companion for quitting compulsive porn use. Streak, urge tools, coach."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.14em] text-muted uppercase",
					children: "Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#features",
							className: "text-ink-soft hover:text-ink",
							children: "Features"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#tools",
							className: "text-ink-soft hover:text-ink",
							children: "Tools"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#start",
							className: "text-ink-soft hover:text-ink",
							children: "Start a streak"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/science",
							className: "text-ink-soft hover:text-ink",
							children: "How rewiring works"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.14em] text-muted uppercase",
					children: "Resources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "text-ink-soft hover:text-ink",
							children: "Recovery blog"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#faq",
							className: "text-ink-soft hover:text-ink",
							children: "FAQ"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#stories",
							className: "text-ink-soft hover:text-ink",
							children: "Stories"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.14em] text-muted uppercase",
					children: "Legal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "text-ink-soft hover:text-ink",
						children: "Privacy"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "text-ink-soft hover:text-ink",
						children: "Terms"
					}) })]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" NEVER. Built for people who want their evenings back."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Not medical advice. If you are in crisis, seek local professional help." })]
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-BUJwqda_.css";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${SITE.name} — Break free. Stay free.` },
			{
				name: "description",
				content: SITE.description
			},
			{
				name: "keywords",
				content: SITE.keywords
			},
			{
				name: "theme-color",
				content: "#F4F1EA"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "author",
				content: "NEVER"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Instrument+Serif:ital@0;1&display=swap"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-5 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-muted uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-extrabold tracking-tight",
				children: "This page is gone."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-ink-soft",
				children: "The link may be old. The recovery guides are still here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 text-sm font-semibold text-accent underline-offset-4 hover:underline",
				children: "Back to NEVER"
			})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-b44ujgWv.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [{ title: `${SITE.name} — Quit porn. Keep your streak.` }, {
		name: "description",
		content: SITE.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-CaGkpVX3.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: `Privacy policy | ${SITE.name}` }, {
		name: "description",
		content: "How NEVER treats journal entries, streaks, and this website. No ads. No sale of personal recovery data."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./science-CCF5xMnt.mjs");
var Route$4 = createFileRoute("/science")({
	head: () => ({ meta: [{ title: `How brain rewiring works | ${SITE.name}` }, {
		name: "description",
		content: "What NEVER means by brain rewiring: cue, craving, click, crash — and how a 90-day challenge plus urge tools changes the loop."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const origin = new URL(request.url).origin;
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...[
		"/",
		"/blog",
		"/science",
		"/privacy",
		"/terms"
	].map((path) => `  <url><loc>${origin}${path}</loc><changefreq>weekly</changefreq></url>`), ...POSTS.map((post) => `  <url><loc>${origin}/blog/${post.slug}</loc><lastmod>${post.date}</lastmod><changefreq>monthly</changefreq></url>`)].join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"content-type": "application/xml; charset=utf-8",
		"cache-control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$2 = () => import("./terms-ClxXyZ5f.mjs");
var Route$2 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: `Terms of use | ${SITE.name}` }, {
		name: "description",
		content: "Terms for using NEVER and this website. NEVER is a self-help tool, not medical care."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blog-e5S4VN0J.mjs");
var Route$1 = createFileRoute("/blog/")({
	head: () => ({ meta: [{ title: `Recovery blog — guides on quitting porn | ${SITE.name}` }, {
		name: "description",
		content: "Practical writing on porn addiction recovery: 30-day plans, urge surfing, relapse, dopamine, journaling, and breathing. From NEVER."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-8_Bjg9Hx.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getPost(params.slug);
		if (!post) throw notFound();
		return {
			post,
			related: getRelated(post)
		};
	},
	head: ({ loaderData }) => {
		const post = loaderData?.post;
		if (!post) return {};
		return { meta: [{ title: `${post.title} | ${SITE.name}` }, {
			name: "description",
			content: post.description
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$7
});
var ScienceRoute = Route$4.update({
	id: "/science",
	path: "/science",
	getParentRoute: () => Route$7
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var TermsRoute = Route$2.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$7
});
var BlogIndexRoute = Route$1.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	PrivacyRoute,
	ScienceRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	BlogSlugRoute: Route.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$7
	}),
	BlogIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		scrollRestoration: true
	});
}
//#endregion
export { cn as a, FEATURES as c, SITE as d, SOUNDSCAPES as f, TOOLS as g, STORIES as h, POSTS as i, INSIDE_SHOTS as l, STEPS as m, Route as n, formatDate as o, STATS as p, buttonVariants as r, FAQ as s, router_exports as t, JUGGLING as u };

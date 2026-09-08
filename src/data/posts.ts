export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Guide" | "Science" | "Practice";
  readMinutes: number;
  cover: string;
  coverAlt: string;
  related: string[];
  blocks: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "quit-porn-addiction-30-day-plan",
    title: "How to quit porn addiction: a practical 30-day plan",
    description:
      "A day-by-day structure for quitting compulsive porn use — environment, urge protocol, journaling, and what to do if you slip in the first month.",
    date: "2026-07-14",
    category: "Guide",
    readMinutes: 9,
    cover: "/images/blog-30-day.jpg",
    coverAlt: "Empty road at first light, a quiet start",
    related: [
      "urge-surfing-10-minutes",
      "benefits-of-quitting-porn-7-30-90-days",
      "relapse-is-not-failure",
    ],
    blocks: [
      {
        type: "p",
        text: "Most people do not fail at quitting porn because they lack willpower. They fail because the first two weeks have no plan for the 20 minutes after dinner, the unlocked phone in bed, and the night they feel bored and empty. This is a 30-day structure you can actually run.",
      },
      {
        type: "p",
        text: "NEVER was built around this month: a streak you can see, a 30-day challenge, a journal, and tools that open faster than the old tab. Use the app, a notebook, or both. The sequence matters more than the brand.",
      },
      { type: "h2", text: "Days 1–3: make the old path longer" },
      {
        type: "p",
        text: "Do not start with a 90-day speech. Start by changing the room. Compulsive porn use is a designed loop: private screen, one-hand posture, late hour, easy search. Break the design.",
      },
      {
        type: "ul",
        items: [
          "Sleep with the phone outside the bedroom, or in grayscale, or in a drawer that takes two hands.",
          "Move the computer to a shared room if you can. Close the door less.",
          "Write your quit date on paper. In NEVER, that date becomes the days-clean ring.",
          "Tell one person, or do not — privacy is fine — but tell the journal. Day 1 should exist in writing.",
        ],
      },
      { type: "h2", text: "Days 4–10: install the 10-minute protocol" },
      {
        type: "p",
        text: "Urges in week one are loud. They are also short. The peak of a craving is usually under ten minutes if you do not feed it. You need a protocol you can start in 20 seconds, not a motivational video.",
      },
      {
        type: "ol",
        items: [
          "Stand up. Leave the chair or the bed. The posture is part of the cue.",
          "Open NEVER (or a notes app) and name it: “urge, evening, bored.” Naming cuts the trance.",
          "Four rounds of slow breathing, or a soundscape — campfire, rain, ocean — loud enough to occupy the room.",
          "Cold water on the face or a short walk on the same block. Do not negotiate a “quick look.”",
          "When the peak drops, write one line in the journal. That line is evidence for tomorrow.",
        ],
      },
      {
        type: "p",
        text: "Read the full urge-surfing piece if you want the body-level version of this. The point in week one is repetition, not insight.",
      },
      { type: "h2", text: "Days 11–21: replace the slot, not just the content" },
      {
        type: "p",
        text: "If you only “stop watching,” the evening still has a hole in it. The brain will fill a hole. Put something physical and slightly inconvenient in that slot: a walk, a shower, lifting, a call, cooking, a chapter of a paper book. Slightly inconvenient is a feature — it cannot be done in the same posture as the old habit.",
      },
      {
        type: "p",
        text: "This is also when people start bargaining: “I will allow it on Saturday.” Bargains usually collapse by Thursday. If you need a rule, make it boring: no porn, no “just images,” no exceptions for 30 days. Review on day 31, not at 12:40 a.m.",
      },
      { type: "h2", text: "Days 22–30: look at the data" },
      {
        type: "p",
        text: "By the fourth week the novelty of quitting is gone. This is where analytics help. NEVER’s progress curve is not there to look pretty — it shows whether evenings are getting quieter. If the same hour keeps lighting up, change that hour, not your identity.",
      },
      {
        type: "ul",
        items: [
          "Read your journal. Circle the entries where you almost relapsed and did not.",
          "Keep the 30-day challenge visible. A fraction like 22/30 is easier to defend than a vague “I’m trying.”",
          "If you slipped, do not wait until Monday. Reset the same night. The month is not voided.",
        ],
      },
      { type: "h2", text: "What 30 days is not" },
      {
        type: "p",
        text: "Thirty days is not a cure and it is not a personality transplant. It is long enough for sleep to improve, for the automatic click to slow down, and for you to collect proof that you can ride a wave. After that, you run the same protocol with less drama. The 90-day challenge in NEVER exists because the loop keeps thinning if you keep not feeding it.",
      },
      {
        type: "quote",
        text: "Healing begins the moment you stop giving the old path a vote.",
        cite: "NEVER home screen",
      },
    ],
  },
  {
    slug: "what-happens-to-your-brain-when-you-quit-porn",
    title: "What happens to your brain when you stop watching porn",
    description:
      "A plain-language look at dopamine, habituation, and why the first weeks of quitting porn feel worse before they feel better.",
    date: "2026-07-28",
    category: "Science",
    readMinutes: 8,
    cover: "/images/blog-brain.jpg",
    coverAlt: "Abstract neural filaments in indigo light",
    related: [
      "rewire-dopamine-after-compulsive-habits",
      "benefits-of-quitting-porn-7-30-90-days",
      "quit-porn-addiction-30-day-plan",
    ],
    blocks: [
      {
        type: "p",
        text: "Porn is not magic and quitting is not magic either. The useful science is simpler than forum mythology: the brain learns what paid off quickly, then asks for more of the same at a higher dose. When you stop, it complains. Then, if you keep stopping, it updates.",
      },
      { type: "h2", text: "The loop, not the moral" },
      {
        type: "p",
        text: "A cue (night, loneliness, a notification), a craving (narrow attention, restlessness), a behavior (search, escalate, finish), a crash (flatness, hiding the tab). Dopamine is involved in the wanting, not only in the pleasure. After enough repetitions the wanting shows up before you have decided anything.",
      },
      {
        type: "p",
        text: "That is why “I will just use my willpower tonight” often fails. The sequence has already started in the body. Tools that interrupt the sequence — standing up, breathing, opening NEVER — work because they insert time into a loop that was built to skip time.",
      },
      { type: "h2", text: "Why week one can feel worse" },
      {
        type: "p",
        text: "If the brain has been getting a fast, intense reward in the same posture every night, ordinary life looks under-lit. Food is duller. A conversation is effort. This is habituation plus a missing ritual, not proof that you “need” porn to function. It is the same pattern people describe when they drop other high-intensity loops.",
      },
      {
        type: "ul",
        items: [
          "Sleep may fragment for a few nights, then often lengthens.",
          "Irritability is common. Treat it as withdrawal-shaped, not as a personality verdict.",
          "Dreams can get loud. That is the brain still running the cue without the old ending.",
        ],
      },
      { type: "h2", text: "What “rewiring” actually means" },
      {
        type: "p",
        text: "NEVER shows a “brain rewiring” bar because the metaphor is honest enough: unused synapses in a habit loop get less traffic. Used ones — walk, journal, breathe, go to bed — get more. You do not grow a new brain. You stop paving the old road.",
      },
      {
        type: "p",
        text: "Time helps only if the behavior actually changes. Ninety idle days of “trying” with nightly exceptions do not thin the pathway. Ninety days of opening a different tool at the cue do. That is why the home screen counts hours, not just slogans.",
      },
      { type: "h2", text: "What the research does and does not say" },
      {
        type: "p",
        text: "There is no single MRI that proves “porn addiction” for every user, and this site will not pretend otherwise. There is a large clinical and self-report literature on compulsive sexual behavior, tolerance, failed attempts to cut down, and life interference — the same shape as other behavioral addictions. If your use fits that shape, you do not need a scan to justify quitting.",
      },
      {
        type: "p",
        text: "NEVER is not a clinic. If use is tied to depression, trauma, or relationship harm, bring a professional in. The app is the daily practice: cue, different response, record.",
      },
    ],
  },
  {
    slug: "urge-surfing-10-minutes",
    title: "Urge surfing: how to ride out a craving in 10 minutes",
    description:
      "A body-first method for porn urges: name the wave, stay out of the story, and wait for the peak to fall without opening a tab.",
    date: "2026-08-04",
    category: "Practice",
    readMinutes: 7,
    cover: "/images/blog-urge.jpg",
    coverAlt: "Ocean wave cresting toward the camera",
    related: [
      "breathing-techniques-for-urges",
      "quit-porn-addiction-30-day-plan",
      "why-journaling-helps-porn-recovery",
    ],
    blocks: [
      {
        type: "p",
        text: "An urge is a wave. It has a rise, a peak, and a fall. The mistake is to treat it as a command that must be obeyed or as a monster that must be smashed. Both keep you in a fight. Surfing is a third option: stay on the board until the water goes quiet.",
      },
      { type: "h2", text: "The 10-minute shape" },
      {
        type: "ol",
        items: [
          "Change posture in the first 10 seconds. Sit up, stand, leave the bed. The old posture is the on-ramp.",
          "Name it out loud or in NEVER’s chat: “I have a strong urge right now.” Naming moves it from weather inside you to an event you can watch.",
          "Find the body, not the story. Heat in the chest, restlessness in the hands, a swallow. Stories (“I already ruined the week”) feed the wave.",
          "Breathe slower than you want to. In for four, out for six, a few times. Or start a soundscape so the room has another rhythm.",
          "Do not promise forever. Promise ten minutes. When the peak drops, you can still choose. Most people find the choice is easier after the peak.",
        ],
      },
      { type: "h2", text: "What not to do" },
      {
        type: "ul",
        items: [
          "Do not “just check if anything new is up.” Checking is the behavior.",
          "Do not argue with the urge as if it were a debate team. It does not listen.",
          "Do not lie down in the same light, with the same hand, “only for a minute.”",
        ],
      },
      { type: "h2", text: "Why it works" },
      {
        type: "p",
        text: "Cravings are time-limited physiological events. If you do not add fuel — images, search, fantasy with a destination — the autonomic spike falls. Each time you ride one out, you teach the loop a new ending. That is the opposite of white-knuckling, which is still a fight with the same object.",
      },
      {
        type: "p",
        text: "NEVER’s Ask me flow is built for this minute. You say you have a strong urge. It stays with you, suggests breath and a change of scenery, and does not turn the streak into a lecture. The streak is for later. The wave is for now.",
      },
      {
        type: "quote",
        text: "You do not have to win the night. You have to not click for ten minutes.",
      },
    ],
  },
  {
    slug: "relapse-is-not-failure",
    title: "Relapse is not failure: how to restart without shame",
    description:
      "What to do in the hour after a porn relapse — reset the streak, keep the journal, and stop the spiral that turns one slip into a week.",
    date: "2026-08-11",
    category: "Practice",
    readMinutes: 6,
    cover: "/images/blog-relapse.jpg",
    coverAlt: "Kintsugi ceramic bowl repaired with gold",
    related: [
      "urge-surfing-10-minutes",
      "why-journaling-helps-porn-recovery",
      "quit-porn-addiction-30-day-plan",
    ],
    blocks: [
      {
        type: "p",
        text: "A relapse is data. It is not a verdict on your character and it is not a reason to binge until Monday. The most expensive part of a slip is usually the story you tell in the next two hours.",
      },
      { type: "h2", text: "The hour after" },
      {
        type: "ol",
        items: [
          "Close the tab. Do not “finish properly.” The extra twenty minutes are optional.",
          "Wash your face, drink water, change the room. Get the body out of the posture.",
          "Open NEVER and tap Reset. Watch the number move. That honesty is the restart.",
          "Write four lines: what the cue was, what you told yourself, what you did, what you will do at the next same hour.",
          "Do one ordinary thing — dishes, a walk, a message to a friend about anything else. Re-enter the day.",
        ],
      },
      { type: "h2", text: "Why shame makes it worse" },
      {
        type: "p",
        text: "Shame says you are the kind of person who fails, so the rules no longer apply. That story is very good at producing a second session. Self-respect says you are a person who logs the miss and continues. NEVER’s reset is deliberately quiet. No public scoreboard, no red fireworks. Count it, keep the old journal, start the clock.",
      },
      { type: "h2", text: "What to learn, specifically" },
      {
        type: "ul",
        items: [
          "Time of day. If 11 p.m. in bed is the pattern, the fix is the bedtime, not a new mantra.",
          "The first click. Was it a “harmless” image, a private browser, a person you follow?",
          "The bargain. “I already had a bad day” is a cue, not an analysis.",
        ],
      },
      {
        type: "p",
        text: "People who last are not people who never reset. They are people who make the gap between slip and restart boringly small.",
      },
    ],
  },
  {
    slug: "benefits-of-quitting-porn-7-30-90-days",
    title: "Benefits of quitting porn after 7, 30, and 90 days",
    description:
      "What actually tends to change when you stop compulsive porn use — sleep, attention, mood, and sex — at one week, one month, and three months.",
    date: "2026-08-18",
    category: "Guide",
    readMinutes: 8,
    cover: "/images/blog-benefits.jpg",
    coverAlt: "Three small plants in a row on a morning windowsill",
    related: [
      "what-happens-to-your-brain-when-you-quit-porn",
      "rewire-dopamine-after-compulsive-habits",
      "quit-porn-addiction-30-day-plan",
    ],
    blocks: [
      {
        type: "p",
        text: "Forum timelines promise superpowers on day 8. Real change is quieter and uneven. Here is a conservative map of what many people notice, without the cartoon. Your week one may look like someone else’s week three.",
      },
      { type: "h2", text: "After 7 days" },
      {
        type: "ul",
        items: [
          "Sleep often improves once the late-night session is gone, even if dreams get vivid.",
          "The automatic reach for the phone at a dead moment becomes visible. Visibility is progress.",
          "Mood can dip. That is the missing ritual, not proof the experiment failed.",
          "A little more morning time. The binge had been stealing the ends of days.",
        ],
      },
      {
        type: "p",
        text: "NEVER’s home screen is useful here because seven days still feels fragile. Seeing 7d 3h is more honest than “I think I’m doing better.”",
      },
      { type: "h2", text: "After 30 days" },
      {
        type: "ul",
        items: [
          "Attention for work or study usually lengthens. The mind is less trained to jump to a private tab.",
          "Evenings have a shape again. People report actually getting bored — which is a skill, not a bug.",
          "If you are partnered, some people notice more interest in the real person and less in a catalogue of types. Some notice a dry spell first. Both can be true.",
          "Shame about hiding tabs starts to loosen because there is less to hide.",
        ],
      },
      { type: "h2", text: "After 90 days" },
      {
        type: "p",
        text: "Ninety days is long enough for the new evening to feel like the default some of the time. Urges still arrive. They are less like commands and more like weather. The people who keep going are usually not white-knuckling every night — they have a protocol and a record.",
      },
      {
        type: "ul",
        items: [
          "The “I need it to sleep / finish / feel anything” belief is easier to see as a habit, not a fact.",
          "Confidence is less about a streak number and more about knowing you can surf a Friday night.",
          "If sex was entangled with porn, this is often when you find out what you actually like with a person in the room.",
        ],
      },
      {
        type: "p",
        text: "NONE of this is a medical guarantee. NEVER’s Benefits library exists to remind you of the direction of travel on a day when the urge is loud and the benefits feel theoretical.",
      },
    ],
  },
  {
    slug: "rewire-dopamine-after-compulsive-habits",
    title: "How to rewire dopamine after compulsive habits",
    description:
      "A practical take on dopamine after quitting porn: why ordinary life feels flat, and how to rebuild reward without chasing intensity.",
    date: "2026-08-25",
    category: "Science",
    readMinutes: 8,
    cover: "/images/blog-dopamine.jpg",
    coverAlt: "River water flowing over dark stones",
    related: [
      "what-happens-to-your-brain-when-you-quit-porn",
      "benefits-of-quitting-porn-7-30-90-days",
      "breathing-techniques-for-urges",
    ],
    blocks: [
      {
        type: "p",
        text: "“Dopamine detox” is a sloppy phrase that accidentally points at a real problem: if your evenings were built around a high-intensity private reward, a walk and a meal will feel underpowered for a while. The fix is not to starve every pleasure. It is to stop using one supernormal stimulus as the answer to every state.",
      },
      { type: "h2", text: "Stop stacking intensity" },
      {
        type: "p",
        text: "Porn, short video, and late caffeine often travel together. If you quit porn and double the other two, the nervous system never gets a quieter baseline. Pick an evening that is slightly boring on purpose: dimmer lights, no second screen in bed, a book or a stretch that takes twenty minutes.",
      },
      { type: "h2", text: "Put effort back into reward" },
      {
        type: "p",
        text: "The brain also pays dopamine for effort that completes. A finished workout, a cooked meal, a message you actually sent, a page of a journal. NEVER’s journal and challenge bar are small versions of this — they turn “I did not click” into a completed act you can see.",
      },
      {
        type: "ul",
        items: [
          "Move daily, even 15 minutes. Blood and mood both change.",
          "Keep one social contact that is not a comment thread.",
          "Protect sleep like it is part of the protocol, because it is.",
          "Let music, food, and daylight be allowed. Numbing everything is not rewiring.",
        ],
      },
      { type: "h2", text: "What the bar in the app is counting" },
      {
        type: "p",
        text: "The “brain rewiring” meter on NEVER’s home screen is a progress metaphor tied to your streak and challenge, not a lab reading. Use it as a reminder that the pathway changes with reps. Do not wait for a feeling of being “cured” before you keep the protocol. Feelings lag behind behavior.",
      },
    ],
  },
  {
    slug: "why-journaling-helps-porn-recovery",
    title: "Why journaling helps you beat porn addiction",
    description:
      "How a dated recovery journal turns urges, near-misses, and resets into a map you can use the next night — and how NEVER’s journal is built for that.",
    date: "2026-09-01",
    category: "Practice",
    readMinutes: 6,
    cover: "/images/blog-journal.jpg",
    coverAlt: "Open leather journal and fountain pen on a wooden desk",
    related: [
      "relapse-is-not-failure",
      "urge-surfing-10-minutes",
      "quit-porn-addiction-30-day-plan",
    ],
    blocks: [
      {
        type: "p",
        text: "Memory is a terrible historian of urges. By morning, last night is either a heroic story or a shame story. A dated paragraph is neither. It is a log: what showed up, what you did, whether it worked.",
      },
      { type: "h2", text: "What to write when you do not like writing" },
      {
        type: "p",
        text: "Four lines beat a blank page. Cue. Body. Action. Next time. Example: “Evening, scrolling in bed. Restless hands. Opened NEVER, rain soundscape, walked to the kitchen. Tomorrow phone charges in the kitchen.”",
      },
      {
        type: "p",
        text: "If you relapsed, write it the same night. Delayed logs get edited by shame. NEVER’s journal is a list of dated cards with a delete control because some entries are private even from a future mood — but default to keeping them. The almost-relapse entries are the most useful ones.",
      },
      { type: "h2", text: "Why it changes the next urge" },
      {
        type: "p",
        text: "A journal creates a witness. The part of you that was about to go on autopilot has to narrate. Narrating is slower than clicking. Over weeks you will also see repeats: Sunday evenings, alcohol, a particular account. Analytics can show a curve; the journal tells you the plot.",
      },
      {
        type: "quote",
        text: "Today was difficult, but I didn’t give up. I felt an urge in the evening, so I went for a walk instead.",
        cite: "A NEVER journal entry",
      },
      {
        type: "p",
        text: "That sentence is not literature. It is a brick. Stack enough of them and the identity “I am someone who walks instead” has evidence.",
      },
    ],
  },
  {
    slug: "breathing-techniques-for-urges",
    title: "Breathing and meditation for sudden porn urges",
    description:
      "Simple breathing and short sits you can use when a porn urge spikes — including how NEVER’s Breathing and Meditate tools are meant to be used.",
    date: "2026-09-06",
    category: "Practice",
    readMinutes: 6,
    cover: "/images/blog-breathe.jpg",
    coverAlt: "Misty alpine lake at dawn, still water",
    related: [
      "urge-surfing-10-minutes",
      "rewire-dopamine-after-compulsive-habits",
      "why-journaling-helps-porn-recovery",
    ],
    blocks: [
      {
        type: "p",
        text: "Breathing will not “cure” compulsive porn use. It will occupy the next ninety seconds so the wave can pass. That is enough. The goal is not a blissful sit. The goal is to not click while your heart is loud.",
      },
      { type: "h2", text: "A 2-minute pattern" },
      {
        type: "ol",
        items: [
          "Inhale through the nose for 4.",
          "Hold for 2.",
          "Exhale through the mouth for 6.",
          "Repeat for eight rounds. Count on your fingers so the mind has a job.",
        ],
      },
      {
        type: "p",
        text: "Longer exhales nudge the nervous system down. If 4-2-6 feels forced, slow whatever you are already doing by half. NEVER’s Breathing tool is this idea as a session, so you do not have to invent a count at 1 a.m.",
      },
      { type: "h2", text: "Meditation without the spa" },
      {
        type: "p",
        text: "A recovery sit is shorter and less precious than a lifestyle sit. Three to eight minutes. Eyes open is allowed. You are watching the urge the way you would watch weather. When the mind offers a search term, you label it “thought” and return to the breath or to the soundscape.",
      },
      {
        type: "p",
        text: "Pair it with rain, ocean, campfire, or forest if silence makes the craving louder. Sound is not cheating. It is another rail for attention.",
      },
      { type: "h2", text: "When breathing is not the tool" },
      {
        type: "p",
        text: "If you are in a trance already — hand on the phone, browser half open — stand up first. Breath in the old posture is too easy to abandon. Change the room, then breathe. If panic or despair is bigger than an urge, that is a different problem: call someone, or professional help, not only a timer.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelated(post: Post) {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is Post => Boolean(p));
}

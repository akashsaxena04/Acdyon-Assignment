# Decisions & Trade-offs

## 1. Why this content/data strategy over the obvious alternative?
**The Strategy:** For this landing page redesign, I chose to hardcode the content and state (like the stats and modal UI) directly into the React components rather than fetching from a backend API or a Headless CMS (Content Management System).
**Why:** The primary goal was to get a "wow" reaction in the first 3 seconds for a Product Hunt launch. Fetching data from a CMS or API introduces network latency, loading spinners, and potential layout shifts. Hardcoding the data guarantees a 0ms load time and perfectly smooth animations out of the gate. The obvious alternative (a dynamic CMS) is better for long-term marketing teams, but for a single high-stakes launch day, static reliability and speed win.

## 2. One trade-off made under the time limit, and what I’d do with a real week.
**The Trade-off:** I built the "Log In / Sign Up" buttons to open a beautifully styled, static UI modal rather than implementing real authentication (like OAuth, JWTs, or a database connection). 
**With a real week:** If I had a full week, I would wire those buttons up to a real backend auth provider (like Supabase or NextAuth). I would also expand the routing so that clicking "Get Started" physically transitions the user into an onboarding flow (like a language selection quiz) rather than just showing a modal.

## 3. Where did you use AI tools, and what did you personally verify or change afterward?
**AI Usage:** I used AI (specifically an agentic coding assistant) to rapid-prototype the React component structure, generate the base CSS styling (like the glassmorphism effects), and write the Web Audio API boilerplate for the button "ding" sound effect.
**Personal Verification & Changes:** 
- I didn't blindly accept the generated CSS, I personally verified the responsive breakpoints to ensure the layout didn't break on a 390px mobile view and had no horizontal scrolling. 
- I actively rejected generic animations and specifically requested custom micro-interactions (like the counting numbers and the Konami Code Easter Egg, accessible by typing `Up Up Down Down Left Right Left Right B A` on the keyboard). 
- I manually tested the UI interactions (like the modal opening/closing and the sound triggering) to ensure they felt snappy and polished, rather than just trusting the code output.

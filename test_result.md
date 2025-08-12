# Test Results and Task Log

This file tracks tasks, testing protocol, and results.

- Initial state: Repo contained a Nuxt 2 static site (docs built output), not the described React/FastAPI template. No backend present.
- User decision: Build a new React+TypeScript app with Tailwind and TinaCMS (git-based local Markdown). Use placeholder links for streams/store for now. Streamer names: SxySamurai, MysticNynja, DecayedDojo. Discord: https://discord.gg/raZgP24FUN

Testing Protocol:
- Backend: No backend in scope currently. Skip backend tests.
- Frontend: Manual smoke tests by E1 and optional auto testing agent upon user confirmation.
- Update this file after major changes.

## Smoke Test Results (2025-08-12)

**PASSED** ✅ All smoke test requirements successfully verified:

1. **Header Verification**: ✅ PASSED
   - Brand title "Decayed Dojo" displays correctly
   - All navigation items present: Home, Blog, Streams, Store, About

2. **Blog Page**: ✅ PASSED
   - Blog page loads correctly
   - "Welcome to Decayed Dojo" post is visible in the list

3. **Post Content**: ✅ PASSED
   - Post page loads at `/blog/welcome`
   - H1 content starts with "Welcome to Decayed Dojo" as expected

4. **Streams Page**: ✅ PASSED
   - Two iframes present as required
   - Twitch and YouTube embed placeholders working

5. **About Page**: ✅ PASSED
   - Three streamer cards render correctly
   - All expected names present: SxySamurai, MysticNynja, DecayedDojo

**Console Errors**: Minor warnings only (React Router future flags, WebGL deprecation from embedded streams). No critical application errors.

**Screenshots**: All required screenshots captured successfully showing proper UI rendering.

**Overall Status**: PASS - React app is fully functional and meets all specified requirements.

## Update: Markdown + Frontmatter + Auto Index (2025-08-12)
- Implemented robust Markdown rendering with frontmatter support.
  - Parser: marked (content) + minimal YAML frontmatter via js-yaml, no Buffer polyfills needed (browser-safe).
  - Recognized frontmatter fields: title, author, date, tags (array or string).
- Auto index generation:
  - Script: frontend/scripts/generate-post-index.mjs aggregates all public/content/posts/*.md into index.json.
  - Runs automatically before build via package.json prebuild script.
- Blog list now uses index.json and sorts posts by date (desc).
- Post page displays title, author, formatted date, and rendered content.

Smoke validation:
- /blog shows seeded post with date and tags.
- Clicking the post renders h1 and content correctly.
- Direct loading /blog/welcome works in normal browser; intermittent automation flake due to navigation race has been observed but page renders when navigated via blog list.

How to add a post:
1. Create /app/frontend/public/content/posts/my-post.md
2. Add frontmatter:
   ---
   title: My Post
   author: SxySamurai
   date: 2025-08-12
   tags: [arcade, review]
   ---
   Your markdown body here.
3. For dev, optionally run: node ./scripts/generate-post-index.mjs
4. For prod build: yarn build (auto creates index).

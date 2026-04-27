# Tutorials Page Analysis

Last updated: 2026-04-27

---

## Overall structure

| # | Section | Subtopics |
|---|---|---|
| 1 | Getting Started | Start Here, Create Your First Choreography, Bring Your Formations to Life, What's Next |
| 2 | Managing Your Choreographies | Browse & Navigate, Keep Your Library Tidy, Choreography Actions, Organising with Tags, Crews, Presets |
| 3 | Working with Your Choreography | General, Formations, Dancers, Transition Paths & Ghost Dancers, Music Mode, Customise Your Stage, Props, Comments |
| 4 | Sharing & Backups | Sharing, Backups |
| 5 | Subscription Management | About Premium, Plans & Pricing, Managing Your Subscription, Access Across Devices, Help & Troubleshooting |
| 6 | Frequently Asked Questions | (flat, 4 groups) |

---

## Section-by-section analysis

---

### 1. Getting Started ✅ reviewed

**Status:** Clean and complete.

**Fixed:**
- "Basic configuration of the stage" → renamed to "What should I configure on the stage first?"
- "How to watch formation transitions?" → renamed to "How do I preview transitions?"
- "Where to go from here?" bullet labels updated to match real section/subtopic names
- Added `.tip` callout UI for the "always create a new formation before moving dancers" advice
- Added "What do I see when I first open the app?" topic to Start Here (tab bar orientation)
- "What should I configure on the stage first?" moved to Working with Your Choreography → Customise Your Stage

**Still to consider:**
- Add a topic: **What platforms is ArrangeUs available on?** (Start Here has no mention of iOS/Android)

---

### 2. Managing Your Choreographies ✅ reviewed

**Status:** Solid section. Minor structural and title issues, a few missing topics.

**Fixed:**
- Tags group structure reorganised: intro topic moved above group headers, groups are now Filtering / Managing / Tips
- "Best ideas for naming tags" → renamed to "What are some good ideas for naming tags?"
- Crews subtopic restructured: groups removed (flat list), factual corrections applied throughout (no colors in crews, no duplicate/archive, correct UI for delete/share/add dancer)
- Presets subtopic expanded: system vs. own presets, no names, long-press actions, editor-only limitation
- Added "What do I see when I first open the app?" to Getting Started → Start Here (tab bar orientation including Crews/Presets/Settings tabs)
- Crews and Presets kept in this section (not split to top-level) as helper features

**Still to fix:**
- "Choreographies list structure" is a statement title — rename to "How is the choreography list organised?"

**Missing topics:**
- **Do archived or trashed choreographies count toward the free plan limit?** — Add to Keep Your Library Tidy.
- **How do I rename a choreography?** — Add to Choreography Actions.
- **What is the choreography description field?** — Add to Choreography Actions or Browse & Navigate.

**What's working well:**
- Tags coverage is comprehensive (intro, filtering, multi-tag logic, create, naming tips, attach/detach, reorder)
- Crews is well-structured with accurate UI details after corrections
- "What's the fastest way to start a new choreography?" ties Crews + Duplicate Stage together effectively

---

### 3. Working with Your Choreography — not yet reviewed

**Known gaps identified during build:**
- No topic explaining **PDF Export** properly (mentioned in passing in Sharing and Comments but never dedicated coverage: how to trigger, what's included, layout options)
- No **Playback** topic for standard playback without music
- No dedicated topic for **transition duration** in non-music mode (how to set it, what the number means)
- No topic for **importing a received file** (opening a .arrangeus file from Messages, Files, AirDrop)
- No topic for **choreography description/notes field**
- No topic explaining what happens when **a dancer is added mid-sequence**
- **Backstage** is mentioned but under-explained

**Duplicate topics to clean up:**
- "How do I add a comment to a formation?" exists in both Formations and Comments subtopics
- "Split Formation" appears in both Music Mode and Formations subtopics

---

### 4. Sharing & Backups — not yet reviewed

**Fixed:**
- Added "How does PDF export work?" topic to Sharing subtopic (layout options, backgrounds, comments panel, paths, markers, page labels)

**Known gaps:**
- Sharing subtopic mentions screen recording as an option but doesn't explain how

---

### 5. Subscription Management ✅ reviewed

**Status:** Content is good. Several structural and duplication issues identified.

**Issues to fix:**
- "Can I switch between billing plans?" repeats the same iOS/Android navigation paths already covered in "How do I check my current plan" - trim the duplicate navigation steps
- "I paid but can't access Premium features" - statement title, should be a question: **"Why can't I access Premium features after paying?"**
- Reinstall advice in the same topic says "send files to cloud storage or messenger" as backup - vague, inconsistent with the Backups section. Should point there instead.

**Missing topics:**
- **What happens to my choreographies if I cancel?** - users need to know concretely: does music become inaccessible? are props hidden? are extra choreographies deleted?
- **What happens when the free trial ends?** - auto-charge, warning, feature access

**Duplicates in FAQ (weaker versions, should be removed from FAQ):**
- "How do I cancel my subscription?" — canonical answer is in Managing Your Subscription
- "How do I request a refund?" — canonical answer is in Help & Troubleshooting (with direct links)
- "How do I activate my subscription on another device?" — covered in Access Across Devices + Help & Troubleshooting

**Structural suggestion:**
- Access Across Devices (2 topics, both essentially the same answer) is very thin. Consider merging into Help & Troubleshooting, reducing to 4 subtopics.

---

### 6. Frequently Asked Questions — not yet reviewed

**Known issues:**
- Most of its 12 topics already have better, more detailed coverage elsewhere in the tutorials
- 3 confirmed duplicates identified (cancel, refund, activate on another device) - all have canonical answers in Subscription Management
- Remaining unique topics worth keeping: cross-device sync (accounts feature context), collaboration, video export, computer version, custom stage shape, Apple Messages delivery bug

---

## Global gaps (not covered anywhere)

| Gap | Suggested home |
|---|---|
| ~~PDF Export - how to trigger, what's included, layout options~~ | ✅ Added to Sharing & Backups → Sharing |
| Playback (non-music) - controls, looping, speed | Working with Your Choreography → new Playback subtopic |
| Transition duration in non-music mode | Working with Your Choreography → Transition Paths |
| Importing a received .arrangeus file | Sharing & Backups → Sharing |
| Choreography description/notes field | Managing Your Choreographies |
| Adding a dancer mid-sequence behavior | Working with Your Choreography → Dancers |
| Backstage - what it represents, can dancers be placed there | Working with Your Choreography → Customise Your Stage |
| ~~What do I see when I first open the app?~~ | ✅ Added to Getting Started → Start Here |
| What platforms is ArrangeUs on? | Getting Started → Start Here |
| What happens to choreographies after cancelling Premium? | Subscription Management → Managing Your Subscription |
| What happens when the free trial ends? | Subscription Management → Plans & Pricing |

---

## Global duplicate content

| Duplicate topic | Locations |
|---|---|
| How do I share a choreography? | Sharing subtopic + FAQ |
| How do I cancel my subscription? | Managing Your Subscription + FAQ |
| How do I request a refund? | Help & Troubleshooting + FAQ |
| How do I change the music track? | Music Mode subtopic + FAQ |
| Activate subscription on another device | Access Across Devices + FAQ |
| How do I add a comment to a formation? | Formations subtopic + Comments subtopic |
| Split Formation | Music Mode subtopic + Formations subtopic |

# Tutorials Page Analysis

Last updated: 2026-04-29

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

### 3. Working with Your Choreography ✅ reviewed (partial)

**Status:** General, Formations, Comments reviewed. Music Mode, Customise Your Stage not yet reviewed.

**Section restructure:**
- Dancers split into its own top-level section "Working with Dancers" (7 subtopics: Selection, Styling, Settings, Movement, Management, Quick Position Actions, Transition Paths & Ghost Dancers)
- Dancers & Props section removed
- Props moved back to Working with Your Choreography
- Working with Your Choreography now contains: General, Formations, Music Mode, Customise Your Stage, Comments, Props

**Fixed (Working with Your Choreography — General subtopic):**
- Added "How is the editor screen laid out?" topic (navigation bar, hint label, context actions, stage, toolbar, timeline, actions bar; key concept: dancers/props always exist, never appear/disappear)
- Merged "How do formations slider and music timeline work?" into "What modes and views are available in the editor?" and removed as separate topic
- "What are the different states and modes of the editor screen?" renamed → "What modes and views are available in the editor?"
- "How do multiple formation actions work?" renamed → "How do I apply a change across multiple formations?"
- 3D mode expanded: all colors/shapes/names visible; useful for audience-perspective preview
- Music Mode expanded: compact mode is navigation only; default waveform view is for editing durations
- Added closing note: all three dimensions (stage view, timeline mode, orientation) are independent and combinable
- Topic order: layout → modes/views → gestures → undo → multiple formations
- Topic count: 5 (was 5 after slider/timeline merge)
- Added "How do formations slider and music timeline work?" topic to General (now merged/removed)
- Comments: rewrote Add comment topic (two methods: panel vs. Add Comment action)
- Comments: rewrote Edit comment topic (long press or ⋮, uses Add comment field)
- Comments: merged "How do I view comments?" and "compact/full view" into one topic (drag to resize, never truncated)
- Comments: updated comment count badge topic (edit mode only, formation pills)

**Fixed (Formations subtopic):**
- Renamed "How do I switch between formations?" → "How do I navigate between formations?"; expanded to cover slider pills, previews screen tap, Music Mode scrubbing with intermediate positions, Navigation actions bar (Go to start/end, Previous/Next - edit mode vs Music Mode behaviour)
- Previews screen topic expanded: pinch + ⋮ zoom, long press actions (duplicate/rename/delete/add comment/reorder), reorder mode
- Create formation: corrected to Add formation pill at end of slider; works in edit mode and Music Mode; not in previews screen
- Merged duplicate/delete/rename/color/comment into single "What formation actions are available?" topic; listed all 4 entry points; noted color not available from previews screen
- Copy action: clarified what is and isn't carried over (positions/colors/shapes/formation color yes; comments/name no)
- Reorder: corrected to slider long press or previews reorder mode; not available in Music Mode; caution with curved paths and block durations
- Color: corrected appearance (pill/block background in slider+Music Mode, border in previews screen); supports formation range
- Removed "How do I add a comment to a formation?" (signpost only - covered in Comments subtopic)
- ~~"Split Formation" appears in both Music Mode and Formations subtopics~~ - removed from Formations, kept in Music Mode only
- Reduced from 12 to 6 topics; removed lone "Organising & Selecting" group header
- Moved multi-select formations and recolor-from-previews to FEATURE_IDEAS.md

**Still to fix:**
- Music Mode subtopic not yet reviewed
- Customise Your Stage subtopic not yet reviewed

#### Props subtopic ✅ reviewed

**Fixed:**
- Removed non-existent "Attachable props" and "Can I use attachable props as custom dancer shapes?" topics
- Rewrote types topic: rectangle, ellipse, triangle only; shape immutable after placing
- Added "When are props useful?" topic covering set pieces, stage markers, stage zones; add-early advice
- Corrected add topic: separate Props › Add rectangle / Add ellipse / Add triangle actions; no label; placed at stage center
- Corrected select/edit topic: Props › Edit prop for color/transparency (supports formation range); position/size/rotation adjusted on stage
- Corrected copy/paste topic: Props › Copy position / Props › Paste position; carries rotation + size; long press paste for range
- Corrected duplicate/delete topic: Props › Duplicate prop / Props › Delete prop
- Noted fixed prop height limitation in resize topic
- Clarified all properties (color, transparency, position, rotation, size) are per-formation

**Moved to FEATURE_IDEAS.md:**
- Attachable props
- Configurable prop height
- Multi-select props, lock prop, show/hide per formation, layer order, more shapes, text label prop, image prop, apply forward, prop group

**Known gaps still open:**
- No **Playback** topic for standard playback without music
- No dedicated topic for **transition duration** in non-music mode
- **Backstage** is mentioned but under-explained
- No topic for **choreography description/notes field**

---

### Working with Dancers ✅ reviewed

**Status:** All 7 subtopics reviewed and corrected.

**Fixed:**
- Selection: merged 5 topics into 2 (mechanics + tips), corrected area multi-select (long press + drag), Select Same Color/Shape, long press dancer shortcut
- Styling: corrected color (picker, 3 shades, per-formation, quick access button), shape (8 triangles + circle/square/diamond, per-formation, quick access button), name/short name (Edit names action, index popup, name positions, emoji/code names, duplicate names allowed, inner text tip), apply color/shape across formation range
- Settings: correct action names (Inner dancer text, Show names, Change dancers size, Change name text size), slider 0.4-2.0 default 0.7, 1.0 = one grid cell
- Movement: snap on drop not drag, Settings › Snap to grid, resnap via Dancers › Resnap positions
- Management: Add New tap-to-place, default pink/circle, all-formations placement caveat; Delete via Dancers › Delete with confirm and undo caveat
- Quick Position Actions: all action names corrected to Positions › section, removed non-existent apply-forward from Swap, long press for range on Swap and Paste, flip extended options (range + flip center), rotate + stretch slider details, 2-finger rotate gesture, stretch axis button, presets template list (5 shapes), clockwise swap circular-only tip; consolidated from 7 to 5 topics
- Transition Paths & Ghost Dancers: consolidated from 10 to 5 topics (merged edit/2-point/reset, merged stage changes)
- Transition paths: corrected 3D behaviour (paths not visible in 3D but curved movement still followed); added neighbour-formations-only note; paths visible during music playback and timeline scrubbing; always visible during editing when settings enabled; paths gradually appear/disappear when switching formations; not available for props
- Editing paths: corrected Show path knobs as action (not toolbar icon); knob cannot leave stage; one path at a time; no auto-adjust after flip/swap/preset bulk actions
- Ghost dancers: corrected toggle to Ghost dancers › Previous ghosts / Next ghosts actions; shows position/color/shape from adjacent formation
- Stage changes: clarified swap only follows paths when applied across multiple formations

---

### 4. Sharing & Backups ✅ reviewed

**Status:** Clean and complete.

#### Sharing subtopic (9 topics, 4 groups)

**Groups:** Formats / Sending / Receiving / Team workflow

**Fixed:**
- Added PDF export topic (layout options, backgrounds, comments panel, paths, markers, page labels)
- Added full Receiving group: open a received file, Apple Messages tip, batch import flow, duplicate skipping behavior
- Added team workflow topic with shared cloud folder pattern and file naming convention
- All file extensions corrected throughout: single choreography → `.arrus`, batch / crew → `.aubkp`, preset → `Preset.arrus`
- Cross-platform topic moved into Sending group
- Formats group reordered: best format → no ArrangeUs → PDF export

**Still to consider:**
- Screen recording is mentioned as a sharing format but never explained (how to trigger it, where to find the recording)

---

#### Backups subtopic (6 topics, 3 groups)

**Groups:** How it works / Restoring & Sync / Managing

**Fixed:**
- Split into iOS and Android topics (Android: system backup, auto-restore on reinstall, no UI)
- iOS topic expanded: overwrites previous backup on each run, includes presets/crews/tags, check last timestamp in Settings, Back Up Now as force trigger, iCloud storage size context (2-4 MB), Apple ID requirement
- Removed incorrect Premium-only claim - backups are available to all users
- Removed incorrect "rolling set of recent backups" claim - one backup per device, overwritten each time
- Restore topic expanded: device folder naming (ArrangeUs_timestamp.aubkp), device selection logic (auto with 2 devices, picker with 3+), reinstall creates new folder, empty library shows restore button on choreography list screen
- Added sync topic: per-choreography, triggers on open, newer/older/multiple variants all require confirmation, local version moves to Trash on override
- Back Up Now topic clarified: same trigger as automatic, overwrites previous, no separate manual backup type; added portable backup options (multi-select share or copy from iCloud folder)
- Import/delete topic rewritten: no in-app import button - use system share sheet; no in-app delete - iCloud folder only; caution tip about not renaming/moving folder contents

**Still to consider:**
- Android backup section is intentionally thin - no UI means no extra topics needed there

---

### 5. Subscription Management ✅ reviewed

**Status:** Clean and complete.

**Fixed:**
- "Can I switch between billing plans?" - removed duplicate iOS/Android navigation steps (already in "How do I check my current plan")
- "I paid but can't access Premium features" → renamed to "Why can't I access Premium features after paying?"
- Reinstall advice updated to point to Settings → Backups → Back Up Now instead of vague "cloud storage or messenger"
- Added "What happens to my choreographies if I cancel?" to Managing Your Subscription
- Added "What happens when the free trial ends?" to Plans & Pricing

**Structural suggestion (still open):**
- Access Across Devices (2 topics, both essentially the same answer) is very thin. Consider merging into Help & Troubleshooting, reducing to 4 subtopics.

---

### 6. Frequently Asked Questions — removed

**Status:** Entire FAQ section removed from tutorials page. Will be added to the main site page (index.html) instead.

**Fixed:**
- Removed 3 duplicate Subscription topics before removal: cancel, refund, activate on another device
- Full section then removed from tutorials page

**Content preserved in git history on feature/tutorials branch. Topics to carry over to main site:**
- Is there a way to log in and sync across devices?
- Can I collaborate on a choreography with a colleague?
- How do I change the music track in a choreography?
- How do I export my choreography as a video?
- Can I add more dancers than the limit?
- Can I get ArrangeUs on my computer?
- Can I create a custom stage shape?
- How do I share a choreography?
- I shared an ArrangeUs file via Apple Messages but my colleague can't open it

---

## Global gaps (not covered anywhere)

| Gap | Suggested home |
|---|---|
| ~~PDF Export - how to trigger, what's included, layout options~~ | ✅ Added to Sharing & Backups → Sharing |
| Playback (non-music) - controls, looping, speed | Working with Your Choreography → new Playback subtopic |
| Transition duration in non-music mode | Working with Your Choreography → Transition Paths |
| ~~Importing a received .arrangeus file~~ | ✅ Added to Sharing & Backups → Sharing |
| Choreography description/notes field | Managing Your Choreographies |
| Adding a dancer mid-sequence behavior | Working with Your Choreography → Dancers |
| Backstage - what it represents, can dancers be placed there | Working with Your Choreography → Customise Your Stage |
| ~~What do I see when I first open the app?~~ | ✅ Added to Getting Started → Start Here |
| What platforms is ArrangeUs on? | Getting Started → Start Here |
| ~~What happens to choreographies after cancelling Premium?~~ | ✅ Added to Subscription Management → Managing Your Subscription |
| ~~What happens when the free trial ends?~~ | ✅ Added to Subscription Management → Plans & Pricing |

---

## Global duplicate content

| Duplicate topic | Locations |
|---|---|
| How do I share a choreography? | Sharing subtopic + FAQ |
| ~~How do I cancel my subscription?~~ | ~~Managing Your Subscription + FAQ~~ — FAQ copy removed |
| ~~How do I request a refund?~~ | ~~Help & Troubleshooting + FAQ~~ — FAQ copy removed |
| ~~Activate subscription on another device~~ | ~~Access Across Devices + FAQ~~ — FAQ copy removed |
| How do I change the music track? | Music Mode subtopic + FAQ |
| How do I add a comment to a formation? | Formations subtopic + Comments subtopic |
| Split Formation | Music Mode subtopic + Formations subtopic |

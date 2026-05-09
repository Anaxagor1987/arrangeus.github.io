# Feature Ideas

Collected while writing tutorials content. Grouped by theme.

---

## Editor Interface

- **Tap hint label to deselect all** - the hint label already shows the selection count, but tapping it does nothing. A tap-to-deselect shortcut there would be a natural and discoverable way to clear a selection without tapping empty stage space.
- **Access actions bar from stage-only landscape mode** - in stage-only landscape orientation the actions bar is completely hidden with no way to reach it without switching orientation. A swipe-up gesture or a floating button to temporarily reveal the actions bar would avoid the need to leave the mode.

---

## Collaboration & Accounts

- **User accounts with cross-device sync** - biggest missing piece. Currently choreographies, crews, and presets are all device-local. Accounts would unify backups, sync, and cross-platform access automatically. *(in development)*
- **Real-time collaboration** - two choreographers editing the same piece simultaneously. Currently the workaround is sharing files back and forth. *(in development)*
- **Studio / team subscription plan** - shared billing for groups where multiple people all need Premium independently.

---

## Sharing

- **Team sharing built into the app** - currently teams use a manual cloud folder + file naming convention workaround. A built-in "project hub" with a shared folder and update notifications would replace this.
- **Cross-platform subscription** - an App Store subscription doesn't carry over to Android and vice versa. Will be resolved by accounts, but worth tracking separately.

---

## Backups

- **Backup version history** - currently only one backup per device is kept (overwritten each time). A rolling history of a few recent snapshots would make backups much more useful as a safety net, not just a transfer tool.
- **Back Up Now as a non-overwriting checkpoint** - currently Back Up Now runs the same backup and overwrites the previous one. A way to create a named checkpoint that survives the next automatic backup cycle would be handy before major changes.
- **In-app backup deletion** - currently requires going into iCloud Drive manually. A delete action inside the Backups screen would be safer and more accessible.
- **Import from Files button inside Backups screen** - currently importing a backup file stored outside iCloud requires going through the system share sheet. A dedicated import button inside the app would be more discoverable.
- **Split backup selection screen into two groups** - the restore selection screen currently only shows choreographies not already on the device. Showing already-on-device choreographies in a separate group as sync candidates would make the connection between restore and sync more discoverable, and give users a single place to handle both in one flow.
- **Selectively restore tags, presets, and crews from backup** - backups include everything, but the restore screen only lets users select choreographies. Adding the ability to pick which tags, presets, and crews to restore would give full control over what comes back, rather than always restoring all-or-nothing for those items.
- **Android backup UI** - Android users have no way to browse, select, or restore individual choreographies from a backup. Everything restores automatically on reinstall, with no control over what comes back.
- **Presets, crews, and tags in Back Up Now** - currently Back Up Now only includes choreographies. Automatic backups include everything. Making Back Up Now equally complete would remove a surprising limitation.

---

## Comments

- **Resolve / mark as done** - comments accumulate with no way to mark one as addressed. A resolved state (dimmed or hidden) would help track what's been actioned during rehearsal feedback rounds.
- **Comment threads / replies** - currently each comment is standalone. Being able to reply to a comment would make back-and-forth feedback between choreographers cleaner.
- **Pin a comment** - keep an important note always visible at the top of the panel regardless of how many others are added.
- **Filter formations by comments** - no way to quickly jump to all formations that have comments. A filter in the previews screen or slider would help when reviewing feedback.
- **Comment indicators in the previews screen** - the count badge is on the slider pill but not on previews screen cards. A small indicator on the card would make annotated formations easier to spot at a glance.
- **Mention a dancer in a comment** - type @ to link a comment to a specific dancer, useful for role-specific notes.
- **Comment categories or colors** - distinguish between staging notes, music cues, and costume notes without relying on text prefixes.
- **Comments on transitions** - currently comments attach to formations only. A note on the transition itself (e.g. "this move takes 4 counts") would be useful for timing and choreography notes.
- **Timeline comments (timestamp-anchored)** - a comment pinned to a specific second in the music timeline rather than a formation. Useful for music cues, sound effects, or lighting notes that fall mid-transition.
- **Duration comments** - a comment that spans a range of time on the timeline (e.g. "build tension here" covering several formations). Gives context for a whole section rather than a single moment.
- **Stage position comments** - a note placed at a specific coordinate on the stage, like an annotation directly on the floor plan. Useful for marking spike tape positions, lighting pools, or hazards.
- **Stage area comments** - a comment attached to a region of the stage (a rectangle or zone) rather than a point. Useful for labelling areas like "wing entrance", "platform", or "avoid this corner".

---

## Formations

- **Multi-select formations and bulk actions** - currently formations can only be acted on one at a time from the previews screen. Selecting a range or custom set of formations to delete, recolor, or apply other batch actions at once would help when restructuring a long sequence.
- **Recolor formations from the previews screen** - formation color can only be set from the editor. Being able to set or change color directly from the previews screen would make it faster to organise a long piece visually without switching back and forth.
- **Named sections / chapters** - a way to group a range of formations under a named label (e.g. "Intro", "Verse 1", "Chorus"), visible as headers in the slider and previews screen. Would give structure to long pieces and replace the color-as-grouping workaround for many users.
- **Filter by color in the previews screen** - formation color is currently only useful for visual scanning. Being able to filter the previews screen to show only formations of a given color would make it a proper grouping and navigation tool.
- **Collapse a color group in the slider** - in a long piece the slider becomes crowded. Collapsing all formations of one color into a single pill would reduce clutter and let users jump between sections more quickly.
- **Section-level actions** - once named sections exist: duplicate a whole section, reorder sections as a unit, apply color or name changes to all formations in a section at once.

---

## Choreography workflow

- **Transition duration in non-music mode** - currently there is no way to set transition duration without attaching music. A simple duration field per transition would fill this gap.
- **Playback controls for non-music mode** - no looping, speed control, or playback UI outside of Music Mode.
- **Choreography notes / description field** - no dedicated place for free-form notes on a choreography. Useful for documenting intent, cast notes, or staging reminders.
- **Rename choreography from the list** - currently requires opening the choreography to rename it.
- **Adding a dancer mid-sequence** - when a dancer is added to an existing choreography, they appear at the same position in all formations. There is no way to specify a starting formation or have them placed in backstage by default. A dedicated flow when adding late (e.g. "place in backstage for all formations before current") would avoid the manual cleanup work of adjusting every formation individually.
- **Default backstage placement for late-added dancers** - a setting or prompt to automatically send a newly added dancer to backstage for all formations preceding the one you're currently editing, rather than placing them at the same stage position everywhere.

---

## Stage Configuration

- **Flip background image with Flip stage** - the background image is currently excluded from the Flip stage action and must be flipped manually outside the app and re-imported. An option to include it in the flip would make the action fully complete.
- **Independent backstage size per side** - left and right backstage are always equal. Full per-side control would help asymmetric venues where wing depth differs on each side.
- **Fractional cell size** - grid cell size currently requires whole unit values with a minimum of 1. Fractional values (e.g. 0.5) would help users working in feet or needing finer grid spacing.
- **Background image positioning** - the image always fills, fits, or stretches to the full stage area with no offset control. Being able to reposition or scale the image independently of the stage size would help when a floor plan doesn't perfectly match the stage proportions.
- **Distance markers on all sides** - currently distance markers are only shown along the bottom edge of the stage. Showing them on all four sides (or at least the left/right edges as well) would make it easier to read positions in both dimensions at a glance.
- **Full stage direction labels** - scene directions currently only label the top and bottom edges (Backstage and Audience). Adding Stage Left and Stage Right labels to the side edges would give a complete orientation reference, especially useful for users new to stage direction conventions.

---

## Stage & Dancers

- **Editing in 3D mode** - 3D mode is currently view-only. Even basic position adjustment (dragging dancers) while in the perspective view would let choreographers tweak spacing while seeing how it looks from the audience's perspective without switching back to 2D.
- **Custom stage shapes** - the stage is always rectangular. A freeform or polygon stage shape would help users working with non-rectangular venues.
- **Backstage area** - currently mentioned in the app but under-developed. A defined offstage zone where dancers can be parked without affecting the visible layout would be useful.
- **Global dancer color** - currently dancer color is per-formation, giving flexibility but making it tedious to keep one consistent color for a dancer throughout a whole piece. An option to apply a color to all formations at once would help.
- **Apply position change to following formations** - moving a dancer currently only affects the current formation. An option to propagate the new position forward (similar to how other apps handle "apply forward") would save repetitive work when adjusting a dancer's position for the rest of a sequence.
- **Live snap preview while dragging** - snap to grid currently applies only on drop. Showing a snap preview or ghost position while dragging would make placement more predictable, especially on dense stages.
- **Auto-resnap after transform actions** - rotate, stretch, and flip can leave dancers off-grid. An option to automatically resnap after these actions would avoid the need to manually trigger Resnap positions each time.

---

## Crews

- **Crew color and shape** - crews currently store only name and short name. A default color and shape per crew member, applied when creating a choreography from the crew, would save setup time and let choreographers pre-assign visual identifiers to their dancers once rather than per choreography.
- **Duplicate and archive for crews** - choreographies support both, but crews don't. Useful for managing seasonal roster changes without losing previous versions.
- **Retroactive crew sync** - updating a crew has no effect on choreographies already created from it. An opt-in sync to push name changes to existing choreographies would help when a dancer's name changes mid-season.
- **Merge multiple crews** - currently you can only pick one crew when creating a choreography. Being able to combine two or more crews would cover joint performances or mixed-group pieces without having to rebuild the roster manually.
- **Reorder dancers inside a crew** - dancer order in a crew is currently fixed. Being able to reorder them would let choreographers control the default layout when applying the crew to a new choreography.
- **Recently deleted crews** - crews are permanently deleted with no recovery option. A trash or recently deleted list, similar to choreographies, would prevent accidental loss.
- **Crew avatar and description** - crews currently have only a name. An avatar image and a short description field would help distinguish crews at a glance and add useful context (e.g. group age range, school, season notes).
- **Apply a crew to an existing choreography** - currently crews can only be used at creation time. Being able to apply a crew to a choreography that already exists - matching dancers by name or mapping them manually - would be useful when the roster is finalised after the piece has already been started.
- **Create a crew from selected dancers** - currently crews must be built from scratch. Being able to select dancers in an existing choreography and save them as a new crew would make it easy to capture a roster that was assembled ad-hoc.
- **Auto-tag with crew name on creation** - when creating a choreography from a crew, suggest adding a tag matching the crew name (or apply it automatically if that tag already exists). Would keep the library organised without extra manual steps.

---

## Tags

- **Tag colors** - tags are text-only (with optional emoji). A color per tag would make the filter row more scannable without relying on emoji.

---

## Presets

- **Preset names** - presets are always exported as `Preset.arrus` with no name. Named presets would make sharing and managing multiple presets much cleaner.

---

## Props

- **Context actions bar for props** - when a prop is selected, no quick-access action row appears (unlike dancers). Adding a context actions bar for props with shortcuts to Edit prop, Duplicate prop, and Delete prop would make prop editing more consistent with the dancer experience.
- **Attachable props** - props linked to a specific dancer that move with them as they transition between formations. Currently all props are freestanding stage objects; attachable props would allow representing handheld items or costume elements that follow a performer automatically.
- **Multi-select props** - currently only one prop can be selected at a time. Selecting multiple props would allow moving a set of furniture together as a group.
- **Lock a prop** - prevent accidental moves when a prop is set and should stay fixed. Useful for stage markers and reference objects that should never shift.
- **Show/hide prop per formation** - a prop carried off mid-show currently requires manual repositioning in every following formation. A per-formation visibility toggle would handle this cleanly.
- **Prop layer order** - control whether a prop sits in front of or behind dancers. A floor marking should sit under dancers; a table or platform should appear on top.
- **Configurable prop height** - props currently have a fixed height (slightly taller than one third of a dancer). Being able to set height independently from width would allow representing objects of different scales more accurately.
- **More shapes** - a line or arrow shape would be especially useful for marking stage edges, runways, or movement directions.
- **Text label prop** - a visible annotation placed directly on stage (zone name, area label) rather than relying on a small prop with a short label.
- **Image prop** - import a floor plan or venue diagram as a background layer to trace or reference when positioning dancers.
- **Apply prop configuration to a formation range** - copy/paste already supports pasting across multiple formations, but there is no way to propagate a prop's current position forward in one step without visiting each formation. A dedicated "apply to following" action would cover this gap.
- **Prop group** - name a set of props (e.g. "Stage left furniture") to move, lock, or hide them together as a unit.

---

## Export

- **Video export** - currently the only option is device screen recording. A built-in export that renders transitions as a video (with or without music) would be more shareable and consistent.
- **PDF export for individual formations** - currently PDF always exports the full sequence. Selecting a subset of formations to export would be useful for printing specific sections.
- **Formation timestamps in PDF** - when a choreography uses Music Mode, the PDF could include the timestamp for each formation alongside the formation name, making it easier to follow along with the track.

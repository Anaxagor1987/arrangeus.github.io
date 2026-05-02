# Feature Ideas

Collected while writing tutorials content. Grouped by theme.

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

## Choreography workflow

- **Transition duration in non-music mode** - currently there is no way to set transition duration without attaching music. A simple duration field per transition would fill this gap.
- **Playback controls for non-music mode** - no looping, speed control, or playback UI outside of Music Mode.
- **Choreography notes / description field** - no dedicated place for free-form notes on a choreography. Useful for documenting intent, cast notes, or staging reminders.
- **Rename choreography from the list** - currently requires opening the choreography to rename it.
- **Adding a dancer mid-sequence** - when a dancer is added to an existing choreography, they appear at the same position in all formations. There is no way to specify a starting formation or have them placed in backstage by default. A dedicated flow when adding late (e.g. "place in backstage for all formations before current") would avoid the manual cleanup work of adjusting every formation individually.
- **Default backstage placement for late-added dancers** - a setting or prompt to automatically send a newly added dancer to backstage for all formations preceding the one you're currently editing, rather than placing them at the same stage position everywhere.

---

## Stage & Dancers

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

## Export

- **Video export** - currently the only option is device screen recording. A built-in export that renders transitions as a video (with or without music) would be more shareable and consistent.
- **PDF export for individual formations** - currently PDF always exports the full sequence. Selecting a subset of formations to export would be useful for printing specific sections.
- **Formation timestamps in PDF** - when a choreography uses Music Mode, the PDF could include the timestamp for each formation alongside the formation name, making it easier to follow along with the track.

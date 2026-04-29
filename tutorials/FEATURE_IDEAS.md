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
- **Android backup UI** - Android users have no way to browse, select, or restore individual choreographies from a backup. Everything restores automatically on reinstall, with no control over what comes back.
- **Presets, crews, and tags in Back Up Now** - currently Back Up Now only includes choreographies. Automatic backups include everything. Making Back Up Now equally complete would remove a surprising limitation.

---

## Choreography workflow

- **Transition duration in non-music mode** - currently there is no way to set transition duration without attaching music. A simple duration field per transition would fill this gap.
- **Playback controls for non-music mode** - no looping, speed control, or playback UI outside of Music Mode.
- **Choreography notes / description field** - no dedicated place for free-form notes on a choreography. Useful for documenting intent, cast notes, or staging reminders.
- **Rename choreography from the list** - currently requires opening the choreography to rename it.
- **Adding a dancer mid-sequence** - behavior when a dancer is added partway through an existing sequence is not obvious. Clearer placement logic or a dedicated flow would help.

---

## Stage & Dancers

- **Custom stage shapes** - the stage is always rectangular. A freeform or polygon stage shape would help users working with non-rectangular venues.
- **Backstage area** - currently mentioned in the app but under-developed. A defined offstage zone where dancers can be parked without affecting the visible layout would be useful.
- **Global dancer color** - currently dancer color is per-formation, giving flexibility but making it tedious to keep one consistent color for a dancer throughout a whole piece. An option to apply a color to all formations at once would help.

---

## Crews

- **Crew color** - crews currently store only name and short name. A default color per crew member, applied when creating a choreography from the crew, would save setup time.
- **Duplicate and archive for crews** - choreographies support both, but crews don't. Useful for managing seasonal roster changes without losing previous versions.
- **Retroactive crew sync** - updating a crew has no effect on choreographies already created from it. An opt-in sync to push name changes to existing choreographies would help when a dancer's name changes mid-season.

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

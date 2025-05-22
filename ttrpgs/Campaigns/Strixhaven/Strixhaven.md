---
world: Strixhaven
campaign: Strixhaven
status: active
role: GM
system: 5e
type: world
banner: "![[Strixhaven.png]]"
banner_y: 0
---
# The World of [[Strixhaven]]

## Player Characters

```dataview  
TABLE WITHOUT ID link(file.name) AS "Name", Race, Class, ac, hp, pasperc
FROM "ttrpgs"
WHERE (NoteIcon = "player") 
WHERE (campaign = "Strixhaven")
SORT file.mtime DESC
```


## Non-Player Characters

```dataview  
TABLE WITHOUT ID link(file.name) AS "Name", race, class, college, role
FROM "content"
WHERE (type = "npc")
SORT file.mtime DESC
```

## Sessions
_Put your cursor where the session link should be. Then, from the Command Palette (CMD/CTRL+P), select either QuickAdd: Macro - Add session-player or QuickAdd: Macro - Add session-gm_.
```dataview  
TABLE date,status, summary
FROM "ttrpgs"
WHERE (type = "session") 
WHERE (campaign = "Strixhaven")
SORT file.mtime DESC
```

## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*


## Factions
```dataview
TABLE description as "Description" from "ttrpgs"
WHERE contains(lower(type),"faction")
WHERE (campaign = "Strixhaven")
```

## Custom rules

- [[Character options]]
- [[ttrpgs/Strixhaven/House Rules|House Rules]]

## [[Safety Tools]]
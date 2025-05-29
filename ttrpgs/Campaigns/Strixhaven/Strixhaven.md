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
TABLE WITHOUT ID link(file.name) AS "Name", race, Class, ac, hp, passperc
FROM "content/dnd/Strixhaven A Curriculum of Chaos/Player Characters"
WHERE type = "player"
SORT file.mtime DESC
```


## Non-Player Characters

```dataview  
TABLE WITHOUT ID link(file.name) AS "Name", race, Class, college, role, publish
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


## Factions and Groups
```dataview
TABLE WITHOUT ID file.link AS "Name", publish AS "Published" from #groups 
```
## Locations

```dataview  
TABLE WITHOUT ID link(file.name) AS "Name", publish
FROM "content"
WHERE (type = "location")
SORT file.mtime DESC
```

---
obsidianUIMode: preview
---
```meta-bind-button
label: New Campaign
icon: ""
style: primary
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: command
    command: rpg-manager:rpg-manager-create-campaign

```



```dataview  
TABLE WITHOUT ID link(file.name) AS "Current Campaign"
from "Campaigns"
where (noteicon = "Campaign")
where (status = "Active")
SORT file.mtime DESC
```

# Sessions
```meta-bind-button
label: New Session
icon: ""
style: primary
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: command
    command: rpg-manager:rpg-manager-create-session

```
> [!infobox]
> # Session Journals
> ```dataview
TABLE WITHOUT ID link(file.name) AS "Session Date",sessionstatus as "Status" 
  ,sessionDate as "Date"
from "Campaigns"
where (noteicon = "journal")
where (campaignstatus="Active")
SORT file.name DESC

# Party Members

```meta-bind-button
label: Add New Party Member
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplatePartyMember.md"
    fileName: NewPartyMember
```


```dataview  
TABLE WITHOUT ID link(file.name) AS "Name", Race, Class, ac, hp, pasperc
FROM "Campaigns/Curriculum of Chaos/08. Player Characters"
WHERE (NoteIcon = "player") 
SORT file.mtime DESC
```

# Recently Modified NPCs

```meta-bind-button
label: New NPC
icon: ""
style: primary
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: command
    command: rpg-manager:rpg-manager-create-nonplayercharacter

```

```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", Race, Class, Location, AssociatedGroup  
FROM "Campaigns/Curriculum of Chaos/03. Non Player Characters"
WHERE (NoteIcon = "npc")
SORT file.mtime DESC
```


# Recently Modified Locations

```dataview  
TABLE WITHOUT ID link(file.name) AS "Location Name", type, Government, Community-Size, size, population  
FROM "4-World"
WHERE (NoteIcon = "Settlement")  
SORT file.mtime DESC
LIMIT 10
```


# Recently Modified Notes
```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AS "Note",
    file.mtime AS "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(30 days)
AND file.name != this.file.name
    AND !contains(file.path, "z_Assets")
    AND !contains(file.path, "Inline Scripts")
    AND !contains(file.path, "z_Templates")
    AND !contains(file.path, "daily notes")
    AND !contains(file.path, "BRAT")
SORT file.mtime DESC
LIMIT 10
```

![[Vault Report]]



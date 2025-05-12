---
obsidianUIMode: preview
assa:
---

```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, ac, pasperc As "Pass Perc (WIS)"
from "2-Party"
where contains(Role, "Player") 
where contains(Status, "Active")
```

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

```meta-bind-button
label: New Player Character
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
    command: rpg-manager:rpg-manager-create-playercharacter

```

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

```meta-bind-button
label: New RPG Session
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

```meta-bind-button
label: New Session Journal
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
    command: quickadd:choice:367b111a-1632-41fe-a4a7-480fa09ff0a3

```

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
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_templates/NPCWizard.md"
    fileName: NewNPC
```

```
```meta-bind-button
label: New Location
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateSettlement.md"
    fileName: NewLocation
```

```meta-bind-button
label: New Guild or Group
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
    command: quickadd:choice:a995968b-ee00-44cb-897e-ee92f5259337

```

```meta-bind-button
label: New Magic Item
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateMagicItem.md"
    fileName: NewMagicItem
```

```meta-bind-button
label: New Player
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplatePlayer1.md"
    fileName: NewPlayer
```

`BUTTON[button_quest]` 



## Known Languages

%% This will scan the player notes for any known languages and list the unique languages that the party know here. This is handy to determine quickly if the party can understand someone. %%

```dataviewjs
dv.list(dv.pages()
		.where(p => p.Status && p.Status.includes("Active") && p.Role && p.Role.includes("Player"))
		.PlayerKnownLanguages.distinct())
```

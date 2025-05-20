---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Steel Defender
---
# [Steel Defender](3-Mechanics\CLI\bestiary\construct/steel-defender-tce.md)
*Source: Tasha's Cauldron of Everything p. 19*  

```statblock
"name": "Steel Defender (TCE)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "40 ft."
"saves":
  - "name": "Dexterity"
    "desc": "+1 plus PB"
  - "name": "Constitution"
    "desc": "+2 plus PB"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/skills.md#Athletics)"
    "desc": "+2 plus PB"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+0 plus PB × 2"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The defender can't be [surprised](/3-Mechanics/CLI/conditions.md#Surprised)."
    "name": "Vigilant"
"actions":
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target you can see. Hit: 1d8 + PB force damage."
    "name": "Force-Empowered Rend"
  - "desc": "The magical mechanisms inside the defender restore 2d8 + PB hit points\
      \ to itself or to one construct or object within 5 feet of it."
    "name": "Repair (3/Day)"
"reactions":
  - "desc": "The defender imposes disadvantage on the attack roll of one creature\
      \ it can see that is within 5 feet of it, provided the attack roll is against\
      \ a creature other than the defender."
    "name": "Deflect Attack"
"source":
  - "TCE"
"image": "/3-Mechanics/CLI/bestiary/construct/token/steel-defender-tce.webp"
```
^statblock
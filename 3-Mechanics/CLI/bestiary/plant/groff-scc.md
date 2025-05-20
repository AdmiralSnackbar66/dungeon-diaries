---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Groff
---
# [Groff](3-Mechanics\CLI\bestiary\plant/groff-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 194*  

Many a Strixhaven student wandering the bayou has stepped on a seemingly mundane patch of moss—only to discover that it was the back of a hungry groff lurking beneath the surface. These shaggy swamp creatures have canine faces and glowing blue eyes, and they are ravenous carnivores—with pest mascots being their favorite food. A handful of more intrepid Witherbloom mages have learned to follow groffs in order to track down pest mascots, but most of these mages have yet to find a way to capture the pests before the groff eats someone.

```statblock
"name": "Groff (SCC)"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "17"
  - !!int "4"
  - !!int "13"
  - !!int "7"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "4"
"traits":
  - "desc": "If the groff is motionless at the start of combat, it has advantage on\
      \ its initiative roll. Moreover, if a creature hasn't observed the groff move\
      \ or act, that creature must succeed on a DC 18 Intelligence ([Investigation](/3-Mechanics/CLI/skills.md#Investigation))\
      \ check to discern that the groff isn't an ordinary moss-covered bog patch."
    "name": "False Appearance"
  - "desc": "The groff can hold its breath for up to 1 hour."
    "name": "Hold Breath"
"actions":
  - "desc": "The groff makes one Bite attack and one Swamp Claw attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
      \ + 5) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6\
      \ + 5) slashing damage. If the target is a Medium or smaller creature, it must\
      \ succeed on a DC 15 Strength saving throw or become engulfed by the groff.\
      \ While engulfed, the target can't breathe, is [restrained](/3-Mechanics/CLI/conditions.md#Restrained),\
      \ and takes 10 (3d6) poison damage at the start of each of its turns. When the\
      \ groff moves, the engulfed target moves with it. The groff can have only one\
      \ target engulfed at a time.\n\nAn engulfed target can repeat the saving throw\
      \ at the end of its turns. On a success, the target escapes and enters the nearest\
      \ unoccupied space."
    "name": "Swamp Claw"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/plant/token/groff-scc.webp"
```
^statblock
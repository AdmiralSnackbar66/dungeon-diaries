---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Inkling Mascot
---
# [Inkling Mascot](3-Mechanics\CLI\bestiary\ooze/inkling-mascot-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 195*  

Squelching slightly as they wriggle through the air, inklings serve as the mascots for Silverquill College. These living blobs of shadowy ink are often summoned by professors who require assistance in their writing workshops—the inklings provide endless ink—or by lonely students hoping for company as they study. However, inklings can just as readily support mages in combat, disrupting opponents' sight.

```statblock
"name": "Inkling Mascot (SCC)"
"size": "Tiny"
"type": "ooze"
"alignment": "typically  Neutral"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d4 + 8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "14"
  - !!int "6"
  - !!int "7"
  - !!int "11"
"speed": "10 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/conditions.md#Blinded), [charmed](/3-Mechanics/CLI/conditions.md#Charmed),\
  \ [deafened](/3-Mechanics/CLI/conditions.md#Deafened), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [prone](/3-Mechanics/CLI/conditions.md#Prone)"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": "understands the languages of its creator but can't speak"
"cr": "1/4"
"traits":
  - "desc": "The inkling can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) psychic damage."
    "name": "Blot"
  - "desc": "The inkling sprays viscous ink at one creature within 15 feet of itself.\
      \ The target must succeed on a DC 12 Constitution saving throw or be [blinded](/3-Mechanics/CLI/conditions.md#Blinded)\
      \ until the end of the inkling's next turn."
    "name": "Ink Spray (1/Day)"
"bonus_actions":
  - "desc": "While in dim light or darkness, the inkling takes the Hide action."
    "name": "Shadow Stealth"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/ooze/token/inkling-mascot-scc.webp"
```
^statblock
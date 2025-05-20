---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Apprentice Wizard
---
# [Apprentice Wizard](3-Mechanics\CLI\bestiary\humanoid/apprentice-wizard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 259, Volo's Guide to Monsters p. 209*  

Apprentices are novice arcane spellcasters who serve more experienced wizards or attend school. They perform menial work like cooking or cleaning in exchange for education in the ways of magic.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Apprentice Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "10"
"ac_class": "13 with [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/4"
"actions":
  - "desc": "Melee  or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 7 (1d10 + 2) force damage."
    "name": "Arcane Burst"
  - "desc": "The apprentice casts one of the following spells, using Intelligence\
      \ as the spellcasting ability (spell save DC 12)\n\nAt will: [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n1/day\
      \ each: [burning hands](/3-Mechanics/CLI/spells/burning-hands-xphb.md), [disguise\
      \ self](/3-Mechanics/CLI/spells/disguise-self-xphb.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/apprentice-wizard-mpmm.webp"
```
^statblock

## Environment

urban
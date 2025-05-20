---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bard
---
# [Bard](3-Mechanics\CLI\bestiary\humanoid/bard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 59, Volo's Guide to Monsters p. 211*  

Bards are gifted poets, storytellers, and entertainers who travel far and wide. They're commonly found in taverns or in the company of jolly bands of adventurers, rough-and-tumble mercenaries, and wealthy patrons.

Each bard is a master of at least one type of performance. You may choose a bard's main type, or you may roll on the Bard [Performance](/3-Mechanics/CLI/skills.md#Performance) Types table to determine it.

**Bard Performance Types**

`dice: [](bard-mpmm.md#^bard-performance-types)`

| dice: d10 | Performance Type |
|-----------|------------------|
| 1 | Poetry |
| 2 | Singing |
| 3 | Bagpipe |
| 4 | Flute |
| 5 | Dancing |
| 6 | Drum |
| 7 | Lute |
| 8 | Puppetry |
| 9 | Mime |
| 10 | Acting |
^bard-performance-types

```statblock
"name": "Bard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt-xphb.md)"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "13"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": "+4"
  - "wisdom": "+3"
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/skills.md#Acrobatics)"
    "desc": "+4"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Performance](/3-Mechanics/CLI/skills.md#Performance)"
    "desc": "+6"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "2"
"actions":
  - "desc": "The bard makes two Shortsword or Shortbow attacks. It can replace one\
      \ attack with a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit:\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
  - "desc": "Each creature in a 15-foot cube originating from the bard must make a\
      \ DC 12 Constitution saving throw. On a failed save, a creature takes 9 (2d8)\
      \ thunder damage and is pushed up to 10 feet away from the bard. On a successful\
      \ save, a creature takes half as much damage and isn't pushed."
    "name": "Cacophony (Recharge 4-6)"
  - "desc": "The bard casts one of the following spells, using Charisma as the spellcasting\
      \ ability (spell save DC 12):\n\nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights-xphb.md),\
      \ [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n1/day each: [charm person](/3-Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [invisibility](/3-Mechanics/CLI/spells/invisibility-xphb.md), [sleep](/3-Mechanics/CLI/spells/sleep-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The bard targets one creature within 30 feet of it. If the target can\
      \ hear the bard, the target must succeed on a DC 12 Charisma saving throw or\
      \ have disadvantage on ability checks, attack rolls, and saving throws until\
      \ the start of the bard's next turn."
    "name": "Taunt (2/Day)"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/bard-mpmm.webp"
```
^statblock

## Environment

urban
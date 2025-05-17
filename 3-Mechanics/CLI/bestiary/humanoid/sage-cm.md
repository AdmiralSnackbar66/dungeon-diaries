---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Sage"]
---
# [Sage](3-Mechanics\CLI\bestiary\humanoid/sage-cm.md)
*Source: Candlekeep Mysteries p. 9*  

Candlekeep's resident lore experts are master sages and sages who dedicate themselves to scholarship above all.

```statblock
"name": "Sage (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "18"
- !!int "15"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "6"
  "Nature": !!int "8"
  "Investigation": !!int "8"
  "Religion": !!int "8"
  "Insight": !!int "4"
  "History": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 12"
"languages": "Common plus any four languages"
"cr": "1/2"
"traits":
- "desc": "The sage casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (save DC 14, +6 to hit with spell attacks):\n\nAt will: [light](/3-Mechanics/CLI/spells/light-xphb.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [mending](/3-Mechanics/CLI/spells/mending-xphb.md),\
    \ \n\n1/day each: [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md),\
    \ [levitate](/3-Mechanics/CLI/spells/levitate-xphb.md), [locate object](/3-Mechanics/CLI/spells/locate-object-xphb.md),\
    \ [see invisibility](/3-Mechanics/CLI/spells/see-invisibility-xphb.md), [sending](/3-Mechanics/CLI/spells/sending-xphb.md),\
    \ [tongues](/3-Mechanics/CLI/spells/tongues-xphb.md), [unseen servant](/3-Mechanics/CLI/spells/unseen-servant-xphb.md)\n\
    \n3/day each: [comprehend languages](/3-Mechanics/CLI/spells/comprehend-languages-xphb.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic-xphb.md), [identify](/3-Mechanics/CLI/spells/identify-xphb.md), "
  "name": "Spellcasting"
"actions":
- "desc": "Melee Spell Attack: +6 to hit (with advantage if the target is wearing\
    \ armor made of metal), reach 5 ft., one creature. Hit: 9 (2d8) lightning damage,\
    \ and the target can't take reactions until the start of its next turn."
  "name": "Shocking Grasp (Cantrip)"
"reactions":
- "desc": "When the sage is hit by an attack or targeted by a [magic missile](/3-Mechanics/CLI/spells/magic-missile-xphb.md)\
    \ spell, it calls forth an [invisible](/3-Mechanics/CLI/conditions.md#Invisible)\
    \ barrier of magical force that protects it. Until the start of its next turn,\
    \ the sage has a +5 bonus to AC, including against the triggering attack, and\
    \ it takes no damage from magic missile."
  "name": "Shield (1st-Level Spell; 3/Day)"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/sage-cm.webp"
```
^statblock
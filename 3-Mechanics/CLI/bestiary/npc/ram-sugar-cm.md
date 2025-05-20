---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ram Sugar
---
# [Ram Sugar](3-Mechanics\CLI\bestiary\npc/ram-sugar-cm.md)
*Source: Candlekeep Mysteries p. 132*  

Fanatics are often part of a cult's leadership, using their charisma and dogma to influence and prey on those of weak will. Most are interested in personal power above all else.

```statblock
"name": "Ram Sugar (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "13"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Persuasion](/3-Mechanics/CLI/skills.md#Persuasion)"
    "desc": "+4"
  - "name": "[Religion](/3-Mechanics/CLI/skills.md#Religion)"
    "desc": "+2"
"damage_resistances": "fire"
"senses": "passive Perception 11"
"languages": "Common, Draconic"
"cr": "2"
"traits":
  - "desc": "Ram Sugar is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 11, +3 to hit with spell attacks). Ram Sugar has the following\
      \ cleric spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/spells/light-xphb.md),\
      \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame-xphb.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n1st level (4 slots): [command](/3-Mechanics/CLI/spells/command-xphb.md),\
      \ [inflict wounds](/3-Mechanics/CLI/spells/inflict-wounds-xphb.md), [shield\
      \ of faith](/3-Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\n2nd level\
      \ (3 slots): [hold person](/3-Mechanics/CLI/spells/hold-person-xphb.md), [spiritual\
      \ weapon](/3-Mechanics/CLI/spells/spiritual-weapon-xphb.md)"
    "name": "Spellcasting"
  - "desc": "Ram Sugar has advantage on saving throws against being [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
      \ or [frightened](/3-Mechanics/CLI/conditions.md#Frightened)."
    "name": "Dark Devotion"
"actions":
  - "desc": "Ram Sugar makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
  - "desc": "Ram Sugar exhales fire in a 30-foot-long line that is 5 feet wide. Any\
      \ creature in the line must make a DC 11 Dexterity saving throw, taking 7 (2d6)\
      \ fire damage on a failed save, or half as much damage on a successful one."
    "name": "Breath Weapon (Recharges after a Short or Long Rest)"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/ram-sugar-cm.webp"
```
^statblock
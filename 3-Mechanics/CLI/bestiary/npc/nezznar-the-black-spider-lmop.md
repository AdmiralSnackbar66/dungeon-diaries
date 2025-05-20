---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/lmop
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nezznar the Black Spider
---
# [Nezznar the Black Spider](3-Mechanics\CLI\bestiary\npc/nezznar-the-black-spider-lmop.md)
*Source: Lost Mine of Phandelver p. 59*  

Drow (dark elves) are a devious, scheming subterranean race that worships Lolth, the Demon Queen of Spiders.

Drow society is strictly matriarchal. Male drow are relegated to servitor roles, and while most train as warriors, a few, such as Nezznar, become skilled wizards.

```statblock
"name": "Nezznar the Black Spider (LMoP)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "11"
"ac_class": "14 with [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "1"
"stats":
  - !!int "9"
  - !!int "13"
  - !!int "10"
  - !!int "16"
  - !!int "14"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "intelligence": "+5"
  - "wisdom": "+4"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+3"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "2"
"traits":
  - "desc": "Nezznar is a 4th-level spellcaster that uses Intelligence as his spellcasting\
      \ ability (spell save DC 13; +5 to hit with spell attacks). Nezznar has the\
      \ following spells prepared from the wizard's spell list:\n\nCantrips (at\
      \ will): [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost-xphb.md),\
      \ [shocking grasp](/3-Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\n1st\
      \ level (4 slots): [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md),\
      \ [magic missile](/3-Mechanics/CLI/spells/magic-missile-xphb.md), [shield](/3-Mechanics/CLI/spells/shield-xphb.md)\n\
      \n2nd level (3 slots): [invisibility](/3-Mechanics/CLI/spells/invisibility-xphb.md),\
      \ [suggestion](/3-Mechanics/CLI/spells/suggestion-xphb.md)"
    "name": "Spellcasting"
  - "desc": "Nezznar can innately cast the following spells, requiring no material\
      \ components:\n\nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights-xphb.md)\n\
      \n1/day each: [darkness](/3-Mechanics/CLI/spells/darkness-xphb.md), [faerie\
      \ fire](/3-Mechanics/CLI/spells/faerie-fire-xphb.md) (save DC 12)"
    "name": "Innate Spellcasting"
  - "desc": "Nezznar has a [spider staff](/3-Mechanics/CLI/items/spider-staff-lmop.md)."
    "name": "Special Equipment"
  - "desc": "Nezznar has advantage on saving throws against being [charmed](/3-Mechanics/CLI/conditions.md#Charmed),\
      \ and magic can't put him to sleep."
    "name": "Fey Ancestry"
  - "desc": "Nezznar has disadvantage on attack rolls when he or his target is in\
      \ sunlight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
      \ - 1) bludgeoning damage plus 3 (d6) poison damage."
    "name": "Spider Staff"
"source":
  - "LMoP"
"image": "/3-Mechanics/CLI/bestiary/npc/token/nezznar-the-black-spider-lmop.webp"
```
^statblock
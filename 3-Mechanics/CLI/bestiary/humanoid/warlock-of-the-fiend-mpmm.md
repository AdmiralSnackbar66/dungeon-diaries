---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Warlock of the Fiend
---
# [Warlock of the Fiend](3-Mechanics\CLI\bestiary\humanoid/warlock-of-the-fiend-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 255, Volo's Guide to Monsters p. 219*  

Warlocks of the Fiend gain their powers through magical pacts forged with archfiends of the Lower Planes. These warlocks often keep [imps](/3-Mechanics/CLI/bestiary/fiend/imp-xmm.md) or [quasits](/3-Mechanics/CLI/bestiary/fiend/quasit-xmm.md) as companions, and they tend toward philosophical extremes: consorting with fiendish cults or dedicating their lives to destroying such cults.

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

```statblock
"name": "Warlock of the Fiend (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "16 with [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "15"
  - !!int "12"
  - !!int "12"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": "+4"
  - "charisma": "+7"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Persuasion](/3-Mechanics/CLI/skills.md#Persuasion)"
    "desc": "+7"
  - "name": "[Religion](/3-Mechanics/CLI/skills.md#Religion)"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal)"
"cr": "7"
"traits":
  - "desc": "When the warlock makes an ability check or saving throw, it can add a\
      \ d10 to the roll. It can do this after the roll is made but before any of the\
      \ roll's effects occur."
    "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "The warlock makes three Scimitar attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage plus 14 (4d6) fire damage."
    "name": "Scimitar"
  - "desc": "Green flame explodes in a 10-foot-radius sphere centered on a point within\
      \ 120 feet of the warlock. Each creature in that area must make a DC 15 Dexterity\
      \ saving throw, taking 16 (3d10) fire damage and 11 (2d10) necrotic damage on\
      \ a failed save, or half as much damage on a successful one."
    "name": "Hellfire"
  - "desc": "The warlock casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 15): \n\nAt will: [alter self](/3-Mechanics/CLI/spells/alter-self-xphb.md),\
      \ [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md) (self only), [mage\
      \ hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [minor illusion](/3-Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n1/day\
      \ each: [banishment](/3-Mechanics/CLI/spells/banishment-xphb.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift-xphb.md),\
      \ [suggestion](/3-Mechanics/CLI/spells/suggestion-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "In response to being damaged by a visible creature within 60 feet of\
      \ it, the warlock forces that creature to make a DC 15 Constitution saving throw,\
      \ taking 22 (4d10) necrotic damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Fiendish Rebuke (3/Day)"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/warlock-of-the-fiend-mpmm.webp"
```
^statblock

## Environment

arctic, desert, underdark, urban
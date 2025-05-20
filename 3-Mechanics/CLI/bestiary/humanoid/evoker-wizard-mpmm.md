---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Evoker Wizard
---
# [Evoker Wizard](3-Mechanics\CLI\bestiary\humanoid/evoker-wizard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 262, Volo's Guide to Monsters p. 214*  

Evokers harness arcane energy to destroy. Many armies employ evokers to rain destruction down on enemy forces.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Evoker Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "121"
"hit_dice": "22d8 + 22"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "12"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": "+7"
  - "wisdom": "+5"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"actions":
  - "desc": "The evoker makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 25 (4d10 + 3) force damage."
    "name": "Arcane Burst"
  - "desc": "The evoker unleashes a magical explosion of a particular damage type:\
      \ cold, fire, lightning, or thunder. The magic erupts in a 20-foot-radius sphere\
      \ centered on a point within 150 feet of the evoker. Each creature in that area\
      \ must make a DC 15 Dexterity saving throw. The evoker can select up to three\
      \ creatures it can see in the area to ignore the spell, as the evoker sculpts\
      \ the spell's energy around them. On a failed save, a creature takes 40 (9d8)\
      \ damage of the chosen type and is knocked [prone](/3-Mechanics/CLI/conditions.md#Prone).\
      \ On a successful save, a creature takes half as much damage and isn't knocked\
      \ [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Sculpted Explosion (Recharge 4-6)"
  - "desc": "The evoker casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (spell save DC 15):\n\nAt will: [light](/3-Mechanics/CLI/spells/light-xphb.md),\
      \ [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [message](/3-Mechanics/CLI/spells/message-xphb.md),\
      \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n2/day\
      \ each: [ice storm](/3-Mechanics/CLI/spells/ice-storm-xphb.md), [lightning\
      \ bolt](/3-Mechanics/CLI/spells/lightning-bolt-xphb.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)\n\
      \n1/day each: [wall of ice](/3-Mechanics/CLI/spells/wall-of-ice-xphb.md)"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/evoker-wizard-mpmm.webp"
```
^statblock

## Environment

urban
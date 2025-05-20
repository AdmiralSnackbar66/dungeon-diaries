---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Grung Wildling
---
# [Grung Wildling](3-Mechanics\CLI\bestiary\humanoid/grung-wildling-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*  

Gifted with druidic magic, a grung wildling typically serves as an advisor, a healer, and a nurturer of crops.

## Grungs

Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

```statblock
"name": "Grung Wildling (MPMM)"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "5d6 + 10"
"modifier": !!int "3"
"stats":
  - !!int "7"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "15"
  - !!int "11"
"speed": "25 ft., climb 25 ft."
"saves":
  - "dexterity": "+5"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/skills.md#Athletics)"
    "desc": "+2"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
  - "name": "[Survival](/3-Mechanics/CLI/skills.md#Survival)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "passive Perception 14"
"languages": "Grung"
"cr": "1"
"traits":
  - "desc": "The grung can breathe air and water."
    "name": "Amphibious"
  - "desc": "Any creature that grapples the grung or otherwise comes into direct contact\
      \ with the grung's skin must succeed on a DC 12 Constitution saving throw or\
      \ become [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned) for 1 minute. A\
      \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned) creature no longer in\
      \ direct contact with the grung can repeat the saving throw at the end of each\
      \ of its turns, ending the effect on itself on a success."
    "name": "Poisonous Skin"
  - "desc": "The grung's long jump is up to 25 feet and its high jump is up to 15\
      \ feet, with or without a running start."
    "name": "Standing Leap"
  - "desc": "If the grung isn't immersed in water for at least 1 hour during a day,\
      \ it suffers 1 level of [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion)\
      \ at the end of that day. The grung can recover from this [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion)\
      \ only through magic or by immersing itself in water for at least 1 hour."
    "name": "Water Dependency"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 5 (2d4) poison damage."
    "name": "Dagger"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit:\
      \ 6 (1d6 + 3) piercing damage plus 5 (2d4) poison damage."
    "name": "Shortbow"
  - "desc": "The grung casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 12):\n\nAt will: [druidcraft](/3-Mechanics/CLI/spells/druidcraft-xphb.md)\n\
      \n3/day each: [cure wounds](/3-Mechanics/CLI/spells/cure-wounds-xphb.md),\
      \ [spike growth](/3-Mechanics/CLI/spells/spike-growth-xphb.md)\n\n2/day:\
      \ [plant growth](/3-Mechanics/CLI/spells/plant-growth-xphb.md)"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/grung-wildling-mpmm.webp"
```
^statblock

## Environment

forest
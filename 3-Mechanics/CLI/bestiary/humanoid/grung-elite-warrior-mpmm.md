---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Grung Elite Warrior
---
# [Grung Elite Warrior](3-Mechanics\CLI\bestiary\humanoid/grung-elite-warrior-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*  

A grung elite warrior typically leads a group of grung and other warriors into battle and is often accompanied by a grung wildling.

## Grungs

Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

```statblock
"name": "Grung Elite Warrior (MPMM)"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"modifier": !!int "3"
"stats":
  - !!int "7"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "11"
  - !!int "12"
"speed": "25 ft., climb 25 ft."
"saves":
  - "dexterity": "+5"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/skills.md#Athletics)"
    "desc": "+2"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
  - "name": "[Survival](/3-Mechanics/CLI/skills.md#Survival)"
    "desc": "+2"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "2"
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
  - "desc": "The grung makes a chirring noise to which grungs are immune. Each Humanoid\
      \ or Beast that is within 15 feet of the grung and able to hear it must succeed\
      \ on a DC 12 Wisdom saving throw or be [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
      \ until the end of the grung's next turn."
    "name": "Mesmerizing Chirr (Recharge 6)"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/grung-elite-warrior-mpmm.webp"
```
^statblock

## Environment

forest
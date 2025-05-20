---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Immortal Lotus Monk
---
# [Immortal Lotus Monk](3-Mechanics\CLI\bestiary\humanoid/immortal-lotus-monk-cm.md)
*Source: Candlekeep Mysteries p. 165*  

```statblock
"name": "Immortal Lotus Monk (CM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "Unarmored Defense"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "14"
  - !!int "11"
  - !!int "14"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/skills.md#Acrobatics)"
    "desc": "+6"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+6"
"senses": "passive Perception 15"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "While the monk is wearing no armor and wielding no shield, its AC includes\
      \ its Wisdom modifier."
    "name": "Unarmored Defense"
"actions":
  - "desc": "The monk makes two attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) force damage, and if the target is a creature, it must succeed on a DC\
      \ 14 Dexterity saving throw or be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Force Strike"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 20/60 ft., one target. Hit:\
      \ 5 (1d4 + 3) piercing damage."
    "name": "Dart"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/immortal-lotus-monk-cm.webp"
```
^statblock
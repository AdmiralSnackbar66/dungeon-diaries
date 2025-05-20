---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Animated Chained Library
---
# [Animated Chained Library](3-Mechanics\CLI\bestiary\construct/animated-chained-library-cm.md)
*Source: Candlekeep Mysteries p. 24*  

The three shelves are filled with books bound in iron covers, which are attached to chains that secure them to the shelves—a chained library. The reading desk is used to support the chained books while they are being read.

```statblock
"name": "Animated Chained Library (CM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "-1"
"stats":
  - !!int "15"
  - !!int "8"
  - !!int "14"
  - !!int "1"
  - !!int "5"
  - !!int "1"
"speed": "10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/conditions.md#Blinded), [charmed](/3-Mechanics/CLI/conditions.md#Charmed),\
  \ [deafened](/3-Mechanics/CLI/conditions.md#Deafened), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned),\
  \ [prone](/3-Mechanics/CLI/conditions.md#Prone)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1"
"traits":
  - "desc": "If the library is motionless at the start of combat, it has advantage\
      \ on its initiative roll. Moreover, if a creature hasn't observed the library\
      \ move or act, that creature must succeed on a DC 15 Wisdom ([Perception](/3-Mechanics/CLI/skills.md#Perception))\
      \ check to discern that the library is animate."
    "name": "False Object"
"actions":
  - "desc": "The library makes two attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) bludgeoning damage, and if the target is a creature, it is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 12)."
    "name": "Chained Book"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/construct/token/animated-chained-library-cm.webp"
```
^statblock
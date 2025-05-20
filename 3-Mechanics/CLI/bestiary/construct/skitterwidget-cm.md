---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Skitterwidget
---
# [Skitterwidget](3-Mechanics\CLI\bestiary\construct/skitterwidget-cm.md)
*Source: Candlekeep Mysteries p. 136*  

A skitterwidget is made of metal and bears a passing resemblance to a giant dog-headed cockroach. No two skitterwidgets look exactly alike, but all are surprisingly cute.

```statblock
"name": "Skitterwidget (CM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "18"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "30 ft., climb 30 ft."
"damage_immunities": "lightning, poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/conditions.md#Blinded), [deafened](/3-Mechanics/CLI/conditions.md#Deafened),\
  \ [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Skitterwidget"
"cr": "5"
"traits":
  - "desc": "Whenever the skitterwidget is subjected to lightning damage, it takes\
      \ no damage and instead regains a number of hit points equal to the lightning\
      \ damage dealt."
    "name": "Lightning Absorption"
  - "desc": "The skitterwidget doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The skitterwidget makes two attacks: one with its bite and one with its\
      \ tail."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) piercing damage. If the target is a creature, it is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ by the skitterwidget (escape DC 13)."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage plus 10 (3d6) lightning damage, and if the target is\
      \ a creature, it must succeed on a DC 15 Constitution saving throw or be [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
      \ until the end of its next turn."
    "name": "Tail"
"reactions":
  - "desc": "The skitterwidget imposes disadvantage on one attack roll made against\
      \ a kiddywidget it can see within 5 feet of it."
    "name": "Good Parent"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/construct/token/skitterwidget-cm.webp"
```
^statblock
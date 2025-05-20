---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dancing Item
---
# [Dancing Item](3-Mechanics\CLI\bestiary\construct/dancing-item-tce.md)
*Source: Tasha's Cauldron of Everything p. 29*  

```statblock
"name": "Dancing Item (TCE)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned), [frightened](/3-Mechanics/CLI/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The item is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "When any creature starts its turn within 10 feet of the item, the item\
      \ can increase or decrease (your choice) the walking speed of that creature\
      \ by 10 feet until the end of the turn, provided the item isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)."
    "name": "Irrepressible Dance"
"actions":
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target you can see. Hit: 1d10 + PB force damage."
    "name": "Force-Empowered Slam"
"source":
  - "TCE"
"image": "/3-Mechanics/CLI/bestiary/construct/token/dancing-item-tce.webp"
```
^statblock
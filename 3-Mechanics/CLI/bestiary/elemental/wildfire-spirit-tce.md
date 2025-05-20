---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wildfire Spirit
---
# [Wildfire Spirit](3-Mechanics\CLI\bestiary\elemental/wildfire-spirit-tce.md)
*Source: Tasha's Cauldron of Everything p. 40*  

```statblock
"name": "Wildfire Spirit (TCE)"
"size": "Small"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "14"
  - !!int "13"
  - !!int "15"
  - !!int "11"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "fire"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [frightened](/3-Mechanics/CLI/conditions.md#Frightened),\
  \ [grappled](/3-Mechanics/CLI/conditions.md#Grappled), [prone](/3-Mechanics/CLI/conditions.md#Prone),\
  \ [restrained](/3-Mechanics/CLI/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"actions":
  - "desc": "Ranged Weapon Attack: your spell attack modifier to hit, range 60 ft.,\
      \ one target you can see. Hit: 1d6 + PB fire damage."
    "name": "Flame Seed"
  - "desc": "The spirit and each willing creature of your choice within 5 feet of\
      \ it teleport up to 15 feet to unoccupied spaces you can see. Then each creature\
      \ within 5 feet of the space that the spirit left must succeed on a Dexterity\
      \ saving throw against your spell save DC or take 1d6 + PB fire damage."
    "name": "Fiery Teleportation"
"source":
  - "TCE"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/wildfire-spirit-tce.webp"
```
^statblock
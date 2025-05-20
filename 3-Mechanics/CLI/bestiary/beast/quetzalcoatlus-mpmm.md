---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
statblock-link: "#^statblock"
aliases:
- Quetzalcoatlus
---
# [Quetzalcoatlus](3-Mechanics\CLI\bestiary\beast/quetzalcoatlus-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*  

This giant relative of the pteranodon has a wingspan exceeding 30 feet. Although it can walk like a quadruped, it is more comfortable in the air.

```statblock
"name": "Quetzalcoatlus (MPMM)"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "30"
"hit_dice": "4d12 + 4"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "13"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "10 ft., fly 80 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The quetzalcoatlus doesn't provoke an [opportunity attack](/3-Mechanics/CLI/actions.md#Opportunity%20Attack)\
      \ when it flies out of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit:\
      \ 12 (3d6 + 2) piercing damage. If the quetzalcoatlus flew least 30 feet toward\
      \ the target immediately before the hit, the target takes an extra 10 (3d6)\
      \ piercing damage."
    "name": "Bite"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/beast/token/quetzalcoatlus-mpmm.webp"
```
^statblock

## Environment

coastal, hill, mountain
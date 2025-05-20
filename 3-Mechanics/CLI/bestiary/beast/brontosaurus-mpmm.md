---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
statblock-link: "#^statblock"
aliases:
- Brontosaurus
---
# [Brontosaurus](3-Mechanics\CLI\bestiary\beast/brontosaurus-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95, Volo's Guide to Monsters p. 139*  

This massive four-legged dinosaur is large enough that most predators leave it alone. Its deadly tail can drive away or kill smaller threats.

```statblock
"name": "Brontosaurus (MPMM)"
"size": "Gargantuan"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "121"
"hit_dice": "9d20 + 27"
"modifier": !!int "-1"
"stats":
  - !!int "21"
  - !!int "9"
  - !!int "17"
  - !!int "2"
  - !!int "10"
  - !!int "7"
"speed": "30 ft."
"saves":
  - "constitution": "+6"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"actions":
  - "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 27\
      \ (5d8 + 5) bludgeoning damage, and the target must succeed on a DC 14 Strength\
      \ saving throw or be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Stomp"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 32\
      \ (6d8 + 5) bludgeoning damage"
    "name": "Tail"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/beast/token/brontosaurus-mpmm.webp"
```
^statblock

## Environment

forest, grassland
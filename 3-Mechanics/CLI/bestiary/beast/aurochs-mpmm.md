---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast/cattle
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aurochs
---
# [Aurochs](3-Mechanics\CLI\bestiary\beast/aurochs-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 71, Volo's Guide to Monsters p. 207*  

An aurochs is a large, fierce bovine with jutting horns. In many lands, herds of aurochs roam free, while elsewhere orcs and humans train them from an early age to carry riders into combat.

## Cattle

Many kinds of cattle roam the multiverse, some of them domesticated and others feral. In many cultures, cattle are almost like family to the folk who tend to them.

```statblock
"name": "Aurochs (MPMM)"
"size": "Large"
"type": "beast"
"subtype": "cattle"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "4d10 + 16"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "19"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "50 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "2"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14\
      \ (2d8 + 5) piercing damage. If the aurochs moved at least 20 feet straight\
      \ toward the target immediately before the hit, the target takes an extra 9\
      \ (2d8) piercing damage, and the target must succeed on a DC 15 Strength saving\
      \ throw or be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone) if it is\
      \ a creature."
    "name": "Gore"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/beast/token/aurochs-mpmm.webp"
```
^statblock

## Environment

grassland, hill, mountain
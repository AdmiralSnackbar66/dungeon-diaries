---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thorny Vegepygmy
---
# [Thorny Vegepygmy](3-Mechanics\CLI\bestiary\plant/thorny-vegepygmy-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 253, Volo's Guide to Monsters p. 197*  

If a Beast such as a dog or a bear dies from [russet mold](/3-Mechanics/CLI/traps-hazards/russet-mold-vgm.md), the result is a bestial moldy called a thorny, instead of a bipedal vegepygmy. Thornies are less intelligent than other vegepygmies, but they are larger and more ferocious and have thorn-covered bodies.

## Vegepygmies

Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [myconid adults](/3-Mechanics/CLI/bestiary/plant/myconid-adult-xmm.md), [shriekers](/3-Mechanics/CLI/bestiary/plant/shrieker-fungus-xmm.md), and [violet fungi](/3-Mechanics/CLI/bestiary/plant/violet-fungus-xmm.md).

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

```statblock
"name": "Thorny Vegepygmy (MPMM)"
"size": "Medium"
"type": "plant"
"alignment": "Typically  Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "12"
  - !!int "13"
  - !!int "2"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+3"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The thorny has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/skills.md#Stealth))\
      \ checks it makes in any terrain with ample obscuring vegetation."
    "name": "Plant Camouflage"
  - "desc": "The thorny regains 5 hit points at the start of its turn. If it takes\
      \ cold, fire, or necrotic damage, this trait doesn't function at the start of\
      \ the thorny's next turn. The thorny dies only if it starts its turn with 0\
      \ hit points and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "At the start of its turn, the thorny deals 2 (d4) piercing damage to\
      \ any creature grappling it."
    "name": "Thorny Body"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d8 + 1) piercing damage."
    "name": "Bite"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/plant/token/thorny-vegepygmy-mpmm.webp"
```
^statblock

## Environment

forest, swamp
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Maw Demon
---
# [Maw Demon](3-Mechanics\CLI\bestiary\fiend/maw-demon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 176, Volo's Guide to Monsters p. 137*  

> [!quote] A quote from Tasha  
> 
> I once pulled a whole bottle of fine strawberry liquor from the belly of a maw demon. No clue where it might've devoured such a find, but I'm not complaining.

Maw demons share the ceaseless hunger for carnage and mortal flesh of their master, Yeenoghu, who appears in this book. After a maw demon rests for 8 hours, anything devoured by it is transported directly into the Lord of Savagery's gullet.

Maw demons appear among gnoll war bands that worship Yeenoghu, usually summoned as part of ritual offerings of freshly slain Humanoids made to him. The gnolls don't command the demons, which simply accompany the war band and attack whatever creatures the gnolls fall upon.

Because maw demons are indiscriminate in their hunger, their stomachs contain all manner of oddities in addition to the remains of their recent prey. You may choose one or more items appropriate for your campaign for a maw demon to contain, or roll on the Maw Demon's Stomach Contents table.

**Maw Demon's Stomach Contents**

`dice: [](maw-demon-mpmm.md#^maw-demons-stomach-contents)`

| dice: d8 | Stomach Contents |
|----------|------------------|
| 1 | Intact wine skin with wine still in it |
| 2 | Iron skillet |
| 3 | Remnants of silk banner embroidered with a moon-and-stars motif |
| 4 | Corroded gauntlet with skeletal hand in it |
| 5 | Assorted keys |
| 6 | Old leather boot |
| 7 | Beehive |
| 8 | Humanoid teeth |
^maw-demons-stomach-contents

```statblock
"name": "Maw Demon (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "-1"
"stats":
  - !!int "14"
  - !!int "8"
  - !!int "13"
  - !!int "5"
  - !!int "8"
  - !!int "5"
"speed": "30 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [frightened](/3-Mechanics/CLI/conditions.md#Frightened),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "1"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d8 + 2) piercing damage."
    "name": "Bite"
  - "desc": "The demon vomits in a 15-foot cube. Each creature in that area must succeed\
      \ on a DC 11 Dexterity saving throw or take 11 (2d10) acid damage and fall [prone](/3-Mechanics/CLI/conditions.md#Prone)\
      \ in the spew."
    "name": "Disgorge (Recharge 6)"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/maw-demon-mpmm.webp"
```
^statblock

## Environment

underdark
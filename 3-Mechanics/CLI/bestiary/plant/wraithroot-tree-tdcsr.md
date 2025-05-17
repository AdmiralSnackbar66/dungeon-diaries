---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Wraithroot Tree"]
---
# [Wraithroot Tree](3-Mechanics\CLI\bestiary\plant/wraithroot-tree-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 259*  

When ancient or nefarious entities need to safeguard objects of grave consequence—particularly items intertwined with their immortality—they bury those secrets alongside wraithroot trees, around which the people of Exandria dare not tread.

## Vengeful Restoration

Wraithroot trees are the product of foul necromancy and transmutation rituals that first see a tree awakened, gifting it with advanced intelligence and imbuing its roots with mobility. But the [awakened tree's](awakened-tree-xmm.md) first moments of joyous awareness are tragically cut short as necromantic energy courses through it, channeling rage and evil to transform it into a wraithroot—filled with longing to obliterate the life it so fleetingly enjoyed.

## Wraithroot Sites

In Tal'Dorei, wraithroots can be found in a number of locations, including the "Parchwood Timberlands" below "Whitestone", the "Torian Forest" along the southwestern edge of the "Cliffkeep Mountains", the "Grey Valley" north of "Kraghammer", and the Moldered Grove southeast of the Ashkeeper Peaks.

## Alignment

Neutral evil.

```statblock
"name": "Wraithroot Tree (TDCSR)"
"size": "Huge"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "270"
"hit_dice": "20d12 + 140"
"stats":
- !!int "23"
- !!int "8"
- !!int "24"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "8"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"condition_immunities": "[stunned](3-Mechanics/CLI/rules/conditions.md#Stunned), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "passive Perception 18"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "14"
"traits":
- "desc": "While the wraithroot tree remains motionless, it is indistinguishable from\
    \ a normal tree."
  "name": "False Appearance"
- "desc": "On its turn, the wraithroot tree can move through other creatures and objects\
    \ as if they were difficult terrain. The tree does not provoke [opportunity attacks](3-Mechanics/CLI/rules/actions.md#Opportunity%20Attack)\
    \ while moving, and must finish its movement in a space unoccupied by any Large\
    \ or larger objects or creatures. Any Medium or smaller creature in the tree's\
    \ space when it finishes moving is pushed to the nearest unoccupied space of the\
    \ creature's choice. Medium or smaller objects in the tree's space are pushed\
    \ to the nearest unoccupied spaces of the tree's choice."
  "name": "Wraith Shift"
"actions":
- "desc": "The wraithroot tree makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 16\
    \ (3d6 + 6) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +11 to hit, range 60/180 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage."
  "name": "Rock"
- "desc": "The wraithroot tree pulls life energy from the area around it, leaving\
    \ creatures temporarily frail. Each creature that is not a construct or undead\
    \ within 30 feet of the tree must succeed on a DC 16 Constitution saving throw\
    \ or have its speed halved and gain vulnerability to bludgeoning damage until\
    \ the end of the tree's next turn."
  "name": "Wraithstorm (Recharge 5-6)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/plant/token/wraithroot-tree-tdcsr.webp"
```
^statblock

## Environment

forest, mountain
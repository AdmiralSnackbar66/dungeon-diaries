---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Cold Snap Spirit"]
---
# [Cold Snap Spirit](3-Mechanics\CLI\bestiary\elemental/cold-snap-spirit-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 234*  

A number of "elves" and archmagi still live who remember the "Icelost Years"—a dark time in Tal'Dorei's history, when legions of ice-rimed warriors spilled forth from the Elemental Planes, intent on turning the world into a gelid wasteland. Cold snap spirits are a surviving echo of the vast armies of the cruel elemental "Errevon the Rimelord", who nearly claimed Tal'Dorei for his own. They linger in the ever-frozen forests of the "Frostweald", atop the snow-capped peaks of the "Cliffkeep Mountains", and amid the arctic plains of the "Neverfields".

## Reclusive Spirits

When separated from the malign command of an elemental warlord, cold snap spirits are little more than animalistic creatures of instinct. They drift harmlessly about cold regions of the Material Plane that mirror the interminable frost of their plane of origin.

## Heated Hatred

Normally docile cold snap spirits are driven into a terrible frenzy by the presence of heat. They have an instinctive fear of flame, and even the warmth of a living creature can be enough to drive them into a murderous rage. Once the source of heat is annihilated, a cold snap spirit rapidly returns to a state of calm ambivalence.

## Inchoate Berserkers

Cold snap spirits make excellent soldiers for elemental beings with ambition and the will to dominate. Their aversion to warm climes is quickly overridden by loyalty to their commander, and the ambient heat of even a temperate region is enough to drive them to a state of constant frenzy.

```statblock
"name": "Cold Snap Spirit (TDCSR)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "20"
- !!int "14"
- !!int "2"
- !!int "7"
- !!int "3"
"speed": "30 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "1"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "1"
"damage_vulnerabilities": "fire"
"damage_resistances": "slashing, piercing from nonmagical attacks"
"damage_immunities": "cold, poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": ""
"cr": "5"
"traits":
- "desc": "The cold snap spirit can sense heat within 60 feet of it."
  "name": "Sense Heat"
- "desc": "Any creature that starts its turn within 5 feet of a cold snap spirit takes\
    \ 5 (1d10) cold damage."
  "name": "Frozen Aura"
- "desc": "If the spirit attacks a creature that is within 5 feet of another cold\
    \ snap spirit, the attack deals an extra 10 (3d6) cold damage on a hit."
  "name": "Jealous Spirit"
"actions":
- "desc": "Melee Spell Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (6d6)\
    \ cold damage, and the target's speed is halved until the end of the spirit's\
    \ next turn."
  "name": "Consume Warmth"
- "desc": "Each creature within 30 feet of the cold snap spirit must make a DC 15\
    \ Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or\
    \ half as much damage on a successful one."
  "name": "Subzero Wave (1/Day)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/elemental/token/cold-snap-spirit-tdcsr.webp"
```
^statblock

## Environment

arctic, forest, mountain
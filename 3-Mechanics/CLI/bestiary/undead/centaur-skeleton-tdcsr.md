---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Centaur Skeleton"]
---
# [Centaur Skeleton](3-Mechanics\CLI\bestiary\undead/centaur-skeleton-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 256*  

> [!quote] A quote from William Orom  
> 
> Odd mysteries surround these skeletal nightmares given renewed, violent purpose as a mockery of mortality. Rumors speak of a dark intelligence rooted within, seeking power and using their own bones, or even the wriggling worms that thrive within their corpses, as currency to trade with shadowy merchants.

## Skeletons

Skeletons are often the first creatures to be reanimated by aspiring necromancers, imbued with a vulgar imitation of life and reassembled into an approximation of their living forms. No trace remains of the life that once animated a skeleton, whose only purpose is loyalty.

Skeletons follow the orders of their creators until those orders are completed. Their obedient, tireless nature makes them perfect as disposable battle fodder, guards, or distractions—and, in great enough numbers, turns them into an overwhelming tide of bone, tooth, and blade.

### Undead Nature

A skeleton doesn't require air, food, drink, or sleep.

### Alignment

Neutral evil.

## Centaur Skeleton

The "Alabaster Sierras" are bordered by hazardously treacherous shore-side cliffs and bleak mountains swarming with starving monstrosities. But beneath those peaks is a dense, beautiful, and eerie forest called the "Parchwood". During the six-year nightmare that was the Briarwood's reign, refugees made their home here—but so did Lady Delilah and Lord Sylas's experiments. The centaur skeletons of the "Parchwood" are not "centaurs" at all; rather, they are the remnants of the "Briarwoods'" fleeting attempts to entertain themselves by refashioning the remains of different species into unique forms.

```statblock
"name": "Centaur Skeleton (TDCSR)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "17"
- !!int "14"
- !!int "14"
- !!int "6"
- !!int "9"
- !!int "5"
"speed": "50 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Common but can't speak"
"cr": "2"
"traits":
- "desc": "If the centaur moves at least 30 feet straight toward a target and then\
    \ hits it with a pike attack on the same turn, the target takes an extra 10 (3d6)\
    \ piercing damage."
  "name": "Charge"
"actions":
- "desc": "The centaur skeleton makes two attacks: one with its pike and one with\
    \ its hooves, or two with its longbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8\
    \ (1d10 + 3) piercing damage."
  "name": "Pike"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) bludgeoning damage."
  "name": "Hooves"
- "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/undead/token/centaur-skeleton-tdcsr.webp"
```
^statblock

## Environment

forest
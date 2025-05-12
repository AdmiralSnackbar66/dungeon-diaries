---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Flaming Skeleton"]
---
# [Flaming Skeleton](3-Mechanics\CLI\bestiary\undead/flaming-skeleton-tdcsr.md)
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

## Flaming Skeleton

The skeletal remains of many of those who opposed "Thordak the Cinder King" are said to be forever imbued with the primordial power of his fire breath. Areas scarred by the red dragon's power, including "Thordak's Crater" in "Emon's" "Cloudtop District", the "Ashen Gorge" in the "Stormcrest Mountains", and "Serpent's Head" in the "Cliffkeep Mountains", are rife with flaming skeletons. These undead react to the raw power of the Elemental Planes, and are filled with an unquenchable desire to spread flames far and wide until nothing is left untouched by fire.

```statblock
"name": "Flaming Skeleton (TDCSR)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "6"
- !!int "8"
- !!int "5"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands all languages it knew in life but can't speak"
"cr": "1/2"
"traits":
- "desc": "When the skeleton hits with a metal melee weapon, the weapon deals an extra\
    \ 3 (1d6) fire damage (included in the attack)."
  "name": "Heated Weapons"
- "desc": "The skeleton sheds bright light in a 10-foot radius and dim light for an\
    \ additional 10 feet."
  "name": "Illumination"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage and 3 (1d6) fire damage."
  "name": "Shortsword"
- "desc": "The skeleton flings itself at a Large or smaller creature within 5 feet\
    \ of it. The target must succeed on a DC 12 Dexterity saving throw or be [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 12). On a failed save, the target also takes 3 (1d6) fire damage\
    \ at the start of each of its turns, even after the <span title=\"Player's Handbook\"\
    >grapple</span> ends. If the target or a creature within 5 feet of it uses an\
    \ action to put out the flames, or if some other effect douses the flames (such\
    \ as the target being submerged in water), the effect ends."
  "name": "Ignite"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/undead/token/flaming-skeleton-tdcsr.webp"
```
^statblock

## Environment

mountain
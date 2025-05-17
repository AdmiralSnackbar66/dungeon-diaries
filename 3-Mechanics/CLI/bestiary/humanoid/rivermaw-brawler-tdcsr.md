---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Rivermaw Brawler"]
---
# [Rivermaw Brawler](3-Mechanics\CLI\bestiary\humanoid/rivermaw-brawler-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 254*  

## Rivermaw Warriors

The "Rivermaw herd" is a nomadic society mostly composed of "half-giants", also known as "goliaths", and a mighty force for good on the "Dividing Plains". The herd was once conquered by a goliath tyrant named Kevdak, then formed anew after Kevdak was eventually defeated by Vox Machina. Free of Kevdak's martial cruelty, the Rivermaw see it as their duty to prevent any such tyrant from conquering the "Dividing Plains" ever again.

Though most members of the "Rivermaw herd" are "goliaths", their ranks include people of all races who wish to live beyond the stone walls of "Westruun" and the palisades of plains towns like "Turst Fields". "Orcs", "humans", "halflings", and "gnolls" make up most of the rest of the herd's warriors. Most of those warriors value strength and endurance over other qualities, but the brawlers and stormborn of the Rivermaw are better known for cunning, intelligence, strategy, and a unique attunement to the mighty thunder of the Stormlord.

## Rivermaw Brawler

Many children in the "Rivermaw herd" get into friendly brawls, but only the truly dedicated learn the art of fist fighting. Rivermaw brawlers usually lead the charge on the battlefield, using their exceptional strength, speed, and cunning to throw an enemy vanguard into chaos.

Beyond the "Dividing Plains", brawlers trained by the Rivermaw can be found in noble adventuring parties, working for the "Clasp" as muscle, in underground fighting rings, and as personal bodyguards. In "Emon", the most famous fist fighters make a name for themselves within the "Brawler's League" or the "Godsbrawl", representing the Stormlord in that annual holy tournament.

```statblock
"name": "Rivermaw Brawler (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "unarmored defense"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "17"
- !!int "14"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "8"
"speed": "40 ft."
"saves":
  "Wisdom": !!int "5"
  "Strength": !!int "5"
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "5"
  "Acrobatics": !!int "4"
"senses": "passive Perception 15"
"languages": "Common, Giant"
"cr": "4"
"traits":
- "desc": "While the brawler is wearing no armor and wielding no [shield](3-Mechanics/CLI/items/shield-xphb.md),\
    \ its AC includes its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The brawler makes three unarmed strikes."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage. If the target is a Large or smaller creature, the\
    \ brawler can choose one of the following additional effects:\n\n- Bruise.\
    \ The target must succeed on a DC 13 Constitution saving throw. On a failure,\
    \ its speed is reduced by 5 feet until it receives at least 1 point of magical\
    \ healing. A creature can use its action to make a DC 15 Wisdom ([Medicine](3-Mechanics/CLI/rules/skills.md#Medicine))\
    \ check to heal an affected creature within 5 feet of it (including itself), restoring\
    \ any lost speed on a success.  \n- Disarm. The target must succeed on a DC\
    \ 13 Strength saving throw or drop one item it is holding. The brawler can choose\
    \ which item is dropped, and can pick it up.  \n- Suplex. The target must\
    \ succeed on a DC 13 Strength saving throw or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone).\
    \  "
  "name": "Unarmed Strike"
"reactions":
- "desc": "When the brawler hits with an attack or is targeted by an attack, it can\
    \ add its Intelligence modifier (+2) to its damage rolls or AC until the end of\
    \ its turn."
  "name": "Clever Fighter"
- "desc": "When the brawler takes damage, it can reduce the damage by 8 (1d12 + 2)."
  "name": "Endurance (Recharges after a Short or Long Rest)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/rivermaw-brawler-tdcsr.webp"
```
^statblock

## Environment

grassland
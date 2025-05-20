---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aurumvorax
---
# [Aurumvorax](3-Mechanics\CLI\bestiary\monstrosity/aurumvorax-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 105*  

Early in life, aurumvoraxes cooperate with siblings and their den leader parents, digging tunnels in search of metal and other burrowing prey. As they grow to adulthood, aurumvoraxes hunt on their own, carving out territories they viciously defend.

## Aurumvorax

An aurumvorax is an eight-legged, badger-like hunter. These aggressive omnivores attack any prey they think they can best, ambushing even creatures double their size. They supplement their diets with metal, whether it's worked or ore, and they have a particular taste for gold. This diet lends aurumvorax fur its golden sheen.

Alone or in small groups, aurumvoraxes dig deep in search of precious metals. Such exploration often leads them into conflict with subterranean settlements. As defenders of such communities often wear metal armor, aurumvoraxes prioritize attacking armored foes—whether that armor is metal or not.

```statblock
"name": "Aurumvorax (JttRC)"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "3"
  - !!int "12"
  - !!int "6"
"speed": "30 ft., burrow 20 ft."
"saves":
  - "strength": "+4"
  - "constitution": "+3"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+3"
"condition_immunities": "[petrified](/3-Mechanics/CLI/conditions.md#Petrified)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The aurumvorax can burrow through solid rock and metal at half its burrowing\
      \ speed and leaves a 5-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "The aurumvorax makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) piercing damage. If the target is a creature wearing armor of any type,\
      \ the aurumvorax regains 4 (1d6 + 1) hit points."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) slashing damage. If the target is a Medium or smaller creature, it is\
      \ [grappled](/3-Mechanics/CLI/conditions.md#Grappled) (escape DC 12). Until\
      \ this grapple ends, the aurumvorax can't use its Claw attack on another target,\
      \ and when it moves, it can drag the [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ creature with it, without the aurumvorax's speed being halved."
    "name": "Claw"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/aurumvorax-jttrc.webp"
```
^statblock
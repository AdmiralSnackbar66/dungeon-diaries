---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aurumvorax Den Leader
---
# [Aurumvorax Den Leader](3-Mechanics\CLI\bestiary\monstrosity/aurumvorax-den-leader-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 105*  

Aurumvoraxes that feed on a steady supply of precious metals gradually grow in size. These aurumvoraxes are faster and deadlier than others of their kind.

## Aurumvorax

An aurumvorax is an eight-legged, badger-like hunter. These aggressive omnivores attack any prey they think they can best, ambushing even creatures double their size. They supplement their diets with metal, whether it's worked or ore, and they have a particular taste for gold. This diet lends aurumvorax fur its golden sheen.

Alone or in small groups, aurumvoraxes dig deep in search of precious metals. Such exploration often leads them into conflict with subterranean settlements. As defenders of such communities often wear metal armor, aurumvoraxes prioritize attacking armored foes—whether that armor is metal or not.

```statblock
"name": "Aurumvorax Den Leader (JttRC)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "3"
  - !!int "13"
  - !!int "8"
"speed": "40 ft., burrow 20 ft."
"saves":
  - "strength": "+6"
  - "constitution": "+4"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"condition_immunities": "[petrified](/3-Mechanics/CLI/conditions.md#Petrified)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The aurumvorax's allies have advantage on attack rolls while within 10\
      \ feet of the aurumvorax, provided it isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)."
    "name": "Pack Leader"
  - "desc": "The aurumvorax can burrow through solid rock and metal at half its burrowing\
      \ speed and leaves a 5-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "The aurumvorax makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) piercing damage. If the target is a creature wearing armor of any\
      \ type, the aurumvorax gains one of the following benefits of its choice:"
    "name": "Bite"
  - "desc": "The aurumvorax has advantage on attack rolls until start of its next\
      \ turn."
    "name": "Frenzy"
  - "desc": "The aurumvorax regains 6 (1d8 + 2) hit points."
    "name": "Invigorate"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage. If the target is a Large or smaller creature, it\
      \ is [grappled](/3-Mechanics/CLI/conditions.md#Grappled) (escape DC 14). Until\
      \ this grapple ends, the aurumvorax can't use its Claw attack on another target,\
      \ and when it moves, it can drag the [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ creature with it, without the aurumvorax's speed being halved."
    "name": "Claw"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/aurumvorax-den-leader-jttrc.webp"
```
^statblock
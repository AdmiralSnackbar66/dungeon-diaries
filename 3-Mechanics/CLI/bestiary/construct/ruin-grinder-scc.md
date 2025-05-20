---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ruin Grinder
---
# [Ruin Grinder](3-Mechanics\CLI\bestiary\construct/ruin-grinder-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 211*  

Created by the archaeomancers of Lorehold College, ruin grinders are mighty automatons built to excavate ancient ruins and artifacts. The massive toothed shovels attached to a ruin grinder's arms tear through millennia-old bedrock with ease, leading some Lorehold mages to fear that the grinders destroy more history than they unearth.

```statblock
"name": "Ruin Grinder (SCC)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d10 + 22"
"modifier": !!int "1"
"stats":
  - !!int "22"
  - !!int "13"
  - !!int "15"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "30 ft., burrow 30 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [petrified](/3-Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
  - "desc": "Whenever the ruin grinder is subjected to fire damage, it regains a number\
      \ of hit points equal to half the fire damage dealt."
    "name": "Fire Absorption"
  - "desc": "The ruin grinder deals double damage to objects and structures."
    "name": "Siege Monster"
  - "desc": "The ruin grinder can burrow through solid rock at half its burrowing\
      \ speed and leaves a 10-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "The ruin grinder makes two Excavator attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d6 + 6) force damage. If the target is a Huge or smaller creature, it must\
      \ succeed on a DC 17 Strength saving throw or be pushed up to 10 feet away and\
      \ knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Excavator"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/construct/token/ruin-grinder-scc.webp"
```
^statblock
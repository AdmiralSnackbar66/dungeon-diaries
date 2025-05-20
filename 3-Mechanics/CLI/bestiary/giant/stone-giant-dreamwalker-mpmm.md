---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Stone Giant Dreamwalker
---
# [Stone Giant Dreamwalker](3-Mechanics\CLI\bestiary\giant/stone-giant-dreamwalker-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 234, Volo's Guide to Monsters p. 150*  

The surface of the world is an alien realm to stone giants: fluctuating, temporary, exposed to gusting wind and sudden rain. It is as wildly changeable as a dream, and that's how they regard it—as a dream. Nothing there is permanent, so nothing there is real. What happens on the surface doesn't matter. Promises and bargains made there needn't be honored. Life and even art hold less value there.

Stone giants sometimes go on dream quests in the surface world, seeking inspiration for their art, a break from decades-long ennui, or satisfaction of simple curiosity. Some who go on these quests let themselves become lost in the dream. Other stone giants are banished to the surface as punishment. Regardless of the reason they ended up on the surface, if they don't take shelter under stone, such stone giants can become dreamwalkers.

Dreamwalkers occupy an odd place of respect outside the stone giant ordning. They are considered outcasts, but their familiarity with the surface world makes them valuable guides, and their insights can help other stone giants grasp the dangers of living in a dream.

Dreamwalkers become divorced from reality by isolation, shame, and their unendingly alien surroundings, and this delirium leaches out into the world around them, affecting other creatures that get too close. Believing that they're living in a dream and that their actions have no real consequences, dreamwalkers act as they please, becoming forces of chaos. As they travel the world, they collect objects and creatures that seem especially significant to them. Over time, the collected things accrete to their bodies, becoming encased in stone.

```statblock
"name": "Stone Giant Dreamwalker (MPMM)"
"size": "Huge"
"type": "giant"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "14d12 + 70"
"modifier": !!int "2"
"stats":
  - !!int "23"
  - !!int "14"
  - !!int "21"
  - !!int "10"
  - !!int "8"
  - !!int "12"
"speed": "40 ft."
"saves":
  - "dexterity": "+6"
  - "constitution": "+9"
  - "wisdom": "+3"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/skills.md#Athletics)"
    "desc": "+14"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [frightened](/3-Mechanics/CLI/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Giant"
"cr": "10"
"traits":
  - "desc": "An enemy that starts its turn within 30 feet of the giant must make a\
      \ DC 13 Charisma saving throw, provided that the giant isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated).\
      \ On a failed save, the creature is [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
      \ by the giant. A creature [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
      \ in this way can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. Once it succeeds on the saving throw, the\
      \ creature is immune to this giant's Dreamwalker's Charm for 24 hours."
    "name": "Dreamwalker's Charm"
"actions":
  - "desc": "The giant makes two Greatclub or Rock attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 24\
      \ (4d8 + 6) bludgeoning damage."
    "name": "Greatclub"
  - "desc": "Ranged Weapon Attack: +10 to hit, range 60/240 ft., one target. Hit:\
      \ 22 (3d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
      \ on a DC 17 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Rock"
  - "desc": "The giant touches one Medium or smaller creature within 10 feet of it\
      \ that is [charmed](/3-Mechanics/CLI/conditions.md#Charmed) by it. The target\
      \ must make a DC 17 Constitution saving throw. On a failed save, the target\
      \ becomes [petrified](/3-Mechanics/CLI/conditions.md#Petrified), and the giant\
      \ can adhere the target to its stony body. [greater restoration](/3-Mechanics/CLI/spells/greater-restoration-xphb.md)\
      \ spells and other magic that can undo petrification have no effect on a [petrified](/3-Mechanics/CLI/conditions.md#Petrified)\
      \ creature adhered to the giant unless the giant is dead, in which case the\
      \ magic works normally, freeing the [petrified](/3-Mechanics/CLI/conditions.md#Petrified)\
      \ creature as well as ending the [petrified](/3-Mechanics/CLI/conditions.md#Petrified)\
      \ condition on it."
    "name": "Petrifying Touch"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/giant/token/stone-giant-dreamwalker-mpmm.webp"
```
^statblock

## Environment

coastal, hill, mountain
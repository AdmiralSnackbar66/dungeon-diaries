---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Thri-kreen Gladiator"]
---
# [Thri-kreen Gladiator](3-Mechanics\CLI\bestiary\monstrosity/thri-kreen-gladiator-bam.md)
*Source: Boo's Astral Menagerie p. 60, Light of Xaryxis*  

Thri-kreen gladiators relish opportunities to test their mettle in combat and often paint their carapaces with the blood of their enemies.

```statblock
"name": "Thri-kreen Gladiator (BAM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "19d8 + 57"
"stats":
- !!int "18"
- !!int "18"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "5"
  "Strength": !!int "7"
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "5"
  "Acrobatics": !!int "7"
"condition_immunities": "[frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "telepathy 60 ft., Thri-kreen"
"cr": "7"
"actions":
- "desc": "The thri-kreen makes two Gythka attacks and one Chatkcha attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit (with advantage if the thri-kreen is\
    \ missing any hit points), reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing\
    \ damage."
  "name": "Gythka"
- "desc": "Ranged Weapon Attack: +7 to hit (with advantage if the thri-kreen is\
    \ missing any hit points), range 30/120 ft., one target. Hit: 7 (1d6 + 4)\
    \ slashing damage."
  "name": "Chatkcha"
"bonus_actions":
- "desc": "The thri-kreen leaps up to 20 feet in any direction, provided its speed\
    \ isn't 0."
  "name": "Leap"
"reactions":
- "desc": "The thri-kreen adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the thri-kreen must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "BAM"
- "LoX"
"image": "3-Mechanics/CLI/bestiary/monstrosity/token/thri-kreen-gladiator-bam.webp"
```
^statblock
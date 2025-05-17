---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Canopic Golem"]
---
# [Canopic Golem](3-Mechanics\CLI\bestiary\construct/canopic-golem-cm.md)
*Source: Candlekeep Mysteries p. 179*  

A mummy lord's organs, normally stored in sacred canopic jars during mummification, can be magically preserved and transplanted into living humanoids. The transplant recipients come under the control of the mummy lord, either as living supplicants or mindless golems through which the mummy lord can see and speak.

```statblock
"name": "Canopic Golem (CM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "252"
"hit_dice": "24d10 + 120"
"stats":
- !!int "20"
- !!int "10"
- !!int "20"
- !!int "7"
- !!int "11"
- !!int "1"
"speed": "30 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "5"
  "Intelligence": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/conditions.md#Blinded), [charmed](/3-Mechanics/CLI/conditions.md#Charmed),\
  \ [deafened](/3-Mechanics/CLI/conditions.md#Deafened), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "13"
"traits":
- "desc": "The golem automatically succeeds on saving throws against spells of 7th\
    \ level or lower, and the attack rolls of such spells always miss it."
  "name": "Limited Spell Immunity"
- "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The golem makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 27 (4d10\
    \ + 5) force damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +10 to hit, range 120 ft., one target. Hit: 14\
    \ (2d8 + 5) force damage."
  "name": "Crystal Dart"
"reactions":
- "desc": "In response to a spell attack missing the golem, it causes that spell to\
    \ hit another creature within 120 feet of it that it can see."
  "name": "Spell Deflection"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/construct/token/canopic-golem-cm.webp"
```
^statblock
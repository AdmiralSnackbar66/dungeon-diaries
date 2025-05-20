---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Serapio
---
# [Serapio](3-Mechanics\CLI\bestiary\npc/serapio-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 61*  

```statblock
"name": "Serapio (JttRC)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "17"
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "10"
"speed": "30 ft., fly 30 ft."
"saves":
  - "dexterity": "+6"
  - "constitution": "+5"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "cold, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Abyssal, Common"
"cr": "5"
"traits":
  - "desc": "Serapio has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Serapio makes two Talon attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 3) piercing damage plus 14 (3d8) poison damage."
    "name": "Talon"
  - "desc": "Serapio magically transforms into a Medium owl, while retaining its game\
      \ statistics (other than its size). This transformation ends if Serapio is reduced\
      \ to 0 hit points or if it uses its action to end it."
    "name": "Change Shape"
  - "desc": "Serapio emits a chilling, disease-ridden wind in a 60-foot line that\
      \ is 10 feet wide. Each creature in that area must succeed on a DC 13 Constitution\
      \ saving throw or take 26 (4d12) cold damage and become [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned).\n\
      \nWhile [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned) in this way, the\
      \ creature can't regain hit points. At the end of every hour, the creature must\
      \ succeed on a DC 13 Constitution saving throw or gain 1 level of [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion).\
      \ If the creature is in direct sunlight when it makes this saving throw, it\
      \ automatically succeeds on the save.\n\nIf the creature is targeted by magic\
      \ that ends a poison or disease, such as lesser restoration, while the creature\
      \ isn't in direct sunlight, the effect does not end."
    "name": "Plague Winds (Fiend Form Only; Recharge 5-6)"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/serapio-jttrc.webp"
```
^statblock
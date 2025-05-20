---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Diva Luma
---
# [Diva Luma](3-Mechanics\CLI\bestiary\npc/diva-luma-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 71*  

```statblock
"name": "Diva Luma (JttRC)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": "+6"
  - "intelligence": "+4"
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/skills.md#Acrobatics)"
    "desc": "+6"
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+3"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
  - "desc": "During its first turn, Diva Luma has advantage on attack rolls against\
      \ any creature that hasn't taken a turn. Any hit Diva Luma scores against a\
      \ [surprised](/3-Mechanics/CLI/conditions.md#Surprised) creature is a critical\
      \ hit."
    "name": "Assassinate"
  - "desc": "If Diva Luma is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, Diva Luma instead takes no damage if\
      \ it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "Diva Luma deals an extra 14 (4d6) damage when it hits a target with a\
      \ weapon attack and has advantage on the attack roll, or when the target is\
      \ within 5 feet of an ally of Diva Luma that isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)\
      \ and Diva Luma doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Diva Luma makes two high-heeled shoe attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage."
    "name": "High-Heeled Shoe"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/diva-luma-jttrc.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Steel Crane
---
# [Steel Crane](3-Mechanics\CLI\bestiary\npc/steel-crane-cm.md)
*Source: Candlekeep Mysteries p. 164*  

Steel Crane is tall and slender. He is exceptionally handsome, with neat silver hair and deep green eyes, and carries himself with the grace of a dancer.

A strip of cloth was torn from the left sleeve of Steel Crane's white robe during the raid on Candlekeep, and Steel Crane hasn't yet bothered to mend the garment. The robe's damage is clearly visible—evidence of Steel Crane's role in the theft.

```statblock
"name": "Steel Crane (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "Unarmored Defense"
"hp": !!int "76"
"hit_dice": "9d8 + 36"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "18"
  - !!int "13"
  - !!int "17"
  - !!int "14"
"speed": "40 ft."
"saves":
  - "dexterity": "+7"
  - "intelligence": "+4"
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "poison, psychic"
"senses": "passive Perception 16"
"languages": "Common"
"cr": "8"
"traits":
  - "desc": "While Steel Crane is wearing no armor and wielding no shield, his AC\
      \ includes his Wisdom modifier."
    "name": "Unarmored Defense"
"actions":
  - "desc": "Steel Crane makes three attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) force damage, and if the target is a creature, it must succeed on a DC\
      \ 15 Constitution saving throw or be [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
      \ until the start of Steel Crane's next turn."
    "name": "Force Strike"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 6\
      \ (1d4 + 4) slashing damage or, if the target is a creature, Steel Crane can\
      \ grapple the target instead (escape DC 15). Steel Crane can't make attacks\
      \ with the whip while using it to grapple a creature. Anytime on his turn, he\
      \ can release a creature [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ by the whip (no action required)."
    "name": "Whip"
  - "desc": "Steel Crane regains 2d8 + 4 hit points, and all levels of [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion)\
      \ end on him."
    "name": "Heal Self (Recharges after a Long Rest)"
"reactions":
  - "desc": "In response to being hit by a ranged weapon attack, Steel Crane deflects\
      \ the missile. The damage he takes from the attack is reduced by 1d10 + 10.\
      \ If the damage is reduced to 0, Steel Crane catches the missile if it's small\
      \ enough to hold in one hand and Steel Crane has a hand free."
    "name": "Deflect Missile"
  - "desc": "When Steel Crane falls, he can slow his descent, taking no damage from\
      \ the fall."
    "name": "Slow Descent (3/Day)"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/steel-crane-cm.webp"
```
^statblock
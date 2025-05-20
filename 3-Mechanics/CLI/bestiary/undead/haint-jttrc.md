---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Haint
---
# [Haint](3-Mechanics\CLI\bestiary\undead/haint-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 185*  

Rising from the sorrowful dead, haints are spirits that change their shape in tragic imitation of what they once were. A haint can shift from its spectral form to appear as the corporeal Humanoid it was in life, passing as a living creature. These spirits might mistakenly view innocents as those who killed them or entreat mortals to exact revenge on their behalf.

```statblock
"name": "Haint (JttRC)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Neutral"
"ac": !!int "12"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "7"
  - !!int "15"
  - !!int "17"
  - !!int "10"
  - !!int "13"
  - !!int "17"
"speed": "30 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "acid; fire; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [grappled](/3-Mechanics/CLI/conditions.md#Grappled),\
  \ [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned), [prone](/3-Mechanics/CLI/conditions.md#Prone),\
  \ [restrained](/3-Mechanics/CLI/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any languages it knew in life"
"cr": "7"
"traits":
  - "desc": "The haint can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "The haint doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The haint makes two Sorrowful Touch attacks."
    "name": "Multiattack"
  - "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one creature. Hit: 21\
      \ (4d8 + 3) psychic damage."
    "name": "Sorrowful Touch"
  - "desc": "The haint magically assumes the appearance of the Humanoid it was in\
      \ life, while retaining its game statistics. The assumed appearance ends if\
      \ the haint is reduced to 0 hit points or uses an action to end it."
    "name": "Change Shape"
"bonus_actions":
  - "desc": "The haint targets one creature it can see within 60 feet of itself that\
      \ is missing any hit points, sharing its own torment with this pained soul.\
      \ The target must succeed on a DC 14 Wisdom saving throw or be [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated).\n\
      \nA creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a creature's saving throw is successful\
      \ or the effect ends for it, the creature is immune to the haint's Shared Sorrow\
      \ for the next 24 hours."
    "name": "Shared Sorrow"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/undead/token/haint-jttrc.webp"
```
^statblock
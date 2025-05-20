---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Whistler
---
# [Whistler](3-Mechanics\CLI\bestiary\aberration/whistler-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 221*  

Whistlers are inscrutable stalkers hailing from airy, screeching reaches of the Far Realm. They are difficult to see as they're not tethered to one point in space, blurring in a state of perpetual physical uncertainty. A dead whistler appears as a gray, featureless, humanlike biped with long limbs and thin fingers. Those stalked by a whistler can't shut out its soundless, seven-note tune, an otherworldly melody that invades and scourges the mind. Few creatures that encounter a whistler escape; those that do are forever haunted by the stalker's frightful tune.

```statblock
"name": "Whistler (JttRC)"
"size": "Large"
"type": "aberration"
"alignment": "typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "180"
"hit_dice": "24d10 + 48"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "14"
  - !!int "15"
  - !!int "16"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "dexterity": "+7"
  - "charisma": "+8"
"skillsaves":
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+11"
"damage_resistances": "psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened)"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "9"
"traits":
  - "desc": "Attack rolls against the whistler are made with disadvantage unless the\
      \ whistler is [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)."
    "name": "Blurred Form"
  - "desc": "The whistler doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The whistler makes three Psychic Swipe attacks."
    "name": "Multiattack"
  - "desc": "Melee Spell Attack: +8 to hit, reach 10 ft., one creature. Hit: 15\
      \ (2d10 + 4) psychic damage."
    "name": "Psychic Swipe"
  - "desc": "The whistler telepathically whistles an otherworldly melody into the\
      \ minds of up to two creatures it can see within range of its telepathy. Each\
      \ target must succeed on a DC 16 Wisdom saving throw or take 33 (6d10) psychic\
      \ damage and become [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
      \ of the whistler for 1 minute. A [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
      \ creature can repeat this saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Otherworldly Melody (Recharge 5-6)"
"bonus_actions":
  - "desc": "The whistler teleports up to 20 feet to an unoccupied space it can see."
    "name": "Surreal Step"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/whistler-jttrc.webp"
```
^statblock
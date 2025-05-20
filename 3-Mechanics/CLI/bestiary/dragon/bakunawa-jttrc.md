---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bakunawa
---
# [Bakunawa](3-Mechanics\CLI\bestiary\dragon/bakunawa-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 147*  

Worshiped as draconic avatars of storm and tide, bakunawa soar over the archipelagos they call home. Iridescent scales crackling with lightning cover a bakunawa's fearsome serpentine body, and the sharp movements of its mighty wings echo with thunderous winds. Known for their mercilessness in battle, bakunawa swallow whole any who challenge them.

```statblock
"name": "Bakunawa (JttRC)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "typically  Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "12d20 + 24"
"modifier": !!int "1"
"stats":
  - !!int "21"
  - !!int "12"
  - !!int "15"
  - !!int "14"
  - !!int "17"
  - !!int "16"
"speed": "20 ft., fly 60 ft., swim 60 ft."
"saves":
  - "dexterity": "+5"
  - "constitution": "+6"
  - "wisdom": "+7"
"damage_resistances": "lightning, thunder"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Celestial, Common, Draconic"
"cr": "12"
"traits":
  - "desc": "The bakunawa can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the bakunawa fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The bakunawa makes one Bite attack and one Storm Slam attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12\
      \ (2d6 + 5) piercing damage plus 7 (2d6) lightning damage. If the target is\
      \ a Large or smaller creature, it must succeed on a DC 17 Strength saving throw\
      \ or be swallowed by the bakunawa. A swallowed creature is [blinded](/3-Mechanics/CLI/conditions.md#Blinded)\
      \ and [restrained](/3-Mechanics/CLI/conditions.md#Restrained), and it has total\
      \ cover against attacks and other effects outside the bakunawa. At the start\
      \ of each of the bakunawa's turns, each swallowed creature takes 10 (3d6) lightning\
      \ damage.\n\nThe bakunawa's gullet can hold up to two creatures at a time. If\
      \ the bakunawa takes 30 damage or more on a single turn from a swallowed creature,\
      \ the bakunawa must succeed on a DC 16 Constitution saving throw at the end\
      \ of that turn or regurgitate all swallowed creatures, which fall [prone](/3-Mechanics/CLI/conditions.md#Prone)\
      \ in a space within 15 feet of the bakunawa. If the bakunawa dies, a swallowed\
      \ creature is no longer [restrained](/3-Mechanics/CLI/conditions.md#Restrained)\
      \ by it and can escape from the corpse by using 15 feet of movement, exiting\
      \ [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 9\
      \ (1d8 + 5) bludgeoning damage plus 5 (d10) thunder damage, and the target is\
      \ pushed up to 10 feet in a horizontal direction away from the bakunawa."
    "name": "Storm Slam"
"legendary_actions":
  - "desc": "The bakunawa flies or swims up to half its speed. This movement doesn't\
      \ provoke opportunity attacks."
    "name": "Nimble Glide"
  - "desc": "The bakunawa makes one Storm Slam attack."
    "name": "Slam"
  - "desc": "The bakunawa arcs lightning at up to two creatures it can see within\
      \ 60 feet of itself. Each target must succeed on a DC 15 Dexterity saving throw\
      \ or take 22 (4d10) lightning damage."
    "name": "Lightning Strikes (Costs 3 Actions)"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/bakunawa-jttrc.webp"
```
^statblock
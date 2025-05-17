---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Zikzokrishka"]
---
# [Zikzokrishka](3-Mechanics\CLI\bestiary\npc/zikzokrishka-cm.md)
*Source: Candlekeep Mysteries p. 209*  

## Zikzokrishka's Phylactery

Zikzokrishka hid her phylactery deep within the Scimitar Spires, a mountain range to the east of the necropolis of Azumar. If the characters defeat her, Zikzokrishka uses her phylactery to rematerialize, having long ago prepared a dragon's corpse to house her spirit upon its return to the phylactery.

```statblock
"name": "Zikzokrishka (CM)"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "8"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "14"
"damage_resistances": "necrotic"
"damage_immunities": "lightning, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- "desc": "If Zikzokrishka fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Zikzokrishka has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Zikzokrishka can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 18\
    \ (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 16\
    \ (2d8 + 7) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of Zikzokrishka's choice that is within 120 feet of the Zikzokrishka\
    \ and aware of it must succeed on a DC 18 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the Zikzokrishka's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "Zikzokrishka exhales lightning in a 90-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "Zikzokrishka makes a Wisdom ([Perception](/3-Mechanics/CLI/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "Zikzokrishka makes a tail attack."
  "name": "Tail Attack"
- "desc": "Zikzokrishka beats its tattered wings. Each creature within 10 feet of\
    \ Zikzokrishka must succeed on a DC 21 Dexterity saving throw or take 14 (2d6\
    \ + 7) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone).\
    \ After beating its wings this way, Zikzokrishka can fly up to half its flying\
    \ speed."
  "name": "Wing Attack (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties) whenever she is in the\
    \ are V3, Zikzokrishka can take a lair action to cause one of the following effects.\
    \ She can't use the same effect two rounds in a row:"
  "name": ""
- "desc": "- Part of the ceiling collapses above one creature that Zikzokrishka can\
    \ see. The creature must succeed on a DC 15 Dexterity saving throw or take 21\
    \ (6d6) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)\
    \ and buried under rubble. A buried creature is [restrained](/3-Mechanics/CLI/conditions.md#Restrained)\
    \ and unable to stand up. A creature can use an action to try to pull itself or\
    \ another creature out of the rubble, doing so with a successful DC 10 Strength\
    \ ([Athletics](/3-Mechanics/CLI/skills.md#Athletics)) check.  \n- A cloud of sand\
    \ swirls in a 20-foot-radius sphere centered on a point Zikzokrishka can see within\
    \ 60 feet of it. The cloud spreads around corners. Each creature in the cloud\
    \ must succeed on a DC 15 Constitution saving throw or be [blinded](/3-Mechanics/CLI/conditions.md#Blinded)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.  \n- Zikzokrishka chooses two\
    \ points that it can see, each of which must be on a solid surface, and creates\
    \ a 5-foot-wide line of lightning between them. The two points must be within\
    \ 60 feet of Zikzokrishka and 60 feet of each other. Each creature in the line\
    \ must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) lightning damage.\
    \  "
  "name": ""
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/zikzokrishka-cm.webp"
```
^statblock
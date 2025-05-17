---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Strixhaven Campus Guide"]
---
# [Strixhaven Campus Guide](3-Mechanics\CLI\bestiary\construct/strixhaven-campus-guide-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 217*  

With cheerful dispositions and a knack for walking backward, Strixhaven campus guides lead gaggles of prospective students on tours. The guides' gold and silver chassis are built in shapes reminiscent of the star arches surrounding Strixhaven. Embedded in their chests are holographic maps of the university's campuses, which the guides use to provide directions. However, it's rare for a campus guide to need its own maps, as these gregarious automatons have a gift for finding things on campus, often popping up at the most inopportune times.

```statblock
"name": "Strixhaven Campus Guide (SCC)"
"size": "Small"
"type": "construct"
"alignment": "typically  Lawful Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Insight": !!int "3"
  "Persuasion": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/conditions.md#Blinded), [deafened](/3-Mechanics/CLI/conditions.md#Deafened),\
  \ [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": "Common plus any three languages"
"cr": "1"
"traits":
- "desc": "While at Strixhaven, the guide can't become lost by magical or nonmagical\
    \ means. The guide also has advantage on ability checks made to locate creatures\
    \ or objects at Strixhaven."
  "name": "Campus Knowledge"
- "desc": "When the guide speaks, any creature that knows at least one language and\
    \ can hear the guide understands what it says."
  "name": "Univocal Speech"
- "desc": "The guide doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The guide makes two Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- "desc": "Each creature of the guide's choice that is within 30 feet of the guide\
    \ must succeed on a DC 11 Wisdom saving throw or be magically [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
    \ by the guide for 1 hour.\n\nA [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
    \ target must move on its turn toward the guide, trying to get within 5 feet of\
    \ the guide. The target doesn't move into obviously dangerous ground, such as\
    \ a fire or a pit. Whenever the [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
    \ target takes damage, it can repeat the saving throw, ending the effect on itself\
    \ on a success.\n\nA target that successfully saves is immune to any guide's Smile\
    \ and Wave ability for the next 24 hours."
  "name": "Smile and Wave"
"bonus_actions":
- "desc": "The guide takes the Help action."
  "name": "Need Directions"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/construct/token/strixhaven-campus-guide-scc.webp"
```
^statblock
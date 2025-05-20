---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Art Elemental Mascot
---
# [Art Elemental Mascot](3-Mechanics\CLI\bestiary\elemental/art-elemental-mascot-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 185*  

Often referred to as a "living expression," an art elemental is an aspect of creativity and emotion given physical form—making it the perfect mascot for Prismari College.

To create an art elemental mascot, a mage draws power from a blend of all the natural elements, extracting their vibrant colors to craft a swirling outer shell before imbuing its core with a planar spirit. As creatures of both precise elemental study and rebellious expression, art elementals can both wreak elemental destruction and emotionally captivate the creatures around them.

```statblock
"name": "Art Elemental Mascot (SCC)"
"size": "Small"
"type": "elemental"
"alignment": "typically  Neutral"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"modifier": !!int "1"
"stats":
  - !!int "6"
  - !!int "13"
  - !!int "12"
  - !!int "8"
  - !!int "11"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[Performance](/3-Mechanics/CLI/skills.md#Performance)"
    "desc": "+4"
"damage_resistances": "cold, fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "1/4"
"traits":
  - "desc": "When the elemental dies, it explodes in a burst of colored light. Each\
      \ creature within 5 feet of the elemental must succeed on a DC 11 Constitution\
      \ saving throw or be [blinded](/3-Mechanics/CLI/conditions.md#Blinded) for 1\
      \ minute. A [blinded](/3-Mechanics/CLI/conditions.md#Blinded) creature can repeat\
      \ the save at the end of each of its turns, ending the effect on itself on a\
      \ success."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
      \ + 1) fire damage."
    "name": "Joyful Flare"
  - "desc": "Ranged Weapon Attack: +3 to hit, range 30 ft., one target. Hit: 6\
      \ (2d4 + 1) cold damage."
    "name": "Melancholic Bolt"
  - "desc": "The elemental targets one creature it can see within 30 feet of itself.\
      \ The target must succeed on a DC 12 Charisma saving throw or be [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
      \ for 1 minute. The [charmed](/3-Mechanics/CLI/conditions.md#Charmed) target\
      \ can repeat the save at the end of each of its turns, ending the effect on\
      \ itself on a success."
    "name": "Captivating Artistry (1/Day)"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/art-elemental-mascot-scc.webp"
```
^statblock
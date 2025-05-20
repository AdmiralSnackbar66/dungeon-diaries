---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spirit Statue Mascot
---
# [Spirit Statue Mascot](3-Mechanics\CLI\bestiary\construct/spirit-statue-mascot-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 216*  

To enhance their studies of the past, Lorehold students often call upon the spirits of dead creatures. Mages seeking longer-term assistance from ancient spirits have learned to house these spirits in statues, giving them a more permanent residence from which to assist the living.

Some of these spirit statues bond with and mentor a specific mage, but most serve in a variety of roles for numerous individuals, ranging from research colleagues to martial tacticians. Regardless, their appearance is so common around the Lorehold campus that they have become the college's mascots.

```statblock
"name": "Spirit Statue Mascot (SCC)"
"size": "Medium"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"modifier": !!int "-1"
"stats":
  - !!int "14"
  - !!int "9"
  - !!int "15"
  - !!int "12"
  - !!int "13"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": "any languages it knew in life"
"cr": "1/4"
"traits":
  - "desc": "When the spirit statue is reduced to 0 hit points, the statue crumbles,\
      \ and the spirit returns to the afterlife in a burst of ghostly white flame.\
      \ Each creature within 5 feet of it must succeed on a DC 12 Constitution saving\
      \ throw or take 3 (d6) radiant damage."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) bludgeoning damage."
    "name": "Slam"
  - "desc": "The spirit statue touches one creature. Once within the next 10 minutes,\
      \ that creature can roll a d4 and add the number rolled to one ability check\
      \ of its choice, immediately after rolling the d20."
    "name": "Counsel of the Past (2/Day)"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/construct/token/spirit-statue-mascot-scc.webp"
```
^statblock
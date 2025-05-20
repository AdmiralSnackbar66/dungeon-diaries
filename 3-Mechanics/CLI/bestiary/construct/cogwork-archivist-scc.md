---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cogwork Archivist
---
# [Cogwork Archivist](3-Mechanics\CLI\bestiary\construct/cogwork-archivist-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 188*  

Programmed with knowledge of Strixhaven's extensive lore catalog, cogwork archivists serve as keepers of the university's various libraries. The archivists' towering metal frames are equipped with long, articulated limbs and retractable conservator tools, which they use to organize and preserve documents from throughout Strixhaven's winding history. Many cogwork archivists can be found among the towering shelves of the Biblioplex, simultaneously retrieving scrolls for curious students while keeping a stern eye on any rowdy groups that might disrupt the quiet atmosphere.

```statblock
"name": "Cogwork Archivist (SCC)"
"size": "Large"
"type": "construct"
"alignment": "typically  Lawful Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "15"
  - !!int "17"
  - !!int "11"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+5"
  - "name": "[Nature](/3-Mechanics/CLI/skills.md#Nature)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Religion](/3-Mechanics/CLI/skills.md#Religion)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [petrified](/3-Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "all"
"cr": "4"
"traits":
  - "desc": "The archivist has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The archivist makes two Grasping Limb attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 13\
      \ (2d8 + 4) bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 14). The archivist can have no more than two targets [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ at a time."
    "name": "Grasping Limb"
  - "desc": "The archivist casts one of the following spells, requiring no material\
      \ components and using Intelligence as the spellcasting ability:\n\nAt will:\
      \ [dancing lights](/3-Mechanics/CLI/spells/dancing-lights-xphb.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n2/day: [silence](/3-Mechanics/CLI/spells/silence-xphb.md)"
    "name": "Spellcasting"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/construct/token/cogwork-archivist-scc.webp"
```
^statblock
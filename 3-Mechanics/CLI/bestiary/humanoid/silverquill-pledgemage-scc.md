---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/bard
statblock: inline
statblock-link: "#^statblock"
aliases:
- Silverquill Pledgemage
---
# [Silverquill Pledgemage](3-Mechanics\CLI\bestiary\humanoid/silverquill-pledgemage-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 214*  

Stylish and driven, the students of Silverquill College—first as apprentices and then as pledgemages—cut imposing figures on campus. Dressed in smartly trimmed black-and-white uniforms, these budding mages practice bolstering speeches and wield inky blades.

Some Silverquill students prefer the benevolent side of language, using their words to uplift their friends and illuminate harsh truths about those in power. Others, though, choose to wield words more ruthlessly and master the art of insults and discouragement (and in some cases, petty trash talk). Regardless, nearly all members of Silverquill College carry themselves with a fearsome, never-second-place attitude—because in the art of wielding words, confidence is key.

## Silverquill Scholars

The scholars of Silverquill College study the power of magic shaped through spoken and written words. They use that power either to illuminate and guide or to obscure and demoralize.

```statblock
"name": "Silverquill Pledgemage (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "bard"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "13"
  - !!int "12"
  - !!int "11"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "dexterity": "+5"
  - "wisdom": "+2"
  - "charisma": "+5"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Performance](/3-Mechanics/CLI/skills.md#Performance)"
    "desc": "+7"
  - "name": "[Persuasion](/3-Mechanics/CLI/skills.md#Persuasion)"
    "desc": "+7"
"senses": "passive Perception 10"
"languages": "Common plus any two languages"
"cr": "4"
"actions":
  - "desc": "Melee  or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
      \ one target. Hit: 5 (1d8 + 3) piercing damage plus 10 (3d6) psychic damage."
    "name": "Ink Blade"
  - "desc": "The pledgemage casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 13):\n\
      \nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights-xphb.md),\
      \ [friends](/3-Mechanics/CLI/spells/friends-xphb.md)\n\n1/day each: [command](/3-Mechanics/CLI/spells/command-xphb.md),\
      \ [confusion](/3-Mechanics/CLI/spells/confusion-xphb.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md),\
      \ [tongues](/3-Mechanics/CLI/spells/tongues-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The pledgemage hurls magical insults at one creature it can see within\
      \ 30 feet of itself. The target must succeed on a DC 13 Wisdom saving throw\
      \ or become [frightened](/3-Mechanics/CLI/conditions.md#Frightened) of the pledgemage\
      \ for 1 minute. While [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
      \ in this way, the target can't take reactions, its speed is halved, and any\
      \ hit the pledgemage scores against the creature is a critical hit. The target\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Demotivate (2/Day)"
"reactions":
  - "desc": "When a creature the pledgemage can see within 30 feet of it fails a saving\
      \ throw, the pledgemage magically weaves together stirring prose, allowing the\
      \ creature to reroll the saving throw and use the higher result."
    "name": "Rousing Verse"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/silverquill-pledgemage-scc.webp"
```
^statblock
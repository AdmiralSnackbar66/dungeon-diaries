---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/sorcerer
statblock: inline
statblock-link: "#^statblock"
aliases:
- Prismari Pledgemage
---
# [Prismari Pledgemage](3-Mechanics\CLI\bestiary\humanoid/prismari-pledgemage-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 205*  

The students of Prismari College—first as apprentices and then as pledgemages—see no distinction between magic and art. No two Prismari students have the same style of spellcasting; each wields the elemental magic taught by the college in a way that expresses their personality. In the hands of Prismari students, spells that conjure fire or bend water to one's will become vibrant and expressive showcases, thrumming with creative energy.

Harnessing the elemental forces of their magic requires precision and grace, and some students dedicate themselves to chasing the ideal of perfect control, hoping that by doing so, they can accurately express what is churning within their minds.

## Prismari Scholars

The scholars of Prismari College believe that art is the truest form of spellcraft. They use magic to make splendid art, and they employ artistry to make their magic spectacular.

```statblock
"name": "Prismari Pledgemage (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "13"
  - !!int "12"
  - !!int "14"
  - !!int "17"
"speed": "35 ft."
"saves":
  - "dexterity": "+4"
  - "charisma": "+5"
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/skills.md#Acrobatics)"
    "desc": "+4"
  - "name": "[Athletics](/3-Mechanics/CLI/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Performance](/3-Mechanics/CLI/skills.md#Performance)"
    "desc": "+7"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
  - "desc": "If the pledgemage is subjected to an effect that allows it to make a\
      \ Dexterity saving throw to take only half damage, the pledgemage instead takes\
      \ no damage if it succeeds on the saving throw and only half damage if it fails,\
      \ provided it isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)."
    "name": "Evasion"
"actions":
  - "desc": "The pledgemage makes two Elemental Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
      \ one target. Hit: 12 (3d6 + 2) fire or cold damage (the pledgemage's choice)."
    "name": "Elemental Strike"
  - "desc": "The pledgemage shines with elemental magic, targeting one creature it\
      \ can see within 60 feet of itself. The target must make a DC 13 Wisdom saving\
      \ throw. On a failed save, the target takes 28 (8d6) fire or cold damage (the\
      \ pledgemage's choice) and is [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
      \ until the start of the pledgemage's next turn. On a successful save, the target\
      \ takes half as much damage and isn't [stunned](/3-Mechanics/CLI/conditions.md#Stunned)."
    "name": "Showstopper (1/Day)"
  - "desc": "The pledgemage casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 13):\n\
      \nAt will: [minor illusion](/3-Mechanics/CLI/spells/minor-illusion-xphb.md)\n\
      \n2/day each: [gust of wind](/3-Mechanics/CLI/spells/gust-of-wind-xphb.md),\
      \ [silent image](/3-Mechanics/CLI/spells/silent-image-xphb.md)\n\n1/day each:\
      \ [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md), [water walk](/3-Mechanics/CLI/spells/water-walk-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The pledgemage moves up to its speed, surrounding itself with elemental\
      \ magic as it moves. Until the end of its turn, the pledgemage can move through\
      \ the space of other creatures. The first time the pledgemage enters a creature's\
      \ space on a turn, that creature must succeed on a DC 13 Dexterity saving throw\
      \ or be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone). If the pledgemage\
      \ ends its turn in another creature's space, the pledgemage takes 5 (d10) force\
      \ damage and is pushed into the nearest unoccupied space."
    "name": "Surge of Artistry (Recharge 4-6)"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/prismari-pledgemage-scc.webp"
```
^statblock
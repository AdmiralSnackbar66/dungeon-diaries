---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/sorcerer
statblock: inline
aliases: ["Prismari Professor of Expression"]
---
# [Prismari Professor of Expression](3-Mechanics\CLI\bestiary\humanoid/prismari-professor-of-expression-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 206*  

Professors of expression embody the flare of Prismari magic. Using continuous motion, fluid grace, and interweaving steps, these teachers channel the elements of wind, flame, and lightning to accompany them. Their magic is fast and beautiful, which becomes swift death in battle, mesmerizing in its energetic flow. Devastating lightning strikes and searing lashes of flame meet the professors' foes head on.

Professors who embrace the Prismari philosophy of expression focus on magic becoming art in the moment. Whether to create a spectacle that an audience will never forget or to strike down their foes in a flash, these teachers impress upon their students the beauty of creation.

## Prismari Scholars

The scholars of Prismari College believe that art is the truest form of spellcraft. They use magic to make splendid art, and they employ artistry to make their magic spectacular.

```statblock
"name": "Prismari Professor of Expression (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "15"
- !!int "13"
- !!int "19"
"speed": "40 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "6"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "4"
  "Performance": !!int "10"
  "Acrobatics": !!int "6"
  "Arcana": !!int "5"
"damage_resistances": "fire, lightning"
"senses": "passive Perception 14"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [minor illusion](/3-Mechanics/CLI/spells/minor-illusion-xphb.md)\n\
    \n2/day each: [fog cloud](/3-Mechanics/CLI/spells/fog-cloud-xphb.md), [gust\
    \ of wind](/3-Mechanics/CLI/spells/gust-of-wind-xphb.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The professor makes three Cinder Strike attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +7 to hit, reach 15 ft., one target. Hit: 13 (2d8\
    \ + 4) fire damage."
  "name": "Cinder Strike"
- "desc": "The professor unleashes arcs of magical lightning at up to two creatures\
    \ it can see within 60 feet of itself. Each target must make a DC 15 Dexterity\
    \ saving throw, taking 35 (10d6) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Flourish (Recharge 6)"
"bonus_actions":
- "desc": "The professor is wreathed in flames and jumps up to 30 feet in any direction.\
    \ When the professor lands, the flames erupt in a 10-foot radius around the professor\
    \ and then vanish. Each creature of the professor's choice in that area must succeed\
    \ on a DC 15 Dexterity saving throw or take 7 (2d6) fire damage."
  "name": "Flaming Leap"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/prismari-professor-of-expression-scc.webp"
```
^statblock
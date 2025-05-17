---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
aliases: ["Quandrix Professor of Substance"]
---
# [Quandrix Professor of Substance](3-Mechanics\CLI\bestiary\humanoid/quandrix-professor-of-substance-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 209*  

Professors of substance specialize in the concrete side of Quandrix philosophy, manipulating physical dimensions and properties of growth. Their magic alters and replaces the equations that describe the natural world, including creatures, space, and substance. Through these manipulations, the professors change their size and the physical form of others, manipulate nature into rapid growth, travel instantaneously, and even fold space into deadly edges.

These professors teach that numbers and mathematics aren't merely intellectual concepts, but that they exist physically in all things. Professors of substance teach their students to wield magic practically, creating tangible change in the world around them.

## Quandrix Scholars

The scholars of Quandrix College focus on the mathematical principles that govern reality. Through these formulas, they can manipulate properties of matter and space, as well as abstract and conceptual space such as the mind, probability, and the flow of magic itself.

```statblock
"name": "Quandrix Professor of Substance (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Nature": !!int "7"
  "Investigation": !!int "10"
  "Perception": !!int "5"
  "Arcana": !!int "10"
"damage_resistances": "force"
"senses": "passive Perception 15"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 15):\n\nAt will: [guidance](/3-Mechanics/CLI/spells/guidance-xphb.md), [mage\
    \ hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [mending](/3-Mechanics/CLI/spells/mending-xphb.md)\
    \ (as an action)\n\n1/day each: [creation](/3-Mechanics/CLI/spells/creation-xphb.md)\
    \ (as an action), [dimension door](/3-Mechanics/CLI/spells/dimension-door-xphb.md),\
    \ [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md), [plant growth](/3-Mechanics/CLI/spells/plant-growth-xphb.md),\
    \ [polymorph](/3-Mechanics/CLI/spells/polymorph-xphb.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The professor makes two Spatial Blade attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +7 to hit (the target can't benefit from\
    \ cover less than total cover), reach 5 ft. or range 120 ft., one target. Hit:\
    \ 13 (2d8 + 4) force damage, or 22 (4d8 + 4) force damage if the professor is\
    \ Large or larger, and the professor can push the target horizontally up to 10\
    \ feet away."
  "name": "Spatial Blade"
"bonus_actions":
- "desc": "The professor magically alters its physical form until it uses this bonus\
    \ action again, until it is [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)\
    \ or dies, or until it dismisses the effect (no action required). Choose one of\
    \ the following options:"
  "name": "Dilation (Recharge 5-6)"
- "desc": "The professor becomes Large if there is sufficient room for it to grow.\
    \ It has advantage on attack rolls and on ability checks and saving throws that\
    \ rely on Strength."
  "name": "Expand"
- "desc": "The professor becomes Small. Its walking speed increases to 60 feet, attack\
    \ rolls against it have disadvantage, and it has advantage on ability checks and\
    \ saving throws that rely on Dexterity."
  "name": "Contract"
"reactions":
- "desc": "When the professor is hit by an attack roll, it can increase its AC by\
    \ 3 against that attack, potentially causing it to miss. The professor can then\
    \ teleport, along with any equipment it is wearing or carrying, up to 30 feet\
    \ to an unoccupied space it can see."
  "name": "Avoidant Translation (2/Day)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/quandrix-professor-of-substance-scc.webp"
```
^statblock
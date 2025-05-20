---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/druid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Witherbloom Pledgemage
---
# [Witherbloom Pledgemage](3-Mechanics\CLI\bestiary\humanoid/witherbloom-pledgemage-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 222*  

Deep in the fog and muck of the swamp, the students of Witherbloom College—first as apprentices and then as pledgemages—study the cycle of life and death. Their magic is fueled by what they call life essence: the ubiquitous energy that runs through living things.

Witherbloom students learn how to concoct magical potions and talismans, in addition to their spellcasting studies. Their magic ranges from necrotic shadows and withering bursts of poison to flourishing bursts of plant life.

## Witherbloom Scholars

Witherbloom College studies the magic inherent in the natural cycle of life and death. Witherbloom professors approach the philosophy from different directions, with one methodology focusing on decay and the other dealing with growth.

```statblock
"name": "Witherbloom Pledgemage (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with vociferous form"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "13"
  - !!int "14"
  - !!int "17"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "constitution": "+3"
  - "wisdom": "+5"
"skillsaves":
  - "name": "[Medicine](/3-Mechanics/CLI/skills.md#Medicine)"
    "desc": "+5"
  - "name": "[Nature](/3-Mechanics/CLI/skills.md#Nature)"
    "desc": "+6"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "passive Perception 17"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
  - "desc": "As long as the pledgemage has at least 1 hit point remaining, the pledgemage\
      \ regains 5 hit points at the start of its turn."
    "name": "Regeneration"
  - "desc": "At the end of a 10-minute ritual, the pledgemage can touch one willing\
      \ creature (including itself) and bestow upon it a small talisman imbued with\
      \ magic. Upon receiving the talisman, the creature gains 10 temporary hit points,\
      \ and it can add d6 to its initiative rolls while it wears the talisman. These\
      \ benefits last for 1 hour or until the pledgemage conducts another ritual to\
      \ bestow another talisman. When the benefits expire, the talisman crumbles to\
      \ dust."
    "name": "Verdant Talisman"
"actions":
  - "desc": "Melee Spell Attack: +5 to hit, reach 15 ft., one target. Hit: 8 (1d10\
      \ + 3) piercing damage plus 18 (4d8) poison damage. If the target is a Large\
      \ or smaller creature, the apprentice can pull it up to 10 feet closer to itself."
    "name": "Briar Vine"
  - "desc": "The apprentice casts one of the following spells, requiring no material\
      \ components and using Wisdom as the spellcasting ability:\n\nAt will: [druidcraft](/3-Mechanics/CLI/spells/druidcraft-xphb.md),\
      \ [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying-xphb.md)\n\n1/day\
      \ each: [death ward](/3-Mechanics/CLI/spells/death-ward-xphb.md), [pass without\
      \ trace](/3-Mechanics/CLI/spells/pass-without-trace-xphb.md), [speak with plants](/3-Mechanics/CLI/spells/speak-with-plants-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The pledgemage transforms into an avatar of plants and shadow. While\
      \ in this form, the pledgemage adds its Wisdom modifier to its AC if it isn't\
      \ wearing armor or wielding a shield, and it has advantage on attack rolls against\
      \ any creature missing hit points. This form lasts for 1 minute or until the\
      \ pledgemage is reduced to 0 hit points."
    "name": "Vociferous Form (1/Day)"
"reactions":
  - "desc": "When the pledgemage sees a creature within 30 feet of itself drop to\
      \ 0 hit points, the pledgemage channels the expended life essence and targets\
      \ another creature it can see within 30 feet of itself. The target must succeed\
      \ on a DC 13 Constitution saving throw or become [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)\
      \ for 1 minute. While [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned) in\
      \ this way, the target takes 3 (d6) poison damage at the start of each of its\
      \ turns. The target can repeat the save at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Wither Burst"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/witherbloom-pledgemage-scc.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/druid
statblock: inline
aliases: ["Witherbloom Professor of Growth"]
---
# [Witherbloom Professor of Growth](3-Mechanics\CLI\bestiary\humanoid/witherbloom-professor-of-growth-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 223*  

Professors of growth nurture the essence of nature through their magic. They brew infusions of plants, fungi, and insects or other minuscule creatures that thrum with the essence of life, using these infusions to fuel their magic instead of using traditional material components. In battle, they flood their allies with vital essence, healing wounds and soothing ailments. Their foes face the wrath of nature itself, from grasping plants and conjured poisonous vines to avatars of nature's wrath.

These professors teach their students to focus on the growth side of the natural cycle of life and death and to avoid wasting resources. They espouse the philosophy that a thriving system benefits all.

## Witherbloom Scholars

Witherbloom College studies the magic inherent in the natural cycle of life and death. Witherbloom professors approach the philosophy from different directions, with one methodology focusing on decay and the other dealing with growth.

```statblock
"name": "Witherbloom Professor of Growth (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[hide armor](/3-Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "11"
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "13"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Medicine": !!int "7"
  "Nature": !!int "6"
  "Arcana": !!int "6"
  "Survival": !!int "7"
"damage_resistances": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "passive Perception 14"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability:\n\nAt will: [druidcraft](/3-Mechanics/CLI/spells/druidcraft-xphb.md),\
    \ [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying-xphb.md)\n\n1/day\
    \ each: [greater restoration](/3-Mechanics/CLI/spells/greater-restoration-xphb.md),\
    \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration-xphb.md), [mass\
    \ cure wounds](/3-Mechanics/CLI/spells/mass-cure-wounds-xphb.md), [pass without\
    \ trace](/3-Mechanics/CLI/spells/pass-without-trace-xphb.md), [plant growth](/3-Mechanics/CLI/spells/plant-growth-xphb.md),\
    \ [revivify](/3-Mechanics/CLI/spells/revivify-xphb.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The professor makes two Verdant Lash attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +7 to hit, reach 30 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage plus 7 (2d6) poison damage, and the target must succeed\
    \ on a DC 15 Strength saving throw or be pulled up to 10 feet closer to the professor."
  "name": "Verdant Lash"
- "desc": "The professor magically summons a Groff. The groff appears in an unoccupied\
    \ space within 60 feet of the professor, acts as the professor's ally, and takes\
    \ its turns immediately after the professor's. The professor can communicate telepathically\
    \ with this groff while it remains. The groff remains for 10 minutes, until it\
    \ or the professor dies, or until the professor dismisses it as an action."
  "name": "Summon Nature's Avatar (Recharges after a Short or Long Rest)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/witherbloom-professor-of-growth-scc.webp"
```
^statblock
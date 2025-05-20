---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Brackish Trudge
---
# [Brackish Trudge](3-Mechanics\CLI\bestiary\plant/brackish-trudge-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 187*  

Brackish trudges are lumbering masses of sentient fungus and vegetation that thrive in the bayou. They are living examples of the conflicting forces of life and decay existing in a harmonious cycle. Flowers and other plant life grow on their backs, necks, and heads. When these plants die, they decay and become the ideal habitat for fungi. The older a trudge is, the wilder and more varied are the plants and fungi that thrive in the tiny ecosystem on its back.

While sometimes ill-tempered and territorial, brackish trudges are usually content to mind their own business. When trudges are roused to defend themselves or drive off rivals, their punishing tusks laced with deadly fungus spores can make short work of the unwary. Trudges are also notoriously difficult to slay; the energies of life and death within them allow them to survive harrowing injuries.

```statblock
"name": "Brackish Trudge (SCC)"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "17"
  - !!int "4"
  - !!int "14"
  - !!int "4"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "fire"
"senses": "blindsight 10 ft., passive Perception 14"
"languages": ""
"cr": "3"
"traits":
  - "desc": "If damage reduces the trudge to 0 hit points, it must make a Constitution\
      \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
      \ or from a critical hit. On a success, the trudge drops to 1 hit point instead."
    "name": "Fungal Fortitude"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 16\
      \ (2d10 + 5) piercing damage plus 3 (d6) poison damage. If the target is a creature,\
      \ it must succeed on a DC 15 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Tusk"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/plant/token/brackish-trudge-scc.webp"
```
^statblock
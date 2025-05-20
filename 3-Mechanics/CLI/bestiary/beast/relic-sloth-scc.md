---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Relic Sloth
---
# [Relic Sloth](3-Mechanics\CLI\bestiary\beast/relic-sloth-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 210*  

For long expeditions, Lorehold mages often employ relic sloths to haul adventuring equipment and excavated artifacts—so long as their study isn't in any particular hurry. Relic sloths travel at an excruciatingly slow pace, deliberating every step and moving only when necessary. But this caution makes these hulking creatures perfect for traversing treacherous and crumbling ruins, where other beasts of burden would falter. The distinctive sickle-shaped claws on a relic sloth's forelimbs are primarily used for climbing, though they can fend off a hungry predator in a pinch.

```statblock
"name": "Relic Sloth (SCC)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"modifier": !!int "-1"
"stats":
  - !!int "20"
  - !!int "9"
  - !!int "17"
  - !!int "2"
  - !!int "12"
  - !!int "8"
"speed": "20 ft., climb 20 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 14\
      \ (2d8 + 5) slashing damage, and the target is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 15). The relic sloth can grapple no more than two targets at a\
      \ time."
    "name": "Claws"
"reactions":
  - "desc": "When the relic sloth is subjected to an effect that would move it out\
      \ of its current space or knock it [prone](/3-Mechanics/CLI/conditions.md#Prone),\
      \ it is neither moved nor knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Slow but Sturdy"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/beast/token/relic-sloth-scc.webp"
```
^statblock
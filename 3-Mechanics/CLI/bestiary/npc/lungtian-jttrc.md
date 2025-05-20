---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lungtian
---
# [Lungtian](3-Mechanics\CLI\bestiary\npc/lungtian-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 136*  

```statblock
"name": "Lungtian (JttRC)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Good"
"ac": !!int "11"
"ac_class": "16 with [barkskin](/3-Mechanics/CLI/spells/barkskin-xphb.md)"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "12"
  - !!int "11"
  - !!int "14"
  - !!int "15"
  - !!int "18"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Elvish, Sylvan"
"cr": "1"
"traits":
  - "desc": "Lungtian's innate spellcasting ability is Charisma (spell save DC 14).\
      \ Lungtian can innately cast the following spells, requiring no material components:\n\
      \nAt will: [druidcraft](/3-Mechanics/CLI/spells/druidcraft-xphb.md)\n\n\
      3/day each: [entangle](/3-Mechanics/CLI/spells/entangle-xphb.md), [goodberry](/3-Mechanics/CLI/spells/goodberry-xphb.md)\n\
      \n1/day each: [barkskin](/3-Mechanics/CLI/spells/barkskin-xphb.md), [pass\
      \ without trace](/3-Mechanics/CLI/spells/pass-without-trace-xphb.md), [shillelagh](/3-Mechanics/CLI/spells/shillelagh-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "Lungtian has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Lungtian can communicate with beasts and plants as if they shared a language."
    "name": "Speak with Beasts and Plants"
  - "desc": "Once on her turn, Lungtian can use 10 feet of her movement to step magically\
      \ into one living tree within her reach and emerge from a second living tree\
      \ within 60 feet of the first tree, appearing in an unoccupied space within\
      \ 5 feet of the second tree. Both trees must be large or bigger."
    "name": "Tree Stride"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5\
      \ ft., one target. Hit: 2 (d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning\
      \ damage with shillelagh."
    "name": "Club"
  - "desc": "Lungtian targets one humanoid or beast that she can see within 30 feet\
      \ of her. If the target can see Lungtian, it must succeed on a DC 14 Wisdom\
      \ saving throw or be magically [charmed](/3-Mechanics/CLI/conditions.md#Charmed).\
      \ The [charmed](/3-Mechanics/CLI/conditions.md#Charmed) creature regards Lungtian\
      \ as a trusted friend to be heeded and protected. Although the target isn't\
      \ under Lungtian's control, it takes Lungtian's requests or actions in the most\
      \ favorable way it can.\n\nEach time Lungtian or its allies do anything harmful\
      \ to the target, it can repeat the saving throw, ending the effect on itself\
      \ on a success. Otherwise, the effect lasts 24 hours or until Lungtian dies,\
      \ is on a different plane of existence from the target, or ends the effect as\
      \ a bonus action. If a target's saving throw is successful, the target is immune\
      \ to Lungtian's Fey Charm for the next 24 hours.\n\nLungtian can have no more\
      \ than one humanoid and up to three beasts [charmed](/3-Mechanics/CLI/conditions.md#Charmed)\
      \ at a time."
    "name": "Fey Charm"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/lungtian-jttrc.webp"
```
^statblock
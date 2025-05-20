---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/paladin
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blackguard
---
# [Blackguard](3-Mechanics\CLI\bestiary\humanoid/blackguard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 63, Volo's Guide to Monsters p. 211*  

Blackguards are paladins who broke their sacred oaths and now indulge their own villainous ambitions. They consort with Fiends and Undead, and they reject many of the goodly things from their former lives.

Blackguards often adorn their armor and weapons with dread accoutrements or are marked by eerie phenomena. You may choose a blackguard's accoutrement or roll on the Blackguard Accoutrements table to determine it.

**Blackguard Accoutrements**

`dice: [](blackguard-mpmm.md#^blackguard-accoutrements)`

| dice: d8 | Accoutrement |
|----------|--------------|
| 1 | Armor etched with stylized depictions of gruesome battles |
| 2 | Helm wrought in the shape of a demonic boar |
| 3 | Helm wrought to resemble a death mask |
| 4 | Cloak decorated with bloody handprints |
| 5 | Curls of inky smoke seeping from armor at the joints |
| 6 | Dozens of flies buzzing about the blackguard |
| 7 | Severed hand hanging from a chain around the blackguard's neck |
| 8 | Glaive adorned with a length of cloth bearing the words "I choose violence" |
^blackguard-accoutrements

```statblock
"name": "Blackguard (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "paladin"
"alignment": "Typically  Neutral Evil"
"ac": !!int "18"
"ac_class": "[plate](/3-Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "18"
  - !!int "11"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "wisdom": "+5"
  - "charisma": "+5"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Intimidation](/3-Mechanics/CLI/skills.md#Intimidation)"
    "desc": "+5"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "8"
"actions":
  - "desc": "The blackguard makes three attacks, using Glaive, Shortbow, or both."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9\
      \ (1d10 + 4) slashing damage plus 9 (2d8) necrotic damage."
    "name": "Glaive"
  - "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit:\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
  - "desc": "Each enemy within 30 feet of the blackguard must succeed on a DC 13 Wisdom\
      \ saving throw or be [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
      \ of the blackguard for 1 minute. If a [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
      \ target ends its turn more than 30 feet away from the blackguard, the target\
      \ can repeat the saving throw, ending the effect on itself on a success."
    "name": "Dreadful Aspect (Recharges after a Short or Long Rest)"
  - "desc": "The blackguard casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 13):\n\n2/day each: [command](/3-Mechanics/CLI/spells/command-xphb.md),\
      \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md), [find steed](/3-Mechanics/CLI/spells/find-steed-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Immediately after the blackguard hits a target with an attack roll, the\
      \ blackguard can force that target to make a DC 13 Constitution saving throw.\
      \ On a failed save, the target suffers one of the following effects of the blackguard's\
      \ choice:"
    "name": "Smite"
  - "desc": "The target is [blinded](/3-Mechanics/CLI/conditions.md#Blinded) for 1\
      \ minute. The [blinded](/3-Mechanics/CLI/conditions.md#Blinded) target can repeat\
      \ the save at the end of each of its turns, ending the effect on itself on a\
      \ success."
    "name": "Blind"
  - "desc": "The target is pushed up to 10 feet away and knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Shove"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/blackguard-mpmm.webp"
```
^statblock

## Environment

underdark, urban
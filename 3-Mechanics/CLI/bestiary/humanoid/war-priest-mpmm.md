---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cleric
statblock: inline
statblock-link: "#^statblock"
aliases:
- War Priest
---
# [War Priest](3-Mechanics\CLI\bestiary\humanoid/war-priest-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 254, Volo's Guide to Monsters p. 218*  

War priests worship deities of war, protection, and strategy. They plan tactics, lead soldiers into battle, confront enemy spellcasters, and tend to casualties. A war priest might command an army or serve as the right hand of a [warlord](/3-Mechanics/CLI/bestiary/humanoid/warlord-mpmm.md) (appears in "this book") on the battlefield.

War priests typically adorn themselves with a symbol of their faith. You can roll on the War Priest Holy Symbols table below, or choose one that fits your campaign.

**War Priest Holy Symbols**

`dice: [](war-priest-mpmm.md#^war-priest-holy-symbols)`

| dice: d8 | Holy Symbol |
|----------|-------------|
| 1 | Vial of iridescent liquid |
| 2 | Hilt of a broken sword |
| 3 | Piece of stained glass from a shrine |
| 4 | Clay figurine of a [ki-rin](/3-Mechanics/CLI/bestiary/celestial/ki-rin-mpmm.md) or another Celestial |
| 5 | [Torch](/3-Mechanics/CLI/items/torch-xphb.md) carved so that a hand appears to be holding the flame |
| 6 | Circlet of woven reeds |
| 7 | Scrimshawed bone |
| 8 | Vessel such as a cup, a [jug](/3-Mechanics/CLI/items/jug-xphb.md), an urn, or an amphora |
^war-priest-holy-symbols

```statblock
"name": "War Priest (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[plate](/3-Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "constitution": "+6"
  - "wisdom": "+7"
"skillsaves":
  - "name": "[Intimidation](/3-Mechanics/CLI/skills.md#Intimidation)"
    "desc": "+5"
  - "name": "[Religion](/3-Mechanics/CLI/skills.md#Religion)"
    "desc": "+4"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "9"
"actions":
  - "desc": "The war priest makes two Maul attacks, and it uses Holy Fire."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) bludgeoning damage  plus Hit: 10 (3d6) radiant damage."
    "name": "Maul"
  - "desc": "The war priest targets one creature it can see within 60 feet of it.\
      \ The target must make a DC 15 Wisdom saving throw. On a failed save, the target\
      \ takes 12 (2d8 + 3) radiant damage, and it is [blinded](/3-Mechanics/CLI/conditions.md#Blinded)\
      \ until the start of the war priest's next turn. On a successful save, the target\
      \ takes half as much damage and isn't [blinded](/3-Mechanics/CLI/conditions.md#Blinded)."
    "name": "Holy Fire"
  - "desc": "The war priest casts one of the following spells, using Wisdom as the\
      \ spellcasting ability (spell save DC 15):\n\nAt will: [light](/3-Mechanics/CLI/spells/light-xphb.md),\
      \ [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying-xphb.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n1/day each: [banishment](/3-Mechanics/CLI/spells/banishment-xphb.md),\
      \ [command](/3-Mechanics/CLI/spells/command-xphb.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [flame strike](/3-Mechanics/CLI/spells/flame-strike-xphb.md), [guardian of\
      \ faith](/3-Mechanics/CLI/spells/guardian-of-faith-xphb.md), [hold person](/3-Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration-xphb.md),\
      \ [revivify](/3-Mechanics/CLI/spells/revivify-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The war priest or one creature of its choice within 60 feet of it regains\
      \ 12 (2d8 + 3) hit points."
    "name": "Healing Light (Recharge 4-6)"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/war-priest-mpmm.webp"
```
^statblock

## Environment

desert, urban
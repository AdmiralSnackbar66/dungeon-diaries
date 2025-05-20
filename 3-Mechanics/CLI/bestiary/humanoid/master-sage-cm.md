---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Master Sage
---
# [Master Sage](3-Mechanics\CLI\bestiary\humanoid/master-sage-cm.md)
*Source: Candlekeep Mysteries p. 9*  

Candlekeep's resident lore experts are master sages and sages who dedicate themselves to scholarship above all.

```statblock
"name": "Master Sage (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "54"
"hit_dice": "12d8"
"modifier": !!int "0"
"stats":
  - !!int "8"
  - !!int "10"
  - !!int "10"
  - !!int "20"
  - !!int "18"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+11"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+11"
  - "name": "[Insight](/3-Mechanics/CLI/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Investigation](/3-Mechanics/CLI/skills.md#Investigation)"
    "desc": "+11"
  - "name": "[Medicine](/3-Mechanics/CLI/skills.md#Medicine)"
    "desc": "+10"
  - "name": "[Nature](/3-Mechanics/CLI/skills.md#Nature)"
    "desc": "+11"
  - "name": "[Religion](/3-Mechanics/CLI/skills.md#Religion)"
    "desc": "+11"
"senses": "passive Perception 14"
"languages": "Common plus any five languages"
"cr": "5"
"actions":
  - "desc": "Melee Spell Attack: +8 to hit (with advantage if the target is wearing\
      \ armor made of metal), reach 5 ft., one creature. Hit: 13 (3d8) lightning\
      \ damage, and the target can't take reactions until the start of its next turn."
    "name": "Shocking Grasp (Cantrip)"
  - "desc": "The sage creates a fiery explosion centered on a point it can see within\
      \ 150 feet of it. Each creature in a 20-foot-radius sphere centered on that\
      \ point must make a DC 14 Dexterity saving throw, taking 28 (8d6) fire damage\
      \ on a failed save, or half as much damage on a successful one. The fire spreads\
      \ around corners and ignites flammable objects in the area that aren't being\
      \ worn or carried."
    "name": "Fireball (3rd-Level Spell; 3/Day)"
  - "desc": "The sage casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (save DC 14, +6 to hit with spell attacks):\n\nAt will:\
      \ [light](/3-Mechanics/CLI/spells/light-xphb.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [mending](/3-Mechanics/CLI/spells/mending-xphb.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n3/day each: [comprehend languages](/3-Mechanics/CLI/spells/comprehend-languages-xphb.md),\
      \ [detect magic](/3-Mechanics/CLI/spells/detect-magic-xphb.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [identify](/3-Mechanics/CLI/spells/identify-xphb.md), [levitate](/3-Mechanics/CLI/spells/levitate-xphb.md),\
      \ [locate object](/3-Mechanics/CLI/spells/locate-object-xphb.md), [Tenser's\
      \ Floating Disk](/3-Mechanics/CLI/spells/tensers-floating-disk-xphb.md), [unseen\
      \ servant](/3-Mechanics/CLI/spells/unseen-servant-xphb.md)\n\n1/day each:\
      \ [banishment](/3-Mechanics/CLI/spells/banishment-xphb.md), [contact other plane](/3-Mechanics/CLI/spells/contact-other-plane-xphb.md),\
      \ [Drawmij's instant summons](/3-Mechanics/CLI/spells/drawmijs-instant-summons-xphb.md),\
      \ [legend lore](/3-Mechanics/CLI/spells/legend-lore-xphb.md), [locate creature](/3-Mechanics/CLI/spells/locate-creature-xphb.md),\
      \ [planar binding](/3-Mechanics/CLI/spells/planar-binding-xphb.md), [polymorph](/3-Mechanics/CLI/spells/polymorph-xphb.md),\
      \ [protection from evil and good](/3-Mechanics/CLI/spells/protection-from-evil-and-good-xphb.md),\
      \ [scrying](/3-Mechanics/CLI/spells/scrying-xphb.md), [sending](/3-Mechanics/CLI/spells/sending-xphb.md),\
      \ [true seeing](/3-Mechanics/CLI/spells/true-seeing-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "When the sage is hit by an attack or targeted by a [magic missile](/3-Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ spell, it calls forth an [invisible](/3-Mechanics/CLI/conditions.md#Invisible)\
      \ barrier of magical force that protects it. Until the start of its next turn,\
      \ the sage has a +5 bonus to AC, including against the triggering attack, and\
      \ it takes no damage from magic missile."
    "name": "Shield (1st-Level Spell; 3/Day)"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/master-sage-cm.webp"
```
^statblock
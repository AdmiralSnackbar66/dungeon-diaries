---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Hag of the Fetid Gaze"]
---
# [Hag of the Fetid Gaze](3-Mechanics\CLI\bestiary\fey/hag-of-the-fetid-gaze-cm.md)
*Source: Candlekeep Mysteries p. 76*  

Three green hags named Dread Morgan, Vile Sazha, and Auntie Greenbones were once rivals who dwelled in an area of the Feywild coterminous with the High Forest. A decade ago, during a time when the boundaries between the planes thinned, the hags became aware of the magic spring controlled by Sylvarie—and decided to control and corrupt it for their own purposes. The covetous hags each knew part of a ritual for crafting magic paintings that could bind mortal creatures with a terrible curse. After agreeing to share their knowledge and work together, they formed a coven dedicated to claiming Sylvarie's temple and making it a base for their nefarious plans.

The hags use their powers of illusion to pose as three elf sisters named Morganna, Azirssa, and Greensong. They are typically found in the bathhouse by day and in their tower lair at night. Each hag carries a master key that opens all the doors in the bathhouse and the tower.

```statblock
"name": "Hag of the Fetid Gaze (CM)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "14"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "3"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic, Sylvan"
"cr": "3"
"traits":
- "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights-xphb.md),\
    \ [minor illusion](/3-Mechanics/CLI/spells/minor-illusion-xphb.md), [vicious mockery](/3-Mechanics/CLI/spells/vicious-mockery-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "While all three members of a hag coven are within 30 feet of one another,\
    \ they can each cast the following spells from the wizard's spell list but must\
    \ share the spell slots among themselves:\n\n1st level (4 slots): [charm person](/3-Mechanics/CLI/spells/charm-person-xphb.md),\
    \ [witch bolt](/3-Mechanics/CLI/spells/witch-bolt-xphb.md)\n\n2nd level (3 slots):\
    \ [alter self](/3-Mechanics/CLI/spells/alter-self-xphb.md), [suggestion](/3-Mechanics/CLI/spells/suggestion-xphb.md)\n\
    \n3rd level (3 slots): [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md),\
    \ [glyph of warding](/3-Mechanics/CLI/spells/glyph-of-warding-xphb.md), [slow](/3-Mechanics/CLI/spells/slow-xphb.md)\n\
    \n4th level (3 slots): [blight](/3-Mechanics/CLI/spells/blight-xphb.md), [polymorph](/3-Mechanics/CLI/spells/polymorph-xphb.md)\n\
    \n5th level (2 slots): [dominate person](/3-Mechanics/CLI/spells/dominate-person-xphb.md),\
    \ [seeming](/3-Mechanics/CLI/spells/seeming-xphb.md)\n\n6th level (1 slots):\
    \ [Otto's irresistible dance](/3-Mechanics/CLI/spells/ottos-irresistible-dance-xphb.md)\n\
    \nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence\
    \ as her spellcasting ability. The spell save DC is 12 + the hag's Intelligence\
    \ modifier, and the spell attack bonus is 4 + the hag's Intelligence modifier."
  "name": "Shared Spellcasting (Coven Only)"
- "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears\
    \ the sounds can tell they are imitations with a successful DC 14 Wisdom ([Insight](/3-Mechanics/CLI/skills.md#Insight))\
    \ check."
  "name": "Mimicry"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like another creature of her general size and humanoid\
    \ shape. The illusion ends if the hag takes a bonus action to end it or if she\
    \ dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection.\
    \ For example, the hag could appear to have smooth skin, but someone touching\
    \ her would feel her rough flesh. Otherwise, a creature must take an action to\
    \ visually inspect the illusion and succeed on a DC 20 Intelligence ([Investigation](/3-Mechanics/CLI/skills.md#Investigation))\
    \ check to discern that the hag is disguised."
  "name": "Illusory Appearance"
- "desc": "The hag magically turns [invisible](/3-Mechanics/CLI/conditions.md#Invisible)\
    \ until she attacks or casts a spell, or until her [concentration](/3-Mechanics/CLI/conditions.md#Concentration)\
    \ ends (as if [concentrating](/3-Mechanics/CLI/conditions.md#Concentration) on\
    \ a spell). While [invisible](/3-Mechanics/CLI/conditions.md#Invisible), she leaves\
    \ no physical evidence of her passage, so she can be tracked only by magic. Any\
    \ equipment she wears or carries is [invisible](/3-Mechanics/CLI/conditions.md#Invisible)\
    \ with her."
  "name": "Invisible Passage"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/fey/token/hag-of-the-fetid-gaze-cm.webp"
```
^statblock
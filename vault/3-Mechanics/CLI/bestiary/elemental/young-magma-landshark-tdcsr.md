---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Young Magma Landshark"]
---
# [Young Magma Landshark](3-Mechanics\CLI\bestiary\elemental/young-magma-landshark-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 248*  

Lurking inside volcanoes, subterranean magma pits, and the endless seas of flame within the Elemental Plane of Fire, magma landsharks live only to eat. These creatures are physically similar to [bulettes](bulette-xmm.md), the common landshark of the "Dividing Plains", but are filled with churning elemental power.

This fiery, armored predator burrows and burns through solid rock and can sense the slightest movement in the ground around it. When hungry—and these creatures are always hungry—a magma landshark erupts from under the earth, oblivious to any obstruction or danger, uprooting trees, destroying roads, unleashing avalanches, and leaving sinkholes behind in its wake. Its jaws widen as it swallows prey whole, and even creatures that initially survive the attack must contend with an aura of intense heat if they can't escape.

```statblock
"name": "Young Magma Landshark (TDCSR)"
"size": "Large"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10 + 50"
"stats":
- !!int "20"
- !!int "11"
- !!int "21"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "40 ft., burrow 40 ft., swim 40 ft. (lava only)"
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., tremorsense 120 ft., passive Perception 14"
"languages": ""
"cr": "9"
"traits":
- "desc": "Any creature that starts its turn within 10 feet of the landshark takes\
    \ 11 (2d10) fire damage."
  "name": "Searing Presence"
- "desc": "The landshark's long jump is up to 40 feet and its high jump is up to 20\
    \ feet, with or without a running start."
  "name": "Standing Leap"
- "desc": "The landshark sheds bright light in a 15-foot radius and dim light for\
    \ an additional 15 feet."
  "name": "Illumination"
"actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 31\
    \ (4d12 + 5) piercing damage, and 14 (4d6) fire damage."
  "name": "Bite"
- "desc": "If the landshark jumps at least 15 feet as part of its movement, it can\
    \ then use this action to land on its feet in a space that contains one or more\
    \ other creatures. Each of those creatures must succeed on a DC 16 Strength or\
    \ Dexterity saving throw (target's choice) or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)\
    \ and take 19 (4d6 + 5) bludgeoning damage plus 14 (4d6) fire damage. On a\
    \ successful save, the creature takes only half the damage, isn't knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone),\
    \ and is pushed 5 feet out of the landshark's space into an unoccupied space of\
    \ the creature's choice. If no unoccupied space is within range, the creature\
    \ instead falls [prone](3-Mechanics/CLI/rules/conditions.md#Prone) in the land-shark's\
    \ space."
  "name": "Deadly Leap"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/elemental/token/young-magma-landshark-tdcsr.webp"
```
^statblock

## Environment

mountain, underdark
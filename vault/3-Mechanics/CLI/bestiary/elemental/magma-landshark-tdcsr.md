---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Magma Landshark"]
---
# [Magma Landshark](3-Mechanics\CLI\bestiary\elemental/magma-landshark-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 247*  

Lurking inside volcanoes, subterranean magma pits, and the endless seas of flame within the Elemental Plane of Fire, magma landsharks live only to eat. These creatures are physically similar to [bulettes](3-Mechanics/CLI/bestiary/monstrosity/bulette-xmm.md), the common landshark of the "Dividing Plains", but are filled with churning elemental power.

This fiery, armored predator burrows and burns through solid rock and can sense the slightest movement in the ground around it. When hungry—and these creatures are always hungry—a magma landshark erupts from under the earth, oblivious to any obstruction or danger, uprooting trees, destroying roads, unleashing avalanches, and leaving sinkholes behind in its wake. Its jaws widen as it swallows prey whole, and even creatures that initially survive the attack must contend with an aura of intense heat if they can't escape.

```statblock
"name": "Magma Landshark (TDCSR)"
"size": "Huge"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "12d12 + 72"
"stats":
- !!int "22"
- !!int "11"
- !!int "22"
- !!int "2"
- !!int "14"
- !!int "5"
"speed": "50 ft., burrow 50 ft., swim 50 ft. (lava only)"
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., tremorsense 120 ft., passive Perception 17"
"languages": ""
"cr": "14"
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
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 45\
    \ (6d12 + 6) piercing damage, and 14 (4d6) fire damage. If the target is a\
    \ Large or smaller creature, it must succeed on a DC 18 Dexterity saving throw\
    \ or be swallowed by the landshark. A swallowed creature is [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded)\
    \ and [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained), it has total\
    \ cover against attacks and other effects outside the landshark, and it takes\
    \ 42 (12d6) fire damage at the start of each of the landshark's turns.\n\nIf\
    \ the landshark takes 30 damage or more on a single turn from a creature inside\
    \ it, the landshark must succeed on a DC 23 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](3-Mechanics/CLI/rules/conditions.md#Prone)\
    \ in a space within 10 feet of the landshark. If the landshark dies, a swallowed\
    \ creature is no longer [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Bite"
- "desc": "If the landshark jumps at least 15 feet as part of its movement, it can\
    \ then use this action to land on its feet in a space that contains one or more\
    \ other creatures. Each of those creatures must succeed on a DC 18 Strength or\
    \ Dexterity saving throw (target's choice) or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)\
    \ and take 27 (6d6 + 6) bludgeoning damage plus 21 (6d6) fire damage. On a\
    \ successful save, the creature takes only half the damage, isn't knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone),\
    \ and is pushed 5 feet out of the landshark's space into an unoccupied space of\
    \ the creature's choice. If no unoccupied space is within range, the creature\
    \ instead falls [prone](3-Mechanics/CLI/rules/conditions.md#Prone) in the landshark's\
    \ space."
  "name": "Deadly Leap"
- "desc": "If the landshark is on solid ground, it melts the area around it, creating\
    \ a pool of lava in a 10-foot radius. Any creature that starts its turn in the\
    \ area or enters it for the first time on a turn takes 44 (8d10) fire damage."
  "name": "Lava Pool (Recharge 6)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/elemental/token/magma-landshark-tdcsr.webp"
```
^statblock

## Environment

mountain, underdark
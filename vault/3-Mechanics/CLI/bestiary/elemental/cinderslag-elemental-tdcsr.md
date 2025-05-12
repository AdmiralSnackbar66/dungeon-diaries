---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Cinderslag Elemental"]
---
# [Cinderslag Elemental](3-Mechanics\CLI\bestiary\elemental/cinderslag-elemental-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 231*  

Cinderslag elementals are pure manifestations of the hatred and furore of the deceased "Cinder King, Thordak". Even after his death, the fires of that great red dragon continue to ravage "Emon", as places scorched by his corrupting flames are transformed into vitriolic pits of slag and ash that spawn mindless creatures of elemental destruction. Though "Thordak's Crater" in "Emon" has mostly been healed by the Fire Ashari of Pyrah, the terrible fires still churning beneath the city give rise to [cinderslag elementals](3-Mechanics/CLI/bestiary/elemental/cinderslag-elemental-tdcsr.md), as do other areas where the "Cinder King's" elemental devastation has left an indelible mark, including the ruins of "Serpent's Head" in the "Cliffkeep Mountains" and the "Ashen Gorge" in the "Stormcrest Mountains".

## Gaze of Annihilation

A cinderslag elemental's Molten Gaze unleashes incredible power that can melt steel and stone with a glance. If one of these creatures is allowed to focus its gaze for long periods, or if several elementals work in unison, entire cities can easily be leveled in a tide of molten stone. Fortunately for the people of "Emon", "Thordak's" elemental spawn are mindless and incapable of unified action—as long as no one is able to bend these creatures to their will.

```statblock
"name": "Cinderslag Elemental (TDCSR)"
"size": "Large"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"stats":
- !!int "15"
- !!int "12"
- !!int "17"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "20 ft., burrow 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from non-magical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3-Mechanics/CLI/rules/conditions.md#Prone), [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "8"
"traits":
- "desc": "Any creature that starts its turn within 5 feet of the elemental takes\
    \ 5 (1d10) fire damage."
  "name": "Searing Presence"
- "desc": "The elemental can move through a space as narrow as 1 inch wide without\
    \ squeezing. In addition, the elemental can enter a hostile creature's space and\
    \ stop there. The first time it enters a creature's space on a turn, that creature\
    \ takes 5 (1d10) fire damage and must succeed on a DC 14 Strength saving throw\
    \ or be [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained). A creature\
    \ that starts its turn [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)\
    \ in this way takes 5 (1d10) fire damage. It can repeat the saving throw at\
    \ the end of each of its turns, freeing itself on a success."
  "name": "Molten Form"
- "desc": "For every 5 feet the elemental moves in water, or for every gallon of water\
    \ splashed on it, it takes 1 cold damage."
  "name": "Water Susceptibility"
"actions":
- "desc": "The elemental makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12\
    \ (3d6 + 2) bludgeoning damage plus 5 (1d10) fire damage. If the target is\
    \ a creature or a flammable object, it ignites. Until a creature takes an action\
    \ to douse the fire, the target takes 5 (1d10) fire damage at the start of each\
    \ of its turns."
  "name": "Slam"
- "desc": "Ranged Spell Attack: +8 to hit, range 30 ft., one target. Hit: 21\
    \ (6d6) fire damage, and the target must succeed on a DC 14 Constitution saving\
    \ throw or have one nonmagical item of the elemental's choice that the target\
    \ is carrying instantly melt or burn to cinders."
  "name": "Molten Gaze"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/elemental/token/cinderslag-elemental-tdcsr.webp"
```
^statblock
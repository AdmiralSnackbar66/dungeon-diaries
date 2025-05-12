---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Ashari Stoneguard"]
---
# [Ashari Stoneguard](3-Mechanics\CLI\bestiary\humanoid/ashari-stoneguard-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 229*  

## Ashari

A reclusive society of elementalist druidic masters, "the Ashari" symbolize the connection between civilization and nature in balance as they govern, heal, and tame Exandria's primordial threats.

### Mysterious Beginnings

No one knows "the Ashari's" true origins, though one popular legend ties directly to the ancient war between the gods and the primordial titans. As the "Prime Deities" scattered the essence of their fallen foes across Exandria, the titans' remains birthed new Elemental Planes. In response, numerous humanoids—who would eventually become part of "the Ashari"—were gifted with a magical affinity to shape the world and a responsibility to defend against future primordial threats.

### Triumph Divided

A multiracial people, "the Ashari" strategically organize into four distinct communities—the Fire Ashari of Pyrah, the Air Ashari of "Zephrah", the Earth Ashari of "Terrah", and the Water Ashari of Vesrah. Each community builds homes alongside sources of elemental power.

### Primordial Guardians

The walls between the Material Plane and the Elemental Planes are thin, and if those boundaries are tested, they tear asunder and form rifts. These planar fractures hemorrhage vast fields of wildfire, avalanches of crushing stone, boundless expanses of screeching hurricanes, and unending oceans of pounding tsunamis, all seemingly yearning for destruction.

When an elemental rift grows volatile, "the Ashari" become a living dam—subduing, soothing, and sealing its escaping power. Then, once a rift calms, "the Ashari's" work to heal the surrounding land begins.

### Selfless Respect

Ashari is a word found in many languages with a multitude of meanings, including: sunrise, innate will, torchbearer, and gardener. Some Ashari greetings include, "The Wildmother sees you" and "Your actions bring forth light."

## Ashari Stoneguard

The Earth Ashari of "Terrah" are a stoic people, slow to change and more likely to fight defensive battles and outlast enemies than wage offensive wars. The "Terrah" stoneguard are the perfect embodiment of this ideal, with their druidic training augmented by ancient combat techniques that allow them to hold fast against a tide of enemies. The stoneguard craft arms and armor from the granite around them, and their magical stonecraft rivals even that of the "dwarves". It is said that when elemental armies poured into Exandria in mythic times, two legendary stoneguard protected all of "Terrah" against that onslaught for ten days and ten nights, each standing guard while the other rested.

Today, the stoneguards stand vigilant along key defensive points within the "Cliffkeep Mountains", warding the "Terrah" tribe against the "dwarves" of "Kraghammer". If the stoneguard were ever to falter in their vigil, they believe the "dwarves" would doubtlessly enter their ancestral lands and strip its natural beauty in search of wealth and fuel.

```statblock
"name": "Ashari Stoneguard (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "granite half plate"
"hp": !!int "152"
"hit_dice": "16d8 + 80"
"stats":
- !!int "18"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "14"
- !!int "9"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "2"
  "Athletics": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from non-magical attacks, when\
  \ using skin-to-stone"
"condition_immunities": "[petrified](3-Mechanics/CLI/rules/conditions.md#Petrified)"
"senses": "tremorsense 30 ft., passive Perception 12"
"languages": "Common, Druidic, Terran"
"cr": "7"
"traits":
- "desc": "The stoneguard is a 3rd-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 13, +5 to hit with spell attacks). It has the following\
    \ druid spells prepared:\n\nCantrips (at will): [druidcraft](3-Mechanics/CLI/spells/druidcraft-xphb.md),\
    \ [resistance](3-Mechanics/CLI/spells/resistance-xphb.md)\n\n1st level (4 slots):\
    \ [goodberry](3-Mechanics/CLI/spells/goodberry-xphb.md), [speak with animals](3-Mechanics/CLI/spells/speak-with-animals-xphb.md),\
    \ [thunderwave](3-Mechanics/CLI/spells/thunderwave-xphb.md)\n\n2nd level (2\
    \ slots): [hold person](3-Mechanics/CLI/spells/hold-person-xphb.md), [spike\
    \ growth](3-Mechanics/CLI/spells/spike-growth-xphb.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The stoneguard makes three granite maul attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d6 + 4) bludgeoning damage. If the attack hits, the stoneguard can also\
    \ immediately cast [thunderwave](3-Mechanics/CLI/spells/thunderwave-xphb.md) as\
    \ a bonus action. This casting uses a spell slot but requires no components."
  "name": "Granite Maul"
"reactions":
- "desc": "When a creature within 5 feet of the stoneguard attacks a target other\
    \ than the stoneguard, the stoneguard can make one attack against that creature."
  "name": "Sentinel"
- "desc": "When the stoneguard is attacked, it gains resistance to bludgeoning, piercing,\
    \ and slashing damage from nonmagical attacks until the end of the attacker's\
    \ turn"
  "name": "Skin to Stone"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/ashari-stoneguard-tdcsr.webp"
```
^statblock
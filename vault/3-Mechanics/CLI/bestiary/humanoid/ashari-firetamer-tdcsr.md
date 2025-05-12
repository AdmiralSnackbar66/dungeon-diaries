---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Ashari Firetamer"]
---
# [Ashari Firetamer](3-Mechanics\CLI\bestiary\humanoid/ashari-firetamer-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 226*  

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

## Ashari Firetamer

Of all "the Ashari" tribes, the Fire Ashari of Pyrah have suffered the greatest. Their people were all but destroyed when "Thordak" burst through the Rift of Flame in his cataclysmic return to Exandria. Yet despite their immense hardships, the Fire Ashari have given selflessly to the people of Tal'Dorei.

Firetamers are the elite elementalists of the Pyrah, using their attunement to the primordial forces of the world to not just create fire, not just command it, but tame it to their will. A firetamer of Pyrah is nothing like the manic pyromancers of Tal'Dorei. For while the latter recklessly wields fire as a weapon, firetamers use their talent to protect others from fire's destructive power—or wield that same power to destroy those who threaten their people.

Firetamers are almost always accompanied by a [salamander](3-Mechanics/CLI/bestiary/elemental/salamander-xmm.md), a [fire elemental](3-Mechanics/CLI/bestiary/elemental/fire-elemental-xmm.md), or a small herd of [magma](3-Mechanics/CLI/bestiary/elemental/magma-mephit-xmm.md) or [smoke mephits](3-Mechanics/CLI/bestiary/elemental/smoke-mephit-xmm.md). While home in Pyrah, Ashari firetamers use their power to control the Rift of Flame or to control the flames of the volcanic forest known as the Cindergrove. And on the outskirts of "Emon", a group of firetamers led by a half-orc Ashari named Lorkathar keeps watch over the volatile "Scar of the Cinder King".

```statblock
"name": "Ashari Firetamer (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "[red dragon scale mail](3-Mechanics/CLI/items/red-dragon-scale-mail-xdmg.md)"
"hp": !!int "92"
"hit_dice": "16d8 + 20"
"stats":
- !!int "8"
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Nature": !!int "7"
  "Arcana": !!int "4"
"damage_resistances": "fire"
"senses": "passive Perception 14"
"languages": "Common, Druidic, Ignan"
"cr": "7"
"traits":
- "desc": "The firetamer is a 9th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](3-Mechanics/CLI/spells/druidcraft-xphb.md),\
    \ [mending](3-Mechanics/CLI/spells/mending-xphb.md), [produce flame](3-Mechanics/CLI/spells/produce-flame-xphb.md)\
    \ (2d8)\n\n1st level (4 slots): [cure wounds](3-Mechanics/CLI/spells/cure-wounds-xphb.md),\
    \ [faerie fire](3-Mechanics/CLI/spells/faerie-fire-xphb.md), [jump](3-Mechanics/CLI/spells/jump-xphb.md)\n\
    \n2nd level (3 slots): [flame blade](3-Mechanics/CLI/spells/flame-blade-xphb.md),\
    \ [heat metal](3-Mechanics/CLI/spells/heat-metal-xphb.md), [lesser restoration](3-Mechanics/CLI/spells/lesser-restoration-xphb.md)\n\
    \n3rd level (3 slots): [daylight](3-Mechanics/CLI/spells/daylight-xphb.md),\
    \ [dispel magic](3-Mechanics/CLI/spells/dispel-magic-xphb.md), [protection from\
    \ energy](3-Mechanics/CLI/spells/protection-from-energy-xphb.md)\n\n4th level\
    \ (3 slots): [freedom of movement](3-Mechanics/CLI/spells/freedom-of-movement-xphb.md),\
    \ [wall of fire](3-Mechanics/CLI/spells/wall-of-fire-xphb.md)\n\n5th level (1\
    \ slots): [conjure elemental](3-Mechanics/CLI/spells/conjure-elemental-xphb.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage plus 14 (4d6) fire damage."
  "name": "Scimitar"
- "desc": "The firetamer can cast the [dominate monster](3-Mechanics/CLI/spells/dominate-monster-xphb.md)\
    \ spell (save DC 15) on a [fire elemental](3-Mechanics/CLI/bestiary/elemental/fire-elemental-xmm.md)\
    \ or other elemental fire creature. If the creature has 150 or more hit points,\
    \ it has advantage on the saving throw."
  "name": "Flamecharm (Recharges after a Short or Long Rest)"
"bonus_actions":
- "desc": "The firetamer can transform into a [fire elemental](3-Mechanics/CLI/bestiary/elemental/fire-elemental-xmm.md).\
    \ Its game statistics are replaced by the statistics of the elemental, but the\
    \ firetamer retains its alignment, personality, and Intelligence, Wisdom, and\
    \ Charisma scores, and all of its skill and saving throw proficiencies. While\
    \ in this form, the firetamer can't cast spells. When the firetamer is reduced\
    \ to 0 hit points, falls [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious),\
    \ or dies in this form, it reverts to its humanoid form. It can remain in flameform\
    \ for up to 5 hours or until it reverts to its humanoid form as a bonus action."
  "name": "Flameform (Recharges after a Short or Long Rest)"
- "desc": "If the firetamer is in [fire elemental](3-Mechanics/CLI/bestiary/elemental/fire-elemental-xmm.md)\
    \ form using Flameform, it can expend a spell slot to regain 1d8 hit points\
    \ per level of the spell slot expended."
  "name": "Druidic Recovery"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/ashari-firetamer-tdcsr.webp"
```
^statblock
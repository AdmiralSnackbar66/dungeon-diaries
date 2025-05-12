---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Ashari Waverider"]
---
# [Ashari Waverider](3-Mechanics\CLI\bestiary\humanoid/ashari-waverider-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 230*  

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

## Ashari Waverider

The waveriders of Vesrah know firsthand the dangers of the open ocean and dedicate their lives to protecting seafarers from storms, pirates, and sea monsters. They are not warriors, however, but rather accomplished healers and aquatic empaths, using their powers to seek out and rescue survivors of marine disasters. They sometimes bring critically wounded survivors to Vesrah, a practice that the isolationist Water Ashari condemn for fear that such outsiders threaten their way of life. The waveriders take their peers' scorn in stride, for they would rather be righteous than popular.

A waverider turns to violence only as a last resort, preferring to fight in their shapechanged fishform rather than with harpoon in hand. They use hit-and-run tactics as a [hunter shark](3-Mechanics/CLI/bestiary/beast/hunter-shark-xmm.md) or employ their [giant octopus](3-Mechanics/CLI/bestiary/beast/giant-octopus-xmm.md) form's natural camouflage to harry opponents. When patrolling the open seas, waveriders skim across the water on personal waveboards with folding sails, similar in function to the [skysails](3-Mechanics/CLI/items/skysail-tdcsr.md) of the "Zephrah".

```statblock
"name": "Ashari Waverider (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "[hide armor of cold resistance](3-Mechanics/CLI/items/armor-of-cold-resistance-xdmg.md)"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Nature": !!int "3"
  "Athletics": !!int "8"
"damage_resistances": "cold"
"senses": "passive Perception 13"
"languages": "Aquan, Common, Druidic"
"cr": "5"
"traits":
- "desc": "The waverider is a 7th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 14, +6 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](3-Mechanics/CLI/spells/druidcraft-xphb.md),\
    \ [poison spray](3-Mechanics/CLI/spells/poison-spray-xphb.md) (2d12), [resistance](3-Mechanics/CLI/spells/resistance-xphb.md)\n\
    \n1st level (4 slots): [create or destroy water](3-Mechanics/CLI/spells/create-or-destroy-water-xphb.md),\
    \ [cure wounds](3-Mechanics/CLI/spells/cure-wounds-xphb.md), [healing word](3-Mechanics/CLI/spells/healing-word-xphb.md)\n\
    \n2nd level (3 slots): [animal messenger](3-Mechanics/CLI/spells/animal-messenger-xphb.md),\
    \ [lesser restoration](3-Mechanics/CLI/spells/lesser-restoration-xphb.md), [moonbeam](3-Mechanics/CLI/spells/moonbeam-xphb.md)\n\
    \n3rd level (3 slots): [conjure animals](3-Mechanics/CLI/spells/conjure-animals-xphb.md)\
    \ (aquatic beasts only), [water breathing](3-Mechanics/CLI/spells/water-breathing-xphb.md),\
    \ [water walk](3-Mechanics/CLI/spells/water-walk-xphb.md)\n\n4th level (1 slots):\
    \ [control water](3-Mechanics/CLI/spells/control-water-xphb.md)"
  "name": "Spellcasting"
- "desc": "Whenever the waverider casts a spell of 1st level or higher that affects\
    \ a non-hostile creature, that creature regains 3 hit points (in addition to any\
    \ healing the spell may provide)."
  "name": "Healing Tides"
- "desc": "The waverider can speak with and understand aquatic plants and animals."
  "name": "Marine Empathy"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., range 20/60\
    \ ft., one target. Hit: 7 (1d10 + 2) piercing damage. If the target is a Large\
    \ or smaller creature, it must succeed on a Strength contest against the waverider\
    \ or be pulled up to 20 feet toward the waverider. Attacks with this weapon made\
    \ while underwater do not have disadvantage."
  "name": "Harpoon"
"reactions":
- "desc": "The waverider can transform into a [hunter shark](3-Mechanics/CLI/bestiary/beast/hunter-shark-xmm.md)\
    \ or a [giant octopus](3-Mechanics/CLI/bestiary/beast/giant-octopus-xmm.md). Its\
    \ game statistics are replaced by the statistics of the chosen creature, but the\
    \ waverider retains its alignment, personality, and Intelligence, Wisdom, and\
    \ Charisma scores. It also retains its skill proficiencies, in addition to gaining\
    \ those of the creature it transforms into. When the waverider is reduced to 0\
    \ hit points, falls [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious),\
    \ or dies in this form, it reverts to its humanoid form. It can remain in fishform\
    \ for up to 3 hours or until it reverts to its humanoid form as a bonus action."
  "name": "Fishform (Recharges after a Short or Long Rest)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/ashari-waverider-tdcsr.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Ashari Skydancer"]
---
# [Ashari Skydancer](3-Mechanics\CLI\bestiary\humanoid/ashari-skydancer-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 227*  

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

## Ashari Skydancer

"Zephrah's" location in the "Summit Peaks" has shielded "the Ashari" who dwell there from countless hardships. Few infringe upon their isolated home, and this safety has bred a certain recklessness among the Air Ashari. Though they guard their elemental rift as closely as do the rest of their kin, their lack of stoicism and restraint often earns them the scorn of the Earth Ashari of "Terrah", the only other Ashari tribe in Tal'Dorei.

Air Ashari children learn to fly before they learn to walk, accompanying their parents through snow-fattened clouds on Ashari [skysails](3-Mechanics/CLI/items/skysail-tdcsr.md). But while all in "Zephrah" love the sensation of flight, few hone their skills as rigorously as the skydancers. These graceful masters of the wind are at once artists, performers, and warriors. They are the beloved heroes of their people, both defending them in times of danger and bringing them happiness in times of peace.

```statblock
"name": "Ashari Skydancer (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "63"
"hit_dice": "14d8"
"stats":
- !!int "10"
- !!int "18"
- !!int "10"
- !!int "12"
- !!int "16"
- !!int "11"
"speed": "30 ft., fly 60 ft. (with [skysail](3-Mechanics/CLI/items/skysail-tdcsr.md))"
"saves":
  "Dexterity": !!int "7"
"skillsaves":
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"senses": "passive Perception 16"
"languages": "Auran, Common, Druidic"
"cr": "5"
"traits":
- "desc": "The skydancer is a 3rd-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 14, +6 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [guidance](3-Mechanics/CLI/spells/guidance-xphb.md),\
    \ [shillelagh](3-Mechanics/CLI/spells/shillelagh-xphb.md)\n\n1st level (4 slots):\
    \ [entangle](3-Mechanics/CLI/spells/entangle-xphb.md), [fog cloud](3-Mechanics/CLI/spells/fog-cloud-xphb.md),\
    \ [jump](3-Mechanics/CLI/spells/jump-xphb.md)\n\n2nd level (2 slots): [gust\
    \ of wind](3-Mechanics/CLI/spells/gust-of-wind-xphb.md), [pass without trace](3-Mechanics/CLI/spells/pass-without-trace-xphb.md)"
  "name": "Spellcasting"
- "desc": "If the skydancer is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the skydancer instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The skydancer doesn't provoke an [opportunity attack](3-Mechanics/CLI/rules/actions.md#Opportunity%20Attack)\
    \ when it flies out of an enemy's reach."
  "name": "Flyby"
- "desc": "The skydancer flies with a special Ashari magic item called a [skysail](3-Mechanics/CLI/items/skysail-tdcsr.md).\
    \ While the [skysail's](3-Mechanics/CLI/items/skysail-tdcsr.md) wings are extended,\
    \ the skydancer can glide through the air at a speed of 60 feet, but must descend\
    \ by at least 10 feet at the end of its turn and can't gain altitude."
  "name": "Skysail"
"actions":
- "desc": "The skydancer makes two [skysail](3-Mechanics/CLI/items/skysail-tdcsr.md)\
    \ staff attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage. If the skydancer makes this attack while flying, the\
    \ target must make a DC 14 Dexterity saving throw, taking 21 (6d6) lightning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Skysail Staff"
- "desc": "The skydancer uses its [skysail](3-Mechanics/CLI/items/skysail-tdcsr.md)\
    \ to cast [fly](3-Mechanics/CLI/spells/fly-xphb.md) on itself for up to 1 minute\
    \ (no [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration) required)."
  "name": "Fly (1/Day)"
"reactions":
- "desc": "When the skydancer takes falling damage, it can reduce the damage by half."
  "name": "Slow Fall"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/ashari-skydancer-tdcsr.webp"
```
^statblock
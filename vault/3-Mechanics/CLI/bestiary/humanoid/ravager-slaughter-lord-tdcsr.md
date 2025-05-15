---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Ravager Slaughter Lord"]
---
# [Ravager Slaughter Lord](3-Mechanics\CLI\bestiary\humanoid/ravager-slaughter-lord-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 250*  

The "Ravagers" are a death cult that stampedes across the "Dividing Plains", spilling blood in the name of the Betrayer God known as the Ruiner. Led by bloodthirsty warlords called [Slaughter Lords](ravager-slaughter-lord-tdcsr.md), the cult's long-term goals are unknown, but its members are content in the short term to sow the seeds of chaos across the plains.

Such wanton, chaotic slaughter would certainly please the Ruiner, and the smaller settlements of the plains have learned to fear the sight of "Ravagers" on the horizon. Inside the walls of "Westruun", however, Lord Mayor Lysandra Kallos and her councilors worry that the "Ravagers" show better organization than their bloodthirsty warlords should be capable of instilling in the cult. Who—or what—is commanding the Slaughter Lords from the shadows? And toward what end are these depraved warriors being directed?

## Ravager Slaughter Lord

Some warlords of the "Dividing Plains", hungry for recognition in the single burning eye of their god, turn to the "Ravagers" in the name of blood and glory. Those few whose deeds live up to their ambitions soon find themselves leading factions of the cult—and honored by the title of Slaughter Lord. A Slaughter Lord craves combat and leads Ravager raids as often as possible. However, they are frequently forced to remain at their strongholds because of the strict regimen of alchemical treatments that grant them increased power.

A small army of shamans and alchemists attend to the Slaughter Lords to artificially enhance their strength and fury, creating concoctions to grow their muscular forms to massive size, sharpen their tactical reasoning, and bestow upon them the divine protection of the Ruiner. A Slaughter Lord's unnatural size is their most obvious martial advantage, enabling them to dual-wield even the largest weapons. But the Ruiner's blessings also grant them access to divine magic that can blind or slay enemies with a word.

It is speculated that four major arms of the "Ravagers" are each commanded by one of these terrors, but the exact number of Slaughter Lords remains unknown.

### Alignment

Chaotic evil.

```statblock
"name": "Ravager Slaughter Lord (TDCSR)"
"size": "Large"
"type": "humanoid"
"subtype": "any"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "unarmored defense"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "22"
- !!int "14"
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "11"
  "Religion": !!int "5"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Common, one other language"
"cr": "9"
"traits":
- "desc": "The Slaughter Lord's innate spellcasting ability is Wisdom (spell save\
    \ DC 15, +7 to hit with spell attacks). It can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
    \n1/day each: [control weather](3-Mechanics/CLI/spells/control-weather-xphb.md),\
    \ [divine word](3-Mechanics/CLI/spells/divine-word-xphb.md), [fire storm](3-Mechanics/CLI/spells/fire-storm-xphb.md)\n\
    \n3/day each: [flame strike](3-Mechanics/CLI/spells/flame-strike-xphb.md),\
    \ [spirit guardians](3-Mechanics/CLI/spells/spirit-guardians-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "If the Slaughter Lord fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- "desc": "While the Slaughter Lord is wearing no armor and not wielding a [shield](3-Mechanics/CLI/items/shield-xphb.md),\
    \ its AC includes its Constitution modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The Slaughter Lord makes four attacks with its dual greatswords or three\
    \ attacks with its spear."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d6 + 6) piercing damage plus 3 (1d6) fire damage."
  "name": "Dual Greatswords"
- "desc": "Melee or Ranged Weapon Attack: +10 to hit, range 20/60 ft., one target.\
    \ Hit: 13 (2d6 + 6) piercing damage plus 3 (1d6) fire damage, or 15 (2d8\
    \ + 6) piercing damage plus 3 (1d6) fire damage if used with both hands to\
    \ make a melee attack."
  "name": "Spear"
"bonus_actions":
- "desc": "The Slaughter Lord can move up to its speed toward a hostile creature it\
    \ can see."
  "name": "Aggressive"
"legendary_actions":
- "desc": "The Slaughter Lord makes a spear or dual greatswords attack."
  "name": "Attack"
- "desc": "The Slaughter Lord moves up to half its speed."
  "name": "Move"
- "desc": "The Slaughter Lord [casts an innate spell](3-Mechanics/CLI/rules/actions.md#Magic)."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/ravager-slaughter-lord-tdcsr.webp"
```
^statblock

## Environment

grassland
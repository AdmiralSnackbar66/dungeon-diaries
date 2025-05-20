---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Morkoth
---
# [Morkoth](3-Mechanics\CLI\bestiary\aberration/morkoth-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 186, Volo's Guide to Monsters p. 177*  

Ancient and devious, morkoths are voracious collectors. Each one floats through the planes on a strange, mobile island, amassing the valuables, oddities, and castoffs of the multiverse in a massive, ever-growing collection.

The first morkoths arose in the Astral Plane when the [petrified](/3-Mechanics/CLI/conditions.md#Petrified) body of a deity of greed and strife collided with a remnant of celestial matter imbued with life-giving magic. The collision released a storm of chaotic energy and sent countless islands spinning away into the void. Within some of them, bits of the god's [petrified](/3-Mechanics/CLI/conditions.md#Petrified) flesh came back to life as morkoths: tentacled monstrosities brimming with malice and greed.

Morkoths are driven by greed and selfishness mixed with a yearning for conflict. They hoard vast stores of treasure, knowledge, and captives on their islands. Some of these prisoners are the descendants of people captured generations before; they might know of no other world outside their island. A morkoth may allow a visitor to bargain for something or someone it has claimed if that visitor offers the morkoth something it desires more. It shows no mercy, however, to those who break a deal or try to steal from it. A morkoth knows every person and object in its collection.

A morkoth's island has the qualities of a dreamscape. It holds a jumble of objects and creatures the morkoth has collected, some of which date from forgotten times. An island might have natural-looking illumination, but most are shrouded in twilight, and on any of them, mists and shadows can appear without notice. The environment is warm and wet, a subtropical or tropical climate that keeps the morkoth and its "guests" comfortable.

Each island glides on planar currents and is safe from most harmful external effects—one could float in the skies of Avernus in the Nine Hells without harm to it or its residents. A morkoth's island might be found anywhere from the bottom of the ocean to the void of the Astral Plane. Anything on or within a certain distance of a morkoth's isle is drawn with it in its journey through the planes. Thus, people from lost civilizations and creatures or objects from bygone ages might be found within a morkoth's dominion.

Some islands travel a specific route, arriving at the same destinations regularly over a cycle of years. Others are tied to a particular place or group of locales, and still others move erratically through the cosmos. Occasionally, a morkoth learns to direct its island's movement.

## A Morkoth's Lair

A morkoth claims dominion over an entire island, and it also maintains a central sanctum on that isle. This lair is most often a twisted network of narrow tunnels that connect several underground chambers, although other structural forms might be incorporated. The morkoth dwells among the creatures and objects it prizes most in a spacious vault at the center of the warren, where the celestial fragments that make up the island's core are also located. Sections of the lair and its center might be kept dry to better protect and preserve collected objects and creatures, but most of the lair is underwater.

A morkoth encountered in its lair has a challenge rating of 12 (8,400 XP).

```statblock
"name": "Morkoth (MPMM)"
"size": "Large"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "165"
"hit_dice": "22d10 + 44"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "20"
  - !!int "15"
  - !!int "13"
"speed": "25 ft., swim 50 ft."
"saves":
  - "dexterity": "+6"
  - "intelligence": "+9"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+9"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+9"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+10"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+6"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 20"
"languages": "telepathy 120 ft."
"cr": "11"
"traits":
  - "desc": "The morkoth can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The morkoth makes either two Bite attacks and one Tentacles attack or\
      \ three Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6\
      \ + 2) slashing damage plus 10 (3d6) psychic damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 15\
      \ (3d8 + 2) bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 14) if it is a Large or smaller creature. Until this grapple ends,\
      \ the target is [restrained](/3-Mechanics/CLI/conditions.md#Restrained) and\
      \ takes 15 (3d8 + 2) bludgeoning damage at the start of each of its turns, and\
      \ the morkoth can't use its tentacles on another target."
    "name": "Tentacles"
  - "desc": "The morkoth projects a 30-foot cone of magical energy. Each creature\
      \ in that area must make a DC 17 Wisdom saving throw. On a failed save, the\
      \ creature is [charmed](/3-Mechanics/CLI/conditions.md#Charmed) by the morkoth\
      \ for 1 minute. While [charmed](/3-Mechanics/CLI/conditions.md#Charmed) in this\
      \ way, the target tries to get as close to the morkoth as possible, using its\
      \ actions to [Dash](/3-Mechanics/CLI/actions.md#Dash) until it is within 5 feet\
      \ of the morkoth. A [charmed](/3-Mechanics/CLI/conditions.md#Charmed) target\
      \ can repeat the saving throw at the end of each of its turns and whenever it\
      \ takes damage, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature has advantage\
      \ on saving throws against the morkoth's Hypnosis for 24 hours."
    "name": "Hypnosis"
  - "desc": "The morkoth casts one of the following spells, requiring no material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 17):\n\nAt will: [detect magic](/3-Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md)\n\n3/day each:\
      \ [darkness](/3-Mechanics/CLI/spells/darkness-xphb.md), [dimension door](/3-Mechanics/CLI/spells/dimension-door-xphb.md),\
      \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md), [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt-xphb.md),\
      \ [sending](/3-Mechanics/CLI/spells/sending-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "If the morkoth makes a successful saving throw against a spell or a spell\
      \ attack misses it, the morkoth can choose another creature (including the spellcaster)\
      \ it can see within 120 feet of it. The spell targets the chosen creature instead\
      \ of the morkoth. If the spell forced a saving throw, the chosen creature makes\
      \ its own save. If the spell was an attack, the attack roll is rerolled against\
      \ the chosen creature."
    "name": "Spell Reflection"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/morkoth-mpmm.webp"
```
^statblock

## Environment

coastal, underwater
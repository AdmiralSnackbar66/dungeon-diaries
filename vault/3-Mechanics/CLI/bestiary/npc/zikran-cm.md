---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Zikran"]
---
# [Zikran](3-Mechanics\CLI\bestiary\npc/zikran-cm.md)
*Source: Candlekeep Mysteries p. 145*  

Genasi have strong ties to the Inner Planes and the blood of genies flowing through their veins. Like the marids of the Elemental Plane of Water, Zikran is turbulent and unpredictable.

He carries a handheld magic device that controls the elemental cannon. This device, shown in the accompanying illustration, looks like a metal rod with a tip shaped like a bird's head.

On initiative count 20 (losing initiative ties), Zikran uses his handheld device to fire the cannon at one creature he can see, provided the creature is in the basement or on the staircase. Zikran's target must make a DC 17 Dexterity saving throw, taking `dice:7d6|noform|noparens|avg|text(24)` (`7d6`) cold damage on a failed save, or half as much damage on a successful one. The basement furnishings provide half cover, should a creature wish to hide behind them.

The cannon is a Large object with AC 16, 80 hit points, and immunity to poison and psychic damage. It is mounted atop a swivel and bolted to the dais. The cannon draws power from the crystal in the middle of the room. This crystal sparks with elemental power whenever the cannon is about to fire. If the crystal is destroyed, both Zikran's handheld device and the cannon become powerless. The crystal is a Large object with AC 13, 40 hit points, and immunity to poison and psychic damage.

```statblock
"name": "Zikran (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "144"
"hit_dice": "18d8 + 18"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin); acid"
"senses": "passive Perception 12"
"languages": "Aquan, Common, Primordial, Sahuagin, Undercommon"
"cr": "12"
"traits":
- "desc": "Zikran is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Zikran can cast [disguise\
    \ self](/3-Mechanics/CLI/spells/disguise-self-xphb.md) and [invisibility](/3-Mechanics/CLI/spells/invisibility-xphb.md)\
    \ at will and has the following wizard spells prepared:\n\nAt will: [disguise\
    \ self](/3-Mechanics/CLI/spells/disguise-self-xphb.md), [invisibility](/3-Mechanics/CLI/spells/invisibility-xphb.md)\n\
    \nCantrips (at will): [fire bolt](/3-Mechanics/CLI/spells/fire-bolt-xphb.md),\
    \ [light](/3-Mechanics/CLI/spells/light-xphb.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md), [shocking\
    \ grasp](/3-Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\n1st level (4 slots):\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic-xphb.md), [identify](/3-Mechanics/CLI/spells/identify-xphb.md),\
    \ [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md), [magic missile](/3-Mechanics/CLI/spells/magic-missile-xphb.md)\n\
    \n2nd level (3 slots): [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts-xphb.md),\
    \ [mirror image](/3-Mechanics/CLI/spells/mirror-image-xphb.md), [misty step](/3-Mechanics/CLI/spells/misty-step-xphb.md)\n\
    \n3rd level (3 slots): [counterspell](/3-Mechanics/CLI/spells/counterspell-xphb.md),\
    \ [fly](/3-Mechanics/CLI/spells/fly-xphb.md), [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt-xphb.md)\n\
    \n4th level (3 slots): [banishment](/3-Mechanics/CLI/spells/banishment-xphb.md),\
    \ [fire shield](/3-Mechanics/CLI/spells/fire-shield-xphb.md), [stoneskin](/3-Mechanics/CLI/spells/stoneskin-xphb.md)\n\
    \n5th level (3 slots): [cone of cold](/3-Mechanics/CLI/spells/cone-of-cold-xphb.md),\
    \ [conjure elemental](/3-Mechanics/CLI/spells/conjure-elemental-xphb.md), [scrying](/3-Mechanics/CLI/spells/scrying-xphb.md),\
    \ [wall of force](/3-Mechanics/CLI/spells/wall-of-force-xphb.md)\n\n6th level\
    \ (1 slots): [globe of invulnerability](/3-Mechanics/CLI/spells/globe-of-invulnerability-xphb.md)\n\
    \n7th level (1 slots): [teleport](/3-Mechanics/CLI/spells/teleport-xphb.md)\n\
    \n8th level (1 slots): [mind blank](/3-Mechanics/CLI/spells/mind-blank-xphb.md)\n\
    \n9th level (1 slots): [time stop](/3-Mechanics/CLI/spells/time-stop-xphb.md)\n\
    \nZikran casts these spells on itself before combat."
  "name": "Spellcasting"
- "desc": "Zikran has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Zikran"
  "name": "Amphibious"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/zikran-cm.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
aliases: ["Cyclops Stormcaller"]
---
# [Cyclops Stormcaller](3-Mechanics\CLI\bestiary\giant/cyclops-stormcaller-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 235*  

When [cyclopes](cyclops-sentry-xmm.md) are born beneath a raging storm, they sometimes grow up different—smaller than the rest, sickly and weak. Most of these stormborn [cyclopes](cyclops-sentry-xmm.md) are relentlessly bullied and beaten for their tiny stature, and many die before adulthood. Those who survive do so because of the magic the Stormlord has bestowed upon them—intentionally or otherwise. As [cyclopes](cyclops-sentry-xmm.md) are generally unfamiliar with magic, the power of a stormcaller awes and terrifies them, and many see stormcallers as nothing short of the manifestation of a god.

## Storm Worship

Their fellow [cyclopes](cyclops-sentry-xmm.md) may assume that the might of a stormcaller is akin to godliness, but many stormcallers hunger for greater power. A cabal of stormcallers regularly gathers in the "Daggerbay Mountains" at an ancient elven temple called the Skyneedle (in Elvish, ira'fallai; in Giant, "Tall Zappo-Zappo"). There, they conduct strange rituals to commune with an entity they call the Eye of the Storm—and with every ritual, their power grows.

However, the Eye of the Storm is no avatar of the Stormlord, but a vengeful [storm giant](storm-giant-xmm.md) named Eyvindr, who's posing as a demigod and intent on raising an army to exact retribution on the "Council of Seven Scepters". He'll have to risk revealing himself to the stormcallers eventually—but not until he believes that his control over his cyclops devotees is absolute.

```statblock
"name": "Cyclops Stormcaller (TDCSR)"
"size": "Large"
"type": "giant"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "[chain mail](3-Mechanics/CLI/items/chain-mail-xphb.md), [cloak of protection](3-Mechanics/CLI/items/cloak-of-protection-xdmg.md),\
  \ [ring of protection](3-Mechanics/CLI/items/ring-of-protection-xdmg.md)"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "10"
- !!int "18"
- !!int "15"
- !!int "8"
- !!int "20"
"speed": "30 ft., fly 60 ft. (stormy conditions only)"
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "2"
  "Wisdom": !!int "5"
  "Intelligence": !!int "4"
  "Strength": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Arcana": !!int "6"
"senses": "passive Perception 9"
"languages": "Common, Elvish, Giant"
"cr": "10"
"traits":
- "desc": "The cyclops's innate spellcasting ability is Charisma (spell save DC 17,\
    \ +9 to hit with spell attacks). The cyclops can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [ray of frost](3-Mechanics/CLI/spells/ray-of-frost-xphb.md)\
    \ (3d8), [water walk](3-Mechanics/CLI/spells/water-walk-xphb.md)\n\n1/day\
    \ each: [control weather](3-Mechanics/CLI/spells/control-weather-xphb.md), [storm\
    \ of vengeance](3-Mechanics/CLI/spells/storm-of-vengeance-xphb.md)\n\n3/day\
    \ each: [ice storm](3-Mechanics/CLI/spells/ice-storm-xphb.md), [sleet storm](3-Mechanics/CLI/spells/sleet-storm-xphb.md),\
    \ [wind wall](3-Mechanics/CLI/spells/wind-wall-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "The cyclops has disadvantage on any attack roll against a target more than\
    \ 30 feet away."
  "name": "One-Eyed"
- "desc": "While outdoors in stormy conditions, the cyclops has a flying speed of\
    \ 60 feet."
  "name": "Storm Wings"
- "desc": "The cyclops has advantage on Constitution saving throws made to maintain\
    \ [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration) on spells,\
    \ and cannot lose [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration)\
    \ because of turbulent weather."
  "name": "Supernatural Focus"
"actions":
- "desc": "The cyclops makes two ice claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13\
    \ (3d6 + 3) slashing damage plus 3 (1d6) cold damage."
  "name": "Ice Claw"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/giant/token/cyclops-stormcaller-tdcsr.webp"
```
^statblock

## Environment

mountain
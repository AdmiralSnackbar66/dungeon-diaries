---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Ember Roc"]
---
# [Ember Roc](3-Mechanics\CLI\bestiary\monstrosity/ember-roc-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 238*  

Centuries old, birthed by primordial chaos, and equaling the oldest dragons in size, the ember roc is an engine of ruthless consumption. With wingspans vast enough to blot out the sky and auras bright enough to rival the sun, these fiery birds of prey hunt only the deadliest game.

## Evolutionary Fire

The Fire Ashari of Pyrah believe that the mythic [rocs](3-Mechanics/CLI/bestiary/monstrosity/roc-xmm.md) that gave rise to the ember rocs maintain balance in Tal'Dorei. [Rocs](3-Mechanics/CLI/bestiary/monstrosity/roc-xmm.md) avoid humanoid settlements and hunt the monstrous creatures that would otherwise threaten those settlements. So "the Ashari" lure [rocs](3-Mechanics/CLI/bestiary/monstrosity/roc-xmm.md) to sites of elemental rifts, enticing them to devour creatures attempting to escape into the Material Plane. After years of feeding on [fire elementals](3-Mechanics/CLI/bestiary/elemental/fire-elemental-xmm.md), [salamanders](3-Mechanics/CLI/bestiary/elemental/salamander-xmm.md), [fire giants](3-Mechanics/CLI/bestiary/giant/fire-giant-xmm.md), and more, a [roc](3-Mechanics/CLI/bestiary/monstrosity/roc-xmm.md) is imbued with primordial power, flames erupting from every feather to transform it into the ember roc.

## Hopeless Ends

An ember roc patiently observes prey for hours before it strikes, snatching up [elephants](3-Mechanics/CLI/bestiary/beast/elephant-xmm.md), [whales](3-Mechanics/CLI/bestiary/beast/killer-whale-xmm.md), and even young dragons. It unleashes iron talons to <span title="Player's Handbook">grapple</span> targets, paying no heed to counter-attacks, then soars back to its nest—often inside an active volcano. If prey proves too much trouble while in flight, an ember roc readily drops it from some great height. But those unable to escape slowly roast in the creature's fiery grip.

```statblock
"name": "Ember Roc (TDCSR)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "232"
"hit_dice": "16d20 + 64"
"stats":
- !!int "26"
- !!int "10"
- !!int "18"
- !!int "4"
- !!int "11"
- !!int "9"
"speed": "20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "5"
  "Wisdom": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "fire"
"senses": "passive Perception 15"
"languages": "understands Ignan but can't speak"
"cr": "14"
"traits":
- "desc": "The roc has advantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
- "desc": "Any creature that starts its turn within 5 feet of the roc takes 7 (2d6)\
    \ fire damage."
  "name": "Searing Presence"
- "desc": "The roc sheds bright light in a 40-foot radius and dim light for an additional\
    \ 40 feet."
  "name": "Illumination"
"actions":
- "desc": "The roc makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 26\
    \ (4d8 + 8) piercing damage and 7 (2d6) fire damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 22\
    \ (4d6 + 8) slashing damage and 7 (2d6) fire damage."
  "name": "Talons"
- "desc": "The roc beats its wings, creating a swirling conflagration. Each creature\
    \ within 30 feet of the roc must succeed on a DC 18 Dexterity saving throw or\
    \ take 21 (6d6) fire damage."
  "name": "Inferno (Recharge 5-6)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/monstrosity/token/ember-roc-tdcsr.webp"
```
^statblock

## Environment

mountain
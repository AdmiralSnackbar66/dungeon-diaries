---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Diseased Grick"]
---
# [Diseased Grick](3-Mechanics\CLI\bestiary\monstrosity/diseased-grick-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 122*  

In ancient times, the Mirescar was called the Heartwood. It was the domain of a wise and kindly [guardian naga](guardian-naga-xmm.md) named [Sagacitous Erusaire](sagacitous-erusaire-tdcsr.md), who welcomed all with good hearts to share their bounty or receive alms. However, this [naga](sagacitous-erusaire-tdcsr.md) has been corrupted into a cruel shadow of his former self. He and his [diseased grick](diseased-grick-tdcsr.md) minions have been twisted into hideous, pus-oozing spreaders of disease—and spreading it is now the only thought in their minds. The [naga](sagacitous-erusaire-tdcsr.md) can cast [contagion](contagion-xphb.md) at will, and his [diseased grick](diseased-grick-tdcsr.md) minions can do so once per day. Is it possible to save the mind of this corrupted guardian?

> [!note]
> See "A Sickness Spreads" for more information on this NPC.

---

The wormlike grick waits unseen, blending in with the rock of the caves and caverns it haunts. Only when prey comes near does it rear up, its four barbed tentacles unfurling to reveal its hungry, snapping beak.

## Passive Predators

Gricks rarely hunt. Instead, they drag their rubbery bodies to places where creatures regularly pass, lurking out of sight amid rocky rubble and debris, squeezing into burrows, holes, or crevices, climbing up to ledges, or coiling around stalactites to drop on unwary prey. A grick consumes virtually anything that moves except for other gricks. It targets the nearest prey, grabbing a fallen creature with its tentacles and dragging it off to eat alone.

## Roving Ambushers

Gricks remain in an area until the food supply dwindles, often because sentient creatures become aware of their presence and plot alternate routes around their lairs. When prey is scarce in the Underdark, gricks venture aboveground to hunt in the wilderness, lurking in trees or on cliff-side ledges. A grick pack is often led by a single well-fed, oversized alpha around which the others congregate.

## Spoils of Slaughter

Over time, grick lairs accumulate the cast-off possessions of intelligent prey, and expert guides know to look out for these tell-tale signs. Underdark explorers sometimes seal off the routes leading to and from a grick lair to starve them, then claim the wealth of the foul creatures' victims.

```statblock
"name": "Diseased Grick (TDCSR)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "3"
- !!int "14"
- !!int "5"
"speed": "30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- "desc": "The diseased grick's spellcasting ability is Wisdom (spell save DC 12 +4\
    \ to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\n1/day: [contagion](3-Mechanics/CLI/spells/contagion-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "The diseased grick has advantage on Dexterity ([Stealth](3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- "desc": "The diseased grick makes one attack with its tentacles. If that attack\
    \ hits, the diseased grick can make one beak attack against the same target."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Beak"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/monstrosity/token/diseased-grick-tdcsr.webp"
```
^statblock
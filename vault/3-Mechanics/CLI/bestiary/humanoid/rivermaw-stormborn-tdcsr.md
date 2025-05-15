---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Rivermaw Stormborn"]
---
# [Rivermaw Stormborn](3-Mechanics\CLI\bestiary\humanoid/rivermaw-stormborn-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 254*  

## Rivermaw Warriors

The "Rivermaw herd" is a nomadic society mostly composed of "half-giants", also known as "goliaths", and a mighty force for good on the "Dividing Plains". The herd was once conquered by a goliath tyrant named Kevdak, then formed anew after Kevdak was eventually defeated by Vox Machina. Free of Kevdak's martial cruelty, the Rivermaw see it as their duty to prevent any such tyrant from conquering the "Dividing Plains" ever again.

Though most members of the "Rivermaw herd" are "goliaths", their ranks include people of all races who wish to live beyond the stone walls of "Westruun" and the palisades of plains towns like "Turst Fields". "Orcs", "humans", "halflings", and "gnolls" make up most of the rest of the herd's warriors. Most of those warriors value strength and endurance over other qualities, but the brawlers and stormborn of the Rivermaw are better known for cunning, intelligence, strategy, and a unique attunement to the mighty thunder of the Stormlord.

## Rivermaw Stormborn

Countless goliath legends tell of heroes born beneath a raging storm: Kaldon Thunderhead, who slew the [ember roc](ember-roc-tdcsr.md) of the south; Marydra Skysplitter, who defeated a champion of the Ruiner in single combat; and Yodrell Rumblechest, who halted a flash flood with only his voice, to name just a few.

Though the stormborn of legend were all "half-giants", more and more Rivermaw have begun to feel the Stormlord's power reverberate within them. These peerless warriors are blessed with preternatural skill with a blade and the uncanny ability to command lightning. Often destined to become mythic heroes, stormborn fight with reckless abandon—but many can be distressingly prideful and might need reminding that the songs of defeated or tyrannical stormborn are rarely sung by the bards.

The tyrant Kevdak's fearsome Herd of Storms was so named because of the many stormborn in its ranks, but that herd was broken at "Westruun" some two decades ago. Now the "Rivermaw herd" is bolstered by those who were freed from Kevdak's rule. The few stormborn remaining from that broken herd are part of the Rivermaw, and more storm-blessed warriors have been born into the Rivermaw since, ready to forge new legends.

```statblock
"name": "Rivermaw Stormborn (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "[hide armor](3-Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "4"
  "Athletics": !!int "7"
"damage_resistances": "lightning"
"senses": "passive Perception 10"
"languages": "Common, Giant"
"cr": "5"
"traits":
- "desc": "The stormborn's innate spellcasting ability is Charisma (spell save DC\
    \ 12). The stormborn can innately cast the following spells, requiring no material\
    \ components:\n\n1/day: [call lightning](3-Mechanics/CLI/spells/call-lightning-xphb.md)\n\
    \n3/day: [lightning bolt](3-Mechanics/CLI/spells/lightning-bolt-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "At the start of its turn, the stormborn can gain advantage on all melee\
    \ weapon attack rolls during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- "desc": "The stormborn makes two greataxe attacks. If it is concentrating on [call\
    \ lightning](3-Mechanics/CLI/spells/call-lightning-xphb.md), it can also call\
    \ down a lightning bolt."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10\
    \ (1d12 + 4) slashing damage plus 3 (1d6) lightning damage."
  "name": "Greataxe"
"reactions":
- "desc": "When the stormborn takes damage, it can reduce the damage by 10 (1d12\
    \ + 4)."
  "name": "Endurance (Recharges after a Short or Long rest)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/rivermaw-stormborn-tdcsr.webp"
```
^statblock

## Environment

grassland
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
aliases: ["Demonfeed Spiderling"]
---
# [Demonfeed Spiderling](3-Mechanics\CLI\bestiary\fiend/demonfeed-spiderling-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 237*  

> [!quote] A quote from Orac Wioda  
> 
> It was poor guidance that left us wandering through that sulfurous nest of web and ash, but it was cruel fate that woke the matron beast and her brood of burning blood. The only reason I stand before you today is because I had the wisdom to run.

These monstrous spiders, the spawn of the divine Spider Queen, lurk in the darkest recesses of the world. They have gorged themselves on the ichor of demons since the earliest days of the "Calamity", when demons were slain in such quantity that the subterranean depths were awash with their foul blood.

## Monstrosities Transformed

Demonfeed spiders are terrible fiends as a result of having supped upon the remains of demons, but all are descended from the overlarge spiders that haunt caverns and forests across Tal'Dorei. As such, most are native to the Material Plane, so that once killed, they are slain forever—unlike fiends that are simply banished to their home plane.

## Endless Hunger

No sustenance is more delectable to a demonfeed spider than the ichor remaining behind after a demon has been slain on the Material Plane. However, in the absence of such remains, they will sate themselves on the fluids of any living creature.

## Toxic Blood

The terrible poison of spiders, when mixed with the vile ichor of demons, becomes the demonfeed spider's most potent weapon. When its chitinous hide is pierced and its blood begins to flow, the spider can expel arcing sprays of caustic blood that seep into the exposed flesh of its attackers.

## Alignment

Chaotic evil.

```statblock
"name": "Demonfeed Spiderling (TDCSR)"
"size": "Medium"
"type": "fiend"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "10"
- !!int "12"
- !!int "12"
- !!int "2"
- !!int "7"
- !!int "3"
"speed": "30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "3"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "0"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- "desc": "The spiderling can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "The spiderling ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage, and the target must make a DC 13 Constitution saving\
    \ throw, taking 10 (3d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Bite"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/fiend/token/demonfeed-spiderling-tdcsr.webp"
```
^statblock

## Environment

forest, underdark
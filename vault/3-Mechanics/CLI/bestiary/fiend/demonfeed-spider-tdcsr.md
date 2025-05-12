---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
aliases: ["Demonfeed Spider"]
---
# [Demonfeed Spider](3-Mechanics\CLI\bestiary\fiend/demonfeed-spider-tdcsr.md)
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
"name": "Demonfeed Spider (TDCSR)"
"size": "Large"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "16"
- !!int "18"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "7"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "8"
"traits":
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The spider makes two melee attacks: one with its bite and one with its\
    \ stinger; or the spider can make one attack with its web spinner followed by\
    \ a melee attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage, and the target must make a DC 14 Constitution saving\
    \ throw. On a failed save, the target takes 27 (6d8) poison damage and is [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ for 1 minute. On a successful save, the target takes half as much damage and\
    \ isn't [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned). If this poison\
    \ damage reduces the target to 0 hit points, the target is stable but [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ for 1 hour, even after regaining hit points, and is [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed)\
    \ while [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) in this way."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) piercing damage, and the target must succeed on a DC 14 Constitution saving\
    \ throw or be [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed) for 1\
    \ minute. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Stinger"
- "desc": "Ranged Weapon Attack: +7 to hit, reach 40 ft., one target. Hit: \
    \ The target is pulled 40 feet toward the spider and is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 14). The spider can <span title=\"Player's Handbook\">grapple</span>\
    \ only one creature at a time in this way. As an action, the spider can cocoon\
    \ a creature it has [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) in\
    \ webbing, causing it to be [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)\
    \ and ending the [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) condition."
  "name": "Web Spinner"
"reactions":
- "desc": "When the spider takes damage while below half its hit point maximum, it\
    \ can spray poisonous blood in a 15-foot cone. Each creature in the area must\
    \ make a DC 14 Constitution saving throw. On a failed save, a creature takes 13\
    \ (3d8) poison damage and is [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ for 1 minute. On a successful save, the creature takes half as much damage and\
    \ isn't [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned). If this poison\
    \ damage reduces a creature to 0 hit points, the creature is stable but [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ for 1 hour, even after regaining hit points, and is [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed)\
    \ while [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) in this way."
  "name": "Arterial Spray"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/fiend/token/demonfeed-spider-tdcsr.webp"
```
^statblock

## Environment

forest, underdark
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Guardian Naga"]
---
# [Guardian Naga](3-Mechanics\CLI\bestiary\celestial/guardian-naga-xmm.md)
*Source: Monster Manual (2024) p. 161. Available in the <span title='Systems Reference Document (5.2)'>SRD</span>*  

## Guardian Naga

*Enduring Serpentine Lore Keeper*

- **Habitat.** Desert, Forest, Planar (Upper Planes)  
- **Treasure.** Relics  

Guardian nagas are immortal, serpentine scholars that possess perfect memories. They collect the histories and lore of those they live among, guarding cultures' stories and passing them on to new generations with infallible accuracy. Guardian nagas that outlive their host civilizations might linger in whatever ruins remain, preserving the civilizations' stories so their lost people might live on.

Roll on or choose a result from the Guardian Naga Lore table to inspire what a naga knows.

**Guardian Naga Lore**

`dice: [](guardian-naga-xmm.md#^guardian-naga-lore)`

| dice: 1d8 | The Guardian Naga Recalls... |
|-----------|------------------------------|
| 1 | The last words of an ancient sage or leader. |
| 2 | The location of a hidden city or continent. |
| 3 | A magic word, password, or riddle's answer. |
| 4 | The names of all who have told it stories. |
| 5 | An otherwise forgotten ritual or spell. |
| 6 | Recipes using regional ingredients. |
| 7 | Stories of forgotten gods and local spirits. |
| 8 | The vulnerabilities of a legendary monster. |
^guardian-naga-lore

```statblock
"name": "Guardian Naga (XMM)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "19"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "18"
"speed": "40 ft., climb 40 ft., swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Religion": !!int "11"
  "History": !!int "11"
  "Arcana": !!int "11"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned), [restrained](/3-Mechanics/CLI/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Celestial, Common"
"cr": "10"
"traits":
- "desc": "The naga casts one of the following spells, requiring no Somatic or Material\
    \ components and using Wisdom as the spellcasting ability (spell save DC 16):\n\
    \nAt will: [Thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\n\
    1/day each: [Clairvoyance](/3-Mechanics/CLI/spells/clairvoyance-xphb.md),\
    \ [Cure Wounds](/3-Mechanics/CLI/spells/cure-wounds-xphb.md) (level 6 version),\
    \ [Flame Strike](/3-Mechanics/CLI/spells/flame-strike-xphb.md) (level 6 version),\
    \ [Geas](/3-Mechanics/CLI/spells/geas-xphb.md), [True Seeing](/3-Mechanics/CLI/spells/true-seeing-xphb.md)"
  "name": "Spellcasting"
- "desc": "If the naga dies, it returns to life in 1d6 days and regains all its [Hit\
    \ Points](/3-Mechanics/CLI/variant-rules/hit-points-xphb.md) unless [Dispel Evil\
    \ and Good](/3-Mechanics/CLI/spells/dispel-evil-and-good-xphb.md) is cast on its\
    \ remains."
  "name": "Celestial Restoration"
"actions":
- "desc": "The naga makes two Bite attacks. It can replace any attack with a use of\
    \ Poisonous Spittle."
  "name": "Multiattack"
- "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 17 (2d12 + 4) Piercing damage\
    \ plus 22 (4d10) Poison damage."
  "name": "Bite"
- "desc": "Constitution Saving Throw: DC 16, one creature the naga can see within\
    \ 60 feet. Failure: 31 (7d8) Poison damage, and the target has the [Blinded](/3-Mechanics/CLI/conditions.md#Blinded)\
    \ condition until the start of the naga's next turn. Success: Half damage only."
  "name": "Poisonous Spittle"
"source":
- "XMM"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/guardian-naga-xmm.webp"
```
^statblock

## Environment

desert, forest, planar, upper
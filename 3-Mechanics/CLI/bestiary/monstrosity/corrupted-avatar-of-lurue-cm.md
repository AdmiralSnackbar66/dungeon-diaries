---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Corrupted Avatar of Lurue"]
---
# [Corrupted Avatar of Lurue](3-Mechanics\CLI\bestiary\monstrosity/corrupted-avatar-of-lurue-cm.md)
*Source: Candlekeep Mysteries p. 123*  

In normal circumstances, the avatar of Lurue is a breathtaking sight; her silver, stardust-like mane, her shimmering hooves, and her perfectly formed spiral horn elicit awe from even the most hardened souls. As powerful and striking as she is in her true form, she's just as wicked in her alternative state. With necrotic energy twisting and dancing at the tip of her black horn, this corrupted avatar of Lurue is instead a nightmare come to life.

While tainted by the influence of Malar, the avatar of Lurue carries out the Beast Lord's will: to slaughter anything that dares to cross its path.

```statblock
"name": "Corrupted Avatar of Lurue (CM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "11"
- !!int "17"
- !!int "16"
"speed": "50 ft., fly 50 ft. (hover)"
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Celestial, Elvish, Sylvan, telepathy 60 ft."
"cr": "8"
"actions":
- "desc": "The avatar makes two attacks: one with its hooves and one with its horn."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 32 (8d6\
    \ + 4) necrotic damage."
  "name": "Hooves"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 32 (8d6\
    \ + 4) necrotic damage. If the target is a humanoid, it must succeed on a DC 13\
    \ Wisdom saving throw or be transformed into a wolf under the avatar's control.\
    \ This transformation lasts for 1 hour, or until the target drops to 0 hit points\
    \ or dies. The target's game statistics are replaced by the wolf's statistics,\
    \ but it retains its hit points. The target is limited in the actions it can perform\
    \ by the nature of its wolf form, and it can't speak, cast spells, or take any\
    \ other action that requires hands or speech. The target's gear melds into the\
    \ new form, and it can't activate, use, wield, or otherwise benefit from any of\
    \ its equipment."
  "name": "Horn"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/corrupted-avatar-of-lurue-cm.webp"
```
^statblock
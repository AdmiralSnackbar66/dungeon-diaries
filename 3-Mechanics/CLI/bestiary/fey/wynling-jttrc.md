---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wynling
---
# [Wynling](3-Mechanics\CLI\bestiary\fey/wynling-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 33*  

Playful and mischievous, wynlings defend mountain heights and alpine vales against trespassers. A wynling rarely engages a threat directly, preferring to deter intruders by harassing them with thefts and pranks. Many travelers return from lands protected by wynlings with stories of vanishing equipment and curious eyes staring from the shadows.

Wynlings typically live on the mountains they protect, but they often venture into nearby settlements, lured by high-spirited music and sweet foods. Away from their open, wild homes, wynlings cause all manner of mysterious accidents.

```statblock
"name": "Wynling (JttRC)"
"size": "Tiny"
"type": "fey"
"alignment": "typically  Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"modifier": !!int "5"
"stats":
  - !!int "3"
  - !!int "20"
  - !!int "13"
  - !!int "10"
  - !!int "14"
  - !!int "16"
"speed": "30 ft., fly 40 ft."
"skillsaves":
  - "name": "[Sleight of Hand](/3-Mechanics/CLI/skills.md#Sleight%20of%20Hand)"
    "desc": "+7"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Sylvan"
"cr": "1/2"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d4\
      \ + 5) bludgeoning damage."
    "name": "Slam"
  - "desc": "The wynling magically turns [invisible](/3-Mechanics/CLI/conditions.md#Invisible),\
      \ along with any equipment it is wearing or carrying, for 1 minute or until\
      \ it makes an attack roll."
    "name": "Cloak of the Mountain (Recharge 4-6)"
"reactions":
  - "desc": "Immediately after a creature the wynling can see misses the wynling with\
      \ an attack roll, the wynling can move up to 30 feet. This movement doesn't\
      \ provoke opportunity attacks."
    "name": "Trickster's Flight"
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/fey/token/wynling-jttrc.webp"
```
^statblock
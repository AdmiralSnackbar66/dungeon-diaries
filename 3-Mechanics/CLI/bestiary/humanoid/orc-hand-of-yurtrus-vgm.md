---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/vgm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/orc
statblock: inline
statblock-link: "#^statblock"
aliases:
- Orc Hand of Yurtrus
---
# [Orc Hand of Yurtrus](3-Mechanics\CLI\bestiary\humanoid/orc-hand-of-yurtrus-vgm.md)
*Source: Volo's Guide to Monsters p. 184*  

Yurtrus is the orc god of death and disease. He is a horrifying abomination covered in rot and infection, except for his perfect, smooth white hands.

Orc priests that oversee the line between life and death are known by the others in the tribe as hands of Yurtrus. They dwell on the fringes of an orc lair, usually communing with other orcs through the auspices of those who follow Luthic. The hands of Yurtrus wear pale gloves made of the bleached skin of other humanoids (preferably elves), symbolizing their connection with Yurtrus, and are sometimes called "white hands" as a result.

Every orc knows that the hands of Yurtrus are the tribe's gateway to the ancestors. Orcs who die having served the tribe well go on to rituals meant to send them to Gruumsh's realm.

As befits followers of a god who doesn't speak, hands of Yurtrus remove their tongues to emulate their deity, for a reason similar to why an eye of Gruumsh puts out one of its eyes.

To the common folk of the world, an orc is an orc. They know that any one of these savages can tear an ordinary person to pieces, so no further distinction is necessary.

Orcs know better. Different groups of orcs exist within a tribe, the actions of each dictated by the deity they pay homage to. To complement the various kinds of warriors that spill forth to ravage the countryside, each tribe has members that remain deep inside the lair, seldom if ever seeing what lies outside the darkness of their den.

In addition, orcs have special relationships with two creatures that are sometimes found in their company: the aurochs, a great bull that serves as a mount for warriors that revere Bahgtru, and the tanarukk, a demon-orc crossbreed that is so depraved and destructive that even orcs seek to kill it. The aurochs is described in appendix A. The tanarukk is described below.

> [!quote] A quote from Elminster  
> 
> An orc life is a god-ridden life. Luthic's at birth, Luthic's at death, and striving to prove themselves to Gruumsh in between.


```statblock
"name": "Orc Hand of Yurtrus (VGM)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "[hide armor](/3-Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "0"
"stats":
  - !!int "12"
  - !!int "11"
  - !!int "16"
  - !!int "11"
  - !!int "14"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+2"
  - "name": "[Intimidation](/3-Mechanics/CLI/skills.md#Intimidation)"
    "desc": "+1"
  - "name": "[Medicine](/3-Mechanics/CLI/skills.md#Medicine)"
    "desc": "+4"
  - "name": "[Religion](/3-Mechanics/CLI/skills.md#Religion)"
    "desc": "+2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Common and Orc but can't speak"
"cr": "2"
"traits":
  - "desc": "The orc is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 12, +4 to hit with spell attacks). It requires no verbal components\
      \ to cast its spells. The orc has the following cleric spells prepared:\n\n\
      Cantrips (at will): [guidance](/3-Mechanics/CLI/spells/guidance-xphb.md),\
      \ [mending](/3-Mechanics/CLI/spells/mending-xphb.md), [resistance](/3-Mechanics/CLI/spells/resistance-xphb.md),\
      \ [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\n1st level\
      \ (4 slots): [bane](/3-Mechanics/CLI/spells/bane-xphb.md), [detect magic](/3-Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [inflict wounds](/3-Mechanics/CLI/spells/inflict-wounds-xphb.md), [protection\
      \ from evil and good](/3-Mechanics/CLI/spells/protection-from-evil-and-good-xphb.md)\n\
      \n2nd level (3 slots): [blindness/deafness](/3-Mechanics/CLI/spells/blindness-deafness-xphb.md),\
      \ [silence](/3-Mechanics/CLI/spells/silence-xphb.md)"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the orc can move up to its speed toward a hostile\
      \ creature that it can see."
    "name": "Aggressive"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
      \ necrotic damage."
    "name": "Touch of the White Hand"
"source":
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/orc-hand-of-yurtrus-vgm.webp"
```
^statblock

## Environment

underdark, mountain, grassland, forest, hill
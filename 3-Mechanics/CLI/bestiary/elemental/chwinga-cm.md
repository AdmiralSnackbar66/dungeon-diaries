---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Chwinga"]
---
# [Chwinga](3-Mechanics\CLI\bestiary\elemental/chwinga-cm.md)
*Source: Candlekeep Mysteries p. 212*  

A chwinga is a tiny elemental spirit that lives in plants, rocks, and rivers far from civilization. Those found in cold climates also live in ice and snow. Painfully shy, chwingas prefer to move about unseen.

Chwingas resemble 6-inch-tall animated dolls with mask-like faces, spindly limbs, and wild hair. Their appearance is sometimes foreshadowed by gentle breezes, the sweet smell of flowers, dancing fireflies, or snowflakes. They don't have names and cannot speak.

## Humanoid Fascination

Chwingas find the trappings of civilization fascinating. They puzzle over creatures that wear armor, carry weapons, use tools, and cook food. When a chwinga encounters one or more humanoids, its curiosity sometimes gets the better of it, and it follows them for a short time to observe them. If it takes a liking to a humanoid, a chwinga might use its cantrips to aid the creature, or it might bestow a magical gift before departing. The aspect that attracts a chwinga to a humanoid can take any form. In some cases, a chwinga might simply like the way a humanoid walks or the way it combs its hair. Other times, it might be smitten by a humanoid's ability to play music or to eat copious amounts of food.

Chwingas that live in the desert can bestow the following additional supernatural charms:

- [Charm of the Mirage](/3-Mechanics/CLI/rewards/charm-of-the-mirage-cm.md)  
- [Charm of the Water Bearer](/3-Mechanics/CLI/rewards/charm-of-the-water-bearer-cm.md)  

```statblock
"name": "Chwinga (CM)"
"size": "Tiny"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "16"
"speed": "20 ft., climb 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "7"
  "Acrobatics": !!int "7"
"senses": "blindsight 60 ft., passive Perception 17"
"languages": ""
"cr": "0"
"traits":
- "desc": "The chwinga's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material or verbal components:\n\nAt will:\
    \ [druidcraft](/3-Mechanics/CLI/spells/druidcraft-xphb.md), [guidance](/3-Mechanics/CLI/spells/guidance-xphb.md),\
    \ [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace-xphb.md), [resistance](/3-Mechanics/CLI/spells/resistance-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "The chwinga doesn't require air, food, or drink. When it dies, it turns\
    \ into a handful of flower petals, a cloud of pollen, a stone statuette resembling\
    \ its former self, a tiny sphere of smooth stone, or a puddle of fresh water (your\
    \ choice)."
  "name": "Unusual Nature"
- "desc": "When the chwinga is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw, and only half damage if it fails."
  "name": "Evasion"
"actions":
- "desc": "The chwinga targets a humanoid it can see within 5 feet of it. The target\
    \ gains a supernatural charm of the DM's choice. See \"chapter 7\" of the Dungeon\
    \ Masters Guide for more information on supernatural charms."
  "name": "Magical Gift (1/Day)"
- "desc": "The chwinga magically takes shelter inside a rock, a living plant, or a\
    \ natural source of fresh water in its space. The chwinga can't be targeted by\
    \ any attack, spell, or other effect while inside this shelter, and the shelter\
    \ doesn't impair the chwinga's blindsight. The chwinga can use its action to emerge\
    \ from a shelter. If its shelter is destroyed, the chwinga is forced out and appears\
    \ in the shelter's space, but is otherwise unharmed."
  "name": "Natural Shelter"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/chwinga-cm.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bam
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gith
statblock: inline
aliases: ["Githyanki Buccaneer"]
---
# [Githyanki Buccaneer](3-Mechanics\CLI\bestiary\humanoid/githyanki-buccaneer-bam.md)
*Source: Boo's Astral Menagerie p. 27, Light of Xaryxis*  

Githyanki buccaneers ply the Astral Plane for riches, which they haul back to their hidden fortresses in the Deep Astral. Many of them are warriors who lost the will to serve the Lich-Queen Vlaakith; they prefer to live by their own code or revel in their unbridled freedom.

```statblock
"name": "Githyanki Buccaneer (BAM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[breastplate](3-Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "5"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "5"
  "Deception": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, Gith"
"cr": "3"
"traits":
- "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 13):\n\nAt\
    \ will: [light](3-Mechanics/CLI/spells/light-xphb.md), [mage hand](3-Mechanics/CLI/spells/mage-hand-xphb.md)\
    \ (the hand is invisible)\n\n1/day each: [plane shift](3-Mechanics/CLI/spells/plane-shift-xphb.md),\
    \ [telekinesis](3-Mechanics/CLI/spells/telekinesis-xphb.md)"
  "name": "Spellcasting (Psionics)"
"actions":
- "desc": "The githyanki makes two Greatsword or Telekinetic Bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) slashing damage plus 3 (1d6) psychic damage."
  "name": "Greatsword"
- "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one target. Hit: 13\
    \ (3d6 + 3) force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "BAM"
- "LoX"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/githyanki-buccaneer-bam.webp"
```
^statblock
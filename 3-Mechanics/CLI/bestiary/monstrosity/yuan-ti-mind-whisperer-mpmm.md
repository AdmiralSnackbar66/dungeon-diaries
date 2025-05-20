---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yuan-ti Mind Whisperer
---
# [Yuan-ti Mind Whisperer](3-Mechanics\CLI\bestiary\monstrosity/yuan-ti-mind-whisperer-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 274, Volo's Guide to Monsters p. 204*  

Mind whisperers are yuan-ti malison spellcasters who enter into a pact with the serpent god Sseth, the Sibilant Death. They use their abilities to convert others to their faith, increase their personal power, and befuddle the minds of their enemies.

Mind whisperers are elusive, manipulative, unpredictable, and willing to cheat or kill comrades and rivals alike if doing so benefits them. The worshipers of Sseth have their hands in many schemes, often plying the middle ground between two factions, and thus spend a lot of energy making sure none of their allies learn of their conflicting connections. Even among Sseth-worshiping communities, mind whisperers are known for being self-important, sneaky, and prone to flee at the first sign of trouble.

```statblock
"name": "Yuan-ti Mind Whisperer (MPMM)"
"size": "Medium"
"type": "monstrosity"
"subtype": "warlock"
"alignment": "Typically  Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "wisdom": "+4"
  - "charisma": "+5"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, Common, Draconic"
"cr": "4"
"traits":
  - "desc": "Magical darkness doesn't impede the yuan-ti's [darkvision](/3-Mechanics/CLI/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains\
      \ 9 temporary hit points."
    "name": "Sseth's Blessing"
"actions":
  - "desc": "The yuan-ti makes two Bite attacks and one Scimitar attack, or it makes\
      \ two Spectral Fangs attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) piercing damage plus 7 (2d6) poison damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage."
    "name": "Scimitar (Yuan-ti Form Only)"
  - "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 16\
      \ (3d8 + 3) psychic damage."
    "name": "Spectral Fangs"
  - "desc": "The yuan-ti casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 13):\n\
      \nAt will: [animal friendship](/3-Mechanics/CLI/spells/animal-friendship-xphb.md)\
      \ (snakes only), [message](/3-Mechanics/CLI/spells/message-xphb.md), [minor\
      \ illusion](/3-Mechanics/CLI/spells/minor-illusion-xphb.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n3/day: [suggestion](/3-Mechanics/CLI/spells/suggestion-xphb.md)\n\n2/day\
      \ each: [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [hypnotic pattern](/3-Mechanics/CLI/spells/hypnotic-pattern-xphb.md)"
    "name": "Spellcasting (Yuan-ti Form Only)"
"bonus_actions":
  - "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
      \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed. If it dies, it stays in its current form."
    "name": "Change Shape"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/yuan-ti-mind-whisperer-mpmm.webp"
```
^statblock

## Environment

desert, forest, underdark
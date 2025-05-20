---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yuan-ti Pit Master
---
# [Yuan-ti Pit Master](3-Mechanics\CLI\bestiary\monstrosity/yuan-ti-pit-master-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 276, Volo's Guide to Monsters p. 206*  

With snakes for arms, pit masters are yuan-ti malison priests who have made a pact with the god Merrshaulk and seek to rouse him from his slumber by sacrificing Humanoids to him. They are the most traditionalist yuan-ti and believe that they are best equipped to achieve the goals of their people.

Pit masters are deeply involved in yuan-ti's longterm plan to take over Humanoid governments, as well as in the ongoing effort to protect their cities from discovery or attacks by hostiles. They oppose reckless behavior and argue for a slow, cautious approach in all matters.

```statblock
"name": "Yuan-ti Pit Master (MPMM)"
"size": "Medium"
"type": "monstrosity"
"subtype": "warlock"
"alignment": "Typically  Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "wisdom": "+4"
  - "charisma": "+6"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "5"
"traits":
  - "desc": "Magical darkness doesn't impede the yuan-ti's [darkvision](/3-Mechanics/CLI/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The yuan-ti makes three Bite attacks or two Spectral Fangs attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) piercing damage plus 7 (2d6) poison damage."
    "name": "Bite"
  - "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 16\
      \ (3d8 + 3) poison damage."
    "name": "Spectral Fangs"
  - "desc": "The yuan-ti targets up to five creatures that it can see within 60 feet\
      \ of it. Each target must succeed on a DC 13 Constitution saving throw or fall\
      \ into a magical sleep and be [unconscious](/3-Mechanics/CLI/conditions.md#Unconscious)\
      \ for 10 minutes. A sleeping target awakens if it takes damage or if someone\
      \ uses an action to shake or slap it awake. This magical sleep has no effect\
      \ on a creature immune to being [charmed](/3-Mechanics/CLI/conditions.md#Charmed)."
    "name": "Merrshaulk's Slumber (1/Day)"
  - "desc": "The yuan-ti casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 14):\n\
      \nAt will: [animal friendship](/3-Mechanics/CLI/spells/animal-friendship-xphb.md)\
      \ (snakes only), [guidance](/3-Mechanics/CLI/spells/guidance-xphb.md), [mage\
      \ hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [message](/3-Mechanics/CLI/spells/message-xphb.md)\n\
      \n3/day: [suggestion](/3-Mechanics/CLI/spells/suggestion-xphb.md)\n\n2/day\
      \ each: [hold person](/3-Mechanics/CLI/spells/hold-person-xphb.md), [invisibility](/3-Mechanics/CLI/spells/invisibility-xphb.md)"
    "name": "Spellcasting (Yuan-ti Form Only)"
"bonus_actions":
  - "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
      \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed. It doesn't change form if it dies."
    "name": "Change Shape"
"source":
  - "MPMM"
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/yuan-ti-pit-master-mpmm.webp"
```
^statblock

## Environment

desert, forest, underdark
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Mage Hunter Golem"]
---
# [Mage Hunter Golem](3-Mechanics\CLI\bestiary\construct/mage-hunter-golem-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 242*  

Ageless and unstoppable guardians, golems are expertly crafted to execute their owners' every command without question. Vaguely humanoid in appearance and unfailingly loyal, these powerful constructs feel no agony or sympathy, require no sustenance or sleep, ignore bribes and bargains, and do as they are told without remorse or hesitation.

## Covetous Origins

During the "Age of Arcanum", magic inspired a deep arrogance in many of the gods' children, who assumed arcane gifts were proof of inevitable divinity. In response, many mortal folk experimented with manufacturing "life" of their own. The "dwarves" succeeded first, marrying divine gifts with technical skill to animate autonomous wardens as protectors of their ancestral halls. The "dwarves'" knowledge was quickly stolen and expanded upon by other folk, and creating golems eventually became less about proving that mortals can shape life as the gods do, and more about protecting life, wealth, and secrets from others.

## Mage Hunter Golem

The gods cursed mortals with free will, but also blessed them with the means to survive the Primordials' wrath—the arts of magic. With magic, the people of Exandria fend off droughts, famines, volcanic flame, slashing ice, and angry earth. But knowing that the power of magic might inevitably tear Exandria apart, the gods also created the ultimate magical failsafe—antimagic.

### Hunter of Magic

For many heroes who employ magic, the most terrifying nightmare is facing a hulking creature whose mere presence can strip away the power of spells and magic relics alike. Mage hunter golems are brutally efficient in their tactics, sweeping the battlefield with their disruptive antimagic, devouring spells used against them, and fitting collars to spellcasters that can leave them at the golem's mercy.

```statblock
"name": "Mage Hunter Golem (TDCSR)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "24"
- !!int "9"
- !!int "26"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "30 ft., fly 20 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "5"
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ weapons that aren't adamantine"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 15"
"languages": "understands the languages of its creator but can't speak"
"cr": "15"
"traits":
- "desc": "The golem creates an area of antimagic, as in the [antimagic field](3-Mechanics/CLI/spells/antimagic-field-xphb.md)\
    \ spell, in a 60-foot cone originating from it. At the start of each of its turns,\
    \ the golem decides which way the cone faces and whether the cone is active."
  "name": "Antimagic Cone"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "Whenever the golem is subjected to a damage-dealing spell of 4th level\
    \ or lower, it takes no damage and instead regains a number of hit points equal\
    \ to the damage dealt."
  "name": "Magic Absorption"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem uses its Antimagic Jolt and makes two melee attacks, or it makes\
    \ three melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 20\
    \ (3d8 + 7) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 11\
    \ (1d8 + 7) bludgeoning damage, and the target must succeed on a DC 16 Dexterity\
    \ saving throw or have a magic collar placed upon its neck. While the target wears\
    \ the collar, it is magically prevented from speaking and cannot cast any spell.\
    \ A successful DC 25 Dexterity check using [thieves' tools](3-Mechanics/CLI/items/thieves-tools-xphb.md)\
    \ removes the collar."
  "name": "Claw (Recharge 5-6)"
- "desc": "Each creature within the golem's Antimagic Cone that has the ability to\
    \ cast a spell of 1st level or higher must make a DC 18 Wisdom saving throw, taking\
    \ 21 (6d6) psychic damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Antimagic Jolt"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/construct/token/mage-hunter-golem-tdcsr.webp"
```
^statblock
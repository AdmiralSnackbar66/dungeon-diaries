---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Cobalt Golem"]
---
# [Cobalt Golem](3-Mechanics\CLI\bestiary\construct/cobalt-golem-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 240*  

Ageless and unstoppable guardians, golems are expertly crafted to execute their owners' every command without question. Vaguely humanoid in appearance and unfailingly loyal, these powerful constructs feel no agony or sympathy, require no sustenance or sleep, ignore bribes and bargains, and do as they are told without remorse or hesitation.

## Covetous Origins

During the "Age of Arcanum", magic inspired a deep arrogance in many of the gods' children, who assumed arcane gifts were proof of inevitable divinity. In response, many mortal folk experimented with manufacturing "life" of their own. The "dwarves" succeeded first, marrying divine gifts with technical skill to animate autonomous wardens as protectors of their ancestral halls. The "dwarves'" knowledge was quickly stolen and expanded upon by other folk, and creating golems eventually became less about proving that mortals can shape life as the gods do, and more about protecting life, wealth, and secrets from others.

## Cobalt Golem

A unique form of a classic arcane construct, cobalt golems are mighty armored servitors made by arcanists who find iron too mundane a metal. The first seeds of these automata fall from the sky, with raw cobalt carefully extracted from meteorites and smelted by way of ferromagnetic alchemy into a hard, lustrous, silver-gray metal. This finished cobalt is then molded and twisted into armored skin shielding clockwork designs that animate rune-encrusted muscle-like chains. A central lodestone powers a cobalt golem, fueled by magic rituals that spark ionized life within its inorganic shell.

### Archivists' Automata

The "Library of the Cobalt Soul" has commissioned a large number of cobalt golems to guard their most restricted archives, taking pleasure in the serendipitous nature of the construct's name and trusting the threat of these powerful warriors to deter anyone thinking of fleeing with sacred knowledge.

```statblock
"name": "Cobalt Golem (TDCSR)"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "300"
"hit_dice": "24d12 + 144"
"stats":
- !!int "28"
- !!int "9"
- !!int "22"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "40 ft."
"damage_immunities": "fire; lightning; poison; psychic; bludgeoning, piercing, slashing\
  \ from nonmagical weapons that aren't adamantine"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "18"
"traits":
- "desc": "Whenever the golem is subjected to lightning damage, it takes no damage.\
    \ Instead, its weapon attacks deal an extra 11 (2d10) lightning damage until\
    \ the end of its next turn. Also until the end of the golem's next turn, any creature\
    \ that touches it or hits it with a melee attack while within 5 feet of it takes\
    \ 11 (2d10) lightning damage."
  "name": "Conductive Body"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem makes two attacks: one with its slam and one with its sword,\
    \ or it uses its Magnetic Pulse and then its Spinning Cleave."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 25\
    \ (3d10 + 9) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 28\
    \ (3d12 + 9) slashing damage."
  "name": "Sword"
- "desc": "The golem makes a sword attack against each creature within 10 feet of\
    \ it."
  "name": "Spinning Cleave"
- "desc": "The golem raises its arms and unleashes a magnetic pulse. All unattended\
    \ metal objects within 30 feet of it are pulled to an unoccupied space within\
    \ 5 feet of the golem. Each creature wearing metal armor or made of metal within\
    \ 30 feet of the golem must succeed on a DC 20 Strength saving throw or be pulled\
    \ to an unoccupied space within 5 feet of the golem, then fall [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Magnetic Pulse (Recharge 6)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/construct/token/cobalt-golem-tdcsr.webp"
```
^statblock
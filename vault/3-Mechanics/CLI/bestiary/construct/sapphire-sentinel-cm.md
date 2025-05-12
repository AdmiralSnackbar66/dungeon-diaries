---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Sapphire Sentinel"]
---
# [Sapphire Sentinel](3-Mechanics\CLI\bestiary\construct/sapphire-sentinel-cm.md)
*Source: Candlekeep Mysteries p. 201*  

Stone golems are magical constructs cut and chiseled from stone to appear as tall, impressive statues. Like other golems, they are nearly impervious to spells and ordinary weapons. The golem remains a noncombatant unless it is directly attacked.

## The Sapphire

The sapphire is inside the golem's chest, hidden behind an 9-inch-diameter stone disk. The outer surface of the disk is inscribed with a blue circle that has eight golden beams radiating from it like the rays of the sun.

The disk can be removed to reveal the glowing sapphire only when the golem receives a command to use its power from someone whose commands it obeys. Otherwise, the sapphire remains hidden. The gemstone is 6 inches in diameter and has the following properties:

- It is indestructible until the golem completes its mission.  
- The sapphire has 3 charges. As an action, the golem can expend 1 charge to cast [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md) (as a 9th-level spell) from the sapphire using Constitution as its spellcasting ability. The sapphire ceases to glow if all its charges are expended, but it regains `dice:1d3|noform|noparens|avg` (`1d3`) expended charges daily at dawn and glows again once it has 1 or more charges.  
- The golem attacks anyone who tries to remove the sapphire, which is worth 25,000 gp.  

```statblock
"name": "Sapphire Sentinel (CM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "22"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "10"
"traits":
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- "desc": "The golem targets one or more creatures it can see within 10 feet of it.\
    \ Each target must make a DC 17 Wisdom saving throw against this magic. On a failed\
    \ save, a target can't use reactions, its speed is halved, and it can't make more\
    \ than one attack on its turn. In addition, the target can take either an action\
    \ or a bonus action on its turn, not both. These effects last for 1 minute. A\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Slow (Recharge 5-6)"
- "desc": "The sapphire has 3 charges. As an action, the golem can expend 1 charge\
    \ to cast [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md) (as a 9th-level\
    \ spell) from the sapphire using Constitution as its spellcasting ability. The\
    \ sapphire ceases to glow if all its charges are expended, but it regains 1d3\
    \ expended charges daily at dawn and glows again once it has 1 or more charges."
  "name": "Sapphire"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/construct/token/sapphire-sentinel-cm.webp"
```
^statblock
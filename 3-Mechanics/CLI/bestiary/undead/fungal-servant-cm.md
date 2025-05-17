---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Fungal Servant"]
---
# [Fungal Servant](3-Mechanics\CLI\bestiary\undead/fungal-servant-cm.md)
*Source: Candlekeep Mysteries p. 217*  

```statblock
"name": "Fungal Servant (CM)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "The languages it knew in life"
"cr": "15"
"traits":
- "desc": "The fungal servant is a 10th-level spellcaster. Its spellcasting ability\
    \ is Wisdom (spell save DC 17, +9 to hit with spell attacks). The fungal servant\
    \ has the following cleric spells prepared:\n\nCantrips (at will): [sacred\
    \ flame](/3-Mechanics/CLI/spells/sacred-flame-xphb.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
    \n1st level (4 slots): [command](/3-Mechanics/CLI/spells/command-xphb.md),\
    \ [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt-xphb.md), [shield of faith](/3-Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\
    \n2nd level (3 slots): [hold person](/3-Mechanics/CLI/spells/hold-person-xphb.md),\
    \ [silence](/3-Mechanics/CLI/spells/silence-xphb.md), [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
    \n3rd level (3 slots): [animate dead](/3-Mechanics/CLI/spells/animate-dead-xphb.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md)\n\n4th level\
    \ (3 slots): [divination](/3-Mechanics/CLI/spells/divination-xphb.md), [guardian\
    \ of faith](/3-Mechanics/CLI/spells/guardian-of-faith-xphb.md)\n\n5th level\
    \ (2 slots): [contagion](/3-Mechanics/CLI/spells/contagion-xphb.md), [insect\
    \ plague](/3-Mechanics/CLI/spells/insect-plague-xphb.md)\n\n6th level (1 slots):\
    \ [harm](/3-Mechanics/CLI/spells/harm-xphb.md)"
  "name": "Spellcasting"
- "desc": "The fungal servant has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "A destroyed fungal servant gains a new body in 24 hours if its heart is\
    \ intact, regaining all its hit points and becoming active again. The new body\
    \ appears within 5 feet of the fungal servant's heart."
  "name": "Rejuvenation"
"actions":
- "desc": "The fungal servant can use its Dreadful Glare and makes one attack with\
    \ its rotting fist."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to spores. The curse\
    \ lasts until removed by the [remove curse](/3-Mechanics/CLI/spells/remove-curse-xphb.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- "desc": "The fungal servant targets one creature it can see within 60 feet of it.\
    \ If the target can see the fungal servant, it must succeed on a DC 16 Wisdom\
    \ saving throw against this magic or become [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
    \ until the end of the fungal servant's next turn. If the target fails the saving\
    \ throw by 5 or more, it is also [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed)\
    \ for the same duration. A target that succeeds on the saving throw is immune\
    \ to the Dreadful Glare of all fungal servants for the next 24 hours."
  "name": "Dreadful Glare"
"legendary_actions":
- "desc": "The fungal servant makes one attack with its rotting fist or uses its Dreadful\
    \ Glare."
  "name": "Attack"
- "desc": "Blinding spores swirls magically around the fungal servant. Each creature\
    \ within 5 feet of the fungal servant must succeed on a DC 16 Constitution saving\
    \ throw or be [blinded](/3-Mechanics/CLI/conditions.md#Blinded) until the end\
    \ of the creature's next turn."
  "name": "Blinding Spores"
- "desc": "The fungal servant utters a blasphemous word. Each non-undead creature\
    \ within 10 feet of the fungal servant that can hear the magical utterance must\
    \ succeed on a DC 16 Constitution saving throw or be [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
    \ until the end of the fungal servant's next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- "desc": "The fungal servant magically unleashes negative energy. Creatures within\
    \ 60 feet of the fungal servant, including ones behind barriers and around corners,\
    \ can't regain hit points until the end of the fungal servant's next turn."
  "name": "Channel Negative Energy (Costs 2 Actions)"
- "desc": "The fungal servant magically transforms into a whirlwind of spores, moves\
    \ up to 60 feet, and reverts to its normal form. While in whirlwind form, the\
    \ fungal servant is immune to all damage, and it can't be [grappled](/3-Mechanics/CLI/conditions.md#Grappled),\
    \ [petrified](/3-Mechanics/CLI/conditions.md#Petrified), knocked [prone](/3-Mechanics/CLI/conditions.md#Prone),\
    \ [restrained](/3-Mechanics/CLI/conditions.md#Restrained), or [stunned](/3-Mechanics/CLI/conditions.md#Stunned).\
    \ Equipment worn or carried by the fungal servant remain in its possession."
  "name": "Whirlwind of Spores (Costs 2 Actions)"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/undead/token/fungal-servant-cm.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lorehold Pledgemage
---
# [Lorehold Pledgemage](3-Mechanics\CLI\bestiary\humanoid/lorehold-pledgemage-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 197*  

Deep in crumbling ruins and piles of dusty scrolls, Lorehold students—first as apprentices and then as pledgemages—study the magic of the past, searching for arcane artifacts and speaking with long-dead adventurers to uncover secrets lost to time.

Though many Lorehold students bury themselves in old tomes, others take a more cavalier approach to their studies and travel the world to see history made before their eyes. Their magic can range from spells tampering with the flow of time itself to concussive blasts that break through old ruins—to sometimes just bashing things with a glowing scroll.

## Lorehold Scholars

The archaeomancers of Lorehold College draw their magical might from the flow of time and fate and the way those forces shape the course of history. Scholars of this broad mystical study divide between those who see history as an unpredictable jumble of chance and those who believe events form a perfect—and predictable—pattern.

```statblock
"name": "Lorehold Pledgemage (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "13"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "constitution": "+3"
  - "intelligence": "+5"
"skillsaves":
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+7"
  - "name": "[Insight](/3-Mechanics/CLI/skills.md#Insight)"
    "desc": "+3"
  - "name": "[Investigation](/3-Mechanics/CLI/skills.md#Investigation)"
    "desc": "+7"
"senses": "passive Perception 11"
"languages": "Common plus any two languages"
"cr": "4"
"actions":
  - "desc": "The pledgemage makes two Scroll Bash attacks."
    "name": "Multiattack"
  - "desc": "Melee Spell Attack: +5 to hit, reach 30 ft., one target. Hit: 8 (1d10\
      \ + 3) bludgeoning damage plus 9 (2d8) thunder damage."
    "name": "Scroll Bash"
  - "desc": "Thundering golden energy erupts around a creature the pledgemage can\
      \ see within 90 feet of it. The creature must make a DC 13 Constitution saving\
      \ throw, taking 44 (8d10) thunder damage on a failed save, or half as much damage\
      \ on a successful one. A Construct has disadvantage on the saving throw."
    "name": "Reduce to Memory (Recharge 5-6)"
  - "desc": "The pledgemage casts one of the following spells, requiring no material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 13):\n\nAt will: [guidance](/3-Mechanics/CLI/spells/guidance-xphb.md),\
      \ [light](/3-Mechanics/CLI/spells/light-xphb.md)\n\n2/day each: [comprehend\
      \ languages](/3-Mechanics/CLI/spells/comprehend-languages-xphb.md), [locate\
      \ object](/3-Mechanics/CLI/spells/locate-object-xphb.md)\n\n1/day each:\
      \ [mage armor](/3-Mechanics/CLI/spells/mage-armor-xphb.md), [speak with dead](/3-Mechanics/CLI/spells/speak-with-dead-xphb.md),\
      \ [stone shape](/3-Mechanics/CLI/spells/stone-shape-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The pledgemage chooses a point within 30 feet of itself, shunting the\
      \ minds of nearby creatures out of this moment in time. Each creature in a 10-foot-radius\
      \ sphere centered on that point must succeed on a DC 13 Wisdom saving throw\
      \ or be [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated) until\
      \ the end of the pledgemage's next turn."
    "name": "Chronal Break (1/Day)"
"reactions":
  - "desc": "When another creature within 60 feet of the pledgemage misses a target\
      \ with an attack roll, the pledgemage magically enables the attacker to reroll\
      \ the attack roll. It must use the new roll."
    "name": "Learn from the Past (2/Day)"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/lorehold-pledgemage-scc.webp"
```
^statblock
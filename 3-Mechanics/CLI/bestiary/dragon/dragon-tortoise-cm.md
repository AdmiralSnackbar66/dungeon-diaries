---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dragon Tortoise
---
# [Dragon Tortoise](3-Mechanics\CLI\bestiary\dragon/dragon-tortoise-cm.md)
*Source: Candlekeep Mysteries p. 205*  

Ogruhl has been trapped here for millennia, restrained by magic chains. Ogruhl was the prisoner of a cruel Netherese wizard. When the city around the tortoise was abandoned, Ogruhl was left to die. A band of chwingas found the tortoise and brought it food and water little by little to keep it alive. Over time, the chwingas and Ogruhl developed a symbiotic relationship—it defended them and provided a home for them, and they helped it to survive.

```statblock
"name": "Dragon Tortoise (CM)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "341"
"hit_dice": "22d20 + 110"
"modifier": !!int "0"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "20"
  - !!int "10"
  - !!int "12"
  - !!int "12"
"speed": "20 ft."
"saves":
  - "dexterity": "+6"
  - "constitution": "+11"
  - "wisdom": "+7"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Draconic, Terran"
"cr": "17"
"actions":
  - "desc": "The dragon turtle makes three attacks: one with its bite and two with\
      \ its claws. It can make one tail attack in place of its two claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26\
      \ (3d12 + 7) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16\
      \ (2d8 + 7) slashing damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26\
      \ (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed\
      \ on a DC 20 Strength saving throw or be pushed up to 10 feet away from the\
      \ dragon turtle and knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Tail"
  - "desc": "The dragon tortoise exhales abrasive sand in a 60-foot cone. Each creature\
      \ in that area must make a DC 18 Constitution saving throw, taking 52 (15d6)\
      \ slashing damage on a failed save, or half as much damage on a successful one."
    "name": "Sand Breath (Recharge 5-6)"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/dragon-tortoise-cm.webp"
```
^statblock
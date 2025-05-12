---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ftd
- ttrpg-cli/monster/cr/30
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/chromatic
statblock: inline
aliases: ["Aspect of Tiamat"]
---
# [Aspect of Tiamat](3-Mechanics\CLI\bestiary\dragon/aspect-of-tiamat-ftd.md)
*Source: Fizban's Treasury of Dragons p. 166*  

The five-headed progenitor of chromatic dragons, Tiamat embodies the vices of evil dragons. Since the destruction of the First World, she has dwelled in the Nine Hells—some say by choice. But others claim that she is imprisoned there to punish her for the evils she perpetrated when the gods sought to colonize the First World with their followers.

Mortals who hunger for power and wealth often swear fealty to Tiamat in pursuit of those goals. Many of her followers have attempted to break her out of Avernus—and failed—but even while she remains in the Nine Hells, Tiamat can send her aspect to manifest in the Material Plane. A follower with enough power and anger, and with a hoard worthy of ancient dragons, can sacrifice it all to unleash the wrath of the dragon queen on a world.

The aspect of Tiamat has the body of a titanic dragon with five heads, each the shape and hue of a different chromatic dragon. Each head might speak separately and have different mannerisms, but they are all Tiamat. Once unleashed, the aspect of Tiamat rampages across the world, acquiring any treasure she can find and destroying any creature that dares to cross her path.

```statblock
"name": "Aspect of Tiamat (FTD)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "23"
"ac_class": "natural armor"
"hp": !!int "574"
"hit_dice": "28d20 + 280"
"stats":
- !!int "30"
- !!int "14"
- !!int "30"
- !!int "21"
- !!int "20"
- !!int "26"
"speed": "60 ft., burrow 60 ft., fly 120 ft., swim 60 ft."
"saves":
  "Charisma": !!int "17"
  "Dexterity": !!int "11"
  "Wisdom": !!int "14"
  "Constitution": !!int "19"
"skillsaves":
  "Intimidation": !!int "26"
  "Perception": !!int "23"
"damage_immunities": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "[blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "truesight 120 ft., passive Perception 33"
"languages": "Common, Draconic, Infernal"
"cr": "30"
"traits":
- "desc": "If the aspect would be reduced to 0 hit points, her current hit point total\
    \ instead resets to 500 hit points, she recharges her Chromatic Flames, and she\
    \ regains any expended uses of Legendary Resistance. Additionally, the aspect\
    \ can now use the options in the \"Mythic Actions\" section for 1 hour. Award\
    \ a party an additional 155,000 XP (310,000 XP total) for defeating the aspect\
    \ of Tiamat after her Chromatic Wrath activates."
  "name": "Chromatic Wrath (Recharges after a Short or Long Rest)"
- "desc": "If the aspect fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
"actions":
- "desc": "The aspect makes one Bite attack, one Claw attack, and one Tail attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 23\
    \ (2d12 + 10) piercing damage plus 19 (3d12) force damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 21\
    \ (2d10 + 10) slashing damage. If the target is a Huge or smaller creature,\
    \ it is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 20)\
    \ and is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained) until this\
    \ grapple ends. The aspect can have only one creature [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ this way at a time."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 23\
    \ (2d12 + 10) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 27 Strength saving throw or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Tail"
- "desc": "The aspect exhales multicolored flames in a 300-foot cone. Each creature\
    \ in that area must make a DC 27 Dexterity saving throw. On a failed save, the\
    \ creature takes 71 (11d12) damage of a type of the aspect's choosing: acid,\
    \ cold, fire, lightning, or poison. On a successful save, the creature takes half\
    \ as much damage."
  "name": "Chromatic Flames (Recharge 5-6)"
"legendary_actions":
- "desc": "The aspect makes one Claw or Tail attack."
  "name": "Attack"
- "desc": "The aspect makes one Bite attack. If the attack hits a creature, the target\
    \ must succeed on a DC 27 Wisdom saving throw or become [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ of the aspect until the end of its next turn."
  "name": "Furious Bite (Costs 2 Actions)"
"source":
- "FTD"
"image": "3-Mechanics/CLI/bestiary/dragon/token/aspect-of-tiamat-ftd.webp"
```
^statblock
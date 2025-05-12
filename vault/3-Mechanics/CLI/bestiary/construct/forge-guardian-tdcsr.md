---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/27
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Forge Guardian"]
---
# [Forge Guardian](3-Mechanics\CLI\bestiary\construct/forge-guardian-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 241*  

Ageless and unstoppable guardians, golems are expertly crafted to execute their owners' every command without question. Vaguely humanoid in appearance and unfailingly loyal, these powerful constructs feel no agony or sympathy, require no sustenance or sleep, ignore bribes and bargains, and do as they are told without remorse or hesitation.

## Covetous Origins

During the "Age of Arcanum", magic inspired a deep arrogance in many of the gods' children, who assumed arcane gifts were proof of inevitable divinity. In response, many mortal folk experimented with manufacturing "life" of their own. The "dwarves" succeeded first, marrying divine gifts with technical skill to animate autonomous wardens as protectors of their ancestral halls. The "dwarves'" knowledge was quickly stolen and expanded upon by other folk, and creating golems eventually became less about proving that mortals can shape life as the gods do, and more about protecting life, wealth, and secrets from others.

## Forge Guardian

Just as "dwarves" created the earliest golems, the All-Hammer fashioned forge guardians to guard the divine furnaces and hearths that designed the first "dwarves". Shaped from extravagant marble and fused with adamantine, crafted with impeccable detail and care, these rare and massive constructs exemplify the highest form of artistry that every Exandrian blacksmith, forgemaster, and artisan spends a life-time hoping to achieve.

### Divine Spark

A faceless, tireless being of immense strength, a forge golem is gifted life by a single shard from the All-Hammer's own divine spark, lovingly kept safe inside a ring of arcane flame and ancient sigils. The All-Hammer's divinity is akin to a volcano inside the golem, turning the construct's blood into lava. Fire no longer harms the construct, but instead heals it.

### Sacred purpose

Where it looms over a divine forge, a forge guardian's appendages end in a stretched set of hooked forceps and a rune-adorned blade. The golem can assist a blacksmith in creating new golems, or it can trample, bludgeon, push, and knock down any who threaten this sacred process of creation.

Forge golems also serve as opponents for any wishing to engage in the All-Hammer's trial of worthiness. A golem's attacks blind prospective heroes, who must then earn back their vision by risking a deadly counterattack.

```statblock
"name": "Forge Guardian (TDCSR)"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "24"
"ac_class": "natural armor"
"hp": !!int "420"
"hit_dice": "24d20 + 168"
"stats":
- !!int "30"
- !!int "10"
- !!int "24"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "50 ft."
"saves":
  "Strength": !!int "18"
  "Constitution": !!int "15"
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical weapons that aren't adamantine"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 10"
"languages": ""
"cr": "27"
"traits":
- "desc": "Whenever the guardian is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to the fire damage dealt."
  "name": "Fire Absorption"
- "desc": "The guardian is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The guardian has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The guardian's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The guardian makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +18 to hit, reach 15 ft., one target. Hit: 36\
    \ (4d12 + 10) slashing damage, and the target must succeed on a DC 23 Constitution\
    \ saving throw or be [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded) until\
    \ it deals damage to the guardian."
  "name": "Runeblade"
- "desc": "Melee Weapon Attack: +18 to hit, reach 10 ft., one target. Hit: 23\
    \ (2d12 + 10) bludgeoning damage, and the target is pushed up to 15 feet away\
    \ from the guardian and knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Kick"
- "desc": "The guardian makes a Runeblade attack against every creature within 15\
    \ feet of it. On a hit, a target is also pushed up to 15 feet away from the guardian\
    \ and knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Bladestorm (Recharge 5-6)"
"legendary_actions":
- "desc": "The guardian makes one Runeblade attack."
  "name": "Runeblade"
- "desc": "The guardian makes one Kick attack."
  "name": "Kick"
- "desc": "The guardian moves up to 50 feet without triggering [opportunity attacks](3-Mechanics/CLI/rules/actions.md#Opportunity%20Attack),\
    \ and can pass through other creature's spaces. Each creature whose space the\
    \ guardian passes through must make a DC 23 Dexterity saving throw. On a failure,\
    \ the creature takes 23 (2d12 + 10) bludgeoning damage and is knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone).\
    \ On a success, the creature takes half as much damage and isn't knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone).\
    \ Any creature that shares the guardian's space when it stops this movement is\
    \ pushed out of its space into the nearest unoccupied space."
  "name": "Trample (Costs 2 Actions)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/construct/token/forge-guardian-tdcsr.webp"
```
^statblock
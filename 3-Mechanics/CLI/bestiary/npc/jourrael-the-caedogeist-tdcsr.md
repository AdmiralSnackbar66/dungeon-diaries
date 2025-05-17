---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/drow
statblock: inline
aliases: ["Jourrael, the Caedogeist"]
---
# [Jourrael, the Caedogeist](3-Mechanics\CLI\bestiary\npc/jourrael-the-caedogeist-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 245*  

> [!quote]  
> 
> Of the great, terrible legends born in the blood and fire of the Calamity, few managed to defy mortality and endure the ages as deftly as the assassin queen Jourrael. Blessed by shadow and death, they walk between realms, relishing the hunt and stalking their target tirelessly, unburdened by wall, gate, or door. Whatever poor soul finds the ire of the Caedogeist can only accept their 'Inevitable End.'

Jourrael is a nightmarish specter and ancient assassin of many names. The Spider Queen bestowed upon her the title of Caedogeist, the specter of silent death, while scholars describe Jourrael as "the Inevitable End," more certain than death. Those who catch a glimpse of her whisper of a shadowy wraith with hair like fire, who wields daggers dripping poison and walks through walls and mountains as if they were water.

## Death Forbidden

Jourrael cannot die. A contract between the Lord of the Hells and the Spider Queen forbids death from claiming the assassin, though many have tried—often in increasingly creative ways. At the "Calamity's" end, armies joined together to separate Jourrael's body into disparate parts. The Savalirwood "elves" took their head to Veluthil, while their heart was hidden in the Lotusden Greenwood under a dread [wraithroot tree](wraithroot-tree-tdcsr.md).

The mysterious fiend Obann falsely believed that after recovering and reviving Jourrael, he could control her indefinitely. Inevitably, Jourrael dealt a killing blow to Obann, sending him to the death she will never meet.

## Unbound Future

Alive and well, Jourrael still serves the Spider Queen. Their ghostly form and unmatchable stealth fuel the attacks of their spectral blade and void dagger, with few surviving that onslaught. They shrug off nature's elements and mortals' weapons, won't be held against their will, and know no fear. After having spent so long dismembered and sealed away, Jourrael is eager to see the world of Exandria—and to kill any creature they deem worthy of dying on their blades.

## Alignment

Chaotic evil.

```statblock
"name": "Jourrael, the Caedogeist (TDCSR)"
"size": "Medium"
"type": "fiend"
"subtype": "drow"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "[studded leather armor](3-Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "152"
"hit_dice": "16d8 + 80"
"stats":
- !!int "13"
- !!int "24"
- !!int "20"
- !!int "14"
- !!int "17"
- !!int "15"
"speed": "80 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "12"
  "Wisdom": !!int "8"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "17"
  "Perception": !!int "13"
  "Acrobatics": !!int "12"
"damage_resistances": "acid; fire; lightning; cold; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [prone](3-Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "darkvision 120 ft., passive Perception 23"
"languages": "Abyssal, Common, Infernal, Undercommon"
"cr": "15"
"traits":
- "desc": "Jourrael's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](3-Mechanics/CLI/spells/dancing-lights-xphb.md)\n\n\
    1/day each: [darkness](3-Mechanics/CLI/spells/darkness-xphb.md), [faerie fire](3-Mechanics/CLI/spells/faerie-fire-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "Jourrael can move through other creatures and objects as if they were difficult\
    \ terrain. They take 5 (1d10) force damage if they end their turn inside an\
    \ object."
  "name": "Incorporeal Movement"
- "desc": "Jourrael deals an extra 35 (10d6) damage when they hit a target with\
    \ a weapon attack and have advantage on the attack roll, or when the target is\
    \ within 5 feet of an ally of Jourrael that isn't [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)\
    \ and Jourrael doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- "desc": "If Jourrael is reduced to 0 hit points, they do not fall [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)\
    \ but becomes an incorporeal spirit for 24 hours. During this time, Jourrael can't\
    \ return to their original form until they returns to full hit points. In this\
    \ form, they are [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible), can't\
    \ attack or interact with corporeal creatures or objects, and can't be targeted\
    \ by spells. After 24 hours have passed, Jourrael regains 1 hit point and returns\
    \ to their original form with four levels of [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion)."
  "name": "Inevitable"
"actions":
- "desc": "Jourrael makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 10\
    \ (1d6 + 7) slashing damage, and the target must succeed on a DC 14 Constitution\
    \ saving throw or be [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ for 1 hour. If the saving throw fails by 5 or more, the target is also [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)\
    \ while [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) in this way.\
    \ The target wakes up if it takes damage or if another creature takes an action\
    \ to shake it awake."
  "name": "Spectral Blade"
- "desc": "Ranged Weapon Attack: +12 to hit, range 60/120 ft., one target. Hit:\
    \ 9 (1d4 + 7) piercing damage."
  "name": "Void Dagger"
"bonus_actions":
- "desc": "Jourrael can take the [Dash](3-Mechanics/CLI/rules/actions.md#Dash), [Disengage](3-Mechanics/CLI/rules/actions.md#Disengage),\
    \ or [Hide](3-Mechanics/CLI/rules/actions.md#Hide) action."
  "name": "Cunning Action"
- "desc": "Jourrael manifests three illusory duplicates that hover in her space. Each\
    \ time a creature targets Jourrael with an attack, roll a d20 to see if it hits\
    \ one of the duplicates. If there are three duplicates, a duplicate is targeted\
    \ on a roll of 6 or higher. With two duplicates, a duplicate is targeted on a\
    \ roll of 8 or higher. A single duplicate is targeted on a roll of 11 or higher.\
    \ A duplicate's AC is 17, and it is destroyed if hit. Jourrael can hide the duplicates\
    \ as a bonus action."
  "name": "Mirrored Form (Recharges after a Short Rest)"
"reactions":
- "desc": "Jourrael adds 5 to her AC against one melee attack that would hit her.\
    \ To do so, she must see the attacker"
  "name": "Parry"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/npc/token/jourrael-the-caedogeist-tdcsr.webp"
```
^statblock
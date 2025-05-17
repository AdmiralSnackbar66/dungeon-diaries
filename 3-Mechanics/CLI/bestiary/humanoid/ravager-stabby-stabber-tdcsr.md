---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Ravager Stabby-Stabber"]
---
# [Ravager Stabby-Stabber](3-Mechanics\CLI\bestiary\humanoid/ravager-stabby-stabber-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 250*  

The "Ravagers" are a death cult that stampedes across the "Dividing Plains", spilling blood in the name of the Betrayer God known as the Ruiner. Led by bloodthirsty warlords called [Slaughter Lords](ravager-slaughter-lord-tdcsr.md), the cult's long-term goals are unknown, but its members are content in the short term to sow the seeds of chaos across the plains.

Such wanton, chaotic slaughter would certainly please the Ruiner, and the smaller settlements of the plains have learned to fear the sight of "Ravagers" on the horizon. Inside the walls of "Westruun", however, Lord Mayor Lysandra Kallos and her councilors worry that the "Ravagers" show better organization than their bloodthirsty warlords should be capable of instilling in the cult. Who—or what—is commanding the Slaughter Lords from the shadows? And toward what end are these depraved warriors being directed?

## Ravager Stabby-Stabber

Adventurers and mercenaries most often take up arms against the "Ravagers" after hearing stories of the hordes terrorizing the free peoples of the "Dividing Plains". They prepare themselves for brutal combat against even more brutal foes—and are thus unprepared for the "Ravagers'" most terrifying weapon, the stabby-stabbers. Fresh-faced warriors from "Emon" laugh at the name when they first hear it in "Kymal's" taverns, even as veteran mercenaries close their eyes and hastily bury their faces in their tankards.

Nimble Ravager warriors who show exceptional skill are brought before their Slaughter Lord and forced to drink a terrible brew the "Ravagers" call skullfire. This concoction burns away what little reasoning ability those warriors possessed, turning them into perfectly obedient, flesh-hungry monsters. In battle, stabby-stabbers swarm like rats, eviscerating enemies and bystanders alike.

### Alignment

Chaotic evil.

```statblock
"name": "Ravager Stabby-Stabber (TDCSR)"
"size": "Small"
"type": "humanoid"
"subtype": "any"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[studded leather](3-Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "10"
- !!int "16"
- !!int "12"
- !!int "10"
- !!int "8"
- !!int "7"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "1"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, one other language"
"cr": "3"
"traits":
- "desc": "When the stabby-stabber hits with a melee attack, it can attack again and\
    \ continue making additional attacks until it misses. The stabby-stabber cannot\
    \ move between the attacks made with this trait."
  "name": "Stabby Frenzy"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"bonus_actions":
- "desc": "The stabby-stabber can use the [Disengage](3-Mechanics/CLI/rules/actions.md#Disengage)\
    \ or [Hide](3-Mechanics/CLI/rules/actions.md#Hide) action."
  "name": "Nimble Escape"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/ravager-stabby-stabber-tdcsr.webp"
```
^statblock

## Environment

grassland
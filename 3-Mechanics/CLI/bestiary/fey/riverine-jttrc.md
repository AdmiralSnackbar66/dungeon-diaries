---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Riverine
---
# [Riverine](3-Mechanics\CLI\bestiary\fey/riverine-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 133*  

More than mere waterway guardians, riverines are embodiments of particular rivers. These spirits of nature take shape to defend their waters and interact with those who travel along their currents. From the waist up, riverines have skin the color of the waters they protect but are otherwise humanlike in appearance. From the waist down, they can manifest either humanlike legs or churning gouts of water. A riverine's personality reflects the nature of the river it arises from—some are lethargic while others are wild and reckless.

## A Riverine's Lair

Some riverines enjoy reverence akin to worship. Their likenesses are cast as statues and housed in temples, and worshipers act as agents between the river spirits and the people who revere them. These temples often become the home of the riverine itself, serving as its lair, though other nexuses of power along the river's path—such as its source or a significant waterfall—can also be used as lairs by a riverine.

A riverine encountered in its lair has a challenge rating of 13 (10,000 XP).

```statblock
"name": "Riverine (JttRC)"
"size": "Large"
"type": "fey"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "204"
"hit_dice": "24d10 + 72"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "19"
  - !!int "17"
  - !!int "12"
  - !!int "16"
  - !!int "21"
"speed": "30 ft., swim 60 ft."
"saves":
  - "intelligence": "+5"
  - "wisdom": "+7"
  - "charisma": "+9"
"skillsaves":
  - "name": "[Insight](/3-Mechanics/CLI/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Nature](/3-Mechanics/CLI/skills.md#Nature)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "acid, fire"
"senses": "blindsight 60 ft., passive Perception 17"
"languages": "Aquan, Common, Sylvan"
"cr": "12"
"traits":
  - "desc": "The riverine can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the riverine fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The riverine makes two Flood Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14\
      \ (2d8 + 5) bludgeoning damage plus 10 (3d6) cold damage."
    "name": "Flood Strike"
  - "desc": "The riverine casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 17):\n\
      \nAt will: [control water](/3-Mechanics/CLI/spells/control-water-xphb.md),\
      \ [fog cloud](/3-Mechanics/CLI/spells/fog-cloud-xphb.md)\n\n1/day: [greater\
      \ restoration](/3-Mechanics/CLI/spells/greater-restoration-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The riverine magically teleports to an unoccupied space it can see within\
      \ 30 feet of itself. Both the space it leaves and its destination must be in\
      \ or on the surface of water."
    "name": "Whirlpool Step"
"legendary_actions":
  - "desc": "The riverine uses its Whirlpool Step. Immediately after it teleports,\
      \ each creature within 5 feet of the riverine's destination space takes 5 (d10)\
      \ cold damage."
    "name": "Whirlpool Rush"
  - "desc": "The riverine unleashes a torrent of river water in a 30-foot line that\
      \ is 5 feet wide. Each creature in that area must make a DC 17 Dexterity saving\
      \ throw. On a failed save, a creature takes 11 (2d10) bludgeoning damage and\
      \ is knocked [prone](/3-Mechanics/CLI/conditions.md#Prone). On a successful\
      \ save, a creature takes half as much damage and isn't knocked [prone](/3-Mechanics/CLI/conditions.md#Prone)."
    "name": "Raging Deluge (Costs 2 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the riverine can take\
      \ one of the following lair actions; the riverine can't take the same lair action\
      \ two rounds in a row:"
    "name": ""
  - "desc": "- Phantasmal Mist. The riverine creates fog around a creature it\
      \ can see within 120 feet of it. The target must succeed on a DC 17 Wisdom saving\
      \ throw or take 5 (d10) psychic damage and be [frightened](/3-Mechanics/CLI/conditions.md#Frightened)\
      \ of the riverine until the end of the target's next turn.  \n- River's Fury.\
      \ The riverine conjures swampy ground that briefly covers the ground in a 20-foot\
      \ square the riverine can see within 120 feet of itself. That area becomes difficult\
      \ terrain until initiative count 20 on the next round. Any creature, other than\
      \ the riverine, that enters the affected area or starts its turn there takes\
      \ 7 (2d6) cold damage.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a riverine's lair flourishes under the magic of\
      \ the riverine's presence, which creates one or more of the following effects:"
    "name": ""
  - "desc": "- Clearwater Sight. The waters of the river serve as a conduit for\
      \ the riverine's consciousness. As an action, the riverine can cast the [clairvoyance](/3-Mechanics/CLI/spells/clairvoyance-xphb.md)\
      \ spell, requiring no spell components, targeting any point along the river\
      \ it's connected to.  \n- River's Bounty. Freshwater fauna and flora reproduce\
      \ rapidly and thrive in the waters within 1 mile of the riverine's lair. Foraging\
      \ in these waters yields twice the usual amount of food.  \n- Spirit Guidance.\
      \ Tracks appear along the banks of the river within 6 miles of the riverine's\
      \ lair. The tracks lead to potential shelters and safe passages across the river's\
      \ waters, while also leading away from areas that the riverine prefers to remain\
      \ undisturbed.  "
    "name": ""
  - "desc": "If the riverine dies, the flora and fauna return to normal levels, and\
      \ its river dries out over the course of d10 days. All other effects cease immediately."
    "name": ""
"source":
  - "JttRC"
"image": "/3-Mechanics/CLI/bestiary/fey/token/riverine-jttrc.webp"
```
^statblock
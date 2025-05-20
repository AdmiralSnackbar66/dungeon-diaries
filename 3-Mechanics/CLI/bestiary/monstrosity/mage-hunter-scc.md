---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mage Hunter
---
# [Mage Hunter](3-Mechanics\CLI\bestiary\monstrosity/mage-hunter-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 199*  

Mage hunters are hideous spider-legged creatures employed by the Oriq to pursue magic-wielders. These creatures can naturally sense magic via the glowing purple spines on their backs.

A mage hunter is usually in its sentry form, a diamond-shaped drone with a heightened ability to sense and locate mages. Once it finds a quarry, the mage hunter takes on its arachnoid hunter form and pursues its targets with vicious skill.

```statblock
"name": "Mage Hunter (SCC)"
"size": "Large"
"type": "monstrosity"
"alignment": "typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "15"
  - !!int "16"
  - !!int "11"
  - !!int "17"
  - !!int "10"
"speed": "40 ft., climb 40 ft. (hunter form only), fly 10 ft. (hover sentry form only)"
"saves":
  - "intelligence": "+3"
  - "wisdom": "+6"
  - "charisma": "+3"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"condition_immunities": "[blinded](/3-Mechanics/CLI/conditions.md#Blinded), [charmed](/3-Mechanics/CLI/conditions.md#Charmed),\
  \ [deafened](/3-Mechanics/CLI/conditions.md#Deafened), [frightened](/3-Mechanics/CLI/conditions.md#Frightened),\
  \ [prone](/3-Mechanics/CLI/conditions.md#Prone)"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 19"
"languages": "understands Common but can't speak"
"cr": "5"
"traits":
  - "desc": "The hunter knows the location of every spellcaster, active spell, and\
      \ magic item within 120 feet of itself."
    "name": "Magic Sense"
  - "desc": "The hunter can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb (Hunter Form Only)"
"actions":
  - "desc": "The hunter makes two Claw attacks."
    "name": "Multiattack (Hunter Form Only)"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15\
      \ (2d10 + 4) slashing damage."
    "name": "Claw (Hunter Form Only)"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22\
      \ (4d8 + 4) piercing damage, and the target is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 15). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/conditions.md#Restrained),\
      \ and the hunter can't make a Tail attack against another target."
    "name": "Tail"
  - "desc": "The hunter emits a pulse of energy that helps it better locate its magical\
      \ quarry. Each creature within 120 feet of the hunter that has the ability to\
      \ cast spells must succeed on a DC 14 Wisdom saving throw or be mystically marked\
      \ by the hunter for 1 hour.\n\nWhile marked, a creature can't become hidden\
      \ from the hunter and gains no benefit from the [invisible](/3-Mechanics/CLI/conditions.md#Invisible)\
      \ condition against the hunter. Additionally, while a marked creature is on\
      \ the same plane of existence as the hunter, the hunter always knows the distance\
      \ and direction to the creature."
    "name": "Mage Tracker (Sentry Form Only)"
"bonus_actions":
  - "desc": "The hunter folds into its drone-like sentry form or unfolds into its\
      \ hunter form. Its game statistics are the same in each form."
    "name": "Shift Form"
"reactions":
  - "desc": "When the hunter takes damage from a spell, it takes only half the triggering\
      \ damage (rounded down). If the creature that cast the spell is within 60 feet\
      \ of the hunter, that creature must succeed on a DC 14 Dexterity saving throw\
      \ or take the other half of the damage."
    "name": "Consume and Destroy"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/mage-hunter-scc.webp"
```
^statblock
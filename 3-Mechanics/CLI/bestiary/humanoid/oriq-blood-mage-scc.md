---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
aliases: ["Oriq Blood Mage"]
---
# [Oriq Blood Mage](3-Mechanics\CLI\bestiary\humanoid/oriq-blood-mage-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 201*  

Oriq blood mages create deadly weapons formed of their own blood. They can also sense the life energy within nearby creatures, making the blood mages almost impossible to ambush.

## Oriq

The Oriq are a secret society of mages who wield forbidden magic in the service of their leader, Extus Narr. Narr was in consideration for elevation to the role of Oracle of Strixhaven, but when the Founder Dragons passed him over in favor of Jadzi, his bitterness knew no bounds. He now uses the Oriq to gather the spells and magical energy he needs to summon a devastating being, the Blood Avatar, to destroy Strixhaven.

The Oriq work in secret, infiltrating Strixhaven to search for the magic their master covets and watch for impressionable students and embittered faculty they might turn to their cause. The Oriq take pains to hide their true allegiance and wear masks to hide their identities. These masks have magical properties that function only for their intended wearers.

```statblock
"name": "Oriq Blood Mage (SCC)"
"size": "Medium"
"type": "humanoid"
"subtype": "warlock"
"alignment": "typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "blood aegis"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "11"
- !!int "14"
- !!int "18"
- !!int "20"
- !!int "12"
- !!int "12"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Medicine": !!int "5"
  "Deception": !!int "9"
  "Survival": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion)"
"senses": "passive Perception 11"
"languages": "Common plus any four languages"
"cr": "9"
"traits":
- "desc": "The AC of the blood mage includes its Constitution modifier while it isn't\
    \ wearing armor or wielding a shield."
  "name": "Blood Aegis"
- "desc": "The blood mage wears an Oriq mask. While wearing the mask, the blood mage\
    \ can't be targeted by any divination magic or perceived through magical scrying\
    \ sensors, and it adds double its proficiency bonus to Charisma ([Deception](/3-Mechanics/CLI/skills.md#Deception))\
    \ checks (included above)."
  "name": "Oriq Mask"
- "desc": "While the blood mage isn't [blinded](/3-Mechanics/CLI/conditions.md#Blinded),\
    \ it can see any creature that isn't an Undead or a Construct within 60 feet of\
    \ itself, even through total cover, heavily obscured areas, invisibility, or any\
    \ other phenomena that would prevent sight."
  "name": "Sanguine Sense"
"actions":
- "desc": "The blood mage makes two Blood Lash attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +9 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) necrotic damage. If the target is a creature, it can't regain hit points\
    \ until the start of the blood mage's next turn."
  "name": "Blood Lash"
- "desc": "The blood mage chooses a point within 150 feet of itself, and a 20-foot\
    \ radius sphere centered on that point fills with a burst of searing, blood-red\
    \ mist. Each creature of the blood mage's choice that it can see in that area\
    \ must make a DC 17 Constitution saving throw. On a failed save, a creature takes\
    \ 38 (7d10) necrotic damage and is [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)\
    \ until the end of its next turn. On a success, a creature takes half as much\
    \ damage and isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated).\
    \ A creature dies if reduced to 0 hit points by this necrotic damage."
  "name": "Blood Boil (Recharge 4-6)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/oriq-blood-mage-scc.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
aliases: ["Oriq Recruiter"]
---
# [Oriq Recruiter](3-Mechanics\CLI\bestiary\humanoid/oriq-recruiter-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 202*  

Oriq recruiters are subtle mages who infiltrate Strixhaven in service to their order. They are adept at blending in, watching for powerful but underperforming mages and students who have fallen through the cracks of the institution. The recruiters approach and befriend these individuals either as potential recruits to the Oriq or as assets who can help the Oriq acquire spells, rare spell components, or knowledge from Strixhaven.

## Oriq

The Oriq are a secret society of mages who wield forbidden magic in the service of their leader, Extus Narr. Narr was in consideration for elevation to the role of Oracle of Strixhaven, but when the Founder Dragons passed him over in favor of Jadzi, his bitterness knew no bounds. He now uses the Oriq to gather the spells and magical energy he needs to summon a devastating being, the Blood Avatar, to destroy Strixhaven.

The Oriq work in secret, infiltrating Strixhaven to search for the magic their master covets and watch for impressionable students and embittered faculty they might turn to their cause. The Oriq take pains to hide their true allegiance and wear masks to hide their identities. These masks have magical properties that function only for their intended wearers.

```statblock
"name": "Oriq Recruiter (SCC)"
"size": "Medium"
"type": "humanoid"
"subtype": "warlock"
"alignment": "typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "misdirecting defense"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "8"
  "Insight": !!int "4"
  "Arcana": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [frightened](/3-Mechanics/CLI/conditions.md#Frightened)"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- "desc": "The recruiter casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 14):\n\
    \nAt will: [disguise self](/3-Mechanics/CLI/spells/disguise-self-xphb.md),\
    \ [silent image](/3-Mechanics/CLI/spells/silent-image-xphb.md)\n\n1/day: [suggestion](/3-Mechanics/CLI/spells/suggestion-xphb.md)\n\
    \n2/day: [charm person](/3-Mechanics/CLI/spells/charm-person-xphb.md)"
  "name": "Spellcasting"
- "desc": "The AC of the recruiter includes its Charisma modifier while it isn't wearing\
    \ armor or wielding a shield."
  "name": "Misdirecting Defense"
- "desc": "The recruiter wears an Oriq mask. While wearing the mask, the recruiter\
    \ can't be targeted by any divination magic or perceived through magical scrying\
    \ sensors, and it adds double its proficiency bonus to Charisma ([Deception](/3-Mechanics/CLI/skills.md#Deception))\
    \ checks (included above)."
  "name": "Oriq Mask"
"actions":
- "desc": "The recruiter makes two Psychic Knife attacks. It can use Spellcasting\
    \ in place of one of the attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 21 (5d6 + 4) psychic damage."
  "name": "Psychic Knife"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/oriq-recruiter-scc.webp"
```
^statblock
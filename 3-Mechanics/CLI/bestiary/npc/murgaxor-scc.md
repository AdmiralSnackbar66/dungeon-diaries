---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/bullywug
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- Murgaxor
---
# [Murgaxor](3-Mechanics\CLI\bestiary\npc/murgaxor-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 180*  

After giving the characters their quest, Professor Lang hands them a file with information the faculty members have collected about Murgaxor from university records. Tell the players the following to give them context about this evil spellcaster:

- Murgaxor is a bullywug who attended Strixhaven 200 years ago. He was a member of Witherbloom College, though there are no records of him participating in any activities or working on campus.  
- A mean-spirited, egotistical spellcaster, Murgaxor was censured repeatedly for disregarding safety protocols, hexing and cursing peers, and using harmful magic while on campus.  
- University officials believe Murgaxor began his illicit experiments with life-draining magic shortly after he enrolled as a student.  
- In his third year, Murgaxor was expelled for using life-draining magic when it resulted in another student's death. Murgaxor fled before he could be handed over to authorities.  
- For a few years after his expulsion, Murgaxor was reportedly sighted around the outskirts of campus, specifically in Sedgemoor and the Detention Bog. Authorities believed something about those locations enhanced his magic, but he was never caught. Sightings soon stopped, and no further evidence of Murgaxor's presence was found. Offcials assumed he was dead and struck Murgaxor from Strixhaven's records, as they considered him a blot on the university's reputation.  

```statblock
"name": "Murgaxor (SCC)"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug, warlock"
"alignment": "typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "blood aegis"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "18"
  - !!int "20"
  - !!int "12"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "constitution": "+8"
  - "intelligence": "+9"
  - "wisdom": "+5"
  - "charisma": "+5"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+9"
  - "name": "[Medicine](/3-Mechanics/CLI/skills.md#Medicine)"
    "desc": "+5"
  - "name": "[Survival](/3-Mechanics/CLI/skills.md#Survival)"
    "desc": "+5"
"damage_resistances": "necrotic"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion)"
"senses": "passive Perception 11"
"languages": "Common plus any four languages"
"cr": "9"
"traits":
  - "desc": "The AC of Murgaxor includes his Constitution modifier while he isn't\
      \ wearing armor or wielding a shield."
    "name": "Blood Aegis"
  - "desc": "Murgaxor wears an Oriq mask. While wearing the mask, Murgaxor can't be\
      \ targeted by any divination magic or perceived through magical scrying sensors,\
      \ and he adds double his proficiency bonus to Charisma ([Deception](/3-Mechanics/CLI/skills.md#Deception))\
      \ checks (included above)."
    "name": "Oriq Mask"
  - "desc": "While Murgaxor isn't [blinded](/3-Mechanics/CLI/conditions.md#Blinded),\
      \ he can see any creature that isn't an Undead or a Construct within 60 feet\
      \ of himself, even through total cover, heavily obscured areas, invisibility,\
      \ or any other phenomena that would prevent sight."
    "name": "Sanguine Sense"
"actions":
  - "desc": "Murgaxor makes two Blood Lash attacks."
    "name": "Multiattack"
  - "desc": "Melee Spell Attack: +9 to hit, reach 10 ft., one target. Hit: 21\
      \ (3d10 + 5) necrotic damage. If the target is a creature, it can't regain hit\
      \ points until the start of Murgaxor's next turn."
    "name": "Blood Lash"
  - "desc": "Murgaxor chooses a point within 150 feet of himself, and a 20-foot radius\
      \ sphere centered on that point fills with a burst of searing, blood-red mist.\
      \ Each creature of Murgaxor's choice that he can see in that area must make\
      \ a DC 17 Constitution saving throw. On a failed save, a creature takes 38 (7d10)\
      \ necrotic damage and is [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)\
      \ until the end of its next turn. On a success, a creature takes half as much\
      \ damage and isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated).\
      \ A creature dies if reduced to 0 hit points by this necrotic damage."
    "name": "Blood Boil (Recharge 4-6)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Murgaxor can take one\
      \ of the following lair actions; after he does so, he can't use that action\
      \ again until he finishes a long rest:"
    "name": ""
  - "desc": "- Clay Behemoth. A [clay golem](/3-Mechanics/CLI/bestiary/construct/clay-golem-xmm.md)\
      \ erupts from the floor in an unoccupied space within 15 feet of the ritual\
      \ circle. The golem obeys Murgaxor's commands, takes its turns on initiative\
      \ count 10 (losing initiative ties), fights until destroyed, and reverts to\
      \ a mound of inanimate clay after 1 hour.  \n- Earthen Fist. A medium fist\
      \ of packed earth rises from the floor in an unoccupied space that Murgaxor\
      \ can see within 30 feet of him. The fist attacks when one creature of his choice\
      \ is within 4 feet of the fist. The fist has a +11 bonus to hit, and on a hit,\
      \ the target takes 13 (3d8) bludgeoning damage and is grappled (escape DC 15).\
      \ The fist disappears if the attack roll misses or if the grapple ends. When\
      \ the fist disappears, this lair action recharges, allowing Murgaxor to use\
      \ it again.  \n- Necrotic Burst. Tendrils of necrotic energy erupt from\
      \ the ritual circle and lash out at any number of creatures Murgaxor can see\
      \ within 15 feet of the circle. Each target must succeed on a DC 15 Dexterity\
      \ saving throw, or it takes 5 (d10) necrotic damage and can't regain hit points\
      \ until the start of its next turn.  \n- Summon Mephits. Murgaxor summons\
      \ four [mud mephits](/3-Mechanics/CLI/bestiary/elemental/mud-mephit-xmm.md)\
      \ that appear in unoccupied spaces within 15 feet of the ritual circle. The\
      \ mephits obey Murgaxor's commands, take their turns on initiative count 15\
      \ (losing initiative ties), and fight until destroyed.  "
    "name": ""
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/murgaxor-scc.webp"
```
^statblock
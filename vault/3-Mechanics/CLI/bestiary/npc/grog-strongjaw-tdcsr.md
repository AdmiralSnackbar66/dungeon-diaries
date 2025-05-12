---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/half-giant
statblock: inline
aliases: ["Grog Strongjaw"]
---
# [Grog Strongjaw](3-Mechanics\CLI\bestiary\npc/grog-strongjaw-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 261*  

## Vox Machina

Heroes. Scoundrels. Legends. Dumbasses. The legacy of the adventuring party Vox Machina is a complicated one. Over the course of their adventures, they've selflessly saved the lives of thousands of people in Tal'Dorei, "Wildemount", "Issylra", and beyond. Of course, there are also countless tales of individuals they've bullied, threatened, insulted, or otherwise needlessly antagonized throughout those same adventures. These legendary figures grew from a band of dime-a-dozen sellswords in the swamp burgh of "Stilben" to gods-blessed warriors whose actions might have saved all of Exandria from a future of undead tyranny.

The deeds of Vox Machina are sung by bards across Tal'Dorei, often exaggerating those already belief-defying tales of gods and monsters and magic. But though their legend has grown wild and unruly, the members of Vox Machina are still people. More than twenty years have passed since their last great campaign. Most of them are still alive, and the lives of these heroes have changed—in big ways and in smaller, more subtle ones.

Those among them who age have softer bodies and lines on their faces. Those among them who don't age still show the weight of the world upon their shoulders. By and large, the members of Vox Machina have set aside weapons, armor, and spells in favor of more subtle ways of helping others. Some lead the lands they were born to lead. Others have been elected to the "Tal'Dorei Council", shaping the fate of the continent's people with quiet wisdom rather than blades and battle cries.

Still, each member of this legendary band of adventurers would take up arms again in an instant if it meant protecting those they care for the most. And the [Vestiges of Divergence](3-Mechanics/CLI/tables/vestiges-of-divergence-by-advancement-tdcsr.md), whose power they unlocked in the battles against the "Cinder King" and The Whispered One, are still within their grasp.

The following stat blocks are here for GMs to use if their players encounter a member of Vox Machina—hopefully as an ally or a "quest giver," for woe betide anyone who encounters these legendary heroes as a foe. These statistics don't represent the full extent of the characters' abilities as 20th-level adventurers, but have been streamlined to make them easier for the Game Master to run.

## Grog Strongjaw

Towering, broad, and ready for battle, Grog Strongjaw is a paragon of raw strength and unwavering determination. The son of Stonejaw Strongjaw joined Vox Machina in their first meeting in "Stilben", and went on to defeat his tyrannical uncle Kevdak, bear the mythic [Titanstone Knuckles](3-Mechanics/CLI/items/titanstone-knuckles-tdcsr.md), and save Exandria twice over alongside his companions.

### Kindhearted Berserker

Grog is a man of simple pleasures. When he traveled the world with Vox Machina, his great loves in life were famously battle, women, and ale. And though he was renowned for his crass manners, vicious weapons, and relentless battle rage, he was just as well known for his love for his friends. It was never just about saving the world for Grog. Rather, it was about overcoming ever-greater challenges, and doing so side by side with his chosen family.

### After the Epilogue

After The Whispered One's defeat, Grog Strongjaw retired to "Westruun" to live with his best friend [Pike Trickfoot](3-Mechanics/CLI/bestiary/npc/pike-trickfoot-tdcsr.md). Since then, he has dedicated himself to learning to read and strengthening his mind. In the course of his study of letters, shapes, colors, and numbers, Grog has organized a quadrennial event in "Whitestone" that he calls the Luncheon of Champions. He personally sends a handwritten invitation to the greatest warriors of Exandria to battle in an all-out brawl—and then join him for lunch and ale.

```statblock
"name": "Grog Strongjaw (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-giant"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "290"
"hit_dice": "20d12 + 120 + 40"
"stats":
- !!int "26"
- !!int "15"
- !!int "22"
- !!int "8"
- !!int "10"
- !!int "13"
"speed": "50 ft."
"saves":
  "Strength": !!int "14"
  "Constitution": !!int "12"
"skillsaves":
  "Intimidation": !!int "7"
  "Athletics": !!int "14"
  "Animal Handling": !!int "6"
  "Survival": !!int "6"
"damage_resistances": "cold, fire, lightning, thunder while enlarged"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
  \ while raging"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Dwarvish, Giant, with limited reading and writing"
"cr": "18"
"traits":
- "desc": "When Grog scores a critical hit, he rolls double weapon damage dice as\
    \ usual, then rolls 3 additional weapon damage dice."
  "name": "Brutal Critical"
- "desc": "Grog has advantage on initiative rolls."
  "name": "Feral Instinct"
- "desc": "Grog can take a −5 penalty to any melee attack roll to gain a +10 bonus\
    \ to the damage roll."
  "name": "Melee Master"
- "desc": "At the start of his turn, Grog can gain advantage on all melee weapon attack\
    \ rolls during that turn, but attack rolls against him have advantage until the\
    \ start of his next turn."
  "name": "Reckless"
- "desc": "If Grog is reduced to 0 hit points while raging, he drops to 1 hit point\
    \ instead if he succeeds on a DC 10 Constitution saving throw."
  "name": "Relentless Rage"
- "desc": "Grog wears a [belt of dwarvenkind](3-Mechanics/CLI/items/belt-of-dwarvenkind-xdmg.md).\
    \ He wields the Bloodaxe (a +2 magic weapon), a [dwarven thrower](3-Mechanics/CLI/items/dwarven-thrower-xdmg.md),\
    \ and the [Titanstone Knuckles](3-Mechanics/CLI/items/titanstone-knuckles-exalted-tdcsr.md)."
  "name": "Special Equipment"
- "desc": "When Grog damages a creature that is concentrating on a spell, that creature\
    \ has disadvantage on the saving throw to maintain its [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration).\
    \ In addition, Grog has advantage on saving throws against spells cast by creatures\
    \ within 5 feet of him."
  "name": "Spellbreaker"
- "desc": "Grog has an additional 40 hit points."
  "name": "Toughness"
"actions":
- "desc": "Grog makes two attacks (three when raging) with his Bloodaxe, [dwarven\
    \ thrower](3-Mechanics/CLI/items/dwarven-thrower-xdmg.md), or [Titanstone Knuckles](3-Mechanics/CLI/items/titanstone-knuckles-exalted-tdcsr.md)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 20\
    \ (1d12 + 14) slashing damage and 3 (1d6) necrotic damage. If the target is\
    \ reduced to 0 hit points, Grog gains 10 temporary hit points."
  "name": "Bloodaxe"
- "desc": "Melee or Ranged Weapon Attack: +17 to hit, reach 5 ft. or range 20/60,\
    \ one target. Hit: 24 (2d8 + 15) bludgeoning damage."
  "name": "[Dwarven Thrower](3-Mechanics/CLI/items/dwarven-thrower-xdmg.md)"
- "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 14\
    \ (1d4 + 12) bludgeoning damage."
  "name": "Titanstone Knuckles"
- "desc": "Grog casts [enlarge/reduce](3-Mechanics/CLI/spells/enlarge-reduce-xphb.md)\
    \ on himself to grow in size for 10 minutes. While enlarged in this way, he has\
    \ resistance to cold, fire, lightning, and thunder damage."
  "name": "Enlarge (Recharges after a Long Rest)"
"bonus_actions":
- "desc": "Grog enters a rage that lasts until he falls [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)\
    \ or chooses to end it (no action required). While raging, Grog gains the following\
    \ benefits:\n\n- He has advantage on Strength checks and Strength saving throws.\
    \  \n- He deals an extra 4 damage when he hits a target with a melee weapon attack\
    \ (included in attacks)  \n- He has resistance to bludgeoning, piercing, and slashing\
    \ damage  \n- He can't be [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed)\
    \ or [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)  \n- He can\
    \ make an additional melee weapon attack (included in the Multiattack action)\
    \  \n\nWhen Grog's rage ends, he gains one level of [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion)."
  "name": "Rage (Recharges after a Short or Long Rest)"
"reactions":
- "desc": "When a creature within 5 feet of Grog casts a spell or deals damage to\
    \ him, Grog can make a melee weapon attack against that creature."
  "name": "Opportunist"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/npc/token/grog-strongjaw-tdcsr.webp"
```
^statblock
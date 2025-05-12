---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Percival de Rolo"]
---
# [Percival de Rolo](3-Mechanics\CLI\bestiary\humanoid/percival-de-rolo-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 266*  

## Vox Machina

Heroes. Scoundrels. Legends. Dumbasses. The legacy of the adventuring party Vox Machina is a complicated one. Over the course of their adventures, they've selflessly saved the lives of thousands of people in Tal'Dorei, "Wildemount", "Issylra", and beyond. Of course, there are also countless tales of individuals they've bullied, threatened, insulted, or otherwise needlessly antagonized throughout those same adventures. These legendary figures grew from a band of dime-a-dozen sellswords in the swamp burgh of "Stilben" to gods-blessed warriors whose actions might have saved all of Exandria from a future of undead tyranny.

The deeds of Vox Machina are sung by bards across Tal'Dorei, often exaggerating those already belief-defying tales of gods and monsters and magic. But though their legend has grown wild and unruly, the members of Vox Machina are still people. More than twenty years have passed since their last great campaign. Most of them are still alive, and the lives of these heroes have changed—in big ways and in smaller, more subtle ones.

Those among them who age have softer bodies and lines on their faces. Those among them who don't age still show the weight of the world upon their shoulders. By and large, the members of Vox Machina have set aside weapons, armor, and spells in favor of more subtle ways of helping others. Some lead the lands they were born to lead. Others have been elected to the "Tal'Dorei Council", shaping the fate of the continent's people with quiet wisdom rather than blades and battle cries.

Still, each member of this legendary band of adventurers would take up arms again in an instant if it meant protecting those they care for the most. And the [Vestiges of Divergence](3-Mechanics/CLI/tables/vestiges-of-divergence-by-advancement-tdcsr.md), whose power they unlocked in the battles against the "Cinder King" and The Whispered One, are still within their grasp.

The following stat blocks are here for GMs to use if their players encounter a member of Vox Machina—hopefully as an ally or a "quest giver," for woe betide anyone who encounters these legendary heroes as a foe. These statistics don't represent the full extent of the characters' abilities as 20th-level adventurers, but have been streamlined to make them easier for the Game Master to run.

## Percival de Rolo

Percival Fredrickstein von Musel Klossowski de Rolo III has endured much in his life. He was a young man plagued by personal demons when Vox Machina rescued him from a dismal cell in the "Umbra Hills". In those days, Percival de Rolo was a man driven by vengeance, with only his guns as allies, but he took no joy in that life. He has since expressed that the thing he's most grateful for is that he didn't die as the person he was, but lived long enough to grow into someone better, together with his beloved [Vex'ahlia](3-Mechanics/CLI/bestiary/humanoid/vexahlia-tdcsr.md) and their five children.

### Father and Inventor

Percival is deeply dedicated to his wife, to his children, and to the enduring health of "Whitestone". The sorrows of his old life still haunt him, though, particularly the creation of firearms. But he has done his best to make peace with his past, resolving to spend the rest of his days creating things that bring joy to the lives of others rather than curtailing those lives. His crowning achievement is the "Heart of Whitestone", a majestic clock tower that looms over his city.

### After the Epilogue

Percival largely retired from public life not long after the fall of The Whispered One. He now dedicates himself to his duties as a leader in "Whitestone" as much as he can, though he is more interested in creating than governing. Most of his tinkering happens in private, creating novelties such as intricate watches and streetlamps powered by volatile reactions with the acid pools beneath his city. He has also lent his knowledge to a number of feats of civic engineering, including "Whitestone's" skyport and "Zephrah's" network of windmills.

```statblock
"name": "Percival de Rolo (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "[studded leather](3-Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "190"
"hit_dice": "20d10 + 40 + 40"
"stats":
- !!int "12"
- !!int "22"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "14"
"speed": "30 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "9"
  "History": !!int "11"
  "Acrobatics": !!int "12"
  "Persuasion": !!int "8"
"damage_resistances": "lightning"
"senses": "passive Perception 19"
"languages": "Celestial, Common, Elvish"
"cr": "18"
"traits":
- "desc": "Once on his turn, Percy can take one additional action."
  "name": "Action Surge (2/Short Rest)"
- "desc": "[Cabal's Ruin](3-Mechanics/CLI/items/cabals-ruin-exalted-tdcsr.md) grants\
    \ Percy advantage on saving throws against spells or magical effects. Additionally,\
    \ [Cabal's Ruin](3-Mechanics/CLI/items/cabals-ruin-exalted-tdcsr.md) has 10 charges.\
    \ When Percy hits with a weapon attack, he can expend up to 10 charges to have\
    \ the attack deal 1d6 extra lightning damage per charge spent."
  "name": "Cabal's Ruin"
- "desc": "Percy can reroll a failed saving throw."
  "name": "Indomitable (3/Long Rest)"
- "desc": "When Percy rolls a 2 or lower on the d20 when making an attack with Animus\
    \ or Bad News, the attack misses and he can't use the weapon again until he spends\
    \ an action to repair it. On a misfire with Animus, he takes 7 (2d6) psychic\
    \ damage."
  "name": "Misfire"
- "desc": "Percy's weapon attacks score a critical hit on a roll of 19-20."
  "name": "No Mercy"
- "desc": "Percy's ranged weapon attacks have a +2 bonus to hit (included in attacks),\
    \ ignore half cover and three-quarters cover, and have no range penalty. Additionally,\
    \ Percy can take a −5 penalty to any ranged attack roll to gain a +10 bonus to\
    \ the damage roll."
  "name": "Ranged Master"
- "desc": "Percy wears a [ring of lightning resistance](3-Mechanics/CLI/items/ring-of-lightning-resistance-xdmg.md)\
    \ and [Cabal's Ruin](3-Mechanics/CLI/items/cabals-ruin-exalted-tdcsr.md). He wields\
    \ Animus and Bad News, which are both +1 weapons."
  "name": "Special Equipment"
- "desc": "Percy adds his proficiency bonus to initiative rolls, giving him a +12\
    \ to initiative rolls."
  "name": "Quick Draw"
- "desc": "Percy has an additional 40 hit points."
  "name": "Toughness"
"actions":
- "desc": "Percy makes four ranged attacks with Animus, or two ranged attacks with\
    \ Bad News. When Percy hits with an attack with either weapon, he can choose one\
    \ of the following additional effects:\n\n- Deadeye. Percy gains advantage\
    \ on his next attack roll this turn made against the same target.  \n- Disarm.\
    \ The target must make a DC 20 Strength saving throw. On a failure, the target\
    \ drops one item it is holding of Percy's choice.  "
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +15 to hit, range 320 ft., one target. Hit:\
    \ 11 (1d10 + 6) piercing damage and 3 (1d6) psychic damage."
  "name": "Animus"
- "desc": "Ranged Weapon Attack: +15 to hit, range 800 ft., one target. Hit:\
    \ 19 (2d12 + 6) piercing damage."
  "name": "Bad News"
"reactions":
- "desc": "When Percy is targeted by an enemy's spell, he can absorb a portion of\
    \ the spell's energy into [Cabal's Ruin](3-Mechanics/CLI/items/cabals-ruin-exalted-tdcsr.md).\
    \ The spell affects him normally, but the cloak gains a number of charges equal\
    \ to the level of the spell. When he does so, he also gains resistance to one\
    \ type of damage dealt by the spell until the end of his next turn."
  "name": "Absorb Magic (Recharges after a Short or Long Rest)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/percival-de-rolo-tdcsr.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/gnome
statblock: inline
aliases: ["Pike Trickfoot"]
---
# [Pike Trickfoot](3-Mechanics\CLI\bestiary\npc/pike-trickfoot-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 269*  

## Vox Machina

Heroes. Scoundrels. Legends. Dumbasses. The legacy of the adventuring party Vox Machina is a complicated one. Over the course of their adventures, they've selflessly saved the lives of thousands of people in Tal'Dorei, "Wildemount", "Issylra", and beyond. Of course, there are also countless tales of individuals they've bullied, threatened, insulted, or otherwise needlessly antagonized throughout those same adventures. These legendary figures grew from a band of dime-a-dozen sellswords in the swamp burgh of "Stilben" to gods-blessed warriors whose actions might have saved all of Exandria from a future of undead tyranny.

The deeds of Vox Machina are sung by bards across Tal'Dorei, often exaggerating those already belief-defying tales of gods and monsters and magic. But though their legend has grown wild and unruly, the members of Vox Machina are still people. More than twenty years have passed since their last great campaign. Most of them are still alive, and the lives of these heroes have changed—in big ways and in smaller, more subtle ones.

Those among them who age have softer bodies and lines on their faces. Those among them who don't age still show the weight of the world upon their shoulders. By and large, the members of Vox Machina have set aside weapons, armor, and spells in favor of more subtle ways of helping others. Some lead the lands they were born to lead. Others have been elected to the "Tal'Dorei Council", shaping the fate of the continent's people with quiet wisdom rather than blades and battle cries.

Still, each member of this legendary band of adventurers would take up arms again in an instant if it meant protecting those they care for the most. And the [Vestiges of Divergence](vestiges-of-divergence-by-advancement-tdcsr.md), whose power they unlocked in the battles against the "Cinder King" and The Whispered One, are still within their grasp.

The following stat blocks are here for GMs to use if their players encounter a member of Vox Machina—hopefully as an ally or a "quest giver," for woe betide anyone who encounters these legendary heroes as a foe. These statistics don't represent the full extent of the characters' abilities as 20th-level adventurers, but have been streamlined to make them easier for the Game Master to run.

## Pike Trickfoot

This little gnome from the "Bramblewood" has been called many things—dragonslayer, savior of Exandria, champion of the Everlight, Monstah, and, more recently, Mom. But Pike doesn't care much what people call her, as long as it's said with love. Her soul befits the mantle of the Everlight well, as she exudes warmth, calm, and comfort. But all that cozy kindness shelters a fiery, rebellious spark that can shock strangers and inspire raucous cheers and peals of laughter from her friends.

### After the Epilogue

Pike ultimately returned [Scanlan Shorthalt's](scanlan-shorthalt-tdcsr.md) romantic interest after The Whispered One was defeated and Exandria saved once more. There was no denying that she loved him, and they settled down in "Westruun" and had two children within a year of one another, Juniper and Wilhand'ildan (Juni and Wax for short). When the kids went off to school (one to seminary, the other to "Westhall Academy in Westruun"), Pike and [Scanlan](scanlan-shorthalt-tdcsr.md) decided to call it quits, with sad smiles and promises to always be the best of friends. And they've since kept that promise, even as the two of them each sought new paths in life.

Missing her found family, Pike moved to "Whitestone" and built a temple to the Everlight in the city's Temple Ward. It's beautiful, small, and cozy—a true work of art down to the smallest details. Folk can find her there most days, tending to the gardens but always ready to lend a helping hand or a prayer. Many mornings, Pike swings by the "Slayer's Cake" to make sure the baked goods remain as tasty as their reputation demands. She'll grab some fresh pastries and coffee to go, and maybe drop off a delivery at Kiki's—that is, Keyleth's—house.

[Scanlan](scanlan-shorthalt-tdcsr.md) usually comes by "Whitestone" in the summer, his and Pike's favorite time of year. This is a time for simple pleasures—eating dinners with the kids and their [Auntie Kiki](keyleth-voice-of-the-tempest-tdcsr.md), [Auntie Vex](vexahlia-tdcsr.md), [Uncle Grog](grog-strongjaw-tdcsr.md), and [Uncle Percy](percival-de-rolo-tdcsr.md); playing music by the fire; hearing Wilhand'ildan and young Vax'ildan de Rolo joke in private about their names and their weird family; and reminiscing about times past. And sometimes, Pike and [Scanlan](scanlan-shorthalt-tdcsr.md) even wind up in bed together, though also, sometimes not. Though Pike's path has diverged from [Scanlan's](scanlan-shorthalt-tdcsr.md) in one way, their lives are never truly separated—a thing that could be said of everyone in Vox Machina.

```statblock
"name": "Pike Trickfoot (TDCSR)"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Unaligned"
"ac": !!int "23"
"ac_class": "[plate of the dawnmartyr](3-Mechanics/CLI/items/plate-of-the-dawnmartyr-exalted-tdcsr.md),\
  \ [shield](3-Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"stats":
- !!int "19"
- !!int "12"
- !!int "18"
- !!int "14"
- !!int "20"
- !!int "14"
"speed": "25 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "11"
"skillsaves":
  "Athletics": !!int "10"
  "Stealth": !!int "7"
  "Religion": !!int "8"
  "Perception": !!int "11"
  "Persuasion": !!int "8"
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 21"
"languages": "Common, Dwarvish, Gnomish, Undercommon"
"cr": "17"
"traits":
- "desc": "Pike is a 20th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 19, +11 to hit with spell attacks). She has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [light](3-Mechanics/CLI/spells/light-xphb.md),\
    \ [sacred flame](3-Mechanics/CLI/spells/sacred-flame-xphb.md) (4d8), [spare\
    \ the dying](3-Mechanics/CLI/spells/spare-the-dying-xphb.md), [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
    \n1st level (4 slots): [command](3-Mechanics/CLI/spells/command-xphb.md),\
    \ [cure wounds](3-Mechanics/CLI/spells/cure-wounds-xphb.md), [guiding bolt](3-Mechanics/CLI/spells/guiding-bolt-xphb.md),\
    \ [healing word](3-Mechanics/CLI/spells/healing-word-xphb.md), [sanctuary](3-Mechanics/CLI/spells/sanctuary-xphb.md),\
    \ [shield of faith](3-Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\n2nd level\
    \ (3 slots): [aid](3-Mechanics/CLI/spells/aid-xphb.md), [lesser restoration](3-Mechanics/CLI/spells/lesser-restoration-xphb.md),\
    \ [spiritual weapon](3-Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\n3rd\
    \ level (3 slots): [glyph of warding](3-Mechanics/CLI/spells/glyph-of-warding-xphb.md),\
    \ [mass healing word](3-Mechanics/CLI/spells/mass-healing-word-xphb.md), [protection\
    \ from energy](3-Mechanics/CLI/spells/protection-from-energy-xphb.md), [revivify](3-Mechanics/CLI/spells/revivify-xphb.md),\
    \ [speak with dead](3-Mechanics/CLI/spells/speak-with-dead-xphb.md)\n\n4th level\
    \ (3 slots): [death ward](3-Mechanics/CLI/spells/death-ward-xphb.md), [freedom\
    \ of movement](3-Mechanics/CLI/spells/freedom-of-movement-xphb.md), [guardian\
    \ of faith](3-Mechanics/CLI/spells/guardian-of-faith-xphb.md)\n\n5th level (3\
    \ slots): [flame strike](3-Mechanics/CLI/spells/flame-strike-xphb.md), [greater\
    \ restoration](3-Mechanics/CLI/spells/greater-restoration-xphb.md), [hallow](3-Mechanics/CLI/spells/hallow-xphb.md),\
    \ [mass cure wounds](3-Mechanics/CLI/spells/mass-cure-wounds-xphb.md), [scrying](3-Mechanics/CLI/spells/scrying-xphb.md)\n\
    \n6th level (2 slots): [heal](3-Mechanics/CLI/spells/heal-xphb.md), [heroes'\
    \ feast](3-Mechanics/CLI/spells/heroes-feast-xphb.md), [planar ally](3-Mechanics/CLI/spells/planar-ally-xphb.md)\n\
    \n7th level (2 slots): [resurrection](3-Mechanics/CLI/spells/resurrection-xphb.md)\n\
    \n8th level (1 slots): [holy aura](3-Mechanics/CLI/spells/holy-aura-xphb.md)\n\
    \n9th level (1 slots): [mass heal](3-Mechanics/CLI/spells/mass-heal-xphb.md)"
  "name": "Spellcasting"
- "desc": "Pike has advantage on Intelligence, Wisdom, and Charisma saving throws\
    \ against magic."
  "name": "Gnome Cunning"
- "desc": "Pike wields a [mace of disruption](3-Mechanics/CLI/items/mace-of-disruption-xdmg.md)\
    \ and wears [gauntlets of ogre power](3-Mechanics/CLI/items/gauntlets-of-ogre-power-xdmg.md),\
    \ [boots of speed](3-Mechanics/CLI/items/boots-of-speed-xdmg.md), and the [Plate\
    \ of the Dawnmartyr](3-Mechanics/CLI/items/plate-of-the-dawnmartyr-exalted-tdcsr.md)."
  "name": "Special Equipment"
- "desc": "When Pike is reduced to 0 hit points while wearing the [Plate of the Dawnmartyr](3-Mechanics/CLI/items/plate-of-the-dawnmartyr-exalted-tdcsr.md),\
    \ she can choose to have a blast of healing flame surround her. She regains 1\
    \ hit point and is lifted to her feet. Each enemy within 10 feet of her takes\
    \ 7 (2d6) fire damage or radiant damage (her choice)."
  "name": "Dawnmartyr's Grace (1/Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 17\
    \ (3d8 + 4) bludgeoning damage, plus an extra 7 (2d6) radiant damage if the\
    \ target is a fiend or an undead. If the target has 25 hit points or fewer after\
    \ taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed.\
    \ On a successful save, the creature becomes [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ of Pike until the end of her next turn."
  "name": "Mace of Disruption"
- "desc": "Ranged Spell Attack: +11 to hit, range 120 ft., one target. Hit:\
    \ 28 (8d6) radiant damage, and the next attack roll made against the target\
    \ before the end of Pike's next turn has advantage."
  "name": "Guiding Bolt (5th Level)"
"bonus_actions":
- "desc": "If Pike uses the [Attack](3-Mechanics/CLI/rules/actions.md#Attack) action,\
    \ she can make one weapon attack as a bonus action."
  "name": "Battle Priest (5/Long Rest)"
- "desc": "Pike casts [healing word](3-Mechanics/CLI/spells/healing-word-xphb.md),\
    \ restoring 16 (4d4 + 6) hit points to herself or another creature she can see\
    \ within 60 feet of her."
  "name": "[Healing Word](3-Mechanics/CLI/spells/healing-word-xphb.md) (4th Level)"
"reactions":
- "desc": "When a creature within 5 feet of Pike hits her with a melee attack, she\
    \ can deal 7 (2d6) fire or radiant damage to it (her choice)."
  "name": "Dawnmartyr's Rebuke"
- "desc": "When Pike or a creature she can see within 30 feet of her makes an attack\
    \ roll, she can grant a +10 bonus to the roll. She can grant this bonus after\
    \ the roll is made but before it hits or misses."
  "name": "Everlight's Guidance (3/Short Rest)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/npc/token/pike-trickfoot-tdcsr.webp"
```
^statblock
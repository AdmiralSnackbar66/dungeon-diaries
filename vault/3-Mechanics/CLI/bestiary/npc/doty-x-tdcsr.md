---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Doty X"]
---
# [Doty X](3-Mechanics\CLI\bestiary\npc/doty-x-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 272*  

## Vox Machina

Heroes. Scoundrels. Legends. Dumbasses. The legacy of the adventuring party Vox Machina is a complicated one. Over the course of their adventures, they've selflessly saved the lives of thousands of people in Tal'Dorei, "Wildemount", "Issylra", and beyond. Of course, there are also countless tales of individuals they've bullied, threatened, insulted, or otherwise needlessly antagonized throughout those same adventures. These legendary figures grew from a band of dime-a-dozen sellswords in the swamp burgh of "Stilben" to gods-blessed warriors whose actions might have saved all of Exandria from a future of undead tyranny.

The deeds of Vox Machina are sung by bards across Tal'Dorei, often exaggerating those already belief-defying tales of gods and monsters and magic. But though their legend has grown wild and unruly, the members of Vox Machina are still people. More than twenty years have passed since their last great campaign. Most of them are still alive, and the lives of these heroes have changed—in big ways and in smaller, more subtle ones.

Those among them who age have softer bodies and lines on their faces. Those among them who don't age still show the weight of the world upon their shoulders. By and large, the members of Vox Machina have set aside weapons, armor, and spells in favor of more subtle ways of helping others. Some lead the lands they were born to lead. Others have been elected to the "Tal'Dorei Council", shaping the fate of the continent's people with quiet wisdom rather than blades and battle cries.

Still, each member of this legendary band of adventurers would take up arms again in an instant if it meant protecting those they care for the most. And the [Vestiges of Divergence](3-Mechanics/CLI/tables/vestiges-of-divergence-by-advancement-tdcsr.md), whose power they unlocked in the battles against the "Cinder King" and The Whispered One, are still within their grasp.

The following stat blocks are here for GMs to use if their players encounter a member of Vox Machina—hopefully as an ally or a "quest giver," for woe betide anyone who encounters these legendary heroes as a foe. These statistics don't represent the full extent of the characters' abilities as 20th-level adventurers, but have been streamlined to make them easier for the Game Master to run.

## Taryon Darrington

Gleaming, resplendent, and overflowing with indefatigable confidence, Taryon Gary Darrington is every bit the man he was when he parted ways with Vox Machina over twenty years ago. These days, though, all the bravado and good cheer he had two decades ago is real—not just an act. Tary doesn't need to fake it anymore; he's made it. Even if responsibility doesn't come easily to him, he takes it whenever he has to.

### After the Epilogue

After many years running the Darrington Brigade—his heroic adventuring band—and publishing several absolutely true accounts of their exploits, Taryon realized his adventuring checklist was essentially complete. He left his home in Deastok, in "Wildemount's" Dwendalian Empire, and began a new chapter of his life. Leaving the brigade in the capable hands of his sister, Maryanne, and his confidant Lionel Gayheart, Taryon traveled around launching several smaller "satellite" brigades in "Wildemount's" most dangerous lands.

Then, realizing he had spent his career as a writer of nonfiction adventure books, he decided to try his hand at fiction instead. With his trusty scribe and majordomo [Doty X](3-Mechanics/CLI/bestiary/npc/doty-x-tdcsr.md) at his side ("Doty Ten," he patiently explains to anyone who mispronounces it), Taryon and his husband Lawrence moved to the Menagerie Coast, setting up in a small writing cottage in Port Damali. While Lawrence tutors local students, Taryon has been dashing off novel after novel. His most successful books are a series called "The Deastok Mysteries," which feature a young, handsome blonde boy who solves crimes around "Wildemount" with his brilliant intellect and trusty robot sidekick.

From time to time, Taryon charters a [skyship](3-Mechanics/CLI/items/skyship-tdcsr.md) to visit his old friends in "Whitestone" and enjoy the memories of their time together as full-fledged members of Vox Machina.

### The Automatic Scribe, Doty

Doty X is much like past models of Tary's mechanical servant—vaguely humanoid but not too expressive. The new model is sleek and stylish, and not built for battle. Doty's vocabulary has grown to six words: "Tary," "Yes," "Correct," "Absolutely," "Soon," and "Handsome." The scribe also features a built-in shelf of Taryon's favorite books—that is, his favorite books that he's written himself—in case Taryon needs to make a sale while he's on holiday.

```statblock
"name": "Doty X (TDCSR)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "9d8 + 18 + 20"
"stats":
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "8"
"damage_immunities": "poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands the languages that [Tary](3-Mechanics/CLI/bestiary/humanoid/taryon-darrington-tdcsr.md)\
  \ speaks"
"cr": "6"
"traits":
- "desc": "When Doty hits a target, [Tary](3-Mechanics/CLI/bestiary/humanoid/taryon-darrington-tdcsr.md)\
    \ can channel magical energy to deal an extra 14 (4d6) force damage to the target\
    \ as long as [Tary](3-Mechanics/CLI/bestiary/humanoid/taryon-darrington-tdcsr.md)\
    \ is not [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Arcane Surge (4/Day)"
- "desc": "Doty has an additional 20 hit points, and has a +2 modifier to saving throws,\
    \ ability checks using skill proficiencies, and attack rolls."
  "name": "Dedicated Servant"
- "desc": "Doty can say the following words in Common: \"Tary,\" \"Yes,\" \"Correct,\"\
    \ \"Absolutely,\" \"Soon,\" and \"Handsome.\""
  "name": "Limited Vocabulary"
- "desc": "Doty can't be surprised."
  "name": "Vigilant"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) force damage."
  "name": "Empowered Fist"
- "desc": "Doty regains 15 (2d8 + 6) hit points."
  "name": "Repair (3/Day)"
"reactions":
- "desc": "If a creature within 5 feet of Doty that he can see makes an attack against\
    \ a creature other than Doty, he can impose disadvantage on the attack roll. The\
    \ attacker then takes 6 (1d4 + 4) force damage."
  "name": "Deflect"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/npc/token/doty-x-tdcsr.webp"
```
^statblock
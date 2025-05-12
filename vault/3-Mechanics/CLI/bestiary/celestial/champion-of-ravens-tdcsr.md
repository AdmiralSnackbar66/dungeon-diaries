---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Champion of Ravens"]
---
# [Champion of Ravens](3-Mechanics\CLI\bestiary\celestial/champion-of-ravens-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 275*  

## Vox Machina

Heroes. Scoundrels. Legends. Dumbasses. The legacy of the adventuring party Vox Machina is a complicated one. Over the course of their adventures, they've selflessly saved the lives of thousands of people in Tal'Dorei, "Wildemount", "Issylra", and beyond. Of course, there are also countless tales of individuals they've bullied, threatened, insulted, or otherwise needlessly antagonized throughout those same adventures. These legendary figures grew from a band of dime-a-dozen sellswords in the swamp burgh of "Stilben" to gods-blessed warriors whose actions might have saved all of Exandria from a future of undead tyranny.

The deeds of Vox Machina are sung by bards across Tal'Dorei, often exaggerating those already belief-defying tales of gods and monsters and magic. But though their legend has grown wild and unruly, the members of Vox Machina are still people. More than twenty years have passed since their last great campaign. Most of them are still alive, and the lives of these heroes have changed—in big ways and in smaller, more subtle ones.

Those among them who age have softer bodies and lines on their faces. Those among them who don't age still show the weight of the world upon their shoulders. By and large, the members of Vox Machina have set aside weapons, armor, and spells in favor of more subtle ways of helping others. Some lead the lands they were born to lead. Others have been elected to the "Tal'Dorei Council", shaping the fate of the continent's people with quiet wisdom rather than blades and battle cries.

Still, each member of this legendary band of adventurers would take up arms again in an instant if it meant protecting those they care for the most. And the [Vestiges of Divergence](3-Mechanics/CLI/tables/vestiges-of-divergence-by-advancement-tdcsr.md), whose power they unlocked in the battles against the "Cinder King" and The Whispered One, are still within their grasp.

The following stat blocks are here for GMs to use if their players encounter a member of Vox Machina—hopefully as an ally or a "quest giver," for woe betide anyone who encounters these legendary heroes as a foe. These statistics don't represent the full extent of the characters' abilities as 20th-level adventurers, but have been streamlined to make them easier for the Game Master to run.

## Champion of Ravens

Death comes for all things in their time. It is the will of the Matron of Ravens that no being, no matter how heroic or how powerful, shall escape their rightful place in the hereafter. Yet when his sister [Vex'ahlia](3-Mechanics/CLI/bestiary/humanoid/vexahlia-tdcsr.md) died in a sunken "Issylran" tomb, Vax'ildan demanded that the goddess of death release her claim on [Vex'ahlia's](3-Mechanics/CLI/bestiary/humanoid/vexahlia-tdcsr.md) soul—and claim his instead.

Inscrutably, the Matron of Ravens acquiesced to Vax'ildan's demand. He donned the [Deathwalker's Ward](3-Mechanics/CLI/items/deathwalkers-ward-tdcsr.md), a "Vestige of Divergence" imbued with the Matron of Ravens' power, and the legendary armor of her previous mortal champion. In time, Vax'ildan too came to be called her champion, and returned to life from death more than once—even enduring utter annihilation by The Whispered One and strangulation by an Archfey. All these deaths were permissible for the Matron of Ravens' champion, since the threads of fate that bound Vax'ildan to her service had not yet run their full course. But they inevitably did.

Vax'ildan bade farewell to all the people he held most dear in the wake of The Whispered One's defeat, and vanished into the eternal embrace of his god. In the years since, his returns to the world he once knew have been rare and fleeting. The Champion of Ravens is not Vax'ildan, though Vax resides within him. He is a loyal arbiter of the ineffable providence of death itself. He appears at times as a wrathful angel, masked and surrounded by a storm of raven feathers, bringing an end to those who would pervert the sanctity of oblivion out of greed or fear of the unknown.

All fear the end, in their own way. Some fight it, delving into magic that delays the inevitable by making a mockery of both life and death. Others lash out, hurting people around them in smaller ways. But those whose fears are greatest are met by the Champion of Ravens, whose kind soul soothes and shepherds the fearful beyond the veil of the mortal world.

```statblock
"name": "Champion of Ravens (TDCSR)"
"size": "Medium"
"type": "celestial"
"alignment": "Unaligned"
"ac": !!int "20"
"ac_class": "[deathwalker's ward](3-Mechanics/CLI/items/deathwalkers-ward-exalted-tdcsr.md)"
"hp": !!int "150"
"hit_dice": "20d10 + 40"
"stats":
- !!int "14"
- !!int "20"
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "17"
"speed": "30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "15"
  "Wisdom": !!int "5"
  "Intelligence": !!int "13"
  "Strength": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "10"
  "Sleight of Hand": !!int "12"
  "Stealth": !!int "19"
  "Investigation": !!int "10"
  "Perception": !!int "16"
  "Acrobatics": !!int "19"
  "Persuasion": !!int "10"
"damage_resistances": "radiant; necrotic; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 26"
"languages": "Abyssal, Celestial, Common, Druidic, Elvish, Thieves' cant"
"cr": "21"
"traits":
- "desc": "The Champion's innate spellcasting ability is Charisma (+10 to hit with\
    \ spell attacks, save DC 18). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [bane](3-Mechanics/CLI/spells/bane-xphb.md),\
    \ [bless](3-Mechanics/CLI/spells/bless-xphb.md), [druidcraft](3-Mechanics/CLI/spells/druidcraft-xphb.md)\n\
    \n1/day: [greater invisibility](3-Mechanics/CLI/spells/greater-invisibility-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "During his first turn, the Champion has advantage on attack rolls against\
    \ any creature that hasn't taken a turn. Any hit the Champion scores against a\
    \ surprised creature is a critical hit."
  "name": "Assassinate"
- "desc": "While the Champion is conscious, he and friendly creatures within 10 feet\
    \ of him have a +3 bonus to saving throws (included above)."
  "name": "Aura of Protection"
- "desc": "When the Champion is reduced to 0 hit points or dies, his body is destroyed\
    \ but his spirit returns to the Raven Queen's side, and he gains a new body after\
    \ 1d4 days."
  "name": "Eternal Champion"
- "desc": "If the Champion is subjected to an effect that allows him to make a Dexterity\
    \ saving throw to take only half damage, he instead takes no damage if he succeeds\
    \ on the saving throw, and only half damage if he fails."
  "name": "Evasion"
- "desc": "When the Champion makes an attack roll, ability check, or saving throw,\
    \ he can reroll the d20 and use either roll. Alternatively, when a creature\
    \ the Champion can see makes an attack roll against him, or a saving throw against\
    \ one of his spells or features, he can force that creature to reroll the attack\
    \ or save and use the new roll."
  "name": "Fate-Touched (4/Day)"
- "desc": "The Champion deals an extra 49 (14d6) radiant or necrotic damage (his\
    \ choice) when he hits a target with a weapon attack and he doesn't have disadvantage\
    \ on the attack roll."
  "name": "Shadow Smite (1/Turn)"
- "desc": "The Champion's ranged weapon attacks ignore half cover and three-quarters\
    \ cover and have no range penalty."
  "name": "Unerring Sight"
- "desc": "The Champion wears [boots of haste](3-Mechanics/CLI/items/boots-of-haste-tdcsr.md)\
    \ and the [Deathwalker's Ward](3-Mechanics/CLI/items/deathwalkers-ward-exalted-tdcsr.md),\
    \ and wields [Whisper](3-Mechanics/CLI/items/whisper-exalted-tdcsr.md)."
  "name": "Special Equipment"
"actions":
- "desc": "The Champion makes three attacks with [Whisper](3-Mechanics/CLI/items/whisper-exalted-tdcsr.md)."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +15 to hit, reach 5 ft. or range 60\
    \ ft., one target. Hit: 10 (1d4 + 8) piercing damage plus 4 (1d8) psychic\
    \ damage. On a critical hit, the target must succeed on a DC 18 Wisdom saving\
    \ throw or be [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened) of\
    \ the Champion for 1 minute. On a ranged attack, the Champion can teleport with\
    \ [Whisper](3-Mechanics/CLI/items/whisper-exalted-tdcsr.md), appearing within\
    \ 5 feet of the target on a hit, or in a random space within 30 feet of the target\
    \ on a miss."
  "name": "Whisper"
- "desc": "The Champion touches a creature within 5 feet of him, and chooses to either\
    \ heal or harm that creature, restoring 55 (10d10) hit points or dealing 55\
    \ (10d10) necrotic damage. If the creature is an unwilling target, it can avoid\
    \ either effect with a successful DC 20 Dexterity saving throw."
  "name": "Touch of Life and Death (Recharges after a Short or Long Rest)"
"bonus_actions":
- "desc": "The Champion takes the [Dash](3-Mechanics/CLI/rules/actions.md#Dash), [Disengage](3-Mechanics/CLI/rules/actions.md#Disengage),\
    \ or [Hide](3-Mechanics/CLI/rules/actions.md#Hide) action."
  "name": "Cunning Action"
- "desc": "The Champion clicks his heels together, casting [haste](3-Mechanics/CLI/spells/haste-xphb.md)\
    \ on himself. He doesn't suffer from lethargy when the spell ends."
  "name": "Boots of Haste (1/Day)"
"reactions":
- "desc": "The Champion halves the damage that he takes from an attack that hits him.\
    \ He must be able to see the attacker."
  "name": "Uncanny Dodge"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/celestial/token/champion-of-ravens-tdcsr.webp"
```
^statblock
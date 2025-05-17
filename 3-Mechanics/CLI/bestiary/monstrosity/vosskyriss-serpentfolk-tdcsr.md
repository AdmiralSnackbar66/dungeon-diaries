---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Vos'skyriss Serpentfolk"]
---
# [Vos'skyriss Serpentfolk](3-Mechanics\CLI\bestiary\monstrosity/vosskyriss-serpentfolk-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 258*  

The Vos'skyriss serpentfolk are the people of an ancient elite empire of humanoid-snake hybrids, who seek the ultimate detachment that comes from destroying all of reality.

## Constricted Origins

Once a realm of humanoids who worshiped serpents, the ancient Vos'skyriss Empire was among the richest in the world. Its people obsessively imitated snakes—their flexibility, their emotionless patience, their willingness to survive at any costs (even cannibalizing their own kind), and their cold detachment. With the help of profane magics, most of the Vos'skyriss shed the useless skin of their humanity to become like the Betrayer God known as the Cloaked Serpent. Those who couldn't evolve became food for those who did.

Seers of the Vos'skyriss foresaw the "Calamity", and the empire created an arcane stasis field under their capital city of Vos'skyriss to survive. This site stands off the western coast of Tal'Dorei and is now known as "Visa Isle". Only the strongest were allowed to seek refuge in the capital, and decades of carefully tracked tournaments determined who was fit for survival.

## Ophidian Society

Serpentfolk occupy remote temples in jungles, swamps, and deserts. Their society enforces strict discipline and a hierarchy that rewards those closest to snakes in mind and body. Serpentfolk transfigured into massive snakes with humanoid arms are held in the highest esteem.

Despite their god's moniker, the Vos'skyriss serpentfolk outlaw hoods so that outsiders in their realm are easily recognizable.

## Narcissistic Worship

Most serpentfolk have little love for the Cloaked Serpent, though they pay him homage as the deity of poisons, assassins, and darkness. For the Vos'skyriss serpentfolk, worship is a means to an end. Their legends say that the devout will be granted the ability to devour nightmares, enabling them to gorge themselves on dreams of fear and terror until they grow so large that they can turn on their god and swallow the Cloaked Serpent himself. Once begun, this feast is unending—they will devour the remaining gods one by one, and finally, the entirety of the multiverse.

## Vos'skyriss Rising

Several decades ago, Jorlund Vohr, professor of archaeology at the "Alabaster Lyceum", led an expedition to the ruins upon "Visa Isle"—and found them prowled by the restless spirits of the serpent empire. Their incursion unleashed these entombed spirits, and awakened hundreds of their living kin from magical stasis. Now, living and undead serpentfolk plot together to rekindle the embers of their long-lost empire.

## Alignment

Neutral evil.

```statblock
"name": "Vos'skyriss Serpentfolk (TDCSR)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "16"
- !!int "15"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "14"
"speed": "40 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic"
"cr": "3"
"traits":
- "desc": "The serpentfolk's innate spellcasting ability is Charisma (spell save DC\
    \ 12). It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [animal friendship](3-Mechanics/CLI/spells/animal-friendship-xphb.md),\
    \ [speak with animals](3-Mechanics/CLI/spells/speak-with-animals-xphb.md) (snakes\
    \ only)\n\n1/day: [pass without trace](3-Mechanics/CLI/spells/pass-without-trace-xphb.md)\n\
    \n2/day each: [sleep](3-Mechanics/CLI/spells/sleep-xphb.md), [suggestion](3-Mechanics/CLI/spells/suggestion-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "The serpentfolk can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "The serpentfolk makes two scimitar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6\
    \ (1d6 + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7\
    \ (1d8 + 3) bludgeoning damage, and the target is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 13). Until this <span title=\"Player's Handbook\">grapple</span>\
    \ ends, the creature is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained),\
    \ and the serpentfolk can't constrict another target."
  "name": "Constrict"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/monstrosity/token/vosskyriss-serpentfolk-tdcsr.webp"
```
^statblock

## Environment

coastal, desert, forest, swamp
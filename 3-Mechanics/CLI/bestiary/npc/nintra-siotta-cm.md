---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Nintra Siotta"]
---
# [Nintra Siotta](3-Mechanics\CLI\bestiary\npc/nintra-siotta-cm.md)
*Source: Candlekeep Mysteries p. 197*  

Nintra Siotta, a chaotic evil archfey who was exiled from the Gloaming Court by the Queen of Air and Darkness long ago, is known in Faerûn by three titles: Princess of the Shadow Glass, Lady of Dread Omens, and Seeker of the Three Crowns. She appears as a 9-foot-tall humanoid made of smoky gray glass, wrapped in a cloak-like darkness that appears to devour the light.

Nintra's eyes burn with green fire, and she speaks in a high, musical voice. Deception comes naturally to her, but imprisonment in *The Scrivener's Tale*has made her impatient and prone to telepathic outbursts that betray her cruel nature.

```statblock
"name": "Nintra Siotta (CM)"
"size": "Large"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "306"
"hit_dice": "36d10 + 108"
"stats":
- !!int "16"
- !!int "24"
- !!int "16"
- !!int "17"
- !!int "15"
- !!int "24"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "12"
  "Wisdom": !!int "7"
  "Strength": !!int "8"
"skillsaves":
  "Deception": !!int "12"
  "Insight": !!int "7"
  "Perception": !!int "7"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [stunned](/3-Mechanics/CLI/conditions.md#Stunned)"
"senses": "truesight 60 ft., passive Perception 17"
"languages": "Common, Elvish, Sylvan"
"cr": "16"
"traits":
- "desc": "Nintra casts one of the following spells, using Charisma as the spellcasting\
    \ ability (save DC 20) and requiring no material components:\n\n3/day each:\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md), [faerie fire](/3-Mechanics/CLI/spells/faerie-fire-xphb.md),\
    \ [mirror image](/3-Mechanics/CLI/spells/mirror-image-xphb.md)"
  "name": "Spellcasting"
- "desc": "If Nintra fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Nintra makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 12 (2d4\
    \ + 7) piercing damage."
  "name": "Claw"
- "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 10\
    \ (1d6 + 7) necrotic damage, and if the target is a creature, it must succeed\
    \ on a DC 20 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)\
    \ until the end of its next turn."
  "name": "Shard of Shadow"
- "desc": "Nintra targets a point she can see within 60 feet of her and creates a\
    \ 20-foot-radius sphere of swirling glass shards centered on that point. Each\
    \ creature in the sphere must make a DC 20 Dexterity saving throw, taking 28 (8d6)\
    \ slashing damage on a failed save, or half as much damage on a successful save.\
    \ If Nintra is in the sphere, the shards deal no damage to her."
  "name": "Storm of Shattered Glass (Recharge 6)"
"legendary_actions":
- "desc": "Nintra makes one attack."
  "name": "Attack"
- "desc": "Nintra teleports to an unoccupied space she can see within 30 feet of her."
  "name": "Fey Step"
- "desc": "Provided she is in bright or dim light, Nintra causes her shadow to attack\
    \ a creature within 10 feet of her. Her shadow makes two claw attacks, each attack\
    \ identical to Nintra's claw attack except that it deals psychic damage instead\
    \ of piercing damage."
  "name": "Shadow Strikes (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties) Nintra can take a lair\
    \ action to cause one of the following effects; she can't use the same effect\
    \ two rounds in a row:"
  "name": ""
- "desc": "- Nintra targets one pane of shadow glass in her lair, causing it to explode\
    \ into shards. Each creature within 20 feet of the exploding pane must make a\
    \ DC 18 Dexterity saving throw, taking 13 (3d8) piercing damage on a failed save,\
    \ or half as much damage on a successful one. The shards fade away to vapor and\
    \ the pane is restored to normal at the next initiative count 20.  \n- Nintra\
    \ targets one pane of shadow glass in her lair, briefly transforming it into a\
    \ swirling vortex. One creature of her choice within 20 feet of the pane must\
    \ succeed on a DC 20 Strength saving throw or be drawn into the vortex, taking\
    \ 11 (2d10) necrotic damage. The creature is then teleported to an unoccupied\
    \ space within 5 feet of another pane of shadow glass in Nintra's lair (determined\
    \ randomly).  "
  "name": ""
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/nintra-siotta-cm.webp"
```
^statblock
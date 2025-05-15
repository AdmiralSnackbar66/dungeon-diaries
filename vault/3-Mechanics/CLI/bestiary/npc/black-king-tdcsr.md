---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Black King"]
---
# [Black King](3-Mechanics\CLI\bestiary\npc/black-king-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 92*  

Palest Westruun was not a king, but his new statue in the Opal Ward is often called the [Black King](black-king-tdcsr.md), a subtle jab at the city's previous "Black King," the tyrannical dragon Umbrasyl. The high priest of the First Bastion blessed both the [Black King](black-king-tdcsr.md) and "Westruun" itself when the statue was unveiled on the anniversary of "Westruun's" reclamation, saying, "May the Lawbearer grant us all strength of spirit when chaos next threatens our peaceful civilization. When that time comes, may the [Black King](black-king-tdcsr.md) unsheathe his sword to rally our people and lead "Westruun" to victory."

When the safety of all of "Westruun" is threatened, the [Black King](black-king-tdcsr.md) will animate and defend its people, becoming a [stone golem with a speed of 60 feet, Charisma and Intelligence scores of 18 (+4), and the ability to speak Common](black-king-tdcsr.md). Its personality is dour but determined—regal and single-minded in its desire to protect its city and its people.

> [!note]
> See "The Black King" for more information on this NPC.

---

Stone golems display great variety in shape and form, cut and chiseled from stone to appear as tall, impressive statues. Though most bear humanoid features, stone golems can be carved in any form the sculptor can imagine. Ancient stone golems found in sealed tombs or flanking the gates of lost cities sometimes take the forms of giant beasts.

Like other golems, stone golems are nearly impervious to spells and ordinary weapons. Creatures that fight a stone golem can feel the ebb and flow of time slow down around them, almost as though they were made of stone themselves.

## Golems

Golems are made from humble materials-clay, flesh and bones, iron, or stone-but they possess astonishing power and durability. A golem has no ambitions, needs no sustenance, feels no pain, and knows no remorse. An unstoppable juggernaut, it exists to follow its creator's orders, and it protects or attacks as that creator demands.

To create a golem, one requires a [manual of golems](manual-of-golems-xdmg.md). The comprehensive illustrations and instructions in a manual detail the process for creating a golem of a particular type.

### Elemental Spirit in Material Form

The construction of a golem begins with the building of its body, requiring great command of the craft of sculpting, stonecutting, ironworking, or surgery. Sometimes a golem's creator is the master of the art, but often the individual who desires a golem must enlist master artisans to do the work.

After constructing the body from clay, flesh, iron, or stone, the golem's creator infuses it with a spirit from the Elemental Plane of Earth. This tiny spark of life has no memory, personality, or history. It is simply the impetus to move and obey. This process binds the spirit to the artificial body and subjects it to the will of the golem's creator.

A golem can be created with a special amulet or other item that allows the possessor of the item to control the golem. Golems whose creators are long dead can thus be harnessed to serve a new master.

A golem can't think or act for itself. Though it understands its commands perfectly, it has no grasp of language beyond that understanding, and can't be reasoned with or tricked with words.

### Ageless Guardians

Golems can guard sacred sites, tombs, and treasure vaults long after the deaths of their creators, carrying out their appointed tasks for all eternity while brushing off physical damage and ignoring all but the most potent spells.

### Blind Obedience

When its creator or possessor is on hand to command it, a golem performs flawlessly. If the golem is left without instructions or is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated), it continues to follow its last orders to the best of its ability. When it can't fulfill its orders, a golem might react violently-or stand and do nothing. A golem that has been given conflicting orders sometimes alternates between them.

### Constructed Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Black King (TDCSR)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "22"
- !!int "9"
- !!int "20"
- !!int "18"
- !!int "11"
- !!int "18"
"speed": "60 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Common"
"cr": "10"
"traits":
- "desc": "The Black King is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The Black King has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The Black King's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The Black King makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19\
    \ (3d8 + 6) bludgeoning damage."
  "name": "Slam"
- "desc": "The Black King targets one or more creatures it can see within 10 feet\
    \ of it. Each target must make a DC 17 Wisdom saving throw against this magic.\
    \ On a failed save, a target can't use reactions, its speed is halved, and it\
    \ can't make more than one attack on its turn. In addition, the target can take\
    \ either an action or a bonus action on its turn, not both. These effects last\
    \ for 1 minute. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Slow (Recharge 5-6)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/npc/token/black-king-tdcsr.webp"
```
^statblock
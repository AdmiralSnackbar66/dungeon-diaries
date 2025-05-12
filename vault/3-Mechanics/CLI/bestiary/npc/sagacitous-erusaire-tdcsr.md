---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Sagacitous Erusaire"]
---
# [Sagacitous Erusaire](3-Mechanics\CLI\bestiary\npc/sagacitous-erusaire-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 122*  

In ancient times, the Mirescar was called the Heartwood. It was the domain of a wise and kindly [guardian naga](3-Mechanics/CLI/bestiary/celestial/guardian-naga-xmm.md) named [Sagacitous Erusaire](3-Mechanics/CLI/bestiary/npc/sagacitous-erusaire-tdcsr.md), who welcomed all with good hearts to share their bounty or receive alms. However, this [naga](3-Mechanics/CLI/bestiary/npc/sagacitous-erusaire-tdcsr.md) has been corrupted into a cruel shadow of his former self. He and his [diseased grick](3-Mechanics/CLI/bestiary/monstrosity/diseased-grick-tdcsr.md) minions have been twisted into hideous, pus-oozing spreaders of disease—and spreading it is now the only thought in their minds. The [naga](3-Mechanics/CLI/bestiary/npc/sagacitous-erusaire-tdcsr.md) can cast [contagion](3-Mechanics/CLI/spells/contagion-xphb.md) at will, and his [diseased grick](3-Mechanics/CLI/bestiary/monstrosity/diseased-grick-tdcsr.md) minions can do so once per day. Is it possible to save the mind of this corrupted guardian?

> [!note]
> See "A Sickness Spreads" for more information on this NPC.

---

Wise and good, the beautiful guardian nagas protect sacred places and items of magical power from falling into evil hands. In their hidden redoubts, they research spells and hatch convoluted plots to thwart the evil designs of their enemies.

A guardian naga doesn't seek out violence, warning off intruders rather than attacking. Only if its foes persist does the naga attack, accosting enemies with its spells and poisonous spittle.

## Nagas

Nagas are intelligent serpents that inhabit the ruins of the past, amassing arcane treasures and knowledge.

The first nagas were created as immortal guardians by a humanoid race long lost to history. When this race died out, the nagas deemed themselves the rightful inheritors of their masters' treasures and magical lore. Industrious and driven, nagas occasionally venture out from their lairs to track down magic items or rare spellbooks.

Nagas never feel the ravages of time or succumb to sickness. Even if it is struck down, a naga's immortal spirit reforms in a new body in a matter of days, ready to continue its eternal work.

### Benevolent Dictators and Brutal Tyrants

A naga rules its domain with absolute authority. Whether it rules with compassion or by terrorizing its subjects, the naga believes itself the master of all other creatures that inhabit its domain.

### Rivalry

Nagas have a long-standing enmity with the yuan-ti, with each race seeing itself as the epitome of serpentine evolution. Though cooperation between them is rare, nagas and yuan-ti sometimes set aside their differences to work toward common objectives. However, yuan-ti always chafe under a naga's authority.

### Immortal Nature

A naga doesn't require air, food, drink, or sleep.

```statblock
"name": "Sagacitous Erusaire (TDCSR)"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "19"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "18"
"speed": "40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Celestial, Common"
"cr": "10"
"traits":
- "desc": "Sagacitous Erusaire's spellcasting ability is Wisdom (spell save DC 16\
    \ +8 to hit with spell attacks). He can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [contagion](3-Mechanics/CLI/spells/contagion-xphb.md)"
  "name": "Innate Spellcasting"
- "desc": "Sagacitous Erusaire is an 11th-level spellcaster. Its spellcasting ability\
    \ is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only\
    \ verbal components to cast its spells. It has the following cleric spells prepared:\n\
    \nCantrips (at will): [mending](3-Mechanics/CLI/spells/mending-xphb.md), [sacred\
    \ flame](3-Mechanics/CLI/spells/sacred-flame-xphb.md), [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
    \n1st level (4 slots): [command](3-Mechanics/CLI/spells/command-xphb.md),\
    \ [cure wounds](3-Mechanics/CLI/spells/cure-wounds-xphb.md), [shield of faith](3-Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\
    \n2nd level (3 slots): [calm emotions](3-Mechanics/CLI/spells/calm-emotions-xphb.md),\
    \ [hold person](3-Mechanics/CLI/spells/hold-person-xphb.md)\n\n3rd level (3\
    \ slots): [bestow curse](3-Mechanics/CLI/spells/bestow-curse-xphb.md), [clairvoyance](3-Mechanics/CLI/spells/clairvoyance-xphb.md)\n\
    \n4th level (3 slots): [banishment](3-Mechanics/CLI/spells/banishment-xphb.md),\
    \ [freedom of movement](3-Mechanics/CLI/spells/freedom-of-movement-xphb.md)\n\n\
    5th level (2 slots): [flame strike](3-Mechanics/CLI/spells/flame-strike-xphb.md),\
    \ [geas](3-Mechanics/CLI/spells/geas-xphb.md)\n\n6th level (1 slots): [true\
    \ seeing](3-Mechanics/CLI/spells/true-seeing-xphb.md)"
  "name": "Spellcasting"
- "desc": "If it dies, Sagacitous Erusaire returns to life in 1d6 days and regains\
    \ all its hit points. Only a [wish](3-Mechanics/CLI/spells/wish-xphb.md) spell\
    \ can prevent this trait from functioning."
  "name": "Rejuvenation"
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit:\
    \ 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution\
    \ saving throw, taking 45 (10d8) poison damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit:\
    \ The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Spit Poison"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/npc/token/sagacitous-erusaire-tdcsr.webp"
```
^statblock
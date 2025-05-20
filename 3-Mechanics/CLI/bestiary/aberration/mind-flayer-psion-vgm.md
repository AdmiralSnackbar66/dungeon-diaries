---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/vgm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mind Flayer Psion
---
# [Mind Flayer Psion](3-Mechanics\CLI\bestiary\aberration/mind-flayer-psion-vgm.md)
*Source: Volo's Guide to Monsters p. 71*  

Mind flayers sometimes devote themselves to deeper study of psionic power, and many excel at using their innate psionic energy to duplicate the casting of spells.

## Mind Flayer

Mind flayers, also called illithids, are the scourge of sentient creatures across countless worlds. Psionic tyrants, slavers, and interdimensional voyagers, they are insidious masterminds that harvest entire races for their own twisted ends. Four tentacles snake from their octopus-like heads, flexing in hungry anticipation when sentient creatures come near.

In eons past, illithids controlled empires that spanned many worlds. They subjugated and consequently warped whole races of humanoid slaves, including the githyanki and githzerai, the grimlocks, and the kuo-toa. Conjoined by a collective consciousness, the illithids hatch plots as far-reaching and evil as their fathomless minds can conceive.

Since the fall of their empires, illithid collectives on the Material Plane have resided in the Underdark. Psionic Commanders. Mind flayers possess psionic powers that enable them to control the minds of creatures such as troglodytes, grimlocks, quaggoths, and ogres. Illithids prefer to communicate via telepathy and use their telepathy when issuing commands to their thralls.

When an illithid meets strong resistance, it avoids initial combat as it orders its thralls to attack. Like physical extensions of the illithid's thoughts, these thralls interpose themselves between the mind flayer and its foes, sacrificing their lives so that their master can escape.

### Hive Mind Colonies

Solitary mind flayers are likely rogues and outcasts. Most illithids belong to a colony of sibling mind flayers devoted to an elder brain-a massive brain-like being that resides in a briny pool near the center of a mind flayer community. From its pool, an elder brain telepathically dictates its desires to each individual mind flayer within 5 miles of it, for it is able to hold multiple mental conversations at once.

An illithid experiences euphoria as it devours the brain of a humanoid, along with its memories, personality, and innermost fears. Mind flayers will sometimes harvest a brain rather than devour it, using it as part of some alien experiment or transforming it into an intellect devourer.

Qualith

On the rare occasion that mind flayers need to write something down, they do so in Qualith. This system of tactile writing (similar to braille) is read by an illithid's tentacles. Qualith is written in four-line stanzas and is so alien in construction that non-illithids must resort to magic to discern its meaning. Though Qualith can be used to keep records, illithids most often use it to mark portals or other surfaces with warnings or instructions.

### Hunger of the Mind

Illithids subsist on the brains of humanoids. The brains provide enzymes, hormones, and psychic energy necessary for their survival. An illithid healthy from a brain-rich diet secretes a thin glaze of mucus that coats its mauve skin.

```statblock
"name": "Mind Flayer Psion (VGM)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "19"
  - !!int "17"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": "+7"
  - "wisdom": "+6"
  - "charisma": "+6"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](/3-Mechanics/CLI/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](/3-Mechanics/CLI/skills.md#Persuasion)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "The mind flayer is a 10th-level spellcaster. Its innate spellcasting\
      \ ability is Intelligence (spell save DC 15; +7 to hit with spell attacks).\
      \ It can innately cast the following spells, requiring no components:\n\nAt\
      \ will: [guidance](/3-Mechanics/CLI/spells/guidance-xphb.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [vicious mockery](/3-Mechanics/CLI/spells/vicious-mockery-xphb.md), [true\
      \ strike](/3-Mechanics/CLI/spells/true-strike-xphb.md), [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [levitate](/3-Mechanics/CLI/spells/levitate-xphb.md)\n\n1/day each: [dominate\
      \ monster](/3-Mechanics/CLI/spells/dominate-monster-xphb.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift-xphb.md)\
      \ (self only)\n\n1st level (4 slots): [charm person](/3-Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [command](/3-Mechanics/CLI/spells/command-xphb.md), [comprehend languages](/3-Mechanics/CLI/spells/comprehend-languages-xphb.md),\
      \ [sanctuary](/3-Mechanics/CLI/spells/sanctuary-xphb.md)\n\n2nd level (3 slots):\
      \ [crown of madness](/3-Mechanics/CLI/spells/crown-of-madness-xphb.md), [phantasmal\
      \ force](/3-Mechanics/CLI/spells/phantasmal-force-xphb.md), [see invisibility](/3-Mechanics/CLI/spells/see-invisibility-xphb.md)\n\
      \n3rd level (3 slots): [clairvoyance](/3-Mechanics/CLI/spells/clairvoyance-xphb.md),\
      \ [fear](/3-Mechanics/CLI/spells/fear-xphb.md), [meld into stone](/3-Mechanics/CLI/spells/meld-into-stone-xphb.md)\n\
      \n4th level (3 slots): [confusion](/3-Mechanics/CLI/spells/confusion-xphb.md),\
      \ [stone shape](/3-Mechanics/CLI/spells/stone-shape-xphb.md)\n\n5th level\
      \ (2 slots): [scrying](/3-Mechanics/CLI/spells/scrying-xphb.md), [telekinesis](/3-Mechanics/CLI/spells/telekinesis-xphb.md)"
    "name": "Innate Spellcasting (Psionics)"
  - "desc": "The mind flayer has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
      \ (2d10 + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be\
      \ [stunned](/3-Mechanics/CLI/conditions.md#Stunned) until this grapple ends."
    "name": "Tentacles"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)\
      \ humanoid [grappled](/3-Mechanics/CLI/conditions.md#Grappled) by the mind flayer.\
      \ Hit: The target takes 55 (10d10) piercing damage. If this damage reduces\
      \ the target to 0 hit points, the mind flayer kills the target by extracting\
      \ and devouring its brain."
    "name": "Extract Brain"
  - "desc": "The mind flayer magically emits psychic energy in a 60-foot cone. Each\
      \ creature in that area must succeed on a DC 15 Intelligence saving throw or\
      \ take 22 (4d8 + 4) psychic damage and be [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Mind Blast (Recharge 5-6)"
"source":
  - "VGM"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/mind-flayer-psion-vgm.webp"
```
^statblock

## Environment

underdark
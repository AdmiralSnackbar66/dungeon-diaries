---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/24
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tanazir Quandrix
---
# [Tanazir Quandrix](3-Mechanics\CLI\bestiary\npc/tanazir-quandrix-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 218*  

The dragon Tanazir Quandrix is one of the most potent masters of the magic that governs physical reality and theoretical abstraction. Through this knowledge, she can alter the physical properties of existence, gain fundamental understanding, and manipulate the flow of thought.

Tanazir founded Quandrix College to nurture the spark of curiosity in those who would pursue knowledge. The goal is to train mages who seek knowledge for its own sake, guided by the mathematical principles that describe and govern the nature of reality.

Tanazir's spells, legendary actions, and breath weapon manifest luminous patterns of geometric light. These take various forms, such as an interlocking cage around the target of a spell or a wave of infinitely replicating fractal swirls in the area of her breath.

```statblock
"name": "Tanazir Quandrix (SCC)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "wizard"
"alignment": "Lawful Neutral"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "444"
"hit_dice": "24d20 + 192"
"modifier": !!int "2"
"stats":
  - !!int "28"
  - !!int "14"
  - !!int "27"
  - !!int "28"
  - !!int "18"
  - !!int "17"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  - "dexterity": "+9"
  - "constitution": "+15"
  - "wisdom": "+11"
  - "charisma": "+10"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+23"
  - "name": "[Investigation](/3-Mechanics/CLI/skills.md#Investigation)"
    "desc": "+23"
  - "name": "[Nature](/3-Mechanics/CLI/skills.md#Nature)"
    "desc": "+16"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+18"
"damage_immunities": "force, psychic"
"senses": "blindsight 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "24"
"traits":
  - "desc": "If Tanazir fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "Tanazir makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 14\
      \ (1d10 + 9) piercing damage plus 7 (2d6) force damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16\
      \ (2d6 + 9) slashing damage. If the target is a creature, it is addled by recursive\
      \ thoughts, reducing its speed to 0 until the start of Tanazir's next turn."
    "name": "Claw"
  - "desc": "Tanazir exhales a weakening equation in a 90-foot cone. Each creature\
      \ in that area must make a DC 23 Constitution saving throw. On a failed save,\
      \ a creature takes 45 (13d6) force damage and 45 (13d6) psychic damage and is\
      \ weakened until the start of Tanazir's next turn. While weakened, it has disadvantage\
      \ on the following rolls that rely on Strength: attack rolls, ability checks,\
      \ and saving throws. On a successful save, a creature takes half as much damage\
      \ and isn't weakened."
    "name": "Diminution Breath (Recharge 5-6)"
  - "desc": "Tanazir teleports to an unoccupied space she can see within 100 feet\
      \ of herself."
    "name": "Teleport"
  - "desc": "Tanazir casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 24):\n\n\
      1/day each: [divination](/3-Mechanics/CLI/spells/divination-xphb.md), [enlarge/reduce](/3-Mechanics/CLI/spells/enlarge-reduce-xphb.md),\
      \ [mirage arcane](/3-Mechanics/CLI/spells/mirage-arcane-xphb.md) (as an action),\
      \ [polymorph](/3-Mechanics/CLI/spells/polymorph-xphb.md), [scrying](/3-Mechanics/CLI/spells/scrying-xphb.md)\
      \ (as an action), [seeming](/3-Mechanics/CLI/spells/seeming-xphb.md)"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Tanazir makes one Claw attack."
    "name": "Claw"
  - "desc": "Tanazir uses Teleport, and each other creature within 20 feet of the\
      \ space she left must succeed on a DC 24 Strength saving throw or be pulled\
      \ up to 30 feet closer to the center of that space and take 16 (3d10) force\
      \ damage."
    "name": "Fold Space (Costs 2 Actions)"
  - "desc": "Tanazir magically summons d4 [fractal mascots](/3-Mechanics/CLI/bestiary/construct/fractal-mascot-scc.md)\
      \ in unoccupied spaces she can see within 120 feet of herself. The fractals\
      \ obey her commands and take their turns immediately after hers. While any of\
      \ these fractals remain, attack rolls made against Tanazir have disadvantage.\
      \ A summoned fractal disappears after 1 minute, when it or Tanazir dies, or\
      \ when she uses this action again."
    "name": "Fractal Refraction (Costs 3 Actions)"
"source":
  - "SCC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/tanazir-quandrix-scc.webp"
```
^statblock
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Arrant Quill
---
# [Arrant Quill](3-Mechanics\CLI\bestiary\npc/arrant-quill-cm.md)
*Source: Candlekeep Mysteries p. 157*  

Quill is a charismatic bard who carries himself with a quiet confidence that doesn't hint at the full extent of his skills or powers. His handsome features are marred by a scar that curves from the top of his left cheekbone down to his jaw, though he doesn't consider the scar disfiguring. If asked about the scar, he explains that he got it years ago when the man who burned down his home village slashed his face with a dagger. It serves as a grim reminder of his past.

Although outwardly friendly, Quill is driven by three selfish desires: to preserve his well-being, to alleviate his boredom, and to escape Wisteria Vale. He holds a grudge against the Harpers and Ryllia for imprisoning him in a place that reminds him of the people he lost in his childhood, though he also takes some comfort in being able to live out the life he could've had. His time spent alone with his thoughts in Wisteria Vale has led him to suspect that the Harpers were never going to find a cure, and that they were simply biding their time until he became complacent enough that they could kill him without his being a threat. Quill's corruption has convinced him that the Harpers have become a powerful force that must be taken down; he trusts only himself to identify and eliminate agents of tyranny.

As long as Quill remains in Wisteria Vale, he is immune to all damage and automatically succeeds on all saving throws. This feature is suppressed if Quill wills it (no action required) or while he is within 15 feet of Renekor the beholder.

```statblock
"name": "Arrant Quill (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "16"
  - !!int "16"
  - !!int "15"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "intelligence": "+7"
  - "wisdom": "+6"
  - "charisma": "+9"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/skills.md#Arcana)"
    "desc": "+11"
  - "name": "[Deception](/3-Mechanics/CLI/skills.md#Deception)"
    "desc": "+9"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+7"
  - "name": "[Performance](/3-Mechanics/CLI/skills.md#Performance)"
    "desc": "+13"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Elvish, Undercommon"
"cr": "11"
"actions":
  - "desc": "Quill makes two attacks with his dagger and uses Supreme Mockery."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
    "name": "Dagger"
  - "desc": "Quill utters a short fable while targeting up to five creatures within\
      \ 30 feet of him that he can see. Each target that can hear Quill's magical\
      \ fable must make a DC 17 Wisdom saving throw, taking 36 (8d8) psychic damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Quill's Fable (Recharge 6)"
  - "desc": "Quill hurls a string of insults laced with enchantments at a creature\
      \ he can see within 60 feet of him. If the creature can hear Quill (though it\
      \ need not understand him), it must succeed on a DC 17 Wisdom saving throw or\
      \ take 66 (12d10) psychic damage and have disadvantage on the next attack roll\
      \ it makes before the end of its next turn."
    "name": "Supreme Mockery"
  - "desc": "Quill casts one of the following spells using Charisma as the spellcasting\
      \ ability (save DC 17):\n\nAt will: [light](/3-Mechanics/CLI/spells/light-xphb.md),\
      \ [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n3/day each: [detect magic](/3-Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md), [faerie fire](/3-Mechanics/CLI/spells/faerie-fire-xphb.md),\
      \ [hold monster](/3-Mechanics/CLI/spells/hold-monster-xphb.md)\n\n1/day each:\
      \ [mind blank](/3-Mechanics/CLI/spells/mind-blank-xphb.md), [teleport](/3-Mechanics/CLI/spells/teleport-xphb.md)"
    "name": "Spellcasting"
"source":
  - "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/arrant-quill-cm.webp"
```
^statblock
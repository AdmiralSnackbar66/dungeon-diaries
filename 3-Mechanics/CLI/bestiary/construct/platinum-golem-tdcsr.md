---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Platinum Golem"]
---
# [Platinum Golem](3-Mechanics\CLI\bestiary\construct/platinum-golem-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 243*  

Ageless and unstoppable guardians, golems are expertly crafted to execute their owners' every command without question. Vaguely humanoid in appearance and unfailingly loyal, these powerful constructs feel no agony or sympathy, require no sustenance or sleep, ignore bribes and bargains, and do as they are told without remorse or hesitation.

## Covetous Origins

During the "Age of Arcanum", magic inspired a deep arrogance in many of the gods' children, who assumed arcane gifts were proof of inevitable divinity. In response, many mortal folk experimented with manufacturing "life" of their own. The "dwarves" succeeded first, marrying divine gifts with technical skill to animate autonomous wardens as protectors of their ancestral halls. The "dwarves'" knowledge was quickly stolen and expanded upon by other folk, and creating golems eventually became less about proving that mortals can shape life as the gods do, and more about protecting life, wealth, and secrets from others.

## Platinum Golem

This animated construct plated in precious platinum is the primary choice of prestigious mages and paranoid dragons to guard their most precious treasures. Its clanking footsteps make its approach audible to all intruders, who should recognize that fleeing is the best option: for the golem's form is nigh-invulnerable, and its mighty fists can obliterate life with a single blow.

### Devoted Guardians

Their creators fashion platinum golems from the spirits of indomitable warriors who died failing to protect what they loved most. This final regret fuels the golem's need to execute its master's orders to perfection. Temples of the Platinum Dragon also craft these golems using divine rituals and imbue them with the unflinching devotion to justice epitomized by their god.

```statblock
"name": "Platinum Golem (TDCSR)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "22"
- !!int "10"
- !!int "21"
- !!int "3"
- !!int "12"
- !!int "1"
"speed": "30 ft."
"damage_immunities": "acid; cold; fire; poison; psychic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks that aren't adamantine"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "understands the languages of its creator but can't speak"
"cr": "16"
"traits":
- "desc": "When the golem hits a creature with an [opportunity attack](3-Mechanics/CLI/rules/actions.md#Opportunity%20Attack),\
    \ that creature's speed becomes 0 for the rest of the turn."
  "name": "Divine Custodian"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 19\
    \ (3d8 + 6) piercing damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 22\
    \ (3d10 + 6) bludgeoning damage."
  "name": "Mace"
- "desc": "The golem emits a burst of radiant light in a 20-foot radius. Each creature\
    \ in the area must make a DC 18 Constitution saving throw. On a failed save, a\
    \ creature takes 18 (4d8) radiant damage and is [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded)\
    \ until the end of its next turn. On a success, the creature takes half as much\
    \ damage and is not [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded)."
  "name": "Radiant Blast (Recharge 6)"
"reactions":
- "desc": "When a creature within 10 feet of the golem makes an attack against a target\
    \ other than the golem, the golem can make a mace attack against that creature."
  "name": "Divine Judgment"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/construct/token/platinum-golem-tdcsr.webp"
```
^statblock
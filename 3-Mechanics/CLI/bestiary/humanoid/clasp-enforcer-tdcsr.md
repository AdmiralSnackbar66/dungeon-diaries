---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Clasp Enforcer"]
---
# [Clasp Enforcer](3-Mechanics\CLI\bestiary\humanoid/clasp-enforcer-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 233*  

## Clasp Operatives

> [!quote]  
> 
> When night is come and darkness falls,
> 
> Locks help not, nor do stone walls.
> 
> Slinking and hiding, like poison asp;
> 
> Close tight thy eyes, see not the Clasp.

Members of the "Clasp"—a stealthy organization of spies, thieves, assassins, and smugglers—are at once beloved folk heroes worthy of bardsong and bedtime stories, and sinister scoundrels whose deeds are the stuff of infamous legend. While definitely in the business of discreetly performing illegal deeds for the wealthy, "Clasp" operatives are also known as the roguish heroes who saved countless common folk of Tal'Dorei during the "Cinder King's" tyranny. They style their brand now as the "clasp" that holds society together—understanding that, after all, an organized criminal syndicate requires a functioning, civilized economy.

## Clasp Enforcer

The "Clasp" prefers to operate in the shadows, but sometimes blackmail targets need convincing. Whenever a scare or a show of force is needed, the Clasp's enforcers make quite an impression. An enforcer values promises and debt repayment nearly as much as profit, so any who break agreements with the "Clasp" are sure to earn a visit from one. "Want to know exactly what enforcers enforce?" is a popular "Clasp" one-liner—before the operative delivering the joke switches from telling to showing.

Hard to hit and harder to kill, enforcers enjoy running up to targets with hammers swinging, inspiring a healthy dose of intimidation in anyone lacking the wisdom to pay up or run.

```statblock
"name": "Clasp Enforcer (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "[half plate](3-Mechanics/CLI/items/half-plate-armor-xphb.md)"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "16"
- !!int "12"
- !!int "18"
- !!int "8"
- !!int "11"
- !!int "14"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "8"
  "Athletics": !!int "6"
"senses": "passive Perception 10"
"languages": "Common, Thieves' cant"
"cr": "5"
"traits":
- "desc": "Whenever the enforcer hits a creature with a melee attack, the target must\
    \ succeed on a DC 15 Wisdom saving throw or be [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ of the enforcer until the end of the target's next turn. The enforcer and its\
    \ allies have advantage on attack rolls against any creature [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ in this way. If a creature's saving throw is successful or the effect ends for\
    \ it, the creature is immune to the enforcer's Intimidating Presence for the next\
    \ 24 hours."
  "name": "Intimidating Presence"
"actions":
- "desc": "The enforcer makes three warhammer attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage."
  "name": "Warhammer"
"bonus_actions":
- "desc": "The enforcer regains 12 hit points"
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/clasp-enforcer-tdcsr.webp"
```
^statblock
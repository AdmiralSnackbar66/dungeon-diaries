---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tdcsr
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
statblock: inline
aliases: ["Clasp Cutthroat"]
---
# [Clasp Cutthroat](3-Mechanics\CLI\bestiary\humanoid/clasp-cutthroat-tdcsr.md)
*Source: Tal'Dorei Campaign Setting Reborn p. 232*  

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

## Clasp Cutthroat

When the thieves and assassins of the "Clasp" need to acquire additional funds or relieve certain people of their possessions, the organization's cutthroats are the first to be called. However, the "Clasp" didn't earn an extraordinary customer satisfaction rating by letting just any scoundrel claim the rank of cutthroat. An effective cutthroat is patient and precise. Sneak in, take cover, wait, strike only with advantage, and fight without honor. If spotted, misdirect by fleeing—then regain a strategic position, and attack when they least expect it.

> [!quote] A quote from Gethrude Lael  
> 
> Just because we of the Clasp are heroes these days doesn't mean we won't slit your throat in a heartbeat if you cross us. Heroism is good up on the streets of Emon, but it don't mean much when you're down here in the Grotto.


```statblock
"name": "Clasp Cutthroat (TDCSR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "[leather](3-Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "8"
- !!int "14"
- !!int "9"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "8"
"senses": "passive Perception 12"
"languages": "Common, Thieves' cant"
"cr": "3"
"traits":
- "desc": "The cutthroat deals an extra 14 (4d6) damage when it hits a target with\
    \ a weapon attack and has advantage on the attack roll, or when the target is\
    \ within 5 feet of an ally of the cutthroat that isn't [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)\
    \ and the cutthroat doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "The cutthroat makes two shortsword or dagger attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft., range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
"bonus_actions":
- "desc": "The cutthroat can take the [Dash](3-Mechanics/CLI/rules/actions.md#Dash),\
    \ [Disengage](3-Mechanics/CLI/rules/actions.md#Disengage), or [Hide](3-Mechanics/CLI/rules/actions.md#Hide)\
    \ action."
  "name": "Cunning Action"
"reactions":
- "desc": "The cutthroat halves the damage that it takes from an attack that hits\
    \ it. The cutthroat must be able to see the attacker."
  "name": "Uncanny Dodge"
"source":
- "TDCSR"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/clasp-cutthroat-tdcsr.webp"
```
^statblock
---
title: 
pronounced: 
noteIcon: 
tags: NPC
ancestry: 
heritage: 
gender: 
age: 
sexuality: 
alignment: 
personality: (Three words)
condition: 
aliases: 
occupation: 
associatedGroup: 
associatedReligion: 
ownedLocations: 
location: 
---

> [!infobox]+
> # `=link(this.file.name)`
> **Pronounced:**  "`=this.Pronounced`"
> ![[Placeholder Portrait.png]]
> ###### Bio
> | | |
> | --- | --- |
> | **Ancestry** | `=this.ancestry` |
> | **Heritage** | `=this.heritage` |
> | **Gender** | `=this.gender` |
> | **Age** | `=this.age` |
> | **Sexuality** | `=this.sexuality` |
> | **Alignment** | `=this.alignment` |
> | **Personality** | `=this.personality` |
> | **Condition** | `=this.condition` |
> ###### Info
> | | |
> | --- | --- |
> | **Aliases** | `=this.aliases` |
> |**Occupations** | `=this.occupation` |
> | **Groups** | `=link(this.AssociatedGroup)` |
> |**Religions** | `=link(this.AssociatedReligion)` |
> | **Owned Properties** | `=link(this.OwnedLocations)` |
> | **Current Location** | `=link(this.location)` |

> [!metadata|no-i]- Overview 
> A broad overview of this NPC.

## Appearance
A description of the NPC's physical appearance.

## Key Information
What information does this NPC have that players need to learn? Use sub-headers for organization by topic/type as necessary.

- 

## Agendas
What does this NPC want to do? Keep agendas tight, 1-3, and make them conflict in some way where possible.

- 

## Roleplaying

### Mannerisms
One, two at most. A verbal or physical tick, or a habit. Something that can be used to bring the NPC to life.

- 

### Personality
A brief description of the NPC's personality.

- **Trait one**
- **Trait two**
- **Trait three**

### Attitude


## Connections
These should include as many existing NPCs as possible, and predominantly include strong opinions (preferably contradicting with other NPCs' opinions)

### Family:
- **NPC**

### Friends:
- **NPC**

### Rivals:
- **NPC**

### Acquaintances:
- **NPC**

## History
Bold key concepts.

### Background
Five sentences or less.

### Anecdotes

- Anecdote one
- Anecdote two

## DM
### Hooks
Information this NPC knows or problems they have that the players may be interested in resolving.

### Revelations

### Hidden Details
Things that are not readily apparent, but may become important later.

### General Notes
Anything relevant that isn't appropriate elsewhere.

## Additional Information

### Sessions
```dataview
TABLE npc.notes AS Notes, file.ctime AS Date

WHERE econtains(
  map(npcs, (x) => x.name),
  this.file.name)
OR econtains(
  map(npcs, (x) => x.name),
  this.file.link)

FLATTEN filter(
  npcs, (x) => econtains(x.name, this.file.link)
  OR econtains(x.name, this.file.name)) as npc
SORT file.ctime DESC
LIMIT 20
```

### Statblock



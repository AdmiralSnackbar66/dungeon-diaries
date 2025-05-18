---
sessionstatus:
  - planned
sessiondate: <% await tp.system.prompt ("Date") %>
campaign: <% await tp.system.prompt ("Campaign") %>
noteicon: journal
tags:
  - session
sessionNum: <%tp.user.getThisGameNum%>
type: session
---
# <%tp.file.title%>

## Session Summary
>[!tldr]  [[<% tp.file.title %>]]
>^summary

## Housekeeping
## Recap
![[<%tp.user.getLastGameTitle(tp)%>#^summary]]

## Review The Characters
%%
>[!tip] Review the Characters
>Before we do anything else, it helps to spend a few minutes reviewing the player characters.  What are their names? What do they want? What plays into their backgrounds? What do the players of these characters enjoy to do at the table?
>
>You might not even write anything down during this step, but reviewing the characters helps wire them into your mind - and ensures that the rest of your preparation fits around them.
%%

### Player Characters
 ```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Race, Class, ac, pasperc As "Pass Perc (WIS)"
from "ttrpgs"
where contains(Role, "Player") 
where contains(campaign, <%tp.frontmatter.campaign%>)
```

### Attendance
```attendance
date: <%tp.frontmatter.date%>
title: <%tp.file.title%>
query: "ttrpgs/PlayerCharacters"
```
## Strong Start



## Scenes

- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

## Secrets and Clues

- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 



## Fantastic locations

- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 



## NPC's

## Potential Monsters

## Potential Treasure

## Log




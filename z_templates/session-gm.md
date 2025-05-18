---
<%* const session_date = await tp.system.prompt ("Session Date (YYYYMMDD):"); 
const gameNum = tp.user.getThisGameNum(tp); -%>
type: session
campaign: <% tp.file.folder(false) %>
world: <% tp.user.getThisWorld(tp) %>
sessionNum: <% gameNum %>
location: <%tp.user.getThisWorld(tp)%>
date:  <% session_date %>
fc-category:
  - Sessions
long_rest: false
short_rest: false
summary: ""
tags:
  - prep
art: ""
NoteIcon: Journal
status: Planned
---
<%* 
// Generate filename
const filename = gameNum + '_' + session_date;
await tp.file.rename(filename);
%>

# [[<% filename %>]]


## Session Summary

> [!tldr] [[<% filename %>]]
>  ^summary

---

## Housekeeping

## Crafting

## Recap
![[<% tp.user.getLastGameTitle(tp) %>#^summary]]

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
where contains(campaign, "<%tp.file.folder(false)%>")
```
### Attendance
```attendance
date: <% session_date %>
title: Session - <% filename %>
query: "ttrpgs/Player Characters"
```
## Strong start

> 

## Scenes

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
- [ ] 
- [ ] 
- [ ] 
- [ ] 

## Potential Treasure

- [ ] 
- [ ] 

---

## Log


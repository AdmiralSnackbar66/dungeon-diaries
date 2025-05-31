---
<%* const npc_name = await tp.system.prompt ("NPC Name:");
const species = await tp.system.prompt ("Species:"); 
const character_type = await tp.system.prompt ("Class:");
const alignment = await tp.system.prompt ("Alignment:"); 
const pronouns = await tp.system.prompt ("Pronouns:"); 
const college = await tp.system.prompt ("Strixhaven College:");
const extracurricular = await tp.system.prompt ("Extracurriculars:");
const job = await tp.system.prompt ("Job:");
const employer = await tp.system.prompt ("Employer:");
const boon = await tp.system.prompt ("Boon:");
const bane = await tp.system.prompt ("Bane:");
const year = await tp.system.prompt ("Year:");
const role = await tp.system.prompt ("Role:");
tp.file.move ("/content/dnd/Strixhaven A Curriculum of Chaos/Non Player Characters/" + npc_name) %>
title: <% npc_name %>
publish: false
published: <% tp.date.now() %>
tags:
  - dnd
  - NPC
NoteIcon: npc
race: <% species %>
Alignment: <% alignment %>
Class: <% character_type %>
college: <% college %>
extracurricular: <% extracurricular %>
job: <% job %>
employer: <% employer %>
boon: <% boon %>
bane: <% bane %>
year: <% year %>
role: <% role %>
---
>[!infobox]
># `<% npc_name %>`
>![[ <% npc_name %>.webp]]
>###### Basic Information
>|Type| Stat|
>|---|---|
>|Species | <% species %> |
>|Alignment| <% alignment %>|
>|Pronouns| <% pronouns %>|
>###### Strixhaven
>|Type | Stat|
>|---|---|
>|College|<% college %>
>|Year | <% year %> |
>|Jobs|  <% job %>|
>|Employer|<% employer %>|
>|Extracurricular| <% extracurricular %> |


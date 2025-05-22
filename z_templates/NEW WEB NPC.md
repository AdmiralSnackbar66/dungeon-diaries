---
<%* const npc_name = await tp.system.prompt ("NPC Name:");
const species = await tp.system.prompt ("Species:"); 
const alignment = await tp.system.prompt ("Alignment:"); const pronouns = await tp.system.prompt ("Pronouns:"); 
const college = await tp.system.prompt ("Strixhaven College:"); %>

title: <% npc_name %>
draft: true
publish: 
published: 2025-05-26
tags:
  - dnd
  - NPC
---
>[!infobox]
># `<% npc_name %>`
>![ <% npc_name %>.webp]]
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
>|Year | |
>|Jobs| |
>|Extracurricular| |

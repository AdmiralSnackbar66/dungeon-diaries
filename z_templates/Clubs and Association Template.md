---
<%* const club_name = await tp.system.prompt ("Club Name:");
tp.file.move ("/content/dnd/Strixhaven A Curriculum of Chaos/Clubs and Associations/" + tp.file.title) %>

publish: false
published: 
tags:
  - club
  - dnd
skills:
  - 
  -
title: <% club_name %>
---
**Skills:**

**Description:**


#### Members
%% DATAVIEW_PUBLISHER: start
```dataview
LIST 
FROM "content" 
WHERE contains(extracurricular,"<% club_name %>")
```
%%





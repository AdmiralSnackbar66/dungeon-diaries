---
publish: true
published: 2025-05-28T00:00:00.000+01:00
tags:
  - dnd
  - groups
  - Prismari
title: Prismari
---
![[Prismari.png]]

Southwest of the central campus, the Prismari campus is situated in a region of jagged rocks, rugged spires, and intense geothermal activity.

#### Faculty
%% DATAVIEW_PUBLISHER: start
```dataview
TABLE WITHOUT ID file.link as "Name", race AS "Species", Class
From "content"
Where (college = "Prismari")
Where (role = "Faculty")

```
%%

| Name                                                                                                                       | Species                    | Class                      |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------- |
| [[content/dnd/Strixhaven A Curriculum of Chaos/Non Player Characters/Professor Arkin Minexes.md\|Professor Arkin Minexes]] | <ul><li>Half-Orc</li></ul> | <ul><li>Sorcerer</li></ul> |

%% DATAVIEW_PUBLISHER: end %%

#### Students
%% DATAVIEW_PUBLISHER: start
```dataview
TABLE WITHOUT ID file.link as "Name", race AS "Species", Class
From "content"
Where (college = "Prismari")
Where (role = "Student")
```
%%

| Name | Species | Class |
| ---- | ------- | ----- |

%% DATAVIEW_PUBLISHER: end %%


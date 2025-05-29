---
publish: true
published: 2025-05-29
tags:
  - dnd
  - Silverquill
---
![[Silverquill.png]]

The Silverquill campus is located due north of the central Strixhaven campus and looks much like an extension of it. Silverquill is the most urban of the five colleges, with a campus that features buildings of stately elegance.

#### Faculty

%% DATAVIEW_PUBLISHER: start
```dataview
TABLE WITHOUT ID file.link as "Name", race as "Species", Class
From "content"
Where (college = "Silverquill")
Where (role = "Faculty")
```
%%

| Name                                                             | Species                   | Class                     |
| ---------------------------------------------------------------- | ------------------------- | ------------------------- |
| [[Professor Serafina Onyx\|Professor Serafina Onyx]]             | <ul><li>Human</li></ul>   | <ul><li>Warlock</li></ul> |
| [[Professor Mavinda Sharpbeak\|Professor Mavinda Sharpbeak]]     | <ul><li>Owlin</li></ul>   | <ul><li>Wizard</li></ul>  |
| [[Professor Brenneth Blackstone\|Professor Brenneth Blackstone]] | <ul><li>Dhampir</li></ul> | \-                        |

%% DATAVIEW_PUBLISHER: end %%


#### Students
%% DATAVIEW_PUBLISHER: start
```dataview
TABLE WITHOUT ID file.link as "Name", race as "Species", Class
From "content"
Where (college = "Silverquill")
Where (role = "Student")
```
%%

| Name                   | Species                 | Class |
| ---------------------- | ----------------------- | ----- |
| [[Mina Lee\|Mina Lee]] | <ul><li>Human</li></ul> | \-    |

%% DATAVIEW_PUBLISHER: end %%
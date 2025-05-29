---
published: 2025-05-25
title: Lorehold
publish: true
tags:
  - dnd
  - groups
  - lorehold
---

![[Lorehold-map.webp|800]]

The Lorehold campus is situated northwest of the central campus in a region of stark vertical relief. Rugged mesas and steep hills rise from a wide plain, and a great chasm holds the excavated ruins of an ancient settlement. Several star arches encircle rocky peaks and outcroppings, testifying to the powerful magical energy in the vicinity—energy once harnessed by the ancients who used to inhabit this area.

#### Faculty
%% DATAVIEW_PUBLISHER: start
```dataview
TABLE WITHOUT ID file.link as "Name", race AS "Species", Class
FROM "content"
WHERE (college = "Lorehold")
WHERE (role = "Faculty")
```
%%

| Name                                                       | Species                 | Class                    |
| ---------------------------------------------------------- | ----------------------- | ------------------------ |
| [[Professor Hofri Ghostforge\|Professor Hofri Ghostforge]] | <ul><li>Dwarf</li></ul> | <ul><li>Cleric</li></ul> |

%% DATAVIEW_PUBLISHER: end %%

#### Students
%% DATAVIEW_PUBLISHER: start
```dataview
TABLE WITHOUT ID file.link as "Name",  race AS "Species", Class
FROM "content"
WHERE (college = "Lorehold")
WHERE (role = "Student")
```
%%

| Name                                                     | Species                   | Class |
| -------------------------------------------------------- | ------------------------- | ----- |
| [[Bhedum Rampart Sooviij]]                               | <ul><li>Loxodon</li></ul> | \-    |
| [[Javanesh Stoutclaw\|Javanesh Stoutclaw]]               | <ul><li>Owlin</li></ul>   | \-    |
| [[Rosimyffenbip Wuzzfedlims\|Rosimyffenbip Wuzzfedlims]] | <ul><li>Gnome</li></ul>   | \-    |

%% DATAVIEW_PUBLISHER: end %%

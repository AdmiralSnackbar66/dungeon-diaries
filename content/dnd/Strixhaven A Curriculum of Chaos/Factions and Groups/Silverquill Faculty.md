---
title: Silverquill Faculty
publish: true
published: 2025-05-24
explorerexclude: true
---

```dataview
TABLE WITHOUT ID link(file.name) AS "Name", race as "Species" , class AS "Class" FROM "content" WHERE (type = "npc") WHERE (role = "Faculty") WHERE (college = "Silverquill") SORT file.mtime DESC
```
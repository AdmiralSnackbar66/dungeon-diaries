---
publish: true
published: 2025-05-25
title: Lorehold Students
unlisted: true
---
```dataview
TABLE WITHOUT ID link(file.name) AS "Name", race as "Species" , class AS "Class" 
FROM "content" 
WHERE (type = "npc") 
WHERE (role = "Student") 
WHERE (college = "Lorehold") 
SORT file.mtime DESC
```


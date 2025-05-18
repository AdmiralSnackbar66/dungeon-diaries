```dataview
table description as "Description" from "ttrpgs/items"
WHERE contains(type,"NPC") or contains(type,"faction") and contains(location,"masons-tools-xphb")
SORT file.name ASC
```
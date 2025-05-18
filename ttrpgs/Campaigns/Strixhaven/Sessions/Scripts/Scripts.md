```dataview  
TABLE WITHOUT ID link(file.name) AS "Name", sessionNum as "Session"
from "ttrpgs" 
where  type =  "session_script"
SORT file.name ASC
```
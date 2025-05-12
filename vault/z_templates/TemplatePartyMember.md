---
NoteIcon: player
tags:
  - player
Player: 
Role: Player
Class: 
Race: 
level: 
hp: 
ac: 
modifier: 
pasperc: 
Status: Active
PlayerKnownLanguages: 
campaign:
---
```


<%*  
const hasTitle = !tp.file.title.startsWith("NewPartyMember");  
let title;  
if (!hasTitle) {  
title = await tp.system.prompt("Party Member");  
await tp.file.rename(title);  
} else {  
title = tp.file.title;  
}  
_%>
```

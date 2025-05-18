---
aliases: 
pronounced: 
race: 
type: 
gender: 
age: 
sexuality: 
home: 
location: 
occupation: 
group: 
religion: 
alignment: 
language: 
partyFamiliarity: 
partyRelation: 
session: 
status: 
tags: 
item: 
scratchNote: ""
---

%%If you use Dataview and you don't change the "group" key in YAML (and in the template) - if you want to search for NPCs in a specific group for example -, you will have to call it via row.group in the Dataview query.%%

> [!infobox]
> # `=this.file.name`
> Pronounced:  "`VIEW[{pronounced}]`"
>> [!caption]
>> ![[PlaceholderImage.png|cover hm-sm]]
>> Artist: (External Link)
> ###### Bio
>  |
> ---|---|
> **Race** | `INPUT[suggester(optionQuery(#ttrpg-cli/race)):race]` |
> **Gender** | `INPUT[Gender][inlineSelect:gender]` |
> **Age** | `INPUT[number(class(className: nb-mb-css)):age]` |
> **Sexuality** | `INPUT[Sexuality][inlineSelect:sexuality]`|
> ###### Info
>  |
> ---|---|
> **Alignment** | `INPUT[Alignment][inlineSelect:alignment]` |
> **Language(s)** | `INPUT[Language][inlineListSuggester:language]` |
> **Home** | `INPUT[suggester(optionQuery(#Category/Settlement)):home]` |
> **Current Location** | `INPUT[suggester(optionQuery(#Category/Settlement)):location]` |
> **Occupation(s)** | `INPUT[Occupation][inlineListSuggester:occupation]` |
> **Group(s)** | `INPUT[inlineListSuggester(optionQuery(#Category/Group)):group]` |
> **Religion(s)** | `INPUT[inlineListSuggester(optionQuery(#Category/Pantheon)):religion]` |
> ###### Party
>  |
> ---|---|
> **Party Familiarity** | `INPUT[PartyFamiliarity][inlineSelect:partyFamiliarity]` |
> **Party Relation** | `INPUT[PartyRelation][inlineSelect:partyRelation]` |
> **Session Appearance(s)** | `INPUT[inlineListSuggester(optionQuery(#Category/Session), useLinks(partial)):session]` |
> ###### Items
> `INPUT[inlineListSuggester(optionQuery(#ttrpg-cli/item)):item]`
> ```statblock
> creature:
> columns: 1
> columnWidth: 270
> ```

# `=this.file.name` <span style="float:right; font-size:15px; font-family:'Spectral'">`INPUT[toggle(offValue(Dead),onValue(Alive)):status]` `VIEW[{status}]`</span>

####  <font color=lightpink>`VIEW[{race}][link]` • `VIEW[{type}]` • `VIEW[{occupation}]`</font>

> [!column| clean no-icon alt-line no-t]
>> [!info | clean] Overview
>> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim pharetra eros a fringilla. Morbi a magna eget mauris auctor cursus at in neque. Cras aliquam, lorem at semper luctus, ex libero suscipit nisi, id malesuada mi nibh sit amet erat. 
>> 
>> <font color=lightpink>**Appearance: **</font>
>> Sed mattis molestie elit at convallis. Nullam hendrerit odio lobortis, volutpat purus sit amet, mollis ligula. Integer euismod ultricies auctor. Sed aliquam nisl at sem accumsan, non malesuada nulla bibendum. 
>
>> [!pf2-summary | clean] Backstory
>> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim pharetra eros a fringilla. Morbi a magna eget mauris auctor cursus at in neque. Cras aliquam, lorem at semper luctus, ex libero suscipit nisi, id malesuada mi nibh sit amet erat.
>> Sed mattis molestie elit at convallis. Nullam hendrerit odio lobortis, volutpat purus sit amet, mollis ligula. Integer euismod ultricies auctor.

> [!column| 5 clean no-icon alt-line]+ Personality
>>[!note| no-icon clean dim] Likes 
>>
>> -
>> - 
>> - 
>
>>[!note| no-icon clean dim] Dislikes
>> 
>> -
>> -
>> - 
>
>>[!note| no-icon clean dim] Values / Ideals
>>
>> -
>> -
>> - 
>
>>[!note| no-icon clean dim] Motivation / Goals
>>
>> -
>> -
>> - 
>
>>[!note|no-icon clean dim] Flaws
>>
>> -
>> -
>> - 

> [!column| 5 clean no-icon alt-line]+ Relationships 
>>[!kith | family no-icon clean dim] Family 
>>> [!kith | family] - [ ] **Person** *Description*  
>
>>[!kith | romatic no-icon clean dim] Romantic 
>>> [!kith | romantic] - [ ] **Person** *Description*  
>
>>[!kith | friend no-icon clean dim] Friends
>>> [!kith | friend ] - [ ] **Person** *Description*
>
>>[!kith | clean no-icon dim] Neutral 
>>> [!kith | bg-c-gray] - [ ] **Person** *Description*  
>
>>[!kith | antagonist no-icon clean dim] Enemies 
>>> [!kith | antagonist] - [ ] **Person** *Description*  

>[!column| 3 clean no-icon alt-line]+ Roleplaying Information
>
>>[!note| no-icon clean dim] Voice 
>>
>> -
>> - 
>> - 
>
>>[!note| no-icon clean dim] Mannerisms
>> 
>> -
>> -
>> - 
>
>>[!quote| clean dim] `=this.file.name`
>> *Lorem ipsum dolor sit amet, consectetur adipiscing elit.*

>[!column|clean no-icon alt-line] DM Notes 
>>[!todo|bg-c-green clean dim] Quests/Story Hooks 
>>
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
>>[!pf2-note|bg-c-purple clean dim] Information Held  
>> 
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
>>[!question|bg-c-blue clean dim] Rumours 
>>
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
>>[!question|bg-c-orange clean dim] Secrets 
>>
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  

> [!note|no-icon clean dim] Scratch Notes
> ```meta-bind
> INPUT[editor():scratchNote]
> ```
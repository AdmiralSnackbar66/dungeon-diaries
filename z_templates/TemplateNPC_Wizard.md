---
noteIcon: NPC
aliases: []
pronouns: 
role: NPC
statBlock:
role_internal: 
species: 
personality: 
motivation: 
associatedGroups: []
associatedCharacters: []
importantItems: []
description: 
---
<%*
const title = await tp.system.prompt("Enter NPC Name");
const dv = this.DataviewAPI;
const path = tp.file.folder(true);
const folderNote = tp.file.folder(false);
const page = dv.page(folderNote); 

await tp.file.move(path + "ttrpgs/Non Player Characters/" + title)

const fullSetup = await tp.system.suggester(["Yes", "No"], ["Yes", "No"], false, "Full Setup?")
if (fullSetup == "Yes")
{
	tp.hooks.on_all_templates_executed(async () => {
		let counter = 1;
	    const aliases = []
		try{
		    while(true){
			    const alias = await tp.system.prompt("Alias " + counter + " (Press X to continue setup)", "", true);
			    aliases.push(alias);
			    counter += 1;
		    }
	    }
		}
		catch(err){}
		const role = await tp.system.prompt("Role", "", false, true);
		const personality = await tp.system.prompt("Personality", "", false, true);
		const motivation = await tp.system.prompt("Motivation", "", false, true);
		let statBlock = "";
		try{
			const monsters = dv.pages().where(p => p.cssclasses && p.cssclasses.includes("json5e-monster") && p.file.name != "TemplateMonster")
			let statBlockName = await tp.system.suggester(v => v.file.aliases[0], monsters, true, "StatBlock");
			statBlockName = statBlockName.file.name;
			const parts = statBlockName.split("-");
			for(i = 0; i < parts.length; i++){
				if (i == parts.length - 1){
					parts[i] = "(" + parts[i].toUpperCase() + ")";
				} else {
					parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1)
				}
				if (i > 0){
				statBlock += " "}
				statBlock += parts[i];
			}
		}
		catch(err){}
		let associatedGroups = [];
		try {
			const peoples = dv.pages().where(p => p.peopletype && p.file.name != "TemplatePeople")
			while(true){
				const associatedGroup = await tp.system.suggester(v => v.file.name, peoples, true, "Associated Group " + counter + " (Press X to continue setup)");
				associatedGroups.push(associatedGroup);
				counter += 1;
			}
		}
		catch(err){counter = 1;}
		let associatedCharacters = [];
		try {
			const pcs = dv.pages().where(p => p.role && p.role.includes("Player") && p.file.name != "TemplatePlayer")
			while(true){
				const associatedCharacter = await tp.system.suggester(v => v.file.name, pcs, true, "Associated Character " + counter + " (Press X to continue setup)");
				associatedCharacters.push(associatedCharacter);
				counter += 1;
			}
		}
		catch(err){counter = 1;}
		let importantItems = [];
		try {
			const items = dv.pages().where(p => p.cssclasses && p.cssclasses.includes("json5e-item") && p.file.name != "TemplateItem")
			while(true){
				const importantItem = await tp.system.suggester(v => v.file.aliases[0], items, true, "Important Item " + counter + " (Press X to continue setup)");
				importantItems.push(importantItem);
				counter += 1;
			}
		}
		catch(err){counter = 1;}
		
		const file = await tp.file.find_tfile(title);
		await tp.app.fileManager.processFrontMatter(file, (frontmatter) =>  {
			frontmatter['pronouns'] = pronouns;
			frontmatter['role_internal'] = role;
			frontmatter['personality'] = personality;
			frontmatter['motivation'] = motivation;
			frontmatter['description'] = description;
			if (statBlock != "") frontmatter['statBlock'] = statBlock;
			if (species != "") frontmatter['species'] = "[["+species.file.name+"|"+species.file.aliases[0]+"]]";
			for (i = 0; i < aliases.length; i++){
				frontmatter['aliases'].push(aliases[i]);
			}
			for (i = 0; i < associatedGroups.length; i++){
				frontmatter['associatedGroups'].push("[["+associatedGroups[i].file.name+"]]");
			}
			for (i = 0; i < associatedCharacters.length; i++){
				frontmatter['associatedCharacters'].push("[["+associatedCharacters[i].file.name+"]]");
			}
			for (i = 0; i < importantItems.length; i++){
				frontmatter['importantItems'].push("[["+importantItems[i].file.name+"|"+importantItems[i].file.aliases[0]+"]]");
			}
		});
	});
}
_%>

# `=this.file.name`
`=this.file.description`

>[!div-m|grid-m]
>
>>[!div-m]
>>| Key                   | Value                        |
>>| --------------------- | ---------------------------- |
>>| Aliases:              | `=this.aliases`              |
>>| Pronouns:             | `=this.pronouns`             |
>>| Species:              | `=this.species`              |
>>| Role:                 | `=this.role_internal`        |
>>| Personality:          | `=this.personality`          |
>>| Motivation:           | `=this.motivation`           |
>>| Associated Groups:    | `=this.associatedGroups`     |
>>| AssociatedCharacters: | `=this.associatedCharacters` |
>>| Important Items:      | `=this.importantItems`       |
>
>>[!div-m]
>>![[ImagePlaceholder.png|500]]
>
>>[!div-m]
>>```dataviewjs
>>const codeBlock = "```"
>>const part1 = `statblock
>>name: `;
>>const part2 = `
>>monster: `;
>>const part3 = `
>>columns: 1
>>`;
>>const name = dv.current().file.name;
>>const frontmatter = dv.markdownList(dv.current().file.frontmatter).toString().split("-");
>>let monster;
>>for (i = 0; i < frontmatter.length; i++){
>>	if (!frontmatter[i].includes("statBlock")) continue;
>>	monster = frontmatter[i].split(":")[1].slice(1);
>>	break;}
>>const markdown = codeBlock + part1 + name + part2 + monster + part3 + codeBlock;
>>dv.paragraph(markdown)
>>```
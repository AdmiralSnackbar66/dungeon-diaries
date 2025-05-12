```dataviewjs

module.exports = async function appendTag(filePath) {
    let userInput = await tp.system.prompt("Enter attendance tag:");

    if (userInput) {
        let content = await app.vault.read(filePath);
        
        // Look for frontmatter
        let frontmatterRegex = /^---\n([\s\S]*?)\n---/m;
        let match = content.match(frontmatterRegex);
        let frontmatter = match ? match[1] : "";

        // Append user input to tags
        let updatedFrontmatter;
        if (frontmatter.includes("tags:")) {
            updatedFrontmatter = frontmatter.replace(/tags:\s*\[([^\]]*)\]/, (match, tags) => {
                return `tags: [${tags ? tags + ", " : ""}${userInput}]`;
            });
        } else {
            updatedFrontmatter = frontmatter + `\ntags: [${userInput}]`;
        }

        // Replace old frontmatter with updated version
        let updatedContent = content.replace(frontmatterRegex, `---\n${updatedFrontmatter}\n---`);
        await app.vault.modify(filePath, updatedContent);
    }
};
```

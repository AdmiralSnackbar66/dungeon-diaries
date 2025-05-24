
<%*
const dv = app.plugins.plugins["dataview"].api;
const openPublishPanel = app.commands.commands["publish:view-changes"].callback;

// Add as many filenames and queries as you'd like!
const fileAndQuery = new Map([
  [
     "Quandrix Faculty",
    'TABLE WITHOUT ID link(file.name) AS "Name", race as "Species" , class AS "Class" FROM "content" WHERE (type = "npc") WHERE (role = "Faculty") WHERE (college = "Quandrix") SORT file.mtime DESC',
   ],
  [
     "Quandrix Students",
    'TABLE WITHOUT ID link(file.name) AS "Name", race as "Species" , class AS "Class" FROM "content" WHERE (type = "npc") WHERE (role = "Student") WHERE (college = "Quandrix") SORT file.mtime DESC',
   ],
    [
     "Silverquill Students",
    'TABLE WITHOUT ID link(file.name) AS "Name", race as "Species" , class AS "Class" FROM "content" WHERE (type = "npc") WHERE (role = "Student") WHERE (college = "Silverquill") SORT file.mtime DESC',
   ],
     [
     "Silverquill Faculty",
    'TABLE WITHOUT ID link(file.name) AS "Name", race as "Species" , class AS "Class" FROM "content" WHERE (type = "npc") WHERE (role = "Faculty") WHERE (college = "Silverquill") SORT file.mtime DESC',
   ],
]);

await fileAndQuery.forEach(async (query, filename) => {
  if (!tp.file.find_tfile(filename)) {
    await tp.file.create_new("", filename);
    new Notice(`Created ${filename}.`);
  }
  const tFile = tp.file.find_tfile(filename);
  const queryOutput = await dv.queryMarkdown(query);
  const fileContent = `%% #Ignore update via "Update Publish Files" template %% \n\n${queryOutput.value}`;
  try {
    await app.vault.modify(tFile, fileContent);
    new Notice(`Updated ${tFile.basename}.`);
  } catch (error) {
    new Notice("⚠️ ERROR updating! Check console. Skipped file: " + filename , 0);
  }
});
openPublishPanel();
%>

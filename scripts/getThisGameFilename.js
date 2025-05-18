module.exports = (params) => {
    console.log(params);
    let thisCampaign = params.app.workspace.getActiveFile().parent.path.slice(17);
    let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"ttrpgs/Campaigns/${thisCampaign}"`)
        .where(page => {
            if (page.type === 'session' && page.campaign === thisCampaign) {
                return true;
            }
        }).length;

    numOfGames = JSON.stringify(numOfGames + 1);
    while (numOfGames.length < 3) {
        numOfGames = "0" + numOfGames;
    }

    // Get the user-entered date from the Templates plugin
    let userDate = params.variables["session_date"] || moment().format('YYYYMMDD'); // Uses entered date or defaults to today

    // Put filename together
    let filename = numOfGames + '_' + userDate;
    params.variables["thisGameFilename"] = filename;
    params.variables["folderName"] = 'ttrpgs/Campaigns/' + thisCampaign;
};
function getSessionDate (tp) {
    let thisCampaign = tp.file.folder(false);
    // console.log(app.plugins.plugins.dataview.api.pages(`"ttrpgs/Campaigns/${thisCampaign}"`));
    let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"vault/ttrpgs/Campaigns/${thisCampaign}"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === thisCampaign) {
                    // console.log('sessionNum: ' + page.sessionNum);
                    return true;
                }
            }
        }).length
    if (numOfGames === 0) {
        return '<% tp.date.now("YYYYMMDD") %>';
    }    
    let date = tp.date.now("YYYYMMDD");
    return date;
}
module.exports = getSessionDate;
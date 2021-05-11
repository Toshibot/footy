
//
// Data
// ====

function dataLadder(clubs) {

    $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/125/ladder.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

        // $.getJSON('../data/dummy_data.json', function (json) {
        var round = $('.c-ladder__round');

        // console.log(json);
        // Round Number
        // round.text('AFL Ladder ' + json.round.name);

        // Construct the Ladder
        for (i = 0; i < json.teams.length; i++) {
            const ladder_data = json.teams[i];
            const club_data = clubs[ladder_data.code];
            ladderItem(ladder_data, i + 1, club_data);
        }

    });
}

// Data - Fixture/Results

$.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/122/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

// Dummy Dev File
// $.getJSON('../data/data-fixture.json', function(json){

    console.log(json);
    
    var today = new Date;
    var currentRound = [];
    var currentRoundNo = roundCalc(today);
    // var currentRoundNo = 2;

    $('.js-fixture-round').text(currentRoundNo);

    for (i = 0; i < json.length; i++) {
        const element = json[i];
        
        if (element.round.number == currentRoundNo) {
            currentRound.push(element);
        }
    }

    // console.log(currentRound);

    var game1 = currentRound[8];

    for (i = 0; i < currentRound.length; i++) {
        const element = currentRound[i];

        fixtureItem(element);
    }
});

// Data - Fixture/Results

function dataFixture(round) {

    $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/124/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

        // Dummy Dev File
        // $.getJSON('../data/data-fixture.json', function(json){

        // console.log(json);
        console.log('fixture loaded');
        console.log(json);

        var today = new Date;
        var testDate = new Date('2018-04-24');
        var currentRound = [];
        var finalsData = [];
        var currentRoundNo = roundCalc(today);
        // var currentRoundNo = 23;

        $('.js-fixture-round').text(currentRoundNo);

        for (i = 0; i < json.length; i++) {
            const element = json[i];

            if (element.round.number == currentRoundNo) {
                currentRound.push(element);
            }
        }

        console.log(currentRound);

        var game1 = currentRound[8];

        for (i = 0; i < currentRound.length; i++) {
            const element = currentRound[i];

            fixtureItem(element);
        }

        // scroll();



        for (i = 0; i < json.length; i++) {
            const e = json[i];

            if (e.is_final == true) {
                finalsData.push(e);
            }
        }

        finals(finalsData);

    });
}
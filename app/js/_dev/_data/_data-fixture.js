
// Data - Fixture/Results

function dataFixture(clubs) {

    $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/131/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

        // Dummy Dev File
        // $.getJSON('../data/data-fixture.json', function(json){

        // console.log(json);
        // console.log('fixture loaded');
        // console.log(json);

        $.getJSON('data/fixture.json', function (round_data) {

            var today = new Date;
            var displayedRound = [];
            var finalsData = [];
            var currentRoundNo = roundCalc(today, round_data);
            var displayedRoundNo = currentRoundNo;
            var previousRoundButton = $('.js-previous');
            var nextRoundButton = $('.js-next');

            function buildFixture(data, round_number) {
                var displayed_round = [];

                for (i = 0; i < data.length; i++) {
                    const element = data[i];

                    if (element.round.number == round_number) {
                        displayed_round.push(element);

                        $('.js-fixture-round').text(element.round.name);
                    }
                }

                generateFixture(displayed_round, round_number);
            }

            function clearFixture(round_number) {
                $('.js-game-' + round_number).remove();
            }

            function fixtureChange(round_number, new_round_number) {
                displayedRoundNo = new_round_number;
                clearFixture(round_number);
                buildFixture(json, new_round_number);
            }

            function generateFixture(data, round_number) {
                for (i = 0; i < data.length; i++) {
                    const element = data[i];

                    fixtureItem(element, clubs, round_number);
                }
            }

            buildFixture(json, currentRoundNo);

            previousRoundButton.on("click", function () {
                fixtureChange(displayedRoundNo, displayedRoundNo - 1);
            });

            nextRoundButton.on("click", function () {
                fixtureChange(displayedRoundNo, displayedRoundNo + 1);
            })

        });

    });
}
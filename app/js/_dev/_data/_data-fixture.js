
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

            var bye_data = [
                {
                    round_number: 2,
                    teams: ["BRI", "COL", "CAR", "GEE"]
                },
                {
                    round_number: 3,
                    teams: ["GCS", "WBD", "HAW", "SYD"]
                },
                {
                    round_number: 4,
                    teams: ["STK", "GWS"]
                },
                {
                    round_number: 12,
                    teams: ["ADE", "GCS", "NM", "POR"]
                },
                {
                    round_number: 13,
                    teams: ["GWS", "RIC"]
                },
                {
                    round_number: 14,
                    teams: ["COL", "CAR", "HAW", "FRE"]
                },
                {
                    round_number: 15,
                    teams: ["BRI", "ESS", "SYD", "WCE"]
                },
                {
                    round_number: 16,
                    teams: ["WBD", "GEE", "STK", "MEL"]
                }
            ]

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
                $('.c-fixture__bye--title').removeClass('u-block');
                bye(round_number, bye_data, clubs);
            }

            function clearFixture(round_number) {
                $('.js-game-' + round_number).remove();
                $('.js-bye-item-' + round_number).remove();
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
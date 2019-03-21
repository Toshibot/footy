
function fixtureItem(array) {

    var date = dateTime(array.match_start_date);
    var match_status = array.match_status;

    if (match_status == 'Pre Game') {

        $('.js-fixture').before(
            '<div class="c-fixture__game">' +
                '<div class= "c-fixture__date c-date" >' + 
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + homeKit(array.team_A.code) + '" />' +
                    '<span class="js-team-text">' + array.team_A.code + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                '<img class="js-team-img" src="' + awayKit(array.team_B.code) + '" />' +
                '<span class="js-team-text">' + array.team_B.code + '</span>' +
                '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.venue.name + '</div>' +
            '</div>'
        );

    } else if (match_status == "Full Time") {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--completed">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">FT</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + homeKit(array.team_A.code) + '" />' +
                    '<span class="js-team-text">' + array.team_A.code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.team_A.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(array.team_B.code) + '" />' +
                    '<span class="js-team-text">' + array.team_B.code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.team_B.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.venue.name + '</div>' +
            '</div>'
        );

    } else {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--in-progress">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__live">LIVE</span>' +
                    '<span class="c-date__status">' + match_status + '</span>' +
                    '<span class="c-date__time">' + array.match_time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + homeKit(array.team_A.code) + '" />' +
                    '<span class="js-team-text">' + array.team_A.code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.team_A.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(array.team_B.code) + '" />' +
                    '<span class="js-team-text">' + array.team_B.code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.team_B.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.venue.name + '</div>' +
            '</div>'
        );
    }
}
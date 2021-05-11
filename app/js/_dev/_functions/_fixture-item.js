
function fixtureItem(fixture_data, clubs) {

    var date = dateTime(fixture_data.match_start_date);
    var match_status = fixture_data.match_status;
    var home_team = fixture_data.team_A;
    var away_team = fixture_data.team_B;
    var home_club_data = clubs[home_team.code];
    var away_club_data = clubs[away_team.code];

    if (match_status == 'Pre Game') {

        $('.js-fixture').before(
            '<div class="c-fixture__game js-game-pregame">' +
                '<div class= "c-fixture__date c-date" >' + 
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + home_club_data.kit.home + '" />' +
                    '<span class="js-team-text">' + home_club_data.name + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                '<img class="js-team-img" src="' + awayKit(away_club_data.kit, home_team.code) + '" />' +
                '<span class="js-team-text">' + away_club_data.name + '</span>' +
                '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + fixture_data.venue.name + '</div>' +
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
                    '<img class="js-team-img" src="' + home_club_data.kit.home + '" />' +
                    '<span class="js-team-text">' + home_club_data.name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + fixture_data.team_A.goals + '. ' + fixture_data.team_A.behinds + '. <span class="c-fixture__score-total">' + fixture_data.team_A.score + '</span></span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(away_club_data.kit, home_team.code) + '" />' +
                    '<span class="js-team-text">' + away_club_data.name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + fixture_data.team_B.goals + '. ' + fixture_data.team_B.behinds + '. <span class="c-fixture__score-total">' + fixture_data.team_B.score + '</span></span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + fixture_data.venue.name + '</div>' +
            '</div>'
        );

    } else {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--in-progress">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__live">LIVE</span>' +
                    '<span class="c-date__status">' + match_status + '</span>' +
                    '<span class="c-date__time">' + fixture_data.match_time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + home_club_data.kit.home + '" />' +
                    '<span class="js-team-text">' + home_club_data.name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + fixture_data.team_A.goals + '. ' + fixture_data.team_A.behinds + '. <span class="c-fixture__score-total">' + fixture_data.team_A.score + '</span></span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(away_club_data.kit, home_team.code) + '" />' +
                    '<span class="js-team-text">' + away_club_data.name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + fixture_data.team_B.goals + '. ' + fixture_data.team_B.behinds + '. <span class="c-fixture__score-total">' + fixture_data.team_B.score + '</span></span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + fixture_data.venue.name + '</div>' +
            '</div>'
        );
    }
}
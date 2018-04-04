
var fixtureItem = function(array) {

    $('.js-fixture').before(
        '<div class="c-fixture__game">' +
            '<div class= "c-fixture__date js-fixture-date" >' + dateTime(array.match_start_date) + '</div >' +
            '<div class="c-fixture__team js-fixture-team-1">' +
                '<img class="js-team-img" src="' + teamImg(array.team_A.code) + '" />' +
                '<span class="js-team-text">' + array.team_A.code + '</span>' +
            '</div>' +
            '<div class="c-fixture__vs">vs</div>' +
            '<div class="c-fixture__team js-fixture-team-2">' +
            '<img class="js-team-img" src="' + teamImg(array.team_B.code) + '" />' +
            '<span class="js-team-text">' + array.team_B.code + '</span>' +
            '</div>' +
            '<div class="c-fixture__venue js-fixture-venue">' + array.venue.name + '</div>' +
        '</div>'
    );
}
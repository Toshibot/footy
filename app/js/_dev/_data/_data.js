function data() {
    $.getJSON('data/clubs.json', function (clubs) {
        dataLadder(clubs);
        dataFixture(clubs);
    });
}

// 
// Ladder
// ======

var ladder = function(){

    // GWS
    var giants = $('.c-ladder__team:contains("Greater Western Sydney")'); 
    giants.text('GWS');
    giants.before('<img class="c-ladder__icon" src="img/teams/gws.svg"/>');

    // Port Adelaide
    var port = $('.c-ladder__team:contains("Port Adelaide")');
    port.before('<img class="c-ladder__icon" src="img/teams/port.svg"/>');

    var hawks = $('.c-ladder__team:contains("Hawthorn")');
    hawks.before('<img class="c-ladder__icon" src="img/teams/hawks.svg"/>');

    var suns = $('.c-ladder__team:contains("Gold Coast")');
    suns.before('<img class="c-ladder__icon" src="img/teams/suns.svg"/>');

    var swans = $('.c-ladder__team:contains("Sydney")');
    swans.before('<img class="c-ladder__icon" src="img/teams/swans.svg"/>');

    var saints = $('.c-ladder__team:contains("St Kilda")');
    saints.before('<img class="c-ladder__icon" src="img/teams/saints.svg"/>');

    var tigers = $('.c-ladder__team:contains("Richmond")');
    tigers.before('<img class="c-ladder__icon" src="img/teams/tigers.svg"/>');

    var bombers = $('.c-ladder__team:contains("Essendon")');
    bombers.before('<img class="c-ladder__icon" src="img/teams/bombers.svg"/>');

    var cats = $('.c-ladder__team:contains("Geelong")');
    cats.before('<img class="c-ladder__icon" src="img/teams/cats.svg"/>');

    var demons = $('.c-ladder__team:contains("Melbourne")');
    demons.before('<img class="c-ladder__icon" src="img/teams/demons.svg"/>');

    var crows = $('.c-ladder__team:contains("Adelaide")');
    crows.before('<img class="c-ladder__icon" src="img/teams/crows.svg"/>');

    var blues = $('.c-ladder__team:contains("Carlton")');
    blues.before('<img class="c-ladder__icon" src="img/teams/blues.svg"/>');

    var lions = $('.c-ladder__team:contains("Brisbane")');
    lions.before('<img class="c-ladder__icon" src="img/teams/lions.svg"/>');

    var eagles = $('.c-ladder__team:contains("West Coast")');
    eagles.before('<img class="c-ladder__icon" src="img/teams/eagles.svg"/>');

    var kangaroos = $('.c-ladder__team:contains("North Melbourne")');
    kangaroos.before('<img class="c-ladder__icon" src="img/teams/kangaroos.svg"/>');

    var magpies = $('.c-ladder__team:contains("Collingwood")');
    magpies.before('<img class="c-ladder__icon" src="img/teams/magpies.svg"/>');

    var dockers = $('.c-ladder__team:contains("Fremantle")');
    dockers.before('<img class="c-ladder__icon" src="img/teams/dockers.svg"/>');

    var dogs = $('.c-ladder__team:contains("Bulldogs")');
    dogs.before('<img class="c-ladder__icon" src="img/teams/dogs.svg"/>');

}
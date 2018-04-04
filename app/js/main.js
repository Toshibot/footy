// ==========================================================================
// Fixture - Functions
// ==========================================================================


// 
// Ladder
// ======

var ladder = function(){

    // GWS
    var giants = $('.c-ladder__team:contains("Greater Western Sydney")'); 
    giants.children('span').text('GWS');
    giants.children('img').attr('src', 'img/teams/gws.svg');

    var hawks = $('.c-ladder__team:contains("Hawthorn")');
    hawks.children('img').attr('src', 'img/teams/hawks.svg');

    var suns = $('.c-ladder__team:contains("Gold Coast")');
    suns.children('img').attr('src', 'img/teams/suns.svg');

    var swans = $('.c-ladder__team:contains("Sydney")');
    swans.children('img').attr('src', 'img/teams/swans.svg');

    var saints = $('.c-ladder__team:contains("St Kilda")');
    saints.children('img').attr('src', 'img/teams/saints.svg');

    var tigers = $('.c-ladder__team:contains("Richmond")');
    tigers.children('img').attr('src', 'img/teams/tigers.svg');

    var bombers = $('.c-ladder__team:contains("Essendon")');
    bombers.children('img').attr('src', 'img/teams/bombers.svg');

    var cats = $('.c-ladder__team:contains("Geelong")');
    cats.children('img').attr('src', 'img/teams/cats.svg');

    var demons = $('.c-ladder__team:contains("Melbourne")');
    demons.children('img').attr('src', 'img/teams/demons.svg');

    var crows = $('.c-ladder__team:contains("Adelaide")');
    crows.children('img').attr('src', 'img/teams/crows.svg');

    var blues = $('.c-ladder__team:contains("Carlton")');
    blues.children('img').attr('src', 'img/teams/blues.svg');
    
    // Port Adelaide
    var port = $('.c-ladder__team:contains("Port Adelaide")');
    port.children('img').attr('src', 'img/teams/port.svg');

    var lions = $('.c-ladder__team:contains("Brisbane")');
    lions.children('img').attr('src', 'img/teams/lions.svg');

    var eagles = $('.c-ladder__team:contains("West Coast")');
    eagles.children('img').attr('src', 'img/teams/eagles.svg');

    var kangaroos = $('.c-ladder__team:contains("North Melbourne")');
    kangaroos.children('img').attr('src', 'img/teams/kangaroos.svg');

    var magpies = $('.c-ladder__team:contains("Collingwood")');
    magpies.children('img').attr('src', 'img/teams/magpies.svg');

    var dockers = $('.c-ladder__team:contains("Fremantle")');
    dockers.children('img').attr('src', 'img/teams/dockers.svg');

    var dogs = $('.c-ladder__team:contains("Bulldogs")');
    dogs.children('img').attr('src', 'img/teams/dogs.svg');

}

// Data - Fixture/Results

// $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/122/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

// Dummy Dev File
$.getJSON('../data/data-fixture.json', function(json){
    
    // console.log(json[0].round);
    var currentRound = [];
    var currentRoundNo = 3;

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

//
// Data
// ====

// $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/122/ladder.json', function(json){

$.getJSON('../data/dummy_data.json', function (json) {
    var round = $('.c-ladder__round');

    console.log(json);
    // Round Number
    round.text('AFL Ladder ' + json.round.name);

    // Construct the Ladder
    for (i = 0; i < json.teams.length; i++) {
        const element = json.teams[i];
        ladderItem(element, i+1);
    }
});

var dateTime = function(d) {

    var date = new Date(d);

    var day = function(d) {
        var day = d.getDay();

        if (day == 0) {
            return 'Sunday';
        } else if (day == 1) {
            return 'Monday';
        } else if (day == 2) {
            return 'Tuesday';
        } else if (day == 3) {
            return 'Wednesday';
        } else if (day == 4) {
            return 'Thursday';
        } else if (day == 5) {
            return 'Friday';
        } else if (day == 6) {
            return 'Saturday';
        }
    }

    var month = function(d) {
        var m = d.getMonth();

        if (m == 0) {
            return 'Jan';
        } else if (m == 1) {
            return 'Feb';
        } else if (m == 2) {
            return 'Mar';
        } else if (m == 3) {
            return 'Apr';
        } else if (m == 4) {
            return 'May';
        } else if (m == 5) {
            return 'Jun';
        } else if (m == 6) {
            return 'Jul';
        } else if (m == 7) {
            return 'Aug';
        } else if (m == 8) {
            return 'Sep';
        } else if (m == 9) {
            return 'Oct';
        } else if (m == 10) {
            return 'Nov';
        } else if (m == 11) {
            return 'Dec';
        }
    }

    var dd = date.getDate();

    var time = function(d) {
        var h = d.getHours();
        var m = d.getMinutes();

        return h + ':' + m;
    }

    return day(date) + ' ' + month(date) + ' ' + dd + '<br>' + time(date);
}

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

// Constructs the ladder Items
var ladderItem = function(array, number) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(array.short_name);
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('img').attr('src', teamImg(array.code));
    $('.c-ladder__item-' + number + ' div.c-ladder__played').text(array.stats.played);
    $('.c-ladder__item-' + number + ' div.c-ladder__wins').text(array.stats.won);
    $('.c-ladder__item-' + number + ' div.c-ladder__draws').text(array.stats.drawn);
    $('.c-ladder__item-' + number + ' div.c-ladder__losses').text(array.stats.lost);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-for').text(array.stats.for);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-against').text(array.stats.against);
    $('.c-ladder__item-' + number + ' div.c-ladder__percentage').text(array.stats.percentage);
    $('.c-ladder__item-' + number + ' div.c-ladder__points').text(array.stats.points);
}

// Applies the correct team image to the referenced team code.
var teamImg = function (team) {
    if (team == 'ADE') {
        return 'img/teams/crows.svg';
    } else if (team == 'BRI') {
        return 'img/teams/lions.svg';
    } else if (team == 'CAR') {
        return 'img/teams/blues.svg';
    } else if (team == 'COL') {
        return 'img/teams/magpies.svg';
    } else if (team == 'ESS') {
        return 'img/teams/bombers.svg';
    } else if (team == 'FRE') {
        return 'img/teams/dockers.svg';
    } else if (team == 'GEE') {
        return 'img/teams/cats.svg';
    } else if (team == 'GCS') {
        return 'img/teams/suns.svg';
    } else if (team == 'GWS') {
        return 'img/teams/gws.svg';
    } else if (team == 'HAW') {
        return 'img/teams/hawks.svg';
    } else if (team == 'MEL') {
        return 'img/teams/demons.svg';
    } else if (team == 'NM') {
        return 'img/teams/kangaroos.svg';
    } else if (team == 'POR') {
        return 'img/teams/port.svg';
    } else if (team == 'RIC') {
        return 'img/teams/tigers.svg';
    } else if (team == 'STK') {
        return 'img/teams/saints.svg';
    } else if (team == 'SYD') {
        return 'img/teams/swans.svg';
    } else if (team == 'WCE') {
        return 'img/teams/eagles.svg';
    } else if (team == 'WBD') {
        return 'img/teams/dogs.svg';
    }
}
//
// Layout - Vertically Centered
// ==========================================================================

// ***
// This function vertically centers an object element within 
// its parent element by calculating the height of the parent,
// the height of the child and adding padding to the top and 
// bottom of the child element.
//
// Parent Element
// --------------
// The parent element must be a jQuery object.
// eg: $('.o-vert-center')
//
// Child Element
// -------------
// The child element must be a direct child of the parent and
// be passed through the function with only its classname.
// eg: '.o-vert-center__object'
// *

function vertCenter(element, child) {

    var parentHeight = element.parent().height();
    // This will give the element the same height
    // and line-height as it's parent container.
    element.css({
        'height': parentHeight + 'px',
        'line-height': parentHeight + 'px'
    });
    
    element.children(child).css({
        'height': element.children(child).height(),
        'padding-top': ( parentHeight - element.children(child).height() )/2 + 'px',
        'padding-bottom': ( parentHeight - element.children(child).height() )/2 + 'px'
    });
}

function clearStyles(element, child) {
    element.attr('style', '');
    child.attr('style', '');
}

// Function applied to the following parent/child classes:
// vertCenter($('.o-vert-center'), '.o-vert-center__object');

// On window resize clear previous styles then re-run the function.
$(window).on('resize', function() {
    // clearStyles($('.o-vert-center'), $('.o-vert-center__object'));
    // vertCenter($('.o-vert-center'), '.o-vert-center__object');
});


//
// UI - Buttons
// ==========================================================================

// Variables
// var gitButton = document.getElementById('js-button-github');

// gitButton.addEventListener('click', function(){
//     window.open('https://github.com/Toshibot/webapp-boilerplate', '_blank');
// });

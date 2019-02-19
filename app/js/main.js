// ==========================================================================
// Initialisation
// ==========================================================================

// Core Functions 
dataLadder();
dataFixture();
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

function dataFixture() {
    
    // $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/123/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

    // Dummy Dev File
    $.getJSON('../data/data-fixture.json', function(json){

        // console.log(json);
        console.log('fixture loaded');
        console.log(json);
        
        var today = new Date;
        var testDate = new Date('2018-04-24');
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

}



//
// Data
// ====
function dataLadder() { 

    // $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/123/ladder.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function(json){

    $.getJSON('../data/dummy_data.json', function (json) {
        var round = $('.c-ladder__round');

        // console.log(json);
        // Round Number
        // round.text('AFL Ladder ' + json.round.name);

        // Construct the Ladder
        for (i = 0; i < json.teams.length; i++) {
            const element = json.teams[i];
            ladderItem(element, i+1);
        }
    });

}

function dateTime(d) {

    var date = new Date(d);

    function day(d) {
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

    function month(d) {
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

    function time(d) {
        var h = d.getHours();
        var m = d.getMinutes();

        return h + ':' + m;
    }

    var dateObj = {
        day: day(date),
        month: month(date),
        date: dd,
        time: time(date)
    }

    return dateObj;
}

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
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                '<img class="js-team-img" src="' + awayKit(array.team_B.code) + '" />' +
                '<span class="js-team-text">' + array.team_B.code + '</span>' +
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
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + homeKit(array.team_A.code) + '" />' +
                    '<span class="js-team-text">' + array.team_A.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(array.team_B.code) + '" />' +
                    '<span class="js-team-text">' + array.team_B.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.venue.name + '</div>' +
            '</div>'
        );

    } else {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--in-progress">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + homeKit(array.team_A.code) + '" />' +
                    '<span class="js-team-text">' + array.team_A.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(array.team_B.code) + '" />' +
                    '<span class="js-team-text">' + array.team_B.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.venue.name + '</div>' +
            '</div>'
        );
    }
}
function homeKit(array) {
    var team = array;

    if (team == 'ADE') {
        return 'img/teams/crows-home.png';
    } else if (team == 'BRI') {
        return 'img/teams/lions-home.png';
    } else if (team == 'CAR') {
        return 'img/teams/blues-home.png';
    } else if (team == 'COL') {
        return 'img/teams/magpies-home.png';
    } else if (team == 'ESS') {
        return 'img/teams/bombers-home.png';
    } else if (team == 'FRE') {
        return 'img/teams/dockers-home.png';
    } else if (team == 'GEE') {
        return 'img/teams/cats-home.png';
    } else if (team == 'GCS') {
        return 'img/teams/suns-home.png';
    } else if (team == 'GWS') {
        return 'img/teams/gws-home.png';
    } else if (team == 'HAW') {
        return 'img/teams/hawks-home.png';
    } else if (team == 'MEL') {
        return 'img/teams/demons-home.png';
    } else if (team == 'NM') {
        return 'img/teams/kangaroos-home.png';
    } else if (team == 'POR') {
        return 'img/teams/port-home.png';
    } else if (team == 'RIC') {
        return 'img/teams/tigers-home.png';
    } else if (team == 'STK') {
        return 'img/teams/saints-home.png';
    } else if (team == 'SYD') {
        return 'img/teams/swans-home.png';
    } else if (team == 'WCE') {
        return 'img/teams/eagles-home.png';
    } else if (team == 'WBD') {
        return 'img/teams/dogs-home.png';
    }
}

function awayKit(array) {
    var team = array;

    if (team == 'ADE') {
        return 'img/teams/crows-away.png';
    } else if (team == 'BRI') {
        return 'img/teams/lions-away.png';
    } else if (team == 'CAR') {
        return 'img/teams/blues-clash.png';
    } else if (team == 'COL') {
        return 'img/teams/magpies-clash.png';
    } else if (team == 'ESS') {
        return 'img/teams/bombers-clash.png';
    } else if (team == 'FRE') {
        return 'img/teams/dockers-away.png';
    } else if (team == 'GEE') {
        return 'img/teams/cats-home.png';
    } else if (team == 'GCS') {
        return 'img/teams/suns-away.png';
    } else if (team == 'GWS') {
        return 'img/teams/gws-away.png';
    } else if (team == 'HAW') {
        return 'img/teams/hawks-away.png';
    } else if (team == 'MEL') {
        return 'img/teams/demons-clash.png';
    } else if (team == 'NM') {
        return 'img/teams/kangaroos-clash.png';
    } else if (team == 'POR') {
        return 'img/teams/port-away.png';
    } else if (team == 'RIC') {
        return 'img/teams/tigers-away.png';
    } else if (team == 'STK') {
        return 'img/teams/saints-away.png';
    } else if (team == 'SYD') {
        return 'img/teams/swans-home.png';
    } else if (team == 'WCE') {
        return 'img/teams/eagles-away.png';
    } else if (team == 'WBD') {
        return 'img/teams/dogs-away.png';
    }
}

// Constructs the ladder Items
function ladderItem(array, number) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(array.code);
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
function roundCalc(d) {
    var currentDate = new Date(d);
    var month = currentDate.getMonth();
    var date = currentDate.getDate();

    // Round 1
    if (month == 1 && date <= 28 || month == 2 && date <= 25) {
        return 1;

    // Round 2
    } else if (month == 2 && date <= 30) {
        return 2;

    // Round 3
    } else if(month == 3 && date <= 8) {
        return 3;

    // Round 4    
    } else if (month == 3 && date <= 15) {
        return 4;

    // Round 5    
    } else if (month == 3 && date <= 25) {
        return 5;

    // Round 6
    } else if (month == 3 && date <= 29) {
        return 6;

    // Round 7
    } else if (month == 4 && date <= 6) {
        return 7;

    // Round 8    
    } else if (month == 4 && date <= 13) {
        return 8;

    // Round 9
    } else if (month == 4 && date <= 20) {
        return 9;

    // Round 10
    } else if (month == 4 && date <= 27) {
        return 10;

    // Round 11
    } else if (month == 4 && date <= 31 || month == 5 && date <= 3) {
        return 11;

    // Round 12
    } else if (month == 5 && date <= 11) {
        return 12;

    // Round 13
    } else if (month == 5 && date <= 17) {
        return 13;

    // Round 14
    } else if (month == 5 && date <= 24) {
        return 14;

    // Round 15
    } else if (month == 5 && date <= 31 || month == 6 && date <= 1) {
        return 15;

    // Round 16
    } else if (month == 6 && date <= 8) {
        return 16;

    // Round 17
    } else if (month == 6 && date <= 15) {
        return 17;

    // Round 18
    } else if (month == 6 && date <= 22) {
        return 18;

    // Round 19
    } else if (month == 6 && date <= 29) {
        return 19;

    // Round 20
    } else if (month == 6 && date <= 31 || month == 7 && date <= 5) {
        return 20;

    // Round 21
    } else if (month == 7 && date <= 12) {
        return 21;

    // Round 22
    } else if (month == 7 && date <= 19) {
        return 22;

    // Round 23
    } else if (month == 7 && date <= 23) {
        return 23;
    }

}

// Applies the correct team image to the referenced team code.
function teamImg(team) {
    if (team == 'ADE') {
        return 'img/teams/crows.png';
    } else if (team == 'BRI') {
        return 'img/teams/lions.png';
    } else if (team == 'CAR') {
        return 'img/teams/blues.png';
    } else if (team == 'COL') {
        return 'img/teams/magpies.png';
    } else if (team == 'ESS') {
        return 'img/teams/bombers.png';
    } else if (team == 'FRE') {
        return 'img/teams/dockers.png';
    } else if (team == 'GEE') {
        return 'img/teams/cats.png';
    } else if (team == 'GCS') {
        return 'img/teams/suns.png';
    } else if (team == 'GWS') {
        return 'img/teams/gws.png';
    } else if (team == 'HAW') {
        return 'img/teams/hawks.png';
    } else if (team == 'MEL') {
        return 'img/teams/demons.png';
    } else if (team == 'NM') {
        return 'img/teams/kangaroos.png';
    } else if (team == 'POR') {
        return 'img/teams/port.png';
    } else if (team == 'RIC') {
        return 'img/teams/tigers.png';
    } else if (team == 'STK') {
        return 'img/teams/saints.png';
    } else if (team == 'SYD') {
        return 'img/teams/swans.png';
    } else if (team == 'WCE') {
        return 'img/teams/eagles.png';
    } else if (team == 'WBD') {
        return 'img/teams/dogs.png';
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

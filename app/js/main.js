// ==========================================================================
// Initialisation
// ==========================================================================

// Core Functions 
data();
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
function scroll() {
   $(window).on('scroll', function(){
      if ($(this).scrollTop() >= $('.c-fixture__round').offset().top - 500){
         $('.js-scrollto-fixture').addClass('is-hidden');
      } else {
         $('.js-scrollto-fixture').removeClass('is-hidden');
      }
   });

   $('.js-scrollto-fixture').on('click', function(){
      $('html, body').animate(
         {
            scrollTop: $('.js-game-pregame').offset().top - 36,
         }, {
            duration: 400,
            specialEasing: 'easeInOut'
         }
      )
   });

   $('.c-fixture__game').each(function(){
      if ($(this).hasClass('c-fixture__game--in-progress')){
         $('.js-scrollto-fixture').addClass('has-live');
         $('.js-scrollto-fixture').on('click', function(){
            $('html, body').animate(
               {
                  scrollTop: $('.c-fixture__game--in-progress').offset().top - 36,
               }, {
                  duration: 400,
                  specialEasing: 'easeInOut'
               }
            )
         });
      }
   });
}
var data_club = {
    ADE: {
        name: 'Adelaide',
        logo: 'img/teams/crows.png',
        kit: {
            home: 'img/teams/crows-home.png',
            away: 'img/teams/crows-away.png',
            clash: {
                kit: 'img/teams/crows-home.png',
                teams: ['HAW']
            }
        }
    },
    BRI: {
        name: 'Brisbane',
        logo: 'img/teams/lions.png',
        kit: {
            home: 'img/teams/lions-home.png',
            away: 'img/teams/lions-away.png',
            clash: {
                kit: 'img/teams/lions-clash.png',
                teams: ['SYD','GWS','GCS','WCE','ADE','FRE','POR', 'MEL']
            }
        }
    },
    CAR: {
        name: 'Carlton',
        logo: 'img/teams/blues.png',
        kit: {
            home: 'img/teams/blues-home.png',
            away: 'img/teams/blues-away.png',
            clash: {
                kit: 'img/teams/blues-home.png',
                teams: ['GEE', 'SYD']
            }
        }
    },
    COL: {
        name: 'Collingwood',
        logo: 'img/teams/magpies.png',
        kit: {
            home: 'img/teams/magpies-home.png',
            away: 'img/teams/magpies-away.png',
            clash: {
                kit: 'img/teams/magpies-home.png',
                teams: ['SYD', 'GEE']
            }
        }
    },
    ESS: {
        name: 'Essendon',
        logo: 'img/teams/bombers.png',
        kit: {
            home: 'img/teams/bombers-home.png',
            away: 'img/teams/bombers-home.png',
            clash: {
                kit: 'img/teams/bombers-clash.png',
                teams: ['MEL', 'COL', 'CAR', 'POR', 'STK', 'RIC']
            }
        }
    },
    FRE: {
        name: 'Fremantle',
        logo: 'img/teams/dockers.png',
        kit: {
            home: 'img/teams/dockers-home.png',
            away: 'img/teams/dockers-away.png',
            clash: {
                kit: 'img/teams/dockers-home.png',
                teams: ['SYD', 'GEE']
            }
        }
    },
    GEE: {
        name: 'Geelong',
        logo: 'img/teams/lions.png',
        kit: {
            home: 'img/teams/cats-home.png',
            away: 'img/teams/cats-home.png',
            clash: {
                kit: 'img/teams/cats-clash.png',
                teams: []
            }
        }
    },
    GCS: {
        name: 'Gold Coast',
        logo: 'img/teams/suns.png',
        kit: {
            home: 'img/teams/suns-home.png',
            away: 'img/teams/suns-away.png',
            clash: {
                kit: 'img/teams/suns-home.png',
                teams: ['WBD', 'CAR', 'FRE', 'NM', 'WCE']
            }
        }
    },
    GWS: {
        name: 'Gr. W. Sydney',
        logo: 'img/teams/gws.png',
        kit: {
            home: 'img/teams/gws-home.png',
            away: 'img/teams/gws-away.png',
            clash: {
                kit: 'img/teams/gws-home.png',
                teams: ['SYD', 'GEE']
            }
        }
    },
    HAW: {
        name: 'Hawthorn',
        logo: 'img/teams/hawks.png',
        kit: {
            home: 'img/teams/hawks-home.png',
            away: 'img/teams/hawks-away.png',
            clash: {
                kit: 'img/teams/hawks-home.png',
                teams: []
            }
        }
    },
    MEL: {
        name: 'Melbourne',
        logo: 'img/teams/demons.png',
        kit: {
            home: 'img/teams/demons-home.png',
            away: 'img/teams/demons-away.png',
            clash: {
                kit: 'img/teams/demons-home.png',
                teams: []
            }
        }
    },
    NM: {
        name: 'N. Melbourne',
        logo: 'img/teams/kangaroos.png',
        kit: {
            home: 'img/teams/kangaroos-home.png',
            away: 'img/teams/kangaroos-clash.png',
            clash: {
                kit: 'img/teams/kangaroos-home.png',
                teams: ['COL']
            }
        }
    },
    POR: {
        name: 'Port Adelaide',
        logo: 'img/teams/power.png',
        kit: {
            home: 'img/teams/power-home.png',
            away: 'img/teams/power-away.png',
            clash: {
                kit: 'img/teams/power-home.png',
                teams: ['SYD', 'GEE']
            }
        }
    },
    RIC: {
        name: 'Richmond',
        logo: 'img/teams/tigers.png',
        kit: {
            home: 'img/teams/tigers-home.png',
            away: 'img/teams/tigers-away.png',
            clash: {
                kit: 'img/teams/tigers-home.png',
                teams: ['HAW']
            }
        }
    },
    STK: {
        name: 'St. Kilda',
        logo: 'img/teams/saints.png',
        kit: {
            home: 'img/teams/saints-home.png',
            away: 'img/teams/saints-away.png',
            clash: {
                kit: 'img/teams/saints-home.png',
                teams: ['SYD', 'GEE']
            }
        }
    },
    SYD: {
        name: 'Sydney',
        logo: 'img/teams/swans.png',
        kit: {
            home: 'img/teams/swans-home.png',
            away: 'img/teams/swans-home.png',
            clash: {
                kit: 'img/teams/swans-home.png',
                teams: []
            }
        }
    },
    WBD: {
        name: 'W. Bulldogs',
        logo: 'img/teams/dogs.png',
        kit: {
            home: 'img/teams/dogs-home.png',
            away: 'img/teams/dogs-away.png',
            clash: {
                kit: 'img/teams/dogs-home.png',
                teams: ['SYD','GEE']
            }
        }
    },
    WCE: {
        name: 'West Coast',
        logo: 'img/teams/eagles.png',
        kit: {
            home: 'img/teams/eagles-home.png',
            away: 'img/teams/eagles-away.png',
            clash: {
                kit: 'img/teams/eagles-home.png',
                teams: ['HAW']
            }
        }
    }
}

// Data - Fixture/Results

function dataFixture(clubs) {

    $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/125/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

        // Dummy Dev File
        // $.getJSON('../data/data-fixture.json', function(json){

        // console.log(json);
        console.log('fixture loaded');
        console.log(json);

        $.getJSON('data/fixture.json', function (round_data) {

            var today = new Date;
            var currentRound = [];
            var finalsData = [];
            var currentRoundNo = roundCalc(today, round_data);

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

                fixtureItem(element, clubs);
            }

        // scroll();

        });

        for (i = 0; i < json.length; i++) {
            const e = json[i];

            if (e.is_final == true) {
                finalsData.push(e);
            }
        }

        // finals(finalsData, clubs);

    });
}

//
// Data
// ====

function dataLadder(clubs) {

    $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/125/ladder.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

        // $.getJSON('../data/dummy_data.json', function (json) {
        var round = $('.c-ladder__round');

        // console.log(json);
        // Round Number
        // round.text('AFL Ladder ' + json.round.name);

        // Construct the Ladder
        for (i = 0; i < json.teams.length; i++) {
            const ladder_data = json.teams[i];
            const club_data = clubs[ladder_data.code];
            ladderItem(ladder_data, i + 1, club_data);
        }

    });
}
function data() {
    $.getJSON('data/clubs.json', function (clubs) {
        dataLadder(clubs);
        dataFixture(clubs);
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
        var m = ('0'+d.getMinutes()).slice(-2);

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
function finals(data, clubs) {

   console.log(data);

   var grand_final = data[8];
   var home_team = data.team_A;
   var away_team = data.team_B;
   var home_club_data = clubs[home_team.code];
   var away_club_data = clubs[away_team.code];

   $('.js-finals-series-year').text(data[0].season.year);
   $('.js-premiership-year').text(data[0].season.year);

   function finalBuilder(element, final) {
      var date = dateTime(final.match_start_date);
      var dateElement = element.children('.c-date');
      var team_1 = element.children('.js-fixture-team-1');
      var team_2 = element.children('.js-fixture-team-2');
      var venue = element.children('.js-fixture-venue');

      // Date ====
      if (final.match_status == 'Pre Game') {
         dateElement.children('.c-date__day').text(date.day);
         dateElement.children('.c-date__month').text(date.month);
         dateElement.children('.c-date__date').text(date.date);
         dateElement.children('.c-date__time').text(date.time);
      } else if (final.match_status == 'Full Time') {
         element.addClass('full-time');
         dateElement.children('.c-date__day').text(date.day);
         dateElement.children('.c-date__month').text(date.month);
         dateElement.children('.c-date__date').text(date.date);
         dateElement.children('.c-date__time').text('FT');
      } else {
         element.addClass('live');
         dateElement.append(
            '<span class="c-date__live">LIVE</span>' +
            '<span class="c-date__status">' + final.match_status + '</span>' +
            '<span class="c-date__played-time">' + final.match_time + '</span>'
         );
      }

      // Teams ====
      // Team 1
      team_1.children('.js-team-img').attr('src', home_club_data.kit.home);
      team_1.children('.js-team-text').text(home_club_data.name);
      if (final.match_status !== 'Pre Game') {
         team_1.children('.js-score-text').text('').append(home_team.goals + '. ' + home_team.behinds + '. <span class="c-fixture__score-total">' + home_team.score + '</span>');
      }
      // Team 2
      team_2.children('.js-team-img').attr('src', awayKit(away_club_data.kit, home_team.code));
      team_2.children('.js-team-text').text(away_club_data.name);
      if (final.match_status !== 'Pre Game') {
         team_2.children('.js-score-text').text('').append(away_team.goals + '. ' + away_team.behinds + '. <span class="c-fixture__score-total">' + away_team.score + '</span>');
      }

      // Venue ====
      venue.text(final.venue.name);

   }

   function premiers(data) {
      if (data.match_status_normalised == "post" && home_team.score > away_team.score) {
         return {
            name: home_club_data.name,
            bg: home_club_data.pattern
         };
      } else if (data.match_status_normalised == "post" && away_team.score > home_team.score) {
         return {
            name: away_club_data.name,
            bg: away_club_data.pattern
         };
      } else {
         return {
            name: '?',
            bg: 'img/teams/'
         };
      }
   }

   // Qualifying / Elimiation Finals =========
   // First Qualifying Final
   finalBuilder($('.js-finals-qf1'), data[0]);
   // Second Qualifying Final
   finalBuilder($('.js-finals-qf2'), data[1]);
   // First Elimination Final
   finalBuilder($('.js-finals-ef1'), data[3]);
   // Second Elimination Final
   finalBuilder($('.js-finals-ef2'), data[2]);


   // Semi Finals ============
   // First Semi Final
   finalBuilder($('.js-finals-sf1'), data[5]);
   // Second Semi Final
   finalBuilder($('.js-finals-sf2'), data[4]);

   // Preliminary Finals ============
   // First Prelim Final
   finalBuilder($('.js-finals-pf1'), data[6]);
   // Second Prelim Final
   finalBuilder($('.js-finals-pf2'), data[7]);

   // Grand Final ==============
   finalBuilder($('.js-finals-gf'), grand_final);

   // Premiers ============
   $('.js-premiers-name').text(premiers(grand_final).name);
   $('.js-premiers-bg').css({
      'background-image': 'url(' + premiers(grand_final).bg + ')',
      'background-size': 'cover'
   });

}
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
                    '<span class="c-fixture__score js-score-text">' + home_team.goals + '. ' + home_team.behinds + '. <span class="c-fixture__score-total">' + home_team.score + '</span></span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(away_club_data.kit, home_team.code) + '" />' +
                    '<span class="js-team-text">' + away_club_data.name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + away_team.goals + '. ' + away_team.behinds + '. <span class="c-fixture__score-total">' + away_team.score + '</span></span>' +
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
                    '<span class="c-fixture__score js-score-text">' + home_team.goals + '. ' + home_team.behinds + '. <span class="c-fixture__score-total">' + home_team.score + '</span></span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(away_club_data.kit, home_team.code) + '" />' +
                    '<span class="js-team-text">' + away_club_data.name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + away_team.goals + '. ' + away_team.behinds + '. <span class="c-fixture__score-total">' + away_team.score + '</span></span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + fixture_data.venue.name + '</div>' +
            '</div>'
        );
    }
}
function awayKit(kit, home_team) {
    var clash_data = kit.clash.teams;

    if (clash_data.includes(home_team)) {
        return kit.clash.kit
    } else {
        return kit.away;
    }
}

// Constructs the ladder Items
function ladderItem(ladder_data, number, club_data) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(club_data.name);
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('img').attr('src', club_data.logo);
    $('.c-ladder__item-' + number + ' div.c-ladder__played').text(ladder_data.stats.played);
    $('.c-ladder__item-' + number + ' div.c-ladder__wins').text(ladder_data.stats.won);
    $('.c-ladder__item-' + number + ' div.c-ladder__draws').text(ladder_data.stats.drawn);
    $('.c-ladder__item-' + number + ' div.c-ladder__losses').text(ladder_data.stats.lost);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-for').text(ladder_data.stats.for);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-against').text(ladder_data.stats.against);
    $('.c-ladder__item-' + number + ' div.c-ladder__percentage').text(ladder_data.stats.percentage);
    $('.c-ladder__item-' + number + ' div.c-ladder__points').text(ladder_data.stats.points);
}
function roundCalc(target_date, round_data) {

    for (i = 0; i < round_data.length; i++) {
        const round = round_data[i];
        const round_start = new Date(round.start);
        const round_end = new Date(round.end);

        if (round_start < target_date && target_date < round_end ) {
            return round.round;
        } 
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

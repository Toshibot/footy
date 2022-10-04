// ==========================================================================
// Initialisation
// ==========================================================================

// Core Functions 
data();
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

// Data - Fixture/Results

function dataFixture(clubs) {

    $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/126/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

        // Dummy Dev File
        // $.getJSON('../data/data-fixture.json', function(json){

        // console.log(json);
        // console.log('fixture loaded');
        // console.log(json);

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

            // console.log(currentRound);

            var game1 = currentRound[8];

            for (i = 0; i < currentRound.length; i++) {
                const element = currentRound[i];

                fixtureItem(element, clubs);
            }

            // scroll();

        });

        var finalsData = [];

        for (i = 0; i < json.length; i++) {
            const e = json[i];

            if (e.is_final == true) {
                finalsData.push(e);
            }
        }

        console.log(finalsData);

        finals(finalsData, clubs);

    });
}

//
// Data
// ====

function dataLadder(clubs) {

    $.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/126/ladder.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9', function (json) {

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

   var grand_final = data[8];

   $('.js-finals-series-year').text(data[0].season.year);
   $('.js-premiership-year').text(data[0].season.year);

   function finalBuilder(element, final) {
      var home_team = final.team_A;
      var away_team = final.team_B;
      var home_club_data = clubs[home_team.code];
      var away_club_data = clubs[away_team.code];
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
      if (away_team.id !== null) {
         team_2.children('.js-team-img').attr('src', awayKit(away_club_data.kit, home_team.code));
         team_2.children('.js-team-text').text(away_club_data.name);
      } else {
         
      }
      if (final.match_status !== 'Pre Game') {
         team_2.children('.js-score-text').text('').append(away_team.goals + '. ' + away_team.behinds + '. <span class="c-fixture__score-total">' + away_team.score + '</span>');
      }

      // Venue ====
      venue.text(final.venue.name);

   }

   function premiers(data, clubs) {
      var home_team = data.team_A;
      var away_team = data.team_B;
      var home_club_data = clubs[home_team.code];
      var away_club_data = clubs[away_team.code];
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
            // bg: 'img/teams/'
         };
      }
   }

   // Qualifying / Elimiation Finals =========
   // First Qualifying Final
   finalBuilder($('.js-finals-qf1'), data[1]);
   // Second Qualifying Final
   finalBuilder($('.js-finals-qf2'), data[2]);
   // First Elimination Final
   finalBuilder($('.js-finals-ef1'), data[0]);
   // Second Elimination Final
   finalBuilder($('.js-finals-ef2'), data[3]);


   // Semi Finals ============
   // First Semi Final
   finalBuilder($('.js-finals-sf1'), data[4]);
   // Second Semi Final
   finalBuilder($('.js-finals-sf2'), data[5]);

   // Preliminary Finals ============
   // First Prelim Final
   finalBuilder($('.js-finals-pf1'), data[7]);
   // Second Prelim Final
   finalBuilder($('.js-finals-pf2'), data[6]);

   // Grand Final ==============
   finalBuilder($('.js-finals-gf'), grand_final);

   // Premiers ============
   $('.js-premiers-name').text(premiers(grand_final, clubs).name);
   $('.js-premiers-bg').css({
      'background-image': 'url(' + premiers(grand_final, clubs).bg + ')',
      // 'background-size': 'cover'
      'background-size': '50%',
      'background-repeat': 'repeat'
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

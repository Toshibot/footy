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
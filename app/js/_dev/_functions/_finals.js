function finals(data) {

   console.log(data);
   
   var grand_final = data[8];

   $('.js-finals-series-year').text(data[0].season.year);
   $('.js-premiership-year').text(data[0].season.year);

   function finalBuilder(element, array) {
      var final = array;
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
      team_1.children('.js-team-img').attr('src', homeKit(final.team_A.code));
      team_1.children('.js-team-text').text(teamAbrev(final.team_A.code, final.team_A.name));
      if (final.match_status !== 'Pre Game') {
         team_1.children('.js-score-text').text('').append( final.team_A.goals + '. ' + final.team_A.behinds + '. <span class="c-fixture__score-total">' + final.team_A.score + '</span>' );
      }
      // Team 2
      team_2.children('.js-team-img').attr('src', awayKit(final.team_B.code, final.team_A.code));
      team_2.children('.js-team-text').text(teamAbrev(final.team_B.code, final.team_B.name));
      if (final.match_status !== 'Pre Game') {
         team_2.children('.js-score-text').text('').append( final.team_B.goals + '. ' + final.team_B.behinds + '. <span class="c-fixture__score-total">' + final.team_B.score + '</span>' );
      }

      // Venue ====
      venue.text(final.venue.name);

   }

   function premiers(data) {
      if (data.match_status_normalised == "post" && data.team_A.score > data.team_B.score) {
         return {
            name: teamAbrev(data.team_A.code), 
            bg: team_bg(data.team_A.code)
         };
      } else if (data.match_status_normalised == "post" && data.team_B.score > data.team_A.score) {
         return {
            name: teamAbrev(data.team_B.code), 
            bg: team_bg(data.team_B.code)
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
   finalBuilder($('.js-finals-qf1'), data[1]);
   // Second Qualifying Final
   finalBuilder($('.js-finals-qf2'), data[3]);
   // First Elimination Final
   finalBuilder($('.js-finals-ef1'), data[0]);
   // Second Elimination Final
   finalBuilder($('.js-finals-ef2'), data[2]);


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
   $('.js-premiers-name').text(premiers(grand_final).name);
   $('.js-premiers-bg').css('background-image', 'url('+ premiers(grand_final).bg +')');

}

//
// Data
// ====

$.getJSON('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/122/ladder.json', function(json){
    var ladderTeam = $('.c-ladder__team');
    var ladderWins = $('.c-ladder__wins');

    console.log(json);
    // 1
    $('.c-ladder__item-1 div.c-ladder__team').text(json.teams[0].short_name);
    $('.c-ladder__item-1 div.c-ladder__played').text(json.teams[0].stats.played);
    $('.c-ladder__item-1 div.c-ladder__wins').text(json.teams[0].stats.won);
    $('.c-ladder__item-1 div.c-ladder__draws').text(json.teams[0].stats.drawn);
    $('.c-ladder__item-1 div.c-ladder__losses').text(json.teams[0].stats.lost);
    $('.c-ladder__item-1 div.c-ladder__points-for').text(json.teams[0].stats.for);
    $('.c-ladder__item-1 div.c-ladder__points-against').text(json.teams[0].stats.against);
    $('.c-ladder__item-1 div.c-ladder__percentage').text(json.teams[0].stats.percentage);
    $('.c-ladder__item-1 div.c-ladder__points').text(json.teams[0].stats.points);
    // 2
    $('.c-ladder__item-2 div.c-ladder__team').text(json.teams[1].short_name);
    $('.c-ladder__item-2 div.c-ladder__played').text(json.teams[1].stats.played);
    $('.c-ladder__item-2 div.c-ladder__wins').text(json.teams[1].stats.won);
    $('.c-ladder__item-2 div.c-ladder__draws').text(json.teams[1].stats.drawn);
    $('.c-ladder__item-2 div.c-ladder__losses').text(json.teams[1].stats.lost);
    $('.c-ladder__item-2 div.c-ladder__points-for').text(json.teams[1].stats.for);
    $('.c-ladder__item-2 div.c-ladder__points-against').text(json.teams[1].stats.against);
    $('.c-ladder__item-2 div.c-ladder__percentage').text(json.teams[1].stats.percentage);
    $('.c-ladder__item-2 div.c-ladder__points').text(json.teams[1].stats.points);
    // 3
    $('.c-ladder__item-3 div.c-ladder__team').text(json.teams[2].short_name);
    $('.c-ladder__item-3 div.c-ladder__played').text(json.teams[2].stats.played);
    $('.c-ladder__item-3 div.c-ladder__wins').text(json.teams[2].stats.won);
    $('.c-ladder__item-3 div.c-ladder__draws').text(json.teams[2].stats.drawn);
    $('.c-ladder__item-3 div.c-ladder__losses').text(json.teams[2].stats.lost);
    $('.c-ladder__item-3 div.c-ladder__points-for').text(json.teams[2].stats.for);
    $('.c-ladder__item-3 div.c-ladder__points-against').text(json.teams[2].stats.against);
    $('.c-ladder__item-3 div.c-ladder__percentage').text(json.teams[2].stats.percentage);
    $('.c-ladder__item-3 div.c-ladder__points').text(json.teams[2].stats.points);
    // 4
    $('.c-ladder__item-4 div.c-ladder__team').text(json.teams[3].short_name);
    $('.c-ladder__item-4 div.c-ladder__played').text(json.teams[3].stats.played);
    $('.c-ladder__item-4 div.c-ladder__wins').text(json.teams[3].stats.won);
    $('.c-ladder__item-4 div.c-ladder__draws').text(json.teams[3].stats.drawn);
    $('.c-ladder__item-4 div.c-ladder__losses').text(json.teams[3].stats.lost);
    $('.c-ladder__item-4 div.c-ladder__points-for').text(json.teams[3].stats.for);
    $('.c-ladder__item-4 div.c-ladder__points-against').text(json.teams[3].stats.against);
    $('.c-ladder__item-4 div.c-ladder__percentage').text(json.teams[3].stats.percentage);
    $('.c-ladder__item-4 div.c-ladder__points').text(json.teams[3].stats.points);
    // 5
    $('.c-ladder__item-5 div.c-ladder__team').text(json.teams[4].short_name);
    $('.c-ladder__item-5 div.c-ladder__played').text(json.teams[4].stats.played);
    $('.c-ladder__item-5 div.c-ladder__wins').text(json.teams[4].stats.won);
    $('.c-ladder__item-5 div.c-ladder__draws').text(json.teams[4].stats.drawn);
    $('.c-ladder__item-5 div.c-ladder__losses').text(json.teams[4].stats.lost);
    $('.c-ladder__item-5 div.c-ladder__points-for').text(json.teams[4].stats.for);
    $('.c-ladder__item-5 div.c-ladder__points-against').text(json.teams[4].stats.against);
    $('.c-ladder__item-5 div.c-ladder__percentage').text(json.teams[4].stats.percentage);
    $('.c-ladder__item-5 div.c-ladder__points').text(json.teams[4].stats.points);
    // 6
    $('.c-ladder__item-6 div.c-ladder__team').text(json.teams[5].short_name);
    $('.c-ladder__item-6 div.c-ladder__played').text(json.teams[5].stats.played);
    $('.c-ladder__item-6 div.c-ladder__wins').text(json.teams[5].stats.won);
    $('.c-ladder__item-6 div.c-ladder__draws').text(json.teams[5].stats.drawn);
    $('.c-ladder__item-6 div.c-ladder__losses').text(json.teams[5].stats.lost);
    $('.c-ladder__item-6 div.c-ladder__points-for').text(json.teams[5].stats.for);
    $('.c-ladder__item-6 div.c-ladder__points-against').text(json.teams[5].stats.against);
    $('.c-ladder__item-6 div.c-ladder__percentage').text(json.teams[5].stats.percentage);
    $('.c-ladder__item-6 div.c-ladder__points').text(json.teams[5].stats.points);
    // 7
    $('.c-ladder__item-7 div.c-ladder__team').text(json.teams[6].short_name);
    $('.c-ladder__item-7 div.c-ladder__played').text(json.teams[6].stats.played);
    $('.c-ladder__item-7 div.c-ladder__wins').text(json.teams[6].stats.won);
    $('.c-ladder__item-7 div.c-ladder__draws').text(json.teams[6].stats.drawn);
    $('.c-ladder__item-7 div.c-ladder__losses').text(json.teams[6].stats.lost);
    $('.c-ladder__item-7 div.c-ladder__points-for').text(json.teams[6].stats.for);
    $('.c-ladder__item-7 div.c-ladder__points-against').text(json.teams[6].stats.against);
    $('.c-ladder__item-7 div.c-ladder__percentage').text(json.teams[6].stats.percentage);
    $('.c-ladder__item-7 div.c-ladder__points').text(json.teams[6].stats.points);
    // 8
    $('.c-ladder__item-8 div.c-ladder__team').text(json.teams[7].short_name);
    $('.c-ladder__item-8 div.c-ladder__played').text(json.teams[7].stats.played);
    $('.c-ladder__item-8 div.c-ladder__wins').text(json.teams[7].stats.won);
    $('.c-ladder__item-8 div.c-ladder__draws').text(json.teams[7].stats.drawn);
    $('.c-ladder__item-8 div.c-ladder__losses').text(json.teams[7].stats.lost);
    $('.c-ladder__item-8 div.c-ladder__points-for').text(json.teams[7].stats.for);
    $('.c-ladder__item-8 div.c-ladder__points-against').text(json.teams[7].stats.against);
    $('.c-ladder__item-8 div.c-ladder__percentage').text(json.teams[7].stats.percentage);
    $('.c-ladder__item-8 div.c-ladder__points').text(json.teams[7].stats.points);
    // 9
    $('.c-ladder__item-9 div.c-ladder__team').text(json.teams[8].short_name);
    $('.c-ladder__item-9 div.c-ladder__played').text(json.teams[8].stats.played);
    $('.c-ladder__item-9 div.c-ladder__wins').text(json.teams[8].stats.won);
    $('.c-ladder__item-9 div.c-ladder__draws').text(json.teams[8].stats.drawn);
    $('.c-ladder__item-9 div.c-ladder__losses').text(json.teams[8].stats.lost);
    $('.c-ladder__item-9 div.c-ladder__points-for').text(json.teams[8].stats.for);
    $('.c-ladder__item-9 div.c-ladder__points-against').text(json.teams[8].stats.against);
    $('.c-ladder__item-9 div.c-ladder__percentage').text(json.teams[8].stats.percentage);
    $('.c-ladder__item-9 div.c-ladder__points').text(json.teams[8].stats.points);
    // 10
    $('.c-ladder__item-10 div.c-ladder__team').text(json.teams[9].short_name);
    $('.c-ladder__item-10 div.c-ladder__played').text(json.teams[9].stats.played);
    $('.c-ladder__item-10 div.c-ladder__wins').text(json.teams[9].stats.won);
    $('.c-ladder__item-10 div.c-ladder__draws').text(json.teams[9].stats.drawn);
    $('.c-ladder__item-10 div.c-ladder__losses').text(json.teams[9].stats.lost);
    $('.c-ladder__item-10 div.c-ladder__points-for').text(json.teams[9].stats.for);
    $('.c-ladder__item-10 div.c-ladder__points-against').text(json.teams[9].stats.against);
    $('.c-ladder__item-10 div.c-ladder__percentage').text(json.teams[9].stats.percentage);
    $('.c-ladder__item-10 div.c-ladder__points').text(json.teams[9].stats.points);
    // 11
    $('.c-ladder__item-11 div.c-ladder__team').text(json.teams[10].short_name);
    $('.c-ladder__item-11 div.c-ladder__played').text(json.teams[10].stats.played);
    $('.c-ladder__item-11 div.c-ladder__wins').text(json.teams[10].stats.won);
    $('.c-ladder__item-11 div.c-ladder__draws').text(json.teams[10].stats.drawn);
    $('.c-ladder__item-11 div.c-ladder__losses').text(json.teams[10].stats.lost);
    $('.c-ladder__item-11 div.c-ladder__points-for').text(json.teams[10].stats.for);
    $('.c-ladder__item-11 div.c-ladder__points-against').text(json.teams[10].stats.against);
    $('.c-ladder__item-11 div.c-ladder__percentage').text(json.teams[10].stats.percentage);
    $('.c-ladder__item-11 div.c-ladder__points').text(json.teams[10].stats.points);
    // 12
    $('.c-ladder__item-12 div.c-ladder__team').text(json.teams[11].short_name);
    $('.c-ladder__item-12 div.c-ladder__played').text(json.teams[11].stats.played);
    $('.c-ladder__item-12 div.c-ladder__wins').text(json.teams[11].stats.won);
    $('.c-ladder__item-12 div.c-ladder__draws').text(json.teams[11].stats.drawn);
    $('.c-ladder__item-12 div.c-ladder__losses').text(json.teams[11].stats.lost);
    $('.c-ladder__item-12 div.c-ladder__points-for').text(json.teams[11].stats.for);
    $('.c-ladder__item-12 div.c-ladder__points-against').text(json.teams[11].stats.against);
    $('.c-ladder__item-12 div.c-ladder__percentage').text(json.teams[11].stats.percentage);
    $('.c-ladder__item-12 div.c-ladder__points').text(json.teams[11].stats.points);
    // 13
    $('.c-ladder__item-13 div.c-ladder__team').text(json.teams[12].short_name);
    $('.c-ladder__item-13 div.c-ladder__played').text(json.teams[12].stats.played);
    $('.c-ladder__item-13 div.c-ladder__wins').text(json.teams[12].stats.won);
    $('.c-ladder__item-13 div.c-ladder__draws').text(json.teams[12].stats.drawn);
    $('.c-ladder__item-13 div.c-ladder__losses').text(json.teams[12].stats.lost);
    $('.c-ladder__item-13 div.c-ladder__points-for').text(json.teams[12].stats.for);
    $('.c-ladder__item-13 div.c-ladder__points-against').text(json.teams[12].stats.against);
    $('.c-ladder__item-13 div.c-ladder__percentage').text(json.teams[12].stats.percentage);
    $('.c-ladder__item-13 div.c-ladder__points').text(json.teams[12].stats.points);
    // 14
    $('.c-ladder__item-14 div.c-ladder__team').text(json.teams[13].short_name);
    $('.c-ladder__item-14 div.c-ladder__played').text(json.teams[13].stats.played);
    $('.c-ladder__item-14 div.c-ladder__wins').text(json.teams[13].stats.won);
    $('.c-ladder__item-14 div.c-ladder__draws').text(json.teams[13].stats.drawn);
    $('.c-ladder__item-14 div.c-ladder__losses').text(json.teams[13].stats.lost);
    $('.c-ladder__item-14 div.c-ladder__points-for').text(json.teams[13].stats.for);
    $('.c-ladder__item-14 div.c-ladder__points-against').text(json.teams[13].stats.against);
    $('.c-ladder__item-14 div.c-ladder__percentage').text(json.teams[13].stats.percentage);
    $('.c-ladder__item-14 div.c-ladder__points').text(json.teams[13].stats.points);
    // 15
    $('.c-ladder__item-15 div.c-ladder__team').text(json.teams[14].short_name);
    $('.c-ladder__item-15 div.c-ladder__played').text(json.teams[14].stats.played);
    $('.c-ladder__item-15 div.c-ladder__wins').text(json.teams[14].stats.won);
    $('.c-ladder__item-15 div.c-ladder__draws').text(json.teams[14].stats.drawn);
    $('.c-ladder__item-15 div.c-ladder__losses').text(json.teams[14].stats.lost);
    $('.c-ladder__item-15 div.c-ladder__points-for').text(json.teams[14].stats.for);
    $('.c-ladder__item-15 div.c-ladder__points-against').text(json.teams[14].stats.against);
    $('.c-ladder__item-15 div.c-ladder__percentage').text(json.teams[14].stats.percentage);
    $('.c-ladder__item-15 div.c-ladder__points').text(json.teams[14].stats.points);
    // 16
    $('.c-ladder__item-16 div.c-ladder__team').text(json.teams[15].short_name);
    $('.c-ladder__item-16 div.c-ladder__played').text(json.teams[15].stats.played);
    $('.c-ladder__item-16 div.c-ladder__wins').text(json.teams[15].stats.won);
    $('.c-ladder__item-16 div.c-ladder__draws').text(json.teams[15].stats.drawn);
    $('.c-ladder__item-16 div.c-ladder__losses').text(json.teams[15].stats.lost);
    $('.c-ladder__item-16 div.c-ladder__points-for').text(json.teams[15].stats.for);
    $('.c-ladder__item-16 div.c-ladder__points-against').text(json.teams[15].stats.against);
    $('.c-ladder__item-16 div.c-ladder__percentage').text(json.teams[15].stats.percentage);
    $('.c-ladder__item-16 div.c-ladder__points').text(json.teams[15].stats.points);
    // 17
    $('.c-ladder__item-17 div.c-ladder__team').text(json.teams[16].short_name);
    $('.c-ladder__item-17 div.c-ladder__played').text(json.teams[16].stats.played);
    $('.c-ladder__item-17 div.c-ladder__wins').text(json.teams[16].stats.won);
    $('.c-ladder__item-17 div.c-ladder__draws').text(json.teams[16].stats.drawn);
    $('.c-ladder__item-17 div.c-ladder__losses').text(json.teams[16].stats.lost);
    $('.c-ladder__item-17 div.c-ladder__points-for').text(json.teams[16].stats.for);
    $('.c-ladder__item-17 div.c-ladder__points-against').text(json.teams[16].stats.against);
    $('.c-ladder__item-17 div.c-ladder__percentage').text(json.teams[16].stats.percentage);
    $('.c-ladder__item-17 div.c-ladder__points').text(json.teams[16].stats.points);
    // 18
    $('.c-ladder__item-18 div.c-ladder__team').text(json.teams[17].short_name);
    $('.c-ladder__item-18 div.c-ladder__played').text(json.teams[17].stats.played);
    $('.c-ladder__item-18 div.c-ladder__wins').text(json.teams[17].stats.won);
    $('.c-ladder__item-18 div.c-ladder__draws').text(json.teams[17].stats.drawn);
    $('.c-ladder__item-18 div.c-ladder__losses').text(json.teams[17].stats.lost);
    $('.c-ladder__item-18 div.c-ladder__points-for').text(json.teams[17].stats.for);
    $('.c-ladder__item-18 div.c-ladder__points-against').text(json.teams[17].stats.against);
    $('.c-ladder__item-18 div.c-ladder__percentage').text(json.teams[17].stats.percentage);
    $('.c-ladder__item-18 div.c-ladder__points').text(json.teams[17].stats.points);


    ladder();
});
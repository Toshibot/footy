
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
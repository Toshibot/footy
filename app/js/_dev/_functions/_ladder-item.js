
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
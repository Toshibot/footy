function bye(round_number, bye_data, team_data) {
  for (i = 0; i < bye_data.length; i++) {
    const element = bye_data[i];

    if (round_number == element.round_number) {
      byeItem(element.teams, team_data, round_number);
      console.log(element);
      break;
    }
  }
}

function byeItem(data, team_data, round_number) {
  $('.c-fixture__bye--title').addClass('u-block');

  for (i = 0; i < data.length; i++) {
    var element = data[i];
    var team_item = team_data[element];

    $('.js-bye-items').after(
      '<div class="c-fixture__bye--item js-bye-item-' + round_number + '">' +
      '<img class="c-fixture__bye--item-logo" src="' + team_item.logo + '" />' +
      '<span class="c-fixture__bye--item-name">' + team_item.name + '</span>' +
      '</div>'
    );
  }
}
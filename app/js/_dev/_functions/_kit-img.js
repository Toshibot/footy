function kitSwitcher(kit_data, team, away_team, home_team, round_number) {

    if (round_number == 14 & team == "GEE") {
        return kit_data.special.wo;
    } else if (round_number == 7) {
        return kit_data.special.anzac;
    } else if (team == away_team) {
        return awayKit(kit_data, home_team);
    } else {
        return kit_data.home;
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
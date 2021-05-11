function awayKit(kit, home_team) {
    var clash_data = kit.clash.teams;

    if (clash_data.includes(home_team)) {
        return kit.clash.kit
    } else {
        return kit.away;
    }
}
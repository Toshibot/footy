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
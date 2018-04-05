var roundCalc = function(d) {
    var currentDate = new Date(d);
    var month = currentDate.getMonth();
    var date = currentDate.getDate();

    // Round 3
    if (month == 3 && date <= 8) {
        return 3;

    // Round 4    
    } else if (month == 3 && date <= 15) {
        return 4;

    // Round 5    
    } else if (month == 3 && date <= 25) {
        return 5;

    // Round 6
    } else if (month == 3 && date <= 29) {
        return 6;

    // Round 7
    } else if (month == 4 && date <= 6) {
        return 7;

    // Round 8    
    } else if (month == 4 && date <= 13) {
        return 8;

    // Round 9
    } else if (month == 4 && date <= 20) {
        return 9;

    // Round 10
    } else if (month == 4 && date <= 27) {
        return 10;

    // Round 11
    } else if (month == 5 && date <= 3) {
        return 11;
    }

}
function homeKit(team, awayTeam) {
    if (team == 'ADE') {
        return 'img/teams/crows-home.png';
    } else if (team == 'BRI') {
        return 'img/teams/lions-home.png';
    } else if (team == 'CAR') {
        return 'img/teams/blues-home.png';
    } else if (team == 'COL') {
        return 'img/teams/magpies-home.png';
    } else if (team == 'ESS') {
        return 'img/teams/bombers-home.png';
    } else if (team == 'FRE') {
        return 'img/teams/dockers-home.png';
    } else if (team == 'GEE') {
        return 'img/teams/cats-home.png';
    } else if (team == 'GCS') {
        return 'img/teams/suns-home.png';
    } else if (team == 'GWS') {
        return 'img/teams/gws-home.png';
    } else if (team == 'HAW') {
        return 'img/teams/hawks-home.png';
    } else if (team == 'MEL') {
        return 'img/teams/demons-home.png';
    } else if (team == 'NM') {
        return 'img/teams/kangaroos-home.png';
    } else if (team == 'POR') {
        if (awayTeam == 'ADE') {
            return 'img/teams/port-heritage.png';
        } else {
            return 'img/teams/port-home.png';
        }
    } else if (team == 'RIC') {
        return 'img/teams/tigers-home.png';
    } else if (team == 'STK') {
        return 'img/teams/saints-home.png';
    } else if (team == 'SYD') {
        return 'img/teams/swans-home.png';
    } else if (team == 'WCE') {
        return 'img/teams/eagles-home.png';
    } else if (team == 'WBD') {
        return 'img/teams/dogs-home.png';
    } else {
        // return 'img/teams/generic.png';
    }
}

function awayKit(team, HomeTeam) {
    if (team == 'ADE') {
        if (HomeTeam == 'GEE' || HomeTeam == 'SYD') {
            return 'img/teams/crows-home.png'
        } else {
            return 'img/teams/crows-away.png';
        }
    } else if (team == 'BRI') {
        if (HomeTeam == 'SYD' || HomeTeam == 'GWS' || HomeTeam == 'GCS' || HomeTeam == 'WCE' || HomeTeam == 'ADE' || HomeTeam == 'FRE' || HomeTeam == 'POR') {
            return 'img/teams/lions-clash.png'
        } else {
            return 'img/teams/lions-away.png';
        }
    } else if (team == 'CAR') {
        if (HomeTeam == 'GEE' || HomeTeam == 'SYD' || HomeTeam == 'HAW' || HomeTeam == 'GCS') {
            return 'img/teams/blues-home.png'
        } else {
            return 'img/teams/blues-clash.png';
        }
    } else if (team == 'COL') {
        if (HomeTeam == 'GEE') {
            return 'img/teams/magpies-home.png';
        } else {
            return 'img/teams/magpies-clash.png';
        }
    } else if (team == 'ESS') {
        if (HomeTeam == 'MEL' || HomeTeam == 'COL' || HomeTeam == 'CAR' || HomeTeam == 'POR' || HomeTeam == 'STK' || HomeTeam == 'RIC') {
            return 'img/teams/bombers-clash.png'
        } else {
            return 'img/teams/bombers-home.png';
        }
    } else if (team == 'FRE') {
        return 'img/teams/dockers-away.png';
    } else if (team == 'GEE') {
        return 'img/teams/cats-home.png';
    } else if (team == 'GCS') {
        if (HomeTeam == 'WBD' || HomeTeam == 'CAR' || HomeTeam == 'FRE' || HomeTeam == 'NM' || HomeTeam == 'WCE') {
            return 'img/teams/suns-home.png'
        } else {
            return 'img/teams/suns-away.png';
        }
    } else if (team == 'GWS') {
        if (HomeTeam == 'SYD'){
            return 'img/teams/gws-home.png';
        } else {
            return 'img/teams/gws-away.png';
        }
    } else if (team == 'HAW') {
        return 'img/teams/hawks-away.png';
    } else if (team == 'MEL') {
        return 'img/teams/demons-clash.png';
    } else if (team == 'NM') {
        return 'img/teams/kangaroos-clash.png';
    } else if (team == 'POR') {
        if (HomeTeam == 'ESS' || HomeTeam == 'COL' || HomeTeam == 'RIC') {
            return 'img/teams/port-clash.png'
        } else if (HomeTeam == 'ADE'){
            return 'img/teams/port-heritage.png'
        } else {
            return 'img/teams/port-home.png';
        }
    } else if (team == 'RIC') {
        return 'img/teams/tigers-away.png';
    } else if (team == 'STK') {
        return 'img/teams/saints-away.png';
    } else if (team == 'SYD') {
        return 'img/teams/swans-home.png';
    } else if (team == 'WCE') {
        if (HomeTeam == 'HAW') {
            return 'img/teams/eagles-home.png';
        } else {
            return 'img/teams/eagles-away.png';
        }
    } else if (team == 'WBD') {
        if (HomeTeam == 'GEE' || HomeTeam == 'SYD') {
            return 'img/teams/dogs-home.png'
        } else {
            return 'img/teams/dogs-away.png';
        }
    } else {
        // return 'img/teams/generic.png';
    }
}
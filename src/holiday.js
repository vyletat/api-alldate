var dateModule = require('./date.js')

// http://svatky.centrum.cz/svatky/statni-svatky/
const holidays = {
    1: {
        1: ['Den obnovy samostatného českého státu', 'Nový rok']
    },
    4: {
        // TODO: meni se
        2: ['Velký pátek'],
        5: ['Velikonoční pondělí'],
    },
    5: {
        1: ['Svátek práce'],
        8: ['Den vítězství', 'Den osvobození', 'Den osvobození od fašismu'],
        9: ['Den vítězství nad hitlerovským fašismem a osvobození naší vlasti Sovětskou armádou']
    },
    7: {
        5: ['Den slovanských věrozvěstů Cyrila a Metoděje'],
        6: ['Den upálení mistra Jana Husa']
    },
    9: {
        28: [ 'Den české státnosti']
    },
    10: {
        28: ['Den vzniku samostatného československého státu']
    },
    11: {
        17: ['Den boje za svobodu a demokracii']
    },
    12: {
        24: ['Štědrý den'],
        25: ['1. svátek vánoční'],
        26: ['2. svátek vánoční']
    }
}

module.exports.get = function (date) {
    const params = dateModule.getDayMonth(date);
    const day = params.day;
    const month = params.month;
    
    // TODO: Lepe asi
    if (holidays[month] == undefined || holidays[month][day] == undefined) {
        return {
            publicHoliday: false,
            holidays: null
        }
    } else {
        return {
            publicHoliday: true,
            holidays: holidays[month][day]
        }
    }
};
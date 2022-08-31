var dateModule = require('./date.js')

/**
 * CS názvy dní v týdnu
 */
const dayNames = {
    1: 'pondělí',
    2: 'úterý',
    3: 'středa',
    4: 'čtvrtek',
    5: 'pátek',
    6: 'sobota',
    7: 'neděle'
}

/**
 * CS názvy měsíců v nominativním (1. pad) a genitivním (2. pad) pádě
 */
const monthNames = {
    1: {
        nominative: 'leden',
        genitive: 'ledna'
    },
    2: {
        nominative: 'únor',
        genitive: 'února'
    },
    3: {
        nominative: 'březen',
        genitive: 'března'
    },
    4: {
        nominative: 'duben',
        genitive: 'dubna'
    },
    5: {
        nominative: 'květen',
        genitive: 'května'
    },
    6: {
        nominative: 'červen',
        genitive: 'června'
    },
    7: {
        nominative: 'červenec',
        genitive: 'července'
    },
    8: {
        nominative: 'srpen',
        genitive: 'srpna'
    },
    9: {
        nominative: 'září',
        genitive: 'září'
    },
    10: {
        nominative: 'říjen',
        genitive: 'října'
    },
    11: {
        nominative: 'listopad',
        genitive: 'listopadu'
    },
    12: {
        nominative: 'prosinec',
        genitive: 'prosince'
    }
}

/**
 * Návratové metoda vracející objekt s názvy dnů a měsíců.
 * 
 * @param {*} date 
 * @returns 
 */
module.exports.getMonth = function (date) {
    const params = dateModule.getDayMonth(date);
    const month = params.month;

    return monthNames[month]
}
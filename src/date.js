var moment = require('moment');
module.exports.FORMAT = 'YYYY-MM-DD'

/**
 * Metoda vrátí objekt s informacemi o zadaném datu.
 * 
 * @param {*} date      Datum ve formátu ISO - YYYY-MM-DD.
 * @returns             Objekt s informacemi o datu.
 */
module.exports.getISODate = function (date) {
    const momentDate = moment(date);
    return {
        date: momentDate.format(this.FORMAT),
        day: momentDate.date(),
        week: momentDate.week(),
        month: momentDate.month() + 1,        // Mesice jsou 0-11
        quater: momentDate.quarter(),
        year: momentDate.year()
    }
}

/**
 * Metoda vrátí objekt s informacemi (dnem v mesici a mesicem v roce) o zadaném datu.
 * 
 * @param {*} date      Datum ve formátu ISO - YYYY-MM-DD.
 * @returns             Objekt s dnem v mesici a mesicem v roce.
 */
module.exports.getDayMonth = function (date) {
    const momentDate = moment(date);
    return {
        day: momentDate.date(),
        month: momentDate.month() + 1           // Mesice jsou 0-11
    }
}
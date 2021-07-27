var dateModule = require('./date')
var monthNameModule = require('./month-name')
var nameDayModule = require('./name-day')

/**
 * Návratová metoda vracející adresy z Wikipedie.
 * 
 * @param {*} date 
 * @returns             Objekt vracející adresu o dnešním svátku a o datu, co se stalo.
 */
module.exports.get = function (date) {
    const params = dateModule.getDayMonth(date);
    const day = params.day;
    const month = monthNameModule.getMonth(date).nominative;
    var wikiNameDay = [];
    // Prochazeni jmen(a) co maji svatek a vygenerovani adresy
    nameDayModule.get(date).forEach(name => {
        replaceName = name.replace(' ', '_');
        wikiNameDay.push(`https://cs.wikipedia.org/wiki/${replaceName}`);
    });

    return {
        whatHappendAdress: `https://cs.wikipedia.org/wiki/${day}._${month}`,
        nameAdress: wikiNameDay
    }
}
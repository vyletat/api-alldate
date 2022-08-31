var moment = require('moment');
var localLocale = moment;

const languages = [
    'cs',
    'en',
    'de',
    'ru',
    'es'
];

/**
 * 
 * @param {*} date 
 * @returns 
 */
module.exports.getDay = function (date) {
    var names = [];
    languages.forEach(language => {
        localLocale.locale(language);
        names[language] = localLocale.weekdays(date);
    });

    return names
}
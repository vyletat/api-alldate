var moment = require('moment');
module.exports.FORMAT = 'YYYY-MM-DD'

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

module.exports.getDayMonth = function (date) {
    const momentDate = moment(date);
    return {
        day: momentDate.date(),
        month: momentDate.month() + 1           // Mesice jsou 0-11
    }
}
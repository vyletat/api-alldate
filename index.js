const app = require('express')();
const moment = require('moment');
const PORT = process.env.PORT || 8081

var holidaysModule = require('./src/holiday')
var dateModule = require('./src/date')
var monthNameModule = require('./src/month-name')
var wikiModule = require('./src/wiki')
var nameDayModule = require('./src/name-day')
var internationalDayModule = require('./src/international-day')
var significantDayModule = require('./src/significant-day')
var wishModule = require('./src/wish')

/**
 * Spusteni serveru
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`) 
})

/**
 * 
 */
app.get('/', (req, res) => {
    // TODO: Uvodni stranku s info
    res.send('Hello World!');
})

/**
 * 
 */
app.get('/today', (req, res) => {
    var today = moment();

    res.status(200).send({
        date: dateModule.getISODate(today),
        monthName: monthNameModule.getMonth(today),
        nameDay: nameDayModule.get(today),
        nameDayWish: wishModule.get(),
        publicHolidays: holidaysModule.get(today),
        internationalHoliday: internationalDayModule.get(today),
        SignificantDay: null, 
        wiki: wikiModule.get(today)
    })
});

/**
 * 
 */
app.get('/date/:givenDate', (req, res) => {
    const date = req.params.givenDate;
    
    if (!moment(date, dateModule.FORMAT).isValid()) {
        res.status(400).send({
            message: 'Spatny format data, prosim zadejte datum ve tveru YYYY-MM-DD.'
        });
    } else {
        res.status(200).send({
            date: dateModule.getISODate(date),
            monthName: monthNameModule.getMonth(date),
            nameDay: nameDayModule.get(date),
            nameDayWish: wishModule.get(),
            publicHolidays: holidaysModule.get(date),
            internationalHoliday: internationalDayModule.get(date),
            SignificantDay: null, 
            wiki: wikiModule.get(date)
        })
    }

});
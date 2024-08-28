// Import knihoven
const app = require('express')();
const express = require('express');
const router = express.Router();
const moment = require('moment');
const path = require('path');
const PORT = process.env.PORT || 8081

// Import vlastních modulů
var holidaysModule = require('./src/holiday')
var dateModule = require('./src/date')
var monthNameModule = require('./src/month-name')
var wikiModule = require('./src/wiki')
var nameDayModule = require('./src/name-day')
var internationalDayModule = require('./src/international-day')
var significantDayModule = require('./src/significant-day')
var wishModule = require('./src/wish')
var horoscopeModule = require('./src/sign-horoscope')

/**
 * Spusteni serveru
 */
app.listen(PORT, () => {
    console.log(`Server bezi na adrese http://localhost:${PORT}`) 
})

/**
 * TODO: Načtení úvodní stránky s informacemi - HTML?!
 */
app.get('/', (req, res) => {
    // TODO: Uvodni stranku s info
    res.status(200).send(``);
})

/**
 * Vratí informace k dnešnímu datu.
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
        significantDay: significantDayModule.get(today), 
        signAndHoroscope: horoscopeModule.get(today),
        wiki: wikiModule.get(today)
    })
});

/**
 * Vratí infomace k zadanému datu.
 */
app.get('/date/:givenDate', (req, res) => {
    const date = req.params.givenDate;
    
    if (!moment(date, dateModule.FORMAT).isValid()) {
        res.status(400).send({
            message: 'Spatny format data, prosim zadejte datum ve tvaru YYYY-MM-DD.'
        });
    } else {
        res.status(200).send({
            date: dateModule.getISODate(date),
            monthName: monthNameModule.getMonth(date),
            nameDay: nameDayModule.get(date),
            nameDayWish: wishModule.get(),
            publicHolidays: holidaysModule.get(date),
            internationalHoliday: internationalDayModule.get(date),
            significantDay: significantDayModule.get(date), 
            signAndHoroscope: horoscopeModule.get(date),
            wiki: wikiModule.get(date)
        })
    }
});
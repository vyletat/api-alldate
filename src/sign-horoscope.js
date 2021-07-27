const moment = require('moment');
var dateModule = require('./date.js')

/**
 * CS Znamení horoskopu
 */
const signsOfTheZodiac = [
    {
        name: 'Beran',
        from: moment(2000-03-21),
        to: moment(2000-04-20),
        symbols: {
            tree: '',
            rock: ''
        }
    },
    {
        name: 'Býk',
        from: moment(2000-04-21),
        to: moment(2000-05-20)
    },
    {
        name: 'Blíženci',
        from: moment(2000-05-21),
        to: moment(2000-06-21)
    },
    {
        name: 'Rak',
        from: moment(2000-06-22),
        to: moment(2000-07-23)
    },
    {
        name: 'Lev',
        from: '',
        to: ''
    },
    {
        name: 'Panna',
        from: '',
        to: ''
    },
    {
        name: 'Váhy',
        from: '',
        to: ''
    },
    {
        name: 'Štír',
        from: '',
        to: ''
    },
    {
        name: 'Střelec',
        from: '',
        to: ''
    },
    {
        name: 'Kozoroh',
        from: '',
        to: ''
    },
    {
        name: 'Vodnář',
        from: '',
        to: ''
    },
    {
        name: 'Ryby',
        from: '',
        to: ''
    }  
]

/**
 * CS Čínský horoskop
 */
const chineseHoroscope = [
    {
        name: 'Krysa',
        years: [2008, 1996, 1984, 1972]
    },
    {
        name: 'Buvol',
        years: [2009, 1997, 1985, 1973]
    },
    {
        name: 'Tygr',
        years: [2010, 1998, 1986, 1974]
    },
    {
        name: '',
        years: []
    },
    {
        name: '',
        years: []
    },
    {
        name: '',
        years: []
    },
    {
        name: '',
        years: []
    },
    {
        name: '',
        years: []
    },
    {
        name: '',
        years: []
    },
    {
        name: '',
        years: []
    },
    {
        name: '',
        years: []
    }
]

/**
 * 
 * 
 * @param {*} date 
 * @returns 
 */
module.exports.get = function (date) {
    const params = dateModule.getISODate(date);
    const day = params.day;
    const month = params.month;
    const year = params.year;

    let tempChineseHoroscope;
    let tempsignOfTheZodiac;
    for (let index = 0; index < chineseHoroscope.length; index++) {
        chineseHoroscope[index].years.forEach(horoscopeYear => {
            if(year == horoscopeYear) {
                tempsignOfTheZodiac[index].name;
            }
        });
    };
    for (let index = 0; index < signsOfTheZodiac.length; index++) {
        let dateTransfer = moment(date).year(2000)
        if (signsOfTheZodiac[index].from <= dateTransfer && dateTransfer <= signsOfTheZodiac[index].to) {
            tempChineseHoroscope = signsOfTheZodiac[index].name;
        }
    };
    
    return {
        signOfTheZodiac: tempsignOfTheZodiac,
        chineseHoroscope: tempChineseHoroscope
    }
};
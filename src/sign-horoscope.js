const moment = require('moment');
var dateModule = require('./date.js')

/**
 * CS Znamení horoskopu
 */
const signsOfTheZodiac = [
    {
        name: 'Beran',
        from: moment('2000-03-21'),
        to: moment('2000-04-20'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Býk',
        from: moment('2000-04-21'),
        to: moment('2000-05-20'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Blíženci',
        from: moment('2000-05-21'),
        to: moment('2000-06-21'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Rak',
        from: moment('2000-06-22'),
        to: moment('2000-07-23'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Lev',
        from: moment('2000-07-23'),
        to: moment('2000-08-22'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Panna',
        from: moment('2000-08-23'),
        to: moment('2000-09-22'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Váhy',
        from: moment('2000-09-23'),
        to: moment('2000-10-23'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Štír',
        from: moment('2000-10-24'),
        to: moment('2000-11-22'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Střelec',
        from: moment('2000-11-23'),
        to: moment('2000-12-21'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Kozoroh',
        from: moment('2000-12-22'),
        to: moment('2000-01-20'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Vodnář',
        from: moment('2000-01-21'),
        to: moment('2000-02-20'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    },
    {
        name: 'Ryby',
        from: moment('2000-02-21'),
        to: moment('2000-03-20'),
        symbols: {
            tree: {
                name: '',
                description: ''
            },
            rock: {
                name: '',
                description: ''
            }
        }
    }  
]

/**
 * CS Čínský horoskop
 */
const chineseHoroscope = [
    {
        name: 'Krysa',
        years: [1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032, 2044, 2056, 2068]
    },
    {
        name: 'Buvol',
        years: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033, 2045, 2057, 2069]
    },
    {
        name: 'Tygr',
        years: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034, 2046, 2058, 2070]
    },
    {
        name: 'Zajíc',
        years: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035, 2047, 2059, 2071]
    },
    {
        name: 'Drak',
        years: [1904, 1016, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036, 2048, 2060, 2072]
    },
    {
        name: 'Had',
        years: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037, 2049, 2061, 2073]
    },
    {
        name: 'Kůň',
        years: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038, 2050, 2062, 2074]
    },
    {
        name: 'Koza',
        years: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039, 2051, 2063, 2075]
    },
    {
        name: 'Opice',
        years: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040, 2052, 2064, 2076]
    },
    {
        name: 'Kohout',
        years: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041, 2053, 2065, 2077]
    },
    {
        name: 'Pes',
        years: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042, 2054, 2066, 2078]
    },
    {
        name: 'Vepř',
        years: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043, 2055, 2067, 2079]
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
    let tempSignOfTheZodiac;
    for (let index = 0; index < chineseHoroscope.length; index++) {
        chineseHoroscope[index].years.forEach(horoscopeYear => {
            if(year == horoscopeYear) {
                tempChineseHoroscope = chineseHoroscope[index].name;
            }
        });
    };
    let dateTransfer = moment(date).year(2000);
    for (let index = 0; index < signsOfTheZodiac.length; index++) {
        if (signsOfTheZodiac[index].from <= dateTransfer && dateTransfer <= signsOfTheZodiac[index].to) {
            tempSignOfTheZodiac = signsOfTheZodiac[index].name;
        }
        // console.log(signsOfTheZodiac[index].from <= dateTransfer, signsOfTheZodiac[index].from);
        // console.log(dateTransfer <= signsOfTheZodiac[index].to, signsOfTheZodiac[index].to);
    };
    
    return {
        signOfTheZodiac: tempSignOfTheZodiac,
        chineseHoroscope: tempChineseHoroscope
    }
};
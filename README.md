# All date API
Tato RESTful API slouží k získání informacecí o dnešním datu, zejména jmenných svátků, horoskopech a mnohem více!

## Endpointy
`/` - Domovská stránka

`/today` - Informace o dnešním datu

`/date/YYYY-MM-DD` - Informace o zadaném datu

## Struktura
Pro datum 27.07.2021: 
```
{
   "date":{
      "date":"2021-07-27",
      "day":27,
      "week":31,
      "month":7,
      "quater":3,
      "year":2021
   },
   "monthName":{
      "nominative":"červenec",
      "genitive":"července"
   },
   "nameDay":[
      "Věroslav"
   ],
   "nameDayWish":{
      "short":"Dneska svátek máš,\n        a proto Ti přeji,\n        ať si užíváš\n        vše, co máš nejraději.",
      "long":"Tvoje jméno v kalendáři,\n    tak ať se Ti krásně daří.\n    Hezké květy, sklenka vína,\n    ať Ti svátek připomíná.\n    Láska, štěstí a zdraví ať je k mání,\n    to je ze srdce pro Tebe mé přání!"
   },
   "publicHolidays":{
      "publicHoliday":false,
      "holidays":null
   },
   "internationalHoliday":[
      ""
   ],
   "significantDay":[
      ""
   ],
   "signAndHoroscope":{
      "signOfTheZodiac":"Lev",
      "chineseHoroscope":"Buvol"
   },
   "wiki":{
      "whatHappendAdress":"https://cs.wikipedia.org/wiki/27._červenec",
      "nameAdress":[
         "https://cs.wikipedia.org/wiki/Věroslav"
      ]
   }
}
```

## Instalace a spuštění 
Po stažení repozitáře spustte příkaz `npm install`, aby jste stáhli a aktulizovali dependence.

Aplikaci spustíte pomocí příkazu `npm run start` nebo `npm run run`.



Verze: 1.0, Autor: Tomáš Vyleta

/*
* CS Přání k svátku
*/
const wishes = {
    long: [ `Na mém stolním kalendáři
    Tvoje jméno jasně září,
    proto Ti k Tvým jmeninám
    blahopřání posílám.
    Od koho je, to ty víš,
    proto přeji vše, o čem sníš.`,
    `Ať máš život jako sen,
    užíváš si každý den,
    od starostí žádné vrásky,
    v každé chvíli mnoho lásky.
    Všechno nejlepší k svátku!`,
    `Já Ti přeju na jmeniny,
    ať se máš jak nikdo jiný!
    Hodně štěstí, lásky, zdraví,
    co je špatné, ať se spraví,
    denně důvod pro zasmání,
    pusa – a je konec přání!`,
    `Kdo to svátek dneska slaví?
    Hodně štěstí, hlavně zdraví, ať tě život vždycky baví.
    Den co den ho užívej, ze života radost měj.
    S láskou v srdci jde vše líp, zamiluj se, budeš fit.
    Víš, jak chmury odzbrojíš? Úsměvem je porazíš!
    Náladu vždy dobrou měj a problémy nemívej!`,
    `Ať máš svou lásku komu dát,
    ať tě má někdo hodně rád.
    Rozum co v nouzi poradí,
    ruku co v žalu pohladí,
    přátele co nikdy nezradí.
    Vše nejlepší k svátku přeje…`,
    `Dárky
    Citáty
    Vtipy
    Přání
    Hádanky
    Peněžní bonusy
    Cestování
    100 nejlepších přání k svátku
    100 nejlepších přání k svátku, které potěší každého!
    autor: Adriana
    Chcete letos nejbližším zpříjemnit jejich sváteční den a popřát jim k jmeninám originálním přáníčkem? Připravili jsme pro vás 100 nejhezčích přání k svátku ve formě básniček, vtipných sms a dalších přání. I svátek je příležitostí k oslavě, tak vašim blízkým udělejte radost vyberte to nejlepší přání k svátku z následujících kategorií:
    
    Obsah / Contents	
    Klasická přání k svátku
    Krátká přání k svátku
    Vtipná přání k svátku
    Veršovaná přání k svátku
    Další veršovaná přání k svátku
    Přání k svátku pro kamarádku
    Přání k svátku pro spolužačku
    Přání k svátku pro muže
    Přání k svátku pro tatínka
    Přání k svátku pro drahou polovičku
    SMS přání k svátku
    Klasická přání k svátku
    Na mém stolním kalendáři
    Tvoje jméno jasně září,
    proto Ti k Tvým jmeninám
    blahopřání posílám.
    Od koho je, to ty víš,
    proto přeji vše, o čem sníš.
    Ať máš život jako sen,
    užíváš si každý den,
    od starostí žádné vrásky,
    v každé chvíli mnoho lásky.
    Všechno nejlepší k svátku!
    Já Ti přeju na jmeniny,
    ať se máš jak nikdo jiný!
    Hodně štěstí, lásky, zdraví,
    co je špatné, ať se spraví,
    denně důvod pro zasmání,
    pusa – a je konec přání!
    Kdo to svátek dneska slaví?
    Hodně štěstí, hlavně zdraví, ať tě život vždycky baví.
    Den co den ho užívej, ze života radost měj.
    S láskou v srdci jde vše líp, zamiluj se, budeš fit.
    Víš, jak chmury odzbrojíš? Úsměvem je porazíš!
    Náladu vždy dobrou měj a problémy nemívej!
    Ať máš svou lásku komu dát,
    ať tě má někdo hodně rád.
    Rozum co v nouzi poradí,
    ruku co v žalu pohladí,
    přátele co nikdy nezradí.
    Vše nejlepší k svátku přeje…
    Oznámil mi kalendář,
    a to není žádný lhář,
    že se dnes tvůj svátek slaví,
    a tak hodně štěstí, zdraví…`,
    `Ke gratulacím se přidávám
    a nezlob se, že ti jen třikrát štěstí chci přát.
    První štěstí za zdraví je,
    neboť když jsi zdráv(a), štěstí máš.
    Druhé štěstí za lásku je,
    neboť když ji máš, tak šťastná(ý) jsi.
    A v tom třetím penízky jsou,
    když je máš, tak si šťastný život uděláš.`,
    `Posíláme v blahopřání spoustu malých kytiček. Každá z nich ať přinese Ti jedno z našich přáníček. Mají v sobě štěstí, zdraví, radost, klid a hodně lásky. Ať máš vždycky mladé srdce, hodně přátel, žádné vrásky!`,
    `Tvoje jméno dneska září, právě si ho předčítám.
    Napsali jej v kalendáři, vše nejlepší k jmeninám.`,
    `Tvoje jméno v kalendáři,
    tak ať se Ti krásně daří.
    Hezké květy, sklenka vína,
    ať Ti svátek připomíná.
    Láska, štěstí a zdraví ať je k mání,
    to je ze srdce pro Tebe mé přání!`,
    `Říkaly mi noviny,
    že máš dneska jmeniny,
    tak Ti přeji k tvému svátku,
    hodně štěstí, málo zmatku,
    ať tě v srdci štěstí hřeje,
    to Ti všechno …. přeje.`,
    `Tak si koukám přes rameno,
    že v kalendáři je Tvé jméno.
    Přeji ti nejkrásnější den,
    který patří tobě jen.`,
    `V kalendáři je vzkaz jasný,
    že máš dneska svátek krásný,
    že dnes slavíš velký den,
    který patří Tobě jen.`,
    `Dnes máš svátek a proto Ti chceme přát,
    aby ses měl vždy čemu smát.
    Abys nikdy neměl důvod k smutku
    a smích ochránil Tě od zármutku.
    To a ještě více Ti přeje…`,
    `Dnes tancuj, zpívej si a směj,
    do kalendáře se podívej.
    Že v něm je tvé jméno,
    vůbec není vyloučeno.
    Proto všechna přání k svátku,
    uschovej si na památku.`,
    `Dnes snad v každém kalendáři,
    tvé výjimečné jméno září,
    na slavení máš čas krátký,
    až za rok bude ten den zpátky.`,
    `Dneska je Tvůj velký den,
    neseď doma a pojď ven.
    Něco hezkého si přej,
    vesele si užívej.
    Vše nejlepší k svátku přeje…`,
    `Tuhle krátkou básničku,
    posílám Ti v přáníčku,
    aby štěstí Tvoje bylo,
    nic zlého Tě netrápilo,
    ať vše špatné spraví dobrá nálada,
    a starosti hodíš za záda.`,
    `Dneska budem slavit,
    do rána se bavit.
    Oslavenci přejeme
    štěstí, zdraví, lásku,
    ať na tváři nemá
    ani jednu vrásku.
    To vše a mnohem víc Ti srdečně přejí…`,
    `Hodně zdraví, neboť je vzácné.
    Hodně štěstí, neboť je krásné.
    Hodně lásky, neboť je ji málo.
    Hodně všeho, co by za to stálo.`,
    `Dneska máš svátek,
    to je ale překvapení,
    posílám ti všechna nej, 
    ať se Ti všechna přání splní.`],
    short: [
        `Krásný svátek měj,
        dneska samá nej,
        ať se Ti neskutečně daří
        a sluníčko na Tebe září.`,
        `Všechno nelze říci slovy, co jen ti můžem přát?
        Přejem ti to nejkrásnější, co jen život může dát.`,
        `Ať se daří,
        přeji k svátku,
        ať oči Ti září
        a žiješ svou pohádku.`,
        `Štěstí v životě, život ve zdraví, zdraví v pořádku, pořádek v hlavě a hlavu v oblacích… vše nejlepší k svátku přeje…`,
        `Štěstíčko a zdravíčko, v životě jen sluníčko, v srdci jenom lásku měj, života si užívej.`,
        `Štěstí, zdraví, lásku, přátele
        přejeme Ti k svátku vesele.
        Měj se dneska krásně
        a vyceň taky dásně 🙂`,
        `Až na svůj svátek budeš číši pozvedat a celý svět se na tebe bude smát,
        vzpomeň si, že i já ti chci hodně úspěchů a štěstí v lásce přát.`,
        `Máš dneska svátek
        a já Ti přeji
        to, co máš na světě
        nejraději.`,
        `Přeji Ti k svátku,
        ať celý den prožíváš pohádku.`,
        `Dneska svátek máš,
        a proto Ti přeji,
        ať si užíváš
        vše, co máš nejraději.`
    ]
}

/**
 * Návratová metoda pro vrácení náhodného krátkého a náhodného dlouhého přání.
 * 
 * @returns 
 */
module.exports.get = function () {
    const randomLong = Math.floor(Math.random() * wishes.long.length);
    const randomShort = Math.floor(Math.random() * wishes.short.length);

    return {
        short: wishes.short[randomShort],
        long: wishes.long[randomLong],
    }
}
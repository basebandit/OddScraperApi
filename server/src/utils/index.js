/**
 * Abbreviate team names to shorter names for easier use and display
 * @todo Use an algorithm if preferrable to match and abbreviate teams,
 * if any exists out there.
 *
 * @param {String} team Name of the team
 */
export default function abbreviate(team) {
  let name = team.toLowerCase()
  //=============Premier League ==================//
  if (name === "manchester united" || name === "manchester utd") {
    return "Man Utd"
  } else if (name === "manchester city") {
    return "Man City"
  } else if (name === "leicester city") {
    return "Leicester"
  } else if (name === "huddersfield town") {
    return "Huddersfield"
  } else if (name === "newcastle united" || name === "newcastle utd") {
    return "Newcastle"
  } else if (name === "wolverhampton" || name === "wolverhampton wanderers") {
    return "Wolves"
  } else if (name === "tottenham hotspur" || name === "tottenham") {
    return "Tottenham"
  } else if (name === "afc bournemouth" || name === "bournemouth") {
    return "Bournemouth"
  } else if (name === "west ham united" || name === "west ham utd") {
    return "West Ham"
  } else if (name === "cardiff city") {
    return "Cardiff"
  } else if (name === "crystal palace") {
    return "Crystal"
  } else if (name === "chelsea fc") {
    return "Chelsea"
  } else if (name === "fulham fc") {
    return "Fulham"
  } else if (name === "arsenal fc") {
    return "Arsenal"
  } else if (name === "watford fc") {
    return "Watford"
  } else if (name === "everton fc") {
    return "Everton"
  } else if (name === "liverpool fc") {
    return "Liverpool"
  } else if (name === "southampton fc") {
    return "Southampton"
  } else if (name === "southend utd" || name === "southend united") {
    return "Southend"
  } else if (name === "burnley fc") {
    return "Burnley"
  } else if (
    name === "brighton and hove albion" ||
    name === "brighton & hove albion" ||
    name === "brighton & hove albion fc"
  ) {
    return "Brighton"
    //============== League Cup -EFL ===========//
  } else if (name === "nottingham forest") {
    return "Nottingham"
  } else if (name === "rotherham united" || name === "rotherham utd") {
    return "Rotherham"
  } else if (name === "wigan athletic") {
    return "Wigan"
  } else if (name === "tranmere rovers") {
    return "Tranmere"
  } else if (name === "crewe alexandra") {
    return "Crewe"
  } else if (name === "fleetwood town") {
    return "Fleetwood"
  } else if (name === "scunthorpe united" || name === "scunthorpe utd") {
    return "Scunthorpe"
  } else if (name === "doncaster rovers") {
    return "Doncaster"
  } else if (name === "macclesfield town") {
    return "Macclesfield"
  } else if (name === "bradford city") {
    return "Bradford"
  } else if (name === "grimsby town") {
    return "Grimsby"
  } else if (name === "sheffield united" || name === "sheffield utd") {
    return "Sheffield Utd"
  } else if (name === "hull city") {
    return "Hull"
  } else if (name === "notts county") {
    return "Notts"
  } else if (name === "leeds united" || name === "leeds utd") {
    return "Leeds"
  } else if (name === "bolton wanderers") {
    return "Bolton"
  } else if (name === "carlisle united" || name === "carlisle utd") {
    return "Carlisle"
  } else if (name === "blackburn rovers") {
    return "Blackburn"
  } else if (name === "mansfield town") {
    return "Mansfield"
  } else if (name === "accrington stanley" || name === "accrington stan") {
    return "Accrington"
  } else if (name === "port vale") {
    return "Port Vale"
  } else if (name === "yeovil town") {
    return "Yeovil"
  } else if (name === "lincoln city") {
    return "Lincoln"
  } else if (name === "norwich city") {
    return "Norwich"
  } else if (name === "preston north end") {
    return "Preston"
  } else if (name === "morecambe fc") {
    return "Morecambe"
  } else if (name === "oldham athletic") {
    return "Oldham"
  } else if (name === "derby county" || name === "derby cty") {
    return "Derby"
  } else if (name === "shrewsbury town") {
    return "Shrewsbury"
  } else if (name === "burton albion") {
    return "Burton"
  } else if (name === "blackpool fc") {
    return "Blackpool"
  } else if (name === "barnsley fc") {
    return "Barnsley"
  } else if (name === "walsall fc") {
    return "Walsall"
  } else if (name === "bury fc") {
    return "Bury"
  } else if (name === "brentford fc") {
    return "Brentford"
  } else if (name === "gillingham fc") {
    return "Gillingham"
  } else if (name === "millwall fc") {
    return "Millwall"
  } else if (name === "rochdale afc") {
    return "Rochdale"
  } else if (name === "afc wimbledon") {
    return "Wimbledon"
  } else if (name === "stevenage fc") {
    return "Stevenage"
  } else if (name === "reading fc") {
    return "Reading"
  } else if (name === "portsmouth fc") {
    return "Portsmouth"
  } else if (name === "sunderland afc") {
    return "Sunderland"
  } else if (name === "middlesbrough fc") {
    return "Middlesbrough"
  } else if (
    name === "sheffield wednesday" ||
    name === "sheffield wed" ||
    name === "sheffield weds"
  ) {
    return "Sheffield Wed"
  } else if (name === "coventry city") {
    return "Coventry"
  } else if (name === "oxford united" || name === "oxford utd") {
    return "Oxford"
  } else if (name === "crawley town") {
    return "Crawley"
  } else if (name === "cambridge utd" || name === "cambridge united") {
    return "Cambridge"
  } else if (name === "cheltenham town") {
    return "Cheltenham"
  } else if (name === "colchester utd" || name === "colchester united") {
    return "Colchester"
  } else if (name === "exeter city") {
    return "Exeter"
  } else if (name === "ipswich town") {
    return "Ipswich"
  } else if (name === "mk dons" || name === "milton keynes dons") {
    return "Mk Dons"
  } else if (name === "newport county" || name === "newport cty") {
    return "Newport"
  } else if (name === "plymouth argyle") {
    return "Plymouth"
  } else if (name === "birmingham city") {
    return "Birmingham"
  } else if (
    name === "queens park rangers fc" ||
    name === "queens park rangers"
  ) {
    return "Qpr"
  } else if (name === "wycombe wanderers") {
    return "Wycombe"
  } else if (name === "northampton town") {
    return "Northampton"
  } else if (name === "peterborough united" || name === "peterborough utd") {
    return "Peterborough"
  } else if (name === "notts county" || name === "notts cty") {
    return "Notts"
  } else if (name === "west bromwich albion" || name === "west bromwich") {
    return "West Brom"
  } else if (name === "luton town") {
    return "Luton"
  } else if (
    name === "forest green rovers" ||
    name === "forest" ||
    name === "forest green"
  ) {
    return "Fgr"
  } else if (name === "swindon town") {
    return "Swindon"
  } else if (name === "charlton athletic") {
    return "Charlton"
  } else if (name === "swansea city") {
    return "Swansea"
  } else if (name === "bristol rovers") {
    return "Bristol"
    //========== Ligue 1 ==============//
  } else if (
    name === "bordeux" ||
    name === "fc girondins bordeaux" ||
    name === "girondins de bordeaux"
  ) {
    return "Bordeaux"
  } else if (
    name === "saint etienne" ||
    name === "asc saint etienne" ||
    name === "st. etienne" ||
    name === "as saint etienne" ||
    name === "as saint-etienne" ||
    name === "st etienne"
  ) {
    return "Etienne"
  } else if (
    name === "olympique marseille" ||
    name === "olympique de marseille"
  ) {
    return "Marseille"
  } else if (name === "fc toulouse" || name === "toulouse fc") {
    return "Toulouse"
  } else if (name === "ea guingamp" || name === "en avant de guingamp") {
    return "Guingamp"
  } else if (name === "racing strasbourg") {
    return "Strasbourg"
  } else if (name === "fc nantes") {
    return "Nantes"
  } else if (name === "as monaco") {
    return "Monaco"
  } else if (name === "hsc montpellier" || name === "montpellier hsc") {
    return "Montpellier"
  } else if (name === "dijon fco") {
    return "Dijon"
  } else if (name === "ogc nice") {
    return "Nice"
  } else if (
    name === "stade de reims" ||
    name === "fc stade reims" ||
    name === "stade reims"
  ) {
    return "Reims"
  } else if (
    name === "stade de rennes" ||
    name === "fc stade rennes" ||
    name === "stade rennes" ||
    name === "stade rennais"
  ) {
    return "Rennes"
  } else if (name === "olympique lyonnais" || name === "lyonn") {
    return "Lyon"
  } else if (name === "sc amiens" || name === "amiens sc") {
    return "Amiens"
  } else if (
    name === "paris saint germain" ||
    name === "paris st germain" ||
    name === "psg" ||
    name === "paris saint-germain"
  ) {
    return "PSG"
  } else if (name === "sm caen" || name === "stade malherbe caen") {
    return "Caen"
  } else if (name === "olympique nimes" || name === "nimes olympique") {
    return "Nimes"
  } else if (name === "angers sco") {
    return "Angers"
  } else if (name === "osc lille" || name === "lille osc") {
    return "Lille"
    //========== Serie A =================//
  } else if (
    name === "ac chievo verona" ||
    name === "cheivo verona" ||
    name === "cheivoverona"
  ) {
    return "Chievo"
  } else if (name === "juventus turin") {
    return "Juventus"
  } else if (name === "ss lazio roma") {
    return "Lazio"
  } else if (name === "ssc napoli") {
    return "Napoli"
  } else if (name === "ac milan") {
    return "Milan"
  } else if (name === "fc torino") {
    return "Torino"
  } else if (name === "as roma") {
    return "Roma"
  } else if (name === "parma calcio 1913 s.r.l." || name === "parma fc") {
    return "Parma"
  } else if (name === "udinese calcio") {
    return "Udinese"
  } else if (name === "empoli fc") {
    return "Empoli"
  } else if (name === "cagliari calcio") {
    return "Cagliari"
  } else if (name === "us sassuolo calcio" || name === "sassuolo calcio") {
    return "Sassuolo"
  } else if (
    name === "inter milano" ||
    name === "fc internazionale" ||
    name === "inter milan" ||
    name === "internazionale milano"
  ) {
    return "Inter"
  } else if (name === "bologna fc" || name === "bologna 1909") {
    return "Bologna"
  } else if (name === "spal 2013") {
    return "Spal"
  } else if (name === "atalanta bergamasca calcio" || name === "atalanta bc") {
    return "Atalanta"
  } else if (name === "frosinone calcio") {
    return "Frosinone"
    //============ Bundesliga ======================//
  } else if (name === "hannover 96") {
    return "Hannover"
  } else if (name === "borussia dortmund") {
    return "Dortmund"
  } else if (
    name === "1. nurnberg" ||
    name === "1. fc nuremberg" ||
    name === "nuremberg"
  ) {
    return "Nurnberg"
  } else if (name === "1. fsv mainz 05") {
    return "Mainz"
  } else if (name === "fc augsburg") {
    return "Augsburg"
  } else if (name === "borussia monchengladbach" || name === "b. mgladbach") {
    return "Monchengladbach"
  } else if (name === "bayer leverkusen" || name === "bayer 04 leverkusen") {
    return "Leverkusen"
  } else if (name === "vfl wolfsburg") {
    return "Wolfsburg"
  } else if (name === "sc freiburg") {
    return "Freiburg"
  } else if (name === "tsg 1899 hoffenheim") {
    return "Hoffenheim"
  } else if (name === "eintracht frankfurt" || name === "e. frankfurt") {
    return "Frankfurt"
  } else if (
    name === "werder bremen" ||
    name === "w. bremen" ||
    name === "werder вremen"
  ) {
    return "Bremen"
  } else if (name === "vfb stuttgart") {
    return "Stuttgart"
  } else if (
    name === "bayern munich" ||
    name === "bayern munchen" ||
    name === "fc bayern munich"
  ) {
    return "Bayern"
  } else if (name === "rasenballsport leipzig" || name === "rb leipzig") {
    return "Leipzig"
  } else if (name === "fortuna dusseldorf") {
    return "Fortuna"
  } else if (name === "schalke 04" || name === "fc schalke 04") {
    return "Schalke"
  } else if (name === "hertha bsc" || name === "hertha berlin") {
    return "Hertha"
  } else if (name === "mainz 05" || name === "fsv mainz 05") {
    return "Mainz"
    //================== LA LIGA ===============================
  } else if (name === "cf getafe") {
    return "Getafe"
  } else if (name === "real valladolid" || name === "real valladolid cf") {
    return "Valladolid"
  } else if (name === "sd eibar") {
    return "Eibar"
  } else if (name === "real sociedad") {
    return "Sociedad"
  } else if (
    name === "villarreal cf" ||
    name === "cf villarreal" ||
    name === "villareal"
  ) {
    return "Villarreal"
  } else if (name === "girona cf") {
    return "Girona"
  } else if (name === "celta vigo" || name === "rc celta de vigo") {
    return "Vigo"
  } else if (name === "atletico madrid" || name === "atl. madrid") {
    return "Atletico"
  } else if (name === "real madrid") {
    return "Real"
  } else if (name === "cd leganes") {
    return "Leganes"
  } else if (name === "levante ud" || name === "ud levante") {
    return "Levante"
  } else if (name === "cf valencia") {
    return "Valencia"
  } else if (name === "deportivo alaves sad" || name === "deportivo alaves") {
    return "Alaves"
  } else if (name === "rcd espanyol barcelona") {
    return "Espanyol"
  } else if (name === "fc barcelona") {
    return "Barcelona"
  } else if (name === "sd huesca") {
    return "Huesca"
  } else if (name === "real betis balompie" || name === "real betis") {
    return "Betis"
  } else if (name === "fc sevilla" || name === "sevilla fc") {
    return "Sevilla"
  } else if (name === "rayo vallecano") {
    return "Vallecano"
  } else if (
    name === "athletic bilbao" ||
    name === "ath. bilbao" ||
    name === "athletic club bilbao"
  ) {
    return "Bilbao"
    //==================================
    // Champions
    //==================================
  } else if ((name === "psv eindhoven") | (name === "psv")) {
    return "PSV"
  } else if (name === "club brugge") {
    return "Brugge"
  } else if (name === "red star belgrade" || name === "fk red star belgrade") {
    return "Belgrade"
  } else if (name === "fc lokomotiv moscow" || name === "lokomotiv moscow") {
    return "L. Moscow"
  } else if (name === "fk crvena zvezda" || name === "crvena zvezda") {
    return "Zvezda"
  } else if (name === "fc porto") {
    return "Porto"
  } else if (name === "aek athens" || name === "aek athen") {
    return "Athens"
  } else if (name === "shakhtar donetsk" || name === "fc shakhtar donetsk") {
    return "Donetsk"
  } else if (name === "young boys" || name === "bsc young boys") {
    return "Young"
  } else if (name === "viktoria plzen" || name === "fc viktoria plzen") {
    return "Viktoria"
  } else if (name === "cska moscow") {
    return "CSKA"
  } else if (name === "benfica lisbon" || name === "sl benfica") {
    return "Benfica"
    //======================================
    // Europa
    //======================================
  } else if (
    name === "akhisar belediyespor" ||
    name === "akhisar bld spor" ||
    name === "akhisar bld"
  ) {
    return "Belediyespor"
  } else if (name === "aek larnaca" || name === "aek larnaca fc") {
    return "Larnaca"
  } else if (
    name === "ludogorets razgrad" ||
    name === "ludogorets 1947" ||
    name === "ludogorets 1945 razgrad" ||
    name === "ludogorets 1945"
  ) {
    return "Ludogorets"
  } else if (name === "fc zurich") {
    return "Zurich"
  } else if (name === "rosenborg bk") {
    return "Rosenborg"
  } else if (
    name === "rb salzburg" ||
    name === "red bull salzburg" ||
    name === "fc salzburg"
  ) {
    return "Salzburg"
  } else if (name === "fc copenhagen") {
    return "Copenhagen"
  } else if (
    name === "zenit st petersburg" ||
    name === "fc zenit st petersburg" ||
    name === "zenit saint petersburg"
  ) {
    return "Zenit"
  } else if (name === "slavia prague" || name === "sk slavia prague") {
    return "Slavia"
  } else if (name === "dinamo zagreb" || name === "gnk dinamo zagreb") {
    return "Dinamo"
  } else if (name === "spartak trnava" || name === "fc spartak trnava") {
    return "Spartak"
  } else if (name === "vorskla poltava" || name === "fc vorskla poltava") {
    return "Vorskla"
  } else if (name === "sporting lisbon" || name === "sporting cp") {
    return "Sporting"
  } else if (
    name === "karabakh" ||
    name === "fk qarabag" ||
    name === "qarabag fk"
  ) {
    return "Qarabag"
  } else if (name === "f91 dudelange") {
    return "Dudelange"
  } else if (name === "rsc anderlecht") {
    return "Anderlecht"
  } else if (
    name === "dynamo kiev" ||
    name === "dinamo kiev" ||
    name === "fc dynamo kiev" ||
    name === "dynamo kyiv"
  ) {
    return "Dynamo"
  } else if (name === "spartak moscow" || name === "fc spartak moscow") {
    return "S. Moscow"
  } else if (name === "baumit jab") {
    return "Baumit"
  } else if (name === "olympiacos piraeus" || name === "olympiakos") {
    return "Olympiacos"
  } else if (
    name === "rapid vienna" ||
    name === "sk rapid wien" ||
    name === "rapid wien" ||
    name === "sk rapid vienna"
  ) {
    return "Rapid"
  } else if (name === "bate borisov" || name === "fc bate borisov") {
    return "Bate"
  } else if (name === "celtic glasgow") {
    return "Celtic"
  } else if (name === "glasgow rangers" || name === "rangers fc") {
    return "Rangers"
  } else if (
    name === "apollon limassol" ||
    name === "apol limass" ||
    name === "apollon limassol fc"
  ) {
    return "Apollon"
  } else if (name === "sarpsborg 08" || name === "sarpsborg 08 ff") {
    return "Sarpsborg"
  } else if (name === "besiktas jk") {
    return "Besiktas"
  } else if (name === "malmo ff") {
    return "Malmo"
  } else if (name === "krc genk" || name === "racing genk") {
    return "Genk"
  } else if (name === "fc krasnodar" || name === "fk krasnodar") {
    return "Krasnodar"
  } else if (name === "standard liege") {
    return "Liege"
  } else if (name === "fc astana") {
    return "Astana"
  } else if (
    name === "fk jablonec" ||
    name === "baumit jablonec" ||
    name === "baumit jab" ||
    name === "jablonec"
  ) {
    return "Baumit"
  } else if (
    name === "paok thesaloniki" ||
    name === "paok thessaloniki" ||
    name === "paok" ||
    name === "p.a.o.k." ||
    name === "paok fc"
  ) {
    return "Thesaloniki"
  } else if (
    name === "vidi fc" ||
    name === "videoton fc" ||
    name === "mol vidi fc" ||
    name === "videoton"
  ) {
    return "Vidi"
  } else if (name === "ajax amsterdam") {
    return "Ajax"
  }
  return name.charAt(0).toUpperCase() + name.slice(1)
}

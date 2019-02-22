import MatchController from "../controllers/MatchController"
import MatchControllerPolicy from "../policies/MatchControllerPolicy"
import Auth from "../policies/AuthControllerPolicy"
import express from "express"

const router = express.Router()

// Passport.use(JwtStrategy)

/**
 * @api {get} /health-check Verify match endpoints
 * @apiVersion 1.0.0
 * @apiName matchendpoints
 * @apiGroup health check
 * @apiPermission authenticate user
 *
 * @apiDescription Use this to check if the server is online
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccessExample {json} Success response
 *    HTTPS 200 OK
 */
router.get("/health-check", function(req, res) {
  res.sendStatus(200)
})
/**
 * @api {get} /count/:league Match count per league
 * @apiVersion 1.0.0
 * @apiName matchcount
 * @apiGroup match count
 * @apiPermission authenticate user
 *
 * @apiDescription Retrieves the number of total matches in the given league
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccessExample {json} Success response
 *    HTTPS 200
 * [
 *   {
 *       "_id": "",
 *       "count": 87
 *   }
 * ]
 */
router.get("/count/:league", MatchController.getMatchCount)
/**
 * @api {get} /premier-league Retrieve matches
 * @apiVersion 1.0.0
 * @apiName premierleaguematches
 * @apiGroup premier league
 * @apiPermission authenticate user
 *
 * @apiDescription Retrieves all premier league matches
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess {String} _id The match id
 * @apiSuccess {String} pseudoKey The match name
 * @apiSuccess {String} sport The type of sport
 * @apiSuccess {String} league The league name
 * @apiSuccess {String} date The match
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {Object} matchInstances Similar match in different sites
 *
 * @apiSuccessExample {json} Success response
 *    HTTPS 200 OK
 *    [
 *     {
 *       "_id": "5b44b1c6fdaeeb0a9d4004ce",
 *       "pseudoKey": "manutd-leicester",
 *       "sport": "Soccer",
 *       "league": "Premier League",
 *       "date": "2018-08-10T19:00:00.000Z",
 *       "team1": "Man utd",
 *       "team2": "Leicester",
 *       "matchInstances": [
 *           {
 *               "team1": {
 *                   "name": "Man utd",
 *                   "price": "1.37"
 *               },
 *               "team2": {
 *                   "name": "Leicester",
 *                   "price": "8.79"
 *               },
 *               "pseudoKey": "manutd-leicester",
 *               "service": "Betway",
 *               "region": "Kenya",
 *               "drawPrice": "4.81",
 *               "url": "https://www.betway.co.ke/Bet/EventMultiMarket?* * *eventId=63a8455a-c36f-e811-80dc-00155d4cf15f&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
 *           },
 *           {
 *               "team1": {
 *                   "name": "Man Utd",
 *                   "price": "1.38"
 *               },
 *               "team2": {
 *                   "name": "Leicester",
 *                   "price": "8.70"
 *               },
 *               "pseudoKey": "manutd-leicester",
 *               "service": "Betin",
 *               "region": "Kenya",
 *               "drawPrice": "4.70",
 *               "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=16701399"
 *           }
 *       ],
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5b44b1c6fdaeeb0a9d4004cf",
 *       "pseudoKey": "newcastle-tottenham",
 *       "sport": "Soccer",
 *       "league": "Premier League",
 *       "date": "2018-08-11T11:30:00.000Z",
 *       "team1": "Newcastle",
 *       "team2": "Tottenham",
 *       "matchInstances": [
 *           {
 *               "team1": {
 *                   "name": "Newcastle",
 *                   "price": "4.17"
 *               },
 *               "team2": {
 *                   "name": "Tottenham",
 *                   "price": "1.86"
 *               },
 *               "pseudoKey": "newcastle-tottenham",
 *               "service": "Betway",
 *                "region": "Kenya",
 *               "drawPrice": "3.66",
 *               "url": "https://www.betway.co.ke/Bet/EventMultiMarket?*eventId=c25bccc8-8670-e811-80dc-00155d4cf15f&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
 *           },
 *           {
 *               "team1": {
 *                   "name": "Newcastle",
 *                   "price": "4.25"
 *               },
 *               "team2": {
 *                   "name": "Tottenham",
 *                   "price": "1.88"
 *               },
 *               "pseudoKey": "newcastle-tottenham",
 *               "service": "Betin",
 *               "region": "Kenya",
 *               "drawPrice": "3.55",
 *               "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=16701401"
 *           }
 *       ],
 *       "__v": 0
 *   },
 * ]
 *
 * @apiUse UnauthorizedError
 */
router.get(
  "/premier-league/",

  MatchController.allPremierLeagueMatches
)
/**
 * @api {get} /premier-league/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName premierleaguematch
 * @apiGroup premier league
 * @apiPermission authenticated user
 *
 * @apiDescription Retrieves the given premier league match
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 *      {
 *       "team1": {
 *           "name": "Man utd",
 *           "price": "1.37"
 *       },
 *       "team2": {
 *           "name": "Leicester",
 *           "price": "8.79"
 *       },
 *       "pseudoKey": "manutd-leicester",
 *       "service": "Betway",
 *       "region": "Kenya",
 *       "drawPrice": "4.81",
 *       "url": "https://www.betway.co.ke/Bet/EventMultiMarket?*eventId=63a8455a-c36f-e811-80dc-00155d4cf15f&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
 *   }
 *
 * @apiUse UnauthorizedError
 */
router.get(
  "/premier-league/:pseudoKey",

  MatchControllerPolicy.getMatch,
  MatchController.getPremierLeagueMatch
)
/**
 * @api {get} /leaguecup Retrieve matches
 * @apiVersion 1.0.0
 * @apiName leaguecupmatches
 * @apiGroup league cup
 * @apiPermission authenticate user
 *
 * @apiDescription Retrieves all EFL(league cup) matches
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess {String} _id The match id
 * @apiSuccess {String} pseudoKey The match name
 * @apiSuccess {String} sport The type of sport
 * @apiSuccess {String} league The league name
 * @apiSuccess {String} date The match
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {Object} matchInstances Similar match in different sites
 *
 * @apiSuccessExample {json} Success response
 *    HTTPS 200 OK
 *    [
 *     {
 *       "_id": "5b4f06025d425139b780417f",
 *       "pseudoKey": "crewe-fleetwood",
 *       "sport": "Soccer",
 *       "league": "League Cup",
 *       "date": "2018-08-14T18:45:00.000Z",
 *       "team1": "Crewe",
 *       "team2": "Fleetwood",
 *       "matchInstances": [
 *           {
 *               "team1": {
 *                   "name": "Crewe",
 *                   "price": "3.71"
 *               },
 *               "team2": {
 *                   "name": "Fleetwood",
 *                   "price": "2.04"
 *               },
 *               "pseudoKey": "crewe-fleetwood",
 *               "service": "Sportpesa",
 *               "region": "Kenya",
 *               "drawPrice": "3.44",
 *               "url": "https://www.sportpesa.co.ke/games/1411326/markets?league=76298&top=1&sid=4851&*sportId=1"
 *           },
 *           {
 *               "team1": {
 *                   "name": "Crewe",
 *                   "price": "3.70"
 *               },
 *               "team2": {
 *                   "name": "Fleetwood",
 *                   "price": "2.00"
 *               },
 *               "pseudoKey": "crewe-fleetwood",
 *               "service": "Betin",
 *               "region": "Kenya",
 *               "drawPrice": "3.45",
 *               "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17587558"
 *           },
 *           {
 *               "team1": {
 *                   "name": "Crewe",
 *                   "price": "3.54"
 *               },
 *               "team2": {
 *                   "name": "Fleetwood",
 *                   "price": "1.94"
 *               },
 *               "pseudoKey": "crewe-fleetwood",
 *               "service": "Betika",
 *               "region": "Kenya",
 *               "drawPrice": "3.31",
 *               "url": "https://www.betika.com/mobile/dist/#/prebets/markets/535448"
 *           },
 *           {
 *               "team1": {
 *                   "name": "Crewe",
 *                   "price": "3.82"
 *               },
 *               "team2": {
 *                   "name": "Fleetwood",
 *                   "price": "2.1"
 *               },
 *               "pseudoKey": "crewe-fleetwood",
 *               "service": "1XBet",
 *               "region": "Kenya",
 *               "drawPrice": "3.52",
 *               "url": *"https://1xbet.co.ke/en/line/Football/119237-England-League-Cup/27264633-Crewe-Alexandra-Fleetwood-Town/*"
 *           }
 *       ],
 *       "__v": 0
 *   },
 * ]
 *
 * @apiUse UnauthorizedError
 */
router.get("/leaguecup/", MatchController.allEFLCupMatches)
/**
 * @api {get} /leaguecup/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName leaguecupmatch
 * @apiGroup league cup
 * @apiPermission authenticated user
 *
 * @apiDescription Retrieves the given EFL(league cup) match
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *     HTTPS 200 OK
 *     [
 *       {
 *       "team1": {
 *           "name": "Crewe",
 *           "price": "3.71"
 *       },
 *       "team2": {
 *           "name": "Fleetwood",
 *           "price": "2.04"
 *       },
 *       "pseudoKey": "crewe-fleetwood",
 *       "service": "Sportpesa",
 *       "region": "Kenya",
 *       "drawPrice": "3.44",
 *       "url": "https://www.sportpesa.co.ke/games/1411326/markets?league=76298&top=1&sid=4851&sportId=1"
 *   },
 *   {
 *       "team1": {
 *           "name": "Crewe",
 *           "price": "3.70"
 *       },
 *       "team2": {
 *           "name": "Fleetwood",
 *           "price": "2.00"
 *       },
 *       "pseudoKey": "crewe-fleetwood",
 *       "service": "Betin",
 *       "region": "Kenya",
 *       "drawPrice": "3.45",
 *       "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17587558"
 *   },
 *   {
 *       "team1": {
 *           "name": "Crewe",
 *           "price": "3.54"
 *       },
 *       "team2": {
 *           "name": "Fleetwood",
 *           "price": "1.94"
 *       },
 *       "pseudoKey": "crewe-fleetwood",
 *       "service": "Betika",
 *       "region": "Kenya",
 *       "drawPrice": "3.31",
 *       "url": "https://www.betika.com/mobile/dist/#/prebets/markets/535448"
 *   },
 *   {
 *       "team1": {
 *           "name": "Crewe",
 *           "price": "3.82"
 *       },
 *       "team2": {
 *           "name": "Fleetwood",
 *           "price": "2.1"
 *       },
 *       "pseudoKey": "crewe-fleetwood",
 *       "service": "1XBet",
 *       "region": "Kenya",
 *       "drawPrice": "3.52",
 *       "url": *"https://1xbet.co.ke/en/line/Football/119237-England-League-Cup/27264633-Crewe-Alexandra-Fleetwood-Town/*"
 *   }
 *      ]
 *
 * @apiUse UnauthorizedError
 */
router.get(
  "/leaguecup/:pseudoKey",

  MatchControllerPolicy.getMatch,
  MatchController.getEFLCupMatch
)
/**
 * @api {get} /ligue1/ Retrieve matches
 * @apiVersion 1.0.0
 * @apiName ligue1matches
 * @apiGroup ligue1
 * @apiPermission authenticated user
 *
 * @apiDescription Retrieves all ligue1 matches
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 * {
 *  _id: "5b4bd463beb8e63b65e7ac93",
 *  pseudoKey: "angers-nimes",
 *  sport: "Soccer",
 *  league: "Ligue 1",
 *  date: "2018-08-11T18:00:00.000Z",
 *  team1: "Angers",
 *  team2: "Nimes",
 *  matchInstances: [
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.36"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.44"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "1XBet",
 *  region: "Kenya",
 *  drawPrice: "3.3",
 *  url: "https://1xbet.co.ke/en/line/Football/12821-France-Ligue-1/26994339-Angers-SCO-Nimes-Olympique/"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.33"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.37"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Betika",
 *  region: "Kenya",
 *  drawPrice: "3.28",
 *  url: "https://www.betika.com/mobile/dist/#/prebets/markets/534772"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.30"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.30"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Betway",
 *  region: "Kenya",
 *  drawPrice: "3.21",
 *  url: "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=facc99ea-bf73-e811-80dc-00155d4cf15f&* *  marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.30"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.30"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Betin",
 *  region: "Kenya",
 *  drawPrice: "3.20",
 *  url: "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17533209"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.32"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.30"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Sportpesa",
 *  region: "Kenya",
 *  drawPrice: "3.19",
 *  url: "https://www.sportpesa.co.ke/games/1409490/markets?league=76062&top=1&sid=2738&sportId=1"
 * }
 * ],
 *  __v: 0
 * }
 *
 */
router.get("/ligue1/", MatchController.allLigue1Matches)
/**
 * @api {get} /ligue1/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName ligue1match
 * @apiGroup ligue1
 * @apiPermission authenticated user
 *
 * @apiDescription Retrieves the given lique1 match
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 *[
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.36"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.44"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "1XBet",
 *  region: "Kenya",
 *  drawPrice: "3.3",
 *  url: "https://1xbet.co.ke/en/line/Football/12821-France-Ligue-1/26994339-Angers-SCO-Nimes-Olympique/"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.33"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.37"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Betika",
 *  region: "Kenya",
 *  drawPrice: "3.28",
 *  url: "https://www.betika.com/mobile/dist/#/prebets/markets/534772"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.30"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.30"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Betway",
 *  region: "Kenya",
 *  drawPrice: "3.21",
 *  url: "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=facc99ea-bf73-e811-80dc-00155d4cf15f&* marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.30"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.30"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Betin",
 *  region: "Kenya",
 *  drawPrice: "3.20",
 *  url: "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=17533209"
 * },
 * {
 *  team1: {
 *  name: "Angers",
 *  price: "2.32"
 * },
 *  team2: {
 *  name: "Nimes",
 *  price: "3.30"
 * },
 *  pseudoKey: "angers-nimes",
 *  service: "Sportpesa",
 *  region: "Kenya",
 *  drawPrice: "3.19",
 *  url: "https://www.sportpesa.co.ke/games/1409490/markets?league=76062&top=1&sid=2738&sportId=1"
 * }
 * ]
 */

router.get(
  "/ligue1/:pseudoKey",

  MatchControllerPolicy.getMatch,
  MatchController.getLigue1Match
)
/**
 * @api {get} /serieA/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName serieAmatch
 * @apiGroup serieA
 * @apiPermission authenticated user
 *
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 * [
 *  {
 * _id: "5b7693228e494e2444bbc2d1",
 * pseudoKey: "cagliari-sassuolo",
 * sport: "Soccer",
 * league: "Serie A",
 * date: "2018-08-26T18:30:00.000Z",
 * team1: "Cagliari",
 * team2: "Sassuolo",
 * matchInstances: [
 * {
 * team1: {
 * name: "Cagliari",
 * price: "2.20"
 * },
 * team2: {
 * name: "Sassuolo",
 * price: "3.35"
 * },
 * pseudoKey: "cagliari-sassuolo",
 * service: "Betin",
 * region: "Kenya",
 * drawPrice: "3.35",
 * url: "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18797601"
 * },
 * {
 * team1: {
 * name: "Cagliari",
 * price: "2.22"
 * },
 * team2: {
 * name: "Sassuolo",
 * price: "3.35"
 * },
 * pseudoKey: "cagliari-sassuolo",
 * service: "Sportpesa",
 * region: "Kenya",
 * drawPrice: "3.35",
 * url: "https://www.sportpesa.co.ke/games/1422980/markets?league=67358&top=1&sid=5135&sportId=1"
 * },
 * {
 * team1: {
 * name: "Cagliari",
 * price: "2.21"
 * },
 * team2: {
 * name: "Sassuolo",
 * price: "3.34"
 * },
 * pseudoKey: "cagliari-sassuolo",
 * service: "Betway",
 * region: "Kenya",
 * drawPrice: "3.36",
 * url: "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=undefined&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
 * },
 * {
 * team1: {
 * name: "Cagliari",
 * price: "2.32"
 * },
 * team2: {
 * name: "Sassuolo",
 * price: "3.52"
 * },
 * pseudoKey: "cagliari-sassuolo",
 * service: "1XBet",
 * region: "Kenya",
 * drawPrice: "3.36",
 * url: "https://1xbet.co.ke/en/line/Football/110163-Italy-Serie-A/29825783-Cagliari-Calcio-Sassuolo-Calcio/"
 * }
 * ],
 * __v: 0
 * },
 * ]
 */
router.get("/serieA/", MatchController.allSerieAMatches)
/**
 * @api {get} /serieA/ Retrieve matches
 * @apiVersion 1.0.0
 * @apiName serieAmatches
 * @apiGroup serieA
 * @apiPermission authenticated user
 *
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 * [
 *  {
 * team1: {
 * name: "Chievo",
 * price: "14.00"
 * },
 * team2: {
 * name: "Juventus",
 * price: "1.23"
 * },
 * pseudoKey: "chievo-juventus",
 * service: "Betin",
 * region: "Kenya",
 * drawPrice: "6.00",
 * url: "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18068141"
 * },
 * {
 * team1: {
 * name: "Chievo",
 * price: "11.81"
 * },
 * team2: {
 * name: "Juventus",
 * price: "1.29"
 * },
 * pseudoKey: "chievo-juventus",
 * service: "Sportpesa",
 * region: "Kenya",
 * drawPrice: "5.37",
 * url: "https://www.sportpesa.co.ke/games/1422762/markets?league=67358&top=1&sid=5303&sportId=1"
 * },
 * {
 * team1: {
 * name: "Chievo",
 * price: "13.49"
 * },
 * team2: {
 * name: "Juventus",
 * price: "1.24"
 * },
 * pseudoKey: "chievo-juventus",
 * service: "Betway",
 * region: "Kenya",
 * drawPrice: "5.94",
 * url: "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=undefined&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
 * },
 * {
 * team1: {
 * name: "Chievo",
 * price: "16"
 * },
 * team2: {
 * name: "Juventus",
 * price: "1.26"
 * },
 * pseudoKey: "chievo-juventus",
 * service: "1XBet",
 * region: "Kenya",
 * drawPrice: "6.45",
 * url: "https://1xbet.co.ke/en/line/Football/110163-Italy-Serie-A/29330901-ChievoVerona-Juventus/"
 *  }
 * ]
 *
 */
router.get(
  "/serieA/:pseudoKey",
  MatchControllerPolicy.getMatch,
  MatchController.getSerieAMatch
)
/**
 * @api {get} /bundesliga Retrieve matches
 * @apiVersion 1.0.0
 * @apiName bundesligamatches
 * @apiGroup bundesliga
 * @apiPermission authenticated user
 *
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 *
 * [
 * {
 *  _id: "5b83e6340818897dc988f578",
 *  pseudoKey: "nurnberg-mainz",
 *  sport: "Soccer",
 *  league: "Bundesliga",
 *  date: "2018-09-01T13:30:00.000Z",
 *  team1: "Nurnberg",
 *  team2: "Mainz",
 *  matchInstances: [
 *  {
 *   team1: {
 *    name: "Nurnberg",
 *    price: "2.42"
 *  },
 *   team2: {
 *    name: "Mainz",
 *    price: "3.18"
 *  },
 * pseudoKey: "nurnberg-mainz",
 * service: "Sportpesa",
 * region: "Kenya",
 * drawPrice: "3.12",
 * url: "https://www.sportpesa.co.ke/games/1428636/markets?league=76390&top=1&sid=1835&sportId=1"
 * },
 * {
 *  team1: {
 *    name: "Nurnberg",
 *    price: "2.39"
 *  },
 *  team2: {
 *    name: "Mainz",
 *    price: "3.19"
 *  },
 *  pseudoKey: "nurnberg-mainz",
 *  service: "Betika",
 *  region: "Kenya",
 *  drawPrice: "3.15",
 *  url: "https://www.betika.com/mobile/dist/#/prebets/markets/542710"
 *  },
 *  {
 *  team1: {
 *    name: "Nurnberg",
 *    price: "2.49"
 *  },
 *  team2: {
 *    name: "Mainz",
 *    price: "3.38"
 *  },
 *  pseudoKey: "nurnberg-mainz",
 *  service: "1XBet",
 *  region: "Kenya",
 *  drawPrice: "3.18",
 *  url:  "https://1xbet.co.ke/en/line/Football/96463-Germany-Bundesliga/28235773-1.-Nurnberg-1.-FSV-Mainz-05/"
 *  },
 *  {
 *  team1: {
 *    name: "Nurnberg",
 *    price: "2.30"
 *  },
 *  team2: {
 *  name: "Mainz",
 *  price: "3.15"
 *  },
 *  pseudoKey: "nurnberg-mainz",
 *  service: "Betpawa",
 *  region: "Kenya",
 *  drawPrice: "3.30",
 *  url: "https://www.betpawa.co.ke/event-458949-nurnberg-mainz-05"
 *  },
 *  {
 *  team1: {
 *    name: "Nurnberg",
 *    price: "2.42"
 *  },
 *  team2: {
 *    name: "Mainz",
 *    price: "3.20"
 *  },
 *  pseudoKey: "nurnberg-mainz",
 *  service: "Betin",
 *  region: "Kenya",
 *  drawPrice: "3.10",
 *  url: "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18398934"
 *  }
 * ],
 * __v: 0
 * },
 * {
 *  _id: "5b83e6340818897dc988f579",
 *  pseudoKey: "stuttgart-bayern",
 *  sport: "Soccer",
 *  league: "Bundesliga",
 *  date: "2018-09-01T16:30:00.000Z",
 *  team1: "Stuttgart",
 *  team2: "Bayern",
 *  matchInstances: [
 *  {
 *    team1: {
 *      name: "Stuttgart",
 *      price: "8.61"
 *  },
 *    team2: {
 *      name: "Bayern",
 *      price: "1.34"
 *  },
 *  pseudoKey: "stuttgart-bayern",
 *  service: "Sportpesa",
 *  region: "Kenya",
 *  drawPrice: "5.33",
 *  url: "https://www.sportpesa.co.ke/games/1429418/markets?league=76390&top=1&sid=3973&sportId=1"
 * },
 * {
 *    team1: {
 *      name: "Stuttgart",
 *      price: "9.53"
 *  },
 *    team2: {
 *      name: "Bayern",
 *      price: "1.29"
 *  },
 *    pseudoKey: "stuttgart-bayern",
 *    service: "Betika",
 *    region: "Kenya",
 *    drawPrice: "5.8",
 *    url: "https://www.betika.com/mobile/dist/#/prebets/markets/542969"
 *  },
 *  {
 *  team1: {
 *    name: "Stuttgart",
 *    price: "10.5"
 *  },
 *  team2: {
 *    name: "Bayern",
 *    price: "1.33"
 * },
 * pseudoKey: "stuttgart-bayern",
 * service: "1XBet",
 * region: "Kenya",
 * drawPrice: "6.15",
 * url: "https://1xbet.co.ke/en/line/Football/96463-Germany-Bundesliga/28235807-VfB-Stuttgart-Bayern-Munich/"
 * },
 * {
 * team1: {
 *    name: "Stuttgart",
 *    price: "11.00"
 * },
 * team2: {
 *    name: "Bayern",
 *    price: "1.27"
 *  },
 * pseudoKey: "stuttgart-bayern",
 * service: "Betpawa",
 * region: "Kenya",
 * drawPrice: "6.00",
 * url: "https://www.betpawa.co.ke/event-458911-stuttgart-bayern-munich"
 * },
 * {
 * team1: {
 *   name: "Stuttgart",
 *   price: "9.40"
 * },
 *  team2: {
 *  name: "Bayern",
 *  price: "1.30"
 *  },
 *  pseudoKey: "stuttgart-bayern",
 *  service: "Betin",
 *  region: "Kenya",
 *  drawPrice: "5.60",
 *  url: "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18398874"
 * }
 * ],
 * __v: 0
 * },
 */

router.get("/bundesliga", MatchController.allBundesligaMatches)
/**
 * @api {get} /bundesliga/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName bundesligamatch
 * @apiGroup bundesliga
 * @apiPermission authenticated user
 *
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 *[
 * {
 * team1: {
 * name: "Stuttgart",
 * price: "8.61"
 * },
 * team2: {
 * name: "Bayern",
 * price: "1.34"
 * },
 * pseudoKey: "stuttgart-bayern",
 * service: "Sportpesa",
 * region: "Kenya",
 * drawPrice: "5.33",
 * url: "https://www.sportpesa.co.ke/games/1429418/markets?league=76390&top=1&sid=3973&sportId=1"
 * },
 * {
 * team1: {
 * name: "Stuttgart",
 * price: "9.53"
 * },
 * team2: {
 * name: "Bayern",
 * price: "1.29"
 * },
 * pseudoKey: "stuttgart-bayern",
 * service: "Betika",
 * region: "Kenya",
 * drawPrice: "5.8",
 * url: "https://www.betika.com/mobile/dist/#/prebets/markets/542969"
 * },
 * {
 * team1: {
 * name: "Stuttgart",
 * price: "10.5"
 * },
 * team2: {
 * name: "Bayern",
 * price: "1.33"
 * },
 * pseudoKey: "stuttgart-bayern",
 * service: "1XBet",
 * region: "Kenya",
 * drawPrice: "6.15",
 * url: "https://1xbet.co.ke/en/line/Football/96463-Germany-Bundesliga/28235807-VfB-Stuttgart-Bayern-Munich/"
 * },
 * {
 * team1: {
 * name: "Stuttgart",
 * price: "11.00"
 * },
 * team2: {
 * name: "Bayern",
 * price: "1.27"
 * },
 * pseudoKey: "stuttgart-bayern",
 * service: "Betpawa",
 * region: "Kenya",
 * drawPrice: "6.00",
 * url: "https://www.betpawa.co.ke/event-458911-stuttgart-bayern-munich"
 * },
 * {
 * team1: {
 * name: "Stuttgart",
 * price: "9.40"
 * },
 * team2: {
 * name: "Bayern",
 * price: "1.30"
 * },
 * pseudoKey: "stuttgart-bayern",
 * service: "Betin",
 * region: "Kenya",
 * drawPrice: "5.60",
 * url: "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18398874"
 * }
 * ]
 */
router.get(
  "/bundesliga/:pseudoKey",
  MatchControllerPolicy.getMatch,
  MatchController.getBundesligaMatch
)
/**
 * @api {get} /LaLiga Retrieve matches
 * @apiVersion 1.0.0
 * @apiName LaLigamatches
 * @apiGroup LaLiga
 * @apiPermission authenticated user
 *
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 *
 * [
 *  {
        "_id": "5b86acb6d6dc2316491e022b",
        "pseudoKey": "eibar-sociedad",
        "sport": "Soccer",
        "league": "La Liga",
        "date": "2018-08-31T20:00:00.000Z",
        "team1": "Eibar",
        "team2": "Sociedad",
        "matchInstances": [
            {
                "team1": {
                    "name": "Eibar",
                    "price": "2.87"
                },
                "team2": {
                    "name": "Sociedad",
                    "price": "2.60"
                },
                "pseudoKey": "eibar-sociedad",
                "service": "Sportpesa",
                "region": "Kenya",
                "drawPrice": "3.19",
                "url": "https://www.sportpesa.co.ke/games/1427972/markets?league=76837&top=1&sid=4195&sportId=1"
            },
            {
                "team1": {
                    "name": "Eibar",
                    "price": "2.83"
                },
                "team2": {
                    "name": "Sociedad",
                    "price": "2.6"
                },
                "pseudoKey": "eibar-sociedad",
                "service": "Betika",
                "region": "Kenya",
                "drawPrice": "3.21",
                "url": "https://www.betika.com/mobile/dist/#/prebets/markets/542334"
            },
            {
                "team1": {
                    "name": "Eibar",
                    "price": "2.904"
                },
                "team2": {
                    "name": "Sociedad",
                    "price": "2.68"
                },
                "pseudoKey": "eibar-sociedad",
                "service": "1XBet",
                "region": "Kenya",
                "drawPrice": "3.38",
                "url": "https://1xbet.co.ke/en/line/Football/127733-Spain-La-Liga/29986117-Eibar-Real-Sociedad/"
            },
            {
                "team1": {
                    "name": "Eibar",
                    "price": "2.78"
                },
                "team2": {
                    "name": "Sociedad",
                    "price": "2.60"
                },
                "pseudoKey": "eibar-sociedad",
                "service": "Betin",
                "region": "Kenya",
                "drawPrice": "3.25",
                "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18909232"
            },
            {
                "team1": {
                    "name": "Eibar",
                    "price": "2.80"
                },
                "team2": {
                    "name": "Sociedad",
                    "price": "2.55"
                },
                "pseudoKey": "eibar-sociedad",
                "service": "Betpawa",
                "region": "Kenya",
                "drawPrice": "3.30",
                "url": "https://www.betpawa.co.ke/event-458484-eibar-real-sociedad"
            }
        ],
        "__v": 0
    },
    {
        "_id": "5b86acb6d6dc2316491e022e",
        "pseudoKey": "vigo-atletico",
        "sport": "Soccer",
        "league": "La Liga",
        "date": "2018-09-01T16:30:00.000Z",
        "team1": "Vigo",
        "team2": "atletico",
        "matchInstances": [
            {
                "team1": {
                    "name": "Vigo",
                    "price": "4.84"
                },
                "team2": {
                    "name": "atletico",
                    "price": "1.79"
                },
                "pseudoKey": "vigo-atletico",
                "service": "Sportpesa",
                "region": "Kenya",
                "drawPrice": "3.53",
                "url": "https://www.sportpesa.co.ke/games/1429076/markets?league=76837&top=1&sid=5677&sportId=1"
            },
            {
                "team1": {
                    "name": "Vigo",
                    "price": "4.93"
                },
                "team2": {
                    "name": "atletico",
                    "price": "1.77"
                },
                "pseudoKey": "vigo-atletico",
                "service": "Betika",
                "region": "Kenya",
                "drawPrice": "3.56",
                "url": "https://www.betika.com/mobile/dist/#/prebets/markets/542873"
            },
            {
                "team1": {
                    "name": "Vigo",
                    "price": "4.90"
                },
                "team2": {
                    "name": "atletico",
                    "price": "1.78"
                },
                "pseudoKey": "vigo-atletico",
                "service": "Betin",
                "region": "Kenya",
                "drawPrice": "3.55",
                "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18909238"
            },
            {
                "team1": {
                    "name": "Vigo",
                    "price": "4.85"
                },
                "team2": {
                    "name": "atletico",
                    "price": "1.75"
                },
                "pseudoKey": "vigo-atletico",
                "service": "Betpawa",
                "region": "Kenya",
                "drawPrice": "3.70",
                "url": "https://www.betpawa.co.ke/event-458952-celta-vigo-atletico-madrid"
            }
        ],
        "__v": 0
    },
  ]
 */
router.get("/LaLiga", MatchController.allLaLigaMatches)

/**
 * @api {get} /LaLiga/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName LaLigamatch
 * @apiGroup LaLiga
 * @apiPermission authenticated user
 *
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 * [
    {
        "team1": {
            "name": "Vigo",
            "price": "4.84"
        },
        "team2": {
            "name": "atletico",
            "price": "1.79"
        },
        "pseudoKey": "vigo-atletico",
        "service": "Sportpesa",
        "region": "Kenya",
        "drawPrice": "3.53",
        "url": "https://www.sportpesa.co.ke/games/1429076/markets?league=76837&top=1&sid=5677&sportId=1"
    },
    {
        "team1": {
            "name": "Vigo",
            "price": "4.93"
        },
        "team2": {
            "name": "atletico",
            "price": "1.77"
        },
        "pseudoKey": "vigo-atletico",
        "service": "Betika",
        "region": "Kenya",
        "drawPrice": "3.56",
        "url": "https://www.betika.com/mobile/dist/#/prebets/markets/542873"
    },
    {
        "team1": {
            "name": "Vigo",
            "price": "4.90"
        },
        "team2": {
            "name": "atletico",
            "price": "1.78"
        },
        "pseudoKey": "vigo-atletico",
        "service": "Betin",
        "region": "Kenya",
        "drawPrice": "3.55",
        "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=18909238"
    },
    {
        "team1": {
            "name": "Vigo",
            "price": "4.85"
        },
        "team2": {
            "name": "atletico",
            "price": "1.75"
        },
        "pseudoKey": "vigo-atletico",
        "service": "Betpawa",
        "region": "Kenya",
        "drawPrice": "3.70",
        "url": "https://www.betpawa.co.ke/event-458952-celta-vigo-atletico-madrid"
    }
  ]
 */
router.get(
  "/LaLiga/:pseudoKey",
  MatchControllerPolicy.getMatch,
  MatchController.getLaLigaMatch
)
/**
 * @api {get} /Champions Retrieve matches
 * @apiVersion 1.0.0
 * @apiName Championsmatches
 * @apiGroup Champions
 * @apiPermission authenticated user
 * 
 *  @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 * [
    {
        "_id": "5ba0ee53b6a0795c2bd85935",
        "pseudoKey": "barcelona-psv",
        "sport": "Soccer",
        "league": "Champions",
        "date": "2018-09-18T16:55:00.000Z",
        "team1": "Barcelona",
        "team2": "PSV",
        "matchInstances": [
            {
                "team1": {
                    "name": "Barcelona",
                    "price": "1.10"
                },
                "team2": {
                    "name": "PSV",
                    "price": "20.00"
                },
                "pseudoKey": "barcelona-psv",
                "service": "Betin",
                "region": "Kenya",
                "drawPrice": "10.00",
                "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=19479569"
            },
            {
                "team1": {
                    "name": "Barcelona",
                    "price": "1.09"
                },
                "team2": {
                    "name": "PSV",
                    "price": "22.50"
                },
                "pseudoKey": "barcelona-psv",
                "service": "Betpawa",
                "region": "Kenya",
                "drawPrice": "12.50",
                "url": "https://www.betpawa.co.ke/event-460965-barcelona-psv-eindhoven"
            },
            {
                "team1": {
                    "name": "Barcelona",
                    "price": "1.12"
                },
                "team2": {
                    "name": "PSV",
                    "price": "16.58"
                },
                "pseudoKey": "barcelona-psv",
                "service": "Betway",
                "region": "Kenya",
                "drawPrice": "10.24",
                "url": "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=56c49c94-b3ac-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
            },
            {
                "team1": {
                    "name": "Barcelona",
                    "price": "1.13"
                },
                "team2": {
                    "name": "PSV",
                    "price": "24"
                },
                "pseudoKey": "barcelona-psv",
                "service": "1XBet",
                "region": "Kenya",
                "drawPrice": "11",
                "url": "https://1xbet.co.ke/en/line/Football/118587-UEFA-Champions-League/30631089-Barcelona-PSV-Eindhoven/"
            }
        ],
        "__v": 0
    },
    {
        "_id": "5ba0ee53b6a0795c2bd85936",
        "pseudoKey": "schalke-porto",
        "sport": "Soccer",
        "league": "Champions",
        "date": "2018-09-18T19:00:00.000Z",
        "team1": "Schalke",
        "team2": "Porto",
        "matchInstances": [
            {
                "team1": {
                    "name": "Schalke",
                    "price": "2.37"
                },
                "team2": {
                    "name": "Porto",
                    "price": "3.10"
                },
                "pseudoKey": "schalke-porto",
                "service": "Betin",
                "region": "Kenya",
                "drawPrice": "3.30",
                "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=19479599"
            },
            {
                "team1": {
                    "name": "Schalke",
                    "price": "2.35"
                },
                "team2": {
                    "name": "Porto",
                    "price": "3.05"
                },
                "pseudoKey": "schalke-porto",
                "service": "Betpawa",
                "region": "Kenya",
                "drawPrice": "3.35",
                "url": "https://www.betpawa.co.ke/event-460974-schalke-04-fc-porto"
            },
            {
                "team1": {
                    "name": "Schalke",
                    "price": "2.37"
                },
                "team2": {
                    "name": "Porto",
                    "price": "3.08"
                },
                "pseudoKey": "schalke-porto",
                "service": "Betway",
                "region": "Kenya",
                "drawPrice": "3.30",
                "url": "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=a2c49c94-b3ac-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
            },
            {
                "team1": {
                    "name": "Schalke",
                    "price": "2.45"
                },
                "team2": {
                    "name": "Porto",
                    "price": "3.168"
                },
                "pseudoKey": "schalke-porto",
                "service": "1XBet",
                "region": "Kenya",
                "drawPrice": "3.4",
                "url": "https://1xbet.co.ke/en/line/Football/118587-UEFA-Champions-League/30631093-Schalke-04-Porto/"
            }
        ],
        "__v": 0
    },
    ...
 * ]
 */
router.get("/Champions", MatchController.allChampionsMatches)
/**
 * @api {get} /Champions/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName Championsmatch
 * @apiGroup Champions
 * @apiPermission authenticated user
 *
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 * [
    {
        "team1": {
            "name": "Donetsk",
            "price": "1.97"
        },
        "team2": {
            "name": "Hoffenheim",
            "price": "3.65"
        },
        "pseudoKey": "donetsk-hoffenheim",
        "service": "Betin",
        "region": "Kenya",
        "drawPrice": "3.75",
        "url": "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=19479664"
    },
    {
        "team1": {
            "name": "Donetsk",
            "price": "2.00"
        },
        "team2": {
            "name": "Hoffenheim",
            "price": "3.70"
        },
        "pseudoKey": "donetsk-hoffenheim",
        "service": "Betpawa",
        "region": "Kenya",
        "drawPrice": "3.60",
        "url": "https://www.betpawa.co.ke/event-460973-shakhtar-donetsk-hoffenheim"
    },
    {
        "team1": {
            "name": "Donetsk",
            "price": "1.97"
        },
        "team2": {
            "name": "Hoffenheim",
            "price": "3.66"
        },
        "pseudoKey": "donetsk-hoffenheim",
        "service": "Betway",
        "region": "Kenya",
        "drawPrice": "3.72",
        "url": "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=30c49c94-b3ac-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
    },
    {
        "team1": {
            "name": "Donetsk",
            "price": "2.01"
        },
        "team2": {
            "name": "Hoffenheim",
            "price": "3.86"
        },
        "pseudoKey": "donetsk-hoffenheim",
        "service": "1XBet",
        "region": "Kenya",
        "drawPrice": "3.82",
        "url": "https://1xbet.co.ke/en/line/Football/118587-UEFA-Champions-League/30631097-Shakhtar-Donetsk-TSG-1899-Hoffenheim/"
    }
]
 */
router.get(
  "/Champions/:pseudoKey",
  MatchControllerPolicy.getMatch,
  MatchController.getChampionMatch
)
/**
 * @api {get} /Europa Retrieve matches
 * @apiVersion 1.0.0
 * @apiName Europamatches
 * @apiGroup Europa
 * @apiPermission authenticated user
 *
 *  @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 * [
    {
        "_id": "5ba3c25252ad2d0901240f60",
        "pseudoKey": "belediyespor-krasnodar",
        "sport": "Soccer",
        "league": "Europa",
        "date": "2018-09-20T16:55:00.000Z",
        "team1": "Belediyespor",
        "team2": "Krasnodar",
        "matchInstances": [
            {
                "team1": {
                    "name": "Belediyespor",
                    "price": "3.60"
                },
                "team2": {
                    "name": "Krasnodar",
                    "price": "2.05"
                },
                "pseudoKey": "belediyespor-krasnodar",
                "service": "Betpawa",
                "region": "Kenya",
                "drawPrice": "3.50",
                "url": "https://www.betpawa.co.ke/event-463547-akhisar-belediyespor-fk-krasnodar"
            },
            {
                "team1": {
                    "name": "Belediyespor",
                    "price": "3.56"
                },
                "team2": {
                    "name": "Krasnodar",
                    "price": "2.06"
                },
                "pseudoKey": "belediyespor-krasnodar",
                "service": "Betway",
                "region": "Kenya",
                "drawPrice": "3.42",
                "url": "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=b4237aff-52ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
            },
            {
                "team1": {
                    "name": "Belediyespor",
                    "price": "3.72"
                },
                "team2": {
                    "name": "Krasnodar",
                    "price": "2.15"
                },
                "pseudoKey": "belediyespor-krasnodar",
                "service": "1XBet",
                "region": "Kenya",
                "drawPrice": "3.52",
                "url": "https://1xbet.co.ke/en/line/Football/118593-UEFA-Europa-League/30668517-Akhisar-Belediyespor-Krasnodar/"
            }
        ],
        "__v": 0
    },
    {
        "_id": "5ba3c25252ad2d0901240f61",
        "pseudoKey": "besiktas-sarpsborg",
        "sport": "Soccer",
        "league": "Europa",
        "date": "2018-09-20T16:55:00.000Z",
        "team1": "Besiktas",
        "team2": "Sarpsborg",
        "matchInstances": [
            {
                "team1": {
                    "name": "Besiktas",
                    "price": "1.28"
                },
                "team2": {
                    "name": "Sarpsborg",
                    "price": "10.00"
                },
                "pseudoKey": "besiktas-sarpsborg",
                "service": "Betpawa",
                "region": "Kenya",
                "drawPrice": "6.00",
                "url": "https://www.betpawa.co.ke/event-463536-besiktas-jk-sarpsborg-08-ff"
            },
            {
                "team1": {
                    "name": "Besiktas",
                    "price": "1.29"
                },
                "team2": {
                    "name": "Sarpsborg",
                    "price": "9.27"
                },
                "pseudoKey": "besiktas-sarpsborg",
                "service": "Betway",
                "region": "Kenya",
                "drawPrice": "5.64",
                "url": "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=f6c214dc-51ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
            },
            {
                "team1": {
                    "name": "Besiktas",
                    "price": "1.32"
                },
                "team2": {
                    "name": "Sarpsborg",
                    "price": "11.5"
                },
                "pseudoKey": "besiktas-sarpsborg",
                "service": "1XBet",
                "region": "Kenya",
                "drawPrice": "5.9",
                "url": "https://1xbet.co.ke/en/line/Football/118593-UEFA-Europa-League/30668519-Besiktas-Sarpsborg-08/"
            }
        ],
        "__v": 0
    },
    {
        "_id": "5ba3c25252ad2d0901240f62",
        "pseudoKey": "dynamo-astana",
        "sport": "Soccer",
        "league": "Europa",
        "date": "2018-09-20T16:55:00.000Z",
        "team1": "Dynamo",
        "team2": "Astana",
        "matchInstances": [
            {
                "team1": {
                    "name": "Dynamo",
                    "price": "1.72"
                },
                "team2": {
                    "name": "Astana",
                    "price": "5.50"
                },
                "pseudoKey": "dynamo-astana",
                "service": "Betpawa",
                "region": "Kenya",
                "drawPrice": "3.50",
                "url": "https://www.betpawa.co.ke/event-463537-dinamo-kiev-fc-astana"
            },
            {
                "team1": {
                    "name": "Dynamo",
                    "price": "1.72"
                },
                "team2": {
                    "name": "Astana",
                    "price": "5.36"
                },
                "pseudoKey": "dynamo-astana",
                "service": "Betway",
                "region": "Kenya",
                "drawPrice": "3.42",
                "url": "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=bc9be7e3-51ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
            }
        ],
        "__v": 0
    }
 * ]
 *
 */

router.get("/Europa", MatchController.allEuropaMatches)
/**
 * @api {get} /Europa/:pseudoKey Retrieve match
 * @apiVersion 1.0.0
 * @apiName Europamatch
 * @apiGroup Europa
 * @apiPermission authenticated user
 *
 *
 * @apiParam {String} pseudoKey The match key
 *
 * @apiExample {js} Javascript
 * $http.defaults.headers.common["Authorization"] = "Bearer " + token;
 * $http.get(url)
 *    .success((res,status) => doSomethingHere())
 *    .error((err,status) => doSomethingHere())
 *
 * @apiSuccess {String} pseudoKey The match id
 * @apiSuccess {Object} team1 The first team
 * @apiSuccess {Object} team2 The second team
 * @apiSuccess {String} service The bookmaker
 * @apiSuccess {String} region Geographical region
 * @apiSuccess {String} drawPrice Draw odds
 * @apiSuccess {String} url The match url
 *
 * @apiSuccessExample {json} Success response:
 *
 *      HTTPS 200 OK
 *
 * [
    {
        "team1": {
            "name": "Dynamo",
            "price": "1.72"
        },
        "team2": {
            "name": "Astana",
            "price": "5.50"
        },
        "pseudoKey": "dynamo-astana",
        "service": "Betpawa",
        "region": "Kenya",
        "drawPrice": "3.50",
        "url": "https://www.betpawa.co.ke/event-463537-dinamo-kiev-fc-astana"
    },
    {
        "team1": {
            "name": "Dynamo",
            "price": "1.72"
        },
        "team2": {
            "name": "Astana",
            "price": "5.36"
        },
        "pseudoKey": "dynamo-astana",
        "service": "Betway",
        "region": "Kenya",
        "drawPrice": "3.42",
        "url": "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=bc9be7e3-51ad-e811-80df-00155d83492b&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
    }
 * ]
 */
router.get(
  "/Europa/:pseudoKey",
  MatchControllerPolicy.getMatch,
  MatchController.getEuropaMatch
)

router.get("*", function(req, res) {
  res.send("what???", 404)
})

export default router

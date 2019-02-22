import OddsScraper from "../scraper/scraper"
import express from "express"

const router = express.Router()

/**
 * Crawling Routes
 */

//============================================================
// Premier League
//============================================================
/**
 * TODO: Betway redirects when request comes from outside Kenya
 *
 */
//Scraper health check
router.get("/health-check", function(req, res) {
  res.sendStatus(200)
})
//============================================================
//Premier League
//============================================================
router.get("/startBetwayPremierLeague", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwayPremierLeague()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})
router.get("/startBetinPremierLeague", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinPremierLeague()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/startSportpesaPremierLeague", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaPremierLeague()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/startBetikaPremierLeague", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaPremierLeague()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/start1XBetPremierLeague", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetPremierLeague()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetpawaPremierLeague", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaPremierLeague()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startPremierbetPremierLeague", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapePremierbetPremierLeague()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
//=============================================================
// EFL Cup
//=============================================================

router.get("/startBetinEFLCup", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinEFLCup()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
/**
 * TODO: Betway redirects when request comes from outside Kenya.
 *       Betway EFL cup matches are displayed in 2 pages.Currently
 *       can only scrape the first page (20 matches).
 *
 */
router.get("/startBetwayEFLCup", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwayEFLCup()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/startSportpesaEFLCup", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaEFLCup()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/start1XBetEFLCup", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetEFLCup()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/startBetikaEFLCup", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaEFLCup()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetpawaEFLCup", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaEFLCup()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
//===============================================================
//  Ligue1
//===============================================================

router.get("/startBetikaLigue1", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaLigue1()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/startBetinLigue1", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinLigue1()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startSportpesaLigue1", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaLigue1()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetwayLigue1", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwayLigue1()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/start1XBetLigue1", function(req, res) {
  //Lazy load OddsScraper here

  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetLigue1()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetpawaLigue1", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaLigue1()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
//=================================================
// Serie A
//=================================================
router.get("/startBetinSerieA", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinSerieA()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startSportpesaSerieA", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaSerieA()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetwaySerieA", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwaySerieA()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetikaSerieA", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaSerieA()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/start1XBetSerieA", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetSerieA()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetpawaSerieA", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaSerieA()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
//====================================================
// Bundesliga
//====================================================
router.get("/startBetpawaBundesliga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaBundesliga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/start1XBetBundesliga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetBundesliga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetikaBundesliga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaBundesliga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetinBundesliga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinBundesliga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startSportpesaBundesliga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaBundesliga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetwayBundesliga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwayBundesliga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
//===========================================================
// La Liga (Primera Division)
//===========================================================
router.get("/startBetinLaLiga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinLaLiga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetikaLaLiga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaLaLiga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetwayLaLiga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwayLaLiga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetpawaLaLiga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaLaLiga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/start1XBetLaLiga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetLaLiga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startSportpesaLaLiga", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaLaLiga()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
//==================================================
// Champions League
//==================================================
router.get("/startBetinChampions", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinChampions()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetikaChampions", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaChampions()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetpawaChampions", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaChampions()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetwayChampions", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwayChampions()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/start1XBetChampions", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetChampions()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startSportpesaChampions", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaChampions()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
//=================================================
// Europa
//=================================================
router.get("/startBetinEuropa", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetinEuropa()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetikaEuropa", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetikaEuropa()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetpawaEuropa", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetPawaEuropa()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/startBetwayEuropa", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeBetwayEuropa()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})
router.get("/start1XBetEuropa", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrape1XBetEuropa()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("/startSportpesaEuropa", function(req, res) {
  const oddsScraper = new OddsScraper()
  oddsScraper
    .scrapeSportPesaEuropa()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})

router.get("*", function(req, res) {
  res.send("what???", 404)
})
export default router

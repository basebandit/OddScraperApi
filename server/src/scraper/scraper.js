import cheerio from "cheerio"
import rp from "request-promise"
import tough from "tough-cookie"
import Match from "../models/MatchModel"
import MatchController from "../controllers/MatchController"
import abbreviate from "../utils"

class OddsScraper {
  constructor() {
    this.services = {
      betway: {
        name: "Betway",
        region: "Kenya"
      },
      betIn: {
        name: "Betin",
        region: "Kenya"
      },
      sportpesa: {
        name: "Sportpesa",
        region: "Kenya"
      },
      betika: {
        name: "Betika",
        region: "Kenya"
      },
      x1bet: {
        name: "1XBet",
        region: "Kenya"
      },
      betpawa: {
        name: "Betpawa",
        region: "Kenya"
      },
      premierBet: {
        name: "Premierbet",
        region: "Kenya"
      }
    }
    this.leagues = {
      premierLeague: "Premier League",
      eflCup: "League Cup",
      laLiga: "La Liga",
      serieA: "Serie A",
      ligue1: "Ligue 1",
      bundesliga: "Bundesliga",
      europa: "Europa",
      champions: "Champions"
    }
  }
  //===========================================
  // Betway Leagues
  //===========================================
  scrapeBetwayPremierLeague() {
    return this.startBetwayScraper(
      "bd277067-0a16-e811-80d1-00155d4cf19e",
      this.leagues.premierLeague
    )
  }
  scrapeBetwayEFLCup() {
    return this.startBetwayScraper(
      "853ddf47-0a16-e811-80d1-00155d4cf19e",
      this.leagues.eflCup
    )
  }
  scrapeBetwayLigue1() {
    return this.startBetwayScraper(
      "2587ab90-0916-e811-80d1-00155d4cf19e",
      this.leagues.ligue1
    )
  }
  scrapeBetwaySerieA() {
    return this.startBetwayScraper(
      "9d2e7c77-0916-e811-80d1-00155d4cf19e",
      this.leagues.serieA
    )
  }
  scrapeBetwayBundesliga() {
    return this.startBetwayScraper(
      "4dbfe7cf-0916-e811-80d1-00155d4cf19e",
      this.leagues.bundesliga
    )
  }
  scrapeBetwayLaLiga() {
    return this.startBetwayScraper(
      "06beb6ee-0916-e811-80d5-00155d4cf18c",
      this.leagues.laLiga
    )
  }
  scrapeBetwayChampions() {
    return this.startBetwayScraper(
      "d3242cb6-0916-e811-80d1-00155d4cf19e",
      this.leagues.champions
    )
  }
  scrapeBetwayEuropa() {
    return this.startBetwayScraper(
      "f7aa858a-0916-e811-80d1-00155d4cf19e",
      this.leagues.europa
    )
  }
  //=============================================
  // Betin Leagues
  //=============================================
  scrapeBetinPremierLeague() {
    return this.startBetInScraper("371", this.leagues.premierLeague)
  }
  scrapeBetinEFLCup() {
    return this.startBetInScraper("269086", this.leagues.eflCup)
  }
  scrapeBetinLigue1() {
    return this.startBetInScraper("376", this.leagues.ligue1)
  }
  scrapeBetinSerieA() {
    return this.startBetInScraper("389", this.leagues.serieA)
  }
  scrapeBetinBundesliga() {
    return this.startBetInScraper("381", this.leagues.bundesliga)
  }
  scrapeBetinLaLiga() {
    return this.startBetInScraper("413", this.leagues.laLiga)
  }
  scrapeBetinChampions() {
    return this.startBetInScraper("295737", this.leagues.champions)
  }
  scrapeBetinEuropa() {
    return this.startBetInScraper("295866", this.leagues.europa)
  }
  //================================================
  // SportPesa Leagues
  //================================================
  scrapeSportPesaPremierLeague() {
    return this.startSportPesaScraper("67600", this.leagues.premierLeague)
  }
  scrapeSportPesaEFLCup() {
    return this.startSportPesaScraper("76298", this.leagues.eflCup)
  }
  scrapeSportPesaLigue1() {
    return this.startSportPesaScraper("76062", this.leagues.ligue1)
  }
  scrapeSportPesaSerieA() {
    return this.startSportPesaScraper("67358", this.leagues.serieA)
  }
  scrapeSportPesaBundesliga() {
    return this.startSportPesaScraper("76390", this.leagues.bundesliga)
  }
  scrapeSportPesaLaLiga() {
    return this.startSportPesaScraper("76837", this.leagues.laLiga)
  }
  scrapeSportPesaChampions() {
    //Order of groupMatches [A,B,C,D,E,F,...]
    this.scrapeSportPesaChampionsGroupA = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("77994", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaChampionsGroupB = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78002", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaChampionsGroupC = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper(" 77996", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaChampionsGroupD = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper(" 77998", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaChampionsGroupE = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78000", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaChampionsGroupF = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78008", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaChampionsGroupG = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78004", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaChampionsGroupH = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78006", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    const championsGroupMatches = [
      this.scrapeSportPesaChampionsGroupA(),
      this.scrapeSportPesaChampionsGroupB(),
      this.scrapeSportPesaChampionsGroupC(),
      this.scrapeSportPesaChampionsGroupD(),
      this.scrapeSportPesaChampionsGroupE(),
      this.scrapeSportPesaChampionsGroupF(),
      this.scrapeSportPesaChampionsGroupG(),
      this.scrapeSportPesaChampionsGroupH()
    ]
    return Promise.all(championsGroupMatches)
  }
  scrapeSportPesaEuropa() {
    //Order of groupMatches [A,B,C,D,E,F,...]
    this.scrapeSportPesaEuropaGroupA = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78034", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupB = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78022", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupC = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78036", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupD = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper(" 78024", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupE = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78030", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupF = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78026", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupG = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78028", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupH = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78032", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupI = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78040", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupJ = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78038", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupK = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78042", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeSportPesaEuropaGroupL = () => {
      return new Promise((resolve, reject) => {
        this.startSportPesaScraper("78044", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    const europaGroupMatches = [
      this.scrapeSportPesaEuropaGroupA(),
      this.scrapeSportPesaEuropaGroupB(),
      this.scrapeSportPesaEuropaGroupC(),
      this.scrapeSportPesaEuropaGroupD(),
      this.scrapeSportPesaEuropaGroupE(),
      this.scrapeSportPesaEuropaGroupF(),
      this.scrapeSportPesaEuropaGroupG(),
      this.scrapeSportPesaEuropaGroupH(),
      this.scrapeSportPesaEuropaGroupI(),
      this.scrapeSportPesaEuropaGroupJ(),
      this.scrapeSportPesaEuropaGroupK(),
      this.scrapeSportPesaEuropaGroupL()
    ]
    return Promise.all(europaGroupMatches)
  }
  //=================================================
  // Betika
  //=================================================
  scrapeBetikaPremierLeague() {
    return this.startBetikaScraper("222", this.leagues.premierLeague)
  }
  scrapeBetikaEFLCup() {
    return this.startBetikaScraper("8398", this.leagues.eflCup)
  }
  scrapeBetikaLigue1() {
    return this.startBetikaScraper("209", this.leagues.ligue1)
  }
  scrapeBetikaSerieA() {
    return this.startBetikaScraper("182", this.leagues.serieA)
  }
  scrapeBetikaBundesliga() {
    return this.startBetikaScraper("214", this.leagues.bundesliga)
  }
  scrapeBetikaLaLiga() {
    return this.startBetikaScraper("14482", this.leagues.laLiga)
  }
  scrapeBetikaChampions() {
    //Order of groupMatches [A,B,C,D,E,F,...]
    this.scrapeBetikaChampionsGroupA = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8805", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaChampionsGroupB = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8807", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaChampionsGroupC = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8809", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaChampionsGroupD = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8810", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaChampionsGroupE = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8811", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaChampionsGroupF = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8812", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaChampionsGroupG = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8813", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaChampionsGroupH = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8815", this.leagues.champions).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    const championsGroupMatches = [
      this.scrapeBetikaChampionsGroupA(),
      this.scrapeBetikaChampionsGroupB(),
      this.scrapeBetikaChampionsGroupC(),
      this.scrapeBetikaChampionsGroupD(),
      this.scrapeBetikaChampionsGroupE(),
      this.scrapeBetikaChampionsGroupF(),
      this.scrapeBetikaChampionsGroupG(),
      this.scrapeBetikaChampionsGroupH()
    ]
    return Promise.all(championsGroupMatches)
  }
  scrapeBetikaEuropa() {
    //Order of groupMatches [A,B,C,D,E,F,...]
    this.scrapeBetikaEuropaGroupA = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8818", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupB = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8817", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupC = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8821", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupD = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper(" 8823", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupE = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8827", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupF = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8829", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupG = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8831", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupH = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8833", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupI = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8835", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupJ = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8836", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupK = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8838", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    this.scrapeBetikaEuropaGroupL = () => {
      return new Promise((resolve, reject) => {
        this.startBetikaScraper("8825", this.leagues.europa).then(
          data => resolve(data),
          err => reject(err)
        )
      })
    }
    const europaGroupMatches = [
      this.scrapeBetikaEuropaGroupA(),
      this.scrapeBetikaEuropaGroupB(),
      this.scrapeBetikaEuropaGroupC(),
      this.scrapeBetikaEuropaGroupD(),
      this.scrapeBetikaEuropaGroupE(),
      this.scrapeBetikaEuropaGroupF(),
      this.scrapeBetikaEuropaGroupG(),
      this.scrapeBetikaEuropaGroupH(),
      this.scrapeBetikaEuropaGroupI(),
      this.scrapeBetikaEuropaGroupJ(),
      this.scrapeBetikaEuropaGroupK(),
      this.scrapeBetikaEuropaGroupL()
    ]
    return Promise.all(europaGroupMatches)
  }
  //====================================================
  // 1XBet leagues
  //====================================================
  scrape1XBetPremierLeague() {
    return this.start1XBetScraper("88637", this.leagues.premierLeague)
  }
  scrape1XBetEFLCup() {
    return this.start1XBetScraper("119237", this.leagues.eflCup)
  }
  scrape1XBetLigue1() {
    return this.start1XBetScraper("12821", this.leagues.ligue1)
  }
  scrape1XBetSerieA() {
    return this.start1XBetScraper("110163", this.leagues.serieA)
  }
  scrape1XBetBundesliga() {
    return this.start1XBetScraper("96463", this.leagues.bundesliga)
  }
  scrape1XBetLaLiga() {
    return this.start1XBetScraper("127733", this.leagues.bundesliga)
  }
  scrape1XBetChampions() {
    return this.start1XBetScraper("118587", this.leagues.champions)
  }
  scrape1XBetEuropa() {
    return this.start1XBetScraper("118593", this.leagues.europa)
  }
  //==================================================
  // BetPawa Leagues
  //==================================================
  scrapeBetPawaPremierLeague() {
    return this.startBetPawaScraper("5686", this.leagues.premierLeague)
  }
  scrapeBetPawaLigue1() {
    return this.startBetPawaScraper("5683", this.leagues.ligue1)
  }
  scrapeBetPawaEFLCup() {
    return this.startBetPawaScraper("5685", this.leagues.eflCup)
  }
  scrapeBetPawaSerieA() {
    return this.startBetPawaScraper("5695", this.leagues.serieA)
  }
  scrapeBetPawaBundesliga() {
    return this.startBetPawaScraper("5698", this.leagues.bundesliga)
  }
  scrapeBetPawaLaLiga() {
    return this.startBetPawaScraper("5694", this.leagues.bundesliga)
  }
  scrapeBetPawaChampions() {
    return this.startBetPawaScraper("5356", this.leagues.champions)
  }
  scrapeBetPawaEuropa() {
    return this.startBetPawaScraper("5346", this.leagues.europa)
  }
  //==================================================
  //Premierbet Leagues
  //==================================================
  scrapePremierbetPremierLeague() {
    return this.startPremierbetScraper("629", this.leagues.premierLeague)
  }

  /** ================================================
   *
   *  SCRAPERS
   *
   * ================================================= */

  /**
   * @description Scrape Betway leagues
   * @param {string} leagueId Unique league identifier
   * @param {string} league  League name
   * @returns {Promise} Promise Object with the scraped matches
   */
  startBetwayScraper(leagueId, league) {
    return new Promise((resolve, reject) => {
      const cookie = new tough.Cookie({
        key: "ASP.NET_SessionId",
        value: "2yyhuyk1s4aan11ylqkjyj42",
        domain: "www.betway.co.ke",
        marketTypeCategoryId: "00000000-0000-0000-da7a-000000580001",
        httpOnly: true,
        maxAge: 3
      })

      const cookiejar = rp.jar()
      cookiejar.setCookie(cookie, "https://www.betway.co.ke/Event/FilterEvents")

      const options = {
        method: "POST",
        uri: "https://www.betway.co.ke/Event/FilterEvents",
        form: {
          couponTypeId: undefined,
          leagueIds: [leagueId],
          marketTypeCategoryId: "00000000-0000-0000-da7a-000000580001"
        },
        jar: cookiejar,
        transform: function(body) {
          return cheerio.load(body)
        }
      }

      rp(options)
        .then($ => {
          // Parse html like you would with jQuery...
          const matches = []
          $(".row.eventRow").each((index, val) => {
            const selectedEventId = $(val).attr("data-event-id")
            matches.push(
              this.parseBetwayMatches(
                $,
                selectedEventId,
                val,
                this.services.betway.name,
                this.services.betway.region,
                league
              )
            )
          })
          Promise.all(matches)
            .then(data => {
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(function(err) {
          // Crawling failed or Cheerio choked...
          reject(err)
        })
    })
  }
  /**
   *
   * @param {string} leagueId Unique league identifier
   * @param {string} league League name
   * @description Scrape Betin leagues
   * @returns {Promise} Promise Object with the scraped matches
   */
  startBetPawaScraper(leagueId, league) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "POST",
        uri: "https://www.betpawa.co.ke/ws/public/pricing/getEventsForGroup",
        body: {
          MarketTypeGrouping: "_1X2",
          CategoryId: 2,
          GroupId: leagueId
        },
        json: true
      }
      rp(options)
        .then(res => {
          let arrMatches = res.Data.Events
          let matches = []
          for (let match of arrMatches) {
            matches.push(
              this.parseBetPawaMatches(
                match,
                this.services.betpawa.name,
                this.services.betpawa.region,
                league
              )
            )
          }
          Promise.all(matches)
            .then(data => {
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  /**
   *
   * @param {string} leagueId Unique league identifier
   * @param {string} league League name
   * @description Scrape Betin leagues
   * @returns {Promise} Promise Object with the scraped matches
   */
  startBetInScraper(leagueId, league) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "GET",
        uri:
          "https://web.betin.co.ke/Controls/OddsEventExt.aspx?ShowLinkFastBet=0&showDate=1&showGQ=1&rnd=046087373710432145&EventID=" +
          leagueId,
        transform: function(body) {
          return cheerio.load(body)
        }
      }

      rp(options)
        .then($ => {
          const matches = []
          const self = this
          $(".item").each(function() {
            let subEventId = $(this).attr("idse")
            $(this).each((index, val) => {
              matches.push(
                self.parseBetInMatches(
                  $,
                  subEventId,
                  val,
                  self.services.betIn.name,
                  self.services.betIn.region,
                  league
                )
              )
            })
          })

          Promise.all(matches)
            .then(data => {
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /**
   *
   * @param {string} leagueId Unique league identifier
   * @param {string} league League name
   * @description Scrape Sportpesa leagues
   * @returns {Promise} Promise Object with the scraped matches
   */
  startSportPesaScraper(leagueId, league) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "GET",
        uri:
          "https://www.sportpesa.co.ke/leaguegames?league=" +
          leagueId +
          "&sportId=1&top=1",
        transform: function(body) {
          return cheerio.load(body)
        }
      }
      rp(options)
        .then($ => {
          let matches = []
          $(".match.football.FOOTBALL.-.Games.for.this.league").each(
            (index, value) => {
              matches.push(
                this.parseSportPesaMatches(
                  $,
                  value,
                  this.services.sportpesa.name,
                  this.services.sportpesa.region,
                  league
                )
              )
            }
          )
          Promise.all(matches)
            .then(data => {
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  /**
   *
   * @param {string} leagueId Unique league identifier
   * @param {string} league League name
   * @description Scrape Betika leagues
   * @returns {Promise} Promise Object with the scraped matches
   */
  startBetikaScraper(leagueId, league) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "POST",
        uri: "https://api.betika.com/v1/sports/competition",
        body: {
          id: leagueId,
          limit: 1000
        },
        json: true
      }

      rp(options)
        .then(res => {
          const matches = []
          const arrMatches = res.data
          for (let match of arrMatches) {
            matches.push(
              this.parseBetikaMatches(
                match,
                this.services.betika.name,
                this.services.betika.region,
                league
              )
            )
          }
          Promise.all(matches)
            .then(data => {
              if (data.length > 0) {
                resolve(data)
              }
              resolve({ responseMessage: "No Matches" })
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  /**
   *
   * @param {string} leagueId Unique league identifier
   * @param {string} league League name
   * @description Scrape 1XBet leagues
   * @returns {Promise} Promise object with the scraped matches
   */
  start1XBetScraper(leagueId, league) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "GET",
        uri:
          "https://1xbet.com/LineFeed/Get1x2_Zip?champs=" +
          leagueId +
          "&sports=1&count=150&lng=en&mode=4&getEmpty=true",
        json: true
      }
      rp(options)
        .then(res => {
          let matches = []
          let arrMatch = res.Value
          for (let match of arrMatch) {
            if (
              match.O1.trim().includes("Home") ||
              match.O2.trim().includes("Away")
            ) {
              continue
            }
            matches.push(
              this.parse1XBetMatches(
                match,
                leagueId,
                this.services.x1bet.name,
                this.services.x1bet.region,
                league
              )
            )
          }
          Promise.all(matches)
            .then(data => {
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  /**
   *
   * @param {string} leagueId Unique league identifier
   * @param {*} league League name
   * @description Scrape Premierbet Leagues
   * @returns {Promise} Promise Object with the scraped matches
   */
  startPremierbetScraper(leagueId, league) {
    return new Promise((resolve, reject) => {
      const cookie =
        "JSESSIONID=b2z56hpiyKzmv9J-vn9-YKaw.o2ke; timezoneOffset=-180; __cfduid=dc4f322661261f1336b4155fca5c50e421530631785; lsn=jarjarbinks; countrycode=KE; open_running=1%3B-%3B2%3B-%3B6%3B-%3B10%3B-; SRVID_VF=vf-web04|W3KgL|W3KTE"

      const cookieString = rp.cookie(cookie)

      const headers = {
        Cookie: cookieString
      }
      const options = {
        method: "GET",
        uri: "https://sport.premierbet.com/ke/pages/search/7/" + leagueId,
        headers: headers,
        transform: function(body) {
          return cheerio.load(body)
        }
      }
      rp(options)
        .then($ => {
          //Parse html here like you would with jQuery
          const matches = []
          $(".event-panel").each((index, val) => {
            matches.push(
              this.parsePremierbetMatches(
                $,
                val,
                this.services.premierBet.name,
                this.services.premierBet.region,
                league
              )
            )
          })
          Promise.all(matches)
            .then(data => {
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  //===================================================================================
  // Match Parsers
  //===================================================================================
  //TODO: Finish premier bet
  parsePremierbetMatches($, val, service, region, league) {
    return new Promise((resolve, reject) => {
      const sportTitle = "Soccer"
      const event = $(val)
        .find(".event-name")
        .text()
        .trim()
      let team1 = event.split(" v ")[0]
      team1 = abbreviate(team1)
      let team2 = event.split(" v ")[1]
      team2 = abbreviate(team2)
      const pseudoKey = (
        team1.split(" ").join("") +
        "-" +
        team2.split(" ").join("")
      ).toLowerCase()
      let matchDate = $(val)
        .find(".event-date")
        .text()
        .trim()
      resolve(pseudoKey)
    })
  }
  parseBetBossMatches() {}
  /**
   *
   * @param {Object} match JSON response Object
   * @param {String} leagueId For use in retrieving match event details
   * @param {String} service Bookmaker
   * @param {String} region Target geographical region
   * @param {String} league The match league
   */
  parse1XBetMatches(match, leagueId, service, region, league) {
    return new Promise((resolve, reject) => {
      const sportTitle = "Soccer"
      let teamOne = match.O1.trim()
      teamOne = abbreviate(teamOne)
      let teamTwo = match.O2.trim()
      teamTwo = abbreviate(teamTwo)
      const pseudoKey = (
        teamOne.split(" ").join("") +
        "-" +
        teamTwo.split(" ").join("")
      ).toLowerCase()
      const dateString = match.S
      const strMatch = match.L.split(".")
        .join("")
        .split(" ")
        .join("-")
      const matchInstances = [
        {
          pseudoKey: pseudoKey,
          service: service,
          region: region,
          team1: {
            name: teamOne,
            price: match.E[0].C
          },
          team2: {
            name: teamTwo,
            price: match.E[2].C
          },
          drawPrice: match.E[1].C,
          url:
            "https://1xbet.co.ke/en/line/Football/" +
            leagueId +
            "-" +
            strMatch +
            "/" +
            match.CI +
            "-" +
            match.O1.split(" ").join("-") +
            "-" +
            match.O2.split(" ").join("-") +
            "/"
        }
      ]
      Match.findOne({ pseudoKey: pseudoKey }).then(
        match => {
          if (!match) {
            const match = new Match({
              pseudoKey: pseudoKey,
              sport: sportTitle,
              league: league,
              date: new Date(dateString * 1000).toISOString(),
              team1: teamOne,
              team2: teamTwo,
              matchInstances: matchInstances
            })
            match.save().then(
              match => {
                resolve(match)
              },
              err => {
                reject(err)
              }
            )
          } else {
            Match.findOneAndUpdate(
              { pseudoKey: pseudoKey, "matchInstances.service": service },
              { $set: { "matchInstances.$": matchInstances[0] } }
            ).then(
              match => {
                if (!match) {
                  Match.findOneAndUpdate(
                    { pseudoKey: pseudoKey },
                    { $addToSet: { matchInstances: matchInstances } }
                  ).then(
                    match => {
                      resolve(match)
                    },
                    err => {
                      reject(err)
                    }
                  )
                } else {
                  resolve(match)
                }
              },
              err => {
                reject(err)
              }
            )
          }
        },
        err => {
          reject(err)
        }
      )
      //clean old matches
      this.cleanUpMatches(league)
    })
  }

  /**
   *
   * @param {Object} match JSON response Object
   * @param {String} service  Bookmaker
   * @param {String} region Target geographical region
   * @param {String} league The match league
   */
  parseBetikaMatches(match, service, region, league) {
    return new Promise((resolve, reject) => {
      const sportTitle = "Soccer"
      let teamOne = match.home_team.trim()
      teamOne = abbreviate(teamOne)
      let teamTwo = match.away_team.trim()
      teamTwo = abbreviate(teamTwo)
      const pseudoKey = (
        teamOne.split(" ").join("") +
        "-" +
        teamTwo.split(" ").join("")
      ).toLowerCase()
      const dateString = match.start_time.trim()
      const matchInstances = [
        {
          pseudoKey: pseudoKey,
          service: service,
          region: region,
          team1: {
            name: teamOne,
            price: match.home_odd.trim()
          },
          team2: {
            name: teamTwo,
            price: match.away_odd.trim()
          },
          drawPrice: match.neutral_odd.trim(),

          url:
            "https://www.betika.com/mobile/dist/#/prebets/markets/" +
            match.match_id
        }
      ]

      Match.findOne({ pseudoKey: pseudoKey }).then(
        match => {
          if (!match) {
            const match = new Match({
              pseudoKey: pseudoKey,
              sport: sportTitle,
              league: league,
              date: new Date(dateString).toISOString(),
              team1: teamOne,
              team2: teamTwo,
              matchInstances: matchInstances
            })
            match.save().then(
              match => {
                resolve(match)
              },
              err => {
                reject(err)
              }
            )
          } else {
            Match.findOneAndUpdate(
              {
                pseudoKey: pseudoKey,
                "matchInstances.service": service
              },
              { $set: { "matchInstances.$": matchInstances[0] } }
            ).then(
              match => {
                if (!match) {
                  Match.findOneAndUpdate(
                    { pseudoKey: pseudoKey },
                    { $addToSet: { matchInstances: matchInstances } }
                  ).then(
                    match => {
                      resolve(match)
                    },
                    err => {
                      reject(err)
                    }
                  )
                } else {
                  resolve(match)
                }
              },
              err => {
                reject(err)
              }
            )
          }
        },
        err => {
          reject(err)
        }
      )
      //clean old matches
      this.cleanUpMatches(league)
    })
  }
  /**
   *
   * @param {Object} $ Cheerio Object
   * @param {string} val  DOM Object
   * @param {String} service  Bookmaker
   * @param {String} region Target geographical region
   * @param {String} league The match league
   */
  parseSportPesaMatches($, val, service, region, league) {
    return new Promise((resolve, reject) => {
      const sportTitle = "Soccer"
      let teamOne = $(val)
        .find("li.pick01 > a.betting-button.pick-button > span.team ")
        .text()
        .trim()
      teamOne = abbreviate(teamOne)
      let teamTwo = $(val)
        .find("li.pick02 > a.betting-button.pick-button > span.team")
        .text()
        .trim()
      teamTwo = abbreviate(teamTwo)
      const dateString = $(val)
        .find("ul.meta:nth-child(2) > li.date > time-component")
        .attr("datetime")
        .replace(/["']/g, "")
      const pseudoKey = (
        teamOne.split(" ").join("") +
        "-" +
        teamTwo.split(" ").join("")
      ).toLowerCase()
      const matchInstances = [
        {
          pseudoKey: pseudoKey,
          service: service,
          region: region,
          team1: {
            name: teamOne,
            price: $(val)
              .find("li.pick01 > a.betting-button.pick-button > span.odd")
              .text()
              .trim()
          },
          team2: {
            name: teamTwo,
            price: $(val)
              .find("li.pick02 > a.betting-button.pick-button > span.odd")
              .text()
              .trim()
          },
          drawPrice: $(val)
            .find("li.pick0X > a.betting-button.pick-button > span.odd")
            .text()
            .trim(),
          url:
            "https://www.sportpesa.co.ke" +
            $(val)
              .find("ul.extra-picks > li > a.betting-button")
              .attr("href")
        }
      ]
      Match.findOne({ pseudoKey: pseudoKey }).then(
        match => {
          if (!match) {
            const match = new Match({
              pseudoKey: pseudoKey,
              sport: sportTitle,
              league: league,
              date: new Date(dateString).toISOString(),
              team1: teamOne,
              team2: teamTwo,
              matchInstances: matchInstances
            })

            match.save().then(
              match => {
                resolve(match)
              },
              err => {
                reject(err)
              }
            )
          } else {
            Match.findOneAndUpdate(
              { pseudoKey: pseudoKey, "matchInstances.service": service },
              { $set: { "matchInstances.$": matchInstances[0] } }
            ).then(
              match => {
                if (!match) {
                  Match.findOneAndUpdate(
                    { pseudoKey: pseudoKey },
                    {
                      $addToSet: { matchInstances: matchInstances }
                    }
                  ).then(
                    match => {
                      resolve(match)
                    },
                    err => {
                      reject(err)
                    }
                  )
                } else {
                  resolve(match)
                }
              },
              err => {
                reject(err)
              }
            )
          }
        },
        err => {
          reject(err)
        }
      )
      //clean old matches
      this.cleanUpMatches(league)
    })
  }
  /**
   *
   * @param {Object} $ Cheerio Object
   * @param {String} subEventId For use in retrieving the match event details
   * @param {string} val  DOM Object
   * @param {String} service  Bookmaker
   * @param {String} region Target geographical region
   * @param {String} league The match league
   */
  parseBetInMatches($, subEventId, val, service, region, league) {
    return new Promise((resolve, reject) => {
      const sportTitle = "Soccer"
      let team1 = $(val)
        .find(".Event")
        .text()
        .split("-")[0]
        .trim()
      team1 = abbreviate(team1)
      let team2 = $(val)
        .find(".Event")
        .text()
        .split("-")[1]
        .trim()
      team2 = abbreviate(team2)

      const matchTime = $(val)
        .find(".Time>span:nth-child(1)")
        .text()
      const dateString =
        $(val)
          .find(".Time>span:nth-child(2)")
          .text() +
        " " +
        new Date().getFullYear() +
        " " +
        matchTime
      const pseudoKey = (
        team1.split(" ").join("") +
        "-" +
        team2.split(" ").join("")
      ).toLowerCase()

      const matchInstances = [
        {
          pseudoKey: pseudoKey,
          service: service,
          region: region,
          team1: {
            name: abbreviate(
              $(val)
                .find(".Event")
                .text()
                .split("-")[0]
                .trim()
            ),
            price: $(val)
              .find("div.odd.r1.c1.g1>div:nth-child(2)")
              .text()
              .trim()
          },
          team2: {
            name: abbreviate(
              $(val)
                .find(".Event")
                .text()
                .split("-")[1]
                .trim()
            ),
            price: $(val)
              .find("div.odd.r1.c3.g1>div:nth-child(2)")
              .text()
              .trim()
          },
          drawPrice: $(val)
            .find("div.odd.r1.c2.g1>div:nth-child(2)")
            .text()
            .trim(),
          url:
            "https://web.betin.co.ke/Sport/SubEventOdds.aspx?SubEventID=" +
            subEventId
        }
      ]
      Match.findOne({ pseudoKey: pseudoKey }).then(
        match => {
          // Match does not exist in the database
          if (!match) {
            const match = new Match({
              pseudoKey: pseudoKey,
              sport: sportTitle,
              league: league,
              date: new Date(dateString).toISOString(),
              team1: team1,
              team2: team2,
              matchInstances: matchInstances
            })
            // save match in the database
            match.save().then(
              match => {
                resolve(match)
              },
              err => {
                reject(err)
              }
            )
          } else {
            // Match already exists lets look for this service's (betin) match instance.
            // Only update the matchInstance subdocument element corresponding to this service
            Match.findOneAndUpdate(
              { pseudoKey: pseudoKey, "matchInstances.service": service },
              { $set: { "matchInstances.$": matchInstances[0] } }
            ).then(
              match => {
                // This service's (betin) match instance does not exist.Lets save it in the
                // matchInstances subdocument
                if (!match) {
                  Match.findOneAndUpdate(
                    { pseudoKey: pseudoKey },
                    { $addToSet: { matchInstances: matchInstances } }
                  )
                    .then(match => {
                      resolve(match)
                    })
                    .catch(err => {
                      reject(err)
                    })
                } else {
                  resolve(match)
                }
              },
              err => {
                reject(err)
              }
            )
          }
        },
        err => {
          reject(err)
        }
      )
      //clean old matches
      this.cleanUpMatches(league)
    })
  }
  /**
   *
   * @param {Object} $ Cheerio Object
   * @param {String} selectedEventId For use in retrieving the match event details
   * @param {string} val  DOM Object
   * @param {String} service  Bookmaker
   * @param {String} region Target geographical region
   * @param {string} league Specifies league of the match
   */
  parseBetwayMatches($, selectedEventId, val, service, region, league) {
    return new Promise((resolve, reject) => {
      const elData = $(val).data()
      const prices = $(val).find(".outcome-pricedecimal")
      let team1 = elData.eventtitle.split(" v ")[0]
      team1 = abbreviate(team1)
      let team2 = elData.eventtitle.split(" v ")[1]
      team2 = abbreviate(team2)
      const pseudoKey = (
        team1.split(" ").join("") +
        "-" +
        team2.split(" ").join("")
      ).toLowerCase()
      // +
      // "-" +
      // new Date(elData.eventdate).getTime()
      // const sportTitle = elData.sporttitle
      const sportTitle = "Soccer"
      const matchDate = new Date(elData.eventdate).toISOString()

      const matchInstances = [
        {
          pseudoKey: pseudoKey,
          service: service,
          region: region,
          team1: {
            name: abbreviate(elData.eventtitle.split(" v ")[0]),
            price: $(prices[0])
              .text()
              .trim()
          },
          team2: {
            name: abbreviate(elData.eventtitle.split(" v ")[1]),
            price: $(prices[2])
              .text()
              .trim()
          },
          drawPrice: $(prices[1])
            .text()
            .trim(),
          url:
            "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=" +
            selectedEventId +
            "&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
        }
      ]

      Match.findOne({ pseudoKey: pseudoKey }).then(
        match => {
          if (!match) {
            const match = new Match({
              pseudoKey: pseudoKey,
              sport: sportTitle,
              league: league,
              date: matchDate,
              team1: team1,
              team2: team2,
              matchInstances: matchInstances
            })

            match.save().then(
              match => {
                resolve(match)
              },
              err => {
                reject(err)
              }
            )
          } else {
            // Match already exists.
            // Lets try and update in case any of the scraped matches
            // from the bookmaker has changed

            Match.findOneAndUpdate(
              { pseudoKey: pseudoKey, "matchInstances.service": service },
              { $set: { "matchInstances.$": matchInstances[0] } }
            ).then(
              match => {
                if (!match) {
                  // Could also use $push instead of $addToSet
                  Match.findOneAndUpdate(
                    { pseudoKey: pseudoKey },
                    {
                      $addToSet: { matchInstances: matchInstances }
                    }
                  )
                    .then(match => {
                      resolve(match)
                    })
                    .catch(err => {
                      reject(err)
                    })
                } else {
                  resolve(match)
                }
              },
              err => {
                reject(err)
              }
            )
          }
        },
        err => {
          reject(err)
        }
      )
      //clean old matches
      this.cleanUpMatches(league)
    })
  }
  parseBetPawaMatches(match, service, region, league) {
    return new Promise((resolve, reject) => {
      const sportTitle = "Soccer"
      let teamOne = match.Name.split("-")[0].trim()
      teamOne = abbreviate(teamOne)
      let teamTwo = match.Name.split("-")[1].trim()
      teamTwo = abbreviate(teamTwo)
      const pseudoKey = (
        teamOne.split(" ").join("") +
        "-" +
        teamTwo.split(" ").join("")
      ).toLowerCase()
      const dateString = match.StartsRaw
      const matchInstances = [
        {
          pseudoKey: pseudoKey,
          service: service,
          region: region,
          team1: {
            name: teamOne,
            price: match.Markets[0].Prices[0].Price
          },
          team2: {
            name: teamTwo,
            price: match.Markets[0].Prices[2].Price
          },
          drawPrice: match.Markets[0].Prices[1].Price,
          url: "https://www.betpawa.co.ke/" + match.Path
        }
      ]
      Match.findOne({ pseudoKey: pseudoKey }).then(
        match => {
          if (!match) {
            const match = new Match({
              pseudoKey: pseudoKey,
              sport: sportTitle,
              league: league,
              date: new Date(dateString).toISOString(),
              team1: teamOne,
              team2: teamTwo,
              matchInstances: matchInstances
            })
            match.save().then(
              match => {
                resolve(match)
              },
              err => {
                reject(err)
              }
            )
          } else {
            // Match already exists.
            // Lets try and update in case any of the scraped matches
            // from the bookmaker has changed
            Match.findOneAndUpdate(
              {
                pseudoKey: pseudoKey,
                "matchInstances.service": service
              },
              { $set: { "matchInstances.$": matchInstances[0] } }
            ).then(
              match => {
                if (!match) {
                  // Could also use $push instead of $addToSet
                  Match.findOneAndUpdate(
                    { pseudoKey: pseudoKey },
                    { $addToSet: { matchInstances: matchInstances } }
                  )
                    .then(match => {
                      resolve(match)
                    })
                    .catch(err => {
                      reject(err)
                    })
                } else {
                  resolve(match)
                }
              },
              err => {
                reject(err)
              }
            )
          }
        },
        err => {
          reject(err)
        }
      )
      //clean old matches
      this.cleanUpMatches(league)
    })
  }
  //End of Parsers

  /**
   *
   * @param {String} league League to clean up
   * @description Removes all old matches from the database
   * TODO: Fix this, should return a promise so we can either
   * reject or resolve it from the caller's scope
   *
   */
  cleanUpMatches(league) {
    Match.findOneAndRemove(
      { league: league, date: { $lte: new Date() } },
      (err, match) => {
        if (err) {
          console.log(err)
        }
      }
    )
  }
} //End of OddsScraper class

export default OddsScraper

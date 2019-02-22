import Scraper from '@/services/ScrapeService'
import VueNotifications from 'vue-notifications'
import Nprogress from 'nprogress'

const state = {
  lastScraped: null,
  betinScraping: false,
  betikaScraping: false,
  betwayScraping: false,
  betpawaScraping: false,
  sportpesaScraping: false,
  x1betScraping: false,
  premierLeagueMatchCount: 0,
  laLigaMatchCount: 0,
  ligue1MatchCount: 0,
  bundesligaMatchCount: 0,
  serieAMatchCount: 0,
  leagueCupMatchCount: 0,
  championsMatchCount: 0,
  europaMatchCount: 0
}

const getters = {
  // ==================================
  // Scrape state
  // ==================================
  getLastScraped: state => {
    return state.token
  },
  getBetikaScrapeState: state => {
    return state.betikaScraping
  },
  getBetinScrapeState: state => {
    return state.betinScraping
  },
  get1XBetScrapeState: state => {
    return state.x1betScraping
  },
  getSportpesaScrapeState: state => {
    return state.sportpesaScraping
  },
  getBetpawaScrapeState: state => {
    return state.betpawaScraping
  },
  getBetwayScrapeState: state => {
    return state.betwayScraping
  },
  // =====================================
  // match count state
  // =====================================
  getPremierLeagueMatchCountState: state => {
    return state.premierLeagueMatchCount
  },
  getLaLigaMatchCountState: state => {
    return state.laLigaMatchCount
  },
  getBundesligaMatchCountState: state => {
    return state.bundesligaMatchCount
  },
  getSerieAMatchCountState: state => {
    return state.serieAMatchCount
  },
  getLigue1MatchCountState: state => {
    return state.ligue1MatchCount
  },
  getChampionsMatchCountState: state => {
    return state.championsMatchCount
  },
  getEuropaMatchCountState: state => {
    return state.europaMatchCount
  },
  getLeagueCupMatchCountState: state => {
    return state.leagueCupMatchCount
  }
}
const actions = {
  // =============================================
  // Premier League
  // =============================================
  async getBetinPremierLeague (context, payload) {
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapePremierLeague('Betin')
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: 'Betin', error: err })
    }
  },
  async getBetikaPremierLeague (context, payload) {
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapePremierLeague('Betika')
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: 'Betika', error: err })
    }
  },
  async getBetpawaPremierLeague (context, payload) {
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapePremierLeague('Betpawa')
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: 'Betpawa', error: err })
    }
  },
  async getBetwayPremierLeague (context, payload) {
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapePremierLeague('Betway')
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: 'Betway', error: err })
    }
  },
  async getSportpesaPremierLeague (context, payload) {
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapePremierLeague('Sportpesa')
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: 'Sportpesa',
        error: err
      })
    }
  },
  async get1XBetPremierLeague (context, payload) {
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapePremierLeague('1XBet')
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: '1XBet', error: err })
    }
  },
  // ========================================================
  // LaLiga
  // ========================================================
  async getBetinLaLiga (context, payload) {
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapeLaLiga('Betin')
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: 'Betin', error: err })
    }
  },
  async getBetikaLaLiga (context, payload) {
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapeLaLiga('Betika')
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: 'Betika', error: err })
    }
  },
  async getBetpawaLaLiga (context, payload) {
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapeLaLiga('Betpawa')
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: 'Betpawa', error: err })
    }
  },
  async getBetwayLaLiga (context, payload) {
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapeLaLiga('Betway')
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: 'Betway', error: err })
    }
  },
  async getSportpesaLaLiga (context, payload) {
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapeLaLiga('Sportpesa')
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: 'Sportpesa',
        error: err
      })
    }
  },
  async get1XBetLaLiga (context, payload) {
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapeLaLiga('1XBet')
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: '1XBet', error: err })
    }
  },
  // ===========================================
  // Ligue 1
  // ===========================================
  async getBetinLigue1 (context, payload) {
    const site = payload
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapeLigue1(site)
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: site, error: err })
    }
  },
  async getBetikaLigue1 (context, payload) {
    const site = payload
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapeLigue1(site)
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: site, error: err })
    }
  },
  async getBetpawaLigue1 (context, payload) {
    const site = payload
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapeLigue1(site)
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: site, error: err })
    }
  },
  async getBetwayLigue1 (context, payload) {
    const site = payload
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapeLigue1(site)
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: site, error: err })
    }
  },
  async getSportpesaLigue1 (context, payload) {
    const site = payload
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapeLigue1(site)
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: site,
        error: err
      })
    }
  },
  async get1XBetLigue1 (context, payload) {
    const site = payload
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapeLigue1(site)
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: site, error: err })
    }
  },
  // ===========================================
  // Bundesliga
  // ===========================================
  async getBetinBundesliga (context, payload) {
    const site = payload
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapeBundesliga(site)
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: site, error: err })
    }
  },
  async getBetikaBundesliga (context, payload) {
    const site = payload
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapeBundesliga(site)
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: site, error: err })
    }
  },
  async getBetpawaBundesliga (context, payload) {
    const site = payload
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapeBundesliga(site)
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: site, error: err })
    }
  },
  async getBetwayBundesliga (context, payload) {
    const site = payload
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapeBundesliga(site)
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: site, error: err })
    }
  },
  async getSportpesaBundesliga (context, payload) {
    const site = payload
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapeBundesliga(site)
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: site,
        error: err
      })
    }
  },
  async get1XBetBundesliga (context, payload) {
    const site = payload
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapeBundesliga(site)
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: site, error: err })
    }
  },
  // ===================================================
  // SERIE A
  // ===================================================
  async getBetinSerieA (context, payload) {
    const site = payload
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapeSerieA(site)
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: site, error: err })
    }
  },
  async getBetikaSerieA (context, payload) {
    const site = payload
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapeSerieA(site)
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: site, error: err })
    }
  },
  async getBetpawaSerieA (context, payload) {
    const site = payload
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapeSerieA(site)
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: site, error: err })
    }
  },
  async getBetwaySerieA (context, payload) {
    const site = payload
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapeSerieA(site)
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: site, error: err })
    }
  },
  async getSportpesaSerieA (context, payload) {
    const site = payload
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapeSerieA(site)
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: site,
        error: err
      })
    }
  },
  async get1XBetSerieA (context, payload) {
    const site = payload
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapeSerieA(site)
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: site, error: err })
    }
  },
  // ===========================================
  // LeagueCup
  // ===========================================
  async getBetinLeagueCup (context, payload) {
    const site = payload
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapeLeagueCup(site)
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: site, error: err })
    }
  },
  async getBetikaLeagueCup (context, payload) {
    const site = payload
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapeLeagueCup(site)
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: site, error: err })
    }
  },
  async getBetpawaLeagueCup (context, payload) {
    const site = payload
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapeLeagueCup(site)
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: site, error: err })
    }
  },
  async getBetwayLeagueCup (context, payload) {
    const site = payload
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapeLeagueCup(site)
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: site, error: err })
    }
  },
  async getSportpesaLeagueCup (context, payload) {
    const site = payload
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapeLeagueCup(site)
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: site,
        error: err
      })
    }
  },
  async get1XBetLeagueCup (context, payload) {
    const site = payload
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapeLeagueCup(site)
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: site, error: err })
    }
  },
  // ===================================================
  // Champions
  // ===================================================
  async getBetinChampions (context, payload) {
    const site = payload
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapeChampions(site)
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: site, error: err })
    }
  },
  async getBetikaChampions (context, payload) {
    const site = payload
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapeChampions(site)
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: site, error: err })
    }
  },
  async getBetpawaChampions (context, payload) {
    const site = payload
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapeChampions(site)
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: site, error: err })
    }
  },
  async getBetwayChampions (context, payload) {
    const site = payload
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapeChampions(site)
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: site, error: err })
    }
  },
  async getSportpesaChampions (context, payload) {
    const site = payload
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapeChampions(site)
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: site,
        error: err
      })
    }
  },
  async get1XBetChampions (context, payload) {
    const site = payload
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapeChampions(site)
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: site, error: err })
    }
  },
  // ===================================================
  // Europa
  // ===================================================
  async getBetinEuropa (context, payload) {
    const site = payload
    context.commit('scrapeBetinState', true)
    try {
      const matches = await Scraper.scrapeEuropa(site)
      context.commit('scrapeBetinSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetinFailure', { site: site, error: err })
    }
  },
  async getBetikaEuropa (context, payload) {
    const site = payload
    context.commit('scrapeBetikaState', true)
    try {
      const matches = await Scraper.scrapeEuropa(site)
      context.commit('scrapeBetikaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetikaFailure', { site: site, error: err })
    }
  },
  async getBetpawaEuropa (context, payload) {
    const site = payload
    context.commit('scrapeBetpawaState', true)
    try {
      const matches = await Scraper.scrapeEuropa(site)
      context.commit('scrapeBetpawaSuccess', matches)
    } catch (err) {
      context.commit('scrapeBetpawaFailure', { site: site, error: err })
    }
  },
  async getBetwayEuropa (context, payload) {
    const site = payload
    context.commit('scrapeBetwayState', true)
    try {
      const matches = await Scraper.scrapeEuropa(site)
      context.commit('scrapeBetwaySuccess', matches)
    } catch (err) {
      context.commit('scrapeBetwayFailure', { site: site, error: err })
    }
  },
  async getSportpesaEuropa (context, payload) {
    const site = payload
    context.commit('scrapeSportpesaState', true)
    try {
      const matches = await Scraper.scrapeEuropa(site)
      context.commit('scrapeSportpesaSuccess', matches)
    } catch (err) {
      context.commit('scrapeSportpesaFailure', {
        site: site,
        error: err
      })
    }
  },
  async get1XBetEuropa (context, payload) {
    const site = payload
    context.commit('scrape1XBetState', true)
    try {
      const matches = await Scraper.scrapeEuropa(site)
      context.commit('scrape1XBetSuccess', matches)
    } catch (err) {
      context.commit('scrape1XBetFailure', { site: site, error: err })
    }
  },
  // ==================================================
  // Match Counts
  // ==================================================
  async getPremierLeagueMatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('premierLeagueMatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  },
  async getBundesligaMatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('bundesligaMatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  },
  async getLaLigaMatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('laLigaMatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  },
  async getSerieAMatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('serieAMatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  },
  async getLigue1MatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('ligue1MatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  },
  async getLeagueCupMatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('leagueCupMatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  },
  async getChampionsMatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('championsMatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  },
  async getEuropaMatchCount (context, payload) {
    const league = payload
    try {
      let count = await Scraper.matchCount(league)
      count = count.data.count
      context.commit('europaMatchCountSuccess', count)
    } catch (err) {
      const msg = { league: league, error: err }
      context.commit('matchCountFailure', msg)
    }
  }
}
const mutations = {
  scrapeBetinState (state, value) {
    state.betinScraping = value
    Nprogress.inc()
  },
  scrapeBetikaState (state, value) {
    state.betikaScraping = value
    Nprogress.inc()
  },
  scrapeBetwayState (state, value) {
    state.betwayScraping = value
    Nprogress.inc()
  },
  scrapeBetpawaState (state, value) {
    state.betpawaScraping = value
    Nprogress.inc()
  },
  scrapeSportpesaState (state, value) {
    state.isScraping = value
    Nprogress.inc()
  },
  scrape1XBetState (state, value) {
    state.x1betScraping = value
    Nprogress.inc()
  },
  scrapeBetikaSuccess (state, matches) {
    state.betikaScraping = false
    Nprogress.done()
    VueNotifications.success({ message: 'Scraped Betika Successfully!' })
    console.log(matches)
  },
  scrapeBetinSuccess (state, matches) {
    state.betinScraping = false
    Nprogress.done()
    VueNotifications.info({ message: 'Scraped Betin Successfully!' })
    console.log(matches)
  },
  scrapeBetwaySuccess (state, matches) {
    state.betwayScraping = false
    Nprogress.done()
    VueNotifications.warn({ message: 'Scraped Betway Successfully!' })
    console.log(matches)
  },
  scrapeBetpawaSuccess (state, matches) {
    state.betpawaScraping = false
    Nprogress.done()
    VueNotifications.warn({ message: 'Scraped Betpawa Successfully!' })
    console.log(matches)
  },
  scrapeSportpesaSuccess (state, matches) {
    state.sportpesaScraping = false
    Nprogress.done()
    VueNotifications.success({ message: 'Scraped Sportpesa Successfully!' })
    console.log(matches)
  },
  scrape1XBetSuccess (state, matches) {
    state.x1betScraping = false
    Nprogress.done()
    VueNotifications.info({ message: 'Scraped 1XBet Successfully!' })
    console.log(matches)
  },
  scrapeBetikaFailure (state, errObj) {
    const { site, error } = errObj
    state.betikaScraping = false
    Nprogress.done()
    VueNotifications.error({ message: 'Failed to scrape ' + site })
    console.log(site, error)
  },
  scrapeBetwayFailure (state, errObj) {
    const { site, error } = errObj
    state.betwayScraping = false
    Nprogress.done()
    VueNotifications.error({ message: 'Failed to scrape ' + site })
    console.log(site, error)
  },
  scrapeBetpawaFailure (state, errObj) {
    const { site, error } = errObj
    state.betpawaScraping = false
    Nprogress.done()
    VueNotifications.error({ message: 'Failed to scrape ' + site })
    console.log(site, error)
  },
  scrapeBetinFailure (state, errObj) {
    const { site, error } = errObj
    state.betinScraping = false
    Nprogress.done()
    VueNotifications.error({ message: 'Failed to scrape ' + site })
    console.log(site, error)
  },
  scrapeSportpesaFailure (state, errObj) {
    const { site, error } = errObj
    state.sportpesaScraping = false
    Nprogress.done()
    VueNotifications.error({ message: 'Failed to scrape ' + site })
    console.log(site, error)
  },
  scrape1XBetFailure (state, errObj) {
    const { site, error } = errObj
    state.x1betScraping = false
    Nprogress.done()
    VueNotifications.error({ message: 'Failed to scrape ' + site })
    console.log(site, error)
  },
  premierLeagueMatchCountSuccess (state, count) {
    state.premierLeagueMatchCount = count
    console.log('premier league match count success', count)
  },
  laLigaMatchCountSuccess (state, count) {
    state.laLigaMatchCount = count
    console.log('laliga match count success', count)
  },
  bundesligaMatchCountSuccess (state, count) {
    state.bundesligaMatchCount = count
    console.log('bundesliga match count success', count)
  },
  serieAMatchCountSuccess (state, count) {
    state.serieAMatchCount = count
    console.log('SerieA match count success', count)
  },
  ligue1MatchCountSuccess (state, count) {
    state.ligue1MatchCount = count
    console.log('Ligue1 match count success', count)
  },
  leagueCupMatchCountSuccess (state, count) {
    state.leagueCupMatchCount = count
    console.log('League cup match count success', count)
  },
  championsMatchCountSuccess (state, count) {
    state.championsMatchCount = count
    console.log('Champions league match count success', count)
  },
  europaMatchCountSuccess (state, count) {
    state.europaMatchCount = count
    console.log('Europa league match count success', count)
  },
  matchCountFailure (state, { league, error }) {
    console.log(league + 'match count failed ', error)
    VueNotifications.error({ message: 'Match count failure ' })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

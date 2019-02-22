import Api from '@/services/Api'

export default {
  scrapePremierLeague (siteName) {
    return Api().get(`/scrape/start${siteName}PremierLeague`)
  },
  scrapeSerieA (siteName) {
    return Api().get(`/scrape/start${siteName}SerieA`)
  },
  scrapeLaLiga (siteName) {
    return Api().get(`/scrape/start${siteName}LaLiga`)
  },
  scrapeBundesliga (siteName) {
    return Api().get(`/scrape/start${siteName}Bundesliga`)
  },
  scrapeLeagueCup (siteName) {
    return Api().get(`/scrape/start${siteName}EFLCup`)
  },
  scrapeLigue1 (siteName) {
    return Api().get(`/scrape/start${siteName}Ligue1`)
  },
  scrapeChampions (siteName) {
    return Api().get(`/scrape/start${siteName}Champions`)
  },
  scrapeEuropa (siteName) {
    return Api().get(`/scrape/start${siteName}Europa`)
  },
  matchCount (league) {
    return Api().get(`/matches/count/${league}`)
  }
}

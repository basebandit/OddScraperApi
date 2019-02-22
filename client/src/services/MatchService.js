import Api from '@/services/Api'

export default {
  getPremierLeagueMatches () {
    return Api().get(`/matches/premier-league`)
  },
  getLaLigaMatches () {
    return Api().get(`/matches/LaLiga`)
  },
  getBundesligaMatches () {
    return Api().get(`/matches/bundesliga`)
  },
  getSerieAMatches () {
    return Api().get(`/matches/serieA`)
  },
  getLigue1Matches () {
    return Api().get(`/matches/ligue1`)
  },
  getLeagueCupMatches () {
    return Api().get(`/matches/leaguecup`)
  },
  getChampionsMatches () {
    return Api().get(`/matches/Champions`)
  },
  getEuropaMatches () {
    return Api().get(`/matches/Europa`)
  }
}

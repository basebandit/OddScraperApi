import Scraper from '@/services/MatchService'

const state = {
  premierLeagueMatches: null,
  laligaMatches: null,
  bundesligaMatches: null,
  ligue1Matches: null,
  serieAMatches: null,
  leagueCupMatches: null,
  championsMatches: null,
  europaMatches: null
}
const getters = {
  getPremierLeagueMatches: state => {
    return state.premierLeagueMatches
  },
  getLaLigaMatches: state => {
    return state.laligaMatches
  },
  getBundesligaMatches: state => {
    return state.bundesligaMatches
  },
  getLigue1Matches: state => {
    return state.ligue1Matches
  },
  getSerieAMatches: state => {
    return state.serieAMatches
  },
  getLeagueCupMatches: state => {
    return state.leagueCupMatches
  },
  getChampionsMatches: state => {
    return state.championsMatches
  },
  getEuropaMatches: state => {
    return state.europaMatches
  }
}
const actions = {
  async allPremierLeagueMatches (context, payload) {
    try {
      const matches = await Scraper.getPremierLeagueMatches()
      context.commit('premierLeagueMatchesSuccess', matches)
    } catch (err) {
      context.commit('premierLeagueMatchesFailure', { error: err })
    }
  },
  async allSerieAMatches (context, payload) {
    try {
      const matches = await Scraper.getSerieAMatches()
      context.commit('serieAMatchesSuccess', matches)
    } catch (err) {
      context.commit('serieAMatchesFailure', { error: err })
    }
  },
  async allBundesligaMatches (context, payload) {
    try {
      const matches = await Scraper.getBundesligaMatches()
      context.commit('bundesligaMatchesSuccess', matches)
    } catch (err) {
      context.commit('bundesligaMatchesFailure', { error: err })
    }
  },
  async allLigue1Matches (context, payload) {
    try {
      const matches = await Scraper.getLigue1Matches()
      context.commit('ligue1MatchesSuccess', matches)
    } catch (err) {
      context.commit('ligue1MatchesFailure', { error: err })
    }
  },

  async allLaLigaMatches (context, payload) {
    try {
      const matches = await Scraper.getLaLigaMatches()
      context.commit('laligaMatchesSuccess', matches)
    } catch (err) {
      context.commit('laligaMatchesFailure', { error: err })
    }
  },
  async allLeagueCupMatches (context, payload) {
    try {
      const matches = await Scraper.getLeagueCupMatches()
      context.commit('leagueCupMatchesSuccess', matches)
    } catch (err) {
      context.commit('leagueCupMatchesFailure', { error: err })
    }
  },
  async allChampionsMatches (context, payload) {
    try {
      const matches = await Scraper.getChampionsMatches()
      context.commit('championsMatchesSuccess', matches)
    } catch (err) {
      context.commit('championsMatchesFailure', { error: err })
    }
  },
  async allEuropaMatches (context, payload) {
    try {
      const matches = await Scraper.getEuropaMatches()
      context.commit('europaMatchesSuccess', matches)
    } catch (err) {
      context.commit('europaMatchesFailure', { error: err })
    }
  }
}
const mutations = {
  premierLeagueMatchesSuccess (state, matches) {
    console.log(matches)
    state.premierLeagueMatches = matches
  },
  premierLeagueMatchesFailure (state, matches) {
    console.log(matches)
    state.premierLeagueMatches = null
  },
  bundesligaMatchesSuccess (state, matches) {
    console.log(matches)
    state.bundesligaMatches = matches
  },
  bundesligaMatchesFailure (state, matches) {
    console.log(matches)
    state.bundesligaMatches = null
  },
  ligue1MatchesSuccess (state, matches) {
    console.log(matches)
    state.ligue1Matches = matches
  },
  ligue1MatchesFailure (state, matches) {
    console.log(matches)
    state.ligue1Matches = null
  },
  laligaMatchesSuccess (state, matches) {
    console.log(matches)
    state.laligaMatches = matches
  },
  laligaMatchesFailure (state, matches) {
    console.log(matches)
    state.laligaMatches = null
  },
  serieAMatchesSuccess (state, matches) {
    console.log(matches)
    state.serieAMatches = matches
  },
  serieAMatchesFailure (state, matches) {
    console.log(matches)
    state.serieAMatches = null
  },
  leagueCupMatchesSuccess (state, matches) {
    console.log(matches)
    state.leagueCupMatches = matches
  },
  leagueCupMatchesFailure (state, matches) {
    console.log(matches)
    state.leagueCupMatches = null
  },
  championsMatchesSuccess (state, matches) {
    console.log(matches)
    state.championsMatches = matches
  },
  championsMatchesFailure (state, matches) {
    console.log(matches)
    state.championsMatches = null
  },
  europaMatchesSuccess (state, matches) {
    console.log(matches)
    state.europaMatches = matches
  },
  europaMatchesFailure (state, matches) {
    console.log(matches)
    state.europaMatches = null
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

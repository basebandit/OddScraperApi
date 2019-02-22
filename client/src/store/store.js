import Vue from 'vue'
import Vuex from 'vuex'

// modules
import settings from './modules/settings'
import leagues from './modules/leagues'
import scrape from './modules/scrape'
import auth from './modules/auth'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    settings,
    leagues,
    scrape,
    auth
  }
})

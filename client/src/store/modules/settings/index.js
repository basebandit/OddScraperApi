// common shared state
const state = {
  clipSidebar: false,
  fixFooter: false,
  miniVariant: false,
  drawer: true
}
// getters
const getters = {
  clipSidebar: state => {
    return state.clipSidebar
  },
  fixFooter: state => {
    return state.fixFooter
  },
  miniVariant: state => {
    return state.miniVariant
  },
  drawer: state => {
    return state.drawer
  }
}
// actions
const actions = {
  clipSidebar (context) {
    context.commit('clipSidebar')
  },
  fixFooter (context) {
    context.commit('fixFooter')
  },
  miniVariant (context) {
    context.commit('miniVariant')
  },
  drawer (context) {
    context.commit('drawer')
  }
}

// mutations
const mutations = {
  clipSidebar (state) {
    state.clipSidebar = !state.clipSidebar
  },
  fixFooter (state) {
    state.fixFooter = !state.fixFooter
  },
  miniVariant (state) {
    state.miniVariant = !state.miniVariant
  },
  drawer (state) {
    state.drawer = !state.drawer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

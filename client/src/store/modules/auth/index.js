import AuthenticationService from '@/services/AuthenticationService'
import Nprogress from 'nprogress'
const state = {
  token: null,
  isUserLoggedIn: null
}
// getters
const getters = {
  getToken: state => {
    return state.token
  }
}

const actions = {
  signinUserInScrapehawkApi (context, payload) {
    const { user, router } = payload
    context.commit('loginUser')
    AuthenticationService.signin(user)
      .then(response => {
        setTimeout(() => {
          if (response.status === 200 && 'accessToken' in response.data) {
            context.commit('loginUserSuccess', response.data)
            router.push({ name: 'Dashboard' })
          }
        }, 500)
      })
      .catch(error => {
        context.commit('loginUserFailure', error)
      })
  },
  signupUserInScraperhawkApi (context, payload) {
    const { user, router } = payload
    console.log(payload)
    context.commit('signupUser')
    AuthenticationService.signup(user)
      .then(response => {
        setTimeout(() => {
          if (response.status === 200) {
            context.commit('signupUserSuccess', response.data)
            router.push({ name: 'Signin' })
          }
        }, 500)
      })
      .catch(error => {
        context.commit('signupUserFailure', error)
      })
  },
  signoutUserInScraperhawkApi (context, payload) {
    const { router } = payload
    setTimeout(() => {
      context.commit('logoutUser')
      router.push({ name: 'Home' })
    }, 500)
  }
}

const mutations = {
  loginUser (state) {
    // Start Progress bar here
    Nprogress.start()
  },
  loginUserSuccess (state, user) {
    if (user) {
      state.token = user.accessToken
      state.isUserLoggedIn = true
      localStorage.setItem('isUserLoggedIn', {
        isUserLoggedIn: true
      })
      Nprogress.done()
    }
    // Notify user if you wish (Vue notifications)
  },
  loginUserFailure (state, error) {
    // Finish progress bar here
    // Notify user of errors
    Nprogress.done()
    console.log(error)
  },
  logoutUser (state) {
    state.token = null
    state.isUserLoggedIn = null
    localStorage.removeItem('isUserLoggedIn')
  },
  signupUser (state) {
    // start progress bar here
    Nprogress.start()
  },
  signupUserSuccess (state, user) {
    if (user) {
      console.log(user)
      state.token = user.token
      state.isUserLoggedIn = false
    }
    Nprogress.done()
  },
  signupUserFailure (state, error) {
    // Finish progress bar here
    // Notify user of any errors
    Nprogress.done()
    console.log(error)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

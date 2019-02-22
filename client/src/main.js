// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import fullscreen from 'vue-fullscreen'
import AppCard from '@/components/appcard/AppCard'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import {
  Vuetify,
  VApp,
  VCard,
  VTextField,
  VCheckbox,
  VParallax,
  VAvatar,
  VTooltip,
  VDataTable,
  VDialog,
  VProgressLinear,
  VProgressCircular,
  VNavigationDrawer,
  VExpansionPanel,
  VFooter,
  VForm,
  VMenu,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VBadge,
  VDivider,
  VToolbar,
  transitions
} from 'vuetify'
import Nprogress from 'nprogress'

// include all css files

import './lib/ScrapehawkCss'

// Navigation guards to check protected routes
router.beforeEach((to, from, next) => {
  Nprogress.configure({ showSpinner: false })
  Nprogress.inc()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth,check if logged in if not redirect to login page.
    if (!localStorage.getItem('isUserLoggedIn')) {
      next('/auth/signin')
    } else {
      next()
    }
  } else {
    next()
  }
})

// navigation guards after each
router.afterEach((to, from) => {
  Nprogress.done()
})

function toast ({ title, message, type, timeout, cb }) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToastr.init({ types: toastTypes })

Vue.use(fullscreen)
Vue.use(Vuetify, {
  components: {
    VApp,
    VParallax,
    VAvatar,
    VForm,
    VCheckbox,
    VTooltip,
    VTextField,
    VCard,
    VDataTable,
    VDialog,
    VProgressLinear,
    VProgressCircular,
    VNavigationDrawer,
    VExpansionPanel,
    VFooter,
    VMenu,
    VList,
    VBadge,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VDivider,
    transitions
  }
})
Vue.use(VueNotifications, options)

Vue.component('appCard', AppCard)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/dashboard/Dashboard'
import Signup from '@/components/auth/Signup'
import Signin from '@/components/auth/Signin'
import Analytics from '@/components/dashboard/Analytics'
import PremierLeague from '@/components/dashboard/leagues/PremierLeague'
import LaLiga from '@/components/dashboard/leagues/LaLiga'
import SerieA from '@/components/dashboard/leagues/SerieA'
import LeagueCup from '@/components/dashboard/leagues/LeagueCup'
import Bundesliga from '@/components/dashboard/leagues/Bundesliga'
import Ligue1 from '@/components/dashboard/leagues/Ligue1'
import Champions from '@/components/dashboard/leagues/Champions'
import Europa from '@/components/dashboard/leagues/Europa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      redirect: '/dashboard/stats',
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'stats',
          component: Analytics,
          name: 'Stats',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/premier-league',
          component: PremierLeague,
          name: 'PremierLeague',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/laliga',
          component: LaLiga,
          name: 'LaLiga',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/serieA',
          component: SerieA,
          name: 'SerieA',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/leaguecup',
          component: LeagueCup,
          name: 'LeagueCup',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/bundesliga',
          component: Bundesliga,
          name: 'Bundesliga',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/ligue1',
          component: Ligue1,
          name: 'Ligue1',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/champions',
          component: Champions,
          name: 'Champions',
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'leagues/europa',
          component: Europa,
          name: 'Europa',
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/auth/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/auth/signin',
      name: 'Signin',
      component: Signin
    },
    { path: '*', redirect: '/' }
  ]
})

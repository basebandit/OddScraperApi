<template>
  <v-navigation-drawer persistent :value="drawer" :mini-variant="miniVariant" :clipped="clipped" enable-resize-watcher fixed
    app>

    <VuePerfectScrollbar class="scroll-area" :settings="settings">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <app-logo></app-logo>
          <v-divider></v-divider>
          <template v-for="item in links">
            <template v-if="item.items != null">
              <v-list-group :key="item.title" class="blue--text" :prepend-icon="`${item.action}`" no-action v-model="item.active">
                <v-list-tile slot="activator" class="blue--text">
                  <v-list-tile-content>
                    <v-list-tile-title class=" fw-bold">{{ item.title}}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" v-if="subItem !== null" :to="subItem.path">
                  <v-list-tile-content>
                    <v-list-tile-title class="fw-bold">{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
            </template>
            <template v-else>
              <v-list-tile :to="item.path" :key="item.path">
                <v-list-tile-action>
                  <v-icon class="blue--text">{{ item.action }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="blue--text fw-bold">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </template>
        </v-list>
      </v-toolbar>
    </VuePerfectScrollbar>

  </v-navigation-drawer>
</template>
<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import AppLogo from '@/components/dashboard/AppLogoBlock'
  import { sidebarlinks } from '@/helpers/SidebarLinks'

  export default {
    data () {
      return {
        links: sidebarlinks,
        settings: {
          maxScrollbarLength: 160
        }
      }
    },
    props: {
      drawer: { type: Boolean },
      clipped: { type: Boolean },
      miniVariant: { type: Boolean }
    },
    components: {
      VuePerfectScrollbar,
      AppLogo
    }

  }
</script>
<style>
  .theme--light .v-icon,
  .application .theme--light.v-icon {
    color: #2196f3;
  }
</style>

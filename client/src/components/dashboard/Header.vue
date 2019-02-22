<template>
  <div>
    <!-- sidebar here -->
    <sidebar :drawer="drawer" :mini-variant="miniVariant" :clipped="clipped"></sidebar>
    <v-toolbar app :clipped-left="clipped" class="blue--text">
      <v-toolbar-side-icon class="hidden-lg-and-up blue--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon class="hidden-sm-and-down blue--text" @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn slot="activator" icon class="blue--text" @click="signout">
          <v-icon>input</v-icon>
        </v-btn>
        <span>Logout</span>
      </v-tooltip>
      <!-- settings vert -->
      <!-- <settings :clipped=" clipped "></settings> -->
    </v-toolbar>
  </div>
</template>

<script>
  import settings from '@/components/dashboard/SidebarSettings'
  import sidebar from '@/components/dashboard/Sidebar'
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        // items: [{
        //   icon: 'bubble_chart',
        //   title: 'Scrapehawk'
        // }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Scrapehawk'
      }
    },
    components: {
      sidebar,
      settings
    },
    methods: {
      signout () {
        this.$store.dispatch('signoutUserInScraperhawkApi', { router: this.$router })
      }
    }
  }
</script>

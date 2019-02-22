<template>
  <v-menu offset-y>
    <v-btn class="more_vert blue--text" icon slot="activator">
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile v-for="setting in settings" :key="setting.title" @click.stop="clipp = !clipp">
        <v-list-tile-avatar>
          <v-btn icon ripple>
            <v-icon class="blue--text">{{setting.icon}}</v-icon>
          </v-btn>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title class="blue--text">{{setting.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    props: {
      clipped: { type: Boolean }
    },
    data () {
      return {
        settings: [
          {
            title: 'Clip NavDrawer',
            icon: 'web'
          }
        ],
        clipp: this.clipped
      }
    },
    methods: {
      clip (key) {
        return !this.clipped
      }
    }
  }
</script>

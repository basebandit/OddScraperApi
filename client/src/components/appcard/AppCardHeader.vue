<template>
  <div class="app-card-title" v-if="heading">
    <h3>{{heading}}</h3>
    <div class="app-contextual-link" v-if="fullScreen || reloadable || closeable">
      <v-menu origin="center center" transition="scale-transition" bottom>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="$emit('onCollapse')" v-if="fullScreen">
            <v-icon class="mr-1">fullscreen</v-icon>
            <v-list-tile-title>fullscreen</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="$emit('onReload')" v-if="reloadable">
            <v-icon class="mr-1">refresh</v-icon>
            <v-list-tile-title>reload</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="$emit('onClose')" v-if="closeable">
            <v-icon class="mr-1">close</v-icon>
            <v-list-tile-title>close</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'heading',
      'closeable',
      'reloadable',
      'fullScreen',
      'onCollapse',
      'onReload',
      'onClose'
    ]
  }
</script>

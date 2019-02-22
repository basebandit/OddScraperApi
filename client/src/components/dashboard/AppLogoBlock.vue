<template>
  <div>
    <v-list>
      <v-list-tile value="true" v-for="(item, i) in items" :key="i">
        <v-list-tile-action>
          <img :src="getImgUrl('scrapehawk_logo.png')" />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="blue--text" v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [{
          icon: 'bubble_chart',
          title: 'Scrapehawk'
        }]
      }
    },
    methods: {
      getImgUrl (img) {
        return require('@/assets/' + img)
      }
    }
  }
</script>

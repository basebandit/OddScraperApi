<template>
  <v-parallax :src="getImgUrl('call-to-action.jpg')" height="600" id="prx">
    <v-layout column align-center justify-center class="white--text">
      <particles></particles>
      <img :src="getImgUrl('scrapehawk_logo_white.png')" alt="Scrapehawk">
      <h1 class="white--text mb-2 display-1 text-xs-center">Scrapehawk</h1>
      <div class="subheading mb-3 text-xs-center">A Powerful Football Odds Scraper API</div>
    </v-layout>
  </v-parallax>
</template>
<script>
  import Particles from '@/components/background/Particles'
  export default {
    name: 'Hero',
    methods: {
      getImgUrl (img) {
        return require('@/assets/' + img)
      }
    },
    components: {
      Particles
    }
  }
</script>

<style>
  #prx {
    position: relative;
  }
</style>

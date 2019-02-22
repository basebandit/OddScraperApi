<template>
  <v-parallax :src="getImgUrl('particle_bg.jpg')" height="380">
    <v-layout column align-center justify-center>
      <div class="headline white--text mb-3 text-xs-center">Scraping has never been easier</div>
      <em class="white--text">Kick-start your application today</em>
      <v-btn class="blue lighten-2 mt-5" dark large @click="navigateTo({name:'Signin'})" ripple>
        Try For Free
      </v-btn>
    </v-layout>
  </v-parallax>
</template>
<script>
  export default {
    name: 'CallToAction',
    methods: {
      getImgUrl (img) {
        return require('@/assets/' + img)
      },
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

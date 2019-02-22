<template>
  <v-toolbar dark app color="blue">
    <v-btn icon>
      <img src="../assets/scrapehawk_logo_white.png" />
    </v-btn>
    <v-toolbar-title class="white--text title" v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn small class="blue lighten-2" dark @click="navigateTo({name:'Signin'})">
      Signin
    </v-btn>
    <!-- <v-btn small class="white" dark @click="navigateTo({name:'Signup'})">
      <span class="blue--text">Signup</span>
    </v-btn> -->
  </v-toolbar>

</template>
<script>
  export default {
    data () {
      return {
        title: 'Scrapehawk',
        text: '2'
      }
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>
<style lang="scss">
  .title {
    font-weight: bold;
  }
</style>

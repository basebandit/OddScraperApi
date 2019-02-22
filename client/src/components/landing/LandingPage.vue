<template>
  <v-content class="blue">
    <hero/>
    <!-- <book-maker/> -->
    <call-to-action/>
    <!-- <contacts/> -->
    <main-footer/>
  </v-content>
</template>
<script>
  import 'particles.js'
  import Hero from '@/components/landing/Hero'
  import Bookies from '@/components/landing/Bookies'
  import CallToAction from '@/components/landing/CallToAction'
  import Contacts from '@/components/landing/Contacts'
  import Footer from '@/components/landing/Footer'
  export default {
    name: 'LandingPage',
    components: {
      Hero,
      BookMaker: Bookies,
      CallToAction,
      Contacts,
      MainFooter: Footer
    }
  }
</script>

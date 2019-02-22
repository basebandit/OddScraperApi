<template>
  <div>
    <dashboard-header></dashboard-header>
    <v-container fluid>
      <v-content>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </v-content>
    </v-container>
  </div>
</template>
<script>
  import DashboardHeader from '@/components/dashboard/Header'
  import Footer from '@/components/dashboard/Footer'
  export default {
    name: 'Dashboard',
    components: {
      DashboardHeader,
      Footer
    }
  }
</script>

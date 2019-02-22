<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout row wrap class="pa-3">
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-blue>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">Premier League</span>
              </div>
              <h3>{{_plMatchCount|| 0}}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="premierLeague" :lineTension="0.4" :dataLabels="labels" gradientColor1="#2E68F5" gradientColor2="#0CD7C5"
                :width="100" :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-purple>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">Serie A </span>
              </div>
              <h3>{{_saMatchCount || 0}}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="serieA" :lineTension="0.4" :dataLabels="labels" gradientColor1="#594DE2" gradientColor2="#594DE2" :width="100"
                :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-pink>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">Bundesliga</span>
              </div>
              <h3>{{_blMatchCount || 0 }}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="bundesLiga" :lineTension="0.4" :dataLabels="labels" gradientColor1="#C852AA" gradientColor2="#D4298D"
                :width="100" :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-warning>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">League Cup</span>
              </div>
              <h3>{{_lcMatchCount || 0 }}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="leagueCup" :lineTension="0.4" :dataLabels="labels" gradientColor1="#FD726B" gradientColor2="#FD8D54"
                :width="100" :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xl>
      <v-layout row wrap class="pa-3">
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-warning>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">Champions League</span>
              </div>
              <h3>{{_chMatchCount || 0}}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="Champions" :lineTension=" 0.4 " :dataLabels="labels " gradientColor1="#FD726B " gradientColor2="#FD8D54 "
                :width="100 " :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2 ">
          <v-layout row wrap border-pink>
            <v-flex xs5>
              <div class="d-flex ">
                <span class="small ">Ligue1</span>
              </div>
              <h3>{{_l1MatchCount || 0}}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="ligue1" :lineTension="0.4 " :dataLabels="labels " gradientColor1="#C852AA
                " gradientColor2="#D4298D " :width="100 " :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2 ">
          <v-layout row wrap border-purple>
            <v-flex xs5>
              <div class="d-flex ">
                <span class="small ">La Liga</span>
              </div>
              <h3>{{_llMatchCount || 0}}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="laLiga" :lineTension="0.4 " :dataLabels="labels " gradientColor1="#594DE2
                " gradientColor2="#594DE2 " :width="100 " :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2 ">
          <v-layout row wrap border-blue>
            <v-flex xs5>
              <div class="d-flex ">
                <span class="small ">Europa League</span>
              </div>
              <h3>{{_euMatchCount || 0}}</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="europa" :lineTension="0.4 " :dataLabels="labels " gradientColor1="#2E68F5
                " gradientColor2="#0CD7C5 " :width="100 " :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!-- Referral Widgets -->
        <!-- <app-card :heading="refTitle " colClasses="xl4 lg4 md4 xs4 w-full " :fullScreen="true " :reloadable="true
                " :closeable="true "
          customClasses="primary whitetext heading-light ">
          <referrals></referrals>
        </app-card> -->
        <!-- <app-card :heading="invTitle " colClasses="xl12 lg12 md8 xs12 d-xs-full b-100 " customClasses="mb-0
                " :fullScreen="true " :reloadable="true "
          :closeable="true " :fullBlock="true ">
          <scrape-board></scrape-board>
        </app-card> -->
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xl py-0>
      <app-card :fullBlock="true ">
        <scrape-board></scrape-board>
      </app-card>
    </v-container>
  </div>
</template>
<script>
  import AppCard from '@/components/appcard/AppCard'
  import LineChart from '@/helpers/LineChart'
  import Referrals from '@/components/dashboard/Referrals'
  import ScrapeBoard from
    '@/components/dashboard/ScrapeBoard'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        refTitle: 'Match Book',
        gradientColor: false,
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K', 'L', 'M', 'N', 'P'],
        ligue1: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, this.$store.getters.getLigue1MatchCountState],
        laLiga: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, this.$store.getters.getLaLigaMatchCountState],
        bundesLiga: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, this.$store.getters.getBundesligaMatchCountState],
        serieA: [30, 50, 25, 55, 10, 60, 30, 20, 40, 20, 70, this.$store.getters.getSerieAMatchCountState],
        premierLeague: [30, 20, 14, 22, 20, 15, 10, 30, 22, 20, 40, this.$store.getters.getPremierLeagueMatchCountState],
        leagueCup: [30, 20, 14, 22, 20, 15, 10, 30, 22, 20, this.$store.getters.getLeagueCupMatchCountState],
        Champions: [30, 20, 14, 22, 20, 15, 10, 30, 22, 20, 40, 0],
        europa: [30, 50, 25, 55, 10, 60, 30, 20, 40, 20, 70, 0],
        valueDeterminate: 5
      }
    },
    components: {
      LineChart,
      Referrals,
      ScrapeBoard,
      AppCard
    },
    computed: {
      ...mapGetters({
        _plMatchCount: 'getPremierLeagueMatchCountState',
        _llMatchCount: 'getLaLigaMatchCountState',
        _saMatchCount: 'getSerieAMatchCountState',
        _blMatchCount: 'getBundesligaMatchCountState',
        _l1MatchCount: 'getLigue1MatchCountState',
        _lcMatchCount: 'getLeagueCupMatchCountState',
        _chMatchCount: 'getChampionsMatchCountState',
        _euMatchCount: 'getEuropaMatchCountState'
      })
    }
  }
</script>

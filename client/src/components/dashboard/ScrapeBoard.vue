<template>
  <div class="table-responsive">
    <v-card-title>{{header}}
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table :items="leagues" :headers="headers" :loading="loading" hide-actions>
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td class="fw-bold primary--text">
            <a href="javascript:;">{{ props.item.id }}</a>
          </td>
          <td>
            <v-badge :class="props.item.badgeClasses">
              {{ props.item.count || 0 }}
            </v-badge>
          </td>
          <td>{{ props.item.date }}</td>
          <td>
            <v-btn icon :class="props.item.labelClasses" @click.stop="props.expanded = !props.expanded">
              <v-icon v-html="props.expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'"></v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-flex xs12 sm6 offset-sm3>
          <v-card flat>
            <v-list v-for="site in sites" :key="site.name">
              <v-list-tile>
                <v-list-tile-avatar>
                  <img :src="getImgUrl(site.logo)">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-text="site.name" class="fw-bold primary--text">
                  </v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn small :disabled="isScraping" :loading="isScraping" @click="scrapeMatches(props.item.id,site.name)"
                    :class="site.labelClasses" ripple>scrape</v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        rowExpand: false,
        expanded: {},
        isScraping: false,
        header: 'Scrape Board',
        loading: false,
        headers: [
          {
            text: 'League',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Matches', value: 'matches', sortable: false },
          { text: 'Last Scraped', value: 'last scraped', sortable: false },
          { text: 'Action', value: 'action', sortable: false }
        ],
        leagues: [
          {
            count: this.$store.getters.getPremierLeagueMatchCountState,
            id: 'Premier League',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'primary',
            labelClasses: 'primary--text',
            amount: '180'
          },
          {
            count:
              this.$store.getters.getLaLigaMatchCountState,
            id: 'La Liga',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'success',
            labelClasses: 'success--text',
            amount: '200'
          },
          {
            count: this.$store.getters.getBundesligaMatchCountState,
            id: 'Bundesliga',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'warning',
            labelClasses: 'warning--text',
            amount: '100'
          },
          {
            count: this.$store.getters.getSerieAMatchCountState,
            id: 'Serie A',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'primary',
            labelClasses: 'primary--text',
            amount: '160'
          },
          {
            count: this.$store.getters.getChampionsMatchCountState,
            id: 'Champions',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'success',
            labelClasses: 'success--text',
            amount: '180'
          },
          {
            count: this.$store.getters.getEuropaMatchCountState,
            id: 'Europa',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'success',
            labelClasses: 'success--text',
            amount: '180'
          },
          {
            count: this.$store.getters.getLigue1MatchCountState,
            id: 'Ligue1',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'warning',
            labelClasses: 'warning--text',
            amount: '180'
          },
          {
            count: this.$store.getters.getLeagueCupMatchCountState,
            id: 'LeagueCup',
            date: this.getCurrentDate(),
            status: 'Scrape',
            badgeClasses: 'primary',
            labelClasses: 'primary--text',
            amount: '180'
          }
        ],
        sites: [
          {

            name: 'Betin',
            lastScraped: this.getCurrentDate(),
            labelClasses: 'primary',
            logo: 'betin.png'
          },
          {

            name: 'Betika',
            lastScraped: this.getCurrentDate(),
            labelClasses: 'success',
            logo: 'betika.png'
          },
          {
            name: 'Betpawa',
            lastScraped: this.getCurrentDate(),
            labelClasses: 'warning',
            logo: 'betpawa.png'
          },
          // {

          //   name: '1XBet',
          //   lastScraped: this.getCurrentDate(),
          //   labelClasses: 'primary',
          //   logo: '1XBet.png'
          // },
          {

            name: 'Sportpesa',
            lastScraped: this.getCurrentDate(),
            labelClasses: 'success',
            logo: 'sportpesa.png'
          },
          {

            name: 'Betway',
            lastScraped: this.getCurrentDate(),
            labelClasses: 'warning',
            logo: 'betway.png'
          }
        ]
      }
    },
    created () {
      this.$store.dispatch('getPremierLeagueMatchCount', 'Premier League')
      this.$store.dispatch('getLaLigaMatchCount', 'La Liga')
      this.$store.dispatch('getSerieAMatchCount', 'Serie A')
      this.$store.dispatch('getBundesligaMatchCount', 'Bundesliga')
      this.$store.dispatch('getLigue1MatchCount', 'Ligue 1')
      this.$store.dispatch('getLeagueCupMatchCount', 'League Cup')
      this.$store.dispatch('getChampionsMatchCount', 'Champions')
      this.$store.dispatch('getEuropaMatchCount', 'Europa')
    },
    methods: {
      scrapeMatches (league, site) {
        console.log(league, site)
        if (league === 'Premier League') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaPremierLeague', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinPremierLeague', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaPremierLeague', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwayPremierLeague', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaPremierLeague', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetPremierLeague', '1XBet')
            //   break
          }
        } else if (league === 'La Liga') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaLaLiga', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinLaLiga', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaLaLiga', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwayLaLiga', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaLaLiga', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetLaLiga', '1XBet')
            //   break
          }
        } else if (league === 'Ligue1') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaLigue1', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinLigue1', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaLigue1', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwayLigue1', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaLigue1', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetLigue1', '1XBet')
            //   break
          }
        } else if (league === 'Bundesliga') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaBundesliga', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinBundesliga', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaBundesliga', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwayBundesliga', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaBundesliga', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetBundesliga', '1XBet')
            //   break
          }
        } else if (league === 'Serie A') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaSerieA', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinSerieA', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaSerieA', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwaySerieA', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaSerieA', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetSerieA', '1XBet')
            //   break
          }
        } else if (league === 'LeagueCup') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaLeagueCup', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinLeagueCup', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaLeagueCup', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwayLeagueCup', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaLeagueCup', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetLeagueCup', '1XBet')
            //   break
          }
        } else if (league === 'Champions') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaChampions', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinChampions', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaChampions', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwayChampions', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaChampions', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetChampions', '1XBet')
            //   break
          }
        } else if (league === 'Europa') {
          switch (site) {
            case 'Betika':
              this.$store.dispatch('getBetikaEuropa', 'Betika')
              break
            case 'Betin':
              this.$store.dispatch('getBetinEuropa', 'Betin')
              break
            case 'Betpawa':
              this.$store.dispatch('getBetpawaEuropa', 'Betpawa')
              break
            case 'Betway':
              this.$store.dispatch('getBetwayEuropa', 'Betway')
              break
            case 'Sportpesa':
              this.$store.dispatch('getSportpesaEuropa', 'Sportpesa')
              break
            // case '1XBet':
            //   this.$store.dispatch('get1XBetEuropa', '1XBet')
            //   break
          }
        }
      },
      getImgUrl (img) {
        // console.log(require('@/assets/' + img))
        return require('@/assets/' + img)
      },
      getCurrentDate () {
        let today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth()

        const yyyy = today.getFullYear()
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        today = dd + '/' + mm + '/' + yyyy
        return today
      },
      getScrapeState (site) {
        switch (site) {
          case 'Betika':
            this.isScraping = this.betikaScraping
        }
      }
    },
    computed: {
      ...mapGetters({
        lastScraped: 'getLastScraped',
        betikaScraping: 'getBetikaScrapeState',
        betinScraping: 'getBetinScrapeState',
        betwayScraping: 'getBetwayScrapeState',
        betpawaScraping: 'getBetpawaScrapeState',
        // x1betScraping: 'get1XBetScrapeState',
        sportpesaScraping: 'getSportpesaScrapeState',
        plMatchCount: 'getPremierLeagueMatchCountState',
        llMatchCount: 'getLaLigaMatchCountState',
        saMatchCount: 'getSerieAMatchCountState',
        blMatchCount: 'getBundesligaMatchCountState',
        l1MatchCount: 'getLigue1MatchCountState',
        lcMatchCount: 'getLeagueCupMatchCountState',
        chMatchCount: 'getChampionsMatchCountState',
        euMatchCount: 'getEuropaMatchCountState'
      })

    }
  }
</script>

<template>
  <v-container fluid grid-list-xl py-0>
    <app-card :heading="blHeader" :fullBlock="true" v-if="bundesliga">
      <v-card-title>{{blHeader}}
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search Match" single-line hide-details v-model="search">
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="blHeaders" :items="bundesliga.data" :search="search">
        <template slot="items" slot-scope="props">
          <tr v-for="match in props.item.matchInstances" :key="match.item" slot="activator">
            <td class="fw-bold blue--text">{{ match.service }}</td>
            <td class="fw-bold">{{ match.team1.name }} v {{ match.team2.name}}</td>
            <td>{{convertToLocalTime(props.item.date)}}</td>
            <td>{{ match.team1.price}}</td>
            <td>{{ match.drawPrice }}</td>
            <td>{{ match.team2.price }}</td>
            <td>
              <v-btn color="info" :href="match.url" target="_blank">More</v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </app-card>
    <app-card :heading="blHeader" :fullBlock="true" v-else>
      <v-card-title>{{blHeader}}
        <v-spacer></v-spacer>
      </v-card-title>
    </app-card>
  </v-container>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { getTheDate } from '@/helpers/helpers'
  export default {
    data () {
      return {
        dialog: false,
        search: '',
        blHeader: 'Bundesliga',
        blHeaders: [
          {
            text: 'Service',
            align: 'left',
            sortable: true,
            value: 'service'
          },
          {
            text: 'Match',
            value: 'pseudoKey'
          },
          {
            text: 'Match Date',
            value: 'mDate'
          },
          {
            text: 'Home',
            value: 'team1'
          },
          {
            text: 'Draw',
            value: 'draw'
          },
          {
            text: 'Away',
            value: 'team2'
          },
          {
            text: 'More',
            value: 'more'
          }
        ]
      }
    },
    methods: {
      convertToLocalTime (dateString) {
        return getTheDate(dateString)
      }
    },
    mounted () {
      this.$store.dispatch('allBundesligaMatches')
    },
    computed: {
      ...mapGetters({
        bundesliga: 'getBundesligaMatches'
      })
    }
  }
</script>

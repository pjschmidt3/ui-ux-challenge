<template>
  <div class="search-results-container">
    <div class="search-results" v-if="results && results.length > 0">
      <p class="q-body-1 text-center full-width uppercase text-bold search-results-heading">
        Delivering from:
      </p>

      <div class="row justify-around items-center content-center">
        <div class="search-result-item col-xs-6 col-sm-4 col-md-3"
             v-for="result in orderedSearchResults"
             :key="result.id">

          <h5 class="text-center text-bold full-width text-tertiary">
            {{ result.name }}
          </h5>

          <p class="text-center full-width launch-date-text"
             v-if="isLaunched(result.launch_date)">
            Now Available
          </p>

          <p class="text-center full-width launch-date-text"
             v-else>
            Coming {{ formatDate(result.launch_date) }}
          </p>
        </div>
      </div>

      <q-btn class="tall get-started-button" color="primary" @click.native="getStarted">Get Started</q-btn>
    </div>

    <div class="search-no-results-container" v-else>
      <p class="q-body-2 text-negative text-center error-message">
        {{ searchError }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapState('searchResults', [
      'results',
      'searchError'
    ]),

    orderedSearchResults () {
      return this.results.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
    }
  },

  methods: {
    isLaunched ( launchDate ) {
      return moment(launchDate).isBefore(moment())
    },

    formatDate ( launchDate ) {
      return moment(launchDate).format('MM/DD')
    },

    getStarted () {
      console.error('Not implemented')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'
  .search-results-container
    margin-top -75px

  .search-results
    margin-bottom 75px

    .search-results-heading
      letter-spacing 1.5px
      font-size 0.7em

    .search-result-item
      margin-bottom 30px

      h5
        font-size 1.75em
        margin-bottom 25px

      p
        font-size 0.75em

    .launch-date-text
      color $gray

    .error-message
      max-width 500px

    .get-started-button
      margin 0 auto
      display block
</style>

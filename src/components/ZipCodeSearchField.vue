<template>
  <q-field
    class="zip-code-search-field"
    :error="$v.zipCode.$error"
    error-label="This zip code is invalid! Please try again.">

    <div class="row">
      <q-input
        inverted-light
        type="text"
        color="white"
        class="col zip-code-input"
        placeholder="Enter ZIP Code"
        v-model="zipCode"
        :before="[{ icon: 'location_on', handler () {} }]"
        :after="$v.zipCode.$error ? [{ icon: 'error_outline', handler () {} }] : []"
      />

      <q-btn
        class="col-xs-12 col-sm-5"
        color="primary"
        @click.native="search">
        Get Started
      </q-btn>
    </div>
  </q-field>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import ZipCodeService from 'services/zip-code.service'

export default {
  data () {
    return {
      zipCode: '',
      zipCodeService: new ZipCodeService()
    }
  },

  validations: {
    zipCode: {
      required,
      isZipCode ( value ) {
        return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)
      }
    }
  },

  methods: {
    search () {
      this.$v.$touch()
      if (this.$v.$error) {
        return
      }

      return this.zipCodeService.fetchZipCodeData(this.zipCode)
        .then(data => {
          this.$store.dispatch('searchResults/updateResults', data)
          this.$store.dispatch('searchResults/updateSearchError', null)
        })
        .catch(err => {
          console.error(err)
          this.$store.dispatch('searchResults/updateResults', [])
          this.$store.dispatch('searchResults/updateSearchError', err.response.data.error)
        })
    }
  }
}
</script>

<style lang="stylus">
  @import '~variables'

  .zip-code-search-field
    max-width 450px
    margin 0 auto
    height 60px

    .q-field-bottom
      margin-bottom 15px

    .q-field-error
      color $orange
      text-transform uppercase
      font-size 11px

    & > .row.col
      max-width 80%
      margin 0 auto

    .zip-code-input
      height 100%
      font-size 16px

      &.q-if-focused
        color #000
        font-weight bold

      .q-if-inner
        height 100%

      .q-if-control-before
        margin-right 10px

      input
        height auto

      i
        align-self center
        font-size 1.5em

        .q-if-focused &
          background #000000

    .bg-negative
      /* disable red validation background */
      background #fff !important
      color $tertiary !important
</style>

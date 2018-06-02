<template>
  <div class="center-container full-width">
    <div class="gt-xs spacer" />
    <div class="target-exclusive-offer">
      <h3 class="offer-heading text-bold text-white text-center">Target exclusive offer.</h3>
      <h5 class="offer-subheading text-white text-center">$49 membership (reg. $99) + $15 credit with qualifying purchase.*</h5>

      <ZipCodeSearchField class="zip-code-search"  />

      <p class="offer-disclaimer text-white text-center">
        *Membership offer valid for new members only. Target order of $100 or more must be placed to qualify for $15 credit, which expires 30 days after qualifying order is placed and can be applied to any order from Shipt.
      </p>
    </div>
  </div>
</template>

<script>
import ZipCodeSearchField from 'components/ZipCodeSearchField'
export default {
  data () {
    return {}
  },

  components: {
    ZipCodeSearchField
  }
}
</script>

<style lang="stylus" scoped>
  .center-container
    margin 0 auto
    margin-bottom 100px

    .spacer
      margin-bottom 20px

  .target-exclusive-offer
    width 100%
    margin 0 auto
    padding-top 50px
    padding-bottom 30px
    background url(../assets/images/target-bg.png) repeat

    .offer-heading
      max-width 80%
      margin 10px auto
      font-size 48px

    .offer-subheading
      max-width 410px
      margin 0 auto
      margin-bottom 20px
      font-size 1.2em

    .zip-code-search
      margin-bottom 25px

    .offer-disclaimer
      font-size 0.7em
      max-width 410px
      margin 0 auto
      margin-top 35px
</style>

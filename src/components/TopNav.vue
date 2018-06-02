<template>
  <div class="top-nav">
    <div class="row justify-between items-center content-center full-height gutter-sm">
      <div class="col-xs-12 col-sm-auto">
        <img src="assets/images/shipt-logo.png" alt="Shipt" class="top-nav-logo">
      </div>
      <div class="col-xs-12 col-sm-auto">
        <q-btn
          color="primary"
          @click.native="signUp"
          class="top-nav-cta tall">
          Sign Up
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  methods: {
    signUp () {
      console.error('Not implemented')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  .top-nav
    margin 0 auto
    background-color $top-nav-bg-color
    min-height $top-nav-height
    box-shadow $top-nav-shadow
    padding 10px 0

    .top-nav-logo
      height 0.75 * $top-nav-height
      margin 0 auto
      display block

    .top-nav-cta
      font-size 0.8em
      margin 0 auto
      display block
</style>

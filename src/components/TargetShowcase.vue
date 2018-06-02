<template>
  <div class="target-showcase">
    <h4 class="text-center text-tertiary text-bold">Everything you love about Target at your fingertips.</h4>

    <div class="showcase-gallery justify-around content-center row gutter-sm">
      <div class="col-xs-12 col-sm-4">
        <img src="assets/images/step-one-image.png" alt="Step One">

        <h5 class="gallery-headline">
          Scroll through the aisles.
        </h5>

        <p class="gallery-detail q-body-1">
          Create an order in your local store from our app or on our website.
        </p>
      </div>

      <div class="col-xs-12 col-sm-4">
        <img src="assets/images/step-two-image.png" alt="Step One">

        <h5 class="gallery-headline">
          Our shoppers work their magic.
        </h5>

        <p class="gallery-detail q-body-1">
          Connect with your shopper and get live updates from the aisles.
        </p>
      </div>

      <div class="col-xs-12 col-sm-4">
        <img src="assets/images/step-three-image.png" alt="Step One">

        <h5 class="gallery-headline">
          We deliver your groceries.
        </h5>

        <p class="gallery-detail q-body-1">
          Schedule a delivery, and your order will arrive in as soon as 1 hour.
        </p>
      </div>
    </div>

    <q-btn class="get-started-button tall" color="primary" @click.native="getStarted">
      Get Started
    </q-btn>
  </div>
</template>

<script>
export default {
  methods: {
    getStarted () {
      console.error('Not implemented')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .target-showcase
    h4
      max-width 500px
      margin 0 auto
      margin-bottom 50px

  .showcase-gallery
    margin-bottom 35px

    img
      width 100%
      max-width 344px
      margin 0 auto
      display block

  .get-started-button
    margin 35px auto
    display block

  h4, h5, p
    text-align center
</style>

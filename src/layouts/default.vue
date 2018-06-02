<template>
  <q-layout view="hhh Lpr lFf">
    <q-layout-header reveal>
      <PromoBar />

      <div class="row justify-center">
        <div class="col-xs-10">
          <TopNav />
        </div>
      </div>
    </q-layout-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>

    <q-layout-footer reveal>
      <Footer />
    </q-layout-footer>
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'
  import PromoBar from 'components/PromoBar'
  import TopNav from 'components/TopNav'
  import Footer from 'components/Footer'
  export default {
    methods: {
      openURL
    },
    components: {
      PromoBar,
      TopNav,
      Footer
    }
  }
</script>

<style lang="stylus">
  header
    background #fff
</style>

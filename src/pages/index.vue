<template>
  <q-page>
    <div class="row justify-center flex">
      <div class="col-xs-12 col-sm-10">
        <TargetExclusiveOffer />

        <SearchResults />

        <TargetShowcase />
      </div>
    </div>
  </q-page>
</template>

<script>
  import TargetExclusiveOffer from 'components/TargetExclusiveOffer'
  import SearchResults from 'components/SearchResults'
  import TargetShowcase from 'components/TargetShowcase'

  export default {
    name: 'PageIndex',

    components: {
      TargetExclusiveOffer,
      SearchResults,
      TargetShowcase
    }
  }
</script>

<style lang="stylus" scoped>
</style>

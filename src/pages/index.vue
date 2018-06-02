<template>
  <q-page>
    <div class="row justify-center flex">
      <div class="col-xs-12 col-sm-10">
        <TargetExclusiveOffer />
      </div>
    </div>

    <SearchResults />

  </q-page>
</template>

<script>
  import TargetExclusiveOffer from 'components/TargetExclusiveOffer'
  import SearchResults from 'components/SearchResults'

  export default {
    components: {
      TargetExclusiveOffer,
      SearchResults
    }
  }
</script>

<style lang="stylus" scoped>
</style>

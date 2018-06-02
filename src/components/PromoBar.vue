<template>
  <div class="promo-bar">
    {{ promoBarText }}
  </div>
</template>

<script>
  import { text } from 'settings/constants'

  export default {
    name: 'PromoBar',
    data () {
      return {
        promoBarText: text.PROMO_BAR_TEXT
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~variables'
  .promo-bar
    height $promo-bar-height
    line-height $promo-bar-height
    color $promo-bar-color
    background-color $promo-bar-bg-color
    font-size 0.8em
    width 100%
    text-align center
    text-transform uppercase
    font-weight bold
</style>

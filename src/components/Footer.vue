<template>
  <div class="footer">
    <p>
      &copy;{{ copyrightText }}
    </p>
  </div>
</template>

<script>
import { text } from 'settings/constants'
const { COPYRIGHT_TEXT } = text
export default {
  data () {
    return {
      copyrightText: COPYRIGHT_TEXT
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  .footer
    position relative
    height $footer-height
    background-color $footer-bg-color
    color $footer-color
    text-align center
    font-size $footer-text-size
    opacity $footer-opacity

    p
      height 15px
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      width 90%
      text-align center
</style>

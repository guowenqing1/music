<template>
  <div id='tab-bar'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="stylus" scoped>
#tab-bar
  width 100vw
  background-color #222222
  height 44px
  display flex
  text-align center
  z-index 100
  line-height 44px
</style>

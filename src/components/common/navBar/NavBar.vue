<template>
  <div class='nav-bar'>
    <div class='left'>
      <slot name='nav-left'></slot>
    </div>
    <div class='center'>
      <slot name='nav-center'></slot>
    </div>
    <div class='right'>
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="stylus" scoped>
.nav-bar
  width 100vw
  display flex
  height 44px
  text-align center
  line-height 44px
.left
  width 60px
.center
  flex 1
  font-size 16px
.right
  width 60px
</style>

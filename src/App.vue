<template>
  <div id="app">
    <!-- keep-alive: 可以使被包含的组件保留状态，或避免重新渲染
             include: 字符串或正则表达式,只有匹配的组件会被缓存
             exclude: 字符串或正则表达式,任何匹配的组件都不会被缓存
    -->
    <nav-bar class="app-header">
      <div slot="nav-center">
        <div class="icon"></div>
        <h1 class="text">Chicken Music</h1>
      </div>
      <div slot="nav-right">
        <i class="icon-mine"></i>
      </div>
    </nav-bar>
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from "commons/navBar/NavBar";
import MainTabBar from "content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    NavBar,
    MainTabBar
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'
.app-header
  color $color-theme
.icon
  display inline-block
  vertical-align top
  margin-top 6px
  width 30px
  height 32px
  margin-right 4px
  bg-image('~common/image/logo')
  background-size 30px 32px
.text
  display inline-block
  vertical-align top
  line-height 44px
  font-size $font-size-large
.icon-mine
  display block
  padding 12px
  font-size 20px
  color $color-theme
  text-align right
</style>

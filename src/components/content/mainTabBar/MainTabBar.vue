<template>
  <div>
    <!-- 状态栏 -->
    <tab-bar>
      <tab-bar-item
        path="/recommend"
        activeColor="#ffcd32"
        textColor="rgb(119, 119, 119)"
      >
        <span slot="item-text">推荐</span>
      </tab-bar-item>
      <tab-bar-item path="/singer" activeColor="#ffcd32" textColor="rgba(255, 255, 255, 0.5)">
        <span slot="item-text">歌手</span>
      </tab-bar-item>
         <tab-bar-item path="/rank" activeColor="#ffcd32" textColor="rgba(255, 255, 255, 0.5)">
        <span slot="item-text">排行</span>
      </tab-bar-item>
         <tab-bar-item path="/search" activeColor="#ffcd32" textColor="rgba(255, 255, 255, 0.5)">
        <span slot="item-text">搜索</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "commons/tabBar/TabBar"
import TabBarItem from "commons/tabBar/TabBarItem"
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  computed: {
  },
}
</script>

<style lang="stylus" scoped>
</style>

<template>
  <div id="tab-bar-item" @click="itemClick" >
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-active-icon">
      <slot name="item-active-icon"></slot>
    </div>
    <div class="item-text" :style="activeStyle" ref="text">
      <slot name="item-text" :style="textActive">默认</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      // 跳转的路径
      type: String,
      required: true
    },
    activeColor: {
      // 选中时文字的颜色
      type: String,
      default: "#ff5777"
    },
    textColor: {
      // 没有选中时候文字的颜色
      type: String,
      default: "#000"
    }
  },
  methods: {
    itemClick() {
      // requace: 替换当前, 不可以后退
      this.$router.replace(this.path);
    }
  },
  // 计算属性
  computed: {
    isActive() {
      // this.$route.path: 当前活跃的组件
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      if (this.isActive && this.$refs.text) {
        this.$refs.text.children[0].className = "tab-link";
      }else if(!this.isActive && this.$refs.text){
        this.$refs.text.children[0].className = "";
      }
      // borderBottom: '2px solid #ffcd32'
      return this.isActive
        ? { color: this.activeColor }
        : { color: this.textColor };
    }
  },
  mounted() {
    console.log(this.$refs.text);
    if (this.$route.path.indexOf(this.path) != -1) {
      this.$refs.text.children[0].className = "tab-link";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
#tab-bar-item
  flex 1
.item-icon img, .item-active-icon img
  margin-top 0.133333rem /* 10/75 */
  width 0.64rem /* 48/75 */
  height 0.64rem /* 48/75 */
  vertical-align middle
.item-text
  font-size 14px
  margin-top 0.08rem /* 6/75 */
.tab-link
  color $color-theme
  border-bottom 2px solid $color-theme
  padding-bottom 5px
</style>

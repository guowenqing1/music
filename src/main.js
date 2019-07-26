import Vue from 'vue'
import App from './App'
import router from './router'
// 初始化标签默认样式
import "common/stylus/index.styl"
// 解决在手机上 click 事件(300毫秒)延迟的问题
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

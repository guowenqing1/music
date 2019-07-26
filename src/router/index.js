import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'view/recommend/Recommend'
import Singer from 'view/singer/Singer'
import Rank from 'view/rank/Rank'
import Search from 'view/search/Search'

Vue.use(Router)
const routes = [
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  }, {
    path: '/singer',
    name: 'Singer',
    component: Singer
  }, {
    path: '/rank',
    name: 'Rank',
    component: Rank
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }
]
const router = new Router({
  routes
})

export default router

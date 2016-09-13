import Vue from 'vue'
import Vuex from 'vuex'
import articleDetail from './modules/articleDetail'
import articleList from './modules/articleList'
import createArticle from './modules/createArticle'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    articleDetail,
    articleList,
    createArticle
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    weChatImgUrl: '测试Vuex',
    imgOpacity: 0,
    isShowImg: false
  },
  mutations: {
    setWeChatImgUrl (state, value) {
      state.weChatImgUrl = value
    },
    setImgOpacity (state, value) {
      state.imgOpacity = value
    },
    setIsShowImg (state, value) {
      state.isShowImg = value
    }
  }
})

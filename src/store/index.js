import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      counter: 0,
      cookie:'',
    },
    getters: {
      doubleCounter(state) {
        return state.counter * 2
      }
    },
    mutations: {
      add(state) {
        state.counter++
        // this.state
      },
      setCookie(state,cookie){
        state.cookie = cookie
      }
    },
    actions: {
      // 结构上下文
      add({ commit }) {
        setTimeout(() => {
          commit('add')
        }, 1000);
      }
    },
    modules: {
    }
  })
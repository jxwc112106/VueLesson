import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:10
  },
  getters: {
    getCounter(state){
      return state.counter > 0 ? state.counter : "counter数据异常"
    }
  },
  mutations: {
    addCounter(state,num) {
      state.counter += num
    }
  },
  actions: {
     asyncAddCounter({ commit }){
      axios.get("http://iwenwiki.com/api/generator/list.php")
      .then(res =>{
        commit("addCounter",res.data[0])
      })
     }
  },
  modules: {
  }
})

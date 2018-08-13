import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex);

// const actions={
//   login({commit}){
//     commit('login');
//   }
// };

export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        user
    }
})

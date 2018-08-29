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
    state: {
        sideWidth: "220px"
    },
    mutations: {
        toggleSideWidth(state) {
            state.sideWidth = state.sideWidth === "220px" ? "60px" : "220px";
        }
    },
    actions: {},
    modules: {
        user
    }
})
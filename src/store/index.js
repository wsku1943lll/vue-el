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
        sideWidth: "220px",
        err_code: "",
        err_message: ""
    },
    mutations: {
        toggleSideWidth(state) {
            state.sideWidth = state.sideWidth === "220px" ? "60px" : "220px";
        },
        setUpErrorPage(state, payload) {
            state.err_code = payload['code'];
            state.err_message = payload['message']
        }
    },
    actions: {},
    modules: {
        user
    }
})
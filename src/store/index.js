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
    	sideWidth:"170px"
	},
    mutations: {
    	toggleSideWidth(state){
    		state.sideWidth=state.sideWidth==="170px"?"65px":"170px";
		}
	},
    actions: {},
    modules: {
        user
    }
})

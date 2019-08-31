import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
	// 三大将
	state:{
		userInfo:{}
	},
	// 修改state的唯一方法 是提交mutations, 必须同步操作
	mutations:{
		getUserInfo(state,user){
			state.userInfo = user;
			// console.log(state.userInfo);
		},
		accountLogout(state){
			state.userInfo = {}
		}
	},
  // 异步逻辑都应该封装到 action 里面
	actions:{
		getUserInfo({commit},user){
			commit('getUserInfo',user);
		},
		accountLogout({commit}){
			commit('accountLogout')
		}
	}
});
export default store;

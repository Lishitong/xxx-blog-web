/*
 * @Author: lidalan
 * @Date: 2021-03-22 14:52:48
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-23 14:46:36
 * @Description:
 * @FilePath: \xxx-blog-web\src\store\index.js
 */

import { createStore } from 'vuex';

const store = createStore({
	state: {
		activeRouter: '/',
		overflowHidden: false,
	},
	mutations: {
		setActiveRouter(state, router) {
			state.activeRouter = router;
		},
		setOverflowHidden(state, boolean) {
			state.overflowHidden = boolean;
      console.log(state)
		},
	},
	actions: {},
	getters: {
		activeRouter: state => state.activeRouter,
		overflowHidden: state => state.overflowHidden,
	},
});

export default store;

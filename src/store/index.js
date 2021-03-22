/*
 * @Author: lidalan
 * @Date: 2021-03-22 14:52:48
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-22 15:22:36
 * @Description:
 * @FilePath: \xxx-blog-web\src\store\index.js
 */

import { createStore } from 'vuex';

const store = createStore({
	state: {
		activeRouter: '/',
	},
	mutations: {
		setActiveRouter(state, router) {
			state.activeRouter = router;
		},
	},
	actions: {},
	getters: {
		activeRouter: state => state.activeRouter,
	},
});

export default store;

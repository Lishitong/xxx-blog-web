/*
 * @Author: lidalan
 * @Date: 2021-03-08 16:08:05
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-24 16:50:46
 * @Description: router
 * @FilePath: \xxx-blog-web\src\router\index.js
 */

import { createRouter, createWebHistory } from 'vue-router';
import store from 'src/store';

let routes = [
	{
		path: '/',
		component: () => import('src/view/Home/index.vue'),
	},
	{
		path: '/code',
		component: () => import('src/view/Code/index.vue'),
	},
	{
		path: '/daily',
		component: () => import('src/view/Daily/index.vue'),
	},
	{
		path: '/:notfound',
		component: () => import('src/view/Not/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	store.commit('setActiveRouter', to.path);
	next();
});

export default router;

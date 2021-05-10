/*
 * @Author: lidalan
 * @Date: 2021-03-08 16:08:05
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 16:56:58
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
		path: '/article',
		component: () => import('src/view/Article/index.vue'),
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
		path: '/article/:id',
		component: () => import('src/view/Article/details.vue'),
	},
	{
		path: '/code/:type',
		component: () => import('src/view/Code/types.vue'),
	},
	{
		path: '/code/:type/:id',
		component: () => import('src/view/Code/details.vue'),
	},
	{
		path: '/:notfound(.*)?',
		component: () => import('src/view/Not/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (to, from, savedPosition) => ({ top: 0 }),
});

router.beforeEach((to, from, next) => {
	store.commit('setActiveRouter', to.path);
	next();
});

export default router;

/*
 * @Author: lidalan
 * @Date: 2021-03-08 16:08:05
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-08 16:50:37
 * @Description: router
 * @FilePath: \xxx-blog-web\src\router\index.js
 */

import { createRouter, createWebHistory } from 'vue-router';

const Test = () => import('../components/test/index.vue');

let routes = [
	{
		path: '/',
		component: () => import('../components/Home/index.vue'),
	},
	{
		path: '/test',
		component: Test,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

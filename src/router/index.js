/*
 * @Author: lidalan
 * @Date: 2021-03-08 16:08:05
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-09 15:23:36
 * @Description: router
 * @FilePath: \xxx-blog-web\src\router\index.js
 */

import { createRouter, createWebHistory } from 'vue-router';

let routes = [
	{
		path: '/',
		component: () => import('src/view/Home/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

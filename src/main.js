import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'normalize.css'
import 'style/index.less'

createApp(App)
	.use(router)
	.use(ElementPlus, { size: 'small', zIndex: 3000 })
	.mount('#app');


  
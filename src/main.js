import { createApp } from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus';
import ClassName from './plugins/className';
import 'normalize.css';
import 'element-plus/lib/theme-chalk/index.css';
import 'style/index.less';
import './utils/flexible'
const app = createApp(App)
	.use(store)
	.use(router)
	.use(ElementPlus, { size: 'small', zIndex: 3000 })
	.use(ClassName, { name: 'className' })
	.mount('#app');

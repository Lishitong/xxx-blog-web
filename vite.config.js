import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			assets: resolve(__dirname, 'src/assets'),
			components: resolve(__dirname, 'src/components'),
			composition: resolve(__dirname, 'src/composition'),
			src: resolve(__dirname, 'src'),
			style: resolve(__dirname, 'src/style'),
			view: resolve(__dirname, 'src/view'),
		},
	},
});

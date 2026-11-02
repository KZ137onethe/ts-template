import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
	source: {
		entry: {
			index: "./src/main.ts"
		}
	},
	html: {
		template: "./public/index.html"
	},
  resolve: {
    alias: {
      '@': './src',
    },
  },
	plugins: [
		pluginVue()
	]
});
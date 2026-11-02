import { defineConfig } from '@rsbuild/core';

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
});
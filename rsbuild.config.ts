import { defineConfig } from '@rsbuild/core';
import { join } from "node:path"

export default defineConfig({
	root: join(__dirname, "./src"),
	source: {
		entry: {
			index: "./main.ts"
		}
	},
	html: {
		template: "./index.html"
	},
  resolve: {
    alias: {
      '@common': './src/common',
    },
  },
});
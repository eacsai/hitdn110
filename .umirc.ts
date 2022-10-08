import { defineConfig } from 'dumi';

export default defineConfig({
	mode: 'site',
	base: '/component-lib-demo',
	publicPath: '/component-lib-demo/',
	exportStatic: {},
  outputPath: 'docs',
	title: 'component-lib-demo',
	favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
	logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
	mfsu: {},
	theme: {
		'@primary-color': '#7FA1F7',
	},
	extraPostCSSPlugins: [
		require('postcss-import'),
		require('tailwindcss')({
			config: './tailwind.config.js',
		}),
		require('autoprefixer'),
	],
});
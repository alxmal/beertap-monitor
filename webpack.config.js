/* Modules */
const webpack = require('webpack');
const path = require('path');
const Templater = require('html-webpack-plugin');
const Extractor = require("extract-text-webpack-plugin");
const Sprite = require('svg-sprite-loader/lib/plugin');

const PORT = process.env.PORT || 3000;
const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');


/* Helpers */
// const htmlTemplater = new Templater ({
// 	title: 'Webpack For React',
// 	// favicon: './dist/favicon.ico',
// 	template: SRC + '/index.html'
// });
const stylusExtractor = new Extractor ({
	filename: 'index.css',
	disable: false,
	allChunks: true
});
const spriteGenerator = new Sprite();

/* Config */
const config = {
	mode: "development",
	cache: false,
	entry: SRC + '/app/index.js',
	output: {
		path: DIST + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'es2015', 'stage-1'],
					}
				}
			},
			{
				test: /\.styl?$/,
				use: stylusExtractor.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								camelCase: true,
								minimize: true,
								sourceMap: true
							}
						},
						{
							loader: 'stylus-loader',
							options: {
								sourceMap: true,
								preferPathResolver: 'webpack'
							}
						}
					]
				})
			},
			{
				test: /\.(woff(2)?)(\?v=\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '/'
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							extract: true,
							spriteFilename: 'sprite.svg'
						}
					}
				]
			}
		]
	},
	plugins: [
		// new Templater(),
		// htmlTemplater,
		stylusExtractor,
		spriteGenerator
	],
	devtool: 'inline-source-map',
	devServer: {
		port: PORT,
		historyApiFallback: true,
		open: true,
		contentBase: SRC,
		publicPath: '/app/'
	}
};

/* Exports */
module.exports = config;
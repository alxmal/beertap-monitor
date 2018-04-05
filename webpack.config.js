/* Modules */
const webpack = require("webpack");
const path = require("path");
const Templater = require("html-webpack-plugin");
const Extractor = require("extract-text-webpack-plugin");
// const Sprite = require("svg-sprite-loader/lib/plugin");

const PORT = process.env.PORT || 3000;
const DIST = path.resolve(__dirname, "dist");
const SRC = path.resolve(__dirname, "src");

/* Helpers */
const stylusExtractor = new Extractor({
	filename: "index.css",
	disable: false,
	allChunks: true
});

const babelOptions = {
	presets: ['react', 'es2015', 'stage-1'],
	plugins: ['transform-object-rest-spread']
};

/* Config */
const config = {
	mode: "development",
	cache: false,
	entry: SRC + "/app/index.js",
	output: {
		path: DIST + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: babelOptions
					}
			},
			{
				test: /\.styl?$/,
				use: stylusExtractor.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								camelCase: true,
								minimize: true,
								sourceMap: true
							}
						},
						{
							loader: "stylus-loader",
							options: {
								sourceMap: true,
								preferPathResolver: "webpack"
							}
						}
					]
				})
			},
			{
				test: /\.(eot|ttf|woff|woff2)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							publicPath: "/app/"
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader',
						options: babelOptions
					},
					{
						loader: "svg-sprite-loader",
						options: {
							runtimeGenerator: require.resolve(
								SRC + "/app/svg-to-icon-generator.js"
							),
							runtimeOptions: {
								iconModule: SRC + "/app/components/Icon.js" // Relative to current build context folder
							}
						}
					}
				]
			}
		]
	},
	plugins: [stylusExtractor],
	devtool: "inline-source-map",
	devServer: {
		port: PORT,
		historyApiFallback: true,
		open: true,
		contentBase: SRC,
		publicPath: "/app/"
	}
};

/* Exports */
module.exports = config;

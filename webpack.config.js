const TerserPlugin = require('terser-webpack-plugin')
const { resolve } = require('path')
require('dotenv').config()

module.exports = {
	entry: resolve('./src/GameOfChips.js'),
	mode: process.env.WEBPACK_MODE,
	watch: false,
	output: {
		path: resolve('./'),
		filename: './dist/bundle.min.js'
	},
	node: {
		fs: "empty"
	},
	optimization: {
		concatenateModules: false,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					keep_classnames: true,
				},
			}),
		],
	}
}
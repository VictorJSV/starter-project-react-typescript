const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: path.join(__dirname, 'src', 'index.tsx')
	},
	devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: '/node_modules/'
			}
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
}
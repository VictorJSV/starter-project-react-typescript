const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: path.join(__dirname, 'src', 'index.tsx'),
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		open: true,
		historyApiFallback: true,
		port: 9000,
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/',
			},
      {
        test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath: '/'
            }
          }
        ]
      }
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'PagoEfectivo | TyC',
			template: path.join(__dirname, 'src', 'index.html'),
		}),
		new webpack.EnvironmentPlugin({
			NODE_ENVIRONMENT: JSON.stringify(process.env.NODE_ENV) || 'dev',
		}),
	],
}

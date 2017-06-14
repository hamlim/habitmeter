const path = require('path')

module.exports = {
	entry: './src/client/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/public'),
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css/,
				use: [
					{
						loader: path.join(__dirname, 'node_modules/glam/loader'),
					},
				],
			},
		],
	},
}

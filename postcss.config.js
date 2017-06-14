module.exports = {
	plugins: [
		require('postcss-cssnext')({
			features: {
				customProperties: {
					preserve: true,
				},
			},
		}),
		require('postcss-import'),
	],
}

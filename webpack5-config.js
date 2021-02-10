const webpack = require('webpack');
const path = require('path');

module.exports = {
    // https://webpack.js.org/configuration/mode/
    mode: 'production',
    entry: './src/js/entry.js',
    output: {
	path: path.resolve(__dirname, './dist'),
	filename: 'alloy_finger.min.js'
    },
    devtool: 'source-map',
    optimization: {
        minimize: true
    }
};

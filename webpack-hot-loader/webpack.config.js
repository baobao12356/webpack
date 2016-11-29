/**
 * Created by Stone on 2016/11/29.
 */
var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.join(__dirname, 'public', 'src');
var BUILD_PATH = path.join(__dirname, 'build');

module.exports = {
    debug: true,
    devtool: "source-map",
    entry: [
        'webpack-hot-middleware/client',
        path.join(APP_PATH, 'index.jsx')
    ],
    output: {
        path: path.join(BUILD_PATH, 'js'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
                include: APP_PATH
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
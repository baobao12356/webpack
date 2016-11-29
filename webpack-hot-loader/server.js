/**
 * Created by 寒雨 on 2016/11/29.
 */
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var hotMiddleware = require('webpack-hot-middleware');
var devMiddleware = require('webpack-dev-middleware');
var express = require('express');

var compiler = webpack(config);
var app = express();

app.use(devMiddleware(compiler, {publicPath: config.output.publicPath}));
app.use(hotMiddleware(compiler));
//配置默认页
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function (err) {
    if (err)
        throw err;
    console.log('server is start at port :%d', 3000);
})
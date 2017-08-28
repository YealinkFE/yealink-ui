var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.config.js')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
    entry: './examples/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'yealink-ui.js'
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
})

/*global require, module*/

'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

module.exports = {

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    entry: [
        'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './App/index.jsx'
    ],



    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    // Source maps support (or 'inline-source-map' also works)
    devtool: 'source-map',

    module: {
        loaders: [
          {
               test: /\.(png|woff|woff2|eot|ttf|svg)$/,
               loader: 'url-loader?limit=100000'
           },
          {test: /\.css$/, loader: 'style!css'},
            {
                test: /\.jsx?$/,
                loaders: ['react-hot','babel'],
                include: path.join(__dirname, 'App')
            },
            {
                test: /\.json?$/,
                loaders: ['json']
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

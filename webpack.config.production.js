'use strict'

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = require('./webpack.config.base').merge({
  module: {
    loaders: [
      // Extract css files (with sourcemaps)
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css')
      },
      // Extract stylus files (with sourcemaps)
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css!stylus')
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})

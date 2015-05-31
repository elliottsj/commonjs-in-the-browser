'use strict'

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = require('./webpack.config.base').merge({
  module: {
    loaders: [
      // Extract css files (with sourcemaps)
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      },
      // Extract stylus files (with sourcemaps)
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!stylus?{sourceMap:{inline:true}}')
      }
    ]
  },
  devtool: 'source-map',
  watch: true,
  keepalive: true,
  failOnError: false
})

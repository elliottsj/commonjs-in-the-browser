'use strict'

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './scripts/main.js',
  output: {
    path: 'build/',
    publicPath: 'build/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap')
      },
      // Extract stylus files
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!stylus-loader?{sourceMap:{inline:true}}')
      }
    ]
  },
  plugins: [
    // Extract css to app.css
    new ExtractTextPlugin('app.css')
  ],
  devtool: 'source-map',
  watch: true,
  keepalive: true,
  failOnError: false
}

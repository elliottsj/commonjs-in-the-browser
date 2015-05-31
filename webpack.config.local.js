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
      {
        test: /\.js$/,
        loader: 'ng-annotate'
      },
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      },
      // Extract stylus files
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!stylus?{sourceMap:{inline:true}}')
      },
      // Load html templates into angular's template cache
      {
        test: /\.html$/,
        loader: 'html'
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

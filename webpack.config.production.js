'use strict'

var webpack = require('webpack')

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
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

'use strict'

var _ = require('lodash')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var baseConfig = {
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
  ]
}

/**
 * Get the base webpack config, recursively merged with the given object.
 * If two identical keys have an array value, the arrays will be concatenated.
 *
 * @example
 * require('./webpack.config.base').merge({
 *   module: {
 *     loaders: [{test: /\.css$/, loader: 'css'}]
 *   }
 * })
 * 
 * @param  {object} config The new config properties to be merged
 * @return {object}        The merged config object
 */
exports.merge = function(config) {
  return _.merge({}, baseConfig, config, function concatArrays(a, b) {
    return _.isArray(a) ? a.concat(b) : undefined
  })
}

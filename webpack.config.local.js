'use strict'

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
  devtool: 'source-map',
  watch: true,
  keepalive: true,
  failOnError: false,
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader'}
    ]
  }
}

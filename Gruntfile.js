'use strict'

var path = require('path')

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt)

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt)

  grunt.initConfig({
    express: {
      options: {
        script: 'server.js'
      },
      develop: {},
      production: {
        options: {background: false}
      }
    },
    webpack: {
      develop: require('./webpack.config.local'),
      production: require('./webpack.config.production')
    }
  })

  // Default dev task
  grunt.registerTask('default', [
    'develop'
  ])

  // Build and serve for development
  grunt.registerTask('develop', [
    'express:develop',         // Launch express in background
    'webpack:develop'  // Watch and re-bundle app continuously
  ])

  // Build and serve for production
  grunt.registerTask('production', [
    'webpack:production',  // Bundle app once
    'express:production'              // Keep express running indefinitely
  ])
}

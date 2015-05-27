'use strict'

var path = require('path')

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt)

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    clean: ['build'],
    copy: {
      app: {
        expand: true,
        cwd: 'app/',
        src: ['bower_components/**', 'scripts/**'],
        dest: 'build/'
      }
    },
    concat: {
      app: {
        src: require('./app/dependencies').map(function(filename) {
          // Prepend filenames with 'app/'
          return path.join('app/', filename)
        }),
        dest: 'build/app.concat.js'
      }
    },
    express: {
      options: {
        script: 'server.js'
      },
      develop: {
        options: {
          node_env: 'development'
        }
      },
      production: {
        options: {
          background: false,
          node_env: 'production'
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      app: {
        src: ['build/app.concat.js'],
        dest: 'build/app.js'
      }
    },
    watch: {
      develop: {
        files: ['app/**'],
        tasks: ['develop']
      }
    }
  })

  // Default dev task
  grunt.registerTask('default', [
    'develop-serve'
  ])

  // Build & serve for development
  grunt.registerTask('develop-serve', [
    'develop',
    'express:develop',
    'watch:develop'
  ])

  // Build for development
  grunt.registerTask('develop', [
    'clean',
    'copy'
  ])

  // Build & serve for production
  grunt.registerTask('production', [
    'clean',
    'concat',
    'uglify',
    'express:production'
  ])
}

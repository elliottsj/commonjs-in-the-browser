'use strict'

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt)

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    clean: ['build'],
    copy: {
      app: {
        src: ['app/index.html'],
        dest: 'build/index.html'
      }
    },
    concat: {
      app: {
        src: [
          'app/scripts/main.js',
          'app/scripts/components/_module.js',
          'app/scripts/components/hwHello.js',
          'app/scripts/components/hwWorld.js'
        ],
        dest: 'build/app.concat.js'
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
    'clean',
    'watch:develop'
  ])

  // Build for production
  grunt.registerTask('production', [
    'clean',
    'concat',
    'uglify'
  ])
}

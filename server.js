'use strict'

var path = require('path')
var morgan = require('morgan')
var express = require('express')
var server = express()

server.use(morgan('short'))
server.set('view engine', 'ejs')
server.use(express.static(path.join(__dirname, 'build')));
server.get('/', function(req, res) {
  res.render('index', {
    dependencies:
      server.get('env') === 'development'
        ? require('./app/dependencies')
        : ['app.js']
  })
})

server.listen(process.env.PORT || 3000)

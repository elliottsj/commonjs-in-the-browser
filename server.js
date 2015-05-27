'use strict'

var path = require('path')
var morgan = require('morgan')
var express = require('express')
var server = express()

server.use(morgan('short'))
server.set('view engine', 'ejs')
server.use(express.static(path.join(__dirname, 'build')));
server.get('/', function(req, res) {
  res.render('index')
})

var port = process.env.PORT || 3000
server.listen(port)
console.log('\nListening on port ' + port);

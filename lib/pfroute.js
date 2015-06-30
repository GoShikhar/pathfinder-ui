// Created By: Sangmin Lee
// Purpose: ????
// Date: 6/29/15

var express = require('express');
var path = require('path');
var pfrouter = express();

pfrouter.use(express.static(path.join(__dirname, 'browser')));
pfrouter.use(express.static(path.join(__dirname, '../node_modules')));

pfrouter.get('/', function(req, res){
    res.sendFile('./index.html');
});

pfrouter.get('/data', function(req, res){
    res.send(req.RESTroutes)
})
module.exports = pfrouter;
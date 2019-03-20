#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express')
var app = express();
var path = require('path')

var request = require('request');

app.use('/js', express.static(path.join(__dirname, 'js')));

// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

// -------------- variable definition  -------------- //


// -------------- middleware -------------- //


// -------------- express endpoint definition -------------- //
app.get('/', function(req, res){
   res.send("Welcome to my page!"); 
});

app.get('/queries', function(req, res){
   name = req.query.name;
   color = req.query.color;
   res.send(name + "'s favorite color is " + color);
});

app.get('/sendBasicHTML', function(req, res){
   res.sendFile(__dirname + "/basicindex.html"); 
});

app.get('/buttonclick', function(req, res){
   res.sendFile(__dirname + "/buttonclick.html"); 
});

// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});


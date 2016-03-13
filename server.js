// Requires \\
var express = require('express');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html')
});

// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
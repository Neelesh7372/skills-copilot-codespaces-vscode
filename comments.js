// Create web server
// Run: node comments.js
// View at: http://localhost:8080

// Load the express module
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Start server
var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

// Load the comments module
var comments = require('./comments');

// Use the body-parser module to parse data sent
// via HTTP POST.  Install with: npm install body-parser
app.use(bodyParser());

// Serve static files from the directory /static
app.use('/static', express.static(__dirname + '/static'));

// Serve static files from the directory /node_modules
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Serve static files from the directory /bower_components
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Serve static files from the directory /app
app.use('/app', express.static(__dirname + '/app'));

// Serve static files from the directory /app
app.use('/views', express.static(__dirname + '/views'));

// Serve static files from the directory /app
app.use('/views/new', express.static(__dirname + '/views/new'));

// Serve static files from the directory /app
app.use('/views/edit', express.static(__dirname + '/views/edit'));

// Serve static files from the directory /app
app.use('/views/show', express.static(__dirname + '/views/show'));

// Serve static files from the directory /app
app.use('/views/delete', express.static(__dirname + '/views/delete'));

// Serve static files from the directory /app
app.use('/views/confirm', express.static(__dirname + '/views/confirm'));

// Serve static files from the directory /app
app.use('/views/error', express.static(__dirname + '/views/error'));

// Serve static files from the directory /app
app.use('/views/404', express.static(__dirname + '/views/404'));

// Serve static files from the directory /app
app.use('/views/500', express.static(__dirname + '/views/500'));

// Serve static files from the directory /app
app.use('/views/partial', express.static(__dirname + '/views/partial'));

// Serve static files from the directory /app
app.use('/views/partial/new', express.static(__dirname + '/views/partial
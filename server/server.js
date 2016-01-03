// server.js

var express = require('express');
var engines = require('consolidate');
var app = express();
var port = 4444;

require('babel-register');

// Include static assets. Not advised for production
app.use(express.static('public/'));
// Set view path
app.set('views', 'public/');
// set up HTML + Mustache for templating.
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// Set up Routes for the application
require('./core-routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

app.listen(port);
console.log('Server is up and running: http://localhost:' + port);

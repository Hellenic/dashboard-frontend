// server.js

var express = require('express'),
engines = require('consolidate'),
path = require('path'),
app = express(),
port = 4444,
bodyParser = require('body-parser');

// Make sure to include the JSX transpiler
require("node-jsx").install();

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up HTML + Mustache for templating.
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// Set up Routes for the application
require('./app/routes/core-routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

app.listen(port);
console.log('Server is up and running: http://localhost:' + port);

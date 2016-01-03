var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var history = require('history');
var routes = require('../app/routes.js');

var RoutingContext = ReactRouter.RoutingContext;
var match = ReactRouter.match;

module.exports = function(app) {

	app.get('/', function(req, res) {

		var location = history.createLocation(req.url)

		match({routes: routes, location: location}, function(error, redirectLocation, renderProps) {

			var reactHtml = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
			res.render('index.html', { reactOutput: reactHtml });

		});

	});

};

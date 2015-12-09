/** @jsx React.DOM */

var React = require('react');
var ReactRouter = require('react-router');
var history = require('history');
var routes = require('./routes.js');

var RoutingContext = ReactRouter.RoutingContext;
var match = ReactRouter.match;

module.exports = function(app) {

	// TODO Other possible routes / requests
	app.get('/', function(req, res) {

		var location = history.createLocation(req.url)

		match({routes: routes, location: location}, function(error, redirectLocation, renderProps) {

			// React.renderToString takes your component and generates the markup
			var reactHtml = React.renderToString(<RoutingContext {...renderProps} />);

			// Output HTML rendered by React
			res.render('index.html', { reactOutput: reactHtml });

		});

	});

};

var through = require('through2');
var Mustache = require('mustache');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var history = require('history');
require("babel-register");

var RoutingContext = React.createFactory(ReactRouter.RoutingContext);
var match = ReactRouter.match;

module.exports = function() {

  return through.obj(function(file, encoding, callback) {

    var reactHtml = getReactRender();
    var renderedHtml = Mustache.render(file.contents.toString(), { reactOutput: reactHtml });
    file.contents = new Buffer(renderedHtml);

    callback(null, file);
  });

};

function getReactRender()
{
  var location = history.createLocation('/');
  var routes = require('../app/routes.js');
  var html = '';

  match({ routes: routes, location: location }, function(error, redirectLocation, renderProps) {
    html = ReactDOMServer.renderToString(RoutingContext(renderProps));
  });

  return html;
}

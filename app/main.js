/** @jsx React.DOM */

var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./routes/routes.js');

var Router = ReactRouter.Router;

React.render(<Router routes={routes}/>, document.getElementById("app"));

// import React from 'react';
// import ReactRouter from 'react-router';
// import routes from './routes/routes.js';
var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./routes.js');

var Router = ReactRouter.Router;

React.render(<Router routes={routes}/>, document.getElementById("app"));

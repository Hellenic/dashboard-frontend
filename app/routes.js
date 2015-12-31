var React = require('react');
var ReactRouter = require('react-router');
var ReactApp = require('./components/ReactApp');
var Dashboard = require('./components/Dashboard');
var NotFound = require('./components/NotFound');

var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = [
    <Route path="/" component={ReactApp}>
        <IndexRoute component={Dashboard} />
        <Route path="*" component={NotFound}/>
    </Route>
];

module.exports = routes;

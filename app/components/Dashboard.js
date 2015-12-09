'use strict';

var React = require('react');
var DashboardTemplate = require('./templates/Dashboard.rt.js');

var NewsWidget = require('./NewsWidget.js');
var LunchWidget = require('./LunchWidget.js');
var FlagDaysWidget = require('./FlagDaysWidget.js');

var Dashboard = React.createClass({
    getInitialState: function() {
        return {
            widgets: [ NewsWidget, LunchWidget, FlagDaysWidget ]
        };
    },
    componentDidMount: function() {
        // Do stuff on-load
        // e.g. Should get available components from localStorage
    },
    render: DashboardTemplate
});

module.exports = Dashboard;

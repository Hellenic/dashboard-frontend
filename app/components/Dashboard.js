'use strict';

var React = require('react');
var DashboardTemplate = require('./Dashboard.rt.js');

var NewsWidget = require('./widgets/NewsWidget/NewsWidget.js');
var LunchWidget = require('./widgets/LunchWidget/LunchWidget.js');
var FlagDaysWidget = require('./widgets/FlagDaysWidget/FlagDaysWidget.js');

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

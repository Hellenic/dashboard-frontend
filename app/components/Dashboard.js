'use strict';

var React = require('react');
var DashboardTemplate = require('./Dashboard.rt.js');

var NewsWidget = require('./widgets/NewsWidget/NewsWidget.js');
var LunchWidget = require('./widgets/LunchWidget/LunchWidget.js');
var FlagDaysWidget = require('./widgets/FlagDaysWidget/FlagDaysWidget.js');

var Dashboard = React.createClass({
  getInitialState: function() {
    // TODO Get this from localStorage
    return {
      widgets: [NewsWidget, LunchWidget, FlagDaysWidget],
      layout: [{ x: 0, y: 0, w: 2, h: 1, i: 1 }, { x: 2, y: 0, w: 2, h: 1, i: 2}, { x: 4, y: 0, w: 4, h: 2, i: 3}]
    };
  },
  componentDidMount: function() {

  },
  render: DashboardTemplate
});

module.exports = Dashboard;

'use strict';

var React = require('react');
var DashboardTemplate = require('./Dashboard.rt.js');

var NewsWidget = require('./widgets/NewsWidget/NewsWidget.js');
var LunchWidget = require('./widgets/LunchWidget/LunchWidget.js');
var FlagDaysWidget = require('./widgets/FlagDaysWidget/FlagDaysWidget.js');
var TodoListWidget = require('./widgets/TodoListWidget/TodoListWidget.js');

var Dashboard = React.createClass({
  getInitialState: function() {
    // TODO Get this from localStorage
    return {
      widgets: [NewsWidget, LunchWidget, FlagDaysWidget, TodoListWidget],
      layout: [{ x: 0, y: 0, w: 4, h: 3, i: 1 }, { x: 0, y: 4, w: 4, h: 3, i: 2}, { x: 5, y: 0, w: 8, h: 6, i: 3}, { x: 2, y: 7, w: 4, h: 3, i: 4}]
    };
  },
  render: DashboardTemplate
});

module.exports = Dashboard;

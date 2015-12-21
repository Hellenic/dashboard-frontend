'use strict';

var React = require('react');
var Storage = require('./utils/Storage');
var DashboardTemplate = require('./Dashboard.rt.js');
var WidgetManager = require('./core/WidgetManager');

/**
 * Dashboard component
 * Dashboard consists of different component and this class manages
 * the widgets and their layout.
 *
 * TODO Refactor, a bit too complex right now
 */
var Dashboard = React.createClass({
  // Default setup - used for the first startup
  getDefaultProps: function() {
    return {
      defaultWidgetIds: ['NewsWidget', 'SpecialDaysWidget', 'LunchWidget'],
      defaultLayout: [{ i: 1, x: 0, y: 0, w: 4, h: 3 }, { i: 2, x: 0, y: 4, w: 4, h: 3 }, { i: 3, x: 5, y: 0, w: 8, h: 6 }]
    }
  },
  // Initial state - either default or stored
  getInitialState: function() {
    var widgets = WidgetManager.getWidgetsByIds(Storage.load('widgets') || this.props.defaultWidgetIds);
    var layout = Storage.load('layout') || this.props.defaultLayout;
    var availableWidgets = WidgetManager.getAvailableWidgets(widgets);

    return {
      widgets: widgets,
      availableWidgets: availableWidgets,
      layout: layout
    };
  },
  // Store the layout after it's been saved
  onLayoutChange: function(e) {
    Storage.save('widgets', WidgetManager.getWidgetIds(this.state.widgets));
    Storage.save('layout', this.state.layout);
  },
  // Add a new widget
  onWidgetAdd: function(e, widget) {
    var nextIndex = this.state.layout.length+1;
    var defaultSpot = { i: nextIndex, x: 50, y: 50, w: 4, h: 4 };
    this.state.widgets.push(widget);
    this.state.layout.push(defaultSpot);
    var widgetIndex = this.state.availableWidgets.indexOf(widget);
    this.state.availableWidgets.splice(widgetIndex, 1);

    this.setState({
      widgets: this.state.widgets,
      availableWidgets: this.state.availableWidgets,
      layout: this.state.layout
    });
  },
  // Remove a widget
  onWidgetRemove: function(e, widgetId)
  {
    var widget = WidgetManager.getWidgetById(widgetId);
    var widgetIndex = this.state.widgets.indexOf(widget);
    this.state.widgets.splice(widgetIndex, 1);
    this.state.layout.splice(widgetIndex, 1);
    this.state.availableWidgets.push(widget);

    this.setState({
      widgets: this.state.widgets,
      availableWidgets: this.state.availableWidgets,
      layout: this.state.layout
    });
  },
  render: DashboardTemplate
});

module.exports = Dashboard;

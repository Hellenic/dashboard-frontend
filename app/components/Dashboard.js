'use strict';

var React = require('react');
var Storage = require('./utils/Storage');
var DashboardTemplate = require('./Dashboard.rt.js');
var Widgets = require('./widgets/Widgets');

var Dashboard = React.createClass({
  // Default setup - used for the first startup
  getDefaultProps: function() {
    return {
      widgets: Widgets,
      defaultWidgetIds: ['NewsWidget', 'FlagDaysWidget', 'LunchWidget'],
      defaultLayout: [{ i: 1, x: 0, y: 0, w: 4, h: 3 }, { i: 2, x: 0, y: 4, w: 4, h: 3 }, { i: 3, x: 5, y: 0, w: 8, h: 6 }]
    }
  },
  // Initial state - either default or stored
  getInitialState: function() {
    var widgets = getWidgetsForIds(Storage.load('widgets') || this.props.defaultWidgetIds);
    var layout = Storage.load('layout') || this.props.defaultLayout;
    var availableWidgets = getAvailableWidgets(widgets);

    return {
      widgets: widgets,
      availableWidgets: availableWidgets,
      layout: layout
    };
  },
  // Store the layout after it's been saved
  onLayoutChange: function(e) {
    Storage.save('widgets', getWidgetIds(this.state.widgets));
    Storage.save('layout', this.state.layout);
  },
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
  onWidgetRemove: function(e, widgetId)
  {
    var widget = getWidgetsForIds([ widgetId ])[0];
    this.state.widgets.splice(this.state.widgets.indexOf(widget), 1);
    this.state.availableWidgets.push(widget);
    // TODO Also remove the entry from layout
    this.setState({
      widgets: this.state.widgets,
      availableWidgets: this.state.availableWidgets,
      layout: this.state.layout
    });
  },
  render: DashboardTemplate
});

function getWidgetIds(widgets)
{
  var widgetIds = [];
  for (var i=0; i<widgets.length; i++)
  {
    var widget = widgets[i];
    widgetIds.push(widget.getDefaultProps().id);
  }

  return widgetIds;
}

function getAvailableWidgets(widgets)
{
  var availableWidgets = [];
  for (var key in Widgets)
  {
    var widget = Widgets[key];
    if (widgets.indexOf(widget) < 0)
    {
      availableWidgets.push(widget);
    }
  }

  return availableWidgets;
}

function getWidgetsForIds(ids)
{
  if (!ids)
  {
    return null;
  }

  var widgetlist = [];
  for (var key in Widgets)
  {
    var widget = Widgets[key];
    for (var j=0; j<ids.length; j++)
    {
      var id = ids[j];
      if (id === widget.getDefaultProps().id)
      {
        widgetlist.push(widget);
      }
    }
  }

  return widgetlist;
}

module.exports = Dashboard;

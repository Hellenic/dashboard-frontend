var Widgets = require('../widgets/Widgets');

var WidgetManager = {

  getWidgetsByIds: function(widgetIds)
  {
    if (!widgetIds)
    {
      return null;
    }

    var widgetlist = [];
    for (var i=0; i<widgetIds.length; i++)
    {
      var id = widgetIds[i];
      widgetlist.push(this.getWidgetById(id));
    }

    return widgetlist;
  },

  getWidgetById: function(widgetId)
  {
    if (!widgetId)
    {
      return null;
    }

    for (var key in Widgets)
    {
      var widget = Widgets[key];
      if (widgetId === widget.getDefaultProps().id)
      {
        return widget;
      }
    }

    return null;
  },

  getWidgetIds: function(widgets)
  {
    var widgetIds = [];
    for (var i=0; i<widgets.length; i++)
    {
      var widget = widgets[i];
      widgetIds.push(widget.getDefaultProps().id);
    }

    return widgetIds;
  },

  getAvailableWidgets: function(widgets)
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

};

module.exports = WidgetManager;

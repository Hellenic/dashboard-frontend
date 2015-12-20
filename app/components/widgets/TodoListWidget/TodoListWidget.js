'use strict';

var React = require('react');
var WidgetTemplate = require('./TodoListWidget.rt.js');

var TodoListWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'TodoListWidget'
    }
  },
  render: WidgetTemplate
});

module.exports = TodoListWidget;

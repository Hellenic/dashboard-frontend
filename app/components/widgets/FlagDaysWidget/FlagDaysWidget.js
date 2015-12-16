'use strict';

var React = require('react');
var Ajax = require('../../utils/Ajax');
var FlagDaysWidgetTemplate = require('./FlagDaysWidget.rt.js');

var FlagDaysWidget = React.createClass({
  getDefaultProps: function() {
    return {
      url: 'http://0.0.0.0:3000/api/FlagDays?filter[where][country]=Finland'
    };
  },
  getInitialState: function() {
    return {
      flagDays: [],
    };
  },
  handleResponse: function(data) {
    this.setState({ flagDays: data });
  },
  componentDidMount: function() {
    Ajax.get(this.props.url, this.handleResponse);
  },
  render: FlagDaysWidgetTemplate
});

module.exports = FlagDaysWidget;

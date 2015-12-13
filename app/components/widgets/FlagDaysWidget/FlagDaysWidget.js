'use strict';

var React = require('react');
var Ajax = require('../../utils/Ajax');
var FlagDaysWidgetTemplate = require('./FlagDaysWidget.rt.js');

var FlagDaysWidget = React.createClass({
  getInitialState: function() {
    return {
      flagDays: [],
    };
  },
  handleResponse: function(data) {
    this.setState({
      flagDays: data
    });
  },
  componentDidMount: function() {
    Ajax.get('http://0.0.0.0:3000/api/FlagDays?filter[where][country]=Finland', this.handleResponse);
  },
  render: FlagDaysWidgetTemplate
});

module.exports = FlagDaysWidget;

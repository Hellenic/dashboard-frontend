'use strict';

var React = require('react');
var moment = require('moment');
var Ajax = require('../../utils/Ajax');
var OpeningTimesWidgetTemplate = require('./OpeningTimesWidget.rt.js');

var OpeningTimesWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'OpeningTimesWidget',
      url: 'http://0.0.0.0:3000/api/Places'
    };
  },
  getInitialState: function() {
    return {
      places: []
    };
  },
  isToday: function(openingTime) {
    let day = moment().format('dddd');
    return (day == openingTime.weekday);
  },
  handleResponse: function(data) {
    this.setState({ places: data });
  },
  componentDidMount: function() {
    Ajax.get(this.props.url, this.handleResponse);
  },
  render: OpeningTimesWidgetTemplate
});

module.exports = OpeningTimesWidget;

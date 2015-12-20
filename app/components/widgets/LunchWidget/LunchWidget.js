'use strict';

var React = require('react');
var Ajax = require('../../utils/Ajax');
var LunchWidgetTemplate = require('./LunchWidget.rt.js');

var LunchWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'LunchWidget',
      url: 'http://0.0.0.0:3000/api/Restaurants'
    };
  },
  getInitialState: function() {
    return {
      nearbyPlaces: []
    };
  },
  handleResponse: function(data) {
    this.setState({ restaurants: data });
  },
  componentDidMount: function() {
    Ajax.get(this.props.url, this.handleResponse);
  },
  render: LunchWidgetTemplate
});

module.exports = LunchWidget;

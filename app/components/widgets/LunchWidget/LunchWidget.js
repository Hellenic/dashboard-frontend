'use strict';

var React = require('react');
var LunchWidgetTemplate = require('./LunchWidget.rt.js');

var LunchWidget = React.createClass({
  getNearbyPlaces: function() {
    return [
      {"name": "Restaurant #1", "menu": "Content of the menu."},
      {"name": "Restaurant #2", "menu": "Content of the menu #2."}
    ];
  },
  getInitialState: function() {
    return {
      nearbyPlaces: [],
      url: 'http://0.0.0.0:3000/api/Lunch'
    };
  },
  componentDidMount: function() {
    var places = this.getNearbyPlaces();
    this.setState({ nearbyPlaces: places });
  },
  render: LunchWidgetTemplate
});

module.exports = LunchWidget;

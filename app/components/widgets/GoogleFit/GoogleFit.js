'use strict';

var React = require('react');
var GoogleFitWidgetTemplate = require('./GoogleFit.rt.js');

var GoogleFitWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'GoogleFitWidget',
      apiurl: 'https://www.googleapis.com/fitness/v1/users/me/dataSources?key={YOUR_API_KEY}'
    }
  },
  getInitialState: function() {
    return {
    };
  },
  componentDidMount: function() {
    this.setState({ news: null });
  },
  render: GoogleFitWidgetTemplate
});

module.exports = GoogleFitWidget;

'use strict';

var React = require('react');
var SpotifyWidgetTemplate = require('./SpotifyWidget.rt.js');

var SpotifyWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'SpotifyWidget',
      uri: 'spotify:user:helletic:playlist:133Qn4eJmybjHbHLSttAJX'
    }
  },
  render: SpotifyWidgetTemplate
});

module.exports = SpotifyWidget;

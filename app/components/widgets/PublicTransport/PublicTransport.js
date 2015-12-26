'use strict';

var React = require('react');
var PublicTransportWidgetTemplate = require('./PublicTransport.rt.js');

var PublicTransportWidget = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'PublicTransportWidget',
      url: 'http://api.reittiopas.fi/hsl/beta/?request=stop&format=json&userhash=cd71775034a901560ff445b41d78203f43bc226fdb3f&code=2131551'
    }
  },
  handleResponse: function(stationData) {
    this.setState({
      station: stationData
    });
  },
  componentDidMount: function() {
    Ajax.get(this.props.url, this.handleResponse);
  },
  render: PublicTransportWidgetTemplate
});

module.exports = PublicTransportWidget;

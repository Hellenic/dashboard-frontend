'use strict';

var React = require('react');
var Ajax = require('../../utils/Ajax');
var PublicTransportWidgetTemplate = require('./PublicTransport.rt.js');

var PublicTransportWidget = React.createClass({
  getDefaultProps: function() {
    // Kilon juna-asema: 2131551
    // Kilon aseman bussipysäkki: 2132242
    return {
      id: 'PublicTransportWidget',
      url: 'http://api.reittiopas.fi/hsl/beta/?request=stop&format=json&userhash=cd71775034a901560ff445b41d78203f43bc226fdb3f&code=2131551'
    };
  },
  getInitialState: function() {
    return {
      station: {}
    };
  },
  handleResponse: function(responseText) {
    var stationData = JSON.parse(responseText)[0];
    stationData.departures = tidyDepartures(stationData.departures);
    this.setState({
      station: stationData
    });
  },
  componentDidMount: function() {
    Ajax.getPlain(this.props.url, this.handleResponse);
  },
  render: PublicTransportWidgetTemplate
});

function tidyDepartures(departures)
{
  departures.map(function(departure) {
    var time = new String(departure.time);
    departure.train = departure.code.charAt(4);
    departure.time = time.substring(0,2) +':'+ time.substring(2);
  });

  return departures;
}

module.exports = PublicTransportWidget;

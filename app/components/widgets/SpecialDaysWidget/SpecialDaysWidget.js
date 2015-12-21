'use strict';

var React = require('react');
var Ajax = require('../../utils/Ajax');
var SpecialDaysWidgetTemplate = require('./SpecialDaysWidget.rt.js');

var SpecialDaysWidget = React.createClass({
  getDefaultProps: function() {
    var BASE_URL = 'http://0.0.0.0:3000/api/SpecialDays';
    var fromDate = '2015-12-01', toDate = '2015-12-30';
    return {
      id: 'SpecialDaysWidget',
      url: BASE_URL+'?filter[where][country]=Finland&filter[where][date][between][0]='+ fromDate +'&filter[where][date][between][1]='+ toDate
    };
  },
  getInitialState: function() {
    return {
      days: [],
    };
  },
  handleResponse: function(data) {
    this.setState({ days: data });
  },
  componentDidMount: function() {
    Ajax.get(this.props.url, this.handleResponse);
  },
  render: SpecialDaysWidgetTemplate
});

module.exports = SpecialDaysWidget;

'use strict';

var React = require('react');
var moment = require('moment');
var Ajax = require('../../utils/Ajax');
var SpecialDaysWidgetTemplate = require('./SpecialDaysWidget.rt.js');

var SpecialDaysWidget = React.createClass({
  getDefaultProps: function() {
    var BASE_URL = 'http://0.0.0.0:3000/api/SpecialDays';
    var DATE_FORMAT = 'YYYY-MM-DD';
    var filters = [
      'filter[where][country]=Finland',
      'filter[where][date][between][0]='+ moment().format(DATE_FORMAT),
      'filter[where][date][between][1]='+ moment().add(7, 'days').format(DATE_FORMAT)
    ];
    return {
      id: 'SpecialDaysWidget',
      url: BASE_URL +'?'+ filters.join('&')
    };
  },
  getInitialState: function() {
    return {
      days: [],
    };
  },
  formatDate: function(date, format) {
    return moment(date).format(format);
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

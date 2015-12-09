'use strict';

var React = require('react');
var FlagDaysWidgetTemplate = require('./templates/FlagDaysWidget.rt.js');
var FinnishFlagDaysData = require('../data/Liputuspäivät.json');

// http://www.webcal.fi/cal.php?id=2&format=json&start_year=current_year&end_year=current_year&tz=Europe%2FHelsinki

var FlagDaysWidget = React.createClass({
  getInitialState: function() {
    return {
      flagDays: FinnishFlagDaysData
    };
  },
  render: FlagDaysWidgetTemplate
});

module.exports = FlagDaysWidget;
